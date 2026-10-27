export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & RAG' | 'Full-Stack' | 'DevOps & Cloud';
  description: string;
  problem: string;
  solution: string;
  features: string[];
  role: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  evaluation?: {
    faithfulness?: number;
    answerRelevancy?: number;
    contextPrecision?: number;
    contextRecall?: number;
    answerCorrectness?: number;
    testSize?: string;
    note?: string;
  };
  metrics?: Array<{ label: string; value: string }>;
  academicContext?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  type: 'Employment' | 'Internship' | 'Training';
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  outcomes: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  cgpa?: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level: 'Advanced' | 'Proficient' | 'Working';
  category: string;
}

export interface SkillCategory {
  title: string;
  identifier: string;
  description: string;
  skills: SkillItem[];
}

export interface ResearchInterest {
  title: string;
  shortDesc: string;
  context: string;
  keyQuestion: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  country: string;
  github: string;
  linkedin: string;
  cvPdf: string;
  aboutStory: string[];
  stats: {
    label: string;
    value: string;
    meta: string;
  }[];
}
