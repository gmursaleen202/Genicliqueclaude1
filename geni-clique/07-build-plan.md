# 07 — Build Plan, Performance & QA

## 1. Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15+** (App Router, RSC, ISR) | Static-fast marketing pages now; programmatic SEO and future product surfaces later |
| Styling | Tailwind CSS v4 + CSS custom properties (tokens from doc 02) | Tokens are the contract; Tailwind maps to them |
| Motion | GSAP 3.13 + Lenis (doc 06) | — |
| CMS | **Sanity** | Case studies, insights, FAQ, solutions pages; visual editing for the client |
| Forms/booking | Cal.com embed (strategy call) + Resend (email fallback form) | One conversion path, minimal vendors |
| Hosting | Vercel | Edge, image optimisation, preview deploys |
| Analytics | Plausible (privacy-first, no consent banner) + Vercel Speed Insights | GA4 only if ads demand it |
| Type | Self-hosted Satoshi Variable + Geist Mono, subset woff2 | No third-party font requests |

Leaner alternate: Astro 5 islands if scope freezes at brochure — but Next chosen for where this company is going.

## 2. Performance budget (gates, not goals)

| Metric | Budget |
|---|---|
| Lighthouse (mobile, throttled) | ≥ 95 all categories |
| LCP | < 1.8s (hero H1 = LCP element, server-rendered) |
| CLS | < 0.05 (all media sized; counters reserve width via `tabular-nums`) |
| INP | < 200ms |
| Initial JS (marketing routes) | < 180KB gz — GSAP core+ScrollTrigger+SplitText ≈ 48KB gz + Lenis 3KB fits with room |
| Fonts | < 90KB total |
| Hero complete | < 250KB including SVG network |
| Images | AVIF/WebP, responsive `srcset`, lazy below fold; diagrams are inline SVG, not images |

Animation bundle loads post-LCP on idle. Zero third-party scripts above the fold. Cal.com embed loads on interaction intent (click), not page load.

## 3. Delivery phases

### Phase 1 — Foundation (weeks 1–3): the credible site
Design system build (tokens, type, components) → homepage all 16 sections **with reveals + lighting morphs only** (no pins yet) → service pages ×7 → contact + studio → SEO plumbing complete (schema, metadata, sitemap, llms.txt) → forms/booking live → a11y pass. **Launchable at the end of Phase 1.**

### Phase 2 — The film (weeks 4–6): the award layer
The Thread (all segments + pulse) → three pinned sequences → agent microdemos + log tickers → ledger counters, magnetic buttons, menu overlay polish → case study template + first real/anonymised studies in CMS → performance hardening against budgets → reduced-motion matrix verified.

### Phase 3 — The moat (ongoing)
/solutions + /agents programmatic layers → insights engine (2 articles/month, AEO-shaped) → optional WebGL hero upgrade *only if* Phase 2 ships under budget → A/B: hero headline bank, CTA labels → Awwwards/CSSDA/FWA submission once two real case studies are live (juries click "Work" first).

## 4. QA checklist (pre-launch gate)

**Experience:** 375px / 768px / 1024px / 1440px / 1920px · iOS Safari + Android Chrome real devices · pins at extreme scroll speeds · every hover has a touch equivalent · 6× CPU throttle 60fps test on ecosystem pin · reduced-motion pass per doc 06 matrix.

**Integrity:** zero `[SLOT]` or `[verify]` markers in production · no fabricated logos/metrics/testimonials · email + booking links live-tested · 404 page styled.

**Accessibility:** keyboard-only full journey · VoiceOver homepage pass · contrast audit both chapters · focus visible everywhere · single h1/page, sequential headings.

**Search:** Rich Results test on all schema · OG images all pages · sitemap submitted · llms.txt resolves · every page ≤ 2 clicks from home.

**Performance:** budgets in §2 measured on 4G-throttled mobile, not dev machines.

## 5. Open items for the client

1. Confirm domain + email (hello@geniclique.com assumed) and studio city for footer/local SEO.
2. Real proof inventory: which clients/pilots can be named, anonymised, or quantified — determines Act III fallback usage.
3. Booking tool preference (Cal.com assumed; Calendly fine).
4. Type licence appetite: ship Satoshi (free) or upgrade to Suisse Int'l (~US$400–800).
5. Accent decision ratified: Signal Blue vs emerald (one-token swap, decide before Phase 2 motion work).
