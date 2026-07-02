"use client";

import { useEffect, useRef, useState } from "react";
import type { Application } from "@splinetool/runtime";
import ThreadNetwork from "./ThreadNetwork";

/**
 * Interactive 3D robot rendered with the Spline runtime directly (the
 * react-spline wrapper is ESM-only and breaks next/dynamic resolution).
 * Mouse tracking is baked into the scene's event graph — head and torso
 * follow the cursor over the canvas. The ThreadNetwork shows until the
 * ~1.3MB scene is loaded, then the canvas fades in over it.
 */
const SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export default function HeroRobot() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let app: Application | null = null;
    let cancelled = false;

    import("@splinetool/runtime").then(({ Application }) => {
      if (cancelled || !canvasRef.current) return;
      app = new Application(canvasRef.current);
      app
        .load(SCENE_URL)
        .then(() => {
          if (!cancelled) setLoaded(true);
        })
        .catch(() => {
          /* scene unreachable — the ThreadNetwork fallback simply stays */
        });
    });

    return () => {
      cancelled = true;
      app?.dispose();
    };
  }, []);

  return (
    <div
      className="relative h-[420px] w-full lg:h-[560px]"
      role="img"
      aria-label="Interactive 3D robot that turns to follow your cursor"
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ThreadNetwork />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="h-full w-full transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}
