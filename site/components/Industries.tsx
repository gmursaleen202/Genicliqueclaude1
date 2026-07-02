import Reveal from "./Reveal";
import GlowField from "./GlowField";

const INDUSTRIES = [
  ["Professional services", "proposals that write themselves"],
  ["Healthcare", "reception that never misses a call"],
  ["Real estate", "every lead answered in seconds"],
  ["E-commerce", "support that scales with sales"],
  ["Logistics", "status updates without the phone tag"],
  ["Finance", "reporting on rails"],
  ["Hospitality", "bookings on autopilot"],
  ["Trades & field services", "quotes out the same day"],
  ["Legal", "intake without the intake team"],
  ["Education", "enquiries answered around the clock"],
];

export default function Industries() {
  return (
    <section data-bg="#0a0a0b" data-chapter="dark" className="section hairline-t relative overflow-hidden">
      <GlowField
        blobs={[
          { color: "#2dd4a0", top: "5%", left: "-10%", size: 560 },
          { color: "#22d3ee", bottom: "-15%", right: "-6%", size: 520, delay: "-5s" },
        ]}
      />
      <div className="container-site relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="mono-label">Where this lands</p>
          </Reveal>
        </div>
        <ul data-fx="rows" className="lg:col-span-8">
          {INDUSTRIES.map(([name, line], i) => (
            <li key={name} className={`group ${i > 0 ? "hairline-t" : ""}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 transition-transform duration-300 group-hover:translate-x-2">
                <span className="text-xl font-medium text-(--text-hi) transition-colors duration-300 group-hover:text-[#7ee7c7]">
                  {name}
                </span>
                <span className="text-(--text-mid)">{line}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
