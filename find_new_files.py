#!/usr/bin/env python3
"""find_new_files.py — look for DATA files on the source pages that aren't in the catalog.

refresh.sh / profile_files.py only re-download URLs we already know, so a new
school year (or a new EdScape release at a new URL) is invisible to them. This
script closes that gap. It never edits data_files.yaml; it writes new_files.md
for a person to review (add with add_harvested_files.py or by hand).

What counts as data (the catalog is data only, not documents):
  * .xlsx / .xls / .csv / .zip  -> always a candidate
  * .pdf                        -> candidate only if it carries real extractable
                                   tables (same pdfplumber test as the profiler)
                                   AND its name isn't obviously a document
                                   (questionnaire, guide, plan, letter, ...)

Reviewed-and-declined URLs go in discovery_ignore.txt (one URL per line) so they
aren't re-flagged every week.

Coverage and its limits (printed at the end of every run):
  * Reads each source page, then follows same-host /page/ /publication/ links up
    to DEPTH levels (capped at MAX_PAGES), so year-specific pages are reached.
  * Sources that refuse plain HTTP (PCSB, DCPS Fast Facts, DC Policy Center
    return 403) CANNOT be checked here; they are listed as "not checked" so the
    gap is visible. Those need the browser harvest (update-dc-schools-data).

Usage: python find_new_files.py            # writes new_files.md, exit 0
       python find_new_files.py --no-pdf   # skip PDF table checks (fast)
"""
from __future__ import annotations

import argparse
import os
import logging
import concurrent.futures as cf
import re
import sys
import tempfile
import urllib.parse
from pathlib import Path

import requests
import json
import yaml

HERE = Path(__file__).parent
logging.getLogger("pdfminer").setLevel(logging.ERROR)
# A real browser UA: some publishers (PCSB) serve a different page to other agents.
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"}
DEPTH = 2
MIN_COVERAGE = float(os.environ.get("MIN_COVERAGE", "75"))  # tripwire: if the crawl re-finds fewer known files than this %, the crawl itself is broken.
# It is NOT a 100% target: publishers drop links to superseded years, so some known files are legitimately unlinked.
MAX_PAGES = int(os.environ.get("MAX_PAGES", "6000"))
MAX_PDF_BYTES = 25 * 1024 * 1024
PDF_BUDGET = int(os.environ.get("PDF_BUDGET", "150"))  # PDF table checks per run; the rest wait for next week
CACHE = HERE / "discovery_pdf_checked.json"
PDF_WORKERS = int(os.environ.get("PDF_WORKERS", "6"))
STATE = HERE / "discovery_state.json"  # last run's coverage, to catch a sudden drop (committed by the workflow)
MAX_DROP = float(os.environ.get("MAX_COVERAGE_DROP", "5"))  # points below the previous run that count as a broken crawl
DATA_EXT = re.compile(r"\.(xlsx?|csv|zip)$", re.I)
PDF_EXT = re.compile(r"\.pdf$", re.I)
FOLLOW = re.compile(r"/(page|publication|service|featured-content)/")
# Names that are documents, not data. Matched against the file name only.
DOC_NAME = re.compile(
    r"questionnaire|technical guide|user guide|guide|letter|playbook|policy|training|"
    r"infographic|sample|research agenda|mission and vision|strategic plan|essa plan|"
    r"amendment|approval|public comments|waiver|addendum|presentation|bills-|"
    r"fact ?sheet|survey_|panorama|spanish|amharic|arabic|chinese|korean|vietnamese|"
    r"french|russian|mandarin",
    re.I,
)


def norm(url: str) -> str:
    return urllib.parse.unquote(url).split("?")[0].split("#")[0].split("://")[-1].lower()


def get(url: str, session: requests.Session):
    try:
        r = session.get(url, headers=UA, timeout=30)
        return r.text if r.status_code == 200 else None
    except requests.RequestException:
        return None


def links(html: str, base: str):
    for m in re.finditer(r'<a[^>]*href="([^"]+)"', html, re.I):
        href = m.group(1).replace("&amp;", "&")
        if href.startswith(("mailto:", "javascript:", "tel:")):
            continue
        yield urllib.parse.urljoin(base, href).split("#")[0]


