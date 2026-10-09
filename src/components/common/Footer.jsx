import { Link } from "react-router-dom";
import { Sparkles, ArrowUp, Send, MapPin, Feather, Heart, Layers, BookOpen, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success"

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setStatus("submitting");

    // Simulate instant asynchronous submission without page reload
    setTimeout(() => {
      setStatus("success");
      setEmail("");

      // Auto dismiss success toast after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuizClick = () => {
    if (window.location.pathname === "/") {
      const quizElem = document.getElementById("quiz");
      if (quizElem) {
        quizElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-[#070605] text-stone-300 border-t border-stone-800/80 overflow-hidden select-none">
      {/* 1. Atmospheric Ambient Radial Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Transparent Background Mask Watermarks (Left & Right Flanks) */}
      <div className="absolute -left-12 -bottom-10 w-72 h-72 sm:w-96 sm:h-96 opacity-15 pointer-events-none select-none transition-transform duration-700 hover:scale-105">
        <img
          src="/decorations/transparent-naga.png"
          alt="Traditional Naga Raksha Mask Watermark"
          className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          loading="lazy"
        />
      </div>

      <div className="absolute -right-12 -bottom-10 w-72 h-72 sm:w-96 sm:h-96 opacity-15 pointer-events-none select-none transition-transform duration-700 hover:scale-105">
        <img
          src="/decorations/transparent-gurulu.png"
          alt="Traditional Gurulu Raksha Mask Watermark"
          className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          loading="lazy"
        />
      </div>

      {/* 3. Top Decorative Traditional Liya-wela Floral Filigree */}
      <div className="relative pt-12 pb-6 px-4 flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-xs sm:max-w-md w-full opacity-90 hover:opacity-100 transition-opacity duration-300 mb-3">
          <img
            src="/decorations/transparent-filigree.png"
            alt="Traditional Sri Lankan Liya-wela Woodcarving Filigree"
            className="w-full max-h-14 object-contain filter drop-shadow-[0_4px_16px_rgba(245,158,11,0.25)]"
          />
        </div>
        <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-amber-500 font-mono">
          ශ්‍රී ලාංකීය පාරම්පරික වෙස් මුහුණු උරුමය
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-stone-100 mt-1 tracking-tight">
          Living Heritage of Sri Lankan Traditional Masks
        </h3>
      </div>

      {/* 4. Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Col 1 (Span 4): Brand Overview & Heritage Badges */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-stone-900 border border-amber-600/40 flex items-center justify-center text-2xl shadow-lg shadow-amber-950/30">
                🎭
              </div>
              <div>
                <h4 className="text-stone-100 font-extrabold text-lg tracking-tight">
                  MASKS OF SRI LANKA
                </h4>
                <span className="text-xs text-amber-400 font-serif">Ambalangoda & Southern Traditions</span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed pr-2">
              An interactive cultural archive dedicated to documenting the sacred healing exorcisms of <span className="text-stone-200">Daha Ata Sanniya</span>, royal satirical dances of <span className="text-stone-200">Kolam</span>, and guardian talismans of <span className="text-stone-200">Raksha</span>.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-full bg-stone-900/90 border border-stone-800 text-[11px] text-amber-300 font-mono flex items-center gap-1.5">
                <Feather className="w-3 h-3 text-amber-500" /> Kaduru Wood
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-900/90 border border-stone-800 text-[11px] text-stone-300 font-mono">
                Natural Pigments
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-900/90 border border-stone-800 text-[11px] text-stone-300 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> 25 3D Artifacts
              </span>
            </div>
          </div>

          {/* Col 2 (Span 2): Mask Lineages Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-amber-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Mask Lineages
            </h5>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link to="/explore?cat=Raksha" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Raksha (Demons & Wards)
                </Link>
              </li>
              <li>
                <Link to="/explore?cat=Sanni" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Daha Ata Sanniya (Healing)
                </Link>
              </li>
              <li>
                <Link to="/explore?cat=Kolam" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Kolam (Village Folk Drama)
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> 3D Micro-Carving Gallery
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Complete 25 Mask Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 (Span 2): Curatorial Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-amber-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Resources
            </h5>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link to="/craft-and-history" className="hover:text-amber-400 transition-colors block">
                  Carving Stages & Tools
                </Link>
              </li>
              <li>
                <Link to="/performances" className="hover:text-amber-400 transition-colors block">
                  Yak Bera Drum Rhythms
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 transition-colors block">
                  Pigment Chemistry & Colors
                </Link>
              </li>
              <li>
                <Link to="/#quiz" onClick={handleQuizClick} className="hover:text-amber-400 transition-colors block">
                  Personality Mask Match
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors block">
                  Artisan Guild & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 (Span 4): Curatorial Newsletter & Heritage Dispatch */}
          <div className="lg:col-span-4 bg-stone-900/60 backdrop-blur-md border border-stone-800/90 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-stone-100 font-bold text-sm mb-1">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Heritage Newsletter & Field Notes</span>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed mb-4">
                Receive monthly articles on rare ritual recordings, master carver interviews, and traditional folk dance events in the Southern Province.
              </p>

              {/* Newsletter Form with preventDefault & In-Place Confirmation */}
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-stone-200 placeholder-stone-500 focus:outline-hidden focus:border-amber-500 transition-colors disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="absolute right-1.5 top-1.5 px-3.5 py-1.5 bg-amber-600 hover:bg-amber-500 active:scale-95 text-stone-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span>Joining...</span>
                      </>
                    ) : (
                      <>
                        <span>Join</span>
                        <Send className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </div>

                {/* Brief Confirmation Message */}
                {status === "success" && (
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-600/50 flex items-center gap-2 text-emerald-300 text-xs font-medium animate-in fade-in slide-in-from-top-1 duration-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Thank you for subscribing! You will receive field notes & cultural updates.</span>
                  </div>
                )}
              </form>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-800/60 flex items-center justify-between text-[11px] text-stone-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-500" /> Ambalangoda, Sri Lanka
              </span>
              <span className="text-amber-500/90 font-mono">Southern Artisans Guild</span>
            </div>
          </div>
        </div>

        {/* 5. Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Masks of Sri Lanka. All Rights Reserved.</span>
            <span className="hidden sm:inline text-stone-400">•</span>
            <span className="text-amber-500/90 flex items-center gap-1">
              Preserved with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> for Generational Education
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-stone-400 font-mono hidden md:inline">
              Vel Kaduru • Ambalangoda Archive
            </span>
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl bg-stone-900/90 hover:bg-amber-600 text-stone-300 hover:text-stone-950 border border-stone-800 hover:border-amber-500 font-bold text-xs flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-lg"
              title="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}