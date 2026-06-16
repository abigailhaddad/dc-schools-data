# CLAUDE.md — working in this repo

A catalog of **where DC K-12 public-school data lives** (OSSE, DCPS, DC PCSB, DME,
plus My School DC / Open Data DC / Census / DC Policy Center). It links each source,
groups files into multi-year dataset series, profiles each file's structure
(tabs/columns, PDF tables), and describes how the same metric appears in several
places. Scope: K-12 public (DCPS + charters). No higher ed.

## The one rule that matters most

**Describe, don't judge.** This catalog says *what each source is and how it's
scoped* — it never tells people which source to trust or which is "authoritative."
The user removed all authority/trust framing deliberately. Do **not** reintroduce:
- authority badges/tags/labels, "authoritative", "official", "the source of truth"
  (about the *data*), "which to trust", "use this one", star/tier rankings of sources.
Factual distinctions are fine because they describe the data, not a verdict:
cross-sector vs sector-only, expenditure vs allocation, different rating *scales*
(STAR 1–5 vs SQR tiers), suppression rules, vintage.

## Architecture (data flows one direction)

```
sources.yaml ─────────────────────────────────┐
data_files.yaml ─► profile_files.py ─► file_profiles.json ─► generate_readme.py ─► README.md + catalog.js ─► index.html
```

- **`sources.yaml`** — hand-curated: the ~66 sources (with `topics`, `cadence`,
  `years`, `notes`, `status`) and the `overlaps` block ("how sources differ").
  `authority:` fields still exist in the data but are **not rendered anywhere** —
  leave them or ignore them; do not surface them.
