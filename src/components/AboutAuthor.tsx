import React, { useState } from 'react';
import { SITE_CONFIG } from '../constants';
import { SmartImage } from './SmartImage';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const AboutAuthor: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="author"
      className="bg-black py-20 sm:py-28 px-6 sm:px-10 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Author Candid Photo */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-[3px] overflow-hidden border border-zinc-800 bg-[#0A0A0D] shadow-2xl group">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <SmartImage
                  src={SITE_CONFIG.AUTHOR_IMAGE}
                  fallbackSrc="/assets/author.svg"
                  alt="Ashutosh Jha — Author of Ma Beyond the Battle"
                  className="w-full h-full object-cover filter contrast-[1.03]"
                  style={{ objectPosition: '50% 88%' }}
                />
              </div>

              {/* Caption */}
              <div className="p-4 bg-[#0A0A0D] border-t border-zinc-800 text-center">
                <p className="font-serif text-base text-white tracking-wide">
                  Ashutosh Jha
                </p>
                <p className="font-sans text-xs text-zinc-400 mt-0.5">
                  At his writing desk drafting Ma Beyond the Battle in New Delhi
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-red-400 font-medium block mb-2">
              Meet The Author
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-6 tracking-normal">
              Ashutosh Jha
            </h2>

            <div className="space-y-4 font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              <p>
                <span className="text-white font-normal">Ashutosh Jha</span> is an emerging Indian author whose debut work, <em className="text-white not-italic font-serif italic">Ma Beyond the Battle</em>, brings a bold and contemplative voice to contemporary spiritual writing.
              </p>
              
              <p>
                His journey as a writer began with a deep personal devotion to Maa Durga, Kali, and the primordial concept of Shakti. Rather than examining these sacred traditions merely through ancient myths, Ashutosh explores the living courage, vulnerability, and resilience that ordinary souls require when facing life&apos;s quiet battles.
              </p>

              {/* Literary Pull Quote */}
              <blockquote className="my-6 pl-5 border-l-2 border-red-700/80 py-1">
                <p className="font-serif italic text-lg sm:text-xl text-zinc-100 font-light leading-relaxed">
                  &ldquo;Writing this book was my way of giving voice to the battles that exist far beneath the surface of everyday speech.&rdquo;
                </p>
              </blockquote>

              <p>
                Based in New Delhi, he writes to remind readers that divine grace is not found solely in celebrated victories, but in the quiet courage to endure the struggle.
              </p>
            </div>

            {/* Direct Connect Actions */}
            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap items-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E0E12] border border-zinc-800 hover:border-zinc-600 rounded-[2px] text-xs font-sans text-zinc-300 hover:text-white transition-colors"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <span>{copiedEmail ? 'Email Copied!' : SITE_CONFIG.EMAIL}</span>
              </button>

              <a
                href={SITE_CONFIG.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E0E12] border border-zinc-800 hover:border-zinc-600 rounded-[2px] text-xs font-sans text-zinc-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram @{SITE_CONFIG.INSTAGRAM_HANDLE}</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
