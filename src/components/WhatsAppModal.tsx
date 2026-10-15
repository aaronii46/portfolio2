import React, { useState } from 'react';
import { X, MessageCircle, Send, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, defaultProject }) => {
  const [clientName, setClientName] = useState('');
  const [projectChoice, setProjectChoice] = useState(defaultProject || 'Custom Website Development');
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const prefilledMessage = `Hi Aaron! My name is ${clientName || '[Your Name]'}. I'm interested in discussing a ${projectChoice}. ${customNote ? `Notes: ${customNote}` : "It's all about client taste and satisfaction—let's build something great!"}`;

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(prefilledMessage);
    const url = `https://wa.me/${PERSONAL_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prefilledMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-slate-100 bg-[#25D366]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm">
              <MessageCircle className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Chat with Aaron on WhatsApp</h3>
              <p className="text-xs text-emerald-800 font-medium">Online · Direct Line ({PERSONAL_INFO.whatsappDisplay})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4 text-xs">
          <div>
            <label className="block font-medium text-slate-700 mb-1">Your Name</label>
            <input
              type="text"
              placeholder="e.g. Brenda Mwangi"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#25D366]"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">Project Type</label>
            <select
              value={projectChoice}
              onChange={(e) => setProjectChoice(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#25D366]"
            >
              <option value="Job Application Portal (React + Python)">Job Application Portal (React + Python)</option>
              <option value="Shopping Website Store (React)">Shopping Website Store (React)</option>
              <option value="Form Query & Feedback Engine (JS + Python)">Form Query & Feedback Engine (JS + Python)</option>
              <option value="Personal Brand Portfolio (React)">Personal Brand Portfolio (React)</option>
              <option value="Full Stack Web Application">Full Stack Web Application (React + Python)</option>
              <option value="Custom HTML/CSS/JS Website">Custom HTML / CSS / JS Website</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">Brief Note or Requirements (Optional)</label>
            <textarea
              rows={2}
              placeholder="Tell Aaron about your timeline, ideas, or questions..."
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#25D366]"
            />
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[10px] font-mono text-slate-400 block mb-1">Preview Message Generated:</span>
            <p className="text-slate-700 italic font-sans leading-relaxed">{prefilledMessage}</p>
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-2">
          <button
            onClick={handleCopy}
            className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 font-medium text-xs hover:bg-slate-100 flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : null}
            {copied ? 'Copied' : 'Copy Text'}
          </button>

          <button
            onClick={handleOpenWhatsApp}
            className="flex-1 py-2 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            Launch WhatsApp Chat
          </button>
        </div>
      </div>
    </div>
  );
};