LISTING_HOSTS = ("osse.dc.gov", "dme.dc.gov", "dcps.dc.gov")  # Drupal sites: no sitemap, but /publications is paginated
LISTING_MAX = 400


def listing_seeds(host: str, session: requests.Session) -> set[str]:
    """Every publication page on a Drupal host, by walking /publications?page=N.

    Stops after two consecutive pages that add no new publication link (the sidebar
    repeats on every page, so "any link" would never terminate)."""
    found: set[str] = set()
    empty = 0
    for n in range(LISTING_MAX):
        url = f"https://{host}/publications?page={n}"
        html = get(url, session)
        new = set()
        if html:
            new = {u for u in links(html, url) if "/publication/" in u and urllib.parse.urlparse(u).netloc == host} - found
        if not new:
            empty += 1
            if empty >= 2:
                break
        else:
            empty = 0
            found |= new
    return found


def sitemap_seeds(host: str, session: requests.Session, cap: int = 3000) -> set[str]:
    """Page URLs from /sitemap.xml (following a sitemap index one level)."""
    def locs(xml):
        return re.findall(r"<loc>\s*([^<\s]+)\s*</loc>", xml or "")
    top = get(f"https://{host}/sitemap.xml", session)
    out: set[str] = set()
    for u in locs(top):
        if u.endswith(".xml"):
            if re.search(r"(page|post|focus|publication|resource|news)", u):  # skip jobs, board meetings, etc.
                out |= set(locs(get(u, session)))
        else:
            out.add(u)
        if len(out) >= cap:
            break
    return {u for u in out if urllib.parse.urlparse(u).netloc == host and not u.endswith(".xml")}


def crawl(sources):
    """Return ({file_url: page_it_was_on}, [source ids that could not be fetched], pages_read, seeds)."""
    session = requests.Session()
    files: dict[str, str] = {}
    unchecked: list[str] = []
    seen: set[str] = set()
    work: list[tuple[str, int]] = []  # (url, depth)
    for s in sources:
        html = get(s["url"], session)
        if html is None:
            unchecked.append(s["id"])
            continue
        seen.add(s["url"])
        work.append((s["url"], 0))
        # Source pages are already fetched; re-fetching them below is cheap and keeps one code path.
        seen.discard(s["url"])
    src_hosts = {urllib.parse.urlparse(s["url"]).netloc for s in sources}
    seeds: dict[str, int] = {}
    with cf.ThreadPoolExecutor(6) as ex:
        futs = {h: ex.submit(listing_seeds, h, session) for h in LISTING_HOSTS if h in src_hosts}
        futs.update({h: ex.submit(sitemap_seeds, h, session) for h in ("dcpcsb.org", "www.dcpolicycenter.org") if h in src_hosts})
        for h, f in futs.items():
            try:
                got = f.result()
            except Exception:  # noqa: BLE001 — a failed seed must not kill the run
                got = set()
            seeds[h] = len(got)
            work += [(u, 1) for u in sorted(got)]
    while work and len(seen) < MAX_PAGES:
        batch = []
        for u, d in work:
            if u not in seen and len(seen) + len(batch) < MAX_PAGES:
                seen.add(u)
                batch.append((u, d))
        work = []
        with cf.ThreadPoolExecutor(12) as ex:
            htmls = list(ex.map(lambda ud: get(ud[0], session), batch))
        for (page, depth), html in zip(batch, htmls):
            if not html:
                continue
            host = urllib.parse.urlparse(page).netloc
            for u in links(html, page):
                path = u.split("?")[0]
                if DATA_EXT.search(path) or PDF_EXT.search(path):
                    files.setdefault(u, page)
                elif (depth < DEPTH and u not in seen and FOLLOW.search(u)
                      and urllib.parse.urlparse(u).netloc == host):
                    work.append((u, depth + 1))
    return files, unchecked, len(seen), seeds


