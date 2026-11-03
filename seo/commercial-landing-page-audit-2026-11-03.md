# Commercial landing-page audit — 2026-11-03

Repository: rmusicrecords7/r-music-records
Scope: 20 priority service pages in five languages.
Method: inspect current title, meta description, canonical, H1, above-the-fold copy, FAQ and related-service links from repository HTML. This is a focused commercial-page audit, not a complete crawl of all site URLs.

## Executive findings

- English / Ukrainian core service pages already have relatively complete commercial structure: a clear hero, service explanation, workflow, pricing, FAQ, related-service links and direct contact CTAs.
- German / French pages have native commercial wording and clear remote-service positioning. Continue to validate FAQ, price visibility and link completeness across all four service pages in each language.
- Russian service pages are inconsistent. ru/arrangement.html and ru/suno-production.html use an editorial/article-style layout, show a breadcrumb into the blog, and their first-screen CTA is less direct than the main commercial pages. These two pages should be rebuilt to match the current service-page system.
- Russian mixing/mastering titles and descriptions claim Kyiv / a recording studio on Podil while the hero describes remote service. Avoid conflating online mixing/mastering with in-person recording; keep any local studio statement on pages where it is factually relevant.
- Ukrainian mixing/mastering pages correctly communicate remote delivery in the hero. Their title tags can retain Kyiv as a local modifier, but copy must not imply that online mixing requires a studio visit.
- The H1s on EN and UA mixing/mastering pages are more benefit-led than query-led. Use a natural service phrase in the H1 while retaining the value proposition in the lead copy.
- No search-volume, CPC or SEO-difficulty values are inferred in this audit. Those require Keyword Planner data segmented by country and language.

## Page-by-page action register

| Page | Existing strength | High-confidence next action |
|---|---|---|
| /mixing.html | Online service, vocal + multitrack scope, US/UK/Canada targeting, price, FAQ, related services, WhatsApp CTA | Put “online music mixing” in H1; retain specific lead copy and price/quote CTA |
| /mastering.html | Clear finished-stereo-mix scope, price, FAQ, related links | Put “online music mastering” in H1; preserve distinction from mixing |
| /arrangement.html | Clear remote arrangement offer, input-file examples, scope and price | Put “online music arrangement” in H1; retain song-arranger variants in body |
| /suno-production.html | Distinct offer; accurately limits work to available source files | Include “Suno AI song improvement” in H1; retain transparent source-file limitations |
| /mixing-ua.html | Strong hero, prices, FAQ, related service links, Telegram CTA | H1 should include “зведення музики”; keep Kyiv modifier in title only if current local targeting remains accurate |
| /mastering-ua.html | Clear finished-mix scope, starting price, FAQ and links | H1 should include “мастеринг музики”; retain local modifier in title only if accurate |
| /arrangement-ua.html | Strong service scope and online workflow | Use “аранжування музики” naturally in H1; make CTA consistently lead to Telegram |
| /suno-production-ua.html | Clear source-file constraints and service scope | Use “доопрацювання треків Suno AI” in H1; keep offer separate from generic arrangement |
| /de/mixing.html | Native commercial phrase “Online Mixing”, clear remote workflow | Keep query phrase in H1; check that pricing, FAQ and direct WhatsApp CTA remain visible |
| /de/mastering.html | Clear distinction between mastering and mixing | Keep “Online Mastering” in H1; preserve remote-service language |
| /de/arrangement.html | Natural “Musik arrangieren lassen” phrase and input-file scope | Keep phrase in H1; verify visible price and FAQ |
| /de/suno-production.html | Clear Suno-specific service scope | Strengthen H1 around improving/developing a Suno AI song without promising stem-level work unless supplied |
| /fr/mixing.html | Natural “mixage audio en ligne” and “mixage vocal” wording | Keep primary phrase in H1; retain multipiste and file-submission wording |
| /fr/mastering.html | Natural online mastering phrase and scope | Keep “mastering audio en ligne” in H1; retain distinction from mixing |
| /fr/arrangement.html | Natural arrangement service wording | Keep “arrangement musical en ligne” in H1; preserve “faire arranger une chanson” in copy |
| /fr/suno-production.html | Clear Suno AI development scope | Add natural “améliorer un morceau Suno AI” wording to visible copy |
| /ru/mixing.html | Remote mixing service and direct Telegram/Instagram CTA | Remove unsupported/ambiguous studio-location claim from mixing title/description; clarify online service |
| /ru/mastering.html | Clear online mastering description, FAQ and related links | Remove unsupported/ambiguous studio-location claim from mastering title/description; clarify finished stereo mix |
| /ru/arrangement.html | Has FAQ and a visible starting price | Rebuild from editorial layout to commercial service layout; fix blog breadcrumb; move primary CTA above fold; connect related services |
| /ru/suno-production.html | Has FAQ and honest source-file limitations | Rebuild from editorial layout to commercial service layout; fix blog breadcrumb; make Telegram CTA primary |

## Required technical validation

1. Confirm canonical URL equals the page's preferred HTTPS URL.
2. Confirm hreflang set is reciprocal and points to equivalent language pages.
3. Confirm one unique title, description and H1 per URL.
4. Confirm Service schema is accurate, valid and consistent with visible offer and price.
5. Confirm FAQ structured data only mirrors visible FAQ text and complies with current Google eligibility policies.
6. Check all internal links return 200 and no language switcher points to the wrong service URL.
7. Confirm mobile hero CTA is visible without excessive scrolling.
8. Verify that the price displayed in page copy matches the actual current price list.

## Data needed to complete prioritization

Use Keyword Planner separately for:
- Ukraine / Ukrainian
- Ukraine / Russian
- United States / English
- United Kingdom / English
- Canada / English
- Germany / German
- France / French

Export average monthly searches, monthly trend, competition and top-of-page bid ranges. Do not merge countries before recording each market separately. Search-volume data is rounded and depends on selected location, language and network settings.

## Current status

This audit identifies the exact high-priority page issues and implementation order. It does not claim that a page has been changed or deployed unless a corresponding GitHub commit and successful Pages workflow are verified.
