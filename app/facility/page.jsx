export const metadata = {
  title: "Facility - ZivaQ Pharmaceuticals",
  description:
    "ZivaQ Pharmaceuticals facility details, production capacity, cleanrooms, equipment, and planned certifications.",
};

import {
  Building2,
  Archive,
  FlaskConical,
  CircleDot,
  Pill,
  ShieldCheck,
  Microscope,
  ArrowRightLeft,
  ScanLine,
  LayoutGrid,
  ClipboardList,
  Truck,
  PackageCheck,
  Sparkles,
  Droplets,
  Candy,
  Package,
  TestTube,
  Gauge,
  Layers,
  Thermometer,
  Scale,
  CheckCircle2,
  MapPin,
  Factory,
  Workflow,
  Cog,
  BarChart3,
} from "lucide-react";
import Reveal from "../components/Reveal";

const facilityStats = [
  {
    value: "45,000",
    unit: "sq ft",
    label: "Manufacturing footprint",
    icon: Building2,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "border-blue-200",
  },
  {
    value: "1,600",
    unit: "pallets",
    label: "Storage capacity",
    icon: Archive,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    border: "border-amber-200",
  },
  {
    value: "15,000",
    unit: "kg / shift",
    label: "Powder processing",
    icon: FlaskConical,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    border: "border-green-200",
  },
  {
    value: "10M",
    unit: "per shift",
    label: "Tablet output",
    icon: CircleDot,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    border: "border-purple-200",
  },
  {
    value: "11M",
    unit: "per shift",
    label: "Capsule output",
    icon: Pill,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    border: "border-pink-200",
  },
];

const facilityHighlights = [
  "East Brunswick, New Jersey — centrally located for East Coast distribution",
  "Designed for multi-format supplement production under one roof",
  "High-bay warehouse with organized pallet racking and FIFO material flow",
  "Dedicated receiving, quarantine, and release zones for incoming materials",
  "Positive-pressure production areas with controlled air handling",
  "Scalable floor plan supporting phased capacity expansion",
];

const productionZones = [
  {
    icon: Truck,
    title: "Receiving & Incoming Materials",
    description:
      "Organized dock-to-floor receiving workflow with dedicated quarantine holding areas. Incoming materials are logged, labeled, and staged for quality review before release into production.",
    tags: ["Material logging", "Quarantine hold", "Quality release"],
  },
  {
    icon: Archive,
    title: "Raw Material Warehousing",
    description:
      "Climate-monitored warehouse with 1,600-pallet capacity. Rack organization supports FIFO inventory management and clear separation of active, quarantine, and rejected materials.",
    tags: ["1,600 pallets", "FIFO inventory", "Climate monitoring"],
  },
  {
    icon: Layers,
    title: "Blending & Powder Processing",
    description:
      "High-capacity powder blending area designed for sports nutrition, functional supplement, and custom formula programs. Supports 15,000 kg of blended output per shift.",
    tags: ["15,000 kg / shift", "Custom blends", "Batch documentation"],
  },
  {
    icon: CircleDot,
    title: "Tablet Production",
    description:
      "High-speed tableting lines capable of producing up to 10 million tablets per shift across coated, uncoated, chewable, and specialty tablet formats.",
    tags: ["10M / shift", "Coated & uncoated", "Chewable formats"],
  },
  {
    icon: Pill,
    title: "Capsule Filling",
    description:
      "Automated capsule filling lines producing up to 11 million capsules per shift. Supports hard-shell gelatin and HPMC vegetarian capsule formats for dietary supplement programs.",
    tags: ["11M / shift", "Gelatin & HPMC", "Private label"],
  },
  {
    icon: Droplets,
    title: "Softgel Manufacturing",
    description:
      "Softgel production support for oil-based supplement ingredients. Suited for omega blends, vitamin E, CBD-adjacent, and other oil-soluble nutrient formats.",
    tags: ["Oil-based actives", "Bottled softgels", "Premium formats"],
  },
  {
    icon: Candy,
    title: "Gummy Production",
    description:
      "Consumer-ready gummy supplement manufacturing optimized for consistent texture, accurate dosing, and retail-level presentation across multiple packaging formats.",
    tags: ["Consistent texture", "Accurate dosing", "Bottles & pouches"],
  },
  {
    icon: Package,
    title: "Packaging & Labeling",
    description:
      "Automated bottle filling at 100 units per minute with inline capping, labeling, and inspection. Supports bottles, blister packs, stick packs, sachets, and custom retail formats.",
    tags: ["100 units/min", "Inline inspection", "Multi-format"],
  },
];

