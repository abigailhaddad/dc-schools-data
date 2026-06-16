#!/usr/bin/env python3
"""
validate.py — integrity checks for sources.yaml + data_files.yaml.

Catches the mistakes that otherwise fail silently at render time:
  * duplicate source ids / file ids
  * a data file whose source_id has no matching source
  * an `overlaps` entry referencing a source id that doesn't exist
    (generate_readme.py silently drops these)
  * a source whose owner isn't in the owners list
  * missing required fields; unknown `kind` or `status` values

Exits non-zero if any ERROR is found (wire into CI before generate_readme.py).
WARNINGs are printed but don't fail the build.

Usage:
    python validate.py
"""
from __future__ import annotations

import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent
SOURCES = ROOT / "sources.yaml"
DATA_FILES = ROOT / "data_files.yaml"

SOURCE_REQUIRED = ("id", "name", "owner", "url", "format", "cadence", "years")
FILE_REQUIRED = ("id", "source_id", "name", "url", "kind", "year")
KNOWN_KINDS = {"xlsx", "xls", "csv", "pdf"}
KNOWN_STATUS = {"ok", "js-rendered", "login-required", "stale", "unstable", "unverified"}


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []

    doc = yaml.safe_load(SOURCES.read_text())
    files_doc = yaml.safe_load(DATA_FILES.read_text())
    sources = doc.get("sources", [])
    owners = doc.get("owners", [])
    overlaps = doc.get("overlaps", [])
    data_files = files_doc.get("data_files", [])

    owner_keys = {o["key"] for o in owners}

    # ---- sources ----
    source_ids: set[str] = set()
    for i, s in enumerate(sources):
        where = f"sources[{i}] (id={s.get('id', '?')})"
        for field in SOURCE_REQUIRED:
            if not s.get(field):
                errors.append(f"{where}: missing required field `{field}`")
        sid = s.get("id")
        if sid in source_ids:
            errors.append(f"{where}: duplicate source id `{sid}`")
        if sid:
            source_ids.add(sid)
        if s.get("owner") and s["owner"] not in owner_keys:
            errors.append(f"{where}: owner `{s['owner']}` not in owners list")
        if s.get("status") and s["status"] not in KNOWN_STATUS:
            warnings.append(f"{where}: unknown status `{s['status']}`")

    # ---- overlaps reference real sources ----
    for i, ov in enumerate(overlaps):
        for sid in ov.get("sources", []):
            if sid not in source_ids:
                errors.append(f"overlaps[{i}] ({ov.get('topic', '?')}): "
                              f"references unknown source id `{sid}`")

    # ---- data files ----
    file_ids: set[str] = set()
    sources_with_files: set[str] = set()
    for i, f in enumerate(data_files):
        where = f"data_files[{i}] (id={f.get('id', '?')})"
        for field in FILE_REQUIRED:
            if f.get(field) in (None, ""):
                errors.append(f"{where}: missing required field `{field}`")
        fid = f.get("id")
        if fid in file_ids:
            errors.append(f"{where}: duplicate file id `{fid}`")
        if fid:
            file_ids.add(fid)
        if f.get("kind") and f["kind"] not in KNOWN_KINDS:
            errors.append(f"{where}: unknown kind `{f['kind']}` (expected {sorted(KNOWN_KINDS)})")
        src = f.get("source_id")
        if src and src not in source_ids:
            errors.append(f"{where}: source_id `{src}` has no matching source")
        if src:
            sources_with_files.add(src)

    # Sources with no files are mostly intentional (live dashboards, JS hubs,
    # landing pages), so this is one info line, not 49 warnings.
    fileless = source_ids - sources_with_files

    # ---- report ----
    for w in warnings:
        print(f"  warning: {w}")
    for e in errors:
        print(f"  ERROR:   {e}")
    print(f"\n{len(sources)} sources, {len(data_files)} files, {len(overlaps)} overlaps "
          f"checked — {len(errors)} error(s), {len(warnings)} warning(s).")
    print(f"  info: {len(fileless)} source(s) have no direct-download files "
          f"(dashboards / JS hubs / landing pages).")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
