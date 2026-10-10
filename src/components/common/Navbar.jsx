import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
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
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <span className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-600 to-red-800 flex items-center justify-center text-xl shadow-lg shadow-amber-950/40 group-hover:scale-105 transition-transform">
              🎭
            </span>
            <div className="hidden sm:block">
              <span className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold block leading-tight">
                Heritage of Sri Lanka
              </span>
              <span className="text-base md:text-lg font-bold text-stone-100 tracking-tight leading-none">
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
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-shrink-0">
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
              className={`p-2 rounded-lg text-stone-400 hover:text-amber-400 transition-colors ${
                isMobileSearchOpen ? "text-amber-400 bg-stone-900" : ""
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
              className="text-stone-400 hover:text-stone-100 p-2 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Expandable Tray */}
      {isMobileSearchOpen && (
        <div className="md:hidden bg-stone-950/95 border-b border-stone-800 px-4 py-3 animate-in fade-in slide-in-from-top duration-200">
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
        <div className="md:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          {/* Search bar inside mobile drawer */}
          <div className="mb-3">
            <SearchBar
              placeholder="Search masks..."
              id="navbar-mobile-drawer-search"
              onResultClick={() => setIsOpen(false)}
            />
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? "text-amber-400 bg-amber-950/40 border border-amber-600/30"
                      : "text-stone-300 hover:text-amber-400 hover:bg-stone-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}