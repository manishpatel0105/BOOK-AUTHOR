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
