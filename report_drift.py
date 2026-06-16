#!/usr/bin/env python3
"""
report_drift.py — diff two file_profiles.json snapshots into a human-readable
"what changed" report, so a refresh run surfaces link-rot and structural drift
instead of leaving it buried in the JSON.

  BROKE    — was ok, now errors / needs a browser (likely a dead or moved link)
  FIXED    — was erroring, now downloads + profiles cleanly
  CHANGED  — still ok, but the shape changed (rows/cols/sheets/pages) — i.e. the
             publisher updated the file in place
  NEW      — newly catalogued file ids
  REMOVED  — file ids no longer present

Usage:
    python report_drift.py file_profiles.prev.json file_profiles.json

Always exits 0 — it's a report, not a gate (validate.py is the gate).
"""
from __future__ import annotations

import json
import sys
from pathlib import Path


def shape(rec: dict):
    """A small comparable fingerprint of a file's structure, by kind."""
    prof = rec.get("profile", {})
    kind = rec.get("kind")
    if kind == "csv":
        return ("csv", prof.get("n_rows"), prof.get("n_columns"))
    if kind in ("xlsx", "xls"):
        total_rows = sum(s.get("n_rows", 0) for s in prof.get("sheets", []))
        return ("xlsx", prof.get("n_sheets"), total_rows)
    if kind == "pdf":
        return ("pdf", prof.get("n_pages"), prof.get("n_table_pages"))
    return (kind,)


def fmt_shape(s) -> str:
    if s[0] == "csv":
        return f"{s[1]} rows × {s[2]} cols"
    if s[0] == "xlsx":
        return f"{s[1]} sheets, {s[2]} total rows"
    if s[0] == "pdf":
        return f"{s[1]} pages, {s[2]} table-pages"
    return str(s[0])


def main() -> int:
    if len(sys.argv) != 3:
        sys.exit("usage: python report_drift.py <old.json> <new.json>")
    old = json.loads(Path(sys.argv[1]).read_text())
    new = json.loads(Path(sys.argv[2]).read_text())

    broke, fixed, changed = [], [], []
    for fid, rec in new.items():
        prev = old.get(fid)
        if prev is None:
            continue
        old_ok = prev.get("status") == "ok"
        new_ok = rec.get("status") == "ok"
        if old_ok and not new_ok:
            broke.append(f"- **{rec['name']}** — now `{rec.get('status')}`"
                         f"{': ' + rec['error'] if rec.get('error') else ''}\n  {rec['url']}")
        elif not old_ok and new_ok:
            fixed.append(f"- {rec['name']}")
        elif old_ok and new_ok and shape(prev) != shape(rec):
            changed.append(f"- {rec['name']}: {fmt_shape(shape(prev))} → {fmt_shape(shape(rec))}")

    added = [new[i]["name"] for i in new.keys() - old.keys()]
    removed = [old[i]["name"] for i in old.keys() - new.keys()]

    if not any((broke, fixed, changed, added, removed)):
        print("No drift: every file has the same status and shape as last run.")
        return 0

    def section(title, items):
        if items:
            print(f"### {title} ({len(items)})")
            print("\n".join(items))
            print()

    print("## Catalog drift since last run\n")
    section("⚠️ Newly broken", broke)
    section("✅ Fixed", fixed)
    section("✏️ Shape changed (updated in place)", changed)
    section("➕ New files", [f"- {n}" for n in sorted(added)])
    section("➖ Removed files", [f"- {n}" for n in sorted(removed)])
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
