# 03 — Sitemap, Information Architecture & Search Strategy

## 1. Sitemap

```
/                           Homepage (the film — doc 04)
/services                   Services index (the seven systems)
  /services/ai-agents
  /services/ai-automation
  /services/n8n-automation
  /services/software        ("Vibe Coding — Software")
  /services/apps            ("Vibe Coding — Apps")
  /services/web-development
  /services/seo
/work                       Case studies index
  /work/[case-slug]
/process                    How we build (expanded four-phase method)
/studio                     About: who, principles, stack
/insights                   Editorial/SEO engine (articles, guides)
  /insights/[article-slug]
/contact                    Book a call (Cal.com embed) + form + direct email
--- programmatic layers (Phase 2+) ---
/solutions/[industry]       e.g. /solutions/real-estate — industry × automation
/agents/[use-case]          e.g. /agents/appointment-booking — agent × job
```

Primary nav (menu overlay): **Services · Work · Process · Studio · Contact** — five items, no dropdowns. "Insights" lives in the footer until the library justifies promotion. "Book a call" is persistent in the nav bar and is the single conversion action sitewide.

## 2. Service page template (one template, seven instances)

1. **Hero** — mono eyebrow (`SYSTEM 01 — AI AGENTS`), display-l outcome headline, one-paragraph definition, CTA. Thread renders this service's diagram.
2. **What it replaces** — the manual process, struck through (manifesto motif, localised).
3. **What we build** — the example list from the brief as index rows (e.g. support agents, sales agents, voice agents…), each expandable.
4. **How it works** — 3-step diagram in Thread language.
5. **Proof** — relevant case study or ledger metrics.
6. **FAQ** — 4–6 service-specific questions (own `FAQPage` schema).
7. **CTA** — same closing move as homepage.

Depth without new design: every service page reuses homepage components.

## 3. URL & metadata patterns

- URLs: lowercase, hyphenated, no dates, ≤ 4 segments.
- Titles: `{Outcome} — {Service} | Geni Clique` (≤ 60 chars). e.g. *"AI agents that answer, book, and sell — AI Agents | Geni Clique."*
- Descriptions: 140–155 chars, answer-first, one number where honest.
- OG images: generated per-page from a template (dark, headline in Satoshi, thread motif) — consistent premium presence in shares and AI citations.
- Canonicals everywhere; `sitemap.xml` + `robots.txt`; RSS for /insights.

## 4. Schema map (JSON-LD)

| Page | Schema |
|---|---|
| All | `Organization` (logo, sameAs socials, contactPoint) + `WebSite` |
| Homepage | `ProfessionalService` (areaServed, serviceType list) |
| Service pages | `Service` + `FAQPage` + `BreadcrumbList` |
| Case studies | `Article` + about `Organization` |
| Insights | `Article` (+ `HowTo` where structure fits) |
| Contact | `ContactPage` |
| Homepage FAQ | `FAQPage` |

## 5. AEO / GEO (ranking in AI answers, not just links)

The audience increasingly asks ChatGPT/Perplexity/Gemini "who builds AI agents for small businesses in Australia" — the site must be the citable answer.

1. **Answer-first blocks:** every service page and FAQ answer opens with a complete 40–60-word answer to its implied question before elaborating — extractable by both featured snippets and LLMs.
2. **Entity clarity:** consistent naming ("Geni Clique is an AI systems studio that builds AI agents, business automation, and custom software"), Organization schema, an /studio page that reads as a knowledge-panel source, consistent NAP if local presence matters.
3. **Question-shaped H2s:** "How much does an AI agent cost?", "n8n vs Zapier for business automation?" — the queries decision-makers actually type.
4. **`llms.txt`** at root summarising the company, services, and canonical URLs for AI crawlers.
5. **Comparison and cost content** in /insights: LLMs cite pages that commit to concrete numbers and honest trade-offs. This is the GEO moat — most agencies won't publish pricing logic.
6. **Semantic HTML throughout:** single `h1`, sequential headings, `<main>/<article>/<nav>`, no heading-styled `div`s — the animation layer must never replace real text with canvas (see doc 06 §7).

## 6. Programmatic SEO (Phase 2, CMS-driven)

- `/solutions/[industry]` — 10 industries × real automation examples each. Template: industry pain ledger → 3 relevant systems → mini case → industry FAQ. Only ship pages with genuinely differentiated content; thin doorway pages are a penalty risk and a brand insult.
- `/agents/[use-case]` — 8 agent types mapped to job-to-be-done queries ("AI receptionist for clinics").
- Internal linking: service ↔ solutions ↔ insights form deliberate topic clusters; every insights article links to exactly one service page as its conversion path.

## 7. Local & technical

- If AU-based ops: LocalBusiness schema + Google Business Profile alignment, "Sydney" (or actual city — **confirm with client**) in /studio and footer.
- Core Web Vitals as ranking insurance: budgets in doc 07.
- Every page reachable ≤ 2 clicks from home; orphan pages forbidden.
