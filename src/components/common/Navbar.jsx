import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore Masks", path: "/explore" },
    { name: "Craft & History", path: "/craft-and-history" },
    { name: "Performances", path: "/performances" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0e0c0a]/90 backdrop-blur-md border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-600 to-red-800 flex items-center justify-center text-xl shadow-lg shadow-amber-950/40 group-hover:scale-105 transition-transform">
              🎭
            </span>
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold block">
                Heritage of Sri Lanka
              </span>
              <span className="text-lg md:text-xl font-bold text-stone-100 tracking-tight">
                MASKS OF SRI LANKA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "text-amber-400 bg-amber-950/40 border border-amber-600/30 shadow-inner"
                      : "text-stone-300 hover:text-amber-300 hover:bg-stone-900/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-400 hover:text-stone-100 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-stone-950 border-b border-stone-800 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}