"use client";
import Reveal from "../components/Reveal";

export default function ProductCTA({ category = "nutraceutical" }) {
  const isPharma = category === "pharmaceutical";

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <h3 className="text-2xl font-semibold text-gray-900">{isPharma ? 'Need regulatory support or validation?' : 'Ready to scale with confidence?'}</h3>
        </Reveal>

        <Reveal>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{isPharma ? 'Contact our technical team to discuss validation, documentation, and regulatory pathways.' : 'Contact our team for a bespoke quote, formulation support, or to request a production sample.'}</p>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:7322089240" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#15254e] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:-translate-y-0.5 transition">Call: (732) 208-9240</a>
              <a href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-[#15254e]">Request Quote</a>
              <a href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-indigo-600/90 px-5 py-2 text-sm font-semibold text-white">Request Sample</a>
            </div>
        </Reveal>
      </div>
    </section>
  );
}
