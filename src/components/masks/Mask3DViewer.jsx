import { useState, useRef, useEffect } from "react";
import { RotateCw, Sparkles, ZoomIn, Minimize2, Eye, Hand } from "lucide-react";

export default function Mask3DViewer({ mask, className = "" }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);
  const touchStartRef = useRef(null);

  // Auto rotation effect when enabled
  useEffect(() => {
    let animFrame;
    let angle = 0;
    if (isAutoRotating && !isHovered) {
      const loop = () => {
        angle += 0.02;
        setRotate({
          x: Math.sin(angle * 0.7) * 8,
          y: Math.sin(angle) * 16
        });
        setLightPos({
          x: 50 + Math.sin(angle) * 25,
          y: 40 + Math.cos(angle * 0.7) * 20
        });
        animFrame = requestAnimationFrame(loop);
      };
      animFrame = requestAnimationFrame(loop);
    }
    return () => cancelAnimationFrame(animFrame);
  }, [isAutoRotating, isHovered]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates -1 to 1
    const xPct = (x / rect.width) * 2 - 1;
    const yPct = (y / rect.height) * 2 - 1;

    // 3D rotation angles
    setRotate({
      x: -yPct * 16,
      y: xPct * 20
    });

    // Dynamic spotlight position
    setLightPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isAutoRotating) {
      setRotate({ x: 0, y: 0 });
      setLightPos({ x: 50, y: 35 });
    }
  };

  // Touch event handlers for mobile gesture interaction
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      setIsHovered(true);
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    }
  };

  const handleTouchMove = (e) => {
    if (!cardRef.current || !e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Constrain to container boundaries
    const clampedX = Math.max(0, Math.min(rect.width, x));
    const clampedY = Math.max(0, Math.min(rect.height, y));

    const xPct = (clampedX / rect.width) * 2 - 1;
    const yPct = (clampedY / rect.height) * 2 - 1;

    setRotate({
      x: -yPct * 20,
      y: xPct * 24
    });

    setLightPos({
      x: (clampedX / rect.width) * 100,
      y: (clampedY / rect.height) * 100
    });
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    touchStartRef.current = null;
    if (!isAutoRotating) {
      setTimeout(() => {
        setRotate({ x: 0, y: 0 });
        setLightPos({ x: 50, y: 35 });
      }, 400);
    }
  };

  return (
    <div
      className={`relative group select-none ${className}`}
      style={{ perspective: 1200 }}
    >
      {/* 3D Container */}
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isZoomed ? 1.15 : 1}, ${isZoomed ? 1.15 : 1}, 1)`,
          transformStyle: "preserve-3d",
          transition: isHovered ? "transform 0.08s ease-out" : "transform 0.5s ease-out",
          touchAction: "none"
        }}
        className="relative w-full aspect-square max-h-[380px] sm:max-h-[460px] mx-auto rounded-3xl bg-linear-to-b from-stone-900 via-stone-950 to-[#070605] border border-stone-800/80 shadow-2xl shadow-black/80 overflow-hidden flex items-center justify-center p-4 sm:p-6 cursor-grab active:cursor-grabbing"
      >
        {/* Dynamic Studio Radial Spotlight */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 260px at ${lightPos.x}% ${lightPos.y}%, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.03) 40%, transparent 70%)`
          }}
        />

        {/* Ambient Pedestal Glow */}
        <div className="absolute bottom-4 inset-x-8 h-8 bg-amber-600/10 blur-xl rounded-full pointer-events-none" />

        {/* 3D Mask Image */}
        {mask.image ? (
          <img
            src={mask.image}
            alt={mask.name}
            className="w-full h-full object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.85)] z-10 transition-transform duration-300"
            style={{
              transform: "translateZ(30px)"
            }}
            loading="eager"
          />
        ) : (
          <span className="text-7xl sm:text-8xl select-none" style={{ transform: "translateZ(30px)" }}>
            🎭
          </span>
        )}

        {/* Top Badges */}
        <div
          className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex items-center gap-2"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="px-2.5 sm:px-3 py-1 bg-stone-900/90 backdrop-blur-md border border-amber-600/40 rounded-full text-[10px] sm:text-[11px] font-bold text-amber-400 uppercase tracking-wider sm:tracking-widest shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" /> 3D View
          </span>
        </div>

        <div
          className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="px-2.5 sm:px-3 py-1 bg-stone-950/80 backdrop-blur-md border border-stone-800 rounded-full text-[10px] sm:text-[11px] font-mono text-stone-300 font-semibold uppercase">
            {mask.category}
          </span>
        </div>

        {/* Interactive Hint Indicator */}
        <div
          className={`absolute bottom-3 sm:bottom-4 inset-x-0 flex justify-center z-20 transition-opacity duration-300 pointer-events-none ${
            isHovered ? "opacity-0" : "opacity-80"
          }`}
          style={{ transform: "translateZ(35px)" }}
        >
          <span className="px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-[10px] sm:text-[11px] text-stone-300 border border-stone-800/80 flex items-center gap-1.5 shadow">
            <Hand className="w-3 h-3 text-amber-400 sm:hidden" />
            <Eye className="w-3 h-3 text-amber-400 hidden sm:inline" />
            <span className="sm:hidden">Drag with finger to rotate in 3D</span>
            <span className="hidden sm:inline">Move cursor to rotate in 3D</span>
          </span>
        </div>
      </div>

      {/* Control Buttons Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-3 sm:mt-4 px-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer min-h-[38px] ${
              isAutoRotating
                ? "bg-amber-600 text-stone-950 border-amber-500 shadow-md shadow-amber-950/40"
                : "bg-stone-900/90 text-stone-300 border-stone-800 hover:text-amber-300 hover:border-stone-700"
            }`}
            title="Toggle 3D Showroom Turntable"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? "animate-spin" : ""}`} />
            <span>{isAutoRotating ? "Rotating" : "Auto-Rotate"}</span>
          </button>

          <button
            onClick={() => {
              setRotate({ x: 0, y: 0 });
              setIsAutoRotating(false);
            }}
            className="px-3 py-2 rounded-xl border border-stone-800 bg-stone-900/90 text-stone-400 hover:text-stone-200 hover:border-stone-700 text-xs font-medium transition-all cursor-pointer min-h-[38px]"
            title="Reset 3D Perspective"
          >
            Reset
          </button>
        </div>

        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer min-h-[38px] ${
            isZoomed
              ? "bg-amber-950/80 border-amber-600/60 text-amber-300"
              : "bg-stone-900/90 border-stone-800 text-stone-400 hover:text-stone-200"
          }`}
          title="Zoom 3D View"
        >
          {isZoomed ? <Minimize2 className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
          <span>{isZoomed ? "Reset Zoom" : "Zoom 3D"}</span>
        </button>
      </div>
    </div>
  );
}
