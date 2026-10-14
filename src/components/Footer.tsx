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
