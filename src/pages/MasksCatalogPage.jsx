import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { masksData } from "../data/masksData";
import MaskGrid from "../components/masks/MaskGrid";
import MaskFilter from "../components/masks/MaskFilter";
import TypesTable from "../components/masks/TypesTable";
import { filterMasks } from "../components/common/SearchBar";
import { Sparkles, RotateCcw } from "lucide-react";

export default function MasksCatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const urlSearch = searchParams.get("search") || searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(urlSearch);

  useEffect(() => {
    setSearchQuery(urlSearch);
  }, [urlSearch]);

  // Filter masksData by category
  const categoryFilteredMasks = selectedCategory === "All"
    ? masksData
    : masksData.filter((mask) => mask.category === selectedCategory);

  // Apply multi-field matching search filter
  const filteredMasks = filterMasks(categoryFilteredMasks, searchQuery);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3 sm:space-y-4">
        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-500 font-semibold px-3.5 py-1 bg-amber-950/40 border border-amber-600/30 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> Cultural Archive
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
          TRADITIONAL MASKS CATALOG
        </h1>
        <p className="text-stone-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Explore the rich variety of Sri Lankan masks categorized by ritual families, protective roles, and theatrical satire.
        </p>

        {/* Category Filter Pills */}
        <MaskFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Filter / Search Status Feedback */}
      {(searchQuery.trim() || selectedCategory !== "All") && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-900/60 border border-stone-800/80 rounded-2xl px-4 sm:px-5 py-3 mb-6 sm:mb-8 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <span>
              Showing <strong className="text-amber-400 font-semibold">{filteredMasks.length}</strong> of{" "}
              <strong className="text-stone-300">{masksData.length}</strong> masks
              {searchQuery.trim() && (
                <>
                  {" "}matching &ldquo;<span className="text-stone-100 font-medium">{searchQuery}</span>&rdquo;
                </>
              )}
              {selectedCategory !== "All" && (
                <>
                  {" "}in <span className="text-amber-400 font-medium">{selectedCategory}</span>
                </>
              )}
            </span>
          </div>

          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-medium cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="w-3 h-3" /> Reset filters
          </button>
        </div>
      )}

      {/* Mask Grid with Responsive Columns & Authentic Empty State */}
      <MaskGrid
        masks={filteredMasks}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onResetFilters={handleResetFilters}
      />

      {/* Types Comparison Section */}
      <div className="mt-14 sm:mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-400 text-center mb-1.5 sm:mb-2">
          MASK TRADITIONS COMPARISON
        </h2>
        <p className="text-center text-stone-400 text-xs mb-4 sm:mb-6">
          Understanding the core differences between Raksha, Sanni, and Kolam lineages.
        </p>
        <TypesTable />
      </div>
    </div>
  );
}