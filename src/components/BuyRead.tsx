import React from 'react';
import { SITE_CONFIG } from '../constants';
import { SmartImage } from './SmartImage';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';

export const BuyRead: React.FC = () => {
  return (
    <section
      id="buy"
      className="bg-[#050507] py-20 sm:py-28 px-6 sm:px-10 border-b border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-red-400 font-medium block mb-3">
            Acquire The Volume
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-normal">
            Order Your Copy
          </h2>
          <div className="w-12 h-[1px] bg-red-800/80 mx-auto my-5" />
          <p className="font-serif italic text-base text-zinc-300 font-light">
            Available in Paperback and Kindle eBook editions on Amazon India with nationwide delivery.
          </p>
        </div>

        {/* Acquisition Card */}
        <div className="bg-[#09090C] p-8 sm:p-12 rounded-[3px] border border-zinc-800 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Book Preview */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative aspect-[641/1024] w-48 sm:w-56 rounded-[2px] overflow-hidden book-hero-shadow border border-zinc-700/80">
                <SmartImage
                  src={SITE_CONFIG.BOOK_COVER_IMAGE}
                  fallbackSrc="/assets/book-cover.svg"
                  alt="Ma Beyond the Battle — Ashutosh Jha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Buying Details */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-red-950/50 border border-red-800/40 text-red-300 text-[10px] font-sans font-medium uppercase tracking-[0.2em] rounded-[2px] mb-3">
                  Official Amazon Release
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-wide">
                  Ma Beyond the Battle
                </h3>
                <p className="font-sans text-xs text-zinc-400 mt-1">
                  By <span className="text-zinc-200 font-medium">{SITE_CONFIG.AUTHOR_NAME}</span> &bull; 73 Pages &bull; First Edition
                </p>
              </div>

              <div className="space-y-2 text-sm font-sans text-zinc-300 font-light">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Paperback Edition with high-quality tactile print finish</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Kindle Edition for instant digital reading on iOS, Android &amp; e-readers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Amazon Prime fast delivery across India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Registered Standard Identifier: <strong className="font-mono text-zinc-200">{SITE_CONFIG.ISBN}</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={SITE_CONFIG.BOOK_PURCHASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-author-solid-red text-xs tracking-widest"
                >
                  <span>ORDER PAPERBACK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={SITE_CONFIG.BOOK_PURCHASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-author-outline text-xs tracking-widest"
                >
                  <span>KINDLE EBOOK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs text-zinc-500 font-sans">
                For signed author copies or media inquiries, contact{' '}
                <a href={`mailto:${SITE_CONFIG.EMAIL}`} className="text-zinc-400 hover:text-white underline">
                  {SITE_CONFIG.EMAIL}
                </a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
