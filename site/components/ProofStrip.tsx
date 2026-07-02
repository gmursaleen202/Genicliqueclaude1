import Counter from "./Counter";

const STATS = [
  { value: "12", label: "systems in production" },
  { value: "40,000+", label: "tasks automated" },
  { value: "AU + global", label: "clients served" },
];

/**
 * Fallback variant per doc 04 §2 — ledger stats until real client logos exist.
 * All figures are [SLOT — verify] placeholders; the visible marker is deliberate.
 */
export default function ProofStrip() {
  return (
    <section data-bg="#0a0a0b" data-chapter="dark" className="hairline-t hairline-b">
      <div className="container-site flex flex-wrap items-center justify-between gap-6 py-10">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-baseline gap-3">
            <Counter value={s.value} className="mono-data text-2xl text-(--text-hi)" />
            <span className="mono-label">{s.label}</span>
          </div>
        ))}
        <span className="mono-label !text-[11px] opacity-60">[slot — verify before launch]</span>
      </div>
    </section>
  );
}
