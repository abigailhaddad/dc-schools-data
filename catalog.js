window.CATALOG = {
 "last_verified": "2026-06",
 "owners": [
  {
   "key": "OSSE",
   "name": "OSSE — Office of the State Superintendent of Education",
   "blurb": "DC's state education agency. Authoritative cross-sector (DCPS + charter) source for enrollment, assessments, attendance, graduation, discipline, finance, and the DC School Report Card / STAR ratings."
  },
  {
   "key": "DCPS",
   "name": "DCPS — DC Public Schools",
   "blurb": "The traditional public school district. Publishes its own (DCPS-only) enrollment, outcomes, budgets, surveys, profiles, and facilities data — much of it a subset of OSSE's."
  },
  {
   "key": "DC PCSB",
   "name": "DC PCSB — DC Public Charter School Board",
   "blurb": "Authorizer/regulator of DC's public charter schools. Publishes charter directories, the School Quality Report (SQR) accountability framework, finances, and equity data."
  },
  {
   "key": "DME",
   "name": "DME — Deputy Mayor for Education",
   "blurb": "Mayor's office for education strategy. Runs EdScape (the neighborhood education-landscape tool), the Master Facilities Plan, and boundary/enrollment-planning data."
  },
  {
   "key": "My School DC",
   "name": "My School DC — Common Lottery",
   "blurb": "The single DCPS + charter application/lottery. Publishes lottery participation, match rates, and waitlist data."
  },
  {
   "key": "Open Data DC",
   "name": "Open Data DC / DCGIS",
   "blurb": "The city's open-data and GIS portal. Machine-readable school locations and attendance-zone boundaries."
  },
  {
   "key": "DC Policy Center",
   "name": "DC Policy Center (third party)",
   "blurb": "Nonprofit think tank. Its annual 'State of D.C. Schools' and data tools synthesize and visualize OSSE/DME source data."
  },
  {
   "key": "U.S. Census",
   "name": "U.S. Census Bureau",
   "blurb": "School-age / under-18 population — the citywide denominator for enrollment-planning and capture-rate analysis."
  },
  {
   "key": "EmpowerK12",
   "name": "EmpowerK12 (third party)",
   "blurb": "Nonprofit that builds the interactive dashboards over OSSE Report Card data that OSSE/PCSB do not host themselves."
  }
 ],
 "sources": [
  {
   "id": "osse-data-reports",
   "name": "OSSE Data and Reports (main landing)",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/page/data-and-reports-0",
   "topics": [
    "landing",
    "enrollment",
    "assessment",
    "attendance",
    "graduation",
    "discipline",
    "finance",
    "demographics"
   ],
   "status": "ok",
   "format": "Web portal of links to files & dashboards",
   "cadence": "Rolling; underlying datasets annual",
   "years": "Links span SY2014-15 to SY2024-25 by dataset",
   "notes": "Top-level 'hub of hubs.' Best fallback when a specific per-year page URL changes.",
   "files": [],
   "search": "osse data and reports (main landing) osse top-level 'hub of hubs.' best fallback when a specific per-year page url changes. web portal of links to files & dashboards landing enrollment assessment attendance graduation discipline finance demographics  students headcount count population test scores proficiency parcc dc cape msaa reading math truancy absenteeism chronic absent grad rate diploma acgr dropout suspension expulsion suspended discipline spending money budget cost dollars per-pupil expenditure funding race ethnicity special education english learner at-risk poverty"
  },
  {
   "id": "osse-report-card-resource-library",
   "name": "DC School Report Card Resource Library (downloads)",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/page/dc-school-report-card-resource-library",
   "topics": [
    "assessment",
    "attendance",
    "graduation",
    "discipline",
    "enrollment",
    "demographics",
    "finance",
    "educators"
   ],
   "status": "ok",
   "format": "Excel (.xlsx) files (some via Box) + PDF technical guides",
   "cadence": "Annual; new section posted ~December",
   "years": "2018–2025, each year its own section",
   "notes": "The single richest source of downloadable school-level OSSE data. Per-year filenames are INCONSISTENT — verify each year's exact link on the page.",
   "files": [
    {
     "name": "2026 Metric Calculation Confirmation (MCC) Data Dictionary",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2026%20Metric%20Calculation%20Confirmation%20%28MCC%29%20Data%20Dictionary_Website.xlsx",
     "kind": "xlsx",
     "year": "2026",
     "status": "ok",
     "topics": [
      "methodology"
     ],
     "tabs": [
      {
       "name": "Release Schedule",
       "n_rows": 32,
       "columns": [
        "MCC Phase",
        "Sheet",
        "Release Date",
        "LEA OST Deadline",
        "LEA Certification Date"
       ]
      },
      {
       "name": "ELA Statewide Assessments",
       "n_rows": 71,
       "columns": [
        "Sheet: ELA Statewide Assessments (Participation and Performance)"
       ]
      },
      {
       "name": "Math Statewide Assessments",
       "n_rows": 63,
       "columns": [
        "Sheet: Math Statewide Assessments (Participation and Achievement)"
       ]
      },
      {
       "name": "Metric Scores - Phase I",
       "n_rows": 14,
       "columns": [
        "Sheet: Metric Scores - Phase I"
       ]
      },
      {
       "name": "ACCESS Growth",
       "n_rows": 49,
       "columns": [
        "Sheet: ACCESS Growth"
       ]
      },
      {
       "name": "Adjusted Achievement ",
       "n_rows": 15,
       "columns": [
        "Sheet: Adusted Achievement"
       ]
      },
      {
       "name": "Chronic Absenteeism",
       "n_rows": 37,
       "columns": [
        "Sheet: Chronic Absenteeism"
       ]
      },
      {
       "name": "Pre-K Chronic Absenteeism",
       "n_rows": 35,
       "columns": [
        "Sheet: Pre-K Chronic Absenteeism"
       ]
      },
      {
       "name": "Attendance Growth",
       "n_rows": 44,
       "columns": [
        "Sheet: Attendance Growth"
       ]
      },
      {
       "name": "CLASS",
       "n_rows": 20,
       "columns": [
        "Sheet: CLASS"
       ]
      },
      {
       "name": "Post-Secondary Enrollment",
       "n_rows": 44,
       "columns": [
        "Sheet: Post-Secondary Enrollment"
       ]
      },
      {
       "name": "Directory - Profile",
       "n_rows": 32,
       "columns": [
        "Sheet: Directory - Profile"
       ]
      },
      {
       "name": "Directory- Before After Care",
       "n_rows": 18,
       "columns": [
        "Sheet: Before After Care"
       ]
      },
      {
       "name": "Directory - Message from School",
       "n_rows": 9,
       "columns": [
        "Sheet: Directory - Message from School"
       ]
      },
      {
       "name": "Directory - Transportation",
       "n_rows": 10,
       "columns": [
        "Sheet: Directory - Transportation"
       ]
      },
      {
       "name": "Directory - Parent Engagement",
       "n_rows": 15,
       "columns": [
        "Sheet: Directory - Parent Engagement"
       ]
      },
      {
       "name": "8th-9th Grade Transition",
       "n_rows": 35,
       "columns": [
        "Sheet: 8th to 9th (Alt Only)"
       ]
      },
      {
       "name": "Metric Scores - Phase II",
       "n_rows": 15,
       "columns": [
        "Sheet: Metric Scores - Phase II"
       ]
      },
      {
       "name": "Advanced Coursework - Partic",
       "n_rows": 40,
       "columns": [
        "Sheet: Advanced Coursework - Participation"
       ]
      },
      {
       "name": "Advanced Coursework - Perform",
       "n_rows": 39,
       "columns": [
        "Sheet: Advanced Coursework - Performance"
       ]
      },
      {
       "name": "ACGR",
       "n_rows": 34,
       "columns": [
        "Sheet: ACGR"
       ]
      },
      {
       "name": "Other Student Assessments",
       "n_rows": 36,
       "columns": [
        "Sheet: Other Student Assessments"
       ]
      },
      {
       "name": "Re-Enrollment",
       "n_rows": 38,
       "columns": [
        "Sheet: Re-Enrollment"
       ]
      },
      {
       "name": "SAT Benchmark",
       "n_rows": 35,
       "columns": [
        "Sheet: SAT Benchmark"
       ]
      },
      {
       "name": "Science Statewide Assessments",
       "n_rows": 60,
       "columns": [
        "Sheet: Science Statewide Assessments"
       ]
      },
      {
       "name": "ELA - Growth",
       "n_rows": 52,
       "columns": [
        "Sheet: ELA - Growth"
       ]
      },
      {
       "name": "Math - Growth",
       "n_rows": 52,
       "columns": [
        "Sheet: Math - Growth"
       ]
      },
      {
       "name": "Mobility - LEA Level",
       "n_rows": 52,
       "columns": [
        "Sheet: Mobility - LEA Level"
       ]
      },
      {
       "name": "Mobility - School Level ",
       "n_rows": 56,
       "columns": [
        "Sheet: Mobility - School Level"
       ]
      },
      {
       "name": "Academic Persistence",
       "n_rows": 36,
       "columns": [
        "Sheet: Academic Persistence (Alternative School Framework Only)"
       ]
      },
      {
       "name": "Secondary Completion",
       "n_rows": 32,
       "columns": [
        "Sheet: Secondary Completion (Alternative School Framework Only)"
       ]
      },
      {
       "name": "Metric Scores - Phase III",
       "n_rows": 15,
       "columns": [
        "Sheet: Metric Scores - Phase III"
       ]
      }
     ]
    },
    {
     "name": "2025 Metric Calculation Confirmation (MCC) Data Dictionary",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2025%20Metric%20Calculation%20Confirmation%20%28MCC%29%20Data%20Dictionary%20%289.30.25%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "methodology"
     ],
     "tabs": [
      {
       "name": "Release Schedule",
       "n_rows": 32,
       "columns": [
        "MCC Phase",
        "Sheet",
        "Release to LEAs",
        "LEA OST Deadline",
        "LEA Certification Deadline"
       ]
      },
      {
       "name": "ELA Statewide Assessments",
       "n_rows": 71,
       "columns": [
        "Sheet: ELA Statewide Assessments (Participation and Achievement)"
       ]
      },
      {
       "name": "Math Statewide Assessments",
       "n_rows": 63,
       "columns": [
        "Sheet: Math Statewide Assessments (Participation and Achievement)"
       ]
      },
      {
       "name": "Metric Scores - Phase I",
       "n_rows": 14,
       "columns": [
        "Sheet: Metric Scores - Phase I"
       ]
      },
      {
       "name": "ACCESS Growth",
       "n_rows": 48,
       "columns": [
        "Sheet: ACCESS Growth"
       ]
      },
      {
       "name": "Adjusted Achievement ",
       "n_rows": 15,
       "columns": [
        "Sheet: Adusted Achievement"
       ]
      },
      {
       "name": "Chronic Absenteeism",
       "n_rows": 37,
       "columns": [
        "Sheet: Chronic Absenteeism"
       ]
      },
      {
       "name": "Pre-K Chronic Absenteeism",
       "n_rows": 35,
       "columns": [
        "Sheet: Pre-K Chronic Absenteeism"
       ]
      },
      {
       "name": "Attendance Growth",
       "n_rows": 43,
       "columns": [
        "Sheet: Attendance Growth"
       ]
      },
      {
       "name": "CLASS",
       "n_rows": 20,
       "columns": [
        "Sheet: CLASS"
       ]
      },
      {
       "name": "Discipline",
       "n_rows": 44,
       "columns": [
        "Sheet: Discipline"
       ]
      },
      {
       "name": "Post-Secondary Enrollment",
       "n_rows": 44,
       "columns": [
        "Sheet: Post-Secondary Enrollment"
       ]
      },
      {
       "name": "Directory - Profile",
       "n_rows": 34,
       "columns": [
        "Sheet: Directory - Profile"
       ]
      },
      {
       "name": "Directory- Before After Care",
       "n_rows": 18,
       "columns": [
        "Sheet: Before After Care"
       ]
      },
      {
       "name": "Directory - Message from School",
       "n_rows": 9,
       "columns": [
        "Sheet: Directory - Message from School"
       ]
      },
      {
       "name": "Directory - Transportation",
       "n_rows": 10,
       "columns": [
        "Sheet: Directory - Transportation"
       ]
      },
      {
       "name": "Directory - Parent Engagement",
       "n_rows": 15,
       "columns": [
        "Sheet: Directory - Parent Engagement"
       ]
      },
      {
       "name": "8th to 9th (Alt Only)",
       "n_rows": 35,
       "columns": [
        "Sheet: 8th to 9th (Alt Only)"
       ]
      },
      {
       "name": "Metric Scores - Phase II",
       "n_rows": 15,
       "columns": [
        "Sheet: Metric Scores - Phase II"
       ]
      },
      {
       "name": "Advanced Coursework - Partic",
       "n_rows": 40,
       "columns": [
        "Sheet: Advanced Coursework - Participation"
       ]
      },
      {
       "name": "Advanced Coursework - Perform",
       "n_rows": 39,
       "columns": [
        "Sheet: Advanced Coursework - Performance"
       ]
      },
      {
       "name": "Graduation",
       "n_rows": 34,
       "columns": [
        "Sheet: Graduation"
       ]
      },
      {
       "name": "Other Student Assessments",
       "n_rows": 36,
       "columns": [
        "Sheet: Other Student Assessments"
       ]
      },
      {
       "name": "Re-Enrollment",
       "n_rows": 37,
       "columns": [
        "Sheet: Re-Enrollment"
       ]
      },
      {
       "name": "SAT Benchmark",
       "n_rows": 35,
       "columns": [
        "Sheet: SAT Benchmark"
       ]
      },
      {
       "name": "Science Statewide Assessments",
       "n_rows": 60,
       "columns": [
        "Sheet: Science Statewide Assessments"
       ]
      },
      {
       "name": "ELA - Growth",
       "n_rows": 52,
       "columns": [
        "Sheet Text"
       ]
      },
      {
       "name": "Math - Growth",
       "n_rows": 52,
       "columns": [
        "Sheet Text"
       ]
      },
      {
       "name": "Mobility - LEA Level",
       "n_rows": 52,
       "columns": [
        "Sheet: Mobility - LEA Level"
       ]
      },
      {
       "name": "Mobility - School Level ",
       "n_rows": 56,
       "columns": [
        "Sheet: Mobility - School Level"
       ]
      },
      {
       "name": "Academic Persistence (Alt Only)",
       "n_rows": 36,
       "columns": [
        "Sheet: Academuc Persistence (Alt Only)"
       ]
      },
      {
       "name": "Secondary Completion (Alt Only)",
       "n_rows": 32,
       "columns": [
        "Sheet: Secondary Completion (Alt Only)"
       ]
      },
      {
       "name": "Metric Scores - Phase III",
       "n_rows": 15,
       "columns": [
        "Sheet: Metric Scores - Phase III"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Advanced Coursework and SAT – Metric Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Advanced%20Coursework%20and%20SAT%20-%20Metric%20Scores%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "series": "Advanced Coursework (AP, IB & SAT)",
     "label": "2025",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 21,
       "columns": [
        "School Year 2024-25 DC School Report Card Advanced Coursework and SAT Metric Scores Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 27,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 58,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 1096,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 2176,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 58,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 766,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 1606,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Assessment – Metric Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Assessment%20-%20Metric%20Scores%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 52,
       "columns": [
        "School Year 2024-25 DC School Year Report Card Assessment Data Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 84,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 132,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 3833,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 14837,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 343,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 5536,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 17041,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Attendance – Metric Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Attendance%20-%20Metric%20Scores%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "attendance"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 40,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 54,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 57,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 2333,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 8899,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 171,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 3203,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 9889,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card CLASS – Metric Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20CLASS%20-%20Metric%20Scores%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "school-climate"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 22,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 112,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 439,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Student Movement - Metric Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Student%20Movement%20-%20Metric%20Scores%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "student-movement"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 20,
       "columns": [
        "School Year 2024-25 DC School Report Card Student Movement Data Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 54,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 36,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 7383,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 1833,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 77,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 4096,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 1291,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card – DC SAYS Grades 3-12 Student Metric Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20%E2%80%93%20DC%20SAYS%20Grades%203-12%20Student%20Metric%20Scores%20%282025%29v3.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "school-climate"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 17,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 24,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Gradeband Scores",
       "n_rows": 23,
       "columns": [
        "Gradeband",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "LEA Gradeband Scores",
       "n_rows": 987,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Gradeband",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "School Gradeband Scores",
       "n_rows": 3229,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Gradeband",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card – DC SAYS Grades PK-12 Family Metric Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20%E2%80%93%20DC%20SAYS%20Grades%20PK-12%20Family%20Metric%20Scores%20%282025%29v3.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "school-climate"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 17,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 26,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 8,
       "columns": [
        "Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 428,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 1702,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card – DC SAYS Grades PK-12 Staff Metric Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20%E2%80%93%20DC%20SAYS%20Grades%20PK-12%20Staff%20Metric%20Scores%20%282025%29v3.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "school-climate"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 17,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 26,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 10,
       "columns": [
        "Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 559,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 2197,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card – DC SAYS Adult Student and Staff Metric Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20%E2%80%93%20DC%20SAYS%20Adult%20Student%20and%20Staff%20Metric%20Scores%20%282025%29v3.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "school-climate"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 31,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Student State Gradeband Scores",
       "n_rows": 12,
       "columns": [
        "Gradeband",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "Student LEA-School Gradeband",
       "n_rows": 111,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Gradeband",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "Staff State Overall Scores",
       "n_rows": 10,
       "columns": [
        "Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "Staff LEA-School Overall",
       "n_rows": 91,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Discipline - Metric Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Discipline%20-%20Metric%20Scores%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "discipline"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 20,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 34,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 134,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 7246,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 26356,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 666,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Graduation and College Enrollment – Metric Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Graduation%20and%20College%20Enrollment%20-%20Metric%20Scores%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "graduation",
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 22,
       "columns": [
        "School Year 2024-25 DC School Report Card Graduation and College Enrollment Data Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 27,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 94,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 1400,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 2947,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 73,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 603,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 1177,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card LEA Course Catalog (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20LEA%20Course%20Catalog%20%282025%29_v2%20%281%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "profiles"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 15,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 23,
       "columns": [
        "School Year 2025-26 DC School Report Card Course Catalog Data Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Course Catalog",
       "n_rows": 19901,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "OSSE Subject Area",
        "LEA Course Name",
        "OSSE Course Code",
        "OSSE Course Title",
        "Literacy Curriculum Used",
        "Math Curriculum Used",
        "Minimum Course Grade Level",
        "Maximum Course Grade Level",
        "Course Credit Offered (High School Courses Only)",
        "Dual Language or World Language Course",
        "Course Specifically Designed for Students for Disabilities",
        "Course Specifically Designed for English Learners",
        "Advanced Placement (AP) or International Baccalaureate (IB) Course",
        "Career and Technical Education (CTE) Indicator",
        "Dual Enrollment Course Indicator"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card School Directory Information (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20School%20Directory%20Information%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "profiles"
     ],
     "tabs": [
      {
       "name": "Overview",
       "n_rows": 5,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Profile Data 2024-2025",
       "n_rows": 250,
       "columns": [
        "School ID",
        "School Name",
        "LEA ID",
        "LEA Name",
        "Sector",
        "Monday Instructional Hours",
        "Tuesday Instructional Hours",
        "Wednesday Instructional Hours",
        "Thursday Instructional Hours",
        "Friday Instructional Hours",
        "Pre-Kindergarten (3) Instructional Hours",
        "Pre-Kindergarten (4) Instructional Hours",
        "Kindergarten Instructional Hours",
        "Telephone Number",
        "School Website",
        "School Twitter Information",
        "School Facebook Information",
        "School Instagram Information",
        "School Address",
        "School Ward",
        "School Uniform Policy",
        "Before Care Availability",
        "Before Care Cost",
        "After Care Availability",
        "After Care Cost",
        "School Programs Offered",
        "Extracurricular and Enrichment Activities"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Accountability Scores (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Accountability%20Scores%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 17,
       "columns": [
        "School Year 2024-25 DC School Report Card Aggregate Data Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 73,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Student Group Scores",
       "n_rows": 1215,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Accountability Framework",
        "Student Group",
        "Student Group Points Earned",
        "Student Group Points Possible",
        "Student Group Score",
        "School Year"
       ]
      },
      {
       "name": "Metric Scores by Framework",
       "n_rows": 3531,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Accountability Framework",
        "Metric Name",
        "Total Points Earned",
        "Total Points Possible",
        "Percent of Points Earned"
       ]
      },
      {
       "name": "Framework Scores",
       "n_rows": 275,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Accountability Framework",
        "Framework Points Earned",
        "Framework Points Possible",
        "Framework Score",
        "Framework Weight",
        "Weighted Framework Score",
        "School Year"
       ]
      },
      {
       "name": "School Scores",
       "n_rows": 201,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "School Score",
        "School Year"
       ]
      },
      {
       "name": "State Student Group Scores",
       "n_rows": 28,
       "columns": [
        "Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      },
      {
       "name": "LEA Student Group Scores",
       "n_rows": 425,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      },
      {
       "name": "Framework Percentile Rank",
       "n_rows": 239,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Framework",
        "Sub- Framework",
        "Framework Percentile Rank",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Floors and Targets (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Floors%20and%20Targets%20%282025%29_0.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 17,
       "columns": [
        "School Year 2024-25 DC School Report Card Floors and Targets Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 8,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Floors and Targets",
       "n_rows": 376,
       "columns": [
        "Metric Name",
        "School Framework",
        "Student Group",
        "Floor",
        "Target",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card State-Level MSAA Participation Data (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20State-Level%20MSAA%20Participation%20Data%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 18,
       "columns": [
        "2024-25 MSAA Participation Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 11,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 205,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card State-Level DC CAPE Science and DLM Cross Tabulated Data (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20State-Level%20DC%20CAPE%20Science%20and%20DLM%20Cross%20Tabulated%20Data%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 23,
       "columns": [
        "2024-25 Statewide Cross-tabulated Science Assessment Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 28,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Meeting, Exceeding",
       "n_rows": 51,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Grade of Enrollment",
        "Student Group",
        "Student Group Value",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level",
       "n_rows": 325,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Grade of Enrollment",
        "Student Group",
        "Student Group Value",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 52,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Grade of Enrollment",
        "Student Group",
        "Student Group Value",
        "Count",
        "Total Count",
        "Percent"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card State-Level DC CAPE and MSAA Cross-Tabulated Data (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20State-Level%20DC%20CAPE%20and%20MSAA%20Cross-Tabulated%20Data%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "assessment",
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 25,
       "columns": [
        "2024-25 Statewide Cross-tabulated Assessment Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 29,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Meeting,Exceeding",
       "n_rows": 844,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Approaching, Meeting, Exceeding",
       "n_rows": 844,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level",
       "n_rows": 5984,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 857,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent",
        "Metric"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card State Overall Assessment Growth Metric Scores Cross Tabulated (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20State%20Overall%20Assessment%20Growth%20Metric%20Scores%20Cross%20Tabulated%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 47,
       "columns": [
        "2024-25 Statewide Assessment Cross-tabulated Growth Scores Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 33,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 217,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card State Overall ACGR Metric Scores Cross Tabulated (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20State%20Overall%20ACGR%20Metric%20Scores%20Cross%20Tabulated%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 47,
       "columns": [
        "2024-25 Statewide Cross-tabulated Adjusted Cohort Graduation Rates (ACGR) Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 33,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 109,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card - Progress Toward Long Term Goals",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20-%202024-25%20Progress%20Toward%20Long%20Term%20Goals%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "2024-25 Progress Toward Long-Term Achievement Goals Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 22,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "State",
       "n_rows": 81,
       "columns": [
        "Level",
        "Student Group",
        "Metric",
        "Grade Band",
        "Goal",
        "Score",
        "Difference"
       ]
      },
      {
       "name": "LEA",
       "n_rows": 1743,
       "columns": [
        "Level",
        "LEA Code",
        "LEA Name",
        "Student Group",
        "Metric",
        "Grade Band",
        "Goal",
        "Score",
        "Difference"
       ]
      },
      {
       "name": "School",
       "n_rows": 3175,
       "columns": [
        "Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Student Group",
        "Metric",
        "Grade Band",
        "Goal",
        "Score",
        "Difference"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Accountability Scores (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Accountability%20Scores%20%282024%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 73,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Student Group Scores",
       "n_rows": 1212,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Accountability Framework",
        "Student Group",
        "Student Group Points Earned",
        "Student Group Points Possible",
        "Student Group Score",
        "School Year"
       ]
      },
      {
       "name": "Metric Scores by Framework",
       "n_rows": 3536,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Accountability Framework",
        "Metric Name",
        "Total Points Earned",
        "Total Points Possible",
        "Percent of Points Earned"
       ]
      },
      {
       "name": "Framework Scores",
       "n_rows": 273,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Accountability Framework",
        "Framework Points Earned",
        "Framework Points Possible",
        "Framework Score",
        "Framework Weight",
        "Weighted Framework Score",
        "School Year"
       ]
      },
      {
       "name": "School Scores",
       "n_rows": 200,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "School Score",
        "School Year"
       ]
      },
      {
       "name": "LEA Student Group Scores",
       "n_rows": 430,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      },
      {
       "name": "State Student Group Scores",
       "n_rows": 28,
       "columns": [
        "Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      },
      {
       "name": "Framework Percentile Rank",
       "n_rows": 239,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Framework",
        "Sub- Framework",
        "Framework Percentile Rank",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Advanced Coursework and SAT-Metric Scores (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Advanced%20Coursework%20and%20SAT%20-%20Metric%20Scores%20%282024%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "series": "Advanced Coursework (AP, IB & SAT)",
     "label": "2024",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 27,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 217,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 1546,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 721,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Aggregate Enrollment Data (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20DC%20School%20Report%20Card%20Aggregate%20Enrollment%20Data%20%282%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 10,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 14,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Ever Enrolled Population",
       "n_rows": 5058,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Student Group",
        "Grade",
        "Percent Enrolled",
        "Enrollment Count",
        "Total Count of Students",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Assessment – Metric Scores (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Assessment%20-%20Metric%20Scores%20%282024%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 20,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 84,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 361,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 14116,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 3706,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 937,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 16531,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 5221,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Assessment Science – Metric Scores (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Assessment%20Science%20-%20Metric%20Scores%20%282024%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 17,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 54,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 561,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 11100,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 3274,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Attendance – Metric Scores (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Attendance%20-%20Metric%20Scores%20%282024%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "attendance"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 20,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 54,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 217,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 9091,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 2401,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 505,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 9961,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 3091,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card CLASS – Metric Scores (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20CLASS%20-%20Metric%20Scores%20%282024%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "school-climate"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 16,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 22,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 442,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 118,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Discipline – Metric Scores (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Discipline%20-%20Metric%20Scores%20%282024%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "discipline"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 34,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 577,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 30121,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 8401,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 2305,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Floors and Targets (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Floors%20and%20Targets%20%282024%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 8,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Floors and Targets",
       "n_rows": 376,
       "columns": [
        "Metric Name",
        "School Framework",
        "Student Group",
        "Floor",
        "Target",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Graduation and College Enrollment – Metric Scores (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Graduation%20and%20College%20Enrollment%20-%20Metric%20Scores%20%282024%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "graduation",
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 27,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 359,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 2862,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 1371,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card School Directory Information (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20School%20Directory%20Information%20%282024%29%20update.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "profiles"
     ],
     "tabs": [
      {
       "name": "Overview",
       "n_rows": 5,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Profile Data 2023-2024",
       "n_rows": 250,
       "columns": [
        "School ID",
        "School Name",
        "LEA ID",
        "LEA Name",
        "Sector",
        "School Type",
        "Monday Instructional Hours",
        "Tuesday Instructional Hours",
        "Wednesday Instructional Hours",
        "Thursday Instructional Hours",
        "Friday Instructional Hours",
        "Pre-Kindergarten (3) Instructional Hours",
        "Pre-Kindergarten (4) Instructional Hours",
        "Kindergarten Instructional Hours",
        "Telephone Number",
        "School Website",
        "School Twitter Information",
        "School Facebook Information",
        "School Instagram Information",
        "School Address",
        "School Ward",
        "School Uniform Policy",
        "Before Care Availability",
        "Before Care Cost",
        "After Care Availability",
        "After Care Cost",
        "School Programs",
        "Available Extracuricular and Enrichment Activities"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Student Movement – Metric Scores (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Student%20Movement%20-%20Metric%20Scores%20%282024%29_0.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "student-movement"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 20,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 54,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 89,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 7368,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 1849,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 289,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 4081,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 1291,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card – Educator Data (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20Educator%20Workforce%20Data%20Files%20%28Oct%2028%29_0.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "educators"
     ],
     "series": "Educators (Teachers & School Leaders)",
     "label": "2024",
     "tabs": [
      {
       "name": "Overview (C&D)",
       "n_rows": 5,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Demographics_Staff_SEA",
       "n_rows": 2,
       "columns": [
        "Reporting Level",
        "Total Staff Citywide",
        "Female",
        "Male",
        "Gender Other/Unknown",
        "American Indian/Alaskan Native",
        "American Indian/Alaskan Native Female",
        "American Indian/Alaskan Native Male",
        "American Indian/Alaskan Native Gender Other/Unknown",
        "Asian",
        "Asian Female",
        "Asian Male",
        "Asian Gender Other/Unknown",
        "Black/African American",
        "Black/African American Female",
        "Black/African American Male",
        "Black/African American Gender Other/Unknown",
        "Hispanic/Latino",
        "Hispanic/Latino Female",
        "Hispanic/Latino Male",
        "Hispanic/Latino Gender Other/Unknown",
        "Two or More Races",
        "Two or More Races Female",
        "Two or More Races Male",
        "Two or More Races Gender Other/Unknown",
        "Pacific Islander/Native Hawaiian",
        "Pacific Islander/Native Hawaiian Female",
        "Pacific Islander/Native Hawaiian Male",
        "Pacific Islander/Native Hawaiian Gender Other/Unknown",
        "White/Caucasian",
        "White/Caucasian Female",
        "White/Caucasian Male",
        "White/Caucasian Gender Other/Unknown",
        "Race/Ethnicity Other/Unknown",
        "Race/Ethnicity Other/Unknown Female",
        "Race/Ethnicity Other/Unknown Male",
        "Race/Ethnicity Other/Unknown Gender Other/Unknown"
       ]
      },
      {
       "name": "Demographics_Staff_LEA",
       "n_rows": 73,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Total Staff at this LEA",
        "Female",
        "Male",
        "Gender Other/Unknown",
        "American Indian/Alaskan Native",
        "American Indian/Alaskan Native Female",
        "American Indian/Alaskan Native Male",
        "American Indian/Alaskan Native Gender Other/Unknown",
        "Asian",
        "Asian Female",
        "Asian Male",
        "Asian Gender Other/Unknown",
        "Black/African American",
        "Black/African American Female",
        "Black/African American Male",
        "Black/African American Gender Other/Unknown",
        "Hispanic/Latino",
        "Hispanic/Latino Female",
        "Hispanic/Latino Male",
        "Hispanic/Latino Gender Other/Unknown",
        "Two or More Races",
        "Two or More Races Female",
        "Two or More Races Male",
        "Two or More Races Gender Other/Unknown",
        "Pacific Islander/Native Hawaiian",
        "Pacific Islander/Native Hawaiian Female",
        "Pacific Islander/Native Hawaiian Male",
        "Pacific Islander/Native Hawaiian Gender Other/Unknown",
        "White/Caucasian",
        "White/Caucasian Female",
        "White/Caucasian Male",
        "White/Caucasian Gender Other/Unknown",
        "Race/Ethnicity Other/Unknown",
        "Race/Ethnicity Other/Unknown Female",
        "Race/Ethnicity Other/Unknown Male",
        "Race/Ethnicity Other/Unknown Gender Other/Unknown"
       ]
      },
      {
       "name": "Demographics_Tch_SEA",
       "n_rows": 2,
       "columns": [
        "Reporting Level",
        "Total Teachers Citywide",
        "Female",
        "Male",
        "Gender Other/Unknown",
        "American Indian/Alaskan Native",
        "American Indian/Alaskan Native Female",
        "American Indian/Alaskan Native Male",
        "American Indian/Alaskan Native Gender Other/Unknown",
        "Asian",
        "Asian Female",
        "Asian Male",
        "Asian Gender Other/Unknown",
        "Black/African American",
        "Black/African American Female",
        "Black/African American Male",
        "Black/African American Gender Other/Unknown",
        "Hispanic/Latino",
        "Hispanic/Latino Female",
        "Hispanic/Latino Male",
        "Hispanic/Latino Gender Other/Unknown",
        "Two or More Races",
        "Two or More Races Female",
        "Two or More Races Male",
        "Two or More Races Gender Other/Unknown",
        "Pacific Islander/Native Hawaiian",
        "Pacific Islander/Native Hawaiian Female",
        "Pacific Islander/Native Hawaiian Male",
        "Pacific Islander/Native Hawaiian Gender Other/Unknown",
        "White/Caucasian",
        "White/Caucasian Female",
        "White/Caucasian Male",
        "White/Caucasian Gender Other/Unknown",
        "Race/Ethnicity Other/Unknown",
        "Race/Ethnicity Other/Unknown Female",
        "Race/Ethnicity Other/Unknown Male",
        "Race/Ethnicity Other/Unknown Gender Other/Unknown"
       ]
      },
      {
       "name": "Demographics_SL_SEA",
       "n_rows": 2,
       "columns": [
        "Reporting Level",
        "Total School Leaders Citywide",
        "Female",
        "Male",
        "Gender Other/Unknown",
        "American Indian/Alaskan Native",
        "American Indian/Alaskan Native Female",
        "American Indian/Alaskan Native Male",
        "American Indian/Alaskan Native Gender Other/Unknown",
        "Asian",
        "Asian Female",
        "Asian Male",
        "Asian Gender Other/Unknown",
        "Black/African American",
        "Black/African American Female",
        "Black/African American Male",
        "Black/African American Gender Other/Unknown",
        "Hispanic/Latino",
        "Hispanic/Latino Female",
        "Hispanic/Latino Male",
        "Hispanic/Latino Gender Other/Unknown",
        "Two or More Races",
        "Two or More Races Female",
        "Two or More Races Male",
        "Two or More Races Gender Other/Unknown",
        "Pacific Islander/Native Hawaiian",
        "Pacific Islander/Native Hawaiian Female",
        "Pacific Islander/Native Hawaiian Male",
        "Pacific Islander/Native Hawaiian Gender Other/Unknown",
        "White/Caucasian",
        "White/Caucasian Female",
        "White/Caucasian Male",
        "White/Caucasian Gender Other/Unknown",
        "Race/Ethnicity Other/Unknown",
        "Race/Ethnicity Other/Unknown Female",
        "Race/Ethnicity Other/Unknown Male",
        "Race/Ethnicity Other/Unknown Gender Other/Unknown"
       ]
      },
      {
       "name": "Demographics_Tch_LEA",
       "n_rows": 73,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Total Teachers at this LEA",
        "Female",
        "Male",
        "Gender Other/Unknown",
        "American Indian/Alaskan Native",
        "American Indian/Alaskan Native Female",
        "American Indian/Alaskan Native Male",
        "American Indian/Alaskan Native Gender Other/Unknown",
        "Asian",
        "Asian Female",
        "Asian Male",
        "Asian Gender Other/Unknown",
        "Black/African American",
        "Black/African American Female",
        "Black/African American Male",
        "Black/African American Gender Other/Unknown",
        "Hispanic/Latino",
        "Hispanic/Latino Female",
        "Hispanic/Latino Male",
        "Hispanic/Latino Gender Other/Unknown",
        "Two or More Races",
        "Two or More Races Female",
        "Two or More Races Male",
        "Two or More Races Gender Other/Unknown",
        "Pacific Islander/Native Hawaiian",
        "Pacific Islander/Native Hawaiian Female",
        "Pacific Islander/Native Hawaiian Male",
        "Pacific Islander/Native Hawaiian Gender Other/Unknown",
        "White/Caucasian",
        "White/Caucasian Female",
        "White/Caucasian Male",
        "White/Caucasian Gender Other/Unknown",
        "Race/Ethnicity Other/Unknown",
        "Race/Ethnicity Other/Unknown Female",
        "Race/Ethnicity Other/Unknown Male",
        "Race/Ethnicity Other/Unknown Gender Other/Unknown"
       ]
      },
      {
       "name": "Demographics_SL_LEA",
       "n_rows": 73,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Total School Leaders at this LEA",
        "Female",
        "Male",
        "Gender Other/Unknown",
        "American Indian/Alaskan Native",
        "American Indian/Alaskan Native Female",
        "American Indian/Alaskan Native Male",
        "American Indian/Alaskan Native Gender Other/Unknown",
        "Asian",
        "Asian Female",
        "Asian Male",
        "Asian Gender Other/Unknown",
        "Black/African American",
        "Black/African American Female",
        "Black/African American Male",
        "Black/African American Gender Other/Unknown",
        "Hispanic/Latino",
        "Hispanic/Latino Female",
        "Hispanic/Latino Male",
        "Hispanic/Latino Gender Other/Unknown",
        "Two or More Races",
        "Two or More Races Female",
        "Two or More Races Male",
        "Two or More Races Gender Other/Unknown",
        "Pacific Islander/Native Hawaiian",
        "Pacific Islander/Native Hawaiian Female",
        "Pacific Islander/Native Hawaiian Male",
        "Pacific Islander/Native Hawaiian Gender Other/Unknown",
        "White/Caucasian",
        "White/Caucasian Female",
        "White/Caucasian Male",
        "White/Caucasian Gender Other/Unknown",
        "Race/Ethnicity Other/Unknown",
        "Race/Ethnicity Other/Unknown Female",
        "Race/Ethnicity Other/Unknown Male",
        "Race/Ethnicity Other/Unknown Gender Other/Unknown"
       ]
      },
      {
       "name": "Demographics_Staff_SCH",
       "n_rows": 255,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward of School",
        "Total Staff at this School",
        "Female",
        "Male",
        "Gender Other/Unknown",
        "American Indian/Alaskan Native",
        "American Indian/Alaskan Native Female",
        "American Indian/Alaskan Native Male",
        "American Indian/Alaskan Native Gender Other/Unknown",
        "Asian",
        "Asian Female",
        "Asian Male",
        "Asian Gender Other/Unknown",
        "Black/African American",
        "Black/African American Female",
        "Black/African American Male",
        "Black/African American Gender Other/Unknown",
        "Hispanic/Latino",
        "Hispanic/Latino Female",
        "Hispanic/Latino Male",
        "Hispanic/Latino Gender Other/Unknown",
        "Two or More Races",
        "Two or More Races Female",
        "Two or More Races Male",
        "Two or More Races Gender Other/Unknown",
        "Pacific Islander/Native Hawaiian",
        "Pacific Islander/Native Hawaiian Female",
        "Pacific Islander/Native Hawaiian Male",
        "Pacific Islander/Native Hawaiian Gender Other/Unknown",
        "White/Caucasian",
        "White/Caucasian Female",
        "White/Caucasian Male",
        "White/Caucasian Gender Other/Unknown",
        "Race/Ethnicity Other/Unknown",
        "Race/Ethnicity Other/Unknown Female",
        "Race/Ethnicity Other/Unknown Male",
        "Race/Ethnicity Other/Unknown Gender Other/Unknown"
       ]
      },
      {
       "name": "Demographics_Tch_SCH",
       "n_rows": 255,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward of School",
        "Total Teachers at this School",
        "Female",
        "Male",
        "Gender Other/Unknown",
        "American Indian/Alaskan Native",
        "American Indian/Alaskan Native Female",
        "American Indian/Alaskan Native Male",
        "American Indian/Alaskan Native Gender Other/Unknown",
        "Asian",
        "Asian Female",
        "Asian Male",
        "Asian Gender Other/Unknown",
        "Black/African American",
        "Black/African American Female",
        "Black/African American Male",
        "Black/African American Gender Other/Unknown",
        "Hispanic/Latino",
        "Hispanic/Latino Female",
        "Hispanic/Latino Male",
        "Hispanic/Latino Gender Other/Unknown",
        "Two or More Races",
        "Two or More Races Female",
        "Two or More Races Male",
        "Two or More Races Gender Other/Unknown",
        "Pacific Islander/Native Hawaiian",
        "Pacific Islander/Native Hawaiian Female",
        "Pacific Islander/Native Hawaiian Male",
        "Pacific Islander/Native Hawaiian Gender Other/Unknown",
        "White/Caucasian",
        "White/Caucasian Female",
        "White/Caucasian Male",
        "White/Caucasian Gender Other/Unknown",
        "Race/Ethnicity Other/Unknown",
        "Race/Ethnicity Other/Unknown Female",
        "Race/Ethnicity Other/Unknown Male",
        "Race/Ethnicity Other/Unknown Gender Other/Unknown"
       ]
      },
      {
       "name": "Demographics_SL_SCH",
       "n_rows": 255,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward of School",
        "Total School Leaders at this School",
        "Female",
        "Male",
        "Gender Other/Unknown",
        "American Indian/Alaskan Native",
        "American Indian/Alaskan Native Female",
        "American Indian/Alaskan Native Male",
        "American Indian/Alaskan Native Gender Other/Unknown",
        "Asian",
        "Asian Female",
        "Asian Male",
        "Asian Gender Other/Unknown",
        "Black/African American",
        "Black/African American Female",
        "Black/African American Male",
        "Black/African American Gender Other/Unknown",
        "Hispanic/Latino",
        "Hispanic/Latino Female",
        "Hispanic/Latino Male",
        "Hispanic/Latino Gender Other/Unknown",
        "Two or More Races",
        "Two or More Races Female",
        "Two or More Races Male",
        "Two or More Races Gender Other/Unknown",
        "Pacific Islander/Native Hawaiian",
        "Pacific Islander/Native Hawaiian Female",
        "Pacific Islander/Native Hawaiian Male",
        "Pacific Islander/Native Hawaiian Gender Other/Unknown",
        "White/Caucasian",
        "White/Caucasian Female",
        "White/Caucasian Male",
        "White/Caucasian Gender Other/Unknown",
        "Race/Ethnicity Other/Unknown",
        "Race/Ethnicity Other/Unknown Female",
        "Race/Ethnicity Other/Unknown Male",
        "Race/Ethnicity Other/Unknown Gender Other/Unknown"
       ]
      },
      {
       "name": "Gradeband_Tch_SEA",
       "n_rows": 5,
       "columns": [
        "Grand Band",
        "Total Teachers Citywide",
        "Total Teachers in this Grade Band Citywide",
        "Percent Teachers in this Grade Band Citywide"
       ]
      },
      {
       "name": "Gradeband_Tch_LEA",
       "n_rows": 144,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Grand Band",
        "Total Teachers at this LEA",
        "Total Teachers in this Grade Band at this LEA",
        "Percent Teachers in this Grade Band at this LEA"
       ]
      },
      {
       "name": "Gradeband_Tch_SCH",
       "n_rows": 459,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward of School",
        "Grand Band",
        "Total Teachers at this school",
        "Total Teachers in this Grade Band at this school",
        "Percent Teachers in this Grade Band at this school"
       ]
      },
      {
       "name": "Student-Teacher Ratios_SEA",
       "n_rows": 2,
       "columns": [
        "Citywide",
        "Student:Teacher Ratio"
       ]
      },
      {
       "name": "Student-Staff Ratios_SEA",
       "n_rows": 2,
       "columns": [
        "Citywide",
        "Student:Staff Ratio"
       ]
      },
      {
       "name": "Student-Teacher Ratios_LEA",
       "n_rows": 73,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Student:Teacher Ratio"
       ]
      },
      {
       "name": "Student-Staff Ratios_LEA",
       "n_rows": 73,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Student:Staff Ratio"
       ]
      },
      {
       "name": "Student-Teacher Ratios_SCH",
       "n_rows": 255,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward",
        "Student:Teacher Ratio"
       ]
      },
      {
       "name": "Student-Staff Ratios_SCH",
       "n_rows": 255,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward",
        "Student:Staff Ratio"
       ]
      },
      {
       "name": "Overview (Prep&Perf)",
       "n_rows": 5,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Codebook (Prep&Perf)",
       "n_rows": 27,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Effective_Tch_SEA",
       "n_rows": 2,
       "columns": [
        "Total SY 2023-24 Teachers that were rated in SY 2022-23 Citywide",
        "Percent of SY 2023-34 Teachers rated effective in SY 2022-23 Citywide"
       ]
      },
      {
       "name": "Certified_Tch_SEA",
       "n_rows": 2,
       "columns": [
        "Number of Teachers (DCPS only)",
        "Number of Teachers that hold a DC teaching certification (DCPS only)",
        "Percent Teachers that hold a DC teaching certification (DCPS only)"
       ]
      },
      {
       "name": "Infield_Tch_SEA",
       "n_rows": 2,
       "columns": [
        "Number of Teachers (DCPS only)",
        "Number of Teachers that are teaching a subject infield (DCPS only)",
        "Percent Teachers that are teaching a subject infield (DCPS only)"
       ]
      },
      {
       "name": "Effective_Tch_LEA",
       "n_rows": 73,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Total SY 2023-24 Teachers that were rated in SY 2022-23 at this LEA",
        "Percent of 2023-24 Teachers rated effective in SY 2022-23 at this LEA",
        "Notes"
       ]
      },
      {
       "name": "Certified_Tch_LEA",
       "n_rows": 2,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Number of Teachers (DCPS only)",
        "Number of Teachers that hold a DC teaching certification (DCPS only)",
        "Percent Teachers that hold a DC teaching certification (DCPS only)"
       ]
      },
      {
       "name": "Infield_Tch_LEA",
       "n_rows": 2,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Number of Teachers (DCPS only)",
        "Number of Teachers that are teaching a subject infield (DCPS only)",
        "Percent Teachers that are teaching a subject infield (DCPS only)"
       ]
      },
      {
       "name": "Effective_Tch_SCH",
       "n_rows": 255,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward of School",
        "Total SY 2023-24 Teachers that were rated in SY 2022-23 at this school",
        "Percent of SY 2023-24 Teachers rated effective in SY 2022-23 at this school",
        "Notes"
       ]
      },
      {
       "name": "Certified_Tch_SCH",
       "n_rows": 118,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward of School",
        "Number of Teachers at this school",
        "Number of Teachers that hold a DC teaching certification at this school",
        "Percent Teachers that hold a DC teaching certification at this school"
       ]
      },
      {
       "name": "Infield_Tch_SCH",
       "n_rows": 118,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward of School",
        "Number of Teachers at this school",
        "Number of Teachers that are teaching a subject infield at this school",
        "Percent Teachers that are teaching a subject infield at this school"
       ]
      },
      {
       "name": "Exp_Tch_SEA",
       "n_rows": 5,
       "columns": [
        "Years of Experience",
        "Number of Teachers Citywide",
        "Number of Teachers in this experience category",
        "Percent of Teachers in this experience category"
       ]
      },
      {
       "name": "Exp_School_Leader_SEA",
       "n_rows": 5,
       "columns": [
        "Years of Experience",
        "Number of School Leaders Citywide",
        "Number of School Leaders in this experience category",
        "Percent of School Leaders in this experience category"
       ]
      },
      {
       "name": "Exp_Tch_LEA",
       "n_rows": 289,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Years of Experience",
        "Number of Teachers at this LEA",
        "Number of Teachers in this experience category",
        "Percent of Teachers in this experience category"
       ]
      },
      {
       "name": "Exp_School_Leader_LEA",
       "n_rows": 289,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Years of Experience",
        "Number of School Leaders at this LEA",
        "Number of School Leaders in this experience category",
        "Percent of School Leaders in this experience category"
       ]
      },
      {
       "name": "Exp_Tch_SCH",
       "n_rows": 1017,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward of School",
        "Years of Experience",
        "Number of Teachers at this School",
        "Number of Teachers in this experience category",
        "Percent of Teachers in this experience category"
       ]
      },
      {
       "name": "Exp_School_Leader_SCH",
       "n_rows": 1017,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward of School",
        "Years of Experience",
        "Number of School Leaders at this School",
        "Number of School Leaders in this experience category",
        "Percent of School Leaders in this experience category"
       ]
      },
      {
       "name": "Overview (S&D)",
       "n_rows": 5,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Supply EPPs",
       "n_rows": 117,
       "columns": [
        "EPP Program",
        "Total number of candidates and completers in 2022-23",
        "Total number of candidates and completers who were teaching in the 2023-24 schoo",
        "Subject",
        "Number of candidates and completers in this subject of training in 2022-23",
        "2022-23 DC EPP Candidates and Completers Certified in this Subject",
        "2022-23 DC EPP Candidates and Completers Teaching this Subject in SY 2023-24",
        "Number of candidates and completers who were teaching in the subject of training"
       ]
      },
      {
       "name": "Vacancies_SEA",
       "n_rows": 14,
       "columns": [
        "Subject",
        "Number of Vacant FTEs in this Subject Area"
       ]
      },
      {
       "name": "Vacancies_LEA",
       "n_rows": 118,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Sector",
        "Subject",
        "Number of Vacant FTEs in this Subject Area"
       ]
      },
      {
       "name": "Vacancies_SCH",
       "n_rows": 388,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Sector",
        "Ward of School",
        "Subject",
        "Number of Vacant FTEs in this Subject Area"
       ]
      },
      {
       "name": "Sheet38",
       "n_rows": 1,
       "columns": []
      }
     ]
    },
    {
     "name": "Metric Calculation Confirmation Data Dictionary",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2023-24%20MCC%20Data%20Dictionary%20for%20LEAs%20-%20August%20Update.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "methodology"
     ],
     "tabs": [
      {
       "name": "Summary",
       "n_rows": 40,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Metric Scores",
       "n_rows": 15,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "ELA - Participation",
       "n_rows": 46,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Math - Participation",
       "n_rows": 45,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "ELA - Acheivement",
       "n_rows": 47,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Math - Acheivement",
       "n_rows": 45,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Adjusted Achievement ",
       "n_rows": 16,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "ACCESS Growth",
       "n_rows": 47,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Attendance Growth",
       "n_rows": 44,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Chronic Absenteeism",
       "n_rows": 38,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Pre-K Chronic Absenteeism",
       "n_rows": 35,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "CLASS",
       "n_rows": 20,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Discipline",
       "n_rows": 45,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Post-Secondary Enrollment",
       "n_rows": 36,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Directory - Profile",
       "n_rows": 35,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Directory- Before After Care",
       "n_rows": 19,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Directory - Message from School",
       "n_rows": 10,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Directory - Transportation",
       "n_rows": 11,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Directory - Family Engagement",
       "n_rows": 16,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "ELA - Growth",
       "n_rows": 52,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Math - Growth",
       "n_rows": 52,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Graduation",
       "n_rows": 32,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Advanced Coursework - Partic",
       "n_rows": 40,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Advanced Coursework - Perform",
       "n_rows": 39,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Science - Participation",
       "n_rows": 45,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Science- Acheivement",
       "n_rows": 39,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "SAT Benchmark",
       "n_rows": 36,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Mobility - School Level ",
       "n_rows": 56,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Mobility - LEA Level",
       "n_rows": 52,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Re-Enrollment",
       "n_rows": 38,
       "columns": [
        "Sheet Description"
       ]
      },
      {
       "name": "Other Student Assessments",
       "n_rows": 36,
       "columns": [
        "Sheet Description"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card School Finance Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20School%20Finance%20Data%20%282023%29.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "finance"
     ],
     "series": "School Finance / Per-Pupil Expenditures",
     "label": "2023",
     "tabs": [
      {
       "name": "Overview",
       "n_rows": 69,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 69,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Finance",
       "n_rows": 10,
       "columns": [
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "LEA Finance (multi-school)",
       "n_rows": 307,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "LEA Finance (single-school)",
       "n_rows": 885,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "School Finance (multi-school)",
       "n_rows": 2971,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "School Finance (single-school)",
       "n_rows": 365,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Common Financial Reporting Standards",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Common%20Financial%20Reporting%20Standards%20%282023%29.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "finance",
      "methodology"
     ],
     "tabs": [
      {
       "name": "Overview",
       "n_rows": 11,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State CFRS",
       "n_rows": 37,
       "columns": [
        "Category",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "LEA CFRS",
       "n_rows": 2521,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Category",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "School CFRS",
       "n_rows": 9001,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Category",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Aggregate Enrollment Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20Aggregate%20Enrollment%20Data.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 10,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 14,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Ever Enrolled Population",
       "n_rows": 6521,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Student Group",
        "Grade",
        "Percent Enrolled",
        "Enrollment Count",
        "Total Count of Students",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Aggregate Public Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20Aggregate%20Public%20Data_1.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 72,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Enrollment",
       "n_rows": 6521,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Student Group",
        "Grade",
        "Percent Enrolled",
        "Enrollment Count",
        "Total Count of Students",
        "School Year"
       ]
      },
      {
       "name": "Student Group Scores",
       "n_rows": 1166,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Accountability Framework",
        "Student Group",
        "Student Group Points Earned",
        "Student Group Points Possible",
        "Student Group Score",
        "School Year"
       ]
      },
      {
       "name": "Metric Scores by Framework",
       "n_rows": 3486,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Accountability Framework",
        "Metric Name",
        "Total Points Earned",
        "Total Points Possible",
        "Percent of Points Earned"
       ]
      },
      {
       "name": "Framework Scores",
       "n_rows": 271,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Accountability Framework",
        "Framework Points Earned",
        "Framework Points Possible",
        "Framework Score",
        "Framework Weight",
        "Weighted Framework Score",
        "School Year"
       ]
      },
      {
       "name": "School Scores",
       "n_rows": 200,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "School Score",
        "School Year"
       ]
      },
      {
       "name": "LEA Student Group Scores",
       "n_rows": 421,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      },
      {
       "name": "State Student Group Scores",
       "n_rows": 28,
       "columns": [
        "Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card AP IB and SAT – Metric Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20AP%20IB%20and%20SAT%20-%20Metric%20Scores_0.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "series": "Advanced Coursework (AP, IB & SAT)",
     "label": "2023",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 27,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 1441,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 661,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 217,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Report Card Attendance - Metric Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20Attendance%20-%20Metric%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "attendance"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 20,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 54,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 9301,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 2445,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 217,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 361,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 10123,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 3329,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Directory Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20School%20Directory%20-%20Data%20%282023%29.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "profiles"
     ],
     "tabs": [
      {
       "name": "Overview",
       "n_rows": 5,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Profile Data SY2022-2023",
       "n_rows": 251,
       "columns": [
        "School ID",
        "School Name",
        "LEA ID",
        "LEA Name",
        "Sector",
        "School Type",
        "Monday Instructional Hours",
        "Tuesday Instructional Hours",
        "Wednesday Instructional Hours",
        "Thursday Instructional Hours",
        "Friday Instructional Hours",
        "Pre-Kindergarten (3) Instructional Hours",
        "Pre-Kindergarten (4) Instructional Hours",
        "Kindergarten Instructional Hours",
        "Telephone Number",
        "School Website",
        "School Twitter Information",
        "School Facebook Information",
        "School Instagram Information",
        "School Address",
        "School Ward",
        "School Uniform Policy",
        "Before Care Availability",
        "Before Care Cost",
        "After Care Availability",
        "After Care Cost",
        "School Programs",
        "Available Extracuricular and Enrichment Activities"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card CLASS - Metric Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20CLASS%20-%20Metric%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "school-climate"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 16,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 22,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 442,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 118,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Graduation and College Enrollment - Metric Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20Graduation%20and%20College%20Enrollment%20-%20Metric%20Scores_0.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "graduation",
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 27,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 359,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 2848,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 1343,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Student Movement - Metric Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2223%20DC%20School%20Report%20Card%20Student%20Movement%20-%20Metric%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "student-movement"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 20,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 54,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 7322,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 1818,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 89,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 289,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 4021,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 1276,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card – School Summative Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20-%20Summative%20Score%20Data%20%282023%29.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 10,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "All Schools",
       "n_rows": 200,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Summative School Score",
        "Elementary School",
        "Middle School",
        "High School"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card - Discipline Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Discipline%20Data%20%282023%29.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "discipline"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 34,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 1009,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 49897,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 14701,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 4985,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Assessment Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2023%20DC%20School%20Report%20Card%20Assessment-%20Metric%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 20,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 84,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 13951,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 16501,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 3691,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 5401,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 361,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 1153,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year",
        "School Framework"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Floors and Targets Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2023%20DC%20School%20Report%20Card%20Floors%20and%20Targets%20Public%20Data.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 8,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Floors and Targets",
       "n_rows": 376,
       "columns": [
        "Metric Name",
        "School Framework",
        "Student Group",
        "Floor",
        "Target",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Aggregate Enrollment Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Aggregate%20Enrollment%20Data.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 12,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 17,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Ever Enrolled Population",
       "n_rows": 6135,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Student Group",
        "Grade",
        "Percent Enrolled",
        "Enrollment Count",
        "Total Count of Students",
        "School Year"
       ]
      },
      {
       "name": "Audit Population",
       "n_rows": 6080,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Student Group",
        "Grade",
        "Percent Enrolled",
        "Audit Count",
        "Total Number of Student in Audit",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card - School Accountability Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Aggregate%20Public%20Data.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 16,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 92,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Directory",
       "n_rows": 253,
       "columns": [
        "LEA Code",
        "School Name",
        "School Code",
        "School Type",
        "Ward",
        "Address",
        "Phone Number",
        "Web Address",
        "Leader Title",
        "Leader Name"
       ]
      },
      {
       "name": "Enrollment",
       "n_rows": 6135,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Student Group",
        "Grade",
        "Percent Enrolled",
        "Enrollment Count",
        "Total Count of Students",
        "School Year"
       ]
      },
      {
       "name": "Student Group Scores",
       "n_rows": 1259,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Accountability Framework",
        "Student Group",
        "Student Group Points Earned",
        "Student Group Points Possible",
        "Student Group Score",
        "Framework Points Earned",
        "Framework Points Possible",
        "School Year"
       ]
      },
      {
       "name": "Framework Scores",
       "n_rows": 246,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Accountability Framework",
        "Framework Points Earned",
        "Framework Points Possible",
        "Framework Score",
        "Framework Weight",
        "Weighted Framework Score",
        "School Year"
       ]
      },
      {
       "name": "School Scores",
       "n_rows": 208,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "School Score",
        "School Year"
       ]
      },
      {
       "name": "LEA Student Group Scores",
       "n_rows": 518,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      },
      {
       "name": "State Student Group Scores",
       "n_rows": 28,
       "columns": [
        "Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card AP IB and SAT - Metric Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20AP%20IB%20and%20SAT%20-%20Metric%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "series": "Advanced Coursework (AP, IB & SAT)",
     "label": "2022",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 12,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 30,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 429,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 3771,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 8386,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Assessment – Metric Scores",
     "url": "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xbjixab1cegi868y205be1duiahwb20t&file_id=f_1267017259127",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 12,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 84,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 108373,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 409012,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 3779,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 22101,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 66561,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 1713,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Attendance - Metric Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Attendance%20-%20Metric%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "attendance"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 14,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 59,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 429,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 13846,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 53236,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 857,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 19046,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 60516,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card CLASS - Metric Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20CLASS%20-%20Metric%20Scores%20%284.3.23%29.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "school-climate"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 13,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 27,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 106,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 433,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Discipline - Metric Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Discipline%20-%20Metric%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "discipline"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 39,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 1499,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 62791,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 226591,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 5993,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Graduation and College Enrollment - Metric Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Graduation%20and%20College%20Enrollment%20-%20Metric%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "graduation",
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 13,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 32,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 536,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 5851,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 12676,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Finance Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20School%20Finance%20Data%20%282%29.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "finance"
     ],
     "series": "School Finance / Per-Pupil Expenditures",
     "label": "2022",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 12,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 69,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Finance",
       "n_rows": 10,
       "columns": [
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "LEA Finance (multi-school)",
       "n_rows": 271,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "School Finance (multi-school)",
       "n_rows": 2896,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "School Finance (single-school)",
       "n_rows": 442,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Student Movement - Metric Scores",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Student%20Movement%20-%20Metric%20Scores_0.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "student-movement"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 14,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 61,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 120,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 3244,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 12537,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Framework Scores",
       "n_rows": 302,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Framework Scores",
       "n_rows": 3322,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Framework Scores",
       "n_rows": 9865,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Teachers and School Leaders",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2122%20DC%20School%20Report%20Card%20Teachers%20and%20School%20Leaders%20-%20Metric%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "educators"
     ],
     "series": "Educators (Teachers & School Leaders)",
     "label": "2022",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 6,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 13,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Teacher and School Leader Staff",
       "n_rows": 8248,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Subgroup",
        "Metric",
        "MetricScore",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2021 DC School Report Card Aggregate Enrollment Metrics",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Aggregate%20Enrollment%20Metrics_1.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 13,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 16,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Ever Enrolled Population",
       "n_rows": 5992,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Student Group",
        "Grade",
        "Percent Enrolled",
        "Enrollment Count",
        "Total Count of Students",
        "School Year"
       ]
      },
      {
       "name": "Audit Population",
       "n_rows": 5975,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Student Group",
        "Grade",
        "Percent Enrolled",
        "Audit Count",
        "Total Number of Student in Audit",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2021 DC School Report Card Alternative School Metrics",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Alternative%20Schools%20Metrics.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 30,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Scores by Framework",
       "n_rows": 1599,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Scores by Framework",
       "n_rows": 1223,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Scores by Framework",
       "n_rows": 283,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2021 DC School Report Card AP, IB and SAT Metrics",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20AP%20IB%20and%20SAT%20Metrics.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "series": "Advanced Coursework (AP, IB & SAT)",
     "label": "2021",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 27,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Metric Scores",
       "n_rows": 12409,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Metric Scores",
       "n_rows": 5547,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Metric Scores",
       "n_rows": 377,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2021 DC School Report Card Attendance Metrics",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Attendance%20Metrics%20%281%29.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "attendance"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 20,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 54,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Metric Scores",
       "n_rows": 56683,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Scores by Framework",
       "n_rows": 62981,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Metric Scores",
       "n_rows": 14101,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Scores by Framework",
       "n_rows": 18895,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Metric Scores",
       "n_rows": 317,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Scores by Framework",
       "n_rows": 881,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2021 DC School Report Card Directory Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Directory%20Data.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "profiles"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 5,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 13,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Directory",
       "n_rows": 249,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "School Ward",
        "Address",
        "Phone Number",
        "Web Address",
        "Leader Title",
        "Leader Name"
       ]
      }
     ]
    },
    {
     "name": "2021 DC School Report Card Graduation and College Enrollment Metrics",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Graduation%20and%20College%20Enrollment%20Metrics.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "graduation",
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 19,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 27,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Metric Scores",
       "n_rows": 17203,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Metric Scores",
       "n_rows": 8273,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Metric Scores",
       "n_rows": 471,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2021 DC School Report Card Learning Environment Metrics",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Learning%20Environment%20Data_0.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "school-climate"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 7,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 14,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "In-Person Rate",
       "n_rows": 731,
       "columns": [
        "Month",
        "Grade Band",
        "Ward",
        "Percent of time In-Person",
        "School Year"
       ]
      },
      {
       "name": "Learning Environment",
       "n_rows": 8779,
       "columns": [
        "Month",
        "Grade Band",
        "Ward",
        "Student Group",
        "Learning Environment",
        "Percent of Students in Learning Environment",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2021 DC School Report Card Student Movement Metrics",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Student%20Movement%20Metrics.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "student-movement"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 20,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 54,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Metric Scores",
       "n_rows": 16730,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Scores by Framework",
       "n_rows": 15005,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Metric Scores",
       "n_rows": 4112,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Scores by Framework",
       "n_rows": 4659,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Metric Scores",
       "n_rows": 111,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Scores by Framework",
       "n_rows": 281,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2021 DC School Report Card Teacher and School Leader Metrics",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20Teacher%20and%20School%20Leader%20Metrics.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "educators"
     ],
     "series": "Educators (Teachers & School Leaders)",
     "label": "2021",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 12,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 12,
       "columns": [
        "Field Name",
        "Variable Type",
        "Description",
        "Allowable Values"
       ]
      },
      {
       "name": "Teacher and School Leader Staff",
       "n_rows": 4338,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Subgroup",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2021 DC School Report Card Per-Pupil Expenditures File",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021%20DC%20School%20Report%20Card%20School%20Finance.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "finance"
     ],
     "series": "School Finance / Per-Pupil Expenditures",
     "label": "2021",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 11,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 69,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Finance",
       "n_rows": 10,
       "columns": [
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "LEA Finance (multi-school)",
       "n_rows": 271,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "School Finance (multi-school)",
       "n_rows": 2911,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      },
      {
       "name": "School Finance (single-school)",
       "n_rows": 442,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Finance Disaggregation",
        "Value",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2020 DC School Report Card Aggregate Data File",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2020%20DC%20School%20Report%20Card%20Aggregate%20Public%20Data.xlsx",
     "kind": "xlsx",
     "year": "2020",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 15,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 36,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Directory",
       "n_rows": 244,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "School Ward",
        "Address",
        "Phone Number",
        "Web Address",
        "Leader Title",
        "Leader Name"
       ]
      },
      {
       "name": "Enrollment",
       "n_rows": 4942,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Student Group",
        "Grade",
        "Percent Enrolled",
        "Enrollment Count",
        "Total Count of Students",
        "School Year"
       ]
      },
      {
       "name": "Teacher and Health Staff",
       "n_rows": 5081,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2020 DC School Report Card Cross-Tabulated Data File",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2020%20DC%20School%20Report%20Card%20Public%20Data%20-%20Metric%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2020",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 19,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 27,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Metric Scores",
       "n_rows": 17299,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Metric Scores",
       "n_rows": 8185,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Metric Scores",
       "n_rows": 466,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2020 DC School Report Card Per-Pupil Expenditures File",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2020%20DC%20School%20Report%20Card%20Per-Pupil%20Expenditures%20File.xlsx",
     "kind": "xlsx",
     "year": "2020",
     "status": "ok",
     "topics": [
      "finance"
     ],
     "series": "School Finance / Per-Pupil Expenditures",
     "label": "2020",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 11,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 93,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Finance",
       "n_rows": 5,
       "columns": [
        "Per Pupil Expenditures",
        "Per Pupil Expenditures by Type"
       ]
      },
      {
       "name": "Multi-Site LEA Finance",
       "n_rows": 22,
       "columns": [
        "Per Pupil Expenditures",
        "Per Pupil Expenditures by Type"
       ]
      },
      {
       "name": "Multi-Site School Finance",
       "n_rows": 199,
       "columns": [
        "Per Pupil Expenditures",
        "Per Pupil Expenditures by Type"
       ]
      },
      {
       "name": "Single-Site School Finance",
       "n_rows": 44,
       "columns": [
        "Per Pupil Expenditures",
        "Per Pupil Expenditures by Type"
       ]
      }
     ]
    },
    {
     "name": "2019 DC School Report Card and STAR Framework Data File",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2019%20DC%20School%20Report%20Card%20Aggregate%20Public%20Data_.xlsx",
     "kind": "xlsx",
     "year": "2019",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 18,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 76,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Directory",
       "n_rows": 239,
       "columns": [
        "LEA Code",
        "School Name",
        "School Code",
        "School Type",
        "School Ward",
        "Address",
        "Phone Number",
        "Web Address",
        "Leader Title",
        "Leader Name"
       ]
      },
      {
       "name": "Enrollment",
       "n_rows": 4887,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Student Group",
        "Grade",
        "Percent Enrolled",
        "Enrollment Count",
        "Total Count of Students"
       ]
      },
      {
       "name": "STAR Student Group Scores",
       "n_rows": 1199,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Accountability Framework",
        "Student Group",
        "Student Group Points Earned",
        "Student Group Points Possible",
        "Student Group Score",
        "Framework Points Earned",
        "Framework Points Possible",
        "School Year"
       ]
      },
      {
       "name": "STAR Framework Scores",
       "n_rows": 252,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Accountability Framework",
        "Framework Weight",
        "Framework Points Earned",
        "Framework Points Possible",
        "Framework STAR Score",
        "Framework STAR Rating",
        "School Year"
       ]
      },
      {
       "name": "STAR Scores",
       "n_rows": 207,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "STAR Score",
        "STAR Rating",
        "School Year"
       ]
      },
      {
       "name": "LEA Student Group Scores",
       "n_rows": 227,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      },
      {
       "name": "State Student Group Scores",
       "n_rows": 34,
       "columns": [
        "Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2019 DC School Report Card and STAR Framework Cross-Tabulated Data File",
     "url": "https://app.box.com/s/tb3ipg32wo48di3ph58llnpim5632fn9",
     "kind": "xlsx",
     "year": "2019",
     "status": "needs_browser",
     "topics": [
      "accountability"
     ],
     "tabs": []
    },
    {
     "name": "2019 DC School Report Card Per-Pupil Expenditures File",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%20Report%20Card_School%20Finance%20Public%20File.xlsx",
     "kind": "xlsx",
     "year": "2019",
     "status": "ok",
     "topics": [
      "finance"
     ],
     "series": "School Finance / Per-Pupil Expenditures",
     "label": "2019",
     "tabs": [
      {
       "name": "Data Note",
       "n_rows": 10,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 93,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "State Finance",
       "n_rows": 3,
       "columns": [
        "Per Pupil Expenditures",
        "Per Pupil Expenditures by Type"
       ]
      },
      {
       "name": "Multi-Site LEA Finance",
       "n_rows": 22,
       "columns": [
        "Per Pupil Expenditures",
        "Per Pupil Expenditures by Type"
       ]
      },
      {
       "name": "Multi-Site School Finance",
       "n_rows": 190,
       "columns": [
        "Per Pupil Expenditures",
        "Per Pupil Expenditures by Type"
       ]
      },
      {
       "name": "Single-Site School Finance",
       "n_rows": 45,
       "columns": [
        "Per Pupil Expenditures",
        "Per Pupil Expenditures by Type"
       ]
      }
     ]
    },
    {
     "name": "2018 DC School Report Card and STAR Framework Data Files",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018%20DC%20School%20Report%20Card%20and%20STAR%20Framework%20Public%20Data_2.xlsx",
     "kind": "xlsx",
     "year": "2018",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 26,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 169,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School Directory",
       "n_rows": 237,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Address",
        "Phone Number",
        "Web Address",
        "Leader Title",
        "Leader Name"
       ]
      },
      {
       "name": "Enrollment",
       "n_rows": 6766,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Student Group",
        "Grade",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "STAR Metric Scores",
       "n_rows": 17902,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "School Framework",
        "Student Group",
        "Domain",
        "Metric",
        "Metric N",
        "Metric Score",
        "Floor",
        "Target",
        "Metric Points Earned",
        "Metric Points Possible"
       ]
      },
      {
       "name": "STAR Student Group Scores",
       "n_rows": 1164,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "School Framework",
        "Student Group",
        "Student Group Points Earned",
        "Student Group Points Possible",
        "Student Group Score",
        "Framework Points Earned",
        "Framework Points Possible"
       ]
      },
      {
       "name": "STAR Framework Scores",
       "n_rows": 249,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "School Framework",
        "Framework Weight",
        "Framework Points Earned",
        "Framework Points Possible",
        "Framework STAR Score",
        "Framework STAR Rating"
       ]
      },
      {
       "name": "STAR Scores",
       "n_rows": 204,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "STAR Score",
        "STAR Rating"
       ]
      },
      {
       "name": "School Report Card Scores",
       "n_rows": 42836,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "School Type",
        "Ward",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Report Card Scores",
       "n_rows": 4617,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Student Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "LEA STAR Metric Scores",
       "n_rows": 3089,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "LEA Student Group Scores",
       "n_rows": 220,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      },
      {
       "name": "State Report Card Scores",
       "n_rows": 584,
       "columns": [
        "Student/School Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "State STAR Metric Scores",
       "n_rows": 475,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "School Year"
       ]
      },
      {
       "name": "State Student Group Scores",
       "n_rows": 34,
       "columns": [
        "School Framework",
        "Student Group",
        "Student Group Score",
        "School Year"
       ]
      }
     ]
    },
    {
     "name": "2018 STAR Framework Cross-Tabulated Student Group Data File",
     "url": "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=bzcnvfcfptfgn1937tphy4x8tzvrl27d&file_id=f_2115750109619",
     "kind": "xlsx",
     "year": "2018",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 20,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "School STAR Metric Scores",
       "n_rows": 167441,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "School Overall Scores",
       "n_rows": 148489,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Name",
        "School Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA STAR Metric Scores",
       "n_rows": 60476,
       "columns": [
        "LEA Name",
        "LEA Code",
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "LEA Overall Scores",
       "n_rows": 44906,
       "columns": [
        "LEA Name",
        "LEA Code",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State STAR Metric Scores",
       "n_rows": 4629,
       "columns": [
        "School Framework",
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      },
      {
       "name": "State Overall Scores",
       "n_rows": 2180,
       "columns": [
        "Student Group",
        "Metric",
        "Metric Score",
        "Metric N",
        "School Year"
       ]
      }
     ]
    }
   ],
   "search": "dc school report card resource library (downloads) osse the single richest source of downloadable school-level osse data. per-year filenames are inconsistent — verify each year's exact link on the page. excel (.xlsx) files (some via box) + pdf technical guides assessment attendance graduation discipline enrollment demographics finance educators test scores proficiency parcc dc cape msaa reading math truancy absenteeism chronic absent grad rate diploma acgr dropout suspension expulsion suspended discipline students headcount count population race ethnicity special education english learner at-risk poverty spending money budget cost dollars per-pupil expenditure funding teacher staff workforce principal retention 2026 metric calculation confirmation (mcc) data dictionary release schedule mcc phase sheet release date lea ost deadline lea certification date ela statewide assessments sheet: ela statewide assessments (participation and performance) math statewide assessments sheet: math statewide assessments (participation and achievement) metric scores - phase i sheet: metric scores - phase i access growth sheet: access growth adjusted achievement  sheet: adusted achievement chronic absenteeism sheet: chronic absenteeism pre-k chronic absenteeism sheet: pre-k chronic absenteeism attendance growth sheet: attendance growth class sheet: class post-secondary enrollment sheet: post-secondary enrollment directory - profile sheet: directory - profile directory- before after care sheet: before after care directory - message from school sheet: directory - message from school directory - transportation sheet: directory - transportation directory - parent engagement sheet: directory - parent engagement 8th-9th grade transition sheet: 8th to 9th (alt only) metric scores - phase ii sheet: metric scores - phase ii advanced coursework - partic sheet: advanced coursework - participation advanced coursework - perform sheet: advanced coursework - performance acgr sheet: acgr other student assessments sheet: other student assessments re-enrollment sheet: re-enrollment sat benchmark sheet: sat benchmark science statewide assessments sheet: science statewide assessments ela - growth sheet: ela - growth math - growth sheet: math - growth mobility - lea level sheet: mobility - lea level mobility - school level  sheet: mobility - school level academic persistence sheet: academic persistence (alternative school framework only) secondary completion sheet: secondary completion (alternative school framework only) metric scores - phase iii sheet: metric scores - phase iii 2025 metric calculation confirmation (mcc) data dictionary release schedule mcc phase sheet release to leas lea ost deadline lea certification deadline ela statewide assessments sheet: ela statewide assessments (participation and achievement) math statewide assessments sheet: math statewide assessments (participation and achievement) metric scores - phase i sheet: metric scores - phase i access growth sheet: access growth adjusted achievement  sheet: adusted achievement chronic absenteeism sheet: chronic absenteeism pre-k chronic absenteeism sheet: pre-k chronic absenteeism attendance growth sheet: attendance growth class sheet: class discipline sheet: discipline post-secondary enrollment sheet: post-secondary enrollment directory - profile sheet: directory - profile directory- before after care sheet: before after care directory - message from school sheet: directory - message from school directory - transportation sheet: directory - transportation directory - parent engagement sheet: directory - parent engagement 8th to 9th (alt only) sheet: 8th to 9th (alt only) metric scores - phase ii sheet: metric scores - phase ii advanced coursework - partic sheet: advanced coursework - participation advanced coursework - perform sheet: advanced coursework - performance graduation sheet: graduation other student assessments sheet: other student assessments re-enrollment sheet: re-enrollment sat benchmark sheet: sat benchmark science statewide assessments sheet: science statewide assessments ela - growth sheet text math - growth sheet text mobility - lea level sheet: mobility - lea level mobility - school level  sheet: mobility - school level academic persistence (alt only) sheet: academuc persistence (alt only) secondary completion (alt only) sheet: secondary completion (alt only) metric scores - phase iii sheet: metric scores - phase iii dc school report card advanced coursework and sat – metric scores (2025) data notes school year 2024-25 dc school report card advanced coursework and sat metric scores office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year state framework scores school framework student group metric metric score metric n school year lea framework scores lea name lea code school framework student group metric metric score metric n school year school framework scores lea name lea code school name school code school framework student group metric metric score metric n school year dc school report card assessment – metric scores (2025) data notes school year 2024-25 dc school year report card assessment data office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year state framework scores school framework student group metric metric score metric n school year lea framework scores lea name lea code school framework student group metric metric score metric n school year school framework scores lea name lea code school name school code school framework student group metric metric score metric n school year dc school report card attendance – metric scores (2025) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year state framework scores school framework student group metric metric score metric n school year lea framework scores lea name lea code school framework student group metric metric score metric n school year school framework scores lea name lea code school name school code school framework student group metric metric score metric n school year dc school report card class – metric scores (2025) data notes office of the state superintendent of education data dictionary office of the state superintendent of education lea framework scores lea name lea code school framework student group metric metric score metric n school year school framework scores lea name lea code school name school code school framework student group metric metric score metric n school year dc school report card student movement - metric scores (2025) data notes school year 2024-25 dc school report card student movement data office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year state framework scores school framework student group metric metric score metric n school year school framework scores lea name lea code school name school code school framework student group metric metric score metric n school year lea framework scores lea name lea code school framework student group metric metric score metric n school year dc school report card – dc says grades 3-12 student metric scores (2025) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state gradeband scores gradeband metric metric score school year lea gradeband scores lea name lea code gradeband metric metric score school year school gradeband scores lea name lea code school name school code gradeband metric metric score school year dc school report card – dc says grades pk-12 family metric scores (2025) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores group metric metric score school year lea overall scores lea name lea code group metric metric score school year school overall scores lea name lea code school name school code group metric metric score school year dc school report card – dc says grades pk-12 staff metric scores (2025) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores group metric metric score school year lea overall scores lea name lea code group metric metric score school year school overall scores lea name lea code school name school code group metric metric score school year dc school report card – dc says adult student and staff metric scores (2025) data notes office of the state superintendent of education data dictionary office of the state superintendent of education student state gradeband scores gradeband metric metric score school year student lea-school gradeband lea name lea code school name school code gradeband metric metric score school year staff state overall scores group metric metric score school year staff lea-school overall lea name lea code school name school code group metric metric score school year dc school report card discipline - metric scores (2025) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year state framework scores school framework student group metric metric score metric n school year dc school report card graduation and college enrollment – metric scores (2025) data notes school year 2024-25 dc school report card graduation and college enrollment data office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year state framework scores school framework student group metric metric score metric n school year lea framework scores lea name lea code school framework student group metric metric score metric n school year school framework scores lea name lea code school name school code school framework student group metric metric score metric n school year dc school report card lea course catalog (2025) data notes office of the state superintendent of education data dictionary school year 2025-26 dc school report card course catalog data office of the state superintendent of education course catalog lea code lea name school code school name school type ward osse subject area lea course name osse course code osse course title literacy curriculum used math curriculum used minimum course grade level maximum course grade level course credit offered (high school courses only) dual language or world language course course specifically designed for students for disabilities course specifically designed for english learners advanced placement (ap) or international baccalaureate (ib) course career and technical education (cte) indicator dual enrollment course indicator dc school report card school directory information (2025) overview office of the state superintendent of education school profile data 2024-2025 school id school name lea id lea name sector monday instructional hours tuesday instructional hours wednesday instructional hours thursday instructional hours friday instructional hours pre-kindergarten (3) instructional hours pre-kindergarten (4) instructional hours kindergarten instructional hours telephone number school website school twitter information school facebook information school instagram information school address school ward school uniform policy before care availability before care cost after care availability after care cost school programs offered extracurricular and enrichment activities dc school report card accountability scores (2025) data notes school year 2024-25 dc school report card aggregate data office of the state superintendent of education data dictionary office of the state superintendent of education student group scores lea code lea name school code school name school type ward accountability framework student group student group points earned student group points possible student group score school year metric scores by framework lea code lea name school code school name accountability framework metric name total points earned total points possible percent of points earned framework scores lea code lea name school code school name school type ward accountability framework framework points earned framework points possible framework score framework weight weighted framework score school year school scores lea code lea name school code school name school type ward school score school year state student group scores framework student group student group score school year lea student group scores lea code lea name framework student group student group score school year framework percentile rank lea code lea name school code school name framework sub- framework framework percentile rank school year dc school report card floors and targets (2025) data notes school year 2024-25 dc school report card floors and targets office of the state superintendent of education data dictionary office of the state superintendent of education floors and targets metric name school framework student group floor target school year dc school report card state-level msaa participation data (2025) data notes and business rules 2024-25 msaa participation results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes participation aggregation level lea code school code metric assessment name subject student group student group value enrolled grade or course school framework count total count percent dc school report card state-level dc cape science and dlm cross tabulated data (2025) data notes and business rules 2024-25 statewide cross-tabulated science assessment results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes meeting, exceeding aggregation level lea code school code metric assessment name subject grade of enrollment student group student group value count total count percent performance level aggregation level lea code school code metric assessment name subject grade of enrollment student group student group value count total count percent participation aggregation level lea code school code metric assessment name subject grade of enrollment student group student group value count total count percent dc school report card state-level dc cape and msaa cross-tabulated data (2025) data notes and business rules 2024-25 statewide cross-tabulated assessment results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes meeting,exceeding aggregation level lea code school code metric assessment name subject student group student group value enrolled grade or course count total count percent approaching, meeting, exceeding aggregation level lea code school code metric assessment name subject student group student group value enrolled grade or course count total count percent performance level aggregation level lea code school code metric assessment name subject student group student group value enrolled grade or course count total count percent participation aggregation level lea code school code assessment name subject student group student group value enrolled grade or course count total count percent metric dc school report card state overall assessment growth metric scores cross tabulated (2025) data notes 2024-25 statewide assessment cross-tabulated growth scores office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year dc school report card state overall acgr metric scores cross tabulated (2025) data notes 2024-25 statewide cross-tabulated adjusted cohort graduation rates (acgr) office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year dc school report card - progress toward long term goals data notes 2024-25 progress toward long-term achievement goals office of the state superintendent of education data dictionary sheet field name variable type allowable values notes state level student group metric grade band goal score difference lea level lea code lea name student group metric grade band goal score difference school level lea code lea name school code school name student group metric grade band goal score difference dc school report card accountability scores (2024) data notes office of the state superintendent of education data dictionary office of the state superintendent of education student group scores lea code lea name school code school name school type ward accountability framework student group student group points earned student group points possible student group score school year metric scores by framework lea code lea name school code school name accountability framework metric name total points earned total points possible percent of points earned framework scores lea code lea name school code school name school type ward accountability framework framework points earned framework points possible framework score framework weight weighted framework score school year school scores lea code lea name school code school name school type ward school score school year lea student group scores lea code lea name framework student group student group score school year state student group scores framework student group student group score school year framework percentile rank lea code lea name school code school name framework sub- framework framework percentile rank school year dc school report card advanced coursework and sat-metric scores (2024) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year dc school report card aggregate enrollment data (2024) data notes office of the state superintendent of education data dictionary office of the state superintendent of education ever enrolled population lea code lea name school code school name entity type ward student group grade percent enrolled enrollment count total count of students school year dc school report card assessment – metric scores (2024) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year state framework scores student group metric metric score metric n school year school framework school framework scores lea name lea code school name school code student group metric metric score metric n school year school framework lea framework scores lea name lea code student group metric metric score metric n school year school framework dc school report card assessment science – metric scores (2024) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year dc school report card attendance – metric scores (2024) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year state framework scores student group metric metric score metric n school year school framework school framework scores lea name lea code school name school code student group metric metric score metric n school year school framework lea framework scores lea name lea code student group metric metric score metric n school year school framework dc school report card class – metric scores (2024) data notes office of the state superintendent of education data dictionary office of the state superintendent of education school framework scores lea name lea code school name school code student group metric metric score metric n school year school framework lea framework scores lea name lea code student group metric metric score metric n school year school framework dc school report card discipline – metric scores (2024) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year state framework scores student group metric metric score metric n school year school framework dc school report card floors and targets (2024) data notes office of the state superintendent of education data dictionary office of the state superintendent of education floors and targets metric name school framework student group floor target school year dc school report card graduation and college enrollment – metric scores (2024) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year dc school report card school directory information (2024) overview office of the state superintendent of education school profile data 2023-2024 school id school name lea id lea name sector school type monday instructional hours tuesday instructional hours wednesday instructional hours thursday instructional hours friday instructional hours pre-kindergarten (3) instructional hours pre-kindergarten (4) instructional hours kindergarten instructional hours telephone number school website school twitter information school facebook information school instagram information school address school ward school uniform policy before care availability before care cost after care availability after care cost school programs available extracuricular and enrichment activities dc school report card student movement – metric scores (2024) data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year state framework scores student group metric metric score metric n school year school framework school framework scores lea name lea code school name school code student group metric metric score metric n school year school framework lea framework scores lea name lea code student group metric metric score metric n school year school framework dc school report card – educator data (2024) overview (c&d) office of the state superintendent of education demographics_staff_sea reporting level total staff citywide female male gender other/unknown american indian/alaskan native american indian/alaskan native female american indian/alaskan native male american indian/alaskan native gender other/unknown asian asian female asian male asian gender other/unknown black/african american black/african american female black/african american male black/african american gender other/unknown hispanic/latino hispanic/latino female hispanic/latino male hispanic/latino gender other/unknown two or more races two or more races female two or more races male two or more races gender other/unknown pacific islander/native hawaiian pacific islander/native hawaiian female pacific islander/native hawaiian male pacific islander/native hawaiian gender other/unknown white/caucasian white/caucasian female white/caucasian male white/caucasian gender other/unknown race/ethnicity other/unknown race/ethnicity other/unknown female race/ethnicity other/unknown male race/ethnicity other/unknown gender other/unknown demographics_staff_lea lea code lea name sector total staff at this lea female male gender other/unknown american indian/alaskan native american indian/alaskan native female american indian/alaskan native male american indian/alaskan native gender other/unknown asian asian female asian male asian gender other/unknown black/african american black/african american female black/african american male black/african american gender other/unknown hispanic/latino hispanic/latino female hispanic/latino male hispanic/latino gender other/unknown two or more races two or more races female two or more races male two or more races gender other/unknown pacific islander/native hawaiian pacific islander/native hawaiian female pacific islander/native hawaiian male pacific islander/native hawaiian gender other/unknown white/caucasian white/caucasian female white/caucasian male white/caucasian gender other/unknown race/ethnicity other/unknown race/ethnicity other/unknown female race/ethnicity other/unknown male race/ethnicity other/unknown gender other/unknown demographics_tch_sea reporting level total teachers citywide female male gender other/unknown american indian/alaskan native american indian/alaskan native female american indian/alaskan native male american indian/alaskan native gender other/unknown asian asian female asian male asian gender other/unknown black/african american black/african american female black/african american male black/african american gender other/unknown hispanic/latino hispanic/latino female hispanic/latino male hispanic/latino gender other/unknown two or more races two or more races female two or more races male two or more races gender other/unknown pacific islander/native hawaiian pacific islander/native hawaiian female pacific islander/native hawaiian male pacific islander/native hawaiian gender other/unknown white/caucasian white/caucasian female white/caucasian male white/caucasian gender other/unknown race/ethnicity other/unknown race/ethnicity other/unknown female race/ethnicity other/unknown male race/ethnicity other/unknown gender other/unknown demographics_sl_sea reporting level total school leaders citywide female male gender other/unknown american indian/alaskan native american indian/alaskan native female american indian/alaskan native male american indian/alaskan native gender other/unknown asian asian female asian male asian gender other/unknown black/african american black/african american female black/african american male black/african american gender other/unknown hispanic/latino hispanic/latino female hispanic/latino male hispanic/latino gender other/unknown two or more races two or more races female two or more races male two or more races gender other/unknown pacific islander/native hawaiian pacific islander/native hawaiian female pacific islander/native hawaiian male pacific islander/native hawaiian gender other/unknown white/caucasian white/caucasian female white/caucasian male white/caucasian gender other/unknown race/ethnicity other/unknown race/ethnicity other/unknown female race/ethnicity other/unknown male race/ethnicity other/unknown gender other/unknown demographics_tch_lea lea code lea name sector total teachers at this lea female male gender other/unknown american indian/alaskan native american indian/alaskan native female american indian/alaskan native male american indian/alaskan native gender other/unknown asian asian female asian male asian gender other/unknown black/african american black/african american female black/african american male black/african american gender other/unknown hispanic/latino hispanic/latino female hispanic/latino male hispanic/latino gender other/unknown two or more races two or more races female two or more races male two or more races gender other/unknown pacific islander/native hawaiian pacific islander/native hawaiian female pacific islander/native hawaiian male pacific islander/native hawaiian gender other/unknown white/caucasian white/caucasian female white/caucasian male white/caucasian gender other/unknown race/ethnicity other/unknown race/ethnicity other/unknown female race/ethnicity other/unknown male race/ethnicity other/unknown gender other/unknown demographics_sl_lea lea code lea name sector total school leaders at this lea female male gender other/unknown american indian/alaskan native american indian/alaskan native female american indian/alaskan native male american indian/alaskan native gender other/unknown asian asian female asian male asian gender other/unknown black/african american black/african american female black/african american male black/african american gender other/unknown hispanic/latino hispanic/latino female hispanic/latino male hispanic/latino gender other/unknown two or more races two or more races female two or more races male two or more races gender other/unknown pacific islander/native hawaiian pacific islander/native hawaiian female pacific islander/native hawaiian male pacific islander/native hawaiian gender other/unknown white/caucasian white/caucasian female white/caucasian male white/caucasian gender other/unknown race/ethnicity other/unknown race/ethnicity other/unknown female race/ethnicity other/unknown male race/ethnicity other/unknown gender other/unknown demographics_staff_sch lea code lea name school code school name sector ward of school total staff at this school female male gender other/unknown american indian/alaskan native american indian/alaskan native female american indian/alaskan native male american indian/alaskan native gender other/unknown asian asian female asian male asian gender other/unknown black/african american black/african american female black/african american male black/african american gender other/unknown hispanic/latino hispanic/latino female hispanic/latino male hispanic/latino gender other/unknown two or more races two or more races female two or more races male two or more races gender other/unknown pacific islander/native hawaiian pacific islander/native hawaiian female pacific islander/native hawaiian male pacific islander/native hawaiian gender other/unknown white/caucasian white/caucasian female white/caucasian male white/caucasian gender other/unknown race/ethnicity other/unknown race/ethnicity other/unknown female race/ethnicity other/unknown male race/ethnicity other/unknown gender other/unknown demographics_tch_sch lea code lea name school code school name sector ward of school total teachers at this school female male gender other/unknown american indian/alaskan native american indian/alaskan native female american indian/alaskan native male american indian/alaskan native gender other/unknown asian asian female asian male asian gender other/unknown black/african american black/african american female black/african american male black/african american gender other/unknown hispanic/latino hispanic/latino female hispanic/latino male hispanic/latino gender other/unknown two or more races two or more races female two or more races male two or more races gender other/unknown pacific islander/native hawaiian pacific islander/native hawaiian female pacific islander/native hawaiian male pacific islander/native hawaiian gender other/unknown white/caucasian white/caucasian female white/caucasian male white/caucasian gender other/unknown race/ethnicity other/unknown race/ethnicity other/unknown female race/ethnicity other/unknown male race/ethnicity other/unknown gender other/unknown demographics_sl_sch lea code lea name school code school name sector ward of school total school leaders at this school female male gender other/unknown american indian/alaskan native american indian/alaskan native female american indian/alaskan native male american indian/alaskan native gender other/unknown asian asian female asian male asian gender other/unknown black/african american black/african american female black/african american male black/african american gender other/unknown hispanic/latino hispanic/latino female hispanic/latino male hispanic/latino gender other/unknown two or more races two or more races female two or more races male two or more races gender other/unknown pacific islander/native hawaiian pacific islander/native hawaiian female pacific islander/native hawaiian male pacific islander/native hawaiian gender other/unknown white/caucasian white/caucasian female white/caucasian male white/caucasian gender other/unknown race/ethnicity other/unknown race/ethnicity other/unknown female race/ethnicity other/unknown male race/ethnicity other/unknown gender other/unknown gradeband_tch_sea grand band total teachers citywide total teachers in this grade band citywide percent teachers in this grade band citywide gradeband_tch_lea lea code lea name sector grand band total teachers at this lea total teachers in this grade band at this lea percent teachers in this grade band at this lea gradeband_tch_sch lea code lea name school code school name sector ward of school grand band total teachers at this school total teachers in this grade band at this school percent teachers in this grade band at this school student-teacher ratios_sea citywide student:teacher ratio student-staff ratios_sea citywide student:staff ratio student-teacher ratios_lea lea code lea name sector student:teacher ratio student-staff ratios_lea lea code lea name sector student:staff ratio student-teacher ratios_sch lea code lea name school code school name sector ward student:teacher ratio student-staff ratios_sch lea code lea name school code school name sector ward student:staff ratio overview (prep&perf) office of the state superintendent of education codebook (prep&perf) office of the state superintendent of education effective_tch_sea total sy 2023-24 teachers that were rated in sy 2022-23 citywide percent of sy 2023-34 teachers rated effective in sy 2022-23 citywide certified_tch_sea number of teachers (dcps only) number of teachers that hold a dc teaching certification (dcps only) percent teachers that hold a dc teaching certification (dcps only) infield_tch_sea number of teachers (dcps only) number of teachers that are teaching a subject infield (dcps only) percent teachers that are teaching a subject infield (dcps only) effective_tch_lea lea code lea name sector total sy 2023-24 teachers that were rated in sy 2022-23 at this lea percent of 2023-24 teachers rated effective in sy 2022-23 at this lea notes certified_tch_lea lea code lea name sector number of teachers (dcps only) number of teachers that hold a dc teaching certification (dcps only) percent teachers that hold a dc teaching certification (dcps only) infield_tch_lea lea code lea name sector number of teachers (dcps only) number of teachers that are teaching a subject infield (dcps only) percent teachers that are teaching a subject infield (dcps only) effective_tch_sch lea code lea name school code school name sector ward of school total sy 2023-24 teachers that were rated in sy 2022-23 at this school percent of sy 2023-24 teachers rated effective in sy 2022-23 at this school notes certified_tch_sch lea code lea name school code school name sector ward of school number of teachers at this school number of teachers that hold a dc teaching certification at this school percent teachers that hold a dc teaching certification at this school infield_tch_sch lea code lea name school code school name sector ward of school number of teachers at this school number of teachers that are teaching a subject infield at this school percent teachers that are teaching a subject infield at this school exp_tch_sea years of experience number of teachers citywide number of teachers in this experience category percent of teachers in this experience category exp_school_leader_sea years of experience number of school leaders citywide number of school leaders in this experience category percent of school leaders in this experience category exp_tch_lea lea code lea name sector years of experience number of teachers at this lea number of teachers in this experience category percent of teachers in this experience category exp_school_leader_lea lea code lea name sector years of experience number of school leaders at this lea number of school leaders in this experience category percent of school leaders in this experience category exp_tch_sch lea code lea name school code school name sector ward of school years of experience number of teachers at this school number of teachers in this experience category percent of teachers in this experience category exp_school_leader_sch lea code lea name school code school name sector ward of school years of experience number of school leaders at this school number of school leaders in this experience category percent of school leaders in this experience category overview (s&d) office of the state superintendent of education supply epps epp program total number of candidates and completers in 2022-23 total number of candidates and completers who were teaching in the 2023-24 schoo subject number of candidates and completers in this subject of training in 2022-23 2022-23 dc epp candidates and completers certified in this subject 2022-23 dc epp candidates and completers teaching this subject in sy 2023-24 number of candidates and completers who were teaching in the subject of training vacancies_sea subject number of vacant ftes in this subject area vacancies_lea lea code lea name sector subject number of vacant ftes in this subject area vacancies_sch lea code lea name school code school name sector ward of school subject number of vacant ftes in this subject area sheet38 metric calculation confirmation data dictionary summary office of the state superintendent of education metric scores sheet description ela - participation sheet description math - participation sheet description ela - acheivement sheet description math - acheivement sheet description adjusted achievement  sheet description access growth sheet description attendance growth sheet description chronic absenteeism sheet description pre-k chronic absenteeism sheet description class sheet description discipline sheet description post-secondary enrollment sheet description directory - profile sheet description directory- before after care sheet description directory - message from school sheet description directory - transportation sheet description directory - family engagement sheet description ela - growth sheet description math - growth sheet description graduation sheet description advanced coursework - partic sheet description advanced coursework - perform sheet description science - participation sheet description science- acheivement sheet description sat benchmark sheet description mobility - school level  sheet description mobility - lea level sheet description re-enrollment sheet description other student assessments sheet description dc school report card school finance data overview office of the state superintendent of education data dictionary office of the state superintendent of education state finance finance disaggregation value school year lea finance (multi-school) lea name lea code finance disaggregation value school year lea finance (single-school) lea name lea code finance disaggregation value school year school finance (multi-school) lea name lea code school name school code finance disaggregation value school year school finance (single-school) lea name lea code school name school code finance disaggregation value school year dc school report card common financial reporting standards overview office of the state superintendent of education state cfrs category finance disaggregation value school year lea cfrs lea name lea code category finance disaggregation value school year school cfrs lea name lea code school name school code category finance disaggregation value school year dc school report card aggregate enrollment data data notes office of the state superintendent of education data dictionary office of the state superintendent of education ever enrolled population lea code lea name school code school name entity type ward student group grade percent enrolled enrollment count total count of students school year dc school report card aggregate public data data notes office of the state superintendent of education data dictionary office of the state superintendent of education enrollment lea code lea name school code school name entity type ward student group grade percent enrolled enrollment count total count of students school year student group scores lea code lea name school code school name school type ward accountability framework student group student group points earned student group points possible student group score school year metric scores by framework lea code lea name school code school name accountability framework metric name total points earned total points possible percent of points earned framework scores lea code lea name school code school name school type ward accountability framework framework points earned framework points possible framework score framework weight weighted framework score school year school scores lea code lea name school code school name school type ward school score school year lea student group scores lea code lea name framework student group student group score school year state student group scores framework student group student group score school year dc school report card ap ib and sat – metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year state overall scores student group metric metric score metric n school year dc school report report card attendance - metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year state overall scores student group metric metric score metric n school year state framework scores student group metric metric score metric n school year school framework school framework scores lea name lea code school name school code student group metric metric score metric n school year school framework lea framework scores lea name lea code student group metric metric score metric n school year school framework dc school report card directory data overview office of the state superintendent of education school profile data sy2022-2023 school id school name lea id lea name sector school type monday instructional hours tuesday instructional hours wednesday instructional hours thursday instructional hours friday instructional hours pre-kindergarten (3) instructional hours pre-kindergarten (4) instructional hours kindergarten instructional hours telephone number school website school twitter information school facebook information school instagram information school address school ward school uniform policy before care availability before care cost after care availability after care cost school programs available extracuricular and enrichment activities dc school report card class - metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education school framework scores lea name lea code school name school code student group metric metric score metric n school year school framework lea framework scores lea name lea code student group metric metric score metric n school year school framework dc school report card graduation and college enrollment - metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year dc school report card student movement - metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year state overall scores student group metric metric score metric n school year state framework scores student group metric metric score metric n school year school framework school framework scores lea name lea code school name school code student group metric metric score metric n school year school framework lea framework scores lea name lea code student group metric metric score metric n school year school framework dc school report card – school summative scores data notes office of the state superintendent of education all schools lea code lea name school code school name summative school score elementary school middle school high school dc school report card - discipline data data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year state framework scores student group metric metric score metric n school year school framework dc school report card assessment data data notes office of the state superintendent of education data dictionary office of the state superintendent of education school overall scores lea name lea code school name school code student group metric metric score metric n school year school framework scores lea name lea code school name school code student group metric metric score metric n school year school framework lea overall scores lea name lea code student group metric metric score metric n school year lea framework scores lea name lea code student group metric metric score metric n school year school framework state overall scores student group metric metric score metric n school year state framework scores student group metric metric score metric n school year school framework dc school report card floors and targets data data notes office of the state superintendent of education data dictionary office of the state superintendent of education floors and targets metric name school framework student group floor target school year dc school report card aggregate enrollment data data notes office of the state superintendent of education data dictionary office of the state superintendent of education ever enrolled population lea code lea name school code school name entity type ward student group grade percent enrolled enrollment count total count of students school year audit population lea code lea name school code school name entity type ward student group grade percent enrolled audit count total number of student in audit school year dc school report card - school accountability data data notes office of the state superintendent of education data dictionary office of the state superintendent of education school directory lea code school name school code school type ward address phone number web address leader title leader name enrollment lea code lea name school code school name entity type ward student group grade percent enrolled enrollment count total count of students school year student group scores lea code lea name school code school name school type ward accountability framework student group student group points earned student group points possible student group score framework points earned framework points possible school year framework scores lea code lea name school code school name school type ward accountability framework framework points earned framework points possible framework score framework weight weighted framework score school year school scores lea code lea name school code school name school type ward school score school year lea student group scores lea code lea name framework student group student group score school year state student group scores framework student group student group score school year dc school report card ap ib and sat - metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year dc school report card assessment – metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education lea overall scores lea name lea code student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year state overall scores student group metric metric score metric n school year lea framework scores lea name lea code school framework student group metric metric score metric n school year school framework scores lea name lea code school name school code school framework student group metric metric score metric n school year state framework scores school framework student group metric metric score metric n school year dc school report card attendance - metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year state framework scores school framework student group metric metric score metric n school year lea framework scores lea name lea code school framework student group metric metric score metric n school year school framework scores lea name lea code school name school code school framework student group metric metric score metric n school year dc school report card class - metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education lea framework scores lea name lea code school framework student group metric metric score metric n school year school framework scores lea name lea code school name school code school framework student group metric metric score metric n school year dc school report card discipline - metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year state framework scores school framework student group metric metric score metric n school year dc school report card graduation and college enrollment - metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year dc school report card finance data data notes office of the state superintendent of education data dictionary office of the state superintendent of education state finance finance disaggregation value school year lea finance (multi-school) lea name lea code finance disaggregation value school year school finance (multi-school) lea name lea code school name school code finance disaggregation value school year school finance (single-school) lea name lea code school name school code finance disaggregation value school year dc school report card student movement - metric scores data notes office of the state superintendent of education data dictionary office of the state superintendent of education state overall scores student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year state framework scores school framework student group metric metric score metric n school year lea framework scores lea name lea code school framework student group metric metric score metric n school year school framework scores lea name lea code school name school code school framework student group metric metric score metric n school year dc school report card teachers and school leaders data notes office of the state superintendent of education data dictionary office of the state superintendent of education teacher and school leader staff lea code lea name school code school name entity type ward subgroup metric metricscore school year 2021 dc school report card aggregate enrollment metrics data notes office of the state superintendent of education data dictionary office of the state superintendent of education ever enrolled population lea code lea name school code school name entity type ward student group grade percent enrolled enrollment count total count of students school year audit population lea code lea name school code school name entity type ward student group grade percent enrolled audit count total number of student in audit school year 2021 dc school report card alternative school metrics data notes office of the state superintendent of education data dictionary office of the state superintendent of education school scores by framework lea name lea code school name school code school framework student group metric metric score metric n school year lea scores by framework lea name lea code school framework student group metric metric score metric n school year state scores by framework school framework student group metric metric score metric n school year 2021 dc school report card ap, ib and sat metrics data notes office of the state superintendent of education data dictionary office of the state superintendent of education school metric scores lea name lea code school name school code student group metric metric score metric n school year lea metric scores lea name lea code student group metric metric score metric n school year state metric scores student group metric metric score metric n school year 2021 dc school report card attendance metrics data notes office of the state superintendent of education data dictionary office of the state superintendent of education school metric scores lea name lea code school name school code student group metric metric score metric n school year school scores by framework lea name lea code school name school code school framework student group metric metric score metric n school year lea metric scores lea name lea code student group metric metric score metric n school year lea scores by framework lea name lea code school framework student group metric metric score metric n school year state metric scores student group metric metric score metric n school year state scores by framework school framework student group metric metric score metric n school year 2021 dc school report card directory data data notes office of the state superintendent of education data dictionary office of the state superintendent of education school directory lea code lea name school code school name entity type school ward address phone number web address leader title leader name 2021 dc school report card graduation and college enrollment metrics data notes office of the state superintendent of education data dictionary office of the state superintendent of education school metric scores lea name lea code school name school code student group metric metric score metric n school year lea metric scores lea name lea code student group metric metric score metric n school year state metric scores student group metric metric score metric n school year 2021 dc school report card learning environment metrics data notes office of the state superintendent of education data dictionary office of the state superintendent of education in-person rate month grade band ward percent of time in-person school year learning environment month grade band ward student group learning environment percent of students in learning environment school year 2021 dc school report card student movement metrics data notes office of the state superintendent of education data dictionary office of the state superintendent of education school metric scores lea name lea code school name school code student group metric metric score metric n school year school scores by framework lea name lea code school name school code school framework student group metric metric score metric n school year lea metric scores lea name lea code student group metric metric score metric n school year lea scores by framework lea name lea code school framework student group metric metric score metric n school year state metric scores student group metric metric score metric n school year state scores by framework school framework student group metric metric score metric n school year 2021 dc school report card teacher and school leader metrics data notes office of the state superintendent of education data dictionary field name variable type description allowable values teacher and school leader staff lea code lea name school code school name entity type ward subgroup metric metric score school year 2021 dc school report card per-pupil expenditures file data notes office of the state superintendent of education data dictionary office of the state superintendent of education state finance finance disaggregation value school year lea finance (multi-school) lea name lea code finance disaggregation value school year school finance (multi-school) lea name lea code school name school code finance disaggregation value school year school finance (single-school) lea name lea code school name school code finance disaggregation value school year 2020 dc school report card aggregate data file data notes office of the state superintendent of education data dictionary office of the state superintendent of education school directory lea code lea name school code school name entity type school ward address phone number web address leader title leader name enrollment lea code lea name school code school name entity type ward student group grade percent enrolled enrollment count total count of students school year teacher and health staff lea code lea name school code school name entity type ward metric metric score school year 2020 dc school report card cross-tabulated data file data notes office of the state superintendent of education data dictionary office of the state superintendent of education school metric scores lea name lea code school name school code student group metric metric score metric n school year lea metric scores lea name lea code student group metric metric score metric n school year state metric scores student group metric metric score metric n school year 2020 dc school report card per-pupil expenditures file data notes office of the state superintendent of education data dictionary office of the state superintendent of education state finance per pupil expenditures per pupil expenditures by type multi-site lea finance per pupil expenditures per pupil expenditures by type multi-site school finance per pupil expenditures per pupil expenditures by type single-site school finance per pupil expenditures per pupil expenditures by type 2019 dc school report card and star framework data file data notes office of the state superintendent of education data dictionary office of the state superintendent of education school directory lea code school name school code school type school ward address phone number web address leader title leader name enrollment lea code lea name school code school name entity type ward student group grade percent enrolled enrollment count total count of students star student group scores lea code lea name school code school name school type ward accountability framework student group student group points earned student group points possible student group score framework points earned framework points possible school year star framework scores lea code lea name school code school name school type ward accountability framework framework weight framework points earned framework points possible framework star score framework star rating school year star scores lea code lea name school code school name school type ward star score star rating school year lea student group scores lea name lea code framework student group student group score school year state student group scores framework student group student group score school year 2019 dc school report card and star framework cross-tabulated data file 2019 dc school report card per-pupil expenditures file data note office of the state superintendent of education data dictionary office of the state superintendent of education state finance per pupil expenditures per pupil expenditures by type multi-site lea finance per pupil expenditures per pupil expenditures by type multi-site school finance per pupil expenditures per pupil expenditures by type single-site school finance per pupil expenditures per pupil expenditures by type 2018 dc school report card and star framework data files data notes office of the state superintendent of education data dictionary office of the state superintendent of education school directory lea code lea name school code school name school type ward address phone number web address leader title leader name enrollment lea code lea name school code school name school type ward student group grade metric metric score school year star metric scores lea code lea name school code school name school type ward school framework student group domain metric metric n metric score floor target metric points earned metric points possible star student group scores lea code lea name school code school name school type ward school framework student group student group points earned student group points possible student group score framework points earned framework points possible star framework scores lea code lea name school code school name school type ward school framework framework weight framework points earned framework points possible framework star score framework star rating star scores lea code lea name school code school name school type ward star score star rating school report card scores lea code lea name school code school name school type ward student group metric metric score metric n school year lea report card scores lea code lea name student group metric metric score school year lea star metric scores lea code lea name school framework student group metric metric score school year lea student group scores lea code lea name school framework student group student group score school year state report card scores student/school group metric metric score school year state star metric scores school framework student group metric metric score school year state student group scores school framework student group student group score school year 2018 star framework cross-tabulated student group data file data notes office of the state superintendent of education school star metric scores lea name lea code school name school code school framework student group metric metric score metric n school year school overall scores lea name lea code school name school code student group metric metric score metric n school year lea star metric scores lea name lea code school framework student group metric metric score metric n school year lea overall scores lea name lea code student group metric metric score metric n school year state star metric scores school framework student group metric metric score metric n school year state overall scores student group metric metric score metric n school year"
  },
  {
   "id": "dc-school-report-card-site",
   "name": "DC School Report Card (public interactive site)",
   "owner": "OSSE",
   "url": "https://dcschoolreportcard.org/",
   "topics": [
    "accountability",
    "assessment",
    "attendance",
    "graduation",
    "discipline",
    "enrollment",
    "demographics",
    "profiles"
   ],
   "status": "js-rendered",
   "format": "Interactive web app (search/browse; not bulk download)",
   "cadence": "Annual, refreshed ~December with prior school year",
   "years": "Displays latest year only (SY2024-25); history in the Resource Library",
   "notes": "Cross-sector (DCPS + charter). Mirror at schoolreportcard.dc.gov/home and osse.dc.gov/dcschoolreportcard. JS app blocks crawlers (503) — open in a real browser. For analysis use the Resource Library files.",
   "files": [
    {
     "name": "School STAR Scores (CSV export)",
     "url": "https://opendata.dc.gov/api/download/v1/items/90b2efbd069842f29817615611619c9b/csv?layers=0",
     "kind": "csv",
     "year": "2017-18",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "columns": [
      "LEA_Code",
      "LEA_Name",
      "School_Code",
      "School_Name",
      "School_Type",
      "Ward",
      "STAR_Score",
      "STAR_Rating",
      "ObjectId"
     ],
     "n_rows": 203
    }
   ],
   "search": "dc school report card (public interactive site) osse cross-sector (dcps + charter). mirror at schoolreportcard.dc.gov/home and osse.dc.gov/dcschoolreportcard. js app blocks crawlers (503) — open in a real browser. for analysis use the resource library files. interactive web app (search/browse; not bulk download) accountability assessment attendance graduation discipline enrollment demographics profiles star rating tier sqr pmf aspire score report card quality test scores proficiency parcc dc cape msaa reading math truancy absenteeism chronic absent grad rate diploma acgr dropout suspension expulsion suspended discipline students headcount count population race ethnicity special education english learner at-risk poverty directory locations list find a school school star scores (csv export) lea_code lea_name school_code school_name school_type ward star_score star_rating objectid"
  },
  {
   "id": "osse-star-technical-guide",
   "name": "DC School Report Card & STAR Framework Technical Guide",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/publication/dc-school-report-card-and-star-framework-technical-guide",
   "topics": [
    "accountability",
    "methodology"
   ],
   "status": "ok",
   "format": "PDF (one per year)",
   "cadence": "Annual, with each report card release",
   "years": "2018–2025 (latest Sept 2025 update)",
   "notes": "Methodology for every STAR metric. Essential companion to the data files.",
   "files": [
    {
     "name": "2025 Report Card Technical Guide (September 2025 Update)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2025%20Report%20Card%20Technical%20Guide%20%28September%202025%20Update%29.pdf",
     "kind": "pdf",
     "year": "2025",
     "status": "ok",
     "topics": [
      "methodology"
     ],
     "n_pages": 71,
     "has_tabular_data": true,
     "n_table_pages": 18,
     "tables": [
      {
       "page": 9,
       "header": [
        "Current Grade Level",
        "Prior Year’s Proficiency Level"
       ],
       "n_rows": 7
      },
      {
       "page": 17,
       "header": [
        "College Readiness Benchmarks for SAT"
       ],
       "n_rows": 5
      },
      {
       "page": 18,
       "header": [
        "SAT Test 1",
        "SAT Test 2",
        "Highest",
        "Meet /",
        "College"
       ],
       "n_rows": 13
      },
      {
       "page": 29,
       "header": [
        "Student Survey",
        "School-Based Staff Survey",
        "Family Survey"
       ],
       "n_rows": 11
      },
      {
       "page": 30,
       "header": [
        "The OSSE response rate may include students who were unable to take the survey, including"
       ],
       "n_rows": 4
      },
      {
       "page": 33,
       "header": [
        "Data Elements",
        "Repor",
        "Source"
       ],
       "n_rows": 19
      },
      {
       "page": 33,
       "header": [
        "LEA,"
       ],
       "n_rows": 2
      },
      {
       "page": 34,
       "header": [
        "Schools have an opportunity to submit a brief message which highlights unique aspects of the school and information they want to include about the school. Schools are welcome to include information such as course offerings, special programs, features of the school, and/or the mission/vision of the school. The format allows for 530 characters."
       ],
       "n_rows": 10
      }
     ]
    }
   ],
   "search": "dc school report card & star framework technical guide osse methodology for every star metric. essential companion to the data files. pdf (one per year) accountability methodology star rating tier sqr pmf aspire score report card quality  2025 report card technical guide (september 2025 update) current grade level prior year’s proficiency level college readiness benchmarks for sat sat test 1 sat test 2 highest meet / college student survey school-based staff survey family survey the osse response rate may include students who were unable to take the survey, including data elements repor source lea, schools have an opportunity to submit a brief message which highlights unique aspects of the school and information they want to include about the school. schools are welcome to include information such as course offerings, special programs, features of the school, and/or the mission/vision of the school. the format allows for 530 characters."
  },
  {
   "id": "osse-assessment-2025",
   "name": "Statewide Assessment Results 2024-25 (DC CAPE / MSAA)",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/assessmentresults2025",
   "topics": [
    "assessment"
   ],
   "status": "ok",
   "format": "Excel files (hosted on Box) + PDF deck",
   "cadence": "Annual, released late summer/fall",
   "years": "2024-25 only on this page",
   "notes": "DC CAPE replaced PARCC in 2023. Data files sit behind Box share links; the State/LEA/School-level files are resolved and profiled below. Box file_ids change when OSSE re-uploads — re-resolve each year with the update skill.",
   "files": [
    {
     "name": "2024-25 DC CAPE & MSAA — State (SEA) Level",
     "url": "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=l1fz6ucfcut7q7pg8qzbo3l9ffb19pmm&file_id=f_1962534999838",
     "kind": "xlsx",
     "year": "2024-25",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2024-25",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 26,
       "columns": [
        "2024-25 Statewide Assessment Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 29,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Meeting, Exceeding",
       "n_rows": 332,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Approaching, Meeting, Exceeding",
       "n_rows": 332,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level",
       "n_rows": 2454,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 330,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      }
     ]
    },
    {
     "name": "2024-25 DC CAPE & MSAA — LEA Level",
     "url": "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=a1bx09uvrx0i066n2alof3onbfivboen&file_id=f_1962545899005",
     "kind": "xlsx",
     "year": "2024-25",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2024-25 LEA",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 26,
       "columns": [
        "2024-25 Statewide Assessment Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 29,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Meeting, Exceeding",
       "n_rows": 4484,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Approaching, Meeting, Exceeding",
       "n_rows": 4484,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level",
       "n_rows": 26019,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Metric name",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 4700,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "lea_name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "School Code",
        "Count",
        "Total Count",
        "Percent"
       ]
      }
     ]
    },
    {
     "name": "2024-25 DC CAPE & MSAA — School Level",
     "url": "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=h1bdtjr77dgxsllrsrmv9p358f6j9ket&file_id=f_1962543801303",
     "kind": "xlsx",
     "year": "2024-25",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2024-25 School",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 26,
       "columns": [
        "2024-25 Statewide Assessment Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 29,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Meeting, Exceeding",
       "n_rows": 13564,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "lea_name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Approaching, Meeting, Exceeding",
       "n_rows": 13564,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "lea_name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level",
       "n_rows": 77691,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "lea_name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Metric name",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 13976,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "lea_name",
        "School Code",
        "school_name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Enrolled Grade or Course",
        "Count",
        "Total Count",
        "Percent"
       ]
      }
     ]
    },
    {
     "name": "2024-25 Statewide Assessment Results (public deck)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Assessment%202025_PublicDeck%20_FINAL.pdf",
     "kind": "pdf",
     "year": "2024-25",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2024-25",
     "n_pages": 41,
     "has_tabular_data": true,
     "n_table_pages": 16,
     "tables": [
      {
       "page": 3,
       "header": [
        "5"
       ],
       "n_rows": 5
      },
      {
       "page": 22,
       "header": [
        "All",
        "DC CAPE",
        "MSAA"
       ],
       "n_rows": 5
      },
      {
       "page": 28,
       "header": [
        "Tested Grade",
        "State ELA 4+ Results",
        "State Math 4+ Results"
       ],
       "n_rows": 9
      },
      {
       "page": 29,
       "header": [
        "Test",
        "State 4+ Results"
       ],
       "n_rows": 9
      },
      {
       "page": 30,
       "header": [
        "Race/Ethnicity",
        "State ELA 4+ Results",
        "State Math 4+ Results"
       ],
       "n_rows": 10
      },
      {
       "page": 31,
       "header": [
        "Student Group",
        "State ELA 4+",
        "State Math 4+"
       ],
       "n_rows": 10
      },
      {
       "page": 32,
       "header": [
        "Enrolled Grade",
        "ELA Participation"
       ],
       "n_rows": 12
      },
      {
       "page": 33,
       "header": [
        "Enrolled Grade",
        "Math Participation"
       ],
       "n_rows": 12
      }
     ]
    }
   ],
   "search": "statewide assessment results 2024-25 (dc cape / msaa) osse dc cape replaced parcc in 2023. data files sit behind box share links; the state/lea/school-level files are resolved and profiled below. box file_ids change when osse re-uploads — re-resolve each year with the update skill. excel files (hosted on box) + pdf deck assessment test scores proficiency parcc dc cape msaa reading math 2024-25 dc cape & msaa — state (sea) level data notes and business rules 2024-25 statewide assessment results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes meeting, exceeding aggregation level lea code school code metric assessment name subject student group student group value enrolled grade or course count total count percent approaching, meeting, exceeding aggregation level lea code school code metric assessment name subject student group student group value enrolled grade or course count total count percent performance level aggregation level lea code school code metric assessment name subject student group student group value enrolled grade or course count total count percent participation aggregation level lea code school code metric assessment name subject student group student group value enrolled grade or course count total count percent 2024-25 dc cape & msaa — lea level data notes and business rules 2024-25 statewide assessment results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes meeting, exceeding aggregation level lea code lea name metric assessment name subject student group student group value enrolled grade or course count total count percent approaching, meeting, exceeding aggregation level lea code lea name metric assessment name subject student group student group value enrolled grade or course count total count percent performance level aggregation level lea code lea name metric assessment name subject student group student group value enrolled grade or course metric name count total count percent participation aggregation level lea code lea_name metric assessment name subject student group student group value enrolled grade or course school code count total count percent 2024-25 dc cape & msaa — school level data notes and business rules 2024-25 statewide assessment results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes meeting, exceeding aggregation level lea code lea_name school code school name metric assessment name subject student group student group value enrolled grade or course count total count percent approaching, meeting, exceeding aggregation level lea code lea_name school code school name metric assessment name subject student group student group value enrolled grade or course count total count percent performance level aggregation level lea code lea_name school code school name metric assessment name subject student group student group value enrolled grade or course metric name count total count percent participation aggregation level lea code lea_name school code school_name metric assessment name subject student group student group value enrolled grade or course count total count percent 2024-25 statewide assessment results (public deck) 5 all dc cape msaa tested grade state ela 4+ results state math 4+ results test state 4+ results race/ethnicity state ela 4+ results state math 4+ results student group state ela 4+ state math 4+ enrolled grade ela participation enrolled grade math participation"
  },
  {
   "id": "osse-assessment-archive",
   "name": "Statewide Assessment Results 2023-24 (+ older-year archive index)",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/assessmentresults2024",
   "topics": [
    "assessment"
   ],
   "status": "ok",
   "format": "Excel (Box) + PDF",
   "cadence": "Annual",
   "years": "2023-24 on page; also indexes 2022-23, 2021-22, 2018-19, 2017-18, 2016-17, 2015-16, 2014-15",
   "notes": "Best entry point for OLDER assessment years. URL pattern changed over time: old years use /page/YYYY-YY-parcc-and-msaa-..., new years use /assessmentresultsYYYY — a key fragmentation point.",
   "files": [
    {
     "name": "DC Public Schools Student Assessment Results (CSV export)",
     "url": "https://opendata.dc.gov/api/download/v1/items/85fce54dea6946dea827c02a6bda88bb/csv?layers=23",
     "kind": "csv",
     "year": "2014-15 to 2016-17",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2014-15 to 2016-17",
     "columns": [
      "OBJECTID",
      "SCHOOL_YEAR",
      "SCHOOL_WARD",
      "SCHOOL_CODE",
      "SCHOOL_NAME",
      "LEA_CODE",
      "LEA_NAME",
      "ASSESSMENT_TYPE",
      "SUBJECT",
      "TESTED_GRADE_SUBJECT",
      "GRADE_OF_ENROLLMENT",
      "SUBGROUP",
      "SUBGROUP_VALUE",
      "PERCENT_MEETING_OR_EXCEEDING_E",
      "PERCENT_LEVEL_3_",
      "PERCENT_LEVEL_1",
      "PERCENT_LEVEL_2",
      "PERCENT_LEVEL_3",
      "PERCENT_LEVEL_4",
      "PERCENT_LEVEL_5",
      "TOTAL_NUMBER_VALID_TEST_TAKERS",
      "CREATED_DATE",
      "LAST_EDITED_DATE"
     ],
     "n_rows": 189364
    },
    {
     "name": "2023-24 State Level Statewide Assessment Data",
     "url": "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=5nvo8y8p0zmfef6hrb0ivrbfn3xz2f54&file_id=f_1627757245452",
     "kind": "xlsx",
     "year": "2023-24",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/assessmentresults2024",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2023-24 State",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 23,
       "columns": [
        "2023-24 Statewide Assessment Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 34,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Meeting, Exceeding",
       "n_rows": 11959,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Approaching, Meeting, Exceeding",
       "n_rows": 11959,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level",
       "n_rows": 58116,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 6127,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Subclaim",
       "n_rows": 188,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Assessment Name",
        "Subject",
        "Metric",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Percent Meeting Expectations",
        "Percent Approaching Expectations",
        "Percent Below Expectations",
        "Student Group",
        "Total Count"
       ]
      }
     ]
    },
    {
     "name": "2023-24 LEA Level Statewide Assessment Data",
     "url": "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=x3026w17o4pmrbxjut2io5t51168b5y2&file_id=f_1760741060635",
     "kind": "xlsx",
     "year": "2023-24",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/assessmentresults2024",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2023-24 LEA",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 23,
       "columns": [
        "2023-24 Statewide Assessment Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 30,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Meeting, Exceeding",
       "n_rows": 36247,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Approaching, Meeting, Exceeding",
       "n_rows": 36247,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level",
       "n_rows": 179473,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 20208,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Subclaim",
       "n_rows": 4413,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Percent Meeting Expectations",
        "Percent Approaching Expectations",
        "Percent Below Expectations",
        "Total Count"
       ]
      }
     ]
    },
    {
     "name": "2023-24 School Level Statewide Assessment Data",
     "url": "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=5gs5mber6fgumxraljpx0a3se21295in&file_id=f_1760740978845",
     "kind": "xlsx",
     "year": "2023-24",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/assessmentresults2024",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2023-24 School",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 23,
       "columns": [
        "2023-24 Statewide Assessment Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 34,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Meeting, Exceeding",
       "n_rows": 94800,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Approaching, Meeting, Exceeding",
       "n_rows": 94800,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level",
       "n_rows": 468842,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 55163,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Subclaim",
       "n_rows": 13046,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Percent Meeting Expectations",
        "Percent Approaching Expectations",
        "Percent Below Expectations",
        "Total Count"
       ]
      }
     ]
    },
    {
     "name": "2022-23 State Level Statewide Assessment Data",
     "url": "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=br596zlfnrfltvw2yoxvaecm2jkhw51e&file_id=f_1300115605451",
     "kind": "xlsx",
     "year": "2022-23",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1671391",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2022-23 State",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 25,
       "columns": [
        "2022-23 Statewide Assessment Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 34,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Meeting, Exceeding",
       "n_rows": 25104,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Approaching, Meeting, Exceeding",
       "n_rows": 25104,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level",
       "n_rows": 122642,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 12912,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Subclaim",
       "n_rows": 269,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Assessment Name",
        "Subject",
        "Metric",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Percent Meeting Expectations",
        "Percent Approaching Expectations",
        "Percent Below Expectations",
        "Student Group",
        "Total Count"
       ]
      },
      {
       "name": "Adjusted Achievement",
       "n_rows": 197,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "School Framework",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Accommodations",
       "n_rows": 38,
       "columns": [
        "Aggregation Level",
        "Asessment Name",
        "Subject",
        "Student Group",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Total Count",
        "Count",
        "Percent"
       ]
      }
     ]
    },
    {
     "name": "2022-23 LEA Level Statewide Assessment Data",
     "url": "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=w3dz0osavcf1x4qenwk9yr4n709go41g&file_id=f_1300113448491",
     "kind": "xlsx",
     "year": "2022-23",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1671391",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2022-23 LEA",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 24,
       "columns": [
        "2022-23 Statewide Assessment Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 30,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Meeting, Exceeding",
       "n_rows": 69126,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Approaching, Meeting, Exceeding",
       "n_rows": 69126,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level",
       "n_rows": 341324,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 38779,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Subclaim",
       "n_rows": 4504,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Percent Meeting Expectations",
        "Percent Approaching Expectations",
        "Percent Below Expectations",
        "Total Count"
       ]
      },
      {
       "name": "Adjusted Achievement",
       "n_rows": 1884,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "School Framework",
        "Total Count",
        "Percent"
       ]
      }
     ]
    },
    {
     "name": "2022-23 School Level Statewide Assessment Data",
     "url": "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=sqqkkz8jrwrqqqxxsij3p65t3xco47u2&file_id=f_1299960704677",
     "kind": "xlsx",
     "year": "2022-23",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1671391",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2022-23 School",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 24,
       "columns": [
        "2022-23 Statewide Assessment Results Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 22,
       "columns": [
        "Sheet",
        "Field Name",
        "Variable Type",
        "Allowable Values",
        "Notes"
       ]
      },
      {
       "name": "Meeting, Exceeding",
       "n_rows": 183145,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Approaching, Meeting, Exceeding",
       "n_rows": 183145,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level",
       "n_rows": 700000,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Performance Level continue",
       "n_rows": 203979,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Participation",
       "n_rows": 106577,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "Grade of Enrollment",
        "School Framework",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "Subclaim",
       "n_rows": 13066,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "Metric",
        "School Code",
        "School Name",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "School Framework",
        "Percent Meeting Expectations",
        "Percent Approaching Expectations",
        "Percent Below Expectations",
        "Total Count"
       ]
      },
      {
       "name": "Adjusted Achievement",
       "n_rows": 6806,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Metric",
        "Assessment Name",
        "Subject",
        "Student Group",
        "Student Group Value",
        "School Framework",
        "Total Count",
        "Percent"
       ]
      }
     ]
    },
    {
     "name": "2022-23 Participation of Students with&nbsp; Disabilities in the Regular Assessment with&nbsp; Accommodations",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SWD%20Participation%20with%20Accommodations%20SY2223.xlsx",
     "kind": "xlsx",
     "year": "2022-23",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1671391",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2022-23 Particip.",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 20,
       "columns": [
        "2022-23 Participation of Students with Disabilities in the Regular Assessment with Accommodations"
       ]
      },
      {
       "name": "School",
       "n_rows": 1626,
       "columns": [
        "Reporting Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Assessment Subject",
        "Assessment Name",
        "Number of SWDs who tested with accommodations"
       ]
      },
      {
       "name": "LEA",
       "n_rows": 503,
       "columns": [
        "Reporting Level",
        "LEA Code",
        "LEA Name",
        "Assessment Subject",
        "Assessment Name",
        "Number of SWDs who tested with accommodations"
       ]
      },
      {
       "name": "State",
       "n_rows": 18,
       "columns": [
        "Reporting Level",
        "Assessment Subject",
        "Assessment Name",
        "Number of SWDs who tested with accommodations"
       ]
      }
     ]
    },
    {
     "name": "2021-22 State Level PARCC and MSAA Data",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021-22%20State%20Level%20PARCC%20and%20MSAA%20Data.xlsx",
     "kind": "xlsx",
     "year": "2021-22",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1613796",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2021-22 State",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 12,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "prof",
       "n_rows": 4752,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Assessment Name",
        "Subject",
        "Student group",
        "Subgroup Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "perf_level",
       "n_rows": 23128,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Assessment Name",
        "Subject",
        "Student group",
        "Subgroup Value",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "metric_value",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "subclaim",
       "n_rows": 77,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Grade of Enrollment",
        "Assessment Name",
        "Subject",
        "Tested Grade/Subject",
        "Student group",
        "Subclaim",
        "Percent Meeting Expectations",
        "Percent Approaching Expectations",
        "Percent Below Expectations",
        "Total Count"
       ]
      }
     ]
    },
    {
     "name": "2021-22 School, LEA, and State Participation",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021-22%20School%2C%20LEA%2C%20and%20State%20Participation.xlsx.xlsx",
     "kind": "xlsx",
     "year": "2021-22",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1613796",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2021-22 Particip.",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 15,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "State",
       "n_rows": 637,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "School Code",
        "Assessment Name",
        "Subject",
        "Student group",
        "Subgroup Value",
        "Grade of Enrollment",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "LEA",
       "n_rows": 8922,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "LEA Name",
        "School Code",
        "Assessment Name",
        "Subject",
        "Student group",
        "Subgroup Value",
        "Grade of Enrollment",
        "Count",
        "Total Count",
        "Percent"
       ]
      },
      {
       "name": "School",
       "n_rows": 27162,
       "columns": [
        "Aggregation Level",
        "LEA Code",
        "lea_name",
        "School Code",
        "School Name",
        "Assessment Name",
        "Subject",
        "Student group",
        "Subgroup Value",
        "Grade of Enrollment",
        "Count",
        "Total Count",
        "Percent"
       ]
      }
     ]
    },
    {
     "name": "2021-22 PARCC and MSAA Participation and Performance Results for Students with Disabilities",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2021-22%20PARCC%20and%20MSAA%20Participation%20and%20Performance%20Results%20for%20Students%20with%20Disabilities.xlsx",
     "kind": "xlsx",
     "year": "2021-22",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1613796",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2021-22 Particip.",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 12,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 16385,
       "columns": [
        "Data Field",
        "Description",
        "Permitted Value",
        "Data source"
       ]
      },
      {
       "name": "State Output",
       "n_rows": 82,
       "columns": [
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      },
      {
       "name": "LEA Output",
       "n_rows": 1586,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      },
      {
       "name": "School Output",
       "n_rows": 4334,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      }
     ]
    },
    {
     "name": "2018-19 PARCC ELA School Level",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%20PARCC%20School%20Level%20ELA%201.15.20.Xlsx",
     "kind": "xlsx",
     "year": "2018-19",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1420701",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2018-19 School/ELA",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 15,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "School ELA Overall",
       "n_rows": 216,
       "columns": [
        "2019 PARCC English Language Arts/Literacy Results Overall Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 3",
       "n_rows": 136,
       "columns": [
        "2019 PARCC English Language Arts/Literacy Results Grade 3 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 4",
       "n_rows": 131,
       "columns": [
        "2019 PARCC English Language Arts/Literacy Results Grade 4 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 5",
       "n_rows": 132,
       "columns": [
        "2019 PARCC English Language Arts/Literacy Results Grade 5 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 6",
       "n_rows": 76,
       "columns": [
        "2019 PARCC English Language Arts/Literacy Results Grade 6 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 7",
       "n_rows": 79,
       "columns": [
        "2019 PARCC English Language Arts/Literacy Results Grade 7 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 8",
       "n_rows": 81,
       "columns": [
        "2019 PARCC English Language Arts/Literacy Results Grade 8 Performance by School"
       ]
      },
      {
       "name": "School ELA Grades 9-12",
       "n_rows": 47,
       "columns": [
        "2019 PARCC English Language Arts/Literacy Results Grades 9-12 Performance by School"
       ]
      }
     ]
    },
    {
     "name": "2018-19 PARCC Mathematics School Level",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%20PARCC%20School%20Level%20Math%201.15.20.Xlsx",
     "kind": "xlsx",
     "year": "2018-19",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1420701",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2018-19 School/Math",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 15,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "School Math Overall",
       "n_rows": 216,
       "columns": [
        "2019 PARCC Mathematics Results Overall Performance by School"
       ]
      },
      {
       "name": "School Math Grade 3",
       "n_rows": 136,
       "columns": [
        "2019 PARCC Mathematics Results Grade 3 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 4",
       "n_rows": 131,
       "columns": [
        "2019 PARCC Mathematics Results Grade 4 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 5",
       "n_rows": 132,
       "columns": [
        "2019 PARCC Mathematics Results Grade 5 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 6",
       "n_rows": 76,
       "columns": [
        "2019 PARCC Mathematics Results Grade 6 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 7",
       "n_rows": 160,
       "columns": [
        "2019 PARCC Mathematics Results Grade 7 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 8",
       "n_rows": 189,
       "columns": [
        "2019 PARCC Mathematics Results Grade 8 Performance by School"
       ]
      },
      {
       "name": "School Math Grades 9-12",
       "n_rows": 97,
       "columns": [
        "2019 PARCC Mathematics Results Grades 9-12 Performance by School"
       ]
      }
     ]
    },
    {
     "name": "2018-19 Detailed PARCC and MSAA Performance Results",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Detailed%202018-19%20PARCC%20And%20MSAA%20Performance%202.19.20.Xlsx",
     "kind": "xlsx",
     "year": "2018-19",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1420701",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2018-19",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 13,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "State Performance",
       "n_rows": 2393,
       "columns": [
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers",
        "Percent Subclaim Level 1 (Met or Exceeded Expectations)",
        "Percent Subclaim Level 2 (Nearly Met Expectations)",
        "Percent Subclaim Level 3 (Below Expectations)"
       ]
      },
      {
       "name": "LEA Performance",
       "n_rows": 28458,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers",
        "Percent Subclaim Level 1 (Met or Exceeded Expectations)",
        "Percent Subclaim Level 2 (Nearly Met Expectations)",
        "Percent Subclaim Level 3 (Below Expectations)"
       ]
      },
      {
       "name": "School Performance",
       "n_rows": 80322,
       "columns": [
        "School Ward",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers",
        "Percent Subclaim Level 1 (Met or Exceeded Expectations)",
        "Percent Subclaim Level 2 (Nearly Met Expectations)",
        "Percent Subclaim Level 3 (Below Expectations)"
       ]
      }
     ]
    },
    {
     "name": "2018-19, 2017-18, 2016-17 School, LEA, and State Participation",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%2C%202017-18%2C%202016-17%20School%2C%20LEA%2C%20And%20State%20Participation%201.15.20.Xlsx",
     "kind": "xlsx",
     "year": "2018-19",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1420701",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2018-19 Particip.",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 15,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "State Level",
       "n_rows": 52,
       "columns": [
        "ELA",
        "Math"
       ]
      },
      {
       "name": "LEA Level",
       "n_rows": 1924,
       "columns": [
        "ELA",
        "Math"
       ]
      },
      {
       "name": "School Level",
       "n_rows": 7371,
       "columns": [
        "ELA",
        "Math"
       ]
      }
     ]
    },
    {
     "name": "2018-19 PARCC and MSAA Participation and Performance Results for Students with Disabilities",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018-19%20PARCC%20and%20MSAA%20Participation%20and%20Performance%20Results%20for%20Students%20with%20Disabilities%201.15.20.xlsx",
     "kind": "xlsx",
     "year": "2018-19",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1420701",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2018-19 Particip.",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 12,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 16385,
       "columns": [
        "Data Field",
        "Description",
        "Permitted Value",
        "Data source"
       ]
      },
      {
       "name": "State Output",
       "n_rows": 73,
       "columns": [
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      },
      {
       "name": "LEA Output",
       "n_rows": 1427,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      },
      {
       "name": "School Output",
       "n_rows": 4317,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      }
     ]
    },
    {
     "name": "2017-18 PARCC ELA School Level",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018%20PARCC%20School%20Level%20ELA.xlsx",
     "kind": "xlsx",
     "year": "2017-18",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1348731",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2017-18 School/ELA",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 15,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "School ELA Overall",
       "n_rows": 211,
       "columns": [
        "2018 PARCC English Language Arts/Literacy Results Overall Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 3",
       "n_rows": 134,
       "columns": [
        "2018 PARCC English Language Arts/Literacy Results Grade 3 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 4",
       "n_rows": 129,
       "columns": [
        "2018 PARCC English Language Arts/Literacy Results Grade 4 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 5",
       "n_rows": 128,
       "columns": [
        "2018 PARCC English Language Arts/Literacy Results Grade 5 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 6",
       "n_rows": 80,
       "columns": [
        "2018 PARCC English Language Arts/Literacy Results Grade 6 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 7",
       "n_rows": 80,
       "columns": [
        "2018 PARCC English Language Arts/Literacy Results Grade 7 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 8",
       "n_rows": 79,
       "columns": [
        "2018 PARCC English Language Arts/Literacy Results Grade 8 Performance by School"
       ]
      },
      {
       "name": "School ELA Grades 9-12",
       "n_rows": 46,
       "columns": [
        "2018 PARCC English Language Arts/Literacy Results Grades 9-12 Performance by School"
       ]
      }
     ]
    },
    {
     "name": "2017-18 PARCC Mathematics School Level",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2018%20PARCC%20School%20Level%20Math.xlsx",
     "kind": "xlsx",
     "year": "2017-18",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1348731",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2017-18 School/Math",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 17,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "School Math Overall",
       "n_rows": 213,
       "columns": [
        "2018 PARCC Mathematics Results Overall Performance by School"
       ]
      },
      {
       "name": "School Math Grade 3",
       "n_rows": 134,
       "columns": [
        "2018 PARCC Mathematics Results Grade 3 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 4",
       "n_rows": 129,
       "columns": [
        "2018 PARCC Mathematics Results Grade 4 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 5",
       "n_rows": 128,
       "columns": [
        "2018 PARCC Mathematics Results Grade 5 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 6",
       "n_rows": 80,
       "columns": [
        "2018 PARCC Mathematics Results Grade 6 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 7",
       "n_rows": 161,
       "columns": [
        "2018 PARCC Mathematics Results Grade 7 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 8",
       "n_rows": 183,
       "columns": [
        "2018 PARCC Mathematics Results Grade 8 Performance by School"
       ]
      },
      {
       "name": "School Math Grades 9-12",
       "n_rows": 101,
       "columns": [
        "2018 PARCC Mathematics Results Grades 9-12 Performance by School"
       ]
      }
     ]
    },
    {
     "name": "2017-18 Detailed PARCC and MSAA Performance Results",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Detailed%202018%20PARCC%20and%20MSAA%20Performance.xlsx",
     "kind": "xlsx",
     "year": "2017-18",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1348731",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2017-18",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 13,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "State Performance",
       "n_rows": 2685,
       "columns": [
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers",
        "Percent Subclaim Level 1 (Met or Exceeded Expectations)",
        "Percent Subclaim Level 2 (Nearly Met Expectations)",
        "Percent Subclaim Level 3 (Below Expectations)"
       ]
      },
      {
       "name": "LEA Performance",
       "n_rows": 32379,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers",
        "Percent Subclaim Level 1 (Met or Exceeded Expectations)",
        "Percent Subclaim Level 2 (Nearly Met Expectations)",
        "Percent Subclaim Level 3 (Below Expectations)"
       ]
      },
      {
       "name": "School Performance",
       "n_rows": 88298,
       "columns": [
        "School Ward",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers",
        "Percent Subclaim Level 1 (Met or Exceeded Expectations)",
        "Percent Subclaim Level 2 (Nearly Met Expectations)",
        "Percent Subclaim Level 3 (Below Expectations)"
       ]
      }
     ]
    },
    {
     "name": "2017-18 School, LEA, and State Participation",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/School%2C%20LEA%2C%20and%20State%20Participation%202017-18.xlsx",
     "kind": "xlsx",
     "year": "2017-18",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1348731",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2017-18 Particip.",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 15,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "State Level",
       "n_rows": 52,
       "columns": [
        "ELA",
        "Math"
       ]
      },
      {
       "name": "LEA Level",
       "n_rows": 1924,
       "columns": [
        "ELA",
        "Math"
       ]
      },
      {
       "name": "School Level",
       "n_rows": 7371,
       "columns": [
        "ELA",
        "Math"
       ]
      }
     ]
    },
    {
     "name": "2017-18 PARCC and MSAA Participation and Performance Results for Students with Disabilities",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2017-18%20PARCC%20and%20MSAA%20Participation%20and%20Performance%20Results%20for%20Students%20with%20Disabilities.xlsx",
     "kind": "xlsx",
     "year": "2017-18",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1348731",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2017-18 Particip.",
     "tabs": [
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 12,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 16385,
       "columns": [
        "Data Field",
        "Description",
        "Permitted Value",
        "Data source"
       ]
      },
      {
       "name": "State Output",
       "n_rows": 73,
       "columns": [
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      },
      {
       "name": "LEA Output",
       "n_rows": 1427,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      },
      {
       "name": "School Output",
       "n_rows": 4317,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      }
     ]
    },
    {
     "name": "Detailed 2014 15 PARCC and MSAA Performance",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Detailed%202014-15%20PARCC%20and%20MSAA%20Performance.xlsx",
     "kind": "xlsx",
     "year": "2017-18",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1348731",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2017-18",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 105,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "State Performance",
       "n_rows": 1553,
       "columns": [
        "School Year",
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers"
       ]
      },
      {
       "name": "Sector Performance",
       "n_rows": 2764,
       "columns": [
        "School Year",
        "Sector",
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers"
       ]
      },
      {
       "name": "LEA Performance",
       "n_rows": 16758,
       "columns": [
        "School Year",
        "LEA Code",
        "LEA Name",
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers"
       ]
      },
      {
       "name": "School Performance",
       "n_rows": 50383,
       "columns": [
        "School Year",
        "School Ward",
        "School Code",
        "School Name",
        "LEA Code",
        "LEA Name",
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers"
       ]
      }
     ]
    },
    {
     "name": "2016-17 PARCC ELA School Level",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20PARCC%20School%20Level%20ELA_0.xlsx",
     "kind": "xlsx",
     "year": "2016-17",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1267021",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2016-17 School/ELA",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 14,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "School ELA Overall",
       "n_rows": 208,
       "columns": [
        "2017 PARCC English Language Arts/Literacy Results Overall Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 3",
       "n_rows": 132,
       "columns": [
        "2017 PARCC English Language Arts/Literacy Results Grade 3 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 4",
       "n_rows": 125,
       "columns": [
        "2017 PARCC English Language Arts/Literacy Results Grade 4 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 5",
       "n_rows": 128,
       "columns": [
        "2017 PARCC English Language Arts/Literacy Results Grade 5 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 6",
       "n_rows": 79,
       "columns": [
        "2017 PARCC English Language Arts/Literacy Results Grade 6 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 7",
       "n_rows": 76,
       "columns": [
        "2017 PARCC English Language Arts/Literacy Results Grade 7 Performance by School"
       ]
      },
      {
       "name": "School ELA Grade 8",
       "n_rows": 72,
       "columns": [
        "2017 PARCC English Language Arts/Literacy Results Grade 8 Performance by School"
       ]
      },
      {
       "name": "School ELA Grades 9-12",
       "n_rows": 45,
       "columns": [
        "2017 PARCC English Language Arts/Literacy Results Grades 9-12 Performance by School"
       ]
      }
     ]
    },
    {
     "name": "2016-17 PARCC Mathematics School Level",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/2017%20PARCC%20School%20Level%20Math_0.xlsx",
     "kind": "xlsx",
     "year": "2016-17",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1267021",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2016-17 School/Math",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 16,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "School Math Overall",
       "n_rows": 209,
       "columns": [
        "2017 PARCC Mathematics Results Overall Performance by School"
       ]
      },
      {
       "name": "School Math Grade 3",
       "n_rows": 132,
       "columns": [
        "2017 PARCC Mathematics Results Grade 3 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 4",
       "n_rows": 125,
       "columns": [
        "2017 PARCC Mathematics Results Grade 4 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 5",
       "n_rows": 128,
       "columns": [
        "2017 PARCC Mathematics Results Grade 5 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 6",
       "n_rows": 79,
       "columns": [
        "2017 PARCC Mathematics Results Grade 6 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 7",
       "n_rows": 157,
       "columns": [
        "2017 PARCC Mathematics Results Grade 7 Performance by School"
       ]
      },
      {
       "name": "School Math Grade 8",
       "n_rows": 162,
       "columns": [
        "2017 PARCC Mathematics Results Grade 8 Performance by School"
       ]
      },
      {
       "name": "School Math Grades 9-12",
       "n_rows": 97,
       "columns": [
        "2017 PARCC Mathematics Results Grades 9-12 Performance by School"
       ]
      }
     ]
    },
    {
     "name": "2016-17 Detailed PARCC and MSAA Performance Results",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/Detailed%202017%20PARCC%20and%20MSAA%20Performance_0.xlsx",
     "kind": "xlsx",
     "year": "2016-17",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1267021",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2016-17",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 14,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "State Performance",
       "n_rows": 1,
       "columns": [
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers"
       ]
      },
      {
       "name": "LEA Performance",
       "n_rows": 1,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers"
       ]
      },
      {
       "name": "School Performance",
       "n_rows": 1,
       "columns": [
        "School Ward",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Assessment Type",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Subgroup",
        "Subgroup Value",
        "Percent Meeting or Exceeding Expectations",
        "Percent Level 3+",
        "Percent Level 1",
        "Percent Level 2",
        "Percent Level 3",
        "Percent Level 4",
        "Percent Level 5",
        "Total Number Valid Test Takers"
       ]
      }
     ]
    },
    {
     "name": "2016-17 PARCC and MSAA Performance Results for Students with Disabilities",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/SWD%20PARCC%20-%202016-2017.xlsx",
     "kind": "xlsx",
     "year": "2016-17",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1267021",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2016-17",
     "tabs": [
      {
       "name": "Data Dictionary",
       "n_rows": 16385,
       "columns": [
        "Data Field",
        "Description",
        "Permitted Value",
        "Data source"
       ]
      },
      {
       "name": "Data Notes and Business Rules",
       "n_rows": 12,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "State Output",
       "n_rows": 73,
       "columns": [
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      },
      {
       "name": "LEA Output",
       "n_rows": 1348,
       "columns": [
        "LEA Code",
        "LEA Name",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      },
      {
       "name": "School Output",
       "n_rows": 4161,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Subject",
        "Tested Grade/Subject",
        "Grade of Enrollment",
        "Total Number of Valid PARCC Test Takers",
        "Total Number of PARCC Test Takers with Performance Level 4+",
        "Percent of Total PARCC Test Takers with Performance Level 4+",
        "Number of Students with Disabilities Who Took PARCC",
        "Number of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Percent of Students with Disabilities Who Took PARCC with Performance Level 4+",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations",
        "Number of Students w/ Disabilities Taking PARCC w/ Registered Accommodations & Performance Level 4+",
        "Number of Alternate Assessment Test Takers",
        "Number of Alternate Test Takers with Performance Level 3+",
        "Percent of Alternate Test Takers with Performance Level 3+"
       ]
      }
     ]
    },
    {
     "name": "2016-17 School, LEA, and State Participation",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/School%2C%20LEA%2C%20and%20State%20Participation%202016-17_0.xlsx",
     "kind": "xlsx",
     "year": "2016-17",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1267021",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2016-17 Particip.",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 14,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "State Level",
       "n_rows": 3,
       "columns": [
        "ELA",
        "Math"
       ]
      },
      {
       "name": "LEA Level",
       "n_rows": 3,
       "columns": [
        "ELA",
        "Math"
       ]
      },
      {
       "name": "School Level",
       "n_rows": 3,
       "columns": [
        "ELA",
        "Math"
       ]
      }
     ]
    },
    {
     "name": "PARCC ELA school level 2015-16",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%20ELA%20school%20level%202015-16_0.xlsx",
     "kind": "xlsx",
     "year": "2015-16",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1185345",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2015-16 School/ELA",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 13,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "School Level ELA",
       "n_rows": 210,
       "columns": [
        "English Language Arts/Literacy"
       ]
      },
      {
       "name": "hidden - lookup",
       "n_rows": 203,
       "columns": [
        "PerfLevel",
        "Test Taken",
        "Ward",
        "LEACode",
        "LEAName",
        "SchoolCode",
        "SchoolName"
       ]
      },
      {
       "name": "hidden - pct_at_level",
       "n_rows": 821,
       "columns": [
        "School Ward",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Tested Grade/Subject",
        "% level 1",
        "% level 2",
        "% level 3",
        "% level 4",
        "% level 5",
        "Total valid test takers"
       ]
      },
      {
       "name": "hidden-pct_at_or_above_level",
       "n_rows": 3651,
       "columns": [
        "leacode",
        "leaname",
        "schoolcode",
        "schoolname",
        "testedGrade",
        "metric",
        "pct_at_or_above_level"
       ]
      }
     ]
    },
    {
     "name": "PARCC Math school level 2015-16",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%20Math%20school%20level%202015-16.xlsx",
     "kind": "xlsx",
     "year": "2015-16",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1185345",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2015-16 School/Math",
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 14,
       "columns": [
        "Overview:"
       ]
      },
      {
       "name": "School Level Math",
       "n_rows": 210,
       "columns": [
        "Mathematics"
       ]
      },
      {
       "name": "hidden - lookup",
       "n_rows": 203,
       "columns": [
        "PerfLevel",
        "Test Taken",
        "Ward",
        "LEACode",
        "LEAName",
        "SchoolCode",
        "SchoolName"
       ]
      },
      {
       "name": "hidden - pct_at_level",
       "n_rows": 1149,
       "columns": [
        "School Ward",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Tested Grade/Subject",
        "% level 1",
        "% level 2",
        "% level 3",
        "% level 4",
        "% level 5",
        "Total valid test takers"
       ]
      },
      {
       "name": "hidden-pct_at_or_above_level",
       "n_rows": 3650,
       "columns": [
        "leacode",
        "leaname",
        "schoolcode",
        "schoolname",
        "tested grade/subject",
        "level",
        "pct_at_or_above_level"
       ]
      }
     ]
    },
    {
     "name": "School, LEA, and State Participation 2015-16",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/School%2C%20LEA%2C%20and%20State%20Participation%202015-16.xlsx",
     "kind": "xlsx",
     "year": "2015-16",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1185345",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2015-16 Particip.",
     "tabs": [
      {
       "name": "State Level",
       "n_rows": 28,
       "columns": [
        "ELA",
        "Math"
       ]
      },
      {
       "name": "LEA Level",
       "n_rows": 978,
       "columns": [
        "ELA",
        "Math"
       ]
      },
      {
       "name": "School Level",
       "n_rows": 3817,
       "columns": [
        "ELA",
        "Math"
       ]
      },
      {
       "name": "Data Notes",
       "n_rows": 17,
       "columns": [
        "Overview:"
       ]
      }
     ]
    },
    {
     "name": "PARCC 2015 DC Grades 3-8 Aggregate State, Sector, and School Results",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20Grades%203-8%20Aggregate%20State%2C%20Sector%2C%20and%20School%20Results_0.xlsx",
     "kind": "xlsx",
     "year": "2014-15",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1184545",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2014-15",
     "tabs": [
      {
       "name": "School",
       "n_rows": 20322,
       "columns": [
        "School Ward",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Tested Grade",
        "Subject Category",
        "Subgroup",
        "Enrollment Grade",
        "% level 4+",
        "% level 3+",
        "% level 1",
        "% level 2",
        "% level 3",
        "% level 4",
        "% level 5",
        "Total valid tests",
        "% of total tested population"
       ]
      },
      {
       "name": "State & Sector",
       "n_rows": 1391,
       "columns": [
        "Sector",
        "Tested Grade",
        "Subject Category",
        "Subgroup",
        "Enrollment Grade",
        "% level 4+",
        "% level 3+",
        "% level 1",
        "% level 2",
        "% level 3",
        "% level 4",
        "% level 5",
        "Total valid tests",
        "% of total tested population"
       ]
      },
      {
       "name": "Data Notes",
       "n_rows": 21,
       "columns": [
        "Accountability reporting rules"
       ]
      }
     ]
    },
    {
     "name": "PARCC 2015 DC Grades 3-8 Math School Results",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20Grades%203-8%20Math%20School%20Results_0.xlsx",
     "kind": "xlsx",
     "year": "2014-15",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1184545",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2014-15 Math",
     "tabs": [
      {
       "name": "School Level 3-8 Math",
       "n_rows": 170,
       "columns": [
        "Grades 3-8 Math"
       ]
      },
      {
       "name": "lookup",
       "n_rows": 21,
       "columns": [
        "PerfLevel",
        "Breakdown (test taken and/or enrollment grade)"
       ]
      },
      {
       "name": "pct_at_each_level",
       "n_rows": 1059,
       "columns": [
        "School Ward",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Breakdown",
        "pct_1",
        "pct_2",
        "pct_3",
        "pct_4",
        "pct_5",
        "test takers"
       ]
      },
      {
       "name": "pct_at_or_above_level",
       "n_rows": 5291,
       "columns": [
        "leacode",
        "leaname",
        "schoolcode",
        "schoolname",
        "breakdown",
        "level",
        "pct_at_or_above_level"
       ]
      },
      {
       "name": "Data Notes",
       "n_rows": 17,
       "columns": [
        "Accountability reporting rules"
       ]
      }
     ]
    },
    {
     "name": "PARCC 2015 DC Grades 3-8 English Language Arts School Results",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20Grades%203-8%20English%20Language%20Arts%20School%20Results_1.xlsx",
     "kind": "xlsx",
     "year": "2014-15",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1184545",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2014-15",
     "tabs": [
      {
       "name": "School Level 3-8 ELA",
       "n_rows": 170,
       "columns": [
        "Grades 3-8 English"
       ]
      },
      {
       "name": "lookup",
       "n_rows": 19,
       "columns": [
        "PerfLevel",
        "Test Taken"
       ]
      },
      {
       "name": "pct_at_level",
       "n_rows": 731,
       "columns": [
        "School Ward",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Tested Grade",
        "pct_1",
        "pct_2",
        "pct_3",
        "pct_4",
        "pct_5",
        "total_testtakers"
       ]
      },
      {
       "name": "pct_at_or_above_level",
       "n_rows": 3651,
       "columns": [
        "leacode",
        "leaname",
        "schoolcode",
        "schoolname",
        "breakdown",
        "level",
        "pct_at_or_above_level"
       ]
      },
      {
       "name": "Data Notes",
       "n_rows": 14,
       "columns": [
        "Accountability reporting rules"
       ]
      }
     ]
    },
    {
     "name": "PARCC 2015 DC HS Aggregate State, Sector, and School Results",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20HS%20Aggregate%20State%2C%20Sector%2C%20and%20School%20Results.xlsx",
     "kind": "xlsx",
     "year": "2014-15",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1184545",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2014-15",
     "tabs": [
      {
       "name": "School",
       "n_rows": 630,
       "columns": [
        "School Ward",
        "lea code",
        "lea name",
        "school code",
        "school name",
        "subject",
        "subgroup",
        "% level 4+",
        "% level 3+",
        "% level 1",
        "% level 2",
        "% level 3",
        "% level 4",
        "% level 5",
        "total valid tests",
        "% of population"
       ]
      },
      {
       "name": "State & Sector",
       "n_rows": 77,
       "columns": [
        "sector",
        "subject",
        "subgroup",
        "% level 4+",
        "% level 3+",
        "% level 1",
        "% level 2",
        "% level 3",
        "% level 4",
        "% level 5",
        "total valid tests",
        "% of population"
       ]
      },
      {
       "name": "Data Notes",
       "n_rows": 16,
       "columns": [
        "Accountability reporting rules"
       ]
      }
     ]
    },
    {
     "name": "PARCC 2015 DC High School English II School Results",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20HS%20English%20II%20School%20Results_0.xlsx",
     "kind": "xlsx",
     "year": "2014-15",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1184545",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2014-15",
     "tabs": [
      {
       "name": "School Level HS ELA",
       "n_rows": 57,
       "columns": [
        "High School English II"
       ]
      },
      {
       "name": "lookup",
       "n_rows": 6,
       "columns": [
        "PerfLevel"
       ]
      },
      {
       "name": "pct_level+_HS_ELA",
       "n_rows": 219,
       "columns": [
        "leacode",
        "leaname",
        "schoolcode",
        "schoolname",
        "level",
        "pct_at_level",
        "pct_at_level"
       ]
      },
      {
       "name": "Data Notes",
       "n_rows": 13,
       "columns": [
        "Accountability reporting rules"
       ]
      }
     ]
    },
    {
     "name": "PARCC 2015 DC High School Math School Results",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/PARCC%202015%20DC%20HS%20Math%20School%20Results_0.xlsx",
     "kind": "xlsx",
     "year": "2014-15",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://osse.dc.gov/node/1184545",
     "series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)",
     "label": "2014-15 Math",
     "tabs": [
      {
       "name": "School Level HS Math",
       "n_rows": 56,
       "columns": [
        "High School Math"
       ]
      },
      {
       "name": "lookup",
       "n_rows": 6,
       "columns": [
        "PerfLevel"
       ]
      },
      {
       "name": "pct_level+_HS_Math",
       "n_rows": 215,
       "columns": [
        "leacode",
        "leaname",
        "schoolcode",
        "schoolname",
        "level",
        "pct_at_level",
        "pct_at_level"
       ]
      },
      {
       "name": "Data Notes",
       "n_rows": 13,
       "columns": [
        "Accountability reporting rules"
       ]
      }
     ]
    }
   ],
   "search": "statewide assessment results 2023-24 (+ older-year archive index) osse best entry point for older assessment years. url pattern changed over time: old years use /page/yyyy-yy-parcc-and-msaa-..., new years use /assessmentresultsyyyy — a key fragmentation point. excel (box) + pdf assessment test scores proficiency parcc dc cape msaa reading math dc public schools student assessment results (csv export) objectid school_year school_ward school_code school_name lea_code lea_name assessment_type subject tested_grade_subject grade_of_enrollment subgroup subgroup_value percent_meeting_or_exceeding_e percent_level_3_ percent_level_1 percent_level_2 percent_level_3 percent_level_4 percent_level_5 total_number_valid_test_takers created_date last_edited_date 2023-24 state level statewide assessment data data notes and business rules 2023-24 statewide assessment results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes meeting, exceeding aggregation level lea code school code metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent approaching, meeting, exceeding aggregation level lea code school code metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent performance level aggregation level lea code school code metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent participation aggregation level lea code school code metric assessment name subject student group student group value grade of enrollment school framework count total count percent subclaim aggregation level lea code school code assessment name subject metric tested grade/subject grade of enrollment school framework percent meeting expectations percent approaching expectations percent below expectations student group total count 2023-24 lea level statewide assessment data data notes and business rules 2023-24 statewide assessment results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes meeting, exceeding aggregation level lea code lea name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent approaching, meeting, exceeding aggregation level lea code lea name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent performance level aggregation level lea code lea name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent participation aggregation level lea code lea name metric assessment name subject student group student group value grade of enrollment school framework count total count percent subclaim aggregation level lea code lea name metric assessment name subject student group tested grade/subject grade of enrollment school framework percent meeting expectations percent approaching expectations percent below expectations total count 2023-24 school level statewide assessment data data notes and business rules 2023-24 statewide assessment results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes meeting, exceeding aggregation level lea code lea name school code school name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent approaching, meeting, exceeding aggregation level lea code lea name school code school name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent performance level aggregation level lea code lea name school code school name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent participation aggregation level lea code lea name school code school name metric assessment name subject student group student group value grade of enrollment school framework count total count percent subclaim aggregation level lea code lea name school code school name metric assessment name subject student group tested grade/subject grade of enrollment school framework percent meeting expectations percent approaching expectations percent below expectations total count 2022-23 state level statewide assessment data data notes and business rules 2022-23 statewide assessment results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes meeting, exceeding aggregation level lea code school code metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent approaching, meeting, exceeding aggregation level lea code school code metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent performance level aggregation level lea code school code metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent participation aggregation level lea code school code metric assessment name subject student group student group value grade of enrollment school framework count total count percent subclaim aggregation level lea code school code assessment name subject metric tested grade/subject grade of enrollment school framework percent meeting expectations percent approaching expectations percent below expectations student group total count adjusted achievement aggregation level lea code school code metric assessment name subject student group student group value school framework total count percent accommodations aggregation level asessment name subject student group tested grade/subject grade of enrollment school framework total count count percent 2022-23 lea level statewide assessment data data notes and business rules 2022-23 statewide assessment results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes meeting, exceeding aggregation level lea code lea name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent approaching, meeting, exceeding aggregation level lea code lea name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent performance level aggregation level lea code lea name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent participation aggregation level lea code lea name metric assessment name subject student group student group value grade of enrollment school framework count total count percent subclaim aggregation level lea code lea name metric assessment name subject student group tested grade/subject grade of enrollment school framework percent meeting expectations percent approaching expectations percent below expectations total count adjusted achievement aggregation level lea code lea name metric assessment name subject student group student group value school framework total count percent 2022-23 school level statewide assessment data data notes and business rules 2022-23 statewide assessment results office of the state superintendent of education data dictionary sheet field name variable type allowable values notes meeting, exceeding aggregation level lea code lea name school code school name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent approaching, meeting, exceeding aggregation level lea code lea name school code school name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent performance level aggregation level lea code lea name school code school name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent performance level continue aggregation level lea code lea name school code school name metric assessment name subject student group student group value tested grade/subject grade of enrollment school framework count total count percent participation aggregation level lea code lea name school code school name metric assessment name subject student group student group value grade of enrollment school framework count total count percent subclaim aggregation level lea code lea name metric school code school name assessment name subject student group tested grade/subject grade of enrollment school framework percent meeting expectations percent approaching expectations percent below expectations total count adjusted achievement aggregation level lea code lea name school code school name metric assessment name subject student group student group value school framework total count percent 2022-23 participation of students with&nbsp; disabilities in the regular assessment with&nbsp; accommodations data notes and business rules 2022-23 participation of students with disabilities in the regular assessment with accommodations school reporting level lea code lea name school code school name assessment subject assessment name number of swds who tested with accommodations lea reporting level lea code lea name assessment subject assessment name number of swds who tested with accommodations state reporting level assessment subject assessment name number of swds who tested with accommodations 2021-22 state level parcc and msaa data data notes and business rules overview: prof aggregation level lea code school code assessment name subject student group subgroup value tested grade/subject grade of enrollment count total count percent perf_level aggregation level lea code school code assessment name subject student group subgroup value tested grade/subject grade of enrollment metric_value count total count percent subclaim aggregation level lea code school code grade of enrollment assessment name subject tested grade/subject student group subclaim percent meeting expectations percent approaching expectations percent below expectations total count 2021-22 school, lea, and state participation data notes overview: state aggregation level lea code school code assessment name subject student group subgroup value grade of enrollment count total count percent lea aggregation level lea code lea name school code assessment name subject student group subgroup value grade of enrollment count total count percent school aggregation level lea code lea_name school code school name assessment name subject student group subgroup value grade of enrollment count total count percent 2021-22 parcc and msaa participation and performance results for students with disabilities data notes and business rules overview: data dictionary data field description permitted value data source state output subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ lea output lea code lea name subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ school output lea code lea name school code school name subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ 2018-19 parcc ela school level data notes overview: school ela overall 2019 parcc english language arts/literacy results overall performance by school school ela grade 3 2019 parcc english language arts/literacy results grade 3 performance by school school ela grade 4 2019 parcc english language arts/literacy results grade 4 performance by school school ela grade 5 2019 parcc english language arts/literacy results grade 5 performance by school school ela grade 6 2019 parcc english language arts/literacy results grade 6 performance by school school ela grade 7 2019 parcc english language arts/literacy results grade 7 performance by school school ela grade 8 2019 parcc english language arts/literacy results grade 8 performance by school school ela grades 9-12 2019 parcc english language arts/literacy results grades 9-12 performance by school 2018-19 parcc mathematics school level data notes overview: school math overall 2019 parcc mathematics results overall performance by school school math grade 3 2019 parcc mathematics results grade 3 performance by school school math grade 4 2019 parcc mathematics results grade 4 performance by school school math grade 5 2019 parcc mathematics results grade 5 performance by school school math grade 6 2019 parcc mathematics results grade 6 performance by school school math grade 7 2019 parcc mathematics results grade 7 performance by school school math grade 8 2019 parcc mathematics results grade 8 performance by school school math grades 9-12 2019 parcc mathematics results grades 9-12 performance by school 2018-19 detailed parcc and msaa performance results data notes overview: state performance assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers percent subclaim level 1 (met or exceeded expectations) percent subclaim level 2 (nearly met expectations) percent subclaim level 3 (below expectations) lea performance lea code lea name assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers percent subclaim level 1 (met or exceeded expectations) percent subclaim level 2 (nearly met expectations) percent subclaim level 3 (below expectations) school performance school ward lea code lea name school code school name assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers percent subclaim level 1 (met or exceeded expectations) percent subclaim level 2 (nearly met expectations) percent subclaim level 3 (below expectations) 2018-19, 2017-18, 2016-17 school, lea, and state participation data notes overview: state level ela math lea level ela math school level ela math 2018-19 parcc and msaa participation and performance results for students with disabilities data notes and business rules overview: data dictionary data field description permitted value data source state output subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ lea output lea code lea name subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ school output lea code lea name school code school name subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ 2017-18 parcc ela school level data notes overview: school ela overall 2018 parcc english language arts/literacy results overall performance by school school ela grade 3 2018 parcc english language arts/literacy results grade 3 performance by school school ela grade 4 2018 parcc english language arts/literacy results grade 4 performance by school school ela grade 5 2018 parcc english language arts/literacy results grade 5 performance by school school ela grade 6 2018 parcc english language arts/literacy results grade 6 performance by school school ela grade 7 2018 parcc english language arts/literacy results grade 7 performance by school school ela grade 8 2018 parcc english language arts/literacy results grade 8 performance by school school ela grades 9-12 2018 parcc english language arts/literacy results grades 9-12 performance by school 2017-18 parcc mathematics school level data notes overview: school math overall 2018 parcc mathematics results overall performance by school school math grade 3 2018 parcc mathematics results grade 3 performance by school school math grade 4 2018 parcc mathematics results grade 4 performance by school school math grade 5 2018 parcc mathematics results grade 5 performance by school school math grade 6 2018 parcc mathematics results grade 6 performance by school school math grade 7 2018 parcc mathematics results grade 7 performance by school school math grade 8 2018 parcc mathematics results grade 8 performance by school school math grades 9-12 2018 parcc mathematics results grades 9-12 performance by school 2017-18 detailed parcc and msaa performance results data notes overview: state performance assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers percent subclaim level 1 (met or exceeded expectations) percent subclaim level 2 (nearly met expectations) percent subclaim level 3 (below expectations) lea performance lea code lea name assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers percent subclaim level 1 (met or exceeded expectations) percent subclaim level 2 (nearly met expectations) percent subclaim level 3 (below expectations) school performance school ward lea code lea name school code school name assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers percent subclaim level 1 (met or exceeded expectations) percent subclaim level 2 (nearly met expectations) percent subclaim level 3 (below expectations) 2017-18 school, lea, and state participation data notes overview: state level ela math lea level ela math school level ela math 2017-18 parcc and msaa participation and performance results for students with disabilities data notes and business rules overview: data dictionary data field description permitted value data source state output subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ lea output lea code lea name subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ school output lea code lea name school code school name subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ detailed 2014 15 parcc and msaa performance data notes overview: state performance school year assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers sector performance school year sector assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers lea performance school year lea code lea name assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers school performance school year school ward school code school name lea code lea name assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers 2016-17 parcc ela school level data notes overview: school ela overall 2017 parcc english language arts/literacy results overall performance by school school ela grade 3 2017 parcc english language arts/literacy results grade 3 performance by school school ela grade 4 2017 parcc english language arts/literacy results grade 4 performance by school school ela grade 5 2017 parcc english language arts/literacy results grade 5 performance by school school ela grade 6 2017 parcc english language arts/literacy results grade 6 performance by school school ela grade 7 2017 parcc english language arts/literacy results grade 7 performance by school school ela grade 8 2017 parcc english language arts/literacy results grade 8 performance by school school ela grades 9-12 2017 parcc english language arts/literacy results grades 9-12 performance by school 2016-17 parcc mathematics school level data notes overview: school math overall 2017 parcc mathematics results overall performance by school school math grade 3 2017 parcc mathematics results grade 3 performance by school school math grade 4 2017 parcc mathematics results grade 4 performance by school school math grade 5 2017 parcc mathematics results grade 5 performance by school school math grade 6 2017 parcc mathematics results grade 6 performance by school school math grade 7 2017 parcc mathematics results grade 7 performance by school school math grade 8 2017 parcc mathematics results grade 8 performance by school school math grades 9-12 2017 parcc mathematics results grades 9-12 performance by school 2016-17 detailed parcc and msaa performance results data notes overview: state performance assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers lea performance lea code lea name assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers school performance school ward lea code lea name school code school name assessment type subject tested grade/subject grade of enrollment subgroup subgroup value percent meeting or exceeding expectations percent level 3+ percent level 1 percent level 2 percent level 3 percent level 4 percent level 5 total number valid test takers 2016-17 parcc and msaa performance results for students with disabilities data dictionary data field description permitted value data source data notes and business rules overview: state output subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ lea output lea code lea name subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ school output lea code lea name school code school name subject tested grade/subject grade of enrollment total number of valid parcc test takers total number of parcc test takers with performance level 4+ percent of total parcc test takers with performance level 4+ number of students with disabilities who took parcc number of students with disabilities who took parcc with performance level 4+ percent of students with disabilities who took parcc with performance level 4+ number of students w/ disabilities taking parcc w/ registered accommodations number of students w/ disabilities taking parcc w/ registered accommodations & performance level 4+ number of alternate assessment test takers number of alternate test takers with performance level 3+ percent of alternate test takers with performance level 3+ 2016-17 school, lea, and state participation data notes overview: state level ela math lea level ela math school level ela math parcc ela school level 2015-16 data notes overview: school level ela english language arts/literacy hidden - lookup perflevel test taken ward leacode leaname schoolcode schoolname hidden - pct_at_level school ward lea code lea name school code school name tested grade/subject % level 1 % level 2 % level 3 % level 4 % level 5 total valid test takers hidden-pct_at_or_above_level leacode leaname schoolcode schoolname testedgrade metric pct_at_or_above_level parcc math school level 2015-16 data notes overview: school level math mathematics hidden - lookup perflevel test taken ward leacode leaname schoolcode schoolname hidden - pct_at_level school ward lea code lea name school code school name tested grade/subject % level 1 % level 2 % level 3 % level 4 % level 5 total valid test takers hidden-pct_at_or_above_level leacode leaname schoolcode schoolname tested grade/subject level pct_at_or_above_level school, lea, and state participation 2015-16 state level ela math lea level ela math school level ela math data notes overview: parcc 2015 dc grades 3-8 aggregate state, sector, and school results school school ward lea code lea name school code school name tested grade subject category subgroup enrollment grade % level 4+ % level 3+ % level 1 % level 2 % level 3 % level 4 % level 5 total valid tests % of total tested population state & sector sector tested grade subject category subgroup enrollment grade % level 4+ % level 3+ % level 1 % level 2 % level 3 % level 4 % level 5 total valid tests % of total tested population data notes accountability reporting rules parcc 2015 dc grades 3-8 math school results school level 3-8 math grades 3-8 math lookup perflevel breakdown (test taken and/or enrollment grade) pct_at_each_level school ward lea code lea name school code school name breakdown pct_1 pct_2 pct_3 pct_4 pct_5 test takers pct_at_or_above_level leacode leaname schoolcode schoolname breakdown level pct_at_or_above_level data notes accountability reporting rules parcc 2015 dc grades 3-8 english language arts school results school level 3-8 ela grades 3-8 english lookup perflevel test taken pct_at_level school ward lea code lea name school code school name tested grade pct_1 pct_2 pct_3 pct_4 pct_5 total_testtakers pct_at_or_above_level leacode leaname schoolcode schoolname breakdown level pct_at_or_above_level data notes accountability reporting rules parcc 2015 dc hs aggregate state, sector, and school results school school ward lea code lea name school code school name subject subgroup % level 4+ % level 3+ % level 1 % level 2 % level 3 % level 4 % level 5 total valid tests % of population state & sector sector subject subgroup % level 4+ % level 3+ % level 1 % level 2 % level 3 % level 4 % level 5 total valid tests % of population data notes accountability reporting rules parcc 2015 dc high school english ii school results school level hs ela high school english ii lookup perflevel pct_level+_hs_ela leacode leaname schoolcode schoolname level pct_at_level pct_at_level data notes accountability reporting rules parcc 2015 dc high school math school results school level hs math high school math lookup perflevel pct_level+_hs_math leacode leaname schoolcode schoolname level pct_at_level pct_at_level data notes accountability reporting rules"
  },
  {
   "id": "osse-enrollment-audit",
   "name": "Audited Enrollment Reports & Data",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/enrollment",
   "topics": [
    "enrollment",
    "demographics"
   ],
   "status": "ok",
   "format": "Per-year PDF audit report + Excel (.xlsx) data",
   "cadence": "Annual; fall count, finalized ~winter (Jan/Feb)",
   "years": "FY2012 (SY2011-12) → FY2026; older 2006–2010 section; SLED hosts 2001–2009",
   "notes": "THE canonical enrollment source — independently audited per DC Code 38-1804.02. Drives per-pupil funding. DCPS, PCSB, EdScape and the MFP all build on this. Each year is a separate click-through page. Note OSSE data-suppression policy hides 0%/100% small-subgroup values.",
   "files": [],
   "search": "audited enrollment reports & data osse the canonical enrollment source — independently audited per dc code 38-1804.02. drives per-pupil funding. dcps, pcsb, edscape and the mfp all build on this. each year is a separate click-through page. note osse data-suppression policy hides 0%/100% small-subgroup values. per-year pdf audit report + excel (.xlsx) data enrollment demographics students headcount count population race ethnicity special education english learner at-risk poverty"
  },
  {
   "id": "osse-aggregate-enrollment",
   "name": "Report Card Aggregate Enrollment Data (demographics file)",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/page/dc-school-report-card-resource-library",
   "topics": [
    "demographics",
    "enrollment"
   ],
   "status": "ok",
   "format": "Excel (.xlsx)",
   "cadence": "Annual",
   "years": "2018–2025 (one file per year in the Resource Library)",
   "notes": "Best downloadable source for school-level demographics (race/ethnicity, SWD, EL, at-risk, economic disadvantage). Filenames vary by year — find the year's exact 'Aggregate Enrollment Data' file in the Resource Library.",
   "files": [
    {
     "name": "DC School Report Card Aggregate Enrollment Data (2025)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Aggregate%20Enrollment%20Data%20%282025%29.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Data Notes",
       "n_rows": 11,
       "columns": [
        "2024-25 School Year DC School Report Card Aggregate Enrollment Data Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Data Dictionary",
       "n_rows": 14,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Ever Enrolled Population",
       "n_rows": 6533,
       "columns": [
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Entity Type",
        "Ward",
        "Student Group",
        "Grade",
        "Percent Enrolled",
        "Enrollment Count",
        "Total Count of Students",
        "School Year"
       ]
      }
     ]
    }
   ],
   "search": "report card aggregate enrollment data (demographics file) osse best downloadable source for school-level demographics (race/ethnicity, swd, el, at-risk, economic disadvantage). filenames vary by year — find the year's exact 'aggregate enrollment data' file in the resource library. excel (.xlsx) demographics enrollment race ethnicity special education english learner at-risk poverty students headcount count population dc school report card aggregate enrollment data (2025) data notes 2024-25 school year dc school report card aggregate enrollment data office of the state superintendent of education data dictionary office of the state superintendent of education ever enrolled population lea code lea name school code school name entity type ward student group grade percent enrolled enrollment count total count of students school year"
  },
  {
   "id": "osse-special-ed",
   "name": "Specialized Education Data and Reports",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/service/specialized-education-data-and-reports",
   "topics": [
    "demographics",
    "special-education"
   ],
   "status": "ok",
   "format": "PDF + Excel",
   "cadence": "Annual (federal FFY cycle)",
   "years": "Reports to the Public FFY2008–FFY2023-24; APRs FFY2020–2024",
   "notes": "Mostly statewide/aggregate. For school-level special-ed counts use the Report Card Aggregate Enrollment file or EdScape.",
   "files": [],
   "search": "specialized education data and reports osse mostly statewide/aggregate. for school-level special-ed counts use the report card aggregate enrollment file or edscape. pdf + excel demographics special-education race ethnicity special education english learner at-risk poverty "
  },
  {
   "id": "osse-attendance",
   "name": "School Year Attendance Reporting (chronic absenteeism/truancy)",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/page/2024-25-school-year-attendance-reporting",
   "topics": [
    "attendance"
   ],
   "status": "ok",
   "format": "PDF report + 2 mid-year briefs + Excel files",
   "cadence": "Full report ~November; mid-year briefs during the year",
   "years": "2024-25 on page; 2023-24 at /attendancesy202324; earlier years on own pages",
   "notes": "OSSE leads with chronic absenteeism / chronic truancy (10% threshold), not 'in-seat attendance.' SY24-25: 39.5% chronic absenteeism, 36.8% chronic truancy.",
   "files": [
    {
     "name": "District of Columbia Attendance Report 2024-25",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024-25%20Attendance%20Report.pdf",
     "kind": "pdf",
     "year": "2024-25",
     "status": "ok",
     "topics": [
      "attendance"
     ],
     "n_pages": 50,
     "has_tabular_data": true,
     "n_table_pages": 4,
     "tables": [
      {
       "page": 41,
       "header": [
        "Year",
        "Metric",
        "Percentage",
        "Students"
       ],
       "n_rows": 21
      },
      {
       "page": 42,
       "header": [
        "Grade",
        "Absenteeism Risk Tier",
        "Percentage",
        "Students",
        "Total"
       ],
       "n_rows": 24
      },
      {
       "page": 43,
       "header": [
        "Grade",
        "Absenteeism Risk Tier",
        "Percentage",
        "Students",
        "Total"
       ],
       "n_rows": 25
      },
      {
       "page": 44,
       "header": [
        "Grade",
        "Absenteeism Risk Tier",
        "Percentage",
        "Students",
        "Total"
       ],
       "n_rows": 22
      }
     ]
    }
   ],
   "search": "school year attendance reporting (chronic absenteeism/truancy) osse osse leads with chronic absenteeism / chronic truancy (10% threshold), not 'in-seat attendance.' sy24-25: 39.5% chronic absenteeism, 36.8% chronic truancy. pdf report + 2 mid-year briefs + excel files attendance truancy absenteeism chronic absent district of columbia attendance report 2024-25 year metric percentage students grade absenteeism risk tier percentage students total grade absenteeism risk tier percentage students total grade absenteeism risk tier percentage students total"
  },
  {
   "id": "osse-attendance-dashboard",
   "name": "OSSE Attendance Dashboard",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/attendancedashboard",
   "topics": [
    "attendance"
   ],
   "status": "ok",
   "format": "Interactive dashboard + user-guide PDF",
   "cadence": "Monthly updates (cumulative year-to-date, not real-time)",
   "years": "Current school year (rolling); history via annual report pages",
   "notes": "Citywide DCPS + charter. Embedded viz needs a browser to render.",
   "files": [],
   "search": "osse attendance dashboard osse citywide dcps + charter. embedded viz needs a browser to render. interactive dashboard + user-guide pdf attendance truancy absenteeism chronic absent"
  },
  {
   "id": "osse-graduation",
   "name": "High School Graduation Rates / ACGR",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/service/high-school-graduation-rates-0",
   "topics": [
    "graduation"
   ],
   "status": "ok",
   "format": "Recent years: direct Excel (.xlsx); older years: /publication/ pages",
   "cadence": "Annual, released ~winter for prior spring cohort",
   "years": "2024-25 back to 2010-11 (+2009) — ~15 years",
   "notes": "Cross-sector (DCPS + charter), 4-yr and 5-yr ACGR with subgroups. 2020-21+ link straight to .xlsx; 2019-20 and earlier use /publication/ pages — a fragmentation point. SY24-25: 78.7% 4-yr.",
   "files": [],
   "search": "high school graduation rates / acgr osse cross-sector (dcps + charter), 4-yr and 5-yr acgr with subgroups. 2020-21+ link straight to .xlsx; 2019-20 and earlier use /publication/ pages — a fragmentation point. sy24-25: 78.7% 4-yr. recent years: direct excel (.xlsx); older years: /publication/ pages graduation grad rate diploma acgr dropout"
  },
  {
   "id": "osse-discipline",
   "name": "OSSE Discipline Report ('State of Discipline')",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/page/discipline-report",
   "topics": [
    "discipline"
   ],
   "status": "ok",
   "format": "PDF reports (school detail in appendices); rare supplementary Excel",
   "cadence": "Annual (latest 2024-25 dated 12/30/2025)",
   "years": "2013-14 through 2024-25 (2014-15 appears missing)",
   "notes": "Suspensions/expulsions/involuntary dismissals per the Student Fair Access to School Act. Mostly PDF — only 2017-18 has a clean supplementary Excel; by-school data otherwise lives in report appendices.",
   "files": [],
   "search": "osse discipline report ('state of discipline') osse suspensions/expulsions/involuntary dismissals per the student fair access to school act. mostly pdf — only 2017-18 has a clean supplementary excel; by-school data otherwise lives in report appendices. pdf reports (school detail in appendices); rare supplementary excel discipline suspension expulsion suspended discipline"
  },
  {
   "id": "osse-finance-ppe",
   "name": "Report Card School Finance Data (per-pupil expenditures)",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/page/dc-school-report-card-resource-library",
   "topics": [
    "finance"
   ],
   "status": "ok",
   "format": "Excel (.xlsx)",
   "cadence": "Annual",
   "years": "2021–2025 files in the Resource Library",
   "notes": "ESSA per-pupil expenditure (PPE) by school and LEA, split by funding source and expenditure type. This is actual EXPENDITURE (cross-sector), distinct from DCPS budget ALLOCATIONS — see overlaps.",
   "files": [
    {
     "name": "DC School Report Card School Finance Data (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20School%20Finance%20Data%20%282024%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "finance"
     ],
     "series": "School Finance / Per-Pupil Expenditures",
     "label": "2024",
     "tabs": [
      {
       "name": "Overview",
       "n_rows": 4,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "Finance Data",
       "n_rows": 74,
       "columns": [
        "Record ID#",
        "LEA Code",
        "LEA Name",
        "School_Year",
        "Total Enrollment Count Prior Year",
        "Total Enrollment Count FY24",
        "Total School Level Expenditures State/Local",
        "Total State/Local Expenditures Centralized",
        "Aggregate State/Local Expenditures",
        "Per-Pupil Expenditure State/Local",
        "Total School Level Expenditures Federal",
        "Total School Share of Centralized Expenditures Federal",
        "Per-Pupil Expenditure Federal",
        "Per-Pupil Expenditure Total",
        "Per-Pupil Local Expenditures FY23",
        "Per-Pupil Local Expenditures FY24",
        "Per-Pupil Local Expenditures Difference from Prior Year",
        "LEA Total Expenditures",
        "Aggregate State/Local Expenditures Prior Year",
        "Aggregate Expenditures Difference from Prior Year",
        "Aggregate Expenditure Level Required to Meet the MOE Requirement",
        "Aggregate Expenditure Amount by which LEA Exceeded",
        "Aggregate Expenditure Potential Percentage Reduction in FY18 LEA Allocation",
        "If the LEA failed, the MOE test*: Potential Percentage Reduction in future LEA Allocation (Aggregate Expenditure)",
        "Per-Pupil Expenditures Test MOE Test Result",
        "LEA Excluded Expenditure FY24",
        "State/Local Expenditures for Maintenance of Effort FY23 (SY 22-23)",
        "LEA Level Expenditures- New",
        "Total Total School Share of Centralized Expenditures State/Local",
        "Total School Expenditures",
        "Total Excluded Expenditures",
        "Total Expenditures",
        "Per-Pupil Expenditure State/Local Percentage",
        "Per-Pupil Expenditures Federal Percentage",
        "Per-Pupil School-Level Expenditure",
        "Per-Pupil School Share of Centralized Expenditures",
        "Per-Pupil School-Level Expenditure Percentage",
        "Per-Pupil School Share of Centralized Expenditures Percentage",
        "Per-Pupil School-Level Expenditure State/Local",
        "Per-Pupil School-Level Expenditure Federal",
        "Per-Pupil School Share of Centralized Expenditures State/Local",
        "Per-Pupil School Share of Centralized Expenditures Federal",
        "MoE Status",
        "Sum of Total LEA Expenditures(CFRS)",
        "LEA Total Exclusions",
        "Total Network Expenditures (Sum of LEA Total Exclusions and Total LEA Expenditures)"
       ]
      }
     ]
    },
    {
     "name": "DC School Report Card Common Financial Reporting Standards (2024)",
     "url": "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/DC%20School%20Report%20Card%20Common%20Financial%20Reporting%20Standards%20%282024%29.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "finance",
      "methodology"
     ],
     "tabs": [
      {
       "name": "Overview",
       "n_rows": 4,
       "columns": [
        "Office of the State Superintendent of Education"
       ]
      },
      {
       "name": "CFRS",
       "n_rows": 266,
       "columns": [
        "Record ID#",
        "uniquecode",
        "LEA Code",
        "LEA Name",
        "School Code",
        "School Name",
        "Enrollment Count FY23",
        "Enrollment Count FY24",
        "Total School Level Expenditures Federal",
        "Total School Level Expenditures State/Local",
        "Total School Share of Centralized Expenditures State/Local",
        "Total School Share of Centralized Expenditures Federal",
        "Total School Expenditures",
        "Per Pupil Expenditure State/Local",
        "Per Pupil Expenditure Federal",
        "Per Pupil Expenditure Total",
        "Per Pupil Expenditure State/Local Percentage",
        "Per Pupil Expenditure Federal Percentage",
        "Per Pupil School-Level Expenditure",
        "Per Pupil School Share of Centralized Expenditures",
        "Per Pupil School Share of Centralized Expenditures Percentage",
        "Per Pupil School-Level Expenditure State/Local",
        "Per Pupil School-Level Expenditure Federal",
        "Per Pupil School Share of Centralized Expenditures State/Local",
        "Per Pupil School Share of Centralized Expenditures Federal",
        "Per Pupil School-Level Expenditure Percentage",
        "Site Based Instructional Staff",
        "Site Based Student Supports Staff",
        "Site Based School Administrators",
        "Site Based Instructional Supports",
        "Site Based Educational Materials",
        "Site Based Non-Educational Administrative Costs",
        "Site Based Buildings",
        "Site Based Operations",
        "Site Based Food Service",
        "Site Based Total Expenditures",
        "Centralized Instructional Staff",
        "Centralized Student Supports Staff",
        "Centralized School Administrators",
        "Centralized Instructional Supports",
        "Centralized Educational Materials",
        "Centralized Non-Educational Administrative Costs",
        "Centralized Buildings",
        "Centralized Operations",
        "Centralized Food Service",
        "Centralized Total Expenditures",
        "Total Instructional Staff",
        "Total Student Supports Staff",
        "Total School Administrators",
        "Total Instructional Supports",
        "Total Educational Materials",
        "Total Non-Educational Administrative Costs",
        "Total Buildings",
        "Total Operations",
        "Total Food Service",
        "Total LEA Expenditures",
        "Per Pupil Based Instructional Staff",
        "Per Pupil Student Supports Staff",
        "Per Pupil School Administrators",
        "Per Pupil Instructional Supports"
       ]
      }
     ]
    }
   ],
   "search": "report card school finance data (per-pupil expenditures) osse essa per-pupil expenditure (ppe) by school and lea, split by funding source and expenditure type. this is actual expenditure (cross-sector), distinct from dcps budget allocations — see overlaps. excel (.xlsx) finance spending money budget cost dollars per-pupil expenditure funding dc school report card school finance data (2024) overview office of the state superintendent of education finance data record id# lea code lea name school_year total enrollment count prior year total enrollment count fy24 total school level expenditures state/local total state/local expenditures centralized aggregate state/local expenditures per-pupil expenditure state/local total school level expenditures federal total school share of centralized expenditures federal per-pupil expenditure federal per-pupil expenditure total per-pupil local expenditures fy23 per-pupil local expenditures fy24 per-pupil local expenditures difference from prior year lea total expenditures aggregate state/local expenditures prior year aggregate expenditures difference from prior year aggregate expenditure level required to meet the moe requirement aggregate expenditure amount by which lea exceeded aggregate expenditure potential percentage reduction in fy18 lea allocation if the lea failed, the moe test*: potential percentage reduction in future lea allocation (aggregate expenditure) per-pupil expenditures test moe test result lea excluded expenditure fy24 state/local expenditures for maintenance of effort fy23 (sy 22-23) lea level expenditures- new total total school share of centralized expenditures state/local total school expenditures total excluded expenditures total expenditures per-pupil expenditure state/local percentage per-pupil expenditures federal percentage per-pupil school-level expenditure per-pupil school share of centralized expenditures per-pupil school-level expenditure percentage per-pupil school share of centralized expenditures percentage per-pupil school-level expenditure state/local per-pupil school-level expenditure federal per-pupil school share of centralized expenditures state/local per-pupil school share of centralized expenditures federal moe status sum of total lea expenditures(cfrs) lea total exclusions total network expenditures (sum of lea total exclusions and total lea expenditures) dc school report card common financial reporting standards (2024) overview office of the state superintendent of education cfrs record id# uniquecode lea code lea name school code school name enrollment count fy23 enrollment count fy24 total school level expenditures federal total school level expenditures state/local total school share of centralized expenditures state/local total school share of centralized expenditures federal total school expenditures per pupil expenditure state/local per pupil expenditure federal per pupil expenditure total per pupil expenditure state/local percentage per pupil expenditure federal percentage per pupil school-level expenditure per pupil school share of centralized expenditures per pupil school share of centralized expenditures percentage per pupil school-level expenditure state/local per pupil school-level expenditure federal per pupil school share of centralized expenditures state/local per pupil school share of centralized expenditures federal per pupil school-level expenditure percentage site based instructional staff site based student supports staff site based school administrators site based instructional supports site based educational materials site based non-educational administrative costs site based buildings site based operations site based food service site based total expenditures centralized instructional staff centralized student supports staff centralized school administrators centralized instructional supports centralized educational materials centralized non-educational administrative costs centralized buildings centralized operations centralized food service centralized total expenditures total instructional staff total student supports staff total school administrators total instructional supports total educational materials total non-educational administrative costs total buildings total operations total food service total lea expenditures per pupil based instructional staff per pupil student supports staff per pupil school administrators per pupil instructional supports"
  },
  {
   "id": "osse-educator-workforce",
   "name": "DC Educator Workforce Data",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/page/dc-educator-workforce-data",
   "topics": [
    "educators"
   ],
   "status": "ok",
   "format": "PDF reports + Excel (.xlsx) at state/LEA/school level",
   "cadence": "Comprehensive reports biennial; retention briefs annual",
   "years": "Reports 2018-19, 2021-22, 2023-24; data files 2021-22 to 2024-25",
   "notes": "Counts, demographics, preparation, retention, supply/demand for DCPS + charter educators. Staffing snapshot as of Oct 5 each year.",
   "files": [],
   "search": "dc educator workforce data osse counts, demographics, preparation, retention, supply/demand for dcps + charter educators. staffing snapshot as of oct 5 each year. pdf reports + excel (.xlsx) at state/lea/school level educators teacher staff workforce principal retention"
  },
  {
   "id": "osse-prek",
   "name": "Pre-Kindergarten Reports ('State of Pre-K in DC')",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/publication/pre-kindergarten-reports-state-pre-k-district-columbia",
   "topics": [
    "early-childhood",
    "enrollment"
   ],
   "status": "ok",
   "format": "PDF",
   "cadence": "Annual",
   "years": "2012 through 2024",
   "notes": "Narrative + summary stats on pre-K access/quality, not a granular by-school dataset.",
   "files": [],
   "search": "pre-kindergarten reports ('state of pre-k in dc') osse narrative + summary stats on pre-k access/quality, not a granular by-school dataset. pdf early-childhood enrollment pre-k prek preschool child care toddler students headcount count population"
  },
  {
   "id": "osse-early-learning",
   "name": "Early Learning Reports (child care, subsidy, Pay Equity Fund)",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/page/early-learning-reports",
   "topics": [
    "early-childhood",
    "finance"
   ],
   "status": "ok",
   "format": "PDF + linked data",
   "cadence": "Mixed — quarterly subsidy/educator reports; cost model every ~3 years",
   "years": "Cost model 2016/2018/2021/2023/2024; Pay Equity Fund FY25–FY26",
   "notes": "Best entry for early childhood beyond pre-K enrollment.",
   "files": [],
   "search": "early learning reports (child care, subsidy, pay equity fund) osse best entry for early childhood beyond pre-k enrollment. pdf + linked data early-childhood finance pre-k prek preschool child care toddler spending money budget cost dollars per-pupil expenditure funding"
  },
  {
   "id": "osse-essa-plan",
   "name": "DC ESSA State Plan",
   "owner": "OSSE",
   "url": "https://osse.dc.gov/essa",
   "topics": [
    "accountability",
    "methodology"
   ],
   "status": "ok",
   "format": "Web page linking PDFs",
   "cadence": "Updated on amendment",
   "years": "2017 original; 2022 amendment (approved June 2023); 2026-27 waiver pending",
   "notes": "Defines the STAR framework, the 16 measures, weights, and assessment requirements.",
   "files": [],
   "search": "dc essa state plan osse defines the star framework, the 16 measures, weights, and assessment requirements. web page linking pdfs accountability methodology star rating tier sqr pmf aspire score report card quality "
  },
  {
   "id": "osse-sled",
   "name": "SLED — Statewide Longitudinal Education Data (OSSE Reports)",
   "owner": "OSSE",
   "url": "https://sled.osse.dc.gov/info/OSSE-Reports/",
   "topics": [
    "enrollment",
    "assessment",
    "graduation",
    "landing"
   ],
   "status": "login-required",
   "format": "Public PDF/Excel/Tableau links + login-gated Qlik Sense reports",
   "cadence": "Varies; most annual",
   "years": "Includes historical enrollment-audit Excel SY2001–2009",
   "notes": "Two-tier: public direct links vs. credentialed access (SLED login + user agreement) for the main Reports portal.",
   "files": [],
   "search": "sled — statewide longitudinal education data (osse reports) osse two-tier: public direct links vs. credentialed access (sled login + user agreement) for the main reports portal. public pdf/excel/tableau links + login-gated qlik sense reports enrollment assessment graduation landing students headcount count population test scores proficiency parcc dc cape msaa reading math grad rate diploma acgr dropout "
  },
  {
   "id": "dcps-school-data-hub",
   "name": "DCPS School Data (data hub landing)",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/service/school-data",
   "topics": [
    "landing"
   ],
   "status": "ok",
   "format": "Web page (link directory)",
   "cadence": "As underlying resources change",
   "years": "n/a (directory)",
   "notes": "The intended front door for DCPS data, but many items live one or two clicks deeper.",
   "files": [],
   "search": "dcps school data (data hub landing) dcps the intended front door for dcps data, but many items live one or two clicks deeper. web page (link directory) landing "
  },
  {
   "id": "dcps-glance-enrollment",
   "name": "DCPS at a Glance: Enrollment",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/node/966292",
   "topics": [
    "enrollment",
    "demographics"
   ],
   "status": "ok",
   "format": "Web page, static HTML tables",
   "cadence": "Annual, after fall audited-enrollment release",
   "years": "SY17-18 through SY25-26 shown inline",
   "notes": "District TOTALS only (not school-by-school). For school-level use the downloadable dataset or OSSE.",
   "files": [],
   "search": "dcps at a glance: enrollment dcps district totals only (not school-by-school). for school-level use the downloadable dataset or osse. web page, static html tables enrollment demographics students headcount count population race ethnicity special education english learner at-risk poverty"
  },
  {
   "id": "dcps-glance-attendance",
   "name": "DCPS at a Glance: Attendance",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/node/1185940",
   "topics": [
    "attendance"
   ],
   "status": "ok",
   "format": "PDF reports (one per year)",
   "cadence": "Annual",
   "years": "SY11-12 through SY24-25 (14 reports)",
   "notes": "District-level aggregate, filed per DC Code 38-203(i). Granular school-level attendance is better via OSSE.",
   "files": [],
   "search": "dcps at a glance: attendance dcps district-level aggregate, filed per dc code 38-203(i). granular school-level attendance is better via osse. pdf reports (one per year) attendance truancy absenteeism chronic absent"
  },
  {
   "id": "dcps-downloadable-datasets",
   "name": "DCPS Downloadable Data Sets (index)",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/service/dcps-downloadable-data-sets",
   "topics": [
    "enrollment",
    "assessment",
    "graduation",
    "attendance"
   ],
   "status": "ok",
   "format": "Web page indexing Excel (.xlsx) files",
   "cadence": "Varies by dataset",
   "years": "Varies by dataset",
   "notes": "Index of school-and-subgroup-level files: Enrollment, Graduation, DC CAS, SAT, AP, PARCC, Attendance. Each metric is a separate page of yearly Excel files rather than one tidy multi-year table.",
   "files": [
    {
     "name": "DCPS SY25-26 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY25-26%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2025-26",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "SY 2025-26",
       "n_rows": 133,
       "columns": [
        "SCHOOL CODE",
        "SCHOOL NAME",
        "By Grade"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY24-25 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY24-25%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2024-25",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "SY 2024-25",
       "n_rows": 133,
       "columns": [
        "SCHOOL CODE",
        "SCHOOL NAME",
        "By Grade"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY23-24 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY23-24%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2023-24",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "SY 2023-24",
       "n_rows": 133,
       "columns": [
        "SCHOOL CODE",
        "SCHOOL NAME",
        "By Grade"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY22-23 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY22-23%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2022-23",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "SY2022-23",
       "n_rows": 132,
       "columns": [
        "SCHOOL CODE",
        "SCHOOL NAME",
        "By Grade"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY21-22 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-SY21-22-Enrollment-Audit.xlsx",
     "kind": "xlsx",
     "year": "2021-22",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "SY2021-22",
       "n_rows": 132,
       "columns": [
        "SCHOOL CODE",
        "SCHOOL NAME",
        "By Grade"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY20-21 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-SY20-21-Enrollment-Audit.xlsx",
     "kind": "xlsx",
     "year": "2020-21",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "Sheet1",
       "n_rows": 135,
       "columns": [
        "SCHOOL CODE",
        "SCHOOL NAME",
        "By Grade"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY19-20 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-SY19-20-Enrollment-Audit.xlsx",
     "kind": "xlsx",
     "year": "2019-20",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "Sheet1",
       "n_rows": 135,
       "columns": [
        "SCHOOL CODE",
        "SCHOOL NAME",
        "By Grade"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY18-19 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY18-19%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2018-19",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "Sheet1",
       "n_rows": 134,
       "columns": [
        "SCHOOL CODE",
        "SCHOOL NAME",
        "By Grade"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY17-18 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY17-18%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2017-18",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "Sheet1",
       "n_rows": 136,
       "columns": [
        "SCHOOL CODE",
        "SCHOOL NAME",
        "By Grade"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY16-17 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY16-17%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2016-17",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "Sheet1",
       "n_rows": 134,
       "columns": [
        "DATA AS OF: 10/5/2016"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY15-16 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY15-16%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2015-16",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "SY15-16 Enrollment Audit",
       "n_rows": 132,
       "columns": [
        "DATA AS OF: 10/5/2015"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY14-15 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY14-15%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2014-15",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "SY13-14 Enrollment Audit",
       "n_rows": 131,
       "columns": [
        "DATA AS OF: 10/6/2014"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY13-14 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY13-14%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2013-14",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "SY13-14 Enrollment Audit",
       "n_rows": 131,
       "columns": [
        "DATA AS OF: 10/5/2013"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY12-13 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY12-13%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2012-13",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "SY12-13 Enrollment Audit",
       "n_rows": 142,
       "columns": [
        "DATA AS OF: 10/5/2012"
       ]
      }
     ]
    },
    {
     "name": "DCPS SY11-12 Enrollment Audit",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20SY11-12%20Enrollment%20Audit.xlsx",
     "kind": "xlsx",
     "year": "2011-12",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "tabs": [
      {
       "name": "SY11-12 Enrollment Audit",
       "n_rows": 146,
       "columns": [
        "DATA AS OF: 10/5/2011"
       ]
      },
      {
       "name": "Sheet1",
       "n_rows": 126,
       "columns": [
        "462",
        "462"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2025 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202025%20Graduation%20Data%20Overall%20Subgroup.xlsx",
     "kind": "xlsx",
     "year": "2025",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "2025",
       "n_rows": 231,
       "columns": [
        "DATA AS OF: October 2025"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2024 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2024%20ACGR%20Overall%20and%20Subgroup_for%20DCPS%20website.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "2024_redact",
       "n_rows": 224,
       "columns": [
        "DATA AS OF: October 2024"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2023 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2023%20ACGR%20Overall%20and%20Subgroup_for%20DCPS%20website.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "2023_redact",
       "n_rows": 227,
       "columns": [
        "DATA AS OF: 11/30/2023"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2022 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202022%20Graduation%20Data%20Overall%20Subgroup.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "Class of 2022",
       "n_rows": 231,
       "columns": [
        "DATA AS OF: 11/09/2022"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2021 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-2021-Graduation-Data-Overall-Subgroup.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "Class of 2021",
       "n_rows": 231,
       "columns": [
        "DATA AS OF: 11/09/2021"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2020 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-2020-Graduation-Data-Overall-Subgroup.xlsx",
     "kind": "xlsx",
     "year": "2020",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "Class of 2020",
       "n_rows": 235,
       "columns": [
        "DATA AS OF: 10/30/2020"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2019 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS-2019-Graduation-Data-Overall-Subgroup.xlsx",
     "kind": "xlsx",
     "year": "2019",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "Class of 2019",
       "n_rows": 207,
       "columns": [
        "DATA AS OF: 11/6/2019"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2018 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202018%20Graduation%20Data%20Overall%20Subgroup.xlsx",
     "kind": "xlsx",
     "year": "2018",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "Class of 2018",
       "n_rows": 201,
       "columns": [
        "DATA AS OF: 11/9/2018"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2017 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202017%20Graduation%20Data%20Overall%20Subgroup.xlsx",
     "kind": "xlsx",
     "year": "2017",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "Class of 2017",
       "n_rows": 177,
       "columns": [
        "DATA AS OF: 11/3/2017"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2016 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202016%20Graduation%20Data%20Overall%20Subgroup.xlsx",
     "kind": "xlsx",
     "year": "2016",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "Class of 2016",
       "n_rows": 246,
       "columns": [
        "DATA AS OF: 10/20/2016"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2015 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202015%20Graduation%20Data%20Overall%20Subgroup.xlsx",
     "kind": "xlsx",
     "year": "2015",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "Class of 2015",
       "n_rows": 204,
       "columns": [
        "DATA AS OF: 1/26/2016"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2014 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202014%20Graduation%20Data%20Overall%20Subgroup.xlsx",
     "kind": "xlsx",
     "year": "2014",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "Class of 2014",
       "n_rows": 210,
       "columns": [
        "Data as of: 3/8/2016"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2013 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202013%20Graduation%20Data%20Overall%20Subgroup_0.xlsx",
     "kind": "xlsx",
     "year": "2013",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "Sheet1",
       "n_rows": 217,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      }
     ]
    },
    {
     "name": "DCPS 2012 Graduation Data Overall Subgroup",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%202012%20Graduation%20Data%20Overall%20Subgroup_0.xlsx",
     "kind": "xlsx",
     "year": "2012",
     "status": "ok",
     "topics": [
      "graduation"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-graduation-rates",
     "tabs": [
      {
       "name": "Sheet1",
       "n_rows": 225,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      }
     ]
    },
    {
     "name": "DC CAS Scores - School Year 2013-2014",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2013-2014.xlsx",
     "kind": "xlsx",
     "year": "2013",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-dc-cas",
     "tabs": [
      {
       "name": "All Students",
       "n_rows": 458,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "American Indian Students",
       "n_rows": 35,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 156,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 458,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "Hispanic Students",
       "n_rows": 359,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "Multiracial Students",
       "n_rows": 162,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "Nat Hawaiian-Pac Islnd Students",
       "n_rows": 50,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 168,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "Special Education Students",
       "n_rows": 444,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "ELL Students",
       "n_rows": 260,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "Free-Red Price Meal Students",
       "n_rows": 458,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 455,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 456,
       "columns": [
        "DATA AS OF: 8/5/2014"
       ]
      }
     ]
    },
    {
     "name": "DC CAS Scores - School Year 2012-2013",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2012-2013.xlsx",
     "kind": "xlsx",
     "year": "2012",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-dc-cas",
     "tabs": [
      {
       "name": "All Students",
       "n_rows": 518,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "American Indian Students",
       "n_rows": 33,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 170,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 517,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "Hispanic Students",
       "n_rows": 370,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "Multiracial Students",
       "n_rows": 154,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "Nat Hawaiian-Pac Islnd Students",
       "n_rows": 40,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 181,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "Special Education Students",
       "n_rows": 510,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "ELL Students",
       "n_rows": 292,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "Free-Red Price Meal Students",
       "n_rows": 507,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 512,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 510,
       "columns": [
        "DATA AS OF: 11/10/2014"
       ]
      }
     ]
    },
    {
     "name": "DC CAS Scores - School Year 2011-2012",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2011-2012.xlsx",
     "kind": "xlsx",
     "year": "2011",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-dc-cas",
     "tabs": [
      {
       "name": "All Students",
       "n_rows": 514,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "American Indian Students",
       "n_rows": 43,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 167,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 514,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Hispanic Students",
       "n_rows": 363,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Multiracial Students",
       "n_rows": 158,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Nat Hawaiian-Pac Islnd Students",
       "n_rows": 53,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 156,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Special Education Students",
       "n_rows": 501,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "ELL Students",
       "n_rows": 289,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Free-Red Price Meal Students",
       "n_rows": 512,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 509,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 510,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      }
     ]
    },
    {
     "name": "DC CAS Scores - School Year 2010-2011",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2010-2011.xlsx",
     "kind": "xlsx",
     "year": "2010",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-dc-cas",
     "tabs": [
      {
       "name": "All Students",
       "n_rows": 542,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "American Indian Students",
       "n_rows": 39,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 173,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 542,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Hispanic Students",
       "n_rows": 350,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 158,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Special Education Students",
       "n_rows": 534,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "ELL Students",
       "n_rows": 293,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Free-Red Price Meal Students",
       "n_rows": 538,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 536,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 536,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      }
     ]
    },
    {
     "name": "DC CAS Scores - School Year 2009-2010",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2009-2010.xlsx",
     "kind": "xlsx",
     "year": "2009",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-dc-cas",
     "tabs": [
      {
       "name": "All Students",
       "n_rows": 552,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 164,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 552,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Hispanic Students",
       "n_rows": 329,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 141,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Special Education Students",
       "n_rows": 530,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "ELL Students",
       "n_rows": 291,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Free-Red Price Meal Students",
       "n_rows": 548,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 548,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 543,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      }
     ]
    },
    {
     "name": "DC CAS Scores - School Year 2008-2009",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2008-2009.xlsx",
     "kind": "xlsx",
     "year": "2008",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-dc-cas",
     "tabs": [
      {
       "name": "All Students",
       "n_rows": 566,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 159,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 566,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Hispanic Students",
       "n_rows": 341,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 144,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Special Education Students",
       "n_rows": 546,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "ELL Students",
       "n_rows": 336,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Free-Red Price Meal Students",
       "n_rows": 557,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 565,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 559,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      }
     ]
    },
    {
     "name": "DC CAS Scores - School Year 2007-2009",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2007-2008.xlsx",
     "kind": "xlsx",
     "year": "2007",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-dc-cas",
     "tabs": [
      {
       "name": "All Students",
       "n_rows": 675,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 176,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 675,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Hispanic Students",
       "n_rows": 356,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 162,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Special Education Students",
       "n_rows": 648,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "ELL Students",
       "n_rows": 315,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Free-Red Price Meal Students",
       "n_rows": 665,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 671,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 660,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      }
     ]
    },
    {
     "name": "DC CAS Scores - School Year 2006-2007",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DCPS%20DC%20CAS%20SY2006-2007.xlsx",
     "kind": "xlsx",
     "year": "2006",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-dc-cas",
     "tabs": [
      {
       "name": "All Students",
       "n_rows": 697,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 180,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 696,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Hispanic Students",
       "n_rows": 375,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 154,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Special Education Students",
       "n_rows": 675,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "ELL Students",
       "n_rows": 330,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Free-Red Price Meal Students",
       "n_rows": 684,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 691,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 684,
       "columns": [
        "DATA AS OF: 4/7/2014"
       ]
      }
     ]
    },
    {
     "name": "School Year 2024-2025 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202024-2025%20SAT%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY2024-25 By School",
       "n_rows": 28,
       "columns": [
        "DATA AS OF: 10/20/2025"
       ]
      },
      {
       "name": "SY2024-25 By Subgroup",
       "n_rows": 18,
       "columns": [
        "DATA AS OF: 10/20/2025"
       ]
      }
     ]
    },
    {
     "name": "School Year 2023-2024 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202023-2024%20SAT%20Scores_0.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY2023-24 By School",
       "n_rows": 27,
       "columns": [
        "DATA AS OF: 10/02/2024"
       ]
      },
      {
       "name": "SY2023-24 By Subgroup",
       "n_rows": 18,
       "columns": [
        "DATA AS OF: 10/02/2024"
       ]
      }
     ]
    },
    {
     "name": "School Year 2022-2023 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202022-2023%20SAT%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY2022-23 By School",
       "n_rows": 27,
       "columns": [
        "DATA AS OF: 09/25/2023"
       ]
      },
      {
       "name": "SY2022-23 By Subgroup",
       "n_rows": 18,
       "columns": [
        "DATA AS OF: 09/25/2023"
       ]
      }
     ]
    },
    {
     "name": "School Year 2021-2022 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202021-2022%20SAT%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY2021-22 By School",
       "n_rows": 27,
       "columns": [
        "DATA AS OF: 11/10/2022"
       ]
      },
      {
       "name": "SY2021-22 By Subgroup",
       "n_rows": 18,
       "columns": [
        "DATA AS OF: 11/10/2022"
       ]
      }
     ]
    },
    {
     "name": "School Year 2020-2021 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/SchoolYear2020-2021-SATScores.xlsx",
     "kind": "xlsx",
     "year": "2020",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY2020-21 By School",
       "n_rows": 28,
       "columns": [
        "DATA AS OF: 11/23/2021"
       ]
      },
      {
       "name": "SY2020-21 By Subgroup",
       "n_rows": 18,
       "columns": [
        "DATA AS OF: 11/23/2021"
       ]
      }
     ]
    },
    {
     "name": "School Year 2019-2020 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School-Year-2019-2020-SAT-Scores.xlsx",
     "kind": "xlsx",
     "year": "2019",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY2019-20",
       "n_rows": 31,
       "columns": [
        "DATA AS OF: 01/15/2021"
       ]
      }
     ]
    },
    {
     "name": "School Year 2018-2019 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202018-2019%20SAT%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2018",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY2018-19",
       "n_rows": 30,
       "columns": [
        "DATA AS OF: 12/3/2019"
       ]
      }
     ]
    },
    {
     "name": "School Year 2017-2018 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202017-2018%20SAT%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2017",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY2017-18",
       "n_rows": 28,
       "columns": [
        "DATA AS OF: 9/14/2018"
       ]
      }
     ]
    },
    {
     "name": "School Year 2016-2017 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202016-2017%20SAT%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2016",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY2016-17",
       "n_rows": 28,
       "columns": [
        "DATA AS OF: 10/24/2017"
       ]
      }
     ]
    },
    {
     "name": "School Year 2015-2016 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202015-2016%20SAT%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2015",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY15-16 . Pre-March-2016 SAT",
       "n_rows": 27,
       "columns": [
        "DATA AS OF: 9/14/2016"
       ]
      },
      {
       "name": "SY 15-16 . New SAT",
       "n_rows": 29,
       "columns": [
        "DATA AS OF: 9/14/2016"
       ]
      }
     ]
    },
    {
     "name": "School Year 2014-2015 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202014-2015%20SAT%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2014",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY14-15 . Pre-March-2016 SAT",
       "n_rows": 27,
       "columns": [
        "DATA AS OF: 9/14/2016"
       ]
      }
     ]
    },
    {
     "name": "School Year 2013-2014 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202013-2014%20SAT%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2013",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY13-14 . Pre-March-2016 SAT",
       "n_rows": 31,
       "columns": [
        "DATA AS OF: 9/14/2016"
       ]
      }
     ]
    },
    {
     "name": "School Year 2012-2013 SAT Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202012-2013%20SAT%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2012",
     "status": "ok",
     "topics": [
      "assessment",
      "advanced-coursework"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-sat",
     "tabs": [
      {
       "name": "SY12-13 . Pre-March-2016 SAT",
       "n_rows": 31,
       "columns": [
        "DATA AS OF: 9/14/2016"
       ]
      }
     ]
    },
    {
     "name": "School Year 2024-2025 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202024-2025%20AP%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 26,
       "columns": [
        "DATA AS OF: 08/28/2025"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 10,
       "columns": [
        "Gender",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 13,
       "columns": [
        "Race/Ethnicity",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 44,
       "columns": [
        "Subject Area",
        "Number of Tests",
        "Number of Tests with AP Score of 3, 4, or 5",
        "Percent Tests Scoring 3, 4, or 5"
       ]
      }
     ]
    },
    {
     "name": "School Year 2023-2024 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202023-2024%20AP%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 26,
       "columns": [
        "DATA AS OF: 08/22/2024"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 10,
       "columns": [
        "Gender",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 13,
       "columns": [
        "Race/Ethnicity",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 43,
       "columns": [
        "Subject Area",
        "Number of Tests",
        "Number of Tests with AP Score of 3, 4, or 5",
        "Percent Tests Scoring 3, 4, or 5"
       ]
      }
     ]
    },
    {
     "name": "School Year 2022-2023 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202022-2023%20AP%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 24,
       "columns": [
        "DATA AS OF: 09/25/2023"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 11,
       "columns": [
        "Gender",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 14,
       "columns": [
        "Race/Ethnicity",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 41,
       "columns": [
        "Subject Area",
        "Number of Tests",
        "Number of Tests with AP Score of 3, 4, or 5",
        "Percent Tests Scoring 3, 4, or 5"
       ]
      }
     ]
    },
    {
     "name": "School Year 2021-2022 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202021-2022%20AP%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 24,
       "columns": [
        "DATA AS OF: 11/16/2022"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 10,
       "columns": [
        "Gender",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 14,
       "columns": [
        "Race/Ethnicity",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 41,
       "columns": [
        "Subject Area",
        "Number of Tests",
        "Number of Tests with AP Score of 3, 4, or 5",
        "Percent Tests Scoring 3, 4, or 5"
       ]
      }
     ]
    },
    {
     "name": "School Year 2020-2021 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/SchoolYear2020-2021-APScores.xlsx",
     "kind": "xlsx",
     "year": "2020",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 24,
       "columns": [
        "DATA AS OF: 11/24/2021"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 10,
       "columns": [
        "Gender",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 14,
       "columns": [
        "Race/Ethnicity",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 41,
       "columns": [
        "Subject Area",
        "Number of Tests",
        "Number of Tests with AP Score of 3, 4, or 5",
        "Percent Tests Scoring 3, 4, or 5"
       ]
      }
     ]
    },
    {
     "name": "School Year 2019-2020 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School-Year-2019-2020-AP-Scores.xlsx",
     "kind": "xlsx",
     "year": "2019",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "School",
       "n_rows": 25,
       "columns": [
        "DATA AS OF: 12/14/2020"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 9,
       "columns": [
        "Gender",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 40,
       "columns": [
        "Subject Area",
        "Number of Tests",
        "Number of Tests with AP Score of 3, 4, or 5",
        "Percent Tests Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 14,
       "columns": [
        "Race/Ethnicity",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      }
     ]
    },
    {
     "name": "School Year 2018-2019 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202018-2019%20AP%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2018",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 45,
       "columns": [
        "DATA AS OF: 12/3/2019"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 9,
       "columns": [
        "Gender",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 40,
       "columns": [
        "Subject Area",
        "Number of Tests",
        "Number of Tests with AP Score of 3, 4, or 5",
        "Percent Tests Scoring 3, 4, or 5"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 15,
       "columns": [
        "Race/Ethnicity",
        "Number Students with an AP Score",
        "Number Students with at Least One AP Score of 3, 4, or 5",
        "Percent Students Scoring 3, 4, or 5"
       ]
      }
     ]
    },
    {
     "name": "School Year 2017-2018 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202017-2018%20AP%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2017",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 46,
       "columns": [
        "DATA AS OF: 10/24/2018"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 9,
       "columns": [
        "DATA AS OF: 10/24/2018"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 38,
       "columns": [
        "DATA AS OF: 10/24/2018"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 15,
       "columns": [
        "DATA AS OF: 10/24/2018"
       ]
      }
     ]
    },
    {
     "name": "School Year 2016-2017 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202016-2017%20AP%20Scores.xlsx",
     "kind": "xlsx",
     "year": "2016",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 42,
       "columns": [
        "DATA AS OF: 10/24/2017"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 9,
       "columns": [
        "DATA AS OF: 10/24/2017"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 39,
       "columns": [
        "DATA AS OF: 10/24/2017"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 14,
       "columns": [
        "DATA AS OF: 10/24/2017"
       ]
      }
     ]
    },
    {
     "name": "School Year 2015-2016 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202015-2016%20AP%20Scores_1.xlsx",
     "kind": "xlsx",
     "year": "2015",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 42,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 9,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 39,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 14,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      }
     ]
    },
    {
     "name": "School Year 2014-2015 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202014-2015%20AP%20Scores_0.xlsx",
     "kind": "xlsx",
     "year": "2014",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 22,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 9,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 41,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 14,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      }
     ]
    },
    {
     "name": "School Year 2013-2014 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202013-2014%20AP%20Scores_1.xlsx",
     "kind": "xlsx",
     "year": "2013",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 22,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 9,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 39,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 14,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      }
     ]
    },
    {
     "name": "School Year 2012-2013 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202012-2013%20AP%20Scores_1.xlsx",
     "kind": "xlsx",
     "year": "2012",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 23,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 9,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 39,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 14,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      }
     ]
    },
    {
     "name": "School Year 2011-2012 AP Scores",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/School%20Year%202011-2012%20AP%20Scores_1.xlsx",
     "kind": "xlsx",
     "year": "2011",
     "status": "ok",
     "topics": [
      "other"
     ],
     "page": "https://dcps.dc.gov/publication/ap-score-data-sets",
     "tabs": [
      {
       "name": "High School",
       "n_rows": 27,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Gender",
       "n_rows": 9,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Subject Area",
       "n_rows": 37,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      },
      {
       "name": "Race-Ethnicity",
       "n_rows": 20,
       "columns": [
        "DATA AS OF: 11/2/2016"
       ]
      }
     ]
    },
    {
     "name": "DC CAPE Scores – School Year 2024-25",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DC%20CAPE%20Scores%20%E2%80%93%20School%20Year%202024-25.xlsx",
     "kind": "xlsx",
     "year": "2024",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2024",
     "tabs": [
      {
       "name": "Overall",
       "n_rows": 460,
       "columns": [
        "DATA AS OF: August 2025"
       ]
      },
      {
       "name": "Female",
       "n_rows": 456,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Male",
       "n_rows": 453,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "AmIndAlNa",
       "n_rows": 64,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Asian",
       "n_rows": 216,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "BlAfAm",
       "n_rows": 458,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "HisLa",
       "n_rows": 421,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Multi",
       "n_rows": 291,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "PacIslNaH",
       "n_rows": 36,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "WhCau",
       "n_rows": 276,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "EL",
       "n_rows": 394,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "SpEd",
       "n_rows": 459,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "EconDisad",
       "n_rows": 456,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      }
     ]
    },
    {
     "name": "DC CAPE Scores – School Year 2023-24",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2024%20Overall%20and%20Subgroups_public_formatted_Read%20Only.xlsx",
     "kind": "xlsx",
     "year": "2023",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2023",
     "tabs": [
      {
       "name": "Overall",
       "n_rows": 459,
       "columns": [
        "DATA AS OF: August 2024"
       ]
      },
      {
       "name": "Female",
       "n_rows": 454,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Male",
       "n_rows": 452,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "AmIndAlNa",
       "n_rows": 51,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Asian",
       "n_rows": 198,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "BlAfAm",
       "n_rows": 458,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "HisLa",
       "n_rows": 416,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Multi",
       "n_rows": 272,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "PacIslNaH",
       "n_rows": 28,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "WhCau",
       "n_rows": 268,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "EL",
       "n_rows": 385,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "SpEd",
       "n_rows": 459,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "EconDisad",
       "n_rows": 456,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      }
     ]
    },
    {
     "name": "DC PARCC Scores – School Year 2022-23",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DC%20PARCC%20Scores%20%E2%80%93%20School%20Year%202022-23.xlsx",
     "kind": "xlsx",
     "year": "2022",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2022",
     "tabs": [
      {
       "name": "Overall",
       "n_rows": 457,
       "columns": [
        "DATA AS OF: August 2023"
       ]
      },
      {
       "name": "Female",
       "n_rows": 456,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Male",
       "n_rows": 450,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "AmIndAlNa",
       "n_rows": 58,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Asian",
       "n_rows": 187,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "BlAfAm",
       "n_rows": 459,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "HisLa",
       "n_rows": 406,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Multi",
       "n_rows": 253,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "PacIslNaH",
       "n_rows": 39,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "WhCau",
       "n_rows": 250,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "EL",
       "n_rows": 375,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "SpEd",
       "n_rows": 455,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "EconDisad",
       "n_rows": 457,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      }
     ]
    },
    {
     "name": "DC PARCC Scores – School Year 2021-22",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2022%20Overall%20and%20Subgroups_public_formatted_protected.xlsx",
     "kind": "xlsx",
     "year": "2021",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2021",
     "tabs": [
      {
       "name": "Overall",
       "n_rows": 457,
       "columns": [
        "DATA AS OF: August 2022"
       ]
      },
      {
       "name": "Female",
       "n_rows": 454,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Male",
       "n_rows": 462,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "AmIndAlNa",
       "n_rows": 59,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Asian",
       "n_rows": 178,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "BlAfAm",
       "n_rows": 456,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "HisLa",
       "n_rows": 398,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Multi",
       "n_rows": 250,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "PacIslNaH",
       "n_rows": 37,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "WhCau",
       "n_rows": 272,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "EL",
       "n_rows": 366,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "SpEd",
       "n_rows": 455,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "AtRisk",
       "n_rows": 453,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      }
     ]
    },
    {
     "name": "DC PARCC Scores- School Year 2018-19",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2019-Overall-and-Subgroups_public_formatted.xlsx",
     "kind": "xlsx",
     "year": "2018",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2018",
     "tabs": [
      {
       "name": "Overall",
       "n_rows": 476,
       "columns": [
        "DATA AS OF: August 2019"
       ]
      },
      {
       "name": "Female",
       "n_rows": 469,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Male",
       "n_rows": 469,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "American Indian",
       "n_rows": 62,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Asian",
       "n_rows": 176,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Black",
       "n_rows": 475,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Hispanic",
       "n_rows": 397,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Multiracial",
       "n_rows": 210,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "Pac Islander-Nat Hawaiian",
       "n_rows": 42,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "White",
       "n_rows": 230,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "EL (Active and Monitored)",
       "n_rows": 359,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "SWD (Active)",
       "n_rows": 472,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      },
      {
       "name": "At-Risk",
       "n_rows": 470,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient",
        "MSAA - ELA - # Level 1",
        "MSAA - ELA - # Level 2",
        "MSAA - ELA - # Level 3",
        "MSAA - ELA - # Level 4",
        "MSAA - # of English Language Arts (ELA) Test Takers",
        "MSAA - ELA # Proficient",
        "MSAA - ELA - % Proficient",
        "MSAA - ELA - % Level 1",
        "MSAA - ELA - % Level 2",
        "MSAA - ELA - % Level 3",
        "MSAA - ELA - % Level 4",
        "MSAA - Math - # Level 1",
        "MSAA - Math - # Level 2",
        "MSAA - Math - # Level 3",
        "MSAA - Math - # Level 4",
        "MSAA - # of Math Test Takers",
        "MSAA - Math # Proficient",
        "MSAA - Math - % Proficient",
        "MSAA - Math - % Level 1",
        "MSAA - Math - % Level 2",
        "MSAA - Math - % Level 3",
        "MSAA - Math - % Level 4"
       ]
      }
     ]
    },
    {
     "name": "DC PARCC Scores – School Year 2017-18",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DC%20PARCC%20Scores%20-%20School%20Year%202017-18.xlsx",
     "kind": "xlsx",
     "year": "2017",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2017",
     "tabs": [
      {
       "name": "Overall",
       "n_rows": 462,
       "columns": [
        "DATA AS OF: SEPTEMBER 2018"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 456,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 462,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      },
      {
       "name": "American Indian Students",
       "n_rows": 49,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 183,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 462,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      },
      {
       "name": "HIspanic Students",
       "n_rows": 382,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      },
      {
       "name": "Multiracial Students",
       "n_rows": 205,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      },
      {
       "name": "Nat Hawaiian-Pac Islnd Students",
       "n_rows": 51,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 219,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      },
      {
       "name": "EL Students (Active & Monitor)",
       "n_rows": 337,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      },
      {
       "name": "SWD (Active)",
       "n_rows": 459,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      },
      {
       "name": "At-Risk Students",
       "n_rows": 457,
       "columns": [
        "School Code",
        "School Name",
        "Grade",
        "Subgroup",
        "# of English Language Arts (ELA) Test Takers",
        "ELA - # Level 1",
        "ELA - # Level 2",
        "ELA - # Level 3",
        "ELA - # Level 4",
        "ELA - # Level 5",
        "ELA # Proficient",
        "ELA - % Level 1",
        "ELA - % Level 2",
        "ELA - % Level 3",
        "ELA - % Level 4",
        "ELA - % Level 5",
        "ELA - % Proficient",
        "# Math Test Takers",
        "Math - # Level 1",
        "Math - # Level 2",
        "Math - # Level 3",
        "Math - # Level 4",
        "Math - # Level 5",
        "Math - # Proficient",
        "Math - % Level 1",
        "Math - % Level 2",
        "Math - % Level 3",
        "Math - % Level 4",
        "Math - % Level 5",
        "Math - % Proficient"
       ]
      }
     ]
    },
    {
     "name": "DC PARCC Scores – School Year 2016-17",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DC%20PARCC%20Scores%20-%20School%20Year%202016-17.xlsx",
     "kind": "xlsx",
     "year": "2016",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2016",
     "tabs": [
      {
       "name": "Overall",
       "n_rows": 465,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 461,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 463,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "American Indian Students",
       "n_rows": 49,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 170,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 465,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "Hispanic Students",
       "n_rows": 388,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "Multiracial Students",
       "n_rows": 196,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "Nat Hawaiian-Pac Islnd Students",
       "n_rows": 53,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 213,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "ELL Students (Active & Monitor)",
       "n_rows": 336,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "SPED Students (Active & Monitor",
       "n_rows": 457,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      },
      {
       "name": "Econ Disadvantaged Students",
       "n_rows": 465,
       "columns": [
        "DATA AS OF: SEPTEMBER 2017"
       ]
      }
     ]
    },
    {
     "name": "DC PARCC Scores – School Year 2015-16",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/DC%20PARCC%20Scores%20%E2%80%93%20School%20Year%202015-16.xlsx",
     "kind": "xlsx",
     "year": "2015",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2015",
     "tabs": [
      {
       "name": "All",
       "n_rows": 461,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "American Indian Students",
       "n_rows": 42,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 165,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 461,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "Hispanic Students",
       "n_rows": 371,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "Multiracial Students",
       "n_rows": 201,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "Nat Hawaiian-Pac Islnd Students",
       "n_rows": 64,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 217,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "Special Education Students",
       "n_rows": 454,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "Eng Lang Learner Students",
       "n_rows": 306,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "Free-Red Price Meal Students",
       "n_rows": 461,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 461,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 459,
       "columns": [
        "DATA AS OF: SEPTEMBER 2016"
       ]
      }
     ]
    },
    {
     "name": "DC PARCC Scores – School Year 2014-15",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2015%20Overall%20Subgroup%20Proficiency%20Public.xlsx",
     "kind": "xlsx",
     "year": "2014",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2014",
     "tabs": [
      {
       "name": "All",
       "n_rows": 463,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "American Indian Students",
       "n_rows": 33,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "Asian Students",
       "n_rows": 151,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "Black Students",
       "n_rows": 462,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "Hispanic Students",
       "n_rows": 363,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "Multiracial Students",
       "n_rows": 173,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "Nat Hawaiian-Pac Islnd Students",
       "n_rows": 44,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "White Students",
       "n_rows": 197,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "Special Education Students",
       "n_rows": 450,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "ELL Students",
       "n_rows": 280,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "Free-Red Price Meal Students",
       "n_rows": 460,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "Male Students",
       "n_rows": 458,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      },
      {
       "name": "Female Students",
       "n_rows": 458,
       "columns": [
        "DATA AS OF: FEBRUARY 2016"
       ]
      }
     ]
    },
    {
     "name": "2025 DC CAPE Presentation",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2025%20DC%20CAPE%20Presentation.pdf",
     "kind": "pdf",
     "year": "2025",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2025",
     "n_pages": 17,
     "has_tabular_data": true,
     "n_table_pages": 8,
     "tables": [
      {
       "page": 3,
       "header": [],
       "n_rows": 9
      },
      {
       "page": 3,
       "header": [],
       "n_rows": 8
      },
      {
       "page": 4,
       "header": [
        "5.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 4,
       "header": [
        "4.9%"
       ],
       "n_rows": 5
      },
      {
       "page": 4,
       "header": [
        "7.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 4,
       "header": [
        "9.1%"
       ],
       "n_rows": 5
      },
      {
       "page": 4,
       "header": [
        "10.9%"
       ],
       "n_rows": 5
      },
      {
       "page": 4,
       "header": [
        "9.8%"
       ],
       "n_rows": 5
      }
     ]
    },
    {
     "name": "2024 DC CAPE Presentation",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2024%20DC%20CAPE%20Results%20Deck_Public%20Release.pdf",
     "kind": "pdf",
     "year": "2024",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2024",
     "n_pages": 15,
     "has_tabular_data": true,
     "n_table_pages": 7,
     "tables": [
      {
       "page": 4,
       "header": [],
       "n_rows": 9
      },
      {
       "page": 4,
       "header": [],
       "n_rows": 8
      },
      {
       "page": 5,
       "header": [
        "5.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [
        "4.9%"
       ],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [
        "7.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [
        "9.1%"
       ],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [
        "10.9%"
       ],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [
        "9.8%"
       ],
       "n_rows": 5
      }
     ]
    },
    {
     "name": "2023 DC PARCC Presentation",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2023%20DC%20PARCC%20Presentation.pdf",
     "kind": "pdf",
     "year": "2023",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2023",
     "n_pages": 14,
     "has_tabular_data": true,
     "n_table_pages": 4,
     "tables": [
      {
       "page": 4,
       "header": [],
       "n_rows": 7
      },
      {
       "page": 4,
       "header": [],
       "n_rows": 7
      },
      {
       "page": 6,
       "header": [
        "5.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 6,
       "header": [
        "4.9%"
       ],
       "n_rows": 5
      },
      {
       "page": 6,
       "header": [
        "7.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 6,
       "header": [
        "9.1%"
       ],
       "n_rows": 5
      },
      {
       "page": 6,
       "header": [
        "10.9%"
       ],
       "n_rows": 5
      },
      {
       "page": 6,
       "header": [
        "9.8%"
       ],
       "n_rows": 5
      }
     ]
    },
    {
     "name": "2022 DC PARCC Presentation",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2022%20PARCC%20Results%20Deck_Public%20Release.pdf",
     "kind": "pdf",
     "year": "2022",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2022",
     "n_pages": 18,
     "has_tabular_data": true,
     "n_table_pages": 11,
     "tables": [
      {
       "page": 3,
       "header": [],
       "n_rows": 6
      },
      {
       "page": 3,
       "header": [],
       "n_rows": 7
      },
      {
       "page": 5,
       "header": [
        "5.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [
        "4.9%"
       ],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [
        "7.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [
        "9.1%"
       ],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [
        "10.9%"
       ],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [
        "9.8%"
       ],
       "n_rows": 5
      }
     ]
    },
    {
     "name": "2019 DC PARCC Presentation",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2019-PARCC-Results-Deck-for-Press.pdf",
     "kind": "pdf",
     "year": "2019",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2019",
     "n_pages": 22,
     "has_tabular_data": true,
     "n_table_pages": 16,
     "tables": [
      {
       "page": 2,
       "header": [],
       "n_rows": 6
      },
      {
       "page": 2,
       "header": [],
       "n_rows": 7
      },
      {
       "page": 3,
       "header": [
        "5.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 3,
       "header": [
        "4.9%"
       ],
       "n_rows": 5
      },
      {
       "page": 3,
       "header": [
        "7.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 3,
       "header": [
        "9.1%"
       ],
       "n_rows": 5
      },
      {
       "page": 3,
       "header": [
        "10.9%"
       ],
       "n_rows": 5
      },
      {
       "page": 3,
       "header": [
        "2.7%"
       ],
       "n_rows": 5
      }
     ]
    },
    {
     "name": "2018 DC PARCC Presentation",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2018%20DCPS%20PARCC%20Results%20Deck.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2018",
     "n_pages": 19,
     "has_tabular_data": true,
     "n_table_pages": 14,
     "tables": [
      {
       "page": 2,
       "header": [],
       "n_rows": 5
      },
      {
       "page": 2,
       "header": [],
       "n_rows": 6
      },
      {
       "page": 3,
       "header": [
        "5.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 3,
       "header": [
        "4.9%"
       ],
       "n_rows": 5
      },
      {
       "page": 3,
       "header": [
        "7.2%"
       ],
       "n_rows": 5
      },
      {
       "page": 3,
       "header": [
        "9.1%"
       ],
       "n_rows": 5
      },
      {
       "page": 3,
       "header": [
        "2.7%"
       ],
       "n_rows": 5
      },
      {
       "page": 3,
       "header": [
        "3.6%"
       ],
       "n_rows": 5
      }
     ]
    },
    {
     "name": "2017 DC PARCC Presentation",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2017%20DC%20PARCC%20Presentation.pdf",
     "kind": "pdf",
     "year": "2017",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2017",
     "n_pages": 27,
     "has_tabular_data": true,
     "n_table_pages": 19,
     "tables": [
      {
       "page": 3,
       "header": [],
       "n_rows": 4
      },
      {
       "page": 3,
       "header": [],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 5,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 5,
       "header": [],
       "n_rows": 3
      },
      {
       "page": 6,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 6,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 6,
       "header": [],
       "n_rows": 3
      }
     ]
    },
    {
     "name": "2016 DC PARCC Presentation",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2016%20DC%20PARCC%20Presentation.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2016",
     "n_pages": 29,
     "has_tabular_data": true,
     "n_table_pages": 16,
     "tables": [
      {
       "page": 2,
       "header": [
        "Performance Levels"
       ],
       "n_rows": 6
      },
      {
       "page": 5,
       "header": [
        "5.2%",
        "4.9%"
       ],
       "n_rows": 6
      },
      {
       "page": 5,
       "header": [
        "2.7%",
        "3.6%"
       ],
       "n_rows": 6
      },
      {
       "page": 7,
       "header": [
        "4.7%"
       ],
       "n_rows": 5
      },
      {
       "page": 7,
       "header": [
        "4.8%"
       ],
       "n_rows": 5
      },
      {
       "page": 7,
       "header": [
        "8.7%"
       ],
       "n_rows": 5
      },
      {
       "page": 7,
       "header": [
        "5.6%"
       ],
       "n_rows": 5
      },
      {
       "page": 7,
       "header": [
        "3.0%"
       ],
       "n_rows": 5
      }
     ]
    },
    {
     "name": "2015 DC PARCC Presentation",
     "url": "https://dcps.dc.gov/sites/default/files/dc/sites/dcps/publication/attachments/2015DCPARCCPresentation.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "assessment"
     ],
     "page": "https://dcps.dc.gov/publication/dcps-data-set-parcc",
     "series": "DCPS Assessment Scores (PARCC → DC CAPE)",
     "label": "2015",
     "n_pages": 17,
     "has_tabular_data": true,
     "n_table_pages": 12,
     "tables": [
      {
       "page": 3,
       "header": [],
       "n_rows": 4
      },
      {
       "page": 3,
       "header": [],
       "n_rows": 4
      },
      {
       "page": 4,
       "header": [
        "79%"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "68%"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "22%"
       ],
       "n_rows": 2
      },
      {
       "page": 4,
       "header": [
        "55%"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "56%"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "9%"
       ],
       "n_rows": 2
      }
     ]
    }
   ],
   "search": "dcps downloadable data sets (index) dcps index of school-and-subgroup-level files: enrollment, graduation, dc cas, sat, ap, parcc, attendance. each metric is a separate page of yearly excel files rather than one tidy multi-year table. web page indexing excel (.xlsx) files enrollment assessment graduation attendance students headcount count population test scores proficiency parcc dc cape msaa reading math grad rate diploma acgr dropout truancy absenteeism chronic absent dcps sy25-26 enrollment audit sy 2025-26 school code school name by grade dcps sy24-25 enrollment audit sy 2024-25 school code school name by grade dcps sy23-24 enrollment audit sy 2023-24 school code school name by grade dcps sy22-23 enrollment audit sy2022-23 school code school name by grade dcps sy21-22 enrollment audit sy2021-22 school code school name by grade dcps sy20-21 enrollment audit sheet1 school code school name by grade dcps sy19-20 enrollment audit sheet1 school code school name by grade dcps sy18-19 enrollment audit sheet1 school code school name by grade dcps sy17-18 enrollment audit sheet1 school code school name by grade dcps sy16-17 enrollment audit sheet1 data as of: 10/5/2016 dcps sy15-16 enrollment audit sy15-16 enrollment audit data as of: 10/5/2015 dcps sy14-15 enrollment audit sy13-14 enrollment audit data as of: 10/6/2014 dcps sy13-14 enrollment audit sy13-14 enrollment audit data as of: 10/5/2013 dcps sy12-13 enrollment audit sy12-13 enrollment audit data as of: 10/5/2012 dcps sy11-12 enrollment audit sy11-12 enrollment audit data as of: 10/5/2011 sheet1 462 462 dcps 2025 graduation data overall subgroup 2025 data as of: october 2025 dcps 2024 graduation data overall subgroup 2024_redact data as of: october 2024 dcps 2023 graduation data overall subgroup 2023_redact data as of: 11/30/2023 dcps 2022 graduation data overall subgroup class of 2022 data as of: 11/09/2022 dcps 2021 graduation data overall subgroup class of 2021 data as of: 11/09/2021 dcps 2020 graduation data overall subgroup class of 2020 data as of: 10/30/2020 dcps 2019 graduation data overall subgroup class of 2019 data as of: 11/6/2019 dcps 2018 graduation data overall subgroup class of 2018 data as of: 11/9/2018 dcps 2017 graduation data overall subgroup class of 2017 data as of: 11/3/2017 dcps 2016 graduation data overall subgroup class of 2016 data as of: 10/20/2016 dcps 2015 graduation data overall subgroup class of 2015 data as of: 1/26/2016 dcps 2014 graduation data overall subgroup class of 2014 data as of: 3/8/2016 dcps 2013 graduation data overall subgroup sheet1 data as of: 4/7/2014 dcps 2012 graduation data overall subgroup sheet1 data as of: 4/7/2014 dc cas scores - school year 2013-2014 all students data as of: 8/5/2014 american indian students data as of: 8/5/2014 asian students data as of: 8/5/2014 black students data as of: 8/5/2014 hispanic students data as of: 8/5/2014 multiracial students data as of: 8/5/2014 nat hawaiian-pac islnd students data as of: 8/5/2014 white students data as of: 8/5/2014 special education students data as of: 8/5/2014 ell students data as of: 8/5/2014 free-red price meal students data as of: 8/5/2014 male students data as of: 8/5/2014 female students data as of: 8/5/2014 dc cas scores - school year 2012-2013 all students data as of: 11/10/2014 american indian students data as of: 11/10/2014 asian students data as of: 11/10/2014 black students data as of: 11/10/2014 hispanic students data as of: 11/10/2014 multiracial students data as of: 11/10/2014 nat hawaiian-pac islnd students data as of: 11/10/2014 white students data as of: 11/10/2014 special education students data as of: 11/10/2014 ell students data as of: 11/10/2014 free-red price meal students data as of: 11/10/2014 male students data as of: 11/10/2014 female students data as of: 11/10/2014 dc cas scores - school year 2011-2012 all students data as of: 4/7/2014 american indian students data as of: 4/7/2014 asian students data as of: 4/7/2014 black students data as of: 4/7/2014 hispanic students data as of: 4/7/2014 multiracial students data as of: 4/7/2014 nat hawaiian-pac islnd students data as of: 4/7/2014 white students data as of: 4/7/2014 special education students data as of: 4/7/2014 ell students data as of: 4/7/2014 free-red price meal students data as of: 4/7/2014 male students data as of: 4/7/2014 female students data as of: 4/7/2014 dc cas scores - school year 2010-2011 all students data as of: 4/7/2014 american indian students data as of: 4/7/2014 asian students data as of: 4/7/2014 black students data as of: 4/7/2014 hispanic students data as of: 4/7/2014 white students data as of: 4/7/2014 special education students data as of: 4/7/2014 ell students data as of: 4/7/2014 free-red price meal students data as of: 4/7/2014 male students data as of: 4/7/2014 female students data as of: 4/7/2014 dc cas scores - school year 2009-2010 all students data as of: 4/7/2014 asian students data as of: 4/7/2014 black students data as of: 4/7/2014 hispanic students data as of: 4/7/2014 white students data as of: 4/7/2014 special education students data as of: 4/7/2014 ell students data as of: 4/7/2014 free-red price meal students data as of: 4/7/2014 male students data as of: 4/7/2014 female students data as of: 4/7/2014 dc cas scores - school year 2008-2009 all students data as of: 4/7/2014 asian students data as of: 4/7/2014 black students data as of: 4/7/2014 hispanic students data as of: 4/7/2014 white students data as of: 4/7/2014 special education students data as of: 4/7/2014 ell students data as of: 4/7/2014 free-red price meal students data as of: 4/7/2014 male students data as of: 4/7/2014 female students data as of: 4/7/2014 dc cas scores - school year 2007-2009 all students data as of: 4/7/2014 asian students data as of: 4/7/2014 black students data as of: 4/7/2014 hispanic students data as of: 4/7/2014 white students data as of: 4/7/2014 special education students data as of: 4/7/2014 ell students data as of: 4/7/2014 free-red price meal students data as of: 4/7/2014 male students data as of: 4/7/2014 female students data as of: 4/7/2014 dc cas scores - school year 2006-2007 all students data as of: 4/7/2014 asian students data as of: 4/7/2014 black students data as of: 4/7/2014 hispanic students data as of: 4/7/2014 white students data as of: 4/7/2014 special education students data as of: 4/7/2014 ell students data as of: 4/7/2014 free-red price meal students data as of: 4/7/2014 male students data as of: 4/7/2014 female students data as of: 4/7/2014 school year 2024-2025 sat scores sy2024-25 by school data as of: 10/20/2025 sy2024-25 by subgroup data as of: 10/20/2025 school year 2023-2024 sat scores sy2023-24 by school data as of: 10/02/2024 sy2023-24 by subgroup data as of: 10/02/2024 school year 2022-2023 sat scores sy2022-23 by school data as of: 09/25/2023 sy2022-23 by subgroup data as of: 09/25/2023 school year 2021-2022 sat scores sy2021-22 by school data as of: 11/10/2022 sy2021-22 by subgroup data as of: 11/10/2022 school year 2020-2021 sat scores sy2020-21 by school data as of: 11/23/2021 sy2020-21 by subgroup data as of: 11/23/2021 school year 2019-2020 sat scores sy2019-20 data as of: 01/15/2021 school year 2018-2019 sat scores sy2018-19 data as of: 12/3/2019 school year 2017-2018 sat scores sy2017-18 data as of: 9/14/2018 school year 2016-2017 sat scores sy2016-17 data as of: 10/24/2017 school year 2015-2016 sat scores sy15-16 . pre-march-2016 sat data as of: 9/14/2016 sy 15-16 . new sat data as of: 9/14/2016 school year 2014-2015 sat scores sy14-15 . pre-march-2016 sat data as of: 9/14/2016 school year 2013-2014 sat scores sy13-14 . pre-march-2016 sat data as of: 9/14/2016 school year 2012-2013 sat scores sy12-13 . pre-march-2016 sat data as of: 9/14/2016 school year 2024-2025 ap scores high school data as of: 08/28/2025 gender gender number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 race-ethnicity race/ethnicity number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 subject area subject area number of tests number of tests with ap score of 3, 4, or 5 percent tests scoring 3, 4, or 5 school year 2023-2024 ap scores high school data as of: 08/22/2024 gender gender number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 race-ethnicity race/ethnicity number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 subject area subject area number of tests number of tests with ap score of 3, 4, or 5 percent tests scoring 3, 4, or 5 school year 2022-2023 ap scores high school data as of: 09/25/2023 gender gender number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 race-ethnicity race/ethnicity number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 subject area subject area number of tests number of tests with ap score of 3, 4, or 5 percent tests scoring 3, 4, or 5 school year 2021-2022 ap scores high school data as of: 11/16/2022 gender gender number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 race-ethnicity race/ethnicity number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 subject area subject area number of tests number of tests with ap score of 3, 4, or 5 percent tests scoring 3, 4, or 5 school year 2020-2021 ap scores high school data as of: 11/24/2021 gender gender number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 race-ethnicity race/ethnicity number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 subject area subject area number of tests number of tests with ap score of 3, 4, or 5 percent tests scoring 3, 4, or 5 school year 2019-2020 ap scores school data as of: 12/14/2020 gender gender number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 subject area subject area number of tests number of tests with ap score of 3, 4, or 5 percent tests scoring 3, 4, or 5 race-ethnicity race/ethnicity number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 school year 2018-2019 ap scores high school data as of: 12/3/2019 gender gender number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 subject area subject area number of tests number of tests with ap score of 3, 4, or 5 percent tests scoring 3, 4, or 5 race-ethnicity race/ethnicity number students with an ap score number students with at least one ap score of 3, 4, or 5 percent students scoring 3, 4, or 5 school year 2017-2018 ap scores high school data as of: 10/24/2018 gender data as of: 10/24/2018 subject area data as of: 10/24/2018 race-ethnicity data as of: 10/24/2018 school year 2016-2017 ap scores high school data as of: 10/24/2017 gender data as of: 10/24/2017 subject area data as of: 10/24/2017 race-ethnicity data as of: 10/24/2017 school year 2015-2016 ap scores high school data as of: 11/2/2016 gender data as of: 11/2/2016 subject area data as of: 11/2/2016 race-ethnicity data as of: 11/2/2016 school year 2014-2015 ap scores high school data as of: 11/2/2016 gender data as of: 11/2/2016 subject area data as of: 11/2/2016 race-ethnicity data as of: 11/2/2016 school year 2013-2014 ap scores high school data as of: 11/2/2016 gender data as of: 11/2/2016 subject area data as of: 11/2/2016 race-ethnicity data as of: 11/2/2016 school year 2012-2013 ap scores high school data as of: 11/2/2016 gender data as of: 11/2/2016 subject area data as of: 11/2/2016 race-ethnicity data as of: 11/2/2016 school year 2011-2012 ap scores high school data as of: 11/2/2016 gender data as of: 11/2/2016 subject area data as of: 11/2/2016 race-ethnicity data as of: 11/2/2016 dc cape scores – school year 2024-25 overall data as of: august 2025 female school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 male school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 amindalna school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 asian school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 blafam school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 hisla school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 multi school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 pacislnah school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 whcau school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 el school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 sped school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 econdisad school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 dc cape scores – school year 2023-24 overall data as of: august 2024 female school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 male school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 amindalna school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 asian school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 blafam school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 hisla school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 multi school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 pacislnah school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 whcau school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 el school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 sped school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 econdisad school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 dc parcc scores – school year 2022-23 overall data as of: august 2023 female school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 male school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 amindalna school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 asian school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 blafam school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 hisla school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 multi school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 pacislnah school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 whcau school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 el school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 sped school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 econdisad school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 dc parcc scores – school year 2021-22 overall data as of: august 2022 female school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 male school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 amindalna school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 asian school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 blafam school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 hisla school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 multi school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 pacislnah school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 whcau school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 el school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 sped school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 atrisk school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 dc parcc scores- school year 2018-19 overall data as of: august 2019 female school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 male school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 american indian school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 asian school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 black school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 hispanic school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 multiracial school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 pac islander-nat hawaiian school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 white school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 el (active and monitored) school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 swd (active) school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 at-risk school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient msaa - ela - # level 1 msaa - ela - # level 2 msaa - ela - # level 3 msaa - ela - # level 4 msaa - # of english language arts (ela) test takers msaa - ela # proficient msaa - ela - % proficient msaa - ela - % level 1 msaa - ela - % level 2 msaa - ela - % level 3 msaa - ela - % level 4 msaa - math - # level 1 msaa - math - # level 2 msaa - math - # level 3 msaa - math - # level 4 msaa - # of math test takers msaa - math # proficient msaa - math - % proficient msaa - math - % level 1 msaa - math - % level 2 msaa - math - % level 3 msaa - math - % level 4 dc parcc scores – school year 2017-18 overall data as of: september 2018 female students school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient male students school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient american indian students school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient asian students school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient black students school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient hispanic students school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient multiracial students school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient nat hawaiian-pac islnd students school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient white students school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient el students (active & monitor) school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient swd (active) school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient at-risk students school code school name grade subgroup # of english language arts (ela) test takers ela - # level 1 ela - # level 2 ela - # level 3 ela - # level 4 ela - # level 5 ela # proficient ela - % level 1 ela - % level 2 ela - % level 3 ela - % level 4 ela - % level 5 ela - % proficient # math test takers math - # level 1 math - # level 2 math - # level 3 math - # level 4 math - # level 5 math - # proficient math - % level 1 math - % level 2 math - % level 3 math - % level 4 math - % level 5 math - % proficient dc parcc scores – school year 2016-17 overall data as of: september 2017 female students data as of: september 2017 male students data as of: september 2017 american indian students data as of: september 2017 asian students data as of: september 2017 black students data as of: september 2017 hispanic students data as of: september 2017 multiracial students data as of: september 2017 nat hawaiian-pac islnd students data as of: september 2017 white students data as of: september 2017 ell students (active & monitor) data as of: september 2017 sped students (active & monitor data as of: september 2017 econ disadvantaged students data as of: september 2017 dc parcc scores – school year 2015-16 all data as of: september 2016 american indian students data as of: september 2016 asian students data as of: september 2016 black students data as of: september 2016 hispanic students data as of: september 2016 multiracial students data as of: september 2016 nat hawaiian-pac islnd students data as of: september 2016 white students data as of: september 2016 special education students data as of: september 2016 eng lang learner students data as of: september 2016 free-red price meal students data as of: september 2016 male students data as of: september 2016 female students data as of: september 2016 dc parcc scores – school year 2014-15 all data as of: february 2016 american indian students data as of: february 2016 asian students data as of: february 2016 black students data as of: february 2016 hispanic students data as of: february 2016 multiracial students data as of: february 2016 nat hawaiian-pac islnd students data as of: february 2016 white students data as of: february 2016 special education students data as of: february 2016 ell students data as of: february 2016 free-red price meal students data as of: february 2016 male students data as of: february 2016 female students data as of: february 2016 2025 dc cape presentation 5.2% 4.9% 7.2% 9.1% 10.9% 9.8% 2024 dc cape presentation 5.2% 4.9% 7.2% 9.1% 10.9% 9.8% 2023 dc parcc presentation 5.2% 4.9% 7.2% 9.1% 10.9% 9.8% 2022 dc parcc presentation 5.2% 4.9% 7.2% 9.1% 10.9% 9.8% 2019 dc parcc presentation 5.2% 4.9% 7.2% 9.1% 10.9% 2.7% 2018 dc parcc presentation 5.2% 4.9% 7.2% 9.1% 2.7% 3.6% 2017 dc parcc presentation 2016 dc parcc presentation performance levels 5.2% 4.9% 2.7% 3.6% 4.7% 4.8% 8.7% 5.6% 3.0% 2015 dc parcc presentation 79% 68% 22% 55% 56% 9%"
  },
  {
   "id": "dcps-dataset-enrollment",
   "name": "DCPS Data Set — Enrollment",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
   "topics": [
    "enrollment"
   ],
   "status": "ok",
   "format": "Excel (.xlsx), one file per year",
   "cadence": "Annual, after audit certification",
   "years": "Multiple years (separate files)",
   "notes": "DCPS-only, school-by-school by grade. Derived from / overlaps OSSE audited enrollment (the cross-sector authority).",
   "files": [],
   "search": "dcps data set — enrollment dcps dcps-only, school-by-school by grade. derived from / overlaps osse audited enrollment (the cross-sector authority). excel (.xlsx), one file per year enrollment students headcount count population"
  },
  {
   "id": "dcps-dataset-graduation",
   "name": "DCPS Data Set — Graduation Rates",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/node/1018352",
   "topics": [
    "graduation"
   ],
   "status": "ok",
   "format": "Excel (.xlsx), one file per year",
   "cadence": "Annual",
   "years": "2012 through 2025 (14 files)",
   "notes": "DCPS high-school 4-yr ACGR by school + subgroup. Overlaps OSSE graduation data (cross-sector authority).",
   "files": [],
   "search": "dcps data set — graduation rates dcps dcps high-school 4-yr acgr by school + subgroup. overlaps osse graduation data (cross-sector authority). excel (.xlsx), one file per year graduation grad rate diploma acgr dropout"
  },
  {
   "id": "dcps-fast-facts",
   "name": "DCPS Fast Facts",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/featured-content/dcps-fast-facts-2025",
   "topics": [
    "enrollment",
    "demographics",
    "landing"
   ],
   "status": "ok",
   "format": "PDF (2-page fact sheet)",
   "cadence": "Annual (2025 ed. published Mar 2025)",
   "years": "Latest year; older editions only via direct PDF URLs",
   "notes": "District-wide 'by the numbers.' Prior-year editions have no central archive — classic fragmentation.",
   "files": [],
   "search": "dcps fast facts dcps district-wide 'by the numbers.' prior-year editions have no central archive — classic fragmentation. pdf (2-page fact sheet) enrollment demographics landing students headcount count population race ethnicity special education english learner at-risk poverty "
  },
  {
   "id": "dcps-school-profiles",
   "name": "DCPS School Profiles ('Find a School')",
   "owner": "DCPS",
   "url": "https://profiles.dcps.dc.gov/",
   "topics": [
    "profiles",
    "enrollment",
    "boundaries"
   ],
   "status": "ok",
   "format": "Interactive web app",
   "cadence": "~Annual; enrollment updates each year",
   "years": "Current school year (not labeled)",
   "notes": "Per-school pages (address, principal, ward, grades, programs, enrollment). Filter/compare; 'Locate Your Boundary School' by address. Per-school URLs like profiles.dcps.dc.gov/332.",
   "files": [],
   "search": "dcps school profiles ('find a school') dcps per-school pages (address, principal, ward, grades, programs, enrollment). filter/compare; 'locate your boundary school' by address. per-school urls like profiles.dcps.dc.gov/332. interactive web app profiles enrollment boundaries directory locations list find a school students headcount count population boundary zone feeder in-boundary attendance area redistricting"
  },
  {
   "id": "dcps-surveys",
   "name": "DCPS Stakeholder / Panorama Satisfaction Surveys",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/surveys",
   "topics": [
    "surveys",
    "school-climate"
   ],
   "status": "ok",
   "format": "PDF + Excel aggregates; interactive Panorama portal",
   "cadence": "Annual (administered each spring)",
   "years": "Panorama 2018, 2019, 2021, 2022; legacy reports 2011, 2013–2017",
   "notes": "Student/family/staff experience surveys. District results at bit.ly/dcpsresults; school-level/raw data requires staff Panorama login.",
   "files": [],
   "search": "dcps stakeholder / panorama satisfaction surveys dcps student/family/staff experience surveys. district results at bit.ly/dcpsresults; school-level/raw data requires staff panorama login. pdf + excel aggregates; interactive panorama portal surveys school-climate  "
  },
  {
   "id": "dcps-budget-portal",
   "name": "DCPS Budget Transparency Portal",
   "owner": "DCPS",
   "url": "https://dcpsbudget.com/",
   "topics": [
    "finance"
   ],
   "status": "ok",
   "format": "Web portal + downloadable Excel spreadsheets",
   "cadence": "Annual budget cycle (initial budgets ~late winter/spring)",
   "years": "Current cycle (FY27) + 'Budget Archives'",
   "notes": "School-by-school budget ALLOCATIONS under the three-factor model (enrollment / targeted / stability). Standalone .com domain, not under dcps.dc.gov — easy to miss. Allocation, not expenditure — differs from OSSE PPE.",
   "files": [],
   "search": "dcps budget transparency portal dcps school-by-school budget allocations under the three-factor model (enrollment / targeted / stability). standalone .com domain, not under dcps.dc.gov — easy to miss. allocation, not expenditure — differs from osse ppe. web portal + downloadable excel spreadsheets finance spending money budget cost dollars per-pupil expenditure funding"
  },
  {
   "id": "dcps-capital-commitment",
   "name": "A Capital Commitment — Strategic Plan & Scorecards",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/capitalcommitment",
   "topics": [
    "strategy",
    "outcomes"
   ],
   "status": "ok",
   "format": "Web page + linked PDF plan",
   "cadence": "Plan per 5-year cycle; metrics updated periodically",
   "years": "2023–2028 current; priors 2017-2022, 2012-2017",
   "notes": "Strategic goals/metrics. Plan PDF and scorecards largely on the external dcpsstrong.com site — an off-domain fragment.",
   "files": [],
   "search": "a capital commitment — strategic plan & scorecards dcps strategic goals/metrics. plan pdf and scorecards largely on the external dcpsstrong.com site — an off-domain fragment. web page + linked pdf plan strategy outcomes  "
  },
  {
   "id": "dcps-equity",
   "name": "DCPS Equity Strategy & Framework",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/equity",
   "topics": [
    "equity"
   ],
   "status": "ok",
   "format": "Web page + PDF framework (2018)",
   "cadence": "Infrequent",
   "years": "Framework 2018",
   "notes": "Policy/narrative more than data. The annual school-level Equity Reports with underlying data are published by OSSE, not DCPS.",
   "files": [],
   "search": "dcps equity strategy & framework dcps policy/narrative more than data. the annual school-level equity reports with underlying data are published by osse, not dcps. web page + pdf framework (2018) equity "
  },
  {
   "id": "dcps-feeder-patterns",
   "name": "DCPS Feeder Patterns",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/feederpatterns",
   "topics": [
    "boundaries"
   ],
   "status": "ok",
   "format": "Web page linking per-year PDFs",
   "cadence": "Annual",
   "years": "SY14-15 through SY26-27",
   "notes": "Which schools feed into which (geographic + programmatic). Unusually complete multi-year archive vs. other DCPS data.",
   "files": [],
   "search": "dcps feeder patterns dcps which schools feed into which (geographic + programmatic). unusually complete multi-year archive vs. other dcps data. web page linking per-year pdfs boundaries boundary zone feeder in-boundary attendance area redistricting"
  },
  {
   "id": "dcps-find-inboundary",
   "name": "Find Your In-Boundary School (address lookup)",
   "owner": "DCPS",
   "url": "https://enrolldcps.dc.gov/node/41",
   "topics": [
    "boundaries"
   ],
   "status": "ok",
   "format": "Interactive address-lookup tool",
   "cadence": "Updated when boundaries/feeders change",
   "years": "Current boundaries",
   "notes": "On the enrolldcps.dc.gov subdomain. Boundary POLICY and redrawing are run by DME, not DCPS.",
   "files": [],
   "search": "find your in-boundary school (address lookup) dcps on the enrolldcps.dc.gov subdomain. boundary policy and redrawing are run by dme, not dcps. interactive address-lookup tool boundaries boundary zone feeder in-boundary attendance area redistricting"
  },
  {
   "id": "dcps-modernizations",
   "name": "DCPS Modernizations",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/page/modernizations",
   "topics": [
    "facilities"
   ],
   "status": "ok",
   "format": "Web page + PACE prioritization PDF",
   "cadence": "Updated as projects change",
   "years": "Current list; framework dated 2022",
   "notes": "Facilities data is split across DCPS, DGS (dgs.dc.gov/page/dcps-school-projects), and EdScape Ch.3 — significant fragmentation for capital/facilities.",
   "files": [],
   "search": "dcps modernizations dcps facilities data is split across dcps, dgs (dgs.dc.gov/page/dcps-school-projects), and edscape ch.3 — significant fragmentation for capital/facilities. web page + pace prioritization pdf facilities building capacity utilization modernization seats"
  },
  {
   "id": "dcps-school-directory",
   "name": "DCPS School Directory",
   "owner": "DCPS",
   "url": "https://dcps.dc.gov/service/school-data",
   "topics": [
    "profiles"
   ],
   "status": "ok",
   "format": "PDF (per year)",
   "cadence": "Annual",
   "years": "Per school year (e.g. SY24-25)",
   "notes": "Crosswalk of DCPS school IDs, names, addresses, wards, types. Latest year linked from the data hub; older years only via direct PDF URLs.",
   "files": [],
   "search": "dcps school directory dcps crosswalk of dcps school ids, names, addresses, wards, types. latest year linked from the data hub; older years only via direct pdf urls. pdf (per year) profiles directory locations list find a school"
  },
  {
   "id": "pcsb-transparency-hub",
   "name": "DC PCSB Transparency Hub",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/transparency-hub",
   "topics": [
    "landing",
    "finance",
    "discipline",
    "equity",
    "profiles"
   ],
   "status": "ok",
   "format": "Web portal (links to PDF / Excel / Egnyte / Google Sheets)",
   "cadence": "Continuously updated; docs annual",
   "years": "Multiple; varies by document",
   "notes": "The single most comprehensive index of PCSB charter data: budgets, audits, 990s, financials, at-risk spending, equity reports, discipline/attendance, charter agreements, site reviews, school profiles, openings/closures. Many financial docs hosted off-site on Egnyte.",
   "files": [],
   "search": "dc pcsb transparency hub dc pcsb the single most comprehensive index of pcsb charter data: budgets, audits, 990s, financials, at-risk spending, equity reports, discipline/attendance, charter agreements, site reviews, school profiles, openings/closures. many financial docs hosted off-site on egnyte. web portal (links to pdf / excel / egnyte / google sheets) landing finance discipline equity profiles  spending money budget cost dollars per-pupil expenditure funding suspension expulsion suspended discipline  directory locations list find a school"
  },
  {
   "id": "pcsb-charter-data",
   "name": "Public Charter School Data (sector overview)",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/about-us/public-charter-school-data",
   "topics": [
    "landing",
    "enrollment",
    "assessment",
    "graduation"
   ],
   "status": "ok",
   "format": "Web page (links to sub-dashboards)",
   "cadence": "Annual",
   "years": "Current",
   "notes": "Citywide charter rollups (enrollment, assessment, growth/closures, graduation, profiles). Cites 133 schools / 66 LEAs / ~47,525 students.",
   "files": [],
   "search": "public charter school data (sector overview) dc pcsb citywide charter rollups (enrollment, assessment, growth/closures, graduation, profiles). cites 133 schools / 66 leas / ~47,525 students. web page (links to sub-dashboards) landing enrollment assessment graduation  students headcount count population test scores proficiency parcc dc cape msaa reading math grad rate diploma acgr dropout"
  },
  {
   "id": "pcsb-student-enrollment",
   "name": "Charter Student Enrollment",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/student-enrollment",
   "topics": [
    "enrollment",
    "demographics"
   ],
   "status": "ok",
   "format": "Static tables + spreadsheet download + link to OSSE",
   "cadence": "Annual",
   "years": "SY22-23, 23-24, 24-25 shown; historical spreadsheet 1967–present",
   "notes": "Charter-only enrollment by grade/tier/demographics/ward + market share. Audited counts sourced from OSSE; PCSB republishes/analyzes the charter slice. Static tables, NOT Tableau.",
   "files": [],
   "search": "charter student enrollment dc pcsb charter-only enrollment by grade/tier/demographics/ward + market share. audited counts sourced from osse; pcsb republishes/analyzes the charter slice. static tables, not tableau. static tables + spreadsheet download + link to osse enrollment demographics students headcount count population race ethnicity special education english learner at-risk poverty"
  },
  {
   "id": "pcsb-assessment",
   "name": "Statewide Assessment Results (charter)",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/test-results-parcc",
   "topics": [
    "assessment"
   ],
   "status": "unstable",
   "format": "Web page / dashboard",
   "cadence": "Annual",
   "years": "Multiple",
   "notes": "Charter ELA/math on the DC statewide test. URL still says 'parcc' though DC moved to DC CAPE. Overlaps OSSE/Report Card (the authority). Site occasionally returns HTTP 520.",
   "files": [],
   "search": "statewide assessment results (charter) dc pcsb charter ela/math on the dc statewide test. url still says 'parcc' though dc moved to dc cape. overlaps osse/report card (the authority). site occasionally returns http 520. web page / dashboard assessment test scores proficiency parcc dc cape msaa reading math"
  },
  {
   "id": "pcsb-school-profiles",
   "name": "School Profiles / Find a DC Public Charter School",
   "owner": "DC PCSB",
   "url": "https://www.dcpcsb.org/school-profiles",
   "topics": [
    "profiles",
    "accountability"
   ],
   "status": "ok",
   "format": "Interactive searchable directory",
   "cadence": "Updated yearly / as schools open/close",
   "years": "Current roster",
   "notes": "Canonical 'find a charter school' tool. Filter by feature/ward/grade/status; each entry links to its School Quality Report. No bulk export.",
   "files": [],
   "search": "school profiles / find a dc public charter school dc pcsb canonical 'find a charter school' tool. filter by feature/ward/grade/status; each entry links to its school quality report. no bulk export. interactive searchable directory profiles accountability directory locations list find a school star rating tier sqr pmf aspire score report card quality"
  },
  {
   "id": "pcsb-directory-pdf",
   "name": "Public Charter School Directory (annual PDF)",
   "owner": "DC PCSB",
   "url": "https://www.dcpcsb.org/2025-26-public-charter-school-directory",
   "topics": [
    "profiles"
   ],
   "status": "ok",
   "format": "PDF",
   "cadence": "Annual (school year)",
   "years": "2025-26 latest; prior years at /YYYY-YY-... URLs",
   "notes": "Static counterpart to the interactive profiles: every LEA, campus, program, grades, ward, leader contact.",
   "files": [],
   "search": "public charter school directory (annual pdf) dc pcsb static counterpart to the interactive profiles: every lea, campus, program, grades, ward, leader contact. pdf profiles directory locations list find a school"
  },
  {
   "id": "pcsb-sqr",
   "name": "School Quality Report (SQR)",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/families/school-quality-report",
   "topics": [
    "accountability"
   ],
   "status": "unstable",
   "format": "Web page / per-school report",
   "cadence": "Annual (released fall)",
   "years": "Current; history via PMF archive",
   "notes": "Charter accountability: scores each charter 0-100 and assigns Tier 1/2/3. This is a DIFFERENT system from OSSE's STAR (1-5) — see overlaps. Aggregated at /schoolquality (sometimes bot-blocked).",
   "files": [],
   "search": "school quality report (sqr) dc pcsb charter accountability: scores each charter 0-100 and assigns tier 1/2/3. this is a different system from osse's star (1-5) — see overlaps. aggregated at /schoolquality (sometimes bot-blocked). web page / per-school report accountability star rating tier sqr pmf aspire score report card quality"
  },
  {
   "id": "pcsb-aspire",
   "name": "ASPIRE System (current charter accountability framework)",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/aspire-system",
   "topics": [
    "accountability",
    "methodology"
   ],
   "status": "ok",
   "format": "Web page (framework docs / PDF)",
   "cadence": "Annual",
   "years": "Current",
   "notes": "The board-approved system that replaced the PMF and underlies the SQR. Important: PMF data pages look authoritative but are frozen at 2018-19.",
   "files": [],
   "search": "aspire system (current charter accountability framework) dc pcsb the board-approved system that replaced the pmf and underlies the sqr. important: pmf data pages look authoritative but are frozen at 2018-19. web page (framework docs / pdf) accountability methodology star rating tier sqr pmf aspire score report card quality "
  },
  {
   "id": "pcsb-pmf-archive",
   "name": "Performance Management Framework (PMF) — archive",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/performance-management-framework-pmf",
   "topics": [
    "accountability",
    "methodology"
   ],
   "status": "stale",
   "format": "PDF books/guides + Excel data files (via Egnyte)",
   "cadence": "Was annual",
   "years": "SY2011-12 through 2018-19 (ARCHIVED)",
   "notes": "Legacy charter accountability with per-school scores/tiers. Superseded by ASPIRE/SQR. Confirm which framework a given year's 'tier' refers to before combining. HARVEST GAP: 9 PMF books/guides are direct PDFs (profiled); the ~13 machine-readable PMF Excel score files are on Egnyte (browser-only download — not script-fetchable, not profiled).",
   "files": [
    {
     "name": "PMF Archive — 11 21 2016 17 PMF Policy & Technical Guide v2",
     "url": "http://www.dcpcsb.org/sites/default/files/2016-11-21%202016-17%20PMF%20Policy%20%26%20Technical%20Guide%20v2.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "accountability",
      "methodology"
     ],
     "series": "PMF Policy & Technical Guides",
     "label": "2016",
     "n_pages": 137,
     "has_tabular_data": true,
     "n_table_pages": 94,
     "tables": [
      {
       "page": 11,
       "header": [
        "the data it receives until final results are presented. Data are stored to the number of digits"
       ],
       "n_rows": 2
      },
      {
       "page": 14,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 3
      },
      {
       "page": 15,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 3
      },
      {
       "page": 16,
       "header": [
        "Measure",
        "Floor",
        "Target Business Rule",
        "Calculated Target"
       ],
       "n_rows": 5
      },
      {
       "page": 17,
       "header": [
        "Measure",
        "Floor",
        "Target",
        "Calculated Target"
       ],
       "n_rows": 3
      },
      {
       "page": 18,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 4
      },
      {
       "page": 18,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 2
      },
      {
       "page": 19,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "PMF Archive — 12 12 Final 2015 16 PMF Book",
     "url": "http://www.dcpcsb.org/sites/default/files/2016-12-12%20Final%202015-16%20PMF%20Book.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "series": "PMF Books (annual charter results)",
     "label": "2016",
     "n_pages": 326,
     "has_tabular_data": true,
     "n_table_pages": 117,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 4
      },
      {
       "page": 2,
       "header": [],
       "n_rows": 4
      },
      {
       "page": 5,
       "header": [
        "2015—16 Overall Tier 1 (65.0 — 100.0%) Ward Grade Levels Percentage"
       ],
       "n_rows": 23
      },
      {
       "page": 6,
       "header": [
        "2015—16 Overall Tier 1 (65.0 — 100.0%) Ward Grade Levels Percentage"
       ],
       "n_rows": 21
      },
      {
       "page": 7,
       "header": [
        "2015—16 Overall Tier 2 (35.0 — 64.9%) Ward Grade Levels Percentage"
       ],
       "n_rows": 26
      },
      {
       "page": 8,
       "header": [
        "2015—16 Overall Tier 2 (35.0 — 64.9%) Ward Grade Levels Percentage"
       ],
       "n_rows": 26
      },
      {
       "page": 9,
       "header": [
        "2015—16 Overall Tier 3 (0.0 — 34.9%) Ward Grade Levels Percentage"
       ],
       "n_rows": 7
      },
      {
       "page": 10,
       "header": [
        "PK—8 Schools"
       ],
       "n_rows": 25
      }
     ]
    },
    {
     "name": "PMF Archive — Vote 2015 16 PMF Policy Tech March Meeting Final Clean Copy",
     "url": "http://www.dcpcsb.org/sites/default/files/Vote--2015-16%20PMF_Policy%20%20Tech_March%20Meeting%20Final%20Clean%20Copy.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "series": "PMF Policy & Technical Guides",
     "label": "2015",
     "n_pages": 116,
     "has_tabular_data": true,
     "n_table_pages": 83,
     "tables": [
      {
       "page": 11,
       "header": [
        "the data it receives until final results are presented. Data are stored to the number of digits"
       ],
       "n_rows": 2
      },
      {
       "page": 14,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 3
      },
      {
       "page": 15,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 3
      },
      {
       "page": 16,
       "header": [
        "Measure",
        "Floor",
        "Target Business Rule",
        "Calculated Target"
       ],
       "n_rows": 5
      },
      {
       "page": 17,
       "header": [
        "Measure",
        "Floor",
        "Target",
        "Calculated Target"
       ],
       "n_rows": 3
      },
      {
       "page": 18,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 4
      },
      {
       "page": 18,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 2
      },
      {
       "page": 19,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "PMF Archive — Final PMF Book 2015 2 29 2016",
     "url": "http://www.dcpcsb.org/sites/default/files/Final_PMF_Book_2015_2%2029%202016.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "series": "PMF Books (annual charter results)",
     "label": "2016",
     "n_pages": 300,
     "has_tabular_data": true,
     "n_table_pages": 116,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 4
      },
      {
       "page": 3,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 6,
       "header": [
        "Early Childhood/Elementary/Middle Schools"
       ],
       "n_rows": 27
      },
      {
       "page": 7,
       "header": [
        "Early Childhood/Elementary/Middle Schools"
       ],
       "n_rows": 27
      },
      {
       "page": 8,
       "header": [
        "Early Childhood/Elementary/Middle Schools"
       ],
       "n_rows": 27
      },
      {
       "page": 9,
       "header": [
        "Early Childhood/Elementary/Middle Schools"
       ],
       "n_rows": 20
      },
      {
       "page": 10,
       "header": [
        "High Schools"
       ],
       "n_rows": 25
      },
      {
       "page": 11,
       "header": [
        "2014—15 Tier 1 (65.0 — 100.0%) Ward Ages Served"
       ],
       "n_rows": 16
      }
     ]
    },
    {
     "name": "PMF Archive — Revised 2014 15 PMF Policy Tech Guide Approved 8 17 15 FINAL1",
     "url": "http://www.dcpcsb.org/sites/default/files/Revised%202014-15%20PMF_Policy__Tech_Guide%20Approved%20%208%2017%2015%20FINAL1.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "series": "PMF Policy & Technical Guides",
     "label": "2015",
     "n_pages": 102,
     "has_tabular_data": true,
     "n_table_pages": 69,
     "tables": [
      {
       "page": 8,
       "header": [
        "PCSB makes every effort to retain the"
       ],
       "n_rows": 3
      },
      {
       "page": 15,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 5
      },
      {
       "page": 16,
       "header": [
        "Measure",
        "Floor",
        "Target"
       ],
       "n_rows": 3
      },
      {
       "page": 17,
       "header": [
        "Weight",
        "Indicator",
        "Measure",
        "Weight",
        "Floor6",
        "Target7"
       ],
       "n_rows": 8
      },
      {
       "page": 17,
       "header": [
        "Weight",
        "Indicator",
        "Measure",
        "Weight",
        "Floor",
        "Target"
       ],
       "n_rows": 4
      },
      {
       "page": 18,
       "header": [
        "Weigh",
        "t",
        "Indicator",
        "Measure",
        "Weigh",
        "t",
        "Floo",
        "r",
        "Target"
       ],
       "n_rows": 6
      },
      {
       "page": 18,
       "header": [
        "Weigh",
        "t",
        "Indicator",
        "Measure",
        "Weigh",
        "t",
        "Floo",
        "r",
        "Target"
       ],
       "n_rows": 6
      },
      {
       "page": 18,
       "header": [
        "Weight",
        "Indicator",
        "Measure",
        "Weight",
        "Floor",
        "Target"
       ],
       "n_rows": 4
      }
     ]
    },
    {
     "name": "PMF Archive — 14 Book (12 11 2014)",
     "url": "http://www.dcpcsb.org/sites/default/files/2013-14%20Book%20%2812-11-2014%29.pdf",
     "kind": "pdf",
     "year": "2013",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "series": "PMF Books (annual charter results)",
     "label": "2013",
     "n_pages": 328,
     "has_tabular_data": true,
     "n_table_pages": 115,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 6,
       "header": [
        "2013—14 Overall Tier 1 (65.0 — 100.0%) Ward Grade Levels Percentage"
       ],
       "n_rows": 25
      },
      {
       "page": 7,
       "header": [
        "2013—14 Overall Tier 2 (35.0 — 64.9%) Ward Grade Levels Percentage"
       ],
       "n_rows": 26
      },
      {
       "page": 8,
       "header": [
        "2013—14 Overall Tier 2 (35.0 — 64.9%) Ward Grade Levels Percentage"
       ],
       "n_rows": 24
      },
      {
       "page": 9,
       "header": [
        "Early Childhood Programs"
       ],
       "n_rows": 27
      },
      {
       "page": 10,
       "header": [
        "Early Childhood Programs"
       ],
       "n_rows": 25
      },
      {
       "page": 11,
       "header": [
        "Early Childhood Programs"
       ],
       "n_rows": 23
      },
      {
       "page": 12,
       "header": [
        "Elementary/Middle Schools"
       ],
       "n_rows": 22
      }
     ]
    },
    {
     "name": "PMF Archive — 2014TechnicalGuide 01 10 14 FINAL",
     "url": "http://www.dcpcsb.org/sites/default/files/2014TechnicalGuide%2001%2010%2014%20FINAL.pdf",
     "kind": "pdf",
     "year": "2014",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "series": "PMF Policy & Technical Guides",
     "label": "2014",
     "n_pages": 25,
     "has_tabular_data": true,
     "n_table_pages": 11,
     "tables": [
      {
       "page": 8,
       "header": [
        "Weight",
        "Indicator",
        "Metric",
        "Weight",
        "Floor5",
        "Target6"
       ],
       "n_rows": 10
      },
      {
       "page": 8,
       "header": [
        "Weight",
        "Indicator",
        "Metric",
        "Weight",
        "Floor",
        "Target"
       ],
       "n_rows": 8
      },
      {
       "page": 9,
       "header": [
        "20%",
        "Leading Indicators",
        "Attendance",
        "10%",
        "82.0"
       ],
       "n_rows": 2
      },
      {
       "page": 9,
       "header": [
        "Weight",
        "Indicator",
        "Metric",
        "Weight",
        "Floor",
        "Target"
       ],
       "n_rows": 15
      },
      {
       "page": 9,
       "header": [
        "Weight",
        "Indicator",
        "Metric",
        "Weight",
        "Floor",
        "Target"
       ],
       "n_rows": 15
      },
      {
       "page": 9,
       "header": [
        "PMF, not counting it towards a school’s overall score. Once the baseline is established, the floors and targets will be"
       ],
       "n_rows": 2
      },
      {
       "page": 14,
       "header": [
        "Indicator",
        "Measure",
        "Description",
        "Components, method, additional notes",
        "Rationale"
       ],
       "n_rows": 3
      },
      {
       "page": 15,
       "header": [
        "Indicator",
        "Measure",
        "Description",
        "Components, method, additional notes",
        "Rationale"
       ],
       "n_rows": 4
      }
     ]
    },
    {
     "name": "PMF Archive — 2013 PMF REDUCED 2",
     "url": "http://www.dcpcsb.org/sites/default/files/2013%20PMF%20REDUCED%202.pdf",
     "kind": "pdf",
     "year": "2013",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "series": "PMF (other documents)",
     "label": "2013",
     "n_pages": 304,
     "has_tabular_data": true,
     "n_table_pages": 60,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 3
      },
      {
       "page": 6,
       "header": [
        "ELEMENTARY/MIDDLE SCHOOLS"
       ],
       "n_rows": 25
      },
      {
       "page": 7,
       "header": [
        "ELEMENTARY/MIDDLE SCHOOLS"
       ],
       "n_rows": 27
      },
      {
       "page": 8,
       "header": [
        "HIGH SCHOOLS"
       ],
       "n_rows": 10
      },
      {
       "page": 8,
       "header": [
        "ELEMENTARY/MIDDLE SCHOOLS"
       ],
       "n_rows": 9
      },
      {
       "page": 9,
       "header": [
        "Public Charter School",
        "2012–13 Grade Levels",
        "Targets Met",
        "Total Targets"
       ],
       "n_rows": 31
      },
      {
       "page": 10,
       "header": [
        "Public Charter School",
        "2012–13 Grade Levels",
        "Targets Met",
        "Total Targets"
       ],
       "n_rows": 30
      },
      {
       "page": 11,
       "header": [
        "Public Charter School",
        "2012–13 Grade Levels",
        "Targets Met",
        "Total Targets"
       ],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "PMF Archive — Release 2012 2013 PMF Guidelines revised 9 12",
     "url": "http://www.dcpcsb.org/sites/default/files/Release--2012_2013_PMF%20Guidelines%20revised%209%2012.pdf",
     "kind": "pdf",
     "year": "2012",
     "status": "ok",
     "topics": [
      "accountability"
     ],
     "series": "PMF Policy & Technical Guides",
     "label": "2012",
     "n_pages": 29,
     "has_tabular_data": true,
     "n_table_pages": 14,
     "tables": [
      {
       "page": 8,
       "header": [
        "Weight",
        "Indicator",
        "Metric",
        "Weight",
        "Floor5",
        "Target6"
       ],
       "n_rows": 10
      },
      {
       "page": 8,
       "header": [
        "Weight",
        "Indicator",
        "Metric",
        "Weight",
        "Floor",
        "Target"
       ],
       "n_rows": 10
      },
      {
       "page": 9,
       "header": [
        "Weight",
        "Indicator",
        "Metric",
        "Weight",
        "Floor",
        "Target"
       ],
       "n_rows": 15
      },
      {
       "page": 9,
       "header": [
        "Weight",
        "Indicator",
        "Metric",
        "Weight",
        "Floor",
        "Target"
       ],
       "n_rows": 14
      },
      {
       "page": 14,
       "header": [
        "Indicator",
        "Measure",
        "Description",
        "Components, method, additional notes",
        "Rationale"
       ],
       "n_rows": 3
      },
      {
       "page": 15,
       "header": [
        "Indicator",
        "Measure",
        "Description",
        "Components, method, additional notes",
        "Rationale"
       ],
       "n_rows": 3
      },
      {
       "page": 16,
       "header": [
        "Indicator",
        "Measure",
        "Description",
        "Components, method, additional notes",
        "Rationale"
       ],
       "n_rows": 3
      },
      {
       "page": 17,
       "header": [
        "Indicator",
        "Measure",
        "Description",
        "Components, method, additional notes",
        "Rationale"
       ],
       "n_rows": 4
      }
     ]
    }
   ],
   "search": "performance management framework (pmf) — archive dc pcsb legacy charter accountability with per-school scores/tiers. superseded by aspire/sqr. confirm which framework a given year's 'tier' refers to before combining. harvest gap: 9 pmf books/guides are direct pdfs (profiled); the ~13 machine-readable pmf excel score files are on egnyte (browser-only download — not script-fetchable, not profiled). pdf books/guides + excel data files (via egnyte) accountability methodology star rating tier sqr pmf aspire score report card quality  pmf archive — 11 21 2016 17 pmf policy & technical guide v2 the data it receives until final results are presented. data are stored to the number of digits measure floor target measure floor target measure floor target business rule calculated target measure floor target calculated target measure floor target measure floor target measure floor target pmf archive — 12 12 final 2015 16 pmf book 2015—16 overall tier 1 (65.0 — 100.0%) ward grade levels percentage 2015—16 overall tier 1 (65.0 — 100.0%) ward grade levels percentage 2015—16 overall tier 2 (35.0 — 64.9%) ward grade levels percentage 2015—16 overall tier 2 (35.0 — 64.9%) ward grade levels percentage 2015—16 overall tier 3 (0.0 — 34.9%) ward grade levels percentage pk—8 schools pmf archive — vote 2015 16 pmf policy tech march meeting final clean copy the data it receives until final results are presented. data are stored to the number of digits measure floor target measure floor target measure floor target business rule calculated target measure floor target calculated target measure floor target measure floor target measure floor target pmf archive — final pmf book 2015 2 29 2016 early childhood/elementary/middle schools early childhood/elementary/middle schools early childhood/elementary/middle schools early childhood/elementary/middle schools high schools 2014—15 tier 1 (65.0 — 100.0%) ward ages served pmf archive — revised 2014 15 pmf policy tech guide approved 8 17 15 final1 pcsb makes every effort to retain the measure floor target measure floor target weight indicator measure weight floor6 target7 weight indicator measure weight floor target weigh t indicator measure weigh t floo r target weigh t indicator measure weigh t floo r target weight indicator measure weight floor target pmf archive — 14 book (12 11 2014) 2013—14 overall tier 1 (65.0 — 100.0%) ward grade levels percentage 2013—14 overall tier 2 (35.0 — 64.9%) ward grade levels percentage 2013—14 overall tier 2 (35.0 — 64.9%) ward grade levels percentage early childhood programs early childhood programs early childhood programs elementary/middle schools pmf archive — 2014technicalguide 01 10 14 final weight indicator metric weight floor5 target6 weight indicator metric weight floor target 20% leading indicators attendance 10% 82.0 weight indicator metric weight floor target weight indicator metric weight floor target pmf, not counting it towards a school’s overall score. once the baseline is established, the floors and targets will be indicator measure description components, method, additional notes rationale indicator measure description components, method, additional notes rationale pmf archive — 2013 pmf reduced 2 elementary/middle schools elementary/middle schools high schools elementary/middle schools public charter school 2012–13 grade levels targets met total targets public charter school 2012–13 grade levels targets met total targets public charter school 2012–13 grade levels targets met total targets pmf archive — release 2012 2013 pmf guidelines revised 9 12 weight indicator metric weight floor5 target6 weight indicator metric weight floor target weight indicator metric weight floor target weight indicator metric weight floor target indicator measure description components, method, additional notes rationale indicator measure description components, method, additional notes rationale indicator measure description components, method, additional notes rationale indicator measure description components, method, additional notes rationale"
  },
  {
   "id": "pcsb-equity-reports",
   "name": "School Equity Reports (charter)",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/school-equity-reports",
   "topics": [
    "equity",
    "discipline",
    "attendance"
   ],
   "status": "stale",
   "format": "PDF (via Egnyte)",
   "cadence": "Was annual",
   "years": "SY2012-13 through 2017-18 (ARCHIVED)",
   "notes": "Per-school attendance, discipline, mobility/withdrawal, growth. PCSB now redirects this detail to OSSE's DC School Report Card; its own reports stop at 2017-18. HARVEST GAP: the 2017 per-school equity PDFs hosted directly on dcpcsb.org (9) + the definitions guide are profiled; ~111 more per-school equity PDFs are on Egnyte (browser-only, not profiled).",
   "files": [
    {
     "name": "School Equity Reports — SY 2017 18 DC PCSB Equity Report Definitions Guide",
     "url": "https://dcpcsb.org/sites/default/files/SY%202017-18%20DC%20PCSB%20Equity%20Report%20Definitions%20Guide.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "equity",
      "methodology"
     ],
     "series": "School Equity Reports (per charter school, 2017-18)",
     "label": "Definitions Guide",
     "n_pages": 2,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "School Equity Reports — Equity Report Public Charter School Academy of Hope Adult PCS",
     "url": "http://www.dcpcsb.org/sites/default/files/report/2017_Equity_Report_Public%20Charter%20School_Academy%20of%20Hope%20Adult%20PCS.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "equity"
     ],
     "series": "School Equity Reports (per charter school, 2017-18)",
     "label": "Academy of Hope Adult PCS",
     "n_pages": 4,
     "has_tabular_data": true,
     "n_table_pages": 4,
     "tables": [
      {
       "page": 1,
       "header": [
        "Academy of Hope Adult PCS 2016-2017 Equity Report 233Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Adult Equity Reports give our schools, families and communities transparent Ward 5 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 2315 18th Pl NE Washington, DC 20018 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-269-6623 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://www.aohdc.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School"
       ],
       "n_rows": 16
      },
      {
       "page": 1,
       "header": [
        "Male 33",
        "32.5"
       ],
       "n_rows": 32
      },
      {
       "page": 2,
       "header": [
        "ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE Academy of Hope Adult PCS 2016-2017 Equity Report"
       ],
       "n_rows": 88
      },
      {
       "page": 3,
       "header": [
        "Academy of Hope Adult PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "Academy of Hope Adult PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      }
     ]
    },
    {
     "name": "School Equity Reports — Equity Report Public Charter School Briya PCS",
     "url": "http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_Briya%20PCS.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "equity"
     ],
     "series": "School Equity Reports (per charter school, 2017-18)",
     "label": "Briya PCS",
     "n_pages": 4,
     "has_tabular_data": true,
     "n_table_pages": 4,
     "tables": [
      {
       "page": 1,
       "header": [
        "Briya PCS 2016-2017 Equity Report 126Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades PK3, PK4, Adult Equity Reports give our schools, families and communities transparent Ward 5 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 100 Gallatin St NE Washington, DC 20011 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-797-7337 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://briya.org/ Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School"
       ],
       "n_rows": 48
      },
      {
       "page": 2,
       "header": [
        "ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE Briya PCS 2016-2017 Equity Report"
       ],
       "n_rows": 86
      },
      {
       "page": 3,
       "header": [
        "Briya PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "Briya PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      }
     ]
    },
    {
     "name": "School Equity Reports — Equity Report Public Charter School Carlos Rosario International PCS",
     "url": "http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_Carlos%20Rosario%20International%20PCS.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "equity"
     ],
     "series": "School Equity Reports (per charter school, 2017-18)",
     "label": "Carlos Rosario International PCS",
     "n_pages": 4,
     "has_tabular_data": true,
     "n_table_pages": 4,
     "tables": [
      {
       "page": 1,
       "header": [
        "Carlos Rosario International PCS 2016-2017 Equity Report 1119Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Adult Equity Reports give our schools, families and communities transparent Ward 1 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 1100 Harvard St NW Washington, DC 20009 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-797-4700 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://www.carlosrosario.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School"
       ],
       "n_rows": 20
      },
      {
       "page": 1,
       "header": [
        "Male 41",
        "41.2"
       ],
       "n_rows": 14
      },
      {
       "page": 2,
       "header": [
        "ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE Carlos Rosario International PCS 2016-2017 Equity Report"
       ],
       "n_rows": 85
      },
      {
       "page": 3,
       "header": [
        "Carlos Rosario International PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "Carlos Rosario International PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      }
     ]
    },
    {
     "name": "School Equity Reports — Equity Report Public Charter School Community College Preparatory Academy PCS",
     "url": "http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_Community%20College%20Preparatory%20Academy%20PCS.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "equity"
     ],
     "series": "School Equity Reports (per charter school, 2017-18)",
     "label": "Community College Preparatory Academy PCS",
     "n_pages": 4,
     "has_tabular_data": true,
     "n_table_pages": 4,
     "tables": [
      {
       "page": 1,
       "header": [
        "Community College Preparatory Academy PCS 2016-2017 Equity Report 216Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Adult Equity Reports give our schools, families and communities transparent Ward 8 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 2405 Martin Luther King Jr Ave SE Washington, DC 20020 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-610-5780 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://www.ccprep-academy.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School"
       ],
       "n_rows": 52
      },
      {
       "page": 2,
       "header": [
        "ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE Community College Preparatory Academy PCS 2016-2017 Equity Report"
       ],
       "n_rows": 89
      },
      {
       "page": 3,
       "header": [
        "Community College Preparatory Academy PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "Community College Preparatory Academy PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      }
     ]
    },
    {
     "name": "School Equity Reports — Equity Report Public Charter School LAYC Career Academy PCS",
     "url": "http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_LAYC%20Career%20Academy%20PCS.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "equity"
     ],
     "series": "School Equity Reports (per charter school, 2017-18)",
     "label": "LAYC Career Academy PCS",
     "n_pages": 4,
     "has_tabular_data": true,
     "n_table_pages": 4,
     "tables": [
      {
       "page": 1,
       "header": [
        "LAYC Career Academy PCS 2016-2017 Equity Report 104Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Ungraded Equity Reports give our schools, families and communities transparent Ward 1 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 3224 16th St NW Washington, DC 20010 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-319-2228 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://www.laycca.org/ Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School"
       ],
       "n_rows": 47
      },
      {
       "page": 2,
       "header": [
        "ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE LAYC Career Academy PCS 2016-2017 Equity Report"
       ],
       "n_rows": 86
      },
      {
       "page": 3,
       "header": [
        "LAYC Career Academy PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "LAYC Career Academy PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      }
     ]
    },
    {
     "name": "School Equity Reports — Equity Report Public Charter School Maya Angelou PCS Young Adult Learning Center",
     "url": "http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_Maya%20Angelou%20PCS%20-%20Young%20Adult%20Learning%20Center.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "equity"
     ],
     "series": "School Equity Reports (per charter school, 2017-18)",
     "label": "Maya Angelou PCS Young Adult Learning Center",
     "n_pages": 4,
     "has_tabular_data": true,
     "n_table_pages": 4,
     "tables": [
      {
       "page": 1,
       "header": [
        "Maya Angelou PCS - Young Adult Learning Center 2016-2017 Equity Report 137Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Adult Equity Reports give our schools, families and communities transparent Ward 7 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 5600 E Capitol St NE Washington, DC 20019 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-289-8898 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://seeforever.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School"
       ],
       "n_rows": 54
      },
      {
       "page": 2,
       "header": [
        "ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE Maya Angelou PCS - Young Adult Learning Center 2016-2017 Equity Report"
       ],
       "n_rows": 89
      },
      {
       "page": 3,
       "header": [
        "Maya Angelou PCS - Young Adult Learning Center 2016-2017 Equity Report"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "Maya Angelou PCS - Young Adult Learning Center 2016-2017 Equity Report"
       ],
       "n_rows": 3
      }
     ]
    },
    {
     "name": "School Equity Reports — Equity Report Public Charter School The Next Step El Proximo Paso PCS",
     "url": "http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_The%20Next%20Step-El%20Proximo%20Paso%20PCS.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "equity"
     ],
     "series": "School Equity Reports (per charter school, 2017-18)",
     "label": "The Next Step El Proximo Paso PCS",
     "n_pages": 4,
     "has_tabular_data": true,
     "n_table_pages": 4,
     "tables": [
      {
       "page": 1,
       "header": [
        "The Next Step/El Proximo Paso PCS 2016-2017 Equity Report 168Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Ungraded Equity Reports give our schools, families and communities transparent Ward 1 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 3047 15th St NW Washington, DC 20009 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-319-2249 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://nextsteppcs.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School"
       ],
       "n_rows": 48
      },
      {
       "page": 2,
       "header": [
        "ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE The Next Step/El Proximo Paso PCS 2016-2017 Equity Report"
       ],
       "n_rows": 87
      },
      {
       "page": 3,
       "header": [
        "The Next Step/El Proximo Paso PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "The Next Step/El Proximo Paso PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      }
     ]
    },
    {
     "name": "School Equity Reports — Equity Report Public Charter School YouthBuild PCS",
     "url": "http://www.dcpcsb.org/sites/default/files/2017_Equity_Report_Public%20Charter%20School_YouthBuild%20PCS.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "equity"
     ],
     "series": "School Equity Reports (per charter school, 2017-18)",
     "label": "YouthBuild PCS",
     "n_pages": 4,
     "has_tabular_data": true,
     "n_table_pages": 4,
     "tables": [
      {
       "page": 1,
       "header": [
        "YouthBuild PCS 2016-2017 Equity Report 128Public Charter School SCHOOLCHARACTERISTICS (SY 2017-18) What is an Equity Report? Equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. Grades Ungraded Equity Reports give our schools, families and communities transparent Ward 1 and comparable information relatedto equity across all DC schools. Equity Reports are available online so that information is easy to access, understand and use. Address 3220 16th St NW Washington, DC 20009 The Office of the State Superintendent of Education (OSSE), DC Public Schools (DCPS), the DC Public Charter SchoolBoard (DC PCSB) in Contact 202-319-0141 consultation with charter schools, the Deputy Mayor for Education and NewSchools Venture Fund partnered to create these Equity Reports. http://www.youthbuildpcs.org Equity Reports are a complement to OSSE’s LearnDCSchool Profiles, DCPS’ School Scorecards and DCPCSB’s Performance Management Framework. Type 1 Public Charter School"
       ],
       "n_rows": 50
      },
      {
       "page": 2,
       "header": [
        "ASTTUTEDNENDAT NCHCEA R &A CDTIESRCIISPTLIICNSE YouthBuild PCS 2016-2017 Equity Report"
       ],
       "n_rows": 87
      },
      {
       "page": 3,
       "header": [
        "YouthBuild PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      },
      {
       "page": 4,
       "header": [
        "YouthBuild PCS 2016-2017 Equity Report"
       ],
       "n_rows": 3
      }
     ]
    }
   ],
   "search": "school equity reports (charter) dc pcsb per-school attendance, discipline, mobility/withdrawal, growth. pcsb now redirects this detail to osse's dc school report card; its own reports stop at 2017-18. harvest gap: the 2017 per-school equity pdfs hosted directly on dcpcsb.org (9) + the definitions guide are profiled; ~111 more per-school equity pdfs are on egnyte (browser-only, not profiled). pdf (via egnyte) equity discipline attendance  suspension expulsion suspended discipline truancy absenteeism chronic absent school equity reports — sy 2017 18 dc pcsb equity report definitions guide school equity reports — equity report public charter school academy of hope adult pcs academy of hope adult pcs 2016-2017 equity report 233public charter school schoolcharacteristics (sy 2017-18) what is an equity report? equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. grades adult equity reports give our schools, families and communities transparent ward 5 and comparable information relatedto equity across all dc schools. equity reports are available online so that information is easy to access, understand and use. address 2315 18th pl ne washington, dc 20018 the office of the state superintendent of education (osse), dc public schools (dcps), the dc public charter schoolboard (dc pcsb) in contact 202-269-6623 consultation with charter schools, the deputy mayor for education and newschools venture fund partnered to create these equity reports. http://www.aohdc.org equity reports are a complement to osse’s learndcschool profiles, dcps’ school scorecards and dcpcsb’s performance management framework. type 1 public charter school male 33 32.5 asttutednendat nchcea r &a cdtiesrciisptliicnse academy of hope adult pcs 2016-2017 equity report academy of hope adult pcs 2016-2017 equity report academy of hope adult pcs 2016-2017 equity report school equity reports — equity report public charter school briya pcs briya pcs 2016-2017 equity report 126public charter school schoolcharacteristics (sy 2017-18) what is an equity report? equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. grades pk3, pk4, adult equity reports give our schools, families and communities transparent ward 5 and comparable information relatedto equity across all dc schools. equity reports are available online so that information is easy to access, understand and use. address 100 gallatin st ne washington, dc 20011 the office of the state superintendent of education (osse), dc public schools (dcps), the dc public charter schoolboard (dc pcsb) in contact 202-797-7337 consultation with charter schools, the deputy mayor for education and newschools venture fund partnered to create these equity reports. http://briya.org/ equity reports are a complement to osse’s learndcschool profiles, dcps’ school scorecards and dcpcsb’s performance management framework. type 1 public charter school asttutednendat nchcea r &a cdtiesrciisptliicnse briya pcs 2016-2017 equity report briya pcs 2016-2017 equity report briya pcs 2016-2017 equity report school equity reports — equity report public charter school carlos rosario international pcs carlos rosario international pcs 2016-2017 equity report 1119public charter school schoolcharacteristics (sy 2017-18) what is an equity report? equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. grades adult equity reports give our schools, families and communities transparent ward 1 and comparable information relatedto equity across all dc schools. equity reports are available online so that information is easy to access, understand and use. address 1100 harvard st nw washington, dc 20009 the office of the state superintendent of education (osse), dc public schools (dcps), the dc public charter schoolboard (dc pcsb) in contact 202-797-4700 consultation with charter schools, the deputy mayor for education and newschools venture fund partnered to create these equity reports. http://www.carlosrosario.org equity reports are a complement to osse’s learndcschool profiles, dcps’ school scorecards and dcpcsb’s performance management framework. type 1 public charter school male 41 41.2 asttutednendat nchcea r &a cdtiesrciisptliicnse carlos rosario international pcs 2016-2017 equity report carlos rosario international pcs 2016-2017 equity report carlos rosario international pcs 2016-2017 equity report school equity reports — equity report public charter school community college preparatory academy pcs community college preparatory academy pcs 2016-2017 equity report 216public charter school schoolcharacteristics (sy 2017-18) what is an equity report? equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. grades adult equity reports give our schools, families and communities transparent ward 8 and comparable information relatedto equity across all dc schools. equity reports are available online so that information is easy to access, understand and use. address 2405 martin luther king jr ave se washington, dc 20020 the office of the state superintendent of education (osse), dc public schools (dcps), the dc public charter schoolboard (dc pcsb) in contact 202-610-5780 consultation with charter schools, the deputy mayor for education and newschools venture fund partnered to create these equity reports. http://www.ccprep-academy.org equity reports are a complement to osse’s learndcschool profiles, dcps’ school scorecards and dcpcsb’s performance management framework. type 1 public charter school asttutednendat nchcea r &a cdtiesrciisptliicnse community college preparatory academy pcs 2016-2017 equity report community college preparatory academy pcs 2016-2017 equity report community college preparatory academy pcs 2016-2017 equity report school equity reports — equity report public charter school layc career academy pcs layc career academy pcs 2016-2017 equity report 104public charter school schoolcharacteristics (sy 2017-18) what is an equity report? equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. grades ungraded equity reports give our schools, families and communities transparent ward 1 and comparable information relatedto equity across all dc schools. equity reports are available online so that information is easy to access, understand and use. address 3224 16th st nw washington, dc 20010 the office of the state superintendent of education (osse), dc public schools (dcps), the dc public charter schoolboard (dc pcsb) in contact 202-319-2228 consultation with charter schools, the deputy mayor for education and newschools venture fund partnered to create these equity reports. http://www.laycca.org/ equity reports are a complement to osse’s learndcschool profiles, dcps’ school scorecards and dcpcsb’s performance management framework. type 1 public charter school asttutednendat nchcea r &a cdtiesrciisptliicnse layc career academy pcs 2016-2017 equity report layc career academy pcs 2016-2017 equity report layc career academy pcs 2016-2017 equity report school equity reports — equity report public charter school maya angelou pcs young adult learning center maya angelou pcs - young adult learning center 2016-2017 equity report 137public charter school schoolcharacteristics (sy 2017-18) what is an equity report? equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. grades adult equity reports give our schools, families and communities transparent ward 7 and comparable information relatedto equity across all dc schools. equity reports are available online so that information is easy to access, understand and use. address 5600 e capitol st ne washington, dc 20019 the office of the state superintendent of education (osse), dc public schools (dcps), the dc public charter schoolboard (dc pcsb) in contact 202-289-8898 consultation with charter schools, the deputy mayor for education and newschools venture fund partnered to create these equity reports. http://seeforever.org equity reports are a complement to osse’s learndcschool profiles, dcps’ school scorecards and dcpcsb’s performance management framework. type 1 public charter school asttutednendat nchcea r &a cdtiesrciisptliicnse maya angelou pcs - young adult learning center 2016-2017 equity report maya angelou pcs - young adult learning center 2016-2017 equity report maya angelou pcs - young adult learning center 2016-2017 equity report school equity reports — equity report public charter school the next step el proximo paso pcs the next step/el proximo paso pcs 2016-2017 equity report 168public charter school schoolcharacteristics (sy 2017-18) what is an equity report? equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. grades ungraded equity reports give our schools, families and communities transparent ward 1 and comparable information relatedto equity across all dc schools. equity reports are available online so that information is easy to access, understand and use. address 3047 15th st nw washington, dc 20009 the office of the state superintendent of education (osse), dc public schools (dcps), the dc public charter schoolboard (dc pcsb) in contact 202-319-2249 consultation with charter schools, the deputy mayor for education and newschools venture fund partnered to create these equity reports. http://nextsteppcs.org equity reports are a complement to osse’s learndcschool profiles, dcps’ school scorecards and dcpcsb’s performance management framework. type 1 public charter school asttutednendat nchcea r &a cdtiesrciisptliicnse the next step/el proximo paso pcs 2016-2017 equity report the next step/el proximo paso pcs 2016-2017 equity report the next step/el proximo paso pcs 2016-2017 equity report school equity reports — equity report public charter school youthbuild pcs youthbuild pcs 2016-2017 equity report 128public charter school schoolcharacteristics (sy 2017-18) what is an equity report? equity in education refers to all students receiving the same caliber of education regardless of their race, ethnicity, economic status, special education status orother factors. grades ungraded equity reports give our schools, families and communities transparent ward 1 and comparable information relatedto equity across all dc schools. equity reports are available online so that information is easy to access, understand and use. address 3220 16th st nw washington, dc 20009 the office of the state superintendent of education (osse), dc public schools (dcps), the dc public charter schoolboard (dc pcsb) in contact 202-319-0141 consultation with charter schools, the deputy mayor for education and newschools venture fund partnered to create these equity reports. http://www.youthbuildpcs.org equity reports are a complement to osse’s learndcschool profiles, dcps’ school scorecards and dcpcsb’s performance management framework. type 1 public charter school asttutednendat nchcea r &a cdtiesrciisptliicnse youthbuild pcs 2016-2017 equity report youthbuild pcs 2016-2017 equity report youthbuild pcs 2016-2017 equity report"
  },
  {
   "id": "pcsb-discipline-attendance",
   "name": "Annual Discipline & Attendance Report (charter)",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/attendance-and-discipline-report",
   "topics": [
    "discipline",
    "attendance"
   ],
   "status": "ok",
   "format": "Web page / PDF",
   "cadence": "Annual",
   "years": "Multiple",
   "notes": "Charter suspensions/expulsions/attendance. Overlaps OSSE citywide discipline data and the Report Card (the cross-sector authority).",
   "files": [
    {
     "name": "Discipline & Attendance — [CORRECTED 9 5 23 council submission] SY22 23 DC PCSB South Capital Street Truan",
     "url": "https://dcpcsb.org/sites/default/files/media/file/%5BCORRECTED%209_5_23%20council_submission%5D%20SY22-23%20DC%20PCSB%20South%20Capital%20Street%20Truancy%20Report.pdf",
     "kind": "pdf",
     "year": "2022-23",
     "status": "ok",
     "topics": [
      "attendance",
      "discipline"
     ],
     "n_pages": 27,
     "has_tabular_data": true,
     "n_table_pages": 8,
     "tables": [
      {
       "page": 5,
       "header": [
        "Percent of Students Suspended (Suspension Rate)",
        "8.4%"
       ],
       "n_rows": 8
      },
      {
       "page": 10,
       "header": [
        "Campus",
        "Grades Served",
        "Ward",
        "SY 2022-23",
        "SY 2021-22"
       ],
       "n_rows": 6
      },
      {
       "page": 11,
       "header": [
        "Campus",
        "Grades Served",
        "Ward",
        "% of Students",
        "# of Students"
       ],
       "n_rows": 6
      },
      {
       "page": 12,
       "header": [
        "Campus",
        "SY 2022-23 ISA",
        "SY2021-22 ISA",
        "SY 2020-21 ISA"
       ],
       "n_rows": 5
      },
      {
       "page": 13,
       "header": [
        "In-Seat Attendance: Highest Rates"
       ],
       "n_rows": 13
      },
      {
       "page": 14,
       "header": [
        "Campus",
        "Grades Served",
        "Ward",
        "ISA"
       ],
       "n_rows": 11
      },
      {
       "page": 15,
       "header": [
        "Campus",
        "Grades Served",
        "Ward",
        "SY 2022-23 ISA",
        "SY 2021-22 ISA"
       ],
       "n_rows": 7
      },
      {
       "page": 16,
       "header": [
        "Campus",
        "Grades Served",
        "War d",
        "# Truant Students",
        "Truancy Rate",
        "ISA"
       ],
       "n_rows": 11
      }
     ]
    },
    {
     "name": "Discipline & Attendance — SY 17 18 Attendance and Discipline Report",
     "url": "https://dcpcsb.org/sites/default/files/SY-17-18-Attendance-and-Discipline-Report.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "attendance",
      "discipline"
     ],
     "n_pages": 25,
     "has_tabular_data": true,
     "n_table_pages": 11,
     "tables": [
      {
       "page": 6,
       "header": [],
       "n_rows": 11
      },
      {
       "page": 7,
       "header": [
        "Grades 2016-17 2017-18 School Ward Served Rate Rate"
       ],
       "n_rows": 10
      },
      {
       "page": 8,
       "header": [
        "Grades 2016-17 2017-18 School Ward Served Rate Rate"
       ],
       "n_rows": 6
      },
      {
       "page": 11,
       "header": [
        "# of Audited Grades School Ward Students Served Suspended"
       ],
       "n_rows": 11
      },
      {
       "page": 12,
       "header": [
        "SY 2016-2017 SY 2017-2018"
       ],
       "n_rows": 3
      },
      {
       "page": 13,
       "header": [
        "Campus Highest Long T",
        "Grades erm Susp Served",
        "Ward ension Rat",
        "% of es in 2015-16 students",
        "# of students"
       ],
       "n_rows": 6
      },
      {
       "page": 16,
       "header": [
        "Grades Highest ISA Rates SY 2017-18 Ward ISA Rate Served"
       ],
       "n_rows": 12
      },
      {
       "page": 17,
       "header": [
        "Grades Lowest ISA Rates SY 2017-18 Ward ISA Rate Served"
       ],
       "n_rows": 10
      }
     ]
    },
    {
     "name": "Discipline & Attendance — DC PCSB SY 2015 16 Truancy Report",
     "url": "https://dcpcsb.org/sites/default/files/media/file/DC-PCSB-SY-2015-16-Truancy-Report.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "attendance",
      "discipline"
     ],
     "n_pages": 22,
     "has_tabular_data": true,
     "n_table_pages": 13,
     "tables": [
      {
       "page": 5,
       "header": [
        "395"
       ],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 6,
       "header": [
        "School",
        "Ward",
        "2014-15 Rate*",
        "2015-16 Rate*"
       ],
       "n_rows": 7
      },
      {
       "page": 7,
       "header": [
        "School",
        "Ward",
        "2014-15 Rate*",
        "2015-16 Rate*"
       ],
       "n_rows": 8
      },
      {
       "page": 9,
       "header": [
        "Notable improvements",
        "Ward",
        "# of students"
       ],
       "n_rows": 5
      },
      {
       "page": 10,
       "header": [
        "SY 2014-2015",
        "SY 2015-2016"
       ],
       "n_rows": 3
      },
      {
       "page": 11,
       "header": [
        "Ward",
        "% of students",
        "# of students"
       ],
       "n_rows": 6
      },
      {
       "page": 13,
       "header": [
        "Top Schools - Highest Rates SY 2015-16",
        "Rate"
       ],
       "n_rows": 10
      }
     ]
    },
    {
     "name": "Discipline & Attendance — 15 PCSB Discipline and Truancy Report",
     "url": "https://dcpcsb.org/sites/default/files/media/file/SY2014-15%20PCSB%20Discipline%20and%20Truancy%20Report.pdf",
     "kind": "pdf",
     "year": "2020-14",
     "status": "ok",
     "topics": [
      "attendance",
      "discipline"
     ],
     "n_pages": 3,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Discipline & Attendance — 2015 Discipline & Attendance Briefing full report",
     "url": "https://dcpcsb.org/sites/default/files/2015%20Discipline%20%26%20Attendance%20Briefing_full%20report.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "attendance",
      "discipline"
     ],
     "n_pages": 18,
     "has_tabular_data": true,
     "n_table_pages": 9,
     "tables": [
      {
       "page": 3,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 3,
       "header": [
        "237 186"
       ],
       "n_rows": 5
      },
      {
       "page": 3,
       "header": [
        "186"
       ],
       "n_rows": 2
      },
      {
       "page": 3,
       "header": [
        "139"
       ],
       "n_rows": 2
      },
      {
       "page": 3,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 4,
       "header": [
        "School",
        "Ward",
        "SY2013-­‐14 Rate",
        "SY2014-­‐15 Rate"
       ],
       "n_rows": 7
      },
      {
       "page": 5,
       "header": [
        "School",
        "Ward",
        "SY2013-­‐ 14 Rate",
        "SY2014-­‐ 15 Rate"
       ],
       "n_rows": 8
      },
      {
       "page": 7,
       "header": [
        "Notable improvements",
        "Ward",
        "# of students"
       ],
       "n_rows": 5
      }
     ]
    }
   ],
   "search": "annual discipline & attendance report (charter) dc pcsb charter suspensions/expulsions/attendance. overlaps osse citywide discipline data and the report card (the cross-sector authority). web page / pdf discipline attendance suspension expulsion suspended discipline truancy absenteeism chronic absent discipline & attendance — [corrected 9 5 23 council submission] sy22 23 dc pcsb south capital street truan percent of students suspended (suspension rate) 8.4% campus grades served ward sy 2022-23 sy 2021-22 campus grades served ward % of students # of students campus sy 2022-23 isa sy2021-22 isa sy 2020-21 isa in-seat attendance: highest rates campus grades served ward isa campus grades served ward sy 2022-23 isa sy 2021-22 isa campus grades served war d # truant students truancy rate isa discipline & attendance — sy 17 18 attendance and discipline report grades 2016-17 2017-18 school ward served rate rate grades 2016-17 2017-18 school ward served rate rate # of audited grades school ward students served suspended sy 2016-2017 sy 2017-2018 campus highest long t grades erm susp served ward ension rat % of es in 2015-16 students # of students grades highest isa rates sy 2017-18 ward isa rate served grades lowest isa rates sy 2017-18 ward isa rate served discipline & attendance — dc pcsb sy 2015 16 truancy report 395 school ward 2014-15 rate* 2015-16 rate* school ward 2014-15 rate* 2015-16 rate* notable improvements ward # of students sy 2014-2015 sy 2015-2016 ward % of students # of students top schools - highest rates sy 2015-16 rate discipline & attendance — 15 pcsb discipline and truancy report discipline & attendance — 2015 discipline & attendance briefing full report 237 186 186 139 school ward sy2013-­‐14 rate sy2014-­‐15 rate school ward sy2013-­‐ 14 rate sy2014-­‐ 15 rate notable improvements ward # of students"
  },
  {
   "id": "pcsb-school-finances",
   "name": "Charter School Finances (spending, budgets, audits, 990s)",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/school-finances",
   "topics": [
    "finance"
   ],
   "status": "unstable",
   "format": "Web page / PDF / Excel (much via Egnyte)",
   "cadence": "Annual",
   "years": "Multiple",
   "notes": "Per-school spending breakdowns. Cluster of pages: /school-budgets, /school-fiscal-audits, /school-990s, /risk-funding-reports, /financial-analysis-report. Charter actuals — distinct from OSSE PPE methodology. HARVEST GAP: the 4 citywide At-Risk Funding reports are profiled; the bulk is per-school documents NOT catalogued individually — ~249 fiscal-audit PDFs on dcpcsb.org + ~464 audits, ~503 annual reports, and the financial-analysis files on Egnyte (browser-only). Open the page to browse a specific school.",
   "files": [
    {
     "name": "At-Risk Funding — At Risk Funding Report 18 19 1 22 2019 NW",
     "url": "https://dcpcsb.org/sites/default/files/At-Risk%20Funding%20Report%2018-19%201-22-2019%20NW.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "finance",
      "demographics"
     ],
     "n_pages": 70,
     "has_tabular_data": true,
     "n_table_pages": 60,
     "tables": [
      {
       "page": 3,
       "header": [
        "AT RISK FUNDING AND ENROLLMENT FOR CHARTER SCHOOLS FY2018 through FY2019"
       ],
       "n_rows": 53
      },
      {
       "page": 4,
       "header": [
        "AT RISK FUNDING AND ENROLLMENT FOR CHARTER SCHOOLS FY2018 through FY2019"
       ],
       "n_rows": 13
      },
      {
       "page": 6,
       "header": [
        "Achievement Prep"
       ],
       "n_rows": 5
      },
      {
       "page": 7,
       "header": [
        "CHARTER NAME"
       ],
       "n_rows": 7
      },
      {
       "page": 8,
       "header": [
        "CHARTER NAME"
       ],
       "n_rows": 7
      },
      {
       "page": 9,
       "header": [
        "Breakthrough Montessori"
       ],
       "n_rows": 7
      },
      {
       "page": 10,
       "header": [
        "CHARTER NAME"
       ],
       "n_rows": 7
      },
      {
       "page": 11,
       "header": [
        "Capital City Public Charter School (LS, MS, HS)"
       ],
       "n_rows": 8
      }
     ]
    },
    {
     "name": "At-Risk Funding — SY 17 18 at risk funding report",
     "url": "https://dcpcsb.org/sites/default/files/SY%2017-18%20at%20risk%20funding%20report.pdf",
     "kind": "pdf",
     "year": "2017",
     "status": "ok",
     "topics": [
      "finance",
      "demographics"
     ],
     "n_pages": 47,
     "has_tabular_data": true,
     "n_table_pages": 45,
     "tables": [
      {
       "page": 3,
       "header": [],
       "n_rows": 45
      },
      {
       "page": 4,
       "header": [
        "National Collegiate Preparatory PCHS",
        "181",
        "$ 391,832",
        "178",
        "$ 399,838"
       ],
       "n_rows": 22
      },
      {
       "page": 5,
       "header": [
        "AppleTree Early Learning"
       ],
       "n_rows": 7
      },
      {
       "page": 6,
       "header": [
        "BASIS DC"
       ],
       "n_rows": 8
      },
      {
       "page": 7,
       "header": [
        "Bridges PCS"
       ],
       "n_rows": 7
      },
      {
       "page": 8,
       "header": [
        "Cedar Tree Academy PCS"
       ],
       "n_rows": 7
      },
      {
       "page": 9,
       "header": [
        "Center City PCS"
       ],
       "n_rows": 7
      },
      {
       "page": 10,
       "header": [
        "Cesar Chavez Public Charter School"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "At-Risk Funding — DC PCSB At Risk Funding Report (revised 102716)",
     "url": "https://dcpcsb.org/sites/default/files/2016-DC-PCSB-At-Risk-Funding-Report-%28revised-102716%29.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "finance",
      "demographics"
     ],
     "n_pages": 16,
     "has_tabular_data": true,
     "n_table_pages": 12,
     "tables": [
      {
       "page": 3,
       "header": [
        "DC Public Charter Schools FY 2016 At Risk Funding Per School & FY 2017 Proposed Funding"
       ],
       "n_rows": 45
      },
      {
       "page": 4,
       "header": [
        "School Name",
        "FY16 At Risk FY16 At Risk Proposed Proposed Enrollment Funding",
        "FY2016 FY16 Audit ACTUAL Actual Count AT RISK",
        "FY17 At Risk FY17 At Risk Proposed Proposed Enrollment Funding"
       ],
       "n_rows": 20
      },
      {
       "page": 7,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-risk funds for SY15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support.",
        "Did your school use at-risk funding to offer summer school programming in 2016?",
        "If yes, what challenges did you face in the use of funds and what improvements would you like to see?",
        "If no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics)"
       ],
       "n_rows": 3
      },
      {
       "page": 8,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-risk funds for SY15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support.",
        "Did your school use at-risk funding to offer summer school programming in 2016?",
        "If yes, what challenges did you face in the use of funds and what improvements would you like to see?",
        "If no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics)"
       ],
       "n_rows": 2
      },
      {
       "page": 9,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-risk funds for SY15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support.",
        "Did your school use at-risk funding to offer summer school programming in 2016?",
        "If yes, what challenges did you face in the use of funds and what improvements would you like to see?",
        "If no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics)"
       ],
       "n_rows": 5
      },
      {
       "page": 10,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-risk funds for SY15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support.",
        "Did your school use at-risk funding to offer summer school programming in 2016?",
        "If yes, what challenges did you face in the use of funds and what improvements would you like to see?",
        "If no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics)"
       ],
       "n_rows": 6
      },
      {
       "page": 11,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-risk funds for SY15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support.",
        "Did your school use at-risk funding to offer summer school programming in 2016?",
        "If yes, what challenges did you face in the use of funds and what improvements would you like to see?",
        "If no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics)"
       ],
       "n_rows": 6
      },
      {
       "page": 12,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-risk funds for SY15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support.",
        "Did your school use at-risk funding to offer summer school programming in 2016?",
        "If yes, what challenges did you face in the use of funds and what improvements would you like to see?",
        "If no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics)"
       ],
       "n_rows": 8
      }
     ]
    },
    {
     "name": "At-Risk Funding — At Risk Report 2015 final 10 01 2015[1]",
     "url": "https://dcpcsb.org/sites/default/files/At-Risk%20Report_2015_final%2010%2001%202015%5b1%5d.pdf",
     "kind": "pdf",
     "year": "2010",
     "status": "ok",
     "topics": [
      "finance",
      "demographics"
     ],
     "n_pages": 15,
     "has_tabular_data": true,
     "n_table_pages": 12,
     "tables": [
      {
       "page": 3,
       "header": [
        "Category",
        "Number of Schools",
        "Percentage"
       ],
       "n_rows": 12
      },
      {
       "page": 5,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-­risk funds for SY15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support.",
        "Did your school offer summer school programming in 2015?",
        "If your school did offer summer school programming in 2015, was there a cost to families for the program?",
        "If your school did not offer free summer school programming in 2015, was this a change from previous years?"
       ],
       "n_rows": 5
      },
      {
       "page": 6,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-­risk funds for SY15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support.",
        "Did your school offer summer school programming in 2015?",
        "If your school did offer summer school programming in 2015, was there a cost to families for the program?",
        "If your school did not offer free summer school programming in 2015, was this a change from previous years?"
       ],
       "n_rows": 3
      },
      {
       "page": 7,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-­risk funds for SY15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support.",
        "Did your school offer summer school programming in 2015?",
        "If your school did offer summer school programming in 2015, was there a cost to families for the program?",
        "If your school did not offer free summer school programming in 2015, was this a change from previous years?"
       ],
       "n_rows": 4
      },
      {
       "page": 8,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-­risk funds for SY15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support.",
        "Did your school offer summer school programming in 2015?",
        "If your school did offer summer school programming in 2015, was there a cost to families for the program?",
        "If your school did not offer free summer school programming in 2015, was this a change from previous years?"
       ],
       "n_rows": 2
      },
      {
       "page": 9,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-­risk funds for SY15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support.",
        "Did your school offer summer school programming in 2015?",
        "If your school did offer summer school programming in 2015, was there a cost to families for the program?",
        "If your school did not offer free summer school programming in 2015, was this a change from previous years?"
       ],
       "n_rows": 3
      },
      {
       "page": 10,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-­risk funds for SY15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support.",
        "Did your school offer summer school programming in 2015?",
        "If your school did offer summer school programming in 2015, was there a cost to families for the program?",
        "If your school did not offer free summer school programming in 2015, was this a change from previous years?"
       ],
       "n_rows": 4
      },
      {
       "page": 11,
       "header": [
        "Name:",
        "Position:",
        "LEA Name:",
        "Please include a description of how your LEA has spent or plans to spend per pupil at-­risk funds for SY15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support.",
        "Did your school offer summer school programming in 2015?",
        "If your school did offer summer school programming in 2015, was there a cost to families for the program?",
        "If your school did not offer free summer school programming in 2015, was this a change from previous years?"
       ],
       "n_rows": 6
      }
     ]
    }
   ],
   "search": "charter school finances (spending, budgets, audits, 990s) dc pcsb per-school spending breakdowns. cluster of pages: /school-budgets, /school-fiscal-audits, /school-990s, /risk-funding-reports, /financial-analysis-report. charter actuals — distinct from osse ppe methodology. harvest gap: the 4 citywide at-risk funding reports are profiled; the bulk is per-school documents not catalogued individually — ~249 fiscal-audit pdfs on dcpcsb.org + ~464 audits, ~503 annual reports, and the financial-analysis files on egnyte (browser-only). open the page to browse a specific school. web page / pdf / excel (much via egnyte) finance spending money budget cost dollars per-pupil expenditure funding at-risk funding — at risk funding report 18 19 1 22 2019 nw at risk funding and enrollment for charter schools fy2018 through fy2019 at risk funding and enrollment for charter schools fy2018 through fy2019 achievement prep charter name charter name breakthrough montessori charter name capital city public charter school (ls, ms, hs) at-risk funding — sy 17 18 at risk funding report national collegiate preparatory pchs 181 $ 391,832 178 $ 399,838 appletree early learning basis dc bridges pcs cedar tree academy pcs center city pcs cesar chavez public charter school at-risk funding — dc pcsb at risk funding report (revised 102716) dc public charter schools fy 2016 at risk funding per school & fy 2017 proposed funding school name fy16 at risk fy16 at risk proposed proposed enrollment funding fy2016 fy16 audit actual actual count at risk fy17 at risk fy17 at risk proposed proposed enrollment funding name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-risk funds for sy15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support. did your school use at-risk funding to offer summer school programming in 2016? if yes, what challenges did you face in the use of funds and what improvements would you like to see? if no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics) name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-risk funds for sy15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support. did your school use at-risk funding to offer summer school programming in 2016? if yes, what challenges did you face in the use of funds and what improvements would you like to see? if no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics) name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-risk funds for sy15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support. did your school use at-risk funding to offer summer school programming in 2016? if yes, what challenges did you face in the use of funds and what improvements would you like to see? if no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics) name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-risk funds for sy15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support. did your school use at-risk funding to offer summer school programming in 2016? if yes, what challenges did you face in the use of funds and what improvements would you like to see? if no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics) name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-risk funds for sy15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support. did your school use at-risk funding to offer summer school programming in 2016? if yes, what challenges did you face in the use of funds and what improvements would you like to see? if no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics) name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-risk funds for sy15-16, particularly any programs, initiatives or enrichment activities the at-risk funds have supported or will support. did your school use at-risk funding to offer summer school programming in 2016? if yes, what challenges did you face in the use of funds and what improvements would you like to see? if no, did you use the at-risk funds for other purposes? (e.g. tutors, after school programs, athletics) at-risk funding — at risk report 2015 final 10 01 2015[1] category number of schools percentage name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-­risk funds for sy15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support. did your school offer summer school programming in 2015? if your school did offer summer school programming in 2015, was there a cost to families for the program? if your school did not offer free summer school programming in 2015, was this a change from previous years? name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-­risk funds for sy15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support. did your school offer summer school programming in 2015? if your school did offer summer school programming in 2015, was there a cost to families for the program? if your school did not offer free summer school programming in 2015, was this a change from previous years? name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-­risk funds for sy15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support. did your school offer summer school programming in 2015? if your school did offer summer school programming in 2015, was there a cost to families for the program? if your school did not offer free summer school programming in 2015, was this a change from previous years? name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-­risk funds for sy15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support. did your school offer summer school programming in 2015? if your school did offer summer school programming in 2015, was there a cost to families for the program? if your school did not offer free summer school programming in 2015, was this a change from previous years? name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-­risk funds for sy15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support. did your school offer summer school programming in 2015? if your school did offer summer school programming in 2015, was there a cost to families for the program? if your school did not offer free summer school programming in 2015, was this a change from previous years? name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-­risk funds for sy15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support. did your school offer summer school programming in 2015? if your school did offer summer school programming in 2015, was there a cost to families for the program? if your school did not offer free summer school programming in 2015, was this a change from previous years? name: position: lea name: please include a description of how your lea has spent or plans to spend per pupil at-­risk funds for sy15-­16, particularly any programs, initiatives or enrichment activities the at-­risk funds have supported or will support. did your school offer summer school programming in 2015? if your school did offer summer school programming in 2015, was there a cost to families for the program? if your school did not offer free summer school programming in 2015, was this a change from previous years?"
  },
  {
   "id": "pcsb-growth-closures",
   "name": "Charter School Growth and Closures",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/charter-school-growth-and-closures",
   "topics": [
    "profiles",
    "openings-closures"
   ],
   "status": "ok",
   "format": "Web page + Google Sheet",
   "cadence": "Updated as events occur",
   "years": "1996–present",
   "notes": "History of 80+ closed/consolidated campuses: year opened/closed, reason, closure type. Full list via linked Google Sheet.",
   "files": [],
   "search": "charter school growth and closures dc pcsb history of 80+ closed/consolidated campuses: year opened/closed, reason, closure type. full list via linked google sheet. web page + google sheet profiles openings-closures directory locations list find a school "
  },
  {
   "id": "pcsb-board-meetings",
   "name": "DC PCSB Board Meetings & Events",
   "owner": "DC PCSB",
   "url": "https://dcpcsb.org/events",
   "topics": [
    "governance",
    "openings-closures"
   ],
   "status": "ok",
   "format": "Event calendar (agendas/minutes as PDF)",
   "cadence": "Monthly board meetings",
   "years": "Current + archive",
   "notes": "Charter approvals/conditions/closures/replications are decided and recorded here.",
   "files": [],
   "search": "dc pcsb board meetings & events dc pcsb charter approvals/conditions/closures/replications are decided and recorded here. event calendar (agendas/minutes as pdf) governance openings-closures  "
  },
  {
   "id": "edscape",
   "name": "EdScape (education landscape tool)",
   "owner": "DME",
   "url": "https://edscape.dc.gov/",
   "topics": [
    "landing",
    "enrollment",
    "demographics",
    "facilities",
    "boundaries"
   ],
   "status": "ok",
   "format": "Interactive Tableau dashboards + Excel downloads + PDF summaries",
   "cadence": "Rolling, several releases/year",
   "years": "Through SY2025-26; some series back to SY2013-14",
   "notes": "DME's neighborhood education-data platform. 5 chapters: Population & Students, Public Schools, Facilities, Enrollment Patterns, Neighborhood Factors. Built on OSSE audited enrollment, geocoded to wards/clusters/boundaries. For planners, not parents choosing schools.",
   "files": [],
   "search": "edscape (education landscape tool) dme dme's neighborhood education-data platform. 5 chapters: population & students, public schools, facilities, enrollment patterns, neighborhood factors. built on osse audited enrollment, geocoded to wards/clusters/boundaries. for planners, not parents choosing schools. interactive tableau dashboards + excel downloads + pdf summaries landing enrollment demographics facilities boundaries  students headcount count population race ethnicity special education english learner at-risk poverty building capacity utilization modernization seats boundary zone feeder in-boundary attendance area redistricting"
  },
  {
   "id": "edscape-release-notes",
   "name": "EdScape — Release Notes (changelog)",
   "owner": "DME",
   "url": "https://edscape.dc.gov/page/edscape-release-notes",
   "topics": [
    "methodology"
   ],
   "status": "ok",
   "format": "Web page (changelog)",
   "cadence": "Updated with each release",
   "years": "2021–2026 release history",
   "notes": "Best single page for tracking what data was added and when (e.g. May 2026: new 5- & 10-yr enrollment projections dashboard).",
   "files": [],
   "search": "edscape — release notes (changelog) dme best single page for tracking what data was added and when (e.g. may 2026: new 5- & 10-yr enrollment projections dashboard). web page (changelog) methodology "
  },
  {
   "id": "edscape-enrollment-patterns",
   "name": "EdScape — Enrollment Patterns (cross-sector / where students attend)",
   "owner": "DME",
   "url": "https://edscape.dc.gov/page/enrollment-patterns-index",
   "topics": [
    "enrollment",
    "boundaries"
   ],
   "status": "ok",
   "format": "Interactive dashboards + Excel",
   "cadence": "Annual+",
   "years": "Through SY2025-26 (foundations SY2013-14 on)",
   "notes": "In-boundary / out-of-boundary / charter enrollment, cross-sector & cross-ward flows, student commute, feeder patterns, grade progression. The core 'where students actually attend' analysis.",
   "files": [
    {
     "name": "Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns Sector 2026",
     "url": "https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Sector_2026.xlsx",
     "kind": "xlsx",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Introduction",
       "n_rows": 19,
       "columns": [
        "EdScape"
       ]
      },
      {
       "name": "Citywide",
       "n_rows": 406,
       "columns": [
        "School Year",
        "School Choice Enrollment Category",
        "Grade Band of Students Enrolled",
        "Count of Students",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Ward 2022",
       "n_rows": 2623,
       "columns": [
        "School Year",
        "Student Ward",
        "School Choice Enrollment Category",
        "Grade Band of Students Enrolled",
        "Count of Students in Ward",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Neighborhood",
       "n_rows": 12884,
       "columns": [
        "School Year",
        "Neighborhood Cluster",
        "Neighborhood Cluster Names",
        "School Choice Enrollment Category",
        "Grade Band of Students Enrolled",
        "Count of Students in Cluster",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Planning Area",
       "n_rows": 3291,
       "columns": [
        "School Year",
        "Comprehensive Planning Area",
        "School Choice Enrollment Category",
        "Grade Band of Students Enrolled",
        "Count of Students in Planning Area",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Citywide_old",
       "n_rows": 162,
       "columns": [
        "School Choice Enrollment Category",
        "School Year",
        "Grade Band of Students Enrolled",
        "Count of Students",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Ward_old",
       "n_rows": 785,
       "columns": [
        "Student Ward",
        "School Choice Enrollment Category",
        "Grade Band of Students Enrolled",
        "School Year",
        "Count of Students in Ward",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Neighborhood_old",
       "n_rows": 3919,
       "columns": [
        "Neighborhood Cluster",
        "Neighborhood Cluster Names",
        "School Choice Enrollment Category",
        "Grade Band of Students Enrolled",
        "School Year",
        "Count of Students in Cluster",
        "Count of Students in Category"
       ]
      },
      {
       "name": "DCPS HS Boundary",
       "n_rows": 2834,
       "columns": [
        "School Year",
        "DCPS HS Zone Code",
        "DCPS HS Zone",
        "School Choice Enrollment Category",
        "Grade Band of Students Enrolled",
        "Count of Students in DCPS HS Boundary",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Variable Definitions",
       "n_rows": 11,
       "columns": [
        "Variable Name",
        "Variable Definition"
       ]
      },
      {
       "name": "Notes",
       "n_rows": 42,
       "columns": [
        "Notes"
       ]
      },
      {
       "name": "ESRI_MAPINFO_SHEET",
       "n_rows": 1,
       "columns": []
      }
     ]
    },
    {
     "name": "Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns Commute Paths 2024",
     "url": "https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Commute%20Paths_2024.xlsx",
     "kind": "xlsx",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Ch4 Stu Ward 2022-Sch Ward 2022",
       "n_rows": 52875,
       "columns": [
        "School Year",
        "School sector",
        "Grade band of students enrolled",
        "Student group",
        "Student ward",
        "School ward",
        "Count of students",
        "Median walk distance",
        "School commute path",
        "Share of students in student geography",
        "Share of students in school geography"
       ]
      },
      {
       "name": "Ch4 Stu Plng Area-Sch Plng Area",
       "n_rows": 71771,
       "columns": [
        "School Year",
        "School sector",
        "Grade band of students enrolled",
        "Student group",
        "Student planning area",
        "School planning area",
        "Count of students",
        "Median walk distance",
        "School commute path",
        "Share of students in student geography",
        "Share of students in school geography"
       ]
      },
      {
       "name": "Introduction",
       "n_rows": 15,
       "columns": [
        "EdScape"
       ]
      },
      {
       "name": "Variable Definitions",
       "n_rows": 29,
       "columns": [
        "Variable Name",
        "Variable Definition"
       ]
      },
      {
       "name": "Notes",
       "n_rows": 29,
       "columns": [
        "Notes"
       ]
      },
      {
       "name": "ESRI_MAPINFO_SHEET",
       "n_rows": 1,
       "columns": []
      }
     ]
    },
    {
     "name": "Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns Enrollments per DCPS Boundary 2025",
     "url": "https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Enrollments%20per%20DCPS%20Boundary_2025.xlsx",
     "kind": "xlsx",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "boundaries",
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Introduction",
       "n_rows": 34,
       "columns": [
        "EdScape"
       ]
      },
      {
       "name": "EdScape_Chapter4_Public Sch sup",
       "n_rows": 19472,
       "columns": [
        "School Year",
        "DCPS Boundary School Code",
        "DCPS Boundary",
        "DCPS Boundary Grade Band",
        "DCPS Boundary School Enrollment",
        "Number of Grade-Specific Students Living In-boundary and Attending Boundary School",
        "Number of Grade-Specific Students Living In-boundary",
        "Percent In-boundary (%) [school]",
        "Boundary Participation Rate (%) [boundary]",
        "Number of DCPS Schools Attended by Grade-Specific Students Living in the Boundary",
        "Number of PCS Schools Attended by Grade-Specific Students Living in the Boundary",
        "Total Number of Public Schools Attended by Students Living in the Boundary",
        "Schools Attended by Grade-Specific Students Living in the Boundary",
        "FLAG: Attending School is DCPS Boundary School",
        "Count of Grade-Specific Students Living in the DCPS Boundary that Attend the School",
        "Rank within Boundary",
        "School Code of School Attended by Students Living in the DCPS Boundary",
        "Total Enrollment of School",
        "Percent Enrolled at School from DCPS boundary",
        "Percent of Grade-Specific Students Living in the DCPS Boundary that Attend the School",
        "Number of Grade-Specific Students Living in the Boundary with School Attended Reported (n>10)",
        "Percent of Grade-Specific Students Living in the Boundary with School Attended Reported (n>10)",
        "OSSE Schoolwide Accountability Score of School Attended",
        "OSSE Schoolwide Accountability Score of DCPS Boundary School",
        "Percentage Point Difference of OSSE Schoolwide Accountability score",
        "LEA Code of School Attended by Students Living in the DCPS Boundary",
        "LEA Name of School Attended by Students Living in the DCPS Boundary",
        "Address of School Attended (main facility)",
        "Census Tract of School Attended (main facility)",
        "Ward of School Attended (main facility)",
        "Top 10 Concentration"
       ]
      },
      {
       "name": "Variable Definitions",
       "n_rows": 32,
       "columns": [
        "Category",
        "Variable Name",
        "Variable Definition",
        "JC notes"
       ]
      },
      {
       "name": "Notes",
       "n_rows": 35,
       "columns": [
        "Notes"
       ]
      },
      {
       "name": "ESRI_MAPINFO_SHEET",
       "n_rows": 1,
       "columns": []
      }
     ]
    },
    {
     "name": "Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns Distance 2026",
     "url": "https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Distance_2026.xlsx",
     "kind": "xlsx",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Introduction",
       "n_rows": 20,
       "columns": [
        "EdScape"
       ]
      },
      {
       "name": "C4. Dist x Grade Band",
       "n_rows": 2384,
       "columns": [
        "School Year",
        "Grade Band of Students",
        "School Choice Enrollment Category",
        "Student Group",
        "Average Walk Distance in Miles",
        "Median Walk Distance in Miles",
        "Count of Students in Category range"
       ]
      },
      {
       "name": "C4. Dist x GB x Ward",
       "n_rows": 18186,
       "columns": [
        "School Year",
        "Student Ward",
        "Grade Band of Students",
        "School Choice Enrollment Category",
        "Student Group",
        "Average Walk Distance in Miles",
        "Median Walk Distance in Miles",
        "Count of Students in Category range"
       ]
      },
      {
       "name": "C4. Dist x GB x NC",
       "n_rows": 82264,
       "columns": [
        "School Year",
        "Student Neighborhood Cluster",
        "Neighborhood Cluster Names",
        "Grade Band of Students",
        "School Choice Enrollment Category",
        "Student Group",
        "Average Walk Distance in Miles",
        "Median Walk Distance in Miles",
        "Count of Students in Category range"
       ]
      },
      {
       "name": "C4. Dist x GB x OP",
       "n_rows": 22511,
       "columns": [
        "School Year",
        "Student Comprehensive Plan Planning Area",
        "Grade Band of Students",
        "School Choice Enrollment Category",
        "Student Group",
        "Average Walk Distance in Miles",
        "Median Walk Distance in Miles",
        "Count of Students in Category range"
       ]
      },
      {
       "name": "C4. Dist x GB x DCPS HS",
       "n_rows": 19494,
       "columns": [
        "School Year",
        "Student DCPS HS boundary",
        "Grade Band of Students",
        "School Choice Enrollment Category",
        "Student Group",
        "Average Walk Distance in Miles",
        "Median Walk Distance in Miles",
        "Count of Students in Category range"
       ]
      },
      {
       "name": "Variable Definitions",
       "n_rows": 13,
       "columns": [
        "Variable Name",
        "Variable Definition"
       ]
      },
      {
       "name": "Notes",
       "n_rows": 42,
       "columns": [
        "Notes"
       ]
      },
      {
       "name": "ESRI_MAPINFO_SHEET",
       "n_rows": 1,
       "columns": []
      }
     ]
    },
    {
     "name": "Enrollment Patterns — EdScape Chapter 1 Population and Students Where Students Miss School 2026",
     "url": "https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%201%20Population%20and%20Students_Where%20Students%20Miss%20School_2026.xlsx",
     "kind": "xlsx",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "attendance",
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Introduction",
       "n_rows": 15,
       "columns": [
        "EdScape"
       ]
      },
      {
       "name": "Ch.1 Where Students Miss School",
       "n_rows": 309,
       "columns": [
        "School Year",
        "Geography Type",
        "Geography",
        "Grade Band",
        "Chronic Absenteeism Rate",
        "Count of Students"
       ]
      },
      {
       "name": "Variable Definitions",
       "n_rows": 7,
       "columns": [
        "Variable Name",
        "Variable Definition"
       ]
      },
      {
       "name": "Notes",
       "n_rows": 20,
       "columns": [
        "Notes"
       ]
      }
     ]
    },
    {
     "name": "Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns Feeders 2026",
     "url": "https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Feeders_2026.xlsx",
     "kind": "xlsx",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "boundaries",
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Introduction",
       "n_rows": 19,
       "columns": [
        "EdScape"
       ]
      },
      {
       "name": "Enrollment Paths",
       "n_rows": 76258,
       "columns": [
        "From School Year",
        "From LEA Name",
        "From School code",
        "From School Name",
        "From Grade",
        "From Feeder Pattern",
        "To School Year",
        "To LEA Name",
        "To School code",
        "To School Name",
        "To Grade",
        "To Feeder Pattern",
        "Year 1 to Year 2 Path Summary",
        "Count of students"
       ]
      },
      {
       "name": "Citywide_old",
       "n_rows": 162,
       "columns": [
        "School Choice Enrollment Category",
        "School Year",
        "Grade Band of Students Enrolled",
        "Count of Students",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Ward_old",
       "n_rows": 785,
       "columns": [
        "Student Ward",
        "School Choice Enrollment Category",
        "Grade Band of Students Enrolled",
        "School Year",
        "Count of Students in Ward",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Neighborhood_old",
       "n_rows": 3919,
       "columns": [
        "Neighborhood Cluster",
        "Neighborhood Cluster Names",
        "School Choice Enrollment Category",
        "Grade Band of Students Enrolled",
        "School Year",
        "Count of Students in Cluster",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Variable Definitions",
       "n_rows": 26,
       "columns": [
        "Variable Name",
        "Variable Definition"
       ]
      },
      {
       "name": "Notes",
       "n_rows": 27,
       "columns": [
        "Notes"
       ]
      },
      {
       "name": "ESRI_MAPINFO_SHEET",
       "n_rows": 1,
       "columns": []
      }
     ]
    },
    {
     "name": "Enrollment Patterns — EdScape Chapter 4 Enrollment Patterns GPR 2026",
     "url": "https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_GPR_2026.xlsx",
     "kind": "xlsx",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Introduction",
       "n_rows": 18,
       "columns": [
        "EdScape"
       ]
      },
      {
       "name": "Citywide",
       "n_rows": 337,
       "columns": [
        "Student Population",
        "From School Year",
        "To School Year",
        "From Grade",
        "To Grade",
        "Count of Students in From Grade",
        "Count of Students in To Grade",
        "Grade Progression Ratio (GPR)",
        "Kindergarten Cohort Year"
       ]
      },
      {
       "name": "Sector",
       "n_rows": 673,
       "columns": [
        "Student Population",
        "From School Year",
        "To School Year",
        "From Grade",
        "To Grade",
        "Count of Students in From Grade",
        "Count of Students in To Grade",
        "Grade Progression Ratio (GPR)",
        "Kindergarten Cohort Year"
       ]
      },
      {
       "name": "LEA",
       "n_rows": 3986,
       "columns": [
        "Student Population (Local Education Agency (LEA) : LEA Code)",
        "From School Year",
        "To School Year",
        "From Grade",
        "To Grade",
        "Count of Students in From Grade",
        "Count of Students in To Grade",
        "Grade Progression Ratio (GPR)",
        "Kindergarten Cohort Year"
       ]
      },
      {
       "name": "School",
       "n_rows": 13495,
       "columns": [
        "Student Population (LEA : School: School Code)",
        "From School Year",
        "To School Year",
        "From Grade",
        "To Grade",
        "Count of Students in From Grade",
        "Count of Students in To Grade",
        "Grade Progression Ratio (GPR)",
        "Kindergarten Cohort Year"
       ]
      },
      {
       "name": "DCPS Feeder Pattern",
       "n_rows": 910,
       "columns": [
        "Student Population: Schools in the DCPS Geographic Feeder Pattern",
        "From School Year",
        "To School Year",
        "From Grade",
        "To Grade",
        "Count of Students in From Grade",
        "Count of Students in To Grade",
        "Grade Progression Ratio (GPR)",
        "Kindergarten Cohort Year"
       ]
      },
      {
       "name": "Citywide_old",
       "n_rows": 162,
       "columns": [
        "School Choice Enrollment Category",
        "School Year",
        "Grade Band of Students Enrolled",
        "Count of Students",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Ward_old",
       "n_rows": 785,
       "columns": [
        "Student Ward",
        "School Choice Enrollment Category",
        "Grade Band of Students Enrolled",
        "School Year",
        "Count of Students in Ward",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Neighborhood_old",
       "n_rows": 3919,
       "columns": [
        "Neighborhood Cluster",
        "Neighborhood Cluster Names",
        "School Choice Enrollment Category",
        "Grade Band of Students Enrolled",
        "School Year",
        "Count of Students in Cluster",
        "Count of Students in Category"
       ]
      },
      {
       "name": "Variable Definitions",
       "n_rows": 10,
       "columns": [
        "Variable Name",
        "Variable Definition"
       ]
      },
      {
       "name": "Notes",
       "n_rows": 19,
       "columns": [
        "Notes"
       ]
      },
      {
       "name": "ESRI_MAPINFO_SHEET",
       "n_rows": 1,
       "columns": []
      }
     ]
    },
    {
     "name": "Population and Students — EdScape Chapter 4 Enrollment Patterns Total Public School Enrollment 2026",
     "url": "https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Total%20Public%20School%20Enrollment_2026.xlsx",
     "kind": "xlsx",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Introduction",
       "n_rows": 13,
       "columns": [
        "EdScape, or \"education landscape,\" is a set of interactive visualizations and downloadable datasets to inform and support program and school planning in Washington, DC. EdScape is organized into five chapters."
       ]
      },
      {
       "name": "Ch.4 Total Public School Enroll",
       "n_rows": 70,
       "columns": [
        "School Year",
        "Public School Enrollment",
        "Sector"
       ]
      },
      {
       "name": "Variable Definitions",
       "n_rows": 4,
       "columns": [
        "Variable Name",
        "Variable Definition"
       ]
      },
      {
       "name": "Notes",
       "n_rows": 29,
       "columns": [
        "Notes"
       ]
      }
     ]
    },
    {
     "name": "Population and Students — EdScape Chapter 4 Enrollment Patterns Public School Enrollment by Grade 2026",
     "url": "https://edscape.dc.gov/sites/default/files/dc/sites/edscape/page_content/attachments/EdScape_Chapter%204%20Enrollment%20Patterns_Public%20School%20Enrollment%20by%20Grade_2026.xlsx",
     "kind": "xlsx",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "enrollment"
     ],
     "tabs": [
      {
       "name": "Introduction",
       "n_rows": 18,
       "columns": [
        "EdScape"
       ]
      },
      {
       "name": "Ch.4 Public School x Grade Band",
       "n_rows": 211,
       "columns": [
        "Grade Band",
        "School Year",
        "Public School Enrollment",
        "Sector"
       ]
      },
      {
       "name": "Ch.4 Public School x Grade",
       "n_rows": 629,
       "columns": [
        "Grade",
        "School Year",
        "Public School Enrollment",
        "Sector"
       ]
      },
      {
       "name": "Variable Definitions",
       "n_rows": 15,
       "columns": [
        "Variable Name",
        "Variable Definition"
       ]
      },
      {
       "name": "Notes ",
       "n_rows": 30,
       "columns": [
        "Notes"
       ]
      },
      {
       "name": "ESRI_MAPINFO_SHEET",
       "n_rows": 1,
       "columns": []
      }
     ]
    }
   ],
   "search": "edscape — enrollment patterns (cross-sector / where students attend) dme in-boundary / out-of-boundary / charter enrollment, cross-sector & cross-ward flows, student commute, feeder patterns, grade progression. the core 'where students actually attend' analysis. interactive dashboards + excel enrollment boundaries students headcount count population boundary zone feeder in-boundary attendance area redistricting enrollment patterns — edscape chapter 4 enrollment patterns sector 2026 introduction edscape citywide school year school choice enrollment category grade band of students enrolled count of students count of students in category ward 2022 school year student ward school choice enrollment category grade band of students enrolled count of students in ward count of students in category neighborhood school year neighborhood cluster neighborhood cluster names school choice enrollment category grade band of students enrolled count of students in cluster count of students in category planning area school year comprehensive planning area school choice enrollment category grade band of students enrolled count of students in planning area count of students in category citywide_old school choice enrollment category school year grade band of students enrolled count of students count of students in category ward_old student ward school choice enrollment category grade band of students enrolled school year count of students in ward count of students in category neighborhood_old neighborhood cluster neighborhood cluster names school choice enrollment category grade band of students enrolled school year count of students in cluster count of students in category dcps hs boundary school year dcps hs zone code dcps hs zone school choice enrollment category grade band of students enrolled count of students in dcps hs boundary count of students in category variable definitions variable name variable definition notes notes esri_mapinfo_sheet enrollment patterns — edscape chapter 4 enrollment patterns commute paths 2024 ch4 stu ward 2022-sch ward 2022 school year school sector grade band of students enrolled student group student ward school ward count of students median walk distance school commute path share of students in student geography share of students in school geography ch4 stu plng area-sch plng area school year school sector grade band of students enrolled student group student planning area school planning area count of students median walk distance school commute path share of students in student geography share of students in school geography introduction edscape variable definitions variable name variable definition notes notes esri_mapinfo_sheet enrollment patterns — edscape chapter 4 enrollment patterns enrollments per dcps boundary 2025 introduction edscape edscape_chapter4_public sch sup school year dcps boundary school code dcps boundary dcps boundary grade band dcps boundary school enrollment number of grade-specific students living in-boundary and attending boundary school number of grade-specific students living in-boundary percent in-boundary (%) [school] boundary participation rate (%) [boundary] number of dcps schools attended by grade-specific students living in the boundary number of pcs schools attended by grade-specific students living in the boundary total number of public schools attended by students living in the boundary schools attended by grade-specific students living in the boundary flag: attending school is dcps boundary school count of grade-specific students living in the dcps boundary that attend the school rank within boundary school code of school attended by students living in the dcps boundary total enrollment of school percent enrolled at school from dcps boundary percent of grade-specific students living in the dcps boundary that attend the school number of grade-specific students living in the boundary with school attended reported (n>10) percent of grade-specific students living in the boundary with school attended reported (n>10) osse schoolwide accountability score of school attended osse schoolwide accountability score of dcps boundary school percentage point difference of osse schoolwide accountability score lea code of school attended by students living in the dcps boundary lea name of school attended by students living in the dcps boundary address of school attended (main facility) census tract of school attended (main facility) ward of school attended (main facility) top 10 concentration variable definitions category variable name variable definition jc notes notes notes esri_mapinfo_sheet enrollment patterns — edscape chapter 4 enrollment patterns distance 2026 introduction edscape c4. dist x grade band school year grade band of students school choice enrollment category student group average walk distance in miles median walk distance in miles count of students in category range c4. dist x gb x ward school year student ward grade band of students school choice enrollment category student group average walk distance in miles median walk distance in miles count of students in category range c4. dist x gb x nc school year student neighborhood cluster neighborhood cluster names grade band of students school choice enrollment category student group average walk distance in miles median walk distance in miles count of students in category range c4. dist x gb x op school year student comprehensive plan planning area grade band of students school choice enrollment category student group average walk distance in miles median walk distance in miles count of students in category range c4. dist x gb x dcps hs school year student dcps hs boundary grade band of students school choice enrollment category student group average walk distance in miles median walk distance in miles count of students in category range variable definitions variable name variable definition notes notes esri_mapinfo_sheet enrollment patterns — edscape chapter 1 population and students where students miss school 2026 introduction edscape ch.1 where students miss school school year geography type geography grade band chronic absenteeism rate count of students variable definitions variable name variable definition notes notes enrollment patterns — edscape chapter 4 enrollment patterns feeders 2026 introduction edscape enrollment paths from school year from lea name from school code from school name from grade from feeder pattern to school year to lea name to school code to school name to grade to feeder pattern year 1 to year 2 path summary count of students citywide_old school choice enrollment category school year grade band of students enrolled count of students count of students in category ward_old student ward school choice enrollment category grade band of students enrolled school year count of students in ward count of students in category neighborhood_old neighborhood cluster neighborhood cluster names school choice enrollment category grade band of students enrolled school year count of students in cluster count of students in category variable definitions variable name variable definition notes notes esri_mapinfo_sheet enrollment patterns — edscape chapter 4 enrollment patterns gpr 2026 introduction edscape citywide student population from school year to school year from grade to grade count of students in from grade count of students in to grade grade progression ratio (gpr) kindergarten cohort year sector student population from school year to school year from grade to grade count of students in from grade count of students in to grade grade progression ratio (gpr) kindergarten cohort year lea student population (local education agency (lea) : lea code) from school year to school year from grade to grade count of students in from grade count of students in to grade grade progression ratio (gpr) kindergarten cohort year school student population (lea : school: school code) from school year to school year from grade to grade count of students in from grade count of students in to grade grade progression ratio (gpr) kindergarten cohort year dcps feeder pattern student population: schools in the dcps geographic feeder pattern from school year to school year from grade to grade count of students in from grade count of students in to grade grade progression ratio (gpr) kindergarten cohort year citywide_old school choice enrollment category school year grade band of students enrolled count of students count of students in category ward_old student ward school choice enrollment category grade band of students enrolled school year count of students in ward count of students in category neighborhood_old neighborhood cluster neighborhood cluster names school choice enrollment category grade band of students enrolled school year count of students in cluster count of students in category variable definitions variable name variable definition notes notes esri_mapinfo_sheet population and students — edscape chapter 4 enrollment patterns total public school enrollment 2026 introduction edscape, or \"education landscape,\" is a set of interactive visualizations and downloadable datasets to inform and support program and school planning in washington, dc. edscape is organized into five chapters. ch.4 total public school enroll school year public school enrollment sector variable definitions variable name variable definition notes notes population and students — edscape chapter 4 enrollment patterns public school enrollment by grade 2026 introduction edscape ch.4 public school x grade band grade band school year public school enrollment sector ch.4 public school x grade grade school year public school enrollment sector variable definitions variable name variable definition notes  notes esri_mapinfo_sheet"
  },
  {
   "id": "edscape-facilities",
   "name": "EdScape — Public School Facilities (capacity/utilization/locations)",
   "owner": "DME",
   "url": "https://edscape.dc.gov/page/facilities-index",
   "topics": [
    "facilities"
   ],
   "status": "ok",
   "format": "Interactive dashboards + maps + Excel",
   "cadence": "Annual+",
   "years": "SY2013-14 through SY2025-26",
   "notes": "Building counts/locations, programmatic capacity, utilization (how full), unfilled seats, DCPS modernizations. Produced with DC PCSB, DCPS, OSSE, DGS — the cross-sector facilities view.",
   "files": [],
   "search": "edscape — public school facilities (capacity/utilization/locations) dme building counts/locations, programmatic capacity, utilization (how full), unfilled seats, dcps modernizations. produced with dc pcsb, dcps, osse, dgs — the cross-sector facilities view. interactive dashboards + maps + excel facilities building capacity utilization modernization seats"
  },
  {
   "id": "dme-facility-planning",
   "name": "DME — Public Education Facility Planning",
   "owner": "DME",
   "url": "https://dme.dc.gov/service/public-education-facility-planning",
   "topics": [
    "facilities",
    "landing"
   ],
   "status": "ok",
   "format": "Web page (service hub)",
   "cadence": "As-needed",
   "years": "2018–present",
   "notes": "Hub for the Master Facilities Plan, all supplements, classification/utilization maps, vacant-facility info, and LEA-level enrollment (~115 DCPS + ~112 charter buildings).",
   "files": [],
   "search": "dme — public education facility planning dme hub for the master facilities plan, all supplements, classification/utilization maps, vacant-facility info, and lea-level enrollment (~115 dcps + ~112 charter buildings). web page (service hub) facilities landing building capacity utilization modernization seats "
  },
  {
   "id": "mfp-2023",
   "name": "DC Public Education Master Facilities Plan 2023",
   "owner": "DME",
   "url": "https://dme.dc.gov/mfp2023",
   "topics": [
    "facilities",
    "enrollment",
    "projections"
   ],
   "status": "ok",
   "format": "Report PDF + Excel appendices (via Box)",
   "cadence": "~Every 5 years (full plan)",
   "years": "2023 edition; projections ~decade forward",
   "notes": "Comprehensive facilities plan: conditions, utilization, enrollment trends/projections, capital investment, housing-pipeline impacts. Priors: MFP 2018 (dme.dc.gov/MFP2018).",
   "files": [],
   "search": "dc public education master facilities plan 2023 dme comprehensive facilities plan: conditions, utilization, enrollment trends/projections, capital investment, housing-pipeline impacts. priors: mfp 2018 (dme.dc.gov/mfp2018). report pdf + excel appendices (via box) facilities enrollment projections building capacity utilization modernization seats students headcount count population "
  },
  {
   "id": "mfp-2024-supplement",
   "name": "2024 Master Facilities Plan Annual Supplement",
   "owner": "DME",
   "url": "https://dme.dc.gov/publication/2024-master-facilities-plan-supplement",
   "topics": [
    "facilities",
    "projections",
    "enrollment"
   ],
   "status": "ok",
   "format": "Report PDF + Excel appendices",
   "cadence": "Annual supplement",
   "years": "SY2024-25 data + 5/10-yr forward projections",
   "notes": "Released Sept 2025 (latest as of June 2026). Updated capacity/utilization and enrollment projections. Note: the freshest projections now live in EdScape rather than the MFP supplements.",
   "files": [],
   "search": "2024 master facilities plan annual supplement dme released sept 2025 (latest as of june 2026). updated capacity/utilization and enrollment projections. note: the freshest projections now live in edscape rather than the mfp supplements. report pdf + excel appendices facilities projections enrollment building capacity utilization modernization seats  students headcount count population"
  },
  {
   "id": "dme-boundary-study",
   "name": "DME — Boundary and Student Assignment Study 2023 (data supplement)",
   "owner": "DME",
   "url": "https://dme.dc.gov/page/boundary-and-student-assignment-study-2023-data-supplement",
   "topics": [
    "boundaries",
    "enrollment",
    "demographics"
   ],
   "status": "ok",
   "format": "Excel datasheets + PDFs + interactive maps",
   "cadence": "One-time study (2023)",
   "years": "SY2022-23 / SY2023-24 + historical trends",
   "notes": "School-level enrollment/demographics/capacity/distance, boundary map series, feeder patterns, population forecasts, PreK waitlists, utilization, segregation analysis.",
   "files": [],
   "search": "dme — boundary and student assignment study 2023 (data supplement) dme school-level enrollment/demographics/capacity/distance, boundary map series, feeder patterns, population forecasts, prek waitlists, utilization, segregation analysis. excel datasheets + pdfs + interactive maps boundaries enrollment demographics boundary zone feeder in-boundary attendance area redistricting students headcount count population race ethnicity special education english learner at-risk poverty"
  },
  {
   "id": "dme-download-data",
   "name": "DME — Download Data (legacy datasets)",
   "owner": "DME",
   "url": "https://dme.dc.gov/page/download-data",
   "topics": [
    "enrollment",
    "facilities",
    "boundaries"
   ],
   "status": "ok",
   "format": "Downloadable Excel/CSV/PDF",
   "cadence": "Legacy/archival",
   "years": "SY2014-15 through SY2023-24",
   "notes": "DEAD END as of June 2026 — this page no longer hosts files; it now just links out to EdScape and OpenData DC. The actual downloadable datasets (e.g. 'Enrollments per DCPS Boundary') moved to EdScape's chapter pages and are harvested under EdScape. Kept here because it's still the URL people get sent to.",
   "files": [],
   "search": "dme — download data (legacy datasets) dme dead end as of june 2026 — this page no longer hosts files; it now just links out to edscape and opendata dc. the actual downloadable datasets (e.g. 'enrollments per dcps boundary') moved to edscape's chapter pages and are harvested under edscape. kept here because it's still the url people get sent to. downloadable excel/csv/pdf enrollment facilities boundaries students headcount count population building capacity utilization modernization seats boundary zone feeder in-boundary attendance area redistricting"
  },
  {
   "id": "dme-facility-maps",
   "name": "DME — Interactive School Facility Maps",
   "owner": "DME",
   "url": "https://dme.dc.gov/page/interactive-school-facility-maps",
   "topics": [
    "facilities"
   ],
   "status": "ok",
   "format": "Interactive Tableau maps + data downloads (recent years)",
   "cadence": "Annual (one map per school year)",
   "years": "SY2015-16 through SY2025-26",
   "notes": "Standalone facility-location maps; content now also inside EdScape Ch.3. Early years lack downloadable data.",
   "files": [],
   "search": "dme — interactive school facility maps dme standalone facility-location maps; content now also inside edscape ch.3. early years lack downloadable data. interactive tableau maps + data downloads (recent years) facilities building capacity utilization modernization seats"
  },
  {
   "id": "myschooldc-lottery",
   "name": "My School DC — Lottery Data ('By the Numbers')",
   "owner": "My School DC",
   "url": "https://www.myschooldc.org/resources/data",
   "topics": [
    "lottery",
    "enrollment"
   ],
   "status": "ok",
   "format": "Report PDFs + Excel/CSV + interactive Tableau (waitlist movement)",
   "cadence": "Annual; results each spring (Mar/Apr)",
   "years": "2014 (first lottery) through 2026",
   "notes": "The common lottery (one application for DCPS + charters): applications by grade, seats offered, waitlists, match rates by ward/grade. Administered jointly by OSSE/DME. The authoritative demand/choice dataset.",
   "files": [
    {
     "name": "Year over Year Comparisons — 20260602 MySchoolDC Tableau Data",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/20260602_MySchoolDC_Tableau_Data.xlsx",
     "kind": "xlsx",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Tableau underlying data",
     "label": "unknown",
     "tabs": [
      {
       "name": "Notes",
       "n_rows": 26,
       "columns": [
        "My School DC Public Tableau Data",
        "Release: 06/02/2026"
       ]
      },
      {
       "name": "Historic Lottery Results",
       "n_rows": 20029,
       "columns": [
        "MSDC School Code",
        "OSSE School Code",
        "MSDC School Code and Grade",
        "MSDC School Name",
        "Grade Offered in Lottery",
        "Lottery Year",
        "Applications on Results Day",
        "Lottery Seats Offered",
        "Matches on Results Day",
        "Waitlist Length on Results Day",
        "Total Waitlist Offers made by June",
        "Total Waitlist Offers made by August",
        "Total Waitlist Offers made by October"
       ]
      },
      {
       "name": "Matches by Preference",
       "n_rows": 60189,
       "columns": [
        "Lottery Year",
        "MSDC School Code",
        "MSDC School Name",
        "Grade Offered in Lottery",
        "Preference Order",
        "Preference Name",
        "Preference Order and Name",
        "Matches on Results Day by Preference"
       ]
      }
     ]
    },
    {
     "name": "Total applications and results from 2018 to 2026 lotteries",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Total_Applications.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Total Applications & Results",
     "label": "2018",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "20,987 5,366 15,621"
       ],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [
        "8,905"
       ],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [
        "8,907"
       ],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [
        "8,289"
       ],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [
        "6,496"
       ],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [
        "6,067"
       ],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [
        "5,953"
       ],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [
        "5,615"
       ],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants by Grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Applicants_by_Grade.pdf",
     "kind": "pdf",
     "year": "2026",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2026",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — Applications by Grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Applications_by_Grade.pdf",
     "kind": "pdf",
     "year": "2025",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2025",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — Applications by Grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Applications_by_Grade.pdf",
     "kind": "pdf",
     "year": "2024",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2024",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — Applicants by Grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Applicants_by_Grade.pdf",
     "kind": "pdf",
     "year": "2023",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2023",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — applicants grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_grade.pdf",
     "kind": "pdf",
     "year": "2022",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2022",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — applications bygrade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_applications_bygrade.pdf",
     "kind": "pdf",
     "year": "2021",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2021",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — applications bygrade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_applications_bygrade.pdf",
     "kind": "pdf",
     "year": "2020",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2020",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — applications bygrade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_applications_bygrade.pdf",
     "kind": "pdf",
     "year": "2019",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2019",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — applications bygrade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applications_bygrade.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2018",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — applications bygrade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applications_bygrade.pdf",
     "kind": "pdf",
     "year": "2017",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2017",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — lottery number of applications by grade",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-number-of-applications-by-grade.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2016",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — r1 applications bygrade",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_applications_bygrade.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2015",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — r1 applications bygrade",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_applications_bygrade.pdf",
     "kind": "pdf",
     "year": "2014",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2014",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — Applications Seats Available",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Applications_Seats_Available.pdf",
     "kind": "pdf",
     "year": "2026",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2026",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "Lottery Data — Applications and Seats by Grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Applications_and_Seats_by_Grade.pdf",
     "kind": "pdf",
     "year": "2025",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2025",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 10
      }
     ]
    },
    {
     "name": "Lottery Data — Applications and Seats by Grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Applications_and_Seats_by_Grade.pdf",
     "kind": "pdf",
     "year": "2024",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2024",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants and Seats Offered by Grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Applicants_and_Seats_Offered_by_Grade.pdf",
     "kind": "pdf",
     "year": "2023",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2023",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 9
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — applications seats offered",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY22_23_L_applications_seats_offered.pdf",
     "kind": "pdf",
     "year": "2022",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2022",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — applications seats offered",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_applications_seats_offered.pdf",
     "kind": "pdf",
     "year": "2021",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2021",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — applications seats offered",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_applications_seats_offered.pdf",
     "kind": "pdf",
     "year": "2020",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2020",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — applications seats offered",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_applications_seats_offered.pdf",
     "kind": "pdf",
     "year": "2019",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2019",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 3
      }
     ]
    },
    {
     "name": "Lottery Data — applications seats offered",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applications_seats_offered.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2018",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Submitted Applications",
        "Seats Offered in the Lottery"
       ],
       "n_rows": 16
      }
     ]
    },
    {
     "name": "Lottery Data — applications seats offered",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applications_seats_offered.pdf",
     "kind": "pdf",
     "year": "2017",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2017",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Submitted Applications",
        "Seats Offered in the Lottery"
       ],
       "n_rows": 16
      }
     ]
    },
    {
     "name": "Lottery Data — lottery applications and seats offered",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-applications-and-seats-offered.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2016",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Submitted Applications",
        "Seats Offered in the Lottery"
       ],
       "n_rows": 16
      }
     ]
    },
    {
     "name": "Lottery Data — r1 applications seats offered",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_applications_seats_offered.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2015",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Submitted Applications",
        "Seats Offered in the Lottery"
       ],
       "n_rows": 16
      }
     ]
    },
    {
     "name": "Lottery Data — r1 applications seats offered",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_applications_seats_offered.pdf",
     "kind": "pdf",
     "year": "2014",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applications & Seats Offered by Grade",
     "label": "2014",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Submitted Applications",
        "Seats Offered in the Lottery"
       ],
       "n_rows": 16
      }
     ]
    },
    {
     "name": "Lottery Data — Unique Applicants Waitlists",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Unique_Applicants_Waitlists.pdf",
     "kind": "pdf",
     "year": "2026",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2026",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — Unique Applicants Waitlisted",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Unique_Applicants_Waitlisted.pdf",
     "kind": "pdf",
     "year": "2025",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2025",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — Unique Applicants Waitlisted",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Unique_Applicants_Waitlisted.pdf",
     "kind": "pdf",
     "year": "2024",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2024",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — Unique Applicants Waitlisted",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Unique_Applicants_Waitlisted.pdf",
     "kind": "pdf",
     "year": "2023",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2023",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — applicants waitlisted",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_waitlisted.pdf",
     "kind": "pdf",
     "year": "2022",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2022",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — unique applicants waitlist",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_unique_applicants_waitlist.pdf",
     "kind": "pdf",
     "year": "2021",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2021",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — unique applicants waitlist",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_unique_applicants_waitlist.pdf",
     "kind": "pdf",
     "year": "2020",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2020",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — unique applicants waitlist",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_unique_applicants_waitlist.pdf",
     "kind": "pdf",
     "year": "2019",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2019",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      },
      {
       "page": 1,
       "header": [],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Lottery Data — applicants waitlist",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applicants_waitlist.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2018",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Unique Applicants on Waitlists"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — applicants waitlist",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applicants_waitlist.pdf",
     "kind": "pdf",
     "year": "2017",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2017",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Unique Applicants on Waitlists"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — lottery unique applicants on wls by grade",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-unique-applicants-on-wls-by-grade.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade",
     "label": "2016",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Unique Applicants on Waitlists"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — r1 applicants waitlist",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_applicants_waitlist.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2015",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Unique Applicants on Waitlists"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — r1 applicants waitlist",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_applicants_waitlist.pdf",
     "kind": "pdf",
     "year": "2014",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Unique Applicants Waitlisted",
     "label": "2014",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Unique Applicants on Waitlists"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — Applications Preferred Language",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Applications_Preferred_Language.pdf",
     "kind": "pdf",
     "year": "2026",
     "status": "ok",
     "topics": [
      "lottery",
      "demographics"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2026",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants Language Percent",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Applicants_Language_Percent.pdf",
     "kind": "pdf",
     "year": "2025",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2025",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants Language",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Applicants_Language.pdf",
     "kind": "pdf",
     "year": "2024",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2024",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants Language",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Applicants_Language.pdf",
     "kind": "pdf",
     "year": "2023",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2023",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — applicants language",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_language.pdf",
     "kind": "pdf",
     "year": "2022",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2022",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — applicants preferred language",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_applicants_preferred_language.pdf",
     "kind": "pdf",
     "year": "2021",
     "status": "ok",
     "topics": [
      "lottery",
      "demographics"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2021",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "Lottery Data — applicants preferred language",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_applicants_preferred_language.pdf",
     "kind": "pdf",
     "year": "2020",
     "status": "ok",
     "topics": [
      "lottery",
      "demographics"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2020",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "Lottery Data — applicants preferred language",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_applicants_preferred_language.pdf",
     "kind": "pdf",
     "year": "2019",
     "status": "ok",
     "topics": [
      "lottery",
      "demographics"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2019",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "Lottery Data — applicants preferred language",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applicants_preferred_language.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "lottery",
      "demographics"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2018",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — applicants preferred language",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applicants_preferred_language.pdf",
     "kind": "pdf",
     "year": "2017",
     "status": "ok",
     "topics": [
      "lottery",
      "demographics"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2017",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — lottery applicants by preferred language",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-applicants-by-preferred-language.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "lottery",
      "demographics"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2016",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — r1 applicants preferred language",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_applicants_preferred_language.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "lottery",
      "demographics"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2015",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — r1 applicants preferred language",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_applicants_preferred_language.pdf",
     "kind": "pdf",
     "year": "2014",
     "status": "ok",
     "topics": [
      "lottery",
      "demographics"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "2014",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Language",
        "Count",
        "Percent"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — Distribution Applications Ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Distribution_Applications_Ward.pdf",
     "kind": "pdf",
     "year": "2026",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Distribution of Applications by Ward",
     "label": "2026",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward",
        "Distribution of Lottery Applications by Ward (SY26-27)",
        "Distribution of Total Public School Enrollmentby Ward of Residence (SY24-25)"
       ],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants Ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Applicants_Ward.pdf",
     "kind": "pdf",
     "year": "2025",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Ward",
     "label": "2025",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward",
        "Distribution of Lottery Applications by Ward (SY25-26)",
        "Distribution of Total Public School Enrollmentby Ward of Residence (SY23-24)"
       ],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants Ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Applicants_Ward.pdf",
     "kind": "pdf",
     "year": "2024",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Ward",
     "label": "2024",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward",
        "Distribution of Lottery Applications by Ward (SY24-25)",
        "Distribution of Total Public School Enrollmentby Ward of Residence (SY22-23)"
       ],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants Ward",
     "url": "https://www.myschooldc.org/sites/default/files/u396/SY23_24_Applicants_Ward.pdf",
     "kind": "pdf",
     "year": "2023",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Ward",
     "label": "2023",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward",
        "Distribution of Total Public SchoolEnrollment by Ward of Residence (SY21-22*)"
       ],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "Lottery Data — applicants Ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_Ward.pdf",
     "kind": "pdf",
     "year": "2022",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Ward",
     "label": "2022",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward",
        "Distribution of Total Public SchoolEnrollment by Ward of Residence (SY21-22)"
       ],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "Lottery Data — applicants byward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_applicants_byward.pdf",
     "kind": "pdf",
     "year": "2021",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Ward",
     "label": "2021",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward 1",
        "Distribution of Total Public School Enrollment by Ward of Residence 8%"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — applicants byward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_applicants_byward.pdf",
     "kind": "pdf",
     "year": "2020",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Ward",
     "label": "2020",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward 1",
        "Distribution of Total Public School Enrollment by Ward of Residence 8%"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — applications byward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_applications_byward.pdf",
     "kind": "pdf",
     "year": "2019",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Ward",
     "label": "2019",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward 1",
        "Distribution of Total Public School Enrollment by Ward of Residence 8%"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — applicants byward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applicants_byward.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Ward",
     "label": "2018",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward 1",
        "Distribution of Total Public School Enrollment by Ward of Residence 8%"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — applicants byward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applicants_byward.pdf",
     "kind": "pdf",
     "year": "2017",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Ward",
     "label": "2017",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward 1",
        "Distribution of Total 16-17 Public School Enrollment by Ward of Residence 8%"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — lottery distribution of applications by war",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-distribution-of-applications-by-war.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Distribution of Applications by Ward",
     "label": "2016",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward 1",
        "Distribution of Total Public School Enrollment by Ward of Residence 10%"
       ],
       "n_rows": 7
      }
     ]
    },
    {
     "name": "Lottery Data — r1 applicants byward",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_applicants_byward.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Ward",
     "label": "2015",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward",
        "Distribution of Total Public School Enrollment by Ward of Residence"
       ],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "Lottery Data — r1 applicants byward",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_applicants_byward.pdf",
     "kind": "pdf",
     "year": "2014",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Ward",
     "label": "2014",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Ward",
        "Distribution of Total Public School Enrollment by Ward of Residence"
       ],
       "n_rows": 9
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants Grade Ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Applicants_Grade_Ward.pdf",
     "kind": "pdf",
     "year": "2026",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2026",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants Grade Ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Applicants_Grade_Ward.pdf",
     "kind": "pdf",
     "year": "2025",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2025",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants Grade Ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Applicants_Grade_Ward.pdf",
     "kind": "pdf",
     "year": "2024",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2024",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — Applicants Grade Ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Applicants_Grade_Ward.pdf",
     "kind": "pdf",
     "year": "2023",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2023",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level",
        "Total Applicants in Ward"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — applicants grade ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_grade_ward.pdf",
     "kind": "pdf",
     "year": "2022",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2022",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level",
        "Total Applicants in Ward"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — applications byward grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_applications_byward_grade.pdf",
     "kind": "pdf",
     "year": "2021",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2021",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level",
        "Total Applicants in Ward"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — applications byward grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_applications_byward_grade.pdf",
     "kind": "pdf",
     "year": "2020",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2020",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level",
        "Total Applicants in Ward"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — applications byward grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_applications_byward_grade.pdf",
     "kind": "pdf",
     "year": "2019",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2019",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level",
        "Total Applicants in Ward"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — applications byward grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_applications_byward_grade.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2018",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level",
        "Total Applicants in Ward"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — applications byward grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY17_18_L_applications_byward_grade.pdf",
     "kind": "pdf",
     "year": "2017",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2017",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level",
        "Total Applicants in Ward"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — Lottery Applications byWardandGrade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/2016_Lottery_Applications_byWardandGrade.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2016",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level",
        "Total Applicants in Ward"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — Applications byWardandGrade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/2015_R1_Applications_byWardandGrade.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2015",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level",
        "Total Applicants in Ward"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — Applications byWardandGrade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/2014_R1_Applications_byWardandGrade.pdf",
     "kind": "pdf",
     "year": "2014",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Applicants by Grade and Ward",
     "label": "2014",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Grade Level",
        "Total Applicants in Ward"
       ],
       "n_rows": 12
      }
     ]
    },
    {
     "name": "Lottery Data — Match Rate Ward Residence",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Match_Rate_Ward_Residence.pdf",
     "kind": "pdf",
     "year": "2026",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2026",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 4
      }
     ]
    },
    {
     "name": "Lottery Data — Match Rate Ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Match_Rate_Ward.pdf",
     "kind": "pdf",
     "year": "2025",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2025",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 4
      }
     ]
    },
    {
     "name": "Lottery Data — Match Rate Ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Match_Rate_Ward.pdf",
     "kind": "pdf",
     "year": "2024",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2024",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — Match Rate Ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Match_Rate_Ward.pdf",
     "kind": "pdf",
     "year": "2023",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2023",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 3
      }
     ]
    },
    {
     "name": "Lottery Data — applicants match ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicants_match_ward.pdf",
     "kind": "pdf",
     "year": "2022",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2022",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 4
      }
     ]
    },
    {
     "name": "Lottery Data — match rate ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_match_rate_ward.pdf",
     "kind": "pdf",
     "year": "2021",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2021",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 3
      }
     ]
    },
    {
     "name": "Lottery Data — match rate ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_L_match_rate_ward.pdf",
     "kind": "pdf",
     "year": "2020",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2020",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 4
      }
     ]
    },
    {
     "name": "Lottery Data — match rate ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_match_rate_ward.pdf",
     "kind": "pdf",
     "year": "2019",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2019",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 4
      }
     ]
    },
    {
     "name": "Lottery Data — match rate ward",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_match_rate_ward.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2018",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — 2017 Lottery Data Slides Match Rate by Ward of Residence",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/2017%20Lottery%20Data%20Slides%20-%20Match%20Rate%20by%20Ward%20of%20Residence.pdf",
     "kind": "pdf",
     "year": "2017",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2017",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — lottery match rate by ward of residence",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-match-rate-by-ward-of-residence.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2016",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — r1 match rate ward",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_match_rate_ward.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2015",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — r1 match rate ward",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_match_rate_ward.pdf",
     "kind": "pdf",
     "year": "2014",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Ward of Residence",
     "label": "2014",
     "n_pages": 1,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Lottery Data — Median School Selection",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Median_School_Selection.pdf",
     "kind": "pdf",
     "year": "2026",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2026",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — Median School Choices by Grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Median_School_Choices_by_Grade.pdf",
     "kind": "pdf",
     "year": "2025",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2025",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — Median School Choices by Grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Median_School_Choices_by_Grade.pdf",
     "kind": "pdf",
     "year": "2024",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2024",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — Median School Choices by Grade",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Median_School_Choices_by_Grade.pdf",
     "kind": "pdf",
     "year": "2023",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2023",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — applicant median school selection",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_applicant_median_school_selection.pdf",
     "kind": "pdf",
     "year": "2022",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2022",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — median number selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_median_number_selections.pdf",
     "kind": "pdf",
     "year": "2021",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2021",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — median number selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_median_number_selections.pdf",
     "kind": "pdf",
     "year": "2020",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2020",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — median number selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_median_number_selections.pdf",
     "kind": "pdf",
     "year": "2019",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2019",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — median number selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_median_number_selections.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2018",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — 2017 Lottery Data Slides Median Number of School Selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/2017%20Lottery%20Data%20Slides%20-%20Median%20Number%20of%20School%20Selections.pdf",
     "kind": "pdf",
     "year": "2017",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2017",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — lottery median number of school selections",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-median-number-of-school-selections.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2016",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — r1 median number selections",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_median_number_selections.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2015",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — r1 median number selections",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_median_number_selections.pdf",
     "kind": "pdf",
     "year": "2014",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Median # of School Selections",
     "label": "2014",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 32
      }
     ]
    },
    {
     "name": "Lottery Data — Match Rate Grade School Selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY26_27_Match_Rate_Grade_School_Selections.pdf",
     "kind": "pdf",
     "year": "2026",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2026",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of School Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — Match Grade School Selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY25_26_Match_Grade_School_Selections.pdf",
     "kind": "pdf",
     "year": "2025",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2025",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of School Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — Match Grade School Selection",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY24_25_Match_Grade_School_Selection.pdf",
     "kind": "pdf",
     "year": "2024",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2024",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of School Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — Match Grade School Selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY23_24_Match_Grade_School_Selections.pdf",
     "kind": "pdf",
     "year": "2023",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2023",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Schools Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — match grade school selection",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/SY22_23_L_match_grade_school_selection.pdf",
     "kind": "pdf",
     "year": "2022",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2022",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Schools Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — match rate grade selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY21_22_L_match_rate_grade_selections.pdf",
     "kind": "pdf",
     "year": "2021",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2021",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Schools Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — match rate grade selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/SY20_21_match_rate_grade_selections.pdf",
     "kind": "pdf",
     "year": "2020",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2020",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Schools Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — match rate grade selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY19_20_L_match_rate_grade_selections.pdf",
     "kind": "pdf",
     "year": "2019",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2019",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Schools Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — match rate grade selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/SY18_19_L_match_rate_grade_selections.pdf",
     "kind": "pdf",
     "year": "2018",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2018",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Schools Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — 2017 Lottery Data Slides Match Rate by Grade and Number of School Selections",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/attachments/2017%20Lottery%20Data%20Slides%20-%20Match%20Rate%20by%20Grade%20and%20Number%20of%20School%20Selections.pdf",
     "kind": "pdf",
     "year": "2017",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2017",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Schools Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — lottery match rate by grade and number of s",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2016-lottery-match-rate-by-grade-and-number-of-s.pdf",
     "kind": "pdf",
     "year": "2016",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2016",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Schools Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — r1 match rate grade selections",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2015_r1_match_rate_grade_selections.pdf",
     "kind": "pdf",
     "year": "2015",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2015",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Schools Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "Lottery Data — r1 match rate grade selections",
     "url": "http://myschooldc.org/sites/default/files/dc/sites/myschooldc/page/2014_r1_match_rate_grade_selections.pdf",
     "kind": "pdf",
     "year": "2014",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Match Rate by Grade & # of Selections",
     "label": "2014",
     "n_pages": 1,
     "has_tabular_data": true,
     "n_table_pages": 1,
     "tables": [
      {
       "page": 1,
       "header": [
        "Number of Schools Selected on Application",
        "Overall Match Rate for Grade"
       ],
       "n_rows": 18
      }
     ]
    },
    {
     "name": "My School DC Process and Requirements to Conduct Research",
     "url": "https://www.myschooldc.org/sites/default/files/u21/MSDC_Data_Request_Process.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "lottery"
     ],
     "series": "Lottery: Other / research",
     "label": "unknown",
     "n_pages": 6,
     "has_tabular_data": false,
     "n_table_pages": 0,
     "tables": []
    },
    {
     "name": "Giving At-Risk Students Preference in a Unified Lottery for Public Schools",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/page/MSDC%20At-Risk%20Preference%20in%20a%20Unified%20Lottery%204.26.2018_Final.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "lottery",
      "demographics"
     ],
     "series": "Lottery: Other / research",
     "label": "unknown",
     "n_pages": 27,
     "has_tabular_data": true,
     "n_table_pages": 10,
     "tables": [
      {
       "page": 4,
       "header": [
        "Denver Public Schools gives a"
       ],
       "n_rows": 6
      },
      {
       "page": 8,
       "header": [
        "Weighting",
        "Light weighting",
        "Student random lottery number is multiplied by .75, reducing it by"
       ],
       "n_rows": 4
      },
      {
       "page": 8,
       "header": [
        "Priority to Sibling",
        "Preference is placed just ahead of sibling preference (different at"
       ],
       "n_rows": 2
      },
      {
       "page": 9,
       "header": [],
       "n_rows": 6
      },
      {
       "page": 16,
       "header": [
        "Light weighting",
        "At-risk",
        "16",
        "20",
        "1",
        "7395"
       ],
       "n_rows": 2
      },
      {
       "page": 16,
       "header": [
        "Heavy weighting",
        "At-risk",
        "73",
        "114",
        "7",
        "6",
        "7232"
       ],
       "n_rows": 2
      },
      {
       "page": 16,
       "header": [
        "Priority to sibling",
        "At-risk",
        "195",
        "294",
        "19",
        "23",
        "6901"
       ],
       "n_rows": 2
      },
      {
       "page": 21,
       "header": [
        "Twin offered",
        "Applicant has a twin who was matched or received a"
       ],
       "n_rows": 2
      }
     ]
    },
    {
     "name": "Dual Language Immersion Demand",
     "url": "https://www.myschooldc.org/sites/default/files/dc/sites/myschooldc/Dual%20Language%20Immersion%20Demand%20Research%20FINAL.pdf",
     "kind": "pdf",
     "year": "unknown",
     "status": "ok",
     "topics": [
      "demographics"
     ],
     "series": "Lottery: Applicants by Preferred Language",
     "label": "unknown",
     "n_pages": 19,
     "has_tabular_data": true,
     "n_table_pages": 19,
     "tables": [
      {
       "page": 1,
       "header": [],
       "n_rows": 6
      },
      {
       "page": 2,
       "header": [],
       "n_rows": 4
      },
      {
       "page": 3,
       "header": [],
       "n_rows": 4
      },
      {
       "page": 4,
       "header": [],
       "n_rows": 5
      },
      {
       "page": 5,
       "header": [],
       "n_rows": 5
      },
      {
       "page": 6,
       "header": [],
       "n_rows": 5
      },
      {
       "page": 6,
       "header": [
        "Total Applicants",
        "20,349",
        "21,208",
        "22,050",
        "24,996"
       ],
       "n_rows": 2
      },
      {
       "page": 7,
       "header": [],
       "n_rows": 4
      }
     ]
    }
   ],
   "search": "my school dc — lottery data ('by the numbers') my school dc the common lottery (one application for dcps + charters): applications by grade, seats offered, waitlists, match rates by ward/grade. administered jointly by osse/dme. the authoritative demand/choice dataset. report pdfs + excel/csv + interactive tableau (waitlist movement) lottery enrollment lottery my school dc waitlist choice application students headcount count population year over year comparisons — 20260602 myschooldc tableau data notes my school dc public tableau data release: 06/02/2026 historic lottery results msdc school code osse school code msdc school code and grade msdc school name grade offered in lottery lottery year applications on results day lottery seats offered matches on results day waitlist length on results day total waitlist offers made by june total waitlist offers made by august total waitlist offers made by october matches by preference lottery year msdc school code msdc school name grade offered in lottery preference order preference name preference order and name matches on results day by preference total applications and results from 2018 to 2026 lotteries 20,987 5,366 15,621 8,905 8,907 8,289 6,496 6,067 5,953 5,615 lottery data — applicants by grade lottery data — applications by grade lottery data — applications by grade lottery data — applicants by grade lottery data — applicants grade lottery data — applications bygrade lottery data — applications bygrade lottery data — applications bygrade lottery data — applications bygrade lottery data — applications bygrade lottery data — lottery number of applications by grade lottery data — r1 applications bygrade lottery data — r1 applications bygrade lottery data — applications seats available lottery data — applications and seats by grade lottery data — applications and seats by grade lottery data — applicants and seats offered by grade lottery data — applications seats offered lottery data — applications seats offered lottery data — applications seats offered lottery data — applications seats offered lottery data — applications seats offered submitted applications seats offered in the lottery lottery data — applications seats offered submitted applications seats offered in the lottery lottery data — lottery applications and seats offered submitted applications seats offered in the lottery lottery data — r1 applications seats offered submitted applications seats offered in the lottery lottery data — r1 applications seats offered submitted applications seats offered in the lottery lottery data — unique applicants waitlists lottery data — unique applicants waitlisted lottery data — unique applicants waitlisted lottery data — unique applicants waitlisted lottery data — applicants waitlisted lottery data — unique applicants waitlist lottery data — unique applicants waitlist lottery data — unique applicants waitlist lottery data — applicants waitlist number of unique applicants on waitlists lottery data — applicants waitlist number of unique applicants on waitlists lottery data — lottery unique applicants on wls by grade number of unique applicants on waitlists lottery data — r1 applicants waitlist number of unique applicants on waitlists lottery data — r1 applicants waitlist number of unique applicants on waitlists lottery data — applications preferred language language count percent lottery data — applicants language percent language count percent lottery data — applicants language language count percent lottery data — applicants language language count percent lottery data — applicants language language count percent lottery data — applicants preferred language language count percent lottery data — applicants preferred language language count percent lottery data — applicants preferred language language count percent lottery data — applicants preferred language language count percent lottery data — applicants preferred language language count percent lottery data — lottery applicants by preferred language language count percent lottery data — r1 applicants preferred language language count percent lottery data — r1 applicants preferred language language count percent lottery data — distribution applications ward ward distribution of lottery applications by ward (sy26-27) distribution of total public school enrollmentby ward of residence (sy24-25) lottery data — applicants ward ward distribution of lottery applications by ward (sy25-26) distribution of total public school enrollmentby ward of residence (sy23-24) lottery data — applicants ward ward distribution of lottery applications by ward (sy24-25) distribution of total public school enrollmentby ward of residence (sy22-23) lottery data — applicants ward ward distribution of total public schoolenrollment by ward of residence (sy21-22*) lottery data — applicants ward ward distribution of total public schoolenrollment by ward of residence (sy21-22) lottery data — applicants byward ward 1 distribution of total public school enrollment by ward of residence 8% lottery data — applicants byward ward 1 distribution of total public school enrollment by ward of residence 8% lottery data — applications byward ward 1 distribution of total public school enrollment by ward of residence 8% lottery data — applicants byward ward 1 distribution of total public school enrollment by ward of residence 8% lottery data — applicants byward ward 1 distribution of total 16-17 public school enrollment by ward of residence 8% lottery data — lottery distribution of applications by war ward 1 distribution of total public school enrollment by ward of residence 10% lottery data — r1 applicants byward ward distribution of total public school enrollment by ward of residence lottery data — r1 applicants byward ward distribution of total public school enrollment by ward of residence lottery data — applicants grade ward grade level lottery data — applicants grade ward grade level lottery data — applicants grade ward grade level lottery data — applicants grade ward grade level total applicants in ward lottery data — applicants grade ward grade level total applicants in ward lottery data — applications byward grade grade level total applicants in ward lottery data — applications byward grade grade level total applicants in ward lottery data — applications byward grade grade level total applicants in ward lottery data — applications byward grade grade level total applicants in ward lottery data — applications byward grade grade level total applicants in ward lottery data — lottery applications bywardandgrade grade level total applicants in ward lottery data — applications bywardandgrade grade level total applicants in ward lottery data — applications bywardandgrade grade level total applicants in ward lottery data — match rate ward residence lottery data — match rate ward lottery data — match rate ward lottery data — match rate ward lottery data — applicants match ward lottery data — match rate ward lottery data — match rate ward lottery data — match rate ward lottery data — match rate ward lottery data — 2017 lottery data slides match rate by ward of residence lottery data — lottery match rate by ward of residence lottery data — r1 match rate ward lottery data — r1 match rate ward lottery data — median school selection lottery data — median school choices by grade lottery data — median school choices by grade lottery data — median school choices by grade lottery data — applicant median school selection lottery data — median number selections lottery data — median number selections lottery data — median number selections lottery data — median number selections lottery data — 2017 lottery data slides median number of school selections lottery data — lottery median number of school selections lottery data — r1 median number selections lottery data — r1 median number selections lottery data — match rate grade school selections number of school selected on application overall match rate for grade lottery data — match grade school selections number of school selected on application overall match rate for grade lottery data — match grade school selection number of school selected on application overall match rate for grade lottery data — match grade school selections number of schools selected on application overall match rate for grade lottery data — match grade school selection number of schools selected on application overall match rate for grade lottery data — match rate grade selections number of schools selected on application overall match rate for grade lottery data — match rate grade selections number of schools selected on application overall match rate for grade lottery data — match rate grade selections number of schools selected on application overall match rate for grade lottery data — match rate grade selections number of schools selected on application overall match rate for grade lottery data — 2017 lottery data slides match rate by grade and number of school selections number of schools selected on application overall match rate for grade lottery data — lottery match rate by grade and number of s number of schools selected on application overall match rate for grade lottery data — r1 match rate grade selections number of schools selected on application overall match rate for grade lottery data — r1 match rate grade selections number of schools selected on application overall match rate for grade my school dc process and requirements to conduct research giving at-risk students preference in a unified lottery for public schools denver public schools gives a weighting light weighting student random lottery number is multiplied by .75, reducing it by priority to sibling preference is placed just ahead of sibling preference (different at light weighting at-risk 16 20 1 7395 heavy weighting at-risk 73 114 7 6 7232 priority to sibling at-risk 195 294 19 23 6901 twin offered applicant has a twin who was matched or received a dual language immersion demand total applicants 20,349 21,208 22,050 24,996"
  },
  {
   "id": "opendata-dcps-locations",
   "name": "Open Data DC — DC Public Schools (point locations)",
   "owner": "Open Data DC",
   "url": "https://opendata.dc.gov/datasets/dc-public-schools/about",
   "topics": [
    "profiles",
    "gis"
   ],
   "status": "js-rendered",
   "format": "GIS — Shapefile / GeoJSON / CSV / KML + ArcGIS REST API",
   "cadence": "Updated as schools change (~annually)",
   "years": "Current/live snapshot",
   "notes": "Point locations of every DCPS campus. ArcGIS layer: Education_WebMercator/MapServer layer 5. /about page is client-rendered; metadata verified via data.gov mirror.",
   "files": [
    {
     "name": "DC Public Schools locations (CSV export)",
     "url": "https://opendata.dc.gov/api/download/v1/items/4ac321b2d409438ebd76a6569ad94034/csv?layers=5",
     "kind": "csv",
     "year": "current",
     "status": "ok",
     "topics": [
      "profiles"
     ],
     "columns": [
      "X",
      "Y",
      "NAME",
      "ADDRESS",
      "FACUSE",
      "LEVEL_",
      "STATUS",
      "PHONE",
      "TOTAL_STUD",
      "SSL",
      "GIS_ID",
      "WEB_URL",
      "BLDG_NUM",
      "SCH_PROG",
      "CAPITALGAINS",
      "CAPACITY",
      "YEAR_BUILT",
      "SQUARE_FOOTAGE",
      "POPULATION_PLAN",
      "LONGITUDE",
      "LATITUDE",
      "SCHOOL_YEA",
      "LEA_NAME",
      "LEA_ID",
      "SCHOOL_NAM",
      "SCHOOL_ID",
      "GRADES",
      "MAR_ID",
      "XCOORD",
      "YCOORD",
      "ZIPCODE",
      "FACILITY_ID",
      "GLOBALID",
      "CREATED",
      "EDITED",
      "OBJECTID"
     ],
     "n_rows": 124
    }
   ],
   "search": "open data dc — dc public schools (point locations) open data dc point locations of every dcps campus. arcgis layer: education_webmercator/mapserver layer 5. /about page is client-rendered; metadata verified via data.gov mirror. gis — shapefile / geojson / csv / kml + arcgis rest api profiles gis directory locations list find a school  dc public schools locations (csv export) x y name address facuse level_ status phone total_stud ssl gis_id web_url bldg_num sch_prog capitalgains capacity year_built square_footage population_plan longitude latitude school_yea lea_name lea_id school_nam school_id grades mar_id xcoord ycoord zipcode facility_id globalid created edited objectid"
  },
  {
   "id": "opendata-charter-locations",
   "name": "Open Data DC — DC Charter Schools (point locations)",
   "owner": "Open Data DC",
   "url": "https://opendata.dc.gov/datasets/DCGIS::dc-charter-schools/about",
   "topics": [
    "profiles",
    "gis"
   ],
   "status": "js-rendered",
   "format": "GIS — Shapefile / GeoJSON / CSV / KML + ArcGIS REST API",
   "cadence": "Updated as campuses change (~annually)",
   "years": "Current/live snapshot",
   "notes": "Point locations of every charter campus. Same MapServer (layer 1) as DCPS schools.",
   "files": [
    {
     "name": "DC Charter Schools locations (CSV export)",
     "url": "https://opendata.dc.gov/api/download/v1/items/a3832935b1d644e48c887e6ec5a65fcd/csv?layers=1",
     "kind": "csv",
     "year": "current",
     "status": "ok",
     "topics": [
      "profiles"
     ],
     "columns": [
      "X",
      "Y",
      "NAME",
      "ADDRESS",
      "DIRECTOR",
      "PHONE",
      "AUTHORIZER",
      "GRADES",
      "ENROLLMENT",
      "GIS_ID",
      "WEB_URL",
      "AUTHORIZAT",
      "MYSCHOOL",
      "SCHOOL_YEA",
      "LEA_NAME",
      "LEA_ID",
      "SCHOOL_NAM",
      "SCHOOL_ID",
      "SCHOOLCODE",
      "GRADES_1",
      "LATITUDE",
      "LONGITUDE",
      "FACILITY_ID",
      "CLUSTER_",
      "WARD",
      "ZIPCODE",
      "MAR_ID",
      "XCOORD",
      "YCOORD",
      "SE_ANNO_CAD_DATA",
      "GLOBALID",
      "CREATED",
      "EDITED",
      "OBJECTID"
     ],
     "n_rows": 150
    }
   ],
   "search": "open data dc — dc charter schools (point locations) open data dc point locations of every charter campus. same mapserver (layer 1) as dcps schools. gis — shapefile / geojson / csv / kml + arcgis rest api profiles gis directory locations list find a school  dc charter schools locations (csv export) x y name address director phone authorizer grades enrollment gis_id web_url authorizat myschool school_yea lea_name lea_id school_nam school_id schoolcode grades_1 latitude longitude facility_id cluster_ ward zipcode mar_id xcoord ycoord se_anno_cad_data globalid created edited objectid"
  },
  {
   "id": "opendata-attendance-zones",
   "name": "Open Data DC — School Attendance Zones (ES/MS/HS boundaries)",
   "owner": "Open Data DC",
   "url": "https://opendata.dc.gov/datasets/DCGIS::school-attendance-zones-elementary/about",
   "topics": [
    "boundaries",
    "gis"
   ],
   "status": "js-rendered",
   "format": "GIS polygon layers — Shapefile / GeoJSON / CSV + ArcGIS REST API",
   "cadence": "Updated on boundary revisions",
   "years": "Current; historical layers SY10-11→SY22-23",
   "notes": "DCPS in-boundary zone polygons (only DCPS has zones; charters don't). HS zones are spread across multiple vintage MapServer layers — the most fragmented GIS data. DME also posts shapefiles at dme.dc.gov/page/new-boundary-shape-files.",
   "files": [],
   "search": "open data dc — school attendance zones (es/ms/hs boundaries) open data dc dcps in-boundary zone polygons (only dcps has zones; charters don't). hs zones are spread across multiple vintage mapserver layers — the most fragmented gis data. dme also posts shapefiles at dme.dc.gov/page/new-boundary-shape-files. gis polygon layers — shapefile / geojson / csv + arcgis rest api boundaries gis boundary zone feeder in-boundary attendance area redistricting "
  },
  {
   "id": "dc-policy-state-of-schools",
   "name": "DC Policy Center — State of D.C. Schools (annual)",
   "owner": "DC Policy Center",
   "url": "https://www.dcpolicycenter.org/publications/stateofdcschools2024-25/",
   "topics": [
    "enrollment",
    "assessment",
    "graduation",
    "attendance",
    "educators",
    "landing"
   ],
   "status": "ok",
   "format": "Web page + full report PDF + one-pager (EN/ES)",
   "cadence": "Annual, spring (March)",
   "years": "Annual series 2018-19 through 2024-25 (7 editions)",
   "notes": "Best single narrative synthesis of the whole system (DCPS + charters), built on OSSE/DME source data. Produced with Education Forward DC. Hub: dcpolicycenter.org/education-policy-initiative/.",
   "files": [],
   "search": "dc policy center — state of d.c. schools (annual) dc policy center best single narrative synthesis of the whole system (dcps + charters), built on osse/dme source data. produced with education forward dc. hub: dcpolicycenter.org/education-policy-initiative/. web page + full report pdf + one-pager (en/es) enrollment assessment graduation attendance educators landing students headcount count population test scores proficiency parcc dc cape msaa reading math grad rate diploma acgr dropout truancy absenteeism chronic absent teacher staff workforce principal retention "
  },
  {
   "id": "census-acs-school-age",
   "name": "U.S. Census ACS — DC school-age / under-18 population",
   "owner": "U.S. Census",
   "url": "https://data.census.gov/",
   "topics": [
    "population",
    "projections"
   ],
   "status": "ok",
   "format": "Web tables / CSV / Census Data API",
   "cadence": "Annual (ACS 1-yr citywide; 5-yr for ward/tract)",
   "years": "ACS 1-yr 2005–2024; 5-yr 2009–2024",
   "notes": "Tables S0101 (Age) and B09001 (Under 18) — the citywide school-age denominator for capture-rate / demand analysis that DME and DC Policy Center use against enrollment and births.",
   "files": [],
   "search": "u.s. census acs — dc school-age / under-18 population u.s. census tables s0101 (age) and b09001 (under 18) — the citywide school-age denominator for capture-rate / demand analysis that dme and dc policy center use against enrollment and births. web tables / csv / census data api population projections  "
  },
  {
   "id": "empowerk12-dashboard",
   "name": "EmpowerK12 — DC school accountability/outcomes dashboards",
   "owner": "EmpowerK12",
   "url": "https://www.empowerk12.org/data-dashboard-source/dc-new-school-ratings",
   "topics": [
    "accountability",
    "assessment"
   ],
   "status": "ok",
   "format": "Interactive dashboards",
   "cadence": "Updated when OSSE releases",
   "years": "Recent years",
   "notes": "Nonprofit-built interactive dashboards over OSSE Report Card raw data (DCPS + charters together) — useful because OSSE/PCSB host few interactive views themselves.",
   "files": [],
   "search": "empowerk12 — dc school accountability/outcomes dashboards empowerk12 nonprofit-built interactive dashboards over osse report card raw data (dcps + charters together) — useful because osse/pcsb host few interactive views themselves. interactive dashboards accountability assessment star rating tier sqr pmf aspire score report card quality test scores proficiency parcc dc cape msaa reading math"
  }
 ],
 "overlaps": [
  {
   "topic": "Enrollment counts",
   "difference": "OSSE's audited enrollment is the single authoritative count — independently verified each fall, cross-sector, and the basis for funding. DCPS and PCSB each republish only their own sector's slice (DCPS by school/grade; PCSB by tier/ward + market-share analysis). EdScape takes the same OSSE figures and geocodes them to neighborhoods/wards/boundaries and adds projections. The Report Card displays per-school enrollment for browsing. If numbers differ, trust OSSE audited; the others may use different rounding, vintage, or small-cell suppression.",
   "sources": [
    {
     "name": "Audited Enrollment Reports & Data",
     "url": "https://osse.dc.gov/enrollment",
     "owner": "OSSE"
    },
    {
     "name": "DCPS Data Set — Enrollment",
     "url": "https://dcps.dc.gov/publication/dcps-data-set-enrollment",
     "owner": "DCPS"
    },
    {
     "name": "Charter Student Enrollment",
     "url": "https://dcpcsb.org/student-enrollment",
     "owner": "DC PCSB"
    },
    {
     "name": "EdScape — Enrollment Patterns (cross-sector / where students attend)",
     "url": "https://edscape.dc.gov/page/enrollment-patterns-index",
     "owner": "DME"
    },
    {
     "name": "DC School Report Card (public interactive site)",
     "url": "https://dcschoolreportcard.org/",
     "owner": "OSSE"
    }
   ]
  },
  {
   "topic": "School accountability ratings",
   "difference": "THESE ARE NOT THE SAME SCALE. OSSE's STAR rating is 1–5 stars and covers BOTH DCPS and charters. DC PCSB's School Quality Report (SQR), built on the ASPIRE system, scores charters 0–100 and assigns Tier 1/2/3 — charters only. The older PMF (archived at 2018-19) is yet another charter tiering. A charter can have both a STAR rating and an SQR tier that are not directly comparable. Always state which framework (and which year/version) a 'score' or 'tier' came from. EmpowerK12 re-presents the OSSE STAR data interactively.",
   "sources": [
    {
     "name": "DC School Report Card (public interactive site)",
     "url": "https://dcschoolreportcard.org/",
     "owner": "OSSE"
    },
    {
     "name": "DC School Report Card & STAR Framework Technical Guide",
     "url": "https://osse.dc.gov/publication/dc-school-report-card-and-star-framework-technical-guide",
     "owner": "OSSE"
    },
    {
     "name": "School Quality Report (SQR)",
     "url": "https://dcpcsb.org/families/school-quality-report",
     "owner": "DC PCSB"
    },
    {
     "name": "ASPIRE System (current charter accountability framework)",
     "url": "https://dcpcsb.org/aspire-system",
     "owner": "DC PCSB"
    },
    {
     "name": "Performance Management Framework (PMF) — archive",
     "url": "https://dcpcsb.org/performance-management-framework-pmf",
     "owner": "DC PCSB"
    },
    {
     "name": "EmpowerK12 — DC school accountability/outcomes dashboards",
     "url": "https://www.empowerk12.org/data-dashboard-source/dc-new-school-ratings",
     "owner": "EmpowerK12"
    }
   ]
  },
  {
   "topic": "Assessment / proficiency (ELA & math)",
   "difference": "OSSE is the authority — it administers DC CAPE (formerly PARCC) and posts cross-sector results plus the Report Card display. DCPS's downloadable PARCC/ assessment files cover only DCPS schools; PCSB's page covers only charters. The sector pages are convenient subsets but can lag OSSE and apply different suppression. For comparisons across sectors or years, use OSSE's files.",
   "sources": [
    {
     "name": "Statewide Assessment Results 2024-25 (DC CAPE / MSAA)",
     "url": "https://osse.dc.gov/assessmentresults2025",
     "owner": "OSSE"
    },
    {
     "name": "Statewide Assessment Results 2023-24 (+ older-year archive index)",
     "url": "https://osse.dc.gov/assessmentresults2024",
     "owner": "OSSE"
    },
    {
     "name": "DC School Report Card (public interactive site)",
     "url": "https://dcschoolreportcard.org/",
     "owner": "OSSE"
    },
    {
     "name": "DCPS Downloadable Data Sets (index)",
     "url": "https://dcps.dc.gov/service/dcps-downloadable-data-sets",
     "owner": "DCPS"
    },
    {
     "name": "Statewide Assessment Results (charter)",
     "url": "https://dcpcsb.org/test-results-parcc",
     "owner": "DC PCSB"
    }
   ]
  },
  {
   "topic": "Graduation rate (ACGR)",
   "difference": "OSSE publishes the official cross-sector 4- and 5-year ACGR with subgroups. DCPS's downloadable graduation dataset is the DCPS-only subset of the same calculation. Use OSSE for charter or cross-sector figures.",
   "sources": [
    {
     "name": "High School Graduation Rates / ACGR",
     "url": "https://osse.dc.gov/service/high-school-graduation-rates-0",
     "owner": "OSSE"
    },
    {
     "name": "DCPS Data Set — Graduation Rates",
     "url": "https://dcps.dc.gov/node/1018352",
     "owner": "DCPS"
    },
    {
     "name": "DC School Report Card (public interactive site)",
     "url": "https://dcschoolreportcard.org/",
     "owner": "OSSE"
    }
   ]
  },
  {
   "topic": "Attendance / chronic absenteeism",
   "difference": "OSSE owns the citywide attendance metrics and leads with chronic absenteeism and chronic truancy (a 10% threshold), not 'in-seat attendance.' DCPS's at-a- glance PDFs are district-level aggregates; PCSB's report is charter-only. Watch the metric definition — 'attendance rate' (DCPS narrative) and 'chronic absenteeism' (OSSE) answer different questions.",
   "sources": [
    {
     "name": "School Year Attendance Reporting (chronic absenteeism/truancy)",
     "url": "https://osse.dc.gov/page/2024-25-school-year-attendance-reporting",
     "owner": "OSSE"
    },
    {
     "name": "OSSE Attendance Dashboard",
     "url": "https://osse.dc.gov/attendancedashboard",
     "owner": "OSSE"
    },
    {
     "name": "DC School Report Card (public interactive site)",
     "url": "https://dcschoolreportcard.org/",
     "owner": "OSSE"
    },
    {
     "name": "DCPS at a Glance: Attendance",
     "url": "https://dcps.dc.gov/node/1185940",
     "owner": "DCPS"
    },
    {
     "name": "Annual Discipline & Attendance Report (charter)",
     "url": "https://dcpcsb.org/attendance-and-discipline-report",
     "owner": "DC PCSB"
    }
   ]
  },
  {
   "topic": "Discipline (suspensions/expulsions)",
   "difference": "OSSE's 'State of Discipline' report + the Report Card are the current cross-sector authority (by-school detail lives in PDF appendices). PCSB's own School Equity Reports carried charter discipline/mobility but are archived at SY2017-18 — PCSB now redirects to OSSE. Use OSSE for anything recent.",
   "sources": [
    {
     "name": "OSSE Discipline Report ('State of Discipline')",
     "url": "https://osse.dc.gov/page/discipline-report",
     "owner": "OSSE"
    },
    {
     "name": "DC School Report Card (public interactive site)",
     "url": "https://dcschoolreportcard.org/",
     "owner": "OSSE"
    },
    {
     "name": "School Equity Reports (charter)",
     "url": "https://dcpcsb.org/school-equity-reports",
     "owner": "DC PCSB"
    },
    {
     "name": "Annual Discipline & Attendance Report (charter)",
     "url": "https://dcpcsb.org/attendance-and-discipline-report",
     "owner": "DC PCSB"
    }
   ]
  },
  {
   "topic": "Demographics (race, SWD, EL, at-risk)",
   "difference": "OSSE's Report Card 'Aggregate Enrollment Data' Excel is the authoritative school-level demographic breakdown. EdScape recasts it by neighborhood/ward. DCPS and PCSB pages show only their own sector and often only district/sector totals. Small subgroups may be suppressed in OSSE files (0%/100% hidden).",
   "sources": [
    {
     "name": "Report Card Aggregate Enrollment Data (demographics file)",
     "url": "https://osse.dc.gov/page/dc-school-report-card-resource-library",
     "owner": "OSSE"
    },
    {
     "name": "DC School Report Card (public interactive site)",
     "url": "https://dcschoolreportcard.org/",
     "owner": "OSSE"
    },
    {
     "name": "EdScape (education landscape tool)",
     "url": "https://edscape.dc.gov/",
     "owner": "DME"
    },
    {
     "name": "DCPS at a Glance: Enrollment",
     "url": "https://dcps.dc.gov/node/966292",
     "owner": "DCPS"
    },
    {
     "name": "Charter Student Enrollment",
     "url": "https://dcpcsb.org/student-enrollment",
     "owner": "DC PCSB"
    }
   ]
  },
  {
   "topic": "Per-pupil money",
   "difference": "These measure DIFFERENT things. OSSE's ESSA per-pupil EXPENDITURE reports show what was actually spent per pupil (cross-sector, ex-post). DCPS's budget portal shows ALLOCATIONS under the three-factor model (ex-ante, DCPS only). PCSB's finance pages show charter actuals/audits. Don't compare a DCPS allocation to an OSSE expenditure as if they're the same number.",
   "sources": [
    {
     "name": "Report Card School Finance Data (per-pupil expenditures)",
     "url": "https://osse.dc.gov/page/dc-school-report-card-resource-library",
     "owner": "OSSE"
    },
    {
     "name": "DCPS Budget Transparency Portal",
     "url": "https://dcpsbudget.com/",
     "owner": "DCPS"
    },
    {
     "name": "Charter School Finances (spending, budgets, audits, 990s)",
     "url": "https://dcpcsb.org/school-finances",
     "owner": "DC PCSB"
    }
   ]
  },
  {
   "topic": "Facilities, capacity & utilization",
   "difference": "EdScape Ch.3 and the Master Facilities Plan are the cross-sector planning views (capacity, utilization, projections) produced by DME with OSSE/DCPS/ PCSB/DGS. DCPS's modernizations page (+ DGS) covers only DCPS capital projects. For 'how full is each building citywide,' use EdScape/MFP; for 'what DCPS is renovating,' use DCPS/DGS.",
   "sources": [
    {
     "name": "EdScape — Public School Facilities (capacity/utilization/locations)",
     "url": "https://edscape.dc.gov/page/facilities-index",
     "owner": "DME"
    },
    {
     "name": "DC Public Education Master Facilities Plan 2023",
     "url": "https://dme.dc.gov/mfp2023",
     "owner": "DME"
    },
    {
     "name": "2024 Master Facilities Plan Annual Supplement",
     "url": "https://dme.dc.gov/publication/2024-master-facilities-plan-supplement",
     "owner": "DME"
    },
    {
     "name": "DCPS Modernizations",
     "url": "https://dcps.dc.gov/page/modernizations",
     "owner": "DCPS"
    },
    {
     "name": "DME — Interactive School Facility Maps",
     "url": "https://dme.dc.gov/page/interactive-school-facility-maps",
     "owner": "DME"
    }
   ]
  },
  {
   "topic": "Boundaries & feeder patterns",
   "difference": "Only DCPS has attendance boundaries/feeders (charters are citywide-choice). DCPS publishes the human-readable feeder PDFs and address lookup; Open Data DC has the GIS polygon shapefiles (current + historical vintages); DME owns the boundary POLICY and the 2023 study data. EdScape shows how enrollment actually flows across those boundaries.",
   "sources": [
    {
     "name": "DCPS Feeder Patterns",
     "url": "https://dcps.dc.gov/feederpatterns",
     "owner": "DCPS"
    },
    {
     "name": "Find Your In-Boundary School (address lookup)",
     "url": "https://enrolldcps.dc.gov/node/41",
     "owner": "DCPS"
    },
    {
     "name": "Open Data DC — School Attendance Zones (ES/MS/HS boundaries)",
     "url": "https://opendata.dc.gov/datasets/DCGIS::school-attendance-zones-elementary/about",
     "owner": "Open Data DC"
    },
    {
     "name": "DME — Boundary and Student Assignment Study 2023 (data supplement)",
     "url": "https://dme.dc.gov/page/boundary-and-student-assignment-study-2023-data-supplement",
     "owner": "DME"
    },
    {
     "name": "EdScape — Enrollment Patterns (cross-sector / where students attend)",
     "url": "https://edscape.dc.gov/page/enrollment-patterns-index",
     "owner": "DME"
    }
   ]
  },
  {
   "topic": "School directory / locations",
   "difference": "For machine-readable locations of all schools, use Open Data DC GIS (separate DCPS and charter layers). For human browsing, DCPS Profiles (DCPS only) and PCSB School Profiles / Directory (charter only) are the directories; the Report Card lists both sectors. School-ID crosswalks: DCPS School Directory PDF and the OSSE enrollment files.",
   "sources": [
    {
     "name": "Open Data DC — DC Public Schools (point locations)",
     "url": "https://opendata.dc.gov/datasets/dc-public-schools/about",
     "owner": "Open Data DC"
    },
    {
     "name": "Open Data DC — DC Charter Schools (point locations)",
     "url": "https://opendata.dc.gov/datasets/DCGIS::dc-charter-schools/about",
     "owner": "Open Data DC"
    },
    {
     "name": "DCPS School Profiles ('Find a School')",
     "url": "https://profiles.dcps.dc.gov/",
     "owner": "DCPS"
    },
    {
     "name": "School Profiles / Find a DC Public Charter School",
     "url": "https://www.dcpcsb.org/school-profiles",
     "owner": "DC PCSB"
    },
    {
     "name": "Public Charter School Directory (annual PDF)",
     "url": "https://www.dcpcsb.org/2025-26-public-charter-school-directory",
     "owner": "DC PCSB"
    },
    {
     "name": "DC School Report Card (public interactive site)",
     "url": "https://dcschoolreportcard.org/",
     "owner": "OSSE"
    }
   ]
  }
 ]
};
