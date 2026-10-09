import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Shield, HeartPulse, Drama, Hammer } from "lucide-react";

export const categoriesData = [
  {
    id: "raksha",
    title: "Raksha Masks",
    sinhalaTitle: "රාක්ෂ වෙස් මුහුණු",
    subtitle: "Protection & Festivals",
    description:
      "Ferocious demon protectors crowned with intertwined cobra hoods and solar plumage. Used in pageants and homes to ward off evil eyes (ඇස්වහ) and negative planetary forces.",
    link: "/explore?cat=Raksha",
    linkText: "Explore Raksha Masks",
    image: "/masks/naga-raksha.jpg",
    badge: "Guardian Talismans",
    badgeColor: "text-amber-400 bg-amber-950/80 border-amber-600/30",
    gradient: "from-amber-950/50 via-stone-900/80 to-[#070605]",
    borderHover: "hover:border-amber-500/60",
    glowColor: "bg-amber-600/20",
    icon: Shield,
    iconColor: "text-amber-400"
  },
  {
    id: "sanni",
    title: "Sanni Yakuma",
    sinhalaTitle: "සන්නි යකුම",
    subtitle: "Healing & Exorcism Rituals",
    description:
      "Eighteen curative disease-spirit masks headed by Maha Kola Sanniya. Ancient shamans utilized psychological ritual theater and comedy to dispel illness and trauma.",
    link: "/explore?cat=Sanni",
    linkText: "Explore Sanni Masks",
    image: "/masks/gallery/3d/biri-sanniya.jpg",
    badge: "Curative Medicine",
    badgeColor: "text-emerald-400 bg-emerald-950/80 border-emerald-600/30",
    gradient: "from-emerald-950/50 via-stone-900/80 to-[#070605]",
    borderHover: "hover:border-emerald-500/60",
    glowColor: "bg-emerald-600/20",
    icon: HeartPulse,
    iconColor: "text-emerald-400"
  },
  {
    id: "kolam",
    title: "Kolam Natum",
    sinhalaTitle: "කෝලම් නැටුම්",
    subtitle: "Folk Theatre & Satire",
    description:
      "Narrative coastal masquerade born from royal lore. Featuring majestic kingly diadems, soldiers, and village caricatures that satirize colonial and feudal pretenses.",
    link: "/explore?cat=Kolam",
    linkText: "Explore Kolam Masks",
    image: "/masks/raja-kolam.jpg",
    badge: "Satirical Theatre",
    badgeColor: "text-purple-400 bg-purple-950/80 border-purple-600/30",
    gradient: "from-purple-950/50 via-stone-900/80 to-[#070605]",
    borderHover: "hover:border-purple-500/60",
    glowColor: "bg-purple-600/20",
    icon: Drama,
    iconColor: "text-purple-400"
  },
  {
    id: "craftsmanship",
    title: "Craft & Heritage",
    sinhalaTitle: "කැටයම් කලාව සහ උරුමය",
    subtitle: "Artisan Woodcarving & Lore",
    description:
      "Generational woodworking secrets: harvesting porous Vel Kaduru timber, smoke-loft desapping, chisel sculpting, and natural mineral pigment alchemy.",
    link: "/craft-and-history",
    linkText: "Explore 7 Sacred Stages",
    image: "/images/craftsmanship-3d.jpg",
    badge: "Artisan Alchemy",
    badgeColor: "text-red-400 bg-red-950/80 border-red-600/30",
    gradient: "from-red-950/50 via-stone-900/80 to-[#070605]",
    borderHover: "hover:border-red-500/60",
    glowColor: "bg-red-600/20",
    icon: Hammer,
    iconColor: "text-red-400"
  }
];

export default function CategorySpotlight() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <span className="text-xs uppercase tracking-widest text-amber-500 font-bold flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Four Ways into the Masks
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
          EXPLORE BY TRADITION & CRAFT
        </h2>
        <p className="text-stone-400 text-xs sm:text-sm md:text-base leading-relaxed">
          Delve into the three living mask pantheons of Sri Lanka alongside the generational woodcarving heritage that breathes life into each sacred piece.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoriesData.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <Link
              key={cat.id}
              to={cat.link}
              className={`group p-6 rounded-3xl bg-linear-to-b ${cat.gradient} border border-stone-800/90 ${cat.borderHover} hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden`}
            >
              {/* Radial Ambient Glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${cat.glowColor} rounded-full blur-2xl pointer-events-none`}
              />

              <div>
                {/* 3D Visual Render Image Box */}
                <div className="relative h-48 w-full bg-stone-950 rounded-2xl overflow-hidden mb-5 border border-stone-800/80 flex items-center justify-center p-2 group-hover:border-stone-700 transition-colors">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                    loading="lazy"
                  />
                  <span
                    className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-md ${cat.badgeColor}`}
                  >
                    {cat.badge}
                  </span>
                </div>

                {/* Icon & Subtitle */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-stone-900 border border-stone-800">
                    <IconComponent className={`w-4 h-4 ${cat.iconColor}`} />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-mono text-stone-400 font-semibold">
                    {cat.subtitle}
                  </span>
                </div>

                {/* Titles */}
                <h3 className="text-xl font-extrabold text-stone-100 group-hover:text-amber-300 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-amber-500/90 text-xs font-serif font-medium mt-0.5 mb-2.5">
                  {cat.sinhalaTitle}
                </p>

                {/* Description */}
                <p className="text-stone-300/90 text-xs leading-relaxed line-clamp-4">
                  {cat.description}
                </p>
              </div>

              {/* Action Footer */}
              <div className="pt-4 mt-6 border-t border-stone-800/80 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
                <span>{cat.linkText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
