import { Layers, Shield, HeartPulse, Drama, Trees } from "lucide-react";

export default function TypesTable() {
  const rows = [
    {
      type: "Raksha Masks",
      sinhala: "රාක්ෂ වෙස් මුහුණු",
      purpose: "Demons & protectors used in rituals, pageants and to ward off evil.",
      ritual: "Pageants, cultural festivals and exorcism thresholds.",
      look: "Bulging eyes, fangs, interwoven cobra hoods, vibrant red/yellow pigments.",
      wood: "Vel Kaduru",
      icon: Shield,
      color: "text-amber-400 border-amber-500/40 bg-amber-950/30"
    },
    {
      type: "Sanni Masks",
      sinhala: "සන්නි වෙස් මුහුණු",
      purpose: "Slays 18 psychological and physiological illnesses.",
      ritual: "Daha Ata Sanniya all-night exorcism healing ceremony.",
      look: "Asymmetrical features, distorted lips, wild eyes representing ailments.",
      wood: "Vel Kaduru / Ruk Aththana",
      icon: HeartPulse,
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/30"
    },
    {
      type: "Kolam Masks",
      sinhala: "කෝලම් වෙස් මුහුණු",
      purpose: "Satirical village theatre and comedic commentary.",
      ritual: "Southern coastal folk plays, royal court enactments.",
      look: "Heavily crowned kings, wrinkled village gossips, distinct human expressions.",
      wood: "Vel Kaduru",
      icon: Drama,
      color: "text-purple-400 border-purple-500/40 bg-purple-950/30"
    }
  ];

  return (
    <div className="my-6 sm:my-10">
      {/* Mobile Stacked Cards Layout (< 768px) */}
      <div className="md:hidden space-y-4">
        {rows.map((r, i) => {
          const Icon = r.icon;
          return (
            <div
              key={i}
              className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3.5 shadow-lg"
            >
              <div className="flex items-center justify-between border-b border-stone-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg border ${r.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-100">{r.type}</h3>
                    <span className="text-xs text-amber-500 font-serif">{r.sinhala}</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-stone-400 px-2.5 py-1 rounded-full bg-stone-950 border border-stone-800 flex items-center gap-1">
                  <Trees className="w-3 h-3 text-amber-400" />
                  {r.wood}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-500/90 block">
                    Purpose
                  </span>
                  <p className="text-stone-300 leading-relaxed mt-0.5">{r.purpose}</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-500/90 block">
                    Ritual / Context
                  </span>
                  <p className="text-stone-300 leading-relaxed mt-0.5">{r.ritual}</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-500/90 block">
                    Typical Anatomy & Features
                  </span>
                  <p className="text-stone-400 leading-relaxed mt-0.5">{r.look}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Table View (>= 768px) */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-stone-800 bg-stone-900/50 shadow-xl">
        <table className="w-full text-left text-sm text-stone-300">
          <thead className="bg-stone-950 text-xs uppercase tracking-wider text-amber-500 border-b border-stone-800">
            <tr>
              <th className="p-4">Mask Type</th>
              <th className="p-4">Purpose</th>
              <th className="p-4">Ritual / Context</th>
              <th className="p-4">Typical Look</th>
              <th className="p-4">Wood</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800/60">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-stone-800/40 transition-colors">
                <td className="p-4 font-bold text-stone-100 whitespace-nowrap">{r.type}</td>
                <td className="p-4 text-xs leading-relaxed">{r.purpose}</td>
                <td className="p-4 text-xs leading-relaxed text-amber-400/90">{r.ritual}</td>
                <td className="p-4 text-xs leading-relaxed">{r.look}</td>
                <td className="p-4 text-xs text-stone-400 font-mono whitespace-nowrap">{r.wood}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}