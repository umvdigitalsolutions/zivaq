"use client";

import { useState } from "react";
import ProductList from "./ProductList";

export default function CategorySwitcher() {
  const [category, setCategory] = useState("pharmaceutical");

  return (
    <>

      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={() => setCategory("pharmaceutical")}
          className={`w-full sm:w-auto text-center rounded-full px-4 py-2 text-sm font-semibold transition ${category === "pharmaceutical" ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg" : "bg-white text-[#15254e] border border-gray-200"}`}
        >
          Pharmaceutical
        </button>
        <button
          onClick={() => setCategory("nutraceutical")}
          className={`w-full sm:w-auto text-center rounded-full px-4 py-2 text-sm font-semibold transition ${category === "nutraceutical" ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg" : "bg-white text-[#15254e] border border-gray-200"}`}
        >
          Nutraceutical
        </button>
      </div>

      <ProductList category={category} />
    </>
  );
}