def pdf_has_tables(url: str) -> bool | None:
    """True/False, or None if it couldn't be downloaded or read."""
    sys.path.insert(0, str(HERE))
    from profile_files import profile_pdf  # noqa: E402
    try:
        r = requests.get(urllib.parse.quote(url, safe=":/%?=&"), headers=UA, timeout=90, stream=True)
        if r.status_code != 200 or int(r.headers.get("content-length", 0)) > MAX_PDF_BYTES:
            return None
        with tempfile.TemporaryDirectory() as td:
            p = Path(td) / "f.pdf"
            p.write_bytes(r.content)
            return bool(profile_pdf(p).get("has_tabular_data"))
    except Exception:  # noqa: BLE001 — unreadable PDF: report as unknown, not as "no data"
        return None


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--no-pdf", action="store_true")
    args = ap.parse_args()

    srcs = yaml.safe_load((HERE / "sources.yaml").read_text())["sources"]
    have = {norm(f["url"]) for f in yaml.safe_load((HERE / "data_files.yaml").read_text())["data_files"]}
    ign = HERE / "discovery_ignore.txt"
    ignored = {norm(l.strip()) for l in ign.read_text().splitlines()
               if l.strip() and not l.startswith("#")} if ign.exists() else set()

    files, unchecked, n_pages, seeds = crawl(srcs)
    catalog_urls = [f["url"] for f in yaml.safe_load((HERE / "data_files.yaml").read_text())["data_files"]]
    hosts = {urllib.parse.urlparse(u).netloc for u in catalog_urls} | {
        urllib.parse.urlparse(s["url"]).netloc for s in srcs}
    seen_norm = {norm(u) for u in files}
    if os.environ.get("SHOW_UNSEEN"):
        import collections
        c = collections.Counter(urllib.parse.urlparse(u).netloc for u in catalog_urls if norm(u) not in seen_norm)
        print("unseen catalogued files by host:", dict(c))
    # Self-check: of files we ALREADY catalogue, how many did this crawl see again?
    # Low coverage means the crawl is missing parts of the sites, so "nothing new"
    # can't be trusted for those.
    # Box/Egnyte and ArcGIS Open Data links are tokens / JS-built URLs that no page crawl
    # can re-find, so they're reported separately and don't count against the floor.
    OPAQUE = ("app.box.com", "egnyte.com", "opendata.dc.gov/api/download")
    crawlable = [u for u in catalog_urls if not any(h in u for h in OPAQUE)]
    unseen = [u for u in crawlable if norm(u) not in seen_norm]
    cov_total, cov_seen = len(crawlable), len(crawlable) - len(unseen)
    n_opaque = len(catalog_urls) - len(crawlable)
    cov_pct = 100 * cov_seen / max(cov_total, 1)
    new = {u: p for u, p in files.items()
           if norm(u) not in have and norm(u) not in ignored and not u.startswith("http://ttps")
           and urllib.parse.urlparse(u).netloc in hosts}

    data, pdfs, skipped_docs, unknown, pending = {}, {}, [], [], []
    checked = json.loads(CACHE.read_text()) if CACHE.exists() else {}
    budget = PDF_BUDGET
    DATA_HINT = re.compile(r"data|stats|statistic|results|enrollment|attendance|audit|scores?|tables?|allocation|profile|summary|counts?|rates?|report|dashboard|roster|list", re.I)
    order = sorted(new.items(), key=lambda kv: (not DATA_HINT.search(urllib.parse.unquote(kv[0]).rsplit("/", 1)[-1]), kv[0]))
    # Table-check the uncached PDFs in parallel (pdfplumber is CPU-bound), up to the budget.
    # Results land in `checked`, so the loop below only reads the cache.
    if not args.no_pdf and budget > 0:
        need = [u for u, _ in order
                if not DATA_EXT.search(u.split("?")[0]) and not DOC_NAME.search(urllib.parse.unquote(u).rsplit("/", 1)[-1])
                and norm(u) not in checked][:budget]
        if need:
            import concurrent.futures as _cf
            done = 0
            with _cf.ProcessPoolExecutor(max_workers=PDF_WORKERS) as ex:
                for u, t in zip(need, ex.map(pdf_has_tables, need, chunksize=1)):
                    if t is not None:
                        checked[norm(u)] = t
                    done += 1
                    if done % 200 == 0:
                        print(f"  table-checked {done}/{len(need)}", file=sys.stderr, flush=True)
                        CACHE.write_text(json.dumps(checked, indent=0, sort_keys=True))  # survive an interrupted run
            budget = 0
    for u, page in order:
        name = urllib.parse.unquote(u).rsplit("/", 1)[-1]
        if DATA_EXT.search(u.split("?")[0]):
            data[u] = page
        elif DOC_NAME.search(name):
            skipped_docs.append(u)
        elif args.no_pdf:
            pdfs[u] = page
        else:
            key = norm(u)
            if key in checked:
                t = checked[key]
            elif budget > 0:
                budget -= 1
                t = pdf_has_tables(u)
                if t is not None:
                    checked[key] = t
            else:
                pending.append(u)
                continue
            if t:
                pdfs[u] = page
            elif t is None:
                unknown.append(u)
            else:
                skipped_docs.append(u)

    out = ["# New data files found on source pages (not in the catalog)\n"]
    out.append(f"Pages read: {n_pages} (cap {MAX_PAGES}). Files seen: {len(files)}.\n")
    out.append(f"Seeds (pages listed up front): {seeds}\n")
    out.append(f"**Crawl coverage check:** {cov_seen} of {cov_total} crawlable catalogued files were seen "
               f"again on the crawled pages ({cov_pct:.1f}%; floor {MIN_COVERAGE:.0f}%; alerts on a drop of more than "
               f"{MAX_DROP:.0f} points from the previous run). A file we already "
               "have that the crawl can't re-find means a new file in the same place could be missed too. "
               f"{n_opaque} Box/Egnyte/ArcGIS files can't be re-found by any page crawl and are excluded; "
               "they need the browser harvest. Some unseen files are simply no longer linked "
               "(publishers drop links to superseded years), so this is a tripwire, not a 100% target.\n")
    if unseen:
        out.append(f"<details><summary>{len(unseen)} catalogued files the crawl did not see</summary>\n")
        out += [f"- {urllib.parse.unquote(u)}" for u in unseen[:300]] + ["\n</details>\n"]
    for title, d in (("Spreadsheets / CSVs (data)", data), ("PDFs with extractable tables", pdfs)):
        out.append(f"## {title}: {len(d)}\n")
        out += [f"- {urllib.parse.unquote(u)}\n  - found on {p}" for u, p in d.items()]
        out.append("")
    if unknown:
        out.append(f"## PDFs that could not be downloaded or read: {len(unknown)}\n")
        out += [f"- {urllib.parse.unquote(u)}" for u in unknown] + [""]
    if pending:
        out.append(f"## PDFs not yet table-checked: {len(pending)}\n\nThe per-run budget "
                   f"({PDF_BUDGET}) was used up; these are checked on later runs (results are cached in "
                   "discovery_pdf_checked.json).\n")
    out.append("## Not checked (page refused plain HTTP; needs the browser harvest)\n")
    out += [f"- {s}" for s in unchecked] or ["- none"]
    out.append(f"\nNot flagged: {len(skipped_docs)} PDFs that look like documents (no tables, "
               "or a guide/questionnaire/translation name). Add any you want to "
               "data_files.yaml by hand.\n")
    CACHE.write_text(json.dumps(checked, indent=0, sort_keys=True))
    (HERE / "new_files.md").write_text("\n".join(out))
    print(f"coverage={cov_seen}/{cov_total} ({cov_pct:.1f}%) data={len(data)} pdf_with_tables={len(pdfs)} unreadable={len(unknown)} "
          f"pdf_pending={len(pending)} not_checked_sources={len(unchecked)} docs_skipped={len(skipped_docs)}")
    prev = None
    try:
        prev = json.loads(STATE.read_text()).get("coverage_pct")
    except (OSError, ValueError):
        pass
    bad = []
    if cov_pct < MIN_COVERAGE:
        bad.append(f"COVERAGE_BELOW_FLOOR {cov_pct:.1f}% < {MIN_COVERAGE:.0f}%")
    if prev is not None and prev - cov_pct > MAX_DROP:
        bad.append(f"COVERAGE_DROPPED {prev:.1f}% -> {cov_pct:.1f}% (more than {MAX_DROP:.0f} points since the last run)")
    # Record this run either way, so one bad week doesn't become next week's baseline silently:
    # keep the higher of (previous, now) while a drop is unresolved.
    keep = max(cov_pct, prev) if (prev is not None and bad) else cov_pct
    STATE.write_text(json.dumps({"coverage_pct": round(keep, 1), "last_run_pct": round(cov_pct, 1)}, indent=1))
    if bad:
        for b in bad:
            print(b, file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
