# R Music Records — final commercial keyword-to-page map
Date: 2026-11-03
Repository: rmusicrecords7/r-music-records
Status: operational map v1.0 — intent and URL ownership are fixed; search volumes/CPC/KD remain unverified until Keyword Planner export.

## Decision rules

1. One dominant commercial intent per landing page. Variants with the same intent belong on that page; do not create near-duplicate pages for every synonym.
2. Country assignment is a targeting hypothesis, not a claim that the page currently ranks there.
3. Search Console baseline is weak: last 28 days contained only one click in the returned query rows, for "suno ai" → /suno-production.html (US, position ~23). The commercial query sample is too small to infer demand or stable positions.
4. Exact monthly volume, CPC and keyword competition are intentionally blank until measured in Google Ads Keyword Planner for each country and language.
5. No portfolio task is included in this phase.

## Final URL ownership map

| Priority | Query cluster / primary phrase | Secondary variants to cover naturally | Target URL | Language | Country / market | Intent |
|---|---|---|---|---|---|---|
| P1 | online music mixing service | online mixing engineer; hire a mixing engineer; professional song mixing; mix my song; remote music mixing | /mixing.html | EN | US, UK, Canada (validate separately) | Hire an engineer / request a quote |
| P1 | online mastering service | professional music mastering; song mastering online; hire a mastering engineer; mastering for Spotify | /mastering.html | EN | US, UK, Canada | Buy mastering / request a quote |
| P1 | online music arrangement service | song arrangement service; hire a music arranger; arrange my song; music arrangement for artists | /arrangement.html | EN | US, UK, Canada | Hire an arranger / producer |
| P1 | Suno AI song improvement | improve a Suno song; professional Suno editing; fix AI-generated vocals; Suno AI music production | /suno-production.html | EN | US, UK, Canada; test English-speaking global demand | Improve an existing AI-generated track |
| P1 | зведення музики | замовити зведення; зведення пісні; зведення треку; зведення вокалу; зведення онлайн | /mixing-ua.html | UK | Ukraine | Замовити зведення |
| P1 | мастеринг музики | замовити мастеринг; мастеринг пісні; мастеринг треку; мастеринг онлайн | /mastering-ua.html | UK | Ukraine | Замовити мастеринг |
| P1 | аранжування музики | замовити аранжування; створення аранжування пісні; аранжувальник; аранжування під вокал | /arrangement-ua.html | UK | Ukraine | Замовити аранжування |
| P1 | доопрацювання Suno AI | покращити трек Suno; доопрацювати пісню Suno; перезбірка аранжування Suno; обробка вокалу Suno | /suno-production-ua.html | UK | Ukraine | Замовити професійне доопрацювання AI-треку |
| P2 | запис вокалу Київ | студія звукозапису Київ; запис пісні Київ; запис вокалу в студії | /vocal-recording-ua.html | UK | Kyiv, Ukraine only if current visitor location and in-person recording are confirmed | Find/book a local recording studio |
| P1 | сведение музыки | заказать сведение; сведение песни; сведение трека; сведение вокала; онлайн сведение | /ru/mixing.html | RU | Russian-speaking users in Ukraine; do not assume Russia | Заказать сведение |
| P1 | мастеринг музыки | заказать мастеринг; мастеринг песни; мастеринг трека; онлайн мастеринг | /ru/mastering.html | RU | Russian-speaking users in Ukraine | Заказать мастеринг |
| P1 | аранжировка песни | заказать аранжировку; создание аранжировки; аранжировщик онлайн | /ru/arrangement.html | RU | Russian-speaking users in Ukraine | Заказать аранжировку |
| P1 | доработка Suno AI | улучшить трек Suno; доработка песни Suno; обработка AI-вокала | /ru/suno-production.html | RU | Russian-speaking users in Ukraine | Заказать доработку AI-трека |
| P2 | запись вокала Киев | студия звукозаписи Киев; запись песни в студии | /ru/vocal-recording.html | RU | Kyiv, Ukraine only if current visitor location and in-person recording are confirmed | Найти / забронировать студию |
| P1 | Musik mischen lassen | Online Mixing; Song mischen lassen; Vocal Mixing; Mixing Engineer; Musikmix online | /de/mixing.html | DE | Germany first; Austria/Switzerland only after separate demand validation | Dienstleistung beauftragen |
| P1 | Online Mastering | Song mastern lassen; Musik-Mastering; Mastering Engineer; Mastering für Streaming | /de/mastering.html | DE | Germany first | Mastering beauftragen |
| P1 | Musik arrangieren lassen | Song arrangieren lassen; Musikarrangement erstellen; Arrangement für einen Song | /de/arrangement.html | DE | Germany first | Arrangement beauftragen |
| P1 | Suno AI Song verbessern | Suno Song professionell bearbeiten; KI-Song verbessern; Suno Vocals bearbeiten | /de/suno-production.html | DE | Germany first | KI-Track professionell überarbeiten lassen |
| P1 | mixage audio en ligne | faire mixer une chanson; mixage vocal; mixage multipiste; ingénieur mixage | /fr/mixing.html | FR | France first; Belgium/French-speaking Switzerland only after separate validation | Commander un mix |
| P1 | mastering audio en ligne | mastering musique; mastering chanson; ingénieur mastering; mastering d'un titre | /fr/mastering.html | FR | France first | Commander un mastering |
| P1 | arrangement musical en ligne | faire arranger une chanson; création d’arrangement; arrangeur musical | /fr/arrangement.html | FR | France first | Commander un arrangement |
| P1 | améliorer une chanson Suno | améliorer un morceau Suno; production musicale Suno AI; retravailler une voix IA | /fr/suno-production.html | FR | France first | Commander une retouche / production |
| P3 / verify offer | vocal recording service | online vocal recording; remote vocal recording | /vocal-recording.html | EN | US, UK, Canada | Do not target until the exact service model is confirmed |
| P3 / verify offer | Vocalaufnahme / Gesangsaufnahme | Gesangsaufnahme online; Gesang aufnehmen lassen | /de/vocal-recording.html | DE | Germany | Do not imply a local German studio; verify whether this is truly deliverable remotely |
| P3 / verify offer | enregistrement voix | enregistrement vocal en ligne; enregistrer une chanson | /fr/vocal-recording.html | FR | France | Do not imply a local French studio; verify whether this is truly deliverable remotely |

