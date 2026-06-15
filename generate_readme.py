#!/usr/bin/env python3
"""
generate_readme.py — build README.md from sources.yaml (+ file_profiles.json).

sources.yaml is the source of truth. This renders it into a browsable catalog:
one section per publishing entity, every source with its authority/cadence/years,
the file-level inventory (tabs + columns from profile_files.py), and the
"same data, multiple places" overlap analysis.

Usage:
    python generate_readme.py
"""
from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent
SOURCES = ROOT / "sources.yaml"
PROFILES = ROOT / "file_profiles.json"
OUT = ROOT / "README.md"
CATALOG_JS = ROOT / "catalog.js"   # data the static front end (index.html) loads

STATUS_NOTE = {
    "ok": "",
    "js-rendered": " · ⚠️ JS app (open in a browser)",
    "login-required": " · 🔒 login required",
    "stale": " · 🗄️ archived/stale",
    "unstable": " · ♻️ intermittent server errors",
    "unverified": " · ❓ unverified",
}


def slug(text: str) -> str:
    return "".join(c if c.isalnum() or c in " -" else "" for c in text).lower().strip().replace(" ", "-")


def load_profiles() -> dict:
    if not PROFILES.exists():
        return {}
    return json.loads(PROFILES.read_text())


def render_file(rec: dict) -> list[str]:
    """One bullet describing a profiled data file's structure."""
    name, url, kind = rec["name"], rec["url"], rec["kind"]
    head = f"  - [`{name}`]({url}) — **{kind}**"
    status = rec.get("status")
    if status == "needs_browser":
        return [f"{head} — ⚠️ behind Box/Egnyte/Google; harvest with the update skill"]
    if status == "error":
        return [f"{head} — ❌ {rec.get('error', 'error')}"]

    prof = rec.get("profile", {})
    lines = []
    if kind in ("xlsx", "xls"):
        tabs = prof.get("sheets", [])
        lines.append(f"{head} — {prof.get('n_sheets', len(tabs))} tab(s)")
        for s in tabs:
            cols = ", ".join(f"`{c}`" for c in s["columns"][:12])
            more = " …" if s.get("columns_truncated") or len(s["columns"]) > 12 else ""
            cols_txt = f" — cols: {cols}{more}" if cols else ""
            lines.append(f"    - tab **{s['name']}** ({s['n_rows']:,} rows × {s['n_columns']} cols){cols_txt}")
    elif kind == "csv":
        cols = ", ".join(f"`{c}`" for c in prof.get("columns", [])[:12])
        more = " …" if prof.get("columns_truncated") else ""
        lines.append(f"{head} — {prof.get('n_rows', '?'):,} rows × {prof.get('n_columns','?')} cols")
        if cols:
            lines.append(f"    - cols: {cols}{more}")
    elif kind == "pdf":
        npages = prof.get("n_pages", "?")
        if prof.get("has_tabular_data"):
            cap = " (scan capped)" if prof.get("table_scan_capped") else ""
            lines.append(f"{head} — {npages} pages, **extractable tables** on "
                         f"~{prof.get('n_table_pages')} page(s){cap}")
            for t in prof.get("tables", [])[:3]:
                hdr = ", ".join(f"`{c}`" for c in t["header"][:8])
                lines.append(f"    - p{t['page']} table ({t['n_rows']} rows): {hdr}")
        else:
            lines.append(f"{head} — {npages} pages (narrative; no extractable tables)")
    else:
        lines.append(head)
    return lines


