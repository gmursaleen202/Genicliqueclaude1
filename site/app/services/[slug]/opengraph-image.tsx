import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getService } from "@/lib/services";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  const satoshi = await readFile(join(process.cwd(), "assets/fonts/Satoshi-Medium.otf"));
  const headline = service?.headline ?? "The work runs itself.";
  const eyebrow = service ? `SYSTEM ${service.number} — ${service.name.toUpperCase()}` : "AI SYSTEMS STUDIO";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: "64px 72px",
          fontFamily: "Satoshi",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", color: "#f4f4f5", fontSize: 26, letterSpacing: "0.14em" }}>GENI CLIQUE</div>
          <div style={{ display: "flex", color: "#71717a", fontSize: 19, letterSpacing: "0.12em" }}>{eyebrow}</div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#f4f4f5",
            fontSize: 88,
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            maxWidth: 1000,
          }}
        >
          {headline}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", flex: 1, height: 1, background: "rgba(255,255,255,0.16)" }} />
          <div style={{ display: "flex", width: 10, height: 10, borderRadius: 99, background: "#4d7cff" }} />
          <div style={{ display: "flex", color: "#71717a", fontSize: 20, letterSpacing: "0.08em" }}>
            geniclique.com
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Satoshi", data: satoshi, weight: 500, style: "normal" }] }
  );
}
