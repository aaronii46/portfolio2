import { Project, ExperienceItem, SkillCategory, Testimonial, FAQItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Aaron Gitonga',
  role: 'Web Developer',
  experienceYears: '2+ Years',
  location: 'Nairobi • Meru, Kenya',
  timezone: 'EAT (UTC+3)',
  email: 'gitongaaaron46@gmail.com',
  phone: '0758024953',
  whatsappNumber: '+254758024953',
  whatsappDisplay: '+254 758 024 953',
  tagline: "It's all about the client's satisfaction and taste, work with me and my team to create a website that proves worth it!",
  availability: 'Available for Freelance & Teams',
  bandwidth: '70% Committed • 1 Slot Open for New Client',
  coreStack: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'React'],
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
  images: {
    portrait: '/src/assets/images/aaron_portrait_1791802117738.jpg',
    jobPortal: '/src/assets/images/project_job_portal_1791802133737.jpg',
    shoppingStore: '/src/assets/images/project_shopping_store_1791802147099.jpg',
    formQuery: '/src/assets/images/project_form_query_1791802158661.jpg',
    portfolioShowcase: '/src/assets/images/project_portfolio_showcase_1791802170132.jpg',
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'job-application-website',
    title: 'Job Application Website',
    subtitle: 'TalentSphere Portal System',
    category: 'Web Application',
    systemType: 'Portal System',
    description: 'A comprehensive hiring portal designed for job seekers and recruiters featuring categorized vacancies, resume upload interfaces, multi-step application forms, and applicant status feedback.',
    longDescription: 'Engineered as an enterprise-grade recruitment and candidate pipeline portal. Solves candidate drop-off by segmenting complex job applications into intuitive sequential steps with client-side state caching, instant input validation, React component state, and dynamic Python API status tracking across recruitment stages.',
    image: PERSONAL_INFO.images.jobPortal,
    tags: ['React', 'JavaScript', 'Python', 'HTML5', 'CSS3'],
    status: 'Production Ready',
    actionText: 'Preview Details',
    caseStudyNumber: '01',
    highlights: [
      'Structured multi-step intake reducing applicant drop-off rates.',
      'Search by role categories, tenure, and employment types with React state.',
      'Python REST API backend endpoints for applicant payload intake.',
      'Accessible keyboard navigation across all candidate interaction rows.'
    ],
    metrics: [
      { label: 'Step Completion Rate', value: '100%' },
      { label: 'Full Stack Tech', value: 'React + Python' },
      { label: 'Form Validation', value: 'Instant JS' }
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com/demo/job-portal'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    subtitle: 'Developer Platform & Brand Showcase',
    category: 'Personal Brand',
    systemType: 'Brand Showcase',
    description: 'Personal high-converting developer website highlighting core strengths, client satisfaction achievements, clean typography, dynamic interactive elements, and accessible touchpoints.',
    longDescription: "A custom bespoke developer showcase engineered to transform technical recruiter visits and client inquiries into high-trust conversations. Built with React component hierarchy, strict semantic HTML5 standards, zero CSS layout bloat, and sub-second interaction speeds on mobile networks.",
    image: PERSONAL_INFO.images.portfolioShowcase,
    tags: ['React', 'HTML5', 'Modern CSS', 'JavaScript', 'Python APIs'],
    status: 'Live Architecture',
    actionText: 'Preview Details',
    caseStudyNumber: '04',
    highlights: [
      'Integrated WhatsApp, Telephone, and Email outreach pathways.',
      'React component modularity with zero layout shift.',
      'Optimized cross-browser scaling from 320px mobile to 4K displays.',
      'Interactive project modal system for live functional demonstrations.'
    ],
    metrics: [
      { label: 'Lighthouse Performance', value: '98/100' },
      { label: 'Core Stack', value: 'React & JS' },
      { label: 'Client Satisfaction', value: 'Priority #1' }
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com/demo/portfolio'
  },
  {
    id: 'form-query-website',
    title: 'Form Query Website',
    subtitle: 'Client Inquiry & Survey Engine',
    category: 'Interactive Tool',
    systemType: 'Inquiry Engine',
    description: 'Engineered dynamic query and survey interface featuring instant client validation, conditional input rendering, inquiry categorization, and structured customer feedback processing.',
    longDescription: 'Complex lead-capture and dynamic feedback engine. Features live regex-driven pattern validation in JavaScript, interactive rating elements, structured payload serialization connected to Python data handling endpoints, and zero-page-reload submission alerts.',
    image: PERSONAL_INFO.images.formQuery,
    tags: ['HTML5 Forms', 'JavaScript Regex', 'Python Backend', 'CSS3 UI'],
    status: 'Client Inquiries',
    actionText: 'Preview Details',
    caseStudyNumber: '03',
    highlights: [
      'Live error state indicators with accessible ARIA tags.',
      'Serialized form data preview modal before dispatch to Python service.',
      'Instant regex validation across email, phone numbers, and message quotas.',
      'Lightweight JavaScript architecture with zero dependency footprint.'
    ],
    metrics: [
      { label: 'Client Utility', value: 'Instant' },
      { label: 'Python Service', value: 'REST API' },
      { label: 'Validation Rate', value: '100%' }
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com/demo/form-query'
  },
  {
    id: 'shopping-website',
    title: 'Shopping Website',
    subtitle: 'Terra & Line Minimalist Storefront',
    category: 'E-Commerce',
    systemType: 'Storefront',
    description: 'Online retail storefront featuring product filtering, interactive shopping cart counter, detailed product presentation modal displays, and streamlined checkout UI workflows.',
    longDescription: 'Lightweight, high-speed online shopping interface equipped with intuitive category filtering, dynamic shopping cart accumulation counter using React state, modal product previews, and a structured mock checkout workflow.',
    image: PERSONAL_INFO.images.shoppingStore,
    tags: ['React', 'JavaScript', 'CSS Flexbox', 'HTML5', 'Python Scripts'],
    status: 'Commercial Catalog',
    actionText: 'Preview Details',
    caseStudyNumber: '02',
    highlights: [
      'Stateful client-side cart accumulator updating price subtotals in real-time.',
      'Filter catalog by price range, department, and stock availability.',
      'Product inspect modals with image zoom and specification cards.',
      'Fast responsive grid scaling seamlessly down to budget mobile handsets.'
    ],
    metrics: [
      { label: 'Cart Speed', value: '<50ms' },
      { label: 'Stack Architecture', value: 'React UI' },
      { label: 'Retail Pipeline', value: 'Sales Driver' }
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com/demo/storefront'
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: '2023 - PRESENT',
    role: 'Web Developer',
    company: 'Independent Client Solutions • Commercial Freelance',
    type: 'Full-lifecycle web architecture & implementation',
    summary: 'Two years experience in creating websites. Building bespoke user interfaces, accessible web forms, and interactive customer journeys tailored to clients\' taste and business requirements using HTML, CSS, JavaScript, Python, and React.',
    deliverables: [
      'Engineered interactive web portals and single page applications utilizing React, JavaScript, HTML5, and CSS3.',
      'Built backend integrations, data validation pipelines, and script utilities using Python.',
      'Spearheaded bespoke Form Query Web Applications with client-side field validation, regex pattern matching, and secure payload submissions.',
      'Maintained 100% on-time milestone delivery record across varied client scopes with structured weekly staging previews.',
      'Collaborated in agile environments to bring designs from conception to high-performing digital realities that guarantee satisfaction.'
    ],
    technologies: ['React', 'Python', 'JavaScript (ES6+)', 'HTML5 Semantic', 'CSS3 Grid / Flex', 'Tailwind CSS', 'Git & GitHub']
  },
  {
    period: '2022 - 2023',
    role: 'Web Developer & Contributor',
    company: 'Independent Practice & Open Source',
    type: 'Foundational mastery of core web technologies and scripting',
    summary: 'Built interactive mini-apps, automation scripts, and utility modules while cultivating strict standards in semantic markup, clean layout discipline, accessible document trees, and Python data handling.',
    deliverables: [
      'Authored modular CSS stylesheets and React UI components eliminating repetitive layout debt.',
      'Developed lightweight Python scripts for data extraction, payload transformations, and mock API services.',
      'Implemented dynamic DOM event listeners, modal controllers, and smooth scroll behaviors without relying on heavy external libraries.',
      'Conducted cross-browser audits across Safari, Chrome, and Firefox to rectify rendering discrepancies.',
      'Authored responsive templates tested under simulated slow 3G mobile conditions.'
    ],
    technologies: ['React Basics', 'Python Scripting', 'DOM Scripting', 'CSS Animation', 'Mobile QA', 'WCAG Accessibility']
  }
];

export const CORE_SKILLS: SkillCategory[] = [
  {
    id: 'html5',
    name: 'HTML5 Architecture',
    badge: 'HTML',
    level: 'Advanced',
    description: 'Foundational semantic structuring ensuring search engine visibility, multi-screen accessibility, and standards-compliant document models.',
    points: [
      'Semantic markup (header, nav, article, section, footer, main)',
      'WCAG 2.1 & Accessible Rich Internet Apps (ARIA)',
      'Technical SEO & OpenGraph Social Microdata',
      'Form controls, validation patterns, input heuristics'
    ],
    masteryIndex: 92
  },
  {
    id: 'css3',
    name: 'CSS3 & Modern Styling',
    badge: 'CSS',
    level: 'Advanced',
    description: 'Design-system implementation specializing in responsive fluid layouts, micro-interactions, container queries, and resilient typography scales.',
    points: [
      'Complex Responsive Flexbox & CSS Subgrid layout',
      'Tailwind utility architectures & token mapping',
      'Transitions, keyframe animations & GPU transforms',
      'Cross-browser normalization (Chrome, Firefox, Safari)'
    ],
    masteryIndex: 88
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    badge: 'JS',
    level: 'Advanced',
    description: 'Writing performant, vanilla logic and reactive interfaces with clear scoping, DOM manipulation, asynchronous fetching, and error safety.',
    points: [
      'Modern syntax (Arrow fns, Destructuring, Modules, Promises)',
      'Fetch API, Async/Await & RESTful API integrations',
      'DOM Traversal, Event delegation & Form validations',
      'Client-side storage (localStorage, sessionStorage, state)'
    ],
    masteryIndex: 85
  },
  {
    id: 'python',
    name: 'Python Development',
    badge: 'PY',
    level: 'Intermediate+',
    description: 'Developing clean backend services, RESTful API endpoints, automated data processing scripts, and server-side integration logic.',
    points: [
      'RESTful API development with Flask / FastAPI endpoints',
      'Data parsing, serialization, and JSON schema validation',
      'Backend automation scripts, web scrapers, and task runners',
      'Clean object-oriented and functional Python programming'
    ],
    masteryIndex: 80
  },
  {
    id: 'react',
    name: 'React Ecosystem',
    badge: 'REACT',
    level: 'Advanced',
    description: 'Architecting modern, component-driven single page applications with declarative UI, custom hooks, reactive state, and seamless API consumption.',
    points: [
      'Component lifecycle, state management, and custom hooks (useState, useEffect, useMemo)',
      'Modular component architectures and reusable UI design systems',
      'Modern tooling workflows with Vite, TypeScript, and Tailwind CSS',
      'Client-side routing, optimistic UI updates, and performant virtual DOM rendering'
    ],
    masteryIndex: 86
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'kevin',
    quote: '"Aaron understood our brand aesthetic right from the first WhatsApp message. He turned our outdated inquiry page into a lightning fast form query portal that tripled our weekly client submissions."',
    name: 'Kevin Mwangi',
    role: 'Retail Operations Lead',
    company: 'Nexus Commercial Supplies',
    initials: 'KM'
  },
  {
    id: 'brenda',
    quote: '"His attention to mobile responsiveness is exceptional. Whether viewing on an iPhone or an Android tablet, the layouts never broke. True dedication to client taste and satisfaction."',
    name: 'Brenda Otieno',
    role: 'Digital Marketing Strategist',
    company: 'Horizon Brand Studio',
    initials: 'BO'
  },
  {
    id: 'david',
    quote: '"Aaron takes feedback positively and makes changes instantly. His clean semantic code made it super easy for our back-end engineer to hook up database API endpoints without friction."',
    name: 'David Kariuki',
    role: 'Agency Founder & Designer',
    company: 'Kariuki Interactive Media',
    initials: 'DK'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How fast can we launch my new website?',
    answer: 'Standard landing pages and portfolio showcases typically ship within 5 to 7 business days from brief sign-off. More comprehensive systems like multi-step job boards or product catalogs take 2 to 3 weeks depending on asset readiness.'
  },
  {
    question: 'What are your payment terms and milestones?',
    answer: 'I work with structured client-friendly milestones: 40% initial commitment deposit to commence architecture & wireframing, 30% upon staging demo approval, and the final 30% upon domain deployment and complete source code handover.'
  },
  {
    question: 'Will my website work properly on smartphones and tablets?',
    answer: 'Absolutely. Every layout I craft is mobile-first tested across physical iPhone, Android, and iPad viewports. I ensure touch targets are at least 44px, typography is crisp, and no horizontal overflow occurs.'
  },
  {
    question: 'Do you offer post-launch maintenance and updates?',
    answer: 'Yes! Every project includes 30 days of complimentary post-launch support covering bug fixes, minor text/image updates, and performance checks. Ongoing retainer options are also available.'
  },
  {
    question: 'Can you integrate with existing databases or backend APIs?',
    answer: 'Yes. I write clean, modular client-side data services using modern JavaScript Fetch/Axios. I can seamlessly connect form payloads, product catalogs, and user inputs to RESTful APIs, Node.js endpoints, or Firebase.'
  }
];
