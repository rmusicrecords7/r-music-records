# R Music Records — commercial keyword architecture (draft)
Date: 2026-11-03
Status: seed map for validation; no search-volume figures are claimed.

## What the current data says

Google Search Console, last 28 days (connected property `sc-domain:rmusicrecords.com`):
- 14 query/page/country/device rows returned.
- Only one organic click in the returned rows: `suno ai` → `/suno-production.html`, United States, position 23.
- Commercial visibility is currently extremely thin: `mixing and mastering services online` → `/mastering.html`, 1 impression, position 113; `studio de mixage en ligne` → `/fr/mixing.html`, 4 impressions, position 65.
- Most returned queries are informational (mixing books, LUFS) or unrelated/ambiguous (e.g. "music records").
- These rows are a small early sample, not a full measure of total search demand.

Google Analytics 4, last 28 days:
- 126 sessions, 177 page views.
- 97 sessions attributed to direct / none; 12 to chatgpt.com / ai-assistant; only 2 to google / organic.
- 99 sessions landed on `/`; 31 on `/index-en.html`.
- Recorded events: 2 `contact_click`, 2 `whatsapp_click`, 3 `email_click`, 8 `cta_click`; no `generate_lead` or `form_submit` rows in this report.
- This does not prove every direct visit is low quality or bot traffic, but attribution is heavily concentrated in direct/unknown and organic acquisition is currently very small.

## Page ownership: one primary intent per URL

Do not make multiple URLs target the same main query. Each page should own a distinct search intent.

| Search intent / cluster | Primary page | Main target terms (seed phrases) |
|---|---|---|
| UA — music mixing | `/mixing-ua.html` | зведення музики; замовити зведення; зведення пісні; зведення треку; зведення вокалу; зведення музики онлайн; зведення музики Київ |
| UA — mastering | `/mastering-ua.html` | мастеринг музики; замовити мастеринг; мастеринг пісні; мастеринг треку; мастеринг онлайн; мастеринг музики Київ |
| UA — arrangement | `/arrangement-ua.html` | аранжування музики; замовити аранжування; аранжування пісні; створення аранжування; аранжувальник Київ |
| UA — vocal recording / studio | `/vocal-recording-ua.html` | запис вокалу Київ; запис пісні Київ; студія звукозапису Київ; запис вокалу в студії |
| UA — Suno track development | `/suno-production-ua.html` | доопрацювання Suno AI; покращити трек Suno; обробка пісні Suno; Suno AI продакшн |
| EN — music mixing | `/mixing.html` | online music mixing service; hire a mixing engineer; professional song mixing; vocal mixing service; multitrack mixing; rap vocal mixing |
| EN — mastering | `/mastering.html` | online mastering service; professional music mastering; song mastering online; hire a mastering engineer |
| EN — arrangement | `/arrangement.html` | online music arrangement service; hire a music arranger; song arrangement service; arrange a song |
| EN — vocal recording | `/vocal-recording.html` | vocal recording service; online vocal recording workflow; professional vocal recording (only where offer genuinely matches query) |
| EN — Suno | `/suno-production.html` | Suno AI song improvement; Suno AI music production; improve a Suno song; fix AI-generated vocals |
| RU — mixing | `/ru/mixing.html` | сведение музыки; заказать сведение; сведение песни; сведение вокала; сведение трека |
| RU — mastering | `/ru/mastering.html` | мастеринг музыки; заказать мастеринг; мастеринг песни; мастеринг онлайн |
| RU — arrangement | `/ru/arrangement.html` | аранжировка песни; заказать аранжировку; создание аранжировки |
| RU — vocal recording / studio | `/ru/vocal-recording.html` | запись вокала Киев; студия звукозаписи Киев; запись песни Киев |
| RU — Suno | `/ru/suno-production.html` | доработка Suno AI; улучшить трек Suno; обработка трека Suno |
| DE — mixing | `/de/mixing.html` | Musik mischen lassen; Online Mixing; Vocal Mixing; Song mischen lassen |
| DE — mastering | `/de/mastering.html` | Online Mastering; Musik-Mastering; Song mastern lassen |
| DE — arrangement | `/de/arrangement.html` | Musik arrangieren lassen; Song Arrangement; Musikarrangement erstellen |
| DE — Suno | `/de/suno-production.html` | Suno AI Song verbessern; Suno Song professionell bearbeiten |
| FR — mixing | `/fr/mixing.html` | mixage audio en ligne; mixage vocal; faire mixer une chanson; ingénieur mixage |
| FR — mastering | `/fr/mastering.html` | mastering audio en ligne; mastering chanson; ingénieur mastering |
| FR — arrangement | `/fr/arrangement.html` | arrangement musical en ligne; faire arranger une chanson; arrangeur musical |
| FR — Suno | `/fr/suno-production.html` | améliorer une chanson Suno; production musicale Suno AI |

These are initial language-specific seed phrases, not measured-volume claims. Search language and location targeting must be validated separately in Keyword Planner.

## Geographic targeting

- Ukrainian pages: Ukraine, with Kyiv local intent on pages where in-person studio visits are actually available.
- Russian pages: Russian-language searches in Ukraine / Russian-speaking users; do not assume targeting Russia as a market.
- English pages: test United States, United Kingdom and Canada as separate Keyword Planner locations. Do not create country pages yet.
- German page: begin with Germany; test Austria and Switzerland separately before adding localized pages.
- French page: begin with France; test Belgium and French-speaking Switzerland separately before adding localized pages.

