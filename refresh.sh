#!/usr/bin/env bash
# Deterministic refresh of the DC schools catalog.
#
# Re-downloads every known file, re-profiles (tabs/columns/pages), and regenerates
# README.md + catalog.js. This catches files that OSSE/DCPS/etc. UPDATED IN PLACE
# at the same URL, and flags any that went dead (they show up as `error`).
#
# It does NOT discover newly-published files or new school years, and it can't
# resolve Box/Egnyte links — that needs the browser-driven `update-dc-schools-data`
# skill (Layer 2). Run this on a schedule; run the skill when a new year posts.
set -euo pipefail
cd "$(dirname "$0")"

echo "==> Re-downloading + re-profiling all files (this hits the network)…"
python3 profile_files.py --refresh

echo "==> Regenerating README.md + catalog.js…"
python3 generate_readme.py

echo
echo "==> Done. Review drift:"
echo "      git diff --stat"
echo "    Any files that 404'd are listed as 'error' above and in README's"
echo "    'Known gaps' section — fix the URL in data_files.yaml and re-run."
