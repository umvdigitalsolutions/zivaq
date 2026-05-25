"use client";
import Reveal from "../components/Reveal";

export default function ProductSpecs({ category = "nutraceutical" }) {
  const isPharma = category === "pharmaceutical";

  return (
    <section id="specs" className="py-16 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-xl font-semibold text-gray-900">Specifications</h3>
        <p className="mt-2 text-sm text-gray-600 max-w-2xl">Key product specifications and packaging options.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="rounded-lg bg-white p-6 shadow-sm glass">
            <dl className="grid gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Formulation</dt>
                <dd className="mt-1 text-sm text-gray-700">{isPharma ? 'Regulated API + excipient blends with validated procedures' : 'Custom powder blend with standardized actives'}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Form Factor</dt>
                <dd className="mt-1 text-sm text-gray-700">{isPharma ? 'Sterile vials, injectables, tablets' : 'Powder (sachets), Capsules, Tablets'}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Packaging Options</dt>
                <dd className="mt-1 text-sm text-gray-700">{isPharma ? 'Tamper-evident bottles, sterile packaging, serialized labels' : 'Glass bottles, PET bottles, Sachets, Blister packs'}</dd>
              </div>
            </dl>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-lg bg-white p-6 shadow-sm glass">
            <dl className="grid gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">MOQ</dt>
                <dd className="mt-1 text-sm text-gray-700">{isPharma ? 'Varies by regulatory needs; typically larger' : 'Typically 5,000 units (varies by format)'}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Lead Time</dt>
                <dd className="mt-1 text-sm text-gray-700">{isPharma ? '12–20 weeks (validation and regulatory dependent)' : '8–12 weeks from PO depending on complexity'}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Quality</dt>
                <dd className="mt-1 text-sm text-gray-700">{isPharma ? 'cGMP, validated processes, in-depth batch documentation' : 'cGMP, batch-level QC, full documentation'}</dd>
              </div>
            </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
