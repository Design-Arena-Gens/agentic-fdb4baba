import { ProcessExplorer } from "@/components/ProcessExplorer";
import { StageCard } from "@/components/StageCard";
import { Timeline } from "@/components/Timeline";

const cosmicStages = [
  {
    title: "Stellar Forge",
    subtitle: "COSMIC NURSERY",
    description:
      "Gold begins as seed nuclei inside massive stars. Repeated fusion pushes elements up the periodic table until the iron barrier halts classical fusion.",
    highlights: [
      "Iron-core collapse primes the r-process that stitches heavy elements.",
      "Requires extreme neutron flux and millisecond-scale reaction chains.",
      "Magnetars and neutron stars concentrate the necessary conditions."
    ],
    badge: "Astrophysics"
  },
  {
    title: "Neutron Star Merger",
    subtitle: "R-PROCESS FURNACE",
    description:
      "When neutron stars collide, they eject neutron-rich matter at relativistic speeds. Rapid neutron capture creates heavy, unstable isotopes that decay into stable gold.",
    highlights: [
      "Event GW170817 confirmed gold creation via gravitational waves.",
      "Each merger can spew out gold equal to several Earth masses.",
      "Ejecta cools over millennia, seeding interstellar dust clouds."
    ],
    badge: "Observed 2017"
  },
  {
    title: "Planetary Accretion",
    subtitle: "DISTRIBUTION",
    description:
      "Gold dust fuses with nascent planets. Density pulls it toward the core, leaving traces in the mantle and crust where tectonics and meteorites deliver accessible deposits.",
    highlights: [
      "Late heavy bombardment replenished crustal gold after core segregation.",
      "Hydrothermal fluids concentrate gold into veins miners exploit today.",
      "Crustal abundance remains near 0.004 ppm — scarcity drives value."
    ],
    badge: "Geology"
  }
];

const humanStages = [
  {
    title: "Extraction & Concentration",
    subtitle: "MINING & ORE BENEFICIATION",
    description:
      "Gold-bearing ore is crushed, ground, and processed to isolate the metal. Gravimetric separation, flotation, and cyanide leaching lift grades to economic levels.",
    highlights: [
      "Cyanide leach recovers >90% of gold by forming a soluble complex.",
      "Activated carbon adsorption (CIP/CIL) concentrates gold from solution.",
      "Merrill-Crowe zinc precipitation or electrowinning reclaims metal."
    ],
    badge: "Industrial"
  },
  {
    title: "Refining & Casting",
    subtitle: "PURE GOLD FABRICATION",
    description:
      "Doré bars enter refineries for electrolysis, Miller chlorination, or Wohlwill process, achieving 99.99% purity. Controlled cooling yields investment-grade bullion.",
    highlights: [
      "Wohlwill electrolysis uses chloroauric acid and gold cathodes.",
      "Induction furnaces melt and alloy gold for jewelry craftsmanship.",
      "Serial registration and assay stamps certify provenance."
    ]
  },
  {
    title: "Advanced Applications",
    subtitle: "HIGH TECH GOLD",
    description:
      "Gold's conductivity and corrosion resistance power electronics, spacecraft, and medicine. Thin films reflect thermal radiation; nanoparticles enable precision therapy.",
    highlights: [
      "Semiconductor wire bonding relies on gold's ductility.",
      "Satellite insulation deploys gold-coated polyimide blankets.",
      "Gold nanoshells target tumors for photothermal treatment."
    ]
  }
];

