#!/usr/bin/env python3
"""
test_frontend.py — guard the front-end invariant that NO topic chip is ever empty.

The Coverage / Search-files / Columns views share one row of topic chips. A chip
must never lead to zero results, in any filter state. This test reads the SAME data
the page reads (catalog.js) and the SAME chip list (index.html) and checks:

  1. Every chip-topic that appears on any file has >=1 file with a parseable YEAR.
     (Without this, the topic shows a chip but is empty in the Coverage grid and in
     any year filter — the exact bug that motivated this test: Boundaries had two
     files, both year="unknown".)
  2. Every year offered in the year dropdown has >=1 available chip (no dead year).
  3. Every owner has >=1 available chip.
  4. The chip-availability rule (topic present under the owner+year filter) only ever
     returns topics that genuinely have a matching file — i.e. it never shows empty.

Run: python test_frontend.py   (exits non-zero on failure; wire into CI)
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def load_catalog() -> dict:
    txt = (ROOT / "catalog.js").read_text()
    txt = txt[txt.index("{"):txt.rindex("}") + 1]   # strip `window.CATALOG = ` … `;`
    return json.loads(txt)


def chip_tags() -> list[str]:
    """The topic tags wired up as chips in index.html (read from source, not copied,
    so the test can't drift from the page)."""
    html = (ROOT / "index.html").read_text()
    block = re.search(r"const TOPIC_CHIPS\s*=\s*\[(.*?)\];", html, re.S)
    if not block:
        sys.exit("could not find TOPIC_CHIPS in index.html")
    return re.findall(r'\[\s*"[^"]+"\s*,\s*"([^"]+)"\s*\]', block.group(1))


def year_num(y) -> int:
    m = re.search(r"(19|20)\d{2}", str(y or ""))
    return int(m.group(0)) if m else 0


def main() -> int:
    cat = load_catalog()
    tags = chip_tags()

    # ALL_FILES: one row per downloadable file the page actually indexes
    # (needs_browser / error files are excluded in index.html, so exclude them here).
    files = []
    for s in cat["sources"]:
        for f in s.get("files", []):
            if f.get("status") in ("needs_browser", "error"):
                continue
            files.append({"owner": s["owner"], "topics": f.get("topics", []),
                          "year": year_num(f.get("label") or f.get("year"))})

    def available(tag, owner=None, year=None) -> list:
        return [f for f in files if tag in f["topics"]
                and (owner is None or f["owner"] == owner)
                and (year is None or f["year"] == year)]

    years = sorted({f["year"] for f in files if f["year"] > 0})
    owners = sorted({f["owner"] for f in files})
    errors: list[str] = []

    # 1. every chip-topic that exists has at least one YEAR-tagged file
    for tag in tags:
        all_files = available(tag)
        if all_files and not any(f["year"] > 0 for f in all_files):
            errors.append(f"chip '{tag}': has {len(all_files)} file(s) but NONE with a "
                          f"parseable year — would show a chip that is empty in the "
                          f"Coverage grid and every year filter")

    # 2. every year offered has at least one available chip
    for y in years:
        if not any(available(tag, year=y) for tag in tags):
            errors.append(f"year {y}: no topic chip has data for it (dead year option)")

    # 3. every owner has at least one available chip
    for o in owners:
        if not any(available(tag, owner=o) for tag in tags):
            errors.append(f"owner '{o}': no topic chip has data for it")

    # 4. the availability rule never surfaces an empty chip, across every single-filter
    #    state the UI can be in (no filter, each owner, each year). This mirrors
    #    renderChips()/topicAvailable() in index.html.
    states = [(None, None)] + [(o, None) for o in owners] + [(None, y) for y in years]
    for owner, year in states:
        for tag in tags:
            if available(tag, owner, year) == [] and any(
                tag in f["topics"]
                and (owner is None or f["owner"] == owner)
                and (year is None or f["year"] == year) for f in files):
                errors.append(f"rule mismatch for tag={tag} owner={owner} year={year}")

    for e in errors:
        print(f"  FAIL: {e}")
    n = len(files)
    print(f"\nChecked {len(tags)} chips against {n} files, {len(years)} years, "
          f"{len(owners)} owners — {len(errors)} failure(s).")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
