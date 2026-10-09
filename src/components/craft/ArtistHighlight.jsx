import { artistsData } from "../../data/artistsData";
import { Sparkles, MapPin, Award, BookOpen, Compass, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArtistHighlight() {
  return (
    <div className="space-y-12">
      {/* Museum Hero Banner */}
      <div className="bg-linear-to-b from-stone-900 via-stone-950 to-[#070605] border border-amber-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-600/40">
            <Award className="w-3.5 h-3.5" /> The Living Cradle of Mask Heritage
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
            {artistsData.museum.name}
          </h2>
          <h3 className="text-lg sm:text-xl text-amber-400 font-serif font-medium">
            {artistsData.museum.sinhalaName}
          </h3>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {artistsData.museum.history} {artistsData.museum.significance}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-400">
            <span className="flex items-center gap-1.5 text-stone-200 font-semibold bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-800">
              <MapPin className="w-3.5 h-3.5 text-amber-500" /> {artistsData.museum.location}
            </span>
            <span className="flex items-center gap-1.5 bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-800">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> Open Working Museum & Archives
            </span>
          </div>
        </div>
      </div>

      {/* Master Carver Lineage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {artistsData.families.map((fam, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800/90 hover:border-amber-600/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-600/10 border border-amber-600/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                {fam.name}
              </h4>
              <p className="text-xs uppercase tracking-wider text-amber-500 font-bold font-mono mt-1 mb-3">
                {fam.title}
              </p>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {fam.contribution}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800/60 flex items-center justify-between text-xs text-stone-400">
              <span>Ambalangoda Southern Guild</span>
              <span className="text-amber-500 font-mono">Master Legacy</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
