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
