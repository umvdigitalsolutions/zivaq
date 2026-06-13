"use client";

import {
  Pill,
  CircleDot,
  FlaskConical,
  Droplets,
  Candy,
  Package,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

const products = [
  {
    id: "capsules",
    title: "Capsules",
    icon: Pill,
    description:
      "Flexible capsule manufacturing for custom dietary supplement blends, standardized actives, and private label programs.",
    capabilities: ["Bottles", "Blister packs", "Bulk packaging"],
    color: "from-blue-50 to-[#fbf8f2]",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "tablets",
    title: "Tablets",
    icon: CircleDot,
    description:
      "Scalable tablet production designed for consistent dosage, clean presentation, and dependable batch-to-batch execution.",
    capabilities: ["Coated", "Uncoated", "Chewable", "Specialty tablets"],
    color: "from-amber-50 to-[#fbf8f2]",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: "powder-blends",
    title: "Powder Blends",
    icon: FlaskConical,
    description:
      "Precision powder blending for wellness, sports nutrition, functional nutrition, and custom supplement formulas.",
    capabilities: ["Tubs", "Stick packs", "Sachets", "Bulk formats"],
    color: "from-green-50 to-[#fbf8f2]",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "softgels",
    title: "Softgels",
    icon: Droplets,
    description:
      "Softgel manufacturing support for oil-based ingredients, premium supplement formats, and polished retail presentation.",
    capabilities: ["Bottled softgels", "Private label packaging"],
    color: "from-purple-50 to-[#fbf8f2]",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "gummies",
    title: "Gummies",
    icon: Candy,
    description:
      "Consumer-friendly gummy supplement formats developed for flavor, texture, consistency, and scalable production.",
    capabilities: ["Bottles", "Pouches", "Custom packaging options"],
    color: "from-pink-50 to-[#fbf8f2]",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero header */}
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
              <Sparkles className="h-3.5 w-3.5" />
              Product Formats
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#15254e] sm:text-5xl">
              Dietary supplement manufacturing built around the formats brands need most
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              ZivaQ Pharmaceuticals supports scalable production across capsules,
              tablets, powder blends, softgels, and gummies with practical
              formulation, packaging, and production support.
            </p>
          </div>
        </Reveal>

        {/* Product format cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.id}>
                <TiltCard>
                  <article className={`h-full rounded-2xl border border-[#efe7d8] bg-linear-to-br ${product.color} p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                    {/* Icon badge */}
                    <div className={`inline-flex items-center justify-center rounded-xl ${product.iconBg} p-3`}>
                      <Icon className={`h-6 w-6 ${product.iconColor}`} strokeWidth={1.8} />
                    </div>

                    <h2 className="mt-5 text-xl font-bold text-[#15254e]">
                      {product.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {product.description}
                    </p>

                    <div className="mt-6 border-t border-[#d9bf8b]/40 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5c28] mb-3">
                        Packaging Options
                      </p>
                      <ul className="space-y-2">
                        {product.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7a5c28]" strokeWidth={2} />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {/* Product line section */}
        <div className="mt-20 border-t border-[#efe7d8] pt-16">
          <Reveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
                <Package className="h-3.5 w-3.5" />
                Product Line
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#15254e]">
                Additional tablet products
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Selected high-demand tablet products supported through scalable
                manufacturing, packaging, and documentation workflows.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productLines.map((product) => (
              <Reveal key={product.id}>
                <article className="group flex h-full items-center justify-between gap-4 rounded-xl border border-[#efe7d8] bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#d9bf8b] hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fffaf0] border border-[#d9bf8b]/50">
                      <CircleDot className="h-5 w-5 text-[#7a5c28]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7a5c28]">
                        {product.format}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-[#15254e]">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#d9bf8b] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
