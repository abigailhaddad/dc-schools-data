# DC K-12 Public Schools — Data Source Catalog

A map of **where DC public-school data actually lives** — across OSSE, DCPS, the DC Public Charter School Board (DC PCSB), and the Deputy Mayor for Education (DME). The data is real but scattered: split across agencies, buried on Tableau, with old years on different pages than new ones, and the *same* metric often published in several places that don't quite agree. This catalog links each source, says **which one to trust**, and — where files are directly downloadable — inventories their **tabs and columns**.

> **Scope:** K-12 public (DCPS + charters). No higher ed.  
> **Last verified:** 2026-06  
> **Source of truth:** [`sources.yaml`](sources.yaml) + [`data_files.yaml`](data_files.yaml). Do not edit this README by hand — run `python generate_readme.py`.

## How this repo works

| File | Purpose |
| --- | --- |
| [`sources.yaml`](sources.yaml) | Hand-curated catalog of every data source + the overlap analysis. **Edit this.** |
| [`data_files.yaml`](data_files.yaml) | Direct download URLs for individual files (xlsx/csv/pdf). **Edit this.** |
| [`profile_files.py`](profile_files.py) | Downloads each file and extracts its tabs/columns (xlsx/csv) or pages/text (pdf) → `file_profiles.json`. |
| [`generate_readme.py`](generate_readme.py) | Renders this README from the YAML + profiles. |
| `update-dc-schools-data` skill | The process for re-verifying links, finding new files, and regenerating. |

**Authority** — who to trust when sources disagree:

