import { useState } from "react";
import { Play, X, Clock, Film, ArrowRight, Sparkles, MapPin, Layers } from "lucide-react";

const videoArchives = [
  {
    id: "sanni-dance",
    title: "Daha Ata Sanniya: Sacred Midnight Exorcism",
    sinhalaTitle: "දහඅට සන්නි ශාන්තිකර්ම රාත්‍රිය",
    category: "Ritual Ceremony",
    duration: "14:20",
    origin: "Southern Coastline, Bentara",
    description:
      "Authentic nocturnal field recording capturing the sacred incantations, rapid Yak Bera polyrhythms, resin fire torches (දුම්මල), and the dramatic entrance of the 18 disease-curing demon manifestations.",
    embedUrl: "https://www.youtube-nocookie.com/embed/W7qWa52k-nE",
    thumbnail: "/decorations/craft-drums.jpg",
    tags: ["Healing Exorcism", "Yak Bera", "Sacred Ritual", "18 Sanni"]
  },
  {
    id: "kaduru-carving",
    title: "The Master's Hand: Chiseling Vel Kaduru Timber",
    sinhalaTitle: "වෙල් කදුරු කැටයම් කලාව සහ වර්ණ රසායනය",
    category: "Living Craft",
    duration: "09:45",
    origin: "Ambalangoda Atelier",
    description:
      "An intimate look inside a multi-generational master workshop in Ambalangoda detailing the smoke seasoning of Vel Kaduru wood, steel gouging techniques, and natural mineral pigment preparation.",
    embedUrl: "https://www.youtube-nocookie.com/embed/5qap5aO4i9A",
    thumbnail: "/images/carving-artisan.jpg",
    tags: ["Woodcarving", "Vel Kaduru", "Natural Dyes", "Master Carver"]
  },
  {
    id: "kolam-court",
    title: "Kolam Natuma: The Grand Theatrical Procession",
    sinhalaTitle: "කෝලම් නාට්‍ය සහ රාජකීය පෙරහැර",
    category: "Folk Theatre",
    duration: "16:15",
    origin: "Maha Ambalangoda Guild",
    description:
      "The comedic spectacles, towering royal King Mahasammata lotus headdresses, Nonchi Akka village satires, and Jasaya skits enacted in the living coastal Kolam drama tradition.",
    embedUrl: "https://www.youtube-nocookie.com/embed/fJ9rUzIMcZQ",
    thumbnail: "/masks/raja-kolam.jpg",
    tags: ["Kolam Drama", "Royal Diadem", "Village Satire", "King Mahasammata"]
  }
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-16 sm:py-24 border-t border-stone-800/80 bg-stone-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-800/80 pb-8 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-950/40 border border-amber-600/30 mb-3">
              <Film className="w-3.5 h-3.5" /> Living Archival Motion
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
              TRADITIONS IN MOTION
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
              Explore dynamic performances of ancient healing rituals and the meticulous heritage craftsmanship preserved across generations.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-400 font-mono bg-stone-900/60 px-4 py-2 rounded-xl border border-stone-800 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Ambalangoda Field Archives
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoArchives.map((video) => (
            <div
              key={video.id}
              className="group bg-stone-900/70 border border-stone-800/90 rounded-3xl overflow-hidden hover:border-amber-600/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-950/30"
            >
              <div>
                {/* Thumbnail Container */}
                <div
                  onClick={() => setActiveVideo(video)}
                  className="relative aspect-video bg-stone-950 overflow-hidden cursor-pointer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/40 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-amber-500 group-hover:bg-amber-400 text-stone-950 flex items-center justify-center shadow-xl shadow-black/80 transform group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 fill-stone-950 ml-0.5" />
                    </div>
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-stone-950/90 backdrop-blur-md border border-stone-800 rounded-lg text-[11px] font-semibold text-amber-400 uppercase tracking-wider shadow">
                      {video.category}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-stone-950/90 backdrop-blur-md rounded-lg text-[11px] font-mono text-stone-300 border border-stone-800">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {video.duration}
                  </div>
                </div>

                {/* Information Body */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-500/90 uppercase tracking-wider mb-2">
                    <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>{video.origin}</span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-serif mt-0.5 mb-2">
                    {video.sinhalaTitle}
                  </p>
                  
                  <p className="text-xs text-stone-400 mt-2 line-clamp-3 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Cultural Tags & Action Button */}
              <div className="p-6 pt-3 space-y-4 border-t border-stone-800/60 bg-stone-950/30">
                {/* Cultural Tags Badges */}
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-stone-900/90 text-stone-300 border border-stone-800 group-hover:border-amber-900/40 group-hover:text-amber-200/90 transition-colors"
                    >
                      <span className="text-amber-500 font-bold text-[10px]">#</span>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setActiveVideo(video)}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-950 hover:bg-amber-600 text-stone-300 hover:text-stone-950 border border-stone-800 hover:border-amber-600 font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow cursor-pointer"
                >
                  <span>Watch Archival Screening</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Screen */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-stone-950 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-900/40">
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block">
                  {activeVideo.category} • {activeVideo.origin}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-100">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-100 transition-colors border border-stone-800 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame with Documentary Backdrop */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className="w-full h-full object-cover opacity-60 filter blur-xs"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-2xl animate-pulse">
                  <Play className="w-8 h-8 fill-stone-950 ml-1" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-bold block mb-1">
                    Archival Footage Recording
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-stone-100">
                    {activeVideo.title}
                  </h4>
                  <p className="text-sm text-stone-300 max-w-md mx-auto mt-2">
                    {activeVideo.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Bottom Detail */}
            <div className="p-6 bg-stone-900/60 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-amber-400 font-bold block">
                  {activeVideo.sinhalaTitle}
                </span>
                <p className="text-xs text-stone-400">
                  Recorded in collaboration with Ambalangoda Master Carver Guild & Traditional Dancers.
                </p>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="px-5 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold rounded-xl text-xs transition-all shrink-0 cursor-pointer"
              >
                Close Archival Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}