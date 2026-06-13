const trustPoints = [
  "Quality-led manufacturing systems",
  "Premium packaging presentation",
  "Structured support for scale",
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m13 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#d9bf8b]/15 text-[#7a5c28]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-3.5 w-3.5"
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

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fbf8f2] pb-20 pt-24 sm:pb-24 sm:pt-32">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(21,37,78,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(217,191,139,0.24),transparent_26%),linear-gradient(180deg,#fbf8f2_0%,#f7f1e7_55%,#f4eee3_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-white/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-16 top-28 -z-10 h-56 w-56 rounded-full border border-[#15254e]/10"
        aria-hidden="true"
      />
      <div
        className="absolute right-12 top-20 -z-10 h-28 w-28 rounded-full bg-[#d9bf8b]/20 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-12 left-[42%] -z-10 h-20 w-20 rounded-full bg-[#15254e]/10 blur-2xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        {/* Left */}
        <div>
          <div className="mb-8 inline-flex items-center rounded-full border border-[#d9bf8b]/60 bg-white/75 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#7a5c28] shadow-sm backdrop-blur-md">
            Dietary Supplement Manufacturing Excellence
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[#15254e] sm:text-6xl lg:text-7xl">
            Precision. Purity. Performance.
            <span className="mt-2 block bg-gradient-to-r from-[#7a5c28] via-[#a27a33] to-[#7a5c28] bg-clip-text text-transparent">
              Without Compromise.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            From formulation support to polished finished output, ZivaQ
            Pharmaceuticals delivers a refined, compliant, and confidence
            building production experience for modern supplement brands.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center rounded-full bg-[#15254e] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(21,37,78,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d3368]"
            >
              Start a Conversation
            </a>

            <a
              href="/product"
              className="group inline-flex items-center text-sm font-semibold text-[#15254e] transition-colors duration-300 hover:text-[#7a5c28]"
            >
              Explore Capabilities
              <ArrowIcon />
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:max-w-2xl sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/80 bg-white/65 px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-sm leading-6 text-slate-700">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#d9bf8b]/25 blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-36 w-36 rounded-full bg-[#15254e]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-[#15254e] p-6 text-white shadow-[0_34px_100px_rgba(21,37,78,0.28)] sm:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),transparent_32%,rgba(217,191,139,0.16),transparent_75%)]" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#d9bf8b]/10 blur-3xl" />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#d9bf8b]">
                    ZivaQ Signature
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Elevated production standards
                  </h2>
                </div>

                <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 backdrop-blur-sm">
                  Quality First
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#d9bf8b]">
                    Manufacturing
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-200">
                    Structured production support designed to balance precision,
                    presentation, and dependable execution for premium
                    supplement brands.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-3xl font-semibold text-white">cGMP</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      quality-oriented operational mindset
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-3xl font-semibold text-white">Turnkey</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      support across development to delivery
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-[#d9bf8b]/25 bg-gradient-to-r from-[#1b2f5f] to-[#223c78] p-5 shadow-inner">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#d9bf8b]">
                    Brand Promise
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-100">
                    We combine refined presentation, controlled execution, and
                    production confidence to help your brand scale with trust.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Precision", value: "High" },
                  { label: "Support", value: "End-to-End" },
                  { label: "Trust", value: "Built-In" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
                  >
                    <p className="text-base font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-300">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
