#!/usr/bin/env python3
"""Download all DESIGN.md files from awesome-design-md repo."""
import json
import os
import urllib.request
import urllib.error
import time
from pathlib import Path

REPO_URL = "https://api.github.com/repos/VoltAgent/awesome-design-md/git/trees/main?recursive=1"
RAW_URL = "https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main"
BASE_DIR = Path(__file__).parent / "references"

def get_brand_list():
    """Fetch list of all brands from GitHub API."""
    print("Fetching brand list...")
    req = urllib.request.Request(REPO_URL, headers={"User-Agent": "Python"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.loads(resp.read())
    
    brands = []
    for item in data.get("tree", []):
        path = item["path"]
        if path.startswith("design-md/") and path.endswith("/DESIGN.md"):
            brand = path.split("/")[1]
            brands.append(brand)
    
    return sorted(brands)

def download_design_md(brand, retries=3):
    """Download DESIGN.md for a single brand."""
    url = f"{RAW_URL}/design-md/{brand}/DESIGN.md"
    dest = BASE_DIR / brand / "DESIGN.md"
    
    if dest.exists() and dest.stat().st_size > 100:
        return True, "exists"
    
    dest.parent.mkdir(parents=True, exist_ok=True)
    
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Python"})
            with urllib.request.urlopen(req, timeout=60) as resp:
                content = resp.read()
            
            if len(content) > 100:
                dest.write_bytes(content)
                return True, f"ok ({len(content)} bytes)"
            else:
                return False, "empty response"
        except Exception as e:
            if attempt < retries - 1:
                time.sleep(2 ** attempt)
                continue
            return False, str(e)

def main():
    BASE_DIR.mkdir(parents=True, exist_ok=True)
    
    brands = get_brand_list()
    print(f"Found {len(brands)} brands\n")
    
    success = 0
    failed = []
    
    for i, brand in enumerate(brands, 1):
        ok, msg = download_design_md(brand)
        status = "✓" if ok else "✗"
        print(f"[{i}/{len(brands)}] {status} {brand}: {msg}")
        
        if ok:
            success += 1
        else:
            failed.append(brand)
    
    print(f"\nDone: {success}/{len(brands)} successful")
    if failed:
        print(f"Failed: {', '.join(failed)}")

if __name__ == "__main__":
    main()