def derive_series(source_id: str, name: str, year):
    """Assign per-ENTITY datasets an explicit series + chip label so they group as
    one row. Year-based series are handled by the front end's heuristic; this is for
    sets that recur by school (PCSB equity) or by metric under drifting filenames
    (My School DC lottery). Returns {} to fall back to the year heuristic."""
    low = name.lower()
    if source_id == "myschooldc-lottery":
        if "tableau" in low: s = "Lottery: Tableau underlying data"
        elif "waitlist" in low: s = "Lottery: Unique Applicants Waitlisted"
        elif "seats" in low: s = "Lottery: Applications & Seats Offered by Grade"
        elif "language" in low: s = "Lottery: Applicants by Preferred Language"
        elif "total application" in low or "results from" in low: s = "Lottery: Total Applications & Results"
        elif "median" in low: s = "Lottery: Median # of School Selections"
        elif "match" in low and "ward" in low: s = "Lottery: Match Rate by Ward of Residence"
        elif "match" in low: s = "Lottery: Match Rate by Grade & # of Selections"
        elif "distribution" in low: s = "Lottery: Distribution of Applications by Ward"
        elif "grade" in low and "ward" in low: s = "Lottery: Applicants by Grade and Ward"
        elif "ward" in low: s = "Lottery: Applicants by Ward"
        elif "grade" in low: s = "Lottery: Applicants by Grade"
        else: s = "Lottery: Other / research"
        return {"series": s, "label": year}
    if source_id == "pcsb-equity-reports":
        if "definition" in low:
            return {"series": "School Equity Reports (per charter school, 2017-18)", "label": "Definitions Guide"}
        m = re.search(r"public charter school\s+(.*)", name, re.I)
        school = (m.group(1).strip() if m else name).replace(" - ", " ").strip()
        return {"series": "School Equity Reports (per charter school, 2017-18)", "label": school or name}

    # OSSE renames its annual Report Card datasets, splitting one dataset across
    # eras (AP/IB/SAT -> Advanced Coursework; Per-Pupil Expenditures -> School
    # Finance Data; Teacher & School Leader -> Educator Data). Reconnect them.
    # Statewide assessment results (DC CAPE, formerly PARCC) + MSAA, published per
    # year on separate OSSE pages, at State/LEA/School levels. Connect across years.
    if source_id in ("osse-assessment-2025", "osse-assessment-archive"):
        tags = []
        for kw, tag in [("school level", "School"), ("lea level", "LEA"), ("sea level", "State"),
                        ("state level", "State"), ("participation", "Particip."),
                        ("\\bela\\b", "ELA"), ("\\bmath", "Math"), ("science", "Sci"),
                        ("advanced middle", "Adv MS Math")]:
            if re.search(kw, low) and tag not in tags:
                tags.append(tag)
        label = (str(year or "") + (" " + "/".join(tags) if tags else "")).strip()
        return {"series": "Statewide Assessment Results (DC CAPE / PARCC & MSAA)", "label": label or year}

    if source_id.startswith("osse") or "report card" in low or "star framework" in low:
        if re.search(r"advanced coursework|ap,? ib|\bap ib\b|ib and sat|\bap\b.*\bsat\b", low):
            return {"series": "Advanced Coursework (AP, IB & SAT)", "label": year}
        if re.search(r"per[- ]pupil|school finance|finance data|expenditure", low) and "reporting standard" not in low:
            return {"series": "School Finance / Per-Pupil Expenditures", "label": year}
        if re.search(r"teacher|school leader|educator", low):
            return {"series": "Educators (Teachers & School Leaders)", "label": year}
    return {}


def file_for_js(rec: dict, src: dict | None) -> dict:
    """Trim a profiled-file record down to what the front end needs to show + search.
    `src` is the file's OWN source (for authority + topics — may differ across a
    multi-source series)."""
    prof = rec.get("profile", {})
    out = {"name": rec["name"], "url": rec["url"], "kind": rec["kind"],
           "year": rec.get("year"), "status": rec.get("status"),
           "topics": (src or {}).get("topics", [])}
    if rec.get("page"):
        out["page"] = rec["page"]
    out.update(derive_series(rec["source_id"], rec["name"], rec.get("year")))
    if rec["kind"] in ("xlsx", "xls"):
        out["tabs"] = [{"name": s["name"], "n_rows": s["n_rows"], "columns": s["columns"]}
                       for s in prof.get("sheets", [])]
    elif rec["kind"] == "csv":
        out["columns"] = prof.get("columns", [])
        out["n_rows"] = prof.get("n_rows")
    elif rec["kind"] == "pdf":
        out["n_pages"] = prof.get("n_pages")
        out["has_tabular_data"] = prof.get("has_tabular_data", False)
        out["n_table_pages"] = prof.get("n_table_pages", 0)
        out["tables"] = [{"page": t["page"], "header": t["header"], "n_rows": t["n_rows"]}
                         for t in prof.get("tables", [])[:8]]
    return out


