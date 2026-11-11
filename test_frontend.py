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
PUBLIC = ROOT / "public"          # the publish directory: index.html + catalog.js live here


def load_catalog() -> dict:
    txt = (PUBLIC / "catalog.js").read_text()
    txt = txt[txt.index("{"):txt.rindex("}") + 1]   # strip `window.CATALOG = ` … `;`
    return json.loads(txt)


def chip_tags() -> list[str]:
    """The topic tags wired up as chips in index.html (read from source, not copied,
    so the test can't drift from the page)."""
    html = (PUBLIC / "index.html").read_text()
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

    # 1b. every OSSE statewide-assessment file (any osse-assessment-* source, one
    #     per release year) sits in ONE series. A new year's source id once fell
    #     outside an exact-id list in derive_series() and got its own card.
    assess = {f.get("series") for s in cat["sources"] if s["id"].startswith("osse-assessment")
              for f in s.get("files", []) if f.get("status") not in ("needs_browser", "error")}
    if len(assess) != 1:
        errors.append(f"osse-assessment-* files span {len(assess)} series {sorted(map(str, assess))} — "
                      "expected exactly one (check derive_series in generate_readme.py)")

    # 1c. every indexed file carries an ISO `added` date (the "New" toggle keys on it)
    #     and the catalog publishes the window start; a file without a date can
    #     never be "new" and silently drops out of that filter.
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(cat.get("new_since", ""))):
        errors.append(f"catalog.new_since missing/malformed: {cat.get('new_since')!r}")
    undated = [f["name"] for s in cat["sources"] for f in s.get("files", [])
               if f.get("status") not in ("needs_browser", "error")
               and not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(f.get("added", "")))]
    if undated:
        errors.append(f"{len(undated)} file(s) have no ISO `added` date, e.g. {undated[:3]}")

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

    # 5. a dash-only search term ("-", "--") has an empty flexTerm() regex that matches
    #    everything and makes highlight() wrap every character in <mark></mark>;
    #    queryTerms() must drop such terms.
    html = (PUBLIC / "index.html").read_text()
    qt = re.search(r"function queryTerms\(\)\s*\{(.*?)\n\}", html, re.S)
    if not qt or "flexTerm(" not in qt.group(1):
        errors.append("queryTerms() does not drop terms whose flexTerm() is empty (dash-only search)")

    errors += paging_checks()

    for e in errors:
        print(f"  FAIL: {e}")
    n = len(files)
    print(f"\nChecked {len(tags)} chips against {n} files, {len(years)} years, "
          f"{len(owners)} owners — {len(errors)} failure(s).")
    return 1 if errors else 0


# --- Search-files list pages 50 dataset series at a time ("Show N more" button). ---
# None of these needs a hand-picked fixture: every expectation is read from the
# page's own count line, so they hold as the catalog grows. They exist so the
# paging can never leave a series unreachable.
PAGE = 50
SERIES_RE = re.compile(r"(\d+) dataset series")


def _series_count(page) -> int:
    return int(SERIES_RE.search(page.inner_text("#count")).group(1))


def _cards(page) -> list[str]:
    return page.eval_on_selector_all("#files .src-card h6", "els => els.map(e => e.textContent.trim())")


def _card_keys(page) -> list[str]:
    """title + owner line, to tell apart same-named series from different owners."""
    return page.eval_on_selector_all(
        "#files .src-card",
        "els => els.map(e => e.querySelector('h6').textContent.trim() + ' | ' "
        "+ e.querySelector('.file-cols').textContent.split(' \u00b7 ')[0].trim())")


def _show_all(page) -> None:
    for _ in range(1000):                       # hard cap so a broken button can't hang the test
        btn = page.query_selector("#files-more")
        if not btn:
            return
        before = len(_cards(page))
        btn.click()
        page.wait_for_function(
            "n => document.querySelectorAll('#files .src-card').length > n", arg=before, timeout=5000)
    raise AssertionError("#files-more never disappeared")


