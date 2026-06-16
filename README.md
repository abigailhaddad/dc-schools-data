# DC K-12 Public Schools — Data Source Catalog

> ⚠️ **Unofficial & independent.** Not affiliated with or endorsed by OSSE, DCPS, DC PCSB, DME, or the Government of the District of Columbia. This catalogs links to publicly published data — it hosts none of the official data and names no source as authoritative. Always verify against the original source.

A map of **where DC public-school data actually lives** — across OSSE, DCPS, the DC Public Charter School Board (DC PCSB), and the Deputy Mayor for Education (DME). The data is real but scattered: split across agencies, buried on Tableau, with old years on different pages than new ones, and the *same* metric often published in several places. This catalog links each source, groups the files into multi-year dataset series, inventories their **tabs and columns** (and tables inside PDFs), and describes — without judgment — how the same metric differs across places.

> **Scope:** K-12 public (DCPS + charters). No higher ed.  
> **Last verified:** 2026-06  
> **Live site:** <https://dc-schools-data.vercel.app>  
> **Browse it locally:** open [`index.html`](index.html) — searchable, filter by topic/owner/year.  
> **Source of truth:** [`sources.yaml`](sources.yaml) + [`data_files.yaml`](data_files.yaml). Do not edit this README by hand — run `python generate_readme.py`.

## How this repo works

| File | Purpose |
| --- | --- |
| [`sources.yaml`](sources.yaml) | Hand-curated catalog of every data source + the "how sources differ" notes. **Edit this.** |
| [`data_files.yaml`](data_files.yaml) | Direct download URLs for individual files (xlsx/csv/pdf). **Edit this** (or append via the harvester). |
| [`profile_files.py`](profile_files.py) | Downloads each file and extracts tabs/columns (xlsx/csv) or pages + tables (pdf) → `file_profiles.json`. |
| [`add_harvested_files.py`](add_harvested_files.py) | Turns a browser link-harvest into `data_files.yaml` rows (infers year/topics, dedupes). |
| [`generate_readme.py`](generate_readme.py) | Renders this README **and** `catalog.js` from the YAML + profiles. |
| [`index.html`](index.html) | Static front end (Bootstrap + vanilla JS) that loads `catalog.js`. No build step. |
| [`refresh.sh`](refresh.sh) / GitHub Action | Re-download + re-profile + regenerate on a schedule (Layer-1 automation). |
| `update-dc-schools-data` skill | The process for re-verifying links, harvesting new files, and regenerating. |

## Contents

