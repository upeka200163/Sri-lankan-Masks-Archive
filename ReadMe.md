# 🎭 Sri Lankan Traditional Masks Archive
### ශ්‍රී ලාංකීය සාම්ප්‍රදායික වෙස් මුහුණු ඩිජිටල් ලේඛනාගාරය

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An interactive, responsive digital archive and cultural preservation web application celebrating Sri Lanka’s ancient ritual mask heritage (*Raksha*, *Kolam*, and *Sanni*). Built with high-fidelity visual assets, 3D mask inspection views, folklore quizzes, and rich cultural curation.

---

## 🌟 Key Features

- **🏛️ Comprehensive Mask Catalog & Gallery:** Explore authentic masks with detailed lore, traditional purposes, and dual Sinhala-English nomenclature.
- **🔍 Global Header Search:** Fast real-time multi-field search integrated into the top navigation bar (matching names, categories, and ritual functions).
- **🎭 3D & High-Res Mask Inspection:** Dedicated inspection components (`Mask3DViewer`, `LookCloser`) allowing close-up study of carvings and color motifs.
- **🧭 Interactive Mask Archetype Selector & Quiz:** Match your persona with traditional archetypes using interactive step-by-step questions.
- **🪵 Craftsmanship & History Documentation:** Step-by-step breakdown of the seven stages of Kaduru wood carving, organic pigments, tools, and master artisan profiles.
- **🎨 Cultural Aesthetic:** Immersive dark-themed interface infused with gold/bronze filigree (*Liyawel*) accents and responsive layouts.

---

## 📁 Project Architecture

The project structure directly reflects the application's clean separation of presentation, data, and asset automation:

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
│   │   └── transparent-*.png     # Transparent overlays (gini, gurulu, naga)
│   ├── images/                   # Historical imagery, craftsmanship & rituals
│   │   ├── carving-artisan.jpg
│   │   ├── craftsmanship-3d.jpg
│   │   ├── kolam-folk-theatre.jpg
│   │   └── sanni-exorcism-dance.jpg
│   ├── masks/                    # Authentic mask render assets
│   ├── favicon.png
│   └── icons.svg
├── scripts/                      # Python utilities for asset pipeline automation
│   ├── create_facing_masks.py
│   ├── create_hero_gini.py
│   ├── create_transparent_assets.py
│   ├── generate_vibrant_gini.py
│   └── prepare_pure_masks.py
├── src/
│   ├── assets/                   # React root graphics (hero.png, vite.svg, react.svg)
│   ├── components/
│   │   ├── common/               # Shared interface components
│   │   │   ├── Accordion.jsx     # Collapsible content containers
│   │   │   ├── Footer.jsx        # Cultural footer & archive credits
│   │   │   ├── Navbar.jsx        # Navigation bar with integrated SearchBar
│   │   │   ├── ScrollToTop.jsx   # Route change scroll reset handler
│   │   │   └── SearchBar.jsx     # Universal instant mask filter
│   │   ├── craft/                # Artisan & carving process views
│   │   │   ├── ArtistHighlight.jsx
│   │   │   ├── SevenStages.jsx
│   │   │   └── ToolsMaterials.jsx
│   │   ├── gallery/              # Showcase & video media components
│   │   │   ├── LookCloser.jsx
│   │   │   └── VideoShowcase.jsx
│   │   ├── home/                 # Interactive landing page modules
│   │   │   ├── CategorySpotlight.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── MaskQuiz.jsx
│   │   │   └── MaskSelector.jsx
│   │   └── masks/                # Core mask presentation & filtering engine
│   │       ├── Mask3DViewer.jsx  # Interactive viewer
│   │       ├── MaskCard.jsx      # Card item with themed CTA buttons
│   │       ├── MaskDetailView.jsx
│   │       ├── MaskFilter.jsx    # Category & category-tag toggles
│   │       ├── MaskGrid.jsx      # Responsive card grid & empty-state handler
│   │       └── TypesTable.jsx    # Comparative table of mask classifications
│   ├── data/                     # Structured JSON-like JavaScript data stores
│   │   ├── artistsData.js        # Master woodcarver profiles
│   │   ├── galleryArtifactsData.js
│   │   ├── masksData.js          # Master dataset of Sri Lankan masks
│   │   ├── quizData.js           # Questions & archetype mapping logic
│   │   └── stagesData.js         # The 7 stages of mask crafting
│   ├── pages/                    # Route-level page views
│   │   ├── ContactPage.jsx
│   │   ├── CraftingHistoryPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── Homepage.jsx
│   │   ├── MaskDetailsPage.jsx
│   │   ├── MasksCatalogPage.jsx
│   │   └── PerformancesPage.jsx
│   ├── App.jsx                   # Application routing and root layout
│   ├── index.css                 # Global Tailwind directives & custom CSS
│   └── main.jsx                  # React DOM mount point
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🛠️ Tech Stack & Tooling

- **Frontend Core:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom gradients, typography, and dark-theme tokens)
- **Asset Automation:** Python (PIL / OpenCV scripts for transparency generation and orientation mirroring)
- **Icons & Graphics:** SVG vector sets & custom cultural renders

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/upeka200163/Sri-lankan-Masks-Archive.git
   cd Sri-lankan-Masks-Archive
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📜 Cultural Heritage Overview

| Category | Ritual Context | Notable Archetypes |
| :--- | :--- | :--- |
| **Raksha (රාක්ෂ)** | Ward off evil spirits, festivals, and pageants | *Gini Raksha*, *Gurulu Raksha*, *Naga Raksha* |
| **Sanni (සන්නි)** | Healing ceremonies (*Daha Ata Sanniya*) | *Deva Sanniya*, *Bitha Sanniya*, *Maru Sanniya* |
| **Kolam (කෝලම්)** | Folk theater and comedic social commentary | *Jasaya*, *Lenchina*, *Nonchi Akka* |

---

## 🤝 Contributing & License

Contributions, feedback, and suggestions for preserving traditional Sri Lankan cultural documentation are welcome!

Distributed under the **MIT License**. See `LICENSE` for more information.