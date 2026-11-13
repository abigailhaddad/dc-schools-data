"""Git merge driver for the discovery cache files (discovery_pdf_checked.json,
discovery_state.json). Used by the weekly workflow, which configures it with

    git config merge.jsonunion.driver "python3 merge_json_union.py %O %A %B %P"

and .gitattributes maps the two files to it.

Why: the weekly job commits these files ~75 minutes after checking out main, and
hand-made PRs often edit the same files (e.g. clearing the PDF backlog). When the
job rebases its cache commit onto the newer main, a line-based merge of two
sorted JSON objects can conflict and lose the week's cache. These files are
flat {key: value} objects, so the right merge is a union of keys.

Arguments: %O (base, unused), %A (main's version; the result is written here),
%B (the commit being replayed, i.e. the weekly job's), %P (path, for format).
Where both sides have a key, the job's value wins: it is the newer check.
Exit 1 (leave a conflict) if either side is not a flat JSON object.
"""
import json
import sys

_, _base, current, other, path = sys.argv

try:
    a = json.load(open(current))
    b = json.load(open(other))
except (OSError, ValueError) as e:
    sys.exit(f"merge_json_union: cannot parse {path}: {e}")
if not (isinstance(a, dict) and isinstance(b, dict)):
    sys.exit(f"merge_json_union: {path} is not a JSON object")

merged = {**a, **b}
# Match how find_new_files.py writes each file, so the merge adds no format noise.
if path.endswith("discovery_pdf_checked.json"):
    text = json.dumps(merged, indent=0, sort_keys=True)
else:
    text = json.dumps(merged, indent=1)
open(current, "w").write(text)
