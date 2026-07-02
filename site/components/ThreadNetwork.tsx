const NODES = [
  { x: 48, y: 66, label: "MAIL" },
  { x: 262, y: 78, label: "CRM" },
  { x: 248, y: 218, label: "CAL" },
  { x: 118, y: 232, label: "DB" },
  { x: 320, y: 148, label: "DOC" },
] as const;

/**
 * Hero centrepiece, Phase 1: static SVG network with a SMIL pulse.
 * Phase 2 replaces the pulse with GSAP MotionPath + mouse parallax (doc 06 §3).
 */
export default function ThreadNetwork() {
  return (
    <svg
      viewBox="0 0 380 300"
      className="h-auto w-full max-w-[560px]"
      role="img"
      aria-label="Diagram of an AI workflow: mail, CRM, calendar, database and document tools connected through a central system, with a signal pulse travelling between them"
    >
      <path
        id="thread-run"
        d="M48 66 C 120 28, 200 40, 262 78 S 300 180, 248 218"
        fill="none"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1.5"
      />
      <path
        d="M48 66 C 40 140, 60 200, 118 232 M118 232 C 160 250, 210 240, 248 218 M262 78 C 300 96, 316 120, 320 148 M320 148 C 316 180, 290 206, 248 218"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1.5"
      />
      <path
        d="M168 148 L 48 66 M168 148 L 262 78 M168 148 L 118 232 M168 148 L 248 218 M168 148 L 320 148"
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1.5"
      />
      {NODES.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="20" fill="#141418" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
          <text
            x={n.x}
            y={n.y + 3.5}
            textAnchor="middle"
            fill="#a1a1aa"
            style={{ font: "11px var(--font-geist-mono, monospace)" }}
          >
            {n.label}
          </text>
        </g>
      ))}
      <circle cx="168" cy="148" r="26" fill="#1a1a1e" stroke="rgba(255,255,255,0.24)" strokeWidth="1" />
      <text
        x="168"
        y="152"
        textAnchor="middle"
        fill="#f4f4f5"
        style={{ font: "12px var(--font-geist-mono, monospace)" }}
      >
        AI
      </text>
      <g className="thread-pulse">
        <circle r="3.5" fill="#4d7cff">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath href="#thread-run" />
          </animateMotion>
        </circle>
        <circle r="2.2" fill="#4d7cff" opacity="0.35">
          <animateMotion dur="5s" begin="0.18s" repeatCount="indefinite">
            <mpath href="#thread-run" />
          </animateMotion>
        </circle>
      </g>
    </svg>
  );
}
