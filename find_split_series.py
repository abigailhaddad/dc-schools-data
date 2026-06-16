#!/usr/bin/env python3
"""
find_split_series.py — flag datasets that were SPLIT across two series because a
source renamed the file over the years (one series stops, a near-identical one
starts). These are candidates for a derive_series() rule so they reconnect into a
single multi-year card.

Heuristic: replicate the front-end grouping (derive_series result baked into
catalog.js, else the seriesKey year-stripping heuristic), then for each owner find
pairs of DIFFERENT series whose column signatures are very similar (Jaccard) AND
whose year ranges don't overlap (the tell-tale "stops then starts").

Run: python find_split_series.py
"""
from __future__ import annotations

import json
import re
import sys
from collections import defaultdict
from itertools import combinations
from pathlib import Path

ROOT = Path(__file__).resolve().parent
JACCARD_MIN = 0.6     # column-signature similarity to call two series "the same data"
MIN_COLS = 4          # ignore tiny/headerless signatures


def load_catalog() -> dict:
    txt = (ROOT / "catalog.js").read_text()
    return json.loads(txt[txt.index("{"):txt.rindex("}") + 1])


# --- replicate index.html stripYearTokens + seriesKey so grouping matches the UI ---
def strip_year_tokens(name: str) -> str:
    s = name
    s = re.sub(r"\bSY\s*\d{2}\s*[_-]?\s*\d{2}\b", " ", s, flags=re.I)
    s = re.sub(r"\b(19|20)\d{2}\s*[-–]\s*\d{2}\b", " ", s)
    s = re.sub(r"\b\d{1,2}[._]\d{1,2}[._]\d{2,4}\b", " ", s)
    s = re.sub(r"\b(19|20)\d{2}\b", " ", s)
    s = re.sub(r"\b\d{4}\b", " ", s)
    s = re.sub(r"\bv\d+\b", " ", s, flags=re.I)
    s = re.sub(r"\([^)]*\)", " ", s)
    s = re.sub(r"\b(update|corrected|website|final|nw)\b", " ", s, flags=re.I)
    s = s.replace("_", " ")
    return s


def series_key(owner: str, name: str) -> str:
    s = strip_year_tokens(name).lower()
    s = re.sub(r"[^a-z0-9]+", " ", s)
    s = re.sub(r"\b\d+\b", " ", s)
    s = re.sub(r"applicat\w*|applican\w*", "applicant", s)
    s = re.sub(r"\b(by|and|the|of|for|in|a|to|per|with)\b", " ", s)
    s = re.sub(r"\b(lottery|data|dc|school|report|card|metric|metrics|scores|score|number|public|file|files)\b", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    return owner + "|" + s


def norm_col(c: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 %]+", " ", c.lower())).strip()


def year_num(y) -> int:
    m = re.search(r"(19|20)\d{2}", str(y or ""))
    return int(m.group(0)) if m else 0


def file_columns(f: dict) -> set[str]:
    cols = []
    for tab in f.get("tabs", []):
        cols += tab.get("columns", [])
    cols += f.get("columns", [])
    for t in f.get("tables", []):
        cols += t.get("header", [])
    return {norm_col(c) for c in cols if norm_col(c) and len(norm_col(c)) > 2}


def main() -> int:
    cat = load_catalog()
    # group files into the SAME series the front end shows
    series = defaultdict(lambda: {"owner": "", "title": "", "years": set(), "cols": set(), "n": 0})
    for s in cat["sources"]:
        for f in s.get("files", []):
            if f.get("status") in ("needs_browser", "error"):
                continue
            owner = s["owner"]
            if f.get("series"):
                key, title = owner + "|" + f["series"], f["series"]
            else:
                key, title = series_key(owner, f["name"]), f["name"]
            g = series[key]
            g["owner"], g["title"] = owner, title
            y = year_num(f.get("label") or f.get("year"))
            if y:
                g["years"].add(y)
            g["cols"] |= file_columns(f)
            g["n"] += 1

    # compare series within each owner
    by_owner = defaultdict(list)
    for key, g in series.items():
        if len(g["cols"]) >= MIN_COLS and g["years"]:
            by_owner[g["owner"]].append((key, g))

    def name_tokens(key: str) -> set[str]:
        # the de-boilerplated words from series_key (after the owner| prefix)
        return set(key.split("|", 1)[1].split())

    candidates = []
    for owner, groups in by_owner.items():
        for (ka, a), (kb, b) in combinations(groups, 2):
            ya, yb = a["years"], b["years"]
            # "stops then starts" = year ranges fully disjoint
            if ya & yb:
                continue
            cols = (len(a["cols"] & b["cols"]) / len(a["cols"] | b["cols"])) if (a["cols"] | b["cols"]) else 0
            if cols < JACCARD_MIN:
                continue
            ta, tb = name_tokens(ka), name_tokens(kb)
            names = (len(ta & tb) / len(ta | tb)) if (ta | tb) else 0
            # require BOTH the columns AND the (de-boilerplated) name to overlap, so
            # same-shape-different-topic files (Attendance vs Discipline) are excluded
            if names < 0.34:
                continue
            candidates.append((names, cols, owner, a, b))

    candidates.sort(key=lambda c: (-c[0], -c[1]))
    print(f"Found {len(candidates)} likely rename-split(s) "
          f"(disjoint years, name overlap >= 34% AND column overlap >= {JACCARD_MIN:.0%}):\n")
    for names, cols, owner, a, b in candidates:
        ra = f"{min(a['years'])}-{max(a['years'])}"
        rb = f"{min(b['years'])}-{max(b['years'])}"
        print(f"  [name {names:.0%} · cols {cols:.0%}] {owner}")
        print(f"      A: {a['title'][:62]!r}  ({ra}, {a['n']} files)")
        print(f"      B: {b['title'][:62]!r}  ({rb}, {b['n']} files)")
        print()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
