"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const LINKS = [
  { n: "01", label: "Home", href: "/" },
  { n: "02", label: "Services", href: "/services" },
  { n: "03", label: "Work", href: "/work" },
  { n: "04", label: "Studio", href: "/studio" },
  { n: "05", label: "Contact", href: "/contact" },
];

/**
 * Full-screen menu (doc 02 §4). One of the two sanctioned backdrop-blur
 * surfaces. Opens with a masked stagger, closes faster than it opens,
 * traps focus while open, and releases scroll on close or route change.
 */
export default function MenuOverlay() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (open) {
      document.body.style.overflow = "hidden";
      overlay.style.pointerEvents = "auto";
      if (reduced) {
        gsap.set(overlay, { autoAlpha: 1 });
        gsap.set(overlay.querySelectorAll(".menu-link, .menu-rail"), { y: 0, autoAlpha: 1 });
      } else {
        const tl = gsap.timeline();
        tl.to(overlay, { autoAlpha: 1, duration: 0.4, ease: "power2.out" })
          .fromTo(
            overlay.querySelectorAll(".menu-link"),
            { yPercent: 110 },
            { yPercent: 0, duration: 0.7, ease: "power3.out", stagger: 0.07 },
            "-=0.15"
          )
          .fromTo(
            overlay.querySelector(".menu-rail"),
            { y: 24, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" },
            "-=0.4"
          );
      }
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      overlay.style.pointerEvents = "none";
      gsap.to(overlay, { autoAlpha: 0, duration: reduced ? 0 : 0.28, ease: "power2.in" });
      triggerRef.current?.focus({ preventScroll: true });
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && open) {
        const focusables = overlay.querySelectorAll<HTMLElement>("a, button");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer text-sm text-(--text-mid) transition-colors hover:text-(--text-hi)"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Menu
      </button>
      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="menu-overlay fixed inset-0 z-50 opacity-0"
        style={{ pointerEvents: "none", visibility: "hidden" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="container-site flex h-16 items-center justify-between">
          <span className="text-sm font-medium tracking-[0.14em] text-(--text-hi)">GENI CLIQUE</span>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="cursor-pointer text-2xl leading-none text-(--text-mid) transition-colors hover:text-(--text-hi)"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <div className="container-site grid gap-16 pt-16 lg:grid-cols-12">
          <nav className="lg:col-span-8">
            <ul className="space-y-2">
              {LINKS.map((l) => (
                <li key={l.href} className="overflow-hidden">
                  <div className="menu-link">
                    <Link
                      href={l.href}
                      className="group flex items-baseline gap-6 py-2"
                      aria-current={pathname === l.href ? "page" : undefined}
                    >
                      <span className="mono-label">{l.n}</span>
                      <span
                        className={`type-display-l transition-colors ${
                          pathname === l.href ? "text-(--text-low)" : "text-(--text-hi) group-hover:text-(--text-mid)"
                        }`}
                      >
                        {l.label}
                      </span>
                      {pathname === l.href && <span className="live-dot" aria-hidden="true" />}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <div className="menu-rail lg:col-span-4 lg:pt-4">
            <p className="mono-label">Start a conversation</p>
            <a
              href="mailto:hello@geniclique.com"
              className="mt-4 block text-xl font-medium text-(--text-hi) transition-colors hover:text-(--text-mid)"
            >
              hello@geniclique.com
            </a>
            <p className="mono-data mt-12 flex items-center gap-2.5 text-[13px] text-(--text-low)" aria-hidden="true">
              <span className="live-dot" />
              SYD · systems running
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
