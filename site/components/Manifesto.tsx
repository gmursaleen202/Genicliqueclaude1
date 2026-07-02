"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STRIKE_WORDS = ["Answering.", "Scheduling.", "Chasing.", "Copying.", "Updating.", "Reporting."];

/**
 * Pinned manifesto (doc 04 §3): three beats swap while pinned; the busywork
 * words are struck through one by one on scrub. Default (no JS / reduced
 * motion) renders the three beats stacked with the words pre-struck.
 */
export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      section.classList.add("pinned-mode");
      const beats = gsap.utils.toArray<HTMLElement>(".beat", section);
      const lines = gsap.utils.toArray<HTMLElement>(".strike-line", section);
      const words = gsap.utils.toArray<HTMLElement>(".sw", section);

      gsap.set(beats, { autoAlpha: 0, y: 48 });
      gsap.set(beats[0], { autoAlpha: 1, y: 0 });
      gsap.set(lines, { scaleX: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 0.8,
        },
      });
      tl.to(beats[0], { autoAlpha: 0, y: -48, duration: 1 }, "+=0.4")
        .to(beats[1], { autoAlpha: 1, y: 0, duration: 1 })
        .to(lines, { scaleX: 1, duration: 0.45, stagger: 0.4, ease: "none" }, "+=0.2")
        .to(beats[1], { autoAlpha: 0, y: -48, duration: 1 }, "+=0.6")
        .to(beats[2], { autoAlpha: 1, y: 0, duration: 1 })
        .to({}, { duration: 0.4 });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        section.classList.remove("pinned-mode");
        gsap.set([...beats, ...lines], { clearProps: "all" });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} data-bg="#0a0a0b" data-chapter="dark" className="manifesto section">
      <div className="beats container-site text-center">
        <div className="beat">
          <p className="type-display-l mx-auto max-w-4xl text-(--text-hi)">
            Most teams spend half their week on work that doesn&rsquo;t need a human.
          </p>
        </div>
        <div className="beat">
          <p className="type-display-m mx-auto max-w-4xl leading-relaxed">
            {STRIKE_WORDS.map((w) => (
              <span key={w} className="sw">
                {w}
                <i className="strike-line" aria-hidden="true" />
              </span>
            ))}
          </p>
        </div>
        <div className="beat">
          <p className="type-display-l mx-auto max-w-4xl text-(--text-hi)">
            We build systems that take it all. Quietly. Reliably. At&nbsp;scale.
          </p>
        </div>
      </div>
    </section>
  );
}
