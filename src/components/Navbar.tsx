import React, { useState } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { ScreenType } from '../types/portfolio';

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenWhatsApp: () => void;
  onOpenHire: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenWhatsApp,
  onOpenHire
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ScreenType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Designs & Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFBF5]/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark & Monogram */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 text-left group whitespace-nowrap shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-[#EA580C] text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            AG
          </div>
          <div>
            <div className="font-bold text-slate-900 text-base leading-tight flex items-center gap-1.5">
              <span>Aaron Gitonga</span>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[#EA580C] uppercase font-bold block">
              PORTFOLIO
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Single-line, whitespace-nowrap) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => {
            const isActive = currentScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#EA580C] font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EA580C] rounded-full animate-in fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (WhatsApp Quick Link + Hire Me CTA) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenWhatsApp}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span className="hidden xl:inline">CHAT ON</span> WHATSAPP
          </button>

          <button
            onClick={onOpenHire}
            className="px-4 py-2 text-xs font-bold text-white bg-[#EA580C] hover:bg-[#F97316] rounded-lg transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                currentScreen === link.id
                  ? 'bg-orange-50 text-[#EA580C]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{link.label}</span>
              {currentScreen === link.id && <span className="w-2 h-2 rounded-full bg-[#EA580C]" />}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="flex-1 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