Do not use one generic page to claim a local physical studio in a country where no studio exists. Remote availability and local in-person availability must be described accurately.

## Supporting informational clusters

Create articles only when they answer a real question and link naturally to one relevant service page.

| Topic cluster | Example article intent | Link to |
|---|---|---|
| Preparing audio for mixing | how to export stems; what files to send to a mixing engineer | Mixing |
| Mixing process | vocal mixing chain; rap vocal mixing; common mix problems | Mixing |
| Mastering | mixing vs mastering; mastering loudness; true peak and streaming | Mastering |
| Arrangement | what an arranger does; how to prepare a demo for arrangement | Arrangement |
| Suno AI | Suno rights; AI vocal artefacts; how to improve a Suno track; Suno vs Udio | Suno |
| Vocal recording | how to prepare for a vocal session; home recording mistakes | Vocal Recording |

Every article should include contextual links to the relevant service page near the useful answer and at the end. Avoid adding the same generic sitewide anchor text to every page.

## Internal linking architecture

1. Language homepage → the five service pages in that language.
2. Each service page → one or two genuinely related services (e.g. Mixing → Mastering; Arrangement → Mixing; Suno → Mixing / Mastering).
3. Each informational article → exactly the most relevant service page, plus a small number of closely related articles.
4. Engineer profile → core services and contact path.
5. Breadcrumbs on deeper pages, with valid structured data where appropriate.
6. Keep language links reciprocal and point each hreflang alternate to the equivalent page, not merely to a homepage.

## Negative / low-value query patterns to review

Do not build pages for these unless the service is actually offered:
- free mixing / free mastering / free beats;
- mixing software, mixing plugins, mixing books, tutorials, courses;
- audio engineering jobs, salary, degree, school;
- music store, record shop, vinyl records;
- music distribution, record label, publishing, unless separately offered;
- studio rental, rehearsal room, equipment rental, unless separately offered.

For paid search, use negative keywords for irrelevant research/education intent when it appears in the search terms report. For SEO, do not try to rank service pages for those unrelated intents.

## Keyword validation workflow

1. In Google Ads Keyword Planner, set one country and one language at a time; enter the relevant seed phrases and the matching service URL.
2. Export average monthly searches, 12-month trend, competition and top-of-page bid estimates.
3. Separate high-intent modifiers (`hire`, `service`, `price`, `cost`, ` заказать`, `замовити`, `lassen`, `faire`) from informational queries.
4. Compare the keyword ideas with Search Console query/page data every 28 days.
5. Prioritize by commercial intent + realistic competition + page relevance, not by search volume alone.

Google's documentation says Keyword Planner can generate ideas from terms or a website and provide search-volume and bid estimates, segmented by location and language: https://support.google.com/google-ads/answer/7337243

## Technical / commercial tasks still open

### P0
- Confirm that the new sitemap submission is reflected in Search Console. The latest connected Search Console data still reports the old submission date (2026-10-23) and 239 submitted URLs; the repository sitemap now contains 249 URLs. This may be connector/reporting delay, but it is not yet verified.
- Confirm the latest deployed pages load correctly and that price panels are visible on mobile and desktop.
- Check that each service page's primary CTA works and that GA4 records the correct event.
- Mark only meaningful lead events as GA4 key events after verifying the event fires; generic `cta_click` should not be a lead.
- Verify whether `generate_lead` fires on successful form handoff; current last-28-day GA4 report did not return it.

### P1
- Full site crawl: duplicate/missing titles and descriptions, H1s, canonical/hreflang reciprocity, broken internal links, orphan pages, redirects, noindex, page depth and sitemap coverage.
- Add unique commercial copy to service pages based on each cluster; avoid keyword stuffing and repeating the same paragraph across languages.
- Improve homepage routing so visitors immediately reach the correct service and language.
- Add FAQ content based on real customer objections and implement valid FAQ/Service/LocalBusiness structured data only where it accurately reflects the page and business.
- Validate page performance and mobile Core Web Vitals.

### P2
- Local SEO / Google Business Profile for Kyiv, if the studio address and in-person availability remain current; consistent name, address, phone, service categories, photos and genuine customer reviews.
- Bing Webmaster Tools and Bing indexing as a secondary search channel.
- Search Ads landing pages and tightly controlled Google Search campaigns only after keyword/bid research; no campaign should be launched without an agreed budget.
- Revisit portfolio after the one-week pause, using only audio that is cleared for publication.

## What not to do

- Do not publish dozens of near-duplicate city/country pages.
- Do not add keywords unnaturally to every paragraph, image alt or footer.
- Do not use fake testimonials, fake client logos, fabricated case studies or invented audio.
- Do not expect schema markup, sitemap submission or AI-search markup to create rankings by themselves.
- Do not judge success by total sessions alone; measure qualified contact actions and paid orders.

## Measurement targets

Track monthly:
- Google organic clicks and impressions by commercial query cluster;
- organic landing-page sessions by language;
- contact_click / whatsapp_click / telegram_click / email_click;
- successful generate_lead / form handoff;
- qualified inquiries and paid orders, recorded separately from analytics events.
