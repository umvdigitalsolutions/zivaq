export const metadata = {
  title: "About — ZivaQ Pharmaceutical",
  description: "About ZivaQ Pharmaceutical — mission, vision, capabilities and commitment to quality.",
};

import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fbf8f2] to-white pt-20 pb-20">
        <div className="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-[#d9bf8b]/20 blur-3xl transform rotate-12" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <p className="inline-block rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">About Us</p>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#15254e] sm:text-5xl">Where Innovation Meets Care</h1>

            <p className="mt-4 max-w-2xl text-lg text-gray-700">ZivaQ Pharmaceutical Inc. is a forward-looking manufacturer committed to delivering high-quality, affordable, and innovative healthcare and nutraceutical products. We combine modern technology, medical expertise and uncompromising quality standards to turn ideas into market-ready products.</p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a href="/contact" className="inline-flex w-full sm:w-auto items-center rounded-full bg-[#15254e] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:-translate-y-1 transition justify-center">Get in touch</a>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
              <img src="https://zivaq.vercel.app/images/high-angle-arrangement-medical-objects-green-background.jpg" alt="Medical" className="w-full h-72 object-cover" />
              <div className="absolute left-6 bottom-6 rounded-lg bg-white/90 p-4 shadow">
                <div className="text-sm font-semibold text-gray-900">cGMP • FDA Registered</div>
                <div className="mt-1 text-sm text-gray-600">Quality-driven manufacturing and full regulatory support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="lg:flex lg:items-start lg:gap-12">
            <div className="lg:w-2/3">
              <Reveal>
                <h2 className="text-3xl font-extrabold text-[#15254e]">Who We Are</h2>
                <p className="mt-4 text-gray-600 max-w-3xl">Headquartered in East Brunswick, New Jersey, ZivaQ combines scientific rigor with manufacturing excellence. From research and development to global distribution, we support brands across the pharmaceutical and nutraceutical value chain—delivering products that improve lives.</p>
              </Reveal>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2" style={{ gridAutoRows: '1fr' }}>
                <Reveal>
                  <article className="rounded-2xl border p-6 shadow-sm glass h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-[#15254e]">Our Mission</h3>
                    <p className="mt-2 text-sm text-gray-700">To help clients succeed by providing premium manufacturing solutions that scale reliably and meet market expectations.</p>
                  </article>
                </Reveal>

                <Reveal>
                  <article className="rounded-2xl border p-6 shadow-sm glass h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-[#15254e]">Our Vision</h3>
                    <p className="mt-2 text-sm text-gray-700">To shape the future of global wellness by combining innovation with uncompromising quality and sustainable growth.</p>
                  </article>
                </Reveal>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/3">
              <Reveal>
                <div className="rounded-2xl bg-[#f7f6f4] p-6 shadow-lg h-full flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-700">Production Capacity</h4>
                  <ul className="mt-4 text-sm text-gray-600 space-y-2">
                    <li>Storage: capacity for 1,600 pallets</li>
                    <li>Powder processing: 15,000 kg / shift</li>
                    <li>Tablets: up to 10M units / shift</li>
                    <li>Capsules: up to 11M units / shift</li>
                    <li>Fully automated packaging: 100 bottles / min</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-16 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-[#15254e]">Core Values</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Innovation, integrity and quality are at the center of everything we do. We partner with clients to accelerate growth while ensuring patient safety and regulatory compliance.</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3" style={{ gridAutoRows: '1fr' }}>
            <Reveal>
              <div className="rounded-2xl p-6 shadow-sm glass h-full flex flex-col">
                <h4 className="text-lg font-semibold">Innovation</h4>
                <p className="mt-2 text-sm text-gray-700">Science-driven development and novel delivery solutions.</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl p-6 shadow-sm glass h-full flex flex-col">
                <h4 className="text-lg font-semibold">Integrity</h4>
                <p className="mt-2 text-sm text-gray-700">Transparent partnerships and ethical operations.</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl p-6 shadow-sm glass h-full flex flex-col">
                <h4 className="text-lg font-semibold">Quality</h4>
                <p className="mt-2 text-sm text-gray-700">Rigorous QA, cGMP compliance and full regulatory support.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-[#15254e] text-center">Leadership & Expertise</h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: '1fr' }}>
            <Reveal>
              <TiltCard>
                <div className="rounded-2xl p-6 bg-white glass shadow-lg text-center h-full flex flex-col justify-between">
                  <div>
                    <img src="https://zivaq.vercel.app/_next/static/media/logo-header.2d2c745f.svg" alt="leader" className="mx-auto h-20 w-20 object-contain" />
                    <h4 className="mt-4 font-semibold">Leadership Team</h4>
                    <p className="mt-2 text-sm text-gray-600">Experienced industry executives, scientists and regulatory experts guiding product development and commercialization.</p>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <ul className="space-y-2 text-left">
                      <li>Executive leadership with 30+ years combined pharmaceutical experience</li>
                      <li>Deep expertise in formulation science, regulatory strategy and supply chain</li>
                      <li>Proven track record in product commercialization and global market entry</li>
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl p-6 bg-white glass shadow-sm h-full flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold">Quality & Compliance</h4>
                  <p className="mt-2 text-sm text-gray-600">In-house QC labs, regulatory dossier support and compliance with USP, BP and FDA standards. Our QC team performs batch-level release testing, stability studies, and third-party verifications to ensure product safety, potency, and traceability.</p>

                  <ul className="mt-3 text-sm text-gray-600 space-y-1">
                    <li>cGMP-certified facilities and validated equipment</li>
                    <li>Comprehensive analytical testing (HPLC, GC, dissolution)</li>
                    <li>Third-party stability and potency verification</li>
                  </ul>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2" aria-hidden="true">
                  <span className="sr-only">Rated 5 out of 5 for quality</span>
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.447c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.642 9.382c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69L9.049 2.927z"/></svg>
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.447c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.642 9.382c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69L9.049 2.927z"/></svg>
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.447c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.642 9.382c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69L9.049 2.927z"/></svg>
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.447c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.642 9.382c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69L9.049 2.927z"/></svg>
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.447c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.642 9.382c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69L9.049 2.927z"/></svg>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl p-6 bg-white glass shadow-sm h-full flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold">Global Partnerships</h4>
                  <p className="mt-2 text-sm text-gray-600">Collaborations with research institutions, contract partners and global distributors to accelerate development and expand market reach.</p>

                  <ul className="mt-3 text-sm text-gray-600 space-y-1 text-left">
                    <li>Academic & research collaborations for translational science</li>
                    <li>Contract partners for specialized manufacturing and packaging</li>
                    <li>Distribution partners across North America, EU and APAC</li>
                  </ul>
                </div>

                <div className="mt-4 text-sm text-gray-500">Trusted partnerships enabling fast, compliant market entry.</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gradient-to-r from-[#08133a] via-[#1b3a6a] to-[#10243f] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-3xl p-8 bg-white/5 ring-1 ring-white/10 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#f3d7a3] to-[#d9bf8b] flex items-center justify-center shadow-lg">
                  <svg className="h-6 w-6 text-[#15254e]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 8c0 5.523-4.477 10-10 10S0 13.523 0 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Let's Talk Partnerships</h3>
                  <p className="mt-1 text-sm text-white/80">Manufacturing, R&D collaborations, distribution and private-label partnerships.</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-white/80 mt-1" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <div className="text-sm font-semibold">Address</div>
                    <div className="text-sm text-white/80">15 Cotters Lane, East Brunswick, NJ 08816</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-white/80 mt-1" viewBox="0 0 24 24" fill="none"><path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-sm text-white/80"><a href="mailto:info@zivaqpharma.com" className="underline">info@zivaqpharma.com</a></div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-white/80 mt-1" viewBox="0 0 24 24" fill="none"><path d="M3 5h18M3 12h18M3 19h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <div className="text-sm font-semibold">Hours</div>
                    <div className="text-sm text-white/80">Mon–Fri 9:00–17:00</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#f3d7a3] px-4 py-2 text-sm font-semibold text-[#15254e] hover:scale-105 transition">Schedule a chat</a>
                <a href="mailto:info@zivaqpharma.com?subject=Partnership%20Inquiry" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/5 transition">Email us</a>
                <a href="https://www.linkedin.com/company/zivaq" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/5 transition">LinkedIn</a>
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-white/5 ring-1 ring-white/10 backdrop-blur-md">
              <h4 className="text-lg font-semibold">Drop us a note</h4>
              <p className="mt-2 text-sm text-white/80">Quick message and we'll reply within one business day.</p>

              <form action="mailto:info@zivaqpharma.com" method="POST" encType="text/plain" className="mt-6 grid gap-3">
                <label className="sr-only">Name</label>
                <input name="Name" placeholder="Your name" className="w-full rounded-md bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50 focus:outline-none" />

                <label className="sr-only">Email</label>
                <input name="Email" type="email" placeholder="Work email" className="w-full rounded-md bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50" />

                <label className="sr-only">Message</label>
                <textarea name="Message" rows="4" placeholder="Tell us about your project" className="w-full rounded-md bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50" />

                <div className="mt-2 flex items-center gap-3">
                  <button type="submit" className="rounded-full bg-[#f3d7a3] px-5 py-2 text-sm font-semibold text-[#15254e] hover:scale-105 transition">Send Message</button>
                  <button type="reset" className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/5">Clear</button>
                </div>
              </form>

              <p className="mt-6 text-sm text-white/60">Prefer other options? See our <a href="/contact" className="underline">full contact page</a> for phone numbers and distributor contacts.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
