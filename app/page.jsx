export const metadata = {
  title:
    "ZivaQ Pharma | Nutraceutical Contract Manufacturer in USA (NJ)",
  description:
    "ZivaQ Pharma is a trusted cGMP nutraceutical & dietary supplement contract manufacturer in New Jersey, USA. Capsules, tablets, powders, softgels & private label. Get a free quote.",
  alternates: { canonical: "https://zivaqpharma.com" },
  openGraph: {
    title: "ZivaQ Pharma | Nutraceutical Contract Manufacturer USA",
    description:
      "Trusted cGMP supplement manufacturing partner in NJ. Capsules, tablets, powders & private label. Get a free quote today.",
    url: "https://zivaqpharma.com",
  },
};

import Hero from "./components/Hero";

const services = [
  {
    title: "Formulation",
    desc: "Practical formulation support that helps translate product goals into scalable dietary supplement formats.",
  },
  {
    title: "Contract Manufacturing",
    desc: "End-to-end dietary supplement manufacturing support with dependable systems and scalable execution.",
  },
  {
    title: "Packaging & Labeling",
    desc: "Refined packaging and labeling solutions designed for compliance, shelf appeal, and market-ready presentation.",
  },
];

const highlights = [
  "cGMP-oriented workflow",
  "Private label manufacturing",
  "Premium packaging support",
  "Reliable turnaround systems",
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "We understand your formulation, packaging, production scale, and market expectations before planning execution.",
  },
  {
    step: "02",
    title: "Planning & Development",
    desc: "Our team aligns manufacturing strategy, packaging direction, and process requirements for a streamlined workflow.",
  },
  {
    step: "03",
    title: "Production & Quality",
    desc: "Controlled production processes and quality-focused systems help maintain professional standards across batches.",
  },
  {
    step: "04",
    title: "Delivery Support",
    desc: "We ensure finished products are prepared with the documentation, presentation, and consistency expected by growing brands.",
  },
];

