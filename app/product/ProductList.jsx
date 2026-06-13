"use client";

import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

const products = [
  {
    id: "capsules",
    title: "Capsules",
    description:
      "Flexible capsule manufacturing for custom dietary supplement blends, standardized actives, and private label programs.",
    capabilities: "Bottles, blister packs, and bulk packaging",
  },
  {
    id: "tablets",
    title: "Tablets",
    description:
      "Scalable tablet production designed for consistent dosage, clean presentation, and dependable batch-to-batch execution.",
    capabilities: "Coated, uncoated, chewable, and specialty tablets",
  },
  {
    id: "powder-blends",
    title: "Powder Blends",
    description:
      "Precision powder blending for wellness, sports nutrition, functional nutrition, and custom supplement formulas.",
    capabilities: "Tubs, stick packs, sachets, and bulk formats",
  },
  {
    id: "softgels",
    title: "Softgels",
    description:
      "Softgel manufacturing support for oil-based ingredients, premium supplement formats, and polished retail presentation.",
    capabilities: "Bottled softgels and private label packaging",
  },
  {
    id: "gummies",
    title: "Gummies",
    description:
      "Consumer-friendly gummy supplement formats developed for flavor, texture, consistency, and scalable production.",
    capabilities: "Bottles, pouches, and custom packaging options",
  },
];

const productLines = [
  {
    id: "acetaminophen-500",
    title: "Acetaminophen 500 mg",
    format: "Tablets",
  },
  {
    id: "diphenhydramine-25",
    title: "Diphenhydramine 25 mg",
    format: "Tablets",
  },
  {
    id: "sodium-chloride",
    title: "Sodium Chloride",
    format: "Tablets",
  },
  {
    id: "sodium-bicarbonate",
    title: "Sodium Bicarbonate",
    format: "Tablets",
  },
  {
    id: "magnesium-oxide-400",
    title: "Magnesium Oxide 400 mg",
    format: "Tablets",
  },
  {
    id: "guaifenesin-400",
    title: "Guaifenesin 400 mg",
    format: "Tablets",
  },
];

export default function ProductList() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
            Product Formats
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#15254e] sm:text-5xl">
            Dietary supplement manufacturing built around the formats brands need most
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">
            ZivaQ Pharmaceuticals supports scalable production across capsules,
            tablets, powder blends, softgels, and gummies with practical
            formulation, packaging, and production support.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Reveal key={product.id}>
              <TiltCard>
                <article className="h-full rounded-2xl border border-[#efe7d8] bg-[#fbf8f2] p-7 shadow-sm transition-transform hover:-translate-y-2 hover:shadow-xl">
                  <h2 className="text-xl font-semibold text-[#15254e]">
                    {product.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-gray-700">
                    {product.description}
                  </p>
                  <div className="mt-6 border-t border-[#d9bf8b]/40 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5c28]">
                      Capabilities
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      {product.capabilities}
                    </p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-[#efe7d8] pt-12">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
              Product Line
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#15254e]">
              Additional tablet products
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Selected high-demand tablet products supported through scalable
              manufacturing, packaging, and documentation workflows.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productLines.map((product) => (
              <Reveal key={product.id}>
                <article className="h-full border border-[#efe7d8] bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5c28]">
                    {product.format}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-[#15254e]">
                    {product.title}
                  </h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