def paging_checks() -> list[str]:
    import functools
    import http.server
    import threading
    from playwright.sync_api import sync_playwright

    errors: list[str] = []
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *args):
            pass
    handler = functools.partial(Quiet, directory=str(PUBLIC))
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 8900), handler)   # loopback only
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()
            page.goto("http://127.0.0.1:8900/index.html")
            page.wait_for_selector("#files .src-card")

            # (a) first load: 50 cards, count line states the FULL totals
            total = _series_count(page)
            count_line = page.inner_text("#count")
            if total <= PAGE:
                errors.append(f"paging: only {total} series — test needs more than {PAGE} to mean anything")
            if len(_cards(page)) != PAGE:
                errors.append(f"paging(a): {len(_cards(page))} cards on load, expected {PAGE}")
            if not re.search(r"\d+ files", count_line):
                errors.append(f"paging(a): count line lost the file total: {count_line!r}")
            if page.query_selector("#files-more") is None:
                errors.append("paging(a): no show-more button on load")

            # (b) click until the button is gone: every series, once
            _show_all(page)
            keys = _card_keys(page)
            titles = _cards(page)
            if len(keys) != total:
                errors.append(f"paging(b): {len(keys)} cards after show-all, page states {total} series")
            if _series_count(page) != total:
                errors.append("paging(b): series total changed while paging")
            if len(set(titles)) != len(titles):
                dups = sorted({t for t in titles if titles.count(t) > 1})
                errors.append(f"paging(b): duplicate titles {dups[:5]} ({len(titles)-len(set(titles))} extra)")
            if len(set(keys)) != len(keys):
                errors.append("paging(b): duplicate title+owner cards")

            # (c) series past the first 50 are still found by search. Pasting a whole title
            #     only works for titles made of plain words: on main too, about 1 in 6 titles
            #     containing & : ( ) → are not found by their own full text, which is a search
            #     quirk unrelated to paging. So probe plain-word titles, spread across the tail.
            tail = [(k, t) for k, t in list(zip(keys, titles))[PAGE:] if re.fullmatch(r"[A-Za-z0-9 ]+", t)]
            if len(tail) < 5:
                errors.append(f"paging(c): only {len(tail)} plain-word titles past the first {PAGE}")
            probes = tail[::max(1, len(tail) // 8)][:8] + [tail[-1]]
            for key, title in probes:
                page.fill("#q", title)
                if key not in _card_keys(page):
                    errors.append(f"paging(c): searching {title!r} did not return series {key!r}")

            # (d) a filter change drops back to the first 50 of the filtered set
            page.fill("#q", "")
            page.wait_for_function("n => document.querySelectorAll('#files .src-card').length === n", arg=PAGE)
            page.click("#files-more")            # now 100 shown
            page.wait_for_function("n => document.querySelectorAll('#files .src-card').length > n", arg=PAGE)
            owners = page.eval_on_selector_all("#owner option", "os => os.map(o => o.value).filter(Boolean)")
            tested = False
            for o in owners:
                page.select_option("#owner", o)
                n = _series_count(page)
                got = len(_cards(page))
                if got != min(PAGE, n):
                    errors.append(f"paging(d): owner {o!r}: {got} cards, expected min({PAGE}, {n})")
                if n > PAGE:
                    tested = True
                    page.click("#files-more")    # go past 50 again before the next filter change
                    page.wait_for_function("n => document.querySelectorAll('#files .src-card').length > n", arg=PAGE)
            if not tested:
                errors.append("paging(d): no owner filter has more than 50 series; reset-to-50 not exercised")
            page.select_option("#owner", "")
            page.wait_for_function("n => document.querySelectorAll('#files .src-card').length === n", arg=PAGE)
            if len(_cards(page)) != PAGE:
                errors.append("paging(d): clearing the owner filter did not reset to 50")
            browser.close()
    finally:
        srv.shutdown()
        srv.server_close()
    return errors


if __name__ == "__main__":
    raise SystemExit(main())
