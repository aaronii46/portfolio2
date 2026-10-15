import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectTitle?: string;
}

export const HireModal: React.FC<HireModalProps> = ({ isOpen, onClose, defaultProjectTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: defaultProjectTitle || 'Job Application Website',
    budget: 'KES 30,000 - 60,000 ($250 - $500)',
    timeline: 'Standard (1-2 weeks)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-slate-100 bg-[#EA580C]/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase text-[#EA580C] tracking-wider">PROJECT ENGAGEMENT</span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 font-medium">Quick Intake</span>
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg leading-tight">Hire Aaron Gitonga</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Inquiry Sent Successfully!</h4>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Thank you, {formData.name || 'there'}! Aaron will review your brief and reply to {formData.email || 'your email'} within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Mwangi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#EA580C]"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="david@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#EA580C]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Project Focus</label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#EA580C]"
                >
                  <option value="Job Application Website">Job Application Website (React + Python)</option>
                  <option value="Portfolio Website">Portfolio & Brand Showcase (React)</option>
                  <option value="Form Query Website">Form Query Engine (JS + Python API)</option>
                  <option value="Shopping Website">Shopping Website (React Storefront)</option>
                  <option value="React Web Application">React Web Application</option>
                  <option value="Python API & Backend Integration">Python API & Backend Integration</option>
                  <option value="Full Stack Web Application">Full Stack Web Application (React + Python)</option>
                  <option value="Responsive HTML/CSS/JS Website">Responsive HTML / CSS / JS Website</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#EA580C]"
                >
                  <option value="KES 25,000 - 45,000 ($200 - $350)">KES 25k - 45k (Starter)</option>
                  <option value="KES 45,000 - 80,000 ($350 - $650)">KES 45k - 80k (Standard)</option>
                  <option value="KES 80,000+ ($650+) ">KES 80k+ (Enterprise/Portal)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">Project Requirements & Timeline</label>
              <textarea
                rows={3}
                placeholder="Give a brief summary of what you need built, any reference links, or target delivery date..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#EA580C]"
              />
            </div>

            <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 flex items-center gap-2 text-[11px] text-amber-900">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] shrink-0" />
              <span>Dedicated sprint: 100% on-time milestone guarantee & direct WhatsApp collaboration.</span>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-bold text-white bg-[#EA580C] hover:bg-[#F97316] rounded-lg transition-colors shadow-sm flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Brief
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
