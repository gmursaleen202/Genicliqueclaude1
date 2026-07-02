import Reveal from "./Reveal";

/**
 * Phase 1 shell: the three beats stack and reveal on scroll.
 * Phase 2 pins the section and scrubs the beats + strike-throughs (doc 04 §3).
 */
export default function Manifesto() {
  return (
    <section data-bg="#0a0a0b" data-chapter="dark" className="section">
      <div className="container-site mx-auto max-w-4xl space-y-24 text-center">
        <Reveal>
          <p className="type-display-l text-(--text-hi)">
            Most teams spend half their week on work that doesn&rsquo;t need a human.
          </p>
        </Reveal>
        <Reveal>
          <p className="type-display-m leading-relaxed">
            <span className="struck">Answering.</span> <span className="struck">Scheduling.</span>{" "}
            <span className="struck">Chasing.</span> <span className="struck">Copying.</span>{" "}
            <span className="struck">Updating.</span> <span className="struck">Reporting.</span>
          </p>
        </Reveal>
        <Reveal>
          <p className="type-display-l text-(--text-hi)">
            We build systems that take it all. Quietly. Reliably. At&nbsp;scale.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
