# 04 — Homepage Blueprint

Sixteen sections, four acts. For each: purpose → layout → copy (draft, final-candidate) → motion → mobile. Motion details reference doc 06; copy voice rules in doc 05.

**Integrity note:** all metrics, logos, and quotes marked `[SLOT]` require real content before launch. Never fabricate. Fallback layouts are specified where proof doesn't exist yet.

---

## ACT I — THE PROMISE (deep black)

### 1. Hero — "The work runs itself."
**Purpose:** in five seconds: what they do, for whom, and that this studio operates at a different level of craft.

**Layout:** 100svh, `--ink-0`. Nav floats above. Eyebrow mono top-left: `AI SYSTEMS STUDIO — EST. 2024`. H1 across cols 1–10, two lines. Sub-headline cols 1–5. Two CTAs beneath. Right half + behind text: the Thread network. Bottom-left: log ticker. Bottom-right: scroll cue (mono `SCROLL`, 24px vertical line, travelling dot).

**Copy:**
> **The work runs itself.**
> We design and build intelligent AI systems — agents, automations, and custom software — that take repetitive work off your team and run it around the clock, exactly to spec.
> `[Book a strategy call]` `[See what we build ↓]`

Alternates (test candidates): *"Intelligence, employed."* / *"Busywork, retired."* / *"Your business, running while you sleep."*

**Centrepiece — the Thread network:** 8 nodes (mail, chat, calendar, CRM, invoice, database, document, phone — 1.5px glyphs) connected by curved paths. Every ~6s a Signal pulse completes a "run" across 4–5 nodes while the log ticker prints each hop: `09:41:07 lead.captured → crm.updated ✓`. Nodes drift ≤ 12px with lerped mouse parallax in two depth layers. Radial spotlight up-right; grain overlay.

**Motion:** H1 mask-reveals per line (stagger 90ms, `--ease-out`, 1.1s) starting ~300ms after paint — text is real HTML, LCP-safe. Sub and CTAs follow at +200ms. Network paths draw in (dashoffset, 1.6s), then first pulse fires. On scroll-out: headline drifts −40px and fades; network un-clusters and the Thread extends downward (scrubbed).

**Mobile:** network moves below copy at 45vh, parallax off, one pulse loop; H1 clamps to 3.4rem; CTAs stack full-width; log ticker shows one line.

---

### 2. Proof strip — quiet logos
**Purpose:** immediate risk-reduction for skimmers.

**Layout:** single hairline-topped band, mono label `TRUSTED BY OPERATORS AT` + 5–7 monochrome logos `[SLOT]`, generous spacing, no marquee.

**Fallback (no logos yet):** replace with three lived-in ledger stats: `12 systems in production · 40,000+ tasks automated · AU + global` `[verify numbers]` — or omit the band entirely. An empty trust bar is anti-trust.

**Motion:** logos fade/rise 20px, stagger 60ms, once.
**Mobile:** two rows, centre-aligned.

---

### 3. Manifesto — the problem, struck through
**Purpose:** name the pain with theatre; earn the services pitch.

**Layout:** pinned ~250vh, `--ink-1`, centre-aligned display-l (the first ceremonial centred moment). Three beats swap as scroll progresses:

1. *"Most teams spend half their week on work that doesn't need a human."*
2. *"Answering. Scheduling. Chasing. Copying. Updating. Reporting."* — each word ticks in mono-labelled, then the pulse crosses the line and **strikes each word through**, one by one.
3. *"We build systems that take it all. Quietly. Reliably. At scale."* — Thread re-enters and dives toward Act II.