const equipment = [
  { icon: Cog, label: "High-speed rotary tablet presses" },
  { icon: Pill, label: "Automatic capsule filling machines" },
  { icon: Layers, label: "V-blenders and ribbon blenders" },
  { icon: Gauge, label: "High-speed bottle filling lines" },
  { icon: Package, label: "Blister packaging equipment" },
  { icon: Droplets, label: "Softgel encapsulation machines" },
  { icon: Thermometer, label: "Temperature-controlled coating pans" },
  { icon: Scale, label: "Inline checkweighing systems" },
  { icon: ScanLine, label: "Metal detection systems" },
  { icon: TestTube, label: "In-process sampling stations" },
  { icon: BarChart3, label: "Batch monitoring & data logging" },
  { icon: Truck, label: "Automated palletizing & shipping prep" },
];

const cleanroomDetails = [
  {
    icon: Microscope,
    title: "ISO Class 8 Cleanrooms",
    body: "Production areas planned to meet ISO Class 8 cleanroom standards, maintaining controlled particulate levels throughout manufacturing operations.",
  },
  {
    icon: LayoutGrid,
    title: "Segregated Work Zones",
    body: "Clearly defined zones for receiving, staging, blending, production, and packaging — each physically separated to prevent cross-contamination and support audit readiness.",
  },
  {
    icon: ArrowRightLeft,
    title: "Controlled Material Flow",
    body: "Unidirectional material movement pathways from raw receipt through finished goods. Designed to eliminate backflow and maintain full chain-of-custody traceability.",
  },
  {
    icon: Workflow,
    title: "Air Handling & Pressure",
    body: "Positive-pressure HVAC in active production rooms with filtered air supply. Differential pressure monitoring between zones reduces contamination risk.",
  },
];

const qualityItems = [
  {
    icon: ShieldCheck,
    title: "cGMP-Oriented Systems",
    body: "Operating procedures, batch records, and documentation workflows modeled on current Good Manufacturing Practice expectations for dietary supplement production.",
  },
  {
    icon: ClipboardList,
    title: "FDA Registration Planning",
    body: "Facility registration planning in progress with FDA. Operating systems are being structured to meet FDA dietary supplement facility requirements.",
  },
  {
    icon: ScanLine,
    title: "Batch Documentation & Traceability",
    body: "Every production run is tracked with complete batch records including raw material lots, blend data, in-process checks, and finished product disposition.",
  },
  {
    icon: Truck,
    title: "Supplier Qualification",
    body: "Incoming raw materials go through supplier qualification and incoming material review before release to production, supporting consistent formulation integrity.",
  },
  {
    icon: TestTube,
    title: "In-Process Quality Checks",
    body: "Sampling and testing protocols embedded into each production stage — weight checks, hardness, disintegration, capsule fill weight, and visual inspection.",
  },
  {
    icon: PackageCheck,
    title: "Finished Product Controls",
    body: "Packaging and labeling operations include inline verification, lot coding, and hold-and-release workflows before product ships to customer.",
  },
];

