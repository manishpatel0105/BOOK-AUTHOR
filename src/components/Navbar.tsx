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
