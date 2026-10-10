export default function MaskFilter({ selectedCategory, onSelectCategory }) {
  const categories = ["All", "Raksha", "Sanni", "Kolam"];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 my-6 sm:my-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer min-h-[38px] ${
            selectedCategory === cat
              ? "bg-amber-600 text-stone-950 shadow-lg shadow-amber-600/30 scale-105"
              : "bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800"
          }`}
        >
          {cat === "All" ? "සියල්ල (All)" : cat}
        </button>
      ))}
    </div>
  );
}