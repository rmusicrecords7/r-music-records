# Organic search query map — 2026-11-03

## Scope and limitations
Source: Google Search Console data available through the connected read-only reporting connector, property `sc-domain:rmusicrecords.com`, Web search, last 90 days (2026-08-05 to 2026-11-03).
Returned sample: 17 query/page/country/date rows, 1 click and 21 impressions in total. This is a very small sample, not a complete keyword-demand or market-size study. Search Console does not provide keyword search volume or competition/difficulty. Do not interpret the following average positions as stable rankings.

## Observed query-to-page signals

| Query | Observed landing page | Observed signal | Recommended target |
|---|---|---:|---|
| `suno ai` | `/suno-production.html` | 1 impression, 1 click, position 23, US | Keep the English Suno service page as the target; strengthen related informational-to-service links. |
| `studio de mixage en ligne` | `/fr/mixing.html` | 4 impressions, positions observed 30–77, France | Keep the French mixing page as the target. Its title/H1/description were aligned to this query on 2026-11-03. Recheck after recrawl. |
| `mixing and mastering services online` | `/mastering.html` | 1 impression, position 113, Ukraine | Review whether the query should target a combined mixing/mastering page or the mixing page. Avoid forcing it onto mastering alone. |
| `spotify lufs`, `lufs for spotify` | `/spotify-loudness-true-peak.html` | 2 impressions, positions 77–84, US | Keep as informational content and route readers to the mastering service. |
| `mixing books 2024/2025`, `audio engineering books` | `/top-3-books-for-mixing.html` | 7 impressions across several countries; positions 10–27 | Informational traffic, not a direct commercial keyword. Maintain a relevant link to mixing services. |
| `music records`, `музичний магазин київ` | Homepage | 3 impressions across Ukraine/Russia | These are not clear service-intent queries. Do not optimize the homepage around them. |

## Commercial page map

- Mixing: `/mixing-ua.html`, `/mixing.html`; language equivalents under `/ru/`, `/de/`, `/fr/`.
- Mastering: `/mastering-ua.html`, `/mastering.html`; language equivalents.
- Arrangement: `/arrangement-ua.html`, `/arrangement.html`; language equivalents.
- Suno AI improvement: `/suno-production-ua.html`, `/suno-production.html`; language equivalents.
- In-person vocal recording in Kyiv: `/vocal-recording-ua.html`. This is a local-intent page, separate from remote online orders.

## Internal-link audit performed
- The Spotify loudness article links contextually to the mastering service.
- The Ukrainian autotune/vocal-correction article links to the mixing service and related services.
- The Suno AI service page links to mixing, mastering and arrangement.
- The mixing-books article links to mixing, mastering and arrangement.
- The Kyiv vocal-recording page was expanded on 2026-11-03 with preparation guidance, session scope, booking conditions, FAQs, and links to mixing, mastering and arrangement.

## Next validation
1. Recheck the French mixing query/page pair after Google recrawls the updated page.
2. Inspect Search Console page indexing for the five commercial targets; connector data does not expose reliable URL-level indexing status.
3. Obtain a proper keyword-volume and competition dataset (e.g. Keyword Planner, Ahrefs, Semrush or SE Ranking) before making claims about demand.
4. In GA4, mark the existing `contact_click`, `telegram_click`, `whatsapp_click` and `email_click` events as key events, after confirming they are arriving in Realtime/DebugView. The current connector is read-only and cannot change this setting.
5. Do not treat Direct, AI Assistant, Social, Referral or suspected bot-like sessions as organic Google Search traffic.
