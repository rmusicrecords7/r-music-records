#!/usr/bin/env python3
"""Offline technical checks for the published R Music Records site."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
from datetime import datetime, timezone
import json
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DOMAIN = "https://rmusicrecords.com"
GA4_SCRIPT_RE = re.compile(
    r'<script\b[^>]*src=["\']https://www\.googletagmanager\.com/gtag/js\?id=G-BRN5N11G4Y["\'][^>]*>',
    re.IGNORECASE,
)
GA4_CONFIG_RE = re.compile(
    r"gtag\s*\(\s*['\"]config['\"]\s*,\s*['\"]G-BRN5N11G4Y['\"]\s*\)",
    re.IGNORECASE,
)
ENGAGEMENT_SCRIPT_RE = re.compile(
    r'<script\b[^>]*src=["\'][^"\']*assets/engagement\.js["\'][^>]*>',
    re.IGNORECASE,
)
LEAD_FORM_SCRIPT_RE = re.compile(
    r'<script\b[^>]*src=["\'][^"\']*assets/lead-form\.js["\'][^>]*>',
    re.IGNORECASE,
)
ENGAGEMENT_JS = ROOT / "assets" / "engagement.js"
LEAD_FORM_JS = ROOT / "assets" / "lead-form.js"
SITEMAP = ROOT / "sitemap.xml"
ROBOTS = ROOT / "robots.txt"

SITEMAP_HREFLANG_REQUIRED_GROUPS = [
    # Verified core service and homepage language clusters.
    [
        "https://rmusicrecords.com/arrangement-ua.html",
        "https://rmusicrecords.com/arrangement.html",
        "https://rmusicrecords.com/ru/arrangement.html",
        "https://rmusicrecords.com/de/arrangement.html",
        "https://rmusicrecords.com/fr/arrangement.html",
    ],
    [
        "https://rmusicrecords.com/mixing-ua.html",
        "https://rmusicrecords.com/mixing.html",
        "https://rmusicrecords.com/ru/mixing.html",
        "https://rmusicrecords.com/de/mixing.html",
        "https://rmusicrecords.com/fr/mixing.html",
    ],
    [
        "https://rmusicrecords.com/mastering-ua.html",
        "https://rmusicrecords.com/mastering.html",
        "https://rmusicrecords.com/ru/mastering.html",
        "https://rmusicrecords.com/de/mastering.html",
        "https://rmusicrecords.com/fr/mastering.html",
    ],
    [
        "https://rmusicrecords.com/",
        "https://rmusicrecords.com/index-en.html",
        "https://rmusicrecords.com/ru/index.html",
        "https://rmusicrecords.com/de/index.html",
        "https://rmusicrecords.com/fr/index.html",
    ],
]

CORE_SEO_REQUIRED_PATHS = {
    "index.html",
    "index-en.html",
    "mixing-ua.html",
    "mixing.html",
    "ru/mixing.html",
    "de/mixing.html",
    "fr/mixing.html",
    "mastering-ua.html",
    "arrangement-ua.html",
    "vocal-recording-ua.html",
    "suno-production-ua.html",
}

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonical = None
        self.title = ""
        self.description = None
        self.noindex = False
        self.refs = []
        self.alternates = []
        self.og = {}
        self.jsonld = []
        self._in_title = False
        self._in_jsonld = False
        self._jsonld_chunks = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title":
            self._in_title = True
        if tag == "meta":
            name = (attrs.get("name") or "").lower()
            prop = (attrs.get("property") or "").lower()
            if name == "description":
                self.description = attrs.get("content", "")
            if prop.startswith("og:"):
                self.og[prop] = (attrs.get("content") or "").strip()
            if name in ("robots", "googlebot") and "noindex" in (attrs.get("content") or "").lower():
                self.noindex = True
        if tag == "link" and "canonical" in (attrs.get("rel") or "").lower().split():
            self.canonical = attrs.get("href")
        if tag == "link" and "alternate" in (attrs.get("rel") or "").lower().split() and attrs.get("hreflang") and attrs.get("href"):
            self.alternates.append((attrs["hreflang"].lower(), attrs["href"]))
        if tag in ("a", "link") and attrs.get("href"):
            self.refs.append(attrs["href"])
        if tag in ("img", "script", "source", "iframe") and attrs.get("src"):
            self.refs.append(attrs["src"])
        if tag == "script" and (attrs.get("type") or "").split(";")[0].strip().lower() == "application/ld+json":
            self._in_jsonld = True
            self._jsonld_chunks = []

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
        if tag == "script" and self._in_jsonld:
            self.jsonld.append("".join(self._jsonld_chunks).strip())
            self._in_jsonld = False
            self._jsonld_chunks = []

    def handle_data(self, data):
        if self._in_title:
            self.title += data
        if self._in_jsonld:
            self._jsonld_chunks.append(data)

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

    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9", "xhtml": "http://www.w3.org/1999/xhtml"}
    urls = [node.text.strip() for node in tree.findall(".//sm:loc", ns) if node.text]
    if not urls:
        errors.append("Sitemap contains no URL entries")
    sitemap_alternates = {}
    for node in tree.findall(".//sm:url", ns):
        loc_node = node.find("sm:loc", ns)
        loc = loc_node.text.strip() if loc_node is not None and loc_node.text else "<unknown>"
        lastmod_nodes = node.findall("sm:lastmod", ns)
        if len(lastmod_nodes) != 1 or not lastmod_nodes[0].text or not lastmod_nodes[0].text.strip():
            errors.append(f"Sitemap URL must have exactly one non-empty lastmod: {loc}")
        else:
            raw_lastmod = lastmod_nodes[0].text.strip()
            try:
                parsed_lastmod = datetime.fromisoformat(raw_lastmod.replace("Z", "+00:00"))
            except ValueError:
                errors.append(f"Invalid sitemap lastmod: {loc}: {raw_lastmod!r}")
            else:
                if parsed_lastmod.date() > datetime.now(timezone.utc).date():
                    errors.append(f"Future sitemap lastmod: {loc}: {raw_lastmod}")

        if loc != "<unknown>":
            sitemap_alternates[loc] = {
                (link.attrib.get("hreflang", "").lower(), link.attrib.get("href", ""))
                for link in node.findall("xhtml:link", ns)
                if link.attrib.get("hreflang") and link.attrib.get("href")
            }


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
        if parser.og:
            if parser.og.get("og:url") and parser.og.get("og:url") != parser.canonical:
                errors.append(f"Open Graph URL mismatch: {page.relative_to(ROOT)} -> {parser.og.get('og:url')!r}; expected {parser.canonical!r}")
            og_image = parser.og.get("og:image", "")
            if og_image:
                image_url = urlsplit(og_image)
                if image_url.scheme != "https" or not image_url.netloc:
                    errors.append(f"Open Graph image must be an absolute HTTPS URL: {page.relative_to(ROOT)} -> {og_image!r}")
        if parser.noindex:
            errors.append(f"Sitemap page is marked noindex: {page.relative_to(ROOT)}")

    # Validate language alternates across all HTML documents.
    html_files = list(ROOT.rglob("*.html"))
    page_data = {}
    for page in html_files:
        parser = PageParser()
        try:
            html_content = page.read_text(encoding="utf-8")
            parser.feed(html_content)
        except (UnicodeDecodeError, OSError) as exc:
            errors.append(f"Cannot read HTML for hreflang check: {page.relative_to(ROOT)}: {exc}")
            continue
        source = page.relative_to(ROOT).as_posix()
        if len(GA4_SCRIPT_RE.findall(html_content)) != 1:
            errors.append("Expected exactly one GA4 loader for G-BRN5N11G4Y: " + source)
        if len(GA4_CONFIG_RE.findall(html_content)) != 1:
            errors.append("Expected exactly one GA4 config for G-BRN5N11G4Y: " + source)
        if len(ENGAGEMENT_SCRIPT_RE.findall(html_content)) != 1:
            errors.append("Expected exactly one GA4 engagement event script: " + source)
        if "data-lead-form" in html_content and len(LEAD_FORM_SCRIPT_RE.findall(html_content)) != 1:
            errors.append("Lead form is missing its single lead-form.js handler: " + source)
        if source in CORE_SEO_REQUIRED_PATHS:
            required_og = {"og:title", "og:description", "og:url", "og:image", "og:type"}
            missing_og = required_og - set(parser.og)
            if missing_og:
                errors.append(f"Core page missing required Open Graph metadata: {source} (missing {', '.join(sorted(missing_og))})")
            if not parser.jsonld:
                errors.append(f"Core page missing JSON-LD structured data: {source}")
        for index, payload in enumerate(parser.jsonld, start=1):
            try:
                json.loads(payload)
            except (json.JSONDecodeError, TypeError) as exc:
                errors.append(f"Invalid JSON-LD in {source}, script {index}: {exc}")
        page_data[page] = parser

    canonical_to_page = {
        parser.canonical: page
        for page, parser in page_data.items()
        if parser.canonical
    }
    for page, parser in page_data.items():
        source = page.relative_to(ROOT)
        seen_languages = set()
        for language, target_url in parser.alternates:
            if language in seen_languages:
                errors.append(f"Duplicate hreflang={language}: {source}")
            seen_languages.add(language)
            target = canonical_to_page.get(target_url)
            if target is None:
                errors.append(f"Hreflang target is missing or has no matching canonical: {source} -> {language} {target_url}")
                continue
            target_parser = page_data[target]
            if not any(href == parser.canonical for _, href in target_parser.alternates):
                errors.append(f"Non-reciprocal hreflang: {source} -> {target.relative_to(ROOT)} ({language})")

    # Verify sitemap hreflang for the checked core language clusters.
    for group in SITEMAP_HREFLANG_REQUIRED_GROUPS:
        for url in group:
            page = canonical_to_page.get(url)
            if page is None:
                errors.append(f"Missing HTML/canonical for required sitemap hreflang URL: {url}")
                continue
            expected = set(page_data[page].alternates)
            actual = sitemap_alternates.get(url, set())
            if expected != actual:
                missing = expected - actual
                extra = actual - expected
                errors.append(
                    f"Sitemap hreflang mismatch: {url} "
                    f"(missing {len(missing)}, extra {len(extra)})"
                )

    # Verify GA4 event scripts and expected custom events are present.
    if not ENGAGEMENT_JS.is_file():
        errors.append("Missing GA4 engagement event script: assets/engagement.js")
    else:
        engagement_content = ENGAGEMENT_JS.read_text(encoding="utf-8")
        for event_name in ("contact_click", "cta_click", "faq_open", "section_view", "scroll_75"):
            if not re.search(r'track\(\s*["\']' + event_name + r'["\']', engagement_content):
                errors.append("Missing GA4 engagement event " + event_name + ": assets/engagement.js")
        if not re.search(r'track\(\s*method\s*\+\s*["\']_click["\']\s*,', engagement_content):
            errors.append("Missing dynamic contact-method click tracking: assets/engagement.js")
        for method in ("whatsapp", "telegram", "instagram", "email", "phone"):
            if not re.search(r'method\s*=\s*["\']' + method + r'["\']', engagement_content):
                errors.append("Missing contact-method tracking for " + method + ": assets/engagement.js")

    if not LEAD_FORM_JS.is_file():
        errors.append("Missing project request form event script: assets/lead-form.js")
    else:
        lead_form_content = LEAD_FORM_JS.read_text(encoding="utf-8")
        for event_name in ("form_start", "form_submit", "generate_lead", "messenger_handoff_click"):
            if not re.search(r'gtag\(\s*["\']event["\']\s*,\s*["\']' + event_name + r'["\']', lead_form_content):
                errors.append("Missing GA4 lead-form event " + event_name + ": assets/lead-form.js")

    # Check internal links and local assets across every HTML document.
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
    print("PASS: sitemap URLs/lastmod, canonical/indexability, metadata, Open Graph, JSON-LD, hreflang, local links and assets.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
