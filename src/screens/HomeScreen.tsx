import React from 'react';
import { ArrowRight, ExternalLink, Code2, Sparkles, CheckCircle2, MessageCircle, Phone, Mail, Award, Clock, Users, ShieldCheck, Star, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, TESTIMONIALS } from '../data/portfolioData';
import { Project, ScreenType } from '../types/portfolio';
import { HeroAvatarGraphic } from '../components/HeroAvatarGraphic';

interface HomeScreenProps {
  onSelectProject: (project: Project) => void;
  onOpenHireModal: (projectTitle?: string) => void;
  onOpenWhatsAppModal: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectProject,
  onOpenHireModal,
  onOpenWhatsAppModal,
  onNavigate,
}) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-orange-100 bg-gradient-to-b from-orange-50/70 via-white to-white">
        {/* Subtle background glow circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-200/40 via-amber-100/30 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
              {/* Top Greeting Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200 text-orange-950 font-medium text-xs sm:text-sm shadow-xs backdrop-blur-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="tracking-wide uppercase font-semibold text-[11px] text-orange-800">
                  HELLO, I'M {PERSONAL_INFO.name.toUpperCase()}
                </span>
                <span className="text-orange-400">•</span>
                <span className="text-neutral-700">{PERSONAL_INFO.role}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.12]">
                Crafting websites tailored to{' '}
                <span className="text-orange-600 underline decoration-orange-300 decoration-wavy decoration-2 underline-offset-8">
                  client taste
                </span>{' '}
                & absolute satisfaction.
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed">
                "{PERSONAL_INFO.tagline}"
              </p>

              {/* Value stats pill bar */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 py-2 w-full max-w-xl border-y border-neutral-200/80 my-2">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                    2+ <span className="text-orange-500 text-lg">Yrs</span>
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-500 font-medium">Web Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                    100<span className="text-orange-500 text-lg">%</span>
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-500 font-medium">Client Taste Focus</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-neutral-900 leading-tight">
                    Full Stack
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-500 font-medium">HTML·CSS·JS·Python·React</div>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <button
                  onClick={() => onOpenHireModal()}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>HIRE ME</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onOpenWhatsAppModal}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 active:scale-95 font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </button>

                <button
                  onClick={() => onNavigate('experience')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 active:scale-95 font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Timeline</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              </div>

              {/* Location & Quick Contact Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-500 pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="hidden sm:inline text-neutral-300">•</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="hover:text-orange-600 transition-colors flex items-center gap-1 font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  {PERSONAL_INFO.phone}
                </a>
                <span className="hidden sm:inline text-neutral-300">•</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-orange-600 transition-colors flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Right Graphic Column */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <HeroAvatarGraphic />
            </div>

          </div>
        </div>
      </section>

      {/* Highlights / Work Philosophy Banner */}
      <section className="bg-neutral-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50">
            <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Client Taste First</h3>
              <p className="text-sm text-neutral-400 mt-1">
                Every line of CSS and markup is customized around the identity and exact expectations of your brand.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">On-Time Milestones</h3>
              <p className="text-sm text-neutral-400 mt-1">
                Transparent weekly staging links so you can inspect progress live on both mobile phones and desktop.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Rock-Solid Standards</h3>
              <p className="text-sm text-neutral-400 mt-1">
                Semantic HTML5, lightning-fast DOM scripts, zero bloat, and full cross-browser responsiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section (Clicking opens Interactive Project Modal!) */}
      <section id="projects" className="py-20 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">
                <Code2 className="w-4 h-4" />
                <span>Featured Digital Implementations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Featured Work & Interactive Projects
              </h2>
              <p className="text-neutral-600 mt-2 max-w-2xl text-base">
                Click any project card below to open the <strong className="text-neutral-900">Interactive Project Modal</strong> with live functional simulators, architecture deep-dives, and technical highlights.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                4 Case Studies
              </span>
              <span className="text-xs text-neutral-500">
                Click to interact
              </span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
              >
                {/* Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-neutral-900 shadow-xs backdrop-blur-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Case Study Index */}
                  <div className="absolute top-4 right-4">
                    <span className="w-8 h-8 rounded-full bg-neutral-900/80 text-white font-mono text-xs font-bold flex items-center justify-center backdrop-blur-xs border border-white/20">
                      {project.caseStudyNumber || '01'}
                    </span>
                  </div>

                  {/* Hover Prompt Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-950/40 backdrop-blur-[2px]">
                    <span className="px-5 py-2.5 rounded-full bg-orange-500 text-white font-bold text-sm tracking-wide shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span>Launch Interactive Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-1">
                      {project.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-3 gap-2 py-4 my-4 border-y border-neutral-100 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-extrabold text-neutral-900 text-xs sm:text-sm font-mono">{m.value}</div>
                        <div className="text-[10px] sm:text-xs text-neutral-500">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Footer with Tags and Action Button */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-100 text-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs font-bold text-orange-600 group-hover:text-orange-700 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                      <span>Preview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Interactive Modal Callout Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-100/60 border border-orange-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-base">
                  Looking for screen 2 with interactive live project modals?
                </h4>
                <p className="text-sm text-neutral-600 mt-0.5">
                  Click any of the cards above to experience live candidate pipelines, cart accumulators, and input validators.
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectProject(PROJECTS[0])}
              className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer"
            >
              Open Project Modal #1
            </button>
          </div>

        </div>
      </section>

      {/* Quick Skills Overview */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">
              Web Developer Arsenal
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900">
              Core Technologies in Production
            </h2>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base">
              Semantic markup, responsive design systems, reactive UI architectures, and backend Python integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* HTML5 */}
            <div className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50/50 hover:border-orange-300 hover:bg-orange-50/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 font-extrabold flex items-center justify-center font-mono text-base mb-3">
                  &lt;/&gt;
                </div>
                <h3 className="text-lg font-bold text-neutral-900">HTML5</h3>
                <p className="text-neutral-600 text-xs mt-1.5 leading-relaxed">
                  Clean semantic document trees, WCAG accessibility compliance, and structured technical SEO metadata.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Standard</span>
                <span className="font-bold text-orange-600">WCAG 2.1</span>
              </div>
            </div>

            {/* CSS3 */}
            <div className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50/50 hover:border-orange-300 hover:bg-orange-50/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 font-extrabold flex items-center justify-center font-mono text-base mb-3">
                  #css
                </div>
                <h3 className="text-lg font-bold text-neutral-900">CSS3 & Layouts</h3>
                <p className="text-neutral-600 text-xs mt-1.5 leading-relaxed">
                  Fluid Flexbox, CSS Grid systems, Tailwind CSS styling tokens, and seamless multi-device responsiveness.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Viewports</span>
                <span className="font-bold text-blue-600">Mobile to 4K</span>
              </div>
            </div>

            {/* JavaScript */}
            <div className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50/50 hover:border-orange-300 hover:bg-orange-50/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 font-extrabold flex items-center justify-center font-mono text-base mb-3">
                  JS
                </div>
                <h3 className="text-lg font-bold text-neutral-900">JavaScript</h3>
                <p className="text-neutral-600 text-xs mt-1.5 leading-relaxed">
                  Modern ES6+ syntax, asynchronous API Fetch, DOM event manipulation, and regex validation engines.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Performance</span>
                <span className="font-bold text-amber-600">ES6+ Logic</span>
              </div>
            </div>

            {/* Python */}
            <div className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50/50 hover:border-orange-300 hover:bg-orange-50/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 font-extrabold flex items-center justify-center font-mono text-base mb-3">
                  Py
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Python</h3>
                <p className="text-neutral-600 text-xs mt-1.5 leading-relaxed">
                  Backend API development, automated data scripts, payload processing, and server-side integration logic.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Backend</span>
                <span className="font-bold text-emerald-600">APIs & Scripts</span>
              </div>
            </div>

            {/* React */}
            <div className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50/50 hover:border-orange-300 hover:bg-orange-50/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 font-extrabold flex items-center justify-center font-mono text-base mb-3">
                  ⚛
                </div>
                <h3 className="text-lg font-bold text-neutral-900">React</h3>
                <p className="text-neutral-600 text-xs mt-1.5 leading-relaxed">
                  Component-driven architectures, custom state hooks, single page applications, and modern Vite ecosystems.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Frontend SPA</span>
                <span className="font-bold text-cyan-600">Reactive State</span>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('skills')}
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
            >
              <span>Explore full interactive skills breakdown & code playgrounds (HTML, CSS, JS, Python, React)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-orange-400" />
              <span>Client Satisfaction Records</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Endorsements & Testimonials
            </h2>
            <p className="text-neutral-400 mt-2 text-base">
              What partners and business owners say after collaborating on web interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-2xl bg-neutral-800/60 border border-neutral-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed">
                    {t.quote}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-700/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 font-bold text-white flex items-center justify-center text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-neutral-400">{t.role} • {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="py-20 bg-orange-500 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto">
            Ready to bring your website vision to reality?
          </h2>
          <p className="text-orange-100 text-lg sm:text-xl max-w-2xl mx-auto mt-4">
            Let's collaborate to build an interactive, responsive website that matches your client taste and drives business results.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <button
              onClick={() => onOpenHireModal()}
              className="px-8 py-4 rounded-full bg-white text-orange-600 hover:bg-neutral-100 font-extrabold text-base tracking-wide shadow-xl active:scale-95 transition-all cursor-pointer"
            >
              HIRE AARON GITONGA
            </button>
            <button
              onClick={onOpenWhatsAppModal}
              className="px-8 py-4 rounded-full bg-neutral-900 hover:bg-neutral-950 text-white font-bold text-base tracking-wide shadow-xl active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Direct WhatsApp (+254 758 024 953)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
