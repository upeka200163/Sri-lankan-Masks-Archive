import { useState } from "react";
import { quizQuestions } from "../../data/quizData";
import { masksData } from "../../data/masksData";
import { galleryArtifactsData } from "../../data/galleryArtifactsData";
import { Link } from "react-router-dom";
import {
  Sparkles,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Trophy,
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Lightbulb
} from "lucide-react";
import confetti from "canvas-confetti";

export default function MaskQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); // Array of { questionId, selectedOption, isCorrect, match }
  const [selectedOptIndex, setSelectedOptIndex] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const currentQ = quizQuestions[currentStep];

  const handleChooseOption = (opt, index) => {
    if (isAnswerSubmitted) return;
    setSelectedOptIndex(index);
    setIsAnswerSubmitted(true);

    const answerRecord = {
      questionId: currentQ.id,
      questionText: currentQ.question,
      sinhalaQuestion: currentQ.sinhalaQuestion,
      selectedText: opt.text,
      isCorrect: opt.isCorrect,
      correctText: currentQ.options.find((o) => o.isCorrect)?.text,
      explanation: currentQ.explanation,
      match: opt.match,
      trait: opt.trait
    };

    setUserAnswers((prev) => [...prev, answerRecord]);
  };

  const handleNextQuestion = () => {
    if (currentStep + 1 < quizQuestions.length) {
      setCurrentStep((prev) => prev + 1);
      setSelectedOptIndex(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      
      // Calculate score and fire celebratory confetti if passed well
      const correctTotal = userAnswers.filter((a) => a.isCorrect).length + (currentQ.options[selectedOptIndex]?.isCorrect ? 1 : 0);
      if (correctTotal >= 5) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {
          // Fallback if confetti fails
        }
      }
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setUserAnswers([]);
    setSelectedOptIndex(null);
    setIsAnswerSubmitted(false);
    setIsQuizCompleted(false);
    setShowReview(false);
  };

  // Evaluation calculations
  const correctCount = userAnswers.filter((a) => a.isCorrect).length;
  const incorrectCount = userAnswers.length - correctCount;
  const percentage = Math.round((correctCount / quizQuestions.length) * 100);

  // Personality match determination based on highest frequency match
  const matchCounts = {};
  userAnswers.forEach((a) => {
    if (a.match) {
      matchCounts[a.match] = (matchCounts[a.match] || 0) + 1;
    }
  });
  const bestMatchId = Object.keys(matchCounts).length > 0
    ? Object.keys(matchCounts).reduce((a, b) => (matchCounts[a] > matchCounts[b] ? a : b))
    : "naga-raksha";

  const allMasks = [...masksData, ...galleryArtifactsData];
  const matchedMask = allMasks.find((m) => m.id === bestMatchId) || masksData[0];

  // Evaluation Title Badge
  const getEvaluationTitle = () => {
    if (percentage === 100) {
      return {
        title: "Master of Ambalangoda Lore",
        sinhala: "පාරම්පරික වෙස් මුහුණු විශාරද",
        icon: Trophy,
        color: "text-amber-400 bg-amber-950/80 border-amber-500/50",
        message: "Flawless knowledge! You possess a deep, curatorial understanding of traditional Sri Lankan mask mythology and woodcarving heritage."
      };
    } else if (percentage >= 75) {
      return {
        title: "Senior Heritage Scholar",
        sinhala: "සම්ප්‍රදායික උරුම ගවේෂක",
        icon: Award,
        color: "text-emerald-400 bg-emerald-950/80 border-emerald-500/50",
        message: "Outstanding! You have a profound command of ritual lineages, Daha Ata Sanniya healing, and Ambalangoda timber arts."
      };
    } else if (percentage >= 50) {
      return {
        title: "Cultural Apprentice",
        sinhala: "උරුම නිරීක්ෂක",
        icon: BookOpen,
        color: "text-blue-400 bg-blue-950/80 border-blue-500/50",
        message: "Good grasp! You recognize the core guardians and theatrical satire of coastal Lankan folk drama."
      };
    } else {
      return {
        title: "Curious Explorer",
        sinhala: "ආරම්භක ගවේෂක",
        icon: HelpCircle,
        color: "text-purple-400 bg-purple-950/80 border-purple-500/50",
        message: "A great start to your journey into Sri Lankan demonology, ritual healing, and Kolam folk dance theater!"
      };
    }
  };

  const evalData = getEvaluationTitle();
  const EvalIcon = evalData.icon;

  return (
    <section id="quiz" className="py-12 sm:py-20 px-4 bg-stone-950/80 border-y border-stone-800/80 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-500 font-bold flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Match & Folklore Quiz
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
            WHICH TRADITIONAL MASK ARE YOU?
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            Test your knowledge of sacred Kaduru carvings and folklore while discovering your cultural spirit mask archetype.
          </p>
        </div>

        {/* 1. QUIZ QUESTION SCREEN */}
        {!isQuizCompleted ? (
          <div className="bg-stone-900/90 border border-amber-600/30 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md">
            
            {/* Top Step & Progress Bar */}
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 mb-5 text-xs text-stone-400 border-b border-stone-800 pb-3.5">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-400">
                  Question {currentStep + 1} of {quizQuestions.length}
                </span>
                <span className="text-stone-400">•</span>
                <span className="text-[11px] text-stone-400">
                  {userAnswers.filter((a) => a.isCorrect).length} Correct
                </span>
              </div>

              {/* Glowing Progress Bar */}
              <div className="w-full xs:w-32 sm:w-44 bg-stone-950 rounded-full h-2 overflow-hidden border border-stone-800">
                <div
                  className="bg-linear-to-r from-amber-600 to-amber-400 h-full transition-all duration-300 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                  style={{
                    width: `${((currentStep + 1) / quizQuestions.length) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="mb-5 sm:mb-6">
              <h3 className="text-base sm:text-xl font-bold text-stone-100 leading-snug">
                {currentQ.question}
              </h3>
              <p className="text-amber-400/90 text-xs sm:text-sm font-serif mt-1">
                {currentQ.sinhalaQuestion}
              </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-5 sm:mb-6">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOptIndex === idx;
                let optionStyle = "bg-stone-950/80 border-stone-800 text-stone-300 hover:border-amber-600/50 hover:bg-stone-900/90";

                if (isAnswerSubmitted) {
                  if (opt.isCorrect) {
                    optionStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-950/50 scale-[1.01]";
                  } else if (isSelected && !opt.isCorrect) {
                    optionStyle = "bg-red-950/80 border-red-500 text-red-200 shadow-md shadow-red-950/50";
                  } else {
                    optionStyle = "bg-stone-950/40 border-stone-900 text-stone-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleChooseOption(opt, idx)}
                    className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[72px] sm:min-h-22.5 ${optionStyle}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-semibold text-xs sm:text-sm leading-relaxed">
                        {opt.text}
                      </span>
                      {isAnswerSubmitted && opt.isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      {isAnswerSubmitted && isSelected && !opt.isCorrect && (
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      )}
                    </div>

                    <span className="text-[10px] text-amber-500/80 font-mono mt-1.5 sm:mt-2 block">
                      Archetype Trait: {opt.trait}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Instant Folklore Explanation Box when Answered */}
            {isAnswerSubmitted && (
              <div className="p-3.5 sm:p-5 rounded-2xl bg-amber-950/30 border border-amber-600/40 text-xs sm:text-sm space-y-1.5 sm:space-y-2 animate-in fade-in slide-in-from-top-2 duration-300 mb-5 sm:mb-6">
                <div className="flex items-center gap-2 font-bold text-amber-300 text-xs">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Curatorial Lore & Historical Insight:</span>
                </div>
                <p className="text-stone-300 text-xs leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Action Bar */}
            {isAnswerSubmitted && (
              <div className="flex justify-end pt-2 border-t border-stone-800">
                <button
                  onClick={handleNextQuestion}
                  className="w-full sm:w-auto px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-950/50 cursor-pointer min-h-[44px]"
                >
                  <span>
                    {currentStep + 1 < quizQuestions.length ? "Next Question" : "View Final Evaluation"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* 2. QUIZ COMPLETION / SCORE & EVALUATION SCREEN */
          <div className="bg-linear-to-b from-stone-900 via-stone-950 to-[#070605] border border-amber-500/40 rounded-3xl p-5 sm:p-10 shadow-2xl space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-500">
            
            {/* Score Summary & Badge Header */}
            <div className="text-center space-y-3 pb-6 border-b border-stone-800">
              <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-md ${evalData.color}`}>
                <EvalIcon className="w-4 h-4" />
                <span>{evalData.title}</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-stone-100">
                {evalData.sinhala}
              </h3>

              <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed px-1">
                {evalData.message}
              </p>

              {/* Score Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto pt-2 sm:pt-3">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-stone-950 border border-stone-800 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-emerald-400">{correctCount}</span>
                  <span className="text-[10px] sm:text-[11px] text-stone-400 uppercase tracking-wider font-semibold">Correct</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-2xl bg-stone-950 border border-stone-800 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-red-400">{incorrectCount}</span>
                  <span className="text-[10px] sm:text-[11px] text-stone-400 uppercase tracking-wider font-semibold">Incorrect</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-2xl bg-stone-950 border border-stone-800 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-amber-400">{percentage}%</span>
                  <span className="text-[10px] sm:text-[11px] text-stone-400 uppercase tracking-wider font-semibold">Accuracy</span>
                </div>
              </div>
            </div>

            {/* Matched 3D Spirit Mask Spotlight */}
            <div className="p-4 sm:p-6 rounded-2xl bg-stone-950/80 border border-amber-600/30 flex flex-col md:flex-row items-center gap-5 sm:gap-6 shadow-inner">
              <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center p-2 shrink-0 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-radial from-amber-600/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                {matchedMask.image ? (
                  <img
                    src={matchedMask.image}
                    alt={matchedMask.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <span className="text-6xl">🎭</span>
                )}
              </div>

              <div className="space-y-2 text-center md:text-left">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-amber-400 font-bold block font-mono">
                  Your Cultural Spirit Mask Match
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-stone-100">
                  {matchedMask.name}
                </h4>
                <p className="text-amber-500 font-serif text-xs sm:text-sm font-medium">
                  {matchedMask.sinhalaName} • <span className="text-stone-400 text-xs font-mono">{matchedMask.category} Lineage</span>
                </p>
                <p className="text-stone-300 text-xs leading-relaxed line-clamp-3">
                  {matchedMask.overview}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                  <Link
                    to={`/masks/${matchedMask.id}`}
                    className="w-full sm:w-auto px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow cursor-pointer min-h-[40px]"
                  >
                    <span>Inspect 3D Artifact Record</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Review Answers Toggle Button */}
            <div>
              <button
                onClick={() => setShowReview(!showReview)}
                className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer min-h-[44px]"
              >
                <span className="flex items-center gap-2 text-left">
                  <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="line-clamp-1">Review Question Breakdown & Folklore</span>
                </span>
                {showReview ? <ChevronUp className="w-4 h-4 shrink-0 ml-2" /> : <ChevronDown className="w-4 h-4 shrink-0 ml-2" />}
              </button>

              {/* Review Accordion List */}
              {showReview && (
                <div className="mt-3 space-y-3 pt-2">
                  {userAnswers.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-2xl bg-stone-950/80 border border-stone-800 text-xs space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-stone-200">
                          {idx + 1}. {item.questionText}
                        </span>
                        {item.isCorrect ? (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 font-bold text-[10px] shrink-0 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Correct
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full bg-red-950 border border-red-500/50 text-red-400 font-bold text-[10px] shrink-0 flex items-center gap-1">
                            <XCircle className="w-3 h-3" /> Incorrect
                          </span>
                        )}
                      </div>

                      <div className="text-[11px] text-stone-400 space-y-1 pl-2 border-l border-stone-800">
                        <p>
                          <span className="text-stone-300 font-medium">Your Answer:</span>{" "}
                          <span className={item.isCorrect ? "text-emerald-400" : "text-red-400"}>
                            {item.selectedText}
                          </span>
                        </p>
                        {!item.isCorrect && (
                          <p>
                            <span className="text-stone-300 font-medium">Correct Fact:</span>{" "}
                            <span className="text-amber-400">{item.correctText}</span>
                          </p>
                        )}
                        <p className="text-stone-400 italic pt-1">
                          {item.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4 border-t border-stone-800">
              <button
                onClick={resetQuiz}
                className="w-full sm:w-auto px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>

              <Link
                to="/explore"
                className="w-full sm:w-auto px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-950/50 cursor-pointer min-h-[44px]"
              >
                <span>Explore Full 25 Mask Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}