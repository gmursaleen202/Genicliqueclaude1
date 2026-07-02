import Reveal from "./Reveal";

const PRINCIPLES = [
  { title: "Systems, not demos.", body: "Production-grade from day one — monitoring, fallbacks, and guardrails included." },
  { title: "You own everything.", body: "Your accounts, your data, your code. Leaving us is easy; nobody does." },
  { title: "Senior builders only.", body: "The people on the call are the people who build." },
  { title: "Measured in hours returned.", body: "Every engagement starts with a number and ends with a bigger one." },
];

export default function Why() {
  return (
    <section data-bg="#f1f1ee" data-chapter="paper" className="section hairline-t">
      <div className="container-site">
        <Reveal>
          <p className="mono-label">Why Geni Clique</p>
        </Reveal>
        <ul className="mt-12">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} className={i > 0 ? "hairline-t" : ""}>
              <Reveal delay={i * 50}>
                <div className="grid gap-3 py-10 lg:grid-cols-2 lg:gap-10">
                  <h3 className="type-display-m text-(--text-hi)">{p.title}</h3>
                  <p className="max-w-md self-center text-lg leading-relaxed text-(--text-mid)">{p.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
