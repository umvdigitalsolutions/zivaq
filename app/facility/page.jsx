export const metadata = {
  title: "Facility - ZivaQ Pharmaceuticals",
  description:
    "ZivaQ Pharmaceuticals facility details, production capacity, cleanrooms, and planned certifications.",
};

import Reveal from "../components/Reveal";

const facilityStats = [
  { value: "45,000 sq ft", label: "Manufacturing footprint" },
  { value: "1,600", label: "Pallet storage capacity" },
  { value: "15,000 kg", label: "Powder processing per shift" },
  { value: "10M", label: "Tablets per shift" },
  { value: "11M", label: "Capsules per shift" },
];

const cleanroomDetails = [
  "ISO Class 8 cleanroom areas planned for controlled production workflows",
  "Segregated spaces for receiving, staging, blending, production, and packaging",
  "Controlled material movement to support traceability and clean operations",
  "Scalable layout for high-volume supplement formats and private label programs",
];

const certifications = [
  "cGMP-oriented systems",
  "FDA registration planning",
  "ISO Class 8 cleanroom design",
  "Batch documentation and traceability",
  "Supplier qualification and incoming material review",
  "Finished product packaging and labeling controls",
];

export default function FacilityPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#fbf8f2] pb-20 pt-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,37,78,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(217,191,139,0.18),transparent_30%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="inline-block rounded-full border border-[#d9bf8b] bg-white px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
              Facility
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#15254e] sm:text-5xl">
              A scalable manufacturing environment built for clean, consistent production
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Our East Brunswick facility is planned around efficient material
              flow, clean production areas, high-volume capacity, and the
              documentation discipline dietary supplement brands expect from a
              dependable manufacturing partner.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {facilityStats.map((item) => (
                <div
                  key={item.label}
                  className="border-t-4 border-[#d9bf8b] bg-[#fbf8f2] p-7 shadow-sm"
                >
                  <p className="text-3xl font-extrabold text-[#15254e]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#7a5c28]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f1e7] py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div>
              <h2 className="text-3xl font-extrabold text-[#15254e]">
                Facility Details
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                The facility supports core supplement formats including
                capsules, tablets, powder blends, softgels, and gummies. The
                operating plan emphasizes clean work areas, organized material
                handling, and production capacity suitable for growing brands.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ul className="space-y-4">
              {cleanroomDetails.map((item) => (
                <li key={item} className="flex gap-3 bg-white p-5 shadow-sm">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#7a5c28]" />
                  <span className="text-sm leading-7 text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#15254e]">
                Standards & Certifications
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                ZivaQ Pharmaceuticals is building its operating systems around
                strong documentation, cleanroom discipline, supplier review, and
                production controls that support customer confidence.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((item) => (
                <div
                  key={item}
                  className="border border-[#efe7d8] bg-white px-5 py-4 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
