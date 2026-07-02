"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Ledger counter (doc 02 §4): server-renders the final value, then rolls up
 * from zero when scrolled into view. Non-numeric affixes ("×", "+", "h/wk")
 * are preserved.
 */
export default function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = value.match(/[\d,]+\.?\d*/);
    if (!match) return;

    const numStr = match[0];
    const target = parseFloat(numStr.replace(/,/g, ""));
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const grouped = numStr.includes(",");
    const state = { v: 0 };

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.to(state, {
        v: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: () => {
          const rendered = grouped
            ? Math.round(state.v).toLocaleString("en-US")
            : state.v.toFixed(decimals);
          el.textContent = value.replace(numStr, rendered);
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => mm.revert();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
