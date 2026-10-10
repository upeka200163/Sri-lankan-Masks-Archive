# 🎭 Sri Lankan Traditional Masks Archive
### ශ්‍රී ලාංකීය සාම්ප්‍රදායික වෙස් මුහුණු ඩිජිටල් ලේඛනාගාරය

[![Live Demo](https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://srilankamasks.netlify.app/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Live Deployment:** 🌐 [https://srilankamasks.netlify.app/](https://srilankamasks.netlify.app/)  
> **Source Repository:** 🐙 [GitHub Repository](https://github.com/upeka200163/Sri-lankan-Masks-Archive.git)

An interactive, culturally authentic digital archive and educational web application dedicated to preserving and showcasing Sri Lanka’s ancient ritual mask heritage (**Raksha**, **Kolam**, and **Sanni**). Combining historical documentation, high-fidelity 3D/visual inspections, interactive folklore quizzes, and step-by-step woodcrafting archives with a traditional dark-gold Sri Lankan aesthetic.

---

## 🌟 Key Application Features

### 🏛️ 1. Comprehensive Mask Catalog & Classification
- **Categorized Archiving:** Filter and explore masks based on ancient cultural lineages:
  - **Raksha (රාක්ෂ):** Demon masks symbolizing protection, wrath, and fire rituals (*Gini Raksha*, *Gurulu Raksha*, *Naga Raksha*).
  - **Sanni (සන්නි):** Healing and exorcism masks representing the 18 illnesses (*Daha Ata Sanniya* - *Bitha Sanniya*, *Deva Sanniya*, *Maru Sanniya*).
  - **Kolam (කෝලම්):** Traditional comedic and folk theater masks (*Jasaya*, *Lenchina*, *Nonchi Akka*).
- **Types Comparison Table (`TypesTable.jsx`):** Side-by-side cultural breakdown of purposes, regions, and ritual contexts.

### 🔍 2. Universal Navigation Search Bar (`SearchBar.jsx`)
- Seamlessly docked inside the top header (`Navbar.jsx`).
- Real-time multi-field search supporting queries by English name, Sinhala romanized name, ritual category, and spiritual purpose.
- Includes quick-clear controls and themed empty-state feedback.

### 🎭 3. High-Fidelity Mask Details & 3D Inspection
- **Interactive Inspection (`Mask3DViewer.jsx`, `LookCloser.jsx`):** Close-up interactive inspection revealing detailed wood grain, organic pigment layers, and sacred carvings.
- **Folklore Lore & Symbolism (`MaskDetailsPage.jsx`):** Historical background, spiritual meaning, and healing ritual narratives for every mask.
- **Culturally Themed CTA:** Handcrafted call-to-action buttons styled with traditional *Liyawel* filigree accents and smooth golden hover glow states.

### 🧭 4. "Discover Your Mask" Archetype Quiz (`MaskQuiz.jsx`, `MaskSelector.jsx`)
- Engaging personality matching questionnaire mapping user traits to traditional Sri Lankan mask archetypes.
- Step-by-step progress, folklore feedback, and immediate archetype reveal.

### 🛠️ 5. Crafting History & Master Woodcarvers (`CraftingHistoryPage.jsx`)
- **Seven Stages of Mask Carving (`SevenStages.jsx`):** Detailed breakdown from harvesting Kaduru wood (*වෙල් කදුරු*), smoke seasoning, hand-chiseling, and organic pigmentation.
- **Traditional Tools & Organic Pigments (`ToolsMaterials.jsx`):** Documentation on plant resins, clays, and handmade chisels (*Katu*).
- **Master Artisan Profiles (`ArtistHighlight.jsx`):** Honoring the legacy of traditional Southern coastal carvers (Ambalangoda lineage).

### 🎬 6. Ritual Performances & Video Media (`PerformancesPage.jsx`, `VideoShowcase.jsx`)
- Video documentation and photo archives of *Thovil* (exorcism healing ceremonies) and *Kolam Maduwa* folk theater.

---

## 📁 Project Structure

```text
masks-of-srilanka/
├── public/
│   ├── decorations/              # Traditional motifs, filigree borders & hero graphics
│   │   ├── craft-drums.jpg
│   │   ├── filigree-gold.jpg
│   │   ├── gurulu-facing-left.png / gurulu-facing-right.png
│   │   ├── hero-gini-left.png / hero-gini-right.png
│   │   ├── hero-mask-left.png / hero-mask-right.png
│   │   ├── mask-facing-left.png / mask-facing-right.png
│   │   └── transparent-*.png     # Transparent overlay assets (Gini, Gurulu, Naga)
│   ├── images/                   # Historical imagery, craftsmanship & ritual media
│   │   ├── carving-artisan.jpg
│   │   ├── craftsmanship-3d.jpg
│   │   ├── kolam-folk-theatre.jpg
│   │   └── sanni-exorcism-dance.jpg
│   ├── masks/                    # Authentic mask renders & catalog visuals
│   ├── favicon.png               # Custom Gini Raksha application icon
│   └── icons.svg
├── scripts/                      # Python utilities for asset pipeline automation
│   ├── create_facing_masks.py    # Generates mirrored orientation assets
│   ├── create_hero_gini.py       # Prepares high-contrast hero graphics
│   ├── create_transparent_assets.py
│   ├── generate_vibrant_gini.py
│   └── prepare_pure_masks.py     # Alpha transparency & background removal
├── src/
│   ├── assets/                   # Bundled UI assets (hero.png, vite.svg, react.svg)
│   ├── components/
│   │   ├── common/               # Global layout components
│   │   │   ├── Accordion.jsx     # Collapsible content containers
│   │   │   ├── Footer.jsx        # Cultural footer with archive credits & links
│   │   │   ├── Navbar.jsx        # Top navigation with integrated SearchBar
│   │   │   ├── ScrollToTop.jsx   # Route change scroll reset handler
│   │   │   └── SearchBar.jsx     # Real-time multi-field search component
│   │   ├── craft/                # Woodcraft & carving views
│   │   │   ├── ArtistHighlight.jsx
│   │   │   ├── SevenStages.jsx   # 7 stages of Kaduru wood carving
│   │   │   └── ToolsMaterials.jsx
│   │   ├── gallery/              # Media showcase components
│   │   │   ├── LookCloser.jsx    # High-magnification inspection modal
│   │   │   └── VideoShowcase.jsx # Embedded ritual dance & documentary clips
│   │   ├── home/                 # Landing page sections
│   │   │   ├── CategorySpotlight.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── MaskQuiz.jsx
│   │   │   └── MaskSelector.jsx
│   │   └── masks/                # Core catalog presentation engine
│   │       ├── Mask3DViewer.jsx  # Interactive 3D / detail inspector
│   │       ├── MaskCard.jsx      # Mask card with Liyawel filigree action button
│   │       ├── MaskDetailView.jsx
│   │       ├── MaskFilter.jsx    # Category tab & tag toggles
│   │       ├── MaskGrid.jsx      # Responsive grid with smooth animations
│   │       └── TypesTable.jsx    # Comparative table of mask lineages
│   ├── data/                     # Structured application datasets
│   │   ├── artistsData.js        # Master woodcarver profiles
│   │   ├── galleryArtifactsData.js
│   │   ├── masksData.js          # Master dataset of all Sri Lankan masks
│   │   ├── quizData.js           # Folklore quiz questions & scoring logic
│   │   └── stagesData.js         # The 7 carving stages data
│   ├── pages/                    # React Router page views
│   │   ├── ContactPage.jsx       # Contact form & archive contribution details
│   │   ├── CraftingHistoryPage.jsx
│   │   ├── GalleryPage.jsx       # Complete visual archive gallery
│   │   ├── Homepage.jsx          # Hero, spotlights & interactive archetype picker
│   │   ├── MaskDetailsPage.jsx   # Deep-dive view for individual masks
│   │   ├── MasksCatalogPage.jsx  # Explore Masks catalog with full filters
│   │   └── PerformancesPage.jsx  # Dances, rituals & folklore documentation
│   ├── App.jsx                   # Application layout, routes, and modal state
│   ├── index.css                 # Tailwind layers, custom fonts & filigree glow styles
│   └── main.jsx                  # Application root bootstrap
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🎨 Cultural Heritage Reference

| Classification | Traditional Purpose & Context | Notable Archetypes | Primary Region |
| :--- | :--- | :--- | :--- |
| **Raksha (රාක්ෂ)** | Protection against evil eyes (*ඇස්වහ, කටවහ*), festival pageants, wards | *Gini Raksha*, *Gurulu Raksha*, *Naga Raksha*, *Maru Raksha* | Ambalangoda, Bentota |
| **Sanni (සන්නි)** | *Daha Ata Sanniya* curing 18 physical/psychological afflictions through exorcism | *Deva Sanniya*, *Bitha Sanniya*, *Maru Sanniya*, *Kaha Sanniya* | Southern & Western Coast |
| **Kolam (කෝලම්)** | Satirical folk drama, storytelling, and ancient comedic village theater | *Jasaya*, *Lenchina*, *Nonchi Akka*, *Anabera Kolama* | Mirissa, Ambalangoda |

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework:** [React 18](https://reactjs.org/) (Hooks, dynamic props, state management)
- **Build Tool:** [Vite 5](https://vitejs.dev/) (Rapid HMR and optimized production bundling)
- **Styling & UI:** [Tailwind CSS 3](https://tailwindcss.com/) (Custom cultural dark palette, amber/bronze gradients, border filigrees)
- **Asset Processing Pipeline:** Python 3 (PIL / OpenCV automation for generating transparent overlays, color enhancement, and mirrored poses)
- **Deployment Platform:** [Netlify](https://www.netlify.com/) (Continuous deployment via Git)

---

## ⚡ Quickstart & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) (v9.x or higher)
- [Python 3](https://www.python.org/) *(Optional, only if running automated asset scripts)*

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/upeka200163/Sri-lankan-Masks-Archive.git
   cd Sri-lankan-Masks-Archive
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Launch the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 📄 License & Attribution

This project is licensed under the **MIT License**.

Preserved in tribute to the traditional woodcarving artisans and folk dance practitioners of **Ambalangoda, Mirissa, and the Southern coastal belt of Sri Lanka**.
