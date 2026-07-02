"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll choreography for the lower chapters. Initial states are set from JS
 * (gsap.from) so no-JS visitors and reduced-motion users see everything
 * immediately (doc 06 §7).
 */
export default function Fx() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('[data-fx="cells"]').forEach((el) => {
          gsap.from(el.children, {
            opacity: 0,
            y: 18,
            scale: 0.94,
            duration: 0.7,
            ease: "power3.out",
            stagger: { each: 0.045 },
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>('[data-fx="rows"]').forEach((el) => {
          gsap.from(el.children, {
            opacity: 0,
            x: -28,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: { trigger: el, start: "top 80%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>('[data-fx="list"]').forEach((el) => {
          gsap.from(el.children, {
            opacity: 0,
            y: 24,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.05,
            scrollTrigger: { trigger: el, start: "top 80%", once: true },
          });
        });

        // Aurora parallax — each glow drifts against scroll for depth.
        gsap.utils.toArray<HTMLElement>(".glow").forEach((g, i) => {
          gsap.to(g, {
            yPercent: i % 2 ? 22 : -16,
            ease: "none",
            scrollTrigger: {
              trigger: g.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        });

        // Final CTA: the thread draws itself, then the aurora ring blooms.
        const cta = document.getElementById("cta");
        if (cta) {
          const paths = gsap.utils.toArray<SVGPathElement>(".cta-path", cta);
          paths.forEach((p) => {
            const len = p.getTotalLength();
            p.style.strokeDasharray = `${len}`;
            p.style.strokeDashoffset = `${len}`;
          });
          const tl = gsap.timeline({
            scrollTrigger: { trigger: cta, start: "top 65%", once: true },
          });
          tl.to(paths, { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut", stagger: 0.15 })
            .from(".cta-ring", { scale: 0.3, opacity: 0, duration: 1.3, ease: "power3.out" }, "-=0.6")
            .from(
              "#cta h2, #cta .cta-copy, #cta .cta-actions",
              { opacity: 0, y: 28, duration: 0.9, ease: "power3.out", stagger: 0.12 },
              "-=1.0"
            );
        }
      });
      return () => ctx.revert();
    });

    mm.add("(prefers-reduced-motion: no-preference) and (pointer: fine)", () => {
      const cleanups: (() => void)[] = [];
      gsap.utils.toArray<HTMLElement>(".magnetic").forEach((btn) => {
        const xTo = gsap.quickTo(btn, "x", { duration: 0.45, ease: "power3" });
        const yTo = gsap.quickTo(btn, "y", { duration: 0.45, ease: "power3" });
        const onMove = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          const dist = Math.hypot(dx, dy);
          const range = 140;
          if (dist < range) {
            const strength = (1 - dist / range) * 0.38;
            xTo(dx * strength);
            yTo(dy * strength);
          } else {
            xTo(0);
            yTo(0);
          }
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        cleanups.push(() => {
          window.removeEventListener("pointermove", onMove);
          gsap.set(btn, { x: 0, y: 0 });
        });
      });
      return () => cleanups.forEach((fn) => fn());
    });

    return () => mm.revert();
  }, []);

  return null;
}
