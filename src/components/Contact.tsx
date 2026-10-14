import React, { useState } from 'react';
import { SITE_CONFIG } from '../constants';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const instagramHref =
    SITE_CONFIG.INSTAGRAM_URL ||
    `https://www.instagram.com/${SITE_CONFIG.INSTAGRAM_HANDLE.replace('@', '')}/`;

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-white/10"
    >
      {/* Section Eyebrow */}
      <div className="mb-4">
        <span className="editorial-badge">
          06 &mdash; Correspondence
        </span>
      </div>

      {/* Main Section Heading */}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-4">
        Author Correspondence &amp; <br />
        <span className="italic font-normal text-gold-gradient">Inquiries</span>
      </h2>

      <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-12 font-sans">
        For literary discussions, review copies, reader feedback, or direct communication with author Ashutosh Jha:
      </p>

      {/* Two Clean Correspondence Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Email Direct Channel */}
        <div className="card-glass p-7 sm:p-8 flex flex-col justify-between border border-amber-500/20 shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-sans font-bold tracking-widest uppercase text-amber-400">
                Primary Channel
              </span>
              <Mail className="w-4 h-4 text-amber-400" />
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-1">
              Direct Email
            </h3>
            <p className="font-mono text-sm sm:text-base text-amber-300 break-all my-3 font-medium">
              {SITE_CONFIG.EMAIL}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
              Inquiries regarding <em className="italic font-serif text-white">Ma Beyond the Battle</em>, interviews, or speaking engagements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={`mailto:${SITE_CONFIG.EMAIL}?subject=Regarding Ma Beyond the Battle`}
              className="btn-primary text-xs py-2.5 px-4 justify-center"
            >
              <span>Compose Email</span>
            </a>
            <button
              onClick={copyEmail}
              className="btn-secondary text-xs py-2.5 px-4 justify-center"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Instagram Literary Channel */}
        <div className="card-glass p-7 sm:p-8 flex flex-col justify-between border border-white/10 shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-sans font-bold tracking-widest uppercase text-slate-400">
                Social Archive
              </span>
              <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-1">
              Instagram Dispatches
            </h3>
            <p className="font-mono text-sm sm:text-base text-amber-300 my-3 font-medium">
              {SITE_CONFIG.INSTAGRAM_HANDLE}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
              Reflections on writing, spiritual philosophy, and updates on subsequent literary publications.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2.5 px-4 w-full justify-center"
            >
              <span>Visit @ethereal_.72</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};