- [OSSE — Office of the State Superintendent of Education](#osse--office-of-the-state-superintendent-of-education) — 19 source(s)
- [DCPS — DC Public Schools](#dcps--dc-public-schools) — 16 source(s)
- [DC PCSB — DC Public Charter School Board](#dc-pcsb--dc-public-charter-school-board) — 14 source(s)
- [DME — Deputy Mayor for Education](#dme--deputy-mayor-for-education) — 10 source(s)
- [My School DC — Common Lottery](#my-school-dc--common-lottery) — 1 source(s)
- [Open Data DC / DCGIS](#open-data-dc--dcgis) — 3 source(s)
- [DC Policy Center (third party)](#dc-policy-center-third-party) — 1 source(s)
- [U.S. Census Bureau](#us-census-bureau) — 1 source(s)
- [EmpowerK12 (third party)](#empowerk12-third-party) — 1 source(s)
- [How sources differ (same metric, multiple places)](#how-sources-differ-same-metric-multiple-places)
- [Known gaps & files needing a browser](#known-gaps--files-needing-a-browser)

## OSSE — Office of the State Superintendent of Education

_DC's state education agency. Cross-sector (DCPS + charter) source for enrollment, assessments, attendance, graduation, discipline, finance, and the DC School Report Card / STAR ratings._

### [OSSE Data and Reports (main landing)](https://osse.dc.gov/page/data-and-reports-0)

_topics: landing, enrollment, assessment, attendance, graduation, discipline, finance, demographics_

- **Format:** Web portal of links to files & dashboards
- **Updated:** Rolling; underlying datasets annual
- **Years on page:** Links span SY2014-15 to SY2024-25 by dataset
- **Notes:** Top-level 'hub of hubs.' Best fallback when a specific per-year page URL changes.

### [DC School Report Card Resource Library (downloads)](https://osse.dc.gov/page/dc-school-report-card-resource-library)

_topics: assessment, attendance, graduation, discipline, enrollment, demographics, finance, educators_

- **Format:** Excel (.xlsx) files (some via Box) + PDF technical guides
- **Updated:** Annual; new section posted ~December
- **Years on page:** 2018–2025, each year its own section
- **Notes:** The single richest source of downloadable school-level OSSE data. Per-year filenames are INCONSISTENT — verify each year's exact link on the page.
- **Data files (profiled):**
  - [`2026 Metric Calculation Confirmation (MCC) Data Dictionary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2026%20Metric%20Calculation%20Confirmation%20%28MCC%29%20Data%20Dictionary_Website.xlsx) — **xlsx** — 32 tab(s)
    - tab **Release Schedule** (32 rows × 5 cols) — cols: `MCC Phase`, `Sheet`, `Release Date`, `LEA OST Deadline`, `LEA Certification Date`
    - tab **ELA Statewide Assessments** (71 rows × 1 cols) — cols: `Sheet: ELA Statewide Assessments (Participation and Performance)`
    - tab **Math Statewide Assessments** (63 rows × 1 cols) — cols: `Sheet: Math Statewide Assessments (Participation and Achievement)`
    - tab **Metric Scores - Phase I** (14 rows × 1 cols) — cols: `Sheet: Metric Scores - Phase I`
    - tab **ACCESS Growth** (49 rows × 1 cols) — cols: `Sheet: ACCESS Growth`
    - tab **Adjusted Achievement ** (15 rows × 1 cols) — cols: `Sheet: Adusted Achievement`
    - tab **Chronic Absenteeism** (37 rows × 1 cols) — cols: `Sheet: Chronic Absenteeism`
    - tab **Pre-K Chronic Absenteeism** (35 rows × 1 cols) — cols: `Sheet: Pre-K Chronic Absenteeism`
    - tab **Attendance Growth** (44 rows × 1 cols) — cols: `Sheet: Attendance Growth`
    - tab **CLASS** (20 rows × 1 cols) — cols: `Sheet: CLASS`
    - tab **Post-Secondary Enrollment** (44 rows × 1 cols) — cols: `Sheet: Post-Secondary Enrollment`
    - tab **Directory - Profile** (32 rows × 1 cols) — cols: `Sheet: Directory - Profile`
    - tab **Directory- Before After Care** (18 rows × 1 cols) — cols: `Sheet: Before After Care`
    - tab **Directory - Message from School** (9 rows × 1 cols) — cols: `Sheet: Directory - Message from School`
    - tab **Directory - Transportation** (10 rows × 1 cols) — cols: `Sheet: Directory - Transportation`
    - tab **Directory - Parent Engagement** (15 rows × 1 cols) — cols: `Sheet: Directory - Parent Engagement`
    - tab **8th-9th Grade Transition** (35 rows × 1 cols) — cols: `Sheet: 8th to 9th (Alt Only)`
    - tab **Metric Scores - Phase II** (15 rows × 1 cols) — cols: `Sheet: Metric Scores - Phase II`
    - tab **Advanced Coursework - Partic** (40 rows × 1 cols) — cols: `Sheet: Advanced Coursework - Participation`
    - tab **Advanced Coursework - Perform** (39 rows × 1 cols) — cols: `Sheet: Advanced Coursework - Performance`
    - tab **ACGR** (34 rows × 1 cols) — cols: `Sheet: ACGR`
    - tab **Other Student Assessments** (36 rows × 1 cols) — cols: `Sheet: Other Student Assessments`
    - tab **Re-Enrollment** (38 rows × 1 cols) — cols: `Sheet: Re-Enrollment`
    - tab **SAT Benchmark** (35 rows × 1 cols) — cols: `Sheet: SAT Benchmark`
    - tab **Science Statewide Assessments** (60 rows × 1 cols) — cols: `Sheet: Science Statewide Assessments`
    - tab **ELA - Growth** (52 rows × 1 cols) — cols: `Sheet: ELA - Growth`
    - tab **Math - Growth** (52 rows × 1 cols) — cols: `Sheet: Math - Growth`
    - tab **Mobility - LEA Level** (52 rows × 1 cols) — cols: `Sheet: Mobility - LEA Level`
    - tab **Mobility - School Level ** (56 rows × 1 cols) — cols: `Sheet: Mobility - School Level`
    - tab **Academic Persistence** (36 rows × 1 cols) — cols: `Sheet: Academic Persistence (Alternative School Framework Only)`
    - tab **Secondary Completion** (32 rows × 1 cols) — cols: `Sheet: Secondary Completion (Alternative School Framework Only)`
    - tab **Metric Scores - Phase III** (15 rows × 1 cols) — cols: `Sheet: Metric Scores - Phase III`
  - [`2025 Metric Calculation Confirmation (MCC) Data Dictionary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2025%20Metric%20Calculation%20Confirmation%20%28MCC%29%20Data%20Dictionary%20%289.30.25%29.xlsx) — **xlsx** — 33 tab(s)
    - tab **Release Schedule** (32 rows × 5 cols) — cols: `MCC Phase`, `Sheet`, `Release to LEAs`, `LEA OST Deadline`, `LEA Certification Deadline`
    - tab **ELA Statewide Assessments** (71 rows × 1 cols) — cols: `Sheet: ELA Statewide Assessments (Participation and Achievement)`
    - tab **Math Statewide Assessments** (63 rows × 1 cols) — cols: `Sheet: Math Statewide Assessments (Participation and Achievement)`
    - tab **Metric Scores - Phase I** (14 rows × 1 cols) — cols: `Sheet: Metric Scores - Phase I`
    - tab **ACCESS Growth** (48 rows × 1 cols) — cols: `Sheet: ACCESS Growth`
    - tab **Adjusted Achievement ** (15 rows × 1 cols) — cols: `Sheet: Adusted Achievement`
    - tab **Chronic Absenteeism** (37 rows × 1 cols) — cols: `Sheet: Chronic Absenteeism`
    - tab **Pre-K Chronic Absenteeism** (35 rows × 1 cols) — cols: `Sheet: Pre-K Chronic Absenteeism`
    - tab **Attendance Growth** (43 rows × 1 cols) — cols: `Sheet: Attendance Growth`
    - tab **CLASS** (20 rows × 1 cols) — cols: `Sheet: CLASS`
    - tab **Discipline** (44 rows × 1 cols) — cols: `Sheet: Discipline`
    - tab **Post-Secondary Enrollment** (44 rows × 1 cols) — cols: `Sheet: Post-Secondary Enrollment`
    - tab **Directory - Profile** (34 rows × 1 cols) — cols: `Sheet: Directory - Profile`
    - tab **Directory- Before After Care** (18 rows × 1 cols) — cols: `Sheet: Before After Care`
    - tab **Directory - Message from School** (9 rows × 1 cols) — cols: `Sheet: Directory - Message from School`
    - tab **Directory - Transportation** (10 rows × 1 cols) — cols: `Sheet: Directory - Transportation`
    - tab **Directory - Parent Engagement** (15 rows × 1 cols) — cols: `Sheet: Directory - Parent Engagement`
    - tab **8th to 9th (Alt Only)** (35 rows × 1 cols) — cols: `Sheet: 8th to 9th (Alt Only)`
    - tab **Metric Scores - Phase II** (15 rows × 1 cols) — cols: `Sheet: Metric Scores - Phase II`
    - tab **Advanced Coursework - Partic** (40 rows × 1 cols) — cols: `Sheet: Advanced Coursework - Participation`
    - tab **Advanced Coursework - Perform** (39 rows × 1 cols) — cols: `Sheet: Advanced Coursework - Performance`
    - tab **Graduation** (34 rows × 1 cols) — cols: `Sheet: Graduation`
    - tab **Other Student Assessments** (36 rows × 1 cols) — cols: `Sheet: Other Student Assessments`
    - tab **Re-Enrollment** (37 rows × 1 cols) — cols: `Sheet: Re-Enrollment`
    - tab **SAT Benchmark** (35 rows × 1 cols) — cols: `Sheet: SAT Benchmark`
    - tab **Science Statewide Assessments** (60 rows × 1 cols) — cols: `Sheet: Science Statewide Assessments`
    - tab **ELA - Growth** (52 rows × 1 cols) — cols: `Sheet Text`
    - tab **Math - Growth** (52 rows × 1 cols) — cols: `Sheet Text`
    - tab **Mobility - LEA Level** (52 rows × 1 cols) — cols: `Sheet: Mobility - LEA Level`
    - tab **Mobility - School Level ** (56 rows × 1 cols) — cols: `Sheet: Mobility - School Level`
    - tab **Academic Persistence (Alt Only)** (36 rows × 1 cols) — cols: `Sheet: Academuc Persistence (Alt Only)`
    - tab **Secondary Completion (Alt Only)** (32 rows × 1 cols) — cols: `Sheet: Secondary Completion (Alt Only)`
    - tab **Metric Scores - Phase III** (15 rows × 1 cols) — cols: `Sheet: Metric Scores - Phase III`
  - [`DC School Report Card Advanced Coursework and SAT – Metric Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Advanced%20Coursework%20and%20SAT%20-%20Metric%20Scores%20%282025%29.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (21 rows × 1 cols) — cols: `School Year 2024-25 DC School Report Card Advanced Coursework and SAT Metric Scores Office of the State Superintendent of Education`
    - tab **Data Dictionary** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (58 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (1,096 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (2,176 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (58 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Framework Scores** (766 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (1,606 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Assessment – Metric Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Assessment%20-%20Metric%20Scores%20%282025%29.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (52 rows × 1 cols) — cols: `School Year 2024-25 DC School Year Report Card Assessment Data Office of the State Superintendent of Education`
    - tab **Data Dictionary** (84 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (132 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (3,833 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (14,837 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (343 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Framework Scores** (5,536 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (17,041 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Attendance – Metric Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Attendance%20-%20Metric%20Scores%20%282025%29.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (40 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (57 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (2,333 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (8,899 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (171 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Framework Scores** (3,203 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (9,889 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card CLASS – Metric Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20CLASS%20-%20Metric%20Scores%20%282025%29.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (22 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **LEA Framework Scores** (112 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (439 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Student Movement - Metric Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Student%20Movement%20-%20Metric%20Scores%20%282025%29.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `School Year 2024-25 DC School Report Card Student Movement Data Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (36 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (7,383 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (1,833 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (77 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (4,096 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Framework Scores** (1,291 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card – DC SAYS Grades 3-12 Student Metric Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20%E2%80%93%20DC%20SAYS%20Grades%203-12%20Student%20Metric%20Scores%20%282025%29v3.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (17 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (24 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Gradeband Scores** (23 rows × 4 cols) — cols: `Gradeband`, `Metric`, `Metric Score`, `School Year`
    - tab **LEA Gradeband Scores** (987 rows × 6 cols) — cols: `LEA Name`, `LEA Code`, `Gradeband`, `Metric`, `Metric Score`, `School Year`
    - tab **School Gradeband Scores** (3,229 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Gradeband`, `Metric`, `Metric Score`, `School Year`
  - [`DC School Report Card – DC SAYS Grades PK-12 Family Metric Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20%E2%80%93%20DC%20SAYS%20Grades%20PK-12%20Family%20Metric%20Scores%20%282025%29v3.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (17 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (26 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (8 rows × 4 cols) — cols: `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **LEA Overall Scores** (428 rows × 6 cols) — cols: `LEA Name`, `LEA Code`, `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **School Overall Scores** (1,702 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Group`, `Metric`, `Metric Score`, `School Year`
  - [`DC School Report Card – DC SAYS Grades PK-12 Staff Metric Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20%E2%80%93%20DC%20SAYS%20Grades%20PK-12%20Staff%20Metric%20Scores%20%282025%29v3.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (17 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (26 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (10 rows × 4 cols) — cols: `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **LEA Overall Scores** (559 rows × 6 cols) — cols: `LEA Name`, `LEA Code`, `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **School Overall Scores** (2,197 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Group`, `Metric`, `Metric Score`, `School Year`
  - [`DC School Report Card – DC SAYS Adult Student and Staff Metric Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20%E2%80%93%20DC%20SAYS%20Adult%20Student%20and%20Staff%20Metric%20Scores%20%282025%29v3.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (31 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Student State Gradeband Scores** (12 rows × 4 cols) — cols: `Gradeband`, `Metric`, `Metric Score`, `School Year`
    - tab **Student LEA-School Gradeband** (111 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Gradeband`, `Metric`, `Metric Score`, `School Year`
    - tab **Staff State Overall Scores** (10 rows × 4 cols) — cols: `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **Staff LEA-School Overall** (91 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Group`, `Metric`, `Metric Score`, `School Year`
  - [`DC School Report Card Discipline - Metric Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Discipline%20-%20Metric%20Scores%20%282025%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (34 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (134 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (7,246 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (26,356 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (666 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Graduation and College Enrollment – Metric Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Graduation%20and%20College%20Enrollment%20-%20Metric%20Scores%20%282025%29.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (22 rows × 1 cols) — cols: `School Year 2024-25 DC School Report Card Graduation and College Enrollment Data Office of the State Superintendent of Education`
    - tab **Data Dictionary** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (94 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (1,400 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (2,947 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (73 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Framework Scores** (603 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (1,177 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card LEA Course Catalog (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20LEA%20Course%20Catalog%20%282025%29_v2%20%281%29.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (23 rows × 1 cols) — cols: `School Year 2025-26 DC School Report Card Course Catalog Data Office of the State Superintendent of Education`
    - tab **Course Catalog** (19,901 rows × 21 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `OSSE Subject Area`, `LEA Course Name`, `OSSE Course Code`, `OSSE Course Title`, `Literacy Curriculum Used`, `Math Curriculum Used` …
  - [`DC School Report Card School Directory Information (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20School%20Directory%20Information%20%282025%29.xlsx) — **xlsx** — 2 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Profile Data 2024-2025** (250 rows × 27 cols) — cols: `School ID`, `School Name`, `LEA ID`, `LEA Name`, `Sector`, `Monday Instructional Hours`, `Tuesday Instructional Hours`, `Wednesday Instructional Hours`, `Thursday Instructional Hours`, `Friday Instructional Hours`, `Pre-Kindergarten (3) Instructional Hours`, `Pre-Kindergarten (4) Instructional Hours` …
  - [`DC School Report Card Accountability Scores (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Accountability%20Scores%20%282025%29.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes** (17 rows × 1 cols) — cols: `School Year 2024-25 DC School Report Card Aggregate Data Office of the State Superintendent of Education`
    - tab **Data Dictionary** (73 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Student Group Scores** (1,215 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Accountability Framework`, `Student Group`, `Student Group Points Earned`, `Student Group Points Possible`, `Student Group Score`, `School Year`
    - tab **Metric Scores by Framework** (3,531 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Accountability Framework`, `Metric Name`, `Total Points Earned`, `Total Points Possible`, `Percent of Points Earned`
    - tab **Framework Scores** (275 rows × 13 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Accountability Framework`, `Framework Points Earned`, `Framework Points Possible`, `Framework Score`, `Framework Weight`, `Weighted Framework Score` …
    - tab **School Scores** (201 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `School Score`, `School Year`
    - tab **State Student Group Scores** (28 rows × 4 cols) — cols: `Framework`, `Student Group`, `Student Group Score`, `School Year`
    - tab **LEA Student Group Scores** (425 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Framework`, `Student Group`, `Student Group Score`, `School Year`
    - tab **Framework Percentile Rank** (239 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Framework`, `Sub- Framework`, `Framework Percentile Rank`, `School Year`
  - [`DC School Report Card Floors and Targets (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Floors%20and%20Targets%20%282025%29_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (17 rows × 1 cols) — cols: `School Year 2024-25 DC School Report Card Floors and Targets Office of the State Superintendent of Education`
    - tab **Data Dictionary** (8 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Floors and Targets** (376 rows × 6 cols) — cols: `Metric Name`, `School Framework`, `Student Group`, `Floor`, `Target`, `School Year`
  - [`DC School Report Card State-Level MSAA Participation Data (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20State-Level%20MSAA%20Participation%20Data%20%282025%29.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes and Business Rules** (18 rows × 1 cols) — cols: `2024-25 MSAA Participation Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (11 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Participation** (205 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `School Framework`, `Count`, `Total Count` …
  - [`DC School Report Card State-Level DC CAPE Science and DLM Cross Tabulated Data (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20State-Level%20DC%20CAPE%20Science%20and%20DLM%20Cross%20Tabulated%20Data%20%282025%29.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes and Business Rules** (23 rows × 1 cols) — cols: `2024-25 Statewide Cross-tabulated Science Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (28 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (51 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Grade of Enrollment`, `Student Group`, `Student Group Value`, `Count`, `Total Count`, `Percent`
    - tab **Performance Level** (325 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Grade of Enrollment`, `Student Group`, `Student Group Value`, `Count`, `Total Count`, `Percent`
    - tab **Participation** (52 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Grade of Enrollment`, `Student Group`, `Student Group Value`, `Count`, `Total Count`, `Percent`
  - [`DC School Report Card State-Level DC CAPE and MSAA Cross-Tabulated Data (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20State-Level%20DC%20CAPE%20and%20MSAA%20Cross-Tabulated%20Data%20%282025%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes and Business Rules** (25 rows × 1 cols) — cols: `2024-25 Statewide Cross-tabulated Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting,Exceeding** (844 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Approaching, Meeting, Exceeding** (844 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Performance Level** (5,984 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Participation** (857 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`, `Metric`
  - [`DC School Report Card State Overall Assessment Growth Metric Scores Cross Tabulated (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20State%20Overall%20Assessment%20Growth%20Metric%20Scores%20Cross%20Tabulated%20%282025%29.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (47 rows × 1 cols) — cols: `2024-25 Statewide Assessment Cross-tabulated Growth Scores Office of the State Superintendent of Education`
    - tab **Data Dictionary** (33 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (217 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card State Overall ACGR Metric Scores Cross Tabulated (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20State%20Overall%20ACGR%20Metric%20Scores%20Cross%20Tabulated%20%282025%29.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (47 rows × 1 cols) — cols: `2024-25 Statewide Cross-tabulated Adjusted Cohort Graduation Rates (ACGR) Office of the State Superintendent of Education`
    - tab **Data Dictionary** (33 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (109 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card - Progress Toward Long Term Goals`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20-%202024-25%20Progress%20Toward%20Long%20Term%20Goals%20%282025%29.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `2024-25 Progress Toward Long-Term Achievement Goals Office of the State Superintendent of Education`
    - tab **Data Dictionary** (22 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **State** (81 rows × 7 cols) — cols: `Level`, `Student Group`, `Metric`, `Grade Band`, `Goal`, `Score`, `Difference`
    - tab **LEA** (1,743 rows × 9 cols) — cols: `Level`, `LEA Code`, `LEA Name`, `Student Group`, `Metric`, `Grade Band`, `Goal`, `Score`, `Difference`
    - tab **School** (3,175 rows × 11 cols) — cols: `Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Student Group`, `Metric`, `Grade Band`, `Goal`, `Score`, `Difference`
  - [`DC School Report Card Accountability Scores (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Accountability%20Scores%20%282024%29.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (73 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Student Group Scores** (1,212 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Accountability Framework`, `Student Group`, `Student Group Points Earned`, `Student Group Points Possible`, `Student Group Score`, `School Year`
    - tab **Metric Scores by Framework** (3,536 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Accountability Framework`, `Metric Name`, `Total Points Earned`, `Total Points Possible`, `Percent of Points Earned`
    - tab **Framework Scores** (273 rows × 13 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Accountability Framework`, `Framework Points Earned`, `Framework Points Possible`, `Framework Score`, `Framework Weight`, `Weighted Framework Score` …
    - tab **School Scores** (200 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `School Score`, `School Year`
    - tab **LEA Student Group Scores** (430 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Framework`, `Student Group`, `Student Group Score`, `School Year`
    - tab **State Student Group Scores** (28 rows × 4 cols) — cols: `Framework`, `Student Group`, `Student Group Score`, `School Year`
    - tab **Framework Percentile Rank** (239 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Framework`, `Sub- Framework`, `Framework Percentile Rank`, `School Year`
  - [`DC School Report Card Advanced Coursework and SAT-Metric Scores (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Advanced%20Coursework%20and%20SAT%20-%20Metric%20Scores%20%282024%29.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (217 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (1,546 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (721 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Aggregate Enrollment Data (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20DC%20School%20Report%20Card%20Aggregate%20Enrollment%20Data%20%282%29.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (10 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (14 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Ever Enrolled Population** (5,058 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Student Group`, `Grade`, `Percent Enrolled`, `Enrollment Count`, `Total Count of Students`, `School Year`
  - [`DC School Report Card Assessment – Metric Scores (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Assessment%20-%20Metric%20Scores%20%282024%29.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (84 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (361 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (14,116 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (3,706 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (937 rows × 6 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **School Framework Scores** (16,531 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **LEA Framework Scores** (5,221 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
  - [`DC School Report Card Assessment Science – Metric Scores (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Assessment%20Science%20-%20Metric%20Scores%20%282024%29.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (17 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (561 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (11,100 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (3,274 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Attendance – Metric Scores (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Attendance%20-%20Metric%20Scores%20%282024%29.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (217 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (9,091 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (2,401 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (505 rows × 6 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **School Framework Scores** (9,961 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **LEA Framework Scores** (3,091 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
  - [`DC School Report Card CLASS – Metric Scores (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20CLASS%20-%20Metric%20Scores%20%282024%29.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (16 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (22 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Framework Scores** (442 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **LEA Framework Scores** (118 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
  - [`DC School Report Card Discipline – Metric Scores (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Discipline%20-%20Metric%20Scores%20%282024%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (34 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (577 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (30,121 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (8,401 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (2,305 rows × 6 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
  - [`DC School Report Card Floors and Targets (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Floors%20and%20Targets%20%282024%29.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (8 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Floors and Targets** (376 rows × 6 cols) — cols: `Metric Name`, `School Framework`, `Student Group`, `Floor`, `Target`, `School Year`
  - [`DC School Report Card Graduation and College Enrollment – Metric Scores (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Graduation%20and%20College%20Enrollment%20-%20Metric%20Scores%20%282024%29.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (359 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (2,862 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (1,371 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card School Directory Information (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20School%20Directory%20Information%20%282024%29%20update.xlsx) — **xlsx** — 2 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Profile Data 2023-2024** (250 rows × 28 cols) — cols: `School ID`, `School Name`, `LEA ID`, `LEA Name`, `Sector`, `School Type`, `Monday Instructional Hours`, `Tuesday Instructional Hours`, `Wednesday Instructional Hours`, `Thursday Instructional Hours`, `Friday Instructional Hours`, `Pre-Kindergarten (3) Instructional Hours` …
  - [`DC School Report Card Student Movement – Metric Scores (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Student%20Movement%20-%20Metric%20Scores%20%282024%29_0.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (89 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (7,368 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (1,849 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (289 rows × 6 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **School Framework Scores** (4,081 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **LEA Framework Scores** (1,291 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
  - [`DC School Report Card – Educator Data (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20Educator%20Workforce%20Data%20Files%20%28Oct%2028%29_0.xlsx) — **xlsx** — 42 tab(s)
    - tab **Overview (C&D)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Demographics_Staff_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Staff Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Staff_LEA** (73 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Staff at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Tch_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Teachers Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_SL_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total School Leaders Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Tch_LEA** (73 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Teachers at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_SL_LEA** (73 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total School Leaders at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Staff_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Staff at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_Tch_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Teachers at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_SL_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total School Leaders at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Gradeband_Tch_SEA** (5 rows × 4 cols) — cols: `Grand Band`, `Total Teachers Citywide`, `Total Teachers in this Grade Band Citywide`, `Percent Teachers in this Grade Band Citywide`
    - tab **Gradeband_Tch_LEA** (144 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Grand Band`, `Total Teachers at this LEA`, `Total Teachers in this Grade Band at this LEA`, `Percent Teachers in this Grade Band at this LEA`
    - tab **Gradeband_Tch_SCH** (459 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Grand Band`, `Total Teachers at this school`, `Total Teachers in this Grade Band at this school`, `Percent Teachers in this Grade Band at this school`
    - tab **Student-Teacher Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_LEA** (73 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_LEA** (73 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_SCH** (255 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SCH** (255 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Staff Ratio`
    - tab **Overview (Prep&Perf)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Codebook (Prep&Perf)** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Effective_Tch_SEA** (2 rows × 2 cols) — cols: `Total SY 2023-24 Teachers that were rated in SY 2022-23 Citywide`, `Percent of SY 2023-34 Teachers rated effective in SY 2022-23 Citywide`
    - tab **Certified_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject infield (DCPS only)`, `Percent Teachers that are teaching a subject infield (DCPS only)`
    - tab **Effective_Tch_LEA** (73 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total SY 2023-24 Teachers that were rated in SY 2022-23 at this LEA`, `Percent of 2023-24 Teachers rated effective in SY 2022-23 at this LEA`, `Notes`
    - tab **Certified_Tch_LEA** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_LEA** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject infield (DCPS only)`, `Percent Teachers that are teaching a subject infield (DCPS only)`
    - tab **Effective_Tch_SCH** (255 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total SY 2023-24 Teachers that were rated in SY 2022-23 at this school`, `Percent of SY 2023-24 Teachers rated effective in SY 2022-23 at this school`, `Notes`
    - tab **Certified_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that hold a DC teaching certification at this school`, `Percent Teachers that hold a DC teaching certification at this school`
    - tab **Infield_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that are teaching a subject infield at this school`, `Percent Teachers that are teaching a subject infield at this school`
    - tab **Exp_Tch_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of Teachers Citywide`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of School Leaders Citywide`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_LEA** (289 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of Teachers at this LEA`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_LEA** (289 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of School Leaders at this LEA`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_SCH** (1,017 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of Teachers at this School`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SCH** (1,017 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of School Leaders at this School`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Overview (S&D)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Supply EPPs** (117 rows × 8 cols) — cols: `EPP Program`, `Total number of candidates and completers in 2022-23`, `Total number of candidates and completers who were teaching in the 2023-24 schoo`, `Subject`, `Number of candidates and completers in this subject of training in 2022-23`, `2022-23 DC EPP Candidates and Completers Certified in this Subject`, `2022-23 DC EPP Candidates and Completers Teaching this Subject in SY 2023-24`, `Number of candidates and completers who were teaching in the subject of training`
    - tab **Vacancies_SEA** (14 rows × 2 cols) — cols: `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_LEA** (118 rows × 5 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_SCH** (388 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Sheet38** (1 rows × 0 cols)
  - [`Metric Calculation Confirmation Data Dictionary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2023-24%20MCC%20Data%20Dictionary%20for%20LEAs%20-%20August%20Update.xlsx) — **xlsx** — 31 tab(s)
    - tab **Summary** (40 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Metric Scores** (15 rows × 1 cols) — cols: `Sheet Description`
    - tab **ELA - Participation** (46 rows × 1 cols) — cols: `Sheet Description`
    - tab **Math - Participation** (45 rows × 1 cols) — cols: `Sheet Description`
    - tab **ELA - Acheivement** (47 rows × 1 cols) — cols: `Sheet Description`
    - tab **Math - Acheivement** (45 rows × 1 cols) — cols: `Sheet Description`
    - tab **Adjusted Achievement ** (16 rows × 1 cols) — cols: `Sheet Description`
    - tab **ACCESS Growth** (47 rows × 1 cols) — cols: `Sheet Description`
    - tab **Attendance Growth** (44 rows × 1 cols) — cols: `Sheet Description`
    - tab **Chronic Absenteeism** (38 rows × 1 cols) — cols: `Sheet Description`
    - tab **Pre-K Chronic Absenteeism** (35 rows × 1 cols) — cols: `Sheet Description`
    - tab **CLASS** (20 rows × 1 cols) — cols: `Sheet Description`
    - tab **Discipline** (45 rows × 1 cols) — cols: `Sheet Description`
    - tab **Post-Secondary Enrollment** (36 rows × 1 cols) — cols: `Sheet Description`
    - tab **Directory - Profile** (35 rows × 1 cols) — cols: `Sheet Description`
    - tab **Directory- Before After Care** (19 rows × 1 cols) — cols: `Sheet Description`
    - tab **Directory - Message from School** (10 rows × 1 cols) — cols: `Sheet Description`
    - tab **Directory - Transportation** (11 rows × 1 cols) — cols: `Sheet Description`
    - tab **Directory - Family Engagement** (16 rows × 1 cols) — cols: `Sheet Description`
    - tab **ELA - Growth** (52 rows × 1 cols) — cols: `Sheet Description`
    - tab **Math - Growth** (52 rows × 1 cols) — cols: `Sheet Description`
    - tab **Graduation** (32 rows × 1 cols) — cols: `Sheet Description`
    - tab **Advanced Coursework - Partic** (40 rows × 1 cols) — cols: `Sheet Description`
    - tab **Advanced Coursework - Perform** (39 rows × 1 cols) — cols: `Sheet Description`
    - tab **Science - Participation** (45 rows × 1 cols) — cols: `Sheet Description`
    - tab **Science- Acheivement** (39 rows × 1 cols) — cols: `Sheet Description`
    - tab **SAT Benchmark** (36 rows × 1 cols) — cols: `Sheet Description`
    - tab **Mobility - School Level ** (56 rows × 1 cols) — cols: `Sheet Description`
    - tab **Mobility - LEA Level** (52 rows × 1 cols) — cols: `Sheet Description`
    - tab **Re-Enrollment** (38 rows × 1 cols) — cols: `Sheet Description`
    - tab **Other Student Assessments** (36 rows × 1 cols) — cols: `Sheet Description`
  - [`DC School Report Card School Finance Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20School%20Finance%20Data%20%282023%29.xlsx) — **xlsx** — 7 tab(s)
    - tab **Overview** (69 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (69 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Finance** (10 rows × 3 cols) — cols: `Finance Disaggregation`, `Value`, `School Year`
    - tab **LEA Finance (multi-school)** (307 rows × 5 cols) — cols: `LEA Name`, `LEA Code`, `Finance Disaggregation`, `Value`, `School Year`
    - tab **LEA Finance (single-school)** (885 rows × 5 cols) — cols: `LEA Name`, `LEA Code`, `Finance Disaggregation`, `Value`, `School Year`
    - tab **School Finance (multi-school)** (2,971 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Finance Disaggregation`, `Value`, `School Year`
    - tab **School Finance (single-school)** (365 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Finance Disaggregation`, `Value`, `School Year`
  - [`DC School Report Card Common Financial Reporting Standards`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Common%20Financial%20Reporting%20Standards%20%282023%29.xlsx) — **xlsx** — 4 tab(s)
    - tab **Overview** (11 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State CFRS** (37 rows × 4 cols) — cols: `Category`, `Finance Disaggregation`, `Value`, `School Year`
    - tab **LEA CFRS** (2,521 rows × 6 cols) — cols: `LEA Name`, `LEA Code`, `Category`, `Finance Disaggregation`, `Value`, `School Year`
    - tab **School CFRS** (9,001 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Category`, `Finance Disaggregation`, `Value`, `School Year`
  - [`DC School Report Card Aggregate Enrollment Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20Aggregate%20Enrollment%20Data.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (10 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (14 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Ever Enrolled Population** (6,521 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Student Group`, `Grade`, `Percent Enrolled`, `Enrollment Count`, `Total Count of Students`, `School Year`
  - [`DC School Report Card Aggregate Public Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20Aggregate%20Public%20Data_1.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (72 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Enrollment** (6,521 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Student Group`, `Grade`, `Percent Enrolled`, `Enrollment Count`, `Total Count of Students`, `School Year`
    - tab **Student Group Scores** (1,166 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Accountability Framework`, `Student Group`, `Student Group Points Earned`, `Student Group Points Possible`, `Student Group Score`, `School Year`
    - tab **Metric Scores by Framework** (3,486 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Accountability Framework`, `Metric Name`, `Total Points Earned`, `Total Points Possible`, `Percent of Points Earned`
    - tab **Framework Scores** (271 rows × 13 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Accountability Framework`, `Framework Points Earned`, `Framework Points Possible`, `Framework Score`, `Framework Weight`, `Weighted Framework Score` …
    - tab **School Scores** (200 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `School Score`, `School Year`
    - tab **LEA Student Group Scores** (421 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Framework`, `Student Group`, `Student Group Score`, `School Year`
    - tab **State Student Group Scores** (28 rows × 4 cols) — cols: `Framework`, `Student Group`, `Student Group Score`, `School Year`
  - [`DC School Report Card AP IB and SAT – Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20AP%20IB%20and%20SAT%20-%20Metric%20Scores_0.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Overall Scores** (1,441 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (661 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Overall Scores** (217 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Report Card Attendance - Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20Attendance%20-%20Metric%20Scores.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Overall Scores** (9,301 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (2,445 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Overall Scores** (217 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (361 rows × 6 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **School Framework Scores** (10,123 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **LEA Framework Scores** (3,329 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
  - [`DC School Report Card Directory Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20School%20Directory%20-%20Data%20%282023%29.xlsx) — **xlsx** — 2 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Profile Data SY2022-2023** (251 rows × 28 cols) — cols: `School ID`, `School Name`, `LEA ID`, `LEA Name`, `Sector`, `School Type`, `Monday Instructional Hours`, `Tuesday Instructional Hours`, `Wednesday Instructional Hours`, `Thursday Instructional Hours`, `Friday Instructional Hours`, `Pre-Kindergarten (3) Instructional Hours` …
  - [`DC School Report Card CLASS - Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20CLASS%20-%20Metric%20Scores.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (16 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (22 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Framework Scores** (442 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **LEA Framework Scores** (118 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
  - [`DC School Report Card Graduation and College Enrollment - Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20Graduation%20and%20College%20Enrollment%20-%20Metric%20Scores_0.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (359 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (2,848 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (1,343 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Student Movement - Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20Student%20Movement%20-%20Metric%20Scores.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Overall Scores** (7,322 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (1,818 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Overall Scores** (89 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (289 rows × 6 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **School Framework Scores** (4,021 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **LEA Framework Scores** (1,276 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
  - [`DC School Report Card – School Summative Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20-%20Summative%20Score%20Data%20%282023%29.xlsx) — **xlsx** — 2 tab(s)
    - tab **Data Notes** (10 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **All Schools** (200 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Summative School Score`, `Elementary School`, `Middle School`, `High School`
  - [`DC School Report Card - Discipline Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Discipline%20Data%20%282023%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (34 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (1,009 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (49,897 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (14,701 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (4,985 rows × 6 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
  - [`DC School Report Card Assessment Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2023%20DC%20School%20Report%20Card%20Assessment-%20Metric%20Scores.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (84 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Overall Scores** (13,951 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (16,501 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **LEA Overall Scores** (3,691 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Framework Scores** (5,401 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **State Overall Scores** (361 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (1,153 rows × 6 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
  - [`DC School Report Card Floors and Targets Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2023%20DC%20School%20Report%20Card%20Floors%20and%20Targets%20Public%20Data.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (8 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Floors and Targets** (376 rows × 6 cols) — cols: `Metric Name`, `School Framework`, `Student Group`, `Floor`, `Target`, `School Year`
  - [`DC School Report Card Aggregate Enrollment Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Aggregate%20Enrollment%20Data.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (12 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (17 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Ever Enrolled Population** (6,135 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Student Group`, `Grade`, `Percent Enrolled`, `Enrollment Count`, `Total Count of Students`, `School Year`
    - tab **Audit Population** (6,080 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Student Group`, `Grade`, `Percent Enrolled`, `Audit Count`, `Total Number of Student in Audit`, `School Year`
  - [`DC School Report Card - School Accountability Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Aggregate%20Public%20Data.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes** (16 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (92 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Directory** (253 rows × 10 cols) — cols: `LEA Code`, `School Name`, `School Code`, `School Type`, `Ward`, `Address`, `Phone Number`, `Web Address`, `Leader Title`, `Leader Name`
    - tab **Enrollment** (6,135 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Student Group`, `Grade`, `Percent Enrolled`, `Enrollment Count`, `Total Count of Students`, `School Year`
    - tab **Student Group Scores** (1,259 rows × 14 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Accountability Framework`, `Student Group`, `Student Group Points Earned`, `Student Group Points Possible`, `Student Group Score`, `Framework Points Earned` …
    - tab **Framework Scores** (246 rows × 13 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Accountability Framework`, `Framework Points Earned`, `Framework Points Possible`, `Framework Score`, `Framework Weight`, `Weighted Framework Score` …
    - tab **School Scores** (208 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `School Score`, `School Year`
    - tab **LEA Student Group Scores** (518 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Framework`, `Student Group`, `Student Group Score`, `School Year`
    - tab **State Student Group Scores** (28 rows × 4 cols) — cols: `Framework`, `Student Group`, `Student Group Score`, `School Year`
  - [`DC School Report Card AP IB and SAT - Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20AP%20IB%20and%20SAT%20-%20Metric%20Scores.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (12 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (30 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (429 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (3,771 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (8,386 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Assessment – Metric Scores`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xbjixab1cegi868y205be1duiahwb20t&file_id=f_1267017259127) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (12 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (84 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **LEA Overall Scores** (108,373 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (409,012 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Overall Scores** (3,779 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Framework Scores** (22,101 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (66,561 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (1,713 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Attendance - Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Attendance%20-%20Metric%20Scores.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (14 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (59 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (429 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (13,846 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (53,236 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (857 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Framework Scores** (19,046 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (60,516 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card CLASS - Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20CLASS%20-%20Metric%20Scores%20%284.3.23%29.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (13 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **LEA Framework Scores** (106 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (433 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Discipline - Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Discipline%20-%20Metric%20Scores.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (39 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (1,499 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (62,791 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (226,591 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (5,993 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Graduation and College Enrollment - Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Graduation%20and%20College%20Enrollment%20-%20Metric%20Scores.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (13 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (32 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (536 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (5,851 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (12,676 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Finance Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20School%20Finance%20Data%20%282%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (12 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (69 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Finance** (10 rows × 3 cols) — cols: `Finance Disaggregation`, `Value`, `School Year`
    - tab **LEA Finance (multi-school)** (271 rows × 5 cols) — cols: `LEA Name`, `LEA Code`, `Finance Disaggregation`, `Value`, `School Year`
    - tab **School Finance (multi-school)** (2,896 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Finance Disaggregation`, `Value`, `School Year`
    - tab **School Finance (single-school)** (442 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Finance Disaggregation`, `Value`, `School Year`
  - [`DC School Report Card Student Movement - Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Student%20Movement%20-%20Metric%20Scores_0.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (14 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (61 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (120 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (3,244 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (12,537 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (302 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Framework Scores** (3,322 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (9,865 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`DC School Report Card Teachers and School Leaders`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Teachers%20and%20School%20Leaders%20-%20Metric%20Scores.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (6 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (13 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Teacher and School Leader Staff** (8,248 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Subgroup`, `Metric`, `MetricScore`, `School Year`
  - [`2021 DC School Report Card Aggregate Enrollment Metrics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Aggregate%20Enrollment%20Metrics_1.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (13 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (16 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Ever Enrolled Population** (5,992 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Student Group`, `Grade`, `Percent Enrolled`, `Enrollment Count`, `Total Count of Students`, `School Year`
    - tab **Audit Population** (5,975 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Student Group`, `Grade`, `Percent Enrolled`, `Audit Count`, `Total Number of Student in Audit`, `School Year`
  - [`2021 DC School Report Card Alternative School Metrics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Alternative%20Schools%20Metrics.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (30 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Scores by Framework** (1,599 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Scores by Framework** (1,223 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Scores by Framework** (283 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`2021 DC School Report Card AP, IB and SAT Metrics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20AP%20IB%20and%20SAT%20Metrics.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Metric Scores** (12,409 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Metric Scores** (5,547 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Metric Scores** (377 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`2021 DC School Report Card Attendance Metrics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Attendance%20Metrics%20%281%29.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Metric Scores** (56,683 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Scores by Framework** (62,981 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Metric Scores** (14,101 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Scores by Framework** (18,895 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Metric Scores** (317 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Scores by Framework** (881 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`2021 DC School Report Card Directory Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Directory%20Data.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (13 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Directory** (249 rows × 11 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `School Ward`, `Address`, `Phone Number`, `Web Address`, `Leader Title`, `Leader Name`
  - [`2021 DC School Report Card Graduation and College Enrollment Metrics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Graduation%20and%20College%20Enrollment%20Metrics.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (19 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Metric Scores** (17,203 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Metric Scores** (8,273 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Metric Scores** (471 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`2021 DC School Report Card Learning Environment Metrics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Learning%20Environment%20Data_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (7 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (14 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **In-Person Rate** (731 rows × 5 cols) — cols: `Month`, `Grade Band`, `Ward`, `Percent of time In-Person`, `School Year`
    - tab **Learning Environment** (8,779 rows × 7 cols) — cols: `Month`, `Grade Band`, `Ward`, `Student Group`, `Learning Environment`, `Percent of Students in Learning Environment`, `School Year`
  - [`2021 DC School Report Card Student Movement Metrics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Student%20Movement%20Metrics.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Metric Scores** (16,730 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Scores by Framework** (15,005 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Metric Scores** (4,112 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Scores by Framework** (4,659 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Metric Scores** (111 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Scores by Framework** (281 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`2021 DC School Report Card Teacher and School Leader Metrics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Teacher%20and%20School%20Leader%20Metrics.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (12 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (12 rows × 4 cols) — cols: `Field Name`, `Variable Type`, `Description`, `Allowable Values`
    - tab **Teacher and School Leader Staff** (4,338 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Subgroup`, `Metric`, `Metric Score`, `School Year`
  - [`2021 DC School Report Card Per-Pupil Expenditures File`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20School%20Finance.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (11 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (69 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Finance** (10 rows × 3 cols) — cols: `Finance Disaggregation`, `Value`, `School Year`
    - tab **LEA Finance (multi-school)** (271 rows × 5 cols) — cols: `LEA Name`, `LEA Code`, `Finance Disaggregation`, `Value`, `School Year`
    - tab **School Finance (multi-school)** (2,911 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Finance Disaggregation`, `Value`, `School Year`
    - tab **School Finance (single-school)** (442 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Finance Disaggregation`, `Value`, `School Year`
  - [`2020 DC School Report Card Aggregate Data File`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2020%20DC%20School%20Report%20Card%20Aggregate%20Public%20Data.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (36 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Directory** (244 rows × 11 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `School Ward`, `Address`, `Phone Number`, `Web Address`, `Leader Title`, `Leader Name`
    - tab **Enrollment** (4,942 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Student Group`, `Grade`, `Percent Enrolled`, `Enrollment Count`, `Total Count of Students`, `School Year`
    - tab **Teacher and Health Staff** (5,081 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Metric`, `Metric Score`, `School Year`
  - [`2020 DC School Report Card Cross-Tabulated Data File`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2020%20DC%20School%20Report%20Card%20Public%20Data%20-%20Metric%20Scores.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (19 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Metric Scores** (17,299 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Metric Scores** (8,185 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Metric Scores** (466 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`2020 DC School Report Card Per-Pupil Expenditures File`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2020%20DC%20School%20Report%20Card%20Per-Pupil%20Expenditures%20File.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (11 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (93 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Finance** (5 rows × 2 cols) — cols: `Per Pupil Expenditures`, `Per Pupil Expenditures by Type`
    - tab **Multi-Site LEA Finance** (22 rows × 2 cols) — cols: `Per Pupil Expenditures`, `Per Pupil Expenditures by Type`
    - tab **Multi-Site School Finance** (199 rows × 2 cols) — cols: `Per Pupil Expenditures`, `Per Pupil Expenditures by Type`
    - tab **Single-Site School Finance** (44 rows × 2 cols) — cols: `Per Pupil Expenditures`, `Per Pupil Expenditures by Type`
  - [`2019 DC School Report Card and STAR Framework Data File`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019%20DC%20School%20Report%20Card%20Aggregate%20Public%20Data_.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (76 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Directory** (239 rows × 10 cols) — cols: `LEA Code`, `School Name`, `School Code`, `School Type`, `School Ward`, `Address`, `Phone Number`, `Web Address`, `Leader Title`, `Leader Name`
    - tab **Enrollment** (4,887 rows × 11 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Student Group`, `Grade`, `Percent Enrolled`, `Enrollment Count`, `Total Count of Students`
    - tab **STAR Student Group Scores** (1,199 rows × 14 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Accountability Framework`, `Student Group`, `Student Group Points Earned`, `Student Group Points Possible`, `Student Group Score`, `Framework Points Earned` …
    - tab **STAR Framework Scores** (252 rows × 13 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Accountability Framework`, `Framework Weight`, `Framework Points Earned`, `Framework Points Possible`, `Framework STAR Score`, `Framework STAR Rating` …
    - tab **STAR Scores** (207 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `STAR Score`, `STAR Rating`, `School Year`
    - tab **LEA Student Group Scores** (227 rows × 6 cols) — cols: `LEA Name`, `LEA Code`, `Framework`, `Student Group`, `Student Group Score`, `School Year`
    - tab **State Student Group Scores** (34 rows × 4 cols) — cols: `Framework`, `Student Group`, `Student Group Score`, `School Year`
  - [`2019 DC School Report Card and STAR Framework Cross-Tabulated Data File`](https://app.box.com/s/tb3ipg32wo48di3ph58llnpim5632fn9) — **xlsx** — ⚠️ behind Box/Egnyte/Google; harvest with the update skill
  - [`2019 DC School Report Card Per-Pupil Expenditures File`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%20Report%20Card_School%20Finance%20Public%20File.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Note** (10 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (93 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Finance** (3 rows × 2 cols) — cols: `Per Pupil Expenditures`, `Per Pupil Expenditures by Type`
    - tab **Multi-Site LEA Finance** (22 rows × 2 cols) — cols: `Per Pupil Expenditures`, `Per Pupil Expenditures by Type`
    - tab **Multi-Site School Finance** (190 rows × 2 cols) — cols: `Per Pupil Expenditures`, `Per Pupil Expenditures by Type`
    - tab **Single-Site School Finance** (45 rows × 2 cols) — cols: `Per Pupil Expenditures`, `Per Pupil Expenditures by Type`
  - [`2018 DC School Report Card and STAR Framework Data Files`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018%20DC%20School%20Report%20Card%20and%20STAR%20Framework%20Public%20Data_2.xlsx) — **xlsx** — 15 tab(s)
    - tab **Data Notes** (26 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (169 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Directory** (237 rows × 11 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Address`, `Phone Number`, `Web Address`, `Leader Title`, `Leader Name`
    - tab **Enrollment** (6,766 rows × 11 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Student Group`, `Grade`, `Metric`, `Metric Score`, `School Year`
    - tab **STAR Metric Scores** (17,902 rows × 16 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `School Framework`, `Student Group`, `Domain`, `Metric`, `Metric N`, `Metric Score` …
    - tab **STAR Student Group Scores** (1,164 rows × 13 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `School Framework`, `Student Group`, `Student Group Points Earned`, `Student Group Points Possible`, `Student Group Score`, `Framework Points Earned` …
    - tab **STAR Framework Scores** (249 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `School Framework`, `Framework Weight`, `Framework Points Earned`, `Framework Points Possible`, `Framework STAR Score`, `Framework STAR Rating`
    - tab **STAR Scores** (204 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `STAR Score`, `STAR Rating`
    - tab **School Report Card Scores** (42,836 rows × 11 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `School Type`, `Ward`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Report Card Scores** (4,617 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Student Group`, `Metric`, `Metric Score`, `School Year`
    - tab **LEA STAR Metric Scores** (3,089 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `School Year`
    - tab **LEA Student Group Scores** (220 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `School Framework`, `Student Group`, `Student Group Score`, `School Year`
    - tab **State Report Card Scores** (584 rows × 4 cols) — cols: `Student/School Group`, `Metric`, `Metric Score`, `School Year`
    - tab **State STAR Metric Scores** (475 rows × 5 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `School Year`
    - tab **State Student Group Scores** (34 rows × 4 cols) — cols: `School Framework`, `Student Group`, `Student Group Score`, `School Year`
  - [`2018 STAR Framework Cross-Tabulated Student Group Data File`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=bzcnvfcfptfgn1937tphy4x8tzvrl27d&file_id=f_2115750109619) — **xlsx** — 7 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School STAR Metric Scores** (167,441 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (148,489 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA STAR Metric Scores** (60,476 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (44,906 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State STAR Metric Scores** (4,629 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Overall Scores** (2,180 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`

### [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/)

⚠️ JS app (open in a browser) · _topics: accountability, assessment, attendance, graduation, discipline, enrollment, demographics, profiles_

- **Format:** Interactive web app (search/browse; not bulk download)
- **Updated:** Annual, refreshed ~December with prior school year
- **Years on page:** Displays latest year only (SY2024-25); history in the Resource Library
- **Notes:** Cross-sector (DCPS + charter). Mirror at schoolreportcard.dc.gov/home and osse.dc.gov/dcschoolreportcard. JS app blocks crawlers (503) — open in a real browser. For analysis use the Resource Library files.
- **Data files (profiled):**
  - [`School STAR Scores (CSV export)`](https://opendata.dc.gov/api/download/v1/items/90b2efbd069842f29817615611619c9b/csv?layers=0) — **csv** — 203 rows × 9 cols
    - cols: `LEA_Code`, `LEA_Name`, `School_Code`, `School_Name`, `School_Type`, `Ward`, `STAR_Score`, `STAR_Rating`, `ObjectId`

### [DC School Report Card & STAR Framework Technical Guide](https://osse.dc.gov/publication/dc-school-report-card-and-star-framework-technical-guide)

_topics: accountability, methodology_

- **Format:** PDF (one per year)
- **Updated:** Annual, with each report card release
- **Years on page:** 2018–2025 (latest Sept 2025 update)
- **Notes:** Methodology for every STAR metric. Essential companion to the data files.
- **Data files (profiled):**
  - [`2025 Report Card Technical Guide (September 2025 Update)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2025%20Report%20Card%20Technical%20Guide%20%28September%202025%20Update%29.pdf) — **pdf** — 71 pages, **extractable tables** on ~18 page(s)
    - p9 table (7 rows): `Current Grade Level`, `Prior Year’s Proficiency Level`
    - p17 table (5 rows): `College Readiness Benchmarks for SAT`
    - p18 table (13 rows): `SAT Test 1`, `SAT Test 2`, `Highest`, `Meet /`, `College`

### [Statewide Assessment Results 2024-25 (DC CAPE / MSAA)](https://osse.dc.gov/assessmentresults2025)

_topics: assessment_

- **Format:** Excel files (hosted on Box) + PDF deck
- **Updated:** Annual, released late summer/fall
- **Years on page:** 2024-25 only on this page
- **Notes:** DC CAPE replaced PARCC in 2023. Data files sit behind Box share links; the State/LEA/School-level files are resolved and profiled below. Box file_ids change when OSSE re-uploads — re-resolve each year with the update skill.
- **Data files (profiled):**
  - [`2024-25 DC CAPE & MSAA — State (SEA) Level`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=l1fz6ucfcut7q7pg8qzbo3l9ffb19pmm&file_id=f_1962534999838) — **xlsx** — 6 tab(s)
    - tab **Data Notes and Business Rules** (26 rows × 1 cols) — cols: `2024-25 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (332 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Approaching, Meeting, Exceeding** (332 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Performance Level** (2,454 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Participation** (330 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
  - [`2024-25 DC CAPE & MSAA — LEA Level`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=a1bx09uvrx0i066n2alof3onbfivboen&file_id=f_1962545899005) — **xlsx** — 6 tab(s)
    - tab **Data Notes and Business Rules** (26 rows × 1 cols) — cols: `2024-25 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (4,484 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Approaching, Meeting, Exceeding** (4,484 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Performance Level** (26,019 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Metric name`, `Count`, `Total Count` …
    - tab **Participation** (4,700 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `lea_name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `School Code`, `Count`, `Total Count` …
  - [`2024-25 DC CAPE & MSAA — School Level`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=h1bdtjr77dgxsllrsrmv9p358f6j9ket&file_id=f_1962543801303) — **xlsx** — 6 tab(s)
    - tab **Data Notes and Business Rules** (26 rows × 1 cols) — cols: `2024-25 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (13,564 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `lea_name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (13,564 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `lea_name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Performance Level** (77,691 rows × 15 cols) — cols: `Aggregation Level`, `LEA Code`, `lea_name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Metric name` …
    - tab **Participation** (13,976 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `lea_name`, `School Code`, `school_name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
  - [`2024-25 Statewide Assessment Results (public deck)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Assessment%202025_PublicDeck%20_FINAL.pdf) — **pdf** — 41 pages, **extractable tables** on ~16 page(s)
    - p3 table (5 rows): `5`
    - p22 table (5 rows): `All`, `DC CAPE`, `MSAA`
    - p28 table (9 rows): `Tested Grade`, `State ELA 4+ Results`, `State Math 4+ Results`

### [Statewide Assessment Results 2023-24 (+ older-year archive index)](https://osse.dc.gov/assessmentresults2024)

_topics: assessment_

- **Format:** Excel (Box) + PDF
- **Updated:** Annual
- **Years on page:** 2023-24 on page; also indexes 2022-23, 2021-22, 2018-19, 2017-18, 2016-17, 2015-16, 2014-15
- **Notes:** Best entry point for OLDER assessment years. URL pattern changed over time: old years use /page/YYYY-YY-parcc-and-msaa-..., new years use /assessmentresultsYYYY — a key fragmentation point.
- **Data files (profiled):**
  - [`DC Public Schools Student Assessment Results (CSV export)`](https://opendata.dc.gov/api/download/v1/items/85fce54dea6946dea827c02a6bda88bb/csv?layers=23) — **csv** — 189,364 rows × 23 cols
    - cols: `OBJECTID`, `SCHOOL_YEAR`, `SCHOOL_WARD`, `SCHOOL_CODE`, `SCHOOL_NAME`, `LEA_CODE`, `LEA_NAME`, `ASSESSMENT_TYPE`, `SUBJECT`, `TESTED_GRADE_SUBJECT`, `GRADE_OF_ENROLLMENT`, `SUBGROUP`
  - [`2023-24 State Level Statewide Assessment Data`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=5nvo8y8p0zmfef6hrb0ivrbfn3xz2f54&file_id=f_1627757245452) — **xlsx** — 7 tab(s)
    - tab **Data Notes and Business Rules** (23 rows × 1 cols) — cols: `2023-24 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (34 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (11,959 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (11,959 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Performance Level** (58,116 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Participation** (6,127 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Grade of Enrollment`, `School Framework`, `Count`, `Total Count` …
    - tab **Subclaim** (188 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Assessment Name`, `Subject`, `Metric`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Percent Meeting Expectations`, `Percent Approaching Expectations`, `Percent Below Expectations` …
  - [`2023-24 LEA Level Statewide Assessment Data`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=x3026w17o4pmrbxjut2io5t51168b5y2&file_id=f_1760741060635) — **xlsx** — 7 tab(s)
    - tab **Data Notes and Business Rules** (23 rows × 1 cols) — cols: `2023-24 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (30 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (36,247 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (36,247 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Performance Level** (179,473 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Participation** (20,208 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Grade of Enrollment`, `School Framework`, `Count`, `Total Count` …
    - tab **Subclaim** (4,413 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Percent Meeting Expectations`, `Percent Approaching Expectations` …
  - [`2023-24 School Level Statewide Assessment Data`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=5gs5mber6fgumxraljpx0a3se21295in&file_id=f_1760740978845) — **xlsx** — 7 tab(s)
    - tab **Data Notes and Business Rules** (23 rows × 1 cols) — cols: `2023-24 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (34 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (94,800 rows × 16 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment` …
    - tab **Approaching, Meeting, Exceeding** (94,800 rows × 16 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment` …
    - tab **Performance Level** (468,842 rows × 16 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment` …
    - tab **Participation** (55,163 rows × 15 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Grade of Enrollment`, `School Framework` …
    - tab **Subclaim** (13,046 rows × 16 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework` …
  - [`2022-23 State Level Statewide Assessment Data`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=br596zlfnrfltvw2yoxvaecm2jkhw51e&file_id=f_1300115605451) — **xlsx** — 9 tab(s)
    - tab **Data Notes and Business Rules** (25 rows × 1 cols) — cols: `2022-23 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (34 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (25,104 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (25,104 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Performance Level** (122,642 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Participation** (12,912 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Grade of Enrollment`, `School Framework`, `Count`, `Total Count` …
    - tab **Subclaim** (269 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Assessment Name`, `Subject`, `Metric`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Percent Meeting Expectations`, `Percent Approaching Expectations`, `Percent Below Expectations` …
    - tab **Adjusted Achievement** (197 rows × 11 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `School Framework`, `Total Count`, `Percent`
    - tab **Accommodations** (38 rows × 10 cols) — cols: `Aggregation Level`, `Asessment Name`, `Subject`, `Student Group`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Total Count`, `Count`, `Percent`
  - [`2022-23 LEA Level Statewide Assessment Data`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=w3dz0osavcf1x4qenwk9yr4n709go41g&file_id=f_1300113448491) — **xlsx** — 8 tab(s)
    - tab **Data Notes and Business Rules** (24 rows × 1 cols) — cols: `2022-23 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (30 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (69,126 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (69,126 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Performance Level** (341,324 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Count` …
    - tab **Participation** (38,779 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Grade of Enrollment`, `School Framework`, `Count`, `Total Count` …
    - tab **Subclaim** (4,504 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework`, `Percent Meeting Expectations`, `Percent Approaching Expectations` …
    - tab **Adjusted Achievement** (1,884 rows × 11 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `School Framework`, `Total Count`, `Percent`
  - [`2022-23 School Level Statewide Assessment Data`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=sqqkkz8jrwrqqqxxsij3p65t3xco47u2&file_id=f_1299960704677) — **xlsx** — 9 tab(s)
    - tab **Data Notes and Business Rules** (24 rows × 1 cols) — cols: `2022-23 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (22 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (183,145 rows × 16 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment` …
    - tab **Approaching, Meeting, Exceeding** (183,145 rows × 16 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment` …
    - tab **Performance Level** (700,000 rows × 16 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment` …
    - tab **Performance Level continue** (203,979 rows × 16 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Tested Grade/Subject`, `Grade of Enrollment` …
    - tab **Participation** (106,577 rows × 15 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Grade of Enrollment`, `School Framework` …
    - tab **Subclaim** (13,066 rows × 16 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `School Code`, `School Name`, `Assessment Name`, `Subject`, `Student Group`, `Tested Grade/Subject`, `Grade of Enrollment`, `School Framework` …
    - tab **Adjusted Achievement** (6,806 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `School Framework`, `Total Count` …
  - [`2022-23 Participation of Students with&nbsp; Disabilities in the Regular Assessment with&nbsp; Accommodations`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SWD%20Participation%20with%20Accommodations%20SY2223.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes and Business Rules** (20 rows × 1 cols) — cols: `2022-23 Participation of Students with Disabilities in the Regular Assessment with Accommodations`
    - tab **School** (1,626 rows × 8 cols) — cols: `Reporting Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Assessment Subject`, `Assessment Name`, `Number of SWDs who tested with accommodations`
    - tab **LEA** (503 rows × 6 cols) — cols: `Reporting Level`, `LEA Code`, `LEA Name`, `Assessment Subject`, `Assessment Name`, `Number of SWDs who tested with accommodations`
    - tab **State** (18 rows × 4 cols) — cols: `Reporting Level`, `Assessment Subject`, `Assessment Name`, `Number of SWDs who tested with accommodations`
  - [`2021-22 State Level PARCC and MSAA Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021-22%20State%20Level%20PARCC%20and%20MSAA%20Data.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes and Business Rules** (12 rows × 1 cols) — cols: `Overview:`
    - tab **prof** (4,752 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Assessment Name`, `Subject`, `Student group`, `Subgroup Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `Count`, `Total Count`, `Percent`
    - tab **perf_level** (23,128 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Assessment Name`, `Subject`, `Student group`, `Subgroup Value`, `Tested Grade/Subject`, `Grade of Enrollment`, `metric_value`, `Count`, `Total Count` …
    - tab **subclaim** (77 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Grade of Enrollment`, `Assessment Name`, `Subject`, `Tested Grade/Subject`, `Student group`, `Subclaim`, `Percent Meeting Expectations`, `Percent Approaching Expectations`, `Percent Below Expectations` …
  - [`2021-22 School, LEA, and State Participation`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021-22%20School%2C%20LEA%2C%20and%20State%20Participation.xlsx.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Overview:`
    - tab **State** (637 rows × 11 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Assessment Name`, `Subject`, `Student group`, `Subgroup Value`, `Grade of Enrollment`, `Count`, `Total Count`, `Percent`
    - tab **LEA** (8,922 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `Assessment Name`, `Subject`, `Student group`, `Subgroup Value`, `Grade of Enrollment`, `Count`, `Total Count`, `Percent`
    - tab **School** (27,162 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `lea_name`, `School Code`, `School Name`, `Assessment Name`, `Subject`, `Student group`, `Subgroup Value`, `Grade of Enrollment`, `Count`, `Total Count` …
  - [`2021-22 PARCC and MSAA Participation and Performance Results for Students with Disabilities`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021-22%20PARCC%20and%20MSAA%20Participation%20and%20Performance%20Results%20for%20Students%20with%20Disabilities.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes and Business Rules** (12 rows × 1 cols) — cols: `Overview:`
    - tab **Data Dictionary** (16,385 rows × 4 cols) — cols: `Data Field`, `Description`, `Permitted Value`, `Data source`
    - tab **State Output** (82 rows × 14 cols) — cols: `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Percent of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+`, `Number of Alternate Assessment Test Takers` …
    - tab **LEA Output** (1,586 rows × 16 cols) — cols: `LEA Code`, `LEA Name`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Percent of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations` …
    - tab **School Output** (4,334 rows × 18 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+` …
  - [`2018-19 PARCC ELA School Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%20PARCC%20School%20Level%20ELA%201.15.20.Xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Overview:`
    - tab **School ELA Overall** (216 rows × 1 cols) — cols: `2019 PARCC English Language Arts/Literacy Results Overall Performance by School`
    - tab **School ELA Grade 3** (136 rows × 1 cols) — cols: `2019 PARCC English Language Arts/Literacy Results Grade 3 Performance by School`
    - tab **School ELA Grade 4** (131 rows × 1 cols) — cols: `2019 PARCC English Language Arts/Literacy Results Grade 4 Performance by School`
    - tab **School ELA Grade 5** (132 rows × 1 cols) — cols: `2019 PARCC English Language Arts/Literacy Results Grade 5 Performance by School`
    - tab **School ELA Grade 6** (76 rows × 1 cols) — cols: `2019 PARCC English Language Arts/Literacy Results Grade 6 Performance by School`
    - tab **School ELA Grade 7** (79 rows × 1 cols) — cols: `2019 PARCC English Language Arts/Literacy Results Grade 7 Performance by School`
    - tab **School ELA Grade 8** (81 rows × 1 cols) — cols: `2019 PARCC English Language Arts/Literacy Results Grade 8 Performance by School`
    - tab **School ELA Grades 9-12** (47 rows × 1 cols) — cols: `2019 PARCC English Language Arts/Literacy Results Grades 9-12 Performance by School`
  - [`2018-19 PARCC Mathematics School Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%20PARCC%20School%20Level%20Math%201.15.20.Xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Overview:`
    - tab **School Math Overall** (216 rows × 1 cols) — cols: `2019 PARCC Mathematics Results Overall Performance by School`
    - tab **School Math Grade 3** (136 rows × 1 cols) — cols: `2019 PARCC Mathematics Results Grade 3 Performance by School`
    - tab **School Math Grade 4** (131 rows × 1 cols) — cols: `2019 PARCC Mathematics Results Grade 4 Performance by School`
    - tab **School Math Grade 5** (132 rows × 1 cols) — cols: `2019 PARCC Mathematics Results Grade 5 Performance by School`
    - tab **School Math Grade 6** (76 rows × 1 cols) — cols: `2019 PARCC Mathematics Results Grade 6 Performance by School`
    - tab **School Math Grade 7** (160 rows × 1 cols) — cols: `2019 PARCC Mathematics Results Grade 7 Performance by School`
    - tab **School Math Grade 8** (189 rows × 1 cols) — cols: `2019 PARCC Mathematics Results Grade 8 Performance by School`
    - tab **School Math Grades 9-12** (97 rows × 1 cols) — cols: `2019 PARCC Mathematics Results Grades 9-12 Performance by School`
  - [`2018-19 Detailed PARCC and MSAA Performance Results`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Detailed%202018-19%20PARCC%20And%20MSAA%20Performance%202.19.20.Xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (13 rows × 1 cols) — cols: `Overview:`
    - tab **State Performance** (2,393 rows × 17 cols) — cols: `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations`, `Percent Level 3+`, `Percent Level 1`, `Percent Level 2`, `Percent Level 3`, `Percent Level 4` …
    - tab **LEA Performance** (28,458 rows × 19 cols) — cols: `LEA Code`, `LEA Name`, `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations`, `Percent Level 3+`, `Percent Level 1`, `Percent Level 2` …
    - tab **School Performance** (80,322 rows × 22 cols) — cols: `School Ward`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations` …
  - [`2018-19, 2017-18, 2016-17 School, LEA, and State Participation`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%2C%202017-18%2C%202016-17%20School%2C%20LEA%2C%20And%20State%20Participation%201.15.20.Xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Overview:`
    - tab **State Level** (52 rows × 2 cols) — cols: `ELA`, `Math`
    - tab **LEA Level** (1,924 rows × 2 cols) — cols: `ELA`, `Math`
    - tab **School Level** (7,371 rows × 2 cols) — cols: `ELA`, `Math`
  - [`2018-19 PARCC and MSAA Participation and Performance Results for Students with Disabilities`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%20PARCC%20and%20MSAA%20Participation%20and%20Performance%20Results%20for%20Students%20with%20Disabilities%201.15.20.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes and Business Rules** (12 rows × 1 cols) — cols: `Overview:`
    - tab **Data Dictionary** (16,385 rows × 4 cols) — cols: `Data Field`, `Description`, `Permitted Value`, `Data source`
    - tab **State Output** (73 rows × 14 cols) — cols: `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Percent of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+`, `Number of Alternate Assessment Test Takers` …
    - tab **LEA Output** (1,427 rows × 16 cols) — cols: `LEA Code`, `LEA Name`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Percent of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations` …
    - tab **School Output** (4,317 rows × 18 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+` …
  - [`2017-18 PARCC ELA School Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018%20PARCC%20School%20Level%20ELA.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Overview:`
    - tab **School ELA Overall** (211 rows × 1 cols) — cols: `2018 PARCC English Language Arts/Literacy Results Overall Performance by School`
    - tab **School ELA Grade 3** (134 rows × 1 cols) — cols: `2018 PARCC English Language Arts/Literacy Results Grade 3 Performance by School`
    - tab **School ELA Grade 4** (129 rows × 1 cols) — cols: `2018 PARCC English Language Arts/Literacy Results Grade 4 Performance by School`
    - tab **School ELA Grade 5** (128 rows × 1 cols) — cols: `2018 PARCC English Language Arts/Literacy Results Grade 5 Performance by School`
    - tab **School ELA Grade 6** (80 rows × 1 cols) — cols: `2018 PARCC English Language Arts/Literacy Results Grade 6 Performance by School`
    - tab **School ELA Grade 7** (80 rows × 1 cols) — cols: `2018 PARCC English Language Arts/Literacy Results Grade 7 Performance by School`
    - tab **School ELA Grade 8** (79 rows × 1 cols) — cols: `2018 PARCC English Language Arts/Literacy Results Grade 8 Performance by School`
    - tab **School ELA Grades 9-12** (46 rows × 1 cols) — cols: `2018 PARCC English Language Arts/Literacy Results Grades 9-12 Performance by School`
  - [`2017-18 PARCC Mathematics School Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018%20PARCC%20School%20Level%20Math.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes** (17 rows × 1 cols) — cols: `Overview:`
    - tab **School Math Overall** (213 rows × 1 cols) — cols: `2018 PARCC Mathematics Results Overall Performance by School`
    - tab **School Math Grade 3** (134 rows × 1 cols) — cols: `2018 PARCC Mathematics Results Grade 3 Performance by School`
    - tab **School Math Grade 4** (129 rows × 1 cols) — cols: `2018 PARCC Mathematics Results Grade 4 Performance by School`
    - tab **School Math Grade 5** (128 rows × 1 cols) — cols: `2018 PARCC Mathematics Results Grade 5 Performance by School`
    - tab **School Math Grade 6** (80 rows × 1 cols) — cols: `2018 PARCC Mathematics Results Grade 6 Performance by School`
    - tab **School Math Grade 7** (161 rows × 1 cols) — cols: `2018 PARCC Mathematics Results Grade 7 Performance by School`
    - tab **School Math Grade 8** (183 rows × 1 cols) — cols: `2018 PARCC Mathematics Results Grade 8 Performance by School`
    - tab **School Math Grades 9-12** (101 rows × 1 cols) — cols: `2018 PARCC Mathematics Results Grades 9-12 Performance by School`
  - [`2017-18 Detailed PARCC and MSAA Performance Results`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Detailed%202018%20PARCC%20and%20MSAA%20Performance.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (13 rows × 1 cols) — cols: `Overview:`
    - tab **State Performance** (2,685 rows × 17 cols) — cols: `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations`, `Percent Level 3+`, `Percent Level 1`, `Percent Level 2`, `Percent Level 3`, `Percent Level 4` …
    - tab **LEA Performance** (32,379 rows × 19 cols) — cols: `LEA Code`, `LEA Name`, `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations`, `Percent Level 3+`, `Percent Level 1`, `Percent Level 2` …
    - tab **School Performance** (88,298 rows × 22 cols) — cols: `School Ward`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations` …
  - [`2017-18 School, LEA, and State Participation`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/School%2C%20LEA%2C%20and%20State%20Participation%202017-18.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Overview:`
    - tab **State Level** (52 rows × 2 cols) — cols: `ELA`, `Math`
    - tab **LEA Level** (1,924 rows × 2 cols) — cols: `ELA`, `Math`
    - tab **School Level** (7,371 rows × 2 cols) — cols: `ELA`, `Math`
  - [`2017-18 PARCC and MSAA Participation and Performance Results for Students with Disabilities`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2017-18%20PARCC%20and%20MSAA%20Participation%20and%20Performance%20Results%20for%20Students%20with%20Disabilities.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes and Business Rules** (12 rows × 1 cols) — cols: `Overview:`
    - tab **Data Dictionary** (16,385 rows × 4 cols) — cols: `Data Field`, `Description`, `Permitted Value`, `Data source`
    - tab **State Output** (73 rows × 14 cols) — cols: `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Percent of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+`, `Number of Alternate Assessment Test Takers` …
    - tab **LEA Output** (1,427 rows × 16 cols) — cols: `LEA Code`, `LEA Name`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Percent of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations` …
    - tab **School Output** (4,317 rows × 18 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+` …
  - [`Detailed 2014 15 PARCC and MSAA Performance`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Detailed%202014-15%20PARCC%20and%20MSAA%20Performance.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (105 rows × 1 cols) — cols: `Overview:`
    - tab **State Performance** (1,553 rows × 15 cols) — cols: `School Year`, `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations`, `Percent Level 3+`, `Percent Level 1`, `Percent Level 2`, `Percent Level 3` …
    - tab **Sector Performance** (2,764 rows × 16 cols) — cols: `School Year`, `Sector`, `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations`, `Percent Level 3+`, `Percent Level 1`, `Percent Level 2` …
    - tab **LEA Performance** (16,758 rows × 17 cols) — cols: `School Year`, `LEA Code`, `LEA Name`, `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations`, `Percent Level 3+`, `Percent Level 1` …
    - tab **School Performance** (50,383 rows × 20 cols) — cols: `School Year`, `School Ward`, `School Code`, `School Name`, `LEA Code`, `LEA Name`, `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value` …
  - [`2016-17 PARCC ELA School Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20PARCC%20School%20Level%20ELA_0.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes** (14 rows × 1 cols) — cols: `Overview:`
    - tab **School ELA Overall** (208 rows × 1 cols) — cols: `2017 PARCC English Language Arts/Literacy Results Overall Performance by School`
    - tab **School ELA Grade 3** (132 rows × 1 cols) — cols: `2017 PARCC English Language Arts/Literacy Results Grade 3 Performance by School`
    - tab **School ELA Grade 4** (125 rows × 1 cols) — cols: `2017 PARCC English Language Arts/Literacy Results Grade 4 Performance by School`
    - tab **School ELA Grade 5** (128 rows × 1 cols) — cols: `2017 PARCC English Language Arts/Literacy Results Grade 5 Performance by School`
    - tab **School ELA Grade 6** (79 rows × 1 cols) — cols: `2017 PARCC English Language Arts/Literacy Results Grade 6 Performance by School`
    - tab **School ELA Grade 7** (76 rows × 1 cols) — cols: `2017 PARCC English Language Arts/Literacy Results Grade 7 Performance by School`
    - tab **School ELA Grade 8** (72 rows × 1 cols) — cols: `2017 PARCC English Language Arts/Literacy Results Grade 8 Performance by School`
    - tab **School ELA Grades 9-12** (45 rows × 1 cols) — cols: `2017 PARCC English Language Arts/Literacy Results Grades 9-12 Performance by School`
  - [`2016-17 PARCC Mathematics School Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20PARCC%20School%20Level%20Math_0.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes** (16 rows × 1 cols) — cols: `Overview:`
    - tab **School Math Overall** (209 rows × 1 cols) — cols: `2017 PARCC Mathematics Results Overall Performance by School`
    - tab **School Math Grade 3** (132 rows × 1 cols) — cols: `2017 PARCC Mathematics Results Grade 3 Performance by School`
    - tab **School Math Grade 4** (125 rows × 1 cols) — cols: `2017 PARCC Mathematics Results Grade 4 Performance by School`
    - tab **School Math Grade 5** (128 rows × 1 cols) — cols: `2017 PARCC Mathematics Results Grade 5 Performance by School`
    - tab **School Math Grade 6** (79 rows × 1 cols) — cols: `2017 PARCC Mathematics Results Grade 6 Performance by School`
    - tab **School Math Grade 7** (157 rows × 1 cols) — cols: `2017 PARCC Mathematics Results Grade 7 Performance by School`
    - tab **School Math Grade 8** (162 rows × 1 cols) — cols: `2017 PARCC Mathematics Results Grade 8 Performance by School`
    - tab **School Math Grades 9-12** (97 rows × 1 cols) — cols: `2017 PARCC Mathematics Results Grades 9-12 Performance by School`
  - [`2016-17 Detailed PARCC and MSAA Performance Results`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Detailed%202017%20PARCC%20and%20MSAA%20Performance_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (14 rows × 1 cols) — cols: `Overview:`
    - tab **State Performance** (1 rows × 14 cols) — cols: `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations`, `Percent Level 3+`, `Percent Level 1`, `Percent Level 2`, `Percent Level 3`, `Percent Level 4` …
    - tab **LEA Performance** (1 rows × 16 cols) — cols: `LEA Code`, `LEA Name`, `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations`, `Percent Level 3+`, `Percent Level 1`, `Percent Level 2` …
    - tab **School Performance** (1 rows × 19 cols) — cols: `School Ward`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Assessment Type`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Subgroup`, `Subgroup Value`, `Percent Meeting or Exceeding Expectations` …
  - [`2016-17 PARCC and MSAA Performance Results for Students with Disabilities`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SWD%20PARCC%20-%202016-2017.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Dictionary** (16,385 rows × 4 cols) — cols: `Data Field`, `Description`, `Permitted Value`, `Data source`
    - tab **Data Notes and Business Rules** (12 rows × 1 cols) — cols: `Overview:`
    - tab **State Output** (73 rows × 14 cols) — cols: `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Percent of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+`, `Number of Alternate Assessment Test Takers` …
    - tab **LEA Output** (1,348 rows × 16 cols) — cols: `LEA Code`, `LEA Name`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Percent of Students with Disabilities Who Took PARCC with Performance Level 4+`, `Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations` …
    - tab **School Output** (4,161 rows × 18 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Subject`, `Tested Grade/Subject`, `Grade of Enrollment`, `Total Number of Valid PARCC Test Takers`, `Total Number of PARCC Test Takers with Performance Level 4+`, `Percent of Total PARCC Test Takers with Performance Level 4+`, `Number of Students with Disabilities Who Took PARCC`, `Number of Students with Disabilities Who Took PARCC with Performance Level 4+` …
  - [`2016-17 School, LEA, and State Participation`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/School%2C%20LEA%2C%20and%20State%20Participation%202016-17_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (14 rows × 1 cols) — cols: `Overview:`
    - tab **State Level** (3 rows × 2 cols) — cols: `ELA`, `Math`
    - tab **LEA Level** (3 rows × 2 cols) — cols: `ELA`, `Math`
    - tab **School Level** (3 rows × 2 cols) — cols: `ELA`, `Math`
  - [`PARCC ELA school level 2015-16`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%20ELA%20school%20level%202015-16_0.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (13 rows × 1 cols) — cols: `Overview:`
    - tab **School Level ELA** (210 rows × 1 cols) — cols: `English Language Arts/Literacy`
    - tab **hidden - lookup** (203 rows × 7 cols) — cols: `PerfLevel`, `Test Taken`, `Ward`, `LEACode`, `LEAName`, `SchoolCode`, `SchoolName`
    - tab **hidden - pct_at_level** (821 rows × 12 cols) — cols: `School Ward`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Tested Grade/Subject`, `% level 1`, `% level 2`, `% level 3`, `% level 4`, `% level 5`, `Total valid test takers`
    - tab **hidden-pct_at_or_above_level** (3,651 rows × 7 cols) — cols: `leacode`, `leaname`, `schoolcode`, `schoolname`, `testedGrade`, `metric`, `pct_at_or_above_level`
  - [`PARCC Math school level 2015-16`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%20Math%20school%20level%202015-16.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (14 rows × 1 cols) — cols: `Overview:`
    - tab **School Level Math** (210 rows × 1 cols) — cols: `Mathematics`
    - tab **hidden - lookup** (203 rows × 7 cols) — cols: `PerfLevel`, `Test Taken`, `Ward`, `LEACode`, `LEAName`, `SchoolCode`, `SchoolName`
    - tab **hidden - pct_at_level** (1,149 rows × 12 cols) — cols: `School Ward`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Tested Grade/Subject`, `% level 1`, `% level 2`, `% level 3`, `% level 4`, `% level 5`, `Total valid test takers`
    - tab **hidden-pct_at_or_above_level** (3,650 rows × 7 cols) — cols: `leacode`, `leaname`, `schoolcode`, `schoolname`, `tested grade/subject`, `level`, `pct_at_or_above_level`
  - [`School, LEA, and State Participation 2015-16`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/School%2C%20LEA%2C%20and%20State%20Participation%202015-16.xlsx) — **xlsx** — 4 tab(s)
    - tab **State Level** (28 rows × 2 cols) — cols: `ELA`, `Math`
    - tab **LEA Level** (978 rows × 2 cols) — cols: `ELA`, `Math`
    - tab **School Level** (3,817 rows × 2 cols) — cols: `ELA`, `Math`
    - tab **Data Notes** (17 rows × 1 cols) — cols: `Overview:`
  - [`PARCC 2015 DC Grades 3-8 Aggregate State, Sector, and School Results`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20Grades%203-8%20Aggregate%20State%2C%20Sector%2C%20and%20School%20Results_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **School** (20,322 rows × 18 cols) — cols: `School Ward`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Tested Grade`, `Subject Category`, `Subgroup`, `Enrollment Grade`, `% level 4+`, `% level 3+`, `% level 1` …
    - tab **State & Sector** (1,391 rows × 14 cols) — cols: `Sector`, `Tested Grade`, `Subject Category`, `Subgroup`, `Enrollment Grade`, `% level 4+`, `% level 3+`, `% level 1`, `% level 2`, `% level 3`, `% level 4`, `% level 5` …
    - tab **Data Notes** (21 rows × 1 cols) — cols: `Accountability reporting rules`
  - [`PARCC 2015 DC Grades 3-8 Math School Results`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20Grades%203-8%20Math%20School%20Results_0.xlsx) — **xlsx** — 5 tab(s)
    - tab **School Level 3-8 Math** (170 rows × 1 cols) — cols: `Grades 3-8 Math`
    - tab **lookup** (21 rows × 2 cols) — cols: `PerfLevel`, `Breakdown (test taken and/or enrollment grade)`
    - tab **pct_at_each_level** (1,059 rows × 12 cols) — cols: `School Ward`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Breakdown`, `pct_1`, `pct_2`, `pct_3`, `pct_4`, `pct_5`, `test takers`
    - tab **pct_at_or_above_level** (5,291 rows × 7 cols) — cols: `leacode`, `leaname`, `schoolcode`, `schoolname`, `breakdown`, `level`, `pct_at_or_above_level`
    - tab **Data Notes** (17 rows × 1 cols) — cols: `Accountability reporting rules`
  - [`PARCC 2015 DC Grades 3-8 English Language Arts School Results`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20Grades%203-8%20English%20Language%20Arts%20School%20Results_1.xlsx) — **xlsx** — 5 tab(s)
    - tab **School Level 3-8 ELA** (170 rows × 1 cols) — cols: `Grades 3-8 English`
    - tab **lookup** (19 rows × 2 cols) — cols: `PerfLevel`, `Test Taken`
    - tab **pct_at_level** (731 rows × 12 cols) — cols: `School Ward`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Tested Grade`, `pct_1`, `pct_2`, `pct_3`, `pct_4`, `pct_5`, `total_testtakers`
    - tab **pct_at_or_above_level** (3,651 rows × 7 cols) — cols: `leacode`, `leaname`, `schoolcode`, `schoolname`, `breakdown`, `level`, `pct_at_or_above_level`
    - tab **Data Notes** (14 rows × 1 cols) — cols: `Accountability reporting rules`
  - [`PARCC 2015 DC HS Aggregate State, Sector, and School Results`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20HS%20Aggregate%20State%2C%20Sector%2C%20and%20School%20Results.xlsx) — **xlsx** — 3 tab(s)
    - tab **School** (630 rows × 16 cols) — cols: `School Ward`, `lea code`, `lea name`, `school code`, `school name`, `subject`, `subgroup`, `% level 4+`, `% level 3+`, `% level 1`, `% level 2`, `% level 3` …
    - tab **State & Sector** (77 rows × 12 cols) — cols: `sector`, `subject`, `subgroup`, `% level 4+`, `% level 3+`, `% level 1`, `% level 2`, `% level 3`, `% level 4`, `% level 5`, `total valid tests`, `% of population`
    - tab **Data Notes** (16 rows × 1 cols) — cols: `Accountability reporting rules`
  - [`PARCC 2015 DC High School English II School Results`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20HS%20English%20II%20School%20Results_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **School Level HS ELA** (57 rows × 1 cols) — cols: `High School English II`
    - tab **lookup** (6 rows × 1 cols) — cols: `PerfLevel`
    - tab **pct_level+_HS_ELA** (219 rows × 7 cols) — cols: `leacode`, `leaname`, `schoolcode`, `schoolname`, `level`, `pct_at_level`, `pct_at_level`
    - tab **Data Notes** (13 rows × 1 cols) — cols: `Accountability reporting rules`
  - [`PARCC 2015 DC High School Math School Results`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20HS%20Math%20School%20Results_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **School Level HS Math** (56 rows × 1 cols) — cols: `High School Math`
    - tab **lookup** (6 rows × 1 cols) — cols: `PerfLevel`
    - tab **pct_level+_HS_Math** (215 rows × 7 cols) — cols: `leacode`, `leaname`, `schoolcode`, `schoolname`, `level`, `pct_at_level`, `pct_at_level`
    - tab **Data Notes** (13 rows × 1 cols) — cols: `Accountability reporting rules`

### [Audited Enrollment Reports & Data](https://osse.dc.gov/enrollment)

_topics: enrollment, demographics_

- **Format:** Per-year PDF audit report + Excel (.xlsx) data
- **Updated:** Annual; fall count, finalized ~winter (Jan/Feb)
- **Years on page:** FY2012 (SY2011-12) → FY2026; older 2006–2010 section; SLED hosts 2001–2009
- **Notes:** THE canonical enrollment source — independently audited per DC Code 38-1804.02. Drives per-pupil funding. DCPS, PCSB, EdScape and the MFP all build on this. Each year is a separate click-through page. Note OSSE data-suppression policy hides 0%/100% small-subgroup values.

### [Report Card Aggregate Enrollment Data (demographics file)](https://osse.dc.gov/page/dc-school-report-card-resource-library)

_topics: demographics, enrollment_

- **Format:** Excel (.xlsx)
- **Updated:** Annual
- **Years on page:** 2018–2025 (one file per year in the Resource Library)
- **Notes:** Best downloadable source for school-level demographics (race/ethnicity, SWD, EL, at-risk, economic disadvantage). Filenames vary by year — find the year's exact 'Aggregate Enrollment Data' file in the Resource Library.
- **Data files (profiled):**
  - [`DC School Report Card Aggregate Enrollment Data (2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Aggregate%20Enrollment%20Data%20%282025%29.xlsx) — **xlsx** — 3 tab(s)
    - tab **Data Notes** (11 rows × 1 cols) — cols: `2024-25 School Year DC School Report Card Aggregate Enrollment Data Office of the State Superintendent of Education`
    - tab **Data Dictionary** (14 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Ever Enrolled Population** (6,533 rows × 12 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Entity Type`, `Ward`, `Student Group`, `Grade`, `Percent Enrolled`, `Enrollment Count`, `Total Count of Students`, `School Year`

### [Specialized Education Data and Reports](https://osse.dc.gov/service/specialized-education-data-and-reports)

_topics: demographics, special-education_

- **Format:** PDF + Excel
- **Updated:** Annual (federal FFY cycle)
- **Years on page:** Reports to the Public FFY2008–FFY2023-24; APRs FFY2020–2024
- **Notes:** Mostly statewide/aggregate. For school-level special-ed counts use the Report Card Aggregate Enrollment file or EdScape.
- **Data files (profiled):**
  - [`FY 2018 Performance on PARCC by Disability Type and Hours of Service`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/FY%202018%20Performance%20on%20PARCC%20by%20Disability%20Type%20and%20Hours%20of%20Service.xlsx) — **xlsx** — 5 tab(s)
    - tab **Overview** (4 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Codebook** (17 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Results by Primary Disability** (14 rows × 10 cols) — cols: `Assessment Subject`, `Primary Disability`, `Percentage of Students Achieving Proficiency Level 1`, `Percentage of Students Achieving Proficiency Level 2`, `Percentage of Students Achieving Proficiency Level 3`, `Percentage of Students Achieving Proficiency Level 4`, `Percentage of Students Achieving Proficiency Level 5`, `Percentage of Students Achieving Proficiency Level 3 or Better`, `Percentage of Students Achieving Proficiency Level 4 or Better`, `Total Number Of Students`
    - tab **Results by PD & PrescribedHours** (50 rows × 11 cols) — cols: `Assessment Subject`, `Primary Disability`, `Hours of Prescribed Services`, `Percentage of Students Achieving Proficiency Level 1`, `Percentage of Students Achieving Proficiency Level 2`, `Percentage of Students Achieving Proficiency Level 3`, `Percentage of Students Achieving Proficiency Level 4`, `Percentage of Students Achieving Proficiency Level 5`, `Percentage of Students Achieving Proficiency Level 3 or Better`, `Percentage of Students Achieving Proficiency Level 4 or Better`, `Total Number Of Students`
    - tab **Results by Prescribed Hours** (10 rows × 10 cols) — cols: `Assessment Subject`, `Hours of Prescribed Services`, `Percentage of Students Achieving Proficiency Level 1`, `Percentage of Students Achieving Proficiency Level 2`, `Percentage of Students Achieving Proficiency Level 3`, `Percentage of Students Achieving Proficiency Level 4`, `Percentage of Students Achieving Proficiency Level 5`, `Percentage of Students Achieving Proficiency Level 3 or Better`, `Percentage of Students Achieving Proficiency Level 4 or Better`, `Total Number Of Students`
  - [`FFY 2024 Special Education Annual Performance Report - Part B`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/FFY24%20APR%20Part%20B%20LEA%20Reporting.xlsx) — **xlsx** — 2 tab(s)
    - tab **Overview** (4 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **LEA Reporting** (70 rows × 51 cols) — cols: `LEA Code`, `LEA Name`, `1: Graduation`, `2: Drop Out`, `3A: Participation Rate Math, Grade 04`, `3A: Participation Rate Math, Grade 08`, `3A: Participation Rate Math, Grade HS`, `3A: Participation Rate Reading, Grade 04`, `3A: Participation Rate Reading, Grade 08`, `3A: Participation Rate Reading, Grade HS`, `3B: Proficiency Rate Math, Grade 04`, `3B: Proficiency Rate Math, Grade 08` …
  - [`FFY 2023 Special Education Annual Performance Report - Part B`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/DC-01%20SPP%20PART%20B%20FFY%202023-24%20%203339%2020250623074712.pdf) — **pdf** — 115 pages, **extractable tables** on ~79 page(s)
    - p2 table (4 rows): `Provide sufficient detail to ensure that the Secretary and the public are informed of and understand the State’s systems designed to drive improved`
    - p8 table (2 rows): `Same data as used for reporting to the Department under section 618 of the Individuals with Disabilities Education Act (IDEA), using the definitions in`
    - p8 table (2 rows): `States must report a percentage using the number of youth with IEPs (ages 14-21) who exited special education due to graduating with a regular high`
  - [`FFY 2022 Special Education Annual Performance Report - Part B`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/FFY22%20Annual%20Performance%20Report%20Part%20B.pdf) — **pdf** — 92 pages, **extractable tables** on ~67 page(s)
    - p2 table (4 rows): `Provide sufficient detail to ensure that the Secretary and the public are informed of and understand the State’s systems designed to drive improved`
    - p7 table (2 rows): `Same data as used for reporting to the Department under section 618 of the Individuals with Disabilities Education Act (IDEA), using the definitions in`
    - p7 table (2 rows): `States must report a percentage using the number of youth with IEPs (ages 14-21) who exited special education due to graduating with a regular high`
  - [`FFY 2021 Special Education Annual Performance Report - Part B`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/FFY21%20APR%20Final.pdf) — **pdf** — 79 pages, **extractable tables** on ~56 page(s)
    - p2 table (4 rows): `Provide sufficient detail to ensure that the Secretary and the public are informed of and understand the State’s systems designed to drive improved`
    - p7 table (2 rows): `Same data as used for reporting to the Department under section 618 of the Individuals with Disabilities Education Act (IDEA), using the definitions in`
    - p7 table (2 rows): `States must report a percentage using the number of youth with IEPs (ages 14-21) who exited special education due to graduating with a regular high`
  - [`FFY 2020 Special Education Annual Performance Report - Part B`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/District%20of%20Columbia%20IDEA%20Part%20B%20SPP-APR%20FFY%202020.pdf) — **pdf** — 79 pages, **extractable tables** on ~60 page(s)
    - p2 table (4 rows): `Provide sufficient detail to ensure that the Secretary and the public are informed of and understand the State’s systems designed to drive improved`
    - p7 table (2 rows): `Same data as used for reporting to the Department under section 618 of the Individuals with Disabilities Education Act (IDEA), using the definitions in`
    - p7 table (2 rows): `States must report a percentage using the number of youth with IEPs (ages 14-21) who exited special education due to graduating with a regular high`
  - [`Special Education Report to the Public: Part B FFY 2023`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/FFY23%20APR%20Part%20B%20LEA%20Reporting.xlsx) — **xlsx** — 2 tab(s)
    - tab **Overview** (3 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **LEA Reporting** (69 rows × 51 cols) — cols: `LEA Code`, `LEA Name`, `1: Graduation`, `2: Drop Out`, `3A: Participation Rate Math, Grade 04`, `3A: Participation Rate Math, Grade 08`, `3A: Participation Rate Math, Grade HS`, `3A: Participation Rate Reading, Grade 04`, `3A: Participation Rate Reading, Grade 08`, `3A: Participation Rate Reading, Grade HS`, `3B: Proficiency Rate Math, Grade 04`, `3B: Proficiency Rate Math, Grade 08` …
  - [`Special Education Report to the Public: Part B FFY 2022`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/FFY22%20APR%20Part%20B%20LEA%20Reporting%20.xlsx) — **xlsx** — 2 tab(s)
    - tab **Overview** (3 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **LEA Reporting** (68 rows × 51 cols) — cols: `LEA Code`, `LEA Name`, `1: Graduation`, `2: Drop Out`, `3A: Participation Rate Math, Grade 04`, `3A: Participation Rate Math, Grade 08`, `3A: Participation Rate Math, Grade HS`, `3A: Participation Rate Reading, Grade 04`, `3A: Participation Rate Reading, Grade 08`, `3A: Participation Rate Reading, Grade HS`, `3B: Proficiency Rate Math, Grade 04`, `3B: Proficiency Rate Math, Grade 08` …
  - [`Special Education Report to the Public: Part B FFY 2021`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/Copy%20of%20APR%20Public%20Reporting%20FFY%2021.xlsx) — **xlsx** — 1 tab(s)
    - tab **District of Columbia FFY21 APR** (78 rows × 19 cols) — cols: `District of Columbia LEA Performance on Annual Performance Report Indicators FFY2021 (2021-22 School Year)`, `1. Graduation`, `2. Dropout`, `3A. Statewide Assessment Participation`, `3B. Statewide Assessment Proficiency - Grade Level Standards`, `3C. Statewide Assessment Proficiency - Alternate Standards`, `3D. Statewide Assessment Proficiency Gap - Grade Level Standards`, `4a. Discipline`, `4B. Significant Discrepancy by Race/Ethnicity in Suspensions/Expulsions`, `5. Least Restrictive Environment/Placement (School Age)`, `6. Preschool Settings`, `7. Preschool Outcomes` …
  - [`Special Education Report to the Public: Part B FFY 2020`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/FFY%202020%20APR%20Public%20Reporting_0.pdf) — **pdf** — 38 pages, **extractable tables** on ~37 page(s)
    - p2 table (44 rows): `Indicator 1 Graduation Percent of youth with IEPs graduating from high school with a regular diploma.`, `Indicator 1 Graduation`
    - p3 table (29 rows): `Indicator 1 Graduation Percent of youth with IEPs graduating from high school with a regular diploma.`
    - p4 table (44 rows): `Indicator 2 Dropout Percent of youth with IEPs dropping out of high school.`, `Indicator 2 Dropout`
  - [`Special Education State Performance Plan Indicator Guide`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/State%20Performance%20Plan%20Indicator%20Guide_0.pdf) — **pdf** — 37 pages (narrative; no extractable tables)
  - [`Special Education SSIP Theory of Action - FFY20-25`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/DC%20SSIP%20Theory%20of%20Action%20-%20FFY20-25.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (8 rows): `If the District…`, `Through These Activities...`, `Then…`, `District of Columbia students with disabilities ages 3 through 5 will demonstrate improved early literacy skills as measured by Indicator 7b`
    - p1 table (13 rows): 
  - [`Special Education SSIP Evaluation Plan - FFY20-25`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/DC%20SSIP%20Evaluation%20Plan%20-%20FFY20-25.pdf) — **pdf** — 4 pages, **extractable tables** on ~2 page(s)
    - p1 table (3 rows): `Evaluation Questions`, `Intended Outcomes`, `Relevant Activities`, `Data Sources`, `Anticipated`
    - p2 table (5 rows): `Evaluation Questions`, `Intended Outcomes`, `Relevant Activities`, `Data Sources`, `Anticipated`

### [School Year Attendance Reporting (chronic absenteeism/truancy)](https://osse.dc.gov/page/2024-25-school-year-attendance-reporting)

_topics: attendance_

- **Format:** PDF report + 2 mid-year briefs + Excel files
- **Updated:** Full report ~November; mid-year briefs during the year
- **Years on page:** 2024-25 on page; 2023-24 at /attendancesy202324; earlier years on own pages
- **Notes:** OSSE leads with chronic absenteeism / chronic truancy (10% threshold), not 'in-seat attendance.' SY24-25: 39.5% chronic absenteeism, 36.8% chronic truancy.
- **Data files (profiled):**
  - [`District of Columbia Attendance Report 2024-25`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024-25%20Attendance%20Report.pdf) — **pdf** — 50 pages, **extractable tables** on ~4 page(s)
    - p41 table (21 rows): `Year`, `Metric`, `Percentage`, `Students`
    - p42 table (24 rows): `Grade`, `Absenteeism Risk Tier`, `Percentage`, `Students`, `Total`
    - p43 table (25 rows): `Grade`, `Absenteeism Risk Tier`, `Percentage`, `Students`, `Total`
  - [`2024-25 Attendance Brief`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/AttendanceBrief_1Pager_2025.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (3 rows): `ATTENDANCE SUMMARY This brief presents attendance data for the full 2024–25 school year, compared to the 2023–24 school year. Compared to the prior school year: CHRONIC ABSENTEEISM CHRONIC TRUANCY INCREASED BY 0.3 REMAINED UNCHANGED AT PERCENTAGE POINTS. 36.8 PERCENT. 39.2% Chronic Absenteeism 39.5% 36.8% Chronic Truancy 36.8% 0 10 20 30 40 SY2023-24 SY2024-25`
    - p1 table (2 rows): `39.2`
    - p2 table (2 rows): `2024-25 ATTENDANCE BRIEF`
  - [`2024-25 Truancy Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024-25%20Truancy%20Data.xlsx) — **xlsx** — 2 tab(s)
    - tab **Overview** (9 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School** (243 rows × 5 cols) — cols: `School`, `% Chronically Absent, 2023-24 (K-12)`, `% Chronically Absent, 2024-25 (K-12)`, `% Truant, 2023-24 (Compulsory Age)`, `% Truant, 2024-25 (Compulsory Age)`
  - [`2024-25 Chronic Absenteeism Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024-25%20Chronic%20Absenteeism%20Metric%20Scores.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (40 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (57 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (2,333 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (8,899 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (171 rows × 6 cols) — cols: `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Framework Scores** (3,203 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Framework Scores** (9,889 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`2024-25 Attendance Data Public Reporting (July 2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Attendance%20Data%20Public%20Reporting%20April%202025%20v1.xlsx) — **xlsx** — 6 tab(s)
    - tab **Overview** (4 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School** (465 rows × 7 cols) — cols: `School Year`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **LEA** (122 rows × 5 cols) — cols: `School Year`, `LEA Code`, `LEA Name`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **Sector** (5 rows × 4 cols) — cols: `School Year`, `Sector`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **State** (59 rows × 6 cols) — cols: `Grade Band`, `Student Group`, `% Chronically Absent (24-25)`, `% Chronically Absent (23-24)`, `% Chronically Truant, (Compulsory Age) (24-25)`, `% Chronically Truant, (Compulsory Age) (23-24)`
    - tab **Risk Tiers** (51 rows × 6 cols) — cols: `School Year`, `Grade Band`, `Absenteeism Risk Tier`, `Percentage`, `Students`, `Total Students`
  - [`2024-25 Mid-Year Attendance Brief 1 (Nov 2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024-25%20Midyear%20Attendance%20Brief.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (2 rows): `ATTENDANCE SUMMARY The data in this brief reflects attendance data from the start of the school year through Nov. 22, 2024, and compares it to the same window in the 2023-24 school year. Compared to the same point in time last school year: CHRONIC ABSENTEEISM CHRONIC TRUANCY DECREASED BY 3.1 DECREASED BY 0.4 PERCENTAGE POINTS PERCENTAGE POINTS EXCLUDING PARTIAL DAY UNEXCUSED ABSENCES, THE CHRONIC TRUANCY RATE WOULD BE 5.1 PERCENT, COMPARED TO 5.5 PERCENT AT THE SAME TIME LAST SCHOOL YEAR. 31.4% Chronic Absenteeism 28.3% 7.8% Chronic Truancy 7.4% 0% 5% 10% 15% 20% 25% 30% 35% * All attendance metrics are calculated for students in grades K-12. Chronic truancy is restricted to students of compulsory age (5-17 years on September 30, 2024). A partial day absence occurs when a student attends school for less than 60 percent of the instructional day.`
    - p1 table (2 rows): `7.8%`
    - p2 table (2 rows): `2024-25 MID-YEAR ATTENDANCE BRIEF`
  - [`2024-25 Mid-Year Attendance Brief 2 (Feb 2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DAR_Mid_Year_Attendance_2.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (3 rows): `ATTENDANCE SUMMARY The data in this brief reflect attendance data from the start of the school year through Feb. 28, 2025, and compares it to the same window in the 2023-24 school year. Compared to the same point last year: CHRONIC ABSENTEEISM CHRONIC TRUANCY INCREASED BY 1.6 INCREASED BY 0.3 PERCENTAGE POINTS PERCENTAGE POINTS 35.3% Chronic Absenteeism 36.9% 20.6% Chronic Truancy 20.9% 0% 10% 20% 30% 40% SY2023-24 SY2024-25`
    - p1 table (2 rows): `20.6%`
    - p2 table (2 rows): `2024-25 MID-YEAR ATTENDANCE BRIEF`

### [OSSE Attendance Dashboard](https://osse.dc.gov/attendancedashboard)

_topics: attendance_

- **Format:** Interactive dashboard + user-guide PDF
- **Updated:** Monthly updates (cumulative year-to-date, not real-time)
- **Years on page:** Current school year (rolling); history via annual report pages
- **Notes:** Citywide DCPS + charter. Embedded viz needs a browser to render.

### [High School Graduation Rates / ACGR](https://osse.dc.gov/service/high-school-graduation-rates-0)

_topics: graduation_

- **Format:** Recent years: direct Excel (.xlsx); older years: /publication/ pages
- **Updated:** Annual, released ~winter for prior spring cohort
- **Years on page:** 2024-25 back to 2010-11 (+2009) — ~15 years
- **Notes:** Cross-sector (DCPS + charter), 4-yr and 5-yr ACGR with subgroups. 2020-21+ link straight to .xlsx; 2019-20 and earlier use /publication/ pages — a fragmentation point. SY24-25: 78.7% 4-yr.
- **Data files (profiled):**
  - [`Adjusted Cohort Graduation Rate (ACGR) — Public`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/Public%20SY2425%20ACGR%20Rates.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **2024-25 Rate Overview** (39 rows × 6 cols) — cols: `Sector`, `Cohort`, `Outcome`, `Rate`, `Count`, `Cohort Total by Sector`
    - tab **2024-25 School Rates** (85 rows × 6 cols) — cols: `Sector`, `Cohort`, `School Name`, `Rate`, `Graduates`, `Cohort Total`
    - tab **2024-25 Rates by Student Group** (87 rows × 6 cols) — cols: `Sector`, `Cohort`, `Student Group`, `Rate`, `Graduates`, `Cohort Total`
  - [`Adjusted Cohort Graduation Rate (ACGR) — Public`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/Public%20SY2324%20ACGR%20Rates.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **2023-24 Rate Overview** (39 rows × 6 cols) — cols: `Sector`, `Cohort`, `Outcome`, `Cohort Size by Sector`, `Count`, `Rate`
    - tab **2023-24 School Rates** (81 rows × 6 cols) — cols: `Sector`, `Cohort`, `School Name`, `Cohort Total`, `Graduates`, `Rate`
    - tab **2023-24 Rates by Student Group** (91 rows × 6 cols) — cols: `Sector`, `Cohort`, `Student Group`, `Cohort Total`, `Graduates`, `Rate`
  - [`Adjusted Cohort Graduation Rate (ACGR) — Public`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/Public%20SY2223%20ACGR%20Rates.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **2022-23 Rate Overview** (39 rows × 6 cols) — cols: `Sector`, `Cohort`, `Outcome`, `Cohort Size by Sector`, `Count`, `Rate (%)`
    - tab **2022-23 School Rates** (81 rows × 6 cols) — cols: `School Name`, `Cohort`, `Sector`, `Graduates`, `Cohort Total`, `Rate (%)`
    - tab **2022-23 Rates by Student Group** (91 rows × 6 cols) — cols: `Sector`, `Cohort`, `Student Group`, `Cohort Total`, `Graduates`, `Rate (%)`
  - [`Adjusted Cohort Graduation Rate (ACGR) — Public`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/Public%20SY2122%20ACGR%20Rates.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **2021-22 Rate Overview** (39 rows × 6 cols) — cols: `Sector`, `Cohort`, `Outcome`, `Cohort Size by Sector`, `Count`, `Rate`
    - tab **2021-22 School Rates** (81 rows × 6 cols) — cols: `School Name`, `Cohort`, `Sector`, `Graduates`, `Cohort Total`, `Rate`
    - tab **2021-22 Rates by Student Group** (79 rows × 6 cols) — cols: `Sector`, `Cohort`, `Student Group`, `Cohort Total`, `Graduates`, `Rate`
  - [`Adjusted Cohort Graduation Rate (ACGR) — Public`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/Public%20SY2021%20ACGR%20Rates.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **2020-21 Rate Overview** (39 rows × 6 cols) — cols: `Sector`, `Cohort`, `Outcome`, `Cohort Size by Sector`, `Count`, `Rate`
    - tab **2020-21 School Rates** (81 rows × 6 cols) — cols: `School Name`, `Cohort`, `Sector`, `Graduates`, `Cohort Total`, `Rate`
    - tab **2020-21 Rates by Student Group** (79 rows × 6 cols) — cols: `Sector`, `Cohort`, `Student Group`, `Cohort Total`, `Graduates`, `Rate`

### [OSSE Discipline Report ('State of Discipline')](https://osse.dc.gov/page/discipline-report)

_topics: discipline_

- **Format:** PDF reports (school detail in appendices); rare supplementary Excel
- **Updated:** Annual (latest 2024-25 dated 12/30/2025)
- **Years on page:** 2013-14 through 2024-25 (2014-15 appears missing)
- **Notes:** Suspensions/expulsions/involuntary dismissals per the Student Fair Access to School Act. Mostly PDF — only 2017-18 has a clean supplementary Excel; by-school data otherwise lives in report appendices.
- **Data files (profiled):**
  - [`2024-25 School Year Discipline Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SY24-25%20Discipline%20Report%2012.30.25.pdf) — **pdf** — 51 pages, **extractable tables** on ~11 page(s)
    - p12 table (2 rows): `disciplinary incidents, including`
    - p12 table (2 rows): `but not limited to in-school suspensions, out-of-school suspensions, expulsions,`
    - p12 table (5 rows): `In the 2024–25 school year, OSSE required LEAs to submit and validate discipline data three times during the`
  - [`2023-24 School Year Discipline Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SY23-24%20Discipline%20Report%20as%20of%20March%202025.pdf) — **pdf** — 43 pages, **extractable tables** on ~11 page(s)
    - p8 table (10 rows): `School`, `Sector`, `Ward`
    - p10 table (10 rows): `Significant Discrepancy`, `Significant Discrepancy APR Indicator 4b`, `Significant Disproportionality Discipline`
    - p10 table (3 rows): `Significant`
  - [`2022-23 School Year Discipline Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Discipline%20Report%20SY2022-23.pdf) — **pdf** — 40 pages, **extractable tables** on ~8 page(s)
    - p5 table (14 rows): `School`, `Sector`, `Ward`
    - p7 table (6 rows): `disciplinary incidents, including but not limited to in-school suspensions, out-of-school suspensions,`
    - p11 table (5 rows): `In the 2022–23 school year, LEAs reported 21,465 unique discipline incidents, including 8,910 restorative`
  - [`2021-22 School Year Discipline Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021-22%20Discipline%20Report%20FINAL_updated2025.pdf) — **pdf** — 68 pages, **extractable tables** on ~28 page(s)
    - p6 table (8 rows): `School`, `Sector`, `Ward`
    - p7 table (5 rows): `Kingsman PCS`, `PCS`, `6`
    - p9 table (8 rows): `disciplinary incidents, including but not limited to in-school suspensions, out-of-school`
  - [`2020-21 School Year Discipline Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2020-21%20Discipline%20Report_FINAL_0.pdf) — **pdf** — 31 pages, **extractable tables** on ~8 page(s)
    - p23 table (25 rows): `Expectations`
    - p23 table (2 rows): `Refrain from sharing inappropriate pictures or images during classroom meetings or on discussion boards.`
    - p24 table (6 rows): `Monitoring`
  - [`2019-20 School Year Discipline Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019-20%20School%20Year%20Discipline%20Report.pdf) — **pdf** — 40 pages (narrative; no extractable tables)
  - [`2018-19 School Year Discipline Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Discipline%20Report%20OSSE%202018-19%20School%20Year.pdf) — **pdf** — 106 pages, **extractable tables** on ~48 page(s)
    - p51 table (10 rows): `School`
    - p51 table (5 rows): `School`
    - p51 table (3 rows): `School`
  - [`2018-19 School Year Discipline Report At A Glance`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%20School%20Year%20Discipline%20Report%20At%20A%20Glance%207.14.20.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (5 rows): 
  - [`2017-18 School Year Discipline Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2017-18%20School%20Year%20Discipline%20Report.pdf) — **pdf** — 114 pages, **extractable tables** on ~48 page(s)
    - p54 table (10 rows): `School`, `Black or African- American`, `Hispanic`, `White`, `Other Race`, `Female`, `Male`, `English Learners`
    - p54 table (3 rows): `Black or`
    - p54 table (2 rows): `Other`
  - [`2017-18 Discipline Report Appendices and Tables`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2017-18%20Discipline%20Report%20Appendices%20and%20Tables.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data Notes Tab** (6 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Counts and Rates** (233 rows × 7 cols) — cols: `School Name`, `Students with Out-of-School Suspensions`, `Percent`, `Students with In-School Suspensions`, `Percent`, `Students with Expulsions`, `Percent`
    - tab **LEA Counts and Rates** (68 rows × 7 cols) — cols: `LEA Name`, `Out-of-School Suspensions`, `Percent`, `In-School Suspensions`, `Percent`, `Expulsions`, `Percent`
    - tab **School Duration Rates** (206 rows × 9 cols) — cols: `School Name`, `Less than 2 Days`, `Percent`, `Between 2 and 5 Days`, `Percent`, `Between 6 and 10 Days`, `Percent`, `11 Days or More`, `Percent`
    - tab **School Rate of Multiple Suspens** (233 rows × 4 cols) — cols: `School Name`, `LEA Name`, `Count of Students with Multiple OSS`, `Percent`
    - tab **By Gradeband and Student Groups** (36 rows × 3 cols) — cols: `Grade Band`, `Number of Out-of-school Suspensions`, `Student Group`
    - tab **SWD Between 6 and 10 Day OSS** (26 rows × 3 cols) — cols: `Student Had IEP at Time of Incident`, `School Name`, `Average Duration of Suspension`
    - tab **Attendance Discrepencies** (31 rows × 3 cols) — cols: `LEA Name`, `Days of In-School Suspensions from Discipline Data`, `Days of In-School Suspensions from Attendance Data`
    - tab **Unverified Zero Counts** (14 rows × 3 cols) — cols: `LEA Name`, `Reported No In-School Suspensions`, `Certified with OSSE`
  - [`2016-17 School Year Discipline Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2016-17%20School%20Year%20Discipline%20Report.pdf) — **pdf** — 84 pages, **extractable tables** on ~81 page(s)
    - p4 table (3 rows): 
    - p5 table (3 rows): 
    - p6 table (3 rows): 
  - [`2015-16 School Year Discipline Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2015-16%20OSSE%20Discipline%20Report%20Updated%20Jan%206%202017.pdf) — **pdf** — 99 pages, **extractable tables** on ~68 page(s)
    - p12 table (14 rows): 
    - p14 table (9 rows): 
    - p15 table (5 rows): 
  - [`2013-14 School Year Discipline Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2013-14%20School%20Year%20OSSE%20Discipline%20Report.pdf) — **pdf** — 38 pages, **extractable tables** on ~19 page(s)
    - p1 table (2 rows): `Reducing Out-of-School Suspensions and Expulsions in District of Columbia Public and Public Charter Schools`
    - p2 table (2 rows): `Reducing Out-of-School Suspensions and Expulsions in District of Columbia Public and Public Charter Schools`
    - p5 table (2 rows): `Executive Summary`

### [Report Card School Finance Data (per-pupil expenditures)](https://osse.dc.gov/page/dc-school-report-card-resource-library)

_topics: finance_

- **Format:** Excel (.xlsx)
- **Updated:** Annual
- **Years on page:** 2021–2025 files in the Resource Library
- **Notes:** ESSA per-pupil expenditure (PPE) by school and LEA, split by funding source and expenditure type. This is actual EXPENDITURE (cross-sector), distinct from DCPS budget ALLOCATIONS — see overlaps.
- **Data files (profiled):**
  - [`DC School Report Card School Finance Data (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20School%20Finance%20Data%20%282024%29.xlsx) — **xlsx** — 2 tab(s)
    - tab **Overview** (4 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Finance Data** (74 rows × 46 cols) — cols: `Record ID#`, `LEA Code`, `LEA Name`, `School_Year`, `Total Enrollment Count Prior Year`, `Total Enrollment Count FY24`, `Total School Level Expenditures State/Local`, `Total State/Local Expenditures Centralized`, `Aggregate State/Local Expenditures`, `Per-Pupil Expenditure State/Local`, `Total School Level Expenditures Federal`, `Total School Share of Centralized Expenditures Federal` …
  - [`DC School Report Card Common Financial Reporting Standards (2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Common%20Financial%20Reporting%20Standards%20%282024%29.xlsx) — **xlsx** — 2 tab(s)
    - tab **Overview** (4 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **CFRS** (266 rows × 68 cols) — cols: `Record ID#`, `uniquecode`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Enrollment Count FY23`, `Enrollment Count FY24`, `Total School Level Expenditures Federal`, `Total School Level Expenditures State/Local`, `Total School Share of Centralized Expenditures State/Local`, `Total School Share of Centralized Expenditures Federal` …

### [DC Educator Workforce Data](https://osse.dc.gov/page/dc-educator-workforce-data)

_topics: educators_

- **Format:** PDF reports + Excel (.xlsx) at state/LEA/school level
- **Updated:** Comprehensive reports biennial; retention briefs annual
- **Years on page:** Reports 2018-19 to 2023-24; data files 2021-22 to 2025-26; retention briefs 2021-22 to 2025-26; EPP files 2024-2026
- **Notes:** Counts, demographics, preparation, retention, supply/demand for DCPS + charter educators (one flat file per topic per year). Staffing snapshot as of Oct 5 each year. Also Educator Preparation Provider (EPP) data files.
- **Data files (profiled):**
  - [`Educator Workforce Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20Educator%20Workforce%20Report%2010.2019.pdf) — **pdf** — 41 pages, **extractable tables** on ~1 page(s)
    - p14 table (28 rows): 
  - [`Educator Workforce Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2022%20DC%20Educator%20Workforce%20Report_FINAL.pdf) — **pdf** — 36 pages, **extractable tables** on ~36 page(s)
    - p1 table (2 rows): 
    - p2 table (2 rows): 
    - p3 table (2 rows): 
  - [`Educator Workforce Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20Educator%20Workforce%20Report%20%28Oct%2028%29.pdf) — **pdf** — 44 pages, **extractable tables** on ~44 page(s)
    - p1 table (2 rows): 
    - p2 table (2 rows): 
    - p3 table (2 rows): 
  - [`Educator Retention Brief`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Retention%20One-Pager.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): `TEACHER RETENTION In the 2021-22 school year, 74 percent of teachers were retained as teachers in the same school at which they taught in the 2020-21 school year and 88 percent of teachers were retained in DC.`, `2018-19 to 2019-20 2019-20 to 2020-21 2020-21 to 2021-22`, `70% 1`, `1% 3%`, `16%`
    - p1 table (2 rows): `81% 2%9`, `% 8%`
  - [`Educator Retention Brief`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/EduRetention_1pager_022423.pdf) — **pdf** — 2 pages, **extractable tables** on ~1 page(s)
    - p2 table (2 rows): `District of Columbia Educator Retention`
    - p2 table (2 rows): `73%`, `24% 3`
    - p2 table (2 rows): 
  - [`Educator Retention Brief`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20ERB.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (2 rows): `Total School Staff`, `Teachers`, `Principals`, `Special Education Support Staff`, `Paraprofessionals`, `Students`, `LEAs S`, `chools`
    - p1 table (2 rows): `78% 7`, `%`, `15%`
    - p1 table (2 rows): `79% 7%`, `1%13%`
  - [`Educator Retention Brief`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Education%20Retention%20Brief%202024-2025.pdf) — **pdf** — 4 pages, **extractable tables** on ~3 page(s)
    - p1 table (2 rows): `Total School Staff`, `Teachers`, `Principals`, `Special Education Support Staff`, `Paraprofessionals`, `Students`, `LEAs and SPAs*`, `Schools`
    - p1 table (2 rows): `TEACHER RETENTION In the 2024-25 school year, 84 percent of teachers were retained as teachers in DC, and 76 percent of teachers were retained as teachers in the same school`, `PRINCIPAL RETENTION In the 2024-25 school year, 83 percent of principals were retained as principals in DC, and 78 percent of principals were retained`
    - p2 table (3 rows): `2024-25 District of Columbia Educator Retention Brief`
  - [`Educator Retention Brief`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2025-26%20Educator%20Retention%20Brief.pdf) — **pdf** — 4 pages, **extractable tables** on ~3 page(s)
    - p1 table (3 rows): `EDUCATIONAL LANDSCAPE`
    - p1 table (2 rows): `78% 1`, `%12`, `% 9%`
    - p1 table (2 rows): 
  - [`Educator Retention Brief — Definitions and Methodology`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024-25%20Educator%20Retention%20Brief%20-%20Definitions%20and%20Methodology.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Educator Workforce — All Files (combined workbook)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator_Data_May_2022.xlsx) — **xlsx** — 12 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **LEA Demographics_All Staff** (72 rows × 10 cols) — cols: `LEA Information`, `Gender`, `American Indian/Alaskan Native`, `Asian`, `Black/African American`, `Hispanic/Latino`, `Two or More Races`, `Pacific Islander/Native Hawaiian`, `White/Caucasian`, `Race/Ethnicity Other/Unknown`
    - tab **School Demographics_All Staff** (253 rows × 10 cols) — cols: `School Information`, `Gender`, `American Indian/Alaskan Native`, `Asian`, `Black/African American`, `Hispanic/Latino`, `Two or More Races`, `Pacific Islander/Native Hawaiian`, `White/Caucasian`, `Race/Ethnicity Other/Unknown`
    - tab **LEA Demographics_Teachers** (72 rows × 10 cols) — cols: `LEA Information`, `Gender`, `American Indian/Alaskan Native`, `Asian`, `Black/African American`, `Hispanic/Latino`, `Two or More Races`, `Pacific Islander/Native Hawaiian`, `White/Caucasian`, `Race/Ethnicity Other/Unknown`
    - tab **School Demographics_Teachers** (253 rows × 10 cols) — cols: `School Information`, `Gender`, `American Indian/Alaskan Native`, `Asian`, `Black/African American`, `Hispanic/Latino`, `Two or More Races`, `Pacific Islander/Native Hawaiian`, `White/Caucasian`, `Race/Ethnicity Other/Unknown`
    - tab **LEA Demographics_Leaders** (72 rows × 10 cols) — cols: `LEA Information`, `Gender`, `American Indian/Alaskan Native`, `Asian`, `Black/African American`, `Hispanic/Latino`, `Two or More Races`, `Pacific Islander/Native Hawaiian`, `White/Caucasian`, `Race/Ethnicity Other/Unknown`
    - tab **School Demographics_Leaders** (250 rows × 10 cols) — cols: `School Information`, `Gender`, `American Indian/Alaskan Native`, `Asian`, `Black/African American`, `Hispanic/Latino`, `Two or More Races`, `Pacific Islander/Native Hawaiian`, `White/Caucasian`, `Race/Ethnicity Other/Unknown`
    - tab **Retention_LEA** (69 rows × 13 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Total Number of Teachers at this LEA in SY 2020-21`, `Number of Teachers who remained employed in the same role type at the same school`, `Percent of Teachers who remained employed in the same role type at the same school`, `Number of Teachers who remained employed in the same role type at a new school`, `Percent of Teachers who remained employed in the same role type at a new school`, `Number of Teachers who shifted to a new role type at the same or a new school`, `Percent of Teachers who shifted to a new role type at the same or a new school`, `Number of Teachers who left the DC public education workforce` …
    - tab **Retention_School** (252 rows × 17 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Number of Teachers at this School in SY 2020-21`, `Number of Teachers who remained employed in the same role type at the same school`, `Percent of Teachers who remained employed in the same role type at the same school`, `Number of Teachers who remained employed in the same role type at a new school`, `Percent of Teachers who remained employed in the same role type at a new school` …
    - tab **Supply EPPs** (75 rows × 6 cols) — cols: `Education Preparation Program`, `Number of completers in 2019-20`, `Number of completers who were teaching in the 2020-21 school year in a DC LEA`, `Subject Area`, `Number of completers in this subject of training in 2019-20`, `Number of completers who were teaching in the subject of training the 2020-21 school year`
    - tab **Vacancies_LEA** (88 rows × 5 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_School** (356 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Subject`, `Number of Vacant FTEs in this Subject Area`
  - [`Educator Workforce — All Files (combined workbook)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Data%20Flat%20File%20SY%202022-23%20%283%29.xlsx) — **xlsx** — 40 tab(s)
    - tab **Overview** (10 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Demographics_staff_sea** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Staff Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_staff_lea** (72 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Staff at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_staff_sch** (254 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Staff at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_tch_sea** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Teachers Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_tch_lea** (72 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Teachers at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_tch_sch** (254 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Teachers at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_sls_sea** (2 rows × 37 cols) — cols: `Reporting Level`, `Total School Leaders Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_sls_lea** (71 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total School Leaders at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_sls_sch** (252 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total School Leaders at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Retention_overall_sea** (2 rows × 10 cols) — cols: `School Years`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Number of teachers who remained employed in the same role type at a new school`, `Percent of teachers who remained employed in the same role type at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce`, `Percent of teachers who left the DC public education workforce`
    - tab **Retention_overall_lea** (72 rows × 14 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Number of teachers who remained employed in the same role type at a new school`, `Percent of teachers who remained employed in the same role type at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce` …
    - tab **Retention_overall_sch** (254 rows × 17 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Number of teachers who remained employed in the same role type at a new school`, `Percent of teachers who remained employed in the same role type at a new school` …
    - tab **Retention_experience_sea** (5 rows × 5 cols) — cols: `School Years`, `Years of Experience in SY 2021-22`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`
    - tab **Retention_experience_lea** (285 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Years of Experience in SY 2021-22`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Notes`
    - tab **Retention_experience_sch** (1,013 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience in SY 2021-22`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Notes`
    - tab **Retention_race_sea** (9 rows × 5 cols) — cols: `School Years`, `Race/Ethnicity`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`
    - tab **Retention_race_lea** (569 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Race/Ethnicity`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Notes`
    - tab **Retention_race_sch** (2,025 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Race/Ethnicity`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Notes`
    - tab **Gradeband_tch_sea** (5 rows × 4 cols) — cols: `Grand Band`, `Total teachers Citywide`, `Total teachers at least 0.5 FTE in this Grade Band Citywide`, `Percent teachers at least 0.5 FTE in this Grade Band Citywide`
    - tab **Gradeband_tch_lea** (141 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Grand Band`, `Total teachers at this LEA`, `Total teachers at least 0.5 FTE in this Grade Band at this LEA`, `Percent teachers at least 0.5 FTE in this Grade Band at this LEA`
    - tab **Gradeband_tch_sch** (456 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Grand Band`, `Total teachers at this School`, `Total teachers at least 0.5 FTE in this Grade Band at this School`, `Percent teachers at least 0.5 FTE in this Grade Band at this School`
    - tab **Effective_tch_sea** (2 rows × 2 cols) — cols: `Total teachers that were rated Citywide`, `Percent teachers rated effective Citywide`
    - tab **Effective_tch_lea** (72 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total teachers that were rated at this LEA`, `Percent teachers rated effective at this LEA`, `Notes`
    - tab **Certified_tch_sea** (2 rows × 3 cols) — cols: `Total teachers (DCPS only)`, `Total teachers that hold a DC teaching certification (DCPS only)`, `Percent teachers that hold a DC teaching certification (DCPS only)`
    - tab **Certified_tch_lea** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total teachers (DCPS only)`, `Total teachers that hold a DC teaching certification (DCPS only)`, `Percent teachers that hold a DC teaching certification (DCPS only)`
    - tab **Certified_tch_sch** (117 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total teachers at this School`, `Total teachers that hold a DC teaching certification at this School`, `Percent teachers that hold a DC teaching certification at this School`
    - tab **Infield_tch_sea** (2 rows × 3 cols) — cols: `Total teachers (DCPS only)`, `Total teachers that are teaching a subject infield (DCPS only)`, `Percent teachers that are teaching a subject infield (DCPS only)`
    - tab **Infield_tch_lea** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total teachers (DCPS only)`, `Total teachers that are teaching a subject infield (DCPS only)`, `Percent teachers that are teaching a subject infield (DCPS only)`
    - tab **Infield_tch_sch** (117 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total teachers at this School`, `Total teachers that are teaching a subject infield at this School`, `Percent teachers that are teaching a subject infield at this School`
    - tab **Exp_tch_sea** (5 rows × 4 cols) — cols: `Years of Experience`, `Total Teachers Citywide`, `Total Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_tch_lea** (285 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Total Teachers at this LEA`, `Total Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_tch_sch** (1,013 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Total Teachers at this School`, `Total Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_sls_sea** (6 rows × 4 cols) — cols: `Years of Experience`, `Total School Leaders Citywide`, `Total School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_sls_lea** (351 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Total School Leaders at this LEA`, `Total School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_sls_sch** (1,256 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Total School Leaders at this School`, `Total School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Vacancies_sea** (14 rows × 2 cols) — cols: `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_lea** (97 rows × 5 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_sch** (209 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Supply EPPs** (65 rows × 6 cols) — cols: `Education Preparation Program`, `Number of completers in 2020-21`, `Number of completers who were teaching in the 2021-22 school year in a DC LEA`, `Subject Area`, `Number of completers in this subject of training in 2020-21`, `Number of completers who were teaching in the subject of training the 2021-22 school year in a DC LEA`
  - [`Educator Workforce — Counts and Demographics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2022-23%20DC%20Educator%20Workforce%20Data%20File%20%28Counts%20and%20Demographics%29.xlsx) — **xlsx** — 13 tab(s)
    - tab **Overview** (10 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Gradeband_tch_sea** (5 rows × 4 cols) — cols: `Grand Band`, `Total teachers Citywide`, `Total teachers at least 0.5 FTE in this Grade Band Citywide`, `Percent teachers at least 0.5 FTE in this Grade Band Citywide`
    - tab **Gradeband_tch_lea** (141 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Grand Band`, `Total teachers at this LEA`, `Total teachers at least 0.5 FTE in this Grade Band at this LEA`, `Percent teachers at least 0.5 FTE in this Grade Band at this LEA`
    - tab **Gradeband_tch_sch** (456 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Grand Band`, `Total teachers at this School`, `Total teachers at least 0.5 FTE in this Grade Band at this School`, `Percent teachers at least 0.5 FTE in this Grade Band at this School`
    - tab **Demographics_staff_sea** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Staff Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_staff_lea** (72 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Staff at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_staff_sch** (254 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Staff at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_tch_sea** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Teachers Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_tch_lea** (72 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Teachers at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_tch_sch** (254 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Teachers at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_sls_sea** (2 rows × 37 cols) — cols: `Reporting Level`, `Total School Leaders Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_sls_lea** (71 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total School Leaders at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_sls_sch** (252 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total School Leaders at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
  - [`Educator Workforce — Preparation and Performance`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Data%20Flat%20File%20Prep%20and%20Perf%20Oct%2023%20Update.xlsx) — **xlsx** — 15 tab(s)
    - tab **Overview** (8 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Effective_tch_sea** (2 rows × 2 cols) — cols: `Total teachers that were rated Citywide`, `Percent teachers rated effective Citywide`
    - tab **Effective_tch_lea** (72 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total teachers that were rated at this LEA`, `Percent teachers rated effective at this LEA`, `Notes`
    - tab **Certified_tch_sea** (2 rows × 3 cols) — cols: `Total teachers (DCPS only)`, `Total teachers that hold a DC teaching certification (DCPS only)`, `Percent teachers that hold a DC teaching certification (DCPS only)`
    - tab **Certified_tch_lea** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total teachers (DCPS only)`, `Total teachers that hold a DC teaching certification (DCPS only)`, `Percent teachers that hold a DC teaching certification (DCPS only)`
    - tab **Certified_tch_sch** (117 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total teachers at this School`, `Total teachers that hold a DC teaching certification at this School`, `Percent teachers that hold a DC teaching certification at this School`
    - tab **Infield_tch_sea** (2 rows × 3 cols) — cols: `Total teachers (DCPS only)`, `Total teachers that are teaching a subject infield (DCPS only)`, `Percent teachers that are teaching a subject infield (DCPS only)`
    - tab **Infield_tch_lea** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total teachers (DCPS only)`, `Total teachers that are teaching a subject infield (DCPS only)`, `Percent teachers that are teaching a subject infield (DCPS only)`
    - tab **Infield_tch_sch** (117 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total teachers at this School`, `Total teachers that are teaching a subject infield at this School`, `Percent teachers that are teaching a subject infield at this School`
    - tab **Exp_tch_sea** (5 rows × 4 cols) — cols: `Years of Experience`, `Total Teachers Citywide`, `Total Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_tch_lea** (285 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Total Teachers at this LEA`, `Total Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_tch_sch** (1,013 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Total Teachers at this School`, `Total Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_sls_sea** (6 rows × 4 cols) — cols: `Years of Experience`, `Total School Leaders Citywide`, `Total School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_sls_lea** (351 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Total School Leaders at this LEA`, `Total School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_sls_sch** (1,256 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Total School Leaders at this School`, `Total School Leaders in this experience category`, `Percent of School Leaders in this experience category`
  - [`Educator Workforce — Retention`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2022-23%20DC%20Educator%20Workforce%20Data%20File%20%28Retention%29.xlsx) — **xlsx** — 10 tab(s)
    - tab **Overview** (10 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Retention_overall_sea** (2 rows × 10 cols) — cols: `School Years`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Number of teachers who remained employed in the same role type at a new school`, `Percent of teachers who remained employed in the same role type at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce`, `Percent of teachers who left the DC public education workforce`
    - tab **Retention_overall_lea** (72 rows × 14 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Number of teachers who remained employed in the same role type at a new school`, `Percent of teachers who remained employed in the same role type at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce` …
    - tab **Retention_overall_sch** (254 rows × 17 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Number of teachers who remained employed in the same role type at a new school`, `Percent of teachers who remained employed in the same role type at a new school` …
    - tab **Retention_experience_sea** (5 rows × 5 cols) — cols: `School Years`, `Years of Experience in SY 2021-22`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`
    - tab **Retention_experience_lea** (285 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Years of Experience in SY 2021-22`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Notes`
    - tab **Retention_experience_sch** (1,013 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience in SY 2021-22`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Notes`
    - tab **Retention_race_sea** (9 rows × 5 cols) — cols: `School Years`, `Race/Ethnicity`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`
    - tab **Retention_race_lea** (569 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Race/Ethnicity`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Notes`
    - tab **Retention_race_sch** (2,025 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Race/Ethnicity`, `Total number of teachers in SY 2021-22`, `Number of teachers who remained employed in the same role type at the same school`, `Percent of teachers who remained employed in the same role type at the same school`, `Notes`
  - [`Educator Workforce — Supply and Demand`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2022-23%20DC%20Educator%20Workforce%20Data%20File%20%28Supply%20and%20Demand%29.xlsx) — **xlsx** — 5 tab(s)
    - tab **Overview** (10 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Vacancies_sea** (14 rows × 2 cols) — cols: `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_lea** (97 rows × 5 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_sch** (209 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Supply EPPs** (65 rows × 6 cols) — cols: `Education Preparation Program`, `Number of completers in 2020-21`, `Number of completers who were teaching in the 2021-22 school year in a DC LEA`, `Subject Area`, `Number of completers in this subject of training in 2020-21`, `Number of completers who were teaching in the subject of training the 2021-22 school year in a DC LEA`
  - [`Educator Workforce — All Files (combined workbook)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20Educator%20Workforce%20Data%20Files%20%28Oct%2028%29_1.xlsx) — **xlsx** — 51 tab(s)
    - tab **Overview (C&D)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Demographics_Staff_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Staff Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Staff_LEA** (73 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Staff at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Tch_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Teachers Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_SL_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total School Leaders Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Tch_LEA** (73 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Teachers at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_SL_LEA** (73 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total School Leaders at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Staff_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Staff at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_Tch_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Teachers at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_SL_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total School Leaders at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Gradeband_Tch_SEA** (5 rows × 4 cols) — cols: `Grand Band`, `Total Teachers Citywide`, `Total Teachers in this Grade Band Citywide`, `Percent Teachers in this Grade Band Citywide`
    - tab **Gradeband_Tch_LEA** (144 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Grand Band`, `Total Teachers at this LEA`, `Total Teachers in this Grade Band at this LEA`, `Percent Teachers in this Grade Band at this LEA`
    - tab **Gradeband_Tch_SCH** (459 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Grand Band`, `Total Teachers at this school`, `Total Teachers in this Grade Band at this school`, `Percent Teachers in this Grade Band at this school`
    - tab **Student-Teacher Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_LEA** (73 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_LEA** (73 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_SCH** (255 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SCH** (255 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Staff Ratio`
    - tab **Overview (Prep&Perf)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Codebook (Prep&Perf)** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Effective_Tch_SEA** (2 rows × 2 cols) — cols: `Total SY 2023-24 Teachers that were rated in SY 2022-23 Citywide`, `Percent of SY 2023-34 Teachers rated effective in SY 2022-23 Citywide`
    - tab **Certified_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject infield (DCPS only)`, `Percent Teachers that are teaching a subject infield (DCPS only)`
    - tab **Effective_Tch_LEA** (73 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total SY 2023-24 Teachers that were rated in SY 2022-23 at this LEA`, `Percent of 2023-24 Teachers rated effective in SY 2022-23 at this LEA`, `Notes`
    - tab **Certified_Tch_LEA** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_LEA** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject infield (DCPS only)`, `Percent Teachers that are teaching a subject infield (DCPS only)`
    - tab **Effective_Tch_SCH** (255 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total SY 2023-24 Teachers that were rated in SY 2022-23 at this school`, `Percent of SY 2023-24 Teachers rated effective in SY 2022-23 at this school`, `Notes`
    - tab **Certified_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that hold a DC teaching certification at this school`, `Percent Teachers that hold a DC teaching certification at this school`
    - tab **Infield_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that are teaching a subject infield at this school`, `Percent Teachers that are teaching a subject infield at this school`
    - tab **Exp_Tch_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of Teachers Citywide`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of School Leaders Citywide`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_LEA** (289 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of Teachers at this LEA`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_LEA** (289 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of School Leaders at this LEA`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_SCH** (1,017 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of Teachers at this School`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SCH** (1,017 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of School Leaders at this School`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Overview (Retention)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Retention_overall_SEA** (2 rows × 10 cols) — cols: `School Years`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce`, `Percent of teachers who left the DC public education workforce`
    - tab **Retention_experience_SEA** (5 rows × 5 cols) — cols: `School Years`, `Years of Experience in SY 2022-23`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_race_SEA** (9 rows × 5 cols) — cols: `School Years`, `Race/Ethnicity`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_overall_LEA** (73 rows × 13 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce` …
    - tab **Retention_experience_LEA** (289 rows × 8 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Years of Experience in SY 2022-23`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_race_LEA** (577 rows × 8 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Race/Ethnicity`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_overall_SCH** (255 rows × 17 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school` …
    - tab **Retention_experience_SCH** (1,017 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience in SY 2022-23`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_race_SCH** (2,033 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Race/Ethnicity`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Overview (S&D)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Supply EPPs** (117 rows × 8 cols) — cols: `EPP Program`, `Total number of candidates and completers in 2022-23`, `Total number of candidates and completers who were teaching in the 2023-24 schoo`, `Subject`, `Number of candidates and completers in this subject of training in 2022-23`, `2022-23 DC EPP Candidates and Completers Certified in this Subject`, `2022-23 DC EPP Candidates and Completers Teaching this Subject in SY 2023-24`, `Number of candidates and completers who were teaching in the subject of training`
    - tab **Vacancies_SEA** (14 rows × 2 cols) — cols: `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_LEA** (118 rows × 5 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_SCH** (388 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Subject`, `Number of Vacant FTEs in this Subject Area`
  - [`Educator Workforce — Counts and Demographics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Data%20Flat%20File_Counts%20and%20Demographics%20%28Oct%2028%29.xlsx) — **xlsx** — 19 tab(s)
    - tab **Overview (C&D)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Demographics_Staff_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Staff Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Staff_LEA** (73 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Staff at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Tch_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Teachers Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_SL_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total School Leaders Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Tch_LEA** (73 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Teachers at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_SL_LEA** (73 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total School Leaders at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Staff_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Staff at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_Tch_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Teachers at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_SL_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total School Leaders at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Gradeband_Tch_SEA** (5 rows × 4 cols) — cols: `Grand Band`, `Total Teachers Citywide`, `Total Teachers in this Grade Band Citywide`, `Percent Teachers in this Grade Band Citywide`
    - tab **Gradeband_Tch_LEA** (144 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Grand Band`, `Total Teachers at this LEA`, `Total Teachers in this Grade Band at this LEA`, `Percent Teachers in this Grade Band at this LEA`
    - tab **Gradeband_Tch_SCH** (459 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Grand Band`, `Total Teachers at this school`, `Total Teachers in this Grade Band at this school`, `Percent Teachers in this Grade Band at this school`
    - tab **Student-Teacher Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_LEA** (73 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_LEA** (73 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_SCH** (255 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SCH** (255 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Staff Ratio`
  - [`Educator Workforce — Preparation and Performance`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Data%20Flat%20File_Preparation%20and%20Performance%20%28Oct%2028%29.xlsx) — **xlsx** — 17 tab(s)
    - tab **Overview (Prep&Perf)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Codebook (Prep&Perf)** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Effective_Tch_SEA** (2 rows × 2 cols) — cols: `Total SY 2023-24 Teachers that were rated in SY 2022-23 Citywide`, `Percent of SY 2023-34 Teachers rated effective in SY 2022-23 Citywide`
    - tab **Certified_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject infield (DCPS only)`, `Percent Teachers that are teaching a subject infield (DCPS only)`
    - tab **Effective_Tch_LEA** (73 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total SY 2023-24 Teachers that were rated in SY 2022-23 at this LEA`, `Percent of 2023-24 Teachers rated effective in SY 2022-23 at this LEA`, `Notes`
    - tab **Certified_Tch_LEA** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_LEA** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject infield (DCPS only)`, `Percent Teachers that are teaching a subject infield (DCPS only)`
    - tab **Effective_Tch_SCH** (255 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total SY 2023-24 Teachers that were rated in SY 2022-23 at this school`, `Percent of SY 2023-24 Teachers rated effective in SY 2022-23 at this school`, `Notes`
    - tab **Certified_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that hold a DC teaching certification at this school`, `Percent Teachers that hold a DC teaching certification at this school`
    - tab **Infield_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that are teaching a subject infield at this school`, `Percent Teachers that are teaching a subject infield at this school`
    - tab **Exp_Tch_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of Teachers Citywide`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of School Leaders Citywide`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_LEA** (289 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of Teachers at this LEA`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_LEA** (289 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of School Leaders at this LEA`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_SCH** (1,017 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of Teachers at this School`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SCH** (1,017 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of School Leaders at this School`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
  - [`Educator Workforce — Retention`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Data%20Flat%20File_Retention%20%28Oct%2028%29%20.xlsx) — **xlsx** — 10 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Retention_overall_SEA** (2 rows × 10 cols) — cols: `School Years`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce`, `Percent of teachers who left the DC public education workforce`
    - tab **Retention_experience_SEA** (5 rows × 5 cols) — cols: `School Years`, `Years of Experience in SY 2022-23`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_race_SEA** (9 rows × 5 cols) — cols: `School Years`, `Race/Ethnicity`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_overall_LEA** (73 rows × 13 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce` …
    - tab **Retention_experience_LEA** (289 rows × 8 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Years of Experience in SY 2022-23`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_race_LEA** (577 rows × 8 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Race/Ethnicity`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_overall_SCH** (255 rows × 17 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school` …
    - tab **Retention_experience_SCH** (1,017 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience in SY 2022-23`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_race_SCH** (2,033 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Race/Ethnicity`, `Total number of teachers in SY 2022-23 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
  - [`Educator Workforce — Supply and Demand`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Data%20Flat%20File_Supply%20and%20Demand%20%28Oct%2028%29.xlsx) — **xlsx** — 5 tab(s)
    - tab **Overview (S&D)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Supply EPPs** (117 rows × 8 cols) — cols: `EPP Program`, `Total number of candidates and completers in 2022-23`, `Total number of candidates and completers who were teaching in the 2023-24 schoo`, `Subject`, `Number of candidates and completers in this subject of training in 2022-23`, `2022-23 DC EPP Candidates and Completers Certified in this Subject`, `2022-23 DC EPP Candidates and Completers Teaching this Subject in SY 2023-24`, `Number of candidates and completers who were teaching in the subject of training`
    - tab **Vacancies_SEA** (14 rows × 2 cols) — cols: `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_LEA** (118 rows × 5 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_SCH** (388 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Subject`, `Number of Vacant FTEs in this Subject Area`
  - [`Educator Workforce — All Files (combined workbook)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2025%20Educator%20Data%20Flat%20File%20%28All%20Files%29.xlsx) — **xlsx** — 49 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Demographics_Staff_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Staff Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Tch_SEA** (3 rows × 37 cols) — cols: `Reporting Level`, `Total Teachers Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_SL_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total School Leaders Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Staff_LEA** (72 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Staff at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Tch_LEA** (72 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Teachers at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_SL_LEA** (72 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total School Leaders at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Staff_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Staff at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_Tch_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Teachers at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_SL_SCH** (254 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total School Leaders at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Gradeband_Tch_SEA** (5 rows × 4 cols) — cols: `Grand Band`, `Total Teachers Citywide`, `Total Teachers in this Grade Band Citywide`, `Percent Teachers in this Grade Band Citywide`
    - tab **Gradeband_Tch_LEA** (143 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Grand Band`, `Total Teachers at this LEA`, `Total Teachers in this Grade Band at this LEA`, `Percent Teachers in this Grade Band at this LEA`
    - tab **Gradeband_Tch_SCH** (467 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Grand Band`, `Total Teachers at this school`, `Total Teachers in this Grade Band at this school`, `Percent Teachers in this Grade Band at this school`
    - tab **Student-Teacher Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_LEA** (72 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_LEA** (72 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_SCH** (255 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SCH** (255 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Staff Ratio`
    - tab **Overview (Prep+Perf)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Effective_Tch_SEA** (2 rows × 2 cols) — cols: `Total SY 2024-25 Teachers that were rated in SY 2023-24 Citywide`, `Percent of SY 2024-25 Teachers rated effective in SY 2023-24 Citywide`
    - tab **Certified_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject infield (DCPS only)`, `Percent Teachers that are teaching a subject infield (DCPS only)`
    - tab **Effective_Tch_LEA** (72 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total SY 2024-25 Teachers that were rated in SY 2023-24 at this LEA`, `Percent of 2024-25 Teachers rated effective in SY 2023-24 at this LEA`, `Notes`
    - tab **Certified_Tch_LEA** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_LEA** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject infield (DCPS only)`, `Percent Teachers that are teaching a subject infield (DCPS only)`
    - tab **Effective_Tch_SCH** (255 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total SY 2024-25 Teachers that were rated in SY 2023-24 at this school`, `Percent of SY 2024-25 Teachers rated effective in SY 2023-24 at this school`, `Notes`
    - tab **Certified_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that hold a DC teaching certification at this school`, `Percent Teachers that hold a DC teaching certification at this school`
    - tab **Infield_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that are teaching a subject infield at this school`, `Percent Teachers that are teaching a subject infield at this school`
    - tab **Exp_Tch_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of Teachers Citywide`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of School Leaders Citywide`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_LEA** (285 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of Teachers at this LEA`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_LEA** (285 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of School Leaders at this LEA`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_SCH** (1,017 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of Teachers at this School`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SCH** (1,013 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of School Leaders at this School`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Overview (Retn)** (9 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Retention_overall_SEA** (2 rows × 10 cols) — cols: `School Years`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce`, `Percent of teachers who left the DC public education workforce`
    - tab **Retention_experience_SEA** (5 rows × 5 cols) — cols: `School Years`, `Years of Experience in SY 2023-24`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_race_SEA** (9 rows × 5 cols) — cols: `School Years`, `Race/Ethnicity`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_overall_LEA** (73 rows × 14 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce` …
    - tab **Retention_experience_LEA** (289 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Years of Experience in SY 2023-24`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_race_LEA** (577 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Race/Ethnicity`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_overall_SCH** (257 rows × 17 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school` …
    - tab **Retention_experience_SCH** (1,025 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience in SY 2023-24`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_race_SCH** (2,049 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Race/Ethnicity`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Overview (Vacancies)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Vacancies_SEA** (15 rows × 2 cols) — cols: `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_LEA** (93 rows × 4 cols) — cols: `LEA Name`, `Sector`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_SCH** (244 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Subject`, `Number of Vacant FTEs in this Subject Area`
  - [`Educator Workforce — Counts and Demographics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Data%20Flat%20File_Counts%20and%20Demographics.xlsx) — **xlsx** — 19 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Demographics_Staff_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Staff Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Tch_SEA** (3 rows × 37 cols) — cols: `Reporting Level`, `Total Teachers Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_SL_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total School Leaders Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Staff_LEA** (72 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Staff at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Tch_LEA** (72 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Teachers at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_SL_LEA** (72 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total School Leaders at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Staff_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Staff at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_Tch_SCH** (255 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Teachers at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_SL_SCH** (254 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total School Leaders at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Gradeband_Tch_SEA** (5 rows × 4 cols) — cols: `Grand Band`, `Total Teachers Citywide`, `Total Teachers in this Grade Band Citywide`, `Percent Teachers in this Grade Band Citywide`
    - tab **Gradeband_Tch_LEA** (143 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Grand Band`, `Total Teachers at this LEA`, `Total Teachers in this Grade Band at this LEA`, `Percent Teachers in this Grade Band at this LEA`
    - tab **Gradeband_Tch_SCH** (467 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Grand Band`, `Total Teachers at this school`, `Total Teachers in this Grade Band at this school`, `Percent Teachers in this Grade Band at this school`
    - tab **Student-Teacher Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_LEA** (72 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_LEA** (72 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_SCH** (255 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SCH** (255 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Staff Ratio`
  - [`Educator Workforce — Preparation and Performance`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Data%20Flat%20File_Preparation%20and%20Performance_0.xlsx) — **xlsx** — 16 tab(s)
    - tab **Overview (Prep+Perf)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Effective_Tch_SEA** (2 rows × 2 cols) — cols: `Total SY 2024-25 Teachers that were rated in SY 2023-24 Citywide`, `Percent of SY 2024-25 Teachers rated effective in SY 2023-24 Citywide`
    - tab **Certified_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject infield (DCPS only)`, `Percent Teachers that are teaching a subject infield (DCPS only)`
    - tab **Effective_Tch_LEA** (72 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total SY 2024-25 Teachers that were rated in SY 2023-24 at this LEA`, `Percent of 2024-25 Teachers rated effective in SY 2023-24 at this LEA`, `Notes`
    - tab **Certified_Tch_LEA** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_LEA** (2 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject infield (DCPS only)`, `Percent Teachers that are teaching a subject infield (DCPS only)`
    - tab **Effective_Tch_SCH** (255 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total SY 2024-25 Teachers that were rated in SY 2023-24 at this school`, `Percent of SY 2024-25 Teachers rated effective in SY 2023-24 at this school`, `Notes`
    - tab **Certified_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that hold a DC teaching certification at this school`, `Percent Teachers that hold a DC teaching certification at this school`
    - tab **Infield_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that are teaching a subject infield at this school`, `Percent Teachers that are teaching a subject infield at this school`
    - tab **Exp_Tch_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of Teachers Citywide`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of School Leaders Citywide`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_LEA** (285 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of Teachers at this LEA`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_LEA** (285 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of School Leaders at this LEA`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_SCH** (1,017 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of Teachers at this School`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SCH** (1,013 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of School Leaders at this School`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
  - [`Educator Workforce — Retention`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Data%20Flat%20File_Retention.xlsx) — **xlsx** — 10 tab(s)
    - tab **Overview** (9 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Retention_overall_SEA** (2 rows × 10 cols) — cols: `School Years`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce`, `Percent of teachers who left the DC public education workforce`
    - tab **Retention_experience_SEA** (5 rows × 5 cols) — cols: `School Years`, `Years of Experience in SY 2023-24`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_race_SEA** (9 rows × 5 cols) — cols: `School Years`, `Race/Ethnicity`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_overall_LEA** (73 rows × 14 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce` …
    - tab **Retention_experience_LEA** (289 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Years of Experience in SY 2023-24`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_race_LEA** (577 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Race/Ethnicity`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_overall_SCH** (257 rows × 17 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school` …
    - tab **Retention_experience_SCH** (1,025 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience in SY 2023-24`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_race_SCH** (2,049 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Race/Ethnicity`, `Total number of teachers in SY 2023-24 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
  - [`Educator Workforce — Supply and Demand`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Data%20Flat%20File_Vacancies.xlsx) — **xlsx** — 4 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Vacancies_SEA** (15 rows × 2 cols) — cols: `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_LEA** (93 rows × 4 cols) — cols: `LEA Name`, `Sector`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_SCH** (244 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Subject`, `Number of Vacant FTEs in this Subject Area`
  - [`Educator Workforce — All Files (combined workbook)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2025-26%20Educator%20Workforce%20Data%20Files.xlsx) — **xlsx** — 47 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Demographics_Staff_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Staff Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Tch_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Teachers Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_SL_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total School Leaders Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Staff_LEA** (70 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Staff at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Tch_LEA** (70 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Teachers at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_SL_LEA** (70 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total School Leaders at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Staff_SCH** (254 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Staff at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_Tch_SCH** (254 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Teachers at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_SL_SCH** (253 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total School Leaders at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Gradeband_Tch_SEA** (5 rows × 4 cols) — cols: `Grand Band`, `Total Teachers Citywide`, `Total Teachers in this Grade Band Citywide`, `Percent Teachers in this Grade Band Citywide`
    - tab **Gradeband_Tch_LEA** (141 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Grand Band`, `Total Teachers at this LEA`, `Total Teachers in this Grade Band at this LEA`, `Percent Teachers in this Grade Band at this LEA`
    - tab **Gradeband_Tch_SCH** (461 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Grand Band`, `Total Teachers at this school`, `Total Teachers in this Grade Band at this school`, `Percent Teachers in this Grade Band at this school`
    - tab **Student-Teacher Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_LEA** (70 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_LEA** (70 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_SCH** (254 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SCH** (254 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Staff Ratio`
    - tab **Overview (2)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Effective_Tch_SEA** (2 rows × 2 cols) — cols: `Total SY 2025-26 Teachers that were rated in SY 2024-25 Citywide`, `Percent of SY 2025-26 Teachers rated effective in SY 2024-25 Citywide`
    - tab **Certified_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent of Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject in-field (DCPS only)`, `Percent of Teachers that are teaching a subject in-field (DCPS only)`
    - tab **Effective_Tch_LEA** (70 rows × 5 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total SY 2025-26 Teachers that were rated in SY 2024-25 at this LEA`, `Percent of 2025-26 Teachers rated effective in SY 2024-25 at this LEA`
    - tab **Effective_Tch_SCH** (254 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total SY 2025-26 Teachers that were rated in SY 2024-25 at this school`, `Percent of SY 2025-26 Teachers rated effective in SY 2024-25 at this school`, `Notes`
    - tab **Certified_Tch_SCH** (115 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that hold a DC teaching certification at this school`, `Percent of Teachers that hold a DC teaching certification at this school`
    - tab **Infield_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that are teaching a subject in-field at this school`, `Percent of Teachers that are teaching a subject in-field at this school`
    - tab **Exp_Tch_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of Teachers Citywide`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of School Leaders Citywide`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_LEA** (277 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of Teachers at this LEA`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_LEA** (277 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of School Leaders at this LEA`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_SCH** (1,013 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of Teachers at this School`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SCH** (1,009 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of School Leaders at this School`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Overview (3)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Retention_overall_SEA** (2 rows × 10 cols) — cols: `School Years`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce`, `Percent of teachers who left the DC public education workforce`
    - tab **Retention_experience_SEA** (5 rows × 5 cols) — cols: `School Years`, `Years of Experience in SY 2024-25`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_race_SEA** (9 rows × 5 cols) — cols: `School Years`, `Race/Ethnicity`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_overall_LEA** (72 rows × 14 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce` …
    - tab **Retention_experience_LEA** (285 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Years of Experience in SY 2024-25`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_race_LEA** (569 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Race/Ethnicity`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_overall_SCH** (256 rows × 17 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school` …
    - tab **Retention_experience_SCH** (1,021 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience in SY 2024-25`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_race_SCH** (2,041 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Race/Ethnicity`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Overview (4)** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Vacancies_SEA** (14 rows × 2 cols) — cols: `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_LEA** (96 rows × 5 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_SCH** (277 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Subject`, `Number of Vacant FTEs in this Subject Area`
  - [`Educator Workforce — Counts and Demographics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SY2025-2026%20DC%20Educator%20Data_Counts%20and%20Demographics.xlsx) — **xlsx** — 19 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Demographics_Staff_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Staff Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Tch_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total Teachers Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_SL_SEA** (2 rows × 37 cols) — cols: `Reporting Level`, `Total School Leaders Citywide`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian`, `Asian Female`, `Asian Male` …
    - tab **Demographics_Staff_LEA** (70 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Staff at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Tch_LEA** (70 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total Teachers at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_SL_LEA** (70 rows × 39 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total School Leaders at this LEA`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female`, `American Indian/Alaskan Native Male`, `American Indian/Alaskan Native Gender Other/Unknown`, `Asian` …
    - tab **Demographics_Staff_SCH** (254 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Staff at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_Tch_SCH** (254 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total Teachers at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Demographics_SL_SCH** (253 rows × 42 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total School Leaders at this School`, `Female`, `Male`, `Gender Other/Unknown`, `American Indian/Alaskan Native`, `American Indian/Alaskan Native Female` …
    - tab **Gradeband_Tch_SEA** (5 rows × 4 cols) — cols: `Grand Band`, `Total Teachers Citywide`, `Total Teachers in this Grade Band Citywide`, `Percent Teachers in this Grade Band Citywide`
    - tab **Gradeband_Tch_LEA** (141 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Grand Band`, `Total Teachers at this LEA`, `Total Teachers in this Grade Band at this LEA`, `Percent Teachers in this Grade Band at this LEA`
    - tab **Gradeband_Tch_SCH** (461 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Grand Band`, `Total Teachers at this school`, `Total Teachers in this Grade Band at this school`, `Percent Teachers in this Grade Band at this school`
    - tab **Student-Teacher Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SEA** (2 rows × 2 cols) — cols: `Citywide`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_LEA** (70 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_LEA** (70 rows × 4 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Student:Staff Ratio`
    - tab **Student-Teacher Ratios_SCH** (254 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Teacher Ratio`
    - tab **Student-Staff Ratios_SCH** (254 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward`, `Student:Staff Ratio`
  - [`Educator Workforce — Preparation and Performance`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SY2025-2026%20DC%20Educator%20Data_Preparation%20and%20Performance.xlsx) — **xlsx** — 14 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Effective_Tch_SEA** (2 rows × 2 cols) — cols: `Total SY 2025-26 Teachers that were rated in SY 2024-25 Citywide`, `Percent of SY 2025-26 Teachers rated effective in SY 2024-25 Citywide`
    - tab **Certified_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent of Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject in-field (DCPS only)`, `Percent of Teachers that are teaching a subject in-field (DCPS only)`
    - tab **Effective_Tch_LEA** (70 rows × 5 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total SY 2025-26 Teachers that were rated in SY 2024-25 at this LEA`, `Percent of 2025-26 Teachers rated effective in SY 2024-25 at this LEA`
    - tab **Effective_Tch_SCH** (254 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total SY 2025-26 Teachers that were rated in SY 2024-25 at this school`, `Percent of SY 2025-26 Teachers rated effective in SY 2024-25 at this school`, `Notes`
    - tab **Certified_Tch_SCH** (115 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that hold a DC teaching certification at this school`, `Percent of Teachers that hold a DC teaching certification at this school`
    - tab **Infield_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that are teaching a subject in-field at this school`, `Percent of Teachers that are teaching a subject in-field at this school`
    - tab **Exp_Tch_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of Teachers Citywide`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of School Leaders Citywide`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_LEA** (277 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of Teachers at this LEA`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_LEA** (277 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of School Leaders at this LEA`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_SCH** (1,013 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of Teachers at this School`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SCH** (1,009 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of School Leaders at this School`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
  - [`Educator Workforce — Retention`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SY2025-2026%20DC%20Educator%20Data_Retention.xlsx) — **xlsx** — 10 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Retention_overall_SEA** (2 rows × 10 cols) — cols: `School Years`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce`, `Percent of teachers who left the DC public education workforce`
    - tab **Retention_experience_SEA** (5 rows × 5 cols) — cols: `School Years`, `Years of Experience in SY 2024-25`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_race_SEA** (9 rows × 5 cols) — cols: `School Years`, `Race/Ethnicity`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`
    - tab **Retention_overall_LEA** (72 rows × 14 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school`, `Number of teachers who shifted to a new role type at the same or a new school`, `Percent of teachers who shifted to a new role type at the same or a new school`, `Number of teachers who left the DC public education workforce` …
    - tab **Retention_experience_LEA** (285 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Years of Experience in SY 2024-25`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_race_LEA** (569 rows × 9 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `Sector`, `Race/Ethnicity`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_overall_SCH** (256 rows × 17 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Number of teachers who remained employed as teachers at a new school`, `Percent of teachers who remained employed as teachers at a new school` …
    - tab **Retention_experience_SCH** (1,021 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience in SY 2024-25`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
    - tab **Retention_race_SCH** (2,041 rows × 12 cols) — cols: `School Years`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Race/Ethnicity`, `Total number of teachers in SY 2024-25 teaching at least half-time`, `Number of teachers who remained employed as teachers at the same school`, `Percent of teachers who remained employed as teachers at the same school`, `Notes`
  - [`Educator Workforce — Supply and Demand`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SY2025-2026%20DC%20Educator%20Data_Vacancies.xlsx) — **xlsx** — 4 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Vacancies_SEA** (14 rows × 2 cols) — cols: `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_LEA** (96 rows × 5 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Subject`, `Number of Vacant FTEs in this Subject Area`
    - tab **Vacancies_SCH** (277 rows × 8 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Subject`, `Number of Vacant FTEs in this Subject Area`
  - [`Educator Preparation Provider (EPP) Landscape Brief`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/EPP_Brief_May2025.pdf) — **pdf** — 11 pages, **extractable tables** on ~5 page(s)
    - p1 table (9 rows): 
    - p2 table (2 rows): `INTRODUCTION A vital role of the Office of the State Superintendent of Education (OSSE) is to support the District’s educator pipeline so that all DC students have access to high- quality educators. By collecting and reporting data on how the District’s educator preparation providers (EPPs) respond to citywide talent demands, evaluating EPP quality, designing opportunities for strategic connection between EPPs and local education agencies (LEAs), and leveraging our convening power to bring together DC EPPs and LEA leaders, OSSE helps new teachers effectively lead classrooms and foster student success. Teacher effectiveness is an important driver of students’ academic achievement. Research indicates that “teachers in the top 20 percent of performance generate five to six more months of student learning each year than low-performing teachers.”1 Thus, providing educators, particularly new teachers, with the training and tools to be effective is critical to creating high-quality learning environments for all students.2 This training starts in the institutions that prepare our future District educators and continues with ongoing professional learning throughout an educator’s career. To support the development of well-prepared, locally trained educators, OSSE reviews and approves EPP programs to ensure that these institutions provide candidates with the content knowledge, skills, on-the-ground training, and support to meet the needs of the District’s students.3 Once approved by OSSE, EPPs are eligible to offer programs to educators that prepare them to acquire an educator credential. As part of its ongoing partnership with District EPPs, OSSE also collects and analyzes data about these institutions’ programs and candidate cohorts, as demonstrated by this brief and via the OSSE Educator Preparation Provider Data Files. This “School Year 2024-25 EPP Landscape Brief” discusses the employment and certification rates of EPP candidates and completers who were enrolled in their program at any point between Sept. 1, 2023 to Aug. 31, 2024; details the teacher vacancies filled by EPP candidates and completers; and analyzes the demographics of EPP candidates and completers compared to District teachers and students.4 OSSE designed this brief to help policymakers, practitioners, and the public better understand the relationship between the District’s educator workforce, including the supply of new educators stemming from the District’s EPPs, and OSSE’s initiatives to expand educator preparation opportunities so that every District learner has consistent access to well-prepared educators.5`
    - p4 table (2 rows): `2024-25 Teachers in the District`, `Individuals in the 2023-24 Cohort of Candidates and Completers Available to Teach`, `2023-24 Completers from Traditional Programs`, `2023-24 Candidates and Completers from AROIs`, `Individuals in the 2023-24 Cohort of Candidates and Completers Employed in the District with Any Experience During 2024-25`
  - [`Educator Preparation Provider (EPP) Data Files`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Public%20Flat%20Files%20%28Oct%2028%29.xlsx) — **xlsx** — 25 tab(s)
    - tab **Overview** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Gender** (46 rows × 4 cols) — cols: `EPP Program`, `Gender`, `Number of EPP candidates & completers in this gender category`, `Percent of EPP candidates & completers in this gender category`
    - tab **Race_Ethnicity** (121 rows × 4 cols) — cols: `EPP Program`, `Race/Ethnicity`, `Number of EPP candidates & completers in this racial/ethnic category`, `Percent of EPP candidates & completers in this racial/ethnic category`
    - tab **Credentials** (121 rows × 6 cols) — cols: `EPP Program`, `Candidate Status`, `Credential Type`, `# of EPP's participants who attained credential after applying for EPP program`, `# of this EPP's participants`, `% of EPP's participants who attained credential after applying for EPP program`
    - tab **Cred. by Subject** (309 rows × 4 cols) — cols: `EPP Program`, `Credential Subject Area`, `Number of this EPP's completers & candidates with credential in this subject`, `% of City EPP completers & candidates w/ cred. in this subject from this EPP`
    - tab **Subject Areas of Study** (99 rows × 7 cols) — cols: `EPP Program`, `Subject Area of Study`, `Total candidates by subject area at EPP`, `Percent candidates in this subject area citywide that are at this EPP`, `Total completers by subject area at EPP`, `Percent completers in this subject area citywide that are at this EPP`, `Percent of candidates and completers in this subject area citywide`
    - tab **Subject Areas of Study City** (32 rows × 3 cols) — cols: `Subject Area of Study`, `Total candidates and completers in this this subject area citywide`, `Percent of candidates and completers in this subject area citywide`
    - tab **Praxis Exams by Test Area** (238 rows × 7 cols) — cols: `EPP Program`, `Testing Area`, `EPP total test takers`, `EPP total passed on first attempt`, `EPP first time pass rate`, `EPP total passed attempts`, `Total pass rate`
    - tab **Praxis Exams by Program Area** (120 rows × 7 cols) — cols: `EPP Program`, `Program Study Area`, `EPP total test takers`, `EPP total passed on first attempt`, `EPP first time pass rate`, `EPP total passed attempts`, `Total pass rate`
    - tab **First Year Employment** (18 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Number of this EPP's (candidates +) completers employed as first-year teachers`, `Number of this EPP's Completers`, `Number of this EPP's Candidates and Completers`, `Percent of this EPP's (candidates +) completers employed as first-year teachers`
    - tab **Any Experience Employment** (18 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Number of this EPP's (candidates +) completers employed as teachers (any exp)`, `Number of this EPP's Completers`, `Number of this EPP's Candidates and Completers`, `Percent of this EPP's (candidates +) completers employed as teachers (any exp)`
    - tab **First Year Employment by Sector** (35 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Sector`, `Number of this EPP's (candidates +) completers employed in this sector-1st yr`, `Number of this EPP's (candidates +) completers employed this school year-1st yr`, `Percent of this EPP's (candidates +) completers employed in this sector-1st yr`
    - tab **Any Exp. Employment by Sector** (35 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Sector`, `Number of this EPP's (candidates +) completers employed in this sector-any exp`, `Number of this EPP's (candidates +) completers employed this school year-any exp`, `Percent of this EPP's (candidates +) completers employed in this sector-any exp`
    - tab **Stud 1st YearTch Race Ethnicity** (121 rows × 4 cols) — cols: `EPP Program`, `Race/Ethnicity`, `Percent of students in DC LEAs, by Racial/Ethnic Group`, `Percent of this EPP's (candidates +) completers employed, by Racial/Ethnic Group`
    - tab **Stud Any Exp.Tch Race Ethnicity** (121 rows × 4 cols) — cols: `EPP Program`, `Race/Ethnicity`, `Percent of students in DC LEAs, by Racial/Ethnic Group`, `Percent of this EPP's (candidates +) completers employed, by Racial/Ethnic Group`
    - tab **Grades of Instruction 1stYr TCH** (61 rows × 4 cols) — cols: `EPP Program`, `Grade Ranges of Instruction`, `# of EPP students employed that taught in this range during field experience`, `# of EPP students employed that taught in this range while employed in a DC LEA`
    - tab **Grades of Instruction Exp. TCH** (61 rows × 4 cols) — cols: `EPP Program`, `Grade Ranges of Instruction`, `# of EPP students employed that taught in this range during field experience`, `# of EPP students employed that taught in this range while employed in a DC LEA`
    - tab **Stud First YearTch EL SWD** (31 rows × 4 cols) — cols: `EPP Program`, `Student Group`, `Percent of students in student group`, `Percent of teachers from this EPP who teach students in student group`
    - tab **Stud Any Exp.Tch EL SWD** (31 rows × 4 cols) — cols: `EPP Program`, `Student Group`, `Percent of students in student group`, `Percent of teachers from this EPP who teach students in student group`
    - tab **First Yr Effectiveness Ratings** (18 rows × 8 cols) — cols: `EPP Program`, `Program Type`, `EPP Program Completion Year`, `Effectiveness Rating Year`, `Employment Year`, `Number of Rated Teachers who were Effective - EPP`, `Number of Rated Teachers - EPP`, `Percent of Rated Teachers who were Effective - EPP`
    - tab **Exp Effectiveness Ratings** (18 rows × 8 cols) — cols: `EPP Program`, `Program Type`, `EPP Program Completion Year`, `Effectiveness Rating Year`, `Employment Year`, `Number of Rated Teachers who were Effective - EPP`, `Number of Rated Teachers - EPP`, `Percent of Rated Teachers who were Effective - EPP`
    - tab **Vacancies by Subject 1st YrTCHs** (169 rows × 6 cols) — cols: `School Year of Vacancy`, `School Year of Filled Position`, `EPP Program`, `Subject Area`, `Total Vacant FTEs by Subject`, `Total EPP FTEs Employed by First-Year Teachers by Subject`
    - tab **Vacancies by Sector 1st YrTCHs** (46 rows × 6 cols) — cols: `School Year of Vacancy`, `School Year of Filled Position`, `EPP Program`, `Sector`, `Total Vacant FTEs by Sector`, `Total First-Year Teacher FTEs from EPPs by Sector`
    - tab **Vacancies by Sbjct Any Exp.TCHs** (169 rows × 6 cols) — cols: `School Year of Vacancy`, `School Year of Filled Position`, `EPP Program`, `Subject Area`, `Total Vacant FTEs by Subject`, `Total Teacher FTEs from EPPs by Subject`
    - tab **Vacancies by Sector AnyExp.TCHs** (46 rows × 6 cols) — cols: `School Year of Vacancy`, `School Year of Filled Position`, `EPP Program`, `Sector`, `Total Vacant FTEs by Sector`, `Total Teacher FTEs from EPPs by Sector`
  - [`Educator Preparation Provider (EPP) Data Files`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/EPP%20Public%20Flat%20Files%20Spring%202025%20%281%29.xlsx) — **xlsx** — 28 tab(s)
    - tab **Overview** (21 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Gender** (43 rows × 4 cols) — cols: `EPP Program`, `Gender`, `Number of EPP candidates & completers in this gender category`, `Percent of EPP candidates & completers in this gender category`
    - tab **Race_Ethnicity** (113 rows × 4 cols) — cols: `EPP Program`, `Race/Ethnicity`, `Number of EPP candidates & completers in this racial/ethnic category`, `Percent of EPP candidates & completers in this racial/ethnic category`
    - tab **Credentials** (141 rows × 6 cols) — cols: `EPP Program`, `Candidate Status`, `Credential Type`, `# of EPP's participants who attained credential after applying for EPP pgm`, `# of this EPP's participants`, `% of EPP's participants who attained credential after applying for EPP pgm`
    - tab **Cred. by Subject** (309 rows × 4 cols) — cols: `EPP Program`, `Credential Subject Area`, `Number of this EPP's completers & candidates with credential in this subject`, `% of City EPP completers & candidates w/ cred. in this subject from this EPP`
    - tab **Subject Areas of Study** (91 rows × 7 cols) — cols: `EPP Program`, `Subject Area of Study`, `Total candidates by subject area at EPP`, `Percent candidates in this subject area citywide that are at this EPP`, `Total completers by subject area at EPP`, `Percent completers in this subject area citywide that are at this EPP`, `Percent of candidates and completers in this subject area citywide`
    - tab **Subject Areas of Study City** (33 rows × 3 cols) — cols: `Subject Area of Study`, `Total candidates and completers in this subject area citywide`, `Percent of candidates and completers in this subject area citywide`
    - tab **Praxis Area and Overall** (215 rows × 7 cols) — cols: `EPP Program`, `Testing Area`, `EPP total test takers`, `EPP total passed on first attempt`, `EPP first time pass rate`, `EPP total passed attempts`, `EPP pass rate`
    - tab **Praxis Prog EPP** (112 rows × 7 cols) — cols: `EPP Program`, `Program Study Area`, `EPP total test takers`, `EPP total passed on first attempt`, `EPP first time pass rate`, `EPP total passed attempts`, `EPP pass rate`
    - tab **First Year Employment** (17 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Number of this EPP's (candidates +) completers employed as first-year teachers`, `Number of this EPP's Completers`, `Number of this EPP's Candidates and Completers`, `Percent of this EPP's (candidates +) completers employed as first-year teachers`
    - tab **Any Experience Employment** (17 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Number of this EPP's (candidates +) completers employed as teachers (any exp)`, `Number of this EPP's Completers`, `Number of this EPP's Candidates and Completers`, `Percent of this EPP's (candidates +) completers employed as teachers (any exp)`
    - tab **First Year Employment by Sector** (33 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Sector`, `Number of this EPP's (candidates +) completers employed in this sector-1st yr`, `Number of this EPP's (candidates +) completers employed this school year-1st yr`, `Percent of this EPP's (candidates +) completers employed in this sector-1st yr`
    - tab **Any Exp. Employment by Sector** (33 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Sector`, `Number of this EPP's (candidates +) completers employed in this sector-any exp`, `Number of this EPP's (candidates +) completers employed this school year-any exp`, `Percent of this EPP's (candidates +) completers employed in this sector-any exp`
    - tab **Stud 1st YearTch Race Ethnicity** (113 rows × 4 cols) — cols: `EPP Program`, `Race/Ethnicity`, `Percent of students in DC LEAs, by Racial/Ethnic Group`, `Percent of this EPP's (candidates +) completers employed, by Racial/Ethnic Group`
    - tab **Stud Any Exp.Tch Race Ethnicity** (113 rows × 4 cols) — cols: `EPP Program`, `Race/Ethnicity`, `Percent of students in DC LEAs, by Racial/Ethnic Group`, `Percent of this EPP's (candidates +) completers employed, by Racial/Ethnic Group`
    - tab **Grades of Instruction 1stYr TCH** (57 rows × 4 cols) — cols: `EPP Program`, `Grade Ranges of Instruction`, `# of EPP students employed that taught in this range during field experience`, `# of EPP students employed that taught in this range while employed in a DC LEA`
    - tab **Grades of Instruction Exp. TCH** (57 rows × 4 cols) — cols: `EPP Program`, `Grade Ranges of Instruction`, `# of EPP students employed that taught in this range during field experience`, `# of EPP students employed that taught in this range while employed in a DC LEA`
    - tab **Stud First YearTch EL SWD** (29 rows × 4 cols) — cols: `EPP Program`, `Student Group`, `Percent of students in student group`, `Percent of teachers from this EPP who teach students in student group`
    - tab **Stud Any Exp.Tch EL SWD** (29 rows × 4 cols) — cols: `EPP Program`, `Student Group`, `Percent of students in student group`, `Percent of teachers from this EPP who teach students in student group`
    - tab **Sub Study Cert Emp** (101 rows × 8 cols) — cols: `EPP Program`, `Total Number of Candidates and Completers in 2023-24`, `Total Number of Candidates and Completers Who Were Teaching in 2024-25`, `Subject`, `Number of Candidates and Completers in this Subject of Training in 2023-24`, `2023-24 DC EPP Candidates and Completers Certified in this Subject`, `2023-24 DC EPP Candidates and Completers Teaching this Subject in SY 2024-25`, `Number of Candidates and Completers Who Were Teaching in the Subject of Training`
    - tab **First Year Emp. and Cert.** (17 rows × 10 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Number of this EPP's candidates and completers employed as first-year teachers`, `Number of this EPP's teachers certified`, `Number of this EPP's Completers`, `Number of this EPP's Candidates and Completers`, `Percent of this EPP's candidates and completers employed as first-year teachers`, `Percent of this EPP's teachers certified`
    - tab **Any Experience Emp. and Cert.** (17 rows × 10 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Number of this EPP's candidates and completers employed as teachers (any exp)`, `Number of this EPP's teachers certified`, `Number of this EPP's Completers`, `Number of this EPP's Candidates and Completers`, `Percent of this EPP's candidates and completers employed as teachers (any exp)`, `Percent of this EPP's teachers certified`
    - tab **First Yr Effectiveness Ratings** (18 rows × 8 cols) — cols: `EPP Program`, `Program Type`, `EPP Program Completion Year`, `Effectiveness Rating Year`, `Employment Year`, `Number of Rated Teachers who were Effective - EPP`, `Number of Rated Teachers - EPP`, `Percent of Rated Teachers who were Effective - EPP`
    - tab **Exp Effectiveness Ratings** (18 rows × 8 cols) — cols: `EPP Program`, `Program Type`, `EPP Program Completion Year`, `Effectiveness Rating Year`, `Employment Year`, `Number of Rated Teachers who were Effective - EPP`, `Number of Rated Teachers - EPP`, `Percent of Rated Teachers who were Effective - EPP`
    - tab **Vacancies by Subject FYTCHs** (169 rows × 6 cols) — cols: `School Year of Vacancy`, `School Year of Filled Position`, `EPP Program`, `Subject Area`, `Total Vacant FTEs by Subject`, `Total EPP FTEs Employed by Subject`
    - tab **Vacancies by Sector FYTCHs** (43 rows × 6 cols) — cols: `School Year of Vacancy`, `School Year of Filled Position`, `EPP Program`, `Sector`, `Total Vacant FTEs by Sector`, `Total EPP FTEs Employed by Sector`
    - tab **Vacancies by Subject Exp.TCHs** (169 rows × 6 cols) — cols: `School Year of Vacancy`, `School Year of Filled Position`, `EPP Program`, `Subject Area`, `Total Vacant FTEs by Subject`, `Total EPP FTEs Employed by Subject`
    - tab **Vacancies by Sector Exp.TCHs** (43 rows × 6 cols) — cols: `School Year of Vacancy`, `School Year of Filled Position`, `EPP Program`, `Sector`, `Total Vacant FTEs by Sector`, `Total EPP FTEs Employed by Sector`
  - [`Educator Preparation Provider (EPP) Data Files`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/EPP%20Public%20Flat%20File%20Spring%202026.xlsx) — **xlsx** — 26 tab(s)
    - tab **Overview** (19 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Gender** (43 rows × 4 cols) — cols: `EPP Program`, `Gender`, `Number of EPP candidates & completers in this gender category`, `Percent of EPP candidates & completers in this gender category`
    - tab **Race_Ethnicity** (113 rows × 4 cols) — cols: `EPP Program`, `Race/Ethnicity`, `Number of EPP candidates & completers in this racial/ethnic category`, `Percent of EPP candidates & completers in this racial/ethnic category`
    - tab **Credentials** (141 rows × 6 cols) — cols: `EPP Program`, `Candidate Status`, `Credential Type`, `# of EPP's participants who attained credential after applying for EPP pgm`, `# of this EPP's participants`, `% of EPP's participants who attained credential after applying for EPP pgm`
    - tab **Cred. by Subject** (323 rows × 4 cols) — cols: `EPP Program`, `Credential Subject Area`, `Number of this EPP's completers & candidates with credential in this subject`, `% of City EPP completers & candidates w/ cred. in this subject from this EPP`
    - tab **Subject Areas of Study** (87 rows × 7 cols) — cols: `EPP Program`, `Subject Area of Study`, `Total candidates by subject area at EPP`, `Percent candidates in this subject area citywide that are at this EPP`, `Total completers by subject area at EPP`, `Percent completers in this subject area citywide that are at this EPP`, `Percent of candidates and completers in this subject area citywide`
    - tab **Subject Areas of Study City** (33 rows × 3 cols) — cols: `Subject Area of Study`, `Total candidates and completers in this subject area citywide`, `Percent of candidates and completers in this subject area citywide`
    - tab **Praxis Area and Overall** (214 rows × 7 cols) — cols: `EPP Program`, `Testing Area`, `EPP total test takers`, `EPP total passed on first attempt`, `EPP first time pass rate`, `EPP total passed attempts`, `EPP pass rate`
    - tab **Praxis Prog EPP** (111 rows × 7 cols) — cols: `EPP Program`, `Program Study Area`, `EPP total test takers`, `EPP total passed on first attempt`, `EPP first time pass rate`, `EPP total passed attempts`, `EPP pass rate`
    - tab **First Year Employment** (17 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Number of this EPP's (candidates +) completers employed as first-year teachers`, `Number of this EPP's Completers`, `Number of this EPP's Candidates and Completers`, `Percent of this EPP's (candidates +) completers employed as first-year teachers`
    - tab **Any Experience Employment** (17 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Number of this EPP's (candidates +) completers employed as teachers (any exp)`, `Number of this EPP's Completers`, `Number of this EPP's Candidates and Completers`, `Percent of this EPP's (candidates +) completers employed as teachers (any exp)`
    - tab **First Year Employment by Sector** (36 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Sector`, `Number of this EPP's (candidates +) completers employed in this sector-1st yr`, `Number of this EPP's (candidates +) completers employed this school year-1st yr`, `Percent of this EPP's (candidates +) completers employed in this sector-1st yr`
    - tab **Any Exp. Employment by Sector** (36 rows × 8 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Sector`, `Number of this EPP's (candidates +) completers employed in this sector-any exp`, `Number of this EPP's (candidates +) completers employed this school year-any exp`, `Percent of this EPP's (candidates +) completers employed in this sector-any exp`
    - tab **Stud 1st YearTch Race Ethnicity** (113 rows × 4 cols) — cols: `EPP Program`, `Race/Ethnicity`, `Percent of students in DC LEAs, by Racial/Ethnic Group`, `Percent of this EPP's (candidates +) completers employed, by Racial/Ethnic Group`
    - tab **Stud Any Exp.Tch Race Ethnicity** (113 rows × 4 cols) — cols: `EPP Program`, `Race/Ethnicity`, `Percent of students in DC LEAs, by Racial/Ethnic Group`, `Percent of this EPP's (candidates +) completers employed, by Racial/Ethnic Group`
    - tab **Grades of Instruction 1stYr TCH** (57 rows × 4 cols) — cols: `EPP Program`, `Grade Ranges of Instruction`, `# of EPP students employed that taught in this range during field experience`, `# of EPP students employed that taught in this range while employed in a DC LEA`
    - tab **Grades of Instruction Exp. TCH** (57 rows × 4 cols) — cols: `EPP Program`, `Grade Ranges of Instruction`, `# of EPP students employed that taught in this range during field experience`, `# of EPP students employed that taught in this range while employed in a DC LEA`
    - tab **Stud First YearTch EL SWD** (29 rows × 4 cols) — cols: `EPP Program`, `Student Group`, `Percent of students in student group`, `Percent of teachers from this EPP who teach students in student group`
    - tab **Stud Any Exp.Tch EL SWD** (29 rows × 4 cols) — cols: `EPP Program`, `Student Group`, `Percent of students in student group`, `Percent of teachers from this EPP who teach students in student group`
    - tab **EPP Rundown** (95 rows × 8 cols) — cols: `EPP Program`, `Total Number of Candidates and Completers in 2024-25`, `Total Number of Candidates and Completers Who Were Teaching in 2025-26`, `Subject`, `Number of Candidates and Completers in this Subject of Training in 2024-25`, `2024-25 DC EPP Candidates and Completers Certified in this Subject`, `2024-25 DC EPP Candidates and Completers Teaching this Subject in SY 2025-26`, `Number of Candidates and Completers Who Were Teaching in the Subject of Training`
    - tab **First Year Emp. and Cert.** (17 rows × 10 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Number of this EPP's candidates and completers employed as first-year teachers`, `Number of this EPP's teachers certified`, `Number of this EPP's Completers`, `Number of this EPP's Candidates and Completers`, `Percent of this EPP's candidates and completers employed as first-year teachers`, `Percent of this EPP's teachers certified`
    - tab **Any Experience Emp. and Cert.** (17 rows × 10 cols) — cols: `Year of Employment`, `Year enrolled in or completion of EPP Program`, `EPP Program`, `Program Type`, `Number of this EPP's candidates and completers employed as teachers (any exp)`, `Number of this EPP's teachers certified`, `Number of this EPP's Completers`, `Number of this EPP's Candidates and Completers`, `Percent of this EPP's candidates and completers employed as teachers (any exp)`, `Percent of this EPP's teachers certified`
    - tab **First Yr Effectiveness Ratings** (17 rows × 8 cols) — cols: `EPP Program`, `Program Type`, `EPP Program Completion Year`, `Effectiveness Rating Year`, `Employment Year`, `Number of Rated Teachers who were Effective - EPP`, `Number of Rated Teachers - EPP`, `Percent of Rated Teachers who were Effective - EPP`
    - tab **Exp Effectiveness Ratings** (17 rows × 8 cols) — cols: `EPP Program`, `Program Type`, `EPP Program Completion Year`, `Effectiveness Rating Year`, `Employment Year`, `Number of Rated Teachers who were Effective - EPP`, `Number of Rated Teachers - EPP`, `Percent of Rated Teachers who were Effective - EPP`
    - tab **Clinical Exp Location** (17 rows × 12 cols) — cols: `EPP Program`, `Number of Candidates with Clinical Experience`, `Number of Completers with Clinical Experience`, `Total Number of Participants with Clinical Experience`, `Number of Participants with DCPS Clinical Experience`, `Number of Participants with Charter School Clinical Experience`, `Number of Participants with Private School Clinical Experience`, `Number of Participants with Out-of-State Clinical Experience`, `Percent of All Participants with DCPS Clinical Experience`, `Percent of All Participants with Charter School Clinical Experience`, `Percent of All Participants with Private School Clinical Experience`, `Percent of All Participants with Out-of-State Clinical Experience`
    - tab **Clinical Exp Location - by Ward** (110 rows × 11 cols) — cols: `Ward`, `EPP Program`, `Number of Candidates with Clinical Experience in this Ward`, `Number of Completers with Clinical Experience in this Ward`, `Total Number of Participants with Clinical Experience`, `Number of Participants with DCPS Clinical Experience in this Ward`, `Number of Participants with Charter School Clinical Experience in this Ward`, `Number of Participants with Private School Clinical Experience in this Ward`, `Percent of All Participants with DCPS Clinical Experience in this Ward`, `Percent of All Participants with Charter School Clinical Experience in this Ward`, `Percent of All Participants with Private School Clinical Experience in this Ward`

### [Pre-Kindergarten Reports ('State of Pre-K in DC')](https://osse.dc.gov/publication/pre-kindergarten-reports-state-pre-k-district-columbia)

_topics: early-childhood, enrollment_

- **Format:** PDF
- **Updated:** Annual
- **Years on page:** 2012 through 2024
- **Notes:** Narrative + summary stats on pre-K access/quality, not a granular by-school dataset.
- **Data files (profiled):**
  - [`OSSE Annual Pre-K Report 2024`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202024.pdf) — **pdf** — 24 pages, **extractable tables** on ~16 page(s)
    - p7 table (7 rows): `Setting`, `Universal`, `Delivery System Overview`, `Funding Source`, `Number of`
    - p7 table (2 rows): `Delivery System`
    - p8 table (6 rows): `Student`, `Per Pupil Allocation`
  - [`OSSE Annual Pre-K Report 2023`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202023.pdf) — **pdf** — 24 pages, **extractable tables** on ~16 page(s)
    - p6 table (7 rows): `Setting`, `Universal`, `Delivery System Overview`, `Funding Source`, `Number of`
    - p6 table (2 rows): `Delivery System`
    - p7 table (6 rows): `Student`, `Per Pupil Allocation`
  - [`OSSE Annual Pre-K Report 2022`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202022.pdf) — **pdf** — 32 pages, **extractable tables** on ~21 page(s)
    - p1 table (13 rows): `I am pleased to submit to the Council of the District of Columbia the enclosed report titled “Fiscal`
    - p7 table (8 rows): `Setting`, `Universal Pre-K Program`, `Delivery System Overview`, `Funding Source`, `Number of`
    - p7 table (3 rows): `Universal`
  - [`OSSE Annual Pre-K Report 2021`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/FISCAL%20YEAR%202021%20Pre%20K%20Report%20MMB.pdf) — **pdf** — 21 pages, **extractable tables** on ~5 page(s)
    - p9 table (2 rows): `Setting`, `Universal Pre-K Program`, `Delivery System Overview`, `Funding Source`
    - p9 table (2 rows): `Universal Pre-K`
    - p14 table (8 rows): `Age`, `Census Data`, `Number of Children Served in FY21`, `Number of Children Served in FY20`, `Percent`, `Percent Change in Number of Children Served from Prior Year`
  - [`OSSE Annual Pre-K Report 2020`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202020.pdf) — **pdf** — 15 pages, **extractable tables** on ~3 page(s)
    - p8 table (7 rows): `Setting`, `Universal`, `Funding Source`
    - p13 table (17 rows): `6088`, `6797`, `1015`
    - p14 table (10 rows): `Ward`, `PKEEP`, `DCPS`, `PCS`, `Total`
  - [`OSSE Annual Pre-K Report 2019`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202019.pdf) — **pdf** — 37 pages, **extractable tables** on ~20 page(s)
    - p8 table (8 rows): `Setting`, `Universal Pre-K Program`, `Delivery System Overview`, `Funding Source`, `Number of`
    - p8 table (3 rows): `Universal`
    - p8 table (2 rows): 
  - [`OSSE Annual Pre-K Report 2018`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202018.pdf) — **pdf** — 40 pages (narrative; no extractable tables)
  - [`OSSE Annual Pre-K Report 2017`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202017.pdf) — **pdf** — 39 pages, **extractable tables** on ~37 page(s)
    - p3 table (3 rows): 
    - p4 table (3 rows): `DISTRICT OF COLUMBIA PUBLIC SCHOOLS`, `PUBLIC CHARTER SCHOOLS`, `COMMUNITY-BASED ORGANIZATIONS`
    - p4 table (3 rows): 
  - [`OSSE Annual Pre-K Report 2016`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202016%20Feb%202%201017_0.pdf) — **pdf** — 33 pages, **extractable tables** on ~19 page(s)
    - p5 table (2 rows): `TOTAL NUMBER OF CLASSROOMS OBSERVED`
    - p6 table (2 rows): `Emotional Support (Threshold of 5)`
    - p6 table (2 rows): `Classroom Organization (Threshold of 5)`
  - [`OSSE Annual Pre-K Report 2015`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202015.pdf) — **pdf** — 31 pages, **extractable tables** on ~16 page(s)
    - p6 table (10 rows): `5.77`
    - p7 table (9 rows): 
    - p8 table (11 rows): `5.79`
  - [`OSSE Annual Pre-K Report 2014`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202014.pdf) — **pdf** — 31 pages, **extractable tables** on ~21 page(s)
    - p6 table (8 rows): `Assessing Pre-K Classroom Quality through the CLASS Pre-K ™ Evaluation Tool`
    - p7 table (9 rows): `5.6`
    - p7 table (4 rows): `Emotional Support`, `Classroom Organization`, `Instructional Support`
  - [`OSSE Annual Pre-K Report 2013`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202013.pdf) — **pdf** — 26 pages, **extractable tables** on ~26 page(s)
    - p1 table (5 rows): 
    - p2 table (2 rows): `2013 Annual Report`, `OSSE`
    - p3 table (2 rows): `2013 Annual Report`, `OSSE`
  - [`OSSE Annual Pre-K Report 2012`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Annual%20Pre-K%20Report%202012.pdf) — **pdf** — 23 pages, **extractable tables** on ~16 page(s)
    - p5 table (8 rows): `FY12 PREK UTILIZATION BASED ON 2011 CENSUS ESTIMATE`
    - p6 table (12 rows): `Reason child not enrolled in UPSFF Funded Pre-­‐K`, `Number of`, `Percentage of Respondents`
    - p7 table (2 rows): `DCPS Head Start Classrooms across Wards`, `Number of Title I DCPS Schools`, `Pre-­‐K Capacity in Title I DCPS Schools`, `Pre-­‐K Enrollment in Title I DCPS Schools`, `Capacity Utilization`

### [Early Learning Reports (child care, subsidy, Pay Equity Fund)](https://osse.dc.gov/page/early-learning-reports)

_topics: early-childhood, finance_

- **Format:** PDF + linked data
- **Updated:** Mixed — quarterly subsidy/educator reports; cost model every ~3 years
- **Years on page:** Cost model 2016/2018/2021/2023/2024; Pay Equity Fund FY25–FY26
- **Notes:** Best entry for early childhood beyond pre-K enrollment.

### [DC ESSA State Plan](https://osse.dc.gov/essa)

_topics: accountability, methodology_

- **Format:** Web page linking PDFs
- **Updated:** Updated on amendment
- **Years on page:** 2017 original; 2022 amendment (approved June 2023); 2026-27 waiver pending
- **Notes:** Defines the STAR framework, the 16 measures, weights, and assessment requirements.

### [SLED — Statewide Longitudinal Education Data (OSSE Reports)](https://sled.osse.dc.gov/info/OSSE-Reports/)

🔒 login required · _topics: enrollment, assessment, graduation, landing_

- **Format:** Public PDF/Excel/Tableau links + login-gated Qlik Sense reports
- **Updated:** Varies; most annual
- **Years on page:** Includes historical enrollment-audit Excel SY2001–2009
- **Notes:** Two-tier: public direct links vs. credentialed access (SLED login + user agreement) for the main Reports portal.

## DCPS — DC Public Schools

_The traditional public school district. Publishes its own (DCPS-only) enrollment, outcomes, budgets, surveys, profiles, and facilities data — much of it a subset of OSSE's._

### [DCPS School Data (data hub landing)](https://dcps.dc.gov/service/school-data)

_topics: landing_

- **Format:** Web page (link directory)
- **Updated:** As underlying resources change
- **Years on page:** n/a (directory)
- **Notes:** The intended front door for DCPS data, but many items live one or two clicks deeper.

### [DCPS at a Glance: Enrollment](https://dcps.dc.gov/node/966292)

_topics: enrollment, demographics_

- **Format:** Web page, static HTML tables
- **Updated:** Annual, after fall audited-enrollment release
- **Years on page:** SY17-18 through SY25-26 shown inline
- **Notes:** District TOTALS only (not school-by-school). For school-level use the downloadable dataset or OSSE.

### [DCPS at a Glance: Attendance](https://dcps.dc.gov/node/1185940)

_topics: attendance_

- **Format:** PDF reports (one per year)
- **Updated:** Annual
- **Years on page:** SY11-12 through SY24-25 (14 reports)
- **Notes:** District-level aggregate, filed per DC Code 38-203(i). Granular school-level attendance is better via OSSE.

### [DCPS Downloadable Data Sets (index)](https://dcps.dc.gov/service/dcps-downloadable-data-sets)

_topics: enrollment, assessment, graduation, attendance_

- **Format:** Web page indexing Excel (.xlsx) files
- **Updated:** Varies by dataset
- **Years on page:** Varies by dataset
- **Notes:** Index of school-and-subgroup-level files: Enrollment, Graduation, DC CAS, SAT, AP, PARCC, Attendance. Each metric is a separate page of yearly Excel files rather than one tidy multi-year table.
- **Data files (profiled):**
  - [`DCPS SY25-26 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY25-26%20Enrollment%20Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY 2025-26** (133 rows × 3 cols) — cols: `SCHOOL CODE`, `SCHOOL NAME`, `By Grade`
  - [`DCPS SY24-25 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY24-25%20Enrollment%20Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY 2024-25** (133 rows × 3 cols) — cols: `SCHOOL CODE`, `SCHOOL NAME`, `By Grade`
  - [`DCPS SY23-24 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY23-24%20Enrollment%20Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY 2023-24** (133 rows × 3 cols) — cols: `SCHOOL CODE`, `SCHOOL NAME`, `By Grade`
  - [`DCPS SY22-23 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY22-23%20Enrollment%20Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY2022-23** (132 rows × 3 cols) — cols: `SCHOOL CODE`, `SCHOOL NAME`, `By Grade`
  - [`DCPS SY21-22 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-SY21-22-Enrollment-Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY2021-22** (132 rows × 3 cols) — cols: `SCHOOL CODE`, `SCHOOL NAME`, `By Grade`
  - [`DCPS SY20-21 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-SY20-21-Enrollment-Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **Sheet1** (135 rows × 3 cols) — cols: `SCHOOL CODE`, `SCHOOL NAME`, `By Grade`
  - [`DCPS SY19-20 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-SY19-20-Enrollment-Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **Sheet1** (135 rows × 3 cols) — cols: `SCHOOL CODE`, `SCHOOL NAME`, `By Grade`
  - [`DCPS SY18-19 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY18-19%20Enrollment%20Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **Sheet1** (134 rows × 3 cols) — cols: `SCHOOL CODE`, `SCHOOL NAME`, `By Grade`
  - [`DCPS SY17-18 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY17-18%20Enrollment%20Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **Sheet1** (136 rows × 3 cols) — cols: `SCHOOL CODE`, `SCHOOL NAME`, `By Grade`
  - [`DCPS SY16-17 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY16-17%20Enrollment%20Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **Sheet1** (134 rows × 1 cols) — cols: `DATA AS OF: 10/5/2016`
  - [`DCPS SY15-16 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY15-16%20Enrollment%20Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY15-16 Enrollment Audit** (132 rows × 1 cols) — cols: `DATA AS OF: 10/5/2015`
  - [`DCPS SY14-15 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY14-15%20Enrollment%20Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY13-14 Enrollment Audit** (131 rows × 1 cols) — cols: `DATA AS OF: 10/6/2014`
  - [`DCPS SY13-14 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY13-14%20Enrollment%20Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY13-14 Enrollment Audit** (131 rows × 1 cols) — cols: `DATA AS OF: 10/5/2013`
  - [`DCPS SY12-13 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY12-13%20Enrollment%20Audit.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY12-13 Enrollment Audit** (142 rows × 1 cols) — cols: `DATA AS OF: 10/5/2012`
  - [`DCPS SY11-12 Enrollment Audit`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY11-12%20Enrollment%20Audit.xlsx) — **xlsx** — 2 tab(s)
    - tab **SY11-12 Enrollment Audit** (146 rows × 1 cols) — cols: `DATA AS OF: 10/5/2011`
    - tab **Sheet1** (126 rows × 2 cols) — cols: `462`, `462`
  - [`DCPS 2025 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202025%20Graduation%20Data%20Overall%20Subgroup.xlsx) — **xlsx** — 1 tab(s)
    - tab **2025** (231 rows × 1 cols) — cols: `DATA AS OF: October 2025`
  - [`DCPS 2024 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2024%20ACGR%20Overall%20and%20Subgroup_for%20DCPS%20website.xlsx) — **xlsx** — 1 tab(s)
    - tab **2024_redact** (224 rows × 1 cols) — cols: `DATA AS OF: October 2024`
  - [`DCPS 2023 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2023%20ACGR%20Overall%20and%20Subgroup_for%20DCPS%20website.xlsx) — **xlsx** — 1 tab(s)
    - tab **2023_redact** (227 rows × 1 cols) — cols: `DATA AS OF: 11/30/2023`
  - [`DCPS 2022 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202022%20Graduation%20Data%20Overall%20Subgroup.xlsx) — **xlsx** — 1 tab(s)
    - tab **Class of 2022** (231 rows × 1 cols) — cols: `DATA AS OF: 11/09/2022`
  - [`DCPS 2021 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-2021-Graduation-Data-Overall-Subgroup.xlsx) — **xlsx** — 1 tab(s)
    - tab **Class of 2021** (231 rows × 1 cols) — cols: `DATA AS OF: 11/09/2021`
  - [`DCPS 2020 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-2020-Graduation-Data-Overall-Subgroup.xlsx) — **xlsx** — 1 tab(s)
    - tab **Class of 2020** (235 rows × 1 cols) — cols: `DATA AS OF: 10/30/2020`
  - [`DCPS 2019 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-2019-Graduation-Data-Overall-Subgroup.xlsx) — **xlsx** — 1 tab(s)
    - tab **Class of 2019** (207 rows × 1 cols) — cols: `DATA AS OF: 11/6/2019`
  - [`DCPS 2018 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202018%20Graduation%20Data%20Overall%20Subgroup.xlsx) — **xlsx** — 1 tab(s)
    - tab **Class of 2018** (201 rows × 1 cols) — cols: `DATA AS OF: 11/9/2018`
  - [`DCPS 2017 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202017%20Graduation%20Data%20Overall%20Subgroup.xlsx) — **xlsx** — 1 tab(s)
    - tab **Class of 2017** (177 rows × 1 cols) — cols: `DATA AS OF: 11/3/2017`
  - [`DCPS 2016 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202016%20Graduation%20Data%20Overall%20Subgroup.xlsx) — **xlsx** — 1 tab(s)
    - tab **Class of 2016** (246 rows × 1 cols) — cols: `DATA AS OF: 10/20/2016`
  - [`DCPS 2015 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202015%20Graduation%20Data%20Overall%20Subgroup.xlsx) — **xlsx** — 1 tab(s)
    - tab **Class of 2015** (204 rows × 1 cols) — cols: `DATA AS OF: 1/26/2016`
  - [`DCPS 2014 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202014%20Graduation%20Data%20Overall%20Subgroup.xlsx) — **xlsx** — 1 tab(s)
    - tab **Class of 2014** (210 rows × 1 cols) — cols: `Data as of: 3/8/2016`
  - [`DCPS 2013 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202013%20Graduation%20Data%20Overall%20Subgroup_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Sheet1** (217 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
  - [`DCPS 2012 Graduation Data Overall Subgroup`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202012%20Graduation%20Data%20Overall%20Subgroup_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Sheet1** (225 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
  - [`DC CAS Scores - School Year 2013-2014`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2013-2014.xlsx) — **xlsx** — 13 tab(s)
    - tab **All Students** (458 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **American Indian Students** (35 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **Asian Students** (156 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **Black Students** (458 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **Hispanic Students** (359 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **Multiracial Students** (162 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **Nat Hawaiian-Pac Islnd Students** (50 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **White Students** (168 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **Special Education Students** (444 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **ELL Students** (260 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **Free-Red Price Meal Students** (458 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **Male Students** (455 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
    - tab **Female Students** (456 rows × 1 cols) — cols: `DATA AS OF: 8/5/2014`
  - [`DC CAS Scores - School Year 2012-2013`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2012-2013.xlsx) — **xlsx** — 13 tab(s)
    - tab **All Students** (518 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **American Indian Students** (33 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **Asian Students** (170 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **Black Students** (517 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **Hispanic Students** (370 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **Multiracial Students** (154 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **Nat Hawaiian-Pac Islnd Students** (40 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **White Students** (181 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **Special Education Students** (510 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **ELL Students** (292 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **Free-Red Price Meal Students** (507 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **Male Students** (512 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
    - tab **Female Students** (510 rows × 1 cols) — cols: `DATA AS OF: 11/10/2014`
  - [`DC CAS Scores - School Year 2011-2012`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2011-2012.xlsx) — **xlsx** — 13 tab(s)
    - tab **All Students** (514 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **American Indian Students** (43 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Asian Students** (167 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Black Students** (514 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Hispanic Students** (363 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Multiracial Students** (158 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Nat Hawaiian-Pac Islnd Students** (53 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **White Students** (156 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Special Education Students** (501 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **ELL Students** (289 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Free-Red Price Meal Students** (512 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Male Students** (509 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Female Students** (510 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
  - [`DC CAS Scores - School Year 2010-2011`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2010-2011.xlsx) — **xlsx** — 11 tab(s)
    - tab **All Students** (542 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **American Indian Students** (39 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Asian Students** (173 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Black Students** (542 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Hispanic Students** (350 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **White Students** (158 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Special Education Students** (534 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **ELL Students** (293 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Free-Red Price Meal Students** (538 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Male Students** (536 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Female Students** (536 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
  - [`DC CAS Scores - School Year 2009-2010`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2009-2010.xlsx) — **xlsx** — 10 tab(s)
    - tab **All Students** (552 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Asian Students** (164 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Black Students** (552 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Hispanic Students** (329 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **White Students** (141 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Special Education Students** (530 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **ELL Students** (291 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Free-Red Price Meal Students** (548 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Male Students** (548 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Female Students** (543 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
  - [`DC CAS Scores - School Year 2008-2009`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2008-2009.xlsx) — **xlsx** — 10 tab(s)
    - tab **All Students** (566 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Asian Students** (159 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Black Students** (566 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Hispanic Students** (341 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **White Students** (144 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Special Education Students** (546 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **ELL Students** (336 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Free-Red Price Meal Students** (557 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Male Students** (565 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Female Students** (559 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
  - [`DC CAS Scores - School Year 2007-2009`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2007-2008.xlsx) — **xlsx** — 10 tab(s)
    - tab **All Students** (675 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Asian Students** (176 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Black Students** (675 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Hispanic Students** (356 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **White Students** (162 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Special Education Students** (648 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **ELL Students** (315 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Free-Red Price Meal Students** (665 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Male Students** (671 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Female Students** (660 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
  - [`DC CAS Scores - School Year 2006-2007`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2006-2007.xlsx) — **xlsx** — 10 tab(s)
    - tab **All Students** (697 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Asian Students** (180 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Black Students** (696 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Hispanic Students** (375 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **White Students** (154 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Special Education Students** (675 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **ELL Students** (330 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Free-Red Price Meal Students** (684 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Male Students** (691 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
    - tab **Female Students** (684 rows × 1 cols) — cols: `DATA AS OF: 4/7/2014`
  - [`School Year 2024-2025 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202024-2025%20SAT%20Scores.xlsx) — **xlsx** — 2 tab(s)
    - tab **SY2024-25 By School** (28 rows × 1 cols) — cols: `DATA AS OF: 10/20/2025`
    - tab **SY2024-25 By Subgroup** (18 rows × 1 cols) — cols: `DATA AS OF: 10/20/2025`
  - [`School Year 2023-2024 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202023-2024%20SAT%20Scores_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **SY2023-24 By School** (27 rows × 1 cols) — cols: `DATA AS OF: 10/02/2024`
    - tab **SY2023-24 By Subgroup** (18 rows × 1 cols) — cols: `DATA AS OF: 10/02/2024`
  - [`School Year 2022-2023 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202022-2023%20SAT%20Scores.xlsx) — **xlsx** — 2 tab(s)
    - tab **SY2022-23 By School** (27 rows × 1 cols) — cols: `DATA AS OF: 09/25/2023`
    - tab **SY2022-23 By Subgroup** (18 rows × 1 cols) — cols: `DATA AS OF: 09/25/2023`
  - [`School Year 2021-2022 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202021-2022%20SAT%20Scores.xlsx) — **xlsx** — 2 tab(s)
    - tab **SY2021-22 By School** (27 rows × 1 cols) — cols: `DATA AS OF: 11/10/2022`
    - tab **SY2021-22 By Subgroup** (18 rows × 1 cols) — cols: `DATA AS OF: 11/10/2022`
  - [`School Year 2020-2021 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/SchoolYear2020-2021-SATScores.xlsx) — **xlsx** — 2 tab(s)
    - tab **SY2020-21 By School** (28 rows × 1 cols) — cols: `DATA AS OF: 11/23/2021`
    - tab **SY2020-21 By Subgroup** (18 rows × 1 cols) — cols: `DATA AS OF: 11/23/2021`
  - [`School Year 2019-2020 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School-Year-2019-2020-SAT-Scores.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY2019-20** (31 rows × 1 cols) — cols: `DATA AS OF: 01/15/2021`
  - [`School Year 2018-2019 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202018-2019%20SAT%20Scores.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY2018-19** (30 rows × 1 cols) — cols: `DATA AS OF: 12/3/2019`
  - [`School Year 2017-2018 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202017-2018%20SAT%20Scores.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY2017-18** (28 rows × 1 cols) — cols: `DATA AS OF: 9/14/2018`
  - [`School Year 2016-2017 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202016-2017%20SAT%20Scores.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY2016-17** (28 rows × 1 cols) — cols: `DATA AS OF: 10/24/2017`
  - [`School Year 2015-2016 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202015-2016%20SAT%20Scores.xlsx) — **xlsx** — 2 tab(s)
    - tab **SY15-16 . Pre-March-2016 SAT** (27 rows × 1 cols) — cols: `DATA AS OF: 9/14/2016`
    - tab **SY 15-16 . New SAT** (29 rows × 1 cols) — cols: `DATA AS OF: 9/14/2016`
  - [`School Year 2014-2015 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202014-2015%20SAT%20Scores.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY14-15 . Pre-March-2016 SAT** (27 rows × 1 cols) — cols: `DATA AS OF: 9/14/2016`
  - [`School Year 2013-2014 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202013-2014%20SAT%20Scores.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY13-14 . Pre-March-2016 SAT** (31 rows × 1 cols) — cols: `DATA AS OF: 9/14/2016`
  - [`School Year 2012-2013 SAT Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202012-2013%20SAT%20Scores.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY12-13 . Pre-March-2016 SAT** (31 rows × 1 cols) — cols: `DATA AS OF: 9/14/2016`
  - [`School Year 2024-2025 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202024-2025%20AP%20Scores.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (26 rows × 1 cols) — cols: `DATA AS OF: 08/28/2025`
    - tab **Gender** (10 rows × 4 cols) — cols: `Gender`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Race-Ethnicity** (13 rows × 4 cols) — cols: `Race/Ethnicity`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Subject Area** (44 rows × 4 cols) — cols: `Subject Area`, `Number of Tests`, `Number of Tests with AP Score of 3, 4, or 5`, `Percent Tests Scoring 3, 4, or 5`
  - [`School Year 2023-2024 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202023-2024%20AP%20Scores.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (26 rows × 1 cols) — cols: `DATA AS OF: 08/22/2024`
    - tab **Gender** (10 rows × 4 cols) — cols: `Gender`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Race-Ethnicity** (13 rows × 4 cols) — cols: `Race/Ethnicity`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Subject Area** (43 rows × 4 cols) — cols: `Subject Area`, `Number of Tests`, `Number of Tests with AP Score of 3, 4, or 5`, `Percent Tests Scoring 3, 4, or 5`
  - [`School Year 2022-2023 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202022-2023%20AP%20Scores.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (24 rows × 1 cols) — cols: `DATA AS OF: 09/25/2023`
    - tab **Gender** (11 rows × 4 cols) — cols: `Gender`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Race-Ethnicity** (14 rows × 4 cols) — cols: `Race/Ethnicity`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Subject Area** (41 rows × 4 cols) — cols: `Subject Area`, `Number of Tests`, `Number of Tests with AP Score of 3, 4, or 5`, `Percent Tests Scoring 3, 4, or 5`
  - [`School Year 2021-2022 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202021-2022%20AP%20Scores.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (24 rows × 1 cols) — cols: `DATA AS OF: 11/16/2022`
    - tab **Gender** (10 rows × 4 cols) — cols: `Gender`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Race-Ethnicity** (14 rows × 4 cols) — cols: `Race/Ethnicity`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Subject Area** (41 rows × 4 cols) — cols: `Subject Area`, `Number of Tests`, `Number of Tests with AP Score of 3, 4, or 5`, `Percent Tests Scoring 3, 4, or 5`
  - [`School Year 2020-2021 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/SchoolYear2020-2021-APScores.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (24 rows × 1 cols) — cols: `DATA AS OF: 11/24/2021`
    - tab **Gender** (10 rows × 4 cols) — cols: `Gender`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Race-Ethnicity** (14 rows × 4 cols) — cols: `Race/Ethnicity`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Subject Area** (41 rows × 4 cols) — cols: `Subject Area`, `Number of Tests`, `Number of Tests with AP Score of 3, 4, or 5`, `Percent Tests Scoring 3, 4, or 5`
  - [`School Year 2019-2020 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School-Year-2019-2020-AP-Scores.xlsx) — **xlsx** — 4 tab(s)
    - tab **School** (25 rows × 1 cols) — cols: `DATA AS OF: 12/14/2020`
    - tab **Gender** (9 rows × 4 cols) — cols: `Gender`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Subject Area** (40 rows × 4 cols) — cols: `Subject Area`, `Number of Tests`, `Number of Tests with AP Score of 3, 4, or 5`, `Percent Tests Scoring 3, 4, or 5`
    - tab **Race-Ethnicity** (14 rows × 4 cols) — cols: `Race/Ethnicity`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
  - [`School Year 2018-2019 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202018-2019%20AP%20Scores.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (45 rows × 1 cols) — cols: `DATA AS OF: 12/3/2019`
    - tab **Gender** (9 rows × 4 cols) — cols: `Gender`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
    - tab **Subject Area** (40 rows × 4 cols) — cols: `Subject Area`, `Number of Tests`, `Number of Tests with AP Score of 3, 4, or 5`, `Percent Tests Scoring 3, 4, or 5`
    - tab **Race-Ethnicity** (15 rows × 4 cols) — cols: `Race/Ethnicity`, `Number Students with an AP Score`, `Number Students with at Least One AP Score of 3, 4, or 5`, `Percent Students Scoring 3, 4, or 5`
  - [`School Year 2017-2018 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202017-2018%20AP%20Scores.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (46 rows × 1 cols) — cols: `DATA AS OF: 10/24/2018`
    - tab **Gender** (9 rows × 1 cols) — cols: `DATA AS OF: 10/24/2018`
    - tab **Subject Area** (38 rows × 1 cols) — cols: `DATA AS OF: 10/24/2018`
    - tab **Race-Ethnicity** (15 rows × 1 cols) — cols: `DATA AS OF: 10/24/2018`
  - [`School Year 2016-2017 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202016-2017%20AP%20Scores.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (42 rows × 1 cols) — cols: `DATA AS OF: 10/24/2017`
    - tab **Gender** (9 rows × 1 cols) — cols: `DATA AS OF: 10/24/2017`
    - tab **Subject Area** (39 rows × 1 cols) — cols: `DATA AS OF: 10/24/2017`
    - tab **Race-Ethnicity** (14 rows × 1 cols) — cols: `DATA AS OF: 10/24/2017`
  - [`School Year 2015-2016 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202015-2016%20AP%20Scores_1.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (42 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Gender** (9 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Subject Area** (39 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Race-Ethnicity** (14 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
  - [`School Year 2014-2015 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202014-2015%20AP%20Scores_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (22 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Gender** (9 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Subject Area** (41 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Race-Ethnicity** (14 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
  - [`School Year 2013-2014 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202013-2014%20AP%20Scores_1.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (22 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Gender** (9 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Subject Area** (39 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Race-Ethnicity** (14 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
  - [`School Year 2012-2013 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202012-2013%20AP%20Scores_1.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (23 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Gender** (9 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Subject Area** (39 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Race-Ethnicity** (14 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
  - [`School Year 2011-2012 AP Scores`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202011-2012%20AP%20Scores_1.xlsx) — **xlsx** — 4 tab(s)
    - tab **High School** (27 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Gender** (9 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Subject Area** (37 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
    - tab **Race-Ethnicity** (20 rows × 1 cols) — cols: `DATA AS OF: 11/2/2016`
  - [`DC CAPE Scores – School Year 2024-25`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DC%20CAPE%20Scores%20%E2%80%93%20School%20Year%202024-25.xlsx) — **xlsx** — 13 tab(s)
    - tab **Overall** (460 rows × 1 cols) — cols: `DATA AS OF: August 2025`
    - tab **Female** (456 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Male** (453 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **AmIndAlNa** (64 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Asian** (216 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **BlAfAm** (458 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **HisLa** (421 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Multi** (291 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **PacIslNaH** (36 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **WhCau** (276 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **EL** (394 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **SpEd** (459 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **EconDisad** (456 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
  - [`DC CAPE Scores – School Year 2023-24`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2024%20Overall%20and%20Subgroups_public_formatted_Read%20Only.xlsx) — **xlsx** — 13 tab(s)
    - tab **Overall** (459 rows × 1 cols) — cols: `DATA AS OF: August 2024`
    - tab **Female** (454 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Male** (452 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **AmIndAlNa** (51 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Asian** (198 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **BlAfAm** (458 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **HisLa** (416 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Multi** (272 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **PacIslNaH** (28 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **WhCau** (268 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **EL** (385 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **SpEd** (459 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **EconDisad** (456 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
  - [`DC PARCC Scores – School Year 2022-23`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DC%20PARCC%20Scores%20%E2%80%93%20School%20Year%202022-23.xlsx) — **xlsx** — 13 tab(s)
    - tab **Overall** (457 rows × 1 cols) — cols: `DATA AS OF: August 2023`
    - tab **Female** (456 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Male** (450 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **AmIndAlNa** (58 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Asian** (187 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **BlAfAm** (459 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **HisLa** (406 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Multi** (253 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **PacIslNaH** (39 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **WhCau** (250 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **EL** (375 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **SpEd** (455 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **EconDisad** (457 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
  - [`DC PARCC Scores – School Year 2021-22`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2022%20Overall%20and%20Subgroups_public_formatted_protected.xlsx) — **xlsx** — 13 tab(s)
    - tab **Overall** (457 rows × 1 cols) — cols: `DATA AS OF: August 2022`
    - tab **Female** (454 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Male** (462 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **AmIndAlNa** (59 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Asian** (178 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **BlAfAm** (456 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **HisLa** (398 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Multi** (250 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **PacIslNaH** (37 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **WhCau** (272 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **EL** (366 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **SpEd** (455 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **AtRisk** (453 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
  - [`DC PARCC Scores- School Year 2018-19`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2019-Overall-and-Subgroups_public_formatted.xlsx) — **xlsx** — 13 tab(s)
    - tab **Overall** (476 rows × 1 cols) — cols: `DATA AS OF: August 2019`
    - tab **Female** (469 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Male** (469 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **American Indian** (62 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Asian** (176 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Black** (475 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Hispanic** (397 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Multiracial** (210 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Pac Islander-Nat Hawaiian** (42 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **White** (230 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **EL (Active and Monitored)** (359 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **SWD (Active)** (472 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **At-Risk** (470 rows × 52 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
  - [`DC PARCC Scores – School Year 2017-18`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DC%20PARCC%20Scores%20-%20School%20Year%202017-18.xlsx) — **xlsx** — 13 tab(s)
    - tab **Overall** (462 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2018`
    - tab **Female Students** (456 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Male Students** (462 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **American Indian Students** (49 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Asian Students** (183 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Black Students** (462 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **HIspanic Students** (382 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Multiracial Students** (205 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **Nat Hawaiian-Pac Islnd Students** (51 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **White Students** (219 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **EL Students (Active & Monitor)** (337 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **SWD (Active)** (459 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
    - tab **At-Risk Students** (457 rows × 30 cols) — cols: `School Code`, `School Name`, `Grade`, `Subgroup`, `# of English Language Arts (ELA) Test Takers`, `ELA - # Level 1`, `ELA - # Level 2`, `ELA - # Level 3`, `ELA - # Level 4`, `ELA - # Level 5`, `ELA # Proficient`, `ELA - % Level 1` …
  - [`DC PARCC Scores – School Year 2016-17`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DC%20PARCC%20Scores%20-%20School%20Year%202016-17.xlsx) — **xlsx** — 13 tab(s)
    - tab **Overall** (465 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **Female Students** (461 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **Male Students** (463 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **American Indian Students** (49 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **Asian Students** (170 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **Black Students** (465 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **Hispanic Students** (388 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **Multiracial Students** (196 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **Nat Hawaiian-Pac Islnd Students** (53 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **White Students** (213 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **ELL Students (Active & Monitor)** (336 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **SPED Students (Active & Monitor** (457 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
    - tab **Econ Disadvantaged Students** (465 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2017`
  - [`DC PARCC Scores – School Year 2015-16`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DC%20PARCC%20Scores%20%E2%80%93%20School%20Year%202015-16.xlsx) — **xlsx** — 13 tab(s)
    - tab **All** (461 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **American Indian Students** (42 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **Asian Students** (165 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **Black Students** (461 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **Hispanic Students** (371 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **Multiracial Students** (201 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **Nat Hawaiian-Pac Islnd Students** (64 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **White Students** (217 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **Special Education Students** (454 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **Eng Lang Learner Students** (306 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **Free-Red Price Meal Students** (461 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **Male Students** (461 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
    - tab **Female Students** (459 rows × 1 cols) — cols: `DATA AS OF: SEPTEMBER 2016`
  - [`DC PARCC Scores – School Year 2014-15`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2015%20Overall%20Subgroup%20Proficiency%20Public.xlsx) — **xlsx** — 13 tab(s)
    - tab **All** (463 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **American Indian Students** (33 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **Asian Students** (151 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **Black Students** (462 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **Hispanic Students** (363 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **Multiracial Students** (173 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **Nat Hawaiian-Pac Islnd Students** (44 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **White Students** (197 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **Special Education Students** (450 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **ELL Students** (280 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **Free-Red Price Meal Students** (460 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **Male Students** (458 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
    - tab **Female Students** (458 rows × 1 cols) — cols: `DATA AS OF: FEBRUARY 2016`
  - [`2025 DC CAPE Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2025%20DC%20CAPE%20Presentation.pdf) — **pdf** — 17 pages, **extractable tables** on ~8 page(s)
    - p3 table (9 rows): 
    - p3 table (8 rows): 
    - p4 table (5 rows): `5.2%`
  - [`2024 DC CAPE Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2024%20DC%20CAPE%20Results%20Deck_Public%20Release.pdf) — **pdf** — 15 pages, **extractable tables** on ~7 page(s)
    - p4 table (9 rows): 
    - p4 table (8 rows): 
    - p5 table (5 rows): `5.2%`
  - [`2023 DC PARCC Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2023%20DC%20PARCC%20Presentation.pdf) — **pdf** — 14 pages, **extractable tables** on ~4 page(s)
    - p4 table (7 rows): 
    - p4 table (7 rows): 
    - p6 table (5 rows): `5.2%`
  - [`2022 DC PARCC Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2022%20PARCC%20Results%20Deck_Public%20Release.pdf) — **pdf** — 18 pages, **extractable tables** on ~11 page(s)
    - p3 table (6 rows): 
    - p3 table (7 rows): 
    - p5 table (5 rows): `5.2%`
  - [`2019 DC PARCC Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2019-PARCC-Results-Deck-for-Press.pdf) — **pdf** — 22 pages, **extractable tables** on ~16 page(s)
    - p2 table (6 rows): 
    - p2 table (7 rows): 
    - p3 table (5 rows): `5.2%`
  - [`2018 DC PARCC Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2018%20DCPS%20PARCC%20Results%20Deck.pdf) — **pdf** — 19 pages, **extractable tables** on ~14 page(s)
    - p2 table (5 rows): 
    - p2 table (6 rows): 
    - p3 table (5 rows): `5.2%`
  - [`2017 DC PARCC Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2017%20DC%20PARCC%20Presentation.pdf) — **pdf** — 27 pages, **extractable tables** on ~19 page(s)
    - p3 table (4 rows): 
    - p3 table (5 rows): 
    - p5 table (2 rows): 
  - [`2016 DC PARCC Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2016%20DC%20PARCC%20Presentation.pdf) — **pdf** — 29 pages, **extractable tables** on ~16 page(s)
    - p2 table (6 rows): `Performance Levels`
    - p5 table (6 rows): `5.2%`, `4.9%`
    - p5 table (6 rows): `2.7%`, `3.6%`
  - [`2015 DC PARCC Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2015DCPARCCPresentation.pdf) — **pdf** — 17 pages, **extractable tables** on ~12 page(s)
    - p3 table (4 rows): 
    - p3 table (4 rows): 
    - p4 table (3 rows): `79%`

### [DCPS Data Set — Enrollment](https://dcps.dc.gov/publication/dcps-data-set-enrollment)

_topics: enrollment_

- **Format:** Excel (.xlsx), one file per year
- **Updated:** Annual, after audit certification
- **Years on page:** Multiple years (separate files)
- **Notes:** DCPS-only, school-by-school by grade. Derived from / overlaps OSSE audited enrollment (the cross-sector authority).

### [DCPS Data Set — Graduation Rates](https://dcps.dc.gov/node/1018352)

_topics: graduation_

- **Format:** Excel (.xlsx), one file per year
- **Updated:** Annual
- **Years on page:** 2012 through 2025 (14 files)
- **Notes:** DCPS high-school 4-yr ACGR by school + subgroup. Overlaps OSSE graduation data (cross-sector authority).

### [DCPS Fast Facts](https://dcps.dc.gov/featured-content/dcps-fast-facts-2025)

_topics: enrollment, demographics, landing_

- **Format:** PDF (2-page fact sheet)
- **Updated:** Annual (2025 ed. published Mar 2025)
- **Years on page:** Latest year; older editions only via direct PDF URLs
- **Notes:** District-wide 'by the numbers.' Prior-year editions have no central archive — classic fragmentation.

### [DCPS School Profiles ('Find a School')](https://profiles.dcps.dc.gov/)

_topics: profiles, enrollment, boundaries_

- **Format:** Interactive web app
- **Updated:** ~Annual; enrollment updates each year
- **Years on page:** Current school year (not labeled)
- **Notes:** Per-school pages (address, principal, ward, grades, programs, enrollment). Filter/compare; 'Locate Your Boundary School' by address. Per-school URLs like profiles.dcps.dc.gov/332.

### [DCPS Stakeholder / Panorama Satisfaction Surveys](https://dcps.dc.gov/surveys)

_topics: surveys, school-climate_

- **Format:** PDF + Excel aggregates; interactive Panorama portal
- **Updated:** Annual (administered each spring)
- **Years on page:** Panorama 2018, 2019, 2021, 2022; legacy reports 2011, 2013–2017
- **Notes:** Student/family/staff experience surveys. District results at bit.ly/dcpsresults; school-level/raw data requires staff Panorama login.

### [DCPS Budget Transparency Portal](https://dcpsbudget.com/)

_topics: finance_

- **Format:** Web portal + downloadable Excel spreadsheets
- **Updated:** Annual budget cycle (initial budgets ~late winter/spring)
- **Years on page:** Current cycle (FY27) + 'Budget Archives'
- **Notes:** School-by-school budget ALLOCATIONS under the three-factor model (enrollment / targeted / stability). Standalone .com domain, not under dcps.dc.gov — easy to miss. Allocation, not expenditure — differs from OSSE PPE. The consolidated FY initial+submitted spreadsheet is a direct .xlsx; the per-school worksheets and prior years live behind a JS 'datasets' browser (dcpsbudget.com/datasets) that's browser-only, not script-fetchable.
- **Data files (profiled):**
  - [`FY27 Initial & Submitted Budget Spreadsheet (school-by-school allocations)`](https://dcpsbudget.com/wp-content/uploads/2026/04/FY27-Initial-and-Submitted-Budgets.xlsx) — **xlsx** — 2 tab(s)
    - tab **FY27 Submitted Budgets** (6,711 rows × 1 cols) — cols: `This spreadsheet represents submitted budgets by fund source. These budgets were built off of initial allocations and submitted by school leaders and communities in February 2026. DCPS operating budget funds are coded under agency code GA0. Non-local funds for school resources including Title I, Title II, and Title IV-B are coded as GD0 as they are loaded to OSSE’s budget and not DCPS’s. This budget worksheet includes school budgeted items funded under both GA0 (DCPS) and GD0 (OSSE); however, in the Mayor's budget book GA0 and GD0 are separated into different sections.`
    - tab **FY27 Initial Allocations** (3,552 rows × 1 cols) — cols: `This spreadsheet represents FY27 initial allocations for DCPS schools. From these initial allocations, school leaders and communities develop submitted budgets. In FY27, DCPS is providing allocation fund source as well as the DCPS funding model allocation type.`

### [A Capital Commitment — Strategic Plan & Scorecards](https://dcps.dc.gov/capitalcommitment)

_topics: strategy, outcomes_

- **Format:** Web page + linked PDF plan
- **Updated:** Plan per 5-year cycle; metrics updated periodically
- **Years on page:** 2023–2028 current; priors 2017-2022, 2012-2017
- **Notes:** Strategic goals/metrics. Plan PDF and scorecards largely on the external dcpsstrong.com site — an off-domain fragment.

### [DCPS Equity Strategy & Framework](https://dcps.dc.gov/equity)

_topics: equity_

- **Format:** Web page + PDF framework (2018)
- **Updated:** Infrequent
- **Years on page:** Framework 2018
- **Notes:** Policy/narrative more than data. The annual school-level Equity Reports with underlying data are published by OSSE, not DCPS.

### [DCPS Feeder Patterns](https://dcps.dc.gov/feederpatterns)

_topics: boundaries_

- **Format:** Web page linking per-year PDFs
- **Updated:** Annual
- **Years on page:** SY14-15 through SY26-27
- **Notes:** Which schools feed into which (geographic + programmatic). Unusually complete multi-year archive vs. other DCPS data.

### [Find Your In-Boundary School (address lookup)](https://enrolldcps.dc.gov/node/41)

_topics: boundaries_

- **Format:** Interactive address-lookup tool
- **Updated:** Updated when boundaries/feeders change
- **Years on page:** Current boundaries
- **Notes:** On the enrolldcps.dc.gov subdomain. Boundary POLICY and redrawing are run by DME, not DCPS.

### [DCPS Modernizations](https://dcps.dc.gov/page/modernizations)

_topics: facilities_

- **Format:** Web page + PACE prioritization PDF
- **Updated:** Updated as projects change
- **Years on page:** Current list; framework dated 2022
- **Notes:** Facilities data is split across DCPS, DGS (dgs.dc.gov/page/dcps-school-projects), and EdScape Ch.3 — significant fragmentation for capital/facilities.

### [DCPS School Directory](https://dcps.dc.gov/service/school-data)

_topics: profiles_

- **Format:** PDF (per year)
- **Updated:** Annual
- **Years on page:** Per school year (e.g. SY24-25)
- **Notes:** Crosswalk of DCPS school IDs, names, addresses, wards, types. Latest year linked from the data hub; older years only via direct PDF URLs.

## DC PCSB — DC Public Charter School Board

_Authorizer/regulator of DC's public charter schools. Publishes charter directories, the School Quality Report (SQR) accountability framework, finances, and equity data._

### [DC PCSB Transparency Hub](https://dcpcsb.org/transparency-hub)

_topics: landing, finance, discipline, equity, profiles_

- **Format:** Web portal (links to PDF / Excel / Egnyte / Google Sheets)
- **Updated:** Continuously updated; docs annual
- **Years on page:** Multiple; varies by document
- **Notes:** The single most comprehensive index of PCSB charter data: budgets, audits, 990s, financials, at-risk spending, equity reports, discipline/attendance, charter agreements, site reviews, school profiles, openings/closures. Many financial docs hosted off-site on Egnyte.

### [Public Charter School Data (sector overview)](https://dcpcsb.org/about-us/public-charter-school-data)

_topics: landing, enrollment, assessment, graduation_

- **Format:** Web page (links to sub-dashboards)
- **Updated:** Annual
- **Years on page:** Current
- **Notes:** Citywide charter rollups (enrollment, assessment, growth/closures, graduation, profiles). Cites 133 schools / 66 LEAs / ~47,525 students.

### [Charter Student Enrollment](https://dcpcsb.org/student-enrollment)

_topics: enrollment, demographics_

- **Format:** Static tables + spreadsheet download + link to OSSE
- **Updated:** Annual
- **Years on page:** SY22-23, 23-24, 24-25 shown; historical spreadsheet 1967–present
- **Notes:** Charter-only enrollment by grade/tier/demographics/ward + market share. Audited counts sourced from OSSE; PCSB republishes/analyzes the charter slice. Static tables, NOT Tableau.

### [Statewide Assessment Results (charter)](https://dcpcsb.org/test-results-parcc)

♻️ intermittent server errors · _topics: assessment_

- **Format:** Web page / dashboard
- **Updated:** Annual
- **Years on page:** Multiple
- **Notes:** Charter ELA/math on the DC statewide test. URL still says 'parcc' though DC moved to DC CAPE. Overlaps OSSE/Report Card (the authority). Site occasionally returns HTTP 520.

### [School Profiles / Find a DC Public Charter School](https://www.dcpcsb.org/school-profiles)

_topics: profiles, accountability_

- **Format:** Interactive searchable directory
- **Updated:** Updated yearly / as schools open/close
- **Years on page:** Current roster
- **Notes:** Canonical 'find a charter school' tool. Filter by feature/ward/grade/status; each entry links to its School Quality Report. No bulk export.

### [Public Charter School Directory (annual PDF)](https://www.dcpcsb.org/2025-26-public-charter-school-directory)

_topics: profiles_

- **Format:** PDF
- **Updated:** Annual (school year)
- **Years on page:** 2025-26 latest; prior years at /YYYY-YY-... URLs
- **Notes:** Static counterpart to the interactive profiles: every LEA, campus, program, grades, ward, leader contact.

### [School Quality Report (SQR)](https://dcpcsb.org/families/school-quality-report)

♻️ intermittent server errors · _topics: accountability_

- **Format:** Web page / per-school report
- **Updated:** Annual (released fall)
- **Years on page:** Current; history via PMF archive
- **Notes:** Charter accountability: scores each charter 0-100 and assigns Tier 1/2/3. This is a DIFFERENT system from OSSE's STAR (1-5) — see overlaps. Aggregated at /schoolquality (sometimes bot-blocked).

### [ASPIRE System (current charter accountability framework)](https://dcpcsb.org/aspire-system)

_topics: accountability, methodology_

- **Format:** Web page (framework docs / PDF)
- **Updated:** Annual
- **Years on page:** Current
- **Notes:** The board-approved system that replaced the PMF and underlies the SQR. Note: PMF data pages look current but are frozen at 2018-19. The ASPIRE framework/result files (~14) are on Egnyte (/dl/ links that return an HTML landing page to scripts) — browser-only, not catalogued here.

### [Performance Management Framework (PMF) — archive](https://dcpcsb.org/performance-management-framework-pmf)

🗄️ archived/stale · _topics: accountability, methodology_

- **Format:** PDF books/guides + Excel data files (via Egnyte)
- **Updated:** Was annual
- **Years on page:** SY2011-12 through 2018-19 (ARCHIVED)
- **Notes:** Legacy charter accountability with per-school scores/tiers. Superseded by ASPIRE/SQR. Confirm which framework a given year's 'tier' refers to before combining. HARVEST GAP: 9 PMF books/guides are direct PDFs (profiled); the ~13 machine-readable PMF Excel score files are on Egnyte (browser-only download — not script-fetchable, not profiled).
- **Data files (profiled):**
  - [`PMF Archive — 11 21 2016 17 PMF Policy & Technical Guide v2`](http://www.dcpcsb.org/sites/default/files/2016-11-21%202016-17%20PMF%20Policy%20%26%20Technical%20Guide%20v2.pdf) — **pdf** — 137 pages, **extractable tables** on ~94 page(s) (scan capped)
    - p11 table (2 rows): `the data it receives until final results are presented. Data are stored to the number of digits`
    - p14 table (3 rows): `Measure`, `Floor`, `Target`
    - p15 table (3 rows): `Measure`, `Floor`, `Target`
  - [`PMF Archive — 12 12 Final 2015 16 PMF Book`](http://www.dcpcsb.org/sites/default/files/2016-12-12%20Final%202015-16%20PMF%20Book.pdf) — **pdf** — 326 pages, **extractable tables** on ~117 page(s) (scan capped)
    - p1 table (4 rows): 
    - p2 table (4 rows): 
    - p5 table (23 rows): `2015—16 Overall Tier 1 (65.0 — 100.0%) Ward Grade Levels Percentage`
  - [`PMF Archive — Vote 2015 16 PMF Policy Tech March Meeting Final Clean Copy`](http://www.dcpcsb.org/sites/default/files/Vote--2015-16%20PMF_Policy%20%20Tech_March%20Meeting%20Final%20Clean%20Copy.pdf) — **pdf** — 116 pages, **extractable tables** on ~83 page(s)
    - p11 table (2 rows): `the data it receives until final results are presented. Data are stored to the number of digits`
    - p14 table (3 rows): `Measure`, `Floor`, `Target`
    - p15 table (3 rows): `Measure`, `Floor`, `Target`
  - [`PMF Archive — Final PMF Book 2015 2 29 2016`](http://www.dcpcsb.org/sites/default/files/Final_PMF_Book_2015_2%2029%202016.pdf) — **pdf** — 300 pages, **extractable tables** on ~116 page(s) (scan capped)
    - p1 table (4 rows): 
    - p3 table (2 rows): 
    - p6 table (27 rows): `Early Childhood/Elementary/Middle Schools`
  - [`PMF Archive — Revised 2014 15 PMF Policy Tech Guide Approved 8 17 15 FINAL1`](http://www.dcpcsb.org/sites/default/files/Revised%202014-15%20PMF_Policy__Tech_Guide%20Approved%20%208%2017%2015%20FINAL1.pdf) — **pdf** — 102 pages, **extractable tables** on ~69 page(s)
    - p8 table (3 rows): `PCSB makes every effort to retain the`
    - p15 table (5 rows): `Measure`, `Floor`, `Target`
    - p16 table (3 rows): `Measure`, `Floor`, `Target`
  - [`PMF Archive — 14 Book (12 11 2014)`](http://www.dcpcsb.org/sites/default/files/2013-14%20Book%20%2812-11-2014%29.pdf) — **pdf** — 328 pages, **extractable tables** on ~115 page(s) (scan capped)
    - p1 table (2 rows): 
    - p6 table (25 rows): `2013—14 Overall Tier 1 (65.0 — 100.0%) Ward Grade Levels Percentage`
    - p7 table (26 rows): `2013—14 Overall Tier 2 (35.0 — 64.9%) Ward Grade Levels Percentage`
  - [`PMF Archive — 2014TechnicalGuide 01 10 14 FINAL`](http://www.dcpcsb.org/sites/default/files/2014TechnicalGuide%2001%2010%2014%20FINAL.pdf) — **pdf** — 25 pages, **extractable tables** on ~11 page(s)
    - p8 table (10 rows): `Weight`, `Indicator`, `Metric`, `Weight`, `Floor5`, `Target6`
    - p8 table (8 rows): `Weight`, `Indicator`, `Metric`, `Weight`, `Floor`, `Target`
    - p9 table (2 rows): `20%`, `Leading Indicators`, `Attendance`, `10%`, `82.0`
  - [`PMF Archive — 2013 PMF REDUCED 2`](http://www.dcpcsb.org/sites/default/files/2013%20PMF%20REDUCED%202.pdf) — **pdf** — 304 pages, **extractable tables** on ~60 page(s) (scan capped)
    - p1 table (3 rows): 
    - p6 table (25 rows): `ELEMENTARY/MIDDLE SCHOOLS`
    - p7 table (27 rows): `ELEMENTARY/MIDDLE SCHOOLS`
  - [`PMF Archive — Release 2012 2013 PMF Guidelines revised 9 12`](http://www.dcpcsb.org/sites/default/files/Release--2012_2013_PMF%20Guidelines%20revised%209%2012.pdf) — **pdf** — 29 pages, **extractable tables** on ~14 page(s)
    - p8 table (10 rows): `Weight`, `Indicator`, `Metric`, `Weight`, `Floor5`, `Target6`
    - p8 table (10 rows): `Weight`, `Indicator`, `Metric`, `Weight`, `Floor`, `Target`
    - p9 table (15 rows): `Weight`, `Indicator`, `Metric`, `Weight`, `Floor`, `Target`

### [School Equity Reports (charter)](https://dcpcsb.org/school-equity-reports)

🗄️ archived/stale · _topics: equity, discipline, attendance_

- **Format:** PDF (via Egnyte)
- **Updated:** Was annual
- **Years on page:** SY2012-13 through 2017-18 (ARCHIVED)
- **Notes:** Per-school attendance, discipline, mobility/withdrawal, growth. PCSB now redirects this detail to OSSE's DC School Report Card; its own reports stop at 2017-18. HARVEST GAP: the 2017 per-school equity PDFs hosted directly on dcpcsb.org (9) + the definitions guide are profiled; ~111 more per-school equity PDFs are on Egnyte (browser-only, not profiled).
- **Data files (profiled):**
  - [`School Equity Reports — SY 2017 18 DC PCSB Equity Report Definitions Guide`](https://dcpcsb.org/sites/default/files/SY%202017-18%20DC%20PCSB%20Equity%20Report%20Definitions%20Guide.pdf) — **pdf** — 2 pages (narrative; no extractable tables)
  - [`School Equity Reports — Equity Report Public Charter School Academy of Hope Adult PCS`](http://www.dcpcsb.org/sites/default/files/report/2017_Equity_Report_Public%20Charter%20School_Academy%20of%20Hope%20Adult%20PCS.pdf) — **pdf** — 4 pages, **extractable tables** on ~4 page(s)
    - p1 table (16 rows): `Academy of Hope Adult PCS 2016-2017 Equity Report 233Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Adult Equity Reports give our schools, families and communities transparent Ward 5 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 2315 18th Pl NE Washington, DC 20018 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-269-6623 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://www.aohdc.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School`
    - p1 table (32 rows): `Male 33`, `32.5`
    - p2 table (88 rows): `ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE Academy of Hope Adult PCS 2016-2017 Equity Report`
  - [`School Equity Reports — Equity Report Public Charter School Briya PCS`](http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_Briya%20PCS.pdf) — **pdf** — 4 pages, **extractable tables** on ~4 page(s)
    - p1 table (48 rows): `Briya PCS 2016-2017 Equity Report 126Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades PK3, PK4, Adult Equity Reports give our schools, families and communities transparent Ward 5 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 100 Gallatin St NE Washington, DC 20011 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-797-7337 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://briya.org/ Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School`
    - p2 table (86 rows): `ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE Briya PCS 2016-2017 Equity Report`
    - p3 table (3 rows): `Briya PCS 2016-2017 Equity Report`
  - [`School Equity Reports — Equity Report Public Charter School Carlos Rosario International PCS`](http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_Carlos%20Rosario%20International%20PCS.pdf) — **pdf** — 4 pages, **extractable tables** on ~4 page(s)
    - p1 table (20 rows): `Carlos Rosario International PCS 2016-2017 Equity Report 1119Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Adult Equity Reports give our schools, families and communities transparent Ward 1 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 1100 Harvard St NW Washington, DC 20009 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-797-4700 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://www.carlosrosario.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School`
    - p1 table (14 rows): `Male 41`, `41.2`
    - p2 table (85 rows): `ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE Carlos Rosario International PCS 2016-2017 Equity Report`
  - [`School Equity Reports — Equity Report Public Charter School Community College Preparatory Academy PCS`](http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_Community%20College%20Preparatory%20Academy%20PCS.pdf) — **pdf** — 4 pages, **extractable tables** on ~4 page(s)
    - p1 table (52 rows): `Community College Preparatory Academy PCS 2016-2017 Equity Report 216Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Adult Equity Reports give our schools, families and communities transparent Ward 8 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 2405 Martin Luther King Jr Ave SE Washington, DC 20020 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-610-5780 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://www.ccprep-academy.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School`
    - p2 table (89 rows): `ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE Community College Preparatory Academy PCS 2016-2017 Equity Report`
    - p3 table (3 rows): `Community College Preparatory Academy PCS 2016-2017 Equity Report`
  - [`School Equity Reports — Equity Report Public Charter School LAYC Career Academy PCS`](http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_LAYC%20Career%20Academy%20PCS.pdf) — **pdf** — 4 pages, **extractable tables** on ~4 page(s)
    - p1 table (47 rows): `LAYC Career Academy PCS 2016-2017 Equity Report 104Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Ungraded Equity Reports give our schools, families and communities transparent Ward 1 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 3224 16th St NW Washington, DC 20010 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-319-2228 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://www.laycca.org/ Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School`
    - p2 table (86 rows): `ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE LAYC Career Academy PCS 2016-2017 Equity Report`
    - p3 table (3 rows): `LAYC Career Academy PCS 2016-2017 Equity Report`
  - [`School Equity Reports — Equity Report Public Charter School Maya Angelou PCS Young Adult Learning Center`](http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_Maya%20Angelou%20PCS%20-%20Young%20Adult%20Learning%20Center.pdf) — **pdf** — 4 pages, **extractable tables** on ~4 page(s)
    - p1 table (54 rows): `Maya Angelou PCS - Young Adult Learning Center 2016-2017 Equity Report 137Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Adult Equity Reports give our schools, families and communities transparent Ward 7 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 5600 E Capitol St NE Washington, DC 20019 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-289-8898 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://seeforever.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School`
    - p2 table (89 rows): `ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE Maya Angelou PCS - Young Adult Learning Center 2016-2017 Equity Report`
    - p3 table (3 rows): `Maya Angelou PCS - Young Adult Learning Center 2016-2017 Equity Report`
  - [`School Equity Reports — Equity Report Public Charter School The Next Step El Proximo Paso PCS`](http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_The%20Next%20Step-El%20Proximo%20Paso%20PCS.pdf) — **pdf** — 4 pages, **extractable tables** on ~4 page(s)
    - p1 table (48 rows): `The Next Step/El Proximo Paso PCS 2016-2017 Equity Report 168Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Ungraded Equity Reports give our schools, families and communities transparent Ward 1 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 3047 15th St NW Washington, DC 20009 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-319-2249 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://nextsteppcs.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School`
    - p2 table (87 rows): `ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE The Next Step/El Proximo Paso PCS 2016-2017 Equity Report`
    - p3 table (3 rows): `The Next Step/El Proximo Paso PCS 2016-2017 Equity Report`
  - [`School Equity Reports — Equity Report Public Charter School YouthBuild PCS`](http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_YouthBuild%20PCS.pdf) — **pdf** — 4 pages, **extractable tables** on ~4 page(s)
    - p1 table (50 rows): `YouthBuild PCS 2016-2017 Equity Report 128Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Ungraded Equity Reports give our schools, families and communities transparent Ward 1 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 3220 16th St NW Washington, DC 20009 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-319-0141 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://www.youthbuildpcs.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School`
    - p2 table (87 rows): `ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE YouthBuild PCS 2016-2017 Equity Report`
    - p3 table (3 rows): `YouthBuild PCS 2016-2017 Equity Report`

### [Annual Discipline & Attendance Report (charter)](https://dcpcsb.org/attendance-and-discipline-report)

_topics: discipline, attendance_

- **Format:** Web page / PDF
- **Updated:** Annual
- **Years on page:** Multiple
- **Notes:** Charter suspensions/expulsions/attendance. Overlaps OSSE citywide discipline data and the Report Card (the cross-sector authority).
- **Data files (profiled):**
  - [`Discipline & Attendance — [CORRECTED 9 5 23 council submission] SY22 23 DC PCSB South Capital Street Truan`](https://dcpcsb.org/sites/default/files/media/file/%5BCORRECTED%209_5_23%20council_submission%5D%20SY22-23%20DC%20PCSB%20South%20Capital%20Street%20Truancy%20Report.pdf) — **pdf** — 27 pages, **extractable tables** on ~8 page(s)
    - p5 table (8 rows): `Percent of Students Suspended (Suspension Rate)`, `8.4%`
    - p10 table (6 rows): `Campus`, `Grades Served`, `Ward`, `SY 2022-23`, `SY 2021-22`
    - p11 table (6 rows): `Campus`, `Grades Served`, `Ward`, `% of Students`, `# of Students`
  - [`Discipline & Attendance — SY 17 18 Attendance and Discipline Report`](https://dcpcsb.org/sites/default/files/SY-17-18-Attendance-and-Discipline-Report.pdf) — **pdf** — 25 pages, **extractable tables** on ~11 page(s)
    - p6 table (11 rows): 
    - p7 table (10 rows): `Grades 2016-17 2017-18 School Ward Served Rate Rate`
    - p8 table (6 rows): `Grades 2016-17 2017-18 School Ward Served Rate Rate`
  - [`Discipline & Attendance — DC PCSB SY 2015 16 Truancy Report`](https://dcpcsb.org/sites/default/files/media/file/DC-PCSB-SY-2015-16-Truancy-Report.pdf) — **pdf** — 22 pages, **extractable tables** on ~13 page(s)
    - p5 table (5 rows): `395`
    - p5 table (2 rows): 
    - p6 table (7 rows): `School`, `Ward`, `2014-15 Rate*`, `2015-16 Rate*`
  - [`Discipline & Attendance — 15 PCSB Discipline and Truancy Report`](https://dcpcsb.org/sites/default/files/media/file/SY2014-15%20PCSB%20Discipline%20and%20Truancy%20Report.pdf) — **pdf** — 3 pages (narrative; no extractable tables)
  - [`Discipline & Attendance — 2015 Discipline & Attendance Briefing full report`](https://dcpcsb.org/sites/default/files/2015%20Discipline%20%26%20Attendance%20Briefing_full%20report.pdf) — **pdf** — 18 pages, **extractable tables** on ~9 page(s)
    - p3 table (2 rows): 
    - p3 table (5 rows): `237 186`
    - p3 table (2 rows): `186`

### [Charter School Finances (spending, budgets, audits, 990s)](https://dcpcsb.org/school-finances)

♻️ intermittent server errors · _topics: finance_

- **Format:** Web page / PDF / Excel (much via Egnyte)
- **Updated:** Annual
- **Years on page:** Multiple
- **Notes:** Per-school spending breakdowns. Cluster of pages: /school-budgets, /school-fiscal-audits, /school-990s, /risk-funding-reports, /financial-analysis-report. Charter actuals — distinct from OSSE PPE methodology. HARVEST GAP: the 4 citywide At-Risk Funding reports are profiled; the bulk is per-school documents NOT catalogued individually — ~249 fiscal-audit PDFs on dcpcsb.org + ~464 audits, ~503 annual reports, and the financial-analysis files on Egnyte (browser-only). Open the page to browse a specific school.
- **Data files (profiled):**
  - [`At-Risk Funding — At Risk Funding Report 18 19 1 22 2019 NW`](https://dcpcsb.org/sites/default/files/At-Risk%20Funding%20Report%2018-19%201-22-2019%20NW.pdf) — **pdf** — 70 pages, **extractable tables** on ~60 page(s)
    - p3 table (53 rows): `AT RISK FUNDING AND ENROLLMENT FOR CHARTER SCHOOLS FY2018 through FY2019`
    - p4 table (13 rows): `AT RISK FUNDING AND ENROLLMENT FOR CHARTER SCHOOLS FY2018 through FY2019`
    - p6 table (5 rows): `Achievement Prep`
  - [`At-Risk Funding — SY 17 18 at risk funding report`](https://dcpcsb.org/sites/default/files/SY%2017-18%20at%20risk%20funding%20report.pdf) — **pdf** — 47 pages, **extractable tables** on ~45 page(s)
    - p3 table (45 rows): 
    - p4 table (22 rows): `National Collegiate Preparatory PCHS`, `181`, `$ 391,832`, `178`, `$ 399,838`
    - p5 table (7 rows): `AppleTree Early Learning`
  - [`At-Risk Funding — DC PCSB At Risk Funding Report (revised 102716)`](https://dcpcsb.org/sites/default/files/2016-DC-PCSB-At-Risk-Funding-Report-%28revised-102716%29.pdf) — **pdf** — 16 pages, **extractable tables** on ~12 page(s)
    - p3 table (45 rows): `DC Public Charter Schools FY 2016 At Risk Funding Per School & FY 2017 Proposed Funding`
    - p4 table (20 rows): `School Name`, `FY16 At Risk FY16 At Risk Proposed Proposed Enrollment Funding`, `FY2016 FY16 Audit ACTUAL Actual Count AT RISK`, `FY17 At Risk FY17 At Risk Proposed Proposed Enrollment Funding`
    - p7 table (3 rows): `Name:`, `Position:`, `LEA Name:`, `Please include a description of how your LEA has spent or plans to spend per pupil at-risk funds for SY15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support.`, `Did your school use at-risk funding to offer summer school programming in 2016?`, `If yes, what challenges did you face in the use of funds and what improvements would you like to see?`, `If no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics)`
  - [`At-Risk Funding — At Risk Report 2015 final 10 01 2015[1]`](https://dcpcsb.org/sites/default/files/At-Risk%20Report_2015_final%2010%2001%202015%5b1%5d.pdf) — **pdf** — 15 pages, **extractable tables** on ~12 page(s)
    - p3 table (12 rows): `Category`, `Number of Schools`, `Percentage`
    - p5 table (5 rows): `Name:`, `Position:`, `LEA Name:`, `Please include a description of how your LEA has spent or plans to spend per pupil at-­risk funds for SY15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support.`, `Did your school offer summer school programming in 2015?`, `If your school did offer summer school programming in 2015, was there a cost to families for the program?`, `If your school did not offer free summer school programming in 2015, was this a change from previous years?`
    - p6 table (3 rows): `Name:`, `Position:`, `LEA Name:`, `Please include a description of how your LEA has spent or plans to spend per pupil at-­risk funds for SY15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support.`, `Did your school offer summer school programming in 2015?`, `If your school did offer summer school programming in 2015, was there a cost to families for the program?`, `If your school did not offer free summer school programming in 2015, was this a change from previous years?`

### [Charter School Growth and Closures](https://dcpcsb.org/charter-school-growth-and-closures)

_topics: profiles, openings-closures_

- **Format:** Web page + Google Sheet
- **Updated:** Updated as events occur
- **Years on page:** 1996–present
- **Notes:** History of 80+ closed/consolidated campuses: year opened/closed, reason, closure type. Full list via linked Google Sheet.

### [DC PCSB Board Meetings & Events](https://dcpcsb.org/events)

_topics: governance, openings-closures_

- **Format:** Event calendar (agendas/minutes as PDF)
- **Updated:** Monthly board meetings
- **Years on page:** Current + archive
- **Notes:** Charter approvals/conditions/closures/replications are decided and recorded here.

## DME — Deputy Mayor for Education

_Mayor's office for education strategy. Runs EdScape (the neighborhood education-landscape tool), the Master Facilities Plan, and boundary/enrollment-planning data._

### [EdScape (education landscape tool)](https://edscape.dc.gov/)

_topics: landing, enrollment, demographics, facilities, boundaries_

- **Format:** Interactive Tableau dashboards + Excel downloads + PDF summaries
- **Updated:** Rolling, several releases/year
- **Years on page:** Through SY2025-26; some series back to SY2013-14
- **Notes:** DME's neighborhood education-data platform. 5 chapters: Population & Students, Public Schools, Facilities, Enrollment Patterns, Neighborhood Factors. Built on OSSE audited enrollment, geocoded to wards/clusters/boundaries. For planners, not parents choosing schools.

### [EdScape — Release Notes (changelog)](https://edscape.dc.gov/page/edscape-release-notes)

_topics: methodology_

- **Format:** Web page (changelog)
- **Updated:** Updated with each release
- **Years on page:** 2021–2026 release history
- **Notes:** Best single page for tracking what data was added and when (e.g. May 2026: new 5- & 10-yr enrollment projections dashboard).

### [EdScape — Enrollment Patterns (cross-sector / where students attend)](https://edscape.dc.gov/page/enrollment-patterns-index)

_topics: enrollment, boundaries_

- **Format:** Interactive dashboards + Excel
- **Updated:** Annual+
- **Years on page:** Through SY2025-26 (foundations SY2013-14 on)
- **Notes:** In-boundary / out-of-boundary / charter enrollment, cross-sector & cross-ward flows, student commute, feeder patterns, grade progression. The core 'where students actually attend' analysis.
- **Data files (profiled):**
  - [`Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns Sector 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Sector_2026.xlsx) — **xlsx** — 12 tab(s)
    - tab **Introduction** (19 rows × 1 cols) — cols: `EdScape`
    - tab **Citywide** (406 rows × 5 cols) — cols: `School Year`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `Count of Students`, `Count of Students in Category`
    - tab **Ward 2022** (2,623 rows × 6 cols) — cols: `School Year`, `Student Ward`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `Count of Students in Ward`, `Count of Students in Category`
    - tab **Neighborhood** (12,884 rows × 7 cols) — cols: `School Year`, `Neighborhood Cluster`, `Neighborhood Cluster Names`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `Count of Students in Cluster`, `Count of Students in Category`
    - tab **Planning Area** (3,291 rows × 6 cols) — cols: `School Year`, `Comprehensive Planning Area`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `Count of Students in Planning Area`, `Count of Students in Category`
    - tab **Citywide_old** (162 rows × 5 cols) — cols: `School Choice Enrollment Category`, `School Year`, `Grade Band of Students Enrolled`, `Count of Students`, `Count of Students in Category`
    - tab **Ward_old** (785 rows × 6 cols) — cols: `Student Ward`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `School Year`, `Count of Students in Ward`, `Count of Students in Category`
    - tab **Neighborhood_old** (3,919 rows × 7 cols) — cols: `Neighborhood Cluster`, `Neighborhood Cluster Names`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `School Year`, `Count of Students in Cluster`, `Count of Students in Category`
    - tab **DCPS HS Boundary** (2,834 rows × 7 cols) — cols: `School Year`, `DCPS HS Zone Code`, `DCPS HS Zone`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `Count of Students in DCPS HS Boundary`, `Count of Students in Category`
    - tab **Variable Definitions** (11 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (42 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns Commute Paths 2024`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Commute%20Paths_2024.xlsx) — **xlsx** — 6 tab(s)
    - tab **Ch4 Stu Ward 2022-Sch Ward 2022** (52,875 rows × 11 cols) — cols: `School Year`, `School sector`, `Grade band of students enrolled`, `Student group`, `Student ward`, `School ward`, `Count of students`, `Median walk distance`, `School commute path`, `Share of students in student geography`, `Share of students in school geography`
    - tab **Ch4 Stu Plng Area-Sch Plng Area** (71,771 rows × 11 cols) — cols: `School Year`, `School sector`, `Grade band of students enrolled`, `Student group`, `Student planning area`, `School planning area`, `Count of students`, `Median walk distance`, `School commute path`, `Share of students in student geography`, `Share of students in school geography`
    - tab **Introduction** (15 rows × 1 cols) — cols: `EdScape`
    - tab **Variable Definitions** (29 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (29 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns Enrollments per DCPS Boundary 2025`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Enrollments%20per%20DCPS%20Boundary_2025.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (34 rows × 1 cols) — cols: `EdScape`
    - tab **EdScape_Chapter4_Public Sch sup** (19,472 rows × 31 cols) — cols: `School Year`, `DCPS Boundary School Code`, `DCPS Boundary`, `DCPS Boundary Grade Band`, `DCPS Boundary School Enrollment`, `Number of Grade-Specific Students Living In-boundary and Attending Boundary School`, `Number of Grade-Specific Students Living In-boundary`, `Percent In-boundary (%) [school]`, `Boundary Participation Rate (%) [boundary]`, `Number of DCPS Schools Attended by Grade-Specific Students Living in the Boundary`, `Number of PCS Schools Attended by Grade-Specific Students Living in the Boundary`, `Total Number of Public Schools Attended by Students Living in the Boundary` …
    - tab **Variable Definitions** (32 rows × 4 cols) — cols: `Category`, `Variable Name`, `Variable Definition`, `JC notes`
    - tab **Notes** (35 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns Distance 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Distance_2026.xlsx) — **xlsx** — 9 tab(s)
    - tab **Introduction** (20 rows × 1 cols) — cols: `EdScape`
    - tab **C4. Dist x Grade Band** (2,384 rows × 7 cols) — cols: `School Year`, `Grade Band of Students`, `School Choice Enrollment Category`, `Student Group`, `Average Walk Distance in Miles`, `Median Walk Distance in Miles`, `Count of Students in Category range`
    - tab **C4. Dist x GB x Ward** (18,186 rows × 8 cols) — cols: `School Year`, `Student Ward`, `Grade Band of Students`, `School Choice Enrollment Category`, `Student Group`, `Average Walk Distance in Miles`, `Median Walk Distance in Miles`, `Count of Students in Category range`
    - tab **C4. Dist x GB x NC** (82,264 rows × 9 cols) — cols: `School Year`, `Student Neighborhood Cluster`, `Neighborhood Cluster Names`, `Grade Band of Students`, `School Choice Enrollment Category`, `Student Group`, `Average Walk Distance in Miles`, `Median Walk Distance in Miles`, `Count of Students in Category range`
    - tab **C4. Dist x GB x OP** (22,511 rows × 8 cols) — cols: `School Year`, `Student Comprehensive Plan Planning Area`, `Grade Band of Students`, `School Choice Enrollment Category`, `Student Group`, `Average Walk Distance in Miles`, `Median Walk Distance in Miles`, `Count of Students in Category range`
    - tab **C4. Dist x GB x DCPS HS** (19,494 rows × 8 cols) — cols: `School Year`, `Student DCPS HS boundary`, `Grade Band of Students`, `School Choice Enrollment Category`, `Student Group`, `Average Walk Distance in Miles`, `Median Walk Distance in Miles`, `Count of Students in Category range`
    - tab **Variable Definitions** (13 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (42 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Enrollment Patterns — EdScape Chapter 1 Population and Students Where Students Miss School 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Where%20Students%20Miss%20School_2026.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (15 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.1 Where Students Miss School** (309 rows × 6 cols) — cols: `School Year`, `Geography Type`, `Geography`, `Grade Band`, `Chronic Absenteeism Rate`, `Count of Students`
    - tab **Variable Definitions** (7 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (20 rows × 1 cols) — cols: `Notes`
  - [`Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns Feeders 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Feeders_2026.xlsx) — **xlsx** — 8 tab(s)
    - tab **Introduction** (19 rows × 1 cols) — cols: `EdScape`
    - tab **Enrollment Paths** (76,258 rows × 14 cols) — cols: `From School Year`, `From LEA Name`, `From School code`, `From School Name`, `From Grade`, `From Feeder Pattern`, `To School Year`, `To LEA Name`, `To School code`, `To School Name`, `To Grade`, `To Feeder Pattern` …
    - tab **Citywide_old** (162 rows × 5 cols) — cols: `School Choice Enrollment Category`, `School Year`, `Grade Band of Students Enrolled`, `Count of Students`, `Count of Students in Category`
    - tab **Ward_old** (785 rows × 6 cols) — cols: `Student Ward`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `School Year`, `Count of Students in Ward`, `Count of Students in Category`
    - tab **Neighborhood_old** (3,919 rows × 7 cols) — cols: `Neighborhood Cluster`, `Neighborhood Cluster Names`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `School Year`, `Count of Students in Cluster`, `Count of Students in Category`
    - tab **Variable Definitions** (26 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (27 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns GPR 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_GPR_2026.xlsx) — **xlsx** — 12 tab(s)
    - tab **Introduction** (18 rows × 1 cols) — cols: `EdScape`
    - tab **Citywide** (337 rows × 9 cols) — cols: `Student Population`, `From School Year`, `To School Year`, `From Grade`, `To Grade`, `Count of Students in From Grade`, `Count of Students in To Grade`, `Grade Progression Ratio (GPR)`, `Kindergarten Cohort Year`
    - tab **Sector** (673 rows × 9 cols) — cols: `Student Population`, `From School Year`, `To School Year`, `From Grade`, `To Grade`, `Count of Students in From Grade`, `Count of Students in To Grade`, `Grade Progression Ratio (GPR)`, `Kindergarten Cohort Year`
    - tab **LEA** (3,986 rows × 9 cols) — cols: `Student Population (Local Education Agency (LEA) : LEA Code)`, `From School Year`, `To School Year`, `From Grade`, `To Grade`, `Count of Students in From Grade`, `Count of Students in To Grade`, `Grade Progression Ratio (GPR)`, `Kindergarten Cohort Year`
    - tab **School** (13,495 rows × 9 cols) — cols: `Student Population (LEA : School: School Code)`, `From School Year`, `To School Year`, `From Grade`, `To Grade`, `Count of Students in From Grade`, `Count of Students in To Grade`, `Grade Progression Ratio (GPR)`, `Kindergarten Cohort Year`
    - tab **DCPS Feeder Pattern** (910 rows × 9 cols) — cols: `Student Population: Schools in the DCPS Geographic Feeder Pattern`, `From School Year`, `To School Year`, `From Grade`, `To Grade`, `Count of Students in From Grade`, `Count of Students in To Grade`, `Grade Progression Ratio (GPR)`, `Kindergarten Cohort Year`
    - tab **Citywide_old** (162 rows × 5 cols) — cols: `School Choice Enrollment Category`, `School Year`, `Grade Band of Students Enrolled`, `Count of Students`, `Count of Students in Category`
    - tab **Ward_old** (785 rows × 6 cols) — cols: `Student Ward`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `School Year`, `Count of Students in Ward`, `Count of Students in Category`
    - tab **Neighborhood_old** (3,919 rows × 7 cols) — cols: `Neighborhood Cluster`, `Neighborhood Cluster Names`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `School Year`, `Count of Students in Cluster`, `Count of Students in Category`
    - tab **Variable Definitions** (10 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (19 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Population and Students — EdScape Chapter 4 Enrollment Patterns Total Public School Enrollment 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Total%20Public%20School%20Enrollment_2026.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (13 rows × 1 cols) — cols: `EdScape, or "education landscape," is a set of interactive visualizations and downloadable datasets to inform and support program and school planning in Washington, DC. EdScape is organized into five chapters.`
    - tab **Ch.4 Total Public School Enroll** (70 rows × 3 cols) — cols: `School Year`, `Public School Enrollment`, `Sector`
    - tab **Variable Definitions** (4 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (29 rows × 1 cols) — cols: `Notes`
  - [`Population and Students — EdScape Chapter 4 Enrollment Patterns Public School Enrollment by Grade 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Public%20School%20Enrollment%20by%20Grade_2026.xlsx) — **xlsx** — 6 tab(s)
    - tab **Introduction** (18 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.4 Public School x Grade Band** (211 rows × 4 cols) — cols: `Grade Band`, `School Year`, `Public School Enrollment`, `Sector`
    - tab **Ch.4 Public School x Grade** (629 rows × 4 cols) — cols: `Grade`, `School Year`, `Public School Enrollment`, `Sector`
    - tab **Variable Definitions** (15 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes ** (30 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)

### [EdScape — Public School Facilities (capacity/utilization/locations)](https://edscape.dc.gov/page/facilities-index)

_topics: facilities_

- **Format:** Interactive dashboards + maps + Excel
- **Updated:** Annual+
- **Years on page:** SY2013-14 through SY2025-26
- **Notes:** Building counts/locations, programmatic capacity, utilization (how full), unfilled seats, DCPS modernizations. Produced with DC PCSB, DCPS, OSSE, DGS — the cross-sector facilities view.

### [DME — Public Education Facility Planning](https://dme.dc.gov/service/public-education-facility-planning)

_topics: facilities, landing_

- **Format:** Web page (service hub)
- **Updated:** As-needed
- **Years on page:** 2018–present
- **Notes:** Hub for the Master Facilities Plan, all supplements, classification/utilization maps, vacant-facility info, and LEA-level enrollment (~115 DCPS + ~112 charter buildings).

### [DC Public Education Master Facilities Plan 2023](https://dme.dc.gov/mfp2023)

_topics: facilities, enrollment, projections_

- **Format:** Report PDF + Excel appendices (via Box)
- **Updated:** ~Every 5 years (full plan)
- **Years on page:** 2023 edition; projections ~decade forward
- **Notes:** Comprehensive facilities plan: conditions, utilization, enrollment trends/projections, capital investment, housing-pipeline impacts. Priors: MFP 2018 (dme.dc.gov/MFP2018).

### [2024 Master Facilities Plan Annual Supplement](https://dme.dc.gov/publication/2024-master-facilities-plan-supplement)

_topics: facilities, projections, enrollment_

- **Format:** Report PDF + Excel appendices
- **Updated:** Annual supplement
- **Years on page:** SY2024-25 data + 5/10-yr forward projections
- **Notes:** Released Sept 2025 (latest as of June 2026). Updated capacity/utilization and enrollment projections. Note: the freshest projections now live in EdScape rather than the MFP supplements.

### [DME — Boundary and Student Assignment Study 2023 (data supplement)](https://dme.dc.gov/page/boundary-and-student-assignment-study-2023-data-supplement)

_topics: boundaries, enrollment, demographics_

- **Format:** Excel datasheets + PDFs + interactive maps
- **Updated:** One-time study (2023)
- **Years on page:** SY2022-23 / SY2023-24 + historical trends
- **Notes:** School-level enrollment/demographics/capacity/distance, boundary map series, feeder patterns, population forecasts, PreK waitlists, utilization, segregation analysis.

### [DME — Download Data (legacy datasets)](https://dme.dc.gov/page/download-data)

_topics: enrollment, facilities, boundaries_

- **Format:** Downloadable Excel/CSV/PDF
- **Updated:** Legacy/archival
- **Years on page:** SY2014-15 through SY2023-24
- **Notes:** DEAD END as of June 2026 — this page no longer hosts files; it now just links out to EdScape and OpenData DC. The actual downloadable datasets (e.g. 'Enrollments per DCPS Boundary') moved to EdScape's chapter pages and are harvested under EdScape. Kept here because it's still the URL people get sent to.

### [DME — Interactive School Facility Maps](https://dme.dc.gov/page/interactive-school-facility-maps)

_topics: facilities_

- **Format:** Interactive Tableau maps + data downloads (recent years)
- **Updated:** Annual (one map per school year)
- **Years on page:** SY2015-16 through SY2025-26
- **Notes:** Standalone facility-location maps; content now also inside EdScape Ch.3. Early years lack downloadable data.

## My School DC — Common Lottery

_The single DCPS + charter application/lottery. Publishes lottery participation, match rates, and waitlist data._

### [My School DC — Lottery Data ('By the Numbers')](https://www.myschooldc.org/resources/data)

_topics: lottery, enrollment_

- **Format:** Report PDFs + Excel/CSV + interactive Tableau (waitlist movement)
- **Updated:** Annual; results each spring (Mar/Apr)
- **Years on page:** 2014 (first lottery) through 2026
- **Notes:** The common lottery (one application for DCPS + charters): applications by grade, seats offered, waitlists, match rates by ward/grade. Administered jointly by OSSE/DME. The citywide common-lottery demand/choice dataset.
- **Data files (profiled):**
  - [`Year over Year Comparisons — 20260602 MySchoolDC Tableau Data`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/20260602_MySchoolDC_Tableau_Data.xlsx) — **xlsx** — 3 tab(s)
    - tab **Notes** (26 rows × 2 cols) — cols: `My School DC Public Tableau Data`, `Release: 06/02/2026`
    - tab **Historic Lottery Results** (20,029 rows × 13 cols) — cols: `MSDC School Code`, `OSSE School Code`, `MSDC School Code and Grade`, `MSDC School Name`, `Grade Offered in Lottery`, `Lottery Year`, `Applications on Results Day`, `Lottery Seats Offered`, `Matches on Results Day`, `Waitlist Length on Results Day`, `Total Waitlist Offers made by June`, `Total Waitlist Offers made by August` …
    - tab **Matches by Preference** (60,189 rows × 8 cols) — cols: `Lottery Year`, `MSDC School Code`, `MSDC School Name`, `Grade Offered in Lottery`, `Preference Order`, `Preference Name`, `Preference Order and Name`, `Matches on Results Day by Preference`
  - [`Total applications and results from 2018 to 2026 lotteries`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Total_Applications.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): `20,987 5,366 15,621`
    - p1 table (2 rows): `8,905`
    - p1 table (2 rows): `8,907`
  - [`Lottery Data — Applicants by Grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Applicants_by_Grade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — Applications by Grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Applications_by_Grade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — Applications by Grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Applications_by_Grade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — Applicants by Grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Applicants_by_Grade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — applicants grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_grade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — applications bygrade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_applications_bygrade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — applications bygrade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_applications_bygrade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — applications bygrade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_applications_bygrade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — applications bygrade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applications_bygrade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — applications bygrade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applications_bygrade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — lottery number of applications by grade`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-number-of-applications-by-grade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — r1 applications bygrade`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_applications_bygrade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — r1 applications bygrade`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_applications_bygrade.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — Applications Seats Available`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Applications_Seats_Available.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): 
  - [`Lottery Data — Applications and Seats by Grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Applications_and_Seats_by_Grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (10 rows): 
  - [`Lottery Data — Applications and Seats by Grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Applications_and_Seats_by_Grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
  - [`Lottery Data — Applicants and Seats Offered by Grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Applicants_and_Seats_Offered_by_Grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — applications seats offered`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY22_23_L_applications_seats_offered.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — applications seats offered`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_applications_seats_offered.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — applications seats offered`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_applications_seats_offered.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — applications seats offered`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_applications_seats_offered.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — applications seats offered`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applications_seats_offered.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (16 rows): `Submitted Applications`, `Seats Offered in the Lottery`
  - [`Lottery Data — applications seats offered`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applications_seats_offered.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (16 rows): `Submitted Applications`, `Seats Offered in the Lottery`
  - [`Lottery Data — lottery applications and seats offered`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-applications-and-seats-offered.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (16 rows): `Submitted Applications`, `Seats Offered in the Lottery`
  - [`Lottery Data — r1 applications seats offered`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_applications_seats_offered.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (16 rows): `Submitted Applications`, `Seats Offered in the Lottery`
  - [`Lottery Data — r1 applications seats offered`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_applications_seats_offered.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (16 rows): `Submitted Applications`, `Seats Offered in the Lottery`
  - [`Lottery Data — Unique Applicants Waitlists`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Unique_Applicants_Waitlists.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — Unique Applicants Waitlisted`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Unique_Applicants_Waitlisted.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — Unique Applicants Waitlisted`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Unique_Applicants_Waitlisted.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — Unique Applicants Waitlisted`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Unique_Applicants_Waitlisted.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — applicants waitlisted`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_waitlisted.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — unique applicants waitlist`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_unique_applicants_waitlist.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — unique applicants waitlist`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_unique_applicants_waitlist.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — unique applicants waitlist`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_unique_applicants_waitlist.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): 
    - p1 table (2 rows): 
    - p1 table (2 rows): 
  - [`Lottery Data — applicants waitlist`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applicants_waitlist.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Unique Applicants on Waitlists`
  - [`Lottery Data — applicants waitlist`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applicants_waitlist.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Unique Applicants on Waitlists`
  - [`Lottery Data — lottery unique applicants on wls by grade`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-unique-applicants-on-wls-by-grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Unique Applicants on Waitlists`
  - [`Lottery Data — r1 applicants waitlist`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_applicants_waitlist.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Unique Applicants on Waitlists`
  - [`Lottery Data — r1 applicants waitlist`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_applicants_waitlist.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Unique Applicants on Waitlists`
  - [`Lottery Data — Applications Preferred Language`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Applications_Preferred_Language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — Applicants Language Percent`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Applicants_Language_Percent.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — Applicants Language`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Applicants_Language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — Applicants Language`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Applicants_Language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — applicants language`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — applicants preferred language`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_applicants_preferred_language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — applicants preferred language`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_applicants_preferred_language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — applicants preferred language`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_applicants_preferred_language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — applicants preferred language`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applicants_preferred_language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — applicants preferred language`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applicants_preferred_language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — lottery applicants by preferred language`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-applicants-by-preferred-language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — r1 applicants preferred language`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_applicants_preferred_language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — r1 applicants preferred language`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_applicants_preferred_language.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Language`, `Count`, `Percent`
  - [`Lottery Data — Distribution Applications Ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Distribution_Applications_Ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): `Ward`, `Distribution of Lottery Applications by Ward (SY26-27)`, `Distribution of Total Public School Enrollmentby Ward of Residence (SY24-25)`
  - [`Lottery Data — Applicants Ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Applicants_Ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): `Ward`, `Distribution of Lottery Applications by Ward (SY25-26)`, `Distribution of Total Public School Enrollmentby Ward of Residence (SY23-24)`
  - [`Lottery Data — Applicants Ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Applicants_Ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): `Ward`, `Distribution of Lottery Applications by Ward (SY24-25)`, `Distribution of Total Public School Enrollmentby Ward of Residence (SY22-23)`
  - [`Lottery Data — Applicants Ward`](https://www.myschooldc.org/sites/default/files/u396/SY23_24_Applicants_Ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): `Ward`, `Distribution of Total Public SchoolEnrollment by Ward of Residence (SY21-22*)`
  - [`Lottery Data — applicants Ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_Ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): `Ward`, `Distribution of Total Public SchoolEnrollment by Ward of Residence (SY21-22)`
  - [`Lottery Data — applicants byward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_applicants_byward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Ward 1`, `Distribution of Total Public School Enrollment by Ward of Residence 8%`
  - [`Lottery Data — applicants byward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_applicants_byward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Ward 1`, `Distribution of Total Public School Enrollment by Ward of Residence 8%`
  - [`Lottery Data — applications byward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_applications_byward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Ward 1`, `Distribution of Total Public School Enrollment by Ward of Residence 8%`
  - [`Lottery Data — applicants byward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applicants_byward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Ward 1`, `Distribution of Total Public School Enrollment by Ward of Residence 8%`
  - [`Lottery Data — applicants byward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applicants_byward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Ward 1`, `Distribution of Total 16-17 Public School Enrollment by Ward of Residence 8%`
  - [`Lottery Data — lottery distribution of applications by war`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-distribution-of-applications-by-war.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `Ward 1`, `Distribution of Total Public School Enrollment by Ward of Residence 10%`
  - [`Lottery Data — r1 applicants byward`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_applicants_byward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): `Ward`, `Distribution of Total Public School Enrollment by Ward of Residence`
  - [`Lottery Data — r1 applicants byward`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_applicants_byward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (9 rows): `Ward`, `Distribution of Total Public School Enrollment by Ward of Residence`
  - [`Lottery Data — Applicants Grade Ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Applicants_Grade_Ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`
  - [`Lottery Data — Applicants Grade Ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Applicants_Grade_Ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`
  - [`Lottery Data — Applicants Grade Ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Applicants_Grade_Ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`
  - [`Lottery Data — Applicants Grade Ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Applicants_Grade_Ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`, `Total Applicants in Ward`
  - [`Lottery Data — applicants grade ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_grade_ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`, `Total Applicants in Ward`
  - [`Lottery Data — applications byward grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_applications_byward_grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`, `Total Applicants in Ward`
  - [`Lottery Data — applications byward grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_applications_byward_grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`, `Total Applicants in Ward`
  - [`Lottery Data — applications byward grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_applications_byward_grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`, `Total Applicants in Ward`
  - [`Lottery Data — applications byward grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applications_byward_grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`, `Total Applicants in Ward`
  - [`Lottery Data — applications byward grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applications_byward_grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`, `Total Applicants in Ward`
  - [`Lottery Data — Lottery Applications byWardandGrade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/2016_Lottery_Applications_byWardandGrade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`, `Total Applicants in Ward`
  - [`Lottery Data — Applications byWardandGrade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/2015_R1_Applications_byWardandGrade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`, `Total Applicants in Ward`
  - [`Lottery Data — Applications byWardandGrade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/2014_R1_Applications_byWardandGrade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (12 rows): `Grade Level`, `Total Applicants in Ward`
  - [`Lottery Data — Match Rate Ward Residence`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Match_Rate_Ward_Residence.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (4 rows): 
  - [`Lottery Data — Match Rate Ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Match_Rate_Ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (4 rows): 
  - [`Lottery Data — Match Rate Ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Match_Rate_Ward.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — Match Rate Ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Match_Rate_Ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): 
  - [`Lottery Data — applicants match ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_match_ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (4 rows): 
  - [`Lottery Data — match rate ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_match_rate_ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): 
  - [`Lottery Data — match rate ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_match_rate_ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (4 rows): 
  - [`Lottery Data — match rate ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_match_rate_ward.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (4 rows): 
  - [`Lottery Data — match rate ward`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_match_rate_ward.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — 2017 Lottery Data Slides Match Rate by Ward of Residence`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/2017%20Lottery%20Data%20Slides%20-%20Match%20Rate%20by%20Ward%20of%20Residence.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — lottery match rate by ward of residence`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-match-rate-by-ward-of-residence.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — r1 match rate ward`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_match_rate_ward.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — r1 match rate ward`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_match_rate_ward.pdf) — **pdf** — 1 pages (narrative; no extractable tables)
  - [`Lottery Data — Median School Selection`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Median_School_Selection.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — Median School Choices by Grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Median_School_Choices_by_Grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — Median School Choices by Grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Median_School_Choices_by_Grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — Median School Choices by Grade`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Median_School_Choices_by_Grade.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — applicant median school selection`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicant_median_school_selection.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — median number selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_median_number_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — median number selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_median_number_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — median number selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_median_number_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — median number selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_median_number_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — 2017 Lottery Data Slides Median Number of School Selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/2017%20Lottery%20Data%20Slides%20-%20Median%20Number%20of%20School%20Selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — lottery median number of school selections`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-median-number-of-school-selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — r1 median number selections`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_median_number_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — r1 median number selections`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_median_number_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (32 rows): 
  - [`Lottery Data — Match Rate Grade School Selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Match_Rate_Grade_School_Selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of School Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — Match Grade School Selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Match_Grade_School_Selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of School Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — Match Grade School Selection`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Match_Grade_School_Selection.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of School Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — Match Grade School Selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Match_Grade_School_Selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Schools Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — match grade school selection`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_match_grade_school_selection.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Schools Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — match rate grade selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_match_rate_grade_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Schools Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — match rate grade selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_match_rate_grade_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Schools Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — match rate grade selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_match_rate_grade_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Schools Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — match rate grade selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_match_rate_grade_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Schools Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — 2017 Lottery Data Slides Match Rate by Grade and Number of School Selections`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/2017%20Lottery%20Data%20Slides%20-%20Match%20Rate%20by%20Grade%20and%20Number%20of%20School%20Selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Schools Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — lottery match rate by grade and number of s`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-match-rate-by-grade-and-number-of-s.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Schools Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — r1 match rate grade selections`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_match_rate_grade_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Schools Selected on Application`, `Overall Match Rate for Grade`
  - [`Lottery Data — r1 match rate grade selections`](http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_match_rate_grade_selections.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (18 rows): `Number of Schools Selected on Application`, `Overall Match Rate for Grade`
  - [`My School DC Process and Requirements to Conduct Research`](https://www.myschooldc.org/sites/default/files/u21/MSDC_Data_Request_Process.pdf) — **pdf** — 6 pages (narrative; no extractable tables)
  - [`Giving At-Risk Students Preference in a Unified Lottery for Public Schools`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/MSDC%20At-Risk%20Preference%20in%20a%20Unified%20Lottery%204.26.2018_Final.pdf) — **pdf** — 27 pages, **extractable tables** on ~10 page(s)
    - p4 table (6 rows): `Denver Public Schools gives a`
    - p8 table (4 rows): `Weighting`, `Light weighting`, `Student random lottery number is multiplied by .75, reducing it by`
    - p8 table (2 rows): `Priority to Sibling`, `Preference is placed just ahead of sibling preference (different at`
  - [`Dual Language Immersion Demand`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/Dual%20Language%20Immersion%20Demand%20Research%20FINAL.pdf) — **pdf** — 19 pages, **extractable tables** on ~19 page(s)
    - p1 table (6 rows): 
    - p2 table (4 rows): 
    - p3 table (4 rows): 

## Open Data DC / DCGIS

_The city's open-data and GIS portal. Machine-readable school locations and attendance-zone boundaries._

### [Open Data DC — DC Public Schools (point locations)](https://opendata.dc.gov/datasets/dc-public-schools/about)

⚠️ JS app (open in a browser) · _topics: profiles, gis_

- **Format:** GIS — Shapefile / GeoJSON / CSV / KML + ArcGIS REST API
- **Updated:** Updated as schools change (~annually)
- **Years on page:** Current/live snapshot
- **Notes:** Point locations of every DCPS campus. ArcGIS layer: Education_WebMercator/MapServer layer 5. /about page is client-rendered; metadata verified via data.gov mirror.
- **Data files (profiled):**
  - [`DC Public Schools locations (CSV export)`](https://opendata.dc.gov/api/download/v1/items/4ac321b2d409438ebd76a6569ad94034/csv?layers=5) — **csv** — 124 rows × 36 cols
    - cols: `X`, `Y`, `NAME`, `ADDRESS`, `FACUSE`, `LEVEL_`, `STATUS`, `PHONE`, `TOTAL_STUD`, `SSL`, `GIS_ID`, `WEB_URL`

### [Open Data DC — DC Charter Schools (point locations)](https://opendata.dc.gov/datasets/DCGIS::dc-charter-schools/about)

⚠️ JS app (open in a browser) · _topics: profiles, gis_

- **Format:** GIS — Shapefile / GeoJSON / CSV / KML + ArcGIS REST API
- **Updated:** Updated as campuses change (~annually)
- **Years on page:** Current/live snapshot
- **Notes:** Point locations of every charter campus. Same MapServer (layer 1) as DCPS schools.
- **Data files (profiled):**
  - [`DC Charter Schools locations (CSV export)`](https://opendata.dc.gov/api/download/v1/items/a3832935b1d644e48c887e6ec5a65fcd/csv?layers=1) — **csv** — 150 rows × 34 cols
    - cols: `X`, `Y`, `NAME`, `ADDRESS`, `DIRECTOR`, `PHONE`, `AUTHORIZER`, `GRADES`, `ENROLLMENT`, `GIS_ID`, `WEB_URL`, `AUTHORIZAT`

### [Open Data DC — School Attendance Zones (ES/MS/HS boundaries)](https://opendata.dc.gov/datasets/DCGIS::school-attendance-zones-elementary/about)

⚠️ JS app (open in a browser) · _topics: boundaries, gis_

- **Format:** GIS polygon layers — Shapefile / GeoJSON / CSV + ArcGIS REST API
- **Updated:** Updated on boundary revisions
- **Years on page:** Current; historical layers SY10-11→SY22-23
- **Notes:** DCPS in-boundary zone polygons (only DCPS has zones; charters don't). HS zones are spread across multiple vintage MapServer layers — the most fragmented GIS data. DME also posts shapefiles at dme.dc.gov/page/new-boundary-shape-files.

## DC Policy Center (third party)

_Nonprofit think tank. Its annual 'State of D.C. Schools' and data tools synthesize and visualize OSSE/DME source data._

### [DC Policy Center — State of D.C. Schools (annual)](https://www.dcpolicycenter.org/publications/stateofdcschools2024-25/)

_topics: enrollment, assessment, graduation, attendance, educators, landing_

- **Format:** Web page + full report PDF + one-pager (EN/ES)
- **Updated:** Annual, spring (March)
- **Years on page:** Annual series 2018-19 through 2024-25 (7 editions)
- **Notes:** Best single narrative synthesis of the whole system (DCPS + charters), built on OSSE/DME source data. Produced with Education Forward DC. Hub: dcpolicycenter.org/education-policy-initiative/.

## U.S. Census Bureau

_School-age / under-18 population — the citywide denominator for enrollment-planning and capture-rate analysis._

### [U.S. Census ACS — DC school-age / under-18 population](https://data.census.gov/)

_topics: population, projections_

- **Format:** Web tables / CSV / Census Data API
- **Updated:** Annual (ACS 1-yr citywide; 5-yr for ward/tract)
- **Years on page:** ACS 1-yr 2005–2024; 5-yr 2009–2024
- **Notes:** Tables S0101 (Age) and B09001 (Under 18) — the citywide school-age denominator for capture-rate / demand analysis that DME and DC Policy Center use against enrollment and births.

## EmpowerK12 (third party)

_Nonprofit that builds the interactive dashboards over OSSE Report Card data that OSSE/PCSB do not host themselves._

### [EmpowerK12 — DC school accountability/outcomes dashboards](https://www.empowerk12.org/data-dashboard-source/dc-new-school-ratings)

_topics: accountability, assessment_

- **Format:** Interactive dashboards
- **Updated:** Updated when OSSE releases
- **Years on page:** Recent years
- **Notes:** Nonprofit-built interactive dashboards over OSSE Report Card raw data (DCPS + charters together) — useful because OSSE/PCSB host few interactive views themselves.

## How sources differ (same metric, multiple places)

Some metrics are published in several places. For each, the places it appears and how each one is scoped — descriptive, not a recommendation.

### Enrollment counts

OSSE publishes the cross-sector audited fall count (by school; used for funding). DCPS and PCSB each publish their own sector's slice — DCPS by school/grade, PCSB by tier/ward plus market-share analysis. EdScape geocodes the OSSE figures to neighborhoods/wards/boundaries and adds projections. The Report Card shows per-school enrollment. Counts can differ by rounding, vintage, or small-cell suppression.

Where it appears:
- [Audited Enrollment Reports & Data](https://osse.dc.gov/enrollment) (OSSE)
- [DCPS Data Set — Enrollment](https://dcps.dc.gov/publication/dcps-data-set-enrollment) (DCPS)
- [Charter Student Enrollment](https://dcpcsb.org/student-enrollment) (DC PCSB)
- [EdScape — Enrollment Patterns (cross-sector / where students attend)](https://edscape.dc.gov/page/enrollment-patterns-index) (DME)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) (OSSE)

### School accountability ratings

Two different scales. OSSE's STAR rating is 1–5 stars and covers both DCPS and charters. DC PCSB's School Quality Report (SQR), built on the ASPIRE system, scores charters 0–100 with Tier 1/2/3 (charters only). The older PMF (archived at 2018-19) is a separate charter tiering. EmpowerK12 re-presents the OSSE STAR data interactively. A charter can carry both a STAR rating and an SQR tier; they're not the same scale, so note which framework and year a score/tier is from.

Where it appears:
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) (OSSE)
- [DC School Report Card & STAR Framework Technical Guide](https://osse.dc.gov/publication/dc-school-report-card-and-star-framework-technical-guide) (OSSE)
- [School Quality Report (SQR)](https://dcpcsb.org/families/school-quality-report) (DC PCSB)
- [ASPIRE System (current charter accountability framework)](https://dcpcsb.org/aspire-system) (DC PCSB)
- [Performance Management Framework (PMF) — archive](https://dcpcsb.org/performance-management-framework-pmf) (DC PCSB)
- [EmpowerK12 — DC school accountability/outcomes dashboards](https://www.empowerk12.org/data-dashboard-source/dc-new-school-ratings) (EmpowerK12)

### Assessment / proficiency (ELA & math)

OSSE administers DC CAPE (formerly PARCC) and MSAA and posts cross-sector results; the Report Card displays them per school. DCPS and PCSB each post their own sector's subset. Sector pages can lag OSSE's release and may apply different suppression.

Where it appears:
- [Statewide Assessment Results 2024-25 (DC CAPE / MSAA)](https://osse.dc.gov/assessmentresults2025) (OSSE)
- [Statewide Assessment Results 2023-24 (+ older-year archive index)](https://osse.dc.gov/assessmentresults2024) (OSSE)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) (OSSE)
- [DCPS Downloadable Data Sets (index)](https://dcps.dc.gov/service/dcps-downloadable-data-sets) (DCPS)
- [Statewide Assessment Results (charter)](https://dcpcsb.org/test-results-parcc) (DC PCSB)

### Graduation rate (ACGR)

OSSE publishes the cross-sector 4- and 5-year ACGR with subgroups. DCPS posts the DCPS-only subset of the same calculation; the Report Card shows it per school.

Where it appears:
- [High School Graduation Rates / ACGR](https://osse.dc.gov/service/high-school-graduation-rates-0) (OSSE)
- [DCPS Data Set — Graduation Rates](https://dcps.dc.gov/node/1018352) (DCPS)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) (OSSE)

### Attendance / chronic absenteeism

OSSE publishes citywide chronic absenteeism and chronic truancy (a 10% threshold). DCPS's at-a-glance PDFs are district-level aggregates; PCSB's report is charter-only. Note that 'attendance rate' and 'chronic absenteeism' are different measures.

Where it appears:
- [School Year Attendance Reporting (chronic absenteeism/truancy)](https://osse.dc.gov/page/2024-25-school-year-attendance-reporting) (OSSE)
- [OSSE Attendance Dashboard](https://osse.dc.gov/attendancedashboard) (OSSE)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) (OSSE)
- [DCPS at a Glance: Attendance](https://dcps.dc.gov/node/1185940) (DCPS)
- [Annual Discipline & Attendance Report (charter)](https://dcpcsb.org/attendance-and-discipline-report) (DC PCSB)

### Discipline (suspensions/expulsions)

OSSE's 'State of Discipline' report and the Report Card carry current cross-sector discipline data (by-school detail in PDF appendices). PCSB's School Equity Reports carried charter discipline/mobility through SY2017-18; later charter discipline appears in the OSSE data.

Where it appears:
- [OSSE Discipline Report ('State of Discipline')](https://osse.dc.gov/page/discipline-report) (OSSE)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) (OSSE)
- [School Equity Reports (charter)](https://dcpcsb.org/school-equity-reports) (DC PCSB)
- [Annual Discipline & Attendance Report (charter)](https://dcpcsb.org/attendance-and-discipline-report) (DC PCSB)

### Demographics (race, SWD, EL, at-risk)

OSSE's Report Card 'Aggregate Enrollment Data' Excel breaks enrollment down by race/SWD/EL/at-risk at the school level. EdScape recasts it by neighborhood/ward. DCPS and PCSB pages cover their own sector, often as district/sector totals. Small subgroups may be suppressed (0%/100% hidden).

Where it appears:
- [Report Card Aggregate Enrollment Data (demographics file)](https://osse.dc.gov/page/dc-school-report-card-resource-library) (OSSE)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) (OSSE)
- [EdScape (education landscape tool)](https://edscape.dc.gov/) (DME)
- [DCPS at a Glance: Enrollment](https://dcps.dc.gov/node/966292) (DCPS)
- [Charter Student Enrollment](https://dcpcsb.org/student-enrollment) (DC PCSB)

### Per-pupil money

These measure different things. OSSE's ESSA per-pupil reports are actual EXPENDITURE (cross-sector, ex-post). DCPS's budget portal is ALLOCATIONS under the three-factor model (ex-ante, DCPS only). PCSB's finance pages are charter actuals/audits. An allocation and an expenditure aren't the same number.

Where it appears:
- [Report Card School Finance Data (per-pupil expenditures)](https://osse.dc.gov/page/dc-school-report-card-resource-library) (OSSE)
- [DCPS Budget Transparency Portal](https://dcpsbudget.com/) (DCPS)
- [Charter School Finances (spending, budgets, audits, 990s)](https://dcpcsb.org/school-finances) (DC PCSB)

### Facilities, capacity & utilization

EdScape Ch.3 and the Master Facilities Plan give cross-sector capacity, utilization, and projections (DME, with OSSE/DCPS/PCSB/DGS). DCPS's modernizations page and DGS cover DCPS capital projects.

Where it appears:
- [EdScape — Public School Facilities (capacity/utilization/locations)](https://edscape.dc.gov/page/facilities-index) (DME)
- [DC Public Education Master Facilities Plan 2023](https://dme.dc.gov/mfp2023) (DME)
- [2024 Master Facilities Plan Annual Supplement](https://dme.dc.gov/publication/2024-master-facilities-plan-supplement) (DME)
- [DCPS Modernizations](https://dcps.dc.gov/page/modernizations) (DCPS)
- [DME — Interactive School Facility Maps](https://dme.dc.gov/page/interactive-school-facility-maps) (DME)

### Boundaries & feeder patterns

Only DCPS has attendance boundaries/feeders (charters are citywide-choice). DCPS publishes the feeder PDFs and an address lookup; Open Data DC has the GIS boundary polygons (current and historical); DME holds the boundary policy and the 2023 study data; EdScape shows how enrollment flows across boundaries.

Where it appears:
- [DCPS Feeder Patterns](https://dcps.dc.gov/feederpatterns) (DCPS)
- [Find Your In-Boundary School (address lookup)](https://enrolldcps.dc.gov/node/41) (DCPS)
- [Open Data DC — School Attendance Zones (ES/MS/HS boundaries)](https://opendata.dc.gov/datasets/DCGIS::school-attendance-zones-elementary/about) (Open Data DC)
- [DME — Boundary and Student Assignment Study 2023 (data supplement)](https://dme.dc.gov/page/boundary-and-student-assignment-study-2023-data-supplement) (DME)
- [EdScape — Enrollment Patterns (cross-sector / where students attend)](https://edscape.dc.gov/page/enrollment-patterns-index) (DME)

### School directory / locations

Open Data DC has machine-readable locations (separate DCPS and charter GIS layers). DCPS Profiles and PCSB School Profiles/Directory are the human-browsable directories for each sector; the Report Card lists both. School-ID crosswalks: the DCPS School Directory PDF and the OSSE enrollment files.

Where it appears:
- [Open Data DC — DC Public Schools (point locations)](https://opendata.dc.gov/datasets/dc-public-schools/about) (Open Data DC)
- [Open Data DC — DC Charter Schools (point locations)](https://opendata.dc.gov/datasets/DCGIS::dc-charter-schools/about) (Open Data DC)
- [DCPS School Profiles ('Find a School')](https://profiles.dcps.dc.gov/) (DCPS)
- [School Profiles / Find a DC Public Charter School](https://www.dcpcsb.org/school-profiles) (DC PCSB)
- [Public Charter School Directory (annual PDF)](https://www.dcpcsb.org/2025-26-public-charter-school-directory) (DC PCSB)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) (OSSE)

### Educator workforce

OSSE's Educator Workforce page carries the full flat files — counts & demographics, preparation & performance, retention, and supply/demand — for DCPS and charter educators, plus retention briefs and Educator Preparation Provider (EPP) data. The DC School Report Card "Educator Data" file is a smaller slice scoped to the accountability framework (the educator measures shown per school). Both are OSSE; the workforce page is the fuller dataset, the Report Card file the framework subset.

Where it appears:
- [DC Educator Workforce Data](https://osse.dc.gov/page/dc-educator-workforce-data) (OSSE)
- [DC School Report Card Resource Library (downloads)](https://osse.dc.gov/page/dc-school-report-card-resource-library) (OSSE)

### Special education (students with disabilities)

OSSE's Specialized Education page publishes the IDEA Part B State Performance Plan / Annual Performance Report — the federal compliance indicators and outcomes specific to students with disabilities (SWD) — plus the SPP/SSIP policy documents. Everywhere else, SWD appear as a "Student Group" broken out within the general assessment, attendance, and discipline files. The APR is the dedicated SWD dataset; the Report Card / assessment subgroup is SWD seen within the general metrics.

Where it appears:
- [Specialized Education Data and Reports](https://osse.dc.gov/service/specialized-education-data-and-reports) (OSSE)
- [DC School Report Card Resource Library (downloads)](https://osse.dc.gov/page/dc-school-report-card-resource-library) (OSSE)
- [Statewide Assessment Results 2024-25 (DC CAPE / MSAA)](https://osse.dc.gov/assessmentresults2025) (OSSE)

### Early childhood / Pre-K

OSSE's Pre-K annual reports are the narrative "State of Pre-K" (access, quality, enrollment trends); the Early Learning page covers program quality and subsidy/finance; the enrollment audit holds the official PK3/PK4 headcount that other sources cite. Pre-K enrollment also appears inside the general enrollment files, not just the early-childhood-specific ones.

Where it appears:
- [Pre-Kindergarten Reports ('State of Pre-K in DC')](https://osse.dc.gov/publication/pre-kindergarten-reports-state-pre-k-district-columbia) (OSSE)
- [Early Learning Reports (child care, subsidy, Pay Equity Fund)](https://osse.dc.gov/page/early-learning-reports) (OSSE)
- [Audited Enrollment Reports & Data](https://osse.dc.gov/enrollment) (OSSE)

## Known gaps & files needing a browser

**Profiling status (last run):** 452 of 453 catalogued files download and profile cleanly · 1 still need a browser to resolve · 0 failed.

Many high-value files (OSSE assessment results, PCSB finance/equity docs) are published behind **Box.com / Egnyte share links** or on **JS-rendered pages** with no scrapeable direct URL. Those are harvested with a browser (Playwright) via the update skill and added to `data_files.yaml` — which is why most now resolve. Box `file_id`s change year to year, so they need periodic re-resolving.

Currently flagged `needs_browser` (resolve in a browser):
- 2019 DC School Report Card and STAR Framework Cross-Tabulated Data File → https://app.box.com/s/tb3ipg32wo48di3ph58llnpim5632fn9

_No download/profile errors on the last run._

Other structural notes: Egnyte share links return an HTML landing page to scripts (not fetchable — counts are recorded in source notes); the PCSB site returns intermittent 520s; the live Report Card is a JS app (use the Resource Library files for analysis); discipline by-school detail is in PDF appendices; STAR (OSSE) and SQR/PMF/ASPIRE (PCSB) are different rating systems.

---
_Generated from `sources.yaml` + `file_profiles.json` by `generate_readme.py`. Sources last verified 2026-06._
