#!/usr/bin/env python3
"""
add_harvested_files.py — turn a Playwright link harvest into data_files.yaml rows.

The hub pages (OSSE Resource Library, My School DC lottery, …) list dozens of
files with wildly inconsistent names. Harvest the links in a browser (see the
update-dc-schools-data skill), save them as JSON, then run this to append clean
entries to data_files.yaml — names, year, and topics inferred, URLs deduped
against what's already there.

Harvest JSON shape: a list (or {"links": [...]}) of {"section", "text", "href"}.

Usage:
    python add_harvested_files.py harvest/myschooldc_harvest.json \\
        --source-id myschooldc-lottery --id-prefix msdc
"""
from __future__ import annotations

import argparse
import json
import re
import os
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent
DATA_FILES = ROOT / "data_files.yaml"

# keyword -> topic. A file can collect several topics.
TOPIC_RULES = [
    (r"lottery|applicant|application|waitlist|match rate|seats|school selection|seats offered", "lottery"),
    (r"aggregate enrollment|enrollment data|enrollment metric|enrollment by|by grade", "enrollment"),
    (r"demographic|preferred language|\blanguage\b|race|ethnicity", "demographics"),
    (r"assessment|dc cape|msaa|\bela\b|\bmath\b|science|growth|proficien", "assessment"),
    (r"ap ib|advanced coursework|\bsat\b", "advanced-coursework"),
    (r"attendance|truancy|absentee", "attendance"),
    (r"discipline|suspension|expulsion", "discipline"),
    (r"graduation|college enrollment|acgr", "graduation"),
    (r"finance|per-pupil|per pupil|expenditure|financial reporting|spending|budget", "finance"),
    (r"educator|teacher|school leader", "educators"),
    (r"student movement|mobility", "student-movement"),
    (r"boundary|feeder|in-boundary|attendance zone", "boundaries"),
    (r"facilit|capacity|utilization|modernization", "facilities"),
    (r"dc says|class score|class -|learning environment|survey", "school-climate"),
    (r"accountability|summative|floors and targets|long term goal|star framework", "accountability"),
    (r"directory|course catalog|profile", "profiles"),
    (r"data dictionary|\bmcc\b|metric calculation|methodology", "methodology"),
]

UNINFORMATIVE = {"click here.", "click here", "here", "download", "data", "link", ""}


def is_file_url(href: str) -> bool:
    path = urlsplit(href).path.lower()
    if path.endswith((".pdf", ".xlsx", ".xls", ".csv")):
        return True
    return "box_download_shared_file" in href or "box.com/s/" in href


def pretty_from_filename(href: str) -> str:
    stem = unquote(os.path.basename(urlsplit(href).path))
    stem = re.sub(r"\.(pdf|xlsx|xls|csv)$", "", stem, flags=re.I)
    stem = re.sub(r"^SY\d{2}[_-]?\d{2}[_-]?", "", stem, flags=re.I)   # SY23_24_ prefix
    stem = re.sub(r"^\d{4}[_-]", "", stem)                            # 2016- / 2014_ prefix
    stem = re.sub(r"^(L|R\d)[_-]", "", stem)                          # round markers
    stem = stem.replace("_", " ").replace("-", " ")
    stem = re.sub(r"\s+", " ", stem).strip()
    return stem[:80] or "file"


def build_name(text: str, section: str, href: str) -> str:
    if text.lower().strip() in UNINFORMATIVE or re.fullmatch(r"\d{4}", text.strip()):
        pretty = pretty_from_filename(href)
        return f"{section} — {pretty}" if section else pretty
    return text


def infer_topics(text: str) -> list[str]:
    low = text.lower()
    topics = []
    for pattern, topic in TOPIC_RULES:
        if re.search(pattern, low) and topic not in topics:
            topics.append(topic)
    return topics or ["other"]


def infer_year(section: str, text: str, href: str) -> str:
    for s in (text, section):                       # explicit year label wins
        m = re.search(r"\b(20\d{2})\b", s.replace("\xa0", " "))
        if m:
            return m.group(1)
    m = re.search(r"SY(\d{2})[_-]?(\d{2})", href, re.I)   # SY23_24 -> 2023-24
    if m:
        return f"20{m.group(1)}-{m.group(2)}"
    m = re.search(r"\b(20\d{2})\b", href)
    return m.group(1) if m else "unknown"


def infer_kind(href: str) -> str:
    path = urlsplit(href).path.lower()
    if "box.com" in href:
        return "xlsx"
    if path.endswith(".csv"):
        return "csv"
    if path.endswith(".xls"):
        return "xls"
    if path.endswith(".pdf"):
        return "pdf"
    return "xlsx"


def slugify(text: str, year: str) -> str:
    base = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    base = re.sub(r"-(metric|scores|data|file|dc|school|report|card|lottery)-", "-", base)
    return f"{base}-{year}"[:70].strip("-")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("harvest_json")
    ap.add_argument("--source-id", required=True)
    ap.add_argument("--id-prefix", required=True)
    args = ap.parse_args()

    raw = json.loads(Path(args.harvest_json).read_text())
    links = raw["links"] if isinstance(raw, dict) else raw
    existing = DATA_FILES.read_text()

    rows, seen_ids, added, skipped, nonfile = [], set(), 0, 0, 0
    for link in links:
        href, text, section = link["href"], link.get("text", ""), link.get("section", "")
        if not is_file_url(href):
            nonfile += 1
            continue
        if href in existing:
            skipped += 1
            continue
        name = build_name(text, section, href)
        year = link.get("year") or infer_year(section, text, href)
        fid = f"{args.id_prefix}-{slugify(name, year)}"
        n = 2
        while fid in seen_ids:
            fid = f"{args.id_prefix}-{slugify(name, year)}-{n}"
            n += 1
        seen_ids.add(fid)
        topics = "[" + ", ".join(infer_topics(name + " " + section)) + "]"
        # optional per-file hosting page (overrides the source's page) — used when
        # one dataset's years live on different pages
        page_line = f"    page: {json.dumps(link['page'])}\n" if link.get("page") else ""
        rows.append(
            f"  - id: {fid}\n"
            f"    source_id: {args.source_id}\n"
            f"    name: {json.dumps(name)}\n"
            f"    url: {json.dumps(href)}\n"
            f"    kind: {infer_kind(href)}\n"
            f"    year: {json.dumps(year)}\n"
            f"{page_line}"
            f"    topics: {topics}\n"
        )
        added += 1

    if rows:
        block = (f"\n  # ---- Harvested from {args.source_id} "
                 f"({added} files) ----\n" + "\n".join(rows))
        with DATA_FILES.open("a") as fh:
            fh.write(block)

    print(f"Added {added}, skipped {skipped} already present, "
          f"ignored {nonfile} non-file links. data_files.yaml updated.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
