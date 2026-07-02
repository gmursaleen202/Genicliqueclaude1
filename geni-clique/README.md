# Geni Clique — Website Design Blueprint

**Version 1.0 — 2 July 2026**
Creative direction, UX architecture, copy system, motion specification, and build plan for the Geni Clique website. This package is the single source of truth for the build phase. No code has been written yet — by design.

---

## The concept in one paragraph

**The Quiet Engine.** Geni Clique builds AI systems that do a business's repetitive work — invisibly, reliably, around the clock. The website embodies that promise instead of claiming it: a near-monochrome, museum-lit experience where the only colour on the page is the pulse of a live system running. One continuous animated line — *the Thread* — travels the entire page, reconfiguring itself into each service's diagram as you scroll. The site doesn't say "we automate your work." It shows a system quietly doing work, from the first pixel to the last.

---

## Reading order

| Doc | Contents | Read it when |
|---|---|---|
| [01-creative-direction.md](01-creative-direction.md) | Brand story, concept, art direction, signature motifs, do/don't | Starting any design or copy work |
| [02-design-system.md](02-design-system.md) | Colour tokens, typography, grid, spacing, components, motion tokens | Building any component |
| [03-sitemap-and-seo.md](03-sitemap-and-seo.md) | Information architecture, URL strategy, schema, AEO/GEO plan | Planning pages and content |
| [04-homepage-blueprint.md](04-homepage-blueprint.md) | Section-by-section homepage spec: layout, copy, motion, mobile | Building the homepage |
| [05-copy-and-messaging.md](05-copy-and-messaging.md) | Voice principles, messaging hierarchy, reusable copy blocks | Writing anything |
| [06-motion-and-interaction.md](06-motion-and-interaction.md) | Full animation spec, scroll architecture, reduced-motion matrix | Implementing any animation |
| [07-build-plan.md](07-build-plan.md) | Tech stack, performance budget, CMS model, phased roadmap, QA | Scoping and building |

---

## The five decisions that define this site

1. **Colour = liveness.** The entire site is monochrome (ink blacks → paper whites). Exactly one accent — Signal Blue `#4D7CFF` — and it may *only* appear on things that are alive: the pulse travelling the Thread, live-status dots, the cursor blink, focus rings, active states. Never headlines, never fills, never gradients. This single rule makes the accent mean something and makes the restraint legible as intent, not timidity.

2. **Dark engine, light gallery.** The site opens in deep black (the engine room) and morphs to warm off-white for the proof chapter (case studies, process — the gallery), then returns to black for the close. Section transitions are *lighting changes*, not page breaks. This gives the Ocean-Agency sense of chaptered storytelling without copying its look.

3. **One thread through everything.** A single continuous SVG/canvas line connects hero → services → ecosystem → process → final CTA, morphing into each section's diagram. It is the navigation spine, the illustration system, and the brand metaphor in one element — and it's cheap to render.

4. **Two voices, two type behaviours.** Human copy (Satoshi) reveals with elegant line masks. System copy (Geist Mono — timestamps, logs, labels, metrics) types on like terminal output. The typography itself performs the brand: people and machines, working together.

5. **Receipts, not adjectives.** Every claim resolves to a number, and numbers get the "Ledger" treatment — tabular mono digits that roll like an odometer. Where real client numbers don't exist yet, the design holds honest placeholders (see integrity notes in doc 04) — we never fabricate logos, metrics, or testimonials.

---

## Decisions log (what was chosen, and the alternates)

| Decision | Chosen | Alternate (documented, viable) |
|---|---|---|
| Accent colour | Signal Blue `#4D7CFF` | Emerald `#17C58F` — swap is one token; blue chosen for precision/intelligence connotation over emerald's fintech read |
| Typeface | Satoshi Variable + Geist Mono (both free, self-hostable) | Suisse Int'l + Suisse Int'l Mono — the "museum" upgrade if a type licence budget exists (~US$400–800) |
| Base scheme | Dark-first with light proof chapter | All-light editorial (Ocean Agency's own mode) — rejected: dark better serves "luxury tech" and the liveness rule |
| Hero centrepiece | 2D SVG/canvas Thread network | WebGL (OGL/Three.js) particle system — hold for Phase 3 if performance headroom allows |
| Framework | Next.js 15 (App Router) | Astro 5 islands — leaner if the site stays purely static; Next chosen for programmatic SEO + future product surface |

## Strategic flags for the client

- **"Vibe Coding" naming:** kept as the official service names per the brief, but framed with outcome-first subtitles ("Custom software, shipped in weeks"). Recommend testing "Rapid Software Development" as the primary label with "vibe-coded" as supporting vocabulary — C-suite buyers trust outcomes over method slang. Flagged, not changed.
- **Proof content is the critical path.** The design gives case studies and testimonials premium real estate. Slots are structured for anonymised pilots ("A Sydney logistics firm") until named clients exist. Launching with empty proof sections is worse than launching without them — doc 04 defines the fallback layout.
- **GSAP is now fully free** (all plugins including SplitText/MorphSVG, since v3.13) — the motion spec assumes no plugin licence cost.
