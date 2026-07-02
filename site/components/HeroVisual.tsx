"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroRobot from "./HeroRobot";

/**
 * Hero centrepiece: the Spline robot tracks the cursor itself, so this
 * wrapper only handles the cinematic intro, the rear glow plane, and the
 * floating log chips. (The previous whole-scene tilt was removed — it would
 * fight the robot's own look-at tracking.)
 */
export default function HeroVisual() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.from(scene, {
        opacity: 0,
        y: 44,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.35,
      });
      const floats = gsap.utils.toArray<HTMLElement>(".float-chip", scene).map((chip, i) =>
        gsap.to(chip, {
          y: i % 2 ? 12 : -10,
          duration: 3.2 + i * 0.9,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        })
      );
      return () => {
        intro.kill();
        floats.forEach((t) => t.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="hero-scene relative">
      <div ref={sceneRef} className="hero-3d relative">
        <span className="hero-glow" aria-hidden="true" />
        <HeroRobot />
        <p className="float-chip" style={{ top: "4%", right: "0%", transform: "translateZ(90px)" }} aria-hidden="true">
          <span className="live-dot" />
          meeting.booked ✓
        </p>
        <p className="float-chip" style={{ bottom: "6%", left: "2%", transform: "translateZ(60px)" }} aria-hidden="true">
          <span className="live-dot" style={{ animationDelay: "1.2s" }} />
          invoice.chased ✓
        </p>
      </div>
    </div>
  );
}
