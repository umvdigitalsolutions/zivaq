import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/20 bg-[#15254e] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(217,191,139,0.16),transparent_25%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3">
        {/* Company Info */}
        <div>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-200">
            Premium contract manufacturing and packaging solutions for
            dietary supplement brands seeking trust, consistency, and refined
            production standards.
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-200">
            15 Cotters Lane, East Brunswick,
            <br />
            NJ 08816, USA
          </p>

          <p className="mt-2 text-sm">
            Phone:{" "}
            <a
              href="tel:7322089240"
              className="font-medium text-[#d9bf8b] transition hover:text-white"
            >
              (732) 208-9240
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9bf8b]">
            Quick Links
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li>
              <Link href="/" className="transition hover:text-[#d9bf8b]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-[#d9bf8b]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/product" className="transition hover:text-[#d9bf8b]">
                Products
              </Link>
            </li>
            <li>
              <Link href="/facility" className="transition hover:text-[#d9bf8b]">
                Facility
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-[#d9bf8b]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9bf8b]">
            Newsletter
          </h4>

          <p className="mt-4 text-sm leading-7 text-slate-200">
            Stay updated with our manufacturing insights, product developments,
            and premium packaging solutions.
          </p>

          <form className="mt-5 flex max-w-sm overflow-hidden rounded-full border border-white/15 bg-white/10 backdrop-blur-sm">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-300 outline-none"
            />
            <button
              type="submit"
              className="bg-[#d9bf8b] px-5 text-sm font-semibold text-[#15254e] transition hover:bg-[#e5cda0]"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4 text-sm text-slate-200">
            <a href="#" className="transition hover:text-[#d9bf8b]">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-[#d9bf8b]">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5 text-center text-sm text-slate-300">
        © {new Date().getFullYear()} ZivaQ Pharmaceuticals. All rights reserved.
        <span className="mx-2">•</span>
        <a href="#" className="transition hover:text-[#d9bf8b]">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
