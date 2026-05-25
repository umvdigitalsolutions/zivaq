"use client";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

const nutraProducts = [
  {
    id: "multivitamin",
    title: "Multivitamin Formulations",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Professional-filling-bottles-with-vitamins-845x684.jpg",
    description: "Custom multivitamin blends produced to cGMP standards with flexible delivery forms.",
    packaging: "Bottles • Blister • Sachets",
  },
  {
    id: "probiotic",
    title: "Probiotic Blends",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Person-taking-probiotic-supplement-845x684.jpg",
    description: "Stability-focused probiotic formulations in capsules, powders and sachets.",
    packaging: "Bottles • Sachets",
  },
  {
    id: "protein",
    title: "Protein & Powder Supplements",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Person-outside-drinking-from-water-bottle-845x684.jpg",
    description: "Premium powder blends for sports, recovery and meal-replacement applications.",
    packaging: "Tubs • Sachets • Bulk",
  },
  {
    id: "collagen",
    title: "Collagen Supplements",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Worker-stacking-supplement-containers--845x684.jpg",
    description: "Hydrolyzed collagen formulas for beauty and joint support with scalable production.",
    packaging: "Bottles • Stick Packs",
  },
  {
    id: "keto",
    title: "Keto & Weight Management",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Person-with-tapemeasure-around-waste-845x684.jpg",
    description: "Keto-friendly and weight management formulations developed for safety and efficacy.",
    packaging: "Bottles • Sachets",
  },
  {
    id: "herbal",
    title: "Herbal Extracts",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Herbal-Supplemenets-on-table-845x684.jpg",
    description: "Standardized botanical extracts manufactured with traceability and potency controls.",
    packaging: "Bottles • Blister",
  },
  {
    id: "brain",
    title: "Cognitive & Brain Enhancers",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Professional-filling-bottles-with-vitamins-845x684.jpg",
    description: "Nootropic blends designed for cognitive support using evidence-backed ingredients.",
    packaging: "Bottles • Capsules",
  },
  {
    id: "pet",
    title: "Pet Supplements",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Worker-stacking-supplement-containers--845x684.jpg",
    description: "Veterinary-grade supplements for companion animals with robust quality assurance.",
    packaging: "Bottles • Bulk",
  },
];

const pharmaProducts = [
  {
    id: "sterile-injectable",
    title: "Sterile Injectable Solutions",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Worker-stacking-supplement-containers--845x684.jpg",
    description: "Aseptic manufacturing for injectable drug products with validated sterile fills.",
    packaging: "Vials • Ampoules",
  },
  {
    id: "tableted-api",
    title: "Tableted API Blends",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Professional-filling-bottles-with-vitamins-845x684.jpg",
    description: "Controlled-release and immediate-release tableted formulations with robust QC.",
    packaging: "Blister • Bottles",
  },
  {
    id: "ophthalmic-solution",
    title: "Ophthalmic & Topical Solutions",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Person-taking-probiotic-supplement-845x684.jpg",
    description: "Sterile formulations for ophthalmic and topical applications under GMP.",
    packaging: "Drops • Bottles",
  },
  {
    id: "iv-solutions",
    title: "IV & Parenteral Solutions",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Person-outside-drinking-from-water-bottle-845x684.jpg",
    description: "Large-scale parenteral and IV solutions with tight sterility controls.",
    packaging: "Bags • Vials",
  },
  {
    id: "oncology-injectable",
    title: "Oncology Injectable Formulas",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Man-reading-label-on-supplement-bottle-845x684.jpg",
    description: "Specialized oncology injectables produced in segregated suites with validated processes.",
    packaging: "Vials • Ampoules",
  },
  {
    id: "hormone-implant",
    title: "Hormonal & Implantable Products",
    image: "https://vitacarepharma.com/wp-content/uploads/2024/05/Women-reading-label-on-supplement-container-845x684.jpg",
    description: "Precision-dosed formulations for hormonal therapies and implantable devices.",
    packaging: "Implant • Vials",
  },
];

export default function ProductList({ category = "nutraceutical" }) {
  const products = category === "pharmaceutical" ? pharmaProducts : nutraProducts;

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Reveal key={p.id} className="">
              <TiltCard>
                <article className="group overflow-hidden rounded-2xl bg-white glass p-0 shadow-lg transition-transform hover:-translate-y-3 hover:shadow-2xl">
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900">{p.title}</h4>
                      <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                    </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
