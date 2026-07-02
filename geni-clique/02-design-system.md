# 02 — Design System

Token-first. Every value below ships as a CSS custom property; components never hardcode raw values.

## 1. Colour

### Ink scale (dark chapters)
| Token | Hex | Use |
|---|---|---|
| `--ink-0` | `#050505` | Hero and final CTA — the deepest rooms |
| `--ink-1` | `#0A0A0B` | Default page background |
| `--ink-2` | `#121214` | Alternate sections, raised surfaces |
| `--ink-3` | `#1A1A1E` | Cards/surfaces on ink-1, hover fills |
| `--ink-4` | `#232328` | Highest dark surface (menu overlay base) |

### Paper scale (light chapter)
| Token | Hex | Use |
|---|---|---|
| `--paper-0` | `#FAFAF8` | Gallery chapter background (warm, not clinical) |
| `--paper-1` | `#F1F1EE` | Raised surfaces on paper |
| `--paper-2` | `#E7E7E3` | Hairlines/dividers on paper |

### Text
| Token | Value | Use |
|---|---|---|
| `--text-hi` | `#F4F4F5` (on dark) / `#0C0C0D` (on paper) | Headlines, primary copy |
| `--text-mid` | `#A1A1AA` / `#52525B` | Supporting copy, descriptions |
| `--text-low` | `#71717A` / `#8E8E93` | Mono labels, captions, legal |
| `--hairline` | `rgba(255,255,255,0.08)` / `rgba(0,0,0,0.10)` | All borders and dividers |
| `--silver` | `#C7C7CC` | Diagram strokes, subtle metallic accents |

Contrast: `--text-mid` on `--ink-1` = 7.4:1; `--text-low` on `--ink-1` = 4.6:1 — all pass AA. Never place `--text-low` on `--ink-3` or above.

### Signal (the only colour)
| Token | Value | Use |
|---|---|---|
| `--signal` | `#4D7CFF` | Pulse dot, live-status dots, cursor blink, focus ring, text selection, active nav state |
| `--signal-dim` | `rgba(77,124,255,0.25)` | Pulse trail, glow bloom around live dots |

**The rule (enforced in review):** Signal appears only on things that are *live or interactive-now*. Max ~1% of any viewport. Never headlines, never icons, never fills, never gradients. Documented alternate: emerald `#17C58F` / `rgba(23,197,143,0.25)` — a one-token swap.

### Chapter morph values
Body background animates between `#050505 → #0A0A0B → #121214 → #FAFAF8 → #050505` across the scroll (see doc 06 §4).

## 2. Typography

### Families
| Role | Face | Weights | Source |
|---|---|---|---|
| Display + body ("human voice") | **Satoshi Variable** | 300–900 axis (use 400/500/700) | Fontshare — free commercial, self-host woff2 |
| System voice | **Geist Mono** | 400/500 | Vercel — OFL, self-host |
| Upgrade path | Suisse Int'l (+ Mono) | — | Lineto licence, swap-in later; identical metrics strategy |

Self-hosted, subset to Latin, `font-display: optional` on display sizes, `swap` on body. Total font payload target: < 90KB.

### Scale (fluid)
| Token | Size | Line | Tracking | Use |
|---|---|---|---|---|
| `--type-display-xl` | `clamp(3.4rem, 8.5vw, 9rem)` | 0.95 | −0.03em | Hero H1 only |
| `--type-display-l` | `clamp(2.6rem, 5.5vw, 5.5rem)` | 1.0 | −0.025em | Section headlines, manifesto |
| `--type-display-m` | `clamp(1.9rem, 3.5vw, 3.25rem)` | 1.08 | −0.02em | Service index rows, quotes |
| `--type-heading` | `clamp(1.35rem, 2vw, 1.75rem)` | 1.25 | −0.01em | Card/step titles |
| `--type-body-l` | `1.25rem` | 1.55 | 0 | Lead paragraphs |
| `--type-body` | `1.0625rem` (17px) | 1.65 | 0 | Body copy, max-width 640px |
| `--type-mono-label` | `0.8125rem` (13px) | 1.4 | +0.08em, uppercase | Eyebrows, labels, log lines |
| `--type-mono-data` | `0.9375rem` | 1.4 | 0, `tabular-nums` | Ledger numbers, timestamps |

Weights: display 500 (Satoshi medium reads luxurious at scale; 700 only for emphasis spans), body 400, labels mono 400.

