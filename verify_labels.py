#!/usr/bin/env python3
"""verify_labels.py — check catalog entries against the live source.

For each entry (all of them that match the filter, not a sample):
  1. the URL downloads (HTTP 200) and the bytes are the claimed file type
  2. the exact URL is still linked on the entry's source page (and what the link says)
  3. the entry's YEAR appears in the file's content, its URL, the link text, or the page URL
  4. the entry's NAME (its distinctive words) appears in the file's content, the link text,
     or the file name

It reports what it could not confirm. "Not confirmed" is not "wrong": a data file may
carry no year anywhere, so each flag needs a human look. Nothing is edited.

Usage:
  python verify_labels.py --added 2026-11-09          # everything added that day
  python verify_labels.py --ids id1 id2 ...           # specific entries
  python verify_labels.py --sample 50 --seed 1        # random sample of the filtered set
Output: verify_report.md (flags only) and a one-line summary; exit 1 if anything is flagged.
"""
from __future__ import annotations

import argparse
import concurrent.futures as cf
import io
import logging
import random
import re
import sys
import urllib.parse
from pathlib import Path

import requests
import yaml

HERE = Path(__file__).parent
logging.getLogger("pdfminer").setLevel(logging.ERROR)
logging.getLogger("pypdf").setLevel(logging.ERROR)
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"}
GENERIC = {"school", "schools", "elementary", "high", "middle", "pcs", "pchs", "public", "charter", "academy",
           "campus", "education", "the", "of", "and", "at", "for", "report", "reports", "data", "dcps", "osse",
           "pcsb", "dme", "year", "file", "attachment", "final", "draft", "tables", "table", "sy", "fy"}


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9 ]", "", s.lower().replace("-", " ").replace("_", " "))


def year_tokens(y: str) -> set[str]:
    y = str(y)
    toks = {y}
    m = re.match(r"^(\d{4})-(\d{2})$", y)
    if m:
        a, b = m.groups()
        toks |= {a, a[:2] + b, f"{a[2:]}-{b}", f"SY{a[2:]}-{b}", f"SY {a}-{a[:2]}{b}", f"{a}-{a[:2]}{b}", f"FY{b}", f"FY{a[2:]}"}
    elif re.match(r"^\d{4}$", y):
        toks |= {f"FY{y[2:]}", f"SY{y[2:]}"}
    return {t for t in toks if t}


_pages: dict[str, str] = {}


def page_html(url: str) -> str:
    if url not in _pages:
        try:
            _pages[url] = requests.get(url, headers=UA, timeout=40).text
        except requests.RequestException:
            _pages[url] = ""
    return _pages[url]


def anchor_text(page: str, file_url: str):
    h = page_html(page)
    target = urllib.parse.unquote(file_url).split("://")[-1].lower()
    for m in re.finditer(r'<a[^>]*href="([^"]+)"[^>]*>(.*?)</a>', h, re.S):
        href = urllib.parse.unquote(urllib.parse.urljoin(page, m.group(1).replace("&amp;", "&"))).split("://")[-1].lower()
        if href == target:
            return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", m.group(2)).replace("&nbsp;", " ")).strip()
    return None


def content_text(kind: str, body: bytes) -> str:
    try:
        if kind == "pdf":
            from pypdf import PdfReader
            rd = PdfReader(io.BytesIO(body))
            return " ".join((rd.pages[i].extract_text() or "") for i in range(min(3, len(rd.pages))))
        if kind == "xlsx":
            import openpyxl
            wb = openpyxl.load_workbook(io.BytesIO(body), read_only=True, data_only=True)
            out = [" ".join(wb.sheetnames)]
            for ws in wb.worksheets[:5]:
                for i, row in enumerate(ws.iter_rows(values_only=True)):
                    if i > 60:
                        break
                    out.append(" ".join(str(c) for c in row if c is not None))
            return " ".join(out)
    except Exception:  # noqa: BLE001 — unreadable: report as "no content", not a crash
        return ""
    return ""


def check(f: dict) -> dict:
    r = {"id": f["id"], "flags": []}
    try:
        resp = requests.get(f["url"], headers=UA, timeout=120)
    except requests.RequestException as e:
        r["flags"].append(f"download failed: {type(e).__name__}")
        return r
    if resp.status_code != 200:
        r["flags"].append(f"HTTP {resp.status_code}")
        return r
    b = resp.content
    sig_ok = {"pdf": b[:4] == b"%PDF", "xlsx": b[:2] == b"PK", "xls": b[:2] == b"\xd0\xcf", "csv": True}.get(f["kind"], True)
    if not sig_ok:
        r["flags"].append(f"bytes are not a {f['kind']}")
    link = anchor_text(f["page"], f["url"]) if f.get("page") else None
    r["link"] = link
    if f.get("page") and link is None:
        r["flags"].append("URL not linked on its source page now")
    txt = content_text(f["kind"], b)
    hay = " ".join([txt, link or "", urllib.parse.unquote(f["url"]), f.get("page", "")])
    y = str(f.get("year", ""))
    if y and y != "unknown" and not any(re.search(r"(?<![0-9a-z])" + re.escape(t.lower()) + r"(?![0-9a-z])", hay.lower()) for t in year_tokens(y)):
        r["flags"].append(f"year {y} not found in content/url/link text/page url")
    label = f["name"].split(" — ")[-1]
    toks = [w for w in norm(label).split() if w not in GENERIC and len(w) > 2 and not w.isdigit()]
    hay_n = norm(" ".join([txt, link or "", urllib.parse.unquote(f["url"]).rsplit("/", 1)[-1]]))
    if toks:
        hit = sum(w in hay_n for w in toks)
        if hit < max(1, (len(toks) + 1) // 2):
            r["flags"].append(f"name words found {hit}/{len(toks)}: {toks}")
    return r


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--added")
    ap.add_argument("--ids", nargs="*")
    ap.add_argument("--sample", type=int)
    ap.add_argument("--seed", type=int, default=1)
    ap.add_argument("--workers", type=int, default=8)
    a = ap.parse_args()
    d = yaml.safe_load((HERE / "data_files.yaml").read_text())["data_files"]
    if a.added:
        d = [f for f in d if str(f.get("added")) == a.added]
    if a.ids:
        d = [f for f in d if f["id"] in set(a.ids)]
    if a.sample and a.sample < len(d):
        random.Random(a.seed).shuffle(d)
        d = d[: a.sample]
    by_id = {f["id"]: f for f in d}
    with cf.ThreadPoolExecutor(a.workers) as ex:
        res = list(ex.map(check, d))
    flagged = [r for r in res if r["flags"]]
    lines = [f"# Label check: {len(res)} entries checked, {len(flagged)} flagged\n"]
    for r in flagged:
        f = by_id[r["id"]]
        lines.append(f"- `{r['id']}` — {f['name']} (year {f.get('year')})\n  - link text: {r.get('link')!r}\n  - " + "\n  - ".join(r["flags"]))
    (HERE / "verify_report.md").write_text("\n".join(lines) + "\n")
    print(f"checked={len(res)} flagged={len(flagged)}")
    return 1 if flagged else 0


if __name__ == "__main__":
    sys.exit(main())
