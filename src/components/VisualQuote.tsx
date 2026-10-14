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
