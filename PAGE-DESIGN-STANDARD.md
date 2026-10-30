# R Music Records — mandatory page design standard

All new pages must use the shared design system in `/assets/site.css`. Do not create a standalone visual theme or page-specific color palette.

## Required page shell
- Use the same sticky `.site-header`, `.header-inner`, `.brand`, `.lang`, and `.header-cta` as the current localized homepages.
- Wrap page content in `<main>`; use `.wrap` for every content section.
- Use the shared `.service-hero` / `.article-hero` for the opening section, then `.section` and `.section-alt` for content.
- Use existing components: `.service-body-grid`, `.service-info-card`, `.service-detail-grid`, `.service-steps`, `.price-panel`, `.faq-list`, `.related-grid`, and `.contact-panel`.
- Reuse shared buttons `.btn` and `.btn-ghost`; do not invent button styles.
- Reuse the same footer and mobile navigation behavior.

## Required technical rules
- Link `/assets/site.css` on every HTML page.
- Use Inter, the shared dark palette, shared spacing, radii, cards, and responsive breakpoints. Do not add page-local `:root` palettes or conflicting body styles.
- Keep language-specific copy, canonical URL, hreflang, Open Graph metadata, structured data, and internal links correct.
- Keep the existing page's SEO content and unique service/article copy; changing layout must not mean duplicating another page's text.
- International pages use WhatsApp and email. Ukrainian pages use the Ukrainian contact channels already established for that section.
- New service pages should follow the five-part structure used by `mixing.html`: hero, service scope, getting started/process and pricing, FAQ, related services/contact.
- New blog/article pages should use the same header, hero, content width, typography, cards, and footer.

## Reference pages
- Ukrainian homepage: `index.html`
- English homepage: `index-en.html`
- English service page: `mixing.html`
- Shared stylesheet: `assets/site.css`

Before publishing a new page, verify desktop and mobile layouts and check all language links, internal links, canonical URL, and metadata.
