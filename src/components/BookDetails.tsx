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
