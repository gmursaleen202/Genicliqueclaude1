# 01 — Creative Direction

## The brand problem we're solving

Every AI agency website looks the same: purple gradients, glowing brains, particle swooshes, "unleash the power of AI." That aesthetic signals *hype*, and Geni Clique's buyers — CEOs, MDs, operations leaders — are precisely the people most fatigued by it. They've sat through the demos. They've been burned by vapourware.

The opportunity is to look like the opposite of the pitch deck: **calm, precise, already working.** The most credible thing an automation company can do is feel automated — quietly competent, nothing performing for attention, everything running.

## The concept: The Quiet Engine

> The best systems are the ones you stop noticing.

The site is designed as a machine you walk through — an engine room rendered as a gallery. Deep black spaces, museum lighting, hairline structures, and one living element: a thread of light that never stops working. Scrolling the site is watching a business run itself.

The name helps us. *Geni* — genie, genius: intelligence summoned on demand. *Clique* — an inner circle. The brand story: **your business gains an inner circle of tireless, intelligent operators.** Not "tools." Not "bots." A staff that happens to be software.

### The narrative arc (four acts)

The homepage is a film, not a brochure. Each act has its own lighting.

| Act | Chapter | Lighting | The visitor feels |
|---|---|---|---|
| I | The promise — hero, proof strip, manifesto | Deep black `ink-0/1` | "These people are serious." |
| II | The systems — services, ecosystem, agents, workflows | Black → graphite | "This is exactly my problem, solved." |
| III | The proof — case studies, process, principles | Morph to paper white | "It's real, and there's a method." |
| IV | The close — stack, industries, voices, FAQ, CTA | Return to black | "I should book the call." |

The light chapter matters: thirty seconds of darkness makes the arrival of white feel like walking from the engine room into the gallery where the results hang. That contrast *is* the pacing.

---

## Signature motifs (the ownable five)

Awards juries and buyers alike remember a site by its recurring gestures. These five repeat everywhere; nothing else is added.

### 1. The Thread
A single continuous line — 1.5px, silver at 20% opacity — that enters in the hero as a workflow network, then travels the full page, reconfiguring into each section's diagram: orbiting nodes for agents, a node graph for n8n, a branching tree for SEO, four stations for process, finally converging to a single point that becomes the CTA button. A Signal Blue pulse traverses it continuously. The Thread is metaphor, wayfinding, and illustration system in one element.

### 2. Two reveal grammars
- **Human voice** (Satoshi): headlines reveal with masked line-slides — elegant, weighted, editorial.
- **System voice** (Geist Mono): labels, logs, timestamps, metrics *type on* character-by-character with a blinking Signal cursor.

Never mix the grammars. A headline never types; a log line never mask-reveals. The discipline is what makes it read as intelligence rather than decoration.

### 3. The Ledger
All numbers are receipts: tabular mono digits that roll odometer-style into place when scrolled into view. "31 hrs/week returned." "4 min per run." The motif trains the visitor to expect measurable outcomes — the core sales argument, made kinetic.

### 4. Museum lighting
Backgrounds morph between chapters (GSAP-driven `backgroundColor` on the body). A soft radial spotlight (8% white, huge blur) sits behind whichever element holds focus. A static film grain (2% opacity) unifies every surface. Light behaves like a curator, not a strobe.

### 5. The log ticker
A recurring corner element: monospaced system events ticking past —
`09:41:07  lead.captured   →  crm.updated      ✓`
`09:41:09  proposal.drafted →  sent.for.review ✓`
It appears in the hero, the ecosystem map, and the footer ("SYD 09:41 — systems running ●"). It is the site's heartbeat and the most literal proof of concept: *something is working right now.*

---

## Art direction

### Materials
Ink, paper, silver, glass — used like a product designer, not a VFX artist.

- **Surfaces:** matte near-blacks with 1px hairline borders (`rgba(255,255,255,0.08)`). Depth comes from hairlines and lighting, *never* drop shadows on dark.
- **Glass:** reserved for exactly two elements — the scrolled navigation bar and the menu overlay (`backdrop-blur: 12px`, background at 70%). Nowhere else; blur is expensive and loses meaning when everywhere.
- **Line work:** every diagram, icon, and node drawn at 1.5px stroke, geometric, rounded caps. One drawing hand across the whole site.
- **Grain:** a single tiled noise texture at 2% opacity over everything. It removes the "flat vector" feel and gives the black a filmic depth. Static — never animated.

### Imagery policy
No robots, brains, holograms, handshakes, or people pointing at laptops. The site's imagery *is* its interface elements:

1. **The Thread diagrams** — the primary illustration system (SVG, drawn in-house style).
2. **Software vignettes** — cropped, restyled monochrome mockups of actual deliverables (a dashboard corner, a chat transcript, an n8n graph re-skinned to brand). Real product > stock metaphor.
3. **Abstract stills (sparingly)** — if photography is ever needed: macro glass, graphite paper, precision-machined objects on black. Think Leica product photography, not "tech wallpaper."

### The feeling, referenced honestly
- From **theoceanagency.org**: chaptered scroll storytelling, background colour as narrative device, generous pacing, one idea per viewport.
- From **Apple**: restraint as confidence; animation always in service of comprehension.
- From **Linear / Vercel**: dark-mode craft, hairline discipline, mono-accented technical credibility.
- From **Stripe**: diagrams as proof of engineering depth.
- From **OpenAI**: editorial typography carrying serious subject matter.

Capture the feeling; copy nothing.

---

## Do / Don't

| Do | Don't |
|---|---|
| One idea per viewport | Card grids of six equal boxes |
| Hairlines and lighting for depth | Drop shadows, glows, bevels on dark |
| Signal Blue on live things only | Accent colour on headlines, icons, fills |
| Numbers as receipts (mono, rolled) | Vague claims ("10x your business") |
| Line-drawn diagrams of real workflows | Robots, brains, particles for their own sake |
| Silence between sections (whitespace) | Marquees, auto-playing video, parallax soup |
| Copy that a CEO forwards to their COO | Copy that sounds like a keynote |

## The one-line brief for every future decision

> Would a machine this good need to shout? Remove until the answer is obviously no.