Language codes: UK = Ukrainian-language page; EN = English; RU = Russian; DE = German; FR = French.

## Country strategy

- Ukraine: prioritize Ukrainian pages for local and nationwide demand. Russian pages are an additional language path for Russian-speaking users in Ukraine, not a signal to target Russia.
- US, UK, Canada: use the same English service URL per service for now. Do not create country-specific doorway pages. Measure each country independently in Keyword Planner and Search Console.
- Germany: German pages should use native commercial wording and clearly describe remote delivery. Do not claim a physical German studio.
- France: French pages should use native commercial wording and clearly describe remote delivery. Do not claim a physical French studio.
- Local Kyiv recording intent: keep location claims only on UA/RU versions and only while the real address, public access and recording availability are accurate.

## Commercial modifiers and query intent

Use these modifiers in headings, copy, FAQ and CTA only where they read naturally:
- Purchase / hire: order, book, hire, service, professional, engineer, arranger; замовити, заказать; lassen, beauftragen; commander, faire appel à.
- Price: price, cost, rates, pricing; ціна, вартість; Preis, Kosten; tarif, prix.
- Delivery / remote: online, remote, send stems, files, turnaround; онлайн, дистанційно; online; à distance, en ligne.
- Scope: vocal, multitrack, song, track, stems, revisions, mastering, arrangement.

Do not make every page repeat every modifier. Each service page must answer: who performs the work, what files are needed, what is included, revisions, delivery time, price or quote process, and how to start.

## Pages that should NOT compete for these commercial terms

- Informational articles about LUFS, mixing books, plugins, Suno rights, AI artefacts and tutorials should target their own informational query and link to one relevant service page.
- Do not make blog posts target the same head commercial phrase as a service page.
- The pages /online-music-production-worldwide.html, /online-music-production-us.html, /online-music-production-europe.html and /online-music-production-ukraine.html should not be expanded until a query/page report proves a distinct intent. They risk overlap with the homepage and service pages; no redirect or noindex should be applied without URL-level evidence.
- Exclude irrelevant intent from commercial targeting: free, tutorial, course, jobs, salary, software/plugins, record shop/vinyl, distribution/label and studio rental unless separately offered.

## SERP / competitor observations used to shape the map

These are qualitative observations from public competitor pages, not search-volume measurements:
- Kyiv studios repeatedly use the local commercial vocabulary “студія звукозапису”, “запис вокалу”, “зведення”, “мастеринг”, “аранжування”; competitors often make price, recording location, package scope and examples visible.
- French online-mixing providers foreground “mixage audio en ligne”, “mixage vocal”, remote file delivery, revisions, turnaround and clear per-song pricing.
- German providers use “Online Mixing”, “Musik mischen lassen”, “Online Mastering” and emphasize engineer credentials / credits.
- English remote-mixing pages repeatedly foreground “online mixing”, “remote mixing”, “mixing engineer”, deliverables, stem limits, revisions, turnaround and pricing.
- The current R Music Records homepage already presents mixing, mastering and Suno AI production as key services, which supports keeping those as the primary commercial landing pages.

## Validation worksheet — do not fabricate values

For every P1 cluster, collect in Google Ads Keyword Planner:
- Country: one at a time (US, UK, Canada, Ukraine, Germany, France).
- Language: match the landing page language; for Ukraine, test Ukrainian and Russian separately.
- Metrics: average monthly searches, 12-month trend, competition, top-of-page bid (low/high).
- Group variants by intent, not by superficial word overlap.
- Record date and targeting settings with every export.

Priority order for actual website changes:
1. EN mixing + mastering: international commercial acquisition, one URL each.
2. UA mixing + mastering: Ukraine commercial acquisition.
3. EN / UA Suno: differentiated service and current early Search Console signal.
4. Arrangement pages across markets.
5. DE / FR mixing and mastering.
6. RU commercial pages for Ukraine.
7. Vocal recording pages only after confirming the precise deliverable and current in-person location.

## Evidence and source links

- R Music Records current homepage: https://rmusicrecords.com/
- Search Console baseline and previous seed architecture: seo/commercial-keyword-architecture-2026-11-03.md
- Existing competitor review: seo/keyword-map-and-competitor-review-2026-11.md
- French SERP examples: https://mixenligne.fr/mixage ; https://grand-studio.fr/mixage
- German example: https://www.online-mixing.de/
- English examples: https://mixandmastermysong.com/online-mixing-and-mastering/ ; https://online.thisismetropolis.com/online-mixing/
- Kyiv examples: https://www.newwave.kiev.ua/ ; https://hollywood.com.ua/ ; https://www.ilbeats.kyiv.ua/
- Google Keyword Planner guidance: https://support.google.com/google-ads/answer/7337243

## Important evidence boundary

This document is the final URL ownership and intent map v1.0. It is not a completed keyword-volume study. Exact search volume, CPC and difficulty remain unmeasured. The next revision should incorporate Keyword Planner exports and the next 28-day Search Console query/page data, then refine priorities without multiplying URLs unnecessarily.
