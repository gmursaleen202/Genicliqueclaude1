# 06 — Motion & Interaction Specification

Motion is the brand's second voice. Budget: **every animation earns its milliseconds or dies.** Target feel: Apple keynote, not showreel.

## 1. Stack

| Layer | Tool | Notes |
|---|---|---|
| Timeline engine | **GSAP 3.13+** | All plugins now free (SplitText, MorphSVG, MotionPath, Flip, ScrollTrigger) |
| Smooth scroll | **Lenis** | lerp 0.1 desktop; **native scroll on touch** (Lenis `syncTouch` off — fighting iOS momentum feels wrong) |
| Text | SplitText | lines for reveals; words for manifesto; chars only for log type-on |
| Thread/diagrams | Inline SVG + DrawSVG-style dashoffset + MotionPath for the pulse | Canvas 2D fallback if node count grows |
| Hero network | SVG + rAF lerp for mouse parallax | WebGL deferred to Phase 3 (doc 07) |
| View transitions | Barba-style page morphs **cut from scope** | App Router + top-level Flip of nav/wordmark is enough; full page transitions are the #1 source of jank debt |

## 2. Global motion grammar

| Rule | Value |
|---|---|
| Entrances | `--ease-out` `cubic-bezier(0.22,1,0.36,1)`, 700–1100ms, rise ≤ 32px + fade |
| Exits | 60% of entrance duration, ease-in |
| Micro (hover/press) | 150–220ms; press scale 0.97; all transform/opacity only |
| Stagger | 80–100ms per text line; 30–50ms per list item |
| Scrub | Thread drawing, chapter lighting, pins — scrubbed 0.8–1.2s smoothing |
| Property law | **transform + opacity only.** Height animation allowed solely in accordions via GSAP. No width/top/left/margin animation anywhere |
| Concurrency law | Max 2 animated elements competing per viewport; the Thread counts as one |
| Interruptibility | Every tween killable by user input; no input-blocking animation, ever |

## 3. The Thread — technical choreography

One conceptual line, implemented as **per-section SVG segments** that visually hand off (a segment's exit point aligns with the next segment's entry at the seam) — a literal single path across a 9-viewport page is unmaintainable and layout-fragile.

- Segments draw via stroke-dashoffset scrubbed to section progress.
- The pulse: 6px circle on `motionPath` per segment, `--signal` with 24px `--signal-dim` trail (two trailing circles at decreasing opacity — cheaper than filters).
- Section diagrams (services hover previews, ecosystem, n8n graph, process stations) share node/edge components; morphs via MorphSVG where 1:1, else crossfade+draw.
- Left-edge scroll-progress thread: separate fixed 1px element, `scaleY` scrubbed, pulse dot at tip.

## 4. Chapter lighting (background morphs)

`body` background tweened between chapter tokens at section boundaries, scrubbed across ~120vh of overlap: `#050505 → #0A0A0B → #121214 → #FAFAF8 (case studies) → #FAFAF8 → #0A0A0B → #050505`. Text tokens flip via a `data-chapter` attribute swap at 50% of each morph (CSS variables re-map; single reflow-free class change). The radial spotlight: one fixed pseudo-element, `translate` scrubbed to the focal section, `opacity` 0.06–0.1.

## 5. Pinned sequences (the only three, plus hero hold)

| Section | Pin length | Interaction |
|---|---|---|
| Manifesto | 250vh (180vh mobile) | three text beats + strike-through |
| Ecosystem | 300vh (unpinned mobile) | assemble → connect → run |
| Agent showcase | 100vh × 6 panels horizontal (carousel mobile) | microdemos fire per panel |

Everything else flows. Pins are ceremony; three is the maximum before a site feels like a hostage situation.

## 6. Signature micro-interactions

- **Magnetic buttons:** within 24px, button translates ≤ 6px toward cursor (lerp 0.15); label vertical-swap on hover. Desktop pointer-fine only.
- **Index rows:** background fill + 8px title slide + arrow draw, 200ms.
- **Ledger counters:** digit columns translate vertically, 1.2s `--ease-out`, fire once at 40% visibility.
- **Log type-on:** 24ms/char, cursor blink 530ms step-end; queue lines, never overlap.
- **Card tilt (case thumbnails only):** rotateX/Y ≤ 4°, lerped, resets on leave. No glare effects.
- **Nav hide/reveal:** translateY(−100%) past 0.5 velocity down; return on any up-scroll, 300ms.
- **Text selection:** `::selection` in `--signal-dim` — the liveness rule extends to selecting text.

## 7. Performance & accessibility law

1. **LCP is HTML.** Hero H1 renders server-side, styled, before any JS. Animation only transforms what's already painted. No FOUC-masking `opacity:0` in CSS — initial states set via JS (`gsap.set`) so no-JS users see everything.
2. **All animation code lazy-loads after LCP** (dynamic import on idle). Below-fold ScrollTriggers init via IntersectionObserver proximity.
3. **60fps floor.** DevTools 6× CPU throttle test on the ecosystem pin is the gate. Blur radii > 12px forbidden; `will-change` applied only during tweens, removed after.
4. **`prefers-reduced-motion` full matrix:**

| Motif | Reduced alternative |
|---|---|
| Thread drawing + pulse | Static drawn thread; pulse dot gently opacity-breathes (no travel) |
| Mask/type reveals | Simple 200ms fades, no movement |
| Pins (all three) | Unpinned natural scroll; beats become stacked blocks |
| Chapter lighting | Instant background change at boundary |
| Counters | Numbers render final, no roll |
| Magnetic/tilt/parallax | Off entirely |

5. **Touch = different physics, not fewer features.** Hover states become active states; horizontal pin becomes snap carousel; parallax off; strike-through manifesto and lighting morphs stay — they're scroll-driven and feel native on touch.
6. **Keyboard:** every interactive element focusable with visible Signal ring; pins never trap focus; skip-link to main; accordion/menu fully keyboard-operable; `aria-live="polite"` on form results only (log tickers are `aria-hidden` — decorative).
7. **Real text law:** nothing textual is canvas/WebGL/image. Screen readers and crawlers get the complete document with animations absent.