export default function FacilityPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#fbf8f2] pb-28 pt-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,37,78,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(217,191,139,0.18),transparent_30%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9bf8b] bg-white px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
                <Sparkles className="h-3.5 w-3.5" />
                Our Facility
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#15254e] sm:text-5xl lg:text-6xl">
                A scalable manufacturing environment built for clean, consistent production
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl">
                ZivaQ&apos;s East Brunswick facility is designed around efficient
                material flow, ISO-oriented cleanroom standards, high-volume
                production capacity, and the documentation discipline dietary
                supplement brands expect from a dependable contract manufacturer.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["45,000 sq ft", "East Brunswick, NJ", "Multi-format production", "ISO Class 8 planned"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#efe7d8] px-4 py-1.5 text-sm font-medium text-[#15254e] shadow-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#7a5c28]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── At-a-Glance Stats ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
                <BarChart3 className="h-3.5 w-3.5" />
                Production Capacity
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#15254e]">
                Built for high-volume output
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
                Planned capacity across the five core supplement formats, with
                warehouse infrastructure to support large-scale ingredient
                procurement and finished goods distribution.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {facilityStats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`group relative overflow-hidden rounded-2xl border ${item.border} bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <div className={`absolute right-0 top-0 h-16 w-16 rounded-bl-2xl ${item.iconBg} opacity-25`} aria-hidden="true" />
                    <div className={`inline-flex items-center justify-center rounded-xl ${item.iconBg} p-3`}>
                      <Icon className={`h-5 w-5 ${item.iconColor}`} strokeWidth={1.8} />
                    </div>
                    <p className="mt-5 text-3xl font-extrabold tracking-tight text-[#15254e]">
                      {item.value}
                      <span className="ml-1 text-sm font-semibold text-gray-400">{item.unit}</span>
                    </p>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#7a5c28]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Facility Overview ── */}
      <section className="bg-[#15254e] py-20 text-white">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,191,139,0.10),transparent_50%)]"
            aria-hidden="true"
          />
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9bf8b]/40 bg-white/5 px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#d9bf8b]">
                  <Factory className="h-3.5 w-3.5" />
                  Facility Overview
                </span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  One integrated facility — every format, every stage
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  Located in East Brunswick, New Jersey, our 45,000 sq ft
                  facility consolidates raw material warehousing, multi-format
                  production, in-process quality controls, packaging, and
                  finished goods storage under one roof. The layout is designed
                  for clean handoffs between each stage of manufacturing, with
                  minimal material backtracking and full documentation at every
                  step.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  The floor plan follows a linear flow from receiving through
                  to shipping, with segregated cleanroom zones for production
                  and dedicated spaces for quality review — suited for both new
                  product launches and high-volume repeat programs.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9bf8b] mb-6">
                  Facility Highlights
                </p>
                <ul className="space-y-4">
                  {facilityHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d9bf8b]" strokeWidth={1.8} />
                      <span className="text-sm leading-7 text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Production Zones ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
                <Workflow className="h-3.5 w-3.5" />
                Production Zones
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#15254e]">
                Dedicated zones for every stage of production
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Each production area is physically separated, purpose-designed,
                and documented. From raw material receipt through finished goods
                release, every zone operates on controlled workflows with clear
                handoff points.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productionZones.map((zone) => {
              const Icon = zone.icon;
              return (
                <Reveal key={zone.title}>
                  <div className="group flex h-full flex-col rounded-2xl border border-[#efe7d8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d9bf8b] hover:shadow-lg">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d9bf8b]/40 bg-[#fffaf0]">
                      <Icon className="h-5 w-5 text-[#7a5c28]" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-5 font-bold text-[#15254e] leading-snug">
                      {zone.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                      {zone.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {zone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#d9bf8b]/50 bg-[#fffaf0] px-2.5 py-0.5 text-xs font-medium text-[#7a5c28]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cleanroom & Environmental Controls ── */}
      <section className="bg-[#f7f1e7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9bf8b] bg-white px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
                <Microscope className="h-3.5 w-3.5" />
                Cleanroom & Environmental Controls
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#15254e]">
                Controlled environments for every production area
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Our cleanroom design and environmental controls are built to
                support consistent, contamination-free production across all
                supplement formats.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {cleanroomDetails.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="flex gap-5 rounded-2xl border border-[#efe7d8] bg-white p-7 shadow-sm transition-all duration-200 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d9bf8b]/50 bg-[#fffaf0]">
                      <Icon className="h-5 w-5 text-[#7a5c28]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#15254e]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Equipment ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
                <Cog className="h-3.5 w-3.5" />
                Equipment
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#15254e]">
                Production-grade equipment across every format
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                The facility is equipped with purpose-built machinery for each
                supplement format, supported by in-process quality instrumentation
                and automated packaging lines.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {equipment.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-[#efe7d8] bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:border-[#d9bf8b] hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#d9bf8b]/40 bg-[#fffaf0]">
                    <Icon className="h-4 w-4 text-[#7a5c28]" strokeWidth={1.8} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Quality & Compliance ── */}
      <section className="bg-[#fbf8f2] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9bf8b] bg-white px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Quality & Compliance
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#15254e]">
                Documentation and discipline at every step
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                ZivaQ is building its quality systems around cGMP principles,
                thorough documentation, supplier controls, and production
                practices that give supplement brands the confidence to scale
                with a dependable partner.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {qualityItems.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-[#efe7d8] bg-white p-7 shadow-sm transition-all duration-200 hover:border-[#d9bf8b] hover:shadow-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d9bf8b]/40 bg-[#fffaf0]">
                      <Icon className="h-5 w-5 text-[#7a5c28]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#15254e]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="bg-[#15254e] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9bf8b]/40 bg-white/5 px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#d9bf8b]">
                  <MapPin className="h-3.5 w-3.5" />
                  Location
                </span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Centrally located for East Coast operations
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  Our East Brunswick, New Jersey facility positions ZivaQ at the
                  center of one of the country&apos;s most active supplement
                  distribution corridors — with convenient access to major
                  shipping lanes, ports, and regional logistics networks.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "East Brunswick, New Jersey",
                    "Access to I-95, NJ Turnpike, and Route 1 freight corridors",
                    "Proximity to Port Newark and Port of New York/New Jersey",
                    "Within one-day delivery reach of major Northeast markets",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d9bf8b]" strokeWidth={1.8} />
                      <span className="text-sm leading-7 text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d9bf8b]/30 bg-[#d9bf8b]/10">
                  <MapPin className="h-8 w-8 text-[#d9bf8b]" strokeWidth={1.5} />
                </div>
                <p className="mt-6 text-2xl font-extrabold tracking-tight">East Brunswick, NJ</p>
                <p className="mt-2 text-base text-slate-300">Middlesex County, New Jersey</p>
                <div className="mt-8 border-t border-white/10 pt-6 text-left space-y-3">
                  {[
                    ["Facility Size", "45,000 sq ft"],
                    ["Warehouse Capacity", "1,600 pallets"],
                    ["Production Shifts", "Multi-shift capable"],
                    ["Distribution Region", "Northeast & national"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{k}</span>
                      <span className="font-semibold text-white">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
