import { useState } from "react";
import Mask3DViewer from "./Mask3DViewer";
import { Sparkles, Compass, Ruler, Trees, Flame } from "lucide-react";

export default function MaskDetailView({ mask }) {
  const [activeTab, setActiveTab] = useState("colours");

  if (!mask) return null;

  return (
    <div className="bg-stone-900/90 border border-stone-800/90 rounded-3xl p-4 sm:p-8 lg:p-10 max-w-5xl mx-auto shadow-2xl backdrop-blur-md">
      {/* Top Grid: 3D Mask Showcase & Details Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-8 sm:mb-10">
        {/* Left Column: Interactive 3D Viewer */}
        <div className="lg:col-span-6">
          <Mask3DViewer mask={mask} />
        </div>

        {/* Right Column: Identity & Curatorial Metadata */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-amber-950/60 border border-amber-600/40 rounded-full text-xs font-bold text-amber-400 uppercase tracking-widest">
                {mask.category} Mask
              </span>
              <span className="text-xs text-stone-400 font-mono flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" /> Authentic Heritage
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
              {mask.name}
            </h1>
            <h2 className="text-amber-400 font-medium text-lg sm:text-2xl mt-0.5 sm:mt-1 font-serif">
              {mask.sinhalaName}
            </h2>
          </div>

          <blockquote className="border-l-2 border-amber-500/60 pl-3.5 sm:pl-4 text-stone-300 text-xs sm:text-sm italic">
            "{mask.tagline}"
          </blockquote>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            {mask.overview}
          </p>

          {/* Quick Specifications Pill Bar */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
            <div className="p-2.5 sm:p-3 rounded-xl bg-stone-950/80 border border-stone-800/80 flex items-center gap-2.5 sm:gap-3">
              <Trees className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <div className="min-w-0">
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-400">Timber</span>
                <span className="text-[11px] sm:text-xs font-semibold text-stone-200 truncate block">{mask.wood || "Vel Kaduru"}</span>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-stone-950/80 border border-stone-800/80 flex items-center gap-2.5 sm:gap-3">
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <div className="min-w-0">
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-400">Origin</span>
                <span className="text-[11px] sm:text-xs font-semibold text-stone-200 truncate block">{mask.origin || "Southern Sri Lanka"}</span>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-stone-950/80 border border-stone-800/80 flex items-center gap-2.5 sm:gap-3">
              <Ruler className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <div className="min-w-0">
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-400">Dimensions</span>
                <span className="text-[11px] sm:text-xs font-semibold text-stone-200 truncate block">{mask.dimensions || "Ceremonial Scale"}</span>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-stone-950/80 border border-stone-800/80 flex items-center gap-2.5 sm:gap-3">
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <div className="min-w-0">
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-400">Tradition</span>
                <span className="text-[11px] sm:text-xs font-semibold text-stone-200 truncate block">Ritual Carving</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-stone-800 gap-4 sm:gap-8 mb-6 sm:mb-8 overflow-x-auto scrollbar-none pb-0.5">
        {[
          { id: "colours", label: "PIGMENT SYMBOLOGY (වර්ණ අරුත)" },
          { id: "stage", label: "ON STAGE RITUAL (වේදිකා සම්ප්‍රදාය)" },
          { id: "facts", label: "CURATORIAL FACTS (කැටයම් තොරතුරු)" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 text-xs sm:text-sm font-bold tracking-wider whitespace-nowrap transition-all border-b-2 cursor-pointer ${
              activeTab === tab.id
                ? "border-amber-500 text-amber-400"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Display */}
      <div className="min-h-36 sm:min-h-40">
        {activeTab === "colours" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            {mask.colors && mask.colors.map((c, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-stone-950/80 border border-stone-800/80 hover:border-amber-600/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="block font-bold text-amber-300 text-xs sm:text-sm">{c.name}</span>
                </div>
                <span className="text-stone-400 text-xs leading-relaxed block">{c.meaning}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "stage" && (
          <div className="p-5 sm:p-6 rounded-2xl bg-stone-950/80 border border-stone-800/80 text-stone-300 text-xs sm:text-sm leading-relaxed space-y-3">
            <h4 className="text-amber-400 font-bold text-sm sm:text-base flex items-center gap-2">
              🎭 Theatrical Presence & Rhythms
            </h4>
            <p>{mask.onStage}</p>
            {mask.description && (
              <p className="text-stone-400 text-xs pt-2 border-t border-stone-900">
                {mask.description}
              </p>
            )}
          </div>
        )}

        {activeTab === "facts" && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-stone-300">
            {mask.quickFacts && mask.quickFacts.map((fact, idx) => (
              <li key={idx} className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-stone-950/80 border border-stone-800/80 hover:border-amber-600/30 transition-colors">
                <span className="text-amber-500 font-bold text-sm sm:text-base">✦</span>
                <span className="text-xs sm:text-sm text-stone-300 leading-relaxed">{fact}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}