# DC K-12 Public Schools — Data Source Catalog

> ⚠️ **Unofficial & independent.** Not affiliated with or endorsed by OSSE, DCPS, DC PCSB, DME, or the Government of the District of Columbia. This catalogs links to publicly published data.

A map of **where DC public-school data actually lives** — across OSSE, DCPS, the DC Public Charter School Board (DC PCSB), and the Deputy Mayor for Education (DME). The data is real but scattered: split across agencies, buried on Tableau, with old years on different pages than new ones, and the *same* metric often published in several places. This catalog links each source, groups the files into multi-year dataset series, inventories their **tabs and columns** (and tables inside PDFs), and describes — without judgment — how the same metric differs across places.

> **Scope:** K-12 public (DCPS + charters). No higher ed.  
> **Last verified:** 2026-11  
> **Live site:** <https://dc-schools-data.abigailhaddad.com>  
> **Browse it locally:** `python3 -m http.server -d public` then open <http://localhost:8000/> — searchable, filter by topic/owner/year.  
> **Source of truth:** [`sources.yaml`](sources.yaml) + [`data_files.yaml`](data_files.yaml). Do not edit this README by hand — run `python generate_readme.py`.

## How this repo works

| File | Purpose |
| --- | --- |
| [`sources.yaml`](sources.yaml) | Hand-curated catalog of every data source + the "how sources differ" notes. **Edit this.** |
| [`data_files.yaml`](data_files.yaml) | Direct download URLs for individual files (xlsx/csv/pdf). **Edit this** (or append via the harvester). |
| [`profile_files.py`](profile_files.py) | Downloads each file and extracts tabs/columns (xlsx/csv) or pages + tables (pdf) → `file_profiles.json`. |
| [`add_harvested_files.py`](add_harvested_files.py) | Turns a browser link-harvest into `data_files.yaml` rows (infers year/topics, dedupes). |
| [`generate_readme.py`](generate_readme.py) | Renders this README **and** `public/catalog.js` from the YAML + profiles. |
| [`public/`](public) | **The publish directory** — the only thing uploaded to the host. `index.html` (Bootstrap + vanilla JS) + `catalog.js` + `404.html`. Nothing else may live here. |
| [`test_publish_dir.py`](test_publish_dir.py) | Guards the publish directory: allowlist of files, 25 MiB/file host limit, no private paths. |
| [`refresh.sh`](refresh.sh) / GitHub Action | Re-download + re-profile + regenerate on a schedule (Layer-1 automation). |
| `update-dc-schools-data` skill | The process for re-verifying links, harvesting new files, and regenerating. |

## Contents

- [OSSE — Office of the State Superintendent of Education](#osse--office-of-the-state-superintendent-of-education) — 26 source(s)
- [DCPS — DC Public Schools](#dcps--dc-public-schools) — 18 source(s)
- [DC PCSB — DC Public Charter School Board](#dc-pcsb--dc-public-charter-school-board) — 14 source(s)
- [DME — Deputy Mayor for Education](#dme--deputy-mayor-for-education) — 15 source(s)
- [My School DC — Common Lottery](#my-school-dc--common-lottery) — 1 source(s)
- [Open Data DC / DCGIS](#open-data-dc--dcgis) — 4 source(s)
- [DC Policy Center (third party)](#dc-policy-center-third-party) — 1 source(s)
- [U.S. Census Bureau](#us-census-bureau) — 1 source(s)
- [EmpowerK12 (third party)](#empowerk12-third-party) — 1 source(s)
- [How sources differ (same metric, multiple places)](#how-sources-differ-same-metric-multiple-places)
- [Known gaps & files needing a browser](#known-gaps--files-needing-a-browser)

## OSSE — Office of the State Superintendent of Education

_DC's state education agency. Cross-sector (DCPS + charter) source for enrollment, assessments, attendance, graduation, discipline, finance, and the DC School Report Card / STAR ratings._

### [OSSE Data and Reports (main landing)](https://osse.dc.gov/page/osse-data-and-reports)

_topics: landing, enrollment, assessment, attendance, graduation, discipline, finance, demographics_

- **Format:** Web portal of links to files & dashboards
- **Updated:** Rolling; underlying datasets annual
- **Years on page:** Links span SY2014-15 to SY2024-25 by dataset
- **Notes:** Top-level 'hub of hubs.' Best fallback when a specific per-year page URL changes. Moved from /page/data-and-reports-0 (404 as of 2026-11-01) to /page/osse-data-and-reports; the OSSE homepage's 'Data & Reports' link points to the new URL. The page's own jump links still use the old address.
- **Data files (profiled):**
  - [`2016-17 to 2018-19 School, LEA and State Assessment Participation`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%2C%202017-18%2C%202016-17%20School%2C%20LEA%2C%20And%20State%20Participation.Xlsx) — **xlsx** — 4 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Overview:`
    - tab **State Level** (52 rows × 2 cols) — cols: `ELA`, `Math`
    - tab **LEA Level** (1,924 rows × 2 cols) — cols: `ELA`, `Math`
    - tab **School Level** (7,371 rows × 2 cols) — cols: `ELA`, `Math`
  - [`2020 AP/IB and SAT Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2020%20AP%20IB%20and%20SAT%20-%20Metric%20Scores.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (27 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Metric Scores** (12,091 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Metric Scores** (6,418 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Metric Scores** (373 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`2024-25 Mobility Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024-25%20Mobility%20Brief%20Data.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `2024-25 Mid-Year Mobility Data Office of the State Superintendent of Education`
    - tab **All Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Compulsory Aged Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Adult Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Pre-K Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **K-12 Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
  - [`2023-24 Mobility Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2023-24%20Mobility%20Brief%20Data%20%281%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `2023-24 Mid-Year Mobility Data Office of the State Superintendent of Education`
    - tab **All Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Compulsory Aged Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **K-12 Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Pre-K Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Adult Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
  - [`2022-23 Mobility Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2022-23%20Mobility%20Brief%20Data%20%281%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `2022-23 Mid-Year Mobility Data Office of the State Superintendent of Education`
    - tab **All Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Compulsory Aged Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **K-12 Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Pre-K Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Adult Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
  - [`2021-22 Mobility Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021-22%20Mobility%20Brief%20Data%20%281%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `2021-22 Mid-Year Mobility Data Office of the State Superintendent of Education`
    - tab **All Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Compulsory Aged Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **K-12 Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Pre-K Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Adult Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
  - [`2020-21 Mobility Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2020-21%20Mobility%20Brief%20Data.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (19 rows × 1 cols) — cols: `2020-21 Mid-Year Mobility Data Office of the State Superintendent of Education`
    - tab **All Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Compulsory Aged Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **K-12 Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Pre-K Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Adult Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
  - [`2019-20 Mobility Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019-20%20Mobility%20Brief%20Data%20%281%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (19 rows × 1 cols) — cols: `2019-20 Mid-Year Mobility Data Office of the State Superintendent of Education`
    - tab **All Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Compulsory Aged Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **K-12 Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Pre-K Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Adult Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
  - [`2018-19 Mobility Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%20Mobility%20Brief%20Data%20%281%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (19 rows × 1 cols) — cols: `2018-19 Mid-Year Mobility Data Office of the State Superintendent of Education`
    - tab **All Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Compulsory Aged Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **K-12 Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Pre-K Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
    - tab **Adult Students** (15 rows × 5 cols) — cols: `Measure`, `Description`, `Charter`, `DCPS`, `TOTAL`
  - [`2020 Mobility and Re-enrollment Data Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2020%20Student%20Movement%20-%20Metric%20Scores.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Metric Scores** (16,436 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Scores by Framework** (14,884 rows × 11 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Domain`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Metric Scores** (4,104 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Scores by Framework** (4,808 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Domain`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Metric Scores** (110 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Scores by Framework** (280 rows × 7 cols) — cols: `School Framework`, `Student Group`, `Domain`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`Mid-Year Student Mobility 2016-17 School Year (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Q8 Attachment - Mid-year Student Mobility SY16-17.xlsx) — **xlsx** — 17 tab(s)
    - tab **Data Notes** (22 rows × 2 cols) — cols: `Title`, `Oversight 2017 Q8 Attachment - Mobility`
    - tab **Overall Movement SY1415** (21 rows × 1 cols) — cols: `OSSE FY 17 POH Q6 (a) Response - Total Overall Movement, SY 14-15`
    - tab **Overall Movement SY1516** (21 rows × 1 cols) — cols: `OSSE FY 17 POH Q6 (a) Response - Total Overall Movement, SY 15-16`
    - tab **Overall Movement SY1617** (20 rows × 1 cols) — cols: `OSSE FY 17 POH Q8 Response- Overall Movement, SY 16-17`
    - tab **Across DC Public Sectors SY1415** (21 rows × 1 cols) — cols: `OSSE FY 17 POH Q8 C Response- Movement Across Public Sectors, SY 14-15`
    - tab **Across DC Public Sectors SY1516** (20 rows × 2 cols) — cols: `Grade`, `OSSE FY 17 POH Q8 C - Movement Across DC Public Sectors SY 15-16`
    - tab **Across DC Public Sectors SY1617** (19 rows × 2 cols) — cols: `Grade`, `OSSE FY 17 POH Q8 C- Across DC Public Sectors, SY 16-17`
    - tab **Out of DC Public Sectors SY1415** (20 rows × 2 cols) — cols: `Grade`, `OSSE FY 17 POH Q8 (b)- Out of DC Public Sectors, SY 14-15`
    - tab **Out of DC Public Sect SY1516** (20 rows × 2 cols) — cols: `Grade`, `OSSE FY 17 POH Q8 (b)- Out of DC Public Sector, SY 15-16`
    - tab **Out of DC Public Sectors SY1617** (19 rows × 2 cols) — cols: `Grade`, `OSSE FY 17 POH Q8 B Response- Out of DC Public Sectors SY 16-17`
    - tab **Into DC Public Sector SY1415** (20 rows × 2 cols) — cols: `Grade`, `OSSE FY 18 POH Q8 B Response- Into DC Public Sector, SY 14-15`
    - tab **Into DC Public Sector SY1516** (20 rows × 2 cols) — cols: `Grade`, `OSSE FY 17 POH Q8 B Response- Movement Into DC Public Sector, SY 15-16`
    - tab **Into DC Public Sectors SY16-17** (20 rows × 2 cols) — cols: `Grade`, `Moved into DC public sectors: SY2016-17`
    - tab **Within DC Public Sector SY1415** (20 rows × 2 cols) — cols: `Grade`, `OSSE FY 17 POH Q8 D, Within Public Sector, SY 14-15`
    - tab **Within DC Public Sector SY1516** (20 rows × 2 cols) — cols: `Grade`, `OSSE FY 17 POH Q8 D Response- Within DC Public Sector, SY 15-16`
    - tab **Within DC Public Sector SY16-17** (20 rows × 2 cols) — cols: `Grade`, `Moved within a DC public sector: SY2016-17`
    - tab **Continuous Enrollment** (13 rows × 1 cols) — cols: `OSSE FY 17 POH Q8 E Response- Continuous Enrollment Demographics`
  - [`Citywide Discipline Data (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Q10 Attachment - Discipline Data.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data_Notes** (14 rows × 2 cols) — cols: `Title`, `Oversight 2017 Q10 Attachment - Discipline`
    - tab **school_counts** (235 rows × 1 cols) — cols: `OSSE FY17 POH Q10 Response -- Number of Students Disciplined by School`
    - tab **school_rates** (234 rows × 1 cols) — cols: `OSSE FY17 POH Q10 Response -- Number of Students Disciplined by School`
    - tab **school_durations** (235 rows × 1 cols) — cols: `OSSE FY17 POH Q10 Response -- Duration of Discipline by School`
    - tab **school_removals** (239 rows × 1 cols) — cols: `OSSE FY17 POH Q10 Response -- Removals by School`
    - tab **lea_counts** (56 rows × 1 cols) — cols: `OSSE FY17 POH Q10 Response -- Number of Students Disciplined by LEA`
    - tab **lea_rates** (68 rows × 1 cols) — cols: `OSSE FY17 POH Q10 Response -- Number of Students Disciplined by LEA`
    - tab **lea_durations** (56 rows × 1 cols) — cols: `OSSE FY17 POH Q10 Response -- Duration of Discipline by LEA`
    - tab **lea_removals** (69 rows × 1 cols) — cols: `OSSE FY17 POH Q10 Response -- Removals by LEA`
  - [`Mid-Year Student Mobility 2014-15 and 2015-16 School Years (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Q7%20Attachment%20-%20Mid-year%20Student%20Mobility%20SY14-15%20and%20SY15-16.xlsx) — **xlsx** — 12 tab(s)
    - tab **Data_Notes** (18 rows × 2 cols) — cols: `Title`, `Q7 Attachment- Mid-year Student Mobility.xlsx`
    - tab **Overall Movement SY1415** (20 rows × 1 cols) — cols: `OSSE FY16 POH Q7 Response - Overall movement: SY2014-15`
    - tab **Overall Movement SY1516** (20 rows × 1 cols) — cols: `OSSE FY16 POH Q7 Response - Overall movement: SY2015-16`
    - tab **Out of DC Public Sect SY1415** (20 rows × 1 cols) — cols: `OSSE FY16 POH Q7 Response - Moved out of DC public sectors: SY2014-15`
    - tab **Out of DC Public Sect SY1516** (20 rows × 1 cols) — cols: `OSSE FY16 POH Q7 Response - Moved out of DC public sectors: SY2015-16`
    - tab **Into DC Public Sector SY1415** (20 rows × 1 cols) — cols: `OSSE FY16 POH Q7 Response - Moved into DC public sectors: SY2014-15`
    - tab **Into DC Public Sector SY1516** (20 rows × 1 cols) — cols: `OSSE FY16 POH Q7 Response - Moved into DC public sectors: SY2015-16`
    - tab **Across DC Public Sect SY1415** (20 rows × 1 cols) — cols: `OSSE FY16 POH Q7 Response - Moved between DC public sectors: SY2014-15`
    - tab **Across DC Public Sect SY1516** (20 rows × 1 cols) — cols: `OSSE FY16 POH Q7 Response - Moved between DC public sectors: SY2015-16`
    - tab **Within DC Public Sect SY1415** (20 rows × 1 cols) — cols: `OSSE FY16 POH Q7 Response - Moved within a DC public sector: SY2014-15`
    - tab **Within DC Public Sect SY1516** (20 rows × 1 cols) — cols: `OSSE FY16 POH Q7 Response - Moved within a DC public sector: SY2015-16`
    - tab **Continuously Enrolled** (12 rows × 1 cols) — cols: `OSSE FY16 POH Q7 Response - Demographics of Continuously Enrolled Students`
  - [`Citywide Discipline Data (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Q9%20Attachment%201%20-%20Discipline%20Data.xlsx) — **xlsx** — 9 tab(s)
    - tab **Data_Notes** (15 rows × 2 cols) — cols: `Title`, `Q9 Attachment- Discipline Data.xlsx`
    - tab **school_counts** (225 rows × 1 cols) — cols: `OSSE FY16 POH Q9 Response -- Number of Students Disciplined by School`
    - tab **school_rates** (225 rows × 1 cols) — cols: `OSSE FY16 POH Q9 Response -- Number of Students Disciplined by School`
    - tab **school_durations** (225 rows × 1 cols) — cols: `OSSE FY16 POH Q9 Response -- Duration of Discipline by School`
    - tab **school_removals** (225 rows × 1 cols) — cols: `OSSE FY16 POH Q9 Response -- Removals by School`
    - tab **lea_counts** (65 rows × 1 cols) — cols: `OSSE FY16 POH Q9 Response -- Number of Students Disciplined by LEA`
    - tab **lea_rates** (65 rows × 1 cols) — cols: `OSSE FY16 POH Q9 Response -- Number of Students Disciplined by LEA`
    - tab **lea_durations** (65 rows × 1 cols) — cols: `OSSE FY16 POH Q9 Response -- Duration of Discipline by LEA`
    - tab **lea_removals** (65 rows × 1 cols) — cols: `OSSE FY16 POH Q9 Response -- Removals by LEA`
  - [`Students by Ward, 2012-13 through 2017-18 (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Q2 Attachment - Students by Ward SY1213%2C SY1314%2C SY1415%2C SY1617%2C and SY17-18.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data_Notes** (11 rows × 2 cols) — cols: `Title`, `Oversight 2017 Q2 Attachment - Student Enrollment by Ward`
    - tab **SY12-13** (1,828 rows × 1 cols) — cols: `OSSE FY17 POH Q2 Response -- Students by Ward of Residence for Each Public School SY12-13`
    - tab **SY13-14** (1,664 rows × 1 cols) — cols: `OSSE FY17 POH Q2 Response -- Students by Ward of Residence for Each Public School SY13-14`
    - tab **SY14-15** (1,864 rows × 1 cols) — cols: `OSSE FY17 POH Q2 Response -- Students by Ward of Residence for Each Public School SY14-15`
    - tab **SY15_16** (237 rows × 1 cols) — cols: `OSSE FY17 POH Q2 Response -- Students by Ward of Residence for Each Public School SY15-16`
    - tab **SY16_17** (236 rows × 1 cols) — cols: `OSSE FY17 POH Q2 Response -- Students by Ward of Residence for Each Public School SY16-17`
    - tab **SY17_18** (238 rows × 1 cols) — cols: `OSSE FY17 POH Q2 Response -- Students by Ward of Residence for Each Public School SY17-18`
    - tab **Totals** (12 rows × 7 cols) — cols: `Ward`, `SY2012-13`, `SY2013-14`, `SY2014-15`, `SY2015-16`, `SY2016-17`, `SY2017-18`
  - [`Private School Enrollment, 2014-15 through 2017-18 (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Q4 Attachment - Private School Enrollment SY14-15 SY15-16 SY16-17%2C SY17-18 to date.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (8 rows × 2 cols) — cols: `Title`, `Q4 Attachment- Private School Enrollment SY14-15, SY15-16, SY16-17, SY17-18 to date.xlsx`
    - tab ** SY 14-15** (62 rows × 1 cols) — cols: `OSSE FY17 POH Q4 Response -- Enrollment in Private and Parochial Schools in SY14-15`
    - tab **SY 15-16** (62 rows × 1 cols) — cols: `OSSE FY17 POH Q4 Response -- Enrollment in Private and Parochial Schools in SY15-16`
    - tab **SY 16-17** (64 rows × 1 cols) — cols: `OSSE FY17 POH Q4 Response -- Enrollment in Private and Parochial Schools in SY16-17 to date`
    - tab **SY 17-18** (43 rows × 1 cols) — cols: `OSSE FY17 POH Q4 Response -- Enrollment in Private and Parochial Schools in SY17-18 to date`
  - [`2023-24 DECP Data File`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SY2023-24%20DECP%20Reporting.xlsx) — **xlsx** — 4 tab(s)
    - tab **Overview** (9 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Data** (22 rows × 5 cols) — cols: `Student Group`, `Fall 2023`, `Spring 2024`, `Summer 2024`, `All Terms (Fall 2023 - Summer 2024)`
    - tab **LEA Data** (25 rows × 6 cols) — cols: `LEA Code`, `LEA Name`, `Fall 2023`, `Spring 2024`, `Summer 2024`, `All Terms (Fall 2023 - Summer 2024)`
    - tab **IHE Funding** (16 rows × 5 cols) — cols: `Institute of Higher Education (IHE) Partner`, `Fall 2023`, `Spring 2024`, `Summer 2024`, `All Terms (Fall 2023 - Summer 2024)`
  - [`Free and Reduced-Price Meals Status (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Q77%20Attachment%20-%20FARM%20Status.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (7 rows × 2 cols) — cols: `Title`, `Q77 Attachment - FARM Status`
    - tab **Public Charter & Private School** (2,073 rows × 1 cols) — cols: `OSSE FY16 POH Q77 RESPONSE - PUBLIC CHARTER AND PRIVATE SCHOOL STUDENTS ELIGIBLE FOR FREE AND REDUCED MEALS BY SCHOOL AND GRADE - AS OF SEPT 1, 2016`
    - tab **DCPS - CEP & P2** (100 rows × 1 cols) — cols: `OSSE FY16 POH Q77 RESPONSE - DCPS (CEP AND P2) STUDENTS ELIGIBLE FOR FREE AND REDUCED MEALS BY SCHOOL AND GRADE - AS OF SEPT 1, 2016`
    - tab **DCPS - Traditional** (462 rows × 1 cols) — cols: `OSSE FY16 POH Q77 RESPONSE - DCPS (TRADITIONAL) STUDENTS ELIGIBLE FOR FREE AND REDUCED MEALS BY SCHOOL AND GRADE - AS OF SEPT 1, 2016`
    - tab **CEP Schools** (161 rows × 1 cols) — cols: `OSSE FY16 POH Q77 RESPONSE - Schools Participating in the Community Eligibility Provision Program`
  - [`At-Risk Students (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Q5%20Attachment%20-%20At-Risk%20Students.xlsx) — **xlsx** — 2 tab(s)
    - tab **Data_Notes** (9 rows × 2 cols) — cols: `Title`, `Q5 Attachment- At-Risk.xlsx`
    - tab **Q5_PriorYears** (59 rows × 1 cols) — cols: `OSSE FY16 POH Q5 Response -- Number of Homeless, Foster Care, TANF eligible, SNAP eligible, and Overage Youth by LEA for SY13-14, SY14-15, and SY15-16`
  - [`Foster Children (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Q6%20Attachment%20-%20Foster%20Children.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data_Notes** (10 rows × 2 cols) — cols: `Title`, `Q6 Attachment- Foster Care.xlsx`
    - tab **Q6_A** (9 rows × 1 cols) — cols: `OSSE FY16 POH Q6 Response -- Number of Foster Children Enrolled in Out-of-District Public Schools and Receive General Education Services Only`
    - tab **Q6_B** (8 rows × 1 cols) — cols: `OSSE FY16 POH Q6 Response -- Number of Foster Children Enrolled in Out-of-District Public Schools and Receive Special Education Services`
    - tab **Q6_C** (53 rows × 1 cols) — cols: `OSSE FY16 POH Q6 Response -- Amount that OSSE pays to enroll an individual student in an out-of-District public school`
    - tab **Q6_D** (7 rows × 1 cols) — cols: `OSSE FY16 POH Q6 Response -- Amount that OSSE Spent on SPED Transportation for Children in Foster Care - FY16 and FY17 to date`
  - [`Individual Education Programs (IEPs) (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Q49%20Attachment%20-%20IEPs.xlsx) — **xlsx** — 23 tab(s)
    - tab **Data_Notes** (31 rows × 2 cols) — cols: `Title`, `Q49 Attachment- IEPs.xlsx`
    - tab **2016_Q49A** (22 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - STUDENTS WITH IEPs BY AGE`
    - tab **2016_Q49B** (66 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - STUDENTS WITH IEPs BY LEA`
    - tab **2016_Q49C** (16 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - STUDENTS WITH IEPs BY DISABILITY CLASSIFICATION`
    - tab **2016_Q49C_by_age** (21 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - STUDENTS WITH IEPs BY DISABILITY CLASSIFICATION BY AGE`
    - tab **2016_Q49C_by_LEA** (65 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - STUDENTS WITH IEPs BY DISABILITY CLASSIFICATION BY LEA`
    - tab **2016_Q49C_multi_disab** (15 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - STUDENTS WITH MULTIPLE DISABILITIES`
    - tab **2016_Q49D** (10 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - PERCENTAGE OF TIME OUTSIDE OF GENERAL EDUCATION`
    - tab **2016_Q49D_by_age** (21 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - PERCENTAGE OF TIME OUTSIDE OF GENERAL EDUCATION BY AGE`
    - tab **2016_Q49D_by_LEA** (65 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - PERCENTAGE OF TIME OUTSIDE OF GENERAL EDUCATION BY LEA`
    - tab **2016_Q49D_by_disability** (15 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - PERCENTAGE OF TIME OUTSIDE OF GENERAL EDUCATION BY DISABILITY CLASSIFICATION`
    - tab **2016_Q49E** (17 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - STUDENTS BY PLACEMENT TYPE`
    - tab **2016_Q49E_by_age** (21 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - STUDENTS BY PLACEMENT TYPE BY AGE`
    - tab **2016_Q49E_by_LEA** (65 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - STUDENTS BY PLACEMENT TYPE BY LEA`
    - tab **2016_Q49E_by_disability** (16 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - STUDENTS BY PLACEMENT TYPE BY DISABILITY`
    - tab **2016_Q49H** (2 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - Number of students with Specialized Instruction in General Education Setting`
    - tab **2016_Q49H_by_age** (21 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - Number of students with Specialized Instruction in General Education Setting BY AGE`
    - tab **2016_Q49H_by_LEA** (64 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - Number of students with Specialized Instruction in General Education Setting BY LEA`
    - tab **2016_Q49H_by_disability** (14 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - Number of students with Specialized Instruction in General Education Setting BY DISABILITY`
    - tab **2016_Q49I** (3 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - NUMBER OF STUDENTS RECEIVING RELATED SERVICES`
    - tab **2016_Q49I_by_age** (21 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - NUMBER OF STUDENTS RECEIVING RELATED SERVICES BY AGE`
    - tab **2016_Q49I_by_LEA** (65 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - NUMBER OF STUDENTS RECEIVING RELATED SERVICES BY LEA`
    - tab **2016_Q49I_by_disability** (15 rows × 1 cols) — cols: `OSSE FY16 POH Q49 RESPONSE - NUMBER OF STUDENTS RECEIVING RELATED SERVICES BY DISABILITY CLASSIFICATION`
  - [`Special Education Exit (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Q50%20and%20Q51%20Attachment%20-%20SPED%20Exit.xlsx) — **xlsx** — 2 tab(s)
    - tab **Data_Notes** (7 rows × 2 cols) — cols: `Title`, `Q50 and Q51 Attachment- SPED Exit.xlsx`
    - tab **2016_Q50** (44 rows × 1 cols) — cols: `OSSE FY16 POH Q50 AND 51 RESPONSE - SPED EXITS`
  - [`Secondary Transitions for Students with Disabilities (council performance-oversight attachment)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Q52%20Attachment%20-%20Transitions.xlsx) — **xlsx** — 2 tab(s)
    - tab **Data_Notes** (7 rows × 2 cols) — cols: `Title`, `Q52 Attachment- Transitions`
    - tab **2016_Q52** (77 rows × 1 cols) — cols: `OSSE FY16 POH Q52 RESPONSE - STUDENTS WITH DISABILITIES TRANSITIONING OUT OF SCHOOL`
  - [`2023-24 DECP Summary One Pager`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/PostSec_DualEnrollment_Handout_Feb7.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (15 rows): `IHE`, `Funding Received by Each IHE in SY2023-24`
    - p1 table (9 rows): `Subgroup`, `Unique Count of Students (All Terms)`, `Percent of Students (All Terms)`
  - [`School Year 2024-25 Competency Based Education Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SY24-25%20Competency%20Based%20Education%20Report.pdf) — **pdf** — 12 pages, **extractable tables** on ~2 page(s)
    - p2 table (20 rows): `DCPS Competency-Based Education Course Offerings Per School`
    - p2 table (4 rows): `Ron Brown`
    - p2 table (3 rows): `Ballou`

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
  - [`2026 Metric Calculation Confirmation (MCC) Policy`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2026%20Metric%20Calculation%20Confirmation%20%28MCC%29%20Policy.pdf) — **pdf** — 4 pages, **extractable tables** on ~2 page(s)
    - p2 table (4 rows): `Phase`, `Release Date`, `OST Deadline`, `Certification Date`, `Appeal Deadline`
    - p2 table (11 rows): `Phase I`, `Phase II`, `Phase III`
    - p3 table (4 rows): `Step`, `LEA Action`
  - [`2026 Metric Calculation Confirmation (MCC) Data Dictionary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2026%20Metric%20Calculation%20Confirmation%20%28MCC%29%20Data%20Dictionary_Website%20%28Aug%202026%29.xlsx) — **xlsx** — 32 tab(s)
    - tab **Release Schedule** (32 rows × 5 cols) — cols: `MCC Phase`, `Sheet`, `Release Date`, `LEA OST Deadline`, `LEA Certification Date`
    - tab **ELA Statewide Assessments** (71 rows × 1 cols) — cols: `Sheet: ELA Statewide Assessments (Participation and Performance)`
    - tab **Math Statewide Assessments** (63 rows × 1 cols) — cols: `Sheet: Math Statewide Assessments (Participation and Achievement)`
    - tab **Metric Scores - Phase I** (14 rows × 1 cols) — cols: `Sheet: Metric Scores - Phase I`
    - tab **ACCESS Growth** (49 rows × 1 cols) — cols: `Sheet: ACCESS Growth`
    - tab **Adjusted Achievement ** (15 rows × 1 cols) — cols: `Sheet: Adusted Achievement`
    - tab **Chronic Absenteeism** (38 rows × 1 cols) — cols: `Sheet: Chronic Absenteeism`
    - tab **Pre-K Chronic Absenteeism** (36 rows × 1 cols) — cols: `Sheet: Pre-K Chronic Absenteeism`
    - tab **Attendance Growth** (45 rows × 1 cols) — cols: `Sheet: Attendance Growth`
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
  - [`2026 DC School Report Card Technical Guide`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2026%20DC%20School%20Report%20Card%20Technical%20Guide.pdf) — **pdf** — 70 pages, **extractable tables** on ~17 page(s)
    - p6 table (7 rows): `Current Grade Level`, `Prior Year’s Proficiency Level`
    - p15 table (4 rows): `Test Subject Area`, `Corresponding College Courses`, `Benchmark`
    - p16 table (11 rows): `Test Subject Area`, `SAT Score 1`, `SAT Score 2`, `Highest`, `Meet /`, `College`
  - [`Business Rules and Definitions — DC School Report Card and MySchoolDC Data Elements`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20and%20MySchoolDC%20Data%20Elements%20-%20Business%20Rules%20and%20Definitions.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (6 rows): `Data Source`, `Data Element`, `Definition`, `Business Rules`
    - p2 table (8 rows): `course on the OSSE State C ourse Catalog.`
    - p3 table (5 rows): `eSchoolPLUS`, `Single-Gender Campus`, `The school’s enrollment targets a single gender.`, `On eSchoolPLUS, the LEA/school selected "Single-Gender Campus" as one of the School Characteristics for this school.`
  - [`Alternative Accountability Framework – At a Glance`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Alternative%20Accountability%20Framework%20%20-%20At%20a%20Glance%20%282026%29.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (2 rows): `Measures student performance on DC CAPE and MSAA and how many students are approaching, reaching, and exceeding proficiency in English language arts (ELA) and mathematics. State Assessment Proficiency - Students meeting or exceeding expectations in both ELA and Math on the statewide assessment. State Assessment Weighted Index - An index score for student performance across all levels of statewide assessment with heavier weight placed on higher levels of proficiency. ACADEMIC GROWTH`
    - p1 table (4 rows): `Attendance is reported through two indicators: 1. Chronic Absenteeism - Percentage of students who miss 10 percent or more of the school year. AND* 2. Attendance Growth - Improvement in student level attendance rates from year to year. Academic Persistence* - Percentage of students who remain academically engaged from one year to the next. This includes students who transfer`
    - p1 table (3 rows): `Five-Year Adjusted Cohort Graduation Rate (high school grades) - Percentage of students who graduate with a diploma within five years of entering high school. EDUCATIONAL PROGRESS`
  - [`Alternative Accountability Framework - FAQ`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Alternative%20Accountability%20Framework%20-%20FAQ%20%282026%29.pdf) — **pdf** — 2 pages, **extractable tables** on ~1 page(s)
    - p1 table (14 rows): `METRIC NAME`, `ELEMENTARY/MIDDLE`, `K–12 / 6-12`, `HIGH SCHOOL`
  - [`DC School Report Card and MySchoolDC Data Elements - Business Rules and Definitions (updated Oct. 2026)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/documents/Business%20Rules%20and%20Definitions%20for%20DC%20School%20Report%20Card%20and%20MySchoolDC%20Data%20Elements%20%28updated%20Oct.%202026%29.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (6 rows): `Data Source`, `Data Element`, `Definition`, `Business Rules`
    - p2 table (8 rows): `course on the OSSE State C ourse Catalog.`
    - p3 table (6 rows): `eSchoolPLUS`, `Single-Gender Campus`, `The school’s enrollment targets a single gender.`, `On eSchoolPLUS, the LEA/school selected "Single-Gender Campus" as one of the School Characteristics for this school.`
  - [`DC School Report Card - DC SAYS - Staff Metric Scores (2026)`](https://osse.dc.gov/sites/default/files/2026-09/DC%20School%20Report%20Card%20-%20DC%20SAYS%20Staff%20Metric%20Scores%20%282026%29.xlsx) — **xlsx** — 7 tab(s)
    - tab **Data Notes** (19 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (41 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (10 rows × 4 cols) — cols: `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **PK-12 LEA Overall Scores** (541 rows × 6 cols) — cols: `LEA Name`, `LEA Code`, `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **PK-12 School Overall Scores** (2,188 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **Adult School Overall Scores** (91 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **Ward Overall Scores** (73 rows × 5 cols) — cols: `Ward`, `Group`, `Metric`, `Metric Score`, `School Year`
  - [`DC School Report Card - DC SAYS - Family Metric Scores (2026)`](https://osse.dc.gov/sites/default/files/2026-09/DC%20School%20Report%20Card%20-%20DC%20SAYS%20Family%20Metric%20Scores%20%282026%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (32 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Scores** (8 rows × 4 cols) — cols: `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **LEA Scores** (414 rows × 6 cols) — cols: `LEA Name`, `LEA Code`, `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **School Scores** (1,688 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **Ward Scores** (57 rows × 5 cols) — cols: `Ward`, `Group`, `Metric`, `Metric Score`, `School Year`
  - [`DC School Report Card - DC SAYS - Students Grades 3-12 Metric Scores (2026)`](https://osse.dc.gov/sites/default/files/2026-09/DC%20School%20Report%20Card%20-%20DC%20SAYS%20Grades%203-12%20Student%20Metric%20Scores%20%282026%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Data Notes** (18 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (30 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Gradeband Scores** (23 rows × 4 cols) — cols: `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **LEA Gradeband Scores** (945 rows × 6 cols) — cols: `LEA Name`, `LEA Code`, `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **School Gradeband Scores** (3,187 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **Ward Gradeband Scores** (177 rows × 5 cols) — cols: `Ward`, `Group`, `Metric`, `Metric Score`, `School Year`
  - [`DC School Report Card - DC SAYS - Adult Students Metric Scores (2026)`](https://osse.dc.gov/sites/default/files/2026-09/DC%20School%20Report%20Card%20-%20DC%20SAYS%20Adult%20Student%20Metric%20Scores%20%282026%29.xlsx) — **xlsx** — 5 tab(s)
    - tab **Data Notes** (17 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (22 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Gradeband Scores** (12 rows × 4 cols) — cols: `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **LEA-School Gradeband Scores** (111 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `school_name`, `School Code`, `Group`, `Metric`, `Metric Score`, `School Year`
    - tab **Ward Gradeband Scores** (67 rows × 5 cols) — cols: `Ward`, `Group`, `Metric`, `Metric Score`, `School Year`

### [DC School Report Card (public interactive site)](https://schoolreportcard.dc.gov/home)

_topics: accountability, assessment, attendance, graduation, discipline, enrollment, demographics, profiles_

- **Format:** Interactive web app (search/browse; not bulk download)
- **Updated:** Annual, refreshed ~December with prior school year
- **Years on page:** Displays latest year only (SY2024-25); history in the Resource Library
- **Notes:** Cross-sector (DCPS + charter). osse.dc.gov/dcschoolreportcard redirects here. The old dcschoolreportcard.org hostname returns a blank 503 (checked Aug 2026, real browser too) — do not link it. For analysis use the Resource Library files.
- **Data files (profiled):**
  - [`School STAR Scores (CSV export)`](https://opendata.dc.gov/api/download/v1/items/90b2efbd069842f29817615611619c9b/csv?layers=0) — **csv** — 203 rows × 9 cols
    - cols: `LEA_Code`, `LEA_Name`, `School_Code`, `School_Name`, `School_Type`, `Ward`, `STAR_Score`, `STAR_Rating`, `ObjectId`
  - [`School STAR Enrollment (CSV export)`](https://opendata.dc.gov/api/download/v1/items/b48c7faa47bd48ddb3184eff4b4cdf60/csv?layers=0) — **csv** — 6,765 rows × 12 cols
    - cols: `LEA_Code`, `LEA_Name`, `School_Code`, `School_Name`, `School_Type`, `Ward`, `Student_Group`, `Grade`, `Metric`, `Metric_Score`, `School_Year`, `ObjectId`
  - [`School STAR Framework Scores (CSV export)`](https://opendata.dc.gov/api/download/v1/items/297b7dd14d4a4a759b33435c57e1b6e4/csv?layers=0) — **csv** — 248 rows × 13 cols
    - cols: `LEA_Code`, `LEA_Name`, `School_Code`, `School_Name`, `School_Type`, `Ward`, `School_Framework`, `Framework_Weight`, `Framework_Points_Earned`, `Framework_Points_Possible`, `Framework_STAR_Score`, `Framework_STAR_Rating`
  - [`School STAR Student Group Scores (CSV export)`](https://opendata.dc.gov/api/download/v1/items/db72f81db024485f818f0f41a43aeec4/csv?layers=0) — **csv** — 1,163 rows × 14 cols
    - cols: `LEA_Code`, `LEA_Name`, `School_Code`, `School_Name`, `School_Type`, `Ward`, `School_Framework`, `Student_Group`, `Student_Group_Points_Earned`, `Student_Group_Points_Possible`, `Student_Group_Score`, `Framework_Points_Earned`

### [DC School Report Card & STAR Framework Technical Guide](https://osse.dc.gov/publication/dc-school-report-card-technical-guide)

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

### [Statewide Assessment Results 2025-26 (DC CAPE / MSAA)](https://osse.dc.gov/page/2025-26-statewide-assessment-results-and-resources)

_topics: assessment_

- **Format:** Excel files (direct OSSE attachments) + PDF results deck and appendix
- **Updated:** Annual, released late summer/fall
- **Years on page:** 2025-26 only on this page
- **Notes:** Released Aug 20, 2026. Unlike prior years, the State/LEA/School-level files are direct osse.dc.gov attachments (not Box). New this year: separate Middle School Advanced Math files at each level. Also hosts translated score-report guides and sample ISRs (not catalogued). No /assessmentresults2026 alias exists — the page is reachable via the Data and Reports hub.
- **Data files (profiled):**
  - [`2025-26 Statewide Assessment Results (public deck)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2026%20DC%20Statewide%20Assessment%20Results%208.20.26.pdf) — **pdf** — 60 pages, **extractable tables** on ~1 page(s)
    - p39 table (10 rows): 
    - p39 table (7 rows): 
  - [`2025-26 Statewide Assessment Results — Appendix (detailed breakdowns)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2026%20Statewide%20Assessment_Appendix.pdf) — **pdf** — 17 pages, **extractable tables** on ~14 page(s)
    - p4 table (9 rows): `Tested Grade`, `State ELA 4+ Results`, `State Math 4+ Results`
    - p5 table (9 rows): `Test`, `State 4+ Results`
    - p6 table (10 rows): `Race/Ethnicity`, `State ELA 4+ Results`, `State Math 4+ Results`
  - [`2025-26 DC CAPE Middle School Advanced Math — State Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2025-26%20Middle%20School%20Advanced%20Math%20Public%20File%20State%20Level%20DCCAPE%20Data%20%281%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **File Notes** (30 rows × 1 cols) — cols: `2025-26 Middle School Advanced Math Assessment Participation and Performance - State`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (29 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (29 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Performance Level** (141 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Participation** (29 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
  - [`2025-26 DC CAPE & MSAA — State Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2025-26%20Public%20File%20State%20Level%20DCCAPE%20and%20MSAA%20Data%20%281%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **File Notes** (30 rows × 1 cols) — cols: `2025-26 DC CAPE and MSAA Assessment Participation and Performance - State`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (327 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (327 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Performance Level** (2,389 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Participation** (329 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
  - [`2025-26 DC CAPE Middle School Advanced Math — LEA Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2025-26%20Middle%20School%20Advanced%20Math%20Public%20File%20LEA%20Level%20DCCAPE%20Data_0.xlsx) — **xlsx** — 6 tab(s)
    - tab **File Notes** (30 rows × 1 cols) — cols: `2025-26 Middle School Advanced Math Assessment Participation and Performance - LEA`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (95 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (95 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Performance Level** (471 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Participation** (98 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
  - [`2025-26 DC CAPE & MSAA — LEA Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2025-26%20Public%20File%20LEA%20Level%20DCCAPE%20and%20MSAA%20Data.xlsx) — **xlsx** — 6 tab(s)
    - tab **File Notes** (31 rows × 1 cols) — cols: `2025-26 DC CAPE and MSAA Assessment Participation and Performance - LEA`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (4,521 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (4,521 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Performance Level** (25,944 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Participation** (4,655 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
  - [`2025-26 DC CAPE Middle School Advanced Math — School Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2025-26%20Middle%20School%20Advanced%20Math%20Public%20File%20School%20Level%20DCCAPE%20Data.xlsx) — **xlsx** — 6 tab(s)
    - tab **File Notes** (30 rows × 1 cols) — cols: `2025-26 Middle School Advanced Math Assessment Participation and Performance - Schools`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (281 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (281 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Performance Level** (1,401 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Participation** (284 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
  - [`2025-26 DC CAPE & MSAA — School Level`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2025-26%20Public%20File%20School%20Level%20DCCAPE%20and%20MSAA%20Data.xlsx) — **xlsx** — 6 tab(s)
    - tab **File Notes** (31 rows × 1 cols) — cols: `2025-26 DC CAPE and MSAA Assessment Participation and Performance - Schools`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (13,709 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (13,709 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Performance Level** (79,026 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Participation** (14,027 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …

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
  - [`2024-25 Middle School Advanced Math DC CAPE — State (SEA) Level`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=05z9br204vgfa6atic6qplhg0p3cj1we&file_id=f_1962549140545) — **xlsx** — 6 tab(s)
    - tab **Data Notes and Business Rules** (26 rows × 1 cols) — cols: `2024-25 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (28 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Approaching, Meeting, Exceeding** (28 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Performance Level** (136 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Participation** (28 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `School Code`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
  - [`2024-25 Middle School Advanced Math DC CAPE — LEA Level`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=nlhxqgkyde3ngbg17vmz0k8f6fi6xp9s&file_id=f_1962548624673) — **xlsx** — 6 tab(s)
    - tab **Data Notes and Business Rules** (26 rows × 1 cols) — cols: `2024-25 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (89 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Approaching, Meeting, Exceeding** (89 rows × 12 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count`, `Total Count`, `Percent`
    - tab **Performance Level** (441 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `LEA Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Metric name`, `Count`, `Total Count` …
    - tab **Participation** (89 rows × 13 cols) — cols: `Aggregation Level`, `LEA Code`, `lea_name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `School Code`, `Count`, `Total Count` …
  - [`2024-25 Middle School Advanced Math DC CAPE — School Level`](https://app.box.com/index.php?rm=box_download_shared_file&shared_name=y0vrq1g8u6p98pd12qdk6g007r8q366p&file_id=f_1962539349190) — **xlsx** — 6 tab(s)
    - tab **Data Notes and Business Rules** (26 rows × 1 cols) — cols: `2024-25 Statewide Assessment Results Office of the State Superintendent of Education`
    - tab **Data Dictionary** (29 rows × 5 cols) — cols: `Sheet`, `Field Name`, `Variable Type`, `Allowable Values`, `Notes`
    - tab **Meeting, Exceeding** (258 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `lea_name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Approaching, Meeting, Exceeding** (258 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `lea_name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …
    - tab **Performance Level** (1,286 rows × 15 cols) — cols: `Aggregation Level`, `LEA Code`, `lea_name`, `School Code`, `School Name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Metric name` …
    - tab **Participation** (263 rows × 14 cols) — cols: `Aggregation Level`, `LEA Code`, `lea_name`, `School Code`, `school_name`, `Metric`, `Assessment Name`, `Subject`, `Student Group`, `Student Group Value`, `Enrolled Grade or Course`, `Count` …

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
  - [`2014-15 PARCC Results — Grades 3-8 (public presentation)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2015%20District%20of%20Columbia%20PARCC%20Grades%203-8%20Results.pdf) — **pdf** — 50 pages, **extractable tables** on ~35 page(s)
    - p4 table (6 rows): `PARCC Performance Levels`
    - p5 table (2 rows): `rd th`
    - p5 table (2 rows): `3rd`, `4th`, `5th`, `6th`, `7th`, `8th`
  - [`2014-15 PARCC Results — High School (public presentation)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2015%20District%20of%20Columbia%20PARCC%20High%20School%20Results_0.pdf) — **pdf** — 22 pages, **extractable tables** on ~10 page(s)
    - p6 table (2 rows): 
    - p6 table (2 rows): `English II`, `Geometry/Integrated Math II*`
    - p7 table (6 rows): `PARCC Performance Levels`
  - [`2015-16 PARCC Results (public presentation)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2016%20OSSE%20PARCC%20Presentation.pdf) — **pdf** — 62 pages, **extractable tables** on ~48 page(s)
    - p6 table (6 rows): 
    - p6 table (6 rows): 
    - p6 table (5 rows): `4%`
  - [`2016-17 PARCC Results (public presentation, updated Sept. 27, 2017)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20PARCC%20State%20Results%20Public%20Presentation_updated%20Sept.%2027%2C%202017_0.pdf) — **pdf** — 54 pages, **extractable tables** on ~33 page(s)
    - p2 table (2 rows): `strA egaugnaL hsilgnE`
    - p2 table (2 rows): `htaM`
    - p9 table (6 rows): `PARCC Performance Levels`
  - [`2017-18 PARCC Results (public presentation, Aug. 16, 2018)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018%20PARCC%20Results%20Release%20%28Aug.%2016%2C%202018%29.pdf) — **pdf** — 52 pages, **extractable tables** on ~46 page(s)
    - p2 table (2 rows): `PARCC Scores Are Up For the Third Year`
    - p2 table (4 rows): `33.3% 2018`
    - p2 table (4 rows): `29.4% 2018`
  - [`2018-19 Statewide Assessment Results (public presentation)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019%20Statewide%20ELA%20and%20Math%20Public%20Results.pdf) — **pdf** — 47 pages, **extractable tables** on ~29 page(s)
    - p12 table (6 rows): `Student Group`, `State ELA % 4+`, `State Math % 4+`
    - p13 table (8 rows): `Race/Ethnicity`, `State ELA % 4+`, `State Math % 4+`
    - p21 table (9 rows): `Tested Grade`, `State ELA % 4+`, `State Math % 4+`
  - [`2021-22 Statewide Assessment Results (public presentation)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021-22%20District%20of%20Columbia%20Statewide%20Assessment%20Results%20Presentation.pdf) — **pdf** — 58 pages, **extractable tables** on ~28 page(s)
    - p7 table (5 rows): `PARCC​`, `MSAA​`, `All​`
    - p32 table (8 rows): `Tested Grade`, `State ELA % Met or Exceeded Expectations`, `State Math % Met or Exceeded Expectations`
    - p33 table (8 rows): `Enrolled Grade - Test`, `State ELA % Met or Exceeded Expectations`, `State Math % Met or Exceeded Expectations`
  - [`2022-23 Statewide Assessment Results (public deck)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Assessment%202023%20Deck_.08.24_0.pdf) — **pdf** — 75 pages, **extractable tables** on ~30 page(s)
    - p46 table (9 rows): `Tested Grade`, `State ELA 4+ Results`, `State Math 4+ Results`
    - p47 table (9 rows): `Enrolled Grade - Test`, `State Math 4+`
    - p48 table (9 rows): `Test`, `State 4+ Results`
  - [`2023-24 Statewide Assessment Results (public deck with appendix)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024-08-22-DCCAPE_MSAA_2324_PublicDeck_with_appendix.pdf) — **pdf** — 70 pages, **extractable tables** on ~54 page(s)
    - p2 table (3 rows): `2024 Assessments in Context The District is committed to high-quality assessments of student learning to inform our commitment to ensuring all students have access to a high-quality education. The DC CAPE is just one of the important tools we use to examine student performance and growth. About DC CAPE • Each spring, DC students in grades 3–8 and in eligible high school courses complete statewide assessments in ELA and math; these assessments measure mastery of grade-level content standards. Over 95% of eligible participants participated in the math and ELA assessments. • From 2015 to 2023, the District was a member of the Partnership for Assessment of Readiness for College and Careers (PARCC) and administered PARCC assessments in ELA and math. • In 2024, the District transitioned from the PARCC assessments to the District of Columbia Comprehensive Assessments of Progress in Education (DC CAPE). This was a change in name and governance only. DC CAPE uses the same design—number of questions, types of questions, and length of assessment—as PARCC; scores are comparable across years. • DC CAPE is a rigorous assessment that measures proficiency of the District's high grade-level expectations. 2`
    - p3 table (3 rows): `Key Takeaways: School Year 2024 • Overall, proficiency rates in math and ELA for school year 2023–24 are slightly higher than school year 2022–23 proficiency rates. • Many schools improved proficiency rates and these successes can be used to better understand which programs and investments show the most evidence of success and promise. ▪ For example, results indicate that the Districtwide focus on High Impact Tutoring and Early Literacy are having a positive impact. • Overall, the results of the 2024 assessment reinforce that there is no straight-line path to academic recovery from the impacts of the COVID-19 pandemic. Across cohorts, students were impacted by, and have responded to, the interrupted learning differently. • We are also encouraged by notable improvement in third grade ELA results. • This year’s results provide a view of what is working to accelerate student learning and are a call to action to double down on our investments in evidence-based strategies and lead a renewed commitment to math. 3`
    - p5 table (3 rows): `Participation Counts All DC CAPE MSAA* ELA Math ELA Math ELA Math Eligible Participants 47,848 47,619 47,377 47,148 471 471 Actual Participants 45,896 45,660 45,458 45,221 438 439 Participation Rate 95.9% 95.9% 95.9% 95.9% 93.0% 93.2% *The Multi-State Alternate Assessment (MSAA) is the alternate statewide assessment in ELA and 5 math administered each year to students with the most significant cognitive disabilities.`
  - [`2014 DC CAS Results Presentation`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2014%20DC%20CAS%20Result%20July%2031%202014...FINAL_.pdf) — **pdf** — 27 pages, **extractable tables** on ~24 page(s)
    - p1 table (4 rows): 
    - p2 table (2 rows): `Index`
    - p3 table (2 rows): `DC CAS Overview`
  - [`2014 DC CAS Classification Results by School`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/CAS%20Classification%202014_FOR%20POSTING_FINAL.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (82 rows): `2`, `014 DC CAS Resul`, `ts by Sector`
    - p2 table (83 rows): `DCPS`, `School Without Walls at Francis Stevens`, `Rising`, `58.36`, `-0.33`, `57.75`, `11.02`, `53.52`
    - p3 table (40 rows): `PCS`, `Tree of Life Community PCS`, `Developing`, `42.47`, `-6.11`, `40.16`, `-0.34`, `31.97`
  - [`2014 DC CAS School, Subgroup and Grade Proficiency`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/DCCAS_10.6.2014.xlsx) — **xlsx** — 3 tab(s)
    - tab **Filter by Subgroup&Grade Level** (192 rows × 1 cols) — cols: `Directions: Select the subgroup and grade level of interest by changing the selection in the red cells below.`
    - tab **list** (13 rows × 2 cols) — cols: `Subgroup`, `Grade`
    - tab **all data** (11,848 rows × 14 cols) — cols: `school_id`, `school_name`, `subgroup`, `tested_grade`, `math_testtakers`, `math_below_basic`, `math_basic`, `math_proficient`, `math_advanced`, `read_testtakers`, `read_below_basic`, `read_basic` …
  - [`Presentation of 2013 DC CAS Results (Statewide)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20Presentation%202013%20DC%20CAS%20Results%20%28Statewide%29.pdf) — **pdf** — 18 pages, **extractable tables** on ~14 page(s)
    - p4 table (3 rows): `Local Education Agencies`, `Schools`, `Students`
    - p5 table (6 rows): 
    - p6 table (2 rows): 
  - [`School-by-School DC CAS Results (Alpha)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2013%20School-By-School%20DC%20CAS%20Results%20%28Alpha%29%20analysis%20for%20presentation%20%282%29.xlsx) — **xlsx** — 1 tab(s)
    - tab **WardAlpha** (199 rows × 5 cols) — cols: `School Information`, `Accountability`, `Composite`, `Math`, `Reading`
  - [`School-By-School DC CAS Results (Classification)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2013%20School-By-School%20DC%20CAS%20Results%20%28Classification%29%5B1%5D.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (91 rows): `School Information`, `Accountability`, `Composite`, `Math`, `Reading`
    - p2 table (91 rows): `FRIENDSHIP PCS SOUTHEAST ACADEMY`, `Ward 8`, `Rising`, `52.0`, `49.1%`, `40.0%`, `9.0%`, `51.2%`
    - p3 table (10 rows): `BOOKER T WASHINGTON PCS`, `Ward 1`, `Priority`, `23.8`, `17.5%`, `26.3%`, `-8.8%`, `17.5%`
  - [`School-By-School DC CAS Results (Proficiency)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2013%20School-By-School%20DC%20CAS%20Results%20%28Proficiency%29%5B1%5D.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (91 rows): `School Information`, `Accountability`, `Composite`, `Math`, `Reading`
    - p2 table (91 rows): `KIMBALL ES`, `Ward 7`, `Focus`, `36.7`, `31.6%`, `28.4%`, `3.2%`, `29.1%`
    - p3 table (10 rows): `BASIS DC PCS`, `Ward 2`, `Reward`, `84.2`, `79.2%`, `N/A`, `77.0%`, `N/A`
  - [`School-By-School DC CAS Results (Growth)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2013%20School-By-School%20DC%20CAS%20Results%20%28Growth%29%5B1%5D.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (91 rows): `School Information`, `Accountability`, `Composite`, `Math`, `Reading`
    - p2 table (91 rows): `HOPE COMMUNITY PCS TOLSON CAMPUS`, `Ward 5`, `Rising`, `56.2`, `52.5%`, `47.7%`, `4.8%`, `54.8%`
    - p3 table (10 rows): `HOPE COMMUNITY PCS LAMOND CAMPUS`, `Ward 4`, `Developing`, `41.5`, `38.6%`, `49.0%`, `-10.5%`, `37.1%`
  - [`2013 DC CAS LEA Appeals Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2013%20DC%20CAS%20LEA%20Appeals%20Summary-2.xlsx) — **xlsx** — 2 tab(s)
    - tab **Data** (116 rows × 38 cols) — cols: `LEA/Appeal Accepted/Grade`, `UID appeal`, `Missing test`, `First Name appeal`, `Last Name appeal`, `Date of Birth appeal`, `Gender appeal`, `Race appeal`, `School Code`, `School Grade appeal`, `Tested Grade appeal`, `FAY appeal` …
    - tab **Dictionary** (16,384 rows × 2 cols) — cols: `Element`, `Description`
  - [`2013 DC CAS Reward Schools`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2013%20DC%20CAS%20Reward%20Schools-2.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (14 rows): `DCPS – 21 REWARD SCHOOLS`, `PCS – 10 REWARD SCHOOLS`
  - [`2013 DC CAS Briefing`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/DC%20CAS%20Briefing_091313.pdf) — **pdf** — 4 pages, **extractable tables** on ~2 page(s)
    - p2 table (5 rows): `District of Columbia Comprehensive Assessment System (DC CAS), administered by the`
    - p2 table (6 rows): `Assessments like DC CAS are high-stakes measurements used across the country to gauge student`
    - p2 table (5 rows): `compliance with federal requirements, the school district committed to transition from the DC CAS`
  - [`DC CAPE ELA Performance Levels`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20CAPE%20ELA%20Performance%20Level%20Ranges%20by%20Grade%20Level.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
  - [`DC CAPE Math Performance Levels`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20CAPE%20Mathematics%20Performance%20Level%20Ranges%20by%20Grade%20Level.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
  - [`PARCC ELA Performance Levels`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/ELA%20PARCC%20Cut%20Scores.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
  - [`PARCC Math Performance Levels`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/Math%20PARCC%20Cut%20Scores.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
    - p1 table (6 rows): `Performance Level`, `Minimum Score`, `Maximum Score`
  - [`2020-21 OSSE Local Assessment Collection Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20OSSE%20Local%20Assessment%20Collection%20Report_FINAL.pdf) — **pdf** — 18 pages, **extractable tables** on ~1 page(s)
    - p11 table (6 rows): `Percent of Schools Reported to have Administered Local Spring Assessments Each Year`

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
  - [`FFY 2024 Annual Performance Report - Part B`](https://osse.dc.gov/sites/default/files/2026-09/DC-B-SPP-APR-FFY24.pdf) — **pdf** — 114 pages, **extractable tables** on ~82 page(s)
    - p2 table (4 rows): `Provide sufficient detail to ensure that the Secretary and the public are informed of and understand the State’s systems designed to drive improved`
    - p8 table (2 rows): `Same data as used for reporting to the Department under section 618 of the Individuals with Disabilities Education Act (IDEA), using the definitions in`
    - p8 table (2 rows): `States must report a percentage using the number of youth with IEPs (ages 14-21) who exited special education due to graduating with a regular high`
  - [`Students with Disabilities in the District of Columbia: A Landscape Analysis (Oct 2019)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SWD%20Landscape%20Analysis%2010.10.19.pdf) — **pdf** — 117 pages, **extractable tables** on ~21 page(s)
    - p20 table (2 rows): `Set high expectations`
    - p20 table (2 rows): `Build ecosystem capacity`
    - p20 table (2 rows): `Share and use actionable data`

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
  - [`2024-25 Attendance Data Public Reporting (March 2025)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Attendance%20Data%20Public%20Reporting%20March%202025.xlsx) — **xlsx** — 6 tab(s)
    - tab **Overview** (9 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School** (465 rows × 7 cols) — cols: `School Year`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **LEA** (122 rows × 5 cols) — cols: `School Year`, `LEA Code`, `LEA Name`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **Sector** (5 rows × 4 cols) — cols: `School Year`, `Sector`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **State** (59 rows × 6 cols) — cols: `Grade Band`, `Student Group`, `% Chronically Absent (24-25)`, `% Chronically Absent (23-24)`, `% Chronically Truant, (Compulsory Age) (24-25)`, `% Chronically Truant, (Compulsory Age) (23-24)`
    - tab **Risk Tiers** (51 rows × 6 cols) — cols: `School Year`, `Grade Band`, `Absenteeism Risk Tier`, `Percentage`, `Students`, `Total Students`
  - [`2017-18 School Year Attendance Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017-18%20School%20Year%20Attendance%20Report.pdf) — **pdf** — 85 pages, **extractable tables** on ~19 page(s)
    - p38 table (42 rows): `% Truant,`
    - p39 table (45 rows): `% Truant,`
    - p40 table (44 rows): `% Truant,`
  - [`2018-19 School Year Attendance Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2018-19%20School%20Year%20Attendance%20Report.pdf) — **pdf** — 72 pages, **extractable tables** on ~15 page(s)
    - p33 table (34 rows): `School`, `% Chronically Absent, 2017-18 (K-12)`, `% Chronically Absent, 2018-19 (K-12)`, `% Truant,`
    - p33 table (3 rows): `% Chronically`
    - p33 table (3 rows): `% Chronically`
  - [`2019-20 Attendance Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2019-20%20Attendance%20Report.pdf) — **pdf** — 44 pages, **extractable tables** on ~14 page(s)
    - p16 table (31 rows): `School`, `% Chronically Absent, 2018- 19 (K-12)`, `% Chronically Absent, 2019- 20 (K-12)`, `% Truant,`
    - p16 table (3 rows): `% Chronically`
    - p16 table (3 rows): `% Chronically`
  - [`2020 Attendance - Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2020%20Attendance%20-%20Metric%20Scores.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School Metric Scores** (53,011 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Scores by Framework** (61,102 rows × 11 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `School Framework`, `Student Group`, `Domain`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Metric Scores** (13,021 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Scores by Framework** (17,485 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Framework`, `Student Group`, `Domain`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Metric Scores** (280 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Scores by Framework** (745 rows × 7 cols) — cols: `School Framework`, `Student Group`, `Domain`, `Metric`, `Metric Score`, `Metric N`, `School Year`
  - [`2020-21 Attendance Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2020-21%20Attendance%20Report_FINAL.pdf) — **pdf** — 42 pages, **extractable tables** on ~12 page(s)
    - p16 table (2 rows): 
    - p21 table (27 rows): `School`, `% Chronically Absent, 2018- 19 (K-12)`, `% Chronically Absent, 2020- 21 (K-12)`, `% Truant,`, `% Truant,`
    - p21 table (3 rows): `% Chronically`
  - [`2021-22 Attendance Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2021-22%20Attendance%20Report%20%28Nov%2028%202022%29.pdf) — **pdf** — 68 pages, **extractable tables** on ~17 page(s)
    - p24 table (32 rows): `School`, `%`, `%`, `% Truant, 2020-21 (Compulsory Age)`, `% Truant, 2021-22 (Compulsory Age)`
    - p24 table (4 rows): `% Truant,`
    - p24 table (4 rows): `% Truant,`
  - [`2022-23 Chronic Truancy Rates`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/OSSE%20SY2022-23%20Chronic%20Truancy%20Rates.xlsx) — **xlsx** — 2 tab(s)
    - tab **Overview** (3 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School** (242 rows × 3 cols) — cols: `School`, `% Chronically Truant, 2021-22 (Compulsory Age)`, `% Chronically Truant, 2022-23 (Compulsory Age)`
  - [`2022-23 Attendance Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2022-23%20Attendance%20Report_FINAL_0.pdf) — **pdf** — 59 pages, **extractable tables** on ~12 page(s)
    - p4 table (11 rows): `The school start time analysis found that school start time had no relationship to attendance for`
    - p30 table (5 rows): `As the figure shows, the bar for “Start`
    - p32 table (5 rows): `ADT Value Descriptor`, `ADT Value`, `Full Description`, `Included in`, `Included in Chronic Truancy`
  - [`2023-24 Attendance Annual Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2023-24%20Attendance%20Report%20%28Final%29.pdf) — **pdf** — 46 pages, **extractable tables** on ~4 page(s)
    - p35 table (19 rows): `Year`, `Metric`, `Percentage`, `Students`
    - p35 table (3 rows): `Grade`, `Absenteeism Risk Tier`, `Percentage`, `Students`, `Total Students`
    - p36 table (27 rows): `Grade`, `Absenteeism Risk Tier`, `Percentage`, `Students`, `Total Students`
  - [`2023-24 Attendance Brief`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2023-24%20Attendance%20Brief.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (2 rows): `36.9%`
    - p2 table (11 rows): `2023-24 MID-YEAR ATTENDANCE BRIEF`
    - p2 table (2 rows): 
  - [`Data File: 2023-24 Truancy Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2023-24%20Truancy%20Data.xlsx) — **xlsx** — 2 tab(s)
    - tab **Overview** (3 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School** (243 rows × 3 cols) — cols: `School`, `% Truant, 2022-23 (Compulsory Age)`, `% Truant, 2023-24 (Compulsory Age)`
  - [`Data File: 2023-24 Chronic Absenteeism Metric Scores`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2023-24%20Chronic%20Absenteeism%20Metric%20Scores%20%281%29.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (20 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Data Dictionary** (54 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **State Overall Scores** (217 rows × 5 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **School Overall Scores** (9,091 rows × 9 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **LEA Overall Scores** (2,401 rows × 7 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`
    - tab **State Framework Scores** (505 rows × 6 cols) — cols: `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **School Framework Scores** (9,961 rows × 10 cols) — cols: `LEA Name`, `LEA Code`, `School Name`, `School Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
    - tab **LEA Framework Scores** (3,091 rows × 8 cols) — cols: `LEA Name`, `LEA Code`, `Student Group`, `Metric`, `Metric Score`, `Metric N`, `School Year`, `School Framework`
  - [`2023-24 Mid-Year Attendance Brief 1 (July 10-Nov. 24, 2023)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Mid_Year%20Attendance_1Pager%203_29_2024.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (2 rows): `8.4%`
    - p2 table (6 rows): `2023-24 MID-YEAR ATTENDANCE BRIEF`
    - p2 table (2 rows): `48.8%`
  - [`Data File: 2023-24 Mid-Year Attendance Brief 1`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Data%20File%20-%202023-24%20Mid-Year%20Attendance%20Brief%201%20%28July%2010-Nov.%2024%202023%29.xlsx) — **xlsx** — 6 tab(s)
    - tab **Overview** (4 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School** (465 rows × 7 cols) — cols: `School Year`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **LEA** (122 rows × 5 cols) — cols: `School Year`, `LEA Code`, `LEA Name`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **Sector** (5 rows × 4 cols) — cols: `School Year`, `Sector`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **State** (59 rows × 6 cols) — cols: `Grade Band`, `Student Group`, `% Chronically Absent (23-24)`, `% Chronically Absent (22-23)`, `% Chronically Truant, (Compulsory Age) (23-24)`, `% Chronically Truant, (Compulsory Age) (22-23)`
    - tab **Risk Tiers** (51 rows × 6 cols) — cols: `School Year`, `Grade Band`, `Absenteeism Risk Tier`, `Percentage`, `Students`, `Total Students`
  - [`2023-24 Mid-Year Attendance Brief 2 (July 10, 2023-March 1, 2024)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Mid_Year_Attendance_1Pager%206_14_2024.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (2 rows): `ATTENDANCE SUMMARY The data in this brief reflects attendance data from the start of the school year through March 1, 2024, and compares it to the same window in the 2022-23 school year. Compared to the same point last year: CHRONIC ABSENTEEISM CHRONIC TRUANCY DECREASED BY 4.3 DECREASED BY 5.2 PERCENTAGE POINTS PERCENTAGE POINTS 39.6% Chronic Absenteeism 35.3% 21.4% Chronic Truancy 16.2% 0 5 10 15 20 25 30 35 40 Note: The date range for SY2022-23 attendance is July 1, 2022 - March 3, 2023. The date range for SY2023-24 attendance is July 10, 2023 - March 24, 2024.`
    - p1 table (2 rows): `39.6%`
    - p1 table (2 rows): `21.4%`
  - [`Data File: 2023-24 Mid-Year Attendance Brief 2`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Data%20File%20-%202023-24%20Mid-Year%20Attendance%20Brief%202%20%28July%2010%2C%202023-March%201%2C%202024.xlsx) — **xlsx** — 6 tab(s)
    - tab **Overview** (4 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **School** (465 rows × 7 cols) — cols: `School Year`, `LEA Code`, `LEA Name`, `School Code`, `School Name`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **LEA** (122 rows × 5 cols) — cols: `School Year`, `LEA Code`, `LEA Name`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **Sector** (5 rows × 4 cols) — cols: `School Year`, `Sector`, `% Chronically Absent (K-12)`, `% Chronically Truant (Compulsory Age)`
    - tab **State** (59 rows × 6 cols) — cols: `Grade Band`, `Student Group`, `% Chronically Absent (23-24)`, `% Chronically Absent (22-23)`, `% Chronically Truant, (Compulsory Age) (23-24)`, `% Chronically Truant, (Compulsory Age) (22-23)`
    - tab **Risk Tiers** (51 rows × 6 cols) — cols: `School Year`, `Grade Band`, `Absenteeism Risk Tier`, `Percentage`, `Students`, `Total Students`
  - [`2016-17 School Year Attendance Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/SY16-17AttendanceReport.FINAL_.pdf) — **pdf** — 62 pages, **extractable tables** on ~59 page(s)
    - p4 table (3 rows): 
    - p5 table (3 rows): 
    - p6 table (3 rows): 

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
  - [`Adjusted Cohort Graduation Rates School by School 2012-2013`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/GraduationbySchool_2013ACGR%20%282%29.pdf) — **pdf** — 3 pages, **extractable tables** on ~2 page(s)
    - p1 table (33 rows): `School`, `2009`, `2013 Graduates`, `4-year ACGR`, `2014 Graduates`, `5-year ACGR`
    - p1 table (2 rows): `2013`
    - p1 table (2 rows): `4-year`
  - [`Adjusted Cohort Graduation Rate Overview 2012-2013`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2013_ACGR_summary_wnongrad.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (5 rows): `Total Number of Students`, `Four Year Graduates`, `Non-Graduates`
    - p2 table (5 rows): `Total Number of Students`, `Five Year Graduates`, `Non-Graduates`
  - [`Adjusted Cohort Graduation Rates School by School Subgroup 2012-2013`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2013_ACGR_summary_subgroup%20%282%29.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (6 rows): `2013 4-year ACGR by Subgroup`
    - p1 table (6 rows): `2014 5-year ACGR by Subgroup`
  - [`Adjusted Cohort Graduation Rate Overview 2013-14`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Adjusted%20Cohort%20Graduation%20Rate%20Overview%202013-14.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (5 rows): `Total Number of Students`, `Four Year Graduates`, `Non-Graduates`
    - p2 table (5 rows): `Total Number of Students`, `Five Year Graduates`, `Non-Graduates`
  - [`Adjusted Cohort Graduation Rate by Subgroup 2013-14`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Adjusted%20Cohort%20Graduation%20Rate%20by%20Subgroup%202013-14.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (6 rows): `2014 4-year ACGR by Subgroup`
    - p1 table (6 rows): `2015 5-year ACGR by Subgroup`
  - [`Adjusted Cohort Graduation Rate School by School 2013-14`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Adjusted%20Cohort%20Graduation%20Rate%20School%20by%20School%202013-14.pdf) — **pdf** — 4 pages, **extractable tables** on ~2 page(s)
    - p1 table (22 rows): `School`, `Cohort`, `2014`, `2014`, `2015`, `5-year`
    - p2 table (28 rows): `Thurgood Marshall Academy PCS 89 68 76.4% 6 83.1%`
  - [`Adjusted Cohort Graduation Rate Overview 2014-15`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Adjusted%20Cohort%20Graduation%20Rate%20Overview%202014-15.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (6 rows): `Total Number of Students`, `Four Year Graduates`, `Non-Graduates`
  - [`Adjusted Cohort Graduation Rate by Subgroup 2014-15`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Adjusted%20Cohort%20Graduation%20Rate%20by%20Subgroup%202014-15.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (7 rows): `2015 ACGR by Subgroup`
  - [`Adjusted Cohort Graduation Rate School by School 2014-15`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Adjusted%20Cohort%20Graduation%20Rate%20School%20by%20School%202014-15.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (33 rows): `School`, `Cohort`, `Graduates`, `2015`
    - p2 table (19 rows): `Ellington School of the Arts 132 115 87.1%`
  - [`Adjusted Cohort Graduation Rate Overview 2015-16`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Adjusted%20Cohort%20Graduation%20Rate%20Overview%202015-16.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (6 rows): `Total Number of Students`, `Four Year Graduates`, `Non-Graduates`
  - [`Adjusted Cohort Graduation Rate by Subgroup 2015-16`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Adjusted%20Cohort%20Graduation%20Rate%20by%20Subgroup%202015-16.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (6 rows): `2016 four-year ACGR by Subgroup`
  - [`Adjusted Cohort Graduation Rate School by School 2015-16`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Adjusted%20Cohort%20Graduation%20Rate%20School%20by%20School%202015-16.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (34 rows): `School`, `Graduates`, `Cohort`, `2016`
    - p2 table (17 rows): `Eastern HS 221 278 79.5`
  - [`Public SY1617 ACGR Rates_`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Public%20SY1617%20ACGR%20Rates_.xlsx) — **xlsx** — 3 tab(s)
    - tab **2016-17 Rate Overview** (14 rows × 1 cols) — cols: `DC 2017 ADJUSTED COHORT 4-YEAR GRADUATION RATE`
    - tab **2016-17 Student Group Rates** (15 rows × 1 cols) — cols: `DC 2017 4-year Adjusted Cohort Graduation Rates,`
    - tab **2016-17 Rate by School** (51 rows × 1 cols) — cols: `DC 2017 4-year Adjusted Cohort Graduation Rates,`
  - [`2017-18 School Year ACGR Four Year Rates`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Public%20SY1718%20ACGR%20Rates%2011.14.18.xlsx) — **xlsx** — 3 tab(s)
    - tab **2017-18 Rate Overview** (14 rows × 1 cols) — cols: `DC 2018 ADJUSTED COHORT 4-YEAR GRADUATION RATE`
    - tab **2017-18 Student Group Rates** (15 rows × 1 cols) — cols: `DC 2018 four-year Adjusted Cohort Graduation Rates,`
    - tab **2017-18 Rate by School** (52 rows × 1 cols) — cols: `DC 2018 4-year Adjusted Cohort Graduation Rates,`
  - [`2017-18 School Year ACGR Five Year Rates`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Public%20SY1718%20ACGR%20Rates_Five_Year.xlsx) — **xlsx** — 3 tab(s)
    - tab **2017-18 Rate Overview** (14 rows × 1 cols) — cols: `DC 2018 ADJUSTED COHORT 5-YEAR GRADUATION RATE`
    - tab **2017-18 Student Group Rates** (15 rows × 1 cols) — cols: `DC 2018 5-year Adjusted Cohort Graduation Rates,`
    - tab **2017-18 Rate by School** (50 rows × 1 cols) — cols: `DC 2018 5-year Adjusted Cohort Graduation Rates,`
  - [`2018-19 School Year Public ACGR Rates 4-Year`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2018-19%20School%20Year%20Public%20ACGR%20Rates%204-Year.xlsx) — **xlsx** — 3 tab(s)
    - tab **2018-19 Rate Overview** (15 rows × 1 cols) — cols: `DC 2019 ADJUSTED COHORT 4-YEAR GRADUATION RATE`
    - tab **2018-19 Student Group Rates** (15 rows × 1 cols) — cols: `DC 2019 4-year Adjusted Cohort Graduation Rates, by student group`
    - tab **2018-19 Rate by School** (49 rows × 1 cols) — cols: `DC 2019 4-year Adjusted Cohort Graduation Rates,`
  - [`2018-19 School Year Public ACGR Rates 5-Year`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2018-19%20School%20Year%20Public%20ACGR%20Rates%205-Year.xlsx) — **xlsx** — 3 tab(s)
    - tab **2018-19 Rate Overview** (15 rows × 1 cols) — cols: `DC 2019 ADJUSTED COHORT 5-YEAR GRADUATION RATE`
    - tab **2018-19 Student Group Rates** (15 rows × 1 cols) — cols: `DC 2019 5-year Adjusted Cohort Graduation Rates, by student group`
    - tab **2018-19 Rate by School** (47 rows × 1 cols) — cols: `DC 2019 5-year Adjusted Cohort Graduation Rates,`
  - [`2019-20 School Year Public ACGR Rates 4-year`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Public%20SY1920%20ACGR%20Rates%204-Year.xlsx) — **xlsx** — 3 tab(s)
    - tab **2019-20 Rate Overview** (15 rows × 1 cols) — cols: `DC 2020 ADJUSTED COHORT 4-YEAR GRADUATION RATE`
    - tab **2019-20 Student Group Rates** (15 rows × 1 cols) — cols: `DC 2020 4-Year Adjusted Cohort Graduation Rates, by Student Group`
    - tab **2019-20 Rate by School** (49 rows × 1 cols) — cols: `DC 2020 4-Year Adjusted Cohort Graduation Rates,`
  - [`2019-20 School Year Public ACGR Rates 5-year`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Public%20SY1920%20ACGR%20Rates%205-Year.xlsx) — **xlsx** — 3 tab(s)
    - tab **2019-20 Rate Overview** (15 rows × 1 cols) — cols: `DC 2020 ADJUSTED COHORT 5-YEAR GRADUATION RATE`
    - tab **2019-20 Student Group Rates** (15 rows × 1 cols) — cols: `DC 2020 5-Year Adjusted Cohort Graduation Rates, by Student Group`
    - tab **2019-20 Rate by School** (47 rows × 1 cols) — cols: `DC 2020 5-Year Adjusted Cohort Graduation Rates,`
  - [`OSSE Postsecondary Access Readiness Series Part 1`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/OSSE%20Postsecondary%20Access%20Readiness%20Series%20Part%201.pdf) — **pdf** — 13 pages, **extractable tables** on ~11 page(s)
    - p3 table (3 rows): 
    - p4 table (3 rows): 
    - p5 table (11 rows): `13413`
  - [`OSSE Postsecondary Access and Readiness Series Part 2`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/OSSE%20Postsecondary%20Access%20and%20Readiness%20Series%20Part%202.pdf) — **pdf** — 16 pages, **extractable tables** on ~2 page(s)
    - p7 table (25 rows): `Graduating Class`, `Subgroup Category`, `Subgroup`, `Total Number`
    - p16 table (18 rows): `Metric Name & Definition`, `Calculation`
    - p16 table (3 rows): `# of students in the adjusted cohort who ever`
  - [`DC Trends: 2011-12 Cohort High School and College Milestones`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/DC%20Trends%202011_12%20Cohort%20High%20School%20and%20College%20Milestones_January_2023.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (3 rows): `MILESTONES Enrolled w/in Persisted Persisted Persisted Persisted Persisted Persisted 24 mos.: Y1 to Y2: Y2 to Y3: Y3 to Y4: Y4 to Y5: 586 Y5 to Y6: 232 Y6 to Y7: 98 2,239 1,678 1,394 1,193 Completed: Graduated in 865 4 years: 3,210 Returned & Cohort: 4,908 completed: 35 SEMOCTUO Returned & still enrolled: 100 Enrolled >24 mos.: 176 Returned & Did not exited: 155 enroll: 795 Did not Exited: 986 graduate in 4 years: 1,698 PATHWAYS 2011-12 2014-15 Through 2017 2022`
    - p2 table (2 rows): `FIGURE 2. 2011-12 First Ninth Grade Year Progress 5000 4000 3000 2000 1000 0 Cohort HS Graduates FAFSA Completers Enrolled in College College Completers 2011-12 Ninth grade cohort Within 6 months of HS graduation High school (HS) diploma Between 6 & 24 mos. after HS graduation Other HS credential (GED, NEDP, IEP certificate) Associate degree`
    - p2 table (5 rows): 

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
  - [`Educator Data Flat File — Preparation and Performance (SY2025-26, Sep 8 2026)`](https://osse.dc.gov/sites/default/files/dc/sites/osse/documents/SY2025-2026%20DC%20Educator%20Data_Preparation%20and%20Performance%2009082026.xlsx) — **xlsx** — 14 tab(s)
    - tab **Overview** (5 rows × 1 cols) — cols: `Office of the State Superintendent of Education`
    - tab **Effective_Tch_SEA** (2 rows × 2 cols) — cols: `Total SY 2025-26 Teachers that were rated in SY 2024-25 Citywide`, `Percent of SY 2025-26 Teachers rated effective in SY 2024-25 Citywide`
    - tab **Certified_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that hold a DC teaching certification (DCPS only)`, `Percent of Teachers that hold a DC teaching certification (DCPS only)`
    - tab **Infield_Tch_SEA** (2 rows × 3 cols) — cols: `Number of Teachers (DCPS only)`, `Number of Teachers that are teaching a subject in-field (DCPS only)`, `Percent of Teachers that are teaching a subject in-field (DCPS only)`
    - tab **Effective_Tch_LEA** (70 rows × 5 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Total SY 2025-26 Teachers that were rated in SY 2024-25 at this LEA`, `Percent of 2025-26 Teachers rated effective in SY 2024-25 at this LEA`
    - tab **Effective_Tch_SCH** (254 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Total SY 2025-26 Teachers that were rated in SY 2024-25 at this school`, `Percent of SY 2025-26 Teachers rated effective in SY 2024-25 at this school`, `Notes`
    - tab **Certified_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that hold a DC teaching certification at this school`, `Percent Teachers that hold a DC teaching certification at this school`
    - tab **Infield_Tch_SCH** (118 rows × 9 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Number of Teachers at this school`, `Number of Teachers that are teaching a subject in-field at this school`, `Percent of Teachers that are teaching a subject in-field at this school`
    - tab **Exp_Tch_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of Teachers Citywide`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SEA** (5 rows × 4 cols) — cols: `Years of Experience`, `Number of School Leaders Citywide`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_LEA** (277 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of Teachers at this LEA`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_LEA** (277 rows × 7 cols) — cols: `LEA Code`, `LEA Name`, `Sector`, `Years of Experience`, `Number of School Leaders at this LEA`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
    - tab **Exp_Tch_SCH** (1,013 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of Teachers at this School`, `Number of Teachers in this experience category`, `Percent of Teachers in this experience category`
    - tab **Exp_School_Leader_SCH** (1,009 rows × 10 cols) — cols: `LEA Code`, `LEA Name`, `School Code`, `School Name`, `Sector`, `Ward of School`, `Years of Experience`, `Number of School Leaders at this School`, `Number of School Leaders in this experience category`, `Percent of School Leaders in this experience category`
  - [`Educator Retention Brief March 2025`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Educator%20Retention%20Brief%20March%202025.pdf) — **pdf** — 4 pages, **extractable tables** on ~3 page(s)
    - p1 table (2 rows): `Total School Staff`, `Teachers`, `Principals`, `Special Education Support Staff`, `Paraprofessionals`, `Students`, `LEAs and SPAs*`, `Schools`
    - p1 table (2 rows): `TEACHER RETENTION In the 2024-25 school year, 84 percent of teachers were retained as teachers in DC, and 76 percent of teachers were retained as teachers in the same school`, `PRINCIPAL RETENTION In the 2024-25 school year, 83 percent of principals were retained as principals in DC, and 78 percent of principals were retained`
    - p2 table (3 rows): `2024-25 District of Columbia Educator Retention Brief`

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
- **Data files (profiled):**
  - [`Public Charter Schools Historic Enrollment Audit by School and Grade`](https://sled.osse.dc.gov/DOCS/PCS_School-by-Grade-Enrollment-Audited_and_Oct_Cert_2001-2009.xls) — **xls** — 1 tab(s)
    - tab **pcsb School-by-Grade Enrollment** (1,679 rows × 1 cols) — cols: `PCS Enrollment, by School and Grade, 2001-2009`
  - [`DCPS Historic Enrollment Audit by School and Grade`](https://sled.osse.dc.gov/DOCS/DCPS_School-by-Grade-Enrollment-Audited_and_Oct_Cert_2001-2009.xls) — **xls** — 1 tab(s)
    - tab **DCPS School-by-Grade Enrollment** (2,641 rows × 1 cols) — cols: `DCPS Enrollment, by School and Grade, 2001-2009`
  - [`DC SEA Indicator Data Fact Sheet (SY2011-12)`](https://sled.osse.dc.gov/DOCS/DC_SEA_FactSheet.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): 
  - [`Ward 1 Indicator Data Fact Sheet (SY2011-12)`](https://sled.osse.dc.gov/DOCS/Ward_1_FactSheet.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): 
    - p1 table (5 rows): `School`, `# of Graduates`, `% Graduated`
  - [`Ward 2 Indicator Data Fact Sheet (SY2011-12)`](https://sled.osse.dc.gov/DOCS/Ward_2_FactSheet.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): 
    - p1 table (3 rows): `School`, `# of Graduates`, `% Graduated`
  - [`Ward 3 Indicator Data Fact Sheet (SY2011-12)`](https://sled.osse.dc.gov/DOCS/Ward_3_FactSheet.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): 
    - p1 table (2 rows): `School`, `# of Graduates`, `% Graduated`
  - [`Ward 4 Indicator Data Fact Sheet (SY2011-12)`](https://sled.osse.dc.gov/DOCS/Ward_4_FactSheet.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): 
    - p1 table (5 rows): `School`, `# of Graduates`, `% Graduated`
  - [`Ward 5 Indicator Data Fact Sheet (SY2011-12)`](https://sled.osse.dc.gov/DOCS/Ward_5_FactSheet.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): 
    - p1 table (8 rows): `School`, `# of Graduates`, `% Graduated`
  - [`Ward 6 Indicator Data Fact Sheet (SY2011-12)`](https://sled.osse.dc.gov/DOCS/Ward_6_FactSheet.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): 
    - p1 table (3 rows): `School`, `# of Graduates`, `% Graduated`
  - [`Ward 7 Indicator Data Fact Sheet (SY2011-12)`](https://sled.osse.dc.gov/DOCS/Ward_7_FactSheet.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): 
    - p1 table (7 rows): `School`, `# of`, `%`
  - [`Ward 8 Indicator Data Fact Sheet (SY2011-12)`](https://sled.osse.dc.gov/DOCS/Ward_8_FactSheet.pdf) — **pdf** — 2 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): 
    - p1 table (4 rows): `School`, `# of Graduates`, `% Graduated`
  - [`Official Graduation Rates Report — 2007-08 First-Time Ninth Grader Cohort`](https://sled.osse.dc.gov/DOCS/Cohort_Grad_Rates410.pdf) — **pdf** — 2 pages, **extractable tables** on ~1 page(s)
    - p2 table (4 rows): `Adjusted Cohort Graduation Method`

### [DC Youth Risk Behavior Survey (YRBS)](https://osse.dc.gov/service/dc-youth-risk-behavior-survey-yrbs)

_topics: school-climate, demographics_

- **Format:** PDF reports + PDF data tables
- **Updated:** Every two years
- **Years on page:** 2012, 2015, 2017, 2019, 2021, 2023 reports; detailed MS/HS data tables 2017-2021
- **Notes:** Student health-behavior survey of DC public middle and high school students (CDC YRBS instrument). Statewide only (no school-level results). Detailed middle/high school summary tables, trend reports and academic-achievement cross-tabs for 2017, 2019 and 2021 are on separate 'data files' pages. Added 2026-11-01; questionnaires, infographics and fact sheets are not catalogued.
- **Data files (profiled):**
  - [`2023 DC YRBS Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/2023%20DC%20Youth%20Risk%20Behavior%20Survey%20Report%20%281%29.pdf) — **pdf** — 68 pages, **extractable tables** on ~41 page(s)
    - p5 table (3 rows): 
    - p7 table (5 rows): `↔`, `No significant change`
    - p10 table (3 rows): `MIDDLE SCHOOL`, `HIGH SCHOOL`
  - [`2015 YRBS Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2015%20YRBS%20Report.pdf) — **pdf** — 76 pages, **extractable tables** on ~40 page(s)
    - p5 table (2 rows): 
    - p10 table (3 rows): 
    - p16 table (6 rows): `Current (past 30-day) substance use`, `Middle School`, `High School`, `Middle School Average Age of First Use`, `High School Average Age of First Use`
  - [`2017 YRBS Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20YRBS%20Report.pdf) — **pdf** — 52 pages, **extractable tables** on ~22 page(s)
    - p10 table (3 rows): `Middle School`, `High School`
    - p10 table (2 rows): 
    - p12 table (2 rows): 
  - [`2019 DC YRBS Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2019%20DC%20YRBS%20Report.pdf) — **pdf** — 58 pages, **extractable tables** on ~26 page(s)
    - p10 table (3 rows): `Middle School`, `High School`
    - p13 table (2 rows): 
    - p13 table (2 rows): 
  - [`2021 Youth Risk Behavior Survey Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2021%20Youth%20Risk%20Behavior%20Survey%20Report.pdf) — **pdf** — 52 pages, **extractable tables** on ~30 page(s)
    - p7 table (3 rows): `MIDDLE SCHOOL`, `HIGH SCHOOL`
    - p9 table (2 rows): `23.9%`, `29.8%`, `18.0%`, `21.8%`, `1`
    - p9 table (2 rows): `9.1%`, `9.2%`, `28.7%`, `45.3%`
  - [`2017 DC Middle School Academic Achievement`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2017%20DC%20Middle%20School%20Academic%20Achievement.pdf) — **pdf** — 72 pages (narrative; no extractable tables)
  - [`2017 DC Middle School Summary Tables`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2017%20DC%20Middle%20School%20Summary%20Tables.pdf) — **pdf** — 54 pages, **extractable tables** on ~54 page(s)
    - p1 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) MMiiddddllee SScchhooooll SSuurrvveeyy SSuummmmaarryy TTaabblleess -- WWeeiigghhtteedd DDaattaa`
    - p2 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) MMiiddddllee SScchhooooll SSuurrvveeyy SSuummmmaarryy TTaabblleess -- WWeeiigghhtteedd DDaattaa`
    - p3 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) MMiiddddllee SScchhooooll SSuurrvveeyy SSuummmmaarryy TTaabblleess -- WWeeiigghhtteedd DDaattaa`
  - [`2017 DC Middle School Sample Description`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20Middle%20School%20Sample%20Description.pdf) — **pdf** — 2 pages (narrative; no extractable tables)
  - [`2017 DC Middle School Sample Statistics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20Middle%20School%20Sample%20Statistics.pdf) — **pdf** — 7 pages (narrative; no extractable tables)
  - [`2017 DC Middle School Sexual Identity Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20Middle%20School%20Sexual%20Identity%20Summary.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) MMiiddddllee SScchhooooll SSuurrvveeyy SSeexxuuaall IIddeennttiittyy SSuummmmaarryy -- WWeeiigghhtteedd DDaattaa`
    - p2 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) MMiiddddllee SScchhooooll SSuurrvveeyy SSeexxuuaall IIddeennttiittyy SSuummmmaarryy -- WWeeiigghhtteedd DDaattaa`
  - [`2017 DC Middle School Sexual Identity`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20Middle%20School%20Sexual%20Identity.pdf) — **pdf** — 13 pages (narrative; no extractable tables)
  - [`2017 DC Middle School Summary Graphs`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20Middle%20School%20Summary%20Graphs.pdf) — **pdf** — 4 pages (narrative; no extractable tables)
  - [`2017 DC Middle School Survey Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20Middle%20School%20Survey%20Summary.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) MMiiddddllee SScchhooooll SSuurrvveeyy SSuurrvveeyy SSuummmmaarryy`
  - [`2017 DC Middle School Trend Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20Middle%20School%20Trend%20Report.pdf) — **pdf** — 78 pages (narrative; no extractable tables)
  - [`2017 DC High School Academic Achievement`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Academic%20Achievement.pdf) — **pdf** — 120 pages (narrative; no extractable tables)
  - [`2017 DC High School Summary Tables`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Summary%20Tables.pdf) — **pdf** — 110 pages, **extractable tables** on ~110 page(s)
    - p1 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) HHiigghh SScchhooooll SSuurrvveeyy SSuummmmaarryy TTaabblleess -- WWeeiigghhtteedd DDaattaa`
    - p2 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) HHiigghh SScchhooooll SSuurrvveeyy SSuummmmaarryy TTaabblleess -- WWeeiigghhtteedd DDaattaa`
    - p3 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) HHiigghh SScchhooooll SSuurrvveeyy SSuummmmaarryy TTaabblleess -- WWeeiigghhtteedd DDaattaa`
  - [`2017 DC High School Graphs`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Graphs.pdf) — **pdf** — 208 pages (narrative; no extractable tables)
  - [`2017 DC High School Sample Description`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Sample%20Description_0.pdf) — **pdf** — 2 pages (narrative; no extractable tables)
  - [`2017 DC High School Sample Statistics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Sample%20Statistics_0.pdf) — **pdf** — 14 pages (narrative; no extractable tables)
  - [`2017 DC High School Sexual Contacts Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Sexual%20Contacts%20Summary_0.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) HHiigghh SScchhooooll SSuurrvveeyy SSeexx ooff SSeexxuuaall CCoonnttaaccttss SSuummmmaarryy -- WWeeiigghhtteedd DDaattaa`
    - p2 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) HHiigghh SScchhooooll SSuurrvveeyy SSeexx ooff SSeexxuuaall CCoonnttaaccttss SSuummmmaarryy -- WWeeiigghhtteedd DDaattaa`
    - p3 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) HHiigghh SScchhooooll SSuurrvveeyy SSeexx ooff SSeexxuuaall CCoonnttaaccttss SSuummmmaarryy -- WWeeiigghhtteedd DDaattaa`
  - [`2017 DC High School Sexual Contacts`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Sexual%20Contacts_0.pdf) — **pdf** — 21 pages (narrative; no extractable tables)
  - [`2017 DC High School Sexual Identity Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Sexual%20Identity%20Summary_0.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) HHiigghh SScchhooooll SSuurrvveeyy SSeexxuuaall IIddeennttiittyy SSuummmmaarryy -- WWeeiigghhtteedd DDaattaa`
    - p2 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) HHiigghh SScchhooooll SSuurrvveeyy SSeexxuuaall IIddeennttiittyy SSuummmmaarryy -- WWeeiigghhtteedd DDaattaa`
  - [`2017 DC High School Sexual Identity`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Sexual%20Identity.pdf) — **pdf** — 22 pages (narrative; no extractable tables)
  - [`2017 DC High School Summary Graphs`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Summary%20Graphs.pdf) — **pdf** — 4 pages, **extractable tables** on ~4 page(s)
    - p1 table (2 rows): `22.1 18.8 16.0 20.5 33.0 45.6 86.6 16.8 76.1`
    - p2 table (2 rows): `77.9 81.2 84.0 79.5 67.0 54.4 13.4 83.2 23.9`
    - p3 table (2 rows): `6.6 5.6 4.8 6.2 9.9 13.7 26.0 5.0 22.8`
  - [`2017 DC High School Survey Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Survey%20Summary.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): `22 00 11 77 YY OO UU TT HH RR II SS KK BB EE HH AA VV II OO RR SS UU RR VV EE YY RR EE SS UU LL TT SS DDiissttrriicctt ooff CCoolluummbbiiaa ((IInncclluuddiinngg CChhaarrtteerr SScchhoooollss)) HHiigghh SScchhooooll SSuurrvveeyy SSuurrvveeyy SSuummmmaarryy`
  - [`2017 DC High School Trend Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20DC%20High%20School%20Trend%20Report.pdf) — **pdf** — 161 pages (narrative; no extractable tables)
  - [`2019 DC Middle School Academic Achievement`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBM%20Academic%20Achievement.pdf) — **pdf** — 78 pages (narrative; no extractable tables)
  - [`2019 DC Middle School Summary Tables`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBM%20Summary%20Tables.pdf) — **pdf** — 64 pages (narrative; no extractable tables)
  - [`2019 DC Middle School Sample Description`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBM%20Sample%20Description.pdf) — **pdf** — 2 pages (narrative; no extractable tables)
  - [`2019 DC Middle School Sample Statistics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBM%20Sample%20Statistics.pdf) — **pdf** — 8 pages (narrative; no extractable tables)
  - [`2019 DC Middle School Sexual Identity Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBM%20Sexual%20Identity%20Summary.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (2 rows): `2 0 1 9 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) Middle School Survey Sexual Identity Summary - Weighted Data`
    - p2 table (2 rows): `2 0 1 9 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) Middle School Survey Sexual Identity Summary - Weighted Data`
  - [`2019 DC Middle School Sexual Identity`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBM%20Sexual%20Identity.pdf) — **pdf** — 17 pages (narrative; no extractable tables)
  - [`2019 DC Middle School Survey Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBM%20Survey%20Summary.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): `2 0 1 9 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) Middle School Survey Survey Summary`
  - [`2019 DC Middle School Trend Report 10 Years`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBM%20Trend%20Report%2010%20Years.pdf) — **pdf** — 90 pages (narrative; no extractable tables)
  - [`2019 DC Middle School Trend Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBM%20Trend%20Report.pdf) — **pdf** — 90 pages (narrative; no extractable tables)
  - [`2019 DC High School Academic Achievement`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBH%20Academic%20Achievement.pdf) — **pdf** — 138 pages (narrative; no extractable tables)
  - [`2019 DC High School Sample Description`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBH%20Sample%20Description.pdf) — **pdf** — 2 pages (narrative; no extractable tables)
  - [`2019 DC High School Sample Statistics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBH%20Sample%20Statistics.pdf) — **pdf** — 15 pages (narrative; no extractable tables)
  - [`2019 DC High School Sexual Contacts Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBH%20Sexual%20Contacts%20Summary.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (2 rows): `2 0 1 9 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Sex of Sexual Contacts Summary - Weighted Data`
    - p2 table (2 rows): `2 0 1 9 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Sex of Sexual Contacts Summary - Weighted Data`
    - p3 table (2 rows): `2 0 1 9 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Sex of Sexual Contacts Summary - Weighted Data`
  - [`2019 DC High School Sexual Contacts`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBH%20Sexual%20Contacts.pdf) — **pdf** — 24 pages (narrative; no extractable tables)
  - [`2019 DC High School Sexual Identity Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBH%20Sexual%20Identity%20Summary.pdf) — **pdf** — 2 pages, **extractable tables** on ~2 page(s)
    - p1 table (2 rows): `2 0 1 9 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Sexual Identity Summary - Weighted Data`
    - p2 table (2 rows): `2 0 1 9 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Sexual Identity Summary - Weighted Data`
  - [`2019 DC High School Sexual Identity`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBH%20Sexual%20Identity.pdf) — **pdf** — 24 pages (narrative; no extractable tables)
  - [`2019 DC High School Summary Tables`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBH%20Summary%20Tables.pdf) — **pdf** — 110 pages (narrative; no extractable tables)
  - [`2019 DC High School Survey Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBH%20Survey%20Summary.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): `2 0 1 9 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Survey Summary`
  - [`2019 DC High School Trend Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019DCBH%20Trend%20Report.pdf) — **pdf** — 166 pages (narrative; no extractable tables)
  - [`2021 DC Middle School Academic Achievement`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBM%20Academic%20Achievement.pdf) — **pdf** — 90 pages (narrative; no extractable tables)
  - [`2021 DC Middle School Summary Tables`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBM%20Summary%20Tables.pdf) — **pdf** — 68 pages (narrative; no extractable tables)
  - [`2021 DC Middle School Sample Description`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBM%20Sample%20Description.pdf) — **pdf** — 2 pages, **extractable tables** on ~1 page(s)
    - p1 table (11 rows): `Analysis`, `Significant`
  - [`2021 DC Middle School Sample Statistics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBM%20Sample%20Statistics.pdf) — **pdf** — 8 pages (narrative; no extractable tables)
  - [`2021 DC Middle School Sexual Identity Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBM%20Sexual%20Identity%20Summary.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (2 rows): `2 0 2 1 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) Middle School Survey Sexual Identity Summary - Weighted Data`
    - p2 table (2 rows): `2 0 2 1 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) Middle School Survey Sexual Identity Summary - Weighted Data`
    - p3 table (2 rows): `2 0 2 1 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) Middle School Survey Sexual Identity Summary - Weighted Data`
  - [`2021 DC Middle School Sexual Identity`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBM%20Sexual%20Identity.pdf) — **pdf** — 22 pages (narrative; no extractable tables)
  - [`2021 DC Middle School Survey Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBM%20Survey%20Summary.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): `2 0 2 1 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) Middle School Survey Survey Summary`
  - [`2021 DC Middle School Trend Report 10 Years`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBM%20Trend%20Report%2010%20Years.pdf) — **pdf** — 120 pages (narrative; no extractable tables)
  - [`2021 DC Middle School Trend Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBM%20Trend%20Report.pdf) — **pdf** — 120 pages (narrative; no extractable tables)
  - [`2021 DC High School Academic Achievement`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBH%20Academic%20Achievement.pdf) — **pdf** — 138 pages (narrative; no extractable tables)
  - [`2021 DC High School Sample Description`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBH%20Sample%20Description.pdf) — **pdf** — 2 pages, **extractable tables** on ~1 page(s)
    - p1 table (11 rows): `Analysis`, `Significant`
  - [`2021 DC High School Sample Statistics`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBH%20Sample%20Statistics.pdf) — **pdf** — 15 pages (narrative; no extractable tables)
  - [`2021 DC High School Sexual Contacts Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBH%20Sexual%20Contacts%20Summary.pdf) — **pdf** — 4 pages, **extractable tables** on ~4 page(s)
    - p1 table (2 rows): `2 0 2 1 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Sex of Sexual Contacts Summary - Weighted Data`
    - p2 table (2 rows): `2 0 2 1 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Sex of Sexual Contacts Summary - Weighted Data`
    - p3 table (2 rows): `2 0 2 1 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Sex of Sexual Contacts Summary - Weighted Data`
  - [`2021 DC High School Sexual Contacts`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBH%20Sexual%20Contacts.pdf) — **pdf** — 28 pages (narrative; no extractable tables)
  - [`2021 DC High School Sexual Identity Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBH%20Sexual%20Identity%20Summary.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (2 rows): `2 0 2 1 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Sexual Identity Summary - Weighted Data`
    - p2 table (2 rows): `2 0 2 1 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Sexual Identity Summary - Weighted Data`
    - p3 table (2 rows): `2 0 2 1 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Sexual Identity Summary - Weighted Data`
  - [`2021 DC High School Sexual Identity`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBH%20Sexual%20Identity.pdf) — **pdf** — 36 pages (narrative; no extractable tables)
  - [`2021 DC High School Summary Tables`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBH%20Summary%20Tables.pdf) — **pdf** — 114 pages (narrative; no extractable tables)
  - [`2021 DC High School Survey Summary`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBH%20Survey%20Summary.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (2 rows): `2 0 2 1 Y O U T H R I S K B E H A V I O R S U R V E Y R E S U L T S District of Columbia (Including Charter Schools) High School Survey Survey Summary`
  - [`2021 DC High School Trend Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021DCBH%20Trend%20Report.pdf) — **pdf** — 205 pages (narrative; no extractable tables)
  - [`2012 YRBS Report`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2012%20DC%20YRBS_OSSE_0.pdf) — **pdf** — 48 pages, **extractable tables** on ~31 page(s)
    - p1 table (3 rows): 
    - p12 table (8 rows): `Alcohol, Tobacco and Other Drugs`
    - p12 table (2 rows): 

### [NAEP (Nation's Report Card) — DC and DCPS results](https://osse.dc.gov/service/national-assessment-educational-progress-naep)

_topics: assessment_

- **Format:** PDF snapshots / presentation
- **Updated:** Every two years
- **Years on page:** 2019 state and TUDA snapshots; 2024 results overview
- **Notes:** Grades 4 and 8 reading and math. 'State' covers all DC public schools (DCPS + charters); TUDA (Trial Urban District Assessment) covers DCPS only. Full results and microdata come from NCES (nationsreportcard.gov). Older 2017 snapshot URLs now redirect to the 2019 snapshots. Added 2026-11-01.
- **Data files (profiled):**
  - [`District of Columbia 2024 Results Overview Presentation`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/2024%20OSSE%20NAEP%20Results%20Presentation%20for%20Website.pdf) — **pdf** — 54 pages, **extractable tables** on ~9 page(s)
    - p7 table (7 rows): `Assessment`, `National Public Overall`, `DC Overall`
    - p21 table (5 rows): `GRADE 4 MATH`
    - p21 table (5 rows): `GRADE 4 READING`
  - [`2019 State 4 Math Snapshot`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2019%20State%204%20Math%20Snapshot%20.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): `76*`, `19*`, `5*`
    - p1 table (3 rows): 
    - p1 table (16 rows): `Percentage at or above NAEP`
  - [`2019 State 4 Read Snapshot`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2019%20State%204%20Read%20Snapshot%20.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): `73*`, `17*`, `8*`
    - p1 table (3 rows): 
    - p1 table (16 rows): `Percentage at or above NAEP`
  - [`2019 State 8 Math Snapshot`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2019%20State%208%20Math%20Snapshot.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): `77*`, `17*`, `4*`
    - p1 table (3 rows): 
    - p1 table (16 rows): `Percentage at or above NAEP`
  - [`2019 State 8 Read Snapshot`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2019%20State%208%20Read%20Snapshot%20.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): `56*`, `32`, `10*`
    - p1 table (3 rows): 
    - p1 table (16 rows): `Percentage at or above NAEP`
  - [`2019 DCPS (TUDA) 4 Math Snapshot`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2019%20DCPS%20%28TUDA%29%204%20Math%20Snapshot%20.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): `29*`, `6*`
    - p1 table (2 rows): `Lower Than 6 Districts`, `Not Significantly Different From 9 Districts`, `Higher Than 11 Districts`
    - p1 table (16 rows): `Percentage at or above NAEP`
  - [`2019 DCPS (TUDA) 4 Read Snapshot`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2019%20DCPS%20%28TUDA%29%204%20Read%20Snapshot.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): `69*`, `22`, `8*`
    - p1 table (2 rows): `Lower Than 6 Districts`, `Not Significantly Different From 7 Districts`, `Higher Than 13 Districts`
    - p1 table (16 rows): `Percentage at or above NAEP`
  - [`2019 DCPS (TUDA) 8 Math Snapshot`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2019%20DCPS%20%28TUDA%29%208%20Math%20Snapshot%20.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): `71*`, `23*`, `5*`
    - p1 table (2 rows): `Lower Than 13 Districts`, `Not Significantly Different From 5 Districts`, `Higher Than 8 Districts`
    - p1 table (16 rows): `Percentage at or above NAEP`
  - [`2019 DCPS (TUDA) 8 Read Snapshot`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/DCPS%20%28TUDA%29%208%20Read%20Snapshot.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (3 rows): `52*`, `38*`, `9*`
    - p1 table (2 rows): `Lower Than 11 Districts`, `Not Significantly Different From 7 Districts`, `Higher Than 8 Districts`
    - p1 table (16 rows): `Percentage at or above NAEP`

### [Healthy Schools Act — School Health Profiles, HSA reports, health & PE assessment](https://osse.dc.gov/service/healthy-schools-act-school-health-profiles)

_topics: school-climate, profiles_

- **Format:** Excel (all-schools data) + PDF
- **Updated:** Annual
- **Years on page:** School Health Profiles data SY2015-16 through SY2025-26; HSA reports 2020, 2024; HPEA results 2011-12, 2012-13
- **Notes:** School Health Profiles are a self-reported per-school survey (health services, PE minutes, nutrition, wellness policy) for every DCPS and charter school, one all-schools Excel per year. HSA reports: https://osse.dc.gov/service/healthy-schools-act-reports. Health and PE assessment (HPEA): https://osse.dc.gov/service/health-and-physical-education-assessment-hpea; only 2011-12 and 2012-13 results are posted. Added 2026-11-01; questionnaires, proctor scripts and LEA guides are not catalogued.
- **Data files (profiled):**
  - [`School Health Profiles — All Schools Data, SY2025-26`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/SY25-26%20SHP%20Data_final_0.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Healthy Schools Act`
    - tab **Section 1** (227 rows × 1 cols) — cols: `School Profile`
    - tab **Section 2** (227 rows × 1 cols) — cols: `Health Services`
    - tab **Section 3** (227 rows × 1 cols) — cols: `Health Education`
    - tab **Section 4** (227 rows × 1 cols) — cols: `Physical Education`
    - tab **Section 5** (227 rows × 1 cols) — cols: `School Nutrition`
    - tab **Section 6** (227 rows × 1 cols) — cols: `Distributing Information`
    - tab **Section 7** (227 rows × 1 cols) — cols: `Environment`
  - [`School Health Profiles — All Schools Data, SY2024-25`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/SY24-25%20SHP%20Data_final_0.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Healthy Schools Act`
    - tab **Section 1** (228 rows × 1 cols) — cols: `SHP Section 1: School Profile`
    - tab **Section 2** (228 rows × 1 cols) — cols: `SHP Section 2: Health Services`
    - tab **Section 3** (228 rows × 1 cols) — cols: `SHP Section 3: Health Education`
    - tab **Section 4** (228 rows × 1 cols) — cols: `SHP Section 4: Physical Education`
    - tab **Section 5** (228 rows × 1 cols) — cols: `SHP Section 5: School Nutrition`
    - tab **Section 6** (228 rows × 1 cols) — cols: `SHP Section 6: Distributing Information`
    - tab **Section 7** (228 rows × 1 cols) — cols: `SHP Section 7: Environment`
  - [`School Health Profiles — All Schools Data, SY2023-24`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/SY%2023-24%20SHP%20Data_final.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Healthy Schools Act`
    - tab **Section 1** (229 rows × 1 cols) — cols: `SHP Section 1: School Profile`
    - tab **Section 2** (229 rows × 1 cols) — cols: `SHP Section 2: Health Services`
    - tab **Section 3** (229 rows × 1 cols) — cols: `SHP Section 3: Health Education`
    - tab **Section 4** (229 rows × 1 cols) — cols: `SHP Section 4: Physical Education`
    - tab **Section 5** (229 rows × 1 cols) — cols: `SHP Section 5: School Nutrition`
    - tab **Section 6** (229 rows × 1 cols) — cols: `SHP Section 6: Distributing Information`
    - tab **Section 7** (229 rows × 1 cols) — cols: `SHP Section 7: Environment`
  - [`School Health Profiles — All Schools Data, SY2022-23`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/SHP%202022-23%20All%20Schools%20Data.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (15 rows × 1 cols) — cols: `Healthy Schools Act`
    - tab **Section 1** (228 rows × 1 cols) — cols: `SHP Section 1: School Profile`
    - tab **Section 2** (228 rows × 1 cols) — cols: `SHP Section 2: Health Services`
    - tab **Section 3** (228 rows × 1 cols) — cols: `SHP Section 3: Health Education`
    - tab **Section 4** (228 rows × 1 cols) — cols: `SHP Section 4: Physical Education`
    - tab **Section 5** (228 rows × 1 cols) — cols: `SHP Section 5: School Nutrition`
    - tab **Section 6** (228 rows × 1 cols) — cols: `SHP Section 6: Distributing Information`
    - tab **Section 7** (228 rows × 1 cols) — cols: `SHP Section 7: Environment`
  - [`School Health Profiles — All Schools Data, SY2021-22`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/SHP%202021-22%20All%20Schools%20Data_0.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (8 rows × 1 cols) — cols: `Healthy Schools Act`
    - tab **School Profile** (229 rows × 7 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q6`
    - tab **Health Services** (229 rows × 26 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q9`, `Q9a`, `Q9b`, `Q10`, `Q10a`, `Q10b` …
    - tab **Health Education Instruction** (232 rows × 21 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q20`, `Q20a`, `Q20b`, `Q21`, `Q21a`, `Q21b` …
    - tab **Physical Education Instruction** (231 rows × 14 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q28`, `Q29`, `Q30`, `Q31`, `Q31a`, `Q31b` …
    - tab **School Nutrition & Wellness Pol** (229 rows × 18 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q34`, `Q34a`, `Q35`, `Q36`, `Q36a`, `Q36b` …
    - tab **Distributing Information** (229 rows × 11 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q40`, `Q41`, `Q41a`, `Q42`, `Q42a`
    - tab **Environment** (231 rows × 30 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q43`, `Q43a`, `Q43b`, `Q43c`, `Q43d`, `Q44` …
  - [`School Health Profiles — All Schools Data, SY2019-20`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/SHP%202019-20%20All%20Schools%20Data.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (7 rows × 1 cols) — cols: `Healthy Schools Act`
    - tab **School Profile** (226 rows × 7 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q6`
    - tab **Health Services** (226 rows × 22 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q9`, `Q9a`, `Q9b`, `Q10`, `Q10a`, `Q11` …
    - tab **Health Education Instruction** (226 rows × 20 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q20`, `Q20a`, `Q20b`, `Q21`, `Q21a`, `Q21b` …
    - tab **Physical Education Instruction** (226 rows × 14 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q28`, `Q29`, `Q30`, `Q31`, `Q31a`, `Q31b` …
    - tab **School Nutrition & Wellness Pol** (226 rows × 14 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q34`, `Q35`, `Q35a`, `Q35b`, `Q36`, `Q37` …
    - tab **Distributing Information** (227 rows × 13 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q39`, `Q39a`, `Q39b`, `Q40`, `Q41`, `Q41a` …
    - tab **Environment** (228 rows × 31 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q43`, `Q43a`, `Q43b`, `Q44`, `Q44a`, `Q44b` …
  - [`School Health Profiles — All Schools Data, SY2018-19`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/HSA__SY1819_All%20Schools%20Data.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (10 rows × 1 cols) — cols: `Healthy Schools Act`
    - tab **School Profile** (226 rows × 7 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q6`
    - tab **Health Services** (226 rows × 22 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q9`, `Q9a`, `Q9b`, `Q10`, `Q10a`, `Q11` …
    - tab **Health Education Instruction** (226 rows × 20 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q20`, `Q20a`, `Q20b`, `Q21`, `Q21a`, `Q21b` …
    - tab **Physical Education Instruction** (226 rows × 12 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q28`, `Q29`, `Q30`, `Q31`, `Q32`, `Q33`
    - tab **School Nutrition & Wellness Pol** (226 rows × 12 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q34`, `Q35`, `Q35a`, `Q35b`, `Q36`, `Q37`
    - tab **Distributing Information** (227 rows × 13 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q38`, `Q39a`, `Q39b`, `Q40`, `Q41`, `Q41a` …
    - tab **Environment** (228 rows × 23 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q43`, `Q43a`, `Q43b`, `Q44`, `Q44a`, `Q44b` …
  - [`School Health Profiles — All Schools Data, SY2017-18`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/HSA_SY17-18%20All%20Schools%20Data.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (10 rows × 1 cols) — cols: `Healthy Schools Act`
    - tab **School Profile** (213 rows × 26 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q6`, `Q6a`, `Q7`, `Q8_PK`, `Q8_K`, `Q8_1` …
    - tab **Health Services** (213 rows × 55 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q10`, `Q10a_AFT`, `Q10a_APT`, `Q10a_NFT`, `Q10a_NPT`, `Q10b_A_DOH` …
    - tab **Health Education Instruction** (213 rows × 86 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q14_Num_HE_teachers`, `Q14a_Name1`, `Q14ai_Email1`, `Q14b_Name2`, `Q14bi_Email2`, `Q14c_Name3` …
    - tab **Physical Education Instruction** (213 rows × 31 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q21_Athletic_Prog`, `Q21_ActiveRecess`, `Q21_AfterSchoolActiv`, `Q21_BikeToSchool`, `Q21_MovInClass`, `Q21_NONE` …
    - tab **School Nutrition & Wellness Pol** (213 rows × 53 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q27_WATER`, `QQ28_ALaCarte_FREE`, `Q28_ALaCarte_PUR`, `Q28_ALaCarte_NA`, `Q28_NearCashReg_FREE`, `Q28_NearCashReg_PUR` …
    - tab **Distributing Information** (214 rows × 64 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q32_SchoolHealthCouncil`, `Q33_LWP_ADM`, `Q33_LWP_FSS`, `Q33_LWP_NA`, `Q33_LWP_OTH`, `Q33_LWP_OTH_TXT` …
    - tab **Environment** (215 rows × 163 cols) — cols: `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q36_GARDEN`, `Q36a_NAME`, `Q36a_EMAIL`, `Q37_Field Trips`, `Q37a_NUMBer`, `Q37b_FarmAttended_AliceFerguson` …
  - [`School Health Profiles — All Schools Data, SY2016-17`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/HSA__SY1617_All%20Schools%20Data.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (10 rows × 1 cols) — cols: `Healthy Schools Act`
    - tab **School Profile** (233 rows × 30 cols) — cols: `Question #`, `LEA Group`, `LEA ID`, `SCHOOL CODE`, `WARD`, `LEA NAME`, `SCHOOL NAME`, `Q6`, `Q6a`, `Q7`, `Q8_PK`, `Q8_K` …
    - tab **Health Services** (233 rows × 49 cols) — cols: `Q10`, `Q10a_Allied_FullTime`, `Q10a_Allied_PartTime`, `Q10a_Nurse_FullTime`, `Q10a_Nurse_PartTime`, `Q10b_Allied_DOH`, `Q10b_Allied_Other`, `Q10b_Allied_Other_TEXT`, `Q10b_Allied_SelfFund`, `Q10b_Nurse_DOH`, `Q10b_Nurse_Other`, `Q10b_Nurse_Other_TEXT` …
    - tab **Health Education Instruction** (233 rows × 26 cols) — cols: `Q14_Num_HE_teachers`, `_15_Num_PE_teachers`, `Q16_Num_Both_Teachers`, `Q17_Outside Partner`, `Q17_Partner Name`, `Q18_6-8_Minutes`, `Q18_K-5_Minutes`, `Q19_Minutes_HS_Students`, `Q20_K5_MEH_CURR`, `Q20_K5_N_CURR`, `Q20_K5_SS_CURR`, `Q20_K5_ATD_CURR` …
    - tab **Physical Education Instruction** (233 rows × 25 cols) — cols: `Q21_Athletic_Prog`, `Q21_ActiveRecess`, `Q21_AfterSchoolActiv`, `Q21_BikeToSchool`, `Q21_MovInClass`, `Q21_NONE`, `Q21_OTH`, `Q21_SafeRoutes_School`, `Q21_WS`, `Q21_OTH_TeXT`, `Q22_68_MIN`, `Q22_K5_MIN` …
    - tab **School Nutrition & Wellness Pol** (233 rows × 48 cols) — cols: `Question #`, `Q27_WATER`, `QQ28_ALaCarte_FREE`, `Q28_ALaCarte_PUR`, `Q28_ALaCarte_NA`, `Q28_NearCashReg_FREE`, `Q28_NearCashReg_PUR`, `Q28_NearCashReg_NA`, `Q28_BLunchLine_FREE`, `Q28_BLunchLine_PUR`, `Q28_BLunchLine_NA`, `Q28_InServLine_FREE` …
    - tab **Distributing Information** (233 rows × 59 cols) — cols: `Question #`, `Q32_SchoolHealthCouncil`, `QQ33_LWP_ADM`, `Q33_LWP_FSS`, `Q33_LWP_NA`, `Q33_LWP_OTH`, `Q33_LWP_OTH_TXT`, `Q33_LWP_PTO`, `Q33_LWP_SC`, `Q33_LWP_SMO`, `Q33_LWP_STU`, `Q33_LWP_WEB` …
    - tab **Environment** (233 rows × 126 cols) — cols: `Question #`, `Q36_GARDEN`, `Q37_Field Trips`, `Q37a_NUMBer`, `Q37b_FarmAttended_AliceFerguson`, `Q37b_FarmAttended_Arcadia`, `Q37b_FarmAttended_Calleva`, `Q37b_FarmAttended_CityBlossoms`, `Q37b_FarmAttended_CommonGood`, `Q37b_FarmAttended_RedWiggler`, `Q37b_FarmAttended_Rocklands`, `Q37b_FarmAttended_WashYouthGarden` …
  - [`School Health Profiles — All Schools Data, SY2015-16`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/HSA__SY1516_All%20Schools%20Data.xlsx) — **xlsx** — 8 tab(s)
    - tab **Data Notes** (10 rows × 1 cols) — cols: `Healthy Schools Act`
    - tab **School Profile** (367 rows × 26 cols) — cols: `Question #`, `Q1`, `Q2`, `Q3`, `Q4`, `Q5a`, `Q5b`, `Q6`, `Q6a`, `Q7`, `Q8_PK`, `Q8_K` …
    - tab **Health Services** (272 rows × 46 cols) — cols: `Question #`, `Q2`, `Q3`, `Q5a`, `Q5b`, `Q10`, `_11_ACCESS`, `_11_PID`, `_11_PCD`, `_11_11_STT_InfD`, `_11_11_STT_CHROD`, `_11_OTH` …
    - tab **Health Education Instruction** (225 rows × 47 cols) — cols: `Question #`, `Q2`, `Q3`, `Q5a`, `Q5b`, `Q14`, `Q15`, `Q15_AO_NAME`, `Q16_68_MIN`, `Q16_K5_MIN`, `Q17`, `Q18_K5_AFC_CURR` …
    - tab **Physical Education Instruction** (224 rows × 31 cols) — cols: `Question #`, `Q2`, `Q3`, `Q5a`, `Q5b`, `Q19`, `Q20_AP`, `Q20_AR`, `Q20_ASA`, `Q20_BS`, `Q20_MIC`, `Q20_NO` …
    - tab **School Nutrition & Wellness Pol** (224 rows × 45 cols) — cols: `Question #`, `Q2`, `Q3`, `Q5a`, `Q5b`, `Q28`, `Q29_BLL`, `Q29_BE`, `Q29_NCR`, `Q29_OTH`, `Q29_OTH_TXT`, `Q30` …
    - tab **Distributing Information** (225 rows × 57 cols) — cols: `Question #`, `Q2`, `Q3`, `Q5a`, `Q5b`, `Q34_WG_ADM`, `Q34_WG_FS`, `Q34_WG_PT`, `Q34_WG_SC`, `Q34_WG_MO`, `Q34_WG_STU`, `Q34_WG_SW` …
    - tab **Environment** (226 rows × 119 cols) — cols: `Question #`, `Q2`, `Q3`, `Q5a`, `Q5b`, `Q37`, `Q38`, `Q38a`, `Q38b`, `Q38c`, `Q39`, `Q39a` …
  - [`2024 Health Schools Act Report February 2025`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/2024%20Health%20Schools%20Act%20Report%20-%20February%202025.pdf) — **pdf** — 55 pages, **extractable tables** on ~41 page(s)
    - p6 table (16 rows): `Procured Local Items2`
    - p7 table (4 rows): `Governmental Partners`
    - p10 table (5 rows): `School Campuses with School Gardens3`
  - [`Healthy Schools Act (HSA) Report Draft 11.17.20`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/Healthy%20Schools%20Act%20%28HSA%29%20Report%20Draft_11.17.20.pdf) — **pdf** — 144 pages, **extractable tables** on ~68 page(s) (scan capped)
    - p16 table (8 rows): `School Year`, `Farms Providing Local Items to Schools`
    - p20 table (8 rows): `School Year`, `Funding Mechanism`, `Eligible Grantees`, `Amount`, `Number`, `Number of`
    - p23 table (4 rows): `Data Collection Tool`, `SY2018-19`, `SY2019-20`
  - [`Schools that Received Selected Environmental Education Programming, 2023-24 School Year`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/EE_in_Schools_List_SY23-24.2.6.25.pdf) — **pdf** — 10 pages, **extractable tables** on ~10 page(s)
    - p1 table (32 rows): `SCHOOL`, `Select Environmental Education Student Programs`
    - p2 table (33 rows): `SCHOOL`, `Select Environmental Education Student Programs`
    - p3 table (32 rows): `SCHOOL`, `Select Environmental Education Student Programs`
  - [`Schools that Received Selected Environmental Education Programming, 2022-23 School Year`](https://osse.dc.gov/sites/default/files/dc/sites/osse/service_content/attachments/EE_in_Schools_SY22-23.pdf) — **pdf** — 9 pages, **extractable tables** on ~9 page(s)
    - p1 table (35 rows): `SCHOOL`, `Select Environmental Education Student Programs`
    - p2 table (36 rows): `SCHOOL`, `Select Environmental Education Student Programs`
    - p3 table (35 rows): `SCHOOL`, `Select Environmental Education Student Programs`
  - [`Health & Physical Education Assessment Results, SY2012-13`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/CAS%20Health%20%26%20Physical%20Education%20SY%202012-2013%20Results.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (27 rows): `Grade`, `Students Tested`, `Reporting Category`, `Percent Correct`
  - [`Health & Physical Education Assessment Results, SY2011-12`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/CAS%20Health%20%26%20Physical%20Education%20SY%202011-2012%20Results.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (27 rows): `Grade`, `Students Tested`, `Reporting Category`, `Percent Correct`

### [Community Eligibility Provision (CEP) — schools eligible for universal free meals](https://osse.dc.gov/publication/2018-19-school-year-dc-schools-eligible-community-eligibility-provision)

🗄️ archived/stale · _topics: demographics_

- **Format:** Excel
- **Updated:** Was annual
- **Years on page:** SY2016-17 through SY2018-19
- **Notes:** LEA- and school-level lists with identified-student percentages that determine CEP eligibility (a poverty proxy). Linked from the OSSE Data & Reports hub under 'Free and Reduced-Price Meals Status'; one publication page per year, latest posted is 2018-19. Added 2026-11-01.
- **Data files (profiled):**
  - [`2016-17 School Year CEP Annual Notification of LEAs`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2016-17%20School%20Year%20CEP%20Annual%20Notification%20of%20LEAs.xlsx) — **xlsx** — 1 tab(s)
    - tab **OSSE LEA Spreadsheet** (55 rows × 1 cols) — cols: `State Agency Template Community Eligibility Provision (CEP) Annual Notification of Local Educational Agencies (LEA)`
  - [`2016-17 School Year CEP Annual Notification of Schools`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2016-17%20School%20Year%20CEP%20Annual%20Notification%20of%20Schools.xlsx) — **xlsx** — 1 tab(s)
    - tab **OSSE School Site** (214 rows × 1 cols) — cols: `State Agency Template Community Eligibility Provision (CEP) Annual Notification of Schools`
  - [`2017-18 School Year CEP Annual Notification of LEAs and Schools updated 6-26-17`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017-18%20School%20Year%20CEP%20Annual%20Notification%20of%20LEAs%20and%20Schools%20updated%206-26-17.xlsx) — **xlsx** — 2 tab(s)
    - tab **LEA-wide Notification Report** (2,001 rows × 1 cols) — cols: `State Agency Template Community Eligibility Provision (CEP) Annual Notification of Local Educational Agencies (LEA)`
    - tab **School Notification Report** (14,996 rows × 1 cols) — cols: `State Agency Template Community Eligibility Provision (CEP) Annual Notification of Schools`
  - [`2018-19 School Year CEP Annual Notification of LEAs and Schools`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2018-19%20School%20Year%20CEP%20Annual%20Notification%20of%20LEAs%20and%20Schools.xlsx) — **xlsx** — 2 tab(s)
    - tab **LEA-wide Notification Report** (2,001 rows × 1 cols) — cols: `State Agency Template Community Eligibility Provision (CEP) Annual Notification of Local Educational Agencies (LEA)`
    - tab **School Notification Report** (14,980 rows × 1 cols) — cols: `State Agency Template Community Eligibility Provision (CEP) Annual Notification of Schools`

### [OSSE Equity Reports (2012-17)](https://osse.dc.gov/page/equity-reports)

🗄️ archived/stale · _topics: equity, attendance, discipline, demographics_

- **Format:** Excel + PDF business rules
- **Updated:** Was annual
- **Years on page:** State- and school-level data files for SY2015-16 and SY2016-17
- **Notes:** Cross-sector equity reports (DCPS + charters) that preceded the DC School Report Card; separate from PCSB's charter-only equity reports. Only the 2015-16 and 2016-17 data files and the 2016-17 business rules are linked from this page. Added 2026-11-01.
- **Data files (profiled):**
  - [`2016-17 School Year Equity Report Business Rules`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2016-17%20School%20Year%20Equity%20Reports%20Business%20Rules.pdf) — **pdf** — 50 pages, **extractable tables** on ~45 page(s)
    - p2 table (9 rows): `Metric Name:`, `Percent of enrolled students by race/ ethnicity`, `Percent of enrolled students by gender`, `Percent of enrolled students economically disadvantaged`, `Percent of`, `Percent of students enrolled by English Learner (EL) status`, `Total student enrollment by grade`
    - p2 table (2 rows): `Metric`
    - p2 table (5 rows): `Percent of`
  - [`2016-17 School Year State-Level Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2016-17%20School%20Year%20State-Level%20Data.xlsx) — **xlsx** — 1 tab(s)
    - tab **state_level_data** (480 rows × 7 cols) — cols: `school_year`, `subgroup`, `grade`, `metric`, `population`, `score`, `month`
  - [`2016-17 School Year School-Level Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2016-17%20School%20Year%20School-Level%20Data.xlsx) — **xlsx** — 1 tab(s)
    - tab **school_level_data** (39,075 rows × 9 cols) — cols: `school_year`, `lea_code`, `school_code`, `subgroup`, `grade`, `metric`, `score`, `avg_score`, `month`
  - [`2015-16 School Year State-Level Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2015-16%20School%20Year%20State-Level%20Data.xlsx) — **xlsx** — 1 tab(s)
    - tab **state_level_data** (471 rows × 7 cols) — cols: `school_year`, `subgroup`, `grade`, `metric`, `population`, `score`, `month`
  - [`2015-16 School Year School-Level Data`](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2015-16%20School%20Year%20School-Level%20Data.xlsx) — **xlsx** — 1 tab(s)
    - tab **school_level_data** (37,317 rows × 9 cols) — cols: `school_year`, `lea_code`, `school_code`, `subgroup`, `grade`, `metric`, `score`, `avg_score`, `month`

### [Non-Resident Student Review and Findings Reports](https://osse.dc.gov/page/osse-data-and-reports)

_topics: enrollment_

- **Format:** PDF
- **Updated:** Annual
- **Years on page:** SY2023-24 through SY2025-26
- **Notes:** Results of OSSE's residency verification: students enrolled in DC public schools found to be non-residents, by LEA. Linked from the 'Enrollment in Public Schools' section of the Data & Reports hub. Added 2026-11-01.
- **Data files (profiled):**
  - [`Non-Resident Student Review and Findings Report, SY2023-24`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SY23-24%20Non-Resident%20Student%20Review%20and%20Findings%20Report.pdf) — **pdf** — 8 pages, **extractable tables** on ~2 page(s)
    - p7 table (37 rows): `LEA`, `Student Count`, `LEA Case Count`, `Open`, `Closed`
    - p8 table (8 rows): `LEA`, `Number of`, `Total Tuition Assessed`
    - p8 table (5 rows): `LEA`, `Number of`, `Total Tuition`, `Total Tuition`, `Balance Owed (as of Aug. 7, 2024)`
  - [`Non-Resident Student Review and Findings Report, SY2024-25`](https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SY24-25%20Non-Resident%20Student%20Review%20and%20Findings%20Report.pdf) — **pdf** — 8 pages, **extractable tables** on ~2 page(s)
    - p7 table (35 rows): `LEA`, `Closed`, `Open`, `Duplicate`, `Non-Resident`, `Resident`, `Withdrawn`, `Total`
    - p8 table (8 rows): `LEA`, `Number of`, `Total Tuition Assessed`
    - p8 table (6 rows): `LEA`, `Number of`, `Total Tuition`, `Total Tuition`, `Balance Owed (as of Aug.`
  - [`Non-Resident Student Review and Findings Report, SY2025-26`](https://osse.dc.gov/sites/default/files/dc/sites/osse/documents/SY25-26-Non-Residency-Report.pdf) — **pdf** — 9 pages, **extractable tables** on ~2 page(s)
    - p7 table (36 rows): `LEA`, `Open`, `Closed`, `Total`, `Closed (Duplicate)`, `Closed`, `Closed (Resident)`, `Closed (Withdrawn)`
    - p7 table (2 rows): `Closed`
    - p7 table (2 rows): `Closed`

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
- **Data files (profiled):**
  - [`DCPS Annual Attendance Report SY 2024-2025`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY%202024-2025%20Annual%20Attendance%20Report.pdf) — **pdf** — 24 pages, **extractable tables** on ~17 page(s)
    - p3 table (4 rows): `Metric`, `SY 23-24`, `SY24-25`
    - p6 table (15 rows): `Grade`, `Compulsory Aged Students`, `#1-5 Absences`, `%1-5 Absences`, `#6-10 Absences`, `% 6-10 Absences`, `#11-20 Absences`, `%11-20 Absences`
    - p6 table (3 rows): `Compulsory`
  - [`DCPS Annual Attendance Report SY 2023-2024`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20Annual%20Attendance%20Report%20SY%202023-2024.pdf) — **pdf** — 20 pages, **extractable tables** on ~14 page(s)
    - p3 table (4 rows): `Metric`, `SY 22-23`, `SY 23-24`
    - p5 table (16 rows): `Grade`, `Compulsory`, `#1-5`, `% 1-5`, `#6-10`, `%6-10`, `#11-20`, `%11-20`
    - p8 table (10 rows): `There are several potential factors that contribute to increased absenteeism in the early grades. Parents and`
  - [`DCPS Annual Attendance Report SY 2022-2023`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20Annual%20Attendance%20Report%20SY%202022-2023.pdf) — **pdf** — 26 pages, **extractable tables** on ~13 page(s)
    - p10 table (5 rows): `Change from SY`
    - p10 table (15 rows): `Metric`, `Grade`, `SY22-23`
    - p11 table (16 rows): `Grade`, `Truancy Aged`, `# 1-5`, `% 1-5`, `# 6-10`, `% 6-10`, `# 11-20`, `% 11-20`
  - [`DCPS Annual Attendance Report SY 2021-2022`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/Annual%20Attendance%20Report%20final_1.pdf) — **pdf** — 28 pages, **extractable tables** on ~20 page(s)
    - p4 table (4 rows): `research- based Multi-Tiered Systems of Support (MTSS) framework2 to address student learning needs.`
    - p4 table (2 rows): `Additionally, as articulated in the CEP, DCPS is strategically using federal funding to support accelerated`
    - p5 table (6 rows): `Superintendent of Education (OSSE) to implement the Chronic Absenteeism Reduction`
  - [`DCPS Annual Attendance Report SY 2020-2021`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-Annual-Attendance-Report-SY-2020-2021.pdf) — **pdf** — 29 pages, **extractable tables** on ~19 page(s)
    - p3 table (11 rows): `In early November 2020, DCPS took steps to support students in-person through introducing a phased`
    - p3 table (3 rows): `SY20-21, DCPS set forth clear expectations for both students and school staff regarding attendance`
    - p3 table (5 rows): `For CARE classes, teachers took in-person attendance for cohort and safety purposes and notified`
  - [`DCPS Annual Attendance Report SY 2019-2020`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20Annual%20Attendance%20Report%20SY%202019-2020.pdf) — **pdf** — 27 pages, **extractable tables** on ~12 page(s)
    - p6 table (18 rows): `Grade`, `Truancy`, `# 1-5 Absences`, `% 1-5 Absences`, `# 6-10 Absences`, `% 6-10 Absences`, `# 11-20 Absences`, `% 11-20 Absences`
    - p6 table (2 rows): `# 1-5`
    - p6 table (2 rows): `% 1-5`
  - [`DCPS Annual Attendance Report SY 2018-2019`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/Final-Attendance-Report-SY18-19.pdf) — **pdf** — 27 pages, **extractable tables** on ~14 page(s)
    - p6 table (17 rows): `Grade`, `Truancy Age`, `# 1-5`, `% 1-5`, `# 6-10`, `% 6-10`, `# 11-20`, `% 11-20`
    - p8 table (6 rows): 
    - p9 table (6 rows): 
  - [`DCPS Annual Attendance Report SY 2017-2018`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20Annual%20Attendance%20Report%20SY%202017-2018.pdf) — **pdf** — 26 pages, **extractable tables** on ~12 page(s)
    - p5 table (19 rows): `Grade`, `Truancy`, `# 1-5 Absences`, `% 1-5 Absences`, `# 6-10 Absences`, `% 6-10 Absences`, `# 11-20 Absences`, `% 11-20 Absences`
    - p5 table (2 rows): `# 1-5`
    - p5 table (2 rows): `% 1-5`
  - [`DCPS Annual Attendance Report SY 2016-2017`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20Annual%20Attendance%20Report%20SY1617_FINAL.pdf) — **pdf** — 9 pages, **extractable tables** on ~4 page(s)
    - p3 table (19 rows): `Grade`, `Enrollment`, `# 1-5`, `% 1-5`, `# 6-10`, `% 6-10`, `# 11-20`, `% 11-20`
    - p4 table (2 rows): `DCPS believes that our overall attendance work is driven by four strategies: reducing truancy, increasing the`
    - p5 table (10 rows): 
  - [`DCPS Annual Attendance Report SY 2015-2016 Supplement`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/Supplement%20to%20DCPS%202015%20Annual%20Attendance%20Report_FINAL.pdf) — **pdf** — 8 pages, **extractable tables** on ~6 page(s)
    - p2 table (6 rows): `# %`
    - p3 table (6 rows): `# %`
    - p4 table (6 rows): `# %`
  - [`DCPS Annual Attendance Report SY 2015-2016`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20Annual%20Attendance%20Report_SY1516_FINAL.pdf) — **pdf** — 9 pages, **extractable tables** on ~3 page(s)
    - p4 table (20 rows): `Grade`, `Enrollment`, `# 1-5`, `% 1-5`, `# 6-10 Absences`, `% 6-10`, `# 11-20`, `% 11-20`
    - p6 table (11 rows): 
    - p7 table (11 rows): 
  - [`DCPS Annual Attendance Report SY 2014-2015`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS_Annual_Attendance_Report_SY1415_FINAL.pdf) — **pdf** — 9 pages, **extractable tables** on ~3 page(s)
    - p4 table (20 rows): `# 1-5`, `% 1-5`, `# 6-10`, `% 6-10`, `# 11-20`, `% 11-20`, `# 21+`, `% 21+`
    - p6 table (15 rows): 
    - p7 table (12 rows): `420`
  - [`DCPS Annual Attendance Report SY 2013-2014`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS_Annual_Attendance%20Report_SY1314_FINAL.pdf) — **pdf** — 10 pages, **extractable tables** on ~3 page(s)
    - p4 table (20 rows): `Grade Level`, `Enrolled`, `Unexcused Absences`
    - p4 table (2 rows): `Grade`
    - p6 table (11 rows): `236 215`
  - [`DCPS Annual Attendance Report SY 2012-2013`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS_Annual_Attendance_Report_SY12-13_FINAL.PDF) — **pdf** — 9 pages, **extractable tables** on ~1 page(s)
    - p4 table (21 rows): `Unexcused Absences`
  - [`DCPS Annual Attendance Report SY 2011-2012`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS_Annual_Attendance_Report_SY11-12%20FINAL.pdf) — **pdf** — 11 pages, **extractable tables** on ~2 page(s)
    - p3 table (23 rows): `Grade`, `Enrolled`, `Unexcused Absences`
    - p11 table (11 rows): `District`, `Child`, `% FARM`, `Public`, `General Student`, `Eligibility Criteria`
  - [`DCPS Annual Attendance Report SY 2025-2026`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/documents/DCPS%20SY%202025-2026%20Annual%20Attendance%20Report.pdf) — **pdf** — 25 pages, **extractable tables** on ~19 page(s)
    - p3 table (4 rows): `Metric`, `SY24-25`, `SY25-26`
    - p5 table (17 rows): `Grade`, `Compulsory`, `#1-5 Absences`, `%1-5 Absences`, `#6-10 Absences`, `% 6-10 Absences`, `#11-20 Absences`, `%11-20 Absences`
    - p5 table (2 rows): `#1-5`

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
  - [`2014 DC CAS Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2014%20DC%20CAS%20Presentation.pdf) — **pdf** — 13 pages, **extractable tables** on ~11 page(s)
    - p2 table (9 rows): `.6`
    - p2 table (8 rows): `.8`
    - p2 table (8 rows): `.3`
  - [`2013 DC CAS Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2013%20DC%20CAS%20Presentation.pdf) — **pdf** — 43 pages, **extractable tables** on ~26 page(s)
    - p4 table (2 rows): 
    - p4 table (2 rows): 
    - p6 table (2 rows): `3500 3000 2500 2000 Advanced 2012 1500 Advanced 2013 1000 3900 500 3800 0 3700 Reading Math 3600`
  - [`2012 DC CAS Presentation`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2012%20DC%20CAS%20Presentation.pdf) — **pdf** — 29 pages, **extractable tables** on ~9 page(s)
    - p8 table (6 rows): `21%`, `41%`, `33%`, `5%`
    - p8 table (6 rows): `31%`, `40%`, `23%`
    - p8 table (6 rows): `27%`, `44%`, `24%`, `6%`

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

🗄️ archived/stale · _topics: enrollment, demographics, landing_

- **Format:** PDF (2-page fact sheet)
- **Updated:** Annual (2025 ed. published Mar 2025)
- **Years on page:** Latest year; older editions only via direct PDF URLs
- **Notes:** District-wide 'by the numbers.' Prior-year editions have no central archive — classic fragmentation. As of 2026-11-01 the 2025 page returns 'Access denied' (HTTP 403) in a browser as well as to scripts, which is how dc.gov serves unpublished pages. No 2026 edition was found (/featured-content/dcps-fast-facts-2026 is 404) and the DCPS homepage no longer links Fast Facts.

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
- **Data files (profiled):**
  - [`2022 Panorama Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/Panorama%20Spring%202022%20Public%20Report.pdf) — **pdf** — 6 pages, **extractable tables** on ~4 page(s)
    - p1 table (3 rows): `2022 Panorama Survey Highlights`
    - p1 table (2 rows): `DCPS Vision`
    - p4 table (6 rows): `Five Takeaways from the`
  - [`2021 Panorama Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/Spring-2021-Panorama-Report.pdf) — **pdf** — 10 pages, **extractable tables** on ~8 page(s)
    - p1 table (2 rows): `2021 Panorama Survey Highlights`
    - p1 table (9 rows): `Some key results and outcomes were…`
    - p1 table (3 rows): 
  - [`2019 Panorama Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2019-Panorama-Survey-Report-FINAL.pdf) — **pdf** — 57 pages, **extractable tables** on ~34 page(s)
    - p3 table (3 rows): 
    - p6 table (19 rows): 
    - p6 table (15 rows): 
  - [`2018 Panorama Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2018PanoramaSurveyReport_0.pdf) — **pdf** — 35 pages, **extractable tables** on ~23 page(s)
    - p3 table (3 rows): 
    - p5 table (23 rows): 
    - p5 table (15 rows): 
  - [`2017 Stakeholder Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2017StakeholderSurveyReportFinal.pdf) — **pdf** — 24 pages, **extractable tables** on ~18 page(s)
    - p3 table (3 rows): 
    - p3 table (3 rows): 
    - p4 table (6 rows): `Stakeholder Group`, `2017 Response Rate`
  - [`2016 Stakeholder Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2016StakeholderSurveyReport.pdf) — **pdf** — 23 pages, **extractable tables** on ~13 page(s)
    - p3 table (3 rows): 
    - p4 table (6 rows): `Stakeholder Group`, `2016 Response Rate`
    - p4 table (4 rows): `95%94% 90% 88% 88% 85% 76%76% 76% 71% 69% 67% 63% 62% 54% 51% 45% 40% 20% 18% 18%`
  - [`2015 Stakeholder Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2015StakeholderSurveyReportFINAL.pdf) — **pdf** — 40 pages, **extractable tables** on ~31 page(s)
    - p4 table (6 rows): `Stakeholder Group`, `2015 Response Rate`
    - p4 table (2 rows): `95%`
    - p4 table (2 rows): `88%`
  - [`2014 Stakeholder Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2014StakeholderSurveyReportFINAL.pdf) — **pdf** — 50 pages, **extractable tables** on ~36 page(s)
    - p5 table (8 rows): `Stakeholder Group`, `2014 Response Rate`
    - p7 table (3 rows): `87%`
    - p7 table (3 rows): `87%`
  - [`2013 Stakeholder Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2013StudentSurveyReportFINAL.pdf) — **pdf** — 25 pages, **extractable tables** on ~17 page(s)
    - p6 table (2 rows): 
    - p6 table (2 rows): 
    - p6 table (3 rows): 
  - [`2011 Stakeholder Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/DCPS%20District%20Level%20Report%20FINAL%20102011.pdf) — **pdf** — 71 pages, **extractable tables** on ~36 page(s)
    - p1 table (2 rows): `Stakeholder Surveys 2011`
    - p6 table (10 rows): `Number of`
    - p7 table (10 rows): `Student`, `Parent`
  - [`2019 Panorama Survey Aggregate Data`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/Website-Data-for-Panorama-SY18-19.xlsx) — **xlsx** — 1 tab(s)
    - tab **SY2018-19** (117 rows × 3 cols) — cols: `School Name`, `Response Rate*`, `Student Satisfaction Index (Grades 3-12)`
  - [`2018 Panorama Survey Aggregate Data`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2018%20Aggregate%20Data.xlsx) — **xlsx** — 1 tab(s)
    - tab **Sheet1** (120 rows × 3 cols) — cols: `School Name`, `Response Rate*`, `Student Satisfaction Index`
  - [`2017 Stakeholder Survey Aggregate Data`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2017%20Aggregate%20Survey%20Results.xlsx) — **xlsx** — 5 tab(s)
    - tab **Student Survey** (58 rows × 7 cols) — cols: `Question`, `Wording`, `Total Respondents`, `Strongly Agree`, `Agree`, `Disagree`, `Strongly Disagree`
    - tab **Teacher Survey** (36 rows × 9 cols) — cols: `Question`, `Wording`, `Total Respondents`, `Strongly Agree`, `Agree`, `Somewhat Agree`, `Somewhat Disagree`, `Disagree`, `Strongly Disagree`
    - tab **Other Staff Survey** (27 rows × 9 cols) — cols: `Question`, `Wording`, `Total Respondents`, `Strongly Agree`, `Agree`, `Somewhat Agree`, `Somewhat Disagree`, `Disagree`, `Strongly Disagree`
    - tab **Administrator Survey** (47 rows × 9 cols) — cols: `Question`, `Wording`, `Total Respondents`, `Strongly Agree`, `Agree`, `Somewhat Agree`, `Somewhat Disagree`, `Disagree`, `Strongly Disagree`
    - tab **School-Level** (116 rows × 3 cols) — cols: `School Name`, `Response Rate`, `Student Satisfaction Index`
  - [`2016 Stakeholder Survey Aggregate Data`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2016%20Aggregate%20Survey%20Results.xlsx) — **xlsx** — 5 tab(s)
    - tab **Student Survey** (58 rows × 7 cols) — cols: `Question`, `Wording`, `Total Respondents`, `Strongly Agree`, `Agree`, `Disagree`, `Strongly Disagree`
    - tab **Teacher Survey** (36 rows × 9 cols) — cols: `Question`, `Wording`, `Total Respondents`, `Strongly Agree`, `Agree`, `Somewhat Agree`, `Somewhat Disagree`, `Disagree`, `Strongly Disagree`
    - tab **Other Staff Survey** (27 rows × 9 cols) — cols: `Question`, `Wording`, `Total Respondents`, `Strongly Agree`, `Agree`, `Somewhat Agree`, `Somewhat Disagree`, `Disagree`, `Strongly Disagree`
    - tab **Administrator Survey** (47 rows × 9 cols) — cols: `Question`, `Wording`, `Total Respondents`, `Strongly Agree`, `Agree`, `Somewhat Agree`, `Somewhat Disagree`, `Disagree`, `Strongly Disagree`
    - tab **School-Level** (110 rows × 3 cols) — cols: `School Name`, `Response Rate`, `Student Satisfaction Index`

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
  - [`FY26 Initial, Submitted & Amended Budget Spreadsheet (school-by-school)`](https://dcpsbudget.com/wp-content/uploads/2025/10/FY26-Initial_Submitted_Amended_Budget_Spreadsheet.xlsx) — **xlsx** — 3 tab(s)
    - tab **FY26 Amended Worksheet** (8,384 rows × 1 cols) — cols: `This spreadsheet represents Amended school budgets. In March 2025, school principals submitted their FY26 (SY25-26) budget as part of the proposed DCPS agency-wide budget. Over the summer as part of a process called summer reprogramming, principals have an opportunity to make changes to their budgets, including adding and adjusting positions or non-personnel items. Additionally, eligible schools may apply for and receive over-enrollment budget assistance to budget for additional staff members due to over-enrollment. In FY26, DC Council awarded additional Schools First in Budgeting funds to some schools. The budgets on this page are relfective of changes as of October 2025.`
    - tab **FY26 Submitted Worksheet** (6,715 rows × 1 cols) — cols: `This spreadsheet represents submitted budgets by fund source. These budgets were built off of initial allocations and submitted by school leaders and communities in March 2025. Any one-time budget assistance a school received is included in school submitted budgets. DCPS operated funds, at the school- and central-level, are coded under agency code GA0. Non-local funds for school resources, like Title funding such as Title I, Title II, and Title IV-B are coded as GD0 because they are ultimately loaded onto OSSE’s budget and not DCPS’s. This budget worksheet includes school budgeted items funded under both GA0 (DCPS) and GD0 (OSSE); however, in the Mayor's budget book as found on cfo.dc.gov, school profiles separate school budgeted items under GA0 and GD0 into different sections.`
    - tab **FY26 Initial Allocation** (3,716 rows × 1 cols) — cols: `This spreadsheet represents FY26 initial allocations for DCPS schools. From these initial allocations, school leaders and communities develop submitted budgets. In FY26, DCPS is providing allocation fund source as well as the DCPS funding model allocation type.`
  - [`FY25 Amended, Submitted & Initial Budgets (data download)`](https://dcpsbudget.com/wp-content/uploads/2024/11/FY25-Amended-Submitted-and-Initial_Data-Download.xlsx) — **xlsx** — 3 tab(s)
    - tab **FY25 Initial Allocation** (3,465 rows × 1 cols) — cols: `This spreadsheet represents school initial allocations. From these initial allocations, school leaders and communities developed submitted budgets. These submitted budgets are located on the tab "FY25 Submitted Budget"`
    - tab **FY25 Submitted Budget** (6,254 rows × 1 cols) — cols: `This spreadsheet represents submitted budgets by fund source. These budgets were built off of initial allocations and submitted by school leaders and communities in February 2024. It has been updated in May 2024 to show alignment to the Mayor's submitted budget as displayed in the budget book.`
    - tab **FY25 Amended Long** (8,256 rows × 1 cols) — cols: `This spreadsheet represents Amended school budgets. In March 2024, school principals submitted their FY25 (SY24-25) budget as part of the proposed DCPS agency-wide budget. Over the summer, principals have an opportunity to make changes to their budgets, a process known as budget reprogramming, including adding and adjusting positions or non-personnel items. Additionally, this year, DC Council provided additional funding to some schools. The budgets on this page are relfective of changes as of October 2024.`
  - [`FY24 Initial, Submitted & Amended Budgets`](https://dcpsbudget.com/wp-content/uploads/2023/11/FY24_Initial_Submitted_Amended-Budgets.xlsx) — **xlsx** — 3 tab(s)
    - tab **FY24 Initial Allocations** (3,359 rows × 6 cols) — cols: `School Code`, `School Name`, `Allocation Strategy`, `Item Name`, `FTE`, `Amount`
    - tab **FY24 Submitted Budget** (6,052 rows × 11 cols) — cols: `Code`, `School Name`, `Budgeted Item`, `FTE`, `Total Budget`, `21st Century`, `At-Risk`, `ELL UPSFF`, `Local`, `Title I`, `Title II`
    - tab **FY24 Amended Budget** (6,531 rows × 7 cols) — cols: `Code`, `School Name`, `Budgeted Item`, `Submitted Budget FTE/Quantity`, `Reprogrammed Quantity`, `Final Amended Budget FTE/Quantity`, `Final Amended Cost`
  - [`FY23 Initial Allocations (Three Strategies)`](https://dcpsbudget.com/wp-content/uploads/2022/02/FY23-Initial-Allocations_Three-Strategies.xlsx) — **xlsx** — 3 tab(s)
    - tab **Enrollment Based** (2,356 rows × 5 cols) — cols: `School Code`, `School Name`, `Item Name`, `FTE`, `Amount`
    - tab **Targeted Support** (893 rows × 5 cols) — cols: `School Code`, `School Name`, `Item Name`, `FTE`, `Amount`
    - tab **Stability** (196 rows × 5 cols) — cols: `School Code`, `School Name`, `Item Name`, `FTE`, `Amount`
  - [`FY23 Submitted Budgets`](https://dcpsbudget.com/wp-content/uploads/2022/02/FY23-Submitted-Budgets.xlsx) — **xlsx** — 1 tab(s)
    - tab **FY23 Submitted Budget** (6,005 rows × 10 cols) — cols: `School Name`, `Budgted Item`, `FTE`, `Total Budget`, `Local`, `At Risk`, `EL UPSFF`, `Title I`, `Title II`, `21st CC`

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

### [DCPS School Directory](https://dcps.dc.gov/publication/printable-school-directory)

_topics: profiles_

- **Format:** PDF (per year)
- **Updated:** Annual
- **Years on page:** Per school year (SY2025-26 linked as of 2026-11-01)
- **Notes:** Crosswalk of DCPS school IDs, names, addresses, wards, types. The 'Printable School Directory' publication page (linked from DCPS's School Data page) holds only the current year; older years only via direct PDF URLs.
- **Data files (profiled):**
  - [`DCPS School Directory SY 2025-2026`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20School%20Directory%20SY%202025-2026.pdf) — **pdf** — 3 pages, **extractable tables** on ~3 page(s)
    - p1 table (45 rows): `DCPS School ID`, `School Name`, `Address`, `Zip Code`, `Phone Number`, `Fax Number`, `Principal Email`, `Grades`
    - p2 table (46 rows): `DCPS School ID`, `School Name`, `Address`, `Zip Code`, `Phone Number`, `Fax Number`, `Principal Email`, `Grades`
    - p3 table (29 rows): `DCPS School ID`, `School Name`, `Address`, `Zip Code`, `Phone Number`, `Fax Number`, `Principal Email`, `Grades`

### [DCPS Educator Exit Survey & Educator Retention Report data](https://dcps.dc.gov/page/dcps-educator-exit-survey-report)

_topics: educators_

- **Format:** PDF reports + Excel data files
- **Updated:** Annual
- **Years on page:** SY2023-24, SY2024-25
- **Notes:** DCPS-only. Exit survey of departing teachers and school leaders, plus the data files behind DCPS's educator retention report. Distinct from OSSE's cross-sector educator workforce data. Linked from DCPS's School Data page. Added 2026-11-01.
- **Data files (profiled):**
  - [`SY24-25 DCPS Educator Exit Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/SY24-25%20DCPS%20Educator%20Exit%20Survey%20Report.pdf) — **pdf** — 12 pages (narrative; no extractable tables)
  - [`2025 Educator Retention Report Data File`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2025%20Educator%20Retention%20Report%20Data%20File.xlsx) — **xlsx** — 1 tab(s)
    - tab **Oct 1 2024 Snapshot** (7,432 rows × 11 cols) — cols: `Job Title`, `Ethnic Group`, `Gender`, `Pipeline`, `# of Years in DCPS`, `2024 IMPACT Subject Type`, `School/Dept Name`, `School Level`, `Ward`, `Retention Category`, `Left School/DCPS`
  - [`SY23-24 DCPS Educator Exit Survey Report`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/SY23-24%20DCPS%20Educator%20Exit%20Survey%20Report.pdf) — **pdf** — 13 pages, **extractable tables** on ~9 page(s)
    - p4 table (5 rows): `Years of Service in DCPS`, `Number of Educators`, `Percentage (#) Who Stayed at School`, `Percentage (#) Who Stayed at DCPS`
    - p4 table (8 rows): `Race`, `Number of Educators`, `Percentage (#) Who Stayed at School`, `Percentage (#) Who Stayed at DCPS`
    - p4 table (3 rows): `Gender`, `Number of Educators`, `Percentage (#) Who Stayed at School`, `Percentage (#) Who Stayed at DCPS`
  - [`2024 Educator Retention Report Data File`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2024%20Educator%20Retention%20Report%20Data%20File.xlsx) — **xlsx** — 2 tab(s)
    - tab **Notes** (4 rows × 1 cols) — cols: `Notes on Data File`
    - tab **Oct 1 2023 Snapshot** (7,484 rows × 10 cols) — cols: `Job Title`, `Employee ID - Gender`, `Pipeline`, `# of Years in DCPS`, `Teacher Subject Type`, `School/Department Name`, `School Level`, `Ward`, `Retention Outcome 10/1/2024`, `Left School/DCPS`

### [DCPS at a Glance: Performance](https://dcps.dc.gov/page/dcps-glance-performance)

🗄️ archived/stale · _topics: assessment_

- **Format:** Web page + PDF
- **Updated:** Irregular
- **Years on page:** NAEP 2019
- **Notes:** DCPS summary of its own performance. As of 2026-11-01 the only file linked is DCPS's 2019 NAEP results summary (TUDA); the page has not been updated for the 2022 or 2024 NAEP. Added 2026-11-01.
- **Data files (profiled):**
  - [`DCPS 2019 NAEP Results`](https://dcps.dc.gov/sites/default/files/dc/sites/dcps/page_content/attachments/2019%20NAEP%20Results_FINAL.pdf) — **pdf** — 18 pages, **extractable tables** on ~10 page(s)
    - p4 table (7 rows): 
    - p4 table (6 rows): 
    - p5 table (6 rows): 

## DC PCSB — DC Public Charter School Board

_Authorizer/regulator of DC's public charter schools. Publishes charter directories, the School Quality Report (SQR) accountability framework, finances, and equity data._

### [DC PCSB Transparency Hub](https://dcpcsb.org/transparency-hub/)

♻️ intermittent server errors · _topics: landing, finance, discipline, equity, profiles_

- **Format:** Web portal (links to PDF / Excel / Egnyte / Google Sheets)
- **Updated:** Continuously updated; docs annual
- **Years on page:** Multiple; varies by document
- **Notes:** An index of PCSB's own governance documents (finance committee memos, salaries, nurse schedule; mostly Egnyte). PCSB moved dcpcsb.org to WordPress in Oct 2026; checked 2026-11-01. The page is published in WordPress (last modified 2026-10-15) but visiting it redirects to the 'Find a Public Charter School' page, so it is not currently reachable in a browser. The charter-school data this source used to index (budgets, audits, at-risk, equity, discipline) now sits on /data/ and /school-finances-funding/.

### [Public Charter School Data (sector overview)](https://dcpcsb.org/data/)

_topics: landing, enrollment, assessment, graduation_

- **Format:** Web page (links to Egnyte / OSSE)
- **Updated:** Annual
- **Years on page:** Current
- **Notes:** Citywide charter landing page with sections for school annual reports, student enrollment, attendance and discipline, statewide assessment results, graduation rates and lead testing. PCSB moved dcpcsb.org to WordPress in Oct 2026; checked 2026-11-01. The old /about-us/public-charter-school-data URL now redirects to the school finder; /data/ is the replacement. The headline counters (students, schools, LEAs) render as 0 without JavaScript.

### [Charter Student Enrollment](https://dcpcsb.org/data/)

_topics: enrollment, demographics_

- **Format:** Excel + PDF
- **Updated:** Annual
- **Years on page:** SY22-23, 23-24, 24-25 shown; historical spreadsheet 1967–present
- **Notes:** Charter-only enrollment. Audited counts come from OSSE; PCSB republishes and analyzes the charter slice. PCSB moved dcpcsb.org to WordPress in Oct 2026; checked 2026-11-01. The old /student-enrollment page and its static tables are gone (the URL redirects to /data/). Catalogued: the 'View Historical Enrollment' spreadsheet linked from /data/ (charter vs DCPS enrollment, 1967-68 to 2019-20, dated Jul 15, 2020) and a June 2026 Enrollment Outlook found in PCSB's WordPress uploads but not linked from any page. Egnyte files are catalogued via their direct-download form (dcpcsb.egnyte.com/dd/<token>, or /dd/<folder>/?entryId=<id> for files inside a shared folder), which returns the file itself; the /dl/ links on PCSB's pages return a preview page.
- **Data files (profiled):**
  - [`Historical Enrollment Analysis, charter vs DCPS, 1967-68 to 2019-20 (Jul 15, 2020)`](https://dcpcsb.egnyte.com/dd/0BR9yldipC) — **xlsx** — 1 tab(s)
    - tab **Historical Enrollment** (57 rows × 9 cols) — cols: `School Year`, `Public Charter Schools`, `DC Public Schools (DCPS)`, `Total`, `Public Charter School Growth`, `DCPS Growth`, `City Growth`, `Charter Share`, `Change in Charter Share`
  - [`Enrollment Outlook (Jun 5, 2026)`](https://dcpcsb.org/wp-content/uploads/2026/08/2026-06-05-Enrollment-Outlook.pdf) — **pdf** — 45 pages, **extractable tables** on ~18 page(s)
    - p3 table (4 rows): `Vehicle`, `Purpose`
    - p4 table (4 rows): `Guiding question: Will the applicant be able to meet their enrollment targets?`
    - p5 table (4 rows): `School type`, `Grade bands or groups presented`

### [Statewide Assessment Results (charter)](https://dcpcsb.org/data/)

_topics: assessment_

- **Format:** Links to OSSE PDFs
- **Updated:** Annual
- **Years on page:** Multiple
- **Notes:** Charter ELA/math on the DC statewide test. Overlaps OSSE/Report Card. PCSB moved dcpcsb.org to WordPress in Oct 2026; checked 2026-11-01. The old /test-results-parcc page returns 404. The 'Statewide Assessment Results' section of /data/ now just links OSSE's DC CAPE results decks for 2022-2025; PCSB no longer publishes its own charter-only results page.

### [School Profiles / Find a DC Public Charter School](https://dcpcsb.org/school-profiles/)

_topics: profiles, accountability_

- **Format:** Interactive searchable directory
- **Updated:** Updated yearly / as schools open/close
- **Years on page:** Current roster
- **Notes:** Interactive 'find a charter school' tool, plus high school course and graduation-policy documents. No bulk export. PCSB moved dcpcsb.org to WordPress in Oct 2026; checked 2026-11-01. Whether each school entry still links to a School Quality Report was not checked.

### [Public Charter School Directory (annual PDF)](https://dcpcsb.egnyte.com/dl/4JmpCtX9bt48)

_topics: profiles_

- **Format:** Excel
- **Updated:** Annual (school year)
- **Years on page:** 2025-26, 2026-27
- **Notes:** Static counterpart to the interactive profiles: every LEA and campus with contacts of record. PCSB moved dcpcsb.org to WordPress in Oct 2026; checked 2026-11-01. The old directory page redirects to the newsroom. The 'School Directory' link in the site header is the 2026-27 directory (an .xls on Egnyte, despite this source's old 'PDF' name); the 2025-26 directory is an .xlsx in PCSB's WordPress uploads. Egnyte files are catalogued via their direct-download form (dcpcsb.egnyte.com/dd/<token>, or /dd/<folder>/?entryId=<id> for files inside a shared folder), which returns the file itself; the /dl/ links on PCSB's pages return a preview page.
- **Data files (profiled):**
  - [`2026–27 Public Charter School Directory`](https://dcpcsb.egnyte.com/dd/4JmpCtX9bt48) — **xls** — 1 tab(s)
    - tab **Contacts_of_Record (3)** (134 rows × 10 cols) — cols: `LEA ID`, `LEA`, `Campus ID`, `Campus`, `Contact Type`, `First Name`, `Last Name`, `Phone Number`, `Email Address`, `Updated At`
  - [`2025-26 Public Charter School Directory`](https://dcpcsb.org/wp-content/uploads/2026/07/2025-26-Public-Charter-School-Directory.xlsx) — **xlsx** — 1 tab(s)
    - tab **Contacts_of_Record (2)** (136 rows × 9 cols) — cols: `LEA ID`, `LEA`, `Campus ID`, `Campus`, `Contact Type`, `First Name`, `Last Name`, `Phone Number`, `Email Address`

### [School Quality Report (SQR)](https://dcpcsb.org/performance-management-framework-pmf/)

🗄️ archived/stale · _topics: accountability_

- **Format:** Web page / per-school report
- **Updated:** Annual (released fall)
- **Years on page:** 2017-18, 2018-19
- **Notes:** Charter accountability: scores each charter 0-100 and assigns Tier 1/2/3. This is a DIFFERENT system from OSSE's STAR (1-5) — see overlaps. PCSB moved dcpcsb.org to WordPress in Oct 2026; checked 2026-11-01. The old /families/school-quality-report page returns 404, and the new site has no SQR page. Catalogued: the 2018 School Quality Report (SY2017-18; PCSB's PMF page labels this Egnyte link the '2017-18 PMF Book') and the 2018-19 full and PK-8 School Quality Reports from PCSB's WordPress uploads. Egnyte files are catalogued via their direct-download form (dcpcsb.egnyte.com/dd/<token>, or /dd/<folder>/?entryId=<id> for files inside a shared folder), which returns the file itself; the /dl/ links on PCSB's pages return a preview page.
- **Data files (profiled):**
  - [`2018 School Quality Report (Dec 7, 2018; linked on PCSB's PMF page as the 2017-18 PMF Book)`](https://dcpcsb.egnyte.com/dd/NWTM37IDqT) — **pdf** — 341 pages, **extractable tables** on ~116 page(s) (scan capped)
    - p4 table (31 rows): 
    - p5 table (32 rows): 
    - p6 table (29 rows): 
  - [`DC PCSB School Quality Reports 2018-19`](https://dcpcsb.org/wp-content/uploads/2026/08/43413-DC-PCSB-SQR-2018-19.pdf) — **pdf** — 328 pages, **extractable tables** on ~117 page(s) (scan capped)
    - p3 table (2 rows): `Table of Contents`
    - p4 table (2 rows): `Table of Contents`
    - p5 table (34 rows): `School Lists`
  - [`2018-19 PK-8 School Quality Reports`](https://dcpcsb.org/wp-content/uploads/2026/08/2018-19-PK-8-School-Quality-Reports.pdf) — **pdf** — 222 pages, **extractable tables** on ~111 page(s) (scan capped)
    - p1 table (9 rows): 
    - p2 table (21 rows): `Student Progress (45 points): Academic Improvement Over Time`
    - p2 table (2 rows): `000 666111...666 110000`

### [ASPIRE System (current charter accountability framework)](https://dcpcsb.org/aspire-system/)

♻️ intermittent server errors · _topics: accountability, methodology_

- **Format:** Web page (framework docs / PDF)
- **Updated:** Annual
- **Years on page:** Current
- **Notes:** The board-approved system that replaced the PMF and underlies the SQR. PCSB moved dcpcsb.org to WordPress in Oct 2026; checked 2026-11-01. The page is published in WordPress (last modified 2026-10-29) but visiting it, with or without the trailing slash, redirects to the 'Find a Public Charter School' page; its content was read via the WordPress API. Catalogued: the SY2025-26 and SY2026-27 ASPIRE Policy & Technical Guides. Not catalogued: the historical-guides folder, the working-group folders (PK-only, PK-8, high school, adult ed: meeting materials) and the charter-goals adoption packet. Egnyte files are catalogued via their direct-download form (dcpcsb.egnyte.com/dd/<token>, or /dd/<folder>/?entryId=<id> for files inside a shared folder), which returns the file itself; the /dl/ links on PCSB's pages return a preview page.
- **Data files (profiled):**
  - [`2026–27 ASPIRE Policy & Technical Guide (Jun 29, 2026)`](https://dcpcsb.egnyte.com/dd/q36q6hXjkkJ7) — **pdf** — 221 pages, **extractable tables** on ~84 page(s) (scan capped)
    - p5 table (23 rows): 
    - p6 table (2 rows): `What is the ASPIRE System and why is it important to DC`
    - p9 table (9 rows): 
  - [`2025–26 ASPIRE Policy & Technical Guide (Jun 23, 2025)`](https://dcpcsb.egnyte.com/dd/W8HyWRKQBCjc) — **pdf** — 236 pages, **extractable tables** on ~85 page(s) (scan capped)
    - p4 table (4 rows): `School Progress Measures`
    - p5 table (23 rows): 
    - p6 table (2 rows): `What is the ASPIRE System and why is it important to DC`

### [Performance Management Framework (PMF) — archive](https://dcpcsb.org/performance-management-framework-pmf/)

🗄️ archived/stale · _topics: accountability, methodology_

- **Format:** PDF books/guides + Excel data file
- **Updated:** Was annual
- **Years on page:** SY2010-11 through 2019-20 (ARCHIVED)
- **Notes:** Legacy charter accountability with per-school scores/tiers. Superseded by ASPIRE/SQR. Confirm which framework a given year's 'tier' refers to before combining. PCSB moved its site to WordPress in Oct 2026 and the old /sites/default/files/ links stopped resolving. Catalogued: PMF books for 2010-11 (labelled '2011-12' on PCSB's page; the file is the December 2011 performance reports), 2012-13 through 2016-17; the 2019 PK-12 and adult-ed PMF public data file (Excel); and the 2018-19 and 2019-20 policy & technical guides. Five older policy/technical guides (2012-13 through 2016-17) were not found on the new site. The ~13 PMF Excel score files the old site linked are no longer linked anywhere; only the 2019 public data file was found (in PCSB's WordPress uploads). Egnyte files are catalogued via their direct-download form (dcpcsb.egnyte.com/dd/<token>, or /dd/<folder>/?entryId=<id> for files inside a shared folder), which returns the file itself; the /dl/ links on PCSB's pages return a preview page.
- **Data files (profiled):**
  - [`PMF Archive — 12 12 Final 2015 16 PMF Book`](https://dcpcsb.org/wp-content/uploads/2026/08/2016-12-12-Final-2015-16-PMF-Book.pdf) — **pdf** — 326 pages, **extractable tables** on ~117 page(s) (scan capped)
    - p1 table (4 rows): 
    - p2 table (4 rows): 
    - p5 table (23 rows): `2015—16 Overall Tier 1 (65.0 — 100.0%) Ward Grade Levels Percentage`
  - [`PMF Archive — Final PMF Book 2015 2 29 2016`](https://dcpcsb.org/wp-content/uploads/2026/08/Final_PMF_Book_2015_2-29-2016.pdf) — **pdf** — 300 pages, **extractable tables** on ~116 page(s) (scan capped)
    - p1 table (4 rows): 
    - p3 table (2 rows): 
    - p6 table (27 rows): `Early Childhood/Elementary/Middle Schools`
  - [`PMF Archive — 14 Book (12 11 2014)`](https://dcpcsb.org/wp-content/uploads/2026/08/2013-14-Book-12-11-2014.pdf) — **pdf** — 328 pages, **extractable tables** on ~115 page(s) (scan capped)
    - p1 table (2 rows): 
    - p6 table (25 rows): `2013—14 Overall Tier 1 (65.0 — 100.0%) Ward Grade Levels Percentage`
    - p7 table (26 rows): `2013—14 Overall Tier 2 (35.0 — 64.9%) Ward Grade Levels Percentage`
  - [`PMF Archive — 2013 PMF REDUCED 2`](https://dcpcsb.org/wp-content/uploads/2026/08/2013-PMF-REDUCED-2.pdf) — **pdf** — 304 pages, **extractable tables** on ~60 page(s) (scan capped)
    - p1 table (3 rows): 
    - p6 table (25 rows): `ELEMENTARY/MIDDLE SCHOOLS`
    - p7 table (27 rows): `ELEMENTARY/MIDDLE SCHOOLS`
  - [`PMF Book SY16-17 (Dec 20, 2017)`](https://dcpcsb.egnyte.com/dd/30mlhJPiWv) — **pdf** — 340 pages, **extractable tables** on ~117 page(s) (scan capped)
    - p1 table (4 rows): 
    - p2 table (4 rows): 
    - p5 table (31 rows): 
  - [`2011 Charter School Performance Reports (PMF Book, Dec 2011; linked on PCSB's PMF page as the 2011-12 PMF Book)`](https://dcpcsb.egnyte.com/dd/ir04gsR9Pu) — **pdf** — 310 pages, **extractable tables** on ~13 page(s) (scan capped)
    - p7 table (2 rows): 
    - p7 table (24 rows): `ElEmEntary/middlE SchoolS`
    - p8 table (36 rows): `ElEmEntary/middlE SchoolS`
  - [`2019 PK-12 and Adult Education PMF Public Data File (Oct 29, 2019)`](https://dcpcsb.org/wp-content/uploads/2026/08/PUBLIC-2019-10-29-2019-PK-12-and-AE-PMF-Public-Data-File.xlsx) — **xlsx** — 3 tab(s)
    - tab **PK-8** (93 rows × 7 cols) — cols: `School Information`, `Demographics`, `Student Progress`, `Student Achievement`, `Gateway`, `School Environment`, `Early Childhood Student Outcomes`
    - tab **High School** (18 rows × 5 cols) — cols: `School Information`, `Demographics`, `Student Progress`, `Gateway`, `School Environment`
    - tab **Adult** (11 rows × 6 cols) — cols: `School Information`, `Demographics`, `Student Progress`, `College and Career Readiness`, `Student Achievement`, `School Environment`
  - [`2019-20 PMF Policy & Technical Guide (Nov 13, 2019 update)`](https://dcpcsb.org/wp-content/uploads/2026/09/2019.11.13-Vote-2019-20-PMF-Policy-Technical-Guide-November-Update-ZATT-A-Clean-BBF.pdf) — **pdf** — 162 pages, **extractable tables** on ~82 page(s) (scan capped)
    - p12 table (6 rows): `every effort to retain the data it receives until final results are presented. Data`
    - p16 table (3 rows): `Measure`, `Floor`, `Target`
    - p17 table (5 rows): `Measure`, `Floor`, `Target`
  - [`2018-19 PMF Policy & Technical Guide Revisions (May 7, 2019)`](https://dcpcsb.org/wp-content/uploads/2026/08/2019-05-07-Vote-2018-19-PMF-Policy-Tech-Guide-Revisions-Clean-ZATT-B-BBF.pdf) — **pdf** — 138 pages, **extractable tables** on ~93 page(s) (scan capped)
    - p11 table (5 rows): `the data it receives until final results are presented. Data are stored to the number of digits`
    - p14 table (3 rows): `Measure`, `Floor`, `Target`
    - p15 table (3 rows): `Measure`, `Floor`, `Target`

### [School Equity Reports (charter)](https://dcpcsb.org/school-equity-reports)

🗄️ archived/stale · _topics: equity, discipline, attendance_

- **Format:** PDF (via Egnyte)
- **Updated:** Was annual
- **Years on page:** SY2012-13 through 2017-18 (ARCHIVED)
- **Notes:** Per-school attendance, discipline, mobility/withdrawal, growth. PCSB now redirects this detail to OSSE's DC School Report Card; its own reports stop at 2017-18. As of 2026-11-01 this page no longer exists: since PCSB's Oct 2026 move to WordPress the URL redirects to the general /data/ page, which does not mention equity reports. The 9 per-school 2017 equity PDFs and the SY2017-18 definitions guide that this catalog used to profile now 404 and are not in the new site's media library. Whether the ~111 per-school equity PDFs previously on Egnyte are still linked anywhere has not been checked.

### [Annual Discipline & Attendance Report (charter)](https://dcpcsb.egnyte.com/fl/Y7FcwyqdwDTd)

_topics: discipline, attendance_

- **Format:** PDF (Egnyte folder)
- **Updated:** Annual
- **Years on page:** SY2014-15 through 2025-26
- **Notes:** Charter suspensions/expulsions/attendance. Overlaps OSSE citywide discipline data and the Report Card (cross-sector). Since PCSB's Oct 2026 site migration the old /attendance-and-discipline-report page redirects to an unrelated page; the reports are in an Egnyte folder (linked from dcpcsb.org/data/ as 'View Attendance and Discipline Reports') with one subfolder per year, SY2014-15 through 2025-26, uploaded 2026-09-17. All 12 PDF reports are catalogued; the SY2020-21 report is a PowerPoint (.pptx), which the profiler cannot read, so it is not. Egnyte files are catalogued via their direct-download form (dcpcsb.egnyte.com/dd/<token>, or /dd/<folder>/?entryId=<id> for files inside a shared folder), which returns the file itself; the /dl/ links on PCSB's pages return a preview page.
- **Data files (profiled):**
  - [`Attendance & Discipline Report — SY14-15 Full Report`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=1ef046fa-a5b0-4bb1-a86c-9914cec4b73b) — **pdf** — 18 pages, **extractable tables** on ~9 page(s)
    - p3 table (2 rows): 
    - p3 table (5 rows): `237 186`
    - p3 table (2 rows): `186`
  - [`Attendance & Discipline Report — SY14-15 Summary`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=0a695b27-04ae-49a4-b36c-dda889113e58) — **pdf** — 3 pages (narrative; no extractable tables)
  - [`Attendance & Discipline Report — SY15-16 Report`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=a2efc449-ee6f-4ef2-8e9e-8c2bdecad228) — **pdf** — 22 pages, **extractable tables** on ~13 page(s)
    - p5 table (5 rows): `395`
    - p5 table (2 rows): 
    - p6 table (7 rows): `School`, `Ward`, `2014-15 Rate*`, `2015-16 Rate*`
  - [`Attendance & Discipline Report — SY16-17 Report`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=6f9d26a7-443b-458e-9ff4-0ea2f7160cf8) — **pdf** — 25 pages, **extractable tables** on ~13 page(s)
    - p6 table (6 rows): 
    - p6 table (2 rows): 
    - p6 table (2 rows): 
  - [`Attendance & Discipline Report — SY17-18 Report`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=6421e1c8-18fe-416b-b805-3280c0364f66) — **pdf** — 25 pages, **extractable tables** on ~11 page(s)
    - p6 table (11 rows): 
    - p7 table (10 rows): `Grades 2016-17 2017-18 School Ward Served Rate Rate`
    - p8 table (6 rows): `Grades 2016-17 2017-18 School Ward Served Rate Rate`
  - [`Attendance & Discipline Report — SY18-19 Report`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=25b82521-3d8a-48ef-beb3-f6bce1bc3f01) — **pdf** — 27 pages, **extractable tables** on ~10 page(s)
    - p7 table (10 rows): `School`, `Grades Served`, `Ward`, `2017-18 Rate`, `2018-19 Rate`
    - p8 table (6 rows): `School`, `Grades Served`, `Ward`, `2017-18 Rate`, `2018-19 Rate`
    - p11 table (11 rows): `School`, `Grades Served`, `Ward`, `# of Audited Students Suspended`
  - [`Attendance & Discipline Report — SY19-20 Report`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=52cd4682-9d42-4c40-83c0-0e8beef89919) — **pdf** — 35 pages, **extractable tables** on ~15 page(s)
    - p6 table (7 rows): `Metric`, `SY 2018-19 (Through Feb)`, `SY 2019-20 (Through Feb)`, `Change`
    - p7 table (5 rows): 
    - p8 table (7 rows): `Grade Bands`, `Weekly ISA: Week of 03/02`, `Weekly ISA: Week of 03/09`, `Delta: Week of 03/02 to Week of 03/09`
  - [`Attendance & Discipline Report — SY21-22 Report`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=6d69dfe1-174d-4aaa-966a-99fc6819c6fc) — **pdf** — 24 pages, **extractable tables** on ~8 page(s)
    - p6 table (8 rows): `Percent of Students Suspended (Suspension Rate)`, `3.8%`
    - p11 table (9 rows): `Campus`, `Grades Served`, `Ward`, `SY 2021-22`, `SY 2018-9`
    - p12 table (6 rows): `Campus`, `Grades Served`, `Ward`, `% of Students`, `# of Students`
  - [`Attendance & Discipline Report — SY22-23 Report`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=60288e6a-6cf8-49de-b231-6b194017ca44) — **pdf** — 27 pages, **extractable tables** on ~8 page(s)
    - p5 table (8 rows): `Percent of Students Suspended (Suspension Rate)`, `8.4%`
    - p10 table (6 rows): `Campus`, `Grades Served`, `Ward`, `SY 2022-23`, `SY 2021-22`
    - p11 table (6 rows): `Campus`, `Grades Served`, `Ward`, `% of Students`, `# of Students`
  - [`Attendance & Discipline Report — SY23-24 Report`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=fe8ad3c3-0f50-44a7-99e4-fc38324d3b3e) — **pdf** — 30 pages, **extractable tables** on ~8 page(s)
    - p7 table (8 rows): `Percent of Students Suspended (Suspension Rate)`, `4.6%`
    - p15 table (6 rows): `Campus`, `Grades Served`, `Ward`, `SY 2022 – 23`, `SY 2023 – 24`
    - p16 table (6 rows): `Campus`, `Grades Served`, `Ward`, `% of students suspended`, `# of students enrolled`
  - [`Attendance & Discipline Report — SY24-25 Report`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=545d19dd-cac0-46f3-afeb-8566bda282a6) — **pdf** — 26 pages, **extractable tables** on ~20 page(s)
    - p5 table (2 rows): `SCHOOL YEAR (SY) 2024 – 25 DISCIPLINE AND ATTENDANCE SECTOR HIGHLIGHTS DC PUBLIC CHARTER SCHOOL BOARD — PAGE 2`
    - p6 table (2 rows): 
    - p6 table (2 rows): 
  - [`Attendance & Discipline Report — SY25-26 Report`](https://dcpcsb.egnyte.com/dd/Y7FcwyqdwDTd/?entryId=bf54b152-50d9-494d-b7c1-308cfa202e80) — **pdf** — 28 pages, **extractable tables** on ~24 page(s)
    - p5 table (2 rows): `SCHOOL YEAR (SY) 2025 – 26 ATTENDANCE AND DISCIPLINE SECTOR HIGHLIGHTS DC PUBLIC CHARTER SCHOOL BOARD — PAGE 2`
    - p6 table (2 rows): `Common Terms`
    - p6 table (2 rows): 

### [Charter School Finances (spending, budgets, audits, 990s)](https://dcpcsb.org/school-finances-funding/)

♻️ intermittent server errors · _topics: finance_

- **Format:** Web page / PDF / Excel (much via Egnyte)
- **Updated:** Annual
- **Years on page:** Multiple
- **Notes:** Charter actuals — distinct from OSSE PPE methodology. Since PCSB's Oct 2026 move to WordPress, this is one page (/school-finances-funding/). Catalogued: At-Risk Funding reports 2019-20 through 2022-23, per-pupil funding (UPSFF) memos 2020-21 through 2024-25, and Financial Analysis Reports FY2018 through FY2025 (the FY2018/FY2019 files are named '42999/43637 DCPCSB Report Card'; their contents confirm the fiscal year). Not catalogued: the per-school folders of budgets, 990s and fiscal audits (open the page to browse a school), and finance committee memos. The 2018-19 At-Risk report is still linked at its old dcpcsb.org URL, which returned 404 on 2026-11-01; the 2015, 2016 and 2017-18 reports were not found on the new site. Egnyte files are catalogued via their direct-download form (dcpcsb.egnyte.com/dd/<token>, or /dd/<folder>/?entryId=<id> for files inside a shared folder), which returns the file itself; the /dl/ links on PCSB's pages return a preview page.
- **Data files (profiled):**
  - [`FY 2023 At-Risk Report (Nov 1, 2022)`](https://dcpcsb.egnyte.com/dd/cGbZiGeN3E) — **pdf** — 128 pages, **extractable tables** on ~117 page(s) (scan capped)
    - p4 table (15 rows): `AT RISK FUNDING EXPENDITURE REPORT`, `FY 2023`
    - p4 table (2 rows): `PART A: DESCRIPTION OF MAJOR PROGRAMS, INITIATIVES, AND ACTIVITIES`
    - p5 table (17 rows): `AT RISK FUNDING EXPENDITURE REPORT`, `FY 2023`
  - [`FY 2022 At-Risk Report`](https://dcpcsb.egnyte.com/dd/HJF35Bqqdm) — **pdf** — 65 pages, **extractable tables** on ~62 page(s)
    - p4 table (51 rows): `AT-RISK FUNDING AND ENROLLMENT FOR PUBLIC CHARTER SCHOOLS`
    - p5 table (25 rows): `AT-RISK FUNDING AND ENROLLMENT FOR PUBLIC CHARTER SCHOOLS`
    - p6 table (2 rows): `PART A: ESTIMATED AT-RISK ALLOTMENT`
  - [`At-Risk Funding 2020-2021`](https://dcpcsb.egnyte.com/dd/TsyKf62tLL) — **pdf** — 71 pages, **extractable tables** on ~65 page(s)
    - p4 table (23 rows): `AT-RISK FUNDING AND ENROLLMENT FOR CHARTER SCHOOLS`
    - p5 table (19 rows): `AT-RISK FUNDING AND ENROLLMENT FOR CHARTER SCHOOLS`
    - p6 table (20 rows): `AT-RISK FUNDING AND ENROLLMENT FOR CHARTER SCHOOLS`
  - [`At-Risk Report, January 2020 (linked as the 2019-2020 report)`](https://dcpcsb.egnyte.com/dd/N725Elnhja) — **pdf** — 78 pages, **extractable tables** on ~55 page(s)
    - p3 table (20 rows): `AT-RISK FUNDING AND ENROLLMENT FOR CHARTER SCHOOLS FY20 through FY21`
    - p4 table (21 rows): `Eagle Academy PCS`, `528`, `$1,304,424`, `520`, `1,336,023`
    - p5 table (20 rows): `Paul PCS`, `351`, `$867,146`, `352`, `904,385`
  - [`2024-25 UPSFF Memo (Final) (per-pupil funding analysis)`](https://dcpcsb.egnyte.com/dd/iWzWL6BZ4E) — **pdf** — 6 pages, **extractable tables** on ~4 page(s)
    - p2 table (7 rows): `2024-25 Regular Quarterly Payments Schedule and Amounts`
    - p4 table (7 rows): `2024-25 Regular Quarterly Payments Schedule and Amounts`
    - p4 table (6 rows): `2024-2025 Facilities Payments Schedule and Amounts`
  - [`2023-24 UPSFF Memo (per-pupil funding analysis)`](https://dcpcsb.egnyte.com/dd/rf5wCEMBcA) — **pdf** — 6 pages, **extractable tables** on ~2 page(s)
    - p5 table (38 rows): `FY24 UPSFF Rates`
    - p6 table (37 rows): `English Language Learners`, `Weighting`, `Allocation`
  - [`2022-23 UPSFF Memo (per-pupil funding analysis)`](https://dcpcsb.egnyte.com/dd/jPC9eb73eB) — **pdf** — 7 pages, **extractable tables** on ~1 page(s)
    - p6 table (37 rows): 
  - [`2021-22 Uniform Per Student Funding Formula Payments (per-pupil funding analysis)`](https://dcpcsb.egnyte.com/dd/Xg3Xt2zT7V) — **pdf** — 8 pages, **extractable tables** on ~4 page(s)
    - p2 table (7 rows): `2021-22 Regular Quarterly Payment Schedule and Amounts`
    - p5 table (22 rows): `1.a. 2021-22 Regular Quarterly Payment Schedule and Amounts`
    - p5 table (4 rows): `March 15, 2022`, `As calculated per new student designations`
  - [`2020-21 UPSFF Payment Letter (per-pupil funding analysis)`](https://dcpcsb.egnyte.com/dd/GV7epFJ06V) — **pdf** — 9 pages, **extractable tables** on ~6 page(s)
    - p2 table (2 rows): `2019-20 Regular Quarterly Payment Schedule and Amounts`
    - p2 table (5 rows): `July 15, 2019`, `35 percent`, `45 percent`
    - p3 table (2 rows): `1.a. 2020-21 Regular Quarterly Payment Schedule and Amounts (Residential and Adult Programs)`
  - [`FY 2025 Financial Analysis Report`](https://dcpcsb.egnyte.com/dd/r8Bg6X7JRxJQ) — **pdf** — 194 pages, **extractable tables** on ~101 page(s) (scan capped)
    - p1 table (3 rows): `FISCAL YEAR 2025 FINANCIAL ANALYSIS REPORT`
    - p3 table (13 rows): `Key Financial Indicators`, `Number of LEAs That Met the Floor`, `Number of LEAs Below the Floor`
    - p3 table (6 rows): `Summary of Financial Indicators`
  - [`FY 2024 Financial Analysis Report`](https://dcpcsb.egnyte.com/dd/9Tmw4gkwjM7H) — **pdf** — 196 pages, **extractable tables** on ~101 page(s) (scan capped)
    - p1 table (3 rows): `FISCAL YEAR 2024 FINANCIAL ANALYSIS REPORT`
    - p3 table (13 rows): `Key Financial Indicators`, `Number of LEAs That Met the Floor`, `Number of LEAs Below the Floor`
    - p3 table (6 rows): `Summary of Financial Indicators`
  - [`FY 2023 Financial Analysis Report`](https://dcpcsb.egnyte.com/dd/b6jMdBmyQ8) — **pdf** — 193 pages, **extractable tables** on ~100 page(s) (scan capped)
    - p1 table (3 rows): `FISCAL YEAR 2023 FINANCIAL ANALYSIS REPORT`
    - p3 table (12 rows): `Key Financial Indicators`, `Number of LEAs That Met the Floor`, `Number of LEAs Below the Floor`
    - p3 table (6 rows): `Summary of Financial Indicators`
  - [`FY 2022 Financial Analysis Report`](https://dcpcsb.egnyte.com/dd/9rv9ElIrHO) — **pdf** — 192 pages, **extractable tables** on ~100 page(s) (scan capped)
    - p1 table (3 rows): `FISCAL YEAR 2022 FINANCIAL ANALYSIS REPORT`
    - p3 table (11 rows): `Measure`, `Number of LEAs That Met Standard`, `Number of LEAs Below Standard`
    - p3 table (6 rows): `Summary of Financial Indicators`
  - [`FY 2021 Financial Analysis Report`](https://dcpcsb.egnyte.com/dd/Tm1JvmtBeN) — **pdf** — 186 pages, **extractable tables** on ~100 page(s) (scan capped)
    - p1 table (3 rows): `FISCAL YEAR 2021 FINANCIAL ANALYSIS REPORT`
    - p3 table (7 rows): `Measure`, `# of LEAs That Met Standard`, `%`, `# of LEAs Below Standard`, `%`
    - p3 table (4 rows): `Summary of Financial Indicators`
  - [`FY 2020 Financial Analysis Report`](https://dcpcsb.egnyte.com/dd/XwUqqyAsEa) — **pdf** — 174 pages, **extractable tables** on ~100 page(s) (scan capped)
    - p1 table (3 rows): `FISCAL YEAR 2020 FINANCIAL ANALYSIS REPORT`
    - p2 table (7 rows): `Measure`, `# of Schools That Met Standard`, `%`, `# of Schools Below Standard`, `%`
    - p3 table (4 rows): `Summary of Financial Indicators`
  - [`FY 2019 Financial Analysis Report (file named 43637 DCPCSB Report Card)`](https://dcpcsb.egnyte.com/dd/biu7bUGJby) — **pdf** — 180 pages, **extractable tables** on ~97 page(s) (scan capped)
    - p1 table (3 rows): `FISCAL YEAR 2019 FINANCIAL ANALYSIS REPORT`
    - p2 table (7 rows): `Measure`, `# of Schools that Meet Standard`, `%`, `# of Schools Below Standard`, `%`
    - p2 table (4 rows): `Summary of Financial Indicators`
  - [`FY 2018 Financial Analysis Report (file named 42999 DCPCSB Report Card V3)`](https://dcpcsb.egnyte.com/dd/qDfQOo8sSC) — **pdf** — 170 pages, **extractable tables** on ~98 page(s) (scan capped)
    - p1 table (3 rows): 
    - p2 table (7 rows): `Measure`, `# of Schools that Meet Standard`, `%`, `# of Schools Below Standard`, `%`
    - p3 table (4 rows): `Summary of Financial Indicators`

### [Charter School Growth and Closures](https://dcpcsb.org/sector-planning/)

_topics: profiles, openings-closures_

- **Format:** Web page + Google Sheet
- **Updated:** Updated as events occur
- **Years on page:** 1996–present
- **Notes:** Openings, closures, grade changes and campus moves, plus the history of charter LEAs and campuses since 1996. Full list via a published Google Sheet linked from the page ('View the Full History'). PCSB moved dcpcsb.org to WordPress in Oct 2026; checked 2026-11-01. The old /charter-school-growth-and-closures page returns 404; /sector-planning/ is the replacement.

### [DC PCSB Board Meetings & Events](https://dcpcsb.org/board-meetings-public-comment/)

_topics: governance, openings-closures_

- **Format:** Event calendar (agendas/minutes as PDF)
- **Updated:** Monthly board meetings
- **Years on page:** Current + archive
- **Notes:** Charter approvals/conditions/closures/replications are decided and recorded here. PCSB moved dcpcsb.org to WordPress in Oct 2026; checked 2026-11-01. The old /events URL redirects to the newsroom; /board-meetings-public-comment/ lists upcoming and archived meetings.

## DME — Deputy Mayor for Education

_Mayor's office for education strategy. Runs EdScape (the neighborhood education-landscape tool), the Master Facilities Plan, and boundary/enrollment-planning data._

### [EdScape (education landscape tool)](https://edscape.dc.gov/)

_topics: landing, enrollment, demographics, facilities, boundaries_

- **Format:** Interactive Tableau dashboards + Excel downloads + PDF summaries
- **Updated:** Rolling, several releases/year
- **Years on page:** Through SY2026-27 (school counts); most series through SY2025-26; some back to SY2013-14
- **Notes:** DME's neighborhood education-data platform. Each chapter page carries a 'Download dataset' .xlsx whose filename ends in the release year (_2026, _2027) — new URLs each year, so the monthly refresh does not see them; re-sweep the chapter pages. 5 chapters: Population & Students, Public Schools, Facilities, Enrollment Patterns, Neighborhood Factors. Built on OSSE audited enrollment, geocoded to wards/clusters/boundaries. For planners, not parents choosing schools.
- **Data files (profiled):**
  - [`Adult and Youth Population Trends — EdScape Chapter 1 Population and Students Adult and Youth Population Trends 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Adult%20and%20Youth%20Population%20Trends_2026.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (15 rows × 1 cols) — cols: `EdScape`
    - tab **Ch1. Adult & Youth Pop Trends** (91 rows × 4 cols) — cols: `Age Category`, `Population`, `Year`, `Population Source`
    - tab **Variable Definitions** (6 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (31 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Number of Births and Birth Rates — EdScape Chapter 1 Population and Students Births 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Births_2026.xlsx) — **xlsx** — 6 tab(s)
    - tab **Introduction** (16 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.1 Births Citywide** (36 rows × 4 cols) — cols: `Year`, `Number of Births`, `Total Population`, `Birth Rate per 1,000 Population`
    - tab **Ch.1 Births Ward** (121 rows × 3 cols) — cols: `Year`, `Number of Births`, `Ward`
    - tab **Variable Definitions** (5 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (37 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Forecasted Total Population Growth — EdScape Chapter 1 Population and Students Forecasted Population Growth 2024`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Forecasted%20Population%20Growth%202024.xlsx) — **xlsx** — 8 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **Ch1. Pop & Studs_TotPopGrowth** (27 rows × 8 cols) — cols: `Population Type`, `Year`, `Population`, `Population Source`, `Avg Annual Change`, `Avg Percent Change`, `5-Year Change`, `5-Year Percent Change`
    - tab **Ch1. Pop & Studs_AdultYouth** (8 rows × 7 cols) — cols: `Year`, `Population Type`, `# 17 years and under`, `# 18 years and over`, `% Age 17 and under`, `Total Population`, `Source`
    - tab **Ch1. Pop & Studs_YouthGrowth** (8 rows × 7 cols) — cols: `Year`, `Population Type`, `# Ages 0-2 population`, `# Ages 3-10 population`, `# Ages 11-13 population`, `# Ages 14-17 population`, `Source`
    - tab **Ch1. Pop & Studs_YouthNhood** (2,485 rows × 8 cols) — cols: `Neighborhood Cluster`, `Neighborhood Cluster Names`, `Age category`, `Forecast type`, `Forecast population, 2020`, `Forecast year`, `Forecast population`, `Change from 2020 forecast`
    - tab **Variable Definitions** (20 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (20 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Forecasted Youth Population Growth — EdScape Chapter 1 Population and Students Forecasted Population Growth 2024`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Forecasted%20Population%20Growth%202024_0.xlsx) — **xlsx** — 8 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **Ch1. Pop & Studs_TotPopGrowth** (27 rows × 8 cols) — cols: `Population Type`, `Year`, `Population`, `Population Source`, `Avg Annual Change`, `Avg Percent Change`, `5-Year Change`, `5-Year Percent Change`
    - tab **Ch1. Pop & Studs_AdultYouth** (8 rows × 7 cols) — cols: `Year`, `Population Type`, `# 17 years and under`, `# 18 years and over`, `% Age 17 and under`, `Total Population`, `Source`
    - tab **Ch1. Pop & Studs_YouthGrowth** (8 rows × 7 cols) — cols: `Year`, `Population Type`, `# Ages 0-2 population`, `# Ages 3-10 population`, `# Ages 11-13 population`, `# Ages 14-17 population`, `Source`
    - tab **Ch1. Pop & Studs_YouthNhood** (2,485 rows × 8 cols) — cols: `Neighborhood Cluster`, `Neighborhood Cluster Names`, `Age category`, `Forecast type`, `Forecast population, 2020`, `Forecast year`, `Forecast population`, `Change from 2020 forecast`
    - tab **Variable Definitions** (20 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (20 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Forecasted Youth Population Growth by Neighborhood Cluster — EdScape Chapter 1 Population and Students Forecasted Population Growth 2024`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Forecasted%20Population%20Growth%202024_1.xlsx) — **xlsx** — 8 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **Ch1. Pop & Studs_TotPopGrowth** (27 rows × 8 cols) — cols: `Population Type`, `Year`, `Population`, `Population Source`, `Avg Annual Change`, `Avg Percent Change`, `5-Year Change`, `5-Year Percent Change`
    - tab **Ch1. Pop & Studs_AdultYouth** (8 rows × 7 cols) — cols: `Year`, `Population Type`, `# 17 years and under`, `# 18 years and over`, `% Age 17 and under`, `Total Population`, `Source`
    - tab **Ch1. Pop & Studs_YouthGrowth** (8 rows × 7 cols) — cols: `Year`, `Population Type`, `# Ages 0-2 population`, `# Ages 3-10 population`, `# Ages 11-13 population`, `# Ages 14-17 population`, `Source`
    - tab **Ch1. Pop & Studs_YouthNhood** (2,485 rows × 8 cols) — cols: `Neighborhood Cluster`, `Neighborhood Cluster Names`, `Age category`, `Forecast type`, `Forecast population, 2020`, `Forecast year`, `Forecast population`, `Change from 2020 forecast`
    - tab **Variable Definitions** (20 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (20 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Private School Enrollment — EdScape Chapter 1 Population and Students Private School Enrollment 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Private%20School%20Enrollment_2026_0.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (16 rows × 1 cols) — cols: `EdScape`
    - tab **Variable Definitions** (28 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Private Sch Citywide 1 Yr Estim** (16 rows × 28 cols) — cols: `NAME`, `year`, `Enrolled in nursery, preschool through grades 9-12 derived estimate`, `Enrolled in nursery, preschool through grades 9-12 upper bound`, `Enrolled in nursery, preschool through grades 9-12 lower bound`, `Enrolled in grades nursery, preschool through 9-12 derived MOE`, `Enrolled in nursery, preschool through grades 9-12 pct private estimate`, `Enrolled in nursery, preschool through grades 9-12 pct private derived MOE (+/-)`, `Enrolled in nursery school, preschool estimate`, `Enrolled in nursery school, preschool upper bound`, `Enrolled in nursery school, preschool lower bound`, `Enrolled in kindergarten estimate` …
    - tab **Private Sch by Ward 5 Yr Estima** (146 rows × 28 cols) — cols: `NAME`, `year`, `Enrolled in nursery, preschool through grades 9-12 derived estimate`, `Enrolled in nursery, preschool through grades 9-12 upper bound`, `Enrolled in nursery, preschool through grades 9-12 lower bound`, `Enrolled in grades nursery, preschool through 9-12 derived MOE`, `Enrolled in nursery, preschool through grades 9-12 pct private estimate`, `Enrolled in nursery, preschool through grades 9-12 pct private derived MOE (+/-)`, `Enrolled in nursery school, preschool estimate`, `Enrolled in nursery school, preschool upper bound`, `Enrolled in nursery school, preschool lower bound`, `Enrolled in kindergarten estimate` …
    - tab **Notes** (21 rows × 1 cols) — cols: `Notes`
  - [`Race and Ethnicity of Adults and Children — EdScape Chapter 1 Population and Students Race and Ethnicity of Adults and Child`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Race%20and%20Ethnicity%20of%20Adults%20and%20Children_2026.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (16 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.1 Race & Ethn Adults & Child** (137 rows × 4 cols) — cols: `Race/Ethnicity`, `Year`, `Age Category`, `Population or Estimate`
    - tab **Variable Definitions** (5 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (20 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Public School Enrollment by Race and Ethnicity — EdScape Chapter 1 Population and Students Race and Ethnicity of Students 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Race%20and%20Ethnicity%20of%20Students_2026.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (16 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.1 Race & Ethn Public Stu** (1,257 rows × 5 cols) — cols: `School Year`, `Sector`, `Grade Group`, `Race/Ethnicity`, `Count of Students`
    - tab **Variable Definitions** (18 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes ** (38 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Public School Students by Special Need Categories — EdScape Chapter 1 Population and Students Special Population Shares Over Time 20`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Special%20Population%20Shares%20Over%20Time_2026.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Special Population Pie Charts** (235 rows × 7 cols) — cols: `Special Population`, `School Year`, `Sector`, `Category`, `Count of Category`, `Total Number of Eligible Students`, `Percent`
    - tab **Variable Definitions** (11 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (33 rows × 1 cols) — cols: `Notes`
  - [`Total Population Trends — EdScape Chapter 1 Population and Students Total Population Trends 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Total%20Population%20Trends_2026.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (15 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.1 Total Population Trends** (14 rows × 3 cols) — cols: `Year`, `Population`, `Population Source`
    - tab **Variable Definitions** (5 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Source** (24 rows × 1 cols) — cols: `Notes`
  - [`Where Adults and Children Live — EdScape Chapter 1 Population and Students Where Adults and Children Live 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Where%20Adults%20and%20Children%20Live_2026.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (16 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.1 Where Adults Children Live** (29 rows × 6 cols) — cols: `Year`, `Geography`, `Census ID`, `Puma`, `Total 17 years and younger`, `Total 18 years and older`
    - tab **Variable Definitions** (7 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (27 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Where Public School Students Live — EdScape Chapter 1 Population and Students Where Public School Students Live 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Where%20Public%20School%20Students%20Live_2026.xlsx) — **xlsx** — 8 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **Ch1. Pop & Stds_Grade x Ward** (833 rows × 5 cols) — cols: `School Year`, `Grade Band of Public School Students Enrolled`, `Ward of Public School Student Residence`, `Ward Boundary Year`, `Count of Public School Students`
    - tab **Ch1. Pop & Stds_Grd x PlanArea** (2,199 rows × 4 cols) — cols: `School Year`, `Grade Band of Public School Students`, `Comprehensive Plan Planning Area Name`, `Count of Public School Students`
    - tab **Ch1. Pop & Stds_Grade x NC** (4,311 rows × 5 cols) — cols: `School Year`, `Neighborhood Cluster`, `Grade Band of Public School Students`, `Neighborhood Cluster Names`, `Count of Public School Students`
    - tab **Ch1. Pop & Studs_DCPS HS** (889 rows × 5 cols) — cols: `School Year`, `Grade Band of Public School Students`, `DCPS High School Boundary School Code`, `DCPS High School Boundary Name`, `Count of Public School Students`
    - tab **Variable Definitions** (11 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (41 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Where English Learner Public School Students Live — EdScape Chapter 1 Population and Students Where Special Pop Public School Studen`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Where%20Special%20Pop%20Public%20School%20Students%20Live_2026.xlsx) — **xlsx** — 8 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **Chapter 1_Spcl Pop_Ward_2022** (118 rows × 8 cols) — cols: `School Year`, `Ward (2022)`, `Count of Special Education Students`, `Special Education Students as share of Ward`, `Count of English Learner Students`, `English Learner Students as share of Ward`, `Count of At Risk Students`, `At Risk as share of Ward`
    - tab **Chapter 1_Spcl Pop_PA** (144 rows × 8 cols) — cols: `School Year`, `Comprehensive Plan Planning Area`, `Count of Special Education Students`, `Special Education Students as share of Planning Area`, `Count of English Learner Students`, `English Learner Students as share of Planning Area`, `Count of At Risk Students`, `At Risk as share of Planning Area`
    - tab **Chapter 1_Specl Pop_HS boundary** (124 rows × 8 cols) — cols: `School Year`, `DCPS high school boundary`, `Count of Special Education Students`, `Special Education Students as share of DCPS high school boundary`, `Count of English Learner Students`, `English Learner Students as share of DCPS high school boundary`, `Count of At Risk Students`, `At Risk as share of DCPS high school boundary`
    - tab **Chapter 1_Special  Pops_NC** (559 rows × 9 cols) — cols: `School Year`, `Neighborhood Cluster`, `Neighborhood Cluster Names`, `Count of Special Education Students`, `Special Education Students as share of Neighborhood Cluster`, `Count of English Learner Students`, `English Learner Students as share of Neighborhood Cluster`, `Count of At Risk Students`, `At Risk as share of Neighborhood Cluster`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Variable Definitions** (13 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (38 rows × 1 cols) — cols: `Notes`
  - [`Grade Configurations of Public Schools — EdScape Chapter 2 Schools Grade Configurations 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_Grade%20Configurations_2026.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (16 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.2 Schools_Grade Configs** (1,457 rows × 6 cols) — cols: `School Year`, `School Grade Range`, `School Sector`, `Grade Band of Students Enrolled`, `Count of Schools`, `Count of Students Enrolled`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Variable Definitions** (19 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (28 rows × 1 cols) — cols: `Notes`
  - [`Grade and Ward Enrollment Trends — EdScape Chapter 2 Schools Grade and Ward Enrollment Trends 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_Grade%20and%20Ward%20Enrollment%20Trends_2026.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **Wards 2022** (3,008 rows × 5 cols) — cols: `School Year`, `Sector`, `UPSFF Grade Level`, `School Ward 2022`, `Enrollment`
    - tab **Grades** (472 rows × 4 cols) — cols: `School Year`, `School Sector`, `UPSFF Grade Level`, `Enrollment`
    - tab **Variable Definitions** (6 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (21 rows × 1 cols) — cols: `Notes`
  - [`School Opening and Closing Trends — EdScape Chapter 2 Schools Openings and Closings 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_Openings%20and%20Closings_2026.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (16 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.2 Openings and Closings** (140 rows × 11 cols) — cols: `School Year`, `Opened or Closed`, `School Code`, `School Name`, `Sector`, `School Grade Range`, `Max School Grade Range`, `Address`, `Ward (2022)`, `OP Comprehensive Plan Planning Area`, `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Variable Definitions** (12 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (19 rows × 1 cols) — cols: `Notes`
  - [`Public School Enrollment by Race and Ethnicity — EdScape Chapter 2 Schools Race Ethnicity Enrollment 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_Race%20Ethnicity%20Enrollment_2026.xlsx) — **xlsx** — 8 tab(s)
    - tab **Introduction** (16 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.2 Schools_Race Ethnicity_NC** (16,274 rows × 9 cols) — cols: `School year`, `Student race/ethnicity`, `Neighborhood Cluster`, `Neighborhood Cluster Names`, `School sector`, `Grade band of students enrolled`, `Count of race/ethnicity`, `Total enrollment`, `Share of enrollment`
    - tab **Ch.2 Schools_Race Ethnicity_HS** (6,603 rows × 8 cols) — cols: `School year`, `Student race/ethnicity`, `DCPS high school boundary`, `School sector`, `Grade band of students enrolled`, `Count of race/ethnicity`, `Total enrollment`, `Share of enrollment`
    - tab **Ch2 Schools_Race Ethnicity_PA** (6,356 rows × 8 cols) — cols: `School year`, `Student race/ethnicity`, `Comprehensive Plan Planning Area`, `School sector`, `Grade band of students enrolled`, `Count of race/ethnicity`, `Total enrollment`, `Share of enrollment`
    - tab **Ch2 Schools_Race Ethnicity_Ward** (5,322 rows × 8 cols) — cols: `School year`, `Student race/ethnicity`, `Ward (2022)`, `School sector`, `Grade band of students enrolled`, `Count of race/ethnicity`, `Total enrollment`, `Share of enrollment`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Variable Definitions** (13 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (28 rows × 1 cols) — cols: `Notes`
  - [`Enrollment Trends of Specific Public Schools — EdScape Chapter 2 Schools School Enrollment 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_School%20Enrollment_2026.xlsx) — **xlsx** — 6 tab(s)
    - tab **Introduction** (18 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.2 Schools_Enrollment by Sch** (51,296 rows × 8 cols) — cols: `School Year`, `School Sector`, `Grade Band of Students Enrolled`, `Geography`, `School Name`, `School Code`, `Student group`, `Public school enrollment`
    - tab **Ch.2 Schools_Enrollment by Geo** (7,022 rows × 8 cols) — cols: `School Year`, `Geography category`, `School Sector`, `Grade Band of Students Enrolled`, `Geography`, `Geography label`, `Enrollment by Sector and Grade Band`, `Total public school enrollment`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Variable Definitions** (15 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (37 rows × 1 cols) — cols: `Notes`
  - [`Enrollment of Public Schools by Ward — EdScape Chapter 2 Schools School Enrollment 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_School%20Enrollment_2026_0.xlsx) — **xlsx** — 6 tab(s)
    - tab **Introduction** (18 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.2 Schools_Enrollment by Sch** (51,296 rows × 8 cols) — cols: `School Year`, `School Sector`, `Grade Band of Students Enrolled`, `Geography`, `School Name`, `School Code`, `Student group`, `Public school enrollment`
    - tab **Ch.2 Schools_Enrollment by Geo** (7,612 rows × 8 cols) — cols: `School Year`, `Geography category`, `School Sector`, `Grade Band of Students Enrolled`, `Geography`, `Geography label`, `Enrollment by Sector and Grade Band`, `Total public school enrollment`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Variable Definitions** (15 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (39 rows × 1 cols) — cols: `Notes`
  - [`School Enrollment by Special Populations - At Risk — EdScape Chapter 2 Schools Special Pop Students Public School Locations 2025`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_Special%20Pop%20Students%20Public%20School%20Locations_2025.xlsx) — **xlsx** — 10 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **Chapter 2_Special Pops_Ward** (1,261 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Ward (2022)`, `Count of Special Education Students`, `Special Education Students as share of Ward`, `Count of English Learner Students`, `English Learner Students as share of Ward`, `Count of At Risk Students`, `At Risk as share of Ward`
    - tab **Chapter 2_Special Pops_PA** (1,526 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Comprehensive Plan Planning Area`, `Count of Special Education Students`, `Special Education Students as share of Comprehensive Plan Planning Area`, `Count of English Learner Students`, `English Learner Students as share of Comprehensive Plan Planning Area`, `Count of At Risk Students`, `At Risk as share of Comprehensive Plan Planning Area`
    - tab **Chapter 2_Special Pops_HS_bound** (1,586 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `DCPS high school boundary`, `Count of Special Education Students`, `Special Education Students as share of DCPS high school boundary`, `Count of English Learner Students`, `English Learner Students as share of DCPS high school boundary`, `Count of At Risk Students`, `At Risk as share of DCPS high school boundary`
    - tab **Chapter 2_Special Pops_NC** (4,057 rows × 11 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Neighborhood Cluster`, `Neighborhood Cluster Names`, `Count of Special Education Students`, `Special Education Students as share of Neighborhood Cluster`, `Count of English Learner Students`, `English Learner Students as share of Neighborhood Cluster`, `Count of At Risk Students`, `At Risk as share of Neighborhood Cluster`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Chapter 2_Special Pops_SPED Lvl** (49 rows × 3 cols) — cols: `School year`, `SPED Level`, `Count of Special Education Students`
    - tab **Chapter 2_At-risk by School** (2,521 rows × 7 cols) — cols: `School year`, `School Code`, `School Name`, `School Sector`, `Count of At Risk Students`, `Count of Eligible At-Risk Population`, `Share of At Risk Students`
    - tab **Variable Definitions** (18 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (34 rows × 1 cols) — cols: `Notes`
  - [`Special Education Enrollment by Level of Need — EdScape Chapter 2 Schools Special Pop Students 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_Special%20Pop%20Students_2026.xlsx) — **xlsx** — 10 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **Chapter 2_Special Pops_Ward** (1,261 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Ward (2022)`, `Count of Special Education Students`, `Special Education Students as share of Ward`, `Count of English Learner Students`, `English Learner Students as share of Ward`, `Count of At Risk Students`, `At Risk as share of Ward`
    - tab **Chapter 2_Special Pops_PA** (1,526 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Comprehensive Plan Planning Area`, `Count of Special Education Students`, `Special Education Students as share of Comprehensive Plan Planning Area`, `Count of English Learner Students`, `English Learner Students as share of Comprehensive Plan Planning Area`, `Count of At Risk Students`, `At Risk as share of Comprehensive Plan Planning Area`
    - tab **Chapter 2_Special Pops_HS_bound** (1,586 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `DCPS high school boundary`, `Count of Special Education Students`, `Special Education Students as share of DCPS high school boundary`, `Count of English Learner Students`, `English Learner Students as share of DCPS high school boundary`, `Count of At Risk Students`, `At Risk as share of DCPS high school boundary`
    - tab **Chapter 2_Special Pops_NC** (4,057 rows × 11 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Neighborhood Cluster`, `Neighborhood Cluster Names`, `Count of Special Education Students`, `Special Education Students as share of Neighborhood Cluster`, `Count of English Learner Students`, `English Learner Students as share of Neighborhood Cluster`, `Count of At Risk Students`, `At Risk as share of Neighborhood Cluster`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Chapter 2_Special Pops_SPED Lvl** (53 rows × 3 cols) — cols: `School year`, `SPED Level`, `Count of Special Education Students`
    - tab **Chapter 2_At-risk by School** (2,521 rows × 7 cols) — cols: `School year`, `School Code`, `School Name`, `School Sector`, `Count of At Risk Students`, `Count of Eligible At-Risk Population`, `Share of At Risk Students`
    - tab **Variable Definitions** (18 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (37 rows × 1 cols) — cols: `Notes`
  - [`School Enrollment by Special Populations - At Risk — EdScape Chapter 2 Schools Special Pop Students 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_Special%20Pop%20Students_2026_0.xlsx) — **xlsx** — 10 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **Chapter 2_Special Pops_Ward** (1,369 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Ward (2022)`, `Count of Special Education Students`, `Special Education Students as share of Ward`, `Count of English Learner Students`, `English Learner Students as share of Ward`, `Count of At Risk Students`, `At Risk as share of Ward`
    - tab **Chapter 2_Special Pops_PA** (1,653 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Comprehensive Plan Planning Area`, `Count of Special Education Students`, `Special Education Students as share of Comprehensive Plan Planning Area`, `Count of English Learner Students`, `English Learner Students as share of Comprehensive Plan Planning Area`, `Count of At Risk Students`, `At Risk as share of Comprehensive Plan Planning Area`
    - tab **Chapter 2_Special Pops_HS_bound** (1,717 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `DCPS high school boundary`, `Count of Special Education Students`, `Special Education Students as share of DCPS high school boundary`, `Count of English Learner Students`, `English Learner Students as share of DCPS high school boundary`, `Count of At Risk Students`, `At Risk as share of DCPS high school boundary`
    - tab **Chapter 2_Special Pops_NC** (4,408 rows × 11 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Neighborhood Cluster`, `Neighborhood Cluster Names`, `Count of Special Education Students`, `Special Education Students as share of Neighborhood Cluster`, `Count of English Learner Students`, `English Learner Students as share of Neighborhood Cluster`, `Count of At Risk Students`, `At Risk as share of Neighborhood Cluster`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Chapter 2_Special Pops_SPED Lvl** (53 rows × 3 cols) — cols: `School year`, `SPED Level`, `Count of Special Education Students`
    - tab **Chapter 2_At-risk by School** (2,763 rows × 7 cols) — cols: `School year`, `School Code`, `School Name`, `School Sector`, `Count of At Risk Students`, `Count of Eligible At-Risk Population`, `Share of At Risk Students`
    - tab **Variable Definitions** (18 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (40 rows × 1 cols) — cols: `Notes`
  - [`School Enrollment by Special Populations - Special Education — EdScape Chapter 2 Schools Special Pop Students 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_Special%20Pop%20Students_2026_1.xlsx) — **xlsx** — 10 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **Chapter 2_Special Pops_Ward** (1,369 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Ward (2022)`, `Count of Special Education Students`, `Special Education Students as share of Ward`, `Count of English Learner Students`, `English Learner Students as share of Ward`, `Count of At Risk Students`, `At Risk as share of Ward`
    - tab **Chapter 2_Special Pops_PA** (1,653 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Comprehensive Plan Planning Area`, `Count of Special Education Students`, `Special Education Students as share of Comprehensive Plan Planning Area`, `Count of English Learner Students`, `English Learner Students as share of Comprehensive Plan Planning Area`, `Count of At Risk Students`, `At Risk as share of Comprehensive Plan Planning Area`
    - tab **Chapter 2_Special Pops_HS_bound** (1,717 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `DCPS high school boundary`, `Count of Special Education Students`, `Special Education Students as share of DCPS high school boundary`, `Count of English Learner Students`, `English Learner Students as share of DCPS high school boundary`, `Count of At Risk Students`, `At Risk as share of DCPS high school boundary`
    - tab **Chapter 2_Special Pops_NC** (4,408 rows × 11 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Neighborhood Cluster`, `Neighborhood Cluster Names`, `Count of Special Education Students`, `Special Education Students as share of Neighborhood Cluster`, `Count of English Learner Students`, `English Learner Students as share of Neighborhood Cluster`, `Count of At Risk Students`, `At Risk as share of Neighborhood Cluster`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Chapter 2_Special Pops_SPED Lvl** (53 rows × 3 cols) — cols: `School year`, `SPED Level`, `Count of Special Education Students`
    - tab **Chapter 2_At-risk by School** (2,763 rows × 7 cols) — cols: `School year`, `School Code`, `School Name`, `School Sector`, `Count of At Risk Students`, `Count of Eligible At-Risk Population`, `Share of At Risk Students`
    - tab **Variable Definitions** (18 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (40 rows × 1 cols) — cols: `Notes`
  - [`School Enrollment by Special Populations - English Learners — EdScape Chapter 2 Schools Special Pop Students 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_Special%20Pop%20Students_2026_2.xlsx) — **xlsx** — 10 tab(s)
    - tab **Introduction** (17 rows × 1 cols) — cols: `EdScape`
    - tab **Chapter 2_Special Pops_Ward** (1,369 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Ward (2022)`, `Count of Special Education Students`, `Special Education Students as share of Ward`, `Count of English Learner Students`, `English Learner Students as share of Ward`, `Count of At Risk Students`, `At Risk as share of Ward`
    - tab **Chapter 2_Special Pops_PA** (1,653 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Comprehensive Plan Planning Area`, `Count of Special Education Students`, `Special Education Students as share of Comprehensive Plan Planning Area`, `Count of English Learner Students`, `English Learner Students as share of Comprehensive Plan Planning Area`, `Count of At Risk Students`, `At Risk as share of Comprehensive Plan Planning Area`
    - tab **Chapter 2_Special Pops_HS_bound** (1,717 rows × 10 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `DCPS high school boundary`, `Count of Special Education Students`, `Special Education Students as share of DCPS high school boundary`, `Count of English Learner Students`, `English Learner Students as share of DCPS high school boundary`, `Count of At Risk Students`, `At Risk as share of DCPS high school boundary`
    - tab **Chapter 2_Special Pops_NC** (4,408 rows × 11 cols) — cols: `School year`, `Grade band of students enrolled`, `School sector`, `Neighborhood Cluster`, `Neighborhood Cluster Names`, `Count of Special Education Students`, `Special Education Students as share of Neighborhood Cluster`, `Count of English Learner Students`, `English Learner Students as share of Neighborhood Cluster`, `Count of At Risk Students`, `At Risk as share of Neighborhood Cluster`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Chapter 2_Special Pops_SPED Lvl** (53 rows × 3 cols) — cols: `School year`, `SPED Level`, `Count of Special Education Students`
    - tab **Chapter 2_At-risk by School** (2,763 rows × 7 cols) — cols: `School year`, `School Code`, `School Name`, `School Sector`, `Count of At Risk Students`, `Count of Eligible At-Risk Population`, `Share of At Risk Students`
    - tab **Variable Definitions** (18 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (40 rows × 1 cols) — cols: `Notes`
  - [`Specialized Programs Offered by Public Schools — EdScape Chapter 2 Schools Specialized Programs 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%202%20Schools_Specialized%20Programs_2026.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (16 rows × 1 cols) — cols: `EdScape`
    - tab **Ch.2 School_Programs** (2,556 rows × 13 cols) — cols: `School year`, `Facility ID`, `School ID`, `School name`, `Sector`, `Grade band`, `Feeder pattern`, `Program`, `Languages offered`, `All programs offered at school`, `Facility address`, `MAR Latitude` …
    - tab **Variable Definitions** (26 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (50 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Educational Attainment for Adults — EdScape Chapter 5 Neighborhood Factors Educational Attainment for Adults 2025`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%205%20Neighborhood%20Factors_Educational%20Attainment%20for%20Adults_2025.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (15 rows × 1 cols) — cols: `EdScape`
    - tab **Ch5. Educational Attainment** (10 rows × 7 cols) — cols: `Geography`, `Census ID`, `Puma`, `Population age 25+`, `High School Diploma or GED`, `Bachelors Degree`, `Masters +`
    - tab **Variable Definitions** (15 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (20 rows × 1 cols) — cols: `Notes`
  - [`Vehicle Access — EdScape Chapter 5 Neighborhood Factors Vehicle Access`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%205%20Neighborhood%20Factors_Vehicle%20Access.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (15 rows × 1 cols) — cols: `EdScape`
    - tab **Vehicle Access** (10 rows × 5 cols) — cols: `Geography`, `Estimated # of workers 16 years+`, `MOE of estimated # of workers 16 years+`, `Estimated % of workers 16 years+`, `MOE for the estimated % of workers 16 years+`
    - tab **Variable Definitions** (9 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (22 rows × 1 cols) — cols: `Notes`
  - [`Residential Development Pipeline by Ward — Edscape Chapter 5 Neighborhood Factors Residential Pipeline`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/Edscape_Chapter%205%20Neighborhood%20Factors_Residential%20Pipeline.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (18 rows × 1 cols) — cols: `EdScape`
    - tab **Residential Pipeline** (663 rows × 14 cols) — cols: `DCPS Elementary School Boundary Name`, `DCPS Elementary School Boundary Code`, `Pipeline Project Name`, `Address`, `Ward`, `Construction Type`, `Status`, `Status Date`, `Estimated Delivery Date`, `# Total Residential Units`, `# Condo units`, `# Rental units` …
    - tab **Variable Definitions** (31 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (21 rows × 1 cols) — cols: `Notes`
  - [`Residential Development Pipeline Projects — Edscape Chapter 5 Neighborhood Factors Residential Pipeline`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/Edscape_Chapter%205%20Neighborhood%20Factors_Residential%20Pipeline_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (18 rows × 1 cols) — cols: `EdScape`
    - tab **Residential Pipeline** (663 rows × 14 cols) — cols: `DCPS Elementary School Boundary Name`, `DCPS Elementary School Boundary Code`, `Pipeline Project Name`, `Address`, `Ward`, `Construction Type`, `Status`, `Status Date`, `Estimated Delivery Date`, `# Total Residential Units`, `# Condo units`, `# Rental units` …
    - tab **Variable Definitions** (31 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (21 rows × 1 cols) — cols: `Notes`
  - [`Estimated Student Yield from Residential Development Pipeline — Edscape Chapter 5 Neighborhood Factors Residential Pipeline`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/Edscape_Chapter%205%20Neighborhood%20Factors_Residential%20Pipeline_2.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (18 rows × 1 cols) — cols: `EdScape`
    - tab **Residential Pipeline** (663 rows × 14 cols) — cols: `DCPS Elementary School Boundary Name`, `DCPS Elementary School Boundary Code`, `Pipeline Project Name`, `Address`, `Ward`, `Construction Type`, `Status`, `Status Date`, `Estimated Delivery Date`, `# Total Residential Units`, `# Condo units`, `# Rental units` …
    - tab **Variable Definitions** (31 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (21 rows × 1 cols) — cols: `Notes`
  - [`Types of Housing — Edscape Chapter 5 Neighborhood Factors Types of Housing`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/Edscape_Chapter%205%20Neighborhood%20Factors_Types%20of%20Housing.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (15 rows × 1 cols) — cols: `EdScape`
    - tab **Types of Housing Units** (49 rows × 4 cols) — cols: `Basic Housing Unit Type`, `Housing Unit Type`, `Housing Unit Ward`, `Estimated # of Housing Units`
    - tab **Variable Definitions** (11 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (23 rows × 1 cols) — cols: `Notes`
  - [`Types of Housing by Ward — Edscape Chapter 5 Neighborhood Factors Types of Housing`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/Edscape_Chapter%205%20Neighborhood%20Factors_Types%20of%20Housing_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (15 rows × 1 cols) — cols: `EdScape`
    - tab **Types of Housing Units** (49 rows × 4 cols) — cols: `Basic Housing Unit Type`, `Housing Unit Type`, `Housing Unit Ward`, `Estimated # of Housing Units`
    - tab **Variable Definitions** (11 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (23 rows × 1 cols) — cols: `Notes`
  - [`Estimated Student Yield from Residential Development Pipeline — Edscape Chapter 5 Neighborhood Factors Types of Housing Student Yield`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/Edscape_Chapter%205%20Neighborhood%20Factors_Types%20of%20Housing_Student%20Yield_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (15 rows × 1 cols) — cols: `EdScape`
    - tab **Ward by Type Stud Yield** (40 rows × 6 cols) — cols: `Housing Unit Type`, `Housing Unit Ward`, `Estimated # of Housing Units`, `School Year`, `Count of Students`, `All Public School Students Yield per 100 Housing Units`
    - tab **Variable Definitions** (15 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (27 rows × 1 cols) — cols: `Notes`
  - [`Public School Students by Housing Type — Edscape Chapter 5 Neighborhood Factors Types of Housing Student Yield`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/Edscape_Chapter%205%20Neighborhood%20Factors_Types%20of%20Housing_Student%20Yield_1.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (15 rows × 1 cols) — cols: `EdScape`
    - tab **Ward by Type Stud Yield** (40 rows × 6 cols) — cols: `Housing Unit Type`, `Housing Unit Ward`, `Estimated # of Housing Units`, `School Year`, `Count of Students`, `All Public School Students Yield per 100 Housing Units`
    - tab **Variable Definitions** (15 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (31 rows × 1 cols) — cols: `Notes`

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
  - [`Trends in Enrollment by Sector — EdScape Chapter 4 Enrollment Patterns Sector 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Sector_2026_0.xlsx) — **xlsx** — 9 tab(s)
    - tab **Introduction** (19 rows × 1 cols) — cols: `EdScape`
    - tab **Citywide** (406 rows × 5 cols) — cols: `School Year`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `Count of Students`, `Count of Students in Category`
    - tab **Ward 2022** (2,623 rows × 6 cols) — cols: `School Year`, `Student Ward`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `Count of Students in Ward`, `Count of Students in Category`
    - tab **Neighborhood** (12,884 rows × 7 cols) — cols: `School Year`, `Neighborhood Cluster`, `Neighborhood Cluster Names`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `Count of Students in Cluster`, `Count of Students in Category`
    - tab **Planning Area** (3,291 rows × 6 cols) — cols: `School Year`, `Comprehensive Planning Area`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `Count of Students in Planning Area`, `Count of Students in Category`
    - tab **DCPS HS Boundary** (2,834 rows × 7 cols) — cols: `School Year`, `DCPS HS Zone Code`, `DCPS HS Zone`, `School Choice Enrollment Category`, `Grade Band of Students Enrolled`, `Count of Students in DCPS HS Boundary`, `Count of Students in Category`
    - tab **Variable Definitions** (11 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (42 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns Commute Paths 2026`](https://edscape.dc.gov/sites/default/files/2026-09/EdScape_Chapter%204%20Enrollment%20Patterns_Commute%20Paths_2026.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (15 rows × 1 cols) — cols: `EdScape`
    - tab **Ch4 Stu Ward 2022-Sch Ward 2022** (68,128 rows × 11 cols) — cols: `School Year`, `School sector`, `Grade band of students enrolled`, `Student group`, `Student ward`, `School ward`, `Count of students`, `Median walk distance`, `School commute path`, `Share of students in student geography`, `Share of students in school geography`
    - tab **Ch4 Stu Plng Area-Sch Plng Area** (93,182 rows × 11 cols) — cols: `School Year`, `School sector`, `Grade band of students enrolled`, `Student group`, `Student planning area`, `School planning area`, `Count of students`, `Median walk distance`, `School commute path`, `Share of students in student geography`, `Share of students in school geography`
    - tab **Variable Definitions** (29 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes** (32 rows × 1 cols) — cols: `Notes`

### [EdScape — Public School Facilities (capacity/utilization/locations)](https://edscape.dc.gov/page/facilities-index)

_topics: facilities_

- **Format:** Interactive dashboards + maps + Excel
- **Updated:** Annual+
- **Years on page:** SY2013-14 through SY2026-27
- **Notes:** Building counts/locations, programmatic capacity, utilization (how full), unfilled seats, DCPS modernizations. Produced with DC PCSB, DCPS, OSSE, DGS — the cross-sector facilities view.
- **Data files (profiled):**
  - [`Public School Facility Programmatic Capacity — EdScape Chapter 3 Facilities Facility Enrollment and Utilization 2026`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%203%20Facilities_Facility%20Enrollment%20and%20Utilization_2026_3.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (19 rows × 1 cols) — cols: `EdScape`
    - tab **Capacities and utilization** (4,126 rows × 31 cols) — cols: `School year`, `LEA ID`, `LEA name`, `School ID`, `School name`, `School sector`, `School category`, `School grades`, `Growing flag`, `Facility ID`, `Facility address`, `DCPS facility name` …
    - tab **Modernizations** (201 rows × 20 cols) — cols: `Facility ID`, `Modernization year`, `Modernization type`, `LEA ID`, `School ID`, `School year`, `School name`, `School grades`, `Sector`, `All schools occupying facility`, `Facility address`, `DCPS facility name` …
    - tab **Data dictionary** (35 rows × 2 cols) — cols: `Variable name`, `Variable description`
    - tab **Notes** (68 rows × 1 cols) — cols: `Notes`
  - [`Number of Public School Facilities — EdScape Chapter 3 Facilities Facility Enrollment and Utilization 2027`](https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%203%20Facilities_Facility%20Enrollment%20and%20Utilization_2027_1.xlsx) — **xlsx** — 6 tab(s)
    - tab **Introduction** (19 rows × 1 cols) — cols: `EdScape`
    - tab **Capacities and utilization** (4,458 rows × 31 cols) — cols: `School year`, `LEA ID`, `LEA name`, `School ID`, `School name`, `School sector`, `School category`, `School grades`, `Growing flag`, `Facility ID`, `Facility address`, `DCPS facility name` …
    - tab **Facilities** (3,052 rows × 16 cols) — cols: `School year`, `Facility ID`, `Facility address`, `DCPS facility name`, `MAR xcoord`, `MAR ycoord`, `MAR latitude`, `MAR longitude`, `Ward (2022)`, `Neighborhood cluster`, `Comprehensive plan planning area`, `DCPS boundary` …
    - tab **Modernizations** (201 rows × 20 cols) — cols: `Facility ID`, `Modernization year`, `Modernization type`, `LEA ID`, `School ID`, `School year`, `School name`, `School grades`, `Sector`, `All schools occupying facility`, `Facility address`, `DCPS facility name` …
    - tab **Data dictionary** (35 rows × 2 cols) — cols: `Variable name`, `Variable description`
    - tab **Notes** (74 rows × 1 cols) — cols: `Notes`

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
- **Data files (profiled):**
  - [`2024 MFP Annual Supplement report`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/2024%20MFP%20Annual%20Supplement%20FINAL.pdf) — **pdf** — 16 pages, **extractable tables** on ~2 page(s)
    - p13 table (19 rows): `School name`, `Ward`, `SY24-25 enrollment`, `SY24-25 facility capacity`, `Utilization % (pp change from SY23-24)`, `SY23-24 utilization <=50%`
    - p14 table (21 rows): `School name`, `Ward`, `SY24-25 enrollment`, `SY24-25 facility capacity`, `Utilization % (pp change from SY23-24)`, `SY23-24 utilization >=95%`
  - [`2024 MFP Annual Supplement Appendix 1`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/2024%20MFP%20Annual%20Supplement%20Appendix%201.xlsx) — **xlsx** — 9 tab(s)
    - tab **Contents and notes** (15 rows × 3 cols) — cols: `Tab`, `Name`, `Description`
    - tab **A. SY24-25 PCS DGS Leases** (66 rows × 8 cols) — cols: `Facility ID`, `LEA ID`, `School ID`, `School Name`, `Address`, `Status`, `Sector`, `DCPS facility name`
    - tab **B. DCPS SY24-25 Enroll & Utiliz** (120 rows × 2 cols) — cols: `SY23-24`, `SY24-25`
    - tab **C. PCS SY24-25 Enroll & Utiliz** (150 rows × 2 cols) — cols: `SY23-24`, `SY24-25`
    - tab **D. DCPS FCI** (120 rows × 10 cols) — cols: `Facility ID`, `School ID`, `School name`, `Facility address`, `DCPS facility name`, `Ward (2022)`, `Assessment year`, `1 year Facility Condition Index**`, `5 Year Facility Condition Index**`, `10 Year Facility Condition Index**`
    - tab **E. PCSB Facility Survey Results** (30 rows × 1 cols) — cols: `Public charter school facility needs and conditions, SY24-25`
    - tab **F. DCPS Modernization Status** (160 rows × 9 cols) — cols: `Facility ID`, `Year of completion`, `Modernization type`, `Facility address`, `DCPS facility name`, `LEA ID`, `School ID`, `School name`, `All schools`
    - tab **G. CIP FY25-30** (37 rows × 1 cols) — cols: `Approved FY25-30 Capital Improvements Plan (CIP)`
    - tab **H. DCPS Facility Classification** (133 rows × 7 cols) — cols: `School ID`, `School name`, `Facility ID`, `Facility address`, `DCPS facility name`, `Designation for SY24-25`, `Notes`
  - [`2024 MFP Annual Supplement Appendix 2`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/2024%20MFP%20Annual%20Supplement%20Appendix%202.xlsx) — **xlsx** — 5 tab(s)
    - tab **Appendix 2. Contents** (15 rows × 1 cols) — cols: `Master Facilities Plan 2024 Supplement enrollment projections`
    - tab **A.Methodology Overview** (12 rows × 1 cols) — cols: `Enrollment projection methodology overview`
    - tab **B.Aggregate projections** (70 rows × 6 cols) — cols: `Sector`, `School year`, `Type`, `Count`, `Change`, `% change`
    - tab **C.DCPS enrollment projections** (118 rows × 26 cols) — cols: `School code`, `School name`, `SY13-14`, `SY14-15`, `SY15-16`, `SY16-17`, `SY17-18`, `SY18-19`, `SY19-20`, `SY20-21`, `SY21-22`, `SY22-23` …
    - tab **D.Births** (38 rows × 1 cols) — cols: `Entry year`
  - [`2024 MFP Annual Supplement Appendix 3`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/2024%20MFP%20Annual%20Supplement%20Appendix%203.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (4 rows): `Facility`, `Ward`, `Agency`, `Gross`, `Notes`
    - p1 table (4 rows): `Facility`, `Ward (2022)`, `Agency`, `Gross`, `Notes`
    - p1 table (2 rows): `Ward`

### [DME — Boundary and Student Assignment Study 2023 (data supplement)](https://dme.dc.gov/page/boundary-and-student-assignment-study-2023-data-supplement)

_topics: boundaries, enrollment, demographics_

- **Format:** Excel datasheets + PDFs + interactive maps
- **Updated:** One-time study (2023)
- **Years on page:** SY2022-23 / SY2023-24 + historical trends
- **Notes:** School-level enrollment/demographics/capacity/distance, boundary map series, feeder patterns, population forecasts, PreK waitlists, utilization, segregation analysis.
- **Data files (profiled):**
  - [`Boundary and Student Assignment Study 2023 Supporting Datasheet`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Boundary%20and%20Student%20Assignment%20Study%202023%20Supporting%20Datasheet%20-%204.05.2024.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (8 rows × 1 cols) — cols: `Boundary and Student Assignment Study 2023 Supporting Datasheet - 4.05.2024`
    - tab **4.05.2024 Datasheet** (131 rows × 30 cols) — cols: `Feeder Pattern`, `School Level`, `Name`, `School Code`, `Facility ID`, `SY22-23 MFP capacities`, `MFP adjusted future capacities`, `SY22-23 MFP utilization`, `MFP adjusted utilization`, `Utilization Key`, `SY22-23 Area per student (SF/Enrollment)`, `SY22-23 Enrollment` …
    - tab **Variable Definitions** (31 rows × 2 cols) — cols: `Variable name`, `Variable definition`
    - tab **Notes** (12 rows × 1 cols) — cols: `Notes`
  - [`Boundary and Student Assignment Study 2023 - ES Boundary Neighbors datasheet`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Elementary%20School%20Boundary%20Neighbors%20-%20Shares%20of%20at-risk%20students.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (4 rows × 1 cols) — cols: `Boundary and Student Assignment Study 2023 - Elementary School Boundary Neighbors`
    - tab **SY22-23 At Risk Shares** (391 rows × 9 cols) — cols: `School Year`, `Main Id`, `Main School Boundary Name`, `Neighbor Id`, `Neighbor School Boundary Name`, `Boundary Neighbor Pair Names`, `Main Percent`, `Neighbor Percent`, `Absolute Difference`
    - tab **Variable Definitions** (10 rows × 2 cols) — cols: `Variable name`, `Variable definition`
    - tab **Notes** (10 rows × 1 cols) — cols: `Notes`

### [DME — Download Data (legacy datasets)](https://dme.dc.gov/page/download-data)

_topics: enrollment, facilities, boundaries_

- **Format:** Downloadable Excel/CSV/PDF
- **Updated:** Legacy/archival
- **Years on page:** SY2014-15 through SY2023-24
- **Notes:** DEAD END as of June 2026 — this page no longer hosts files; it now just links out to EdScape and OpenData DC. The actual downloadable datasets (e.g. 'Enrollments per DCPS Boundary') moved to EdScape's chapter pages and are harvested under EdScape. Kept here because it's still the URL people get sent to. Older DME datasets (MFP appendices, School Facilities Data, Enrollments per DCPS Boundary SY2016-17 to SY2023-24, Supply & Demand fact sheets, 2014 boundary review data) are attached to individual items on dme.dc.gov/publications; see the dme-mfp-archive, dme-school-facilities-data, dme-enrollment-per-boundary, dme-supply-demand and dme-boundary-review-2014 sources (added 2026-11-01).

### [DME — Interactive School Facility Maps](https://dme.dc.gov/page/interactive-school-facility-maps)

_topics: facilities_

- **Format:** Interactive Tableau maps + data downloads (recent years)
- **Updated:** Annual (one map per school year)
- **Years on page:** SY2015-16 through SY2025-26
- **Notes:** Standalone facility-location maps; content now also inside EdScape Ch.3. Early years lack downloadable data.

### [DME — Master Facilities Plans & annual supplements (archive)](https://dme.dc.gov/publications)

_topics: facilities, enrollment_

- **Format:** Excel appendices + PDF reports
- **Updated:** Annual supplement; full plan every ~5 years
- **Years on page:** MFP 2015 and 2018 appendices; annual supplements 2016, 2019-2022, 2025
- **Notes:** Each publication on DME's publications list carries Excel appendices: per-school enrollment, facility data, utilization, condition, facility classification, and (2019) 5- and 10-year enrollment projections; MFP 2018 has ~20 tables (A.1-A.25). The 2023 MFP and 2024 supplement are separate sources. Found by scanning all 72 pages of dme.dc.gov/publications on 2026-11-01. Only the 2025 supplement's PDFs are catalogued; older years' report PDFs are not.
- **Data files (profiled):**
  - [`MFP 2025 Supplement — 2025 MFP Annual Supplement Report`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/2025_MFP_Annual_Supplement_FINAL%5B1%5D.pdf) — **pdf** — 22 pages, **extractable tables** on ~6 page(s)
    - p7 table (14 rows): `Types of DCPS facilities`, `# facilities`
    - p12 table (19 rows): `School name`, `Ward`, `SY25-26 enrollment`, `SY25-26 facility capacity`, `Utilization % (percentage point change from SY24-25)`
    - p13 table (22 rows): `School name`, `Ward`, `SY25-26 enrollment`, `SY25-26 facility capacity`, `Utilization % (percentage point change from SY24-25)`
  - [`MFP 2025 Supplement — 2025 MFP Annual Supplement Appendix 1`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/2025%20MFP%20Annual%20Supplement%20Appendix%201.xlsx) — **xlsx** — 9 tab(s)
    - tab **Contents and notes** (15 rows × 3 cols) — cols: `Tab`, `Name`, `Description`
    - tab **A. SY25-26 PCS DGS Leases** (67 rows × 8 cols) — cols: `Facility ID`, `LEA ID`, `School ID`, `School Name`, `Address`, `Status`, `Sector`, `DCPS facility name`
    - tab **B. DCPS SY25-26 Enroll & Utiliz** (120 rows × 2 cols) — cols: `SY24-25`, `SY25-26`
    - tab **C. PCS SY25-26 Enroll & Utiliz** (124 rows × 2 cols) — cols: `SY24-25`, `SY25-26`
    - tab **D. DCPS FCI** (125 rows × 10 cols) — cols: `Facility ID`, `Facility address`, `Ward (2022)`, `DCPS facility name`, `School ID`, `School name`, `Swinging`, `1 Year Facility Condition Index**`, `5 Year Facility Condition Index**`, `10 Year Facility Condition Index**`
    - tab **E. PCSB Facility Survey Results** (30 rows × 1 cols) — cols: `Public charter school facility needs and conditions, SY25-26`
    - tab **F. DCPS Modernization Status** (161 rows × 9 cols) — cols: `Facility ID`, `Year of completion`, `Modernization type`, `Facility address`, `DCPS facility name`, `LEA ID`, `School ID`, `School name`, `All schools`
    - tab **G. CIP FY26-31 ** (37 rows × 7 cols) — cols: `Approved FY26-31 Capital Improvements Plan (CIP)`, `SY25-26`, `SY26-27`, `SY27-28`, `SY28-29`, `SY29-30`, `SY30-31`
    - tab **H. DCPS Facility Classification** (133 rows × 7 cols) — cols: `School ID`, `School name`, `Facility ID`, `Facility address`, `DCPS facility name`, `Designation for SY25-26`, `Notes`
  - [`MFP 2025 Supplement — 2025 MFP Annual Supplement Appendix 2`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/2025%20MFP%20Annual%20Supplement%20Appendix%202.pdf) — **pdf** — 1 pages, **extractable tables** on ~1 page(s)
    - p1 table (4 rows): `Facility`, `Ward`, `Agency`, `Gross`, `Notes`
    - p1 table (6 rows): `Facility`, `Ward`, `Agency`, `Gross`, `Notes`
    - p1 table (10 rows): `Facility`, `Ward`, `Agency`, `Gross`, `Notes`
  - [`MFP 2025 Supplement — 2025 MFP Annual Supplement Appendix 3`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/2025%20MFP%20Annual%20Supplement%20Appendix%203_0.xlsx) — **xlsx** — 6 tab(s)
    - tab **Appendix 3. Contents** (15 rows × 1 cols) — cols: `Master Facilities Plan 2025 Supplement enrollment projections`
    - tab **A.Methodology Overview** (12 rows × 1 cols) — cols: `Enrollment projection methodology overview`
    - tab **B.Aggregate projections** (70 rows × 6 cols) — cols: `Sector`, `School year`, `Type`, `Count PK to 12/Alt grades`, `N change from prior year`, `% change from prior year`
    - tab **C.Grade band projections** (16 rows × 25 cols) — cols: `Sector`, `Grade band`, `SY13-14`, `SY14-15`, `SY15-16`, `SY16-17`, `SY17-18`, `SY18-19`, `SY19-20`, `SY20-21`, `SY21-22`, `SY22-23` …
    - tab **D.DCPS school projections** (115 rows × 26 cols) — cols: `School code`, `School name`, `SY13-14`, `SY14-15`, `SY15-16`, `SY16-17`, `SY17-18`, `SY18-19`, `SY19-20`, `SY20-21`, `SY21-22`, `SY22-23` …
    - tab **E.Births** (41 rows × 4 cols) — cols: `Year of birth`, `PK3 entry year`, `Actual number of births`, `Forecast births`
  - [`MFP 2025 Supplement — 2025 MFP Annual Supplement Appendix 4`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/2025%20MFP%20Annual%20Supplement%20Appendix%204_0.pdf) — **pdf** — 8 pages, **extractable tables** on ~2 page(s)
    - p5 table (16 rows): `Sector share of PK3 enrollment Birth Birth to 3-yr later PK3 DCPS Public charter Year capture rate`
    - p6 table (15 rows): `DCPS Public charter Mean Mean`
  - [`MFP 2022 Supplement — Appendix A - DCPS SY2021-22 Enrollment Utilization Plans MFP 2022 Supp_Final`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20A%20-%20DCPS%20SY2021-22%20Enrollment%20Utilization%20Plans%20MFP%202022%20Supp_Final_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **SY21-22 DCPS Utilization** (118 rows × 15 cols) — cols: `School ID`, `SY2021-22 School Name`, `Facility ID`, `DCPS Feeder Pattern`, `SY21-22 Utilization Rate (Permanent Capacity)`, `SY21-22 Utilization Rate (Permanent + Portable Capacity)`, `Permanent Programmatic Capacity (School) SY21-22`, `Total Programmatic Capacity (School) SY21-22`, `Enrollment SY21-22`, `Facility-level utilization (if different from school)`, `Percentage point difference from SY20-21 (Total)`, `Percentage point difference from SY20-21 (Permanent)` …
    - tab **Variable Definitions** (16 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes & Sources** (13 rows × 1 cols) — cols: `Notes`
  - [`MFP 2022 Supplement — Appendix B - DC PCS SY2021-22 Enrollment Data MFP 2022 Supp_Final`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20B%20-%20DC%20PCS%20SY2021-22%20Enrollment%20Data%20MFP%202022%20Supp_Final_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **SY21-22 PCS facility data** (123 rows × 9 cols) — cols: `LEA ID`, `School ID(s)`, `SY2021-22 School Name(s)`, `SY2021-22 Facility Address`, `Former DCPS building, if applicable`, `SY2021-22 Audited Enrollment`, `SY2021-22 Facility Program Capacity`, `SY2021-22 Utilization Rate`, `Percentage point change from SY2020-21`
    - tab **Variable Definitions** (15 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes & Sources** (11 rows × 1 cols) — cols: `Notes`
  - [`MFP 2022 Supplement — Appendix C - DCPS Facility Classification MFP 2022 Supp_Final`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20C%20-%20DCPS%20Facility%20Classification%20MFP%202022%20Supp_Final_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **DCPS Facility Class SY21 22** (128 rows × 5 cols) — cols: `School ID`, `School Name SY21-22`, `Address SY21-22`, `Designation SY21-22`, `Notes`
    - tab **Variable Definitions** (22 rows × 2 cols) — cols: `Variable Name`, `Variable Definition`
    - tab **Notes & Sources** (6 rows × 1 cols) — cols: `Notes`
  - [`MFP 2021 Supplement — Appendix A - DCPS SY2020-21 Enrollment Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20A%20-%20DCPS%20SY2020-21%20Enrollment%20Data.xlsx) — **xlsx** — 3 tab(s)
    - tab **SY20-21 DCPS Utilization** (120 rows × 11 cols) — cols: `School ID`, `SY2020-21 School Name`, `SY2020-21 School Address`, `SY2020-21 Facility ID`, `SY2020-21 Audited Enrollment`, `SY2020-21 Permanent Capacity***`, `SY2020-21 Portable Capacity***`, `SY2020-21 Total Capacity (Permanent + Portable Capacity)`, `SY2020-21 Utilization Rate (Permanent Capacity)`, `SY2020-21 Utilization Rate (Permanent + Portable Capacity)`, `Plan to Address High Utilization (>=95%) or Low Utilization (<50%)`
    - tab **Capacity Changes** (47 rows × 12 cols) — cols: `School ID`, `SY2020-21 School Name`, `SY2020-21 School Address`, `SY2020-21 Facility ID`, `SY2019-20 Permanent Capacity`, `SY2019-20 Portable Capacity`, `SY2019-20 Total Capacity (Permanent + Portable Capacity)`, `SY2020-21 Permanent Capacity`, `SY2020-21 Portable Capacity`, `SY2020-21 Total Capacity (Permanent + Portable Capacity)`, `Change in Capacity`, `Reason for Change`
    - tab **Notes & Sources** (26 rows × 1 cols) — cols: `Notes`
  - [`MFP 2021 Supplement — Appendix B - DC PCS SY2020-21 Enrollment Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20B%20-%20DC%20PCS%20SY2020-21%20Enrollment%20Data.xlsx) — **xlsx** — 3 tab(s)
    - tab **SY20-21 PCS facility data** (118 rows × 8 cols) — cols: `LEA ID`, `School ID(s)`, `Campus`, `Facility address`, `Former DCPS building, if applicable`, `SY2020-21 Audited Enrollment`, `SY2020-21 Facility Program Capacity`, `SY2020-21 Utilization Rate`
    - tab **Notes & Sources** (14 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2021 Supplement — Appendix C - DCPS Facility Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20C%20-%20DCPS%20Facility%20Data_2.xlsx) — **xlsx** — 3 tab(s)
    - tab **DCPS FCA FCI Data** (112 rows × 9 cols) — cols: `School ID(s)`, `School Name(s)`, `Address`, `Facility ID`, `Ward`, `Year of FCA`, `Current Facility Condition Index**`, `5 Year Facility Condition Index**`, `10 Year Facility Condition Index**`
    - tab **FY21 DCPS Water Filtration Test** (4,660 rows × 16 cols) — cols: `Building Location`, `RECORD ID`, `Floor`, `Device Type as of October 4th, 2021`, `Device Location`, `Current Filter Installation Date as of October 4th, 2021`, `Current Filter Expiration Date as of October 4th, 2021`, `FY21 1st Draw - Sample ID`, `FY21 1st Draw Results`, `FY21 2nd Draw - Sample ID`, `FY21 2nd Draw Result`, `FY21 RETEST 1st Draw - Sample ID` …
    - tab **Notes & Sources** (44 rows × 1 cols) — cols: `Notes`
  - [`MFP 2021 Supplement — Appendix D - DC PCS Facility Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20D%20-%20DC%20PCS%20Facility%20Data_2.xlsx) — **xlsx** — 3 tab(s)
    - tab **PCSB Facility Survey Results** (38 rows × 1 cols) — cols: `Public charter school facility needs and conditions, SY20-21`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Notes & Sources** (15 rows × 1 cols) — cols: `Notes`
  - [`MFP 2021 Supplement — Appendix E - DCPS Facility Classification as of December 2021`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20E%20-%20DCPS%20Facility%20Classification%20as%20of%20December%202021.xlsx) — **xlsx** — 3 tab(s)
    - tab **DCPS Facility Classification** (128 rows × 5 cols) — cols: `School ID`, `School Name`, `Address`, `Designation`, `Note`
    - tab **Notes & Sources** (8 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2020 Supplement — Appendix A - DCPS SY2019-20 Enrollment Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20A%20-%20DCPS%20SY2019-20%20Enrollment%20Data.xlsx) — **xlsx** — 2 tab(s)
    - tab **SY19-20 DCPS Utilization** (122 rows × 11 cols) — cols: `School ID`, `SY2019-20 School Name`, `SY2019-20 School Address`, `SY2019-20 Facility ID`, `SY2019-20 Audited Enrollment`, `SY2019-20 Permanent Capacity****`, `SY2019-20 Portable Capacity****`, `SY2019-20 Total Capacity (Permanent + Portable Capacity)`, `SY2019-20 Utilization Rate (Permanent Capacity)`, `SY2019-20 Utilization Rate (Permanent + Portable Capacity)`, `Plan to Address High/Low Utilization`
    - tab **Notes & Sources** (21 rows × 1 cols) — cols: `Notes`
  - [`MFP 2020 Supplement — Appendix B - DC PCS SY2019-20 Enrollment Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20B%20-%20DC%20PCS%20SY2019-20%20Enrollment%20Data.xlsx) — **xlsx** — 3 tab(s)
    - tab **SY19-20 PCS facility data** (115 rows × 8 cols) — cols: `LEA ID`, `School ID(s)`, `Campus`, `Facility address`, `Former DCPS building, if applicable`, `SY2019-20 Audited Enrollment`, `SY2019-20 Facility Program Capacity`, `SY2019-20 Utilization Rate`
    - tab **Notes & Sources** (14 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2020 Supplement — Appendix C - DCPS Facility Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20C%20-%20DCPS%20Facility%20Data_1.xlsx) — **xlsx** — 3 tab(s)
    - tab **DCPS FCA FCI Data** (89 rows × 9 cols) — cols: `School ID(s)`, `School Name(s)`, `Address`, `Facility ID`, `Ward`, `Year of FCA`, `Current Facility Condition Index**`, `5 Year Facility Condition Index**`, `10 Year Facility Condition Index**`
    - tab **FY20 DCPS Water Filtration Test** (4,592 rows × 15 cols) — cols: `Building Location: Building Name`, `RECORD ID`, `Floor`, `Device Type`, `Device Location`, `Current Filter Installation Date as of Novmber 2020`, `Current Filter Expiration Date as of Novmber 2020`, `FY20 1st Draw - Sample ID`, `FY20 1st Draw Result`, `FY20 2nd Draw - Sample ID`, `FY20 2nd Draw Result`, `FY20 RETEST 1st Draw - Sample ID` …
    - tab **Notes & Sources** (20 rows × 1 cols) — cols: `Notes`
  - [`MFP 2020 Supplement — Appendix D - DC PCS Facility Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20D%20-%20DC%20PCS%20Facility%20Data_1.xlsx) — **xlsx** — 3 tab(s)
    - tab **PCSB Facility Survey Results** (39 rows × 1 cols) — cols: `Public charter school facility needs and conditions, SY19-20`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Notes & Sources** (15 rows × 1 cols) — cols: `Notes`
  - [`MFP 2020 Supplement — Appendix E - DCPS Facility Classifications`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20E%20-%20DCPS%20Facility%20Classification%20as%20of%20December%202020.xlsx) — **xlsx** — 3 tab(s)
    - tab **DCPS Facility Classification** (129 rows × 5 cols) — cols: `School ID`, `School Name`, `Address`, `Designation`, `Note`
    - tab **Notes & Sources** (10 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2019 Supplement — Appendix A - DCPS SY2018-19 Enrollment Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20A%20-%20DCPS%20SY2018-19%20Enrollment%20Data_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **SY18-19 DCPS Utilization** (121 rows × 16 cols) — cols: `School ID`, `SY2018-19 School Name`, `SY2018-19 School Address`, `SY2018-19 Facility ID`, `SY2018-19 Audited Enrollment`, `SY2018-19 Permanent Capacity***`, `SY2018-19 Portable Capacity***`, `SY2018-19 Total Capacity (Permanent + Portable Capacity)`, `SY2018-19 Utilization Rate (Permanent Capacity)`, `SY2018-19 Utilization Rate (Permanent + Portable Capacity)`, `Expected Future Capacity`, `SY2023-24 Projected Enrollment` …
    - tab **Notes & Sources** (18 rows × 1 cols) — cols: `Notes`
    - tab **Projection Methodology** (44 rows × 1 cols) — cols: `Introduction`
  - [`MFP 2019 Supplement — Appendix B - DC PCS SY2018-19 Enrollment Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20B%20-%20DC%20PCS%20SY2018-19%20Enrollment%20Data_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **SY18-19 PCS facility data** (119 rows × 8 cols) — cols: `LEA ID`, `School ID(s)`, `Campus`, `Facility address`, `Former DCPS building, if applicable`, `SY2018-19 Audited Enrollment`, `SY2018-19 Facility program capacity`, `SY2018-19 Utilization Rate`
    - tab **Notes & Sources** (14 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2019 Supplement — Appendix C - DCPS Facility Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20C%20-%20DCPS%20Facility%20Data_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **DCPS FCA FCI Data** (68 rows × 9 cols) — cols: `School ID(s)`, `School Name(s)`, `Address`, `Facility ID`, `Ward`, `Year of FCA`, `Current Facility Condition Index`, `5 Year Facility Condition Index`, `10 Year Facility Condition Index`
    - tab **DCPS Water Filtration Tests** (4,765 rows × 15 cols) — cols: `Building Location: Building Name`, `RECORD ID`, `Floor`, `Device Type`, `Device Location`, `Current Filter Installation Date as of November 2019`, `Current Filter Expiration Date of Novmber 2019`, `FY19 1st Draw - Sample ID`, `FY19 1st Draw Result`, `FY19 2nd Draw - Sample ID`, `FY19 2nd Draw Result`, `FY19 RETEST 1st Draw - Sample ID` …
    - tab **Notes & Sources** (15 rows × 1 cols) — cols: `Notes`
  - [`MFP 2019 Supplement — Appendix D - DC PCS Facility Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20D%20-%20DC%20PCS%20Facility%20Data_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **PCSB Facility Survey Results** (46 rows × 1 cols) — cols: `Public charter school facility needs and conditions, SY18-19`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Notes & Sources** (21 rows × 1 cols) — cols: `Notes`
  - [`MFP 2019 Supplement — Appendix E – DCPS 5- and 10-year Enrollment Projections`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20E%20%E2%80%93%20DCPS%205-%20and%2010-year%20Enrollment%20Projections%20_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **DCPS Enrollment Projections** (118 rows × 19 cols) — cols: `School ID`, `SY2018-19 School Name`, `School Address`, `Facility ID`, `Projection Methodology`, `Expected Future Programmatic Capacity`, `SY2023-24 Projected In-Boundary Enrollment`, `SY2023-24 Projected Out of Boundary Enrollment`, `SY2023-24 Projected Feeder Enrollment (MS & HS only)`, `SY2023-24 Additional Programmatic Enrollment (PK Expansion)`, `SY2023-24 Projected Total Enrollment`, `SY2023-24 Projected Utilization` …
    - tab **Notes & Sources** (18 rows × 1 cols) — cols: `Notes`
    - tab **Projection Methodology** (44 rows × 1 cols) — cols: `Introduction`
  - [`MFP 2019 Supplement — Appendix F - DC PCS 5- and 10-year Enrollment Estimates`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20F%20-%20DC%20PCS%205-%20and%2010-year%20Enrollment%20Estimates_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **SY18-19 PCS Enrollment Estimate** (131 rows × 5 cols) — cols: `LEA ID`, `School ID(s)`, `Campus`, `5 Year Enrollment Estimates (2024-2025)`, `10 Year Enrollment Estimates (2029-2030)`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Notes & Sources** (13 rows × 1 cols) — cols: `Notes`
  - [`MFP 2019 Supplement — Appendix G - DCPS SY2018-19 Facility Classification`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20G%20-%20DCPS%20SY2018-19%20Facility%20Classification_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **DCPS Facility Classification** (129 rows × 5 cols) — cols: `School ID`, `School Name`, `Address`, `Designation`, `Note`
    - tab **Notes & Sources** (8 rows × 1 cols) — cols: `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2018 — A.1 Number of School Facilities by Ward_Sector, 2013-2017`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.1%20Number%20of%20School%20Facilities%20by%20Ward_Sector%2C%202013-2017_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.1** (35 rows × 1 cols) — cols: `Appendix A.1 Number of School Facilities by Ward & Sector, 2013-2017`
  - [`MFP 2018 — A.2 Modernization by School, 2002-2008`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.2%20Modernization%20by%20School%2C%202002-2008_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.2** (22 rows × 1 cols) — cols: `Appendix A.2 Modernization by School, 2002-2008`
  - [`MFP 2018 — A.3 Schools Modernized After 2008`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.3%20Schools%20Modernized%20After%202008_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.3** (76 rows × 1 cols) — cols: `Appendix A.3 Schools Modernized After 2008`
  - [`MFP 2018 — A.4 Facility Condition Index, Schools in District-Owned Facilities SY2017-18`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.4%20Facility%20Condition%20Index%2C%20Schools%20in%20District-Owned%20Facilities%20SY2017-18_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.4** (80 rows × 1 cols) — cols: `Appendix A.4 Facility Condition Index, Schools in District-Owned Facilities SY2017-18`
  - [`MFP 2018 — A.5 Facility Condition Index, Schools in Non-District Owned Facilities SY2017-18`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.5%20Facility%20Condition%20Index%2C%20Schools%20in%20Non-District%20Owned%20Facilities%20SY2017-18_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.5** (65 rows × 1 cols) — cols: `Appendix A.5 Facility Condition Index, Schools in Non-District Owned Facilities SY2017-18`
  - [`MFP 2018 — A.7 Schools with One or More Programs, SY2017-18`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.7%20Schools%20with%20One%20or%20More%20Programs%2C%20SY2017-18_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.7** (82 rows × 1 cols) — cols: `Appendix A.7 Schools with One or More Programs, SY2017-18`
  - [`MFP 2018 — A.8 Historic Enrollment Share by Sector Since SY2008-09`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.8%20Historic%20Enrollment%20Share%20by%20Sector%20Since%20SY2008-09_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.8** (17 rows × 1 cols) — cols: `Appendix A.8 Historic Enrollment Share by Sector Since SY2008-09`
  - [`MFP 2018 — A.9 Change in Program Enrollment, SY2014-15 to SY2017-18`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.9%20Change%20in%20Program%20Enrollment%2C%20SY2014-15%20to%20SY2017-18_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **Appendix A.9** (16 rows × 1 cols) — cols: `Appendix A.9 Change in Program Enrollment, SY2014-15 to SY2017-18`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2018 — A.10 Programs Offered With Percent Change, SY2014-15 to SY2017-18`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.10%20Programs%20Offered%20With%20Percent%20Change%2C%20SY2014-15%20to%20SY2017-18_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **Appendix A.10** (15 rows × 1 cols) — cols: `Appendix A.10 Programs Offered with Percent Change, SY2014-15 to SY2017-18`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2018 — A.11 Programs Offered with Absolute Change, SY2014-15 to SY2017-18`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.11%20Programs%20Offered%20with%20Absolute%20Change%2C%20SY2014-15%20to%20SY2017-18_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **Appendix A.11** (15 rows × 1 cols) — cols: `Appendix A.11 Programs Offered with Absolute Change, SY2014-15 to SY2017-18`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2018 — A.12 Programs Offered by Ward, SY2014-15 to SY2017-18`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.12%20Programs%20Offered%20by%20Ward%2C%20SY2014-15%20to%20SY2017-18_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.12** (14 rows × 1 cols) — cols: `Appendix A.12 Programs Offered by Ward, SY2014-15 to SY2017-18`
  - [`MFP 2018 — A.13 Utilization Status SY2017-18`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.13%20Utilization%20Status%20SY2017-18_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.13** (202 rows × 1 cols) — cols: `Appendix A.13 Utilization Status SY2017-18`
  - [`MFP 2018 — A.14 FY2019-FY2024 CIP Investment Costs by Project and Year ($US Million)`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.14%20FY2019-FY2024%20CIP%20Investment%20Costs%20by%20Project%20and%20Year%20%28%24US%20Million%29_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.14** (42 rows × 1 cols) — cols: `Appendix A.14 FY2019-FY2024 CIP Investment Costs by Project and Year ($US Million)`
  - [`MFP 2018 — A.15 PACE Modernization Prioritization Rankings`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.15%20PACE%20Modernization%20Prioritization%20Rankings_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.15** (36 rows × 18 cols) — cols: `PACE Prioritization Rank`, `School ID`, `Facility ID`, `Facility Name`, `Facility Address`, `Sector`, `Cluster`, `Grade Band`, `Ward`, `Date of last major construction through the preceding fiscal year`, `Expenditures for major construction projects for the preceding 10 fiscal years per square feet of the school facility`, `School facility condition score based on the most recent assessment completed by DGS` …
  - [`MFP 2018 — A.16 DCPS SY2017-18 Aud Enroll, SY2022-23 and SY2027-28 Proj Enroll by School`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.16%20DCPS%20SY2017-18%20Aud%20Enroll%2C%20SY2022-23%20and%20SY2027-28%20Proj%20Enroll%20by%20School.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.16** (124 rows × 1 cols) — cols: `Appendix A.16 DCPS SY2017-18 Audited Enrollment, SY2022-23 and SY2027-28 Projected Enrollment by School by In-Boundary and Out-of-Boundary`
  - [`MFP 2018 — A.17 DCPS SY2017-18 Aud Enroll, SY2022-23 and SY2027-28 Proj Enroll_GrowthPln`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.17%20DCPS%20SY2017-18%20Aud%20Enroll%2C%20SY2022-23%20and%20SY2027-28%20Proj%20Enroll_GrowthPln.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.17** (128 rows × 1 cols) — cols: `Appendix A.17 DCPS SY2017-18 Audited Enrollment, SY2022-23 and SY2027-28 Projected Enrollment by School and DCPS Growth Plan`
  - [`MFP 2018 — A.18 Public Charter School Growth Plans by School`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.18%20Public%20Charter%20School%20Growth%20Plans%20by%20School_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.18** (190 rows × 1 cols) — cols: `Appendix A.18 Public Charter School Growth Plans by School`
  - [`MFP 2018 — A.20 DCPS Gap Analysis`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.20%20DCPS%20Gap%20Analysis_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **Appendix A.20** (178 rows × 1 cols) — cols: `Appendix A.20 DCPS Gap Analysis`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2018 — A.21 PCS Gap Analysis`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.21%20PCS%20Gap%20Analysis_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.21** (190 rows × 1 cols) — cols: `Appendix A.21 PCS Gap Analysis`
  - [`MFP 2018 — A.22 PCS Gap Analysis - LEA`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.22%20PCS%20Gap%20Analysis%20-%20LEA_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.22** (81 rows × 1 cols) — cols: `Appendix A.22 PCS Gap Analysis - LEA`
  - [`MFP 2018 — A.25 Gross Square Feet by Facility SY2017-18`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/A.25%20Gross%20Square%20Feet%20by%20Facility%20SY2017-18_0.xlsx) — **xlsx** — 1 tab(s)
    - tab **Appendix A.25** (222 rows × 1 cols) — cols: `Appendix A.25 Gross Square Feet by Facility SY2017-18`
  - [`MFP 2016 Supplement — Appendix A - DCPS SY 2016-17 Enrollment Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20A%20-%20DCPS%20SY2016-17%20Enrollment%20Data_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **DCPS Utilization** (115 rows × 11 cols) — cols: `School ID`, `SY2016-17 School Name`, `SY2016-17 School Address`, `SY2016-17 Audited Enrollment`, `SY2017-18 Enrollment Projections**`, `SY2016-17 Permanent Capacity***`, `SY2016-17 Portable Capacity***`, `SY2016-17 Total Capacity (Permanent + Portable Capacity)`, `SY2016-17 Utilization Rate (Permanent Capacity)`, `SY2016-17 Utilization Rate (Permanent + Portable Capacity)`, `Plan to Address High/Low Utilization`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2016 Supplement — Appendix B - PCS SY 2016-17 Enrollment Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20B%20-%20PCS%20SY2016-17%20Enrollment%20Data_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **SY16-17 PCS facility data** (126 rows × 9 cols) — cols: `LEA ID`, `School ID(s)`, `Campus`, `Facility address`, `Former DCPS building, if applicable`, `SY16-17 Facility program capacity`, `SY16-17 Audited Enrollment`, `SY16-17 Utilization Rate`, `SY17-18 Enrollment Projections`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2016 Supplement — Appendix C - FY17 DCPS Asset Condition Ratings`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20C%20-%20FY17%20DCPS%20Asset%20Condition%20Ratings_0.xlsx) — **xlsx** — 3 tab(s)
    - tab **Sheet1** (136 rows × 27 cols) — cols: `School ID`, `Facility Name`, `Address`, `Modernization Status (per proposed FY18-23 CIP`, `Modernization Year*`, `GSF (building)`, `CRV***`, `A10 Foundations`, `A20 Basement Construction`, `B10 Super Structure`, `B20 Exterior Enclosure`, `B30 Roofing` …
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Sheet2** (1 rows × 0 cols)
  - [`MFP 2016 Supplement — Appendix D - DC PCSB Public Charter Facility Survey Findings 16-17`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20D%20-%20DC%20PCSB%20Public%20Charter%20Facility%20Survey%20Findings%2016-17_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **Sheet1** (43 rows × 1 cols) — cols: `Public charter school facility needs and conditions, 2016-2017`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2016 Supplement — Appendix E - SY 2016-17 Audited Enrollment by LEA and by School`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20E%20-%20SY2016-17%20Audited%20Enrollment%20by%20LEA%20and%20by%20School_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **Enrollment by LEA and by School** (321 rows × 1 cols) — cols: `Appendix E: SY2016-17 DCPS and Public Charter School Audited Enrollment by LEA and by School`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2016 Supplement — Appendix F - DCPS SY 2016-17 Facility Classification`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20F%20-%20DCPS%20SY2016-17%20Facility%20Classification_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **Act Classification 2017** (143 rows × 5 cols) — cols: `School ID`, `School Name`, `Master Address`, `D.C. ACT 20-319 Classification`, `Notes`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`MFP 2015 — Appendix D - SY14-15 Audited Enrollment by LEA and by School`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20D_SY14-15%20Audited%20Enrollment%20by%20LEA%20and%20by%20School.xlsx) — **xlsx** — 1 tab(s)
    - tab **Enrollment by LEA and by School** (315 rows × 1 cols) — cols: `Appendix D: SY2014-15 Audited Enrollment by LEA and by School`
  - [`MFP 2015 — Appendix A - DCPS Facility Data and Utilization Plan(s)`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20A_DCPS%20Facility%20Data%20and%20Utilization%20Plans.xlsx) — **xlsx** — 2 tab(s)
    - tab **Capacity Data** (221 rows × 11 cols) — cols: `LEA ID`, `School_ID`, `School_Name`, `Total # of Std. in SY14-15 Reported Enrollment`, `Capacity SY13-14)`, `Utilization`, `FACILITY NOTES`, `PORTABLE DCPS CAPACITY?`, `PORTABLE CAPCITY INCLUDED? (YES/NO)`, `DGS Updating Capacity?`, `School_ID`
    - tab **DCPS Utilization** (108 rows × 9 cols) — cols: `Program #`, `School Name`, `School Address`, `SY2014-15 Audited Enrollment`, `SY2015-16 Permanent Capacity`, `SY2015-16 Portable Capacity`, `Total Capacity (Permanent + Portable)`, `SY2014-15 Utilization (Includes Portable Capacity)`, `Plan to Address High/Low Utilization`
  - [`MFP 2015 — Appendix B - Public Charter Facility Data, SY14-15`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20B_Public%20Charter%20Facility%20Data%20Sheet%2C%20SY14-15.xlsx) — **xlsx** — 1 tab(s)
    - tab **Capacity Data_School level** (114 rows × 12 cols) — cols: `LEA ID (SY14-15)`, `School ID(s) (SY14-15)`, `School Name(s) (SY14-15)`, `School Address(es) (SY14-15)`, `Former DCPS Facility Name (If applicable, SY14-15)`, `Maximum Occupancy (SY14-15, Reported By PCSB)`, `Total Square Footage (SY14-15, Reported By PCSB)`, `Number of Students Enrolled, (SY14-15 Audited Enrollment from OSSE, reported by PCSB)`, `Square Footage per Student (Total Square Footage / Total Enrollment)`, `LEA Enrollment Ceiling (As of Nov. 2014, Reported By PCSB)`, `Percentage of LEA Enrollment Ceiling Filled (LEA Enrollment / LEA Enrollment Ceiling)`, `FACILITY NOTES`
  - [`MFP 2015 — Appendix C - DCPS Schools Facilities- Condition Assessment Summary (FCS)`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20C_DCPS%20Schools%20-%20Facility%20Condition%20Assessments%20%28FCS%29%20Summary.xlsx) — **xlsx** — 1 tab(s)
    - tab **DCPS Building Condition Dat (2** (124 rows × 19 cols) — cols: `(DCPS ACR II) 2012 ACR A10: Foundations`, `(DCPS ACR II) 2012 ACR A20: Basement Construction`, `(DCPS ACR II) 2012 ACR B20: Exterior Enclosure`, `(DCPS ACR II) 2012 ACR B30: Roofing`, `(DCPS ACR II) 2012 ACR C10: Interior Construction`, `(DCPS ACR II) 2012 ACR C20: Stairs`, `(DCPS ACR II) 2012 ACR C30: Interior Finishes`, `(DCPS ACR II) 2012 ACR D10: Conveying Systems`, `(DCPS ACR II) 2012 ACR D20: Plumbing`, `(DCPS ACR II) 2012 ACR D30: HVAC`, `(DCPS ACR II) 2012 ACR D40: Fire Protection Systems`, `(DCPS ACR II) 2012 ACR D50: Electrical Systems` …
  - [`MFP 2015 — Appendix E - DCPS Facility Designation List`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Appendix%20E_DCPS%20Facility%20Designation%20List.xlsx) — **xlsx** — 1 tab(s)
    - tab **Act Classification 2014** (138 rows × 5 cols) — cols: `Program #`, `School Name`, `School Address`, `D.C. ACT 20-319 Classification`, `Notes`

### [DME — School Facilities Data (annual) & Edsight facility briefs](https://dme.dc.gov/publications)

🗄️ archived/stale · _topics: facilities_

- **Format:** Excel
- **Updated:** Was annual
- **Years on page:** SY2016-17 through SY2021-22
- **Notes:** Per-facility summary (sector, capacity, enrollment, utilization) for every public school building, one file per year, plus SY2016-17 DCPS utilization and in-boundary percentages and appendices to DME's Edsight briefs on closed DCPS facilities and cross-sector collaboration. EdScape's facilities chapter carries the later years. Added 2026-11-01.
- **Data files (profiled):**
  - [`Edsight - Vacant Facilities Appendix (September 2021 Update)`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Citywide%20Landscape%20of%20Formerly%20Closed%20DCPS%20Facilities_Appendix_August%202021_FINAL%20PUBLIC_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **76 Closed DCPS Facilities** (77 rows × 10 cols) — cols: `Facility ID`, `Closed DCPS Facility`, `Educational or Government Entity`, `Educational or Government Entity - Subcategory`, `Address`, `Ward`, `Gross Square Footage`, `Year Facility Closed`, `Public Charter School Own/Lease`, `Entity in Facility as of August 2021`
    - tab **Data Sources and Definitions** (15 rows × 1 cols) — cols: `Agency Definitions`
  - [`SY21-22 School Facilities Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY21-22_Facility%20Summary%20for%20Download_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **SY21-22 School Facilities** (224 rows × 72 cols) — cols: `Map_Legend_No`, `Map_Legend_School_Name`, `Map_Legend_Grade_Span`, `Sector_Colocated`, `School_Code_1`, `LEA_Code_1`, `School_Name_1`, `Grade_Span_1`, `Elementary`, `Middle`, `High`, `Adult/Alt` …
    - tab **Sources** (9 rows × 1 cols) — cols: `Data Sources`
  - [`SY20-21 School Facilities Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY20-21_Facility%20Summary%20for%20Download_0.xlsx) — **xlsx** — 2 tab(s)
    - tab **SY20-21 School Facilities** (221 rows × 63 cols) — cols: `Map_Legend_No`, `Map_Legend_School_Name`, `Map_Legend_Grade_Span`, `Sector_Colocated`, `School_Code_1`, `LEA_Code_1`, `School_Name_1`, `Grade_Span_1`, `Elementary`, `Middle`, `High`, `Adult/Alt` …
    - tab **Sources** (9 rows × 1 cols) — cols: `Data Sources`
  - [`Edsight - Cross Sector Collaboration Appendix I table`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Cross%20Sector%20Collaboration%20Edsight%20Appendix%201.xlsx) — **xlsx** — 2 tab(s)
    - tab **Cross Sector October 2019 ** (62 rows × 3 cols) — cols: `Category`, `Project`, `Description`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Citywide Landscape of Formerly Closed DCPS Facilities_Appendix_August 2019`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Citywide%20Landscape%20of%20Formerly%20Closed%20DCPS%20Facilities_Appendix_August%202019.xlsx) — **xlsx** — 4 tab(s)
    - tab **70 Closed DCPS Facilities** (71 rows × 8 cols) — cols: `Closed DCPS Facility`, `Educational or Government Entity`, `Address`, `Ward`, `Gross Square Footage`, `Year Facility Closed`, `Public Charter School Own/Lease`, `Entity in Facility as of August 2019`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Agency Definitions** (5 rows × 1 cols) — cols: `Agency Definitions`
    - tab **Data Sources** (6 rows × 1 cols) — cols: `Data Sources:`
  - [`SY19-20 School Facilities Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY19-20_Facility%20Summary%20for%20Download_2.xlsx) — **xlsx** — 3 tab(s)
    - tab **SY19-20 School Facilities** (215 rows × 65 cols) — cols: `Map_Legend_No`, `Map_Legend_School_Name`, `Map_Legend_Grade_Span`, `Sector_Colocated`, `School_Code_1`, `LEA_Code_1`, `School_Name_1`, `Grade_Span_1`, `Elementary`, `Middle`, `High`, `Adult/Alt` …
    - tab **Sources** (8 rows × 1 cols) — cols: `Data Sources`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`SY18-19 School Facilities Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY18-19%20School%20Facilities%20Data_3.xlsx) — **xlsx** — 2 tab(s)
    - tab **Unique Facility ID** (218 rows × 63 cols) — cols: `Map_Legend_No`, `Map_Legend_School_Name`, `Map_Legend_Grade_Span`, `Sector_Colocated`, `School_Code_1`, `LEA_Code_1`, `School_Name_1`, `Grade_Span_1`, `Elementary`, `Middle`, `High`, `Adult/Alt` …
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`SY16-17 DCPS Utilization and In-boundary Percentage Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY1617_DCPS%20Utilization%20%26%20In-boundary%20%25%20Data_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **SY1617 DCPS Utilization & IB %** (110 rows × 20 cols) — cols: `School ID`, `SY2016-17 School Name`, `SY2016-17 School Address`, `Ward`, `Grade Band`, `SY2016-17 Audited Enrollment`, `SY2017-18 Enrollment Projections`, `SY2016-17 Permanent Capacity Only`, `SY2016-17 Portable Capacity Only`, `SY2016-17 Total Capacity (Permanent & Portable)`, `SY2016-17 Utilization Rate (Permanent Capacity Only)`, `SY2016-17 Utilization Rate (Permanent & Portable Capacity)` …
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **Data Source(s)** (4 rows × 1 cols) — cols: `Data Source(s)`
    - tab **Variable Definitions** (22 rows × 2 cols) — cols: `Variable`, `Variable Definition`
  - [`SY17-18 School Facilities Data`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY17-18%20School%20Facilities%20Data_1.xlsx) — **xlsx** — 5 tab(s)
    - tab **SY17-18 School Facilities** (219 rows × 68 cols) — cols: `Map_Legend_No`, `Map_Legend_School_Name`, `Map_Legend_Grade_Span`, `Sector_Colocated`, `School_Code_1`, `LEA_Code_1`, `Facility_ID_1`, `MAR_X_1`, `MAR_Y_1`, `School_Name_1`, `Grade_Span_1`, `Elementary` …
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **SY17-18 School Changes** (35 rows × 9 cols) — cols: `Sector`, `School Name`, `Ward`, `SY16-17 Grades`, `SY17-18 Grades`, `SY16-17 Address`, `SY17-18 Address`, `SY17-18 Change`, `SY17-18 Swinging Building`
    - tab **Data Source(s)** (4 rows × 1 cols) — cols: `Data Source(s)`
    - tab **Variable Definitions** (70 rows × 2 cols) — cols: `Variable`, `Variable Definition`

### [DME — Public School Enrollments per DCPS Boundary](https://dme.dc.gov/publication/sy2023-24-public-school-enrollments-dcps-boundary)

_topics: enrollment, boundaries, student-movement_

- **Format:** Excel
- **Updated:** Annual (irregularly posted)
- **Years on page:** SY2016-17, SY2017-18, SY2022-23, SY2023-24 (+ SY2016-17 by neighborhood cluster)
- **Notes:** For students living in each DCPS attendance boundary, where they enroll (in-boundary DCPS, other DCPS, charter). One publication per year on DME's publications list. EdScape's 'Enrollments per DCPS Boundary' dashboard covers SY2019-20 onward. Added 2026-11-01.
- **Data files (profiled):**
  - [`SY23-24 Public School Enrollments per DCPS Boundary`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY2324_Public%20School%20Enrollments%20per%20DCPS%20Boundary.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (22 rows × 1 cols) — cols: `Public School Enrollments per DCPS Boundary, SY2023-24`
    - tab **DCPS Boundary Enrollment** (1,660 rows × 16 cols) — cols: `SY23-24 DCPS Boundary School Code`, `SY23-24 DCPS Boundary`, `SY23-24 DCPS Boundary Grade Band`, `SY23-24 DCPS Boundary School Enrollment`, `SY23-24 Number of Grade-Specific Students Living In-boundary and Attending Boundary School`, `SY23-24 Number of Grade-Specific Students Living In-boundary`, `SY23-24 Percent In-boundary (%)`, `SY23-24 Boundary Participation Rate (%)`, `SY23-24 Number of DCPS Schools Attended by Grade-Specific Students Living in the Boundary`, `SY23-24 Number of PCS Schools Attended by Grade-Specific Students Living in the Boundary`, `SY23-24 Total Number of Public Schools Attended by Students Living in the Boundary`, `SY23-24 Schools Attended by Grade-Specific Students Living in the Boundary` …
    - tab **Variable Definitions** (17 rows × 2 cols) — cols: `Variable`, `Variable Definition`
    - tab **School Grade Bands** (116 rows × 3 cols) — cols: `Grade Span`, `School Name`, `Notes`
    - tab **Notes & Sources** (21 rows × 1 cols) — cols: `Notes on Boundaries/Schools`
  - [`SY22-23 Public School Enrollments per DCPS Boundary`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY2223_Public%20School%20Enrollments%20per%20DCPS%20Boundary.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (22 rows × 1 cols) — cols: `Public School Enrollments per DCPS Boundary, SY2022-23`
    - tab **DCPS Boundary Enrollment** (1,607 rows × 17 cols) — cols: `School Year`, `DCPS Boundary School Code`, `DCPS Boundary`, `DCPS Boundary Grade Band`, `DCPS Boundary School Enrollment`, `Number of Grade-Specific Students Living In-boundary and Attending Boundary School`, `Number of Grade-Specific Students Living In-boundary`, `Percent In-boundary (%)`, `Boundary Participation Rate (%)`, `Number of DCPS Schools Attended by Grade-Specific Students Living in the Boundary`, `Number of PCS Schools Attended by Grade-Specific Students Living in the Boundary`, `Total Number of Public Schools Attended by Students Living in the Boundary` …
    - tab **Variable Definitions** (17 rows × 2 cols) — cols: `Variable`, `Variable Definition`
    - tab **School Grade Bands** (116 rows × 3 cols) — cols: `Grade Span`, `School Name`, `Notes`
    - tab **Notes & Sources** (22 rows × 1 cols) — cols: `Notes on Boundaries/Schools`
  - [`SY1718_Public School Enrollments per DCPS Boundary`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY1718_Public%20School%20Enrollments%20per%20DCPS%20Boundary.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (21 rows × 1 cols) — cols: `Public School Enrollments per DCPS Boundary, SY2017-18`
    - tab **DCPS Boundary Enrollment** (1,636 rows × 16 cols) — cols: `SY17-18 DCPS Boundary School Code`, `SY17-18 DCPS Boundary`, `SY17-18 DCPS Boundary Grade Band`, `SY17-18 DCPS Boundary School Enrollment`, `SY17-18 Number of Grade-Specific Students Living In-boundary and Attending Boundary School`, `SY17-18 Number of Grade-Specific Students Living In-boundary`, `SY17-18 Percent In-boundary (%)`, `SY17-18 Boundary Participation Rate (%)`, `SY17-18 Number of DCPS Schools Attended by Grade-Specific Students Living in the Boundary`, `SY17-18 Number of PCS Schools Attended by Grade-Specific Students Living in the Boundary`, `SY17-18 Total Number of Public Schools Attended by Students Living in the Boundary`, `SY17-18 Schools Attended by Grade-Specific Students Living in the Boundary` …
    - tab **Variable Definitions** (17 rows × 2 cols) — cols: `Variable`, `Variable Definition`
    - tab **Notes & Sources** (14 rows × 1 cols) — cols: `Notes on Boundaries/Schools`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`SY2016-17 Public School Enrollments per DCPS Boundary`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY2016-17%20Public%20School%20Enrollments%20per%20DCPS%20Boundary_3.xlsx) — **xlsx** — 5 tab(s)
    - tab **Introduction** (21 rows × 1 cols) — cols: `Public School Enrollments per DCPS Boundary, SY2016-17`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
    - tab **DCPS Boundary Enrollment** (1,595 rows × 16 cols) — cols: `SY16-17 DCPS Boundary School Code`, `SY16-17 DCPS Boundary`, `SY16-17 DCPS Boundary Grade Band`, `SY16-17 DCPS Boundary School Enrollment`, `SY16-17 Number of Grade-Specific Students Living In-boundary and Attending Boundary School`, `SY16-17 Number of Grade-Specific Students Living In-boundary`, `SY16-17 Percent In-boundary (%)`, `SY16-17 Boundary Participation Rate (%)`, `SY16-17 Number of DCPS Schools Attended by Grade-Specific Students Living in the Boundary`, `SY16-17 Number of PCS Schools Attended by Grade-Specific Students Living in the Boundary`, `SY16-17 Total Number of Public Schools Attended by Students Living in the Boundary`, `SY16-17 Schools Attended by Grade-Specific Students Living in the Boundary` …
    - tab **Variable Definitions** (17 rows × 2 cols) — cols: `Variable`, `Variable Definition`
    - tab **Notes & Sources** (15 rows × 1 cols) — cols: `Notes on Boundaries/Schools`
  - [`SY2016-17 Public School Enrollments by Neighborhood Cluster`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY2016-17%20Public%20School%20Enrollment%20by%20Neighborhood.xlsx) — **xlsx** — 4 tab(s)
    - tab **Introduction** (8 rows × 1 cols) — cols: `Public School Enrollments per Neighborhood Cluster, SY2016-17`
    - tab **Neighborhood Clusters** (6,608 rows × 7 cols) — cols: `Neighborhood Cluster ID of Student Residence`, `Neighborhood Cluster`, `Student Grade Band`, `SY16-17 School code`, `SY16-17 School Name`, `SY16-17 School Grade Configuration`, `SY16-17 Number of Grade-Specific Students Living in Neighborhood Cluster and Attending School`
    - tab **Variable Definitions** (19 rows × 2 cols) — cols: `Variable`, `Variable Definition`
    - tab **Notes and Sources** (15 rows × 1 cols) — cols: `Notes:`

### [DME — Public Education Supply and Demand fact sheets (2014-17)](https://dme.dc.gov/publications)

🗄️ archived/stale · _topics: enrollment, facilities, lottery_

- **Format:** Excel appendices
- **Updated:** Was annual
- **Years on page:** SY2014-15, SY2015-16, SY2016-17
- **Notes:** Citywide, elementary, middle and high school fact-sheet appendices from DME's 'Public Education Supply and Demand for the District of Columbia' series (and the Cross-Sector Collaboration Task Force's SY2014-15 versions): seats, enrollment, waitlists and quality by neighborhood. Added 2026-11-01.
- **Data files (profiled):**
  - [`Supply & Demand — SY16-17_High School Fact Sheets Appendices_10.06.17`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY16-17_High%20School%20Fact%20Sheets%20Appendices_10.06.17_2.xlsx) — **xlsx** — 7 tab(s)
    - tab **Appendix 1** (53 rows × 1 cols) — cols: `Appendix 1: Schools Serving 9th-12th Grades in SY2016-17`
    - tab **Appendix 2** (40 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving 9th-12th Grades in SY2016-17`
    - tab **Appendix 3** (24 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2011-2015`
    - tab **Appendix 4 ** (34 rows × 1 cols) — cols: `Appendix 4: PCS Building Enrollment and Program Capacity Serving 9th-12th Grades in SY2016-17`
    - tab **Appendix 5** (27 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving 9th-12th Grades in SY2016-17`
    - tab **Appendix 6** (30 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving 9th-12th Grades in SY2016-17`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Supply & Demand — Elementary School Fact Sheet - SY2016-17 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY16-17_Elementary%20School%20Fact%20Sheets%20Appendices_10.06.17_1.xlsx) — **xlsx** — 7 tab(s)
    - tab **Appendix 1** (174 rows × 1 cols) — cols: `Appendix 1: Schools Serving PK3-5th Grades in SY2016-17`
    - tab **Appendix 2** (61 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving PK3-5th Grades in SY2016-17`
    - tab **Appendix 3** (24 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2011-2015`
    - tab **Appendix 4 ** (86 rows × 1 cols) — cols: `Appendix 4: PCS Building Enrollment and Program Capacity Serving PK3-5th Grades in SY2016-17`
    - tab **Appendix 5** (91 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving PK3-5th Grades in SY2016-17`
    - tab **Appendix 6** (92 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving PK3-5th Grades in SY2016-17`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Supply & Demand — Middle School Fact Sheet - SY2016-17 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY16-17_Middle%20School%20Fact%20Sheets%20Appendices_10.06.17.xlsx) — **xlsx** — 7 tab(s)
    - tab **Appendix 1** (88 rows × 1 cols) — cols: `Appendix 1: Schools Serving 6th-8th Grades in SY2016-17`
    - tab **Appendix 2** (33 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving 6th-8th Grades in SY2016-17`
    - tab **Appendix 3** (24 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2011-2015`
    - tab **Appendix 4 ** (59 rows × 1 cols) — cols: `Appendix 4: PCS Building Enrollment and Program Capacity Serving 6th-8th Grades in SY2016-17`
    - tab **Appendix 5** (37 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving 6th-8th Grades in SY2016-17`
    - tab **Appendix 6** (40 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving 6th-8th Grades in SY2016-17`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Supply & Demand — Citywide Fact Sheet - SY2016-17 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY16-17_Citywide%20School%20Fact%20Sheets%20Appendices_10.06.17_2.xlsx) — **xlsx** — 5 tab(s)
    - tab **Appendix 1** (241 rows × 1 cols) — cols: `Appendix 1: Schools Serving Students in SY2016-17`
    - tab **Appendix 2 ** (23 rows × 1 cols) — cols: `Appendix 2: Share of District of Columbia Students Enrolled in Private School, 2011-2015`
    - tab **Appendix 3 ** (125 rows × 1 cols) — cols: `Appendix 3: PCS Building Enrollment and Program Capacity Serving Students in SY2016-17`
    - tab **Appendix 4** (126 rows × 1 cols) — cols: `Appendix 4: Capacity and Utilization of DCPS School Buildings Serving Students in SY2016-17`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Supply & Demand — Elementary School Fact Sheet - SY2015-16 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY15-16_Elementary%20School%20Fact%20Sheets%20Appendices_10.21.16_0.xlsx) — **xlsx** — 7 tab(s)
    - tab **Appendix 1** (173 rows × 1 cols) — cols: `Appendix 1: Schools Serving PK3-5th Grades in SY2015-16`
    - tab **Appendix 2** (47 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving PK3-5th Grades in SY2015-16`
    - tab **Appendix 3** (24 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2010-2014`
    - tab **Appendix 4 ** (86 rows × 1 cols) — cols: `Appendix 4: PCS Building Enrollment and Program Capacity Serving PK3-5th Grades in SY2015-16`
    - tab **Appendix 5** (87 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving PK3-5th Grades in SY2015-16`
    - tab **Appendix 6** (90 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving PK3-5th Grades in SY2015-16`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Supply & Demand — Citywide Fact Sheet - SY2015-16 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY15-16_Citywide%20School%20Fact%20Sheets%20Appendices_10.14.16_0.xlsx) — **xlsx** — 5 tab(s)
    - tab **Appendix 1** (237 rows × 1 cols) — cols: `Appendix 1: Schools Serving Students in SY2015-16`
    - tab **Appendix 2 ** (24 rows × 1 cols) — cols: `Appendix 2: Share of District of Columbia Students Enrolled in Private School, 2010-2014`
    - tab **Appendix 3 ** (123 rows × 1 cols) — cols: `Appendix 3: PCS Building Enrollment and Program Capacity Serving Students in SY2015-16`
    - tab **Appendix 4** (124 rows × 1 cols) — cols: `Appendix 4: Capacity and Utilization of DCPS School Buildings Serving Students in SY2015-16`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Supply & Demand — Middle School Fact Sheet - SY2015-16 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY15-16_Middle%20School%20Fact%20Sheets%20Appendices_10.21.16_1.xlsx) — **xlsx** — 7 tab(s)
    - tab **Appendix 1** (86 rows × 1 cols) — cols: `Appendix 1: Schools Serving 6th-8th Grades in SY2015-16`
    - tab **Appendix 2** (25 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving 6th-8th Grades in SY2015-16`
    - tab **Appendix 3** (24 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2010-2014`
    - tab **Appendix 4 ** (57 rows × 1 cols) — cols: `Appendix 4: PCS Building Enrollment and Program Capacity Serving 6th-8th Grades in SY2015-16`
    - tab **Appendix 5** (36 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving 6th-8th Grades in SY2015-16`
    - tab **Appendix 6** (39 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving 6th-8th Grades in SY2015-16`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Supply & Demand — High School Fact Sheet - SY2015-16 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/SY15-16_High%20School%20Fact%20Sheets%20Appendices_10.21.16_0.xlsx) — **xlsx** — 7 tab(s)
    - tab **Appendix 1** (49 rows × 1 cols) — cols: `Appendix 1: Schools Serving 9th-12th Grades in SY2015-16`
    - tab **Appendix 2** (28 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving 9th-12th Grades in SY2015-16`
    - tab **Appendix 3** (24 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2010-2014`
    - tab **Appendix 4 ** (30 rows × 1 cols) — cols: `Appendix 4: PCS Building Enrollment and Program Capacity Serving 9th-12th Grades in SY2015-16`
    - tab **Appendix 5** (26 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving 9th-12th Grades in SY2015-16`
    - tab **Appendix 6** (29 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving 9th-12th Grades in SY2015-16`
    - tab **ESRI_MAPINFO_SHEET** (1 rows × 0 cols)
  - [`Cross-Sector Task Force — Elementary School Fact Sheet SY14-15 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Elementary%20School%20Fact%20Sheets%20SY14-15%20Appendices_02%2018%2016.xlsx) — **xlsx** — 6 tab(s)
    - tab **Appendix 1** (170 rows × 1 cols) — cols: `Appendix 1: Schools Serving PK3-5th Grades in SY2014-15`
    - tab **Appendix 2** (46 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving PK3-5th Grades in SY2014-15`
    - tab **Appendix 3** (24 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2009-2013`
    - tab **Appendix 4 ** (86 rows × 1 cols) — cols: `Appendix 4: PCS Building Enrollment and Program Capacity Serving PK3-5th Grades`
    - tab **Appendix 5** (86 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving PK3-5th Grades`
    - tab **Appendix 6** (90 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving PK3-5th Grades`
  - [`Cross-Sector Task Force — High School Fact Sheet SY14-15 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/High%20School%20Fact%20Sheets%20SY14-15%20Appendices_02%2018%2016.xlsx) — **xlsx** — 6 tab(s)
    - tab **Appendix 1** (48 rows × 1 cols) — cols: `Appendix 1: Schools Serving 9th-12th Grades in SY2014-15`
    - tab **Appendix 2** (27 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving 9th-12th Grades in SY2014-15`
    - tab **Appendix 3** (14 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2009-2013`
    - tab **Appendix 4** (635 rows × 1 cols) — cols: `Appendix 4: PCS Program Capacity and Number of Seats Serving 9th-12th Grades in SY2014-15`
    - tab **Appendix 5** (27 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving 9th-12th Grades`
    - tab **Appendix 6 ** (41 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving 9th-12th Grades`
  - [`Cross-Sector Task Force — Middle School Fact Sheet SY14-15 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Middle%20School%20Fact%20Sheets%20SY14-15%20Appendices_02%2018%2016.xlsx) — **xlsx** — 6 tab(s)
    - tab **Appendix 1** (82 rows × 1 cols) — cols: `Appendix 1: Schools Serving 6th-8th Grades in SY2014-15`
    - tab **Appendix 2** (26 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving 6th-8th Grades in SY2014-15`
    - tab ** Appendix 3** (14 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2009-2013`
    - tab **Appendix 4** (55 rows × 1 cols) — cols: `Appendix 4: PCS Building Enrollment and Program Capacity Serving 6th-8th Grades in SY2014-15`
    - tab **Appendix 5** (38 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving 6th-8th Grades`
    - tab **Appendix 6** (48 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving 6th-8th Grades`
  - [`Supply & Demand — High School Fact Sheet - SY2014-15 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/High%20School%20Fact%20Sheets%20SY14-15%20Appendices_02.18.16.xlsx) — **xlsx** — 6 tab(s)
    - tab **Appendix 1** (48 rows × 1 cols) — cols: `Appendix 1: Schools Serving 9th-12th Grades in SY2014-15`
    - tab **Appendix 2** (27 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving 9th-12th Grades in SY2014-15`
    - tab **Appendix 3** (14 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2009-2013`
    - tab **Appendix 4** (635 rows × 1 cols) — cols: `Appendix 4: PCS Program Capacity and Number of Seats Serving 9th-12th Grades in SY2014-15`
    - tab **Appendix 5** (27 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving 9th-12th Grades`
    - tab **Appendix 6 ** (41 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving 9th-12th Grades`
  - [`Supply & Demand — Elementary School Fact Sheet - SY2014-15 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Elementary%20School%20Fact%20Sheets%20SY14-15%20Appendices_02.18.16.xlsx) — **xlsx** — 6 tab(s)
    - tab **Appendix 1** (170 rows × 1 cols) — cols: `Appendix 1: Schools Serving PK3-5th Grades in SY2014-15`
    - tab **Appendix 2** (46 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving PK3-5th Grades in SY2014-15`
    - tab **Appendix 3** (24 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2009-2013`
    - tab **Appendix 4 ** (86 rows × 1 cols) — cols: `Appendix 4: PCS Building Enrollment and Program Capacity Serving PK3-5th Grades`
    - tab **Appendix 5** (86 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving PK3-5th Grades`
    - tab **Appendix 6** (90 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving PK3-5th Grades`
  - [`Supply & Demand — Middle School Fact Sheet - SY2014-15 - Appendices`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Middle%20School%20Fact%20Sheets%20SY14-15%20Appendices_02.18.16.xlsx) — **xlsx** — 6 tab(s)
    - tab **Appendix 1** (82 rows × 1 cols) — cols: `Appendix 1: Schools Serving 6th-8th Grades in SY2014-15`
    - tab **Appendix 2** (26 rows × 1 cols) — cols: `Appendix 2: Academic Programs at Schools Serving 6th-8th Grades in SY2014-15`
    - tab ** Appendix 3** (14 rows × 1 cols) — cols: `Appendix 3: Share of District of Columbia Students Enrolled in Private School, 2009-2013`
    - tab **Appendix 4** (55 rows × 1 cols) — cols: `Appendix 4: PCS Building Enrollment and Program Capacity Serving 6th-8th Grades in SY2014-15`
    - tab **Appendix 5** (38 rows × 1 cols) — cols: `Appendix 5: DCPS Building Enrollment and Program Capacity Serving 6th-8th Grades`
    - tab **Appendix 6** (48 rows × 1 cols) — cols: `Appendix 6: Capacity and Utilization of DCPS School Buildings Serving 6th-8th Grades`

### [DME — 2014 Advisory Committee on Student Assignment (boundary review) data](https://dme.dc.gov/publications)

🗄️ archived/stale · _topics: boundaries, enrollment, student-movement_

- **Format:** Excel
- **Updated:** One-time (2013-14 study)
- **Years on page:** SY2012-13 to SY2015-16
- **Notes:** Data sheets behind the 2014 DCPS boundary and feeder-pattern overhaul: schools of right, out-of-boundary shares, at-risk shares, feeder patterns, walk distances, current vs proposed boundaries, and the final SY2015-16 geographic feeder pathways. Added 2026-11-01.
- **Data files (profiled):**
  - [`2014 Boundary Review — Current vs Proposed ES Boundaries`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Current%20vs%20%20Proposed%20Elementary%20School%20Boundaries_2014%20and%202020_Public%205%2019%2014_AC%20MEETING.xlsx) — **xlsx** — 2 tab(s)
    - tab **Data sheet** (20 rows × 2 cols) — cols: `Variable name`, `Definition`
    - tab **ES Bound._Current vs. Proposed** (135 rows × 3 cols) — cols: `SCHOOL LEVEL INFORMATION`, `BOUNDARY LEVEL INFORMATION`, `NEIGHBORHOOD CLUSTER LEVEL INFORMATION`
  - [`2014 Boundary Review — School, Boundary, Neighborhood-Level Data Sheet Including Boundary Change Rationales`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/School%2C%20Boundary%2C%20Neighborhood-Level%20Data%20Sheet%20Including%20Boundary%20Change%20Rationales.xlsx) — **xlsx** — 4 tab(s)
    - tab **Elementary Schools** (128 rows × 4 cols) — cols: `SCHOOL LEVEL INFORMATION`, `ATTENDANCE ZONE LEVEL INFORMATION`, `NEIGHBORHOOD CLUSTER LEVEL INFORMATION`, `RATIONALES FOR ATTENDANCE ZONE CHANGES`
    - tab **Education Campuses** (65 rows × 4 cols) — cols: `SCHOOL LEVEL INFORMATION`, `ATTENDANCE ZONE LEVEL INFORMATION`, `NEIGHBORHOOD CLUSTER LEVEL INFORMATION`, `RATIONALES FOR ATTENDANCE ZONE CHANGES`
    - tab **Middle Schools** (75 rows × 4 cols) — cols: `SCHOOL LEVEL INFORMATION`, `ATTENDANCE ZONE LEVEL INFORMATION`, `NEIGHBORHOOD CLUSTER INFORMATION`, `RATIONALES FOR ATTENDANCE ZONE CHANGES`
    - tab **High Schools** (70 rows × 4 cols) — cols: `SCHOOL LEVEL INFORMATION`, `ATTENDANCE ZONE LEVEL INFORMATION`, `NEIGHBORHOOD CLUSTER INFORMATION`, `RATIONALES FOR ATTENDANCE ZONE CHANGES`
  - [`2014 Boundary Review — At Risk Priority Analysis`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/At%20Risk%20Priority%20Analysis.xlsx) — **xlsx** — 1 tab(s)
    - tab **At Risk Data** (39 rows × 1 cols) — cols: `Potential Impact of At Risk Priority Policy on Schools with 25% or Fewer At Risk Students, SY2013-14`
  - [`2014 Boundary Review — Basic Statistics About DCPS Schools, SY2013-14`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Basic%20Statistics%20about%20DCPS%20Schools%20SY2013-14.xlsx) — **xlsx** — 1 tab(s)
    - tab **School Level Data Sheet Summary** (123 rows × 16 cols) — cols: `School Ward SY2013-14`, `School Code`, `School Name SY2013-14`, `Grade Span SY2013-14`, `Audited Enrollment SY2013-14`, `% of in-boundary students in SY2013-14`, `DCPS Building Capacity SY2013-14`, `Building Utilization SY2013-14`, `DC CAS Percent Proficient or Advanced SY2012-13`, `ESEA School Index Score (0-100) SY2012-13`, `% African American, Non-Hispanic, SY2013-14`, `% White, Non-Hispanic SY2013-14` …
  - [`2014 Boundary Review — DCPS Feeder Pattern Analysis`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/DCPS%20Feeder%20Pattern%20Analysis%20SY2012%20to%20SY2013_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **Handout 1_EStoMS_Feeder** (354 rows × 1 cols) — cols: `Where Do 4th and 5th Graders Go to School the Following Year? Feeder Pattern Analysis of DCPS Elementary and ES/MS Education Campuses`
    - tab **Handout 2_MS to ES** (104 rows × 1 cols) — cols: `Where Did 6th Graders Go to School in 5th Grade? Feeder Pattern Analysis of DCPS Middle or MS/HS Education Campuses`
    - tab **Handout 3_HS to MS** (135 rows × 1 cols) — cols: `Where Did 9th Graders Go to School the Previous Year? Feeder Pattern Analysis of DCPS High Schools`
    - tab **Sheet1** (1 rows × 0 cols)
  - [`2014 Boundary Review — Schools of Right for Students_SY2013-14`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Schools%20of%20Right%20for%20Students_SY2013-14_0.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data dictionary** (2 rows × 1 cols) — cols: `The School(s) of Right for Students_SY2013-14 spreadsheet shows the current DCPS school(s) of right by boundary (not by feeder pattern) for public school students. There are three tabs focusing on 1) elementary and education campus students in grades PK3-5th, 2) middle school students in grades 6-8, and 3) high school students in grades 9-12 in SY2013-14. Each tab shows the number of students having a particular set of DCPS school(s) of right based on their residence. For instance, approximately 35,800 elementary-grade students have a right to just one elementary or education campus school based on where they live. However, another 10,000 public school PK3-5th grade students have rights to two or three elementary or education campus schools based on where they live. Some students have multiple rights because of the previous DCPS closures and consolidations. For instance, 404 public school students grades PK3-5 have a right to attend either HD Cooke ES, Garrison ES, or Tubman ES. Another 934 public school students grades PK3-5 have a right to attend either Wheatley Education Campus or Browne Education Campus. See the Current ES and EC Rights map to see where these elementary and education campus right combinations are located in the city.`
    - tab **School(s) of right for ES** (102 rows × 4 cols) — cols: `ELEMENTARY AND EDUCATION CAMPUS SCHOOL OF RIGHT 1`, `ELEMENTARY AND EDUCATION CAMPUS SCHOOL OF RIGHT 2`, `ELEMENTARY AND EDUCATION CAMPUS SCHOOL OF RIGHT 3`, `Number of PK3-5 Grade Public School Students with ES/EC School(s) of Right (SY2013-14)`
    - tab **School(s) of right for MS** (47 rows × 4 cols) — cols: `MIDDLE SCHOOL OF RIGHT 1`, `MIDDLE SCHOOL OF RIGHT 2`, `MIDDLE SCHOOL OF RIGHT 3`, `NUMBER OF 6-8 GRADE PUBLIC SCHOOL STUDENTS`
    - tab **School(s) of right for HS** (11 rows × 4 cols) — cols: `HIGH SCHOOL OF RIGHT 1`, `HIGH SCHOOL OF RIGHT 2`, `HIGH SCHOOL OF RIGHT 3`, `NUMBER OF 9-12 GRADE PUBLIC SCHOOL STUDENTS`
  - [`2014 Boundary Review — Early Childhood Analysis`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Title%201%20Early%20Childhood%20Analysis_1.xlsx) — **xlsx** — 2 tab(s)
    - tab **Data Description Sheet** (15 rows × 1 cols) — cols: `Early Childhood Data Sheet for Title I DCPS Elementary Schools The early childhood data sheet provides information about Title I DCPS elementary schools, the number of PK3 and PK4 students living in the new boundaries, and the number of in-boundary families on the My School DC common lottery waitlist. The data sheet also provides the estimated number of PK3 and PK4 students who may have attended by right if the early childhood access for Title 1 schools had been implemented in SY2013-14. For example, if you look at Aiton elementary school, columns B thru E provides characteristics of Aiton such as the kindergarten boundary participation rate (23%) and the grades served (PK3-5th). Column F describes the number of PK3 public school students that live in the new Aiton boundary based on students from SY2013-14 (57 PK3 public school students). Column G shows the estimated number of PK3 students that may have enrolled in Aiton by right in SY2013-14 if the Title 1 early childhood access by right had been implemented. This is based on the number of PK3 students who live in the new boundary mutiplied by the current kindergarten participation rate (SY2013-14). Column H shows the number of in-boundary PK3 students on the waitlist who ranked Aiton as either their first or second choice on the My School common lottery application for SY2014-15 (0 students). The same type of information is provided for PK4 students in columns I-K.`
    - tab **Title 1 Early Childhood Analy** (1,048,576 rows × 3 cols) — cols: `Current Boundary Information`, `PK3 Data`, `PK4 Data`
  - [`2014 Boundary Review — Percent OOB students`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Percent%20OOB%20students.xlsx) — **xlsx** — 2 tab(s)
    - tab **DCPS OOB %** (98 rows × 1 cols) — cols: `% of Out-of-Boundary (OOB) Students Enrolled at DCPS Schools Using Current Boundaries, as of SY2013-14`
    - tab **Sheet2** (1 rows × 0 cols)
  - [`2014 Boundary Review — Percent at risk students`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Percent%20at%20risk%20students.xlsx) — **xlsx** — 1 tab(s)
    - tab **AT Risk % All Schools** (205 rows × 1 cols) — cols: `% of At-Risk Students Enrolled at Public Schools, as of SY2013-14`
  - [`2014 Boundary Review — Change Walk Distance Current Final Boundaries`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Change%20Walk%20Distance%20Current%20Final%20Boundaries%20.xlsx) — **xlsx** — 2 tab(s)
    - tab **Walkable Distance by Ward** (23 rows × 1 cols) — cols: `Travel Distance from Students' Home to Current ES Boundary*`
    - tab **Sheet3** (1 rows × 0 cols)
  - [`2014 Boundary Review — Walkability Analysis for Proximity Priority and Guardian Subsidy`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Walkability%20Analysis%20for%20Proximity%20Priority%20and%20Guardian%20Subsidy.xlsx) — **xlsx** — 2 tab(s)
    - tab **Proximity Priority** (85 rows × 2 cols) — cols: `Proximity Priority Analysis`, `Total Number of Elementary Public School Students in SY2013-14`
    - tab **Guardian Policy** (4 rows × 2 cols) — cols: `Guardian Policy Analysis`, `Total Number of Elementary Public School Students in SY2013-14`
  - [`2014 Boundary Review — Final SY2015-16 Geographic Feeder Pathways`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Final%20SY2015-16%20Geographic%20Feeder%20Pathways.xlsx) — **xlsx** — 1 tab(s)
    - tab **Geographic feeders** (81 rows × 1 cols) — cols: `New Geographic Feeder Pathways`
  - [`2014 Boundary Review — Draft Recommendations School Data Sheet_June 2014`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Copy%20of%20Draft%20Recommendations%20School%20Data%20Sheet_June%202014.xlsx) — **xlsx** — 4 tab(s)
    - tab **Elementary Schools** (131 rows × 4 cols) — cols: `SCHOOL LEVEL INFORMATION`, `BOUNDARY LEVEL INFORMATION`, `NEIGHBORHOOD CLUSTER LEVEL INFORMATION`, `RATIONALES`
    - tab **Education Campuses** (65 rows × 4 cols) — cols: `SCHOOL LEVEL INFORMATION`, `BOUNDARY LEVEL INFORMATION`, `NEIGHBORHOOD CLUSTER LEVEL INFORMATION`, `RATIONALES`
    - tab **Middle Schools** (75 rows × 4 cols) — cols: `SCHOOL LEVEL INFORMATION`, `BOUNDARY LEVEL INFORMATION`, `NEIGHBORHOOD CLUSTER INFORMATION`, `RATIONALES`
    - tab **High Schools** (70 rows × 4 cols) — cols: `SCHOOL LEVEL INFORMATION`, `BOUNDARY LEVEL INFORMATION`, `NEIGHBORHOOD CLUSTER INFORMATION`, `RATIONALES`
  - [`2014 Boundary Review — School Boundary and Neighborhood Cluster Statistics File`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/School%2C%20Boundary%20and%20Neighborhood%20Cluster%20Statistics%20File_5.22.14.xlsx) — **xlsx** — 2 tab(s)
    - tab **Data sheet** (19 rows × 1 cols) — cols: `School, Boundary and Neighborhood Cluster Statistics File The School, Boundary and Neighborhood Cluster Statistics file provides information about the characteristics of the DCPS elementary schools of right, information about students living in the current school of right boundaries, and future population projections. For example, if you look at Aiton Elementary School in the other data tab, the first couple of columns [columns B thru J] provides characteristics of the school such as its enrollment, capacity, the percent of in-boundary students, and the percent of at risk students ENROLLED at the school (the denominator in these cases is the total number of students enrolled at the school). Data in columns K-P describes boundary-level information, such as the percent of students living in the boundary and attending their assigned school, as well as the percent of students whom are identified as at risk and attending their assigned school (the denominator in these cases is all grade-appropriate public school students LIVING in the boundary). In an effort to allow the public to compare the number of students subtracted and added to the proposed boundaries released to the public in April, the file also provides the number of public school students that live in the current elementary school boundaries versus the number in the proposed boundaries. Please note, the proposed boundaries released in April are not final. Another version of the proposed boundaries will be released to the public in June, and will be revised based on community feedback and additional analysis . The last couple of columns in the data file [Q thru R] provides neighborhood cluster information on the future growth or decline in child population projected for the neighborhood cluster where the school is located. See the data definition tab included in the spreadsheet for a more complete description of the data.`
    - tab **ES Bound._Current and Proposed** (163 rows × 3 cols) — cols: `SCHOOL LEVEL INFORMATION`, `BOUNDARY LEVEL INFORMATION`, `NEIGHBORHOOD CLUSTER LEVEL INFORMATION`
  - [`2014 Boundary Review — Schools of Right for Students_SY2013-14 (second posting, file Schools of Right for Students_SY2013-14.xlsx)`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Schools%20of%20Right%20for%20Students_SY2013-14.xlsx) — **xlsx** — 4 tab(s)
    - tab **Data dictionary** (2 rows × 1 cols) — cols: `The School(s) of Right for Students_SY2013-14 spreadsheet shows the current DCPS school(s) of right by boundary (not by feeder pattern) for public school students. There are three tabs focusing on 1) elementary and education campus students in grades PK3-5th, 2) middle school students in grades 6-8, and 3) high school students in grades 9-12 in SY2013-14. Each tab shows the number of students having a particular set of DCPS school(s) of right based on their residence. For instance, approximately 35,800 elementary-grade students have a right to just one elementary or education campus school based on where they live. However, another 10,000 public school PK3-5th grade students have rights to two or three elementary or education campus schools based on where they live. Some students have multiple rights because of the previous DCPS closures and consolidations. For instance, 404 public school students grades PK3-5 have a right to attend either HD Cooke ES, Garrison ES, or Tubman ES. Another 934 public school students grades PK3-5 have a right to attend either Wheatley Education Campus or Browne Education Campus. See the Current ES and EC Rights map to see where these elementary and education campus right combinations are located in the city.`
    - tab **School(s) of right for ES** (102 rows × 4 cols) — cols: `ELEMENTARY AND EDUCATION CAMPUS SCHOOL OF RIGHT 1`, `ELEMENTARY AND EDUCATION CAMPUS SCHOOL OF RIGHT 2`, `ELEMENTARY AND EDUCATION CAMPUS SCHOOL OF RIGHT 3`, `Number of PK3-5 Grade Public School Students with ES/EC School(s) of Right (SY2013-14)`
    - tab **School(s) of right for MS** (47 rows × 4 cols) — cols: `MIDDLE SCHOOL OF RIGHT 1`, `MIDDLE SCHOOL OF RIGHT 2`, `MIDDLE SCHOOL OF RIGHT 3`, `NUMBER OF 6-8 GRADE PUBLIC SCHOOL STUDENTS`
    - tab **School(s) of right for HS** (11 rows × 4 cols) — cols: `HIGH SCHOOL OF RIGHT 1`, `HIGH SCHOOL OF RIGHT 2`, `HIGH SCHOOL OF RIGHT 3`, `NUMBER OF 9-12 GRADE PUBLIC SCHOOL STUDENTS`
  - [`2014 Boundary Review — Policy Brief 3 - Appendix B - Boundary Participation Table`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Copy%20of%20Appendix%20B-%20Boundary%20Participation%20Data%20Tables_DRAFT_Policy%20Brief%203.xlsx) — **xlsx** — 3 tab(s)
    - tab **Boundary Participation Data Tab** (2,766 rows × 31 cols) — cols: `Boundary_ID`, `DCPS Boundary`, `# Public School Students Living In-Boundary`, `# DCPS Schools Attended`, `# PCS Schools Attended`, `Total Schools Attended`, `Schools Attended by 5 or more In-Boundary Students 2012-13`, `# Students Attending`, `Grade Span`, `2012-13 Enrollment`, `In Boundary Participation Rate`, `School % In Boundary` …
    - tab **Summary** (149 rows × 7 cols) — cols: `DCPS Boundary`, `# Living In-Boundary`, `Total Schools Attended`, `# Students Attending`, `Grade Span`, `2012-13 Enrollment`, `In Boundary Participation Rate`
    - tab **Data Definitions and Sources** (26 rows × 2 cols) — cols: `Column Heading`, `Definition`
  - [`2014 Boundary Review — DCPS Feeder Pattern Analysis_3Handouts_4.2.14`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/DCPS%20Feeder%20Pattern%20Analysis_3Handouts_4.2.14.xlsx) — **xlsx** — 4 tab(s)
    - tab **Handout 1_EStoMS_Feeder** (354 rows × 1 cols) — cols: `Where Do 4th and 5th Graders Go to School the Following Year? Feeder Pattern Analysis of DCPS Elementary and ES/MS Education Campuses`
    - tab **Handout 2_MS to ES** (104 rows × 1 cols) — cols: `Where Did 6th Graders Go to School in 5th Grade? Feeder Pattern Analysis of DCPS Middle or MS/HS Education Campuses`
    - tab **Handout 3_HS to MS** (135 rows × 1 cols) — cols: `Where Did 9th Graders Go to School the Previous Year? Feeder Pattern Analysis of DCPS High Schools`
    - tab **4th & 5th Sum_CONDEN w closed s** (382 rows × 1 cols) — cols: `Feeder Pattern Analysis of DCPS Elementary and ES/MS Education Campsues: Where Do 4th and 5th Graders Go to School the Following Year?`
  - [`2014 Boundary Review — Basic Statistics about DCPS Schools, SY2013-14_4.2.14`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Basic%20Statistics%20about%20DCPS%20Schools%2C%20SY2013-14_4.2.14.xlsx) — **xlsx** — 1 tab(s)
    - tab **School Level Data Sheet Summary** (123 rows × 16 cols) — cols: `School Ward SY2013-14`, `School Code`, `School Name SY2013-14`, `Grade Span SY2013-14`, `Audited Enrollment SY2013-14`, `% of in-boundary students in SY2013-14`, `DCPS Building Capacity SY2013-14`, `Building Utilization SY2013-14`, `DC CAS Percent Proficient or Advanced SY2012-13`, `ESEA School Index Score (0-100) SY2012-13`, `% African American, Non-Hispanic, SY2013-14`, `% White, Non-Hispanic SY2013-14` …
  - [`2014 Boundary Review — Policy Brief #3 - Appendix B`](https://dme.dc.gov/sites/default/files/dc/sites/dme/publication/attachments/Policy%20Brief%20%233%20-%20Appendix%20B%20%28excel%20format%29.xlsx) — **xlsx** — 3 tab(s)
    - tab **Boundary Participation Data Tab** (2,766 rows × 31 cols) — cols: `Boundary_ID`, `DCPS Boundary`, `# Public School Students Living In-Boundary`, `# DCPS Schools Attended`, `# PCS Schools Attended`, `Total Schools Attended`, `Schools Attended by 5 or more In-Boundary Students 2012-13`, `# Students Attending`, `Grade Span`, `2012-13 Enrollment`, `In Boundary Participation Rate`, `School % In Boundary` …
    - tab **Summary** (149 rows × 7 cols) — cols: `DCPS Boundary`, `# Living In-Boundary`, `Total Schools Attended`, `# Students Attending`, `Grade Span`, `2012-13 Enrollment`, `In Boundary Participation Rate`
    - tab **Data Definitions and Sources** (26 rows × 2 cols) — cols: `Column Heading`, `Definition`

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
  - [`Year over Year Comparisons — 20260803 MySchoolDC Tableau Data`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/20260803_MySchoolDC_Tableau_Data.xlsx) — **xlsx** — 3 tab(s)
    - tab **Notes** (26 rows × 2 cols) — cols: `My School DC Public Tableau Data`, `Release: 08/03/2026`
    - tab **Historic Lottery Results** (20,029 rows × 13 cols) — cols: `MSDC School Code`, `OSSE School Code`, `MSDC School Code and Grade`, `MSDC School Name`, `Grade Offered in Lottery`, `Lottery Year`, `Applications on Results Day`, `Lottery Seats Offered`, `Matches on Results Day`, `Waitlist Length on Results Day`, `Total Waitlist Offers made by June`, `Total Waitlist Offers made by August` …
    - tab **Matches by Preference** (60,189 rows × 8 cols) — cols: `Lottery Year`, `MSDC School Code`, `MSDC School Name`, `Grade Offered in Lottery`, `Preference Order`, `Preference Name`, `Preference Order and Name`, `Matches on Results Day by Preference`
  - [`Year over Year Comparisons — 20261007 MySchoolDC Tableau Data`](https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/20261007_MySchoolDC_Tableau_Data.xlsx) — **xlsx** — 3 tab(s)
    - tab **Notes** (26 rows × 2 cols) — cols: `My School DC Public Tableau Data`, `Release: 10/07/2026`
    - tab **Historic Lottery Results** (20,029 rows × 13 cols) — cols: `MSDC School Code`, `OSSE School Code`, `MSDC School Code and Grade`, `MSDC School Name`, `Grade Offered in Lottery`, `Lottery Year`, `Applications on Results Day`, `Lottery Seats Offered`, `Matches on Results Day`, `Waitlist Length on Results Day`, `Total Waitlist Offers made by June`, `Total Waitlist Offers made by August` …
    - tab **Matches by Preference** (60,189 rows × 8 cols) — cols: `Lottery Year`, `MSDC School Code`, `MSDC School Name`, `Grade Offered in Lottery`, `Preference Order`, `Preference Name`, `Preference Order and Name`, `Matches on Results Day by Preference`

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
  - [`DC Charter Schools locations (CSV export)`](https://opendata.dc.gov/api/download/v1/items/a3832935b1d644e48c887e6ec5a65fcd/csv?layers=1) — **csv** — 151 rows × 33 cols
    - cols: `X`, `Y`, `NAME`, `ADDRESS`, `DIRECTOR`, `PHONE`, `AUTHORIZER`, `GRADES`, `ENROLLMENT`, `WEB_URL`, `AUTHORIZAT`, `MYSCHOOL`

### [Open Data DC — Public School Facility Location History & Closed Public Schools](https://opendata.dc.gov/datasets/DCGIS::public-school-facility-location-history/about)

_topics: facilities, gis_

- **Format:** GIS layer (CSV/GeoJSON/Shapefile export)
- **Updated:** Updated irregularly
- **Years on page:** Multiple school years
- **Notes:** Facility Location History: which LEA/school occupied which facility, by school year, with sector and swing-space flags. Closed Public Schools: DCPS buildings no longer used as schools, with capacity and year built. Added 2026-11-01.
- **Data files (profiled):**
  - [`Public School Facility Location History (CSV export)`](https://opendata.dc.gov/api/download/v1/items/67eebf4195264886be48740cede944ee/csv?layers=10) — **csv** — 3,311 rows × 29 cols
    - cols: `X`, `Y`, `OBJECTID`, `SCHOOL_YEAR`, `LEA_ID`, `LEA_NAME`, `SCHOOL_ID`, `SCHOOL_NAME`, `SCHOOL_SECTOR`, `FACILITY_ID`, `FACILITY_SECTOR`, `FACILITY_ADDRESS`
  - [`Closed Public Schools (CSV export)`](https://opendata.dc.gov/api/download/v1/items/ed29a83d799f465f8368bad3d7b330a9/csv?layers=2) — **csv** — 59 rows × 28 cols
    - cols: `X`, `Y`, `NAME`, `ADDRESS`, `FACUSE`, `LEVEL_`, `STATUS`, `PHONE`, `SSL`, `GIS_ID`, `WEB_URL`, `BLDG_NUM`

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
- **Data files (profiled):**
  - [`State of D.C. Schools, 2024-25 (full report)`](https://www.dcpolicycenter.org/wp-content/uploads/v3_SODCS_2024_25_full_report-2.24-copy-2.pdf) — **pdf** — 52 pages, **extractable tables** on ~6 page(s)
    - p1 table (3 rows): 
    - p4 table (5 rows): 
    - p14 table (5 rows): 

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
- [Charter Student Enrollment](https://dcpcsb.org/data/) (DC PCSB)
- [EdScape — Enrollment Patterns (cross-sector / where students attend)](https://edscape.dc.gov/page/enrollment-patterns-index) (DME)
- [DC School Report Card (public interactive site)](https://schoolreportcard.dc.gov/home) (OSSE)

### School accountability ratings

Two different scales. OSSE's STAR rating is 1–5 stars and covers both DCPS and charters. DC PCSB's School Quality Report (SQR), built on the ASPIRE system, scores charters 0–100 with Tier 1/2/3 (charters only). The older PMF (archived at 2018-19) is a separate charter tiering. EmpowerK12 re-presents the OSSE STAR data interactively. A charter can carry both a STAR rating and an SQR tier; they're not the same scale, so note which framework and year a score/tier is from.

Where it appears:
- [DC School Report Card (public interactive site)](https://schoolreportcard.dc.gov/home) (OSSE)
- [DC School Report Card & STAR Framework Technical Guide](https://osse.dc.gov/publication/dc-school-report-card-technical-guide) (OSSE)
- [School Quality Report (SQR)](https://dcpcsb.org/performance-management-framework-pmf/) (DC PCSB)
- [ASPIRE System (current charter accountability framework)](https://dcpcsb.org/aspire-system/) (DC PCSB)
- [Performance Management Framework (PMF) — archive](https://dcpcsb.org/performance-management-framework-pmf/) (DC PCSB)
- [EmpowerK12 — DC school accountability/outcomes dashboards](https://www.empowerk12.org/data-dashboard-source/dc-new-school-ratings) (EmpowerK12)

### Assessment / proficiency (ELA & math)

OSSE administers DC CAPE (formerly PARCC) and MSAA and posts cross-sector results; the Report Card displays them per school. DCPS and PCSB each post their own sector's subset. Sector pages can lag OSSE's release and may apply different suppression.

Where it appears:
- [Statewide Assessment Results 2024-25 (DC CAPE / MSAA)](https://osse.dc.gov/assessmentresults2025) (OSSE)
- [Statewide Assessment Results 2023-24 (+ older-year archive index)](https://osse.dc.gov/assessmentresults2024) (OSSE)
- [DC School Report Card (public interactive site)](https://schoolreportcard.dc.gov/home) (OSSE)
- [DCPS Downloadable Data Sets (index)](https://dcps.dc.gov/service/dcps-downloadable-data-sets) (DCPS)
- [Statewide Assessment Results (charter)](https://dcpcsb.org/data/) (DC PCSB)

### Graduation rate (ACGR)

OSSE publishes the cross-sector 4- and 5-year ACGR with subgroups. DCPS posts the DCPS-only subset of the same calculation; the Report Card shows it per school.

Where it appears:
- [High School Graduation Rates / ACGR](https://osse.dc.gov/service/high-school-graduation-rates-0) (OSSE)
- [DCPS Data Set — Graduation Rates](https://dcps.dc.gov/node/1018352) (DCPS)
- [DC School Report Card (public interactive site)](https://schoolreportcard.dc.gov/home) (OSSE)

### Attendance / chronic absenteeism

OSSE publishes citywide chronic absenteeism and chronic truancy (a 10% threshold). DCPS's at-a-glance PDFs are district-level aggregates; PCSB's report is charter-only. Note that 'attendance rate' and 'chronic absenteeism' are different measures.

Where it appears:
- [School Year Attendance Reporting (chronic absenteeism/truancy)](https://osse.dc.gov/page/2024-25-school-year-attendance-reporting) (OSSE)
- [OSSE Attendance Dashboard](https://osse.dc.gov/attendancedashboard) (OSSE)
- [DC School Report Card (public interactive site)](https://schoolreportcard.dc.gov/home) (OSSE)
- [DCPS at a Glance: Attendance](https://dcps.dc.gov/node/1185940) (DCPS)
- [Annual Discipline & Attendance Report (charter)](https://dcpcsb.egnyte.com/fl/Y7FcwyqdwDTd) (DC PCSB)

### Discipline (suspensions/expulsions)

OSSE's 'State of Discipline' report and the Report Card carry current cross-sector discipline data (by-school detail in PDF appendices). PCSB's School Equity Reports carried charter discipline/mobility through SY2017-18; later charter discipline appears in the OSSE data.

Where it appears:
- [OSSE Discipline Report ('State of Discipline')](https://osse.dc.gov/page/discipline-report) (OSSE)
- [DC School Report Card (public interactive site)](https://schoolreportcard.dc.gov/home) (OSSE)
- [School Equity Reports (charter)](https://dcpcsb.org/school-equity-reports) (DC PCSB)
- [Annual Discipline & Attendance Report (charter)](https://dcpcsb.egnyte.com/fl/Y7FcwyqdwDTd) (DC PCSB)

### Demographics (race, SWD, EL, at-risk)

OSSE's Report Card 'Aggregate Enrollment Data' Excel breaks enrollment down by race/SWD/EL/at-risk at the school level. EdScape recasts it by neighborhood/ward. DCPS and PCSB pages cover their own sector, often as district/sector totals. Small subgroups may be suppressed (0%/100% hidden).

Where it appears:
- [Report Card Aggregate Enrollment Data (demographics file)](https://osse.dc.gov/page/dc-school-report-card-resource-library) (OSSE)
- [DC School Report Card (public interactive site)](https://schoolreportcard.dc.gov/home) (OSSE)
- [EdScape (education landscape tool)](https://edscape.dc.gov/) (DME)
- [DCPS at a Glance: Enrollment](https://dcps.dc.gov/node/966292) (DCPS)
- [Charter Student Enrollment](https://dcpcsb.org/data/) (DC PCSB)

### Per-pupil money

These measure different things. OSSE's ESSA per-pupil reports are actual EXPENDITURE (cross-sector, ex-post). DCPS's budget portal is ALLOCATIONS under the three-factor model (ex-ante, DCPS only). PCSB's finance pages are charter actuals/audits. An allocation and an expenditure aren't the same number.

Where it appears:
- [Report Card School Finance Data (per-pupil expenditures)](https://osse.dc.gov/page/dc-school-report-card-resource-library) (OSSE)
- [DCPS Budget Transparency Portal](https://dcpsbudget.com/) (DCPS)
- [Charter School Finances (spending, budgets, audits, 990s)](https://dcpcsb.org/school-finances-funding/) (DC PCSB)

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
- [School Profiles / Find a DC Public Charter School](https://dcpcsb.org/school-profiles/) (DC PCSB)
- [Public Charter School Directory (annual PDF)](https://dcpcsb.egnyte.com/dl/4JmpCtX9bt48) (DC PCSB)
- [DC School Report Card (public interactive site)](https://schoolreportcard.dc.gov/home) (OSSE)

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

**Profiling status (last run):** 902 of 903 catalogued files download and profile cleanly · 1 still need a browser to resolve · 0 failed.

Many high-value files (OSSE assessment results, PCSB finance/equity docs) are published behind **Box.com / Egnyte share links** or on **JS-rendered pages** with no scrapeable direct URL. Those are harvested with a browser (Playwright) via the update skill and added to `data_files.yaml` — which is why most now resolve. Box `file_id`s change year to year, so they need periodic re-resolving.

Currently flagged `needs_browser` (resolve in a browser):
- 2019 DC School Report Card and STAR Framework Cross-Tabulated Data File → https://app.box.com/s/tb3ipg32wo48di3ph58llnpim5632fn9

_No download/profile errors on the last run._

Other structural notes: PCSB's Egnyte share links (/dl/) return an HTML preview page, so files are catalogued via Egnyte's direct-download form (/dd/); PCSB's per-school folders (budgets, 990s, audits) are linked from source notes, not listed file by file; the PCSB site returns intermittent 520s; the live Report Card is a JS app (use the Resource Library files for analysis); discipline by-school detail is in PDF appendices; STAR (OSSE) and SQR/PMF/ASPIRE (PCSB) are different rating systems.

---
_Generated from `sources.yaml` + `file_profiles.json` by `generate_readme.py`. Sources last verified 2026-11._
