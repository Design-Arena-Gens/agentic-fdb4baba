"use client";

import { useMemo, useState } from "react";

type Scenario = {
  name: string;
  description: string;
  energy: number;
  energyUnit: string;
  cost: string;
  feasibility: "Experimental" | "Industrial" | "Theoretical";
  inputs: string[];
  byproducts: string[];
  insight: string;
};

const scenarios: Scenario[] = [
  {
    name: "Natural Astrophysical Synthesis",
    description:
      "Gold nuclei form when neutron stars merge or during supernovae. The r-process floods atomic seeds with neutrons, building up to heavy elements like gold before ejecting them into space.",
    energy: 1.5e46,
    energyUnit: "J per event",
    cost: "Uncontrollable phenomenon",
    feasibility: "Experimental",
    inputs: [
      "Two neutron stars (~1.4 solar masses each)",
      "Enormous gravitational potential",
      "Relativistic jets"
    ],
    byproducts: [
      "Heavy elements beyond iron",
      "Gamma-ray bursts",
      "Gravitational waves"
    ],
    insight:
      "The only known naturally efficient way to forge gold. Humans can only observe, not replicate."
  },
  {
    name: "Particle Accelerator Transmutation",
    description:
      "High-energy particle beams bombard mercury or platinum nuclei, knocking out or adding nucleons to reach gold. This was achieved in 1941 by Seaborg's team, producing microscopic amounts.",
    energy: 2.1e16,
    energyUnit: "J per gram",
    cost: "$10 quadrillion per kg (energy alone)",
    feasibility: "Experimental",
    inputs: [
      "Mercury or platinum targets",
      "Particle accelerator (cyclotron / synchrotron)",
      "Neutron capture sequence management"
    ],
    byproducts: [
      "Radioactive isotopes",
      "Heat requiring dissipation",
      "High-energy radiation fields"
    ],
    insight:
      "Scientifically possible but economically outrageous. Used only to prove concept or produce rare isotopes."
  },
  {
    name: "Nuclear Reactor Neutron Capture",
    description:
      "Heavy atoms in a reactor absorb neutrons and beta-decay toward gold. Control rods and isotope separation attempt to boost yields, but cross-sections and competing decays waste most neutrons.",
    energy: 4.8e12,
    energyUnit: "J per gram",
    cost: "$1 trillion per kg (fuel + operations)",
    feasibility: "Theoretical",
    inputs: [
      "High-flux breeder reactor",
      "Enriched platinum-group isotopes",
      "Chemical separation facility"
    ],
    byproducts: [
      "Long-lived radioactive waste",
      "Neutron-activated reactor components",
      "Contaminated cooling loops"
    ],
    insight:
      "Even best-case modeling yields trace output. Regulatory and waste challenges overshadow potential profit."
  },
  {
    name: "Plasma-Based Alchemy",
    description:
      "Conceptual fusion-level reactors attempt to fuse light nuclei up to gold. Requires containment of superheated plasma and precise microgravity-like conditions to avoid disintegration.",
    energy: 6.5e18,
    energyUnit: "J per gram",
    cost: "Undefined — exceeds global GDP",
    feasibility: "Theoretical",
    inputs: [
      "Inertial-confinement laser array",
      "Isotopically pure feedstock",
      "Subatomic debris traps"
    ],
    byproducts: [
      "Catastrophic reactor damage on failure",
      "Exotic isotopes with unknown decay chains",
      "Radiation-induced material fatigue"
    ],
    insight:
      "Pure science fiction with modern technology; highlights why nature's astrophysical furnaces remain unmatched."
  }
];

export function ProcessExplorer() {
  const [index, setIndex] = useState(1);

  const selected = useMemo(() => scenarios[index], [index]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <header className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-2xl font-semibold text-auric">
            Synthetic Gold Pathways
          </h3>
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">
            Scenario {index + 1} / {scenarios.length}
          </span>
        </div>
        <p className="text-sm text-white/70">
          Slide through the pathways scientists have explored to fabricate gold.
          None rival cosmic events, but each reveals the scale of challenge.
        </p>
      </header>
      <div className="mt-6 flex flex-col gap-6">
        <input
          type="range"
          min={0}
          max={scenarios.length - 1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-auric"
        />
        <article className="space-y-4 rounded-2xl border border-white/10 bg-midnight/60 p-6 shadow-inner shadow-black/40">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold text-white">
                {selected.name}
              </h4>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Feasibility: {selected.feasibility}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-right text-sm text-white/70">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Energy Demand
                </p>
                <p className="font-mono text-auric">
                  {selected.energy.toLocaleString()}
                </p>
                <p className="text-xs text-white/50">{selected.energyUnit}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Cost Outlook
                </p>
                <p className="font-semibold text-white">{selected.cost}</p>
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            {selected.description}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h5 className="text-xs uppercase tracking-[0.3em] text-white/50">
                Inputs
              </h5>
              <ul className="mt-2 space-y-2 text-sm text-white/75">
                {selected.inputs.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-auric" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h5 className="text-xs uppercase tracking-[0.3em] text-white/50">
                Byproducts
              </h5>
              <ul className="mt-2 space-y-2 text-sm text-white/75">
                {selected.byproducts.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-auric" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="rounded-xl border border-auric/40 bg-auric/10 p-4 text-sm text-auric">
            {selected.insight}
          </p>
        </article>
      </div>
    </section>
  );
}
