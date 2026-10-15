import React, { useState } from 'react';
import { Award, CheckCircle2, MessageCircle, Phone, Mail, MapPin, Globe, Sparkles, HeartHandshake, ShieldCheck, ArrowRight, UserCheck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { PERSONAL_INFO, FAQS } from '../data/portfolioData';
import { ScreenType } from '../types/portfolio';

interface AboutScreenProps {
  onOpenHireModal: (projectTitle?: string) => void;
  onOpenWhatsAppModal: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onOpenHireModal,
  onOpenWhatsAppModal,
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-orange-50 via-white to-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>About Aaron Gitonga</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              Dedicated to client taste, clean semantics & digital excellence.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-neutral-600 leading-relaxed">
              Web Developer based in Kenya with 2+ years of hands-on experience building full-featured web solutions with HTML, CSS, JavaScript, Python, and React.
            </p>
          </div>
        </div>
      </section>

      {/* Main Bio & Philosophy Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Aaron's Profile Card */}
            <div className="lg:col-span-5 bg-neutral-50 rounded-3xl p-8 border border-neutral-200/90 shadow-xs relative">
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl mb-6">
                <img
                  src={PERSONAL_INFO.images.portrait}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-black text-neutral-900">{PERSONAL_INFO.name}</h3>
                <p className="text-orange-600 font-semibold text-sm mt-1">{PERSONAL_INFO.role}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium mt-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{PERSONAL_INFO.availability}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 space-y-3.5 text-sm">
                <div className="flex items-center justify-between text-neutral-600">
                  <span className="flex items-center gap-2 text-neutral-500">
                    <MapPin className="w-4 h-4 text-orange-500" /> Location
                  </span>
                  <span className="font-semibold text-neutral-900">{PERSONAL_INFO.location}</span>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <span className="flex items-center gap-2 text-neutral-500">
                    <Globe className="w-4 h-4 text-orange-500" /> Timezone
                  </span>
                  <span className="font-semibold text-neutral-900">{PERSONAL_INFO.timezone}</span>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <span className="flex items-center gap-2 text-neutral-500">
                    <Phone className="w-4 h-4 text-orange-500" /> Phone
                  </span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="font-semibold text-orange-600 hover:underline font-mono">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <span className="flex items-center gap-2 text-neutral-500">
                    <Mail className="w-4 h-4 text-orange-500" /> Email
                  </span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-orange-600 hover:underline truncate max-w-[180px]">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={() => onOpenHireModal()}
                  className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wide shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  HIRE ME FOR A PROJECT
                </button>
                <button
                  onClick={onOpenWhatsAppModal}
                  className="w-full py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right: Bio Story & Philosophy */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Working Philosophy Callout */}
              <div className="p-6 rounded-2xl bg-orange-50/70 border border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-500 text-white shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">The Core Philosophy</h3>
                    <blockquote className="mt-2 text-base text-neutral-800 italic leading-relaxed border-l-2 border-orange-400 pl-3">
                      "{PERSONAL_INFO.tagline}"
                    </blockquote>
                    <p className="text-sm text-neutral-600 mt-3">
                      A website should never just be a standard template. It is your business's 24/7 digital storefront, representative of your taste, values, and client trust.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <div>
                <h2 className="text-2xl font-extrabold text-neutral-900">
                  Who is Aaron Gitonga?
                </h2>
                <div className="prose text-neutral-600 mt-4 space-y-4 text-base leading-relaxed">
                  <p>
                    I am a Kenyan web developer who discovered the power of the web through creating interactive digital experiences. Over the past 2+ years, I have built deep expertise across the modern web stack: <strong>HTML5, CSS3, JavaScript, Python, and React</strong>.
                  </p>
                  <p>
                    I bridge clean semantic user interfaces with structured backend logic. Whether I'm building a multi-step <strong>Job Application Website</strong> with dynamic applicant states, a modern <strong>E-Commerce Shopping Storefront</strong> in React, or an intuitive <strong>Form Query Engine</strong> powered by Python data processing endpoints, every project is built from scratch with clean code that guarantees client satisfaction.
                  </p>
                  <p>
                    I collaborate directly with founders, small business owners, and agency teams, turning requirements into high-performing websites and web applications that perform flawlessly on every screen—from entry-level smartphones to large desktop monitors.
                  </p>
                </div>
              </div>

              {/* 4 Pillars of Satisfaction */}
              <div>
                <h3 className="text-xl font-extrabold text-neutral-900 mb-4">
                  My 4 Commitments to Every Client
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/40">
                    <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>Taste Customization</span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      I don't force generic templates. Every color palette, typography font, and layout structure is tailored to your taste.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/40">
                    <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>Mobile-First Fluidity</span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      Tested on physical smartphones so your mobile visitors experience instant loading and effortless navigation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/40">
                    <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>No Code Bloat</span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      Pure semantic HTML and optimized CSS ensure top Lighthouse performance scores and speedy load times.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/40">
                    <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>Direct Staging Access</span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      You receive private test links to review progress at each milestone with zero guesswork.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">
              Step-by-Step Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
              How We Create Your Website Together
            </h2>
            <p className="text-neutral-600 mt-2 text-base">
              A clear, predictable roadmap from the first conversation to live deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery & Taste',
                desc: 'We discuss your business needs, aesthetic taste, preferred colors, and target audiences over WhatsApp or Call.'
              },
              {
                step: '02',
                title: 'Semantic Wireframe',
                desc: 'Structuring the clean HTML5 document tree and content hierarchy before writing complex styles.'
              },
              {
                step: '03',
                title: 'Responsive Styling',
                desc: 'Crafting fluid CSS layouts using Flexbox and Grid, tuned perfectly for both small phones and 4K desktops.'
              },
              {
                step: '04',
                title: 'React & Python Logic',
                desc: 'Implementing interactive React state, vanilla JS regex validation, and integrating Python REST API endpoints for seamless data workflows.'
              },
              {
                step: '05',
                title: 'Deployment & Launch',
                desc: 'Domain hookup, mobile testing, lighthouse audit, and 30-day post-launch warranty with complete source code handover.'
              }
            ].map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-black text-orange-500">
                    {s.step}
                  </span>
                  <h4 className="font-bold text-neutral-900 text-lg mt-2">{s.title}</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-orange-600">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Milestone Checked
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900">
              Common Questions from Clients
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-neutral-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-neutral-900 hover:text-orange-600 transition-colors cursor-pointer bg-neutral-50/50"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-orange-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-2 text-sm sm:text-base text-neutral-600 bg-white border-t border-neutral-100 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-8 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="font-bold text-lg">Have a specific project in mind?</h3>
              <p className="text-neutral-400 text-sm mt-1">Let's discuss requirements, timeline, and quote directly.</p>
            </div>
            <button
              onClick={() => onOpenHireModal()}
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wide shrink-0 transition-all cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
