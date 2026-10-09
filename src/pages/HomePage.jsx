import { useState } from "react";
import HeroSection from "../components/home/HeroSection";
import CategorySpotlight from "../components/home/CategorySpotlight";
import MaskQuiz from "../components/home/MaskQuiz";
import MaskDetailView from "../components/masks/MaskDetailView";
import { masksData } from "../data/masksData";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Eye,
  Shield,
  HeartPulse,
  Drama,
  Hammer,
  Music,
  MapPin,
  Layers,
  Compass,
  Award,
  Feather,
  Flame,
  CheckCircle2
} from "lucide-react";

export default function HomePage() {
  const [selectedFeaturedId, setSelectedFeaturedId] = useState(masksData[0].id);
  const featuredMask = masksData.find((m) => m.id === selectedFeaturedId) || masksData[0];

  const anatomyHighlights = [
    {
      title: "Interlocking Cobra Hoods",
      sinhala: "නයි පෙණ ගොන්න",
      category: "Naga Raksha",
      description: "Over twenty intertwined serpent hoods carved from a single Kaduru block to ward off evil planetary eyes."
    },
    {
      title: "Protruding White Fangs",
      sinhala: "තියුණු දළ යුගල",
      category: "Raksha & Maha Kola",
      description: "Exaggerated curved canines symbolizing superhuman ferocity and spiritual intimidation of wicked entities."
    },
    {
      title: "Asymmetrical Facial Spasms",
      sinhala: "විකෘති මුහුණුවර",
      category: "Sanni Masks",
      description: "Anatomically precise depictions of facial palsy and neurological illnesses cured through exorcism."
    },
    {
      title: "Royal Lotus Diadem Filigree",
      sinhala: "කෝලම් රාජකීය ඔටුන්න",
      category: "Raja Kolam",
      description: "Multi-tiered gold filigree headdress reflecting ancient medieval Lankan kingship and sun emblems."
    }
  ];

  return (
    <div className="space-y-24 pb-20 bg-[#0e0c0a] text-stone-100">

      {/* 1. Cinematic Museum Hero Section */}
      <HeroSection />

      {/* 2. Category Spotlight: Four Ways into the Masks */}
      <CategorySpotlight />

      {/* 3. Interactive 3D Virtual Showroom & Artifact Inspector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-bold flex items-center justify-center gap-1.5">
            <Eye className="w-3.5 h-3.5" /> Virtual 3D Showroom
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
            INSPECT MASKS IN 3D PERSPECTIVE
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm md:text-base">
            Select any traditional mask to rotate, tilt, and examine authentic carving craftsmanship in high-fidelity 3D perspective.
          </p>

          {/* Quick Mask Selector Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {masksData.map((mask) => (
              <button
                key={mask.id}
                onClick={() => setSelectedFeaturedId(mask.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${selectedFeaturedId === mask.id
                    ? "bg-amber-600 text-stone-950 shadow-lg shadow-amber-950/50 scale-105"
                    : "bg-stone-900/90 text-stone-400 hover:text-stone-200 border border-stone-800 hover:border-stone-700"
                  }`}
              >
                <span>{mask.name}</span>
                <span className={`text-[10px] uppercase px-1.5 py-0.5 rounded font-mono ${selectedFeaturedId === mask.id ? "bg-amber-950 text-amber-200" : "bg-stone-950 text-stone-400"
                  }`}>
                  {mask.category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Live 3D Mask Detail View Component */}
        <MaskDetailView mask={featuredMask} />
      </section>

      {/* 4. Mask Anatomy & Micro-Carving Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900/50 border border-stone-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800 pb-6 mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-500 font-bold flex items-center gap-1.5 mb-1">
                <Layers className="w-4 h-4" /> Anatomical Study
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100">
                The Nuanced Anatomy of Folk Masks
              </h2>
            </div>
            <Link
              to="/gallery"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
            >
              <span>Explore High-Res Gallery & Zoom Engine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {anatomyHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800/80 hover:border-amber-600/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-500 font-mono font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-stone-100">
                    {item.title}
                  </h3>
                  <p className="text-xs text-amber-400 font-serif mb-2.5">
                    {item.sinhala}
                  </p>
                  <p className="text-stone-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Craftsmanship & Seven Stages Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-amber-950/60 via-stone-900 to-stone-950 border border-amber-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-600/40">
              <Hammer className="w-3.5 h-3.5" /> Generational Woodcarving Lore
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-100 tracking-tight">
              FROM KADURU TIMBER TO IMMORTAL MASK
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Explore the 7 sacred stages of mask making: sustainable swamp harvesting, smoke-loft desapping over open hearths, hand-gouging with antique steel chisels, and the mystical eye-opening consecration ritual (*නේත්‍ර තැබීම*).
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-stone-300 font-mono">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Vel Kaduru Wood</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Makulu Riverbed Clay</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Sadilingam Pigment</span>
            </div>
          </div>

          <Link
            to="/craft-and-history"
            className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-extrabold rounded-2xl text-sm transition-all shadow-xl shadow-amber-950/50 flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Learn the 7 Stages of Carving</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. Performances & Drum Rhythms Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-900/40 border border-stone-800 rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
              <Music className="w-4 h-4" /> Folk Dances & Theatrical Rhythms
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100">
              Yak Bera Drums & Low-Country Exorcism Dances
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Sri Lankan masks are living ritual instruments. Accompanied by the rapid, hypnotic beats of the cylindrical Yak Bera drum and torches of burning resin (දුම්මල), the masked dancer enters an altered state to heal patients and entertain villages.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              to="/performances"
              className="px-6 py-3.5 bg-stone-950 hover:bg-stone-900 text-amber-400 hover:text-amber-300 border border-amber-600/40 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow"
            >
              <span>Explore Folk Dance Performances</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Interactive Mask Spirit & Folklore Quiz */}
      <section id="quiz" className="scroll-mt-12">
        <MaskQuiz />
      </section>

      {/* 8. Ambalangoda Guild & Heritage Invitation Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-b from-stone-900/90 to-stone-950 border border-stone-800 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-amber-600/10 border border-amber-600/30 flex items-center justify-center mx-auto text-xl">
            🏛️
          </div>
          <h3 className="text-2xl font-extrabold text-stone-100">
            Visit the Ariyapala Mask Museum in Ambalangoda
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Experience live mask carving workshops, historic 19th-century royal Kolam headdresses, and centuries of preserved demonology archives along Sri Lanka's Southern Coast.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-xs transition-all shadow"
            >
              Plan Your Visit / Contact Guild
            </Link>
            <Link
              to="/explore"
              className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 rounded-xl text-xs transition-all"
            >
              Browse All 25 Mask Records
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}