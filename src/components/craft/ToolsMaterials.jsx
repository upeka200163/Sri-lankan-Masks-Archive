import { toolsAndMaterials } from "../../data/stagesData";
import { Sparkles, Layers, ShieldCheck, Flame, Feather, Droplets, Hammer } from "lucide-react";

export default function ToolsMaterials() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Sacred Timber":
        return Feather;
      case "Carving Tools":
        return Hammer;
      case "Natural Primer":
        return Layers;
      case "Organic Alchemy":
        return Flame;
      case "Pure Black Pigment":
        return ShieldCheck;
      default:
        return Droplets;
    }
  };

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolsAndMaterials.map((item) => {
          const IconComponent = getCategoryIcon(item.category);
          return (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-stone-900/60 border border-stone-800/90 hover:border-amber-600/40 hover:shadow-xl hover:shadow-amber-950/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-amber-600/10 border border-amber-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-stone-950 border border-stone-800 text-[10px] uppercase tracking-wider font-mono text-amber-400 font-bold">
                    {item.badge}
                  </span>
                </div>

                <span className="text-[11px] uppercase tracking-wider text-stone-400 font-mono block mb-1">
                  {item.category}
                </span>

                <h3 className="text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h3>

                <p className="text-stone-300 text-xs sm:text-sm mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-800/60 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                <span>Traditional Formulation</span>
                <span className="text-amber-500 font-semibold">100% Organic</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
