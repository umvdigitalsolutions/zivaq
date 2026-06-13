"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/product", label: "Products" },
  { href: "/facility", label: "Facility" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#15254e]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="rounded-2xl border border-white/40 bg-white/90 px-3 py-2 shadow-lg">
            <Image
              src="/zivaq.png"
              alt="ZivaQ Pharmaceuticals"
              width={260}
              height={90}
              priority
              className="h-12 w-auto"
            />
          </div>
        </Link>

        {/* Navigation (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-semibold text-white/90 transition hover:text-[#d9bf8b]"
            >
              {item.label}
              <span className="absolute left-0 top-full mt-1 h-[2px] w-0 bg-[#d9bf8b] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:7322089240"
            className="text-sm font-medium text-white/80 hover:text-[#d9bf8b]"
          >
            (732) 208-9240
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-[#d9bf8b] px-5 py-2.5 text-sm font-semibold text-[#15254e] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#e5cda0]"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? "hidden" : "block"} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? "block" : "hidden"} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden ${open ? "block" : "hidden"} border-t border-white/10 bg-[#15254e]`}> 
        <div className="mx-auto max-w-7xl px-6 py-4 space-y-3">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-base font-medium text-white/90">{item.label}</Link>
          ))}

          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            <a href="tel:7322089240" className="block text-sm font-medium text-white/90">(732) 208-9240</a>
            <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex w-full items-center justify-center px-4 py-2 rounded-full bg-[#d9bf8b] text-[#15254e] font-semibold shadow">Request Quote</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
