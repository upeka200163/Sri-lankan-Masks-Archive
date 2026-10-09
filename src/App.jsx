// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import HomePage from "./pages/HomePage";
import MasksCatalogPage from "./pages/MasksCatalogPage";
import MaskDetailsPage from "./pages/MaskDetailsPage";
import CraftingHistoryPage from "./pages/CraftingHistoryPage";
import PerformancesPage from "./pages/PerformancesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0e0c0a] text-stone-100 flex flex-col justify-between selection:bg-amber-600 selection:text-white">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<MasksCatalogPage />} />
            <Route path="/masks/:id" element={<MaskDetailsPage />} />
            <Route path="/craft-and-history" element={<CraftingHistoryPage />} />
            <Route path="/performances" element={<PerformancesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}