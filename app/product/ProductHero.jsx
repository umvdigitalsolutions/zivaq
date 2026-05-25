"use client";
import { useEffect, useRef } from "react";

export default function ProductHero({ category = "nutraceutical" }) {
  const isPharma = category === "pharmaceutical";

  const eyebrow = isPharma ? "Pharmaceutical Excellence" : "ZivaQ Signature";
  const title = isPharma
    ? "Precision Manufacturing for Pharmaceutical Products"
    : "Premium Nutraceutical Blend";
  const subtitle = isPharma
    ? "Validated sterile processes, regulated documentation, and clinical-grade production for pharmaceutical launches."
    : "Carefully formulated, high-stability products with premium packaging and market-ready presentation.";

  const bgRef = useRef(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let rafId = null;
    function onScroll() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        const offset = Math.min(120, y * 0.12);
        el.style.transform = `translateY(${offset}px) rotate(12deg)`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const [titleFirst, titleLast] = (() => {
    const parts = title.split(" ");
    if (parts.length > 2) return [parts.slice(0, -2).join(" "), parts.slice(-2).join(" ")];
    return [title, ""];
  })();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fbf8f2] to-white pt-20 pb-12">
      <div ref={bgRef} className="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-[#d9bf8b]/20 blur-3xl transform rotate-12" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-12 lg:px-8">
        <div className="lg:w-full">
          <p className="inline-block rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">
            {eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#15254e] sm:text-5xl">
            {titleFirst} {titleLast ? <span className="fancy-gradient">{titleLast}</span> : null}
          </h1>

          <p className="mt-4 max-w-xl text-lg text-gray-700">{subtitle}</p>

          <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <svg className="h-5 w-5 flex-none text-[#7a5c28]" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 00-1.414 1.414l4.5 4.5a1 1 0 001.414 0l8.5-8.5a1 1 0 00-1.414-1.414L9 13.586 6.707 11.293a1 1 0 00-1.414 1.414L9 16.414l7.707-7.707a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              cGMP-compliant production
            </li>
            <li className="flex items-start gap-3">
              <svg className="h-5 w-5 flex-none text-[#7a5c28]" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z" />
              </svg>
              Scalable production capabilities
            </li>
            <li className="flex items-start gap-3">
              <svg className="h-5 w-5 flex-none text-[#7a5c28]" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h8l6-6V5a2 2 0 00-2-2H4z" />
              </svg>
              Modern, secure packaging lines
            </li>
            <li className="flex items-start gap-3">
              <svg className="h-5 w-5 flex-none text-[#7a5c28]" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11h2v5h-2V7zm0 6h2v2h-2v-2z" />
              </svg>
              Regulatory documentation support
            </li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a href="/contact" className="inline-flex items-center rounded-full bg-[#15254e] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-[#1d3368]">Request Quote</a>
            <a href="/contact" className="inline-flex items-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-[#15254e] hover:bg-gray-50">Request Sample</a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-10">
            <div>
              <div className="text-2xl font-bold text-[#15254e]">1500+</div>
              <div className="text-sm text-gray-500">kg / month capacity</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#15254e]">5–7%</div>
              <div className="text-sm text-gray-500">Typical assay variability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
