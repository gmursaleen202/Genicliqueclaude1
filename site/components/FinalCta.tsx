import GlowField from "./GlowField";

export default function FinalCta() {
  return (
    <section id="cta" data-bg="#050505" data-chapter="dark" className="section relative flex min-h-svh items-center overflow-hidden">
      <GlowField
        blobs={[
          { color: "#4d7cff", top: "8%", left: "8%", size: 600 },
          { color: "#8b5cf6", top: "30%", right: "-4%", size: 640, delay: "-6s" },
          { color: "#2dd4a0", bottom: "-12%", left: "30%", size: 560, delay: "-11s" },
        ]}
      />
      <div className="container-site relative w-full text-center">
        <svg viewBox="0 0 300 44" className="mx-auto h-auto w-full max-w-xs" aria-hidden="true">
          <path className="cta-path" d="M0 4 C 100 4, 200 22, 300 22" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
          <path className="cta-path" d="M0 42 C 100 42, 200 22, 300 22" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
          <path className="cta-path" d="M0 23 C 100 23, 200 22, 300 22" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
          <circle cx="300" cy="22" r="3" fill="#4d7cff" className="thread-pulse" />
        </svg>
        <h2 className="type-display-l mx-auto mt-10 max-w-3xl text-(--text-hi)">
          Let&rsquo;s find your first 20 hours.
        </h2>
        <p className="cta-copy mx-auto mt-8 max-w-md text-lg leading-relaxed text-(--text-mid)">
          A 30-minute call. We map where AI pays for itself in your business — no deck, no obligation, no jargon.
        </p>
        <div className="cta-actions mt-12 flex flex-col items-center gap-6">
          <div className="relative flex items-center justify-center">
            <span className="cta-ring" aria-hidden="true" />
            <a href="mailto:hello@geniclique.com" className="pill-primary magnetic relative !px-9 !py-4 text-base">
              Book the call
            </a>
          </div>
          <p className="mono-label">or write to us — hello@geniclique.com [confirm address]</p>
        </div>
      </div>
    </section>
  );
}
