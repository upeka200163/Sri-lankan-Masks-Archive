import { useState } from "react";
import { stagesData } from "../../data/stagesData";
import { Sparkles, Clock, Wrench, Key, CheckCircle2, ChevronRight } from "lucide-react";

export default function SevenStages() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStage = stagesData.find((s) => s.step === activeStep) || stagesData[0];

  return (
    <div className="bg-stone-900/70 border border-stone-800/90 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md">
      {/* Stage Number Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3.5 mb-6 sm:mb-8 border-b border-stone-800 scrollbar-none">
        {stagesData.map((stage) => (
          <button
            key={stage.step}
            onClick={() => setActiveStep(stage.step)}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 shrink-0 min-h-[38px] ${
              activeStep === stage.step
                ? "bg-amber-600 text-stone-950 shadow-lg shadow-amber-950/40 scale-105"
                : "bg-stone-950/80 text-stone-400 hover:text-stone-200 border border-stone-800 hover:border-stone-700"
            }`}
          >
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-mono ${
              activeStep === stage.step ? "bg-amber-950 text-amber-200" : "bg-stone-900 text-stone-400"
            }`}>
              {stage.step}
            </span>
            <span>Stage 0{stage.step}</span>
          </button>
        ))}
      </div>

      {/* Active Stage Showcase Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-amber-950/80 border border-amber-600/40 rounded-full text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                Stage 0{currentStage.step} of 07
              </span>
              <span className="text-xs text-stone-400 font-serif">
                {currentStage.sinhalaTitle}
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
              {currentStage.title}
            </h3>
            <p className="text-amber-400/90 text-xs sm:text-sm font-medium italic mt-1">
              "{currentStage.tagline}"
            </p>
          </div>

          <p className="text-stone-300 text-xs sm:text-base leading-relaxed">
            {currentStage.description}
          </p>

          {/* Metadata Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-stone-950/80 border border-stone-800/80 flex items-start gap-3">
              <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-400 font-semibold">Typical Duration</span>
                <span className="text-xs font-bold text-stone-200">{currentStage.duration}</span>
              </div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-stone-950/80 border border-stone-800/80 flex items-start gap-3">
              <Wrench className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-400 font-semibold">Tools & Implements</span>
                <span className="text-xs font-bold text-stone-200 line-clamp-1">{currentStage.toolsUsed}</span>
              </div>
            </div>
          </div>

          {/* Master Secret Insight */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-950/20 border border-amber-600/30 flex items-start gap-3">
            <Key className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-amber-300 block mb-0.5">Master Carver's Guild Secret:</span>
              <span className="text-stone-300 leading-relaxed">{currentStage.secret}</span>
            </div>
          </div>
        </div>

        {/* Right Stage Step Tracker / Timeline Card */}
        <div className="lg:col-span-5 bg-stone-950/90 border border-stone-800 rounded-2xl p-4 sm:p-6 space-y-3">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-2">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Full Carving Sequence
            </span>
            <span className="text-[11px] text-stone-400 font-mono">7 Sacred Steps</span>
          </div>

          <div className="space-y-2">
            {stagesData.map((s) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer min-h-[44px] ${
                  activeStep === s.step
                    ? "bg-amber-950/60 border-amber-600/50 text-stone-100 shadow-md"
                    : "bg-stone-900/40 border-stone-900 text-stone-400 hover:text-stone-200 hover:border-stone-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    activeStep === s.step ? "bg-amber-500 text-stone-950" : "bg-stone-800 text-stone-400"
                  }`}>
                    {s.step}
                  </span>
                  <span className="text-xs font-semibold">{s.title.split("&")[0]}</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${activeStep === s.step ? "text-amber-400" : "text-stone-400"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}