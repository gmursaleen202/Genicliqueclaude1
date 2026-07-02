"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const RING = [
  "Gmail", "Slack", "HubSpot", "Xero", "Calendly", "Stripe", "Notion", "WhatsApp",
  "Salesforce", "Teams", "Airtable", "Shopify",
];

/* Coordinates rounded to 2dp — raw trig differs across JS engines at the
   14th decimal and causes SSR hydration mismatches. */
const round2 = (n: number) => Math.round(n * 100) / 100;
const NODE_POS = RING.map((label, i) => {
  const angle = (i / RING.length) * Math.PI * 2 - Math.PI / 2;
  const x = round2(220 + Math.cos(angle) * 150);
  const y = round2(200 + Math.sin(angle) * 150);
  return {
    label,
    x,
    y,
    labelX: round2(x + Math.cos(angle) * 22),
    labelY: round2(y + Math.sin(angle) * 22 + 4),
  };
});

const RUN_SEQUENCE = [0, 2, 1, 4, 3];
const RUN_LOGS = [
  "09:41:07  lead.email → parsed ✓",
  "09:41:09  crm.updated → proposal.drafted ✓",
  "09:41:12  meeting.booked → invoice.scheduled ✓",
];

/**
 * Pinned ecosystem (doc 04 §5): spokes assemble, tools connect, then one
 * full run animates across the map while the log prints each hop. Falls
 * back to the static assembled map for reduced motion / no JS.
 */
export default function Ecosystem() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const spokes = gsap.utils.toArray<SVGLineElement>(".eco-spoke", section);
      const nodes = gsap.utils.toArray<SVGGElement>(".eco-node", section);
      const runner = section.querySelector<SVGCircleElement>(".eco-runner");
      const logs = gsap.utils.toArray<HTMLElement>(".eco-log", section);

      gsap.set(spokes, { strokeDasharray: 160, strokeDashoffset: 160 });
      gsap.set(nodes, { autoAlpha: 0 });
      gsap.set(runner, { autoAlpha: 0, attr: { cx: 220, cy: 200 } });
      gsap.set(logs, { autoAlpha: 0, y: 8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=280%",
          pin: true,
          scrub: 0.8,
        },
      });

      tl.to(spokes, { strokeDashoffset: 0, duration: 1.6, stagger: 0.08, ease: "none" })
        .to(nodes, { autoAlpha: 1, duration: 0.5, stagger: 0.06 }, "-=1.2")
        .to(runner, { autoAlpha: 1, duration: 0.2 });

      RUN_SEQUENCE.forEach((nodeIndex, step) => {
        const target = NODE_POS[nodeIndex];
        tl.to(runner, { attr: { cx: target.x, cy: target.y }, duration: 0.7, ease: "power1.inOut" })
          .to(runner, { attr: { cx: 220, cy: 200 }, duration: 0.7, ease: "power1.inOut" });
        if (step < RUN_LOGS.length) {
          tl.to(logs[step], { autoAlpha: 1, y: 0, duration: 0.3 }, "<-0.4");
        }
      });
      tl.to({}, { duration: 0.4 });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        gsap.set([...spokes, ...nodes, ...logs], { clearProps: "all" });
        if (runner) gsap.set(runner, { clearProps: "all" });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} data-bg="#121214" data-chapter="dark" className="section hairline-t">
      <div className="container-site grid min-h-svh items-center gap-16 lg:grid-cols-2">
        <div>
          <svg
            viewBox="0 0 440 400"
            className="h-auto w-full max-w-[520px]"
            role="img"
            aria-label="Orbital map: twelve business tools arranged in a ring, each connected to a central Geni system node"
          >
            <circle cx="220" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.07)" />
            <circle cx="220" cy="200" r="95" fill="none" stroke="rgba(255,255,255,0.05)" />
            {NODE_POS.map((n) => (
              <g key={n.label}>
                <line
                  className="eco-spoke"
                  x1="220"
                  y1="200"
                  x2={n.x}
                  y2={n.y}
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.2"
                />
                <g className="eco-node">
                  <circle cx={n.x} cy={n.y} r="4" fill="#1a1a1e" stroke="rgba(255,255,255,0.25)" />
                  <text
                    x={n.labelX}
                    y={n.labelY}
                    textAnchor="middle"
                    fill="#a1a1aa"
                    style={{ font: "11px var(--font-geist-mono, monospace)" }}
                  >
                    {n.label}
                  </text>
                </g>
              </g>
            ))}
            <circle cx="220" cy="200" r="30" fill="#1a1a1e" stroke="rgba(255,255,255,0.26)" />
            <text
              x="220"
              y="204"
              textAnchor="middle"
              fill="#f4f4f5"
              style={{ font: "12px var(--font-geist-mono, monospace)" }}
            >
              GENI
            </text>
            <circle className="eco-runner" r="4" fill="#4d7cff" />
          </svg>
        </div>
        <div>
          <Reveal>
            <p className="mono-label">Integrations</p>
            <h2 className="type-display-l mt-6 text-(--text-hi)">One system. Every tool you already use.</h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-(--text-mid)">
              Email to CRM to Slack to calendar to accounting — one connected system, 500+ integrations via n8n and
              custom APIs, no swivel-chair work in between.
            </p>
          </Reveal>
          <div className="mt-10 space-y-2" aria-hidden="true">
            {RUN_LOGS.map((line) => (
              <p key={line} className="eco-log mono-data flex items-center gap-3 text-[13px] text-(--text-low)">
                <span className="live-dot" />
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
