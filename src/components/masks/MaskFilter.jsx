export default function MaskFilter({ selectedCategory, onSelectCategory }) {
  const categories = ["All", "Raksha", "Sanni", "Kolam"];

  return (
    <div className="flex flex-wrap justify-center gap-3 my-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
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