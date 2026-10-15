import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Check, AlertCircle, ShoppingBag, Plus, Minus, Send, Layers, Eye, ShieldCheck, Sparkles, Monitor, Smartphone, Tablet } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: (projectTitle?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'architecture' | 'highlights'>('demo');

  // Job portal simulator state
  const [candidateStage, setCandidateStage] = useState<'all' | 'new' | 'screening' | 'interview' | 'offer' | 'hired'>('all');
  const [candidates, setCandidates] = useState([
    { id: '1', name: 'Sarah J.', role: 'UX Designer', stage: 'new', date: 'Today', status: 'Pending Review' },
    { id: '2', name: 'David K.', role: 'Senior Frontend Dev', stage: 'screening', date: 'Yesterday', status: 'Screening' },
    { id: '3', name: 'Sophie C.', role: 'Product Manager', stage: 'interview', date: '2 days ago', status: 'Confirmed' },
    { id: '4', name: 'Noah R.', role: 'Full Stack Engineer', stage: 'offer', date: '3 days ago', status: 'Offer Sent' },
    { id: '5', name: 'Lily Z.', role: 'QA Automation', stage: 'hired', date: 'Last week', status: 'Hired' },
  ]);
  const [newApplicantName, setNewApplicantName] = useState('');
  const [newApplicantRole, setNewApplicantRole] = useState('Frontend Developer');

  // Shopping cart simulator state
  const [cart, setCart] = useState<{ [id: string]: number }>({ 'chair': 1 });
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ceramics' | 'furniture'>('all');
  const shopProducts = [
    { id: 'chair', name: 'Oak Dining Chair', price: 490, category: 'furniture', stock: 'In Stock' },
    { id: 'vase', name: 'Speckled Ceramic Vase', price: 120, category: 'ceramics', stock: 'In Stock' },
    { id: 'table', name: 'Marble Side Table', price: 750, category: 'furniture', stock: 'Low Stock' },
    { id: 'bowls', name: 'Ceramic Bowl Set (4pcs)', price: 85, category: 'ceramics', stock: 'In Stock' },
  ];

  // Form query simulator state
  const [formInputs, setFormInputs] = useState({
    name: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    org: 'Cognitive Solutions',
    rating: 5,
    message: 'Sleek and intuitive client interface!'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  // Portfolio responsive simulator state
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Add candidate
  const handleAddCandidate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newApplicantName.trim()) return;
    const newCand = {
      id: Date.now().toString(),
      name: newApplicantName,
      role: newApplicantRole,
      stage: 'new',
      date: 'Just now',
      status: 'New Intake'
    };
    setCandidates([newCand, ...candidates]);
    setNewApplicantName('');
  };

  const moveCandidateStage = (id: string, nextStage: string) => {
    setCandidates(candidates.map(c => c.id === id ? { ...c, stage: nextStage, status: nextStage.toUpperCase() } : c));
  };

  // Cart operations
  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const next = { ...prev };
      if (next[id] > 1) {
        next[id] -= 1;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = shopProducts.find(p => p.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const cartItemCount = Object.values(cart).reduce((a, b) => a + b, 0);

  // Form engine submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formInputs.email);
    setEmailValid(isEmailValid);
    if (isEmailValid && formInputs.name.trim()) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/70 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]"></span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-medium text-[#EA580C] uppercase tracking-wider">{project.category}</span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-500 font-medium">{project.systemType}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 leading-tight">{project.title}</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenContact(project.title)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#EA580C] hover:bg-[#F97316] rounded-lg transition-colors shadow-sm"
            >
              Request Similar Build
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="px-6 border-b border-slate-200 bg-white flex items-center justify-between gap-4 shrink-0 overflow-x-auto">
          <div className="flex items-center gap-2 py-2">
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'demo'
                  ? 'bg-orange-50 text-[#EA580C] border border-orange-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Interactive Demo
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'architecture'
                  ? 'bg-orange-50 text-[#EA580C] border border-orange-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Architecture & Stack
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'highlights'
                  ? 'bg-orange-50 text-[#EA580C] border border-orange-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Outcome & Deliverables
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3 py-2 text-xs text-slate-500 font-mono">
            <span>Status: <strong className="text-emerald-700">{project.status}</strong></span>
          </div>
        </div>

        {/* Body Container (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB 1: LIVE INTERACTIVE DEMO */}
          {activeTab === 'demo' && (
            <div className="space-y-6">
              {/* Project Visual Header Banner */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 max-h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="text-xs font-mono text-orange-300 font-medium">SYSTEM SIMULATOR ACTIVE</p>
                    <p className="text-sm font-semibold">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Specific Interactive Simulator based on Project ID */}
              {project.id === 'job-application-website' && (
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">TalentSphere Candidate Pipeline Board</h4>
                      <p className="text-xs text-slate-500">Test client-side filtering, status stage moves, and instant application intake.</p>
                    </div>
                    {/* Stage Filter buttons */}
                    <div className="flex flex-wrap items-center gap-1">
                      {(['all', 'new', 'screening', 'interview', 'offer', 'hired'] as const).map((stage) => (
                        <button
                          key={stage}
                          onClick={() => setCandidateStage(stage)}
                          className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                            candidateStage === stage
                              ? 'bg-[#EA580C] text-white shadow-sm'
                              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {stage.charAt(0).toUpperCase() + stage.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Applicant Intake form */}
                  <form onSubmit={handleAddCandidate} className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Candidate Name (e.g. Alex Mutua)"
                      value={newApplicantName}
                      onChange={(e) => setNewApplicantName(e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-[#EA580C]"
                    />
                    <select
                      value={newApplicantRole}
                      onChange={(e) => setNewApplicantRole(e.target.value)}
                      className="px-3 py-1.5 text-xs rounded border border-slate-300 bg-white focus:outline-none focus:border-[#EA580C]"
                    >
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="QA Tester">QA Tester</option>
                      <option value="Product Analyst">Product Analyst</option>
                    </select>
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#EA580C] hover:bg-[#F97316] rounded transition-colors whitespace-nowrap"
                    >
                      Submit Candidate
                    </button>
                  </form>

                  {/* Pipeline Cards List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {candidates
                      .filter(c => candidateStage === 'all' || c.stage === candidateStage)
                      .map((cand) => (
                        <div key={cand.id} className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                              <span>Applied: {cand.date}</span>
                              <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                                {cand.stage}
                              </span>
                            </div>
                            <p className="font-bold text-slate-900 text-sm">{cand.name}</p>
                            <p className="text-xs text-slate-600 mb-3">{cand.role}</p>
                          </div>
                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                              <Check className="w-3 h-3" /> Form Verified
                            </span>
                            <div className="flex gap-1">
                              {cand.stage !== 'interview' && (
                                <button
                                  onClick={() => moveCandidateStage(cand.id, 'interview')}
                                  className="text-[10px] px-2 py-0.5 bg-slate-100 hover:bg-orange-100 hover:text-[#EA580C] text-slate-700 rounded font-medium transition-colors"
                                >
                                  Interview →
                                </button>
                              )}
                              {cand.stage !== 'hired' && (
                                <button
                                  onClick={() => moveCandidateStage(cand.id, 'hired')}
                                  className="text-[10px] px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded font-medium transition-colors"
                                >
                                  Hire ✓
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Shopping Store Simulator */}
              {project.id === 'shopping-website' && (
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Terra & Line Storefront + Cart Counter</h4>
                      <p className="text-xs text-slate-500">Live dynamic shopping cart state engine with price accumulation.</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium flex items-center gap-2 shadow-xs">
                        <ShoppingBag className="w-4 h-4 text-[#EA580C]" />
                        <span>Bag: <strong>{cartItemCount} items</strong></span>
                        <span className="text-slate-300">|</span>
                        <span className="font-mono font-bold text-slate-900">${cartTotal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-medium">Filter:</span>
                    {(['all', 'ceramics', 'furniture'] as const).map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                          selectedCategory === cat
                            ? 'bg-slate-900 text-white'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {cat.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {shopProducts
                      .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
                      .map(p => {
                        const inCartCount = cart[p.id] || 0;
                        return (
                          <div key={p.id} className="bg-white p-3.5 rounded-lg border border-slate-200 flex items-center justify-between">
                            <div>
                              <span className="text-[10px] font-mono text-slate-400 uppercase">{p.category}</span>
                              <h5 className="font-semibold text-slate-900 text-sm">{p.name}</h5>
                              <p className="text-xs font-mono font-bold text-[#EA580C] mt-0.5">${p.price}</p>
                            </div>

                            <div className="flex items-center gap-1.5">
                              {inCartCount > 0 ? (
                                <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                                  <button
                                    onClick={() => removeFromCart(p.id)}
                                    className="p-1 hover:bg-white rounded text-slate-700 transition-colors"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="px-2 text-xs font-mono font-bold text-slate-900">{inCartCount}</span>
                                  <button
                                    onClick={() => addToCart(p.id)}
                                    className="p-1 hover:bg-white rounded text-slate-700 transition-colors"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => addToCart(p.id)}
                                  className="px-3 py-1.5 text-xs font-semibold text-white bg-[#EA580C] hover:bg-[#F97316] rounded-lg transition-colors flex items-center gap-1"
                                >
                                  <Plus className="w-3 h-3" /> Add
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  {/* Checkout summary box */}
                  <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/70 flex items-center justify-between text-xs">
                    <span className="text-amber-900 font-medium">Free domestic shipping unlocked on orders over $200</span>
                    <button
                      onClick={() => alert(`Simulated checkout completed for ${cartItemCount} items! Subtotal: $${cartTotal}`)}
                      className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded transition-colors"
                    >
                      Simulate Checkout (${cartTotal})
                    </button>
                  </div>
                </div>
              )}

              {/* Form Query Simulator */}
              {project.id === 'form-query-website' && (
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
                  <div className="pb-3 border-b border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm">Interactive Client Inquiry Engine</h4>
                    <p className="text-xs text-slate-500">Live regex-driven validation, instant feedback cues, and zero-reload serialization.</p>
                  </div>

                  {formSubmitted && (
                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span><strong>Submission Verified!</strong> Payload packaged into valid JSON with status HTTP 200 OK.</span>
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          value={formInputs.name}
                          onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#EA580C]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={formInputs.email}
                          onChange={(e) => {
                            setFormInputs({ ...formInputs, email: e.target.value });
                            setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
                          }}
                          className={`w-full px-3 py-2 text-xs rounded-lg border bg-white focus:outline-none ${
                            emailValid ? 'border-slate-300 focus:border-[#EA580C]' : 'border-red-400 bg-red-50/50'
                          }`}
                          required
                        />
                        {!emailValid && (
                          <span className="text-[10px] text-red-600 mt-1 block">Please enter a valid email pattern</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Organization / Brand</label>
                        <input
                          type="text"
                          value={formInputs.org}
                          onChange={(e) => setFormInputs({ ...formInputs, org: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#EA580C]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Satisfaction Rating</label>
                        <div className="flex items-center gap-1 py-1.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() => setFormInputs({ ...formInputs, rating: star })}
                              className={`text-sm ${star <= formInputs.rating ? 'text-amber-500' : 'text-slate-300'}`}
                            >
                              ★
                            </button>
                          ))}
                          <span className="text-xs text-slate-500 ml-2">({formInputs.rating}/5 Stars)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Requirements / Remarks</label>
                      <textarea
                        rows={2}
                        value={formInputs.message}
                        onChange={(e) => setFormInputs({ ...formInputs, message: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[11px] font-mono text-slate-400">Payload: UTF-8 JSON Sanitized</span>
                      <button
                        type="submit"
                        className="px-4 py-2 text-xs font-bold text-white bg-[#EA580C] hover:bg-[#F97316] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <Send className="w-3.5 h-3.5" /> Dispatch Inquiry
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Portfolio Simulator */}
              {project.id === 'portfolio-website' && (
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Responsive Viewport & Token Inspection</h4>
                      <p className="text-xs text-slate-500">Test layout scaling across breakpoints with zero layout shift.</p>
                    </div>

                    {/* Viewport switcher */}
                    <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5">
                      <button
                        onClick={() => setPreviewDevice('desktop')}
                        className={`p-1.5 rounded text-xs font-medium flex items-center gap-1 transition-colors ${
                          previewDevice === 'desktop' ? 'bg-[#EA580C] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Monitor className="w-3.5 h-3.5" /> 1440px
                      </button>
                      <button
                        onClick={() => setPreviewDevice('tablet')}
                        className={`p-1.5 rounded text-xs font-medium flex items-center gap-1 transition-colors ${
                          previewDevice === 'tablet' ? 'bg-[#EA580C] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Tablet className="w-3.5 h-3.5" /> 768px
                      </button>
                      <button
                        onClick={() => setPreviewDevice('mobile')}
                        className={`p-1.5 rounded text-xs font-medium flex items-center gap-1 transition-colors ${
                          previewDevice === 'mobile' ? 'bg-[#EA580C] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Smartphone className="w-3.5 h-3.5" /> 375px
                      </button>
                    </div>
                  </div>

                  {/* Visual viewport box */}
                  <div className="flex justify-center bg-slate-200/60 p-4 rounded-xl">
                    <div 
                      className={`bg-white rounded-lg border border-slate-300 p-4 shadow-sm transition-all duration-300 ${
                        previewDevice === 'desktop' ? 'w-full' : previewDevice === 'tablet' ? 'w-[75%]' : 'w-[45%]'
                      }`}
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                        <span className="font-bold text-xs text-[#EA580C]">AG PORTFOLIO</span>
                        <span className="text-[10px] font-mono text-slate-400">{previewDevice.toUpperCase()} VIEWPORT</span>
                      </div>
                      <h5 className="font-bold text-sm text-slate-900 leading-tight">Aaron Gitonga</h5>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{project.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {project.tags.map(t => (
                          <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Lighthouse Audit stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
                      <div className="text-emerald-700 font-bold text-lg font-mono">98</div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Performance</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
                      <div className="text-emerald-700 font-bold text-lg font-mono">100</div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Accessibility</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
                      <div className="text-emerald-700 font-bold text-lg font-mono">100</div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Best Practices</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
                      <div className="text-emerald-700 font-bold text-lg font-mono">96</div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">SEO Score</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & STACK */}
          {activeTab === 'architecture' && (
            <div className="space-y-5">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Architectural Overview</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{project.longDescription}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">Technology Stack Employed</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-orange-50/70 border border-orange-200 text-[#EA580C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs">
                <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-slate-400 text-[11px]">{project.id}.config.ts</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Strict TypeScript</span>
                </div>
                <pre className="p-4 overflow-x-auto text-[11px] leading-relaxed">
                  <code>{`// ${project.title} - Production Architecture
export const systemManifest = {
  systemId: "${project.id}",
  category: "${project.category}",
  architecture: "Modern Web Architecture (React, Python, HTML5, CSS3, JS)",
  browserSupport: ["Chrome 90+", "Safari 14+", "Firefox 88+", "Edge"],
  coreCapabilities: [
    ${project.highlights.map(h => `"${h.slice(0, 45)}..."`).join(',\n    ')}
  ],
  verifiedClientOutcome: "Zero layout shift & rapid execution"
};`}</code>
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: HIGHLIGHTS & OUTCOME */}
          {activeTab === 'highlights' && (
            <div className="space-y-5">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-3">Key Engineering Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-orange-100 text-[#EA580C] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <p className="text-xs text-slate-700 leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">Measured System Metrics</h4>
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                      <div className="text-base font-bold text-slate-900 font-mono">{m.value}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-orange-50/70 rounded-xl border border-orange-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h5 className="font-bold text-slate-900 text-xs">Interested in a similar web application?</h5>
                  <p className="text-[11px] text-slate-600">Aaron delivers clean, responsive websites and applications tailored to client specs within 1–2 weeks.</p>
                </div>
                <button
                  onClick={() => onOpenContact(project.title)}
                  className="px-4 py-2 bg-[#EA580C] hover:bg-[#F97316] text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                >
                  Start Project Discussion →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onOpenContact(project.title)}
              className="px-4 py-1.5 text-xs font-bold text-white bg-[#EA580C] hover:bg-[#F97316] rounded-lg transition-colors shadow-sm"
            >
              Inquire About This Build
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
