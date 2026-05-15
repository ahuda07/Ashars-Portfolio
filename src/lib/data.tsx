import {
  Bot,
  Boxes,
  Braces,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Map,
  Monitor,
  Network,
  PenTool,
  SearchCode,
  Server,
  Terminal,
  Workflow,
} from 'lucide-react';

import {
  ExperienceDetails,
  ProjectDetails,
  SkillCategory,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

import ProjectPirateSearch from '/public/images/project-pirate-search.png';
import ProjectSportsPlayerScout from '/public/images/project-sports-player-scout.png';
import ProjectTrailblazer from '/public/images/project-trailblazer.png';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/ahuda07',
  LINKEDIN: 'https://www.linkedin.com/in/asharhuda/',
  EMAIL: 'mailto:hudaau@uci.edu',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Resume',
    href: '#resume',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: EXTERNAL_LINKS.GITHUB,
  },
  {
    icon: Linkedin,
    url: EXTERNAL_LINKS.LINKEDIN,
  },
  {
    icon: Mail,
    url: EXTERNAL_LINKS.EMAIL,
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  { label: 'Python', icon: Terminal },
  { label: 'C++', icon: Braces },
  { label: 'Java', icon: Code2 },
  {
    label: 'JavaScript',
    icon: FileCode2,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'TypeScript',
    icon: FileCode2,
    url: 'https://www.typescriptlang.org/',
  },
  { label: 'SQL', icon: Database },
  { label: 'HTML/CSS', icon: Monitor },
  { label: 'React.js', icon: Code2, url: 'https://react.dev/' },
  { label: 'Node.js', icon: Server, url: 'https://nodejs.org/en' },
  { label: 'FastAPI', icon: Network },
  { label: 'Bootstrap', icon: Boxes },
  { label: 'Vite', icon: Workflow },
  { label: 'NumPy', icon: BrainCircuit },
  { label: 'PyTorch', icon: BrainCircuit },
  { label: 'OpenCV', icon: SearchCode },
  { label: 'BeautifulSoup', icon: SearchCode },
  { label: 'NLTK', icon: SearchCode },
  { label: 'Gradio', icon: Bot },
  { label: 'MongoDB', icon: Database, url: 'https://www.mongodb.com/' },
  { label: 'REST APIs', icon: Network },
  { label: 'Git', icon: GitBranch, url: 'https://git-scm.com/' },
  { label: 'GitHub', icon: Github },
  { label: 'Azure', icon: Cloud },
  { label: 'Jupyter Notebook', icon: FileCode2 },
  { label: 'Figma', icon: PenTool, url: 'https://www.figma.com/' },
  { label: 'Google Maps API', icon: Map },
  { label: 'MCP', icon: Workflow },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core programming languages for backend, systems, and web.',
    skills: [
      TECHNOLOGIES[0],
      TECHNOLOGIES[1],
      TECHNOLOGIES[2],
      TECHNOLOGIES[3],
      TECHNOLOGIES[4],
      TECHNOLOGIES[5],
      TECHNOLOGIES[6],
    ],
  },
  {
    title: 'Full-Stack',
    description: 'Frontend, API, and product-building frameworks.',
    skills: [
      TECHNOLOGIES[7],
      TECHNOLOGIES[8],
      TECHNOLOGIES[9],
      TECHNOLOGIES[10],
      TECHNOLOGIES[11],
      TECHNOLOGIES[19],
    ],
  },
  {
    title: 'AI & Data',
    description: 'ML, NLP, search, and AI application tooling.',
    skills: [
      TECHNOLOGIES[12],
      TECHNOLOGIES[13],
      TECHNOLOGIES[14],
      TECHNOLOGIES[15],
      TECHNOLOGIES[16],
      TECHNOLOGIES[17],
      TECHNOLOGIES[26],
    ],
  },
  {
    title: 'Databases & Tools',
    description: 'Databases, collaboration, cloud, notebooks, and design.',
    skills: [
      TECHNOLOGIES[18],
      TECHNOLOGIES[20],
      TECHNOLOGIES[21],
      TECHNOLOGIES[22],
      TECHNOLOGIES[23],
      TECHNOLOGIES[24],
      TECHNOLOGIES[25],
    ],
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logoAlt: 'Champions Funding',
    organization: 'Champions Funding',
    position: 'Software Engineer - Senior Capstone',
    startDate: new Date(2026, 0),
    endDate: new Date(2026, 5),
    summary: [
      'Building LoanFit CoPilot, a full-stack AI-driven loan assistant for loan officers.',
      'Developing a React and TypeScript chat interface with real-time interaction, document uploads, and session persistence.',
      'Designing MongoDB schemas for sessions, chat history, and uploaded financial documents.',
      'Integrating a FastAPI backend with an AI pipeline that processes loan applications and returns automated risk-assessment style guidance.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'LoanFit CoPilot',
    featured: true,
    previewVariant: 'loanfit',
    description:
      'A full-stack AI loan assistant that helps loan officers analyze borrower scenarios, manage chat sessions, upload financial documents, and receive AI-powered guidance.',
    technologies: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'MongoDB',
      'AI/LLM pipeline',
    ],
  },
  {
    name: 'Pirate Search Engine',
    previewImage: ProjectPirateSearch,
    previewImagePosition: '50% 48%',
    description:
      'Built a multithreaded crawler and search engine indexing 10,000+ ICS web pages with URL deduplication, trap detection, redirect handling, tf-idf ranking, HITS authority scoring, SimHash near-duplicate detection, and inverted indexes. Delivered sub-300ms query responses.',
    technologies: ['Python', 'BeautifulSoup', 'NLTK'],
  },
  {
    name: 'Trailblazer - Biking Trail Finder',
    previewImage: ProjectTrailblazer,
    previewImagePosition: '50% 62%',
    description:
      'Full-stack trail discovery app with real-time route visualization, authentication, saved preferences, image uploads, and filtering by difficulty, distance, and ratings.',
    technologies: [
      'React',
      'JavaScript',
      'MongoDB',
      'Google Maps API',
      'Bootstrap',
    ],
  },
  {
    name: 'SportsPlayerScout',
    previewImage: ProjectSportsPlayerScout,
    previewImagePosition: '50% 48%',
    description:
      'Multi-agent sports analytics app that analyzes athlete performance data and generates scouting reports. Includes analyzer, developer, and tester agents, model usage tracking, structured JSON reporting, and a Gradio interface.',
    technologies: ['Python', 'Gradio', 'Multi-Agent Systems', 'MCP'],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [];
