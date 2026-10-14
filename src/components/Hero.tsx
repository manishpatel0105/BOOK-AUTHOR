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
