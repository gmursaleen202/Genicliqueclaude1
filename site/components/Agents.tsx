import Reveal from "./Reveal";

const AGENTS = [
  { id: "01", name: "Support", caps: ["Answers on brand, from your docs", "Escalates only what needs a human", "Every channel, every hour"], ledger: "first reply < 5 s" },
  { id: "02", name: "Sales", caps: ["Qualifies every inbound lead", "Follows up until there's an answer", "Books the meeting itself"], ledger: "follow-up rate: 100%" },
  { id: "03", name: "Bookings", caps: ["Real-time calendar management", "Reschedules without the email chain", "Reminders that actually reduce no-shows"], ledger: "no-shows down [verify]" },
  { id: "04", name: "Knowledge", caps: ["Your policies and processes, answerable", "Sources cited on every answer", "Onboards new staff on day one"], ledger: "answers, with citations" },
  { id: "05", name: "Voice", caps: ["Answers the phone in your voice", "Takes bookings and messages", "Transfers judgement calls to people"], ledger: "reception, 24/7" },
  { id: "06", name: "Ops", caps: ["Runs the checklist while you sleep", "Chases what's overdue", "Reports what changed by morning"], ledger: "runs overnight" },
];

export default function Agents() {
  return (
    <section data-bg="#0a0a0b" data-chapter="dark" className="section hairline-t">
      <div className="container-site">
        <Reveal>
          <p className="mono-label">AI agents</p>
          <h2 className="type-display-l mt-6 max-w-3xl text-(--text-hi)">Agents on staff.</h2>
          <p className="mt-6 max-w-md text-lg text-(--text-mid)">
            Six roles we hire for most often. Each one thinks, communicates, and executes inside your existing tools.
          </p>
        </Reveal>
        <div className="snap-rail mt-16" role="list">
          {AGENTS.map((a) => (
            <article
              key={a.id}
              role="listitem"
              className="w-[300px] rounded-lg border border-(--hairline) bg-ink-2 p-7"
            >
              <p className="mono-label">
                Agent / {a.id} — {a.name}
              </p>
              <ul className="mt-6 space-y-3 text-[15px] leading-snug text-(--text-mid)">
                {a.caps.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span aria-hidden="true" className="text-(--text-low)">
                      —
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mono-data hairline-t mt-8 flex items-center gap-2.5 pt-4 text-[13px] text-(--text-low)">
                <span className="live-dot" />
                {a.ledger}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