- **`data_files.yaml`** — one row per downloadable file: `id, source_id, name, url,
  kind, year, topics`, optional `page` (per-file hosting page, overrides the
  source's). ~360 files. Append via `add_harvested_files.py`, don't hand-type.
- **`profile_files.py`** — downloads each `url` (cached in `data_cache/`, gitignored),
  extracts: xlsx/xls → sheet names + columns + row counts; csv → columns + rows;
  pdf → page count + tables scanned across the whole doc (`has_tabular_data`).
  Writes `file_profiles.json`. `--only <ids>` updates a subset; `--refresh` re-downloads.
- **`generate_readme.py`** — renders `README.md` **and** `catalog.js`
  (`window.CATALOG = {...}`). All display logic lives here: `derive_series()`
  (grouping), `infer_file_topics()` (per-file topics), title cleanup. The
  "Known gaps" section computes its status counts from `file_profiles.json`, so
  it can't drift — don't re-hardcode "many files behind Box".
- **`validate.py`** — integrity gate for the two YAMLs (dup ids, dangling
  `source_id`, `overlaps` referencing a missing source, bad `kind`/`status`).
  Exits non-zero on errors; run it before `generate_readme.py`. CI + `refresh.sh`
  both call it first.
- **`report_drift.py`** — diffs two `file_profiles.json` snapshots into a
  human-readable "what changed" report (newly-broken links with URLs, in-place
  shape changes, fixed/new/removed). `refresh.sh` snapshots → re-profiles → diffs.
- **`test_frontend.py`** — guards the front-end invariant that **no topic chip is
  ever empty**. Reads the real `catalog.js` + the `TOPIC_CHIPS` list from
  `index.html` and checks every chip-topic has ≥1 year-tagged file, every year/owner
  has ≥1 chip, and the availability rule never surfaces an empty chip. Run after
  `generate_readme.py` (it reads `catalog.js`); wired into `refresh.sh` + CI. This is
  why DC CAS counts as `assessment` and the EdScape boundary files carry years —
  the test fails loudly if a topic would show a chip that leads to nothing.
- **`index.html`** — static, Bootstrap CDN + flat vanilla JS, loads `catalog.js`
  via `<script src>` (so it opens from `file://`; no server/build). Five views:
  Search files (grouped series, default), **Coverage** (topic × year heatmap,
  cells click through to the filtered files view), **Columns** (every column
  header indexed → the files/sources that carry it, built from `COLUMN_INDEX`),
  Sources, "How sources differ". Search results also show *which* tab/column
  matched (`matchedColumns`). The topic chips are **owner+year-aware**
  (`topicAvailable` / `renderChips`, rebuilt each `render()`): a chip only shows if
  it has ≥1 file for the current filter, and an active topic auto-clears if you pick
  a year it lacks — so a chip never leads to an empty result (enforced by
  `test_frontend.py`).

Regenerate after any data/generator change: `python validate.py && python generate_readme.py`.
Full rebuild: `python profile_files.py && python generate_readme.py`.

## Key concepts

- **Dataset series.** The file view groups files into one card per dataset across
  years. Two grouping paths in `generate_readme.py` / `index.html`:
  - *Year-recurring* (most OSSE/EdScape): heuristic — strip year/version tokens
    from the name, group what's left.
  - *Renamed or per-entity*: explicit `derive_series()` rules return a stable
    `series` label + a chip `label`. This is how renames reconnect
    (AP/IB/SAT → Advanced Coursework; PARCC → DC CAPE; Per-Pupil → School Finance)
    and how per-school sets collapse (PCSB equity reports → school-name chips).
    **When a dataset is split because a source renamed it, add a `derive_series`
    rule — don't fight the heuristic.**
- **Per-file topics.** Topics are inferred from the file *name* in
  `infer_file_topics()` (NOT the source's topic list — sources like the Resource
  Library are tagged with everything, which over-tags). Topic chips filter at the
  **series** level (any matching file shows the whole series).
- **Multi-page series.** A series can span pages (assessment years live on
  different OSSE pages). Each file carries its own `page`; the UI shows per-file
  "↗ page it lives on" links. Every file chip = ⬇ download + ↗ its page.

## Harvesting new files (the browser part)

Hub pages list files; harvest with Playwright, then `add_harvested_files.py`.
Host quirks learned the hard way (see the `update-dc-schools-data` skill for the
full playbook + code snippets):
- **OSSE attachment `.xlsx`** — direct; filenames are wildly inconsistent year to
  year, copy the exact link.
- **Box (`app.box.com/s/...`)** — share page, no direct URL. Resolve `file_id` in a
  browser → `…/index.php?rm=box_download_shared_file&shared_name=…&file_id=f_…`.
  Box lazy-loads; read the file_id from the rendered DOM (`typedID":"f_<id>`),
  re-resolve yearly (ids change). OSSE assessment results are all Box.
- **Egnyte (`dcpcsb.egnyte.com/dl/...`)** — returns an HTML landing page to scripts,
  **not fetchable**. Don't catalogue these; record a count in the source's `notes`.
- **DCPS / DME `download-data`** — the DME page is a dead redirect; DCPS publishes
  per-metric pages. Prefer harvesting from the **live DOM** (browser_evaluate), not
  `fetch()` — same-origin `fetch` has under-collected recent files before.
- **`year` parsing** — URL-decode hrefs first; `%20` in encoded filenames otherwise
  reads as phantom years (e.g. `%2029` → 2029).

## Conventions

- JS: flat functions, `const`/`let`, no framework/build, fail loud. One `state`
  object owns filter state; `render()` reflects it onto all controls. `window.CATALOG`
  is the single data global. (See the user's `dumber-flatter-js` guidance.)
- Verify JS before committing: `node --check <(sed -n '/<script>/,/<\/script>/p' index.html | sed '1d;$d')`.
- Commit only when asked. Trailer: `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
- After harvesting, bump `last_verified` in `sources.yaml` and regenerate.

## Automation

- **Layer 1 (no browser):** `./refresh.sh` or `.github/workflows/refresh.yml`
  (monthly) validate → snapshot profiles → re-download + re-profile → regenerate →
  print a drift report — catches in-place updates and dead links. The CI run
  surfaces the drift report in the job summary.
- **Layer 2 (discovery):** finding new files / resolving Box needs the browser, so
  run the `update-dc-schools-data` skill (optionally scheduled as a cloud agent).