# Plain-language words people search for, mapped to the topic tags we use, so
# "spending" finds finance sources, "truancy" finds attendance, etc.
TOPIC_SYNONYMS = {
    "finance": "spending money budget cost dollars per-pupil expenditure funding",
    "attendance": "truancy absenteeism chronic absent",
    "enrollment": "students headcount count population",
    "demographics": "race ethnicity special education english learner at-risk poverty",
    "graduation": "grad rate diploma acgr dropout",
    "discipline": "suspension expulsion suspended discipline",
    "accountability": "star rating tier sqr pmf aspire score report card quality",
    "assessment": "test scores proficiency parcc dc cape msaa reading math",
    "boundaries": "boundary zone feeder in-boundary attendance area redistricting",
    "facilities": "building capacity utilization modernization seats",
    "educators": "teacher staff workforce principal retention",
    "lottery": "lottery my school dc waitlist choice application",
    "early-childhood": "pre-k prek preschool child care toddler",
    "profiles": "directory locations list find a school",
}


def search_blob(source: dict, files: list[dict]) -> str:
    """Everything a free-text search over this source should match: name, owner,
    topics, notes, every file name / tab name / column name, plus plain-language
    synonyms for each topic. Lowercased."""
    synonyms = " ".join(TOPIC_SYNONYMS.get(t, "") for t in source.get("topics", []))
    parts = [source["name"], source["owner"], source.get("notes", ""),
             source["format"], " ".join(source.get("topics", [])), synonyms]
    for f in files:
        parts.append(f["name"])
        for tab in f.get("tabs", []):
            parts.append(tab["name"])
            parts.extend(tab["columns"])
        parts.extend(f.get("columns", []))
        for t in f.get("tables", []):
            parts.extend(t["header"])
    return " ".join(parts).lower()


def write_catalog_js(doc, profiles) -> int:
    src_by_id = {s["id"]: s for s in doc["sources"]}
    files_by_source: dict[str, list[dict]] = defaultdict(list)
    for rec in profiles.values():
        files_by_source[rec["source_id"]].append(file_for_js(rec, src_by_id.get(rec["source_id"])))

    sources_js = []
    for s in doc["sources"]:
        files = files_by_source.get(s["id"], [])
        sources_js.append({
            "id": s["id"], "name": s["name"], "owner": s["owner"], "url": s["url"],
            "topics": s.get("topics", []),
            "status": s.get("status", "ok"), "format": s["format"],
            "cadence": s["cadence"], "years": s["years"], "notes": s.get("notes", ""),
            "files": files, "search": search_blob(s, files),
        })
    overlaps_js = [{
        "topic": ov["topic"], "difference": ov["difference"].strip(),
        "sources": [{"name": src_by_id[i]["name"], "url": src_by_id[i]["url"],
                     "owner": src_by_id[i]["owner"]}
                    for i in ov.get("sources", []) if i in src_by_id],
    } for ov in doc.get("overlaps", [])]

    catalog = {"last_verified": doc.get("last_verified", "?"),
               "owners": doc["owners"], "sources": sources_js, "overlaps": overlaps_js}
    CATALOG_JS.write_text("window.CATALOG = "
                          + json.dumps(catalog, ensure_ascii=False, indent=1)
                          + ";\n")
    n_files = sum(len(f) for f in files_by_source.values())
    return n_files


