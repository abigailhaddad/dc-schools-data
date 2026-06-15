---
name: update-dc-schools-data
description: Refresh the DC K-12 schools data-source catalog in this repo. Use when re-verifying that source links still work, finding newly-published data (a new school year's files), harvesting files that live behind Box/Egnyte/JS pages, re-profiling file structure (tabs/columns), or regenerating README.md. Trigger on "update the schools catalog", "check the DC schools links", "the new year's data is out", or after OSSE/DCPS/PCSB/DME post new data.
---

# Update the DC Schools Data Catalog

This repo maps where DC public-school data lives and profiles the actual files.
The pipeline is:

```
sources.yaml ─┐
data_files.yaml ─► profile_files.py ─► file_profiles.json ─┐
                                                            ├─► generate_readme.py ─► README.md
sources.yaml ──────────────────────────────────────────────┘
```

- **`sources.yaml`** — curated catalog: every source, its `authority`/`status`/
  `cadence`/`years`, and the `overlaps` block (same data in multiple places + what
  differs). Hand-edited.
- **`data_files.yaml`** — one entry per directly-downloadable file (xlsx/csv/pdf).
- **`profile_files.py`** — downloads each file, extracts tabs+columns (spreadsheets)
  or pages+text/tables (PDFs) → `file_profiles.json`.
- **`generate_readme.py`** — renders `README.md`. **Never hand-edit README.md.**

## Routine refresh (do this first)

```bash
python profile_files.py        # re-download + re-profile all files
python generate_readme.py      # rebuild README.md
```

Then bump `last_verified:` in `sources.yaml` to the current `YYYY-MM` and rerun
`generate_readme.py`.

## 1. Re-verify the source links

For each source in `sources.yaml`, confirm the `url` still resolves (WebFetch, or
Playwright for JS/anti-bot pages). When a link breaks:
- Find the new URL. OSSE especially **changes URL patterns** (e.g. assessments moved
  from `/page/YYYY-YY-parcc-and-msaa-...` to `/assessmentresultsYYYY`; ACGR pre-2020
  uses `/publication/...`, later years link straight to `.xlsx`).
- Update `url`; if the page now only holds the latest year, note where older years
  moved in `notes` and adjust `years`.
- Set `status` (`ok` / `js-rendered` / `login-required` / `stale` / `unstable` /
  `unverified`) so the README badges stay honest.

## 2. Find newly-published files

When a new school year posts, add the new files to `data_files.yaml`. Watch:
- **OSSE Report Card Resource Library** — new year ≈ each December. **Filenames are
  inconsistent year to year** — copy the exact link from the page, don't guess.
- **OSSE assessment results** (`/assessmentresultsYYYY`) — Box links, see §3.
- **OSSE attendance** (~November), **discipline** (~December), **graduation** (~winter),
  **enrollment audit** (~Jan/Feb).
- **EdScape Release Notes** (`edscape.dc.gov/page/edscape-release-notes`) — the
  changelog of what DME added and when.
- **DC Policy Center State of D.C. Schools** — each March.

**The harvest workflow** (how the 200+ files were added):
1. Open the hub page in Playwright and dump file links to a JSON file. The
   `browser_evaluate` tool's `filename` arg writes the return value straight to disk:
   ```js
   // after browser_navigate(hubUrl):
   () => {
     const links = [...document.querySelectorAll('a[href]')]
       .filter(a => /\.xlsx|\.xls|\.csv|\.pdf|box\.com|egnyte|docs\.google/i.test(a.href))
       .map(a => {                              // tag each link with its section heading
         let el = a, section = '';
         while (el && !section) { let p = el.previousElementSibling;
           while (p) { if (/^H[1-4]$/.test(p.tagName)) { section = p.textContent.trim(); break; } p = p.previousElementSibling; }
           el = el.parentElement; }
         return { section, text: a.textContent.trim().replace(/\s+/g,' '), href: a.href };
       }).filter(l => l.text);
     const seen = new Set();
     return links.filter(l => !seen.has(l.href) && seen.add(l.href));
   }
   ```
   For multi-page chapters (EdScape) you can `fetch()` each sibling page from the
   open same-origin tab and regex out `.xlsx` hrefs in one call — that's how the 9
   EdScape datasets and the PCSB sub-pages were swept without 9 navigations.
2. Move the JSON into `harvest/` and merge it into `data_files.yaml`:
   ```bash
   python add_harvested_files.py harvest/<file>.json --source-id <id> --id-prefix <px>
   ```
   `add_harvested_files.py` infers year + topics, dedupes by URL, derives clean
   names from filenames when the link text is just "2023"/"Click here", and skips
   non-file links. Accepts a bare list or `{"links":[...]}`. If a page mixes files
   for several sources, split the JSON by section first (one `--source-id` per run).
3. `python profile_files.py` then `python generate_readme.py`.

## 3. Files behind Box / Egnyte / JS (the hard case — e.g. DC CAPE)

OSSE assessment files and most PCSB finance/equity files sit behind **Box share
pages** (`app.box.com/s/...`) with no direct URL. Resolve a Box share link to a
fetchable download URL **with Playwright**, then store the resolved URL:

```js
// browser_navigate('https://app.box.com/s/<SHARE>') first, then:
() => {
  const share = location.pathname.match(/\/s\/([a-z0-9]+)/i)[1];
  const html = document.documentElement.innerHTML;
  const fid = (html.match(/"file_id"\s*:\s*"?(\d+)/) || html.match(/itemID":"(\d+)/))[1];
  return {
    fileName: document.title.replace(/ \| .*/,''),
    directDownload: `https://app.box.com/index.php?rm=box_download_shared_file&shared_name=${share}&file_id=f_${fid}`
  };
}
```
Tip: from one open `app.box.com` page you can `fetch()` other `/s/...` share links
(same origin) and parse them in one call — that's how all three CAPE aggregation
levels (State/LEA/School) were resolved at once.

Put the resolved `box_download_shared_file` URL in `data_files.yaml` as the `url`.
`profile_files.py` treats that form as directly downloadable (only raw `/s/` share
pages are flagged `needs_browser`). Box `file_id`s change when OSSE re-uploads, so
re-resolve each year.

### Per-host quirks (learned the hard way)

| Host / page | Fetchable by script? | What to do |
| --- | --- | --- |
| `osse.dc.gov/.../attachments/*.xlsx` | ✅ yes | direct URL; filenames are inconsistent — copy exact |
| `app.box.com/s/<share>` | ⚠️ after resolving | resolve to `box_download_shared_file` URL (above); file_ids change yearly |
| `opendata.dc.gov` "about" pages | ⚠️ via export URL | use `…/api/download/v1/items/<ID>/csv?layers=<N>` |
| `edscape.dc.gov` chapter pages | ✅ yes | each has a "Download … dataset" `.xlsx` link |
| `dme.dc.gov/page/download-data` | 🚫 DEAD | no longer hosts files — redirects to EdScape/OpenData |
| `myschooldc.org/.../attachments/*.pdf` | ✅ yes | per-year per-metric lottery PDFs; many years |
| `dcpcsb.org/sites/.../*.pdf` | ✅ yes | citywide reports + some per-school PDFs |
| `dcpcsb.egnyte.com/dl/<token>` | 🚫 returns HTML | Egnyte serves a JS landing page, NOT the file. Not script-fetchable. |

**Egnyte is the wall.** Most PCSB machine-readable data (PMF score Excels, per-school
financials, 503 annual reports, hundreds of fiscal audits) lives on Egnyte `/dl/`
links that return an HTML landing page to any non-browser client. Do **not** add
these as profilable files — instead record an honest **count** in the parent
source's `notes` (e.g. "~464 per-school audit PDFs on Egnyte, browser-only") so the
gap is visible and quantified, not silently dropped. Only catalogue PCSB files that
are hosted directly on `dcpcsb.org`.

## 4. Re-profile and regenerate

```bash
python profile_files.py --only <new-id-1> <new-id-2>   # profile just the new files
python profile_files.py                                # or re-do everything
python generate_readme.py
```
`--only` merges into the existing `file_profiles.json`. Use `--refresh` to force
re-download. Files that 404 or return HTML show up as `error` in the README's
"Known gaps" section — fix the URL and re-run.

## 5. Maintain the overlap analysis

The `overlaps:` block in `sources.yaml` is the most valuable part — it says which
source to trust when the same metric appears in several places. When you add a
source that duplicates an existing metric, add it to the relevant overlap's
`sources:` list and update the `difference:` text. Keep the framing sharp, e.g.:
- STAR (OSSE, 1–5, cross-sector) ≠ SQR/ASPIRE (PCSB, Tier 1/2/3, charter only).
- OSSE per-pupil **expenditure** ≠ DCPS budget **allocation**.
- OSSE audited enrollment is the count everyone else republishes.

## Automation

Two layers, different cadence:

- **Layer 1 — deterministic refresh (no browser).** `./refresh.sh` re-downloads
  every known file, re-profiles, and regenerates. Catches files OSSE/DCPS updated
  *in place* and flags dead links (`error`). Runs unattended — see
  `.github/workflows/refresh.yml` (monthly GitHub Action that commits drift), or a
  plain cron: `0 9 1 * * cd /path/to/schools && ./refresh.sh`.
- **Layer 2 — discovery (needs this skill).** Finding new years/files and resolving
  Box/Egnyte needs Playwright + judgment, so it can't be a dumb cron. Run this skill
  when a new year posts, **or** schedule it as a recurring cloud agent with
  `/schedule` (e.g. monthly) so an agent re-runs the harvest → profile → generate
  end to end. That's the closest thing to fully-automated updates.

Rule of thumb: Layer 1 keeps existing files fresh automatically; Layer 2 (this
skill, ideally scheduled) brings in what's new.

## Definition of done
- [ ] All `sources.yaml` URLs resolve, `status` accurate, `last_verified` bumped.
- [ ] New school-year files added to `data_files.yaml` (Box links resolved).
- [ ] `profile_files.py` runs clean (no `error` rows you didn't expect).
- [ ] `generate_readme.py` rerun; README diff reviewed.
