# Technical SEO audit — 2026-11-03

## Scope and method

Reviewed the repository source on `main`, the sitemap and robots file, all 25 primary service landing pages across five language versions, and the five language homepages plus five About pages. Checked local file references in those 35 pages against the repository file tree. This is a source-level audit; it does not replace a fresh external crawl or Google Search Console URL Inspection.

## Confirmed structure

- Repository contains 251 HTML files.
- `sitemap.xml` contains 249 unique URLs.
- Every sitemap URL maps to an existing HTML file in the repository.
- Two HTML files are intentionally outside the sitemap: the legacy titled HTML file in the repository root and `assets/page-template.html`.
- `robots.txt` allows crawling and declares `https://rmusicrecords.com/sitemap.xml`.
- Sitemap hreflang: 160 URL entries contain six alternate links (`uk`, `en`, `ru`, `de`, `fr`, `x-default`); all alternate targets are present in the sitemap. The remaining 89 entries have no sitemap-level alternates. HTML-head hreflang is also present on sampled pages from this set, so sitemap-level absence alone is not evidence of a broken language group.

## Primary commercial landing pages

Checked five service groups across five languages (25 URLs):
- Mixing
- Mastering
- Arrangement
- Suno Production
- Vocal Recording

For these pages:
- one canonical tag per page, pointing to that page's own canonical URL;
- six language alternates per page;
- language targets are consistent within the checked groups;
- no missing local file references were found in the checked page links, scripts, stylesheets and images.

The five Vocal Recording pages also have six reciprocal language alternatives and self-referencing canonicals.

## Additional pages checked

The five language homepages and five About pages were checked for canonical tags, hreflang declarations and local references. No missing local file references were found.

## Changes committed to main

### Social preview metadata

Added Open Graph tags (`og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`) and Twitter Card metadata to the 12 RU/DE/FR versions of the four original service groups:
- `ru/de/fr/mixing.html`
- `ru/de/fr/mastering.html`
- `ru/de/fr/arrangement.html`
- `ru/de/fr/suno-production.html`

Added the same metadata to the five Vocal Recording pages:
- `vocal-recording-ua.html`
- `vocal-recording.html`
- `ru/vocal-recording.html`
- `de/vocal-recording.html`
- `fr/vocal-recording.html`

Added Twitter Card tags to the eight UA/EN versions of Mixing, Mastering, Arrangement and Suno Production, which already had Open Graph metadata.

Added Open Graph and Twitter Card metadata to:
- `ru/about.html`
- `de/about.html`
- `fr/about.html`

Metadata values are based on each page's existing title, meta description and canonical URL. No service copy, canonical URL or hreflang URL was changed in these commits.

### Homepage canonical-link cleanup

Two internal language-switcher links previously pointed to `/index.html`, which is canonicalized to `/`. They were changed to point directly to `/`:
- `index.html`
- `index-en.html`

## Ahrefs warnings: interpretation and remaining checks

The 3 November 2026 Ahrefs overview showed 3 redirects. The previously inspected redirects were the expected HTTP/www host variants redirecting to `https://rmusicrecords.com/`; these are canonical host normalization, not redirect loops.

The Ahrefs hreflang issue rows say that the crawler did not crawl every page in the language group. The rows do not establish that Google failed to index those pages. The checked source pages have the expected alternate declarations.

The following Ahrefs warnings still require a fresh crawl and/or the detailed issue export to identify exact URLs and validate causes:
- 16 titles too long;
- 3 meta descriptions too short and 1 too long;
- 2 slow pages and 2 slow responses to AI crawlers;
- 2 structured-data validation errors;
- remaining Open Graph and Twitter Card issue counts after the source changes.

No speculative changes were made for these warnings.

## Deployment and verification status

The changes are committed to GitHub branch `main`. Public deployment was not independently confirmed during this audit because the public-site fetch returned cache/access errors. Re-run Ahrefs Site Audit after GitHub Pages has deployed the latest commit. Use Google Search Console URL Inspection for Google indexing status; Ahrefs crawl/indexability status is not a substitute.

## Next stage

After a fresh crawl, resolve any remaining exact technical findings. Then proceed with title/description refinement, H1 and commercial-section improvements, and internal linking according to the keyword-to-page map.