## 3. Layout & spacing

- **Container:** max-width `1440px`; horizontal margins `clamp(20px, 5.5vw, 96px)`.
- **Grid:** 12 columns / 24px gutters desktop; 6 / 16px tablet; 4 / 16px mobile.
- **Base unit:** 8px. Spacing steps: 8, 16, 24, 32, 48, 64, 96, 128, 160, 224.
- **Section rhythm:** vertical padding `clamp(112px, 14vw, 224px)`. Never two adjacent sections with equal visual density — alternate full-bleed and contained.
- **Editorial asymmetry:** headlines occupy cols 1–8; supporting copy cols 8–12 or offset below-right. Centre-aligned layouts reserved for the manifesto and final CTA only, so centring reads as ceremony.
- **Hairline discipline:** sections separate by whitespace or a single full-width hairline — never both.
- **Z-index scale:** content 0 / thread 10 / sticky elements 20 / nav 40 / menu overlay 50 / dialogs 60.

## 4. Components

### Navigation bar
64px; wordmark left (Satoshi 500, tracked +0.02em, "GENI CLIQUE"); right: "Menu" text-link + "Book a call" pill. Transparent at top; after 80px scroll gains `--ink-1`/70% + 12px backdrop blur + bottom hairline. Hides on downward scroll velocity > 0.5, returns on any upward scroll. Left viewport edge carries a 1px scroll-progress thread with the pulse dot — nav and motif in one.

### Menu overlay (full-screen)
`--ink-4` at 96% + blur. Left: five giant index links (display-l, numbered mono `01–05`), staggered mask reveal. Right rail: contact block, socials, local-time log line. Page behind scales to 0.96 and dims. Close: X, Esc, scrim click, swipe-down (mobile).

### Buttons
- **Primary pill:** `--text-hi` bg on dark chapters (inverts on paper), 16px/28px padding, radius 999. Hover: label performs vertical swap (duplicate slides up), button magnetises toward cursor within 24px (desktop only). Press: scale 0.97.
- **Secondary pill:** transparent, 1px hairline, same geometry. Hover: hairline brightens to 20%.
- **Text link:** underline draws in left→right 240ms on hover, exits right. Active/focus: Signal ring 2px offset 3px.

### Index row (services, industries)
Full-width row: mono number, display-m title, `--text-mid` outcome line, right-aligned arrow. Hover: background `--ink-2`, title slides 8px right, arrow draws in, Thread preview morphs in right column. Rows divided by hairlines. Tap (mobile): expands accordion with description + CTA.

### Ledger counter
Mono `tabular-nums`, digits roll vertically into place over 1.2s `expo.out` when in view; unit label in `--type-mono-label` beneath.

### Log line
13px Geist Mono, `--text-low`; event text types on; trailing status glyph `✓` in `--text-mid`; a 8px Signal dot with `--signal-dim` bloom marks "live."

### Accordion (FAQ)
Hairline-divided rows; question in heading size; plus glyph rotates 45° to ×; answer max-width 640px; height animates via GSAP (not `auto` snap). One open at a time.

### Quote block (testimonials)
Single quote at display-m, author + role in mono label, thin progress bar (8s auto-advance), drag/swipe with inertia to change. No headshot grid — one voice at a time.

### Diagram nodes (Thread system)
Node: 48px circle, `--ink-3` fill, hairline border, 1.5px stroke glyph in `--silver`. Connections: 1.5px paths at 20% silver. Live pulse: 6px Signal dot travelling paths with a fading `--signal-dim` trail.

### Form fields
On `--ink-2`; 1px hairline; label always visible above (mono label style); focus: Signal ring; error: message below field in `#FF6B6B` (the only permitted red, forms only); inputs ≥ 48px tall.

## 5. Iconography
Custom-drawn line glyph set, 1.5px stroke, 24px grid, rounded caps — matching the diagram language. Base library: Lucide, restyled to weight. Never filled icons, never emoji, never mixed stroke weights.

## 6. Motion tokens (summary — full spec in doc 06)
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | All entrances |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Morphs, chapter lighting |
| `--dur-micro` | 180ms | Hovers, presses |
| `--dur-reveal` | 900ms | Text/image reveals |
| `--dur-chapter` | 1200ms | Background morphs |
| Stagger | 80–100ms/line, 30ms/item | SplitText lines, list items |
