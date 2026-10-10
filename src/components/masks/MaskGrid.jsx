import React from "react";
import MaskCard from "./MaskCard";
import { RotateCcw, Sparkles } from "lucide-react";

/**
 * MaskGrid Component
 * A responsive, visually authentic, and high-performance layout for displaying mask collections.
 *
 * Responsive Breakpoints:
 * - 1 column on mobile (< 640px)
 * - 2 columns on small/tablets (640px - 1024px)
 * - 3 columns on desktop (1024px - 1280px)
 * - 4 columns on large screens (>= 1280px)
 */
export default function MaskGrid({
  masks = [],
  searchQuery = "",
  selectedCategory = "All",
  onResetFilters,
  emptyTitle = "No matching masks found",
  emptyMessage,
  className = ""
}) {
  const isFiltered = Boolean(searchQuery?.trim()) || (selectedCategory && selectedCategory !== "All");

  // Empty state handling
  if (!masks || masks.length === 0) {
    return (
      <div className={`text-center py-16 px-6 bg-stone-900/40 backdrop-blur-sm border border-stone-800/80 rounded-3xl max-w-xl mx-auto my-8 space-y-4 shadow-xl ${className}`}>
        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-950/40 border border-amber-600/30 flex items-center justify-center text-3xl shadow-inner">
          🎭
        </div>

        <h3 className="text-xl font-bold text-stone-100 tracking-tight">
          {emptyTitle}
        </h3>

        <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
          {emptyMessage || (
            isFiltered ? (
              <>
                No masks match your search
                {searchQuery.trim() ? (
                  <>
                    {" "}for &ldquo;<span className="text-amber-400 font-medium">{searchQuery}</span>&rdquo;
                  </>
                ) : null}
                {selectedCategory !== "All" ? ` in the ${selectedCategory} category` : ""}. Try exploring another category or searching by ritual lore.
              </>
            ) : (
              "No masks match your search. Try exploring another category."
            )
          )}
        </p>

        {onResetFilters && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-all duration-200 shadow-lg shadow-amber-950/50 hover:scale-105 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset filters & explore all masks</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 ${className}`}
    >
      {masks.map((mask) => (
        <MaskCard key={mask.id} mask={mask} />
      ))}
    </div>
  );
}
