import React from 'react';
import { Instagram, Facebook, Linkedin, Github, Twitter, Code2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroAvatarGraphic: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Outer subtle decorative radial glow */}
      <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-orange-200/40 via-amber-100/30 to-orange-100/20 blur-2xl -z-10 animate-pulse duration-1000" />

      {/* Main Circular Profile Container */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full p-2 bg-gradient-to-b from-orange-200 via-white to-orange-100 shadow-xl border border-orange-200/80 flex items-center justify-center">
        {/* Inner Card Frame */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white flex items-center justify-center group">
          <img
            src={PERSONAL_INFO.images.portrait}
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Semi-transparent editorial overlay card */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-5 text-white">
            <div className="space-y-1 text-center">
              <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase font-semibold">
                WEB DEVELOPER
              </span>
              <h3 className="font-extrabold text-lg text-white leading-tight">
                Aaron <span className="text-orange-400">Gitonga</span>
              </h3>
              <p className="text-[10px] text-slate-200 italic line-clamp-2 max-w-[220px] mx-auto">
                &ldquo;It&apos;s all about client satisfaction and taste...&rdquo;
              </p>
            </div>

            {/* Micro Stack strip */}
            <div className="flex items-center justify-center flex-wrap gap-1.5 mt-2 pt-2 border-t border-white/15 text-[8.5px] font-mono text-slate-300">
              <span>HTML</span>
              <span>·</span>
              <span>CSS</span>
              <span>·</span>
              <span>JS</span>
              <span>·</span>
              <span>PYTHON</span>
              <span>·</span>
              <span>REACT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Available for freelance pill below */}
      <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-800">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>{PERSONAL_INFO.availability}</span>
      </div>
    </div>
  );
};
