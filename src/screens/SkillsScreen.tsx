import React, { useState } from 'react';
import { Code2, Layout, Zap, CheckCircle2, Sliders, Smartphone, Laptop, Check, AlertCircle, Sparkles, Terminal, Copy } from 'lucide-react';
import { CORE_SKILLS, PERSONAL_INFO } from '../data/portfolioData';
import { ScreenType } from '../types/portfolio';

interface SkillsScreenProps {
  onOpenHireModal: (projectTitle?: string) => void;
  onOpenWhatsAppModal: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const SkillsScreen: React.FC<SkillsScreenProps> = ({
  onOpenHireModal,
  onOpenWhatsAppModal,
  onNavigate,
}) => {
  // Interactive Live Playground State
  const [activePlayground, setActivePlayground] = useState<'react' | 'python' | 'css' | 'js' | 'html'>('react');
  
  // React playground state
  const [reactCount, setReactCount] = useState(3);
  const [reactToggle, setReactToggle] = useState(true);

  // Python playground state
  const [pythonRole, setPythonRole] = useState('Frontend Developer');
  const [pythonExperience, setPythonExperience] = useState('2');
  const [pythonLocation, setPythonLocation] = useState('Nairobi');

  // CSS Playground state: grid columns slider
  const [gridColumns, setGridColumns] = useState(3);
  const [gridGap, setGridGap] = useState(16);
  const [cardCount, setCardCount] = useState(6);

  // JS Playground state: live regex tester
  const [testEmail, setTestEmail] = useState('client@taste.co.ke');
  const [testPhone, setTestPhone] = useState('0758024953');

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(testEmail);
  const isPhoneValid = /^(?:\+254|0)[17]\d{8}$/.test(testPhone.replace(/\s+/g, ''));

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-orange-50 via-white to-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 text-orange-600" />
              <span>Technical Skills & Web Development Expertise</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              HTML, CSS, JavaScript, Python, and React.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-neutral-600 leading-relaxed">
              From accessible HTML5 structures and fluid responsive CSS3 to dynamic JavaScript, reactive React components, and backend Python API automation tailored to client taste.
            </p>
          </div>
        </div>
      </section>

      {/* Core Skills Deep Dive Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">
              Full Stack Web Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
              Core Technical Competencies
            </h2>
            <p className="text-neutral-600 mt-2 text-base">
              Detailed breakdown of proficiencies across HTML, CSS, JavaScript, Python, and React.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SKILLS.map((skill) => (
              <div
                key={skill.id}
                className="p-8 rounded-3xl border border-neutral-200/90 bg-neutral-50/50 hover:bg-white hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 font-extrabold flex items-center justify-center font-mono text-base border border-orange-200/60">
                      {skill.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-800">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900">{skill.name}</h3>
                  <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Mastery Progress Bar */}
                  <div className="mt-6">
                    <div className="flex justify-between text-xs font-semibold text-neutral-600 mb-1.5">
                      <span>Proficiency & Production Comfort</span>
                      <span className="font-mono text-orange-600 font-bold">{skill.masteryIndex}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-neutral-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500"
                        style={{ width: `${skill.masteryIndex}%` }}
                      />
                    </div>
                  </div>

                  {/* Key Capabilities */}
                  <div className="mt-8 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Standard Practices:
                    </div>
                    {skill.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200/60 text-xs text-neutral-500">
                  <span>Tested in production across all flagship web projects</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Code & Layout Playground */}
      <section className="py-20 bg-neutral-900 text-white border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Skill Demonstrator</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Live Engineering Playground
              </h2>
              <p className="text-neutral-400 mt-2 text-base max-w-2xl">
                Test my React state logic, Python backend API simulation, CSS Grid engine, JavaScript regex engine, and HTML5 semantic structure live below.
              </p>
            </div>

            {/* Playground Switcher Tabs */}
            <div className="flex p-1.5 rounded-xl bg-neutral-800 border border-neutral-700 flex-wrap gap-1">
              <button
                onClick={() => setActivePlayground('react')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  activePlayground === 'react'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                React State Engine
              </button>
              <button
                onClick={() => setActivePlayground('python')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  activePlayground === 'python'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Python API Simulator
              </button>
              <button
                onClick={() => setActivePlayground('css')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  activePlayground === 'css'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                CSS Grid Engine
              </button>
              <button
                onClick={() => setActivePlayground('js')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  activePlayground === 'js'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                JS Regex Validator
              </button>
              <button
                onClick={() => setActivePlayground('html')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  activePlayground === 'html'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                HTML5 Semantic
              </button>
            </div>
          </div>

          {/* Playground Canvas Container */}
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-neutral-800">
            
            {/* React State Engine Playground */}
            {activePlayground === 'react' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-cyan-400 font-bold">React useState & Hooks Test</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono">Client-Side State</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setReactCount(Math.max(0, reactCount - 1))}
                        className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-sm cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-mono text-xl font-black text-orange-400 px-4 py-1 rounded-lg bg-neutral-950 border border-neutral-800">
                        {reactCount} Items
                      </span>
                      <button
                        onClick={() => setReactCount(reactCount + 1)}
                        className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-sm cursor-pointer"
                      >
                        +
                      </button>

                      <button
                        onClick={() => setReactToggle(!reactToggle)}
                        className={`ml-auto px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          reactToggle ? 'bg-emerald-600 text-white' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {reactToggle ? '✓ Active State' : '○ Idle State'}
                      </button>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-neutral-800">
                      <div className="text-xs text-neutral-400">Virtual DOM Render Simulation:</div>
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(Math.min(6, reactCount))].map((_, i) => (
                          <div key={i} className="p-2.5 rounded-lg bg-neutral-950 border border-cyan-500/30 text-center animate-in fade-in">
                            <span className="text-[10px] text-cyan-400 font-mono block">Node #{i + 1}</span>
                            <span className="text-xs text-white font-bold">{reactToggle ? 'Mounted' : 'Cached'}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="font-mono text-xs bg-neutral-900 p-5 rounded-2xl border border-neutral-800 text-neutral-300 overflow-x-auto leading-relaxed">
                    <div className="text-neutral-500">// React Functional Component & Hooks</div>
                    <div><span className="text-cyan-400">import</span> React, &#123; useState, useEffect &#125; <span className="text-cyan-400">from</span> 'react';</div>
                    <br />
                    <div><span className="text-orange-400">export function</span> WebStoreCart() &#123;</div>
                    <div className="pl-4">const [items, setItems] = <span className="text-yellow-400">useState</span>({reactCount});</div>
                    <div className="pl-4">const [isActive, setIsActive] = <span className="text-yellow-400">useState</span>({reactToggle ? 'true' : 'false'});</div>
                    <br />
                    <div className="pl-4"><span className="text-neutral-500">// React state triggers smooth virtual DOM diffing</span></div>
                    <div className="pl-4"><span className="text-cyan-400">return</span> (</div>
                    <div className="pl-8">&lt;<span className="text-emerald-400">div</span> className="cart-widget"&gt;</div>
                    <div className="pl-12">&lt;<span className="text-emerald-400">Badge</span> count=&#123;items&#125; active=&#123;isActive&#125; /&gt;</div>
                    <div className="pl-8">&lt;/<span className="text-emerald-400">div</span>&gt;</div>
                    <div className="pl-4">);</div>
                    <div>&#125;</div>
                  </div>
                </div>
              </div>
            )}

            {/* Python API Simulator Playground */}
            {activePlayground === 'python' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-emerald-400 font-bold">Python REST API Request Simulator</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono">FastAPI / Flask</span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-neutral-400 block mb-1">Applicant Role:</label>
                        <input
                          type="text"
                          value={pythonRole}
                          onChange={(e) => setPythonRole(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white font-mono text-xs focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-neutral-400 block mb-1">Experience (Yrs):</label>
                          <input
                            type="text"
                            value={pythonExperience}
                            onChange={(e) => setPythonExperience(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white font-mono text-xs focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-neutral-400 block mb-1">City / Region:</label>
                          <input
                            type="text"
                            value={pythonLocation}
                            onChange={(e) => setPythonLocation(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white font-mono text-xs focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800">
                      <div className="text-[10px] font-mono text-neutral-500 mb-1">Computed Python JSON Response (Status 200 OK):</div>
                      <pre className="text-[11px] font-mono text-emerald-400 leading-tight">
{JSON.stringify({
  status: "success",
  candidate: {
    role: pythonRole,
    experience_years: Number(pythonExperience) || 2,
    location: pythonLocation,
    qualified: true,
    routing_queue: "priority_review"
  },
  timestamp: "2026-10-12T04:15:00Z"
}, null, 2)}
                      </pre>
                    </div>
                  </div>

                  <div className="font-mono text-xs bg-neutral-900 p-5 rounded-2xl border border-neutral-800 text-neutral-300 overflow-x-auto leading-relaxed">
                    <div className="text-neutral-500"># Python FastAPI Service Endpoint</div>
                    <div><span className="text-orange-400">from</span> fastapi <span className="text-orange-400">import</span> FastAPI, HTTPException</div>
                    <div><span className="text-orange-400">from</span> pydantic <span className="text-orange-400">import</span> BaseModel</div>
                    <br />
                    <div>app = FastAPI(title=<span className="text-emerald-400">"Aaron Gitonga Web Services"</span>)</div>
                    <br />
                    <div><span className="text-orange-400">class</span> CandidatePayload(BaseModel):</div>
                    <div className="pl-4">role: str</div>
                    <div className="pl-4">experience_years: int</div>
                    <div className="pl-4">location: str</div>
                    <br />
                    <div>@app.post(<span className="text-emerald-400">"/api/v1/intake"</span>)</div>
                    <div><span className="text-orange-400">def</span> handle_intake(payload: CandidatePayload):</div>
                    <div className="pl-4"><span className="text-neutral-500"># Validates payload, stores record, dispatches email</span></div>
                    <div className="pl-4"><span className="text-orange-400">return</span> &#123;</div>
                    <div className="pl-8"><span className="text-emerald-400">"status"</span>: <span className="text-emerald-400">"success"</span>,</div>
                    <div className="pl-8"><span className="text-emerald-400">"candidate"</span>: payload.dict(),</div>
                    <div className="pl-8"><span className="text-emerald-400">"verified"</span>: True</div>
                    <div className="pl-4">&#125;</div>
                  </div>
                </div>
              </div>
            )}

            {/* CSS Grid Playground */}
            {activePlayground === 'css' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="flex items-center gap-6 flex-wrap">
                    <div>
                      <label className="text-xs text-neutral-400 font-medium block mb-1">
                        Columns: <span className="text-orange-400 font-bold">{gridColumns}</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="4"
                        value={gridColumns}
                        onChange={(e) => setGridColumns(Number(e.target.value))}
                        className="w-32 accent-orange-500 cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-neutral-400 font-medium block mb-1">
                        Gap: <span className="text-orange-400 font-bold">{gridGap}px</span>
                      </label>
                      <input
                        type="range"
                        min="8"
                        max="32"
                        step="4"
                        value={gridGap}
                        onChange={(e) => setGridGap(Number(e.target.value))}
                        className="w-32 accent-orange-500 cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-neutral-400 font-medium block mb-1">
                        Items: <span className="text-orange-400 font-bold">{cardCount}</span>
                      </label>
                      <input
                        type="range"
                        min="3"
                        max="9"
                        value={cardCount}
                        onChange={(e) => setCardCount(Number(e.target.value))}
                        className="w-32 accent-orange-500 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="font-mono text-xs text-neutral-400 bg-neutral-950 px-3 py-2 rounded-lg border border-neutral-800">
                    display: grid; grid-template-columns: repeat({gridColumns}, 1fr); gap: {gridGap}px;
                  </div>
                </div>

                {/* Simulated Grid Box */}
                <div
                  className="grid transition-all duration-300"
                  style={{
                    gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
                    gap: `${gridGap}px`,
                  }}
                >
                  {[...Array(cardCount)].map((_, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 transition-all flex flex-col justify-between h-36"
                    >
                      <div className="flex items-center justify-between">
                        <span className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 font-mono text-xs font-bold flex items-center justify-center">
                          0{i + 1}
                        </span>
                        <span className="text-[10px] text-neutral-500 uppercase font-mono tracking-wider">
                          CSS Grid Item
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Responsive Container</div>
                        <div className="text-xs text-neutral-400 mt-0.5">Auto fluid reflow</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* JS Regex Validator Playground */}
            {activePlayground === 'js' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Email Validator */}
                  <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Live Email Pattern Test
                      </label>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                          isEmailValid ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                        }`}
                      >
                        {isEmailValid ? <Check className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                        {isEmailValid ? 'Valid Format' : 'Invalid Pattern'}
                      </span>
                    </div>
                    <input
                      type="text"
                      value={testEmail}
                      onChange={(e) => setTestEmail(e.target.value)}
                      placeholder="Enter an email to test..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white font-mono text-sm focus:outline-hidden focus:border-orange-500"
                    />
                    <div className="mt-3 font-mono text-[11px] text-neutral-500">
                      Regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    </div>
                  </div>

                  {/* Kenya Phone Validator */}
                  <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Kenya Mobile Pattern Test (+254 / 07xx / 01xx)
                      </label>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                          isPhoneValid ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                        }`}
                      >
                        {isPhoneValid ? <Check className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                        {isPhoneValid ? 'Valid Mobile' : 'Invalid Number'}
                      </span>
                    </div>
                    <input
                      type="text"
                      value={testPhone}
                      onChange={(e) => setTestPhone(e.target.value)}
                      placeholder="e.g. 0758024953 or +254758024953"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white font-mono text-sm focus:outline-hidden focus:border-orange-500"
                    />
                    <div className="mt-3 font-mono text-[11px] text-neutral-500">
                      Regex: /^(?:\+254|0)[17]\d&#123;8&#125;$/
                    </div>
                  </div>

                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-neutral-400 text-xs flex items-center justify-between">
                  <span>Client-side regex validation runs instantly without reloading the page or pinging external APIs.</span>
                  <span className="text-orange-400 font-mono font-bold">Latency: &lt;1ms</span>
                </div>
              </div>
            )}

            {/* HTML5 Semantic Tree Playground */}
            {activePlayground === 'html' && (
              <div className="space-y-4">
                <div className="font-mono text-xs bg-neutral-900 p-5 rounded-2xl border border-neutral-800 text-neutral-300 overflow-x-auto leading-relaxed">
                  <div className="text-neutral-500">&lt;!-- Clean Semantic Document Architecture --&gt;</div>
                  <div>&lt;<span className="text-orange-400">header</span> role="banner" className="site-header"&gt;</div>
                  <div className="pl-4">&lt;<span className="text-orange-400">nav</span> aria-label="Main Navigation"&gt;...&lt;/<span className="text-orange-400">nav</span>&gt;</div>
                  <div>&lt;/<span className="text-orange-400">header</span>&gt;</div>
                  <br />
                  <div>&lt;<span className="text-orange-400">main</span> id="main-content"&gt;</div>
                  <div className="pl-4">&lt;<span className="text-orange-400">section</span> aria-labelledby="hero-title"&gt;</div>
                  <div className="pl-8">&lt;<span className="text-emerald-400">h1</span> id="hero-title"&gt;Aaron Gitonga Web Developer&lt;/<span className="text-emerald-400">h1</span>&gt;</div>
                  <div className="pl-4">&lt;/<span className="text-orange-400">section</span>&gt;</div>
                  <div className="pl-4">&lt;<span className="text-orange-400">section</span> aria-labelledby="projects-title"&gt;</div>
                  <div className="pl-8">&lt;<span className="text-emerald-400">article</span> className="project-card"&gt;...&lt;/<span className="text-emerald-400">article</span>&gt;</div>
                  <div className="pl-4">&lt;/<span className="text-orange-400">section</span>&gt;</div>
                  <div>&lt;/<span className="text-orange-400">main</span>&gt;</div>
                  <br />
                  <div>&lt;<span className="text-orange-400">footer</span> role="contentinfo"&gt;...&lt;/<span className="text-orange-400">footer</span>&gt;</div>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-400 pt-2">
                  <span>Zero unnecessary divs. Pure semantic tags maximize SEO crawlability and WCAG screen-reader fidelity.</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Auxiliary Tools & Dev Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-neutral-900">
              Tooling & Workflow Environment
            </h2>
            <p className="text-neutral-600 mt-2 text-base">
              Modern developer tooling enabling fast iterations and clean client handoffs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { title: 'Git & GitHub', desc: 'Branching, staging PRs, version history' },
              { title: 'VS Code & Linters', desc: 'Strict syntax hygiene and formatting' },
              { title: 'Browser DevTools', desc: 'CSS Grid debugging, Network profiling' },
              { title: 'Responsive Devices', desc: 'Physical testing on iPhone & Android' },
            ].map((tool, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/50 text-center">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 font-bold flex items-center justify-center mx-auto mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-neutral-900 text-base">{tool.title}</h4>
                <p className="text-neutral-500 text-xs mt-1.5">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer banner */}
      <section className="py-16 bg-orange-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Need these skills on your next website?</h2>
          <p className="text-orange-100 mt-2 text-base">
            Work with me and my team to create a website that proves worth it!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => onOpenHireModal()}
              className="px-8 py-3.5 rounded-full bg-white text-orange-600 hover:bg-neutral-100 font-bold text-sm tracking-wide transition-all cursor-pointer shadow-lg"
            >
              HIRE AARON GITONGA
            </button>
            <button
              onClick={onOpenWhatsAppModal}
              className="px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-950 text-white font-semibold text-sm transition-all cursor-pointer"
            >
              WhatsApp (+254 758 024 953)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
