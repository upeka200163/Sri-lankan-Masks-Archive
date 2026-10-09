import { useState } from "react";

const detailsData = [
  {
    id: "eyes",
    title: "The Fierce Eyes (දෑස් සහ බැල්ම)",
    sinhalaTitle: "ගිනිමය නෙත්",
    mask: "Naga & Gurulu Raksha",
    description: "විශාලව නෙරා ආ, රවුම් රතු පැහැති දෑස් මඟින් නපුරු ආත්ම සහ දෘෂ්ටි බියපත් කිරීම සිදු කරයි. කැටයමේදී ඇස්වල බියකරු බව මතු කිරීමට තද කළු රේඛා භාවිත කරයි.",
    focusArea: "Orbital Carving & Pupil Sclera Contrast"
  },
  {
    id: "fangs",
    title: "Protruding Fangs (මුව සහ දළ)",
    sinhalaTitle: "මුව විවරය සහ දළ යුගල",
    mask: "Maha Kola & Raksha",
    description: "මුව දෙපසින් පහළට විහිදුණු සුදු පැහැති තියුණු දළ මඟින් අධිමානුෂික බලය, කෝපය සහ යක්ෂ ආවේශයේ ප්‍රචණ්ඩත්වය නිරූපණය කෙරේ.",
    focusArea: "Canine Curvature & Gum Detail"
  },
  {
    id: "cobras",
    title: "Interwoven Cobras (නයි පෙණ ගොන්න)",
    sinhalaTitle: "ගෙතුණු නාග පෙණ",
    mask: "Naga Raksha",
    description: "හිස වටා සහ ඔටුන්න ලෙස එකිනෙක පැටලී සිටින නාගයන් විස්සකට වැඩි ප්‍රමාණයක් ඉතාම සියුම්ව තනි ලී කුට්ටියෙන් හෝ එකලස් කර කැටයම් කර ඇත.",
    focusArea: "Hood Symmetry & Scale Texture"
  },
  {
    id: "crown",
    title: "Royal Headdress (රාජකීය ඔටුන්න)",
    sinhalaTitle: "කෝලම් ඔටුනු කැටයම",
    mask: "Raja Kolam",
    description: "මහනුවර යුගයේ සහ දකුණු පළාතේ රාජකීය ආභරණ කලාව පිළිබිඹු කරන ස්ථර කිහිපයකින් යුත් කැටයම් සහිත දැවැන්ත ඔටුන්නකි.",
    focusArea: "Tiered Filigree & Leaf Motifs"
  }
];

export default function LookCloser() {
  const [selectedDetail, setSelectedDetail] = useState(detailsData[0]);

  return (
    <div className="bg-stone-900/60 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Navigation Selector */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-bold block mb-2">
            Fine Craftsmanship Focus
          </span>
          {detailsData.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedDetail(item)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                selectedDetail.id === item.id
                  ? "bg-amber-950/60 border-amber-600/50 text-stone-100 shadow-lg scale-[1.02]"
                  : "bg-stone-950 border-stone-800/80 text-stone-400 hover:text-stone-200 hover:border-stone-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">{item.title}</span>
                <span className="text-xs text-amber-400 font-mono">{item.mask}</span>
              </div>
              <span className="text-xs text-stone-400 block mt-1">{item.sinhalaTitle}</span>
            </button>
          ))}
        </div>

        {/* Detail Display Canvas */}
        <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-2xl p-8 flex flex-col justify-between min-h-90">
          <div>
            <div className="flex justify-between items-start border-b border-stone-800/80 pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
                  Inspecting Element
                </span>
                <h3 className="text-2xl font-extrabold text-stone-100 mt-1">
                  {selectedDetail.title}
                </h3>
              </div>
              <span className="px-3 py-1 bg-stone-900 border border-stone-800 rounded-full text-xs text-amber-300 font-mono">
                {selectedDetail.focusArea}
              </span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed mb-6">
              {selectedDetail.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-900/60 border border-amber-900/30 flex items-center justify-between text-xs text-stone-400">
            <span>පාරම්පරික මෙවලම්: කටුව, නියන සහ ස්වාභාවික වර්ණ මිශ්‍රණ</span>
            <span className="text-amber-500 font-semibold">Ambalangoda Archive</span>
          </div>
        </div>
      </div>
    </div>
  );
}