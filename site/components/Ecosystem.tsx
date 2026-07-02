import Reveal from "./Reveal";

const RING = [
  "Gmail", "Slack", "HubSpot", "Xero", "Calendly", "Stripe", "Notion", "WhatsApp",
  "Salesforce", "Teams", "Airtable", "Shopify",
];

export default function Ecosystem() {
  return (
    <section data-bg="#121214" data-chapter="dark" className="section hairline-t">
      <div className="container-site grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <svg
            viewBox="0 0 440 400"
            className="h-auto w-full max-w-[520px]"
            role="img"
            aria-label="Orbital map: twelve business tools arranged in a ring, each connected to a central Geni system node"
          >
            <circle cx="220" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.07)" />
            <circle cx="220" cy="200" r="95" fill="none" stroke="rgba(255,255,255,0.05)" />
            {RING.map((label, i) => {
              const angle = (i / RING.length) * Math.PI * 2 - Math.PI / 2;
              const x = 220 + Math.cos(angle) * 150;
              const y = 200 + Math.sin(angle) * 150;
              return (
                <g key={label}>
                  <line x1="220" y1="200" x2={x} y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
                  <circle cx={x} cy={y} r="4" fill="#1a1a1e" stroke="rgba(255,255,255,0.25)" />
                  <text
                    x={x + Math.cos(angle) * 22}
                    y={y + Math.sin(angle) * 22 + 4}
                    textAnchor="middle"
                    fill="#a1a1aa"
                    style={{ font: "11px var(--font-geist-mono, monospace)" }}
                  >
                    {label}
                  </text>
                </g>
              );
            })}
            <circle cx="220" cy="200" r="30" fill="#1a1a1e" stroke="rgba(255,255,255,0.26)" />
            <text
              x="220"
              y="204"
              textAnchor="middle"
              fill="#f4f4f5"
              style={{ font: "12px var(--font-geist-mono, monospace)" }}
            >
              GENI
            </text>
            <g className="thread-pulse">
              <circle r="3" fill="#4d7cff">
                <animateMotion dur="3.4s" repeatCount="indefinite" path="M220 200 L220 50 L220 200 L370 200 L220 200" />
              </circle>
            </g>
          </svg>
        </Reveal>
        <div>
          <Reveal>
            <p className="mono-label">Integrations</p>
            <h2 className="type-display-l mt-6 text-(--text-hi)">One system. Every tool you already use.</h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-(--text-mid)">
              Email to CRM to Slack to calendar to accounting — one connected system, 500+ integrations via n8n and
              custom APIs, no swivel-chair work in between.
            </p>
            <p className="mono-data mt-10 flex items-center gap-3 text-[13px] text-(--text-low)" aria-hidden="true">
              <span className="live-dot" />
              <span>09:41:09&nbsp;&nbsp;proposal.drafted → sent.for.review&nbsp;&nbsp;✓</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
