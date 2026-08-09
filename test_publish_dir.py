#!/usr/bin/env python3
"""
test_publish_dir.py — guard the PUBLISH DIRECTORY (`public/`).

Every bug this file checks for is one that actually happened, or one the host
will silently inflict on us:

  1. PRIVATE FILES GOT PUBLISHED. The Vercel config used `"outputDirectory": "."`,
     which uploaded the whole repo root — 648 MB / 593 files, including the
     gitignored `data_cache/`. `.vercelignore` is the ONLY list Vercel reads
     (it does not honour `.gitignore`), so `.claude/settings.local.json` and
     `.claude/skills/**/SKILL.md` served 200 in production until they were named
     in `.vercelignore`; `CLAUDE.md` and `refresh.sh` were still serving 200
     after that. A deny-list you have to remember to update is the bug. This test
     replaces it with an ALLOW-LIST: `public/` may contain exactly the site, so
     anything new that lands there has to be added here deliberately.

  2. 25 MiB PER-FILE LIMIT. Cloudflare Pages hard-rejects any file over
     26,214,400 bytes. The repo has several (the largest is a 122 MB xlsx in
     data_cache/). They are build INPUTS, not site content, so the fix is that
     they are never in the publish directory — this test keeps it that way.

  3. 20,000 FILES PER DEPLOYMENT. Also a hard Pages limit.

  4. ABSOLUTE-URL `_redirects` SOURCES. Cloudflare Pages matches `_redirects` on
     PATH ONLY and SILENTLY IGNORES any rule whose source is a full URL like
     `https://host/*`. Tested and confirmed. A host-conditional redirect (what
     vercel.json did to send dc-schools-data.vercel.app → the custom domain)
     cannot be expressed in `_redirects` at all; it needs a zone-level
     Cloudflare Redirect Rule. Writing it into `_redirects` looks like it works
     and does nothing, so this test fails on it.

  5. NO DEFAULT 404. Pages has none — without a `404.html` in the publish dir it
     serves index.html with HTTP 200 for every unmatched path.

Run: python3 test_publish_dir.py   (exits non-zero on failure; wired into
refresh.sh + CI)
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PUBLIC = ROOT / "public"

# Cloudflare Pages hard limits.
MAX_FILE_BYTES = 25 * 1024 * 1024      # 26,214,400
MAX_FILES = 20_000

# The site is exactly these files. index.html loads catalog.js and Bootstrap from
# a CDN; every one of the ~579 data links in catalog.js is an absolute external
# URL, so no data file is ever served from this host.
ALLOWED = {
    "index.html",
    "catalog.js",
    "404.html",
}

# Optional host control files — consumed by Pages at deploy time, never served.
ALLOWED_OPTIONAL = {"_redirects", "_headers"}

# Names/paths that must never appear in the publish directory, checked in
# addition to the allow-list so the failure message names the actual hazard
# rather than just "unexpected file".
PRIVATE_PATTERNS = [
    (re.compile(r"(^|/)\.claude(/|$)"),        "Claude runtime config/skills"),
    (re.compile(r"(^|/)\.git(/|$)"),           "git internals"),
    (re.compile(r"(^|/)\.vercel(/|$)"),        "Vercel project link"),
    (re.compile(r"(^|/)data_cache(/|$)"),      "downloaded source data (gitignored, huge)"),
    (re.compile(r"(^|/)harvest(/|$)"),         "raw link-harvest scratch output"),
    (re.compile(r"(^|/)__pycache__(/|$)"),     "Python bytecode"),
    (re.compile(r"(^|/)\.playwright-mcp(/|$)"), "Playwright scratch output"),
    (re.compile(r"(?i)(^|/)CLAUDE\.md$"),      "internal working instructions"),
    (re.compile(r"(?i)(^|/)\.env"),            "environment file"),
    (re.compile(r"(?i)(^|/)\.DS_Store$"),      "macOS metadata"),
    (re.compile(r"\.(py|pyc|sh|ya?ml|toml|ini|cfg)$"), "build input / script, not site content"),
    (re.compile(r"(?i)(^|/)(README|CHANGELOG|LICENSE)\.md$"), "repo doc, not site content"),
    (re.compile(r"(?i)\.(xlsx|xls|csv|pdf)$"), "source data file — link to the publisher instead"),
]


def rel_paths() -> list[str]:
    return sorted(p.relative_to(PUBLIC).as_posix()
                  for p in PUBLIC.rglob("*") if p.is_file())


def main() -> int:
    errors: list[str] = []

    if not PUBLIC.is_dir():
        print(f"  FAIL: publish directory {PUBLIC} does not exist")
        return 1

    paths = rel_paths()

    # --- 1. allow-list: nothing may be published that isn't the site ---------
    for rel in paths:
        if rel in ALLOWED or rel in ALLOWED_OPTIONAL:
            continue
        why = next((desc for pat, desc in PRIVATE_PATTERNS if pat.search(rel)), None)
        if why:
            errors.append(f"PRIVATE FILE IN PUBLISH DIR: public/{rel} — {why}. "
                          f"It would be served publicly. Move it out of public/.")
        else:
            errors.append(f"unexpected file in publish dir: public/{rel} — if this is "
                          f"genuinely part of the site, add it to ALLOWED in "
                          f"{Path(__file__).name}; otherwise move it out of public/.")

    # ...and the site's own files must actually be there.
    for want in sorted(ALLOWED):
        if want not in paths:
            errors.append(f"missing from publish dir: public/{want}")

    # --- 2. per-file size limit --------------------------------------------
    for rel in paths:
        size = (PUBLIC / rel).stat().st_size
        if size > MAX_FILE_BYTES:
            errors.append(f"public/{rel} is {size:,} bytes — over the "
                          f"{MAX_FILE_BYTES:,}-byte (25 MiB) per-file limit; "
                          f"Cloudflare Pages will reject the deployment")

    # --- 3. file count limit ------------------------------------------------
    if len(paths) > MAX_FILES:
        errors.append(f"publish dir has {len(paths):,} files — over the "
                      f"{MAX_FILES:,}-file per-deployment limit")

    # --- 4. _redirects sources must be paths, not absolute URLs -------------
    redirects = PUBLIC / "_redirects"
    if redirects.exists():
        for i, line in enumerate(redirects.read_text().splitlines(), 1):
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            source = line.split()[0]
            if "://" in source:
                errors.append(f"public/_redirects line {i}: source '{source}' is an "
                              f"absolute URL. Cloudflare Pages matches on PATH ONLY and "
                              f"silently ignores such rules — use a zone-level "
                              f"Redirect Rule for host-based redirects.")

    # --- 5. the deploy config must point at public/ -------------------------
    vercel_json = ROOT / "vercel.json"
    if vercel_json.exists():
        txt = vercel_json.read_text()
        m = re.search(r'"outputDirectory"\s*:\s*"([^"]*)"', txt)
        if m and m.group(1).strip("./") != "public":
            errors.append(f'vercel.json outputDirectory is "{m.group(1)}" — anything '
                          f'other than "public" publishes files outside the publish dir')

    for e in errors:
        print(f"  FAIL: {e}")
    total = sum((PUBLIC / r).stat().st_size for r in paths)
    biggest = max(paths, key=lambda r: (PUBLIC / r).stat().st_size, default=None)
    print(f"\nPublish dir public/: {len(paths)} file(s), {total:,} bytes total"
          + (f", largest public/{biggest} at {(PUBLIC / biggest).stat().st_size:,} bytes"
             if biggest else "")
          + f" — {len(errors)} failure(s).")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