const timelineEvents = [
  {
    title: "Mythic Alchemy",
    era: "300 BCE – 1600 CE",
    detail:
      "Alchemists pursued chrysopoeia — turning base metals to gold — inspiring experimental apparatus that seeded modern chemistry despite lacking nuclear insight."
  },
  {
    title: "Nuclear Insight",
    era: "1901 – 1932",
    detail:
      "Rutherford, Soddy, and Curie prove elements can transmute via radioactivity. Cockcroft and Walton's accelerator (1932) splits nuclei, validating atomic mutability."
  },
  {
    title: "First Artificial Gold",
    era: "1941",
    detail:
      "Glenn Seaborg bombards mercury with neutrons in UC Berkeley's 60-inch cyclotron, yielding microscopic gold isotopes — the birth of practical nuclear alchemy."
  },
  {
    title: "Astrophysical Confirmation",
    era: "2017",
    detail:
      "LIGO and Virgo detect gravitational waves from neutron star merger GW170817; spectral analysis confirms heavy elements including gold formed during the event."
  },
  {
    title: "Modern Material Science",
    era: "2020s",
    detail:
      "Gold nanostructures and additive manufacturing unlock applications in quantum computing, catalysis, and medical diagnostics beyond monetary value."
  }
];

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.15),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(184,134,11,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <section className="space-y-8 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-auric/40 bg-auric/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-auric">
            Forging Gold
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-snug text-white sm:text-5xl lg:text-6xl">
            From Cosmic Cataclysms to Modern Labs: How Gold Is Made
          </h1>
          <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
            Gold is born in the most violent corners of the universe and refined
            by human ingenuity into the metal of kings, circuits, and cures.
            Explore the natural origins, industrial mastery, and futuristic
            experiments that define humanity&apos;s relationship with this rare
            element.
          </p>
        </section>

        <section className="mt-16 space-y-10">
          <header className="space-y-2">
            <h2 className="text-3xl font-semibold text-auric">
              Cosmic Origins
            </h2>
            <p className="text-sm text-white/70">
              Gold predates Earth itself. Its atoms were forged in cataclysmic
              stellar events before drifting across space to our young solar
              system.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {cosmicStages.map((stage) => (
              <StageCard key={stage.title} {...stage} />
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
          <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-auric">
                Earthly Journeys
              </h2>
              <p className="text-sm text-white/70">
                Once gold reaches Earth, geological forces concentrate it into
                deposits. Human innovation then liberates, purifies, and shapes
                it for trade and technology.
              </p>
              <div className="grid gap-6">
                {humanStages.map((stage) => (
                  <StageCard key={stage.title} {...stage} />
                ))}
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-auric/40 bg-auric/10 p-6 text-sm text-white/80">
              <h3 className="text-lg font-semibold text-auric">
                Why Gold Is Scarce
              </h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold text-white">Atomic Rarity:</span>{" "}
                  The r-process is rare and short-lived, limiting production.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Core Sequestration:
                  </span>{" "}
                  Most terrestrial gold sits deep within Earth&apos;s core.
                </li>
                <li>
                  <span className="font-semibold text-white">Energy Barrier:</span>{" "}
                  Creating gold artificially demands extreme energy and produces
                  radioactive waste.
                </li>
              </ul>
              <p className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white/70">
                The entire world&apos;s refined gold would fit inside a 22-meter
                cube, underscoring the cosmic odds that brought it to us.
              </p>
            </aside>
          </div>
        </section>

        <section className="mt-20 space-y-8">
          <header className="space-y-2">
            <h2 className="text-3xl font-semibold text-auric">
              Scientific Breakthroughs
            </h2>
            <p className="text-sm text-white/70">
              Humanity&apos;s pursuit of gold transformed physics and chemistry.
              Key milestones chart our growing control over matter itself.
            </p>
          </header>
          <Timeline events={timelineEvents} />
        </section>

        <section className="mt-20">
          <ProcessExplorer />
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 text-center">
          <h2 className="text-3xl font-semibold text-auric">
            Gold&apos;s Lessons for the Future
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Understanding gold&apos;s origin teaches us about stellar physics,
            planetary evolution, and the economics of scarcity. Every gram is a
            relic of cosmic violence and human craftsmanship — a reminder that
            some materials embody the universe&apos;s most extraordinary
            stories.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
            <span className="rounded-full border border-white/10 px-4 py-2">
              Neutron Star Mergers
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Nuclear Science
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Precision Refining
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Advanced Materials
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
