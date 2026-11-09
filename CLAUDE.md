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
data_files.yaml ─► profile_files.py ─► file_profiles.json ─► generate_readme.py ─► README.md + public/catalog.js ─► public/index.html
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
- **`generate_readme.py`** — renders `README.md` **and** `public/catalog.js`
  (`window.CATALOG = {...}`). All display logic lives here: `derive_series()`
  (grouping), `infer_file_topics()` (per-file topics), title cleanup. The
  "Known gaps" section computes its status counts from `file_profiles.json`, so
  it can't drift — don't re-hardcode "many files behind Box".
- **`search_synonyms.yaml`** — the search crosswalk: groups of equivalent terms
  (everyday ↔ DC vocabulary, e.g. `poverty` ↔ `at-risk`). `generate_readme.py`
  applies it as the single source of truth — a file/source earns a group's everyday
  words when its name/columns contain any member, so the Files **and** Sources search
  answer plain-language queries. Also surfaced in `catalog.js` (`window.CATALOG.synonyms`)
  to power the "no results" suggestions. Edit the YAML, never hardcode synonyms.
- **`validate.py`** — integrity gate for the two YAMLs (dup ids, dangling
  `source_id`, `overlaps` referencing a missing source, bad `kind`/`status`).
  Exits non-zero on errors; run it before `generate_readme.py`. CI + `refresh.sh`
  both call it first.
- **`report_drift.py`** — diffs two `file_profiles.json` snapshots into a
  human-readable "what changed" report (newly-broken links with URLs, in-place
  shape changes, fixed/new/removed). `refresh.sh` snapshots → re-profiles → diffs.
- **`test_frontend.py`** — guards the front-end invariant that **no topic chip is
  ever empty**. Reads the real `catalog.js` + the `TOPIC_CHIPS` list from
  `public/index.html` and checks every chip-topic has ≥1 year-tagged file, every year/owner
  has ≥1 chip, and the availability rule never surfaces an empty chip. Run after
  `generate_readme.py` (it reads `catalog.js`); wired into `refresh.sh` + CI. This is
  why DC CAS counts as `assessment` and the EdScape boundary files carry years —
  the test fails loudly if a topic would show a chip that leads to nothing.
- **`public/index.html`** — static, Bootstrap CDN + flat vanilla JS, loads `catalog.js`
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

## Deployment — the publish directory

**`public/` is the publish directory: the ONLY thing that gets uploaded to the
host.** It contains exactly `index.html`, `catalog.js`, `404.html` and nothing
else. Never put build inputs, data, or docs in it.

Why this matters: the old Vercel config used `"outputDirectory": "."`, which
published the whole repo root — 648 MB / 593 files, including the gitignored
`data_cache/`. `.vercelignore` is the ONLY list Vercel reads (it does **not**
honour `.gitignore`), so `.claude/settings.local.json` and
`.claude/skills/**/SKILL.md` served 200 in production, and `CLAUDE.md`,
`refresh.sh`, `search_synonyms.yaml`, `file_profiles.json` and `harvest/*.json`
were still serving 200 after those were patched. A deny-list you have to remember
to update is the wrong shape — a publish directory plus an allow-list is the fix.

- **`test_publish_dir.py`** enforces it: allow-list of files, Cloudflare Pages'
  hard 25 MiB (26,214,400 byte) per-file limit and 20,000-file limit, no private
  paths, `404.html` present. Wired into `refresh.sh` + CI. Run it after any change
  to what ships.
- **Every data link in `catalog.js` is an absolute external URL** (~579 of them,
  pointing at OSSE/DCPS/etc.). The site never serves a data file itself, which is
  why the publish dir stays ~1.6 MB and no file comes near the 25 MiB limit. Keep
  it that way — don't start hosting copies of source files.
- **Cloudflare Pages has no default 404**: without `public/404.html` it serves
  `index.html` with HTTP 200 for every unmatched path.
- **`_redirects` matches on PATH ONLY.** Pages silently ignores any rule whose
  source is an absolute URL (`https://host/*`) — tested and confirmed. The old
  `vercel.json` redirects were host-conditional (`dc-schools-data.vercel.app` →
  the custom domain); that has **no** `_redirects` equivalent and needs a
  zone-level Cloudflare Redirect Rule instead. The site itself needs no path
  redirects, so there is no `_redirects` file.

## Key concepts

