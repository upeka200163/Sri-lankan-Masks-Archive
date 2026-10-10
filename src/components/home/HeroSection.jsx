import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Compass } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-24 md:pb-24 bg-[#090807] text-stone-100 border-b border-stone-800/80 select-none">
      {/* 1. Atmospheric Ambient Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-137.5 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.22),rgba(180,83,9,0.08)_45%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Main Grid: Left Facing Mask | Center Content | Right Facing Mask */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8">
          
          {/* LEFT CIRCLED AREA: Transparent Gini Raksha Mask (Facing directly Right) */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-center pointer-events-none">
            <div className="relative w-64 h-64 xl:w-76 xl:h-76 flex items-center justify-center animate-in fade-in slide-in-from-left-4 duration-700">
              {/* Fiery Solar Glow */}
              <div className="absolute inset-4 bg-red-600/30 rounded-full blur-2xl -z-10 animate-pulse" />
              <img
                src="/decorations/hero-mask-left.png"
                alt="Traditional Sri Lankan Gini Raksha Mask (Facing Right)"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(220,38,38,0.6)] transform -rotate-6 scale-105"
                loading="eager"
              />
            </div>
          </div>

          {/* CENTER AREA: Text, Title & Action CTAs */}
          <div className="lg:col-span-6 text-center space-y-5 sm:space-y-6">
            {/* Curatorial Header Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-amber-400 bg-amber-950/80 border border-amber-600/40 shadow-lg shadow-amber-950/40 animate-in fade-in slide-in-from-top-3 duration-500 max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
              <span className="truncate sm:whitespace-normal">ශ්‍රී ලාංකීය පාරම්පරික වෙස් මුහුණු උරුමය • Living Archive</span>
            </div>

            {/* Grand Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-stone-100 tracking-tight leading-[1.15] sm:leading-[1.1]">
              SACRED SPIRITS & <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-red-600">
                TRADITIONAL MASKS
              </span>
              <br />
              <span className="text-xl sm:text-3xl lg:text-3xl xl:text-4xl font-serif text-stone-300 font-normal">
                OF SRI LANKA
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-stone-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-1">
              Step into the sacred demonology, psychosomatic exorcism rituals, and master woodcarving guilds of Southern Sri Lanka. Preserved across three centuries of generational oral history.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-3 max-w-md sm:max-w-none mx-auto">
              <Link
                to="/explore"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 active:scale-98 text-stone-950 font-extrabold text-xs sm:text-sm transition-all shadow-xl shadow-amber-950/60 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <span>Explore 3D Mask Repository</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#quiz"
                className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-2xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-amber-300 border border-stone-800 hover:border-amber-600/50 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow min-h-[44px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Which Mask Are You?</span>
              </a>

              <Link
                to="/craft-and-history"
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-stone-950/80 hover:bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800/80 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <Compass className="w-3.5 h-3.5 text-amber-500" />
                <span>The 7 Stages</span>
              </Link>
            </div>
          </div>

          {/* RIGHT CIRCLED AREA: Transparent Gini Raksha Mask (Facing directly Left) */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-center pointer-events-none">
            <div className="relative w-64 h-64 xl:w-76 xl:h-76 flex items-center justify-center animate-in fade-in slide-in-from-right-4 duration-700">
              {/* Fiery Solar Glow */}
              <div className="absolute inset-4 bg-amber-600/30 rounded-full blur-2xl -z-10 animate-pulse" />
              <img
                src="/decorations/hero-mask-right.png"
                alt="Traditional Sri Lankan Gini Raksha Mask (Facing Left)"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(245,158,11,0.6)] transform rotate-6 scale-105"
                loading="eager"
              />
            </div>
          </div>

        </div>

        {/* 3. Mobile Facing Masks Row (Shown below buttons on smaller screens) */}
        <div className="flex lg:hidden items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 px-2">
          <div className="w-28 h-28 sm:w-36 sm:h-36 relative flex items-center justify-center shrink-0">
            <div className="absolute inset-2 bg-red-600/25 rounded-full blur-xl -z-10" />
            <img
              src="/decorations/hero-mask-left.png"
              alt="Gini Raksha Mask Left"
              className="w-full h-full object-contain filter drop-shadow-lg transform -rotate-6"
            />
          </div>

          <div className="w-px h-12 sm:h-16 bg-linear-to-b from-transparent via-amber-500/60 to-transparent" />

          <div className="w-28 h-28 sm:w-36 sm:h-36 relative flex items-center justify-center shrink-0">
            <div className="absolute inset-2 bg-amber-600/25 rounded-full blur-xl -z-10" />
            <img
              src="/decorations/hero-mask-right.png"
              alt="Gini Raksha Mask Right"
              className="w-full h-full object-contain filter drop-shadow-lg transform rotate-6"
            />
          </div>
        </div>

        {/* 4. Curatorial Key Metrics Bar */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-stone-900/60 border border-stone-800/80 text-center backdrop-blur-md shadow-xl">
          <div className="p-2 sm:p-3">
            <span className="block text-xl sm:text-3xl font-black text-amber-400">25</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-semibold">3D Artifacts</span>
          </div>

          <div className="p-2 sm:p-3 border-l border-stone-800/80">
            <span className="block text-xl sm:text-3xl font-black text-stone-100">3</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-semibold">Traditions</span>
          </div>

          <div className="p-2 sm:p-3 border-t sm:border-t-0 sm:border-l border-stone-800/80">
            <span className="block text-xl sm:text-3xl font-black text-amber-400">300+</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-semibold">Yrs Guild Lore</span>
          </div>

          <div className="p-2 sm:p-3 border-t sm:border-t-0 border-l border-stone-800/80">
            <span className="block text-xl sm:text-3xl font-black text-emerald-400">100%</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-semibold">Organic Alchemy</span>
          </div>
        </div>

      </div>
    </section>
  );
}