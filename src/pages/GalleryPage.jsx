import LookCloser from "../components/gallery/LookCloser";
import VideoShowcase from "../components/gallery/VideoShowcase";
import { galleryArtifactsData } from "../data/galleryArtifactsData";
import { Link } from "react-router-dom";
import { Sparkles, Eye, ArrowRight, Layers } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0e0c0a] text-stone-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-950/40 border border-amber-600/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Visual Heritage & Micro-Carving
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-stone-100 tracking-tight">
            THE ARCHIVAL <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-500 to-red-500">
              GALLERY & CINEMA
            </span>
          </h1>
          <p className="text-stone-400 text-sm md:text-base mt-4 leading-relaxed">
            Examine the nuanced anatomical precision, expressive demonology, and master craftsmanship of coastal Sri Lankan masks preserved across generational workshops.
          </p>
        </div>

        {/* Section 1: Interactive Micro-Detail Inspector */}
        <section>
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-stone-100 tracking-tight">
                Anatomical Inspection
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-400 uppercase tracking-widest hidden sm:inline">
              Interactive Zoom Engine
            </span>
          </div>

          <LookCloser />
        </section>

        {/* Section 2: Complete Curatorial Repository Grid */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-800/80 pb-6 mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-1">
                <Layers className="w-4 h-4" /> Full Catalog Index
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100">
                Complete Artifact Repository
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              A curated catalog showcasing preserved traditional masks across the Raksha, Sanni, and Kolam lineages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryArtifactsData.map((mask) => (
              <div
                key={mask.id}
                className="group bg-stone-900/50 backdrop-blur-sm border border-stone-800/90 rounded-3xl p-6 hover:border-amber-600/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-950/20"
              >
                <div>
                  {/* දැන් මෙතැනින් mask.image හරහා නිවැරදි රූපය දිස්වේ */}
                  <div className="relative h-64 bg-stone-950 rounded-2xl overflow-hidden mb-5 border border-stone-800/80 flex items-center justify-center p-3">
                    {mask.image ? (
                      <img
                        src={mask.image}
                        alt={mask.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-6xl select-none">🎭</span>
                    )}
                    <span className="absolute top-3.5 right-3.5 px-3 py-1 bg-stone-900/90 backdrop-blur-md border border-stone-800 rounded-full text-[11px] font-semibold text-amber-400 uppercase tracking-wider shadow">
                      {mask.category}
                    </span>
                  </div>

                  {/* Mask Identity */}
                  <div>
                    <h3 className="text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                      {mask.name}
                    </h3>
                    <p className="text-amber-500/90 text-xs font-medium mt-0.5 mb-3 font-mono">
                      {mask.sinhalaName}
                    </p>
                    <p className="text-xs text-stone-400 leading-relaxed line-clamp-3">
                      {mask.overview}
                    </p>
                  </div>
                </div>

                {/* Inspect Link */}
                <Link
                  to={`/masks/${mask.id}`}
                  className="mt-6 w-full py-3 bg-stone-950 hover:bg-amber-600 text-stone-300 hover:text-stone-950 border border-stone-800 hover:border-amber-600 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-amber-950/40"
                >
                  Examine Artifact Record <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Archival Video Screening */}
        <section className="pt-4">
          <VideoShowcase />
        </section>
      </div>
    </div>
  );
}