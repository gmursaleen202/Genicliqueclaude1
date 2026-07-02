"use client";

import { useEffect } from "react";

/**
 * Chapter lighting (doc 06 §4), Phase 1 version: sections declare
 * data-bg + data-chapter; the section nearest the viewport centre sets the
 * body background (CSS transition does the morph) and flips text tokens.
 */
export default function ChapterObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-bg]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          document.body.style.backgroundColor = el.dataset.bg ?? "";
          document.body.dataset.theme = el.dataset.chapter ?? "dark";
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return null;
}
