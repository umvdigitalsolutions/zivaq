"use client";
import Reveal from "../components/Reveal";

export default function ProductGallery({ category = "nutraceutical" }) {
  const pharmaImages = [
    "https://img1.wsimg.com/isteam/getty/187272974/:/rs=w:1200,cg:true,m",
    "https://img1.wsimg.com/isteam/getty/1384570326/:/rs=w:1200,cg:true,m",
  ];

  const nutraImages = [
    "https://img1.wsimg.com/isteam/getty/2223631449/:/rs=w:1200,cg:true,m",
    "https://img1.wsimg.com/isteam/getty/2177116048/:/rs=w:1200,cg:true,m",
    "https://img1.wsimg.com/isteam/getty/2162068171/:/rs=w:1200,cg:true,m",
  ];

  const images = category === "pharmaceutical" ? pharmaImages : nutraImages;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-xl font-semibold text-gray-900">Gallery</h3>
        <p className="mt-2 text-sm text-gray-600 max-w-2xl">Explore our production and packaging — imagery from validated runs and finished products.</p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {images.map((src, i) => (
            <Reveal key={i}>
              <div className="group overflow-hidden rounded-2xl bg-white/40 shadow transition-shadow hover:shadow-2xl">
                <div className="h-56 flex items-center justify-center bg-gray-50 p-4">
                  <img src={src} alt={`gallery-${i}`} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
