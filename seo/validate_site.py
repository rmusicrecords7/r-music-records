#!/usr/bin/env python3
"""Offline technical checks for the published R Music Records site."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DOMAIN = "https://rmusicrecords.com"
SITEMAP = ROOT / "sitemap.xml"
ROBOTS = ROOT / "robots.txt"

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonical = None
        self.title = ""
        self.description = None
        self.noindex = False
        self.refs = []
        self._in_title = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title":
            self._in_title = True
        if tag == "meta":
            name = (attrs.get("name") or "").lower()
            if name == "description":
                self.description = attrs.get("content", "")
            if name in ("robots", "googlebot") and "noindex" in (attrs.get("content") or "").lower():
                self.noindex = True
        if tag == "link" and "canonical" in (attrs.get("rel") or "").lower().split():
            self.canonical = attrs.get("href")
        if tag in ("a", "link") and attrs.get("href"):
            self.refs.append(attrs["href"])
        if tag in ("img", "script", "source", "iframe") and attrs.get("src"):
            self.refs.append(attrs["src"])

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False

    def handle_data(self, data):
        if self._in_title:
            self.title += data

def local_file(url_or_path):
    parsed = urlsplit(url_or_path)
    path = unquote(parsed.path)
    if not path or path == "/":
        path = "/index.html"
    if path.endswith("/"):
        path += "index.html"
    return ROOT / path.lstrip("/")

def main():
    errors = []
    if not SITEMAP.exists():
        print("ERROR: sitemap.xml is missing")
        return 1
    try:
        tree = ET.parse(SITEMAP)
    except ET.ParseError as exc:
        print(f"ERROR: sitemap.xml is not valid XML: {exc}")
        return 1

    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = [node.text.strip() for node in tree.findall(".//sm:loc", ns) if node.text]
    if not urls:
        errors.append("Sitemap contains no URL entries")
    if len(urls) != len(set(urls)):
        errors.append("Sitemap contains duplicate URLs")

    if not ROBOTS.exists() or f"Sitemap: {DOMAIN}/sitemap.xml" not in ROBOTS.read_text(encoding="utf-8"):
        errors.append("robots.txt does not declare the canonical sitemap URL")

    checked = 0
    for url in urls:
        parsed = urlsplit(url)
        if parsed.scheme != "https" or parsed.netloc != "rmusicrecords.com":
            errors.append(f"Non-canonical sitemap host/protocol: {url}")
            continue
        page = local_file(url)
        if not page.is_file():
            errors.append(f"Sitemap URL has no matching file: {url} -> {page.relative_to(ROOT)}")
            continue
        checked += 1
        parser = PageParser()
        try:
            parser.feed(page.read_text(encoding="utf-8"))
        except (UnicodeDecodeError, OSError) as exc:
            errors.append(f"Cannot read {page.relative_to(ROOT)}: {exc}")
            continue
        if not parser.title.strip():
            errors.append(f"Missing title: {page.relative_to(ROOT)}")
        if not parser.description or not parser.description.strip():
            errors.append(f"Missing meta description: {page.relative_to(ROOT)}")
        if parser.canonical != url:
            errors.append(f"Canonical mismatch: {page.relative_to(ROOT)} -> {parser.canonical!r}; expected {url}")
        if parser.noindex:
            errors.append(f"Sitemap page is marked noindex: {page.relative_to(ROOT)}")

    # Check internal links and local assets across every HTML document.
    html_files = list(ROOT.rglob("*.html"))
    broken = set()
    for page in html_files:
        parser = PageParser()
        try:
            parser.feed(page.read_text(encoding="utf-8"))
        except (UnicodeDecodeError, OSError):
            continue
        for ref in parser.refs:
            ref = ref.strip()
            if not ref or ref.startswith(("#", "//")):
                continue
            parsed = urlsplit(ref)
            if parsed.scheme or parsed.netloc:
                continue
            target = local_file(ref)
            if not target.is_file():
                broken.add(f"{page.relative_to(ROOT)} -> {ref}")
    errors.extend(f"Broken local reference: {item}" for item in sorted(broken))

    print(f"Checked {checked} sitemap URLs and {len(html_files)} HTML files.")
    if errors:
        print(f"FAILED: {len(errors)} issue(s)")
        for error in errors:
            print(f" - {error}")
        return 1
    print("PASS: sitemap, canonical/indexability directives, metadata, local links and assets.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