**Motion:** SplitText word reveals scrubbed to scroll; strike-throughs draw left→right 400ms each; beat transitions crossfade+drift.
**Mobile:** pin shortened to ~180vh; same beats; strike-through preserved (it's the moment people remember).

---

## ACT II — THE SYSTEMS (black → graphite)

### 4. Services index — "What we build"
**Purpose:** the seven services as an editorial index, not a card grid; route to service pages.

**Layout:** `--ink-1 → --ink-2` morph begins. Left col 1–4 sticky: mono eyebrow `WHAT WE BUILD`, display-l "Seven systems. One outcome: hours back." Right cols 5–12: seven index rows.

| # | Row title | Outcome line |
|---|---|---|
| 01 | AI Agents | Digital employees that answer, book, sell, and support — 24/7. |
| 02 | AI Automation | Your CRM, email, and back office, running on rails. |
| 03 | n8n Workflows | Hundreds of apps, one enterprise-grade nervous system. |
| 04 | Software — vibe-coded | Internal tools and SaaS platforms, shipped in weeks. |
| 05 | Apps — vibe-coded | iOS and Android products at startup speed. |
| 06 | AI Web Development | Sites that load fast, rank high, and convert. |
| 07 | SEO & GEO | Found on Google — and cited by ChatGPT. |

**Motion:** rows reveal on scroll (rise 24px, stagger). Hover: row fills `--ink-3`, title slides 8px, the sticky column's Thread morphs into that service's mini-diagram, cursor chip `View →`.
**Mobile:** sticky header collapses above; rows become tap-accordions (outcome line + 2 examples + link).

---

### 5. Ecosystem — "One system. Every tool you already use."
**Purpose:** kill the #1 objection — "will it work with our stack?" — and visualise the n8n superpower.

**Layout:** pinned 300vh, near full-bleed. Orbital map: core node `GENI` ringed by ~16 tool nodes (Gmail, Outlook, Slack, Teams, HubSpot, Salesforce, Pipedrive, Calendly, Stripe, Xero, Notion, Airtable, WhatsApp, Shopify, Postgres, OpenAI). Right rail copy:

> Your stack, connected end to end.
> Email to CRM to Slack to calendar to accounting — one system, 500+ integrations, no swivel-chair work in between.

**Motion (scrubbed sequence):** rings assemble → connections draw in category waves → one full run animates across the map (lead email → parsed → CRM → Slack ping → proposal drafted → meeting booked) with the log ticker printing every hop → map exhales into the Thread and continues down.
**Mobile:** unpinned; three staged frames (assemble / connect / run) swap on scroll; tools list becomes a two-column mono grid.

---

### 6. Agent showcase — "Agents on staff"
**Purpose:** make "AI employee" concrete via dossiers, not feature lists.

**Layout:** horizontal pinned scroll (desktop), six dossier panels, each: mono header `AGENT / 01 — SUPPORT`, capability list (3 lines), a live microdemo, ledger footer `[SLOT metrics]`.

| Agent | Microdemo | Ledger sample |
|---|---|---|
| Support | 3-message chat types itself | `first reply < 5 s` |
| Sales | lead-qualifying exchange | `follow-up: 100%` |
| Bookings | calendar slot locks in | `no-shows −38% [verify]` |
| Knowledge | staff question → sourced answer | `answers cited` |
| Voice | waveform animates + transcript line | `24/7 reception` |
| Ops | task list ticks itself off | `runs while you sleep` |

**Motion:** panel scroll scrubbed; microdemo plays when its panel centres (system-voice type-on); waveform is 12 animated bars, transform-only.
**Mobile:** swipeable snap carousel with progress dots; microdemos play on becoming ≥ 60% visible.

---

### 7. Workflow showcase — "Mondays, returned."
**Purpose:** dramatise before/after for automation + n8n with one honest scenario.

**Layout:** split. Left sticky: display-l *"14 hours of Mondays, returned."* + copy: *"A weekly reporting ritual — gather, copy, format, chase, send — rebuilt as a system that runs in four minutes, every Monday, 6:00 am."* + toggle `MANUAL 14 h/wk ↔ AUTOMATED 4 min/run` `[figures from real build — verify]`. Right: a real n8n graph re-skinned to brand language (monochrome nodes, hairline wires) that **builds itself** as you scroll: trigger → collect → summarise (AI) → format → approve → deliver.

**Motion:** nodes pop in sequence (scale 0.9→1, 300ms), wires draw between; toggle swaps ledger counters with odometer roll.
**Mobile:** graph simplifies to vertical 6-node spine; toggle becomes two stacked ledger tiles.

---

## ACT III — THE PROOF (morph to paper)

### 8. Case studies — "Proof, not promises."
**Purpose:** the conversion core. Background performs the chapter change: black exhales into `--paper-0` over ~1.2s of scroll — the gallery.

**Layout:** 2–3 features, each ~80vh, editorial: huge mono index `01`, client name + sector (`[SLOT]`, anonymised form allowed: "Logistics firm, Sydney"), one-sentence problem, one-sentence system, thumbnail Thread diagram of what was built, three ledger counters (e.g. `31 hrs/wk returned · 3.2× faster lead response · 0 missed invoices` `[verify]`), link `Read the build →`.

**Fallback (pre-clients):** rename section "Field notes" and present 2 anonymised pilot builds + 1 internal system with full transparency ("built for our own ops"). Honest beats hollow.

**Motion:** the lighting morph is the star; counters roll; diagrams draw in. Restraint here — let white space and numbers speak.
**Mobile:** stacked features, full-width counters row-of-three.

---

### 9. Process — "Weeks, not quarters."
**Purpose:** de-risk engagement; show the method.

**Layout:** on paper. Left sticky display-l "How we build." Right: four stations on a vertical Thread:

1. **Map** — *Week 1.* We audit your operations and find the hours. Deliverable: an automation map with ROI attached.
2. **Design** — *Week 2.* Blueprint the system: tools, integrations, guardrails, owners.
3. **Build** — *Weeks 3–6.* Ship in sprints. You see it working every week, not at the end.
4. **Run** — *Ongoing.* We monitor, tune, and train your team until it's boringly reliable.

**Motion:** thread draws downward; each station's node ignites (Signal dot blooms once) as it enters; deliverables list types on in mono.
**Mobile:** same vertical layout, naturally responsive.

---

### 10. Why Geni Clique — principles, not badges
**Purpose:** differentiation for a buyer comparing three agencies.

**Layout:** on paper, four hairline-divided statements at display-m, each expanding two lines on hover/tap:

- **Systems, not demos.** Production-grade from day one — monitoring, fallbacks, and guardrails included.
- **You own everything.** Your accounts, your data, your code. Leaving us is easy; nobody does. *(confident, quiet)*
- **Senior builders only.** The people on the call are the people who build.
- **Measured in hours returned.** Every engagement starts with a number and ends with a bigger one.

**Motion:** mask reveals; expansion animates height via GSAP.
**Mobile:** tap-to-expand accordions.

---

## ACT IV — THE CLOSE (return to black)

### 11. Technology stack — "Built on the frontier."
Paper exhales back to `--ink-1`. Mono spec-sheet grid (hairline cells, no logos-as-decoration): OpenAI · Anthropic · Google · Llama · n8n · LangGraph · Supabase · Postgres · Next.js · React Native · Twilio · ElevenLabs · pgvector · Stripe. Cell hover: inverts (paper bg, ink text) 180ms. One caption line: *"Model-agnostic by design — we choose what's best for the job, and swap it when something better ships."* **Mobile:** 2-col grid.

### 12. Industries — index rows, brief
Mono label `WHERE THIS LANDS`. Ten one-line rows: *Professional services — proposals that write themselves · Healthcare — reception that never misses a call · Real estate — every lead answered in seconds · E-commerce — support that scales with sales · Logistics — status updates without the phone tag · Finance — reporting on rails · Hospitality — bookings on autopilot · Trades — quotes out the same day · Legal — intake without the intake team · Education — enquiries answered around the clock.* Each links to `/solutions/[industry]` (Phase 2). **Mobile:** same list, smaller.

### 13. Testimonials — one voice at a time
Single quote block (component spec doc 02), 2–4 quotes `[SLOT]`, 8s auto-advance + drag. **Fallback:** omit entirely until real; never invent.

### 14. FAQ — eight questions, AEO-shaped
Accordion + `FAQPage` schema. Answers open with a complete 40–60-word answer.

1. How much does an AI agent or automation project cost?
2. How long until something is live? *(answer anchors: first system typically weeks, not quarters)*
3. Do you work with the tools we already use?
4. What happens to our data? Where does it live?
5. Do we need technical staff to run this?
6. What's the difference between AI automation and hiring a VA?
7. We already use n8n / Zapier — can you build on it?
8. What support do we get after launch?

**Motion:** height-animated accordions, plus→× rotation. One open at a time.

### 15. Final CTA — "Find your first 20 hours."
**Layout:** 100svh, `--ink-0`, ceremonial centre. The Thread — travelling since the hero — converges to a single point that blooms (Signal, once) and settles behind the button.

> **Let's find your first 20 hours.**
> A 30-minute call. We map where AI pays for itself in your business — no deck, no obligation, no jargon.
> `[Book the call]`  ·  or write to us — hello@geniclique.com `[confirm address]`

**Motion:** convergence scrubbed; headline mask-reveal; button magnetised; the room is otherwise still.
**Mobile:** identical, full-width button.

### 16. Footer
Giant wordmark set full-bleed, baseline-clipped at the page edge (the editorial sign-off). Above it: four link columns (Services / Studio / Resources / Contact), the log-line local time — `SYD 09:41 · systems running ●` (live dot = Signal) — legal line in mono, back-to-top pill. The Thread's tail exits into the wordmark.
