"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const AGENTS = [
  { id: "01", name: "Support", caps: ["Answers on brand, from your docs", "Escalates only what needs a human", "Every channel, every hour"], ledger: "first reply < 5 s", demo: '> "Where\'s my order?" — answered in 4s ✓' },
  { id: "02", name: "Sales", caps: ["Qualifies every inbound lead", "Follows up until there's an answer", "Books the meeting itself"], ledger: "follow-up rate: 100%", demo: "> lead.scored 87 — call booked for Tue ✓" },
  { id: "03", name: "Bookings", caps: ["Real-time calendar management", "Reschedules without the email chain", "Reminders that actually reduce no-shows"], ledger: "no-shows down [verify]", demo: "> reschedule request — new slot locked ✓" },
  { id: "04", name: "Knowledge", caps: ["Your policies and processes, answerable", "Sources cited on every answer", "Onboards new staff on day one"], ledger: "answers, with citations", demo: '> "What\'s our refund policy?" — cited ✓' },
  { id: "05", name: "Voice", caps: ["Answers the phone in your voice", "Takes bookings and messages", "Transfers judgement calls to people"], ledger: "reception, 24/7", demo: "> call answered 02:14 am — booked ✓" },
  { id: "06", name: "Ops", caps: ["Runs the checklist while you sleep", "Chases what's overdue", "Reports what changed by morning"], ledger: "runs overnight", demo: "> nightly run: 47 tasks, 0 misses ✓" },
];

/**
 * Agent dossiers (doc 04 §6). Desktop + motion: the rail pins and scrubs
 * horizontally; the centred card activates and its demo line types on.
 * Mobile / reduced motion: native swipe rail (scroll-snap), all demos shown.
 */
export default function Agents() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const rail = section.querySelector<HTMLElement>(".snap-rail");
      if (!rail) return;
      section.classList.add("agents-pinned");
      const cards = gsap.utils.toArray<HTMLElement>("article", rail);
      const distance = () => rail.scrollWidth - rail.clientWidth;

      const setActive = (index: number) =>
        cards.forEach((c, i) => c.classList.toggle("active", i === index));
      setActive(0);

      const tween = gsap.to(rail, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => setActive(Math.round(self.progress * (cards.length - 1))),
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(rail, { clearProps: "all" });
        cards.forEach((c) => c.classList.remove("active"));
        section.classList.remove("agents-pinned");
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} data-bg="#0a0a0b" data-chapter="dark" className="section hairline-t overflow-hidden">
      <div className="container-site">
        <Reveal>
          <p className="mono-label">AI agents</p>
          <h2 className="type-display-l mt-6 max-w-3xl text-(--text-hi)">Agents on staff.</h2>
          <p className="mt-6 max-w-md text-lg text-(--text-mid)">
            Six roles we hire for most often. Each one thinks, communicates, and executes inside your existing tools.
          </p>
        </Reveal>
        <div className="snap-rail mt-16" role="list">
          {AGENTS.map((a) => (
            <article
              key={a.id}
              role="listitem"
              className="w-[300px] rounded-lg border border-(--hairline) bg-ink-2 p-7 lg:w-[340px]"
            >
              <p className="mono-label">
                Agent / {a.id} — {a.name}
              </p>
              <ul className="mt-6 space-y-3 text-[15px] leading-snug text-(--text-mid)">
                {a.caps.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span aria-hidden="true" className="text-(--text-low)">
                      —
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="agent-demo mono-data mt-6 text-[13px] text-(--text-mid)" aria-hidden="true">
                {a.demo}
              </p>
              <p className="mono-data hairline-t mt-6 flex items-center gap-2.5 pt-4 text-[13px] text-(--text-low)">
                <span className="live-dot" />
                {a.ledger}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
