# Commercial SEO keyword map and competitor review
Updated: 2026-11-03
Property: https://rmusicrecords.com/

## Scope and evidence limits
This is an intent-led keyword map based on current Search Console query/page rows and live competitor page language. Search volumes and keyword difficulty have not been supplied by Google Keyword Planner, Ahrefs, Semrush or another paid keyword database; therefore no volume, CPC or difficulty numbers are invented. Validate exact demand by country in Google Keyword Planner before building country-specific URLs.

## Priority landing-page map

| Market | Service page | Primary phrase | Secondary phrases | Intent |
|---|---|---|---|---|
| US | /mixing.html | online music mixing services | online mixing engineer; professional vocal mixing; multitrack mixing service; music mixing engineer for independent artists | Hire an engineer |
| UK | /mixing.html | online mixing services | online music mixing; vocal mixing engineer; mix my song; remote mixing engineer | Hire an engineer |
| Canada | /mixing.html | online music mixing | music mixing engineer; vocal mixing services; remote song mixing | Hire an engineer |
| US / UK / CA | /mastering.html | online mastering service | professional music mastering; mastering engineer online; mastering for Spotify / Apple Music | Hire an engineer |
| US / UK / CA | /arrangement.html | online music arrangement services | song arrangement service; music arranger; arrange my song; song development | Hire a producer |
| Ukraine | /mixing-ua.html | зведення музики Київ | зведення вокалу; зведення мультитреку; зведення пісні; зведення музики онлайн | Замовити зведення |
| Ukraine | /mastering-ua.html | мастеринг Київ | мастеринг музики; мастеринг треку; мастеринг пісні; онлайн мастеринг | Замовити мастеринг |
| Ukraine | /arrangement-ua.html | аранжування музики | замовити аранжування; створення аранжування пісні; доопрацювання аранжування | Замовити аранжування |
| Ukraine | /vocal-recording-ua.html | запис вокалу Київ | студія звукозапису Київ; запис пісні; запис вокалу в студії | Запис / бронювання |
| Germany | /de/mixing.html | Online Mixing für Songs | Musik mischen lassen; Vocal Mixing; Mixing Engineer; Online-Musikmixing | Auftrag vergeben |
| Germany | /de/mastering.html | Online Mastering | Musik-Mastering; Song mastern lassen; Mastering für Streaming | Auftrag vergeben |
| Germany | /de/arrangement.html | Musik arrangieren lassen | Musikarrangement online; Song arrangieren; Arrangement erstellen lassen | Auftrag vergeben |
| France | /fr/mixing.html | mixage audio en ligne | mixage vocal; faire mixer une chanson; mixage multipiste; ingénieur du son mixage | Commander un mix |
| France | /fr/mastering.html | mastering audio en ligne | mastering musique; mastering chanson; ingénieur mastering | Commander un master |
| France | /fr/arrangement.html | arrangement musical en ligne | faire arranger une chanson; création d’arrangement; arranger une musique | Commander un arrangement |

## Geographic strategy: US, UK, Canada
Do not create near-duplicate doorway pages for each country yet. Keep one strong English commercial URL per service while the site has very little search demand. State clearly that the service is remote and accepts projects from the US, UK and Canada; show the actual currency and payment method accepted; add country-specific testimonials or project examples only when genuine. Create separate country pages only when there is unique local proof, pricing, offer, or a real local partnership.

US phrase variants to test: "online mixing engineer", "professional vocal mixing", "music mixing services", "online mastering service", "song arrangement services".
UK phrase variants to test: "online mixing", "vocal mixing engineer", "mix my song", "music mastering", "song arrangement".
Canada phrase variants to test: "online music mixing", "music mixing engineer", "vocal mixing services", "online mastering", "music arrangement services".

## Ukraine: local vs remote intent
Use Kyiv location language only on Ukrainian and Russian pages. Do not describe the service as located in Podil unless that is still the correct public-facing location. Keep remote mixing/mastering/arrangement distinct from in-person vocal recording. Avoid making the English, German or French pages appear to be local studios in those countries.

