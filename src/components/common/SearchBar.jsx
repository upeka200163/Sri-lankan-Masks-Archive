import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, X, Sparkles, ArrowRight, Layers, Flame, Shield, HeartPulse, Drama } from "lucide-react";
import { allMasksData } from "../../data/masksData";

/**
 * Robust multi-field matching helper for mask archives.
 * Matches across:
 * - English name (e.g. 'Naga Raksha', 'Jasaya')
 * - Sinhala script and romanized terms (e.g. 'නාග', 'ගරා', 'Raksha', 'Sanni', 'Kolam')
 * - Category ('Raksha', 'Sanni', 'Kolam')
 * - Tagline & Purpose
 * - Overview & Lore description
 * - Ritual performance details (onStage)
 * - Timber origin & quick facts
 * - Color symbolism & meanings
 */
export function filterMasks(masks = allMasksData, query = "") {
  if (!query || !query.trim()) return masks;

  const normalizedQuery = query.toLowerCase().trim();
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);

  return masks.filter((mask) => {
    // Gather all text attributes for exhaustive matching
    const searchCorpus = [
      mask.name,
      mask.sinhalaName,
      mask.category,
      mask.tagline,
      mask.overview,
      mask.description,
      mask.onStage,
      mask.origin,
      mask.wood,
      mask.dimensions,
      ...(mask.quickFacts || []),
      ...(mask.colors ? mask.colors.map((c) => `${c.name} ${c.meaning}`) : [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    // Every token in the search query must match somewhere in the corpus
    return queryTokens.every((token) => searchCorpus.includes(token));
  });
}

export default function SearchBar({
  placeholder = "Search masks by name, ritual, or category...",
  className = "",
  autoFocus = false,
  onResultClick,
  id = "nav-mask-search"
}) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Filter against master catalog (all 25 masks from both collections)
  const results = query.trim() ? filterMasks(allMasksData, query) : [];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    } else if (e.key === "Enter" && query.trim()) {
      setIsOpen(false);
      navigate(`/explore?search=${encodeURIComponent(query.trim())}`);
      if (onResultClick) onResultClick();
    }
  };

  const handleSelectMask = (maskId) => {
    setIsOpen(false);
    setQuery("");
    if (onResultClick) onResultClick();
    navigate(`/masks/${maskId}`);
  };

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case "Raksha":
        return "bg-red-950/80 text-red-300 border-red-700/40";
      case "Sanni":
        return "bg-emerald-950/80 text-emerald-300 border-emerald-700/40";
      case "Kolam":
        return "bg-amber-950/80 text-amber-300 border-amber-700/40";
      default:
        return "bg-stone-900 text-stone-300 border-stone-700";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Raksha":
        return <Flame className="w-3 h-3 text-red-400" />;
      case "Sanni":
        return <HeartPulse className="w-3 h-3 text-emerald-400" />;
      case "Kolam":
        return <Drama className="w-3 h-3 text-amber-400" />;
      default:
        return <Shield className="w-3 h-3 text-amber-400" />;
    }
  };

  const isQueryActive = Boolean(query.trim());

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Search Bar Input Container */}
      <div
        className={`relative flex items-center bg-stone-950/80 backdrop-blur-md border rounded-full transition-all duration-300 shadow-inner ${
          isOpen && isQueryActive
            ? "border-amber-500 ring-2 ring-amber-500/20 bg-stone-900/95 shadow-amber-950/40"
            : "border-stone-800 hover:border-amber-700/60 focus-within:border-amber-500/80 focus-within:ring-2 focus-within:ring-amber-500/20"
        }`}
      >
        {/* Active Search Icon */}
        <div className="pl-3.5 pr-1.5 py-2 flex items-center pointer-events-none">
          <Search
            className={`w-4 h-4 transition-colors duration-200 ${
              isQueryActive ? "text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]" : "text-stone-400"
            }`}
          />
        </div>

        {/* Search Input */}
        <input
          ref={inputRef}
          id={id}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          autoFocus={autoFocus}
          placeholder={placeholder}
          aria-label="Search traditional masks across the archive"
          className="w-full py-2 px-1.5 bg-transparent text-stone-100 placeholder-stone-400 text-xs sm:text-sm outline-none font-medium selection:bg-amber-600 selection:text-white"
        />

        {/* Clear Button (×) */}
        {isQueryActive && (
          <div className="pr-2.5 pl-1 flex items-center">
            <button
              type="button"
              onClick={handleClear}
              title="Clear search (Esc)"
              aria-label="Clear search"
              className="p-1 text-stone-400 hover:text-amber-300 hover:bg-stone-800/80 rounded-full transition-all duration-150 focus:outline-none"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Live Search Results Dropdown Overlay */}
      {isOpen && isQueryActive && (
        <div className="absolute left-0 right-0 top-full mt-2.5 bg-[#120f0d]/95 backdrop-blur-xl border border-amber-600/30 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 divide-y divide-stone-800/70 max-w-xl mx-auto w-[90vw] sm:w-full">
          {/* Header info */}
          <div className="px-4 py-2.5 bg-stone-950/70 flex items-center justify-between text-[11px] text-stone-400">
            <div className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>
                {results.length > 0
                  ? `Found ${results.length} matching traditional ${results.length === 1 ? "mask" : "masks"}`
                  : "No masks found"}
              </span>
            </div>
            <span className="text-[10px] text-stone-400 font-mono hidden sm:inline">
              Press Enter for full catalog
            </span>
          </div>

          {/* Results List */}
          {results.length > 0 ? (
            <div className="max-h-80 overflow-y-auto divide-y divide-stone-800/50 scrollbar-thin scrollbar-thumb-stone-800 scrollbar-track-transparent">
              {results.slice(0, 8).map((mask) => (
                <button
                  key={mask.id}
                  type="button"
                  onClick={() => handleSelectMask(mask.id)}
                  className="w-full text-left px-4 py-3 hover:bg-stone-900/80 transition-colors flex items-center gap-3.5 group cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="w-11 h-11 rounded-xl bg-stone-950 border border-stone-800 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden group-hover:border-amber-500/50 transition-colors">
                    {mask.image ? (
                      <img
                        src={mask.image}
                        alt={mask.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-xl">🎭</span>
                    )}
                  </div>

                  {/* Mask Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-stone-100 group-hover:text-amber-300 transition-colors truncate">
                        {mask.name}
                      </h4>
                      <span className="text-[11px] text-amber-500 font-serif truncate">
                        {mask.sinhalaName}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-400 truncate mt-0.5">
                      {mask.tagline || mask.overview}
                    </p>
                  </div>

                  {/* Category Badge & Arrow */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getCategoryBadgeClass(
                        mask.category
                      )}`}
                    >
                      {getCategoryIcon(mask.category)}
                      <span className="hidden xs:inline">{mask.category}</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-6 py-8 text-center space-y-2">
              <span className="text-3xl select-none block">🎭</span>
              <p className="text-xs sm:text-sm font-medium text-stone-300">
                No masks matched &ldquo;<span className="text-amber-400">{query}</span>&rdquo;
              </p>
              <p className="text-[11px] text-stone-400 max-w-xs mx-auto">
                Try searching for <span className="text-stone-300 font-semibold">Naga Raksha</span>,{" "}
                <span className="text-stone-300 font-semibold">Gara Yaka</span>,{" "}
                <span className="text-stone-300 font-semibold">Sanni</span>,{" "}
                <span className="text-stone-300 font-semibold">Kolam</span>, or ritual terms like{" "}
                <span className="text-stone-300 font-semibold">fever</span>,{" "}
                <span className="text-stone-300 font-semibold">fire</span>, or{" "}
                <span className="text-stone-300 font-semibold">peacock</span>.
              </p>
            </div>
          )}

          {/* Footer View in Catalog */}
          {results.length > 0 && (
            <div className="px-4 py-2.5 bg-stone-950/80 flex items-center justify-between">
              <span className="text-[11px] text-stone-400">
                Total {results.length} results
              </span>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  navigate(`/explore?search=${encodeURIComponent(query.trim())}`);
                  if (onResultClick) onResultClick();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                View in Explore Catalog <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
