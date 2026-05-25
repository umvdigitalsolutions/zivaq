export const metadata = {
	title: "R&D — ZivaQ Pharmaceutical",
	description: "Research & Development — complex generics, NDDS, stability studies, process optimization.",
};

export default function Page() {
	return (
		<main className="bg-white text-slate-900">
			<section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fffaf0] to-white pt-20 pb-20">
				<div className="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-[#d9bf8b]/20 blur-3xl transform rotate-12" aria-hidden="true" />

				<div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-16 lg:px-8">
					<div className="lg:w-1/2">
						<p className="inline-block rounded-full border border-[#d9bf8b] bg-[#fffaf0] px-3 py-1 text-sm font-medium uppercase tracking-wide text-[#7a5c28]">Research & Development</p>

						<h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#15254e] sm:text-5xl">Innovating for a Healthier Tomorrow</h1>

						<p className="mt-4 max-w-2xl text-lg text-gray-700">At ZivaQ Pharmaceutical Inc., our R&D division transforms scientific discoveries into life-changing healthcare solutions. We focus on advanced formulations, complex generics, and novel drug-delivery systems while maintaining the highest regulatory and manufacturing standards.</p>

						<div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
							<a href="/contact" className="inline-flex items-center rounded-full bg-[#15254e] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:-translate-y-1 transition">Contact R&D</a>
							<a href="#facility" className="inline-flex items-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-[#15254e] hover:bg-gray-50">Facility Details</a>
						</div>
					</div>

					<div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
						<div className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
							<img src="https://zivaq.vercel.app/images/15-Cotters-Ln-East-Brunswick-NJ-Building.jpg" alt="ZivaQ Facility" className="w-full h-72 object-cover" />
							<div className="absolute left-6 bottom-6 rounded-lg bg-white/90 p-4 shadow">
								<div className="text-sm font-semibold text-gray-900">45,000 sq ft R&D Facility</div>
								<div className="mt-1 text-sm text-gray-600">cGMP cleanrooms • Dedicated pilot lines • Analytical labs</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16">
				<div className="mx-auto max-w-7xl px-6">
					<h2 className="text-3xl font-extrabold text-[#15254e]">Our R&D Focus Areas</h2>
					<p className="mt-3 text-gray-600 max-w-2xl">We combine formulation science, process engineering, and regulatory expertise to advance medicines and nutraceuticals from concept to clinic and market.</p>

					<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<article className="rounded-2xl border p-6 shadow-sm glass">
							<h3 className="text-lg font-semibold text-[#15254e]">Complex Generics</h3>
							<p className="mt-2 text-sm text-gray-700">Developing high-value, hard-to-make generics with bioequivalence to branded products and robust manufacturing processes.</p>
						</article>

						<article className="rounded-2xl border p-6 shadow-sm glass">
							<h3 className="text-lg font-semibold text-[#15254e]">Novel Drug Delivery Systems (NDDS)</h3>
							<p className="mt-2 text-sm text-gray-700">Enhancing patient convenience and treatment effectiveness through innovative dosage forms and delivery technologies.</p>
						</article>

						<article className="rounded-2xl border p-6 shadow-sm glass">
							<h3 className="text-lg font-semibold text-[#15254e]">Stability & Compatibility Studies</h3>
							<p className="mt-2 text-sm text-gray-700">Comprehensive stability protocols and compatibility testing to ensure product performance across storage conditions.</p>
						</article>

						<article className="rounded-2xl border p-6 shadow-sm glass">
							<h3 className="text-lg font-semibold text-[#15254e]">Process Optimization</h3>
							<p className="mt-2 text-sm text-gray-700">Designing efficient, cost-effective manufacturing processes without compromising quality and scalability.</p>
						</article>

						<article className="rounded-2xl border p-6 shadow-sm glass">
							<h3 className="text-lg font-semibold text-[#15254e]">Nutraceutical Research</h3>
							<p className="mt-2 text-sm text-gray-700">Creating evidence-based supplements focused on preventive healthcare, stability and consumer acceptability.</p>
						</article>
					</div>
				</div>
			</section>

			<section id="facility" className="py-16 bg-zinc-50">
				<div className="mx-auto max-w-7xl px-6 lg:flex lg:gap-12 lg:items-center">
					<div className="lg:w-1/2">
						<h2 className="text-3xl font-extrabold text-[#15254e]">Our Facility</h2>
						<p className="mt-3 text-gray-600">State-of-the-art R&D and pilot manufacturing space purpose-built for formulation development, analytical testing and small-batch validation.</p>

						<ul className="mt-6 grid gap-3 text-sm text-gray-700">
							<li>45,000 sq ft facility — 25,000 sq ft warehouse • 15,000 sq ft cleanroom</li>
							<li>Temperature and humidity controlled, FDA registered, cGMP compliant</li>
							<li>Dedicated pilot lines for Tablets, Capsules, Powders and Probiotics</li>
							<li>Segregated suites for sensitive pharmaceuticals and biological formulations</li>
							<li>7 loading docks, secure logistics and scalable production capacity</li>
						</ul>
					</div>

					<div className="mt-8 lg:mt-0 lg:w-1/2">
						<div className="grid grid-cols-1 gap-4">
							<img src="https://zivaq.vercel.app/images/arial-view.png" alt="Aerial view" className="w-full rounded-2xl object-cover h-56" />
							<img src="https://zivaq.vercel.app/images/15-Cotters-Ln-East-Brunswick-NJ-Building.jpg" alt="Facility front" className="w-full rounded-2xl object-cover h-56" />
						</div>
					</div>
				</div>
			</section>

			<section className="py-16">
				<div className="mx-auto max-w-7xl px-6 text-center">
					<h3 className="text-2xl font-semibold text-[#15254e]">Collaborations & Regulatory Excellence</h3>
					<p className="mt-4 text-gray-600 max-w-3xl mx-auto">We partner with global research institutions, universities and industry experts. Our regulatory affairs team supports dossier submissions across international markets to accelerate product registrations.</p>

					<div className="mt-8 flex items-center justify-center gap-4">
						<a href="mailto:info@zivaqpharma.com" className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow">Email R&D</a>
						<a href="/contact" className="inline-flex items-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-[#15254e]">Request a Meeting</a>
					</div>
				</div>
			</section>

			<section id="contact" className="py-12 bg-zinc-900 text-white">
				<div className="mx-auto max-w-7xl px-6 text-center">
					<h4 className="text-lg font-semibold">Contact ZivaQ Pharmaceutical Inc.</h4>
					<p className="mt-2">15 Cotters Lane, East Brunswick, NJ 08816</p>
					<p className="mt-1">Email: <a href="mailto:info@zivaqpharma.com" className="underline">info@zivaqpharma.com</a></p>
				</div>
			</section>
		</main>
	);
}