- 🟢 **authoritative** — the official system of record for this metric
- 🟡 **derived** — a single-sector subset (DCPS-only / charter-only) re-published from the authoritative source
- 🔵 **republished** — the same numbers re-hosted or re-analyzed, usually pointing back to the source
- ⚪ **third-party** — built by a non-government org from official data

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
- [⚠️ Same data, multiple places (what differs)](#-same-data-multiple-places-what-differs)
- [Known gaps & files needing a browser](#known-gaps--files-needing-a-browser)

## OSSE — Office of the State Superintendent of Education

_DC's state education agency. Authoritative cross-sector (DCPS + charter) source for enrollment, assessments, attendance, graduation, discipline, finance, and the DC School Report Card / STAR ratings._

### [OSSE Data and Reports (main landing)](https://osse.dc.gov/page/data-and-reports-0)

🟢 authoritative · _topics: landing, enrollment, assessment, attendance, graduation, discipline, finance, demographics_

- **Format:** Web portal of links to files & dashboards
- **Updated:** Rolling; underlying datasets annual
- **Years on page:** Links span SY2014-15 to SY2024-25 by dataset
- **Notes:** Top-level 'hub of hubs.' Best fallback when a specific per-year page URL changes.

### [DC School Report Card Resource Library (downloads)](https://osse.dc.gov/page/dc-school-report-card-resource-library)

🟢 authoritative · _topics: assessment, attendance, graduation, discipline, enrollment, demographics, finance, educators_

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

🟢 authoritative · ⚠️ JS app (open in a browser) · _topics: accountability, assessment, attendance, graduation, discipline, enrollment, demographics, profiles_

- **Format:** Interactive web app (search/browse; not bulk download)
- **Updated:** Annual, refreshed ~December with prior school year
- **Years on page:** Displays latest year only (SY2024-25); history in the Resource Library
- **Notes:** Cross-sector (DCPS + charter). Mirror at schoolreportcard.dc.gov/home and osse.dc.gov/dcschoolreportcard. JS app blocks crawlers (503) — open in a real browser. For analysis use the Resource Library files.
- **Data files (profiled):**
  - [`School STAR Scores (CSV export)`](https://opendata.dc.gov/api/download/v1/items/90b2efbd069842f29817615611619c9b/csv?layers=0) — **csv** — 203 rows × 9 cols
    - cols: `LEA_Code`, `LEA_Name`, `School_Code`, `School_Name`, `School_Type`, `Ward`, `STAR_Score`, `STAR_Rating`, `ObjectId`

### [DC School Report Card & STAR Framework Technical Guide](https://osse.dc.gov/publication/dc-school-report-card-and-star-framework-technical-guide)

🟢 authoritative · _topics: accountability, methodology_

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

🟢 authoritative · _topics: assessment_

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

🟢 authoritative · _topics: assessment_

- **Format:** Excel (Box) + PDF
- **Updated:** Annual
- **Years on page:** 2023-24 on page; also indexes 2022-23, 2021-22, 2018-19, 2017-18, 2016-17, 2015-16, 2014-15
- **Notes:** Best entry point for OLDER assessment years. URL pattern changed over time: old years use /page/YYYY-YY-parcc-and-msaa-..., new years use /assessmentresultsYYYY — a key fragmentation point.
- **Data files (profiled):**
  - [`DC Public Schools Student Assessment Results (CSV export)`](https://opendata.dc.gov/api/download/v1/items/85fce54dea6946dea827c02a6bda88bb/csv?layers=23) — **csv** — 189,364 rows × 23 cols
    - cols: `OBJECTID`, `SCHOOL_YEAR`, `SCHOOL_WARD`, `SCHOOL_CODE`, `SCHOOL_NAME`, `LEA_CODE`, `LEA_NAME`, `ASSESSMENT_TYPE`, `SUBJECT`, `TESTED_GRADE_SUBJECT`, `GRADE_OF_ENROLLMENT`, `SUBGROUP`

### [Audited Enrollment Reports & Data](https://osse.dc.gov/enrollment)

🟢 authoritative · _topics: enrollment, demographics_

- **Format:** Per-year PDF audit report + Excel (.xlsx) data
- **Updated:** Annual; fall count, finalized ~winter (Jan/Feb)
- **Years on page:** FY2012 (SY2011-12) → FY2026; older 2006–2010 section; SLED hosts 2001–2009
- **Notes:** THE canonical enrollment source — independently audited per DC Code 38-1804.02. Drives per-pupil funding. DCPS, PCSB, EdScape and the MFP all build on this. Each year is a separate click-through page. Note OSSE data-suppression policy hides 0%/100% small-subgroup values.

### [Report Card Aggregate Enrollment Data (demographics file)](https://osse.dc.gov/page/dc-school-report-card-resource-library)

🟢 authoritative · _topics: demographics, enrollment_

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

🟢 authoritative · _topics: demographics, special-education_

- **Format:** PDF + Excel
- **Updated:** Annual (federal FFY cycle)
- **Years on page:** Reports to the Public FFY2008–FFY2023-24; APRs FFY2020–2024
- **Notes:** Mostly statewide/aggregate. For school-level special-ed counts use the Report Card Aggregate Enrollment file or EdScape.

### [School Year Attendance Reporting (chronic absenteeism/truancy)](https://osse.dc.gov/page/2024-25-school-year-attendance-reporting)

🟢 authoritative · _topics: attendance_

- **Format:** PDF report + 2 mid-year briefs + Excel files
- **Updated:** Full report ~November; mid-year briefs during the year
- **Years on page:** 2024-25 on page; 2023-24 at /attendancesy202324; earlier years on own pages
- **Notes:** OSSE leads with chronic absenteeism / chronic truancy (10% threshold), not 'in-seat attendance.' SY24-25: 39.5% chronic absenteeism, 36.8% chronic truancy.
- **Data files (profiled):**
  - [`District of Columbia Attendance Report 2024-25`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024-25%20Attendance%20Report.pdf) — **pdf** — 50 pages, **extractable tables** on ~4 page(s)
    - p41 table (21 rows): `Year`, `Metric`, `Percentage`, `Students`
    - p42 table (24 rows): `Grade`, `Absenteeism Risk Tier`, `Percentage`, `Students`, `Total`
    - p43 table (25 rows): `Grade`, `Absenteeism Risk Tier`, `Percentage`, `Students`, `Total`

### [OSSE Attendance Dashboard](https://osse.dc.gov/attendancedashboard)

🟢 authoritative · _topics: attendance_

- **Format:** Interactive dashboard + user-guide PDF
- **Updated:** Monthly updates (cumulative year-to-date, not real-time)
- **Years on page:** Current school year (rolling); history via annual report pages
- **Notes:** Citywide DCPS + charter. Embedded viz needs a browser to render.

### [High School Graduation Rates / ACGR](https://osse.dc.gov/service/high-school-graduation-rates-0)

🟢 authoritative · _topics: graduation_

- **Format:** Recent years: direct Excel (.xlsx); older years: /publication/ pages
- **Updated:** Annual, released ~winter for prior spring cohort
- **Years on page:** 2024-25 back to 2010-11 (+2009) — ~15 years
- **Notes:** Cross-sector (DCPS + charter), 4-yr and 5-yr ACGR with subgroups. 2020-21+ link straight to .xlsx; 2019-20 and earlier use /publication/ pages — a fragmentation point. SY24-25: 78.7% 4-yr.

### [OSSE Discipline Report ('State of Discipline')](https://osse.dc.gov/page/discipline-report)

🟢 authoritative · _topics: discipline_

- **Format:** PDF reports (school detail in appendices); rare supplementary Excel
- **Updated:** Annual (latest 2024-25 dated 12/30/2025)
- **Years on page:** 2013-14 through 2024-25 (2014-15 appears missing)
- **Notes:** Suspensions/expulsions/involuntary dismissals per the Student Fair Access to School Act. Mostly PDF — only 2017-18 has a clean supplementary Excel; by-school data otherwise lives in report appendices.

### [Report Card School Finance Data (per-pupil expenditures)](https://osse.dc.gov/page/dc-school-report-card-resource-library)

🟢 authoritative · _topics: finance_

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

🟢 authoritative · _topics: educators_

- **Format:** PDF reports + Excel (.xlsx) at state/LEA/school level
- **Updated:** Comprehensive reports biennial; retention briefs annual
- **Years on page:** Reports 2018-19, 2021-22, 2023-24; data files 2021-22 to 2024-25
- **Notes:** Counts, demographics, preparation, retention, supply/demand for DCPS + charter educators. Staffing snapshot as of Oct 5 each year.

### [Pre-Kindergarten Reports ('State of Pre-K in DC')](https://osse.dc.gov/publication/pre-kindergarten-reports-state-pre-k-district-columbia)

🟢 authoritative · _topics: early-childhood, enrollment_

- **Format:** PDF
- **Updated:** Annual
- **Years on page:** 2012 through 2024
- **Notes:** Narrative + summary stats on pre-K access/quality, not a granular by-school dataset.

### [Early Learning Reports (child care, subsidy, Pay Equity Fund)](https://osse.dc.gov/page/early-learning-reports)

🟢 authoritative · _topics: early-childhood, finance_

- **Format:** PDF + linked data
- **Updated:** Mixed — quarterly subsidy/educator reports; cost model every ~3 years
- **Years on page:** Cost model 2016/2018/2021/2023/2024; Pay Equity Fund FY25–FY26
- **Notes:** Best entry for early childhood beyond pre-K enrollment.

### [DC ESSA State Plan](https://osse.dc.gov/essa)

🟢 authoritative · _topics: accountability, methodology_

- **Format:** Web page linking PDFs
- **Updated:** Updated on amendment
- **Years on page:** 2017 original; 2022 amendment (approved June 2023); 2026-27 waiver pending
- **Notes:** Defines the STAR framework, the 16 measures, weights, and assessment requirements.

### [SLED — Statewide Longitudinal Education Data (OSSE Reports)](https://sled.osse.dc.gov/info/OSSE-Reports/)

🟢 authoritative · 🔒 login required · _topics: enrollment, assessment, graduation, landing_

- **Format:** Public PDF/Excel/Tableau links + login-gated Qlik Sense reports
- **Updated:** Varies; most annual
- **Years on page:** Includes historical enrollment-audit Excel SY2001–2009
- **Notes:** Two-tier: public direct links vs. credentialed access (SLED login + user agreement) for the main Reports portal.

## DCPS — DC Public Schools

_The traditional public school district. Publishes its own (DCPS-only) enrollment, outcomes, budgets, surveys, profiles, and facilities data — much of it a subset of OSSE's._

### [DCPS School Data (data hub landing)](https://dcps.dc.gov/service/school-data)

🟡 derived (sector subset) · _topics: landing_

- **Format:** Web page (link directory)
- **Updated:** As underlying resources change
- **Years on page:** n/a (directory)
- **Notes:** The intended front door for DCPS data, but many items live one or two clicks deeper.

### [DCPS at a Glance: Enrollment](https://dcps.dc.gov/node/966292)

🟡 derived (sector subset) · _topics: enrollment, demographics_

- **Format:** Web page, static HTML tables
- **Updated:** Annual, after fall audited-enrollment release
- **Years on page:** SY17-18 through SY25-26 shown inline
- **Notes:** District TOTALS only (not school-by-school). For school-level use the downloadable dataset or OSSE.

### [DCPS at a Glance: Attendance](https://dcps.dc.gov/node/1185940)

🟡 derived (sector subset) · _topics: attendance_

- **Format:** PDF reports (one per year)
- **Updated:** Annual
- **Years on page:** SY11-12 through SY24-25 (14 reports)
- **Notes:** District-level aggregate, filed per DC Code 38-203(i). Granular school-level attendance is better via OSSE.

### [DCPS Downloadable Data Sets (index)](https://dcps.dc.gov/service/dcps-downloadable-data-sets)

🟡 derived (sector subset) · _topics: enrollment, assessment, graduation, attendance_

- **Format:** Web page indexing Excel (.xlsx) files
- **Updated:** Varies by dataset
- **Years on page:** Varies by dataset
- **Notes:** Index of school-and-subgroup-level files: Enrollment, Graduation, DC CAS, SAT, AP, PARCC, Attendance. Each metric is a separate page of yearly Excel files rather than one tidy multi-year table.

### [DCPS Data Set — Enrollment](https://dcps.dc.gov/publication/dcps-data-set-enrollment)

🟡 derived (sector subset) · _topics: enrollment_

- **Format:** Excel (.xlsx), one file per year
- **Updated:** Annual, after audit certification
- **Years on page:** Multiple years (separate files)
- **Notes:** DCPS-only, school-by-school by grade. Derived from / overlaps OSSE audited enrollment (the cross-sector authority).

### [DCPS Data Set — Graduation Rates](https://dcps.dc.gov/node/1018352)

🟡 derived (sector subset) · _topics: graduation_

- **Format:** Excel (.xlsx), one file per year
- **Updated:** Annual
- **Years on page:** 2012 through 2025 (14 files)
- **Notes:** DCPS high-school 4-yr ACGR by school + subgroup. Overlaps OSSE graduation data (cross-sector authority).

### [DCPS Fast Facts](https://dcps.dc.gov/featured-content/dcps-fast-facts-2025)

🟡 derived (sector subset) · _topics: enrollment, demographics, landing_

- **Format:** PDF (2-page fact sheet)
- **Updated:** Annual (2025 ed. published Mar 2025)
- **Years on page:** Latest year; older editions only via direct PDF URLs
- **Notes:** District-wide 'by the numbers.' Prior-year editions have no central archive — classic fragmentation.

### [DCPS School Profiles ('Find a School')](https://profiles.dcps.dc.gov/)

🟡 derived (sector subset) · _topics: profiles, enrollment, boundaries_

- **Format:** Interactive web app
- **Updated:** ~Annual; enrollment updates each year
- **Years on page:** Current school year (not labeled)
- **Notes:** Per-school pages (address, principal, ward, grades, programs, enrollment). Filter/compare; 'Locate Your Boundary School' by address. Per-school URLs like profiles.dcps.dc.gov/332.

### [DCPS Stakeholder / Panorama Satisfaction Surveys](https://dcps.dc.gov/surveys)

🟢 authoritative · _topics: surveys, school-climate_

- **Format:** PDF + Excel aggregates; interactive Panorama portal
- **Updated:** Annual (administered each spring)
- **Years on page:** Panorama 2018, 2019, 2021, 2022; legacy reports 2011, 2013–2017
- **Notes:** Student/family/staff experience surveys. District results at bit.ly/dcpsresults; school-level/raw data requires staff Panorama login.

### [DCPS Budget Transparency Portal](https://dcpsbudget.com/)

🟢 authoritative · _topics: finance_

- **Format:** Web portal + downloadable Excel spreadsheets
- **Updated:** Annual budget cycle (initial budgets ~late winter/spring)
- **Years on page:** Current cycle (FY27) + 'Budget Archives'
- **Notes:** School-by-school budget ALLOCATIONS under the three-factor model (enrollment / targeted / stability). Standalone .com domain, not under dcps.dc.gov — easy to miss. Allocation, not expenditure — differs from OSSE PPE.

### [A Capital Commitment — Strategic Plan & Scorecards](https://dcps.dc.gov/capitalcommitment)

🟢 authoritative · _topics: strategy, outcomes_

- **Format:** Web page + linked PDF plan
- **Updated:** Plan per 5-year cycle; metrics updated periodically
- **Years on page:** 2023–2028 current; priors 2017-2022, 2012-2017
- **Notes:** Strategic goals/metrics. Plan PDF and scorecards largely on the external dcpsstrong.com site — an off-domain fragment.

### [DCPS Equity Strategy & Framework](https://dcps.dc.gov/equity)

🟡 derived (sector subset) · _topics: equity_

- **Format:** Web page + PDF framework (2018)
- **Updated:** Infrequent
- **Years on page:** Framework 2018
- **Notes:** Policy/narrative more than data. The annual school-level Equity Reports with underlying data are published by OSSE, not DCPS.

### [DCPS Feeder Patterns](https://dcps.dc.gov/feederpatterns)

🟢 authoritative · _topics: boundaries_

- **Format:** Web page linking per-year PDFs
- **Updated:** Annual
- **Years on page:** SY14-15 through SY26-27
- **Notes:** Which schools feed into which (geographic + programmatic). Unusually complete multi-year archive vs. other DCPS data.

### [Find Your In-Boundary School (address lookup)](https://enrolldcps.dc.gov/node/41)

🟢 authoritative · _topics: boundaries_

- **Format:** Interactive address-lookup tool
- **Updated:** Updated when boundaries/feeders change
- **Years on page:** Current boundaries
- **Notes:** On the enrolldcps.dc.gov subdomain. Boundary POLICY and redrawing are run by DME, not DCPS.

### [DCPS Modernizations](https://dcps.dc.gov/page/modernizations)

🟡 derived (sector subset) · _topics: facilities_

- **Format:** Web page + PACE prioritization PDF
- **Updated:** Updated as projects change
- **Years on page:** Current list; framework dated 2022
- **Notes:** Facilities data is split across DCPS, DGS (dgs.dc.gov/page/dcps-school-projects), and EdScape Ch.3 — significant fragmentation for capital/facilities.

### [DCPS School Directory](https://dcps.dc.gov/service/school-data)

🟢 authoritative · _topics: profiles_

- **Format:** PDF (per year)
- **Updated:** Annual
- **Years on page:** Per school year (e.g. SY24-25)
- **Notes:** Crosswalk of DCPS school IDs, names, addresses, wards, types. Latest year linked from the data hub; older years only via direct PDF URLs.

## DC PCSB — DC Public Charter School Board

_Authorizer/regulator of DC's public charter schools. Publishes charter directories, the School Quality Report (SQR) accountability framework, finances, and equity data._

### [DC PCSB Transparency Hub](https://dcpcsb.org/transparency-hub)

🟢 authoritative · _topics: landing, finance, discipline, equity, profiles_

- **Format:** Web portal (links to PDF / Excel / Egnyte / Google Sheets)
- **Updated:** Continuously updated; docs annual
- **Years on page:** Multiple; varies by document
- **Notes:** The single most comprehensive index of PCSB charter data: budgets, audits, 990s, financials, at-risk spending, equity reports, discipline/attendance, charter agreements, site reviews, school profiles, openings/closures. Many financial docs hosted off-site on Egnyte.

### [Public Charter School Data (sector overview)](https://dcpcsb.org/about-us/public-charter-school-data)

🟢 authoritative · _topics: landing, enrollment, assessment, graduation_

- **Format:** Web page (links to sub-dashboards)
- **Updated:** Annual
- **Years on page:** Current
- **Notes:** Citywide charter rollups (enrollment, assessment, growth/closures, graduation, profiles). Cites 133 schools / 66 LEAs / ~47,525 students.

### [Charter Student Enrollment](https://dcpcsb.org/student-enrollment)

🔵 republished · _topics: enrollment, demographics_

- **Format:** Static tables + spreadsheet download + link to OSSE
- **Updated:** Annual
- **Years on page:** SY22-23, 23-24, 24-25 shown; historical spreadsheet 1967–present
- **Notes:** Charter-only enrollment by grade/tier/demographics/ward + market share. Audited counts sourced from OSSE; PCSB republishes/analyzes the charter slice. Static tables, NOT Tableau.

### [Statewide Assessment Results (charter)](https://dcpcsb.org/test-results-parcc)

🔵 republished · ♻️ intermittent server errors · _topics: assessment_

- **Format:** Web page / dashboard
- **Updated:** Annual
- **Years on page:** Multiple
- **Notes:** Charter ELA/math on the DC statewide test. URL still says 'parcc' though DC moved to DC CAPE. Overlaps OSSE/Report Card (the authority). Site occasionally returns HTTP 520.

### [School Profiles / Find a DC Public Charter School](https://www.dcpcsb.org/school-profiles)

🟢 authoritative · _topics: profiles, accountability_

- **Format:** Interactive searchable directory
- **Updated:** Updated yearly / as schools open/close
- **Years on page:** Current roster
- **Notes:** Canonical 'find a charter school' tool. Filter by feature/ward/grade/status; each entry links to its School Quality Report. No bulk export.

### [Public Charter School Directory (annual PDF)](https://www.dcpcsb.org/2025-26-public-charter-school-directory)

🟢 authoritative · _topics: profiles_

- **Format:** PDF
- **Updated:** Annual (school year)
- **Years on page:** 2025-26 latest; prior years at /YYYY-YY-... URLs
- **Notes:** Static counterpart to the interactive profiles: every LEA, campus, program, grades, ward, leader contact.

### [School Quality Report (SQR)](https://dcpcsb.org/families/school-quality-report)

🟢 authoritative · ♻️ intermittent server errors · _topics: accountability_

- **Format:** Web page / per-school report
- **Updated:** Annual (released fall)
- **Years on page:** Current; history via PMF archive
- **Notes:** Charter accountability: scores each charter 0-100 and assigns Tier 1/2/3. This is a DIFFERENT system from OSSE's STAR (1-5) — see overlaps. Aggregated at /schoolquality (sometimes bot-blocked).

### [ASPIRE System (current charter accountability framework)](https://dcpcsb.org/aspire-system)

🟢 authoritative · _topics: accountability, methodology_

- **Format:** Web page (framework docs / PDF)
- **Updated:** Annual
- **Years on page:** Current
- **Notes:** The board-approved system that replaced the PMF and underlies the SQR. Important: PMF data pages look authoritative but are frozen at 2018-19.

### [Performance Management Framework (PMF) — archive](https://dcpcsb.org/performance-management-framework-pmf)

🔵 republished · 🗄️ archived/stale · _topics: accountability, methodology_

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

🔵 republished · 🗄️ archived/stale · _topics: equity, discipline, attendance_

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

🔵 republished · _topics: discipline, attendance_

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

🟢 authoritative · ♻️ intermittent server errors · _topics: finance_

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

🟢 authoritative · _topics: profiles, openings-closures_

- **Format:** Web page + Google Sheet
- **Updated:** Updated as events occur
- **Years on page:** 1996–present
- **Notes:** History of 80+ closed/consolidated campuses: year opened/closed, reason, closure type. Full list via linked Google Sheet.

### [DC PCSB Board Meetings & Events](https://dcpcsb.org/events)

🟢 authoritative · _topics: governance, openings-closures_

- **Format:** Event calendar (agendas/minutes as PDF)
- **Updated:** Monthly board meetings
- **Years on page:** Current + archive
- **Notes:** Charter approvals/conditions/closures/replications are decided and recorded here.

## DME — Deputy Mayor for Education

_Mayor's office for education strategy. Runs EdScape (the neighborhood education-landscape tool), the Master Facilities Plan, and boundary/enrollment-planning data._

### [EdScape (education landscape tool)](https://edscape.dc.gov/)

🔵 republished · _topics: landing, enrollment, demographics, facilities, boundaries_

- **Format:** Interactive Tableau dashboards + Excel downloads + PDF summaries
- **Updated:** Rolling, several releases/year
- **Years on page:** Through SY2025-26; some series back to SY2013-14
- **Notes:** DME's neighborhood education-data platform. 5 chapters: Population & Students, Public Schools, Facilities, Enrollment Patterns, Neighborhood Factors. Built on OSSE audited enrollment, geocoded to wards/clusters/boundaries. For planners, not parents choosing schools.

### [EdScape — Release Notes (changelog)](https://edscape.dc.gov/page/edscape-release-notes)

🔵 republished · _topics: methodology_

- **Format:** Web page (changelog)
- **Updated:** Updated with each release
- **Years on page:** 2021–2026 release history
- **Notes:** Best single page for tracking what data was added and when (e.g. May 2026: new 5- & 10-yr enrollment projections dashboard).

### [EdScape — Enrollment Patterns (cross-sector / where students attend)](https://edscape.dc.gov/page/enrollment-patterns-index)

🔵 republished · _topics: enrollment, boundaries_

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

🔵 republished · _topics: facilities_

- **Format:** Interactive dashboards + maps + Excel
- **Updated:** Annual+
- **Years on page:** SY2013-14 through SY2025-26
- **Notes:** Building counts/locations, programmatic capacity, utilization (how full), unfilled seats, DCPS modernizations. Produced with DC PCSB, DCPS, OSSE, DGS — the cross-sector facilities view.

### [DME — Public Education Facility Planning](https://dme.dc.gov/service/public-education-facility-planning)

🟢 authoritative · _topics: facilities, landing_

- **Format:** Web page (service hub)
- **Updated:** As-needed
- **Years on page:** 2018–present
- **Notes:** Hub for the Master Facilities Plan, all supplements, classification/utilization maps, vacant-facility info, and LEA-level enrollment (~115 DCPS + ~112 charter buildings).

### [DC Public Education Master Facilities Plan 2023](https://dme.dc.gov/mfp2023)

🟢 authoritative · _topics: facilities, enrollment, projections_

- **Format:** Report PDF + Excel appendices (via Box)
- **Updated:** ~Every 5 years (full plan)
- **Years on page:** 2023 edition; projections ~decade forward
- **Notes:** Comprehensive facilities plan: conditions, utilization, enrollment trends/projections, capital investment, housing-pipeline impacts. Priors: MFP 2018 (dme.dc.gov/MFP2018).

### [2024 Master Facilities Plan Annual Supplement](https://dme.dc.gov/publication/2024-master-facilities-plan-supplement)

🟢 authoritative · _topics: facilities, projections, enrollment_

- **Format:** Report PDF + Excel appendices
- **Updated:** Annual supplement
- **Years on page:** SY2024-25 data + 5/10-yr forward projections
- **Notes:** Released Sept 2025 (latest as of June 2026). Updated capacity/utilization and enrollment projections. Note: the freshest projections now live in EdScape rather than the MFP supplements.

### [DME — Boundary and Student Assignment Study 2023 (data supplement)](https://dme.dc.gov/page/boundary-and-student-assignment-study-2023-data-supplement)

🟢 authoritative · _topics: boundaries, enrollment, demographics_

- **Format:** Excel datasheets + PDFs + interactive maps
- **Updated:** One-time study (2023)
- **Years on page:** SY2022-23 / SY2023-24 + historical trends
- **Notes:** School-level enrollment/demographics/capacity/distance, boundary map series, feeder patterns, population forecasts, PreK waitlists, utilization, segregation analysis.

### [DME — Download Data (legacy datasets)](https://dme.dc.gov/page/download-data)

🔵 republished · _topics: enrollment, facilities, boundaries_

- **Format:** Downloadable Excel/CSV/PDF
- **Updated:** Legacy/archival
- **Years on page:** SY2014-15 through SY2023-24
- **Notes:** DEAD END as of June 2026 — this page no longer hosts files; it now just links out to EdScape and OpenData DC. The actual downloadable datasets (e.g. 'Enrollments per DCPS Boundary') moved to EdScape's chapter pages and are harvested under EdScape. Kept here because it's still the URL people get sent to.

### [DME — Interactive School Facility Maps](https://dme.dc.gov/page/interactive-school-facility-maps)

🔵 republished · _topics: facilities_

- **Format:** Interactive Tableau maps + data downloads (recent years)
- **Updated:** Annual (one map per school year)
- **Years on page:** SY2015-16 through SY2025-26
- **Notes:** Standalone facility-location maps; content now also inside EdScape Ch.3. Early years lack downloadable data.

## My School DC — Common Lottery

_The single DCPS + charter application/lottery. Publishes lottery participation, match rates, and waitlist data._

### [My School DC — Lottery Data ('By the Numbers')](https://www.myschooldc.org/resources/data)

🟢 authoritative · _topics: lottery, enrollment_

- **Format:** Report PDFs + Excel/CSV + interactive Tableau (waitlist movement)
- **Updated:** Annual; results each spring (Mar/Apr)
- **Years on page:** 2014 (first lottery) through 2026
- **Notes:** The common lottery (one application for DCPS + charters): applications by grade, seats offered, waitlists, match rates by ward/grade. Administered jointly by OSSE/DME. The authoritative demand/choice dataset.
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

🟢 authoritative · ⚠️ JS app (open in a browser) · _topics: profiles, gis_

- **Format:** GIS — Shapefile / GeoJSON / CSV / KML + ArcGIS REST API
- **Updated:** Updated as schools change (~annually)
- **Years on page:** Current/live snapshot
- **Notes:** Point locations of every DCPS campus. ArcGIS layer: Education_WebMercator/MapServer layer 5. /about page is client-rendered; metadata verified via data.gov mirror.
- **Data files (profiled):**
  - [`DC Public Schools locations (CSV export)`](https://opendata.dc.gov/api/download/v1/items/4ac321b2d409438ebd76a6569ad94034/csv?layers=5) — **csv** — 124 rows × 36 cols
    - cols: `X`, `Y`, `NAME`, `ADDRESS`, `FACUSE`, `LEVEL_`, `STATUS`, `PHONE`, `TOTAL_STUD`, `SSL`, `GIS_ID`, `WEB_URL`

### [Open Data DC — DC Charter Schools (point locations)](https://opendata.dc.gov/datasets/DCGIS::dc-charter-schools/about)

🟢 authoritative · ⚠️ JS app (open in a browser) · _topics: profiles, gis_

- **Format:** GIS — Shapefile / GeoJSON / CSV / KML + ArcGIS REST API
- **Updated:** Updated as campuses change (~annually)
- **Years on page:** Current/live snapshot
- **Notes:** Point locations of every charter campus. Same MapServer (layer 1) as DCPS schools.
- **Data files (profiled):**
  - [`DC Charter Schools locations (CSV export)`](https://opendata.dc.gov/api/download/v1/items/a3832935b1d644e48c887e6ec5a65fcd/csv?layers=1) — **csv** — 150 rows × 34 cols
    - cols: `X`, `Y`, `NAME`, `ADDRESS`, `DIRECTOR`, `PHONE`, `AUTHORIZER`, `GRADES`, `ENROLLMENT`, `GIS_ID`, `WEB_URL`, `AUTHORIZAT`

### [Open Data DC — School Attendance Zones (ES/MS/HS boundaries)](https://opendata.dc.gov/datasets/DCGIS::school-attendance-zones-elementary/about)

🟢 authoritative · ⚠️ JS app (open in a browser) · _topics: boundaries, gis_

- **Format:** GIS polygon layers — Shapefile / GeoJSON / CSV + ArcGIS REST API
- **Updated:** Updated on boundary revisions
- **Years on page:** Current; historical layers SY10-11→SY22-23
- **Notes:** DCPS in-boundary zone polygons (only DCPS has zones; charters don't). HS zones are spread across multiple vintage MapServer layers — the most fragmented GIS data. DME also posts shapefiles at dme.dc.gov/page/new-boundary-shape-files.

## DC Policy Center (third party)

_Nonprofit think tank. Its annual 'State of D.C. Schools' and data tools synthesize and visualize OSSE/DME source data._

### [DC Policy Center — State of D.C. Schools (annual)](https://www.dcpolicycenter.org/publications/stateofdcschools2024-25/)

⚪ third-party · _topics: enrollment, assessment, graduation, attendance, educators, landing_

- **Format:** Web page + full report PDF + one-pager (EN/ES)
- **Updated:** Annual, spring (March)
- **Years on page:** Annual series 2018-19 through 2024-25 (7 editions)
- **Notes:** Best single narrative synthesis of the whole system (DCPS + charters), built on OSSE/DME source data. Produced with Education Forward DC. Hub: dcpolicycenter.org/education-policy-initiative/.

## U.S. Census Bureau

_School-age / under-18 population — the citywide denominator for enrollment-planning and capture-rate analysis._

### [U.S. Census ACS — DC school-age / under-18 population](https://data.census.gov/)

🟢 authoritative · _topics: population, projections_

- **Format:** Web tables / CSV / Census Data API
- **Updated:** Annual (ACS 1-yr citywide; 5-yr for ward/tract)
- **Years on page:** ACS 1-yr 2005–2024; 5-yr 2009–2024
- **Notes:** Tables S0101 (Age) and B09001 (Under 18) — the citywide school-age denominator for capture-rate / demand analysis that DME and DC Policy Center use against enrollment and births.

## EmpowerK12 (third party)

_Nonprofit that builds the interactive dashboards over OSSE Report Card data that OSSE/PCSB do not host themselves._

### [EmpowerK12 — DC school accountability/outcomes dashboards](https://www.empowerk12.org/data-dashboard-source/dc-new-school-ratings)

⚪ third-party · _topics: accountability, assessment_

- **Format:** Interactive dashboards
- **Updated:** Updated when OSSE releases
- **Years on page:** Recent years
- **Notes:** Nonprofit-built interactive dashboards over OSSE Report Card raw data (DCPS + charters together) — useful because OSSE/PCSB host few interactive views themselves.

## ⚠️ Same data, multiple places (what differs)

The whole point of the catalog. For each metric below, the same numbers appear in several places — here's which to use and why they disagree.

### Enrollment counts

OSSE's audited enrollment is the single authoritative count — independently verified each fall, cross-sector, and the basis for funding. DCPS and PCSB each republish only their own sector's slice (DCPS by school/grade; PCSB by tier/ward + market-share analysis). EdScape takes the same OSSE figures and geocodes them to neighborhoods/wards/boundaries and adds projections. The Report Card displays per-school enrollment for browsing. If numbers differ, trust OSSE audited; the others may use different rounding, vintage, or small-cell suppression.

Where it appears:
- [Audited Enrollment Reports & Data](https://osse.dc.gov/enrollment) — 🟢 authoritative (OSSE)
- [DCPS Data Set — Enrollment](https://dcps.dc.gov/publication/dcps-data-set-enrollment) — 🟡 derived (sector subset) (DCPS)
- [Charter Student Enrollment](https://dcpcsb.org/student-enrollment) — 🔵 republished (DC PCSB)
- [EdScape — Enrollment Patterns (cross-sector / where students attend)](https://edscape.dc.gov/page/enrollment-patterns-index) — 🔵 republished (DME)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) — 🟢 authoritative (OSSE)

### School accountability ratings

THESE ARE NOT THE SAME SCALE. OSSE's STAR rating is 1–5 stars and covers BOTH DCPS and charters. DC PCSB's School Quality Report (SQR), built on the ASPIRE system, scores charters 0–100 and assigns Tier 1/2/3 — charters only. The older PMF (archived at 2018-19) is yet another charter tiering. A charter can have both a STAR rating and an SQR tier that are not directly comparable. Always state which framework (and which year/version) a 'score' or 'tier' came from. EmpowerK12 re-presents the OSSE STAR data interactively.

Where it appears:
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) — 🟢 authoritative (OSSE)
- [DC School Report Card & STAR Framework Technical Guide](https://osse.dc.gov/publication/dc-school-report-card-and-star-framework-technical-guide) — 🟢 authoritative (OSSE)
- [School Quality Report (SQR)](https://dcpcsb.org/families/school-quality-report) — 🟢 authoritative (DC PCSB)
- [ASPIRE System (current charter accountability framework)](https://dcpcsb.org/aspire-system) — 🟢 authoritative (DC PCSB)
- [Performance Management Framework (PMF) — archive](https://dcpcsb.org/performance-management-framework-pmf) — 🔵 republished (DC PCSB)
- [EmpowerK12 — DC school accountability/outcomes dashboards](https://www.empowerk12.org/data-dashboard-source/dc-new-school-ratings) — ⚪ third-party (EmpowerK12)

### Assessment / proficiency (ELA & math)

OSSE is the authority — it administers DC CAPE (formerly PARCC) and posts cross-sector results plus the Report Card display. DCPS's downloadable PARCC/ assessment files cover only DCPS schools; PCSB's page covers only charters. The sector pages are convenient subsets but can lag OSSE and apply different suppression. For comparisons across sectors or years, use OSSE's files.

Where it appears:
- [Statewide Assessment Results 2024-25 (DC CAPE / MSAA)](https://osse.dc.gov/assessmentresults2025) — 🟢 authoritative (OSSE)
- [Statewide Assessment Results 2023-24 (+ older-year archive index)](https://osse.dc.gov/assessmentresults2024) — 🟢 authoritative (OSSE)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) — 🟢 authoritative (OSSE)
- [DCPS Downloadable Data Sets (index)](https://dcps.dc.gov/service/dcps-downloadable-data-sets) — 🟡 derived (sector subset) (DCPS)
- [Statewide Assessment Results (charter)](https://dcpcsb.org/test-results-parcc) — 🔵 republished (DC PCSB)

### Graduation rate (ACGR)

OSSE publishes the official cross-sector 4- and 5-year ACGR with subgroups. DCPS's downloadable graduation dataset is the DCPS-only subset of the same calculation. Use OSSE for charter or cross-sector figures.

Where it appears:
- [High School Graduation Rates / ACGR](https://osse.dc.gov/service/high-school-graduation-rates-0) — 🟢 authoritative (OSSE)
- [DCPS Data Set — Graduation Rates](https://dcps.dc.gov/node/1018352) — 🟡 derived (sector subset) (DCPS)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) — 🟢 authoritative (OSSE)

### Attendance / chronic absenteeism

OSSE owns the citywide attendance metrics and leads with chronic absenteeism and chronic truancy (a 10% threshold), not 'in-seat attendance.' DCPS's at-a- glance PDFs are district-level aggregates; PCSB's report is charter-only. Watch the metric definition — 'attendance rate' (DCPS narrative) and 'chronic absenteeism' (OSSE) answer different questions.

Where it appears:
- [School Year Attendance Reporting (chronic absenteeism/truancy)](https://osse.dc.gov/page/2024-25-school-year-attendance-reporting) — 🟢 authoritative (OSSE)
- [OSSE Attendance Dashboard](https://osse.dc.gov/attendancedashboard) — 🟢 authoritative (OSSE)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) — 🟢 authoritative (OSSE)
- [DCPS at a Glance: Attendance](https://dcps.dc.gov/node/1185940) — 🟡 derived (sector subset) (DCPS)
- [Annual Discipline & Attendance Report (charter)](https://dcpcsb.org/attendance-and-discipline-report) — 🔵 republished (DC PCSB)

### Discipline (suspensions/expulsions)

OSSE's 'State of Discipline' report + the Report Card are the current cross-sector authority (by-school detail lives in PDF appendices). PCSB's own School Equity Reports carried charter discipline/mobility but are archived at SY2017-18 — PCSB now redirects to OSSE. Use OSSE for anything recent.

Where it appears:
- [OSSE Discipline Report ('State of Discipline')](https://osse.dc.gov/page/discipline-report) — 🟢 authoritative (OSSE)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) — 🟢 authoritative (OSSE)
- [School Equity Reports (charter)](https://dcpcsb.org/school-equity-reports) — 🔵 republished (DC PCSB)
- [Annual Discipline & Attendance Report (charter)](https://dcpcsb.org/attendance-and-discipline-report) — 🔵 republished (DC PCSB)

### Demographics (race, SWD, EL, at-risk)

OSSE's Report Card 'Aggregate Enrollment Data' Excel is the authoritative school-level demographic breakdown. EdScape recasts it by neighborhood/ward. DCPS and PCSB pages show only their own sector and often only district/sector totals. Small subgroups may be suppressed in OSSE files (0%/100% hidden).

Where it appears:
- [Report Card Aggregate Enrollment Data (demographics file)](https://osse.dc.gov/page/dc-school-report-card-resource-library) — 🟢 authoritative (OSSE)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) — 🟢 authoritative (OSSE)
- [EdScape (education landscape tool)](https://edscape.dc.gov/) — 🔵 republished (DME)
- [DCPS at a Glance: Enrollment](https://dcps.dc.gov/node/966292) — 🟡 derived (sector subset) (DCPS)
- [Charter Student Enrollment](https://dcpcsb.org/student-enrollment) — 🔵 republished (DC PCSB)

### Per-pupil money

These measure DIFFERENT things. OSSE's ESSA per-pupil EXPENDITURE reports show what was actually spent per pupil (cross-sector, ex-post). DCPS's budget portal shows ALLOCATIONS under the three-factor model (ex-ante, DCPS only). PCSB's finance pages show charter actuals/audits. Don't compare a DCPS allocation to an OSSE expenditure as if they're the same number.

Where it appears:
- [Report Card School Finance Data (per-pupil expenditures)](https://osse.dc.gov/page/dc-school-report-card-resource-library) — 🟢 authoritative (OSSE)
- [DCPS Budget Transparency Portal](https://dcpsbudget.com/) — 🟢 authoritative (DCPS)
- [Charter School Finances (spending, budgets, audits, 990s)](https://dcpcsb.org/school-finances) — 🟢 authoritative (DC PCSB)

### Facilities, capacity & utilization

EdScape Ch.3 and the Master Facilities Plan are the cross-sector planning views (capacity, utilization, projections) produced by DME with OSSE/DCPS/ PCSB/DGS. DCPS's modernizations page (+ DGS) covers only DCPS capital projects. For 'how full is each building citywide,' use EdScape/MFP; for 'what DCPS is renovating,' use DCPS/DGS.

Where it appears:
- [EdScape — Public School Facilities (capacity/utilization/locations)](https://edscape.dc.gov/page/facilities-index) — 🔵 republished (DME)
- [DC Public Education Master Facilities Plan 2023](https://dme.dc.gov/mfp2023) — 🟢 authoritative (DME)
- [2024 Master Facilities Plan Annual Supplement](https://dme.dc.gov/publication/2024-master-facilities-plan-supplement) — 🟢 authoritative (DME)
- [DCPS Modernizations](https://dcps.dc.gov/page/modernizations) — 🟡 derived (sector subset) (DCPS)
- [DME — Interactive School Facility Maps](https://dme.dc.gov/page/interactive-school-facility-maps) — 🔵 republished (DME)

### Boundaries & feeder patterns

Only DCPS has attendance boundaries/feeders (charters are citywide-choice). DCPS publishes the human-readable feeder PDFs and address lookup; Open Data DC has the GIS polygon shapefiles (current + historical vintages); DME owns the boundary POLICY and the 2023 study data. EdScape shows how enrollment actually flows across those boundaries.

Where it appears:
- [DCPS Feeder Patterns](https://dcps.dc.gov/feederpatterns) — 🟢 authoritative (DCPS)
- [Find Your In-Boundary School (address lookup)](https://enrolldcps.dc.gov/node/41) — 🟢 authoritative (DCPS)
- [Open Data DC — School Attendance Zones (ES/MS/HS boundaries)](https://opendata.dc.gov/datasets/DCGIS::school-attendance-zones-elementary/about) — 🟢 authoritative (Open Data DC)
- [DME — Boundary and Student Assignment Study 2023 (data supplement)](https://dme.dc.gov/page/boundary-and-student-assignment-study-2023-data-supplement) — 🟢 authoritative (DME)
- [EdScape — Enrollment Patterns (cross-sector / where students attend)](https://edscape.dc.gov/page/enrollment-patterns-index) — 🔵 republished (DME)

### School directory / locations

For machine-readable locations of all schools, use Open Data DC GIS (separate DCPS and charter layers). For human browsing, DCPS Profiles (DCPS only) and PCSB School Profiles / Directory (charter only) are the directories; the Report Card lists both sectors. School-ID crosswalks: DCPS School Directory PDF and the OSSE enrollment files.

Where it appears:
- [Open Data DC — DC Public Schools (point locations)](https://opendata.dc.gov/datasets/dc-public-schools/about) — 🟢 authoritative (Open Data DC)
- [Open Data DC — DC Charter Schools (point locations)](https://opendata.dc.gov/datasets/DCGIS::dc-charter-schools/about) — 🟢 authoritative (Open Data DC)
- [DCPS School Profiles ('Find a School')](https://profiles.dcps.dc.gov/) — 🟡 derived (sector subset) (DCPS)
- [School Profiles / Find a DC Public Charter School](https://www.dcpcsb.org/school-profiles) — 🟢 authoritative (DC PCSB)
- [Public Charter School Directory (annual PDF)](https://www.dcpcsb.org/2025-26-public-charter-school-directory) — 🟢 authoritative (DC PCSB)
- [DC School Report Card (public interactive site)](https://dcschoolreportcard.org/) — 🟢 authoritative (OSSE)

## Known gaps & files needing a browser

Many high-value files (OSSE assessment results, most PCSB finance/equity docs) live behind **Box.com / Egnyte share links** or on **JS-rendered pages** with no scrapeable direct URL. They must be harvested with a browser (Playwright) via the update skill, then added to `data_files.yaml`.

Currently flagged `needs_browser`:
- 2019 DC School Report Card and STAR Framework Cross-Tabulated Data File → https://app.box.com/s/tb3ipg32wo48di3ph58llnpim5632fn9

Other structural gaps noted during research: assessment files on Box; PCSB site returns intermittent 520s; the live Report Card is a JS app (use the Resource Library files for analysis); discipline by-school detail is in PDF appendices; STAR (OSSE) and SQR/PMF/ASPIRE (PCSB) are different rating systems.

---
_Generated from `sources.yaml` + `file_profiles.json` by `generate_readme.py`. Sources last verified 2026-06._
