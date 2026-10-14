# Ashu - Full Codebase Export

> **Generated at**: 2026-10-14 15:46:00
> **Project Type**: Vite + React 19 + TypeScript + Tailwind CSS
> **Description**: All source code, configuration files, and assets metadata consolidated into a single file for easy export, backup, or sharing.

---

## Table of Contents

- [package.json](#packagejson)
- [vite.config.ts](#viteconfigts)
- [tsconfig.json](#tsconfigjson)
- [tsconfig.app.json](#tsconfigappjson)
- [tsconfig.node.json](#tsconfignodejson)
- [.oxlintrc.json](#oxlintrcjson)
- [.gitignore](#gitignore)
- [index.html](#indexhtml)
- [README.md](#readmemd)
- [src/main.tsx](#srcmaintsx)
- [src/App.tsx](#srcapptsx)
- [src/constants.ts](#srcconstantsts)
- [src/index.css](#srcindexcss)
- [src/App.css](#srcappcss)
- [src/components/Navbar.tsx](#srccomponentsnavbartsx)
- [src/components/Hero.tsx](#srccomponentsherotsx)
- [src/components/AboutBook.tsx](#srccomponentsaboutbooktsx)
- [src/components/BookDetails.tsx](#srccomponentsbookdetailstsx)
- [src/components/BookShowcase.tsx](#srccomponentsbookshowcasetsx)
- [src/components/VisualQuote.tsx](#srccomponentsvisualquotetsx)
- [src/components/QuotesVault.tsx](#srccomponentsquotesvaulttsx)
- [src/components/AboutAuthor.tsx](#srccomponentsaboutauthortsx)
- [src/components/AuthorCrest.tsx](#srccomponentsauthorcresttsx)
- [src/components/BuyRead.tsx](#srccomponentsbuyreadtsx)
- [src/components/Contact.tsx](#srccomponentscontacttsx)
- [src/components/Footer.tsx](#srccomponentsfootertsx)
- [src/components/SmartImage.tsx](#srccomponentssmartimagetsx)
- [src/components/AmbientAudio.tsx](#srccomponentsambientaudiotsx)
- [src/components/EmberCanvas.tsx](#srccomponentsembercanvastsx)
- [public/favicon.svg](#publicfaviconsvg)
- [public/icons.svg](#publiciconssvg)
- [src/assets/vite.svg](#srcassetsvitesvg)
- [src/assets/react.svg](#srcassetsreactsvg)
- [public/assets/book-cover.svg](#publicassetsbookcoversvg)
- [public/assets/author.svg](#publicassetsauthorsvg)
- [Static Assets Summary](#static-assets-summary)
- [How to Run and Setup](#how-to-run-and-setup)

---

<a id="packagejson"></a>
## File: `package.json`

```json
{
  "name": "ashu",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "lucide-react": "^1.50.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "tailwindcss": "^4.3.3"
  },
  "devDependencies": {
    "@types/node": "^24.13.3",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "oxlint": "^1.81.0",
    "typescript": "~6.0.2",
    "vite": "^8.3.0"
  }
}
```

---

<a id="viteconfigts"></a>
## File: `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})
```

---

<a id="tsconfigjson"></a>
## File: `tsconfig.json`

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

---

<a id="tsconfigappjson"></a>
## File: `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "allowArbitraryExtensions": true,
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

---

<a id="tsconfignodejson"></a>
## File: `tsconfig.node.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "module": "nodenext",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

---

<a id="oxlintrcjson"></a>
## File: `.oxlintrc.json`

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

---

<a id="gitignore"></a>
## File: `.gitignore`

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

---

<a id="indexhtml"></a>
## File: `index.html`

```html
<!doctype html>
<html lang="en" class="scroll-smooth dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Page Metadata -->
    <title>Ma Beyond the Battle | Ashutosh Jha — Author</title>
    <meta name="title" content="Ma Beyond the Battle | Ashutosh Jha — Author" />
    <meta name="description" content="Official website of Ashutosh Jha, author of Ma Beyond the Battle — a spiritual and literary journey exploring Maa, Shakti, devotion, courage, inner strength and the battles beyond the battlefield." />
    <meta name="author" content="Ashutosh Jha" />
    <meta name="keywords" content="Ashutosh Jha, Ma Beyond the Battle, Maa Beyond the Battle, Indian Author, Spirituality, Shakti, Devotion, Courage, Indian Literature, 978-93-345-3813-7" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#0A0908" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="book" />
    <meta property="og:site_name" content="Ashutosh Jha — Official Author Website" />
    <meta property="og:title" content="Ma Beyond the Battle | Ashutosh Jha — Author" />
    <meta property="og:description" content="Official website of Ashutosh Jha, author of Ma Beyond the Battle — a spiritual and literary journey exploring Maa, Shakti, devotion, courage, inner strength and the battles beyond the battlefield." />
    <meta property="og:image" content="/assets/book-cover.png" />
    <meta property="book:author" content="Ashutosh Jha" />
    <meta property="book:isbn" content="978-93-345-3813-7" />
    <meta property="book:release_date" content="2026-10-04" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Ma Beyond the Battle | Ashutosh Jha — Author" />
    <meta name="twitter:description" content="Official website of Ashutosh Jha, author of Ma Beyond the Battle — exploring spirituality, devotion, courage and inner strength." />
    <meta name="twitter:image" content="/assets/book-cover.png" />

    <!-- Google Fonts: Permanent Marker, Montserrat, Plus Jakarta Sans, Playfair Display, Cinzel, Cormorant Garamond -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Cinzel:wght@500;700;800;900&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Permanent+Marker&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-[#08080A] text-[#F8FAFC] antialiased selection:bg-[#DC2626] selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

<a id="readmemd"></a>
## File: `README.md`

```markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
```

---

<a id="srcmaintsx"></a>
## File: `src/main.tsx`

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

<a id="srcapptsx"></a>
## File: `src/App.tsx`

```tsx
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookShowcase } from './components/BookShowcase';
import { AboutBook } from './components/AboutBook';
import { AboutAuthor } from './components/AboutAuthor';
import { BuyRead } from './components/BuyRead';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden selection:bg-[#FF2D20] selection:text-white">
      {/* Diana Urban Style Author Header */}
      <Navbar />

      <main>
        {/* Atmospheric Moody Dark-Red Hero Banner with Book & Synopsis + Hook Strip */}
        <Hero />

        {/* About the Book & The 4 Pillars */}
        <BookShowcase />

        {/* Free Excerpt / Sample Chapters */}
        <AboutBook />

        {/* About the Author — Ashutosh Jha */}
        <AboutAuthor />

        {/* Order on Amazon India */}
        <BuyRead />
      </main>

      {/* Clean Author Footer */}
      <Footer />
    </div>
  );
};

export default App;
```

---

<a id="srcconstantsts"></a>
## File: `src/constants.ts`

```typescript
/**
 * =========================================================================
 * ASHUTOSH JHA — "MA BEYOND THE BATTLE"
 * Central Configuration & Constants
 * =========================================================================
 */

export const SITE_CONFIG = {
  // Author Information
  AUTHOR_NAME: "Ashutosh Jha",
  AUTHOR_ROLE: "Author & Writer",
  AUTHOR_LOCATION: "New Delhi, India",
  AUTHOR_BIO:
    "Ashutosh Jha is an emerging Indian author whose debut work, Ma Beyond the Battle, explores the intersection of sacred devotion, inner resilience, and the emotional conflicts of contemporary existence.",
  AUTHOR_INTRO:
    "An emerging Indian author exploring spirituality, devotion, courage, inner strength and the battles that exist beyond what the eyes can see.",

  // Book Information
  BOOK_TITLE: "Ma Beyond the Battle",
  BOOK_SUBTITLE: "The Journey Back to Maa",
  BOOK_TAGLINE:
    "A spiritual and literary journey inspired by Maa, Shakti, and the battles that exist beyond what the eyes can see.",
  
  // Official Book Specifications
  ISBN: "978-93-345-3813-7",
  PUBLICATION_DATE: "4 October 2026",
  PAGES: "73 pages, including front and back cover",
  LANGUAGE: "English",
  FORMAT: "Paperback & Kindle eBook",

  // Visual Assets
  AUTHOR_IMAGE: "/assets/author.png",
  BOOK_COVER_IMAGE: "/assets/book-cover.png",

  // Contact & Social
  EMAIL: "ashutoshjha1230@gmail.com",
  INSTAGRAM_HANDLE: "@ethereal_.72",
  INSTAGRAM_URL: "https://www.instagram.com/ethereal_.72/",

  // Official Purchase Link
  BOOK_PURCHASE_URL:
    "https://www.amazon.in/dp/B0HLVZS1HJ?dplnkId=a4c8e570-4737-4d95-b886-3a3c638ee9db",
  EBOOK_URL:
    "https://www.amazon.in/dp/B0HLVZS1HJ?dplnkId=a4c8e570-4737-4d95-b886-3a3c638ee9db",

  // Curated Excerpts from the Book
  EXCERPTS: [
    {
      id: "chapter-3",
      chapterNumber: "Chapter III",
      title: "The Silent Resistance",
      pageNumber: "p. 27",
      content: [
        "Devotion is not merely an act of prayers offered in quiet temples; it is the silent spine of a human soul refusing to break when the storm arrives. In moments of utter isolation, when no trumpet announces your suffering, devotion becomes your anchor.",
        "We are taught to worship Maa in the splendor of victory, when the demon falls beneath Her lotus feet. But where is Maa when the battle is within you? Where is She when your mind is paralyzed by fear and every door seems bolted from the outside?",
        "She is not absent. She is the quiet breath that refuses to quit. She is the resistance that whispers: wake up, endure, and take one more step into the dark."
      ]
    },
    {
      id: "chapter-1",
      chapterNumber: "Chapter I",
      title: "The Archetype of Shakti",
      pageNumber: "p. 14",
      content: [
        "We often speak of power as something external—wielded through authority, wealth, or conquest. But the Shakti that radiates from Maa Durga is of an entirely different dimension.",
        "It is the fierce, protective grace of a mother that tolerates no injustice against her children. Her weapons are not forged of iron; they are the crystallized manifestations of truth, patience, and unyielding will.",
        "When life strips away every illusion, you realize that true strength is not loud. It is the steady flame burning inside when the world outside is plunged in darkness."
      ]
    },
    {
      id: "chapter-7",
      chapterNumber: "Chapter VII",
      title: "The Journey Back to Maa",
      pageNumber: "p. 62",
      content: [
        "Every journey away from oneself eventually leads to exhaustion. In the pursuit of proving ourselves to a world that rarely listens, we scatter pieces of our spirit along the way.",
        "The journey back to Maa is a journey of return. It is unburdening the armor that has grown too heavy, dropping the masks, and falling into the lap of the infinite mother.",
        "To surrender to Her is not to surrender to defeat. It is to surrender to love—the only force capable of turning your deepest wounds into eternal light."
      ]
    }
  ],

  // The 4 Thematic Pillars
  PILLARS: [
    {
      roman: "I",
      title: "The Archetype of Shakti",
      subtitle: "Cosmic Courage & Divine Motherhood",
      desc: "Durga and Kali are not distant mythological archetypes. They embody the untamed, fierce maternal power that protects truth and destroys fear from within."
    },
    {
      roman: "II",
      title: "The Unseen Conflict",
      subtitle: "The Battles Fought Within",
      desc: "The hardest battles are never fought on open battlefields with trumpets and crowds. They are waged in sleepless silence against doubt, despair, and inner fatigue."
    },
    {
      roman: "III",
      title: "Devotion as Armor",
      subtitle: "Faith Beyond Ritual Dogma",
      desc: "Moving past mechanical ceremonies to discover devotion as a living, breathing internal fortress—the steady spine of a soul that refuses to yield."
    },
    {
      roman: "IV",
      title: "The Return Home",
      subtitle: "Sanctuary in Maternal Grace",
      desc: "The profound realization that spiritual surrender to the Mother is not weakness, but the ultimate awakening of one's own highest resilience."
    }
  ],

  // Standout Memorable Quotes
  QUOTES: [
    {
      quote: "Every battle is not fought on a battlefield. Some are fought within the silence of the night.",
      context: "From Ma Beyond the Battle"
    },
    {
      quote: "Maa is not found only when you conquer; She is with you in the quiet courage that refuses to quit.",
      context: "Chapter III • The Silent Resistance"
    },
    {
      quote: "Devotion is the silent spine of a human soul refusing to break when the storm arrives.",
      context: "Chapter I • The Archetype of Shakti"
    },
    {
      quote: "To bow before the Mother is not submission; it is the ultimate awakening of your own strength.",
      context: "Chapter VII • The Journey Back to Maa"
    }
  ]
};
```

---

<a id="srcindexcss"></a>
## File: `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
@import "tailwindcss";

@theme {
  --font-logo: 'Cinzel', serif;
  --font-heading: 'Cinzel', 'Playfair Display', serif;
  --font-serif: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-script: 'Cormorant Garamond', 'Playfair Display', serif;
}

:root {
  --bg-black: #000000;
  --bg-dark-card: #0B0B0E;
  --bg-dark-hover: #141318;
  
  --red-accent: #DC2626;
  --red-crimson: #991B1B;
  --red-glow: rgba(220, 38, 38, 0.2);
  
  --text-white: #FFFFFF;
  --text-silver: #E2E8F0;
  --text-muted: #94A3B8;
  --text-dim: #64748B;
}

#root {
  width: 100%;
  min-height: 100vh;
}

html {
  scroll-behavior: smooth;
  background-color: #000000;
  color: #FFFFFF;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: #000000;
  color: #FFFFFF;
  overflow-x: hidden;
  line-height: 1.65;
}

/* Author Logo Font — Stately, Literary, Timeless */
.font-logo {
  font-family: 'Cinzel', serif !important;
  letter-spacing: 0.22em;
}

.font-heading {
  font-family: 'Cinzel', 'Playfair Display', serif !important;
}

.font-serif {
  font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif !important;
}

.font-sans {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
}

.font-script {
  font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif !important;
}

/* Refined Literary Buttons */
.btn-author-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.85rem 1.85rem;
  background: transparent;
  color: #FFFFFF;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  transition: all 0.25s ease;
  cursor: pointer;
  text-decoration: none;
}

.btn-author-outline:hover {
  background: #FFFFFF;
  color: #000000;
  border-color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
}

.btn-author-solid-red {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.85rem 1.85rem;
  background: #B91C1C;
  color: #FFFFFF;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  border: 1px solid #DC2626;
  border-radius: 2px;
  transition: all 0.25s ease;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(185, 28, 28, 0.35);
}

.btn-author-solid-red:hover {
  background: #DC2626;
  border-color: #EF4444;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(220, 38, 38, 0.5);
}

/* Sharp Book Presentation Shadow */
.book-hero-shadow {
  box-shadow: 
    0 25px 60px -12px rgba(0, 0, 0, 0.95),
    0 0 40px rgba(185, 28, 28, 0.2),
    -10px 10px 30px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.book-hero-shadow:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 
    0 35px 80px -15px rgba(0, 0, 0, 0.98),
    0 0 60px rgba(220, 38, 38, 0.3),
    -12px 15px 40px rgba(0, 0, 0, 0.85);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #000000;
}

::-webkit-scrollbar-thumb {
  background: #27272A;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #DC2626;
}

::selection {
  background-color: #991B1B;
  color: #FFFFFF;
}
```

---

<a id="srcappcss"></a>
## File: `src/App.css`

```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
```

---

<a id="srccomponentsnavbartsx"></a>
## File: `src/components/Navbar.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../constants';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-black py-4 sm:py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Author Name — Stately, Literary, Timeless Cinzel Serif */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, 'hero')}
            className="group flex flex-col"
          >
            <span className="font-logo text-base sm:text-lg text-white group-hover:text-red-400 transition-colors uppercase tracking-[0.24em] font-medium select-none">
              Ashutosh Jha
            </span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors">
              Author &bull; Ma Beyond the Battle
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-xs font-sans font-medium tracking-[0.14em] uppercase">
            <a
              href="#hero"
              onClick={(e) => scrollTo(e, 'hero')}
              className="text-red-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#book"
              onClick={(e) => scrollTo(e, 'book')}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              The Book
            </a>
            <a
              href="#excerpt"
              onClick={(e) => scrollTo(e, 'excerpt')}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Free Excerpt
            </a>
            <a
              href="#author"
              onClick={(e) => scrollTo(e, 'author')}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#buy"
              onClick={(e) => scrollTo(e, 'buy')}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Order Now
            </a>

            {/* Amazon India direct action */}
            <a
              href={SITE_CONFIG.BOOK_PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-zinc-700 hover:border-red-500 rounded-[2px] text-[11px] text-zinc-200 hover:text-white transition-colors"
              title="Official Amazon India Listing"
            >
              <span>AMAZON.IN</span>
              <ArrowUpRight className="w-3 h-3 text-red-400" />
            </a>

            <button
              onClick={() => {
                const el = document.getElementById('excerpt');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-zinc-400 hover:text-white transition-colors p-1"
              aria-label="Search or Read"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href={SITE_CONFIG.BOOK_PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs font-medium uppercase tracking-wider bg-red-700 text-white rounded-[2px]"
            >
              Order
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/98 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between">
          <nav className="flex flex-col space-y-4 text-center font-serif text-lg tracking-wide">
            <a
              href="#hero"
              onClick={(e) => scrollTo(e, 'hero')}
              className="py-3 text-red-400 border-b border-white/10"
            >
              Home
            </a>
            <a
              href="#book"
              onClick={(e) => scrollTo(e, 'book')}
              className="py-3 text-white border-b border-white/10 hover:text-red-400"
            >
              The Book
            </a>
            <a
              href="#excerpt"
              onClick={(e) => scrollTo(e, 'excerpt')}
              className="py-3 text-white border-b border-white/10 hover:text-red-400"
            >
              Free Excerpt
            </a>
            <a
              href="#author"
              onClick={(e) => scrollTo(e, 'author')}
              className="py-3 text-white border-b border-white/10 hover:text-red-400"
            >
              About Ashutosh
            </a>
            <a
              href="#buy"
              onClick={(e) => scrollTo(e, 'buy')}
              className="py-3 text-white border-b border-white/10 hover:text-red-400"
            >
              Order on Amazon
            </a>
          </nav>

          <div className="pt-6 border-t border-white/10 text-center">
            <a
              href={SITE_CONFIG.BOOK_PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-author-solid-red w-full justify-center text-xs tracking-widest"
            >
              <span>GET ON AMAZON INDIA</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-zinc-500 mt-3 font-sans">
              ISBN {SITE_CONFIG.ISBN} &bull; First Edition
            </p>
          </div>
        </div>
      )}
    </>
  );
};
```

---

<a id="srccomponentsherotsx"></a>
## File: `src/components/Hero.tsx`

```tsx
import React from 'react';
import { SITE_CONFIG } from '../constants';
import { BookOpen, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* =========================================================================
       * HERO BANNER — CINEMATIC LITERARY 3-COLUMN COMPOSITION
       * Left: 3D Physical Hardcover Mockup
       * Center: Open vista revealing Maa Durga & Lion in the crimson mist
       * Right: Grand literary serif headline, contemplative synopsis, refined outline CTA
       * ========================================================================= */}
      <section
        id="hero"
        className="relative bg-black pt-28 sm:pt-32 pb-14 sm:pb-16 px-6 sm:px-12 border-b border-black overflow-hidden min-h-[540px] lg:min-h-[600px] flex items-center"
      >
        {/* Full-width Panoramic Background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/assets/hero-banner.jpg"
            alt="Ma Beyond the Battle Atmosphere"
            className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.08]"
          />

          {/* Seamless Vignettes into pure black edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 lg:from-black/50 lg:via-transparent lg:to-black/60" />
        </div>

        {/* 3-Column Foreground Composition */}
        <div className="max-w-[1360px] mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* Left Column (~30% width): 3D Physical Book Mockup */}
          <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">
            <div className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
              
              {/* 3D Book Frame */}
              <div className="relative aspect-[641/1024] w-[250px] sm:w-[280px] lg:w-[310px] rounded-[2px] overflow-hidden book-hero-shadow bg-black border border-white/20">
                <img
                  src={SITE_CONFIG.BOOK_COVER_IMAGE}
                  alt="Ma Beyond the Battle Book Cover"
                  className="w-full h-full object-cover object-center"
                />

                {/* Left 3D Spine Glare */}
                <div className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-white/30 via-black/40 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
              </div>

              {/* Sub-label badge */}
              <div className="mt-3 text-center">
                <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-red-300 bg-black/80 px-3 py-1 rounded-[2px] inline-block backdrop-blur-sm border border-red-900/40 shadow-xl">
                  First Edition &bull; Available on Amazon India
                </span>
              </div>

            </div>
          </div>

          {/* Center Column (~32% width): Open Vista revealing Maa Durga & Lion in the mist */}
          <div className="hidden lg:block lg:w-[32%] pointer-events-none" aria-hidden="true" />

          {/* Right Column (~38% width): Literary Headline, Synopsis & Refined Buttons */}
          <div className="w-full lg:w-[38%] flex flex-col justify-center text-left">
            
            {/* Grand Literary Serif Headline */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-[2.45rem] font-normal text-white leading-[1.28] mb-5 tracking-tight [text-shadow:_0_2px_14px_rgba(0,0,0,0.95)]">
              When the battle is within you, where do you find your strength? Discover <span className="italic text-red-400 font-normal">Ma Beyond the Battle</span> by Ashutosh Jha.
            </h1>

            {/* Contemplative Synopsis */}
            <p className="font-sans text-sm sm:text-base text-zinc-200 leading-relaxed mb-8 font-normal [text-shadow:_0_1px_10px_rgba(0,0,0,0.95)]">
              Every battle is not fought on an open battlefield with weapons and crowds. Some are fought in the quiet chambers of the soul—against grief, anxiety, and despair. Explore how the sacred archetype of Shakti awakens an unbreakable inner strength when life tests you most.
            </p>

            {/* Action Buttons — High-End Editorial Style */}
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <a
                href={SITE_CONFIG.BOOK_PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-author-outline group"
              >
                <span>Order on Amazon</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => scrollTo('excerpt')}
                className="btn-author-solid-red"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Free Excerpt</span>
              </button>
            </div>

            {/* Micro specs */}
            <p className="text-[11px] font-sans text-zinc-400 tracking-[0.15em] uppercase">
              Paperback &bull; Kindle Edition &bull; Amazon Prime Delivery
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================================
       * HOOK BAR — LITERARY EDITORIAL QUOTE
       * ========================================================================= */}
      <section className="bg-black py-12 sm:py-14 px-6 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="font-serif italic text-2xl sm:text-4xl text-zinc-100 font-light leading-relaxed">
            &ldquo;If you seek timeless wisdom, inner strength, and{' '}
            <span className="text-red-400 font-normal not-italic">sacred devotion</span>...&rdquo;
          </p>
          <p className="font-sans text-[11px] tracking-[0.25em] text-zinc-500 uppercase mt-3">
            Ma Beyond the Battle &bull; By Ashutosh Jha
          </p>
        </div>
      </section>
    </>
  );
};
```

---

<a id="srccomponentsaboutbooktsx"></a>
## File: `src/components/AboutBook.tsx`

```tsx
import React, { useState } from 'react';
import { SITE_CONFIG } from '../constants';
import { ArrowUpRight, BookOpen } from 'lucide-react';

export const AboutBook: React.FC = () => {
  const [selectedExcerptIndex, setSelectedExcerptIndex] = useState(0);
  const currentExcerpt = SITE_CONFIG.EXCERPTS[selectedExcerptIndex];

  return (
    <section
      id="excerpt"
      className="bg-[#050507] py-20 sm:py-28 px-6 sm:px-10 border-b border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header — Literary & Elegant */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-red-400 font-medium block mb-3">
            Sample The Manuscript
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-normal">
            Read a Free Excerpt
          </h2>
          <div className="w-12 h-[1px] bg-red-800/80 mx-auto my-5" />
          <p className="font-serif italic text-base text-zinc-300 font-light">
            Preview selected excerpts from the first edition of <span className="text-white font-normal not-italic">Ma Beyond the Battle</span>.
          </p>
        </div>

        {/* Chapter Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {SITE_CONFIG.EXCERPTS.map((excerpt, idx) => (
            <button
              key={excerpt.id}
              onClick={() => setSelectedExcerptIndex(idx)}
              className={`px-4 py-2.5 rounded-[2px] text-xs font-sans font-medium uppercase tracking-[0.14em] transition-all duration-200 flex items-center gap-2 ${
                selectedExcerptIndex === idx
                  ? 'bg-red-800 text-white shadow-lg shadow-red-950/40 border border-red-700'
                  : 'bg-[#0B0B0E] text-zinc-400 hover:text-white hover:bg-[#141418] border border-zinc-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-red-300" />
              <span>{excerpt.chapterNumber}: {excerpt.title}</span>
            </button>
          ))}
        </div>

        {/* Excerpt Leaf Container */}
        <div className="bg-[#09090C] p-8 sm:p-14 rounded-[3px] border border-zinc-800 relative shadow-2xl">
          
          {/* Running Header */}
          <div className="flex items-center justify-between text-xs font-sans tracking-[0.2em] text-zinc-500 uppercase pb-6 border-b border-zinc-800/80 mb-8">
            <span className="font-medium text-zinc-300">Ma Beyond the Battle</span>
            <span className="text-red-400 font-medium">
              {currentExcerpt.chapterNumber} &bull; {currentExcerpt.title}
            </span>
            <span className="font-mono text-zinc-500">{currentExcerpt.pageNumber}</span>
          </div>

          {/* Typeset Prose with Large Drop Cap */}
          <div className="space-y-6 font-serif text-zinc-200 text-base sm:text-lg leading-[1.8] font-light">
            {(currentExcerpt.content || []).map((paragraph: string, pIdx: number) => {
              if (pIdx === 0) {
                const firstLetter = paragraph.charAt(0);
                const restOfParagraph = paragraph.slice(1);
                return (
                  <p key={pIdx} className="relative">
                    <span className="float-left text-5xl sm:text-6xl font-serif font-normal text-red-400 mr-3.5 line-height-none mt-1 select-none">
                      {firstLetter}
                    </span>
                    {restOfParagraph}
                  </p>
                );
              }
              return (
                <p key={pIdx} className="leading-[1.8]">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Continuation Prompt */}
          <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-serif italic text-sm text-zinc-400 font-light">
              Published by Ashutosh Jha &bull; ISBN {SITE_CONFIG.ISBN} &bull; 73 pages
            </p>
            <a
              href={SITE_CONFIG.BOOK_PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-author-solid-red text-xs"
            >
              <span>Order Full Book on Amazon</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
```

---

<a id="srccomponentsbookdetailstsx"></a>
## File: `src/components/BookDetails.tsx`

```tsx
import React, { useState } from 'react';
import { SITE_CONFIG } from '../constants';
import { Copy, Check, BookCheck } from 'lucide-react';

export const BookDetails: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyISBN = () => {
    navigator.clipboard.writeText(SITE_CONFIG.ISBN);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const specs = [
    { label: 'Work', value: SITE_CONFIG.BOOK_TITLE },
    { label: 'Author', value: SITE_CONFIG.AUTHOR_NAME },
    { label: 'Edition', value: 'First Edition (Debut Publication)' },
    { label: 'Publication Date', value: SITE_CONFIG.PUBLICATION_DATE },
    { label: 'Extent & Length', value: SITE_CONFIG.PAGES },
    { label: 'Language', value: SITE_CONFIG.LANGUAGE },
    { label: 'Formats', value: SITE_CONFIG.FORMAT },
    { label: 'Global Distribution', value: 'Amazon India (Paperback & Kindle Worldwide)' },
  ];

  return (
    <section
      id="details"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-white/10"
    >
      {/* Section Eyebrow */}
      <div className="mb-4">
        <span className="editorial-badge">
          04 &mdash; The Colophon
        </span>
      </div>

      {/* Main Section Heading */}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-12">
        Bibliographic &amp; <br />
        <span className="italic font-normal text-gold-gradient">Publishing Details</span>
      </h2>

      {/* Prominent ISBN Ledger Header Card */}
      <div className="card-glass p-6 sm:p-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border border-amber-500/20 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <BookCheck className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-sans font-bold tracking-widest uppercase text-amber-400">
              Standard Book Identifier (ISBN-13)
            </span>
          </div>
          <span className="font-mono text-2xl sm:text-3xl font-bold tracking-wider text-white">
            {SITE_CONFIG.ISBN}
          </span>
        </div>

        <div>
          <button
            onClick={copyISBN}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#161822] hover:bg-[#1E202E] border border-white/10 hover:border-amber-400/40 text-xs font-sans font-bold tracking-wider uppercase text-slate-200 transition-all focus:outline-none cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copy ISBN-13</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editorial Colophon Table */}
      <div className="card-glass divide-y divide-white/10 overflow-hidden">
        {specs.map((item, index) => (
          <div
            key={index}
            className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm hover:bg-white/[0.02] transition-colors"
          >
            <span className="font-sans text-xs font-semibold tracking-wider uppercase text-slate-400">
              {item.label}
            </span>
            <span className="font-serif text-base sm:text-lg text-white font-medium sm:text-right">
              {item.value}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};
```

---

<a id="srccomponentsbookshowcasetsx"></a>
## File: `src/components/BookShowcase.tsx`

```tsx
import React from 'react';
import { SITE_CONFIG } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const BookShowcase: React.FC = () => {
  return (
    <section
      id="book"
      className="bg-black py-20 sm:py-28 px-6 sm:px-10 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header — Refined Literary Elegance */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-red-400 font-medium block mb-3">
            Core Themes &bull; The Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-normal">
            Beyond the Battlefield
          </h2>
          <div className="w-12 h-[1px] bg-red-800/80 mx-auto my-5" />
          <p className="font-serif italic text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            Moving beyond mythological abstraction to articulate the living struggles, quiet grief, and enduring strength of everyday human existence.
          </p>
        </div>

        {/* 4 Pillars Grid — Stately Literary Chapter Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SITE_CONFIG.PILLARS.map((pillar) => (
            <div
              key={pillar.roman}
              className="bg-[#09090C] p-8 sm:p-10 rounded-[2px] border border-zinc-800/80 hover:border-red-900/60 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-950/20 relative"
            >
              {/* Subtle top hairline accent */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-red-900/40 to-transparent group-hover:via-red-700/60 transition-colors" />

              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-red-400/90 font-medium">
                  {pillar.roman} &bull; Philosophical Pillar
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2 tracking-wide">
                {pillar.title}
              </h3>
              
              <h4 className="font-sans text-[11px] uppercase tracking-[0.16em] text-zinc-400 font-medium mb-4">
                {pillar.subtitle}
              </h4>
              
              <p className="font-sans text-sm text-zinc-300 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Central Standout Pull-Quote — Sacred Literary Excerpt */}
        <div className="border-t border-b border-zinc-800/80 py-12 px-6 sm:px-12 text-center max-w-4xl mx-auto my-8 relative">
          <p className="font-serif italic text-2xl sm:text-3xl text-zinc-100 font-light leading-relaxed mb-4">
            &ldquo;Every battle is not fought on a battlefield. Some are fought within the silence of the night.&rdquo;
          </p>
          <cite className="font-sans text-xs uppercase tracking-[0.22em] text-red-400 font-medium not-italic block mb-6">
            &mdash; Ashutosh Jha, Ma Beyond the Battle
          </cite>
          
          <a
            href={SITE_CONFIG.BOOK_PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-author-outline inline-flex text-xs"
          >
            <span>Order on Amazon India</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
```

---

<a id="srccomponentsvisualquotetsx"></a>
## File: `src/components/VisualQuote.tsx`

```tsx
import React from 'react';
import { SITE_CONFIG } from '../constants';

export const VisualQuote: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#060608] text-white relative border-t border-white/10 overflow-hidden">
      {/* Subtle Ambient Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Sanskrit Epigraph */}
        <span className="font-serif text-sm tracking-[0.3em] text-amber-400 uppercase block mb-8 font-semibold">
          ॥ शक्ति &bull; साधना &bull; सत्य ॥
        </span>

        {/* The Monumental Philosophical Statement */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.18] mb-4">
            &ldquo;Every battle is not fought on a battlefield.&rdquo;
          </p>
          <p className="font-serif italic text-2xl sm:text-4xl text-gold-gradient font-normal">
            &ldquo;Some are fought within.&rdquo;
          </p>
        </div>

        {/* Divider with Red Scribe Dot */}
        <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-8">
          <span className="h-px bg-white/20 flex-1" />
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="h-px bg-white/20 flex-1" />
        </div>

        {/* Byline */}
        <p className="font-sans text-xs font-semibold tracking-widest text-slate-400 uppercase mb-16">
          &mdash; {SITE_CONFIG.AUTHOR_NAME}, <em className="italic font-serif text-sm text-white font-normal">Ma Beyond the Battle</em>
        </p>

        {/* Two-Sided Book Excerpts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto pt-4">
          <div className="card-glass p-7 border-l-4 border-l-amber-400 shadow-xl">
            <span className="text-xs font-sans font-bold tracking-widest text-amber-400 uppercase block mb-3">
              Excerpt &bull; On Devotion
            </span>
            <p className="font-serif text-lg text-slate-200 leading-relaxed italic">
              &ldquo;Devotion is not merely an act of prayers offered in quiet temples; it is the silent spine of a human soul refusing to break when the storm arrives.&rdquo;
            </p>
          </div>

          <div className="card-glass p-7 border-l-4 border-l-red-500 shadow-xl">
            <span className="text-xs font-sans font-bold tracking-widest text-red-400 uppercase block mb-3">
              Excerpt &bull; On Inner Courage
            </span>
            <p className="font-serif text-lg text-slate-200 leading-relaxed italic">
              &ldquo;The fiercest adversaries an individual encounters are not armed with steel. They are doubt, isolation, and despair. Victory is continuing the journey anyway.&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
```

---

<a id="srccomponentsquotesvaulttsx"></a>
## File: `src/components/QuotesVault.tsx`

```tsx
import React, { useState } from 'react';
import { SITE_CONFIG } from '../constants';
import { Copy, Check, Quote, Sparkles } from 'lucide-react';

export const QuotesVault: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyQuote = (quoteText: string, index: number) => {
    const formatted = `"${quoteText}" — Ashutosh Jha, Ma Beyond the Battle`;
    navigator.clipboard.writeText(formatted);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2200);
  };

  return (
    <section
      id="quotes"
      className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.08]"
    >
      {/* Background Accent */}
      <div className="ambient-glow-amber bottom-10 right-10 w-[450px] h-[450px] -z-10 opacity-30" />

      {/* Header */}
      <div className="max-w-2xl mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D49A3D]" />
          <span className="text-xs font-sans uppercase tracking-widest text-[#E5B25D] font-semibold">
            Lines from the Work
          </span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#F5F2EB] tracking-tight">
          WORDS THAT RESONATE
        </h2>
        <p className="font-serif italic text-lg sm:text-xl text-[#9E988D] mt-2">
          Passages to carry with you when facing your own unseen battles.
        </p>
      </div>

      {/* Quotes Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SITE_CONFIG.QUOTES.map((item, idx) => {
          const isCopied = copiedIndex === idx;

          return (
            <div
              key={idx}
              className="relative p-8 rounded-xl bg-[#111117] border border-white/[0.07] hover:border-[#D49A3D]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-black/60"
            >
              <div>
                <Quote className="w-8 h-8 text-[#D49A3D]/30 mb-5 group-hover:text-[#D49A3D]/60 transition-colors" />
                <p className="font-display text-xl sm:text-2xl text-[#F5F2EB] font-light leading-snug mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-xs font-sans text-[#E5B25D] font-semibold block">
                    {SITE_CONFIG.AUTHOR_NAME}
                  </span>
                  <span className="text-[11px] font-sans text-[#6E685E]">
                    {item.context}
                  </span>
                </div>

                {/* 1-Click Copy Action */}
                <button
                  onClick={() => handleCopyQuote(item.quote, idx)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-sans transition-all duration-200 ${
                    isCopied
                      ? 'bg-[#15803D] text-white'
                      : 'bg-[#1B1B25] text-[#9E988D] hover:text-white hover:bg-[#252535]'
                  }`}
                  title="Copy quote with author attribution"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Invitation */}
      <div className="mt-12 text-center text-xs font-sans text-[#6E685E] flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#E5B25D]" />
        <span>Share these thoughts with friends or save them in your personal journal.</span>
      </div>

    </section>
  );
};
```

---

<a id="srccomponentsaboutauthortsx"></a>
## File: `src/components/AboutAuthor.tsx`

```tsx
import React, { useState } from 'react';
import { SITE_CONFIG } from '../constants';
import { SmartImage } from './SmartImage';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const AboutAuthor: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="author"
      className="bg-black py-20 sm:py-28 px-6 sm:px-10 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Author Candid Photo */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-[3px] overflow-hidden border border-zinc-800 bg-[#0A0A0D] shadow-2xl group">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <SmartImage
                  src={SITE_CONFIG.AUTHOR_IMAGE}
                  fallbackSrc="/assets/author.svg"
                  alt="Ashutosh Jha — Author of Ma Beyond the Battle"
                  className="w-full h-full object-cover filter contrast-[1.03]"
                  style={{ objectPosition: '50% 88%' }}
                />
              </div>

              {/* Caption */}
              <div className="p-4 bg-[#0A0A0D] border-t border-zinc-800 text-center">
                <p className="font-serif text-base text-white tracking-wide">
                  Ashutosh Jha
                </p>
                <p className="font-sans text-xs text-zinc-400 mt-0.5">
                  At his writing desk drafting Ma Beyond the Battle in New Delhi
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-red-400 font-medium block mb-2">
              Meet The Author
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-6 tracking-normal">
              Ashutosh Jha
            </h2>

            <div className="space-y-4 font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              <p>
                <span className="text-white font-normal">Ashutosh Jha</span> is an emerging Indian author whose debut work, <em className="text-white not-italic font-serif italic">Ma Beyond the Battle</em>, brings a bold and contemplative voice to contemporary spiritual writing.
              </p>
              
              <p>
                His journey as a writer began with a deep personal devotion to Maa Durga, Kali, and the primordial concept of Shakti. Rather than examining these sacred traditions merely through ancient myths, Ashutosh explores the living courage, vulnerability, and resilience that ordinary souls require when facing life&apos;s quiet battles.
              </p>

              {/* Literary Pull Quote */}
              <blockquote className="my-6 pl-5 border-l-2 border-red-700/80 py-1">
                <p className="font-serif italic text-lg sm:text-xl text-zinc-100 font-light leading-relaxed">
                  &ldquo;Writing this book was my way of giving voice to the battles that exist far beneath the surface of everyday speech.&rdquo;
                </p>
              </blockquote>

              <p>
                Based in New Delhi, he writes to remind readers that divine grace is not found solely in celebrated victories, but in the quiet courage to endure the struggle.
              </p>
            </div>

            {/* Direct Connect Actions */}
            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap items-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E0E12] border border-zinc-800 hover:border-zinc-600 rounded-[2px] text-xs font-sans text-zinc-300 hover:text-white transition-colors"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <span>{copiedEmail ? 'Email Copied!' : SITE_CONFIG.EMAIL}</span>
              </button>

              <a
                href={SITE_CONFIG.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E0E12] border border-zinc-800 hover:border-zinc-600 rounded-[2px] text-xs font-sans text-zinc-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram @{SITE_CONFIG.INSTAGRAM_HANDLE}</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
```

---

<a id="srccomponentsauthorcresttsx"></a>
## File: `src/components/AuthorCrest.tsx`

```tsx
import React from 'react';
import { SITE_CONFIG } from '../constants';
import { Feather, BookOpen } from 'lucide-react';

interface AuthorCrestProps {
  className?: string;
  size?: 'normal' | 'compact';
}

export const AuthorCrest: React.FC<AuthorCrestProps> = ({
  className = '',
  size = 'normal',
}) => {
  const isCompact = size === 'compact';

  return (
    <div
      className={`relative w-full rounded-2xl bg-gradient-to-b from-[#181412] via-[#110E0C] to-[#0A0908] border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden p-6 sm:p-8 text-center group ${className}`}
    >
      {/* Background Radiance & Glowing Auras */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#B91C1C]/15 rounded-full blur-[90px] pointer-events-none -z-10 group-hover:bg-[#B91C1C]/25 transition-all duration-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#D4AF37]/10 rounded-full blur-[70px] pointer-events-none -z-10" />

      {/* Ornate Gold Corner Studs */}
      <span className="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
      <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
      <span className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
      <span className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />

      {/* Inner Decorative Framing Line */}
      <div className="absolute inset-2 sm:inset-3 border border-[#D4AF37]/15 rounded-xl pointer-events-none" />

      {/* Central Sacred Mandala / Medallion */}
      <div className="relative mx-auto mb-6 flex flex-col items-center justify-center">
        {/* Outer Rotating/Pulsing Halo Ring */}
        <div
          className={`${
            isCompact ? 'w-28 h-28' : 'w-36 h-36 sm:w-40 sm:h-40'
          } rounded-full border border-[#D4AF37]/40 p-1.5 relative flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.2)]`}
        >
          {/* Dashed Inner Ring */}
          <div className="w-full h-full rounded-full border border-dashed border-[#B91C1C]/50 flex items-center justify-center bg-gradient-to-b from-[#221B16] to-[#120F0D]">
            {/* Monogram Text */}
            <div className="flex flex-col items-center">
              <span className="font-cinzel text-3xl sm:text-4xl font-bold tracking-[0.2em] text-[#FAF7F2] gold-shimmer-text">
                AJ
              </span>
              <span className="font-serif text-[11px] sm:text-xs text-[#D4AF37] tracking-[0.28em] mt-0.5">
                ॥ आशुतोष ॥
              </span>
            </div>
          </div>

          {/* Little Orbiting Sparkle Dots */}
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_6px_#D4AF37]" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#B91C1C] rounded-full shadow-[0_0_6px_#B91C1C]" />
        </div>
      </div>

      {/* Author Name */}
      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#FAF7F2] tracking-wide mb-1">
        {SITE_CONFIG.AUTHOR_NAME}
      </h3>

      {/* Devanagari Title */}
      <p className="font-serif text-xs sm:text-sm text-[#D4AF37] tracking-[0.25em] mb-3">
        आशुतोष झा &bull; लेखक
      </p>

      {/* Decorative Gold & Red Divider */}
      <div className="flex items-center justify-center gap-3 my-4 max-w-[180px] mx-auto">
        <span className="h-px bg-gradient-to-r from-transparent to-[#B91C1C] flex-1" />
        <span className="gold-diamond" />
        <span className="h-px bg-gradient-to-l from-transparent to-[#D4AF37] flex-1" />
      </div>

      {/* Literary Designation */}
      <p className="font-cinzel text-xs font-bold tracking-[0.22em] text-[#C5A059] uppercase mb-4">
        {SITE_CONFIG.AUTHOR_ROLE}
      </p>

      {/* Short Quote / Excerpt */}
      <p className="font-serif italic text-sm text-[#D8D1C5] max-w-xs mx-auto leading-relaxed mb-6">
        &ldquo;Exploring spirituality, devotion, courage, and the battles that
        exist beyond what the eyes can see.&rdquo;
      </p>

      {/* Verified Literary Seals */}
      <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-center gap-4 text-[11px] font-cinzel tracking-[0.16em] text-[#A89E92]">
        <span className="flex items-center gap-1.5 text-[#D4AF37]">
          <Feather className="w-3.5 h-3.5 text-[#B91C1C]" />
          ORIGINAL WORK
        </span>
        <span className="text-[#B91C1C]">&bull;</span>
        <span className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
          DEBUT AUTHOR
        </span>
      </div>
    </div>
  );
};
```

---

<a id="srccomponentsbuyreadtsx"></a>
## File: `src/components/BuyRead.tsx`

```tsx
import React from 'react';
import { SITE_CONFIG } from '../constants';
import { SmartImage } from './SmartImage';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';

export const BuyRead: React.FC = () => {
  return (
    <section
      id="buy"
      className="bg-[#050507] py-20 sm:py-28 px-6 sm:px-10 border-b border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-red-400 font-medium block mb-3">
            Acquire The Volume
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-normal">
            Order Your Copy
          </h2>
          <div className="w-12 h-[1px] bg-red-800/80 mx-auto my-5" />
          <p className="font-serif italic text-base text-zinc-300 font-light">
            Available in Paperback and Kindle eBook editions on Amazon India with nationwide delivery.
          </p>
        </div>

        {/* Acquisition Card */}
        <div className="bg-[#09090C] p-8 sm:p-12 rounded-[3px] border border-zinc-800 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Book Preview */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative aspect-[641/1024] w-48 sm:w-56 rounded-[2px] overflow-hidden book-hero-shadow border border-zinc-700/80">
                <SmartImage
                  src={SITE_CONFIG.BOOK_COVER_IMAGE}
                  fallbackSrc="/assets/book-cover.svg"
                  alt="Ma Beyond the Battle — Ashutosh Jha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Buying Details */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-red-950/50 border border-red-800/40 text-red-300 text-[10px] font-sans font-medium uppercase tracking-[0.2em] rounded-[2px] mb-3">
                  Official Amazon Release
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-wide">
                  Ma Beyond the Battle
                </h3>
                <p className="font-sans text-xs text-zinc-400 mt-1">
                  By <span className="text-zinc-200 font-medium">{SITE_CONFIG.AUTHOR_NAME}</span> &bull; 73 Pages &bull; First Edition
                </p>
              </div>

              <div className="space-y-2 text-sm font-sans text-zinc-300 font-light">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Paperback Edition with high-quality tactile print finish</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Kindle Edition for instant digital reading on iOS, Android &amp; e-readers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Amazon Prime fast delivery across India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Registered Standard Identifier: <strong className="font-mono text-zinc-200">{SITE_CONFIG.ISBN}</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={SITE_CONFIG.BOOK_PURCHASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-author-solid-red text-xs tracking-widest"
                >
                  <span>ORDER PAPERBACK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={SITE_CONFIG.BOOK_PURCHASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-author-outline text-xs tracking-widest"
                >
                  <span>KINDLE EBOOK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs text-zinc-500 font-sans">
                For signed author copies or media inquiries, contact{' '}
                <a href={`mailto:${SITE_CONFIG.EMAIL}`} className="text-zinc-400 hover:text-white underline">
                  {SITE_CONFIG.EMAIL}
                </a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
```

---

<a id="srccomponentscontacttsx"></a>
## File: `src/components/Contact.tsx`

```tsx
import React, { useState } from 'react';
import { SITE_CONFIG } from '../constants';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const instagramHref =
    SITE_CONFIG.INSTAGRAM_URL ||
    `https://www.instagram.com/${SITE_CONFIG.INSTAGRAM_HANDLE.replace('@', '')}/`;

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-white/10"
    >
      {/* Section Eyebrow */}
      <div className="mb-4">
        <span className="editorial-badge">
          06 &mdash; Correspondence
        </span>
      </div>

      {/* Main Section Heading */}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-4">
        Author Correspondence &amp; <br />
        <span className="italic font-normal text-gold-gradient">Inquiries</span>
      </h2>

      <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-12 font-sans">
        For literary discussions, review copies, reader feedback, or direct communication with author Ashutosh Jha:
      </p>

      {/* Two Clean Correspondence Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Email Direct Channel */}
        <div className="card-glass p-7 sm:p-8 flex flex-col justify-between border border-amber-500/20 shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-sans font-bold tracking-widest uppercase text-amber-400">
                Primary Channel
              </span>
              <Mail className="w-4 h-4 text-amber-400" />
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-1">
              Direct Email
            </h3>
            <p className="font-mono text-sm sm:text-base text-amber-300 break-all my-3 font-medium">
              {SITE_CONFIG.EMAIL}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
              Inquiries regarding <em className="italic font-serif text-white">Ma Beyond the Battle</em>, interviews, or speaking engagements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={`mailto:${SITE_CONFIG.EMAIL}?subject=Regarding Ma Beyond the Battle`}
              className="btn-primary text-xs py-2.5 px-4 justify-center"
            >
              <span>Compose Email</span>
            </a>
            <button
              onClick={copyEmail}
              className="btn-secondary text-xs py-2.5 px-4 justify-center"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Instagram Literary Channel */}
        <div className="card-glass p-7 sm:p-8 flex flex-col justify-between border border-white/10 shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-sans font-bold tracking-widest uppercase text-slate-400">
                Social Archive
              </span>
              <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-1">
              Instagram Dispatches
            </h3>
            <p className="font-mono text-sm sm:text-base text-amber-300 my-3 font-medium">
              {SITE_CONFIG.INSTAGRAM_HANDLE}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
              Reflections on writing, spiritual philosophy, and updates on subsequent literary publications.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2.5 px-4 w-full justify-center"
            >
              <span>Visit @ethereal_.72</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};
```

---

<a id="srccomponentsfootertsx"></a>
## File: `src/components/Footer.tsx`

```tsx
import React from 'react';
import { SITE_CONFIG } from '../constants';
import { Mail, ArrowUpRight } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black py-16 px-6 sm:px-10 border-t border-white/10 text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, 'hero')}
            className="font-logo text-3xl text-white hover:text-[#FF2D20] transition-colors"
          >
            ASHUTOSH JHA
          </a>
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-red-400 font-medium mt-1">
            Author &bull; Ma Beyond the Battle
          </p>
          <p className="font-sans text-xs text-zinc-500 mt-1">
            New Delhi, India &bull; ISBN {SITE_CONFIG.ISBN}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-sans font-medium uppercase tracking-[0.14em] text-zinc-400">
          <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#book" onClick={(e) => scrollTo(e, 'book')} className="hover:text-white transition-colors">
            The Book
          </a>
          <a href="#excerpt" onClick={(e) => scrollTo(e, 'excerpt')} className="hover:text-white transition-colors">
            Excerpt
          </a>
          <a href="#author" onClick={(e) => scrollTo(e, 'author')} className="hover:text-white transition-colors">
            About
          </a>
          <a href="#buy" onClick={(e) => scrollTo(e, 'buy')} className="hover:text-[#FF2D20] transition-colors">
            Order
          </a>
        </div>

        {/* Social & External Links */}
        <div className="flex items-center gap-4">
          <a
            href={SITE_CONFIG.INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#121216] border border-white/10 flex items-center justify-center text-white hover:text-[#FF2D20] hover:border-[#FF2D20] transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${SITE_CONFIG.EMAIL}`}
            className="w-10 h-10 rounded-full bg-[#121216] border border-white/10 flex items-center justify-center text-white hover:text-[#FF2D20] hover:border-[#FF2D20] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={SITE_CONFIG.BOOK_PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded bg-[#FF2D20] text-white text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1 hover:bg-[#E02417] transition-colors"
          >
            <span>Amazon</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 text-center text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} Ashutosh Jha. All rights reserved. All titles and artwork are property of the author.</p>
      </div>
    </footer>
  );
};
```

---

<a id="srccomponentssmartimagetsx"></a>
## File: `src/components/SmartImage.tsx`

```tsx
import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  containerClassName = 'w-full h-full',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <img
        src={currentSrc}
        alt={alt}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#161822] animate-pulse" />
      )}
    </div>
  );
};
```

---

<a id="srccomponentsambientaudiotsx"></a>
## File: `src/components/AmbientAudio.tsx`

```tsx
// Audio soundscape permanently removed
export const AmbientAudio: React.FC = () => null;
```

---

<a id="srccomponentsembercanvastsx"></a>
## File: `src/components/EmberCanvas.tsx`

```tsx
// EmberCanvas permanently removed
export const EmberCanvas: React.FC = () => null;
```

---

<a id="publicfaviconsvg"></a>
## File: `public/favicon.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#151312"/>
  <rect x="3" y="3" width="58" height="58" rx="11" fill="none" stroke="#C5A059" stroke-width="1.5" opacity="0.6"/>
  <!-- Central golden Trishul flame motif -->
  <path d="M 32 10 L 32 48" stroke="#C5A059" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 20 22 C 24 38 32 38 32 42 C 32 38 40 38 44 22" fill="none" stroke="#A8231E" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="32" cy="14" r="2.5" fill="#C5A059"/>
  <!-- Subtitle dots -->
  <circle cx="24" cy="52" r="1.5" fill="#C5A059" opacity="0.7"/>
  <circle cx="32" cy="52" r="1.5" fill="#C5A059"/>
  <circle cx="40" cy="52" r="1.5" fill="#C5A059" opacity="0.7"/>
</svg>
```

---

<a id="publiciconssvg"></a>
## File: `public/icons.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
```

---

<a id="srcassetsvitesvg"></a>
## File: `src/assets/vite.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
```

---

<a id="srcassetsreactsvg"></a>
## File: `src/assets/react.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
```

---

<a id="publicassetsbookcoversvg"></a>
## File: `public/assets/book-cover.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <!-- Background Gradients -->
    <radialGradient id="bgGlow" cx="50%" cy="48%" r="55%">
      <stop offset="0%" stop-color="#541210" stop-opacity="0.9"/>
      <stop offset="45%" stop-color="#280B0A" stop-opacity="0.8"/>
      <stop offset="85%" stop-color="#12100F" stop-opacity="1"/>
      <stop offset="100%" stop-color="#0A0908" stop-opacity="1"/>
    </radialGradient>

    <!-- Gold Foil Gradients -->
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ECD499"/>
      <stop offset="30%" stop-color="#C5A059"/>
      <stop offset="70%" stop-color="#E2C482"/>
      <stop offset="100%" stop-color="#9A7736"/>
    </linearGradient>

    <linearGradient id="vermilionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D9433B"/>
      <stop offset="50%" stop-color="#A8231E"/>
      <stop offset="100%" stop-color="#6E1410"/>
    </linearGradient>

    <!-- Subtle Book Texture Filter -->
    <filter id="paperTexture" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0" in="noise" result="coloredNoise"/>
      <feComposite operator="in" in2="SourceGraphic"/>
    </filter>

    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <filter id="bookShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="15" stdDeviation="25" flood-color="#000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Base Cover Background -->
  <rect width="800" height="1200" fill="#0E0D0C"/>
  <rect width="800" height="1200" fill="url(#bgGlow)"/>

  <!-- Subtle spine shadow overlay on left edge -->
  <linearGradient id="spineShadow" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#000000" stop-opacity="0.8"/>
    <stop offset="3%" stop-color="#000000" stop-opacity="0.2"/>
    <stop offset="7%" stop-color="#FFFFFF" stop-opacity="0.1"/>
    <stop offset="12%" stop-color="#000000" stop-opacity="0.0"/>
  </linearGradient>
  <rect width="80" height="1200" fill="url(#spineShadow)"/>

  <!-- Ornate Outer Gold Border -->
  <rect x="42" y="42" width="716" height="1116" rx="4" fill="none" stroke="url(#goldGradient)" stroke-width="2.5" opacity="0.85"/>
  <rect x="52" y="52" width="696" height="1096" rx="2" fill="none" stroke="url(#goldGradient)" stroke-width="1" opacity="0.5"/>

  <!-- Corner Ornaments -->
  <g fill="url(#goldGradient)" opacity="0.9">
    <!-- Top-Left Corner -->
    <path d="M 42 70 L 70 42 L 64 42 L 42 64 Z"/>
    <polygon points="68,68 76,68 76,76 68,76"/>
    <!-- Top-Right Corner -->
    <path d="M 758 70 L 730 42 L 736 42 L 758 64 Z"/>
    <polygon points="732,68 724,68 724,76 732,76"/>
    <!-- Bottom-Left Corner -->
    <path d="M 42 1130 L 70 1158 L 64 1158 L 42 1136 Z"/>
    <polygon points="68,1132 76,1132 76,1124 68,1124"/>
    <!-- Bottom-Right Corner -->
    <path d="M 758 1130 L 730 1158 L 736 1158 L 758 1136 Z"/>
    <polygon points="732,1132 724,1132 724,1124 732,1124"/>
  </g>

  <!-- Top Header / Eyebrow -->
  <text x="400" y="115" text-anchor="middle" font-family="'Cinzel', 'Cormorant Garamond', 'Georgia', serif" font-size="14" font-weight="600" fill="url(#goldGradient)" letter-spacing="7" opacity="0.95">
    A SPIRITUAL &amp; LITERARY JOURNEY
  </text>
  
  <circle cx="210" cy="110" r="2.5" fill="url(#goldGradient)" opacity="0.8"/>
  <circle cx="590" cy="110" r="2.5" fill="url(#goldGradient)" opacity="0.8"/>

  <!-- Main Title Area -->
  <g id="title-group">
    <!-- MA -->
    <text x="400" y="270" text-anchor="middle" font-family="'Cormorant Garamond', 'Playfair Display', 'Georgia', serif" font-size="124" font-weight="700" fill="#FAF6F0" letter-spacing="16" filter="url(#softGlow)">
      MA
    </text>
    <text x="400" y="270" text-anchor="middle" font-family="'Cormorant Garamond', 'Playfair Display', 'Georgia', serif" font-size="124" font-weight="700" fill="#FAF6F0" letter-spacing="16">
      MA
    </text>

    <!-- BEYOND THE BATTLE -->
    <text x="400" y="340" text-anchor="middle" font-family="'Cinzel', 'Cormorant Garamond', 'Georgia', serif" font-size="34" font-weight="600" fill="url(#goldGradient)" letter-spacing="10">
      BEYOND THE BATTLE
    </text>

    <!-- Decorative gold line under title -->
    <line x1="260" y1="365" x2="540" y2="365" stroke="url(#goldGradient)" stroke-width="1.5" opacity="0.75"/>
    <polygon points="400,361 405,365 400,369 395,365" fill="url(#goldGradient)"/>
  </g>

  <!-- Central Sacred Art: Divine Trishul, Lotus & Aura -->
  <g id="sacred-artwork" transform="translate(400, 600)">
    <!-- Radiating Solar / Halo Rays -->
    <g opacity="0.25" stroke="url(#goldGradient)" stroke-width="1">
      <circle cx="0" cy="0" r="140" fill="none" stroke-dasharray="4,8"/>
      <circle cx="0" cy="0" r="170" fill="none" stroke-dasharray="2,6"/>
      <circle cx="0" cy="0" r="200" fill="none" stroke-dasharray="1,12"/>
    </g>

    <!-- Sacred Red Flame / Shakti Aura -->
    <circle cx="0" cy="-20" r="90" fill="#801A18" opacity="0.5" filter="url(#softGlow)"/>

    <!-- Trishul Symbol in Vermilion & Gold -->
    <!-- Central Lance -->
    <line x1="0" y1="-150" x2="0" y2="130" stroke="url(#goldGradient)" stroke-width="5" stroke-linecap="round"/>
    
    <!-- Central Spearhead Flame -->
    <path d="M 0 -185 C -18 -150 -14 -120 0 -105 C 14 -120 18 -150 0 -185 Z" fill="url(#vermilionGrad)" stroke="url(#goldGradient)" stroke-width="2"/>
    <ellipse cx="0" cy="-145" rx="4" ry="12" fill="#FFE5A3"/>

    <!-- Curved Left & Right Prongs -->
    <path d="M -85 -90 C -60 -10 0 10 0 25 C 0 10 60 -10 85 -90" fill="none" stroke="url(#vermilionGrad)" stroke-width="7" stroke-linecap="round"/>
    <path d="M -85 -90 C -60 -10 0 10 0 25 C 0 10 60 -10 85 -90" fill="none" stroke="url(#goldGradient)" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Left & Right Flame Tips -->
    <path d="M -85 -115 C -96 -95 -90 -80 -82 -75 C -75 -85 -75 -95 -85 -115 Z" fill="url(#goldGradient)"/>
    <path d="M 85 -115 C 96 -95 90 -80 82 -75 C 75 -85 75 -95 85 -115 Z" fill="url(#goldGradient)"/>

    <!-- Crescent Moon / Shakti Base -->
    <path d="M -60 45 Q 0 85 60 45 Q 0 70 -60 45 Z" fill="url(#goldGradient)"/>

    <!-- Sacred Lotus Petals at Bottom of Shaft -->
    <path d="M 0 110 C -35 90 -50 125 0 150 C 50 125 35 90 0 110 Z" fill="url(#vermilionGrad)" opacity="0.8" stroke="url(#goldGradient)" stroke-width="1.5"/>
    <path d="M 0 120 C -20 105 -30 130 0 145 C 30 130 20 105 0 120 Z" fill="url(#goldGradient)" opacity="0.9"/>
  </g>

  <!-- Tagline / Subtitle Text -->
  <text x="400" y="870" text-anchor="middle" font-family="'Cormorant Garamond', 'Georgia', serif" font-style="italic" font-size="21" fill="#E8DEC8" letter-spacing="2" opacity="0.95">
    “Devotion, Shakti and the Battles Beyond the Battlefield”
  </text>

  <!-- Bottom Divider Line -->
  <g opacity="0.8">
    <line x1="280" y1="915" x2="520" y2="915" stroke="url(#goldGradient)" stroke-width="1"/>
    <circle cx="400" cy="915" r="3" fill="url(#goldGradient)"/>
  </g>

  <!-- Author Attribution -->
  <text x="400" y="995" text-anchor="middle" font-family="'Cinzel', 'Cormorant Garamond', 'Georgia', serif" font-size="13" font-weight="600" fill="url(#goldGradient)" letter-spacing="6" opacity="0.85">
    A WORK BY
  </text>

  <text x="400" y="1055" text-anchor="middle" font-family="'Cormorant Garamond', 'Playfair Display', 'Georgia', serif" font-size="44" font-weight="700" fill="#FAF6F0" letter-spacing="10">
    ASHUTOSH JHA
  </text>

  <text x="400" y="1090" text-anchor="middle" font-family="'Inter', sans-serif" font-size="10" font-weight="500" fill="url(#goldGradient)" letter-spacing="4" opacity="0.75">
    FIRST PUBLISHED EDITION • 2026
  </text>
</svg>
```

---

<a id="publicassetsauthorsvg"></a>
## File: `public/assets/author.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <!-- Background Warm Editorial Parchment Gradient -->
    <radialGradient id="authorParchment" cx="50%" cy="38%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1"/>
      <stop offset="40%" stop-color="#F7F1E7" stop-opacity="1"/>
      <stop offset="85%" stop-color="#EBE3D5" stop-opacity="1"/>
      <stop offset="100%" stop-color="#DECFC0" stop-opacity="1"/>
    </radialGradient>

    <linearGradient id="authorGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A059"/>
      <stop offset="50%" stop-color="#DFBE77"/>
      <stop offset="100%" stop-color="#9A7736"/>
    </linearGradient>

    <radialGradient id="warmHalo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8F221E" stop-opacity="0.12"/>
      <stop offset="60%" stop-color="#C5A059" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#C5A059" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background Base -->
  <rect width="800" height="1000" fill="#FAF7F2"/>
  <rect width="800" height="1000" fill="url(#authorParchment)"/>
  
  <!-- Subtle warm spiritual halo -->
  <circle cx="400" cy="380" r="320" fill="url(#warmHalo)"/>

  <!-- Ornate Editorial Frame -->
  <rect x="36" y="36" width="728" height="928" rx="8" fill="none" stroke="url(#authorGold)" stroke-width="2" opacity="0.75"/>
  <rect x="46" y="46" width="708" height="908" rx="4" fill="none" stroke="url(#authorGold)" stroke-width="0.8" opacity="0.45"/>

  <!-- Corner accents -->
  <g fill="url(#authorGold)" opacity="0.85">
    <rect x="34" y="34" width="8" height="8"/>
    <rect x="758" y="34" width="8" height="8"/>
    <rect x="34" y="958" width="8" height="8"/>
    <rect x="758" y="958" width="8" height="8"/>
  </g>

  <!-- Central Editorial Author Silhouette & Portrait Composition -->
  <g id="author-portrait" transform="translate(400, 360)">
    <!-- Backlit Medallion Halo -->
    <ellipse cx="0" cy="0" rx="180" ry="200" fill="#F4EFE6" stroke="url(#authorGold)" stroke-width="1.8"/>
    <ellipse cx="0" cy="0" rx="168" ry="188" fill="none" stroke="url(#authorGold)" stroke-width="0.75" stroke-dasharray="3,6" opacity="0.6"/>

    <!-- Dignified Author Silhouette (Shoulders and Head) -->
    <g opacity="0.92">
      <path d="M 0 -130 
               C 45 -130 75 -95 75 -45 
               C 75 -5 65 30 70 70 
               C 85 90 140 120 160 170 
               C 165 185 150 195 130 195 
               L -130 195 
               C -150 195 -165 185 -160 170 
               C -140 120 -85 90 -70 70 
               C -65 30 -75 -5 -75 -45 
               C -75 -95 -45 -130 0 -130 Z" 
            fill="#2A2420" stroke="url(#authorGold)" stroke-width="1.5"/>

      <!-- Inner warm lighting / collar lines -->
      <path d="M -45 80 L 0 145 L 45 80" fill="none" stroke="url(#authorGold)" stroke-width="1.2" opacity="0.7"/>
      <line x1="0" y1="145" x2="0" y2="195" stroke="url(#authorGold)" stroke-width="1.2" opacity="0.6"/>
    </g>

    <!-- Monogram Medallion "AJ" -->
    <circle cx="0" cy="-20" r="48" fill="#FAF7F2" stroke="url(#authorGold)" stroke-width="2"/>
    <circle cx="0" cy="-20" r="42" fill="none" stroke="url(#authorGold)" stroke-width="0.75" stroke-dasharray="2,4" opacity="0.7"/>
    <text x="0" y="-3" text-anchor="middle" font-family="'Cormorant Garamond', 'Georgia', serif" font-size="44" font-weight="700" fill="#8F221E" letter-spacing="4">
      AJ
    </text>
  </g>

  <!-- Editorial Plaque & Information -->
  <g transform="translate(400, 680)">
    <!-- Small Decorative Gold Trishul / Quill Accent -->
    <line x1="-80" y1="0" x2="80" y2="0" stroke="url(#authorGold)" stroke-width="1.5" opacity="0.8"/>
    <polygon points="0,-6 6,0 0,6 -6,0" fill="#8F221E"/>

    <text x="0" y="45" text-anchor="middle" font-family="'Cinzel', 'Cormorant Garamond', 'Georgia', serif" font-size="14" font-weight="600" fill="#8F221E" letter-spacing="6" opacity="0.95">
      AUTHOR • WRITER
    </text>

    <!-- Author Full Name -->
    <text x="0" y="105" text-anchor="middle" font-family="'Cormorant Garamond', 'Playfair Display', 'Georgia', serif" font-size="46" font-weight="700" fill="#1C1917" letter-spacing="8">
      ASHUTOSH JHA
    </text>

    <!-- Book Title Reference -->
    <text x="0" y="145" text-anchor="middle" font-family="'Cormorant Garamond', 'Georgia', serif" font-style="italic" font-size="21" fill="#7A684C" letter-spacing="2">
      Author of “Ma Beyond the Battle”
    </text>

    <!-- Editorial note -->
    <text x="0" y="195" text-anchor="middle" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#7A7269" letter-spacing="3" opacity="0.9">
      EXPLORING DEVOTION • COURAGE • INNER STRENGTH
    </text>
  </g>
</svg>
```

---

<a id="static-assets-summary"></a>
## Static Assets Summary

The following media assets exist in the project:

| File Path | Size | Description |
| :--- | :--- | :--- |
| `public/assets/hero-banner.jpg` | 521.5 KB | Image / Media asset |
| `public/assets/author.jpg` | 720.0 KB | Image / Media asset |
| `public/assets/author.png` | 720.0 KB | Image / Media asset |
| `public/assets/book-cover.jpg` | 139.5 KB | Image / Media asset |
| `public/assets/book-cover.png` | 1003.9 KB | Image / Media asset |
| `public/assets/book-cover.svg` | 7.9 KB | Image / Media asset |
| `public/assets/author.svg` | 4.7 KB | Image / Media asset |
| `src/assets/hero.png` | 12.8 KB | Image / Media asset |

---

<a id="how-to-run-and-setup"></a>
## How to Run and Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
