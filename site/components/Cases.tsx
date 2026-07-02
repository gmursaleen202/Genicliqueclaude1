import Reveal from "./Reveal";
import Counter from "./Counter";

const COUNTERS = [
  { value: "31", label: "hrs/wk returned" },
  { value: "3.2×", label: "faster lead response" },
  { value: "0", label: "missed invoices" },
];

/**
 * "Field notes" fallback active per doc 04 §8 — anonymised placeholder until
 * real case studies exist. All figures [SLOT — verify].
 */
export default function Cases() {
  return (
    <section data-bg="#fafaf8" data-chapter="paper" className="section">
      <div className="container-site">
        <Reveal>
          <p className="mono-label">Field notes</p>
          <h2 className="type-display-l mt-6 text-(--text-hi)">Proof, not promises.</h2>
        </Reveal>
        <Reveal delay={100}>
          <article className="mt-20 grid gap-10 lg:grid-cols-12">
            <p className="mono-data text-6xl text-(--text-low) lg:col-span-2">01</p>
            <div className="lg:col-span-6">
              <p className="mono-label">Case 01 — logistics firm, Sydney [slot]</p>
              <p className="mt-4 text-2xl font-medium leading-snug text-(--text-hi)">
                Dispatch updates, invoice chasing, and customer status calls ran on phone tag and copy-paste.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-(--text-mid)">
                We built a connected system: an operations agent watching the transport platform, automated status
                messages, and invoice follow-ups that never forget.
              </p>
            </div>
            <div className="flex flex-row gap-8 lg:col-span-4 lg:flex-col lg:items-end lg:text-right">
              {COUNTERS.map((c) => (
                <div key={c.label}>
                  <p className="mono-data text-4xl text-(--text-hi)">
                    <Counter value={c.value} />
                  </p>
                  <p className="mono-label mt-1">{c.label} [verify]</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
