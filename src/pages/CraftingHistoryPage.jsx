import SevenStages from "../components/craft/SevenStages";
import ToolsMaterials from "../components/craft/ToolsMaterials";
import ArtistHighlight from "../components/craft/ArtistHighlight";
import { historyTimeline } from "../data/stagesData";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Hammer,
  Clock,
  BookOpen,
  ArrowRight,
  Shield,
  Layers,
  HelpCircle,
  Feather,
  Flame
} from "lucide-react";

export default function CraftingHistoryPage() {
  const faqs = [
    {
      q: "Why is Vel Kaduru (Nux vomica) the only timber chosen for authentic ceremonial masks?",
      sinhalaQ: "වෙස් මුහුණු සඳහා වෙල් කදුරු ලීය පමණක් විශේෂයෙන් තෝරාගන්නේ ඇයි?",
      a: "Vel Kaduru is extraordinarily lightweight and porous. When dancers perform throughout the night in rigorous low-country rituals, heavy masks cause severe neck strain. Additionally, the natural alkaline sap of Kaduru acts as an organic repellent against termites and wood-boring larvae after smoke seasoning."
    },
    {
      q: "What is the spiritual significance of the 'Eye Opening Ritual' (නේත්‍ර තැබීම)?",
      sinhalaQ: "නේත්‍ර තැබීමේ මංගල්‍යයේ ආධ්‍යාත්මික වැදගත්කම කුමක්ද?",
      a: "In ancient Sinhalese demonology, a mask remains merely a hollow piece of timber until the black pupils of the eyes are painted. The master painter fasts and applies the final stroke at an astrologically auspicious hour (නැකත) to awaken the protective or curative spirit."
    },
    {
      q: "How do natural mineral pigments last for over a century without fading?",
      sinhalaQ: "ස්වාභාවික ඛනිජ වර්ණ ශතවර්ෂ ගණනාවක් නොමැකී පවතින්නේ කෙසේද?",
      a: "Master artisans grind minerals like Sadilingam (cinnabar) and Hiriyal (yellow orpiment) with purified Makulu riverbed clay and bind them using natural Dorana tree resin oil (දොරණ තෙල්). This organic resin polymerizes into a humidity-proof seal that resists tropical decay."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0e0c0a] text-stone-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* 1. Page Header & Hero Documentary Showcase */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-600/40">
            <Sparkles className="w-3.5 h-3.5" /> Ambalangoda Living Heritage & Oral Lore
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-100 tracking-tight leading-tight">
            THE SACRED CRAFT & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-500 to-red-500">
              CENTURIES OF HISTORY
            </span>
          </h1>

          <p className="text-stone-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Discover the generational knowledge, botanical alchemy, and spiritual woodcarving traditions transforming raw <span className="text-stone-200 font-semibold">Vel Kaduru</span> logs into immortal theatrical and exorcistic masks.
          </p>

          {/* Documentary Workshop Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl mt-6 sm:mt-10 group">
            <div className="aspect-4/3 sm:aspect-16/9 w-full max-h-[480px] bg-stone-950">
              <img
                src="/images/carving-artisan.jpg"
                alt="Master Artisan Chiseled Naga Raksha from Vel Kaduru Wood in Ambalangoda"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/50 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-left bg-stone-950/70 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-3 sm:p-0 rounded-2xl sm:rounded-none border border-stone-800/60 sm:border-none">
              <div>
                <span className="px-2.5 py-0.5 bg-amber-600 text-stone-950 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  Ambalangoda Open Atelier
                </span>
                <h3 className="text-base sm:text-xl font-bold text-stone-100 mt-1">
                  Master Artisan Chiseled Naga Raksha
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 sm:line-clamp-none">
                  Documenting hand gouging with steel chisels and natural mineral pigments.
                </p>
              </div>

              <span className="text-[10px] sm:text-[11px] font-mono text-amber-400 bg-stone-950/80 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-stone-800 shrink-0 self-start sm:self-auto">
                Southern Province Guild Archive
              </span>
            </div>
          </div>
        </section>

        {/* 2. Section: The 7 Sacred Stages of Carving */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-800 pb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">
                <Hammer className="w-4 h-4" /> Technical Process
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100">
                The Seven Stages of Carving
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              From sustainable swamp harvesting to the mystical eye-opening consecration ritual (*නේත්‍ර තැබීම*).
            </p>
          </div>

          <SevenStages />
        </section>

        {/* 3. Section: Tools & Botanical Pigment Alchemy */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-800 pb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">
                <Feather className="w-4 h-4" /> Traditional Mediums
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100">
                Artisan Toolset & Mineral Alchemy
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              The 100% natural, organic pigments, hand-forged gouges, and seasoned timber formulas preserved across three centuries.
            </p>
          </div>

          <ToolsMaterials />
        </section>

        {/* 4. Section: Historical Eras & Origin Timeline */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Historical Lineages & Epochs
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100">
              The Historical Chronicle of Sri Lankan Masks
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              Tracing mask lore from the mythic pregnancy craving of Queen Menikpala to anti-colonial satire and modern conservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {historyTimeline.map((era, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800/90 hover:border-amber-600/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/40 text-[11px] font-mono text-amber-300 font-bold">
                      {era.year}
                    </span>
                    <span className="text-xs text-stone-400 font-mono">Era 0{idx + 1}</span>
                  </div>

                  <span className="text-xs text-amber-500/90 font-bold block mb-1">
                    {era.era}
                  </span>

                  <h3 className="text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                    {era.title}
                  </h3>

                  <p className="text-stone-300 text-xs sm:text-sm mt-3 leading-relaxed">
                    {era.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-800/60 flex items-center gap-2 text-xs text-stone-400">
                  <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                  <span>Ambalangoda Historical Archive</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Section: Master Guilds & Museum Profile */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-800 pb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">
                <Shield className="w-4 h-4" /> Living Guardians
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100">
                The Master Guilds & The Ariyapala Legacy
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              Explore the institutions and carver families safeguarding authentic folk dances, woodcarving apprenticeships, and museum archives.
            </p>
          </div>

          <ArtistHighlight />
        </section>

        {/* 6. Section: Curatorial FAQs & Timber Insights */}
        <section className="bg-stone-900/50 border border-stone-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" /> Curatorial Insights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100">
              Frequently Asked Questions on Mask Making
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              Authentic answers to traditional timber selection, pigment durability, and consecration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800/90 hover:border-amber-600/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-amber-300 mb-1 leading-snug">
                    {faq.q}
                  </h3>
                  <span className="text-xs text-amber-500/80 font-serif block mb-3">
                    {faq.sinhalaQ}
                  </span>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-base font-bold text-stone-100">Ready to examine the carved artifacts in 3D?</h4>
              <p className="text-xs text-stone-400">View our interactive repository of 13 traditional masks.</p>
            </div>
            <Link
              to="/explore"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-amber-950/50 cursor-pointer shrink-0"
            >
              <span>Explore 3D Mask Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}