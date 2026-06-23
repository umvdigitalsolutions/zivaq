export const metadata = {
  title:
    "Contact ZivaQ Pharmaceuticals | Get a Free Supplement Manufacturing Quote",
  description:
    "Contact ZivaQ Pharmaceuticals in East Brunswick, NJ for nutraceutical & supplement contract manufacturing. Call +1 (732) 353-6291 or request a free quote online. 15 Cotters Lane, East Brunswick, NJ 08816.",
  keywords: [
    "contact ZivaQ Pharmaceuticals",
    "supplement manufacturer contact NJ",
    "nutraceutical manufacturing quote NJ",
    "15 Cotters Lane East Brunswick NJ 08816",
    "ZivaQ phone number",
    "supplement contract manufacturing quote",
    "East Brunswick NJ pharmaceutical company",
  ],
  alternates: { canonical: "https://zivaqpharma.com/contact" },
  openGraph: {
    title: "Contact ZivaQ Pharmaceuticals | Free Supplement Manufacturing Quote",
    description:
      "Get in touch with ZivaQ Pharmaceuticals at 15 Cotters Lane, East Brunswick, NJ 08816. Call +1 (732) 353-6291 for nutraceutical contract manufacturing.",
    url: "https://zivaqpharma.com/contact",
  },
};

import Reveal from "../components/Reveal";
import ContactForm from "./ContactForm";

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-linear-to-b from-white via-[#fbf8f2] to-white pt-20 pb-16">
        <div className="absolute -left-32 top-0 h-112 w-md rounded-full bg-[#d9bf8b]/20 blur-3xl transform rotate-12" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-2/3">
            <p className="inline-block rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">Contact</p>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#15254e] sm:text-5xl">Get in touch with ZivaQ</h1>

            <p className="mt-4 max-w-2xl text-lg text-gray-700">For quotes, technical enquiries, or partnership opportunities, contact our team. We support formulation, manufacturing, packaging, and distribution planning for dietary supplement brands.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+17323536291"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#15254e] px-5 py-3 text-sm font-semibold text-white shadow hover:-translate-y-0.5 transition text-center whitespace-normal"
              >
                Call +1 (732) 353-6291
              </a>

              <a
                href="mailto:info@zivaqpharma.com"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-[#15254e] text-center whitespace-normal"
              >
                Email: info@zivaqpharma.com
              </a>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=15+Cotters+Lane+East+Brunswick+NJ+08816"
              target="_blank"
              rel="noreferrer"
              aria-label="Open ZivaQ facility on Google Maps"
              className="block rounded-3xl overflow-hidden shadow-2xl group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img
                src="https://zivaq.vercel.app/images/15-Cotters-Ln-East-Brunswick-NJ-Building.jpg"
                alt="ZivaQ Facility"
                className="w-full h-56 object-cover transition-transform group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border p-8 glass shadow-lg">
                <h2 className="text-2xl font-semibold text-[#15254e]">Send us a message</h2>
                <p className="mt-2 text-sm text-gray-600">Provide a few details and our team will respond within one business day.</p>

                <ContactForm />
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl p-8 glass shadow-sm h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#15254e]">Contact Details</h3>
                  <p className="mt-3 text-sm text-gray-600">Head Office — New Jersey, USA</p>
                  <address className="not-italic mt-2 text-sm text-gray-700">
                    15 Cotters Lane
                    <br />
                    East Brunswick, NJ 08816
                  </address>

                  <p className="mt-3 text-sm text-gray-700">Phone: <a href="tel:+17323536291" className="text-indigo-600">+1 (732) 353-6291</a></p>
                  <p className="mt-1 text-sm text-gray-700">Email: <a href="mailto:info@zivaqpharma.com" className="text-indigo-600">info@zivaqpharma.com</a></p>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-700">Business Hours</h4>
                    <p className="mt-1 text-sm text-gray-600">Mon–Fri: 9:00 AM – 6:00 PM (EST)</p>
                  </div>
                </div>

                <div className="mt-6">
                  <a href="https://www.google.com/maps/search/?api=1&query=15+Cotters+Lane+East+Brunswick+NJ" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-[#15254e]">View on Google Maps</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 bg-zinc-900 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm">Prefer direct contact? Call us at <a href="tel:+17323536291" className="underline">+1 (732) 353-6291</a> or email <a href="mailto:info@zivaqpharma.com" className="underline">info@zivaqpharma.com</a></p>
        </div>
      </section>
    </main>
  );
}
