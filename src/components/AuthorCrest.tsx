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
