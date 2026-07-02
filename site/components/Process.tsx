import Reveal from "./Reveal";

const PHASES = [
  { n: "01", name: "Map", when: "Week 1", body: "We audit your operations and find the hours. Deliverable: an automation map with ROI attached." },
  { n: "02", name: "Design", when: "Week 2", body: "Blueprint the system — tools, integrations, guardrails, and owners." },
  { n: "03", name: "Build", when: "Weeks 3–6", body: "Ship in sprints. You see it working every week, not at the end." },
  { n: "04", name: "Run", when: "Ongoing", body: "We monitor, tune, and train your team until it's boringly reliable." },
];

export default function Process() {
  return (
    <section id="process" data-bg="#fafaf8" data-chapter="paper" className="section hairline-t">
      <div className="container-site grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="mono-label">Process</p>
              <h2 className="type-display-l mt-6 text-(--text-hi)">Weeks, not quarters.</h2>
            </Reveal>
          </div>
        </div>
        <ol className="space-y-0 lg:col-span-8">
          {PHASES.map((p, i) => (
            <li key={p.n} className={i > 0 ? "hairline-t" : ""}>
              <Reveal delay={i * 60}>
                <div className="grid gap-2 py-10 sm:grid-cols-12 sm:gap-6">
                  <p className="mono-label sm:col-span-2">{p.n}</p>
                  <div className="sm:col-span-3">
                    <h3 className="type-display-m text-(--text-hi)">{p.name}</h3>
                    <p className="mono-label mt-2">{p.when}</p>
                  </div>
                  <p className="max-w-md text-lg leading-relaxed text-(--text-mid) sm:col-span-7">{p.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
