import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function MaskCard({ mask }) {
  return (
    <div className="bg-stone-900/80 backdrop-blur-sm border border-stone-800 rounded-3xl overflow-hidden hover:border-amber-600/50 hover:shadow-2xl hover:shadow-amber-950/20 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* 3D Visual Preview Area */}
        <div className="relative h-64 overflow-hidden bg-linear-to-b from-stone-900 via-stone-950 to-[#0c0a09] flex items-center justify-center p-4 border-b border-stone-800/80">
          {/* Subtle Radial Glow */}
          <div className="absolute inset-0 bg-radial from-amber-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {mask.image ? (
            <img
              src={mask.image}
              alt={mask.name}
              className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] group-hover:scale-108 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <span className="text-6xl group-hover:scale-110 transition-transform duration-500">🎭</span>
          )}

          {/* 3D Badge */}
          <span className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md text-amber-400 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-600/30 flex items-center gap-1 shadow">
            <Sparkles className="w-2.5 h-2.5" /> 3D View
          </span>

          {/* Category Badge */}
          <span className="absolute top-3 right-3 bg-amber-600 text-stone-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            {mask.category}
          </span>
        </div>

        {/* Identity & Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
            {mask.name}
          </h3>
          <p className="text-amber-500 text-sm font-medium mb-3 font-serif">{mask.sinhalaName}</p>
          <p className="text-stone-400 text-xs line-clamp-3 leading-relaxed">
            {mask.overview}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <Link
          to={`/masks/${mask.id}`}
          className="w-full py-2.5 bg-stone-950 hover:bg-amber-600 text-stone-300 hover:text-stone-950 border border-stone-800 hover:border-transparent rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200"
        >
          සම්පූර්ණ විස්තරය බලන්න (View 3D Record) <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}