const testimonials = [
  {
    quote:
      "ZivaQ brought clarity, structure, and dependable quality to our manufacturing journey from day one.",
    name: "Brand Partner",
    role: "Dietary Supplement Company",
  },
  {
    quote:
      "Professional communication, reliable execution, and a strong understanding of premium product presentation.",
    name: "Operations Head",
    role: "Health & Wellness Brand",
  },
  {
    quote:
      "Their manufacturing confidence and packaging support made them feel like a true long-term partner.",
    name: "Product Team",
    role: "Private Label Business",
  },
];

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7"
    >
      <path d="M12 2 4 5v6c0 5.25 3.438 10.125 8 11 4.563-.875 8-5.75 8-11V5l-8-3Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d9bf8b]/15 text-[#7a5c28]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.418.008L3.296 9.224A1 1 0 1 1 4.71 7.81l4.086 4.038 6.494-6.55a1 1 0 0 1 1.414-.007Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Mission */}
      <section className="relative overflow-hidden bg-[#fbf8f2] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,37,78,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(217,191,139,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-[#d9bf8b]/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a5c28] backdrop-blur-sm">
                Our Mission
              </span>

              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-[#15254e] md:text-5xl">
                Trusted manufacturing solutions for modern dietary supplement
                brands.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
                At ZivaQ Pharmaceuticals, we are committed to delivering
                high-quality manufacturing support with precision, consistency,
                and professionalism. Our approach combines production
                excellence, refined packaging support, and dependable systems to
                help brands grow with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d9bf8b]/40 bg-white/70 px-4 py-2 text-sm font-medium text-[#7a5c28] shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#d9bf8b]/25 blur-2xl" />
              <div className="absolute -bottom-8 -right-4 h-28 w-28 rounded-full bg-[#15254e]/15 blur-2xl" />

              <div className="relative rounded-[30px] border border-white/70 bg-linear-to-br from-white/90 to-[#f4eee3] p-8 shadow-[0_24px_80px_rgba(21,37,78,0.10)] backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Why ZivaQ
                  </span>
                  <span className="rounded-full bg-[#15254e] px-3 py-1 text-xs font-semibold text-white">
                    Trusted Standards
                  </span>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm">
                    <p className="text-sm font-semibold text-[#15254e]">
                      Precision Manufacturing
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      Structured production systems designed for quality,
                      efficiency, and dependable product consistency.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm">
                    <p className="text-sm font-semibold text-[#15254e]">
                      Professional Packaging
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      Packaging and labeling support that strengthens compliance,
                      product presentation, and brand identity.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm">
                    <p className="text-sm font-semibold text-[#15254e]">
                      Scalable Partnership
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      Ideal for businesses seeking a reliable long-term
                      manufacturing partner with premium execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Standards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-[#d9bf8b]/60 bg-[#fbf8f2] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5c28]">
              Trusted Standards
            </span>
            <h3 className="mt-5 text-3xl font-semibold text-[#15254e] md:text-4xl">
              Built around quality, compliance, and confidence
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-slate-700 leading-8">
              Our manufacturing approach is designed to support professional
              quality benchmarks, dependable systems, and strong brand trust in
              every stage of production.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "cGMP Focused",
              "Documented Standards",
              "Packaging Excellence",
              "Reliable Processes",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[26px] border border-[#efe7d8] bg-[#fbf8f2] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(21,37,78,0.08)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#15254e] text-[#d9bf8b]">
                  <ShieldIcon />
                </div>
                <h4 className="mt-5 text-lg font-semibold text-[#15254e]">
                  {item}
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Designed to reflect dependable manufacturing standards and
                  professional execution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#f7f1e7] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-[#d9bf8b]/60 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a5c28]">
                Our Services
              </span>
              <h3 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-[#15254e] md:text-4xl">
                Comprehensive manufacturing support with premium presentation
              </h3>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-700 md:text-base">
              We support product businesses with clean systems, dependable
              manufacturing planning, and quality-led production workflows built
              for trust and long-term growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-[28px] border border-white/80 bg-white/80 p-7 shadow-[0_12px_40px_rgba(21,37,78,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(21,37,78,0.10)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#15254e] to-[#27407e] text-sm font-semibold text-white shadow-md">
                  {`0${index + 1}`}
                </div>

                <h4 className="mt-6 text-xl font-semibold text-[#15254e]">
                  {service.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {service.desc}
                </p>

                <div className="mt-6 h-px w-full bg-linear-to-r from-[#d9bf8b] to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { value: "Quality", label: "Driven Systems" },
              { value: "Reliable", label: "Production Support" },
              { value: "Modern", label: "Packaging Approach" },
              { value: "Trusted", label: "Manufacturing Partner" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[#efe7d8] bg-[#fbf8f2] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl font-semibold tracking-tight text-[#15254e]">
                  {item.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-[#7a5c28]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#fbf8f2] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#d9bf8b]/60 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a5c28]">
              Our Process
            </span>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-[#15254e] md:text-4xl">
              A smooth journey from requirement planning to finished product
            </h3>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-[26px] border border-white/80 bg-white/75 p-7 shadow-sm transition duration-300 hover:-translate-y-1"
              >
                <div className="text-sm font-semibold tracking-[0.3em] text-[#7a5c28]">
                  {item.step}
                </div>
                <h4 className="mt-4 text-xl font-semibold text-[#15254e]">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What nutraceutical and supplement formats does ZivaQ manufacture?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ZivaQ Pharmaceuticals manufactures capsules (gelatin and HPMC), tablets (coated, uncoated, chewable), powder blends, softgels, and gummies. We support private label, custom formulation, and contract manufacturing programs for supplement brands across the USA.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are you cGMP compliant and FDA-registered?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ZivaQ Pharmaceuticals operates with cGMP-oriented systems including batch documentation, supplier qualification, in-process quality checks, and cleanroom production areas. FDA facility registration is planned as part of our ongoing compliance roadmap.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer private label supplement manufacturing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. ZivaQ offers full private label supplement manufacturing including formulation support, packaging design coordination, labeling, and finished goods production for supplement brands across the USA.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the minimum order quantity (MOQ) for supplement contract manufacturing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "MOQ varies by product format and formulation complexity. Contact our team at (732) 208-9240 or info@zivaqpharma.com to discuss requirements for your specific product.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does supplement contract manufacturing take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lead times depend on product format, formulation complexity, and order volume. Our team works with each brand to plan a realistic production timeline from formulation sign-off through finished goods delivery.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does ZivaQ ship supplements nationwide across the USA?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Located in East Brunswick, New Jersey, ZivaQ Pharmaceuticals serves supplement brands across the entire United States. Our facility provides access to major East Coast shipping corridors and nationwide distribution networks.",
                  },
                },
              ],
            }),
          }}
        />

        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <span className="inline-flex rounded-full border border-[#d9bf8b]/60 bg-[#fffaf0] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5c28]">
              FAQ
            </span>
            <h2 className="mt-5 text-3xl font-semibold text-[#15254e] md:text-4xl">
              Common questions about our nutraceutical manufacturing
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 max-w-2xl mx-auto">
              Everything supplement brands typically ask before starting a contract manufacturing partnership.
            </p>
          </div>

          <div className="divide-y divide-[#efe7d8]">
            {[
              {
                q: "What supplement formats does ZivaQ manufacture?",
                a: "We manufacture capsules (gelatin and HPMC), tablets (coated, uncoated, chewable), powder blends, softgels, and gummies. We support private label, custom formulation, and contract manufacturing programs for supplement brands across the USA.",
              },
              {
                q: "Are you cGMP compliant and FDA-registered?",
                a: "ZivaQ operates with cGMP-oriented systems including batch documentation, supplier qualification, in-process quality checks, and cleanroom production areas. FDA facility registration is part of our planned compliance roadmap.",
              },
              {
                q: "Do you offer private label supplement manufacturing?",
                a: "Yes. We offer full private label programs including formulation support, packaging coordination, labeling, and finished goods manufacturing for supplement brands across the United States.",
              },
              {
                q: "What is the minimum order quantity (MOQ)?",
                a: "MOQ varies by format and formulation complexity. Contact our team at (732) 208-9240 or info@zivaqpharma.com to discuss your specific product requirements.",
              },
              {
                q: "How long does the manufacturing process take?",
                a: "Lead times depend on product format, formulation complexity, and order volume. Our team works with each brand to plan a realistic timeline from formulation sign-off through finished goods delivery.",
              },
              {
                q: "Does ZivaQ ship supplements nationwide across the USA?",
                a: "Yes. Located in East Brunswick, New Jersey, we serve supplement brands across the entire United States. Our facility has access to major East Coast shipping corridors and nationwide distribution networks.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-[#15254e] group-open:text-[#7a5c28]">
                    {q}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d9bf8b]/50 bg-[#fffaf0] text-[#7a5c28] transition-transform duration-200 group-open:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600 max-w-3xl">
                  {a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#efe7d8] bg-[#fbf8f2] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-medium text-[#15254e]">
              Have a specific question about your supplement project?
            </p>
            <a
              href="/contact"
              className="shrink-0 inline-flex items-center rounded-full bg-[#15254e] px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-[#1d3368]"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-[#15254e] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(217,191,139,0.16),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9bf8b]">
              Partner Trust
            </span>
            <h3 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Built on confidence, consistency, and professional delivery
            </h3>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[26px] border border-white/15 bg-white/10 p-7 backdrop-blur-sm transition duration-300 hover:bg-white/[0.14]"
              >
                <p className="text-sm leading-8 text-slate-100">
                  “{item.quote}”
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-[#d9bf8b]/85">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
