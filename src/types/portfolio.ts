export type ScreenType = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'contact';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Application' | 'Personal Brand' | 'Interactive Tool' | 'E-Commerce';
  systemType: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  status: string;
  actionText: string;
  caseStudyNumber?: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type: string;
  summary: string;
  deliverables: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  badge: string;
  level: string;
  description: string;
  points: string[];
  masteryIndex: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