## German and French localization
German commercial terms should be idiomatic rather than literal translations: "Musik mischen lassen", "Online Mixing für Songs", "Vocal Mixing", "Musik arrangieren lassen", "Song mastern lassen".
French terms should reflect service searches: "mixage audio en ligne", "mixage vocal", "faire mixer une chanson", "mastering audio en ligne", "faire arranger une chanson".
The DE/FR page title, H1, meta description and first visible paragraph should agree on one main intent per page. Keep the visible FAQ content specific to files, revisions, turnaround and what the service includes.

## Competitor observations from public pages
- US/international: Mix and Master My Song foregrounds "mixing and mastering services", an engineer-led offer, sample work, revisions, turnaround, prices and international remote delivery. Major Mixing leads with engineer credentials, project proof, package pricing and independent-artist positioning.
- UK: Starcity Studios uses "Online Mixing" and explains remote file submission, stems, vocal editing, EQ, dynamics, automation and WAV delivery. Choisez Studio combines London + online intent and clearly explains vocal tuning, revisions, genre fit, GBP pricing and deliverables.
- Canada: Headroom Labs uses a clear service breakdown for mixing and mastering, describes stems and technical deliverables, and gives a project submission path.
- France: MixEnLigne and New Wave Studio foreground "mixage", "mixage voix", packages, revisions, turnaround, clear price and a low-friction test offer.
- Ukraine/Kyiv: Hollywood Studio, NEWWAVE, Symbios and IL.BEATS show the local vocabulary "студія звукозапису", "запис вокалу", "зведення", "мастеринг", "аранжування"; many foreground local studio proof, prices, portfolios and service packages.

## Search Console baseline from connected property
The latest 28-day connector pull returned 13 query/page/country rows. Examples:
- "mixing and mastering services online" -> /mastering.html, position 113, 1 impression.
- "studio de mixage en ligne" -> /fr/mixing.html, position 65, 4 impressions.
- "suno ai" -> /suno-production.html, United States, 1 click / 1 impression, position 23.
- Ukrainian target phrases were not present in the returned query rows.
This is too little data to estimate stable rankings or monthly search volume. It does show the English and French commercial pages need better relevance and authority; it does not prove demand is absent.

## GA4 event audit
The site code already sends:
- contact_click with contact_method
- whatsapp_click, telegram_click, instagram_click, email_click, phone_click
- cta_click
- form_start
- form_submit (when the project request form is submitted)
- messenger_handoff_click
The latest 28-day GA4 pull showed contact_click=2, whatsapp_click=2, email_click=3, cta_click=8; no form_submit or instagram_click/telegram_click rows appeared in that pull. Treat these as observed event counts, not confirmed customer leads. A messenger handoff is not proof that the user sent the message.
GA4 connector access is read-only in this workflow. Mark contact_click and form_submit as key events in GA4 Admin > Data display > Events (or Key events), then validate in DebugView/Realtime. Do not mark generic click or cta_click as key events because they include non-lead actions.

## Work completed in this update
- Refined English mixing, mastering and arrangement page metadata and first-screen copy for online-service intent in US, UK and Canada.
- Replaced obsolete "Podil" claims in Ukrainian mixing/arrangement metadata with Kyiv-wide wording.
- Updated German and French service titles, descriptions, H1s and first-screen copy with native commercial phrases.
- Kept country-specific landing pages out of scope until there is enough unique proof and data to justify them.

## Next validation
1. Use Keyword Planner with location filters US, UK, Canada, Germany, France and Ukraine; export monthly searches, competition and bid ranges.
2. Request indexing for the updated URLs in Search Console after deployment.
3. Check URL Inspection for canonical selected by Google and crawled/indexed state.
4. In GA4 DebugView, test WhatsApp, Instagram, Telegram and form handoff events separately.
5. Review GSC query/page/country data after 28 days; compare non-branded impressions and commercial landing-page clicks.