def main() -> int:
    doc = yaml.safe_load(SOURCES.read_text())
    profiles = load_profiles()

    owners = doc["owners"]
    sources = doc["sources"]
    overlaps = doc.get("overlaps", [])
    last_verified = doc.get("last_verified", "?")

    by_owner: dict[str, list[dict]] = defaultdict(list)
    for s in sources:
        by_owner[s["owner"]].append(s)

    files_by_source: dict[str, list[dict]] = defaultdict(list)
    for rec in profiles.values():
        files_by_source[rec["source_id"]].append(rec)

    out: list[str] = []
    w = out.append

    # ---- header ----
    w("# DC K-12 Public Schools — Data Source Catalog\n")
    w("A map of **where DC public-school data actually lives** — across OSSE, DCPS, "
      "the DC Public Charter School Board (DC PCSB), and the Deputy Mayor for "
      "Education (DME). The data is real but scattered: split across agencies, "
      "buried on Tableau, with old years on different pages than new ones, and the "
      "*same* metric often published in several places that don't quite agree. This "
      "catalog links each source, says **which one to trust**, and — where files are "
      "directly downloadable — inventories their **tabs and columns**.\n")
    w(f"> **Scope:** K-12 public (DCPS + charters). No higher ed.  \n"
      f"> **Last verified:** {last_verified}  \n"
      f"> **Source of truth:** [`sources.yaml`](sources.yaml) + [`data_files.yaml`](data_files.yaml). "
      f"Do not edit this README by hand — run `python generate_readme.py`.\n")

    # ---- how it works ----
    w("## How this repo works\n")
    w("| File | Purpose |")
    w("| --- | --- |")
    w("| [`sources.yaml`](sources.yaml) | Hand-curated catalog of every data source + the overlap analysis. **Edit this.** |")
    w("| [`data_files.yaml`](data_files.yaml) | Direct download URLs for individual files (xlsx/csv/pdf). **Edit this.** |")
    w("| [`profile_files.py`](profile_files.py) | Downloads each file and extracts its tabs/columns (xlsx/csv) or pages/text (pdf) → `file_profiles.json`. |")
    w("| [`generate_readme.py`](generate_readme.py) | Renders this README from the YAML + profiles. |")
    w("| `update-dc-schools-data` skill | The process for re-verifying links, finding new files, and regenerating. |\n")

    # ---- TOC ----
    w("## Contents\n")
    for o in owners:
        n = len(by_owner.get(o["key"], []))
        if n:
            w(f"- [{o['name']}](#{slug(o['name'])}) — {n} source(s)")
    w("- [⚠️ Same data, multiple places (what differs)](#-same-data-multiple-places-what-differs)")
    w("- [Known gaps & files needing a browser](#known-gaps--files-needing-a-browser)\n")

    # ---- per-owner sections ----
    for o in owners:
        group = by_owner.get(o["key"], [])
        if not group:
            continue
        w(f"## {o['name']}\n")
        w(f"_{o['blurb']}_\n")
        for s in group:
            status = STATUS_NOTE.get(s.get("status", "ok"), "").lstrip(" ·")
            topics = ", ".join(s.get("topics", []))
            w(f"### [{s['name']}]({s['url']})\n")
            w(f"{status + ' · ' if status else ''}_topics: {topics}_\n")
            w(f"- **Format:** {s['format']}")
            w(f"- **Updated:** {s['cadence']}")
            w(f"- **Years on page:** {s['years']}")
            if s.get("notes"):
                w(f"- **Notes:** {s['notes']}")
            files = files_by_source.get(s["id"], [])
            if files:
                w("- **Data files (profiled):**")
                for rec in files:
                    out.extend(render_file(rec))
            w("")

    # ---- overlaps ----
    w("## ⚠️ Same data, multiple places (what differs)\n")
    w("The whole point of the catalog. For each metric below, the same numbers appear "
      "in several places — here's which to use and why they disagree.\n")
    src_by_id = {s["id"]: s for s in sources}
    for ov in overlaps:
        w(f"### {ov['topic']}\n")
        w(ov["difference"].strip() + "\n")
        w("Where it appears:")
        for sid in ov.get("sources", []):
            s = src_by_id.get(sid)
            if s:
                w(f"- [{s['name']}]({s['url']}) ({s['owner']})")
        w("")

    # ---- gaps ----
    w("## Known gaps & files needing a browser\n")
    needs_browser = [r for r in profiles.values() if r.get("status") == "needs_browser"]
    errored = [r for r in profiles.values() if r.get("status") == "error"]
    w("Many high-value files (OSSE assessment results, most PCSB finance/equity docs) "
      "live behind **Box.com / Egnyte share links** or on **JS-rendered pages** with no "
      "scrapeable direct URL. They must be harvested with a browser (Playwright) via the "
      "update skill, then added to `data_files.yaml`.\n")
    if needs_browser:
        w("Currently flagged `needs_browser`:")
        for r in needs_browser:
            w(f"- {r['name']} → {r['url']}")
        w("")
    if errored:
        w("Files that failed to download/profile on the last run:")
        for r in errored:
            w(f"- {r['name']} — `{r.get('error')}`")
        w("")
    w("Other structural gaps noted during research: assessment files on Box; PCSB "
      "site returns intermittent 520s; the live Report Card is a JS app (use the "
      "Resource Library files for analysis); discipline by-school detail is in PDF "
      "appendices; STAR (OSSE) and SQR/PMF/ASPIRE (PCSB) are different rating systems.\n")

    w("---")
    w(f"_Generated from `sources.yaml` + `file_profiles.json` by `generate_readme.py`. "
      f"Sources last verified {last_verified}._")

    OUT.write_text("\n".join(out) + "\n")
    n_files = write_catalog_js(doc, profiles)
    print(f"Wrote {OUT.name}: {len(sources)} sources across {len(by_owner)} owners, "
          f"{len(overlaps)} overlap topics, {len(profiles)} profiled files.")
    print(f"Wrote {CATALOG_JS.name}: {len(sources)} sources, {n_files} file records.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
