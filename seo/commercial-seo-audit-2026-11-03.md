# Commercial SEO audit — 3 November 2026

Repository: `rmusicrecords7/r-music-records`  
Branch: `main`  
Scope: five-language service cluster (UA, EN, RU, DE, FR), sitemap, localized engineer profile pages, and internal links from the core service pages.

## Executive summary

The site has a substantial content footprint, but the main commercial weakness is uneven conversion readiness between language versions. Ukrainian and English service pages expose prices and clear project CTAs. Russian, German and French service pages did not consistently expose pricing; visible price/quote blocks have now been added to the four core service pages in those languages.

The site also has no audio files in the repository's assets directory. That means there is currently no embedded before/after audio portfolio on the service pages. This is a material trust and conversion gap for an audio-engineering business; it cannot be solved credibly with placeholder or invented audio.

## Findings and actions

### 1. Language and service-page coverage

The core commercial service set exists in all five languages:
- Mixing
- Mastering
- Arrangement
- Suno AI production
- Vocal recording

The UA and EN pages already had visible price panels on the main service pages. RU, DE and FR pages were shorter and lacked a clear price section on the four main service pages.

**Implemented:** added visible price/quote panels and direct messaging CTAs to:
- `ru/mixing.html`
- `ru/mastering.html`
- `ru/arrangement.html`
- `ru/suno-production.html`
- `de/mixing.html`
- `de/mastering.html`
- `de/arrangement.html`
- `de/suno-production.html`
- `fr/mixing.html`
- `fr/mastering.html`
- `fr/arrangement.html`
- `fr/suno-production.html`

Russian price figures use the existing UA price list. German and French pages display the existing international USD rates from the EN pages; they are explicitly labelled USD rather than converted into unverified EUR prices. Suno AI remains quote-based because scope depends on source files.

Vocal Recording remains quote-based; no fixed price was available in the current site content to publish safely.

### 2. Search-intent overlap / potential cannibalization

The following English-language landing pages overlap semantically with the general homepage and the core service pages:
- `online-music-production-worldwide.html`
- `online-music-production-us.html`
- `online-music-production-europe.html`

The Ukraine page `online-music-production-ukraine.html` also overlaps with the Ukrainian homepage and localized service pages, although its geographic intent is more specific.

This is a **potential** cannibalization issue, not proof that Google is currently splitting rankings. The pages should only remain separate indexable landing pages if each is made materially distinct: country-specific offer, currency/payment details, time-zone or workflow information, relevant proof/case studies, and unique FAQs. Do not create additional near-duplicate country pages until Search Console shows query demand and the page can provide genuinely local value. No pages were noindexed or redirected as part of this audit because current URL-level Search Console indexing/performance evidence was not available in the connected read-only data.

### 3. Internal linking

Reviewed root-relative internal links on the core service pages across UA, EN, RU, DE and FR, including the five main service types and language homepages. No broken root-relative targets were found in that reviewed service cluster.

The service pages cross-link to related services and blog content. The localized pricing sections now also give users a direct next step to Telegram (RU) or WhatsApp (DE/FR).

This was a focused audit of the commercial service cluster, not a crawl of every one of the site's 250+ HTML files. A full sitewide crawl should still be run after the next deployment.

### 4. Sitemap and profile-page discoverability

Before the change, `sitemap.xml` contained 244 unique URLs and every listed URL mapped to a file in the repository. Five public, indexable localized engineer-profile pages were missing from the sitemap:
- `about.html`
- `about-en.html`
- `ru/about.html`
- `de/about.html`
- `fr/about.html`

**Implemented:** added all five profile URLs to the sitemap with reciprocal language alternates and an `x-default` pointing to the English profile. Added `x-default` hreflang to each of the five profile pages as well.

The repository also contains `assets/page-template.html` and an old duplicate homepage-named HTML file. These were intentionally not added to the sitemap.

### 5. Technical SEO checks

- Core service pages have self-referencing canonical URLs.
- Core service pages expose localized hreflang alternates.
- The robots.txt allows crawling and references the sitemap.
- All sitemap URLs checked against the repository tree resolve to existing files.
- No broken root-relative internal link targets were found in the reviewed service-page set.
- Service pages include Service structured data in the UA/EN versions; validate structured data on all language variants in Google's Rich Results / Schema validators before relying on it.
- Sitemap entries increased from 244 to 249 after adding the five profile pages.

### 6. Main remaining conversion gap: proof of work

No MP3, WAV, OGG, M4A or FLAC files were present in the repository assets directory during this audit. The service pages therefore cannot yet show real audio comparisons.

**Required owner input:** provide cleared-to-publish examples for mixing, mastering, arrangement and Suno AI development. Ideally each example includes:
- a short original/before excerpt;
- the processed/after excerpt;
- genre and service performed;
- confirmation that publication is permitted.

Do not publish client audio without permission.

## Priority plan

1. **P0 — Completed in repository:** add visible prices/quote blocks and direct CTAs to RU/DE/FR core service pages.
2. **P0 — Completed in repository:** add all five localized engineer-profile pages to the sitemap and align their x-default hreflang.
3. **P1 — Owner input required:** add real, permission-cleared audio portfolio examples to service pages.
4. **P1 — Next SEO task:** differentiate the US, Europe and Worldwide landing pages or consolidate them after reviewing page-level Search Console queries and impressions.
5. **P1 — Measurement:** in GA4, mark only meaningful lead events (for example `contact_click` and `generate_lead`) as key events; do not count generic CTA clicks as leads.
6. **P2 — Validation after deployment:** run a full-site crawl for broken links, duplicate titles/descriptions, missing H1s, canonical/hreflang mismatches, and indexability; then compare URL Inspection and Search Console query data after Google reprocesses the sitemap.

## Important limitations

- This audit does not guarantee rankings, traffic or orders.
- Search Console URL Inspection and indexing status are not available through the connected read-only connector in this workflow.
- Search volume, keyword difficulty and CPC were not obtained from Google Keyword Planner or a paid SEO database. Keyword priorities should be validated against actual Search Console queries as data accumulates.
