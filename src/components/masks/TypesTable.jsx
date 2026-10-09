export default function TypesTable() {
  const rows = [
    {
      type: "Raksha Masks",
      purpose: "Demons & protectors used in rituals, pageants and to ward off evil.",
      ritual: "Pageants, cultural festivals and exorcism thresholds.",
      look: "Bulging eyes, fangs, interwoven cobra hoods, vibrant red/yellow pigments.",
      wood: "Vel Kaduru"
    },
    {
      type: "Sanni Masks",
      purpose: "Slays 18 psychological and physiological illnesses.",
      ritual: "Daha Ata Sanniya all-night exorcism healing ceremony.",
      look: "Asymmetrical features, distorted lips, wild eyes representing ailments.",
      wood: "Vel Kaduru / Ruk Aththana"
    },
    {
      type: "Kolam Masks",
      purpose: "Satirical village theatre and comedic commentary.",
      ritual: "Southern coastal folk plays, royal court enactments.",
      look: "Heavily crowned kings, wrinkled village gossips, distinct human expressions.",
      wood: "Vel Kaduru"
    }
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-stone-900/50 shadow-xl my-10">
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
              <td className="p-4 font-bold text-stone-100">{r.type}</td>
              <td className="p-4 text-xs leading-relaxed">{r.purpose}</td>
              <td className="p-4 text-xs leading-relaxed text-amber-400/90">{r.ritual}</td>
              <td className="p-4 text-xs leading-relaxed">{r.look}</td>
              <td className="p-4 text-xs text-stone-400 font-mono">{r.wood}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}