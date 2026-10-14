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
