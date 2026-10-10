import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Flame,
  Clock,
  Music,
  Shield,
  ArrowRight,
  BookOpen,
  ChevronDown,
  Sparkles,
  Layers,
  HeartPulse,
  Drama,
  CheckCircle2
} from "lucide-react";

export default function PerformancesPage() {
  useEffect(() => {
    document.title = "Performances & Rituals | Masks of Sri Lanka";
  }, []);

  const [openFaq, setOpenFaq] = useState(0);

  // 1. The Three Master Traditions
  const traditions = [
    {
      id: "sanni",
      title: "Sanni Yakuma & Tovil",
      sinhalaTitle: "දහඅට සන්නි යකුම සහ තොවිල්",
      category: "Healing & Exorcism",
      timing: "Dusk to Dawn (6:00 PM – 6:00 AM)",
      icon: HeartPulse,
      description:
        "An ancient 12-hour psychodramatic healing ritual combining Ayurvedic medicine, masked dances, and blazing fire torches. By confronting and comically mocking the 18 disease demons (Daha Ata Sanniya), the shaman restores mental and physical balance.",
      featuredMasks: ["Maha Kola Sanniya", "Kora Sanniya", "Pissu Sanniya"],
      link: "/masks/maha-kola-sanniya"
    },
    {
      id: "kolam",
      title: "Kolam Natuma",
      sinhalaTitle: "කෝලම් නැටුම (ගැමි නාට්‍ය)",
      category: "Folk Theatre & Satire",
      timing: "Evening Arenas (6 – 8 Hours)",
      icon: Drama,
      description:
        "Sri Lanka’s coastal folk opera blending royal pageantry, mythical animals, and witty social satire. Performers in elaborate wooden masks satirize colonial officials, gossiping elders, and village figures, culminating in moral Buddhist Jataka stories.",
      featuredMasks: ["Raja Kolam", "Nonchi Akka", "Jasaya & Lenchina"],
      link: "/masks/raja-kolam"
    },
    {
      id: "raksha",
      title: "Raksha Natuma",
      sinhalaTitle: "රාක්ෂ නැටුම් සහ පෙරහැර",
      category: "Guardian & Pageant Dances",
      timing: "Temple Festivals & Pageants",
      icon: Shield,
      description:
        "High-energy acrobatic dances representing mythical guardian demons and celestial birds. Dancers wearing flaring cobra hoods and fire flairs perform with explosive resin sparks to ward off evil planetary eyes (ඇස්වහ) and malevolent spirits.",
      featuredMasks: ["Naga Raksha", "Gurulu Raksha", "Gini Raksha"],
      link: "/masks/naga-raksha"
    }
  ];

  // 2. The 7 Sacred Stages of an Overnight Shanthikarma
  const stages = [
    {
      step: "01",
      time: "18:00 (Sunset)",
      title: "Sandhya Pahan Dalweema & Kapa",
      sinhala: "සන්ධ්‍යා පහන් දැල්වීම සහ කප සිටුවීම",
      desc: "The shaman plants the sacred branch ('Kapa') and lights evening oil lamps across coconut-leaf altars to sanctify the healing ground."
    },
    {
      step: "02",
      time: "20:00 (Evening)",
      title: "Bera Magula & Yahan Dekma",
      sinhala: "බෙර මඟුල සහ යහන් දැක්ම",
      desc: "Thunderous opening percussion on low-country Yak Bera drums paired with the high-pitched Horanewa horn to invite guardian deities."
    },
    {
      step: "03",
      time: "22:00 (Nightfall)",
      title: "Pandam Paliya & Fire Blessing",
      sinhala: "පන්දම් පාලිය සහ දුම්මල පිදීම",
      desc: "Dancers spin flaming torches and toss Dummala tree resin across the flames, creating 10-foot purifying fireball explosions."
    },
    {
      step: "04",
      time: "00:00 (Midnight)",
      title: "The Ata Paliya Procession",
      sinhala: "අට පාලිය ගෙනහැර දැක්වීම",
      desc: "Eight ritual apparitions enter sequentially presenting betel sheaves, white shawls, and lighted torches to placate spirit hosts."
    },
    {
      step: "05",
      time: "02:00 (Deep Night)",
      title: "Daha Ata Sanniya Descent",
      sinhala: "දහඅට සන්නි යකුන්ගේ බැසීම",
      desc: "The 18 disease demons descend in grotesque wooden masks, acting out symptoms and engaging in witty banter with the shaman."
    },
    {
      step: "06",
      time: "04:30 (Pre-Dawn)",
      title: "Maha Kola Exorcism Climax",
      sinhala: "මහා කෝල සන්නි සමාප්තිය",
      desc: "The towering 18-faced composite Demon King (Maha Kola Sanniya) appears, but is bound and pacified under ethical commandments."
    },
    {
      step: "07",
      time: "06:00 (Sunrise)",
      title: "Shanthi Wandana & Dawn Blessing",
      sinhala: "ශාන්ති වන්දනාව සහ ආශිර්වාදය",
      desc: "As the sun rises, the patient is bathed in cooling saffron-turmeric water, blessed white threads are tied, and milk rice is shared."
    }
  ];

  // 3. Sacred Instruments
  const instruments = [
    {
      name: "Yak Beraya (Ruhunu Bera)",
      sinhala: "පහතරට යක් බෙරය",
      category: "Master Percussion",
      desc: "Hollowed Kohomba wood cylinder with cowhide and monkey skin heads delivering deep bass and crisp rim slaps.",
      sollukattu: "“තජිං තොං තජිං තක්ක තජිං තා”"
    },
    {
      name: "Horanewa (Ritual Horn)",
      sinhala: "හොරණෑව",
      category: "Sacred Wind",
      desc: "Piercing quadruple-reed oboe played with circular breathing to summon deities across distant villages.",
      sollukattu: "Microtonal melody"
    },
    {
      name: "Thalampata (Bronze Cymbals)",
      sinhala: "තාලම්පට",
      category: "Metronome Pulse",
      desc: "Hand-forged bell-metal cymbals providing the precise timing that guides the dancers’ swift footwork.",
      sollukattu: "Crystalline chime"
    },
    {
      name: "Pandam & Dummala Resin",
      sinhala: "ගිනි පන්දම් සහ දුම්මල",
      category: "Purifying Fire",
      desc: "Cotton torches soaked in coconut oil and aromatic tree resin thrown to unleash blazing fireball explosions.",
      sollukattu: "Explosive flame bursts"
    }
  ];

  // 4. FAQs
  const faqs = [
    {
      q: "What is the psychological value of a traditional Tovil ritual?",
      sinhalaQ: "තොවිල් ශාන්තිකර්මවල මනෝවිද්‍යාත්මක හා වෛද්‍යමය පදනම කුමක්ද?",
      a: "Anthropologists and physicians view Tovil as an ancient system of psychodrama and art therapy. Personifying illness into tangible masked demons and comically ridiculing them removes subconscious terror, relieving psychosomatic distress."
    },
    {
      q: "Why is Vel Kaduru timber specifically used for performance masks?",
      sinhalaQ: "නැට්ටුවන් වෙල් කදුරු ලීයෙන් තැනූ වෙස් මුහුණු පමණක් පළඳින්නේ ඇයි?",
      a: "A full Shanthikarma or Kolam performance lasts between 6 to 12 hours. Vel Kaduru is extraordinarily lightweight, porous, and after traditional smoke-seasoning becomes crack-proof and termite-resistant."
    },
    {
      q: "What is the difference between Kolam Natuma and Sanni Yakuma?",
      sinhalaQ: "කෝලම් නැටුම සහ සන්නි යකුම අතර වෙනස කුමක්ද?",
      a: "Kolam is secular, satirical folk drama performed for community entertainment and social commentary. Sanni Yakuma is a sacred medical exorcism ceremony conducted to cure specific ailments and balance bodily humors."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0e0c0a] text-stone-100 py-10 sm:py-20 selection:bg-amber-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* 1. Page Header & Mandatory Documentary Hero Showcase */}
        <section className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-600/40">
            <Flame className="w-3.5 h-3.5 text-amber-400" /> Living Rituals & Folk Theatres
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-100 tracking-tight leading-tight">
            TRADITIONAL PERFORMANCES & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-500 to-red-500">
              RITUAL DANCES OF SRI LANKA
            </span>
          </h1>

          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Discover the dramatic choreography, sacred chants, and polyrhythmic percussion powering Sri Lanka’s <span className="text-amber-400 font-semibold">Low-Country (Pahatharata)</span> masked traditions.
          </p>

          {/* Documentary Showcase Banner: 'Sanni Yakuma & Nocturnal Tovil' */}
          <div className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl mt-6 sm:mt-10 group">
            <div className="aspect-4/3 sm:aspect-16/9 md:aspect-21/9 w-full max-h-[480px] bg-stone-950">
              <img
                src="/images/sanni-exorcism-dance.jpg"
                alt="Sanni Yakuma & Nocturnal Tovil Exorcism Fire Dance in Southern Sri Lanka"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/50 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-left bg-stone-950/70 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-3 sm:p-0 rounded-2xl sm:rounded-none border border-stone-800/60 sm:border-none">
              <div className="space-y-1 max-w-2xl">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-600 text-stone-950 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  Nocturnal Shanthikarma
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-stone-100 mt-0.5 sm:mt-1">
                  Sanni Yakuma & Nocturnal Tovil
                </h2>
                <p className="text-xs text-stone-300 line-clamp-2 sm:line-clamp-none">
                  Documenting all-night fire-lit exorcisms, Yak Bera drumming, and masked disease demon dances in Southern Sri Lanka.
                </p>
              </div>

              <span className="text-[10px] sm:text-[11px] font-mono text-amber-400 bg-stone-950/80 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-stone-800 shrink-0 self-start sm:self-auto">
                Ambalangoda Ritual Archive
              </span>
            </div>
          </div>
        </section>

        {/* 2. The Three Master Performance Traditions */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-800 pb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" /> Three Sacred Lineages
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100">
                The Three Master Traditions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              From all-night healing exorcisms to satirical folk comedies and guardian temple pageants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {traditions.map((trad) => {
              const Icon = trad.icon;
              return (
                <div
                  key={trad.id}
                  className="p-6 sm:p-8 rounded-3xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-stone-950 border border-stone-800 text-amber-300 font-bold">
                        {trad.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                        {trad.title}
                      </h3>
                      <p className="text-xs font-mono text-amber-400/90 mt-0.5">
                        {trad.sinhalaTitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {trad.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-stone-800/80">
                    <div className="flex items-center gap-2 text-xs text-stone-400">
                      <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{trad.timing}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-stone-400 uppercase block">
                        Featured Masks:
                      </span>
                      <p className="text-xs text-stone-200 font-medium">
                        {trad.featuredMasks.join(" • ")}
                      </p>
                    </div>

                    <Link
                      to={trad.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 pt-1 transition-colors"
                    >
                      Inspect Mask Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. The 7 Sacred Stages of an Overnight Shanthikarma */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-800 pb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4" /> 12-Hour Chronological Cycle
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100">
                The Seven Stages of a Tovil
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              The continuous dusk-to-dawn ritual progression unfolding from 6:00 PM sunset until 6:00 AM sunrise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stages.map((stg) => (
              <div
                key={stg.step}
                className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/50 transition-colors space-y-2 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-amber-400">
                      STAGE {stg.step}
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">
                      {stg.time.split(" ")[0]}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-stone-100">
                    {stg.title}
                  </h3>

                  <p className="text-[11px] font-mono text-amber-400/90">
                    {stg.sinhala}
                  </p>

                  <p className="text-xs text-stone-300 leading-relaxed pt-1">
                    {stg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Sacred Instruments & Percussion */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-800 pb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">
                <Music className="w-4 h-4" /> Ritual Acoustic Elements
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100">
                Sacred Instruments & Fire
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              The acoustic drums and purifying fire torches providing the rhythm and spectacle of masked rituals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {instruments.map((inst, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3 shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                    {inst.category}
                  </span>
                  <h3 className="text-base font-bold text-stone-100">
                    {inst.name}
                  </h3>
                  <p className="text-[11px] font-mono text-amber-400/90">
                    {inst.sinhala}
                  </p>
                  <p className="text-xs text-stone-300 leading-relaxed pt-1">
                    {inst.desc}
                  </p>
                </div>

                <div className="p-2 rounded-xl bg-stone-950 border border-stone-800 text-[11px] font-mono text-amber-300 text-center">
                  {inst.sollukattu}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. FAQs Section */}
        <section className="space-y-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              Anthropological and cultural insights into Sri Lankan masked ceremonies.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-stone-900/80 border-amber-500/70 shadow-xl shadow-amber-950/30"
                      : "bg-stone-950/60 border-stone-800 hover:border-stone-700"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <h3 className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? "text-amber-400" : "text-stone-200"}`}>
                        {faq.q}
                      </h3>
                      <p className="text-xs font-mono text-stone-400">
                        {faq.sinhalaQ}
                      </p>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-amber-400" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/80 pt-3 bg-stone-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Navigation CTA */}
        <section className="rounded-3xl bg-linear-to-r from-stone-950 via-stone-900 to-amber-950 border border-stone-800 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
              EXPLORE THE SACRED MASKS
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Discover the seasoned Vel Kaduru timber, natural mineral pigments, and intricate chiseling behind every ceremonial mask.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/explore"
              className="px-6 py-3 rounded-xl bg-linear-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-bold text-sm shadow-xl shadow-amber-950/50 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Browse Mask Catalog
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/craft-and-history"
              className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 font-bold text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              7 Stages of Woodcarving
              <Layers className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}