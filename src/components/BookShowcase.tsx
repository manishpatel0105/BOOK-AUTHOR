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
