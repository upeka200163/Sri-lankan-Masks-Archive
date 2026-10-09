import { useState } from "react";
import { masksData } from "../data/masksData";
import MaskCard from "../components/masks/MaskCard";
import MaskFilter from "../components/masks/MaskFilter";
import TypesTable from "../components/masks/TypesTable";

export default function MasksCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMasks = selectedCategory === "All"
    ? masksData
    : masksData.filter((mask) => mask.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">
          Cultural Archive
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-100 mt-2">
          TRADITIONAL MASKS CATALOG
        </h1>
        <p className="text-stone-400 text-sm md:text-base mt-3">
          Explore the rich variety of Sri Lankan masks categorized by ritual families, protective roles, and theatrical satire.
        </p>

        <MaskFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMasks.map((mask) => (
          <MaskCard key={mask.id} mask={mask} />
        ))}
      </div>

      {/* Types Comparison Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-amber-400 text-center mb-2">
          MASK TRADITIONS COMPARISON
        </h2>
        <p className="text-center text-stone-400 text-xs mb-6">
          Understanding the core differences between Raksha, Sanni, and Kolam lineages.
        </p>
        <TypesTable />
      </div>
    </div>
  );
}