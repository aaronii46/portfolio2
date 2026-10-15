import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#EA580C] text-white py-8 px-4 sm:px-6 lg:px-8 mt-16 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3.5 text-center md:text-left">
          <div className="w-10 h-10 rounded-xl bg-white text-[#EA580C] flex items-center justify-center font-extrabold text-base shadow-sm shrink-0">
            AG
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">
              © {new Date().getFullYear()} Aaron Gitonga. All rights reserved.
            </p>
            <p className="text-xs text-orange-100 font-medium mt-0.5">
              Web Developer · HTML, CSS, JavaScript, Python & React
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-transform hover:scale-110"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-transform hover:scale-110"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-transform hover:scale-110"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-transform hover:scale-110"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="X (formerly Twitter)"
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-transform hover:scale-110"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="text-xs font-bold tracking-wider uppercase text-white hover:text-orange-200 transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/10"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
