import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, ExternalLink, ArrowRight, Layers, Sparkles, Terminal, Code2 } from 'lucide-react';
import { EXPERIENCE_ITEMS, PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project, ScreenType } from '../types/portfolio';

interface ExperienceScreenProps {
  onSelectProject: (project: Project) => void;
  onOpenHireModal: (projectTitle?: string) => void;
  onOpenWhatsAppModal: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const ExperienceScreen: React.FC<ExperienceScreenProps> = ({
  onSelectProject,
  onOpenHireModal,
  onOpenWhatsAppModal,
  onNavigate,
}) => {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-orange-50 via-white to-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-xs font-bold uppercase tracking-wider mb-4">
              <Briefcase className="w-3.5 h-3.5 text-orange-600" />
              <span>Career Milestones & Delivery Record</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              2+ Years Experience creating websites that prove worth it.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-neutral-600 leading-relaxed">
              From semantic HTML5 and fluid CSS3 to modern JavaScript, reactive React components, and Python backend integrations, explore my production timeline and client deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Main Experience Timeline */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Summary Stats & Credibility */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-neutral-900 text-white shadow-xl">
                <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
                  Track Record
                </div>
                <div className="mt-4 space-y-5">
                  <div className="border-b border-neutral-800 pb-4">
                    <div className="text-3xl font-extrabold text-white">2+ Years</div>
                    <div className="text-xs text-neutral-400 mt-0.5">Professional Web Engineering</div>
                  </div>
                  <div className="border-b border-neutral-800 pb-4">
                    <div className="text-3xl font-extrabold text-orange-400">100%</div>
                    <div className="text-xs text-neutral-400 mt-0.5">On-Time Client Delivery</div>
                  </div>
                  <div className="border-b border-neutral-800 pb-4">
                    <div className="text-3xl font-extrabold text-white">4 Major</div>
                    <div className="text-xs text-neutral-400 mt-0.5">Flagship Case Studies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-emerald-400">95+</div>
                    <div className="text-xs text-neutral-400 mt-0.5">Lighthouse Score Benchmark</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <button
                    onClick={() => onOpenHireModal()}
                    className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Discuss Your Timeline
                  </button>
                </div>
              </div>

              {/* Client Taste Guarantee Card */}
              <div className="p-6 rounded-2xl bg-orange-50/70 border border-orange-200">
                <div className="flex items-center gap-2 text-orange-900 font-bold text-sm">
                  <Award className="w-5 h-5 text-orange-600" />
                  <span>Satisfaction Contract</span>
                </div>
                <p className="text-neutral-700 text-xs sm:text-sm mt-2 leading-relaxed">
                  "Work with me and my team to create a website that proves worth it! Every milestone includes interactive review stages so you retain complete control over the look and feel."
                </p>
                <div className="mt-4 text-xs font-semibold text-orange-800">
                  — Aaron Gitonga
                </div>
              </div>
            </div>

            {/* Right: Chronological Timeline */}
            <div className="lg:col-span-8 space-y-10">
              {EXPERIENCE_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 sm:pl-10 border-l-2 border-orange-300 pb-10 last:pb-0"
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-xs" />

                  {/* Header info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-900 font-mono text-xs font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-neutral-900">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-orange-600 mt-0.5">
                    {item.company}
                  </div>

                  <p className="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-5 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                      Key Deliverables & Milestones:
                    </div>
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 text-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Case Studies Matrix (Tied directly to Interactive Modals) */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">
                Production Case Studies
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                Key Systems Built & Deployed
              </h2>
              <p className="text-neutral-600 mt-2 text-base max-w-2xl">
                Inspect the architecture and live functional simulations of my four primary implementations.
              </p>
            </div>
            <div className="text-xs text-neutral-500 font-medium">
              Click any project below to launch interactive simulator
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="p-6 rounded-2xl bg-white border border-neutral-200/90 hover:border-orange-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-orange-600 font-bold">CASE STUDY {proj.caseStudyNumber}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 font-medium">
                      {proj.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors">
                    {proj.title}
                  </h3>
                  <div className="text-xs text-neutral-500 mt-0.5">{proj.subtitle}</div>
                  <p className="text-neutral-600 text-sm mt-3 line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {proj.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                    <span>Open Interactive Modal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Quality & Standards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-neutral-900">
              Architectural Standards in Every Project
            </h2>
            <p className="text-neutral-600 mt-2 text-base">
              Why my code lasts, scales, and delivers consistent results for clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/30">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="font-bold text-neutral-900 text-lg">Semantic Hierarchy</h3>
              <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                Clean HTML tags (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;footer&gt;) instead of bloated div-soup. Improves SEO ranking and assistive device readability.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/30">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="font-bold text-neutral-900 text-lg">Fluid Mobile Scaling</h3>
              <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                Zero horizontal overflow. Fluid CSS clamp() typography, responsive grid auto-fit columns, and touch-target padding designed for mobile thumbs.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/30">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="font-bold text-neutral-900 text-lg">Defensive JS Validation</h3>
              <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                Real-time feedback before payload submissions. Instant error hints, regex matching, clean DOM mutation, and zero external dependency baggage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer banner */}
      <section className="py-16 bg-neutral-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Ready to start your next website?</h2>
          <p className="text-neutral-400 mt-2 text-base">
            Let's discuss how we can build your project with speed, quality, and full client satisfaction.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => onOpenHireModal()}
              className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 font-bold text-sm tracking-wide transition-all cursor-pointer shadow-lg shadow-orange-500/25"
            >
              HIRE AARON GITONGA
            </button>
            <button
              onClick={onOpenWhatsAppModal}
              className="px-6 py-3.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-emerald-400 font-semibold text-sm transition-all cursor-pointer"
            >
              WhatsApp Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