- **Dataset series.** The file view groups files into one card per dataset across
  years. Two grouping paths in `generate_readme.py` / `public/index.html`:
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
  - The name rules (`FILE_TOPIC_RULES`) **win**; a file's own `topics:` in
    `data_files.yaml` is only the fallback when no rule matches. So tagging a new
    file in the YAML does nothing if its name already matches a rule.
  - Per-school sets (equity reports, health profiles, local-assessment files) carry a
    school name in the file name, and name words trigger rules ("Math**ematics** and
    Science" -> test scores, "Terrace" -> race). For those, topics are inferred from the
    **series title** instead (`ENTITY_SERIES_PREFIXES` / `_topic_text` in
    `generate_readme.py`). Add a new per-school series to that tuple.
  - Only 15 topics have a filter chip (`TOPIC_CHIPS` in `public/index.html`). Others
    (`equity`, `school-health`, `school-climate`, `student-movement`, `methodology`,
    `advanced-coursework`, `gis`, `other`) exist but are reachable only by search, so a
    big set tagged only with one of them is effectively hidden from the chips.
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
- **Egnyte (`dcpcsb.egnyte.com/dl/...`)** — `/dl/` returns an HTML preview page, but
  the same token at `/dd/<token>` returns the file to plain scripts (files inside a
  shared folder: `/dd/<folder>/?entryId=<id>`, listed via the public REST API; see
  the skill). Catalogue citywide reports/data as `/dd/` URLs; don't catalogue the
  per-school folders (budgets, 990s, audits) — link them in the source's `notes`.
- **DCPS / DME `download-data`** — the DME page is a dead redirect; DCPS publishes
  per-metric pages. Prefer harvesting from the **live DOM** (browser_evaluate), not
  `fetch()` — same-origin `fetch` has under-collected recent files before.
- **`year` parsing** — URL-decode hrefs first; `%20` in encoded filenames otherwise
  reads as phantom years (e.g. `%2029` → 2029).

## Conventions

- JS: flat functions, `const`/`let`, no framework/build, fail loud. One `state`
  object owns filter state; `render()` reflects it onto all controls. `window.CATALOG`
  is the single data global. (See the user's `dumber-flatter-js` guidance.)
- Verify JS before committing: `node --check <(sed -n '/<script>/,/<\/script>/p' public/index.html | sed '1d;$d')`.
- Commit only when asked. Trailer: `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
- After harvesting, bump `last_verified` in `sources.yaml` and regenerate.

## Automation

- **Layer 1 (no browser):** `./refresh.sh` or `.github/workflows/refresh.yml`
  (weekly, Mondays 09:00 UTC) validate → snapshot profiles → re-download + re-profile → regenerate →
  print a drift report — catches in-place updates and dead links. The CI run
  surfaces the drift report in the job summary, opens/updates a GitHub issue
  listing any link that broke since last run, and if more than 10 broke at
  once (a publisher migrated its site, as PCSB did in Oct 2026) it does not
  commit or deploy. A broken file keeps its `last_good_profile`.
- **Layer 1b (discovery, no browser):** `find_new_files.py`, run by the same weekly
  workflow after the refresh. `refresh.sh` only re-downloads URLs already in
  `data_files.yaml`, so a new year, or a release at a new URL, is invisible without it.
  It crawls the source pages (seeded from the OSSE/DME/DCPS `/publications?page=N`
  listings and the PCSB sitemap), and writes `new_files.md` listing spreadsheets/CSVs
  and PDFs-with-tables that are not in the catalog. It never edits the catalog: a
  person reviews the list, adds the real data files to `data_files.yaml`, and puts
  declined URLs in `discovery_ignore.txt` so they are not flagged again.
  - Scope is **data only**: spreadsheets, and statistical PDFs. Not guides,
    questionnaires, translations, plans, checklists, forms, meeting notes, or agency
    operations (budget, contracts). Keep **all years** of everything.
  - The PDF table test is weak (most PDFs have a table somewhere), so PDFs always
    need a human read of the file names. Results are cached in
    `discovery_pdf_checked.json`; `PDF_BUDGET` caps how many are checked per run.
  - It alerts (GitHub issue) when it finds candidates, when it crashes, and when
    crawl coverage (share of already-catalogued files it re-finds) falls below 75% or
    drops more than 5 points from `discovery_state.json`. Coverage is a tripwire, not
    a 100% target: publishers drop links to superseded years, and Box/Egnyte/ArcGIS
    links cannot be crawled.
  - PCSB serves a different page to non-browser User-Agents; the script sends a
    browser UA.
- **`verify_labels.py`**: re-fetches entries and checks file type, source-page link,
  year and name against the live file (`--added YYYY-MM-DD`, `--ids`, `--sample N`).
  Run it on anything you add in bulk. A year match is weak for spreadsheets (a bare
  year can match unrelated numbers), so treat it as confirmation, not proof.
- **Layer 2 (browser):** resolving Box/Egnyte/ArcGIS links needs the browser, so run
  the `update-dc-schools-data` skill (optionally scheduled as a cloud agent). The
  weekly job cannot resolve them, but `find_new_files.py` now lists any Box/Egnyte
  share link on a crawled page that the catalog does not know (section "Box / Egnyte
  links not in the catalog"), matched by share token. Resolve the real data ones in a
  browser (Box: the rendered page gives `shared_name` + `file_id`; a folder's file ids
  come from the page's own `preview_get_files_metadata` requests while paging; Egnyte:
  `/dd/<token>` downloads directly, folders need the browser), add them, and put the
  rest in `discovery_ignore.txt` so they stop being flagged. Download URL for a Box
  file: `https://app.box.com/index.php?rm=box_download_shared_file&shared_name=<name>&file_id=f_<id>`
  (works for files inside a shared folder with the folder's `shared_name`).
- **Adding files by hand:** add rows to `data_files.yaml` (percent-encode the URL),
  run `profile_files.py --only <ids>` (needs the packages in `requirements.txt`,
  including `pdfplumber`), then `generate_readme.py`, `test_frontend.py`,
  `test_publish_dir.py`, `validate.py`. Years the file and its page do not state
  are `"unknown"`, not a guess.
