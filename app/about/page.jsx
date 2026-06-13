export const metadata = {
  title: "About ZivaQ Pharma | Our Supplement Manufacturing Mission",
  description:
    "Learn about ZivaQ Pharma — a New Jersey-based nutraceutical manufacturer committed to quality, innovation, and cGMP-compliant dietary supplement production at 15 Cotters Lane, East Brunswick, NJ 08816.",
  keywords: [
    "ZivaQ Pharmaceuticals about",
    "nutraceutical manufacturer New Jersey",
    "supplement manufacturer East Brunswick NJ",
    "dietary supplement company New Jersey",
    "contract manufacturer Middlesex County NJ",
  ],
  alternates: { canonical: "https://zivaqpharma.com/about" },
  openGraph: {
    title: "About ZivaQ Pharma | Nutraceutical Manufacturer in East Brunswick, NJ",
    description:
      "Learn about ZivaQ Pharma — a cGMP nutraceutical and dietary supplement contract manufacturer based in East Brunswick, New Jersey.",
    url: "https://zivaqpharma.com/about",
  },
};

import {
  CircleDot,
  Pill,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import Reveal from "../components/Reveal";

const capacity = [
  { value: "10M", label: "Tablets per shift", icon: CircleDot },
  { value: "11M", label: "Capsules per shift", icon: Pill },
  { value: "100/min", label: "Automated bottle fills", icon: PackageCheck },
];

const capabilities = [
  "Formulation support for tablets, capsules, powders, softgels, and gummies",
  "Contract manufacturing for scalable dietary supplement programs",
  "Packaging and labeling support for retail-ready and private label products",
  "Process planning, batch documentation, and repeatable operating workflows",
  "Production planning for launch runs, repeat orders, and growing volume needs",
  "Customer support from product concept through finished goods coordination",
];

const leadershipFocus = [
  "Manufacturing discipline",
  "Formulation and product planning",
  "Quality systems and documentation",
  "Packaging execution",
  "Supply and production coordination",
  "Commercial launch readiness",
];

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-linear-to-b from-white via-[#fbf8f2] to-white pb-14 pt-16">
        <div
          className="absolute -left-32 top-0 h-144 w-xl rounded-full bg-[#d9bf8b]/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-5xl">
            <p className="inline-block rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
              About Us
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#15254e] sm:text-6xl">
              A manufacturing partner built for scale, quality, and dependable execution
            </h1>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-700">
              ZivaQ Pharmaceuticals Inc. is a dietary supplement manufacturing
              company based in East Brunswick, New Jersey. We support brands
              that need practical formulation guidance, dependable production
              systems, polished packaging, and a partner who understands what it
              takes to move from concept to market-ready product.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5c28]">
                  Who We Are
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#15254e] md:text-5xl">
                  Focused on the work behind strong supplement brands
                </h2>
              </div>

              <div className="space-y-4 text-lg leading-8 text-gray-700">
                <p>
                  ZivaQ brings together manufacturing discipline, formulation
                  awareness, packaging coordination, and customer-focused
                  execution. Our role is to help supplement brands build
                  products that are consistent, scalable, and presented with the
                  quality expected in a competitive market.
                </p>

                <p>
                  We work across the major supplement formats brands rely on:
                  capsules, tablets, powder blends, softgels, and gummies. Our
                  approach is structured around clear planning, controlled
                  workflows, reliable communication, and production systems that
                  can support both new launches and repeat programs.
                </p>

                <p>
                  From the first manufacturing conversation through finished
                  output, ZivaQ is designed to operate as a practical long-term
                  partner. We focus on the details that affect execution:
                  ingredient format, dosage form, packaging needs, production
                  scale, documentation, and the customer experience after the
                  first order is complete.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fbf8f2] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5c28]">
                  Mission
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#15254e]">
                  Helping brands manufacture with confidence
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  Our mission is to help clients succeed by providing premium
                  manufacturing solutions that scale reliably, maintain
                  consistency, and meet market expectations. We aim to make the
                  manufacturing process clearer, more organized, and easier to
                  manage for growing supplement companies.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5c28]">
                  Vision
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#15254e]">
                  Becoming a trusted partner for scalable supplement production
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  Our vision is to become a preferred manufacturing partner for
                  supplement brands that value precision, transparency, and
                  dependable execution. We are building ZivaQ around the belief
                  that strong production systems and thoughtful customer support
                  can help brands grow without compromising quality.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#15254e] py-20 text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,191,139,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(217,191,139,0.08),transparent_50%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9bf8b]/40 bg-white/5 px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#d9bf8b]">
                  Production Capacity
                </span>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                  Built for serious manufacturing scale
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  Our output capacity is designed to support both launch-scale
                  runs and high-volume repeat programs — with automated packaging
                  lines and multi-format production running concurrently.
                </p>
                <a
                  href="/facility"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d9bf8b]/40 bg-white/5 px-5 py-2.5 text-sm font-semibold text-[#d9bf8b] transition-all duration-200 hover:bg-white/10 hover:border-[#d9bf8b]/70"
                >
                  See full facility details
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {capacity.map(({ value, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#d9bf8b]/50 hover:bg-white/10"
                  >
                    <div className="absolute right-0 top-0 h-14 w-14 rounded-bl-2xl bg-[#d9bf8b]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                    <div className="inline-flex items-center justify-center rounded-xl border border-[#d9bf8b]/30 bg-[#d9bf8b]/10 p-2.5">
                      <Icon className="h-5 w-5 text-[#d9bf8b]" strokeWidth={1.8} />
                    </div>
                    <p className="mt-5 text-3xl font-extrabold tracking-tight text-white">
                      {value}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#d9bf8b]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5c28]">
                  Capabilities
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#15254e] md:text-5xl">
                  Support across formulation, production, and presentation
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  Our capabilities are designed around the practical needs of
                  brands preparing to launch, refresh, or scale dietary
                  supplement products.
                </p>
              </div>

              <div className="divide-y divide-[#efe7d8]">
                {capabilities.map((item, index) => (
                  <div key={item} className="grid gap-3 py-4 sm:grid-cols-[4rem_1fr]">
                    <p className="text-sm font-semibold tracking-[0.22em] text-[#7a5c28]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="text-lg leading-8 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f1e7] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5c28]">
                Leadership & Expertise
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#15254e] md:text-6xl">
                Leadership that stays close to the details
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                The ZivaQ leadership team is central to how the company works.
                Rather than treating leadership as a distant function, our team
                stays connected to product planning, production readiness,
                packaging execution, customer communication, and quality-minded
                operating systems.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                This hands-on approach helps clients get clearer answers,
                stronger planning, and a more dependable path from initial
                requirement to finished product. Our leadership focus is built
                around experience, accountability, and the practical judgment
                needed to support brands at scale.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
              {leadershipFocus.map((item) => (
                <div key={item} className="border-t border-[#d9bf8b] pt-4">
                  <p className="text-xl font-semibold text-[#15254e]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5c28]">
                  Values
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#15254e] md:text-5xl">
                  The principles behind every partnership
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#15254e]">
                    Precision
                  </h3>
                  <p className="mt-3 text-lg leading-8 text-gray-700">
                    We believe strong manufacturing starts with careful planning,
                    clear specifications, controlled workflows, and attention to
                    detail at each stage of production.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#15254e]">
                    Integrity
                  </h3>
                  <p className="mt-3 text-lg leading-8 text-gray-700">
                    We value transparent communication, ethical operations, and
                    partnership habits that help customers understand what is
                    happening, what is needed, and what comes next.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#15254e]">
                    Quality
                  </h3>
                  <p className="mt-3 text-lg leading-8 text-gray-700">
                    We build around documented systems, clean processes,
                    dependable execution, and consistency that supports customer
                    trust over the long term.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
