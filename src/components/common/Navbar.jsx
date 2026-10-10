import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Sparkles, Compass, Flame, Film, Mail, Home, Layers } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const location = useLocation();

  // Close mobile menus on location changes
  useEffect(() => {
    setIsOpen(false);
    setIsMobileSearchOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Explore Masks", path: "/explore", icon: Layers },
    { name: "Craft & History", path: "/craft-and-history", icon: Compass },
    { name: "Performances", path: "/performances", icon: Flame },
    { name: "Gallery", path: "/gallery", icon: Film },
    { name: "Contact", path: "/contact", icon: Mail }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0e0c0a]/95 backdrop-blur-md border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-linear-to-br from-amber-600 to-red-800 flex items-center justify-center text-lg sm:text-xl shadow-lg shadow-amber-950/40 group-hover:scale-105 transition-transform shrink-0">
              🎭
            </span>
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-amber-500 font-semibold block leading-tight">
                Heritage of Sri Lanka
              </span>
              <span className="text-sm sm:text-base md:text-lg font-bold text-stone-100 tracking-tight leading-none">
                MASKS OF SRI LANKA
              </span>
            </div>
          </Link>

          {/* Desktop Search Bar positioned prominently in top Navbar */}
          <div className="hidden md:block flex-1 max-w-xs lg:max-w-sm xl:max-w-md mx-2">
            <SearchBar
              placeholder="Search masks by name, ritual, or category..."
              id="navbar-desktop-search"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 shrink-0">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
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

          {/* Mobile Actions: Quick Search Toggle & Mobile Menu Toggle */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={() => {
                setIsMobileSearchOpen(!isMobileSearchOpen);
                if (isOpen) setIsOpen(false);
              }}
              aria-label="Toggle mobile search"
              className={`p-2.5 rounded-xl text-stone-400 hover:text-amber-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer ${
                isMobileSearchOpen ? "text-amber-400 bg-stone-900 border border-amber-600/40" : ""
              }`}
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                setIsOpen(!isOpen);
                if (isMobileSearchOpen) setIsMobileSearchOpen(false);
              }}
              aria-label="Toggle navigation menu"
              className={`p-2.5 rounded-xl text-stone-400 hover:text-stone-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer ${
                isOpen ? "text-amber-400 bg-stone-900 border border-amber-600/40" : ""
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Expandable Tray */}
      {isMobileSearchOpen && (
        <div className="md:hidden bg-stone-950/98 border-b border-stone-800 px-4 py-3 animate-in fade-in slide-in-from-top duration-200">
          <SearchBar
            placeholder="Search masks by name, ritual, or category..."
            id="navbar-mobile-tray-search"
            autoFocus
            onResultClick={() => setIsMobileSearchOpen(false)}
          />
        </div>
      )}

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-stone-950/98 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200 shadow-2xl">
          {/* Search bar inside mobile drawer */}
          <div className="mb-3">
            <SearchBar
              placeholder="Search masks across repository..."
              id="navbar-mobile-drawer-search"
              onResultClick={() => setIsOpen(false)}
            />
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors min-h-[48px] ${
                    active
                      ? "text-amber-400 bg-amber-950/50 border border-amber-600/40 shadow-sm"
                      : "text-stone-300 hover:text-amber-400 hover:bg-stone-900"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? "text-amber-400" : "text-stone-400"}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}