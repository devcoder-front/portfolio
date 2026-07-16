/**
 * Single source of truth for all résumé-derived content.
 * Every string here is transcribed or lightly rephrased (never invented) from
 * Abhishek Sharma's résumé. Do not add facts, metrics, or claims that are not
 * traceable back to that document.
 */
import type {
  Award,
  EducationEntry,
  ExperienceEntry,
  HeroMetric,
  LanguageEntry,
  Profile,
  ProjectEntry,
  SkillCategory,
  SocialLink
} from '../models/resume.model';

export const PROFILE: Profile = {
  name: 'Abhishek Sharma',
  initials: 'AS',
  title: 'Senior Software Engineer | Technical Lead | Frontend Architecture & AI-Assisted Engineering',
  tagline: '9+ Years · Angular & React · FinTech · Java (API Integration & Microservices Training) · AI-Assisted Engineering Leadership',
  summary:
    'Senior Software Engineer with 9+ years architecting enterprise Angular and React applications across FinTech and large-scale platforms, including client engagements with Google, S&P Global, and British Telecom serving 30M+ users combined. Regularly integrates with Java-based backend services — handling API integration and production root-cause analysis — and completed formal Java and Microservices training during onboarding at Infosys, alongside hands-on SQL and NoSQL project experience. Leads frontend architecture, testing strategy, and AI-assisted engineering adoption: introduced LLM-based development workflows at S&P Global together with responsible-AI and data-sensitivity validation standards, and raised a compliance platform’s unit test coverage from 70% to 99%.',
  location: 'Delhi NCR, India',
  email: 'abhisheks647@gmail.com',
  currentRole: 'Software Architect',
  currentCompany: 'MBS Global (Client: S&P Global)',
  yearsOfExperience: '9+'
};

// Phone number intentionally excluded from public display per owner preference —
// available on the downloadable resume PDF only.
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'Email', href: 'mailto:abhisheks647@gmail.com', icon: 'email' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abhishek-sharma-293538191',
    icon: 'linkedin'
  },
  { label: 'Location', href: '', icon: 'location' }
];

export const HERO_METRICS: readonly HeroMetric[] = [
  { value: 9, suffix: '+', label: 'Years of experience' },
  { value: 30, suffix: 'M+', label: 'Users served worldwide' },
  { value: 40, suffix: '%', label: 'Peak performance improvement' },
  { value: 99, suffix: '%', label: 'Test coverage achieved' }
];

export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    id: 'mbs-global',
    company: 'MBS Global',
    companyContext: 'Client: S&P Global · Gurgaon',
    role: 'Software Architect',
    startDate: 'Sep 2025',
    endDate: 'Present',
    isCurrent: true,
    projectTag: 'CLO Compliance Platform · FinTech · B2B · LLM / AI Agents',
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'LLM / AI Agents', 'Python DSL'],
    highlights: [
      'Led end-to-end delivery of a B2B regulatory compliance platform, partnering with Product, QA, and Backend engineering to define API contracts and scalable financial workflows.',
      'Architected a Stress Testing framework enabling Python DSL-based rule simulation, improving regulatory validation by 30%.',
      'Improved application performance by 20% through session management, intelligent auto-logout, and Angular rendering optimization.',
      "Introduced AI-assisted engineering workflows using LLMs into the team's delivery process, establishing data-sensitivity and responsible-AI usage guidelines and validation standards alongside adoption to accelerate feature development.",
      'Raised unit test coverage from 70% to 99%, enabling releases with zero regression defects.',
      'Established component design standards and code-review practices adopted across the team.'
    ]
  },
  {
    id: 'hcltech-google',
    company: 'HCLTech',
    companyContext: 'Client: Google · Bangalore',
    role: 'Technical Lead',
    startDate: 'Apr 2023',
    endDate: 'Aug 2025',
    isCurrent: false,
    projectTag: 'Google Nest Developer Console (NDC) · 10M+ Users · Micro Frontend',
    technologies: ['Angular 18', 'Angular Material', 'Micro Frontend', 'CI/CD'],
    highlights: [
      'Led frontend development for the Google Nest Developer Console, delivering Angular applications for 10M+ users on a micro-frontend architecture.',
      'Contributed to high-level system design for major NDC features, partnering with backend engineering on API design and with Product on requirements.',
      'Modernized the platform with Angular Material and WCAG-compliant components, improving rendering speed by 25%.',
      'Delivered OTA device management and Cloud-to-Cloud integration workflows, optimized via lazy loading and code splitting.',
      'Resolved 200+ P0/P1 production issues through direct collaboration with backend teams on root-cause analysis.',
      'Mentored engineers and drove architecture and code-review standards across the team.'
    ]
  },
  {
    id: 'globallogic-google',
    company: 'GlobalLogic',
    companyContext: 'Client: Google · Bangalore',
    role: 'Associate Consultant',
    startDate: 'Nov 2021',
    endDate: 'Mar 2023',
    isCurrent: false,
    projectTag: 'Google Qplus Platform & Chrome Extension',
    technologies: ['Angular 8+', 'TypeScript', 'REST APIs', 'Chrome Extensions'],
    highlights: [
      "Developed enterprise web applications and Chrome Extensions for Google's QPlus platform, improving responsiveness by 40%.",
      'Designed reusable metadata-driven dynamic forms and shared component libraries, translating Figma designs into production UI.',
      'Reduced API failures and production defects through close collaboration with backend engineers on resilient API integration and root-cause analysis.'
    ]
  },
  {
    id: 'mindtree-wolters-kluwer',
    company: 'Mindtree',
    companyContext: 'Client: Wolters Kluwer · Bangalore',
    role: 'Module Lead',
    startDate: 'Dec 2020',
    endDate: 'Nov 2021',
    isCurrent: false,
    projectTag: 'Employee Daily Time Collection (EDTC) · 20K+ Users',
    technologies: ['React', 'Redux', 'Azure AD', 'OAuth2 SSO'],
    highlights: [
      'Led a 6-member Agile team to deliver a workforce management platform built in React, serving 20K+ enterprise users.',
      'Improved frontend performance by 25% and API response time by 20% using Redux, caching, and HTTP interceptor patterns.',
      'Implemented Azure AD OAuth2 Single Sign-On and delivered accessible, internationalized applications per WCAG standards.'
    ]
  },
  {
    id: 'infosys-bt',
    company: 'Infosys',
    companyContext: 'Client: British Telecom · Pune',
    role: 'Senior Software Engineer',
    startDate: 'Jan 2017',
    endDate: 'Dec 2020',
    isCurrent: false,
    projectTag: 'System Assurance UI · Speed Test · Broadband Checker · 20M+ Users',
    technologies: ['Angular', 'TypeScript', 'MVVM', 'Java (API Integration)', 'SQL', 'NoSQL'],
    highlights: [
      'Developed enterprise-scale customer applications for British Telecom, supporting 20M+ users with responsive, WCAG-compliant UIs.',
      'Built System Assurance UI, BT Speed Test, and Broadband Availability Checker using Angular, TypeScript, and MVVM architecture, integrating with Java-based backend APIs.',
      'Performed root-cause analysis on production issues in collaboration with backend teams, and completed 6 months of formal Java and Microservices training as part of Infosys onboarding.',
      'Worked with SQL and NoSQL data stores to support application data requirements.',
      'Improved software quality through reusable components, performance optimization, and cross-functional Agile collaboration.'
    ]
  }
];

export const PROJECTS: readonly ProjectEntry[] = [
  {
    id: 'clo-compliance-platform',
    name: 'CLO Compliance Platform',
    organization: 'MBS Global · Client: S&P Global',
    period: 'Sep 2025 – Present',
    problem:
      'Financial institutions needed a B2B compliance platform to validate trades against regulatory rules, with a way to simulate rule changes against historical datasets before enforcing them.',
    solution:
      'Architected a Stress Testing framework that runs Python DSL-based rule simulations against historical datasets, and led end-to-end platform delivery with Product Owners, Business Analysts, QA, and Backend Engineers.',
    architecture:
      'Clean architecture with reusable component design, session management, and an intelligent auto-logout layer for security-sensitive financial workflows.',
    techStack: ['Angular', 'TypeScript', 'JavaScript', 'LLM / AI Agents', 'Python DSL'],
    impact: [
      'Improved regulatory validation by 30%',
      'Improved application performance by 20%',
      'Raised unit test coverage from 70% to 99% with zero regression defects'
    ],
    challenges:
      'Balancing rapid feature delivery with the strict correctness and security requirements of a financial-compliance system, while introducing AI-assisted engineering workflows across the team.',
    deliverables: ['Stress Testing framework', 'Session management & auto logout', 'Reusable component architecture'],
    repoAvailable: false,
    demoAvailable: false
  },
  {
    id: 'google-nest-developer-console',
    name: 'Google Nest Developer Console (NDC)',
    organization: 'HCLTech · Client: Google',
    period: 'Apr 2023 – Aug 2025',
    problem:
      'Google needed a modernized developer console, serving 10M+ users, capable of OTA device management and Cloud-to-Cloud integrations at scale.',
    solution:
      'Led frontend development of the console, modernizing it with Angular Material, WCAG-compliant components, and a Micro Frontend architecture built on reusable design systems.',
    architecture:
      'Micro Frontend architecture with lazy loading, code splitting, and efficient change detection to sustain performance at scale.',
    techStack: ['Angular 18', 'Angular Material', 'Micro Frontend', 'CI/CD'],
    impact: [
      'Improved page performance and rendering speed by 25%',
      'Resolved 200+ P0/P1 production issues',
      'Achieved 99%+ test coverage with zero-regression releases'
    ],
    challenges:
      'Modernizing a large-scale, 10M+ user platform without service disruption, while strengthening CI/CD pipelines and mentoring engineers through architecture reviews.',
    deliverables: ['OTA device management workflows', 'Cloud-to-Cloud integration', 'WCAG-compliant design system'],
    repoAvailable: false,
    demoAvailable: false
  },
  {
    id: 'google-qplus',
    name: 'Google Qplus Platform & Chrome Extension',
    organization: 'GlobalLogic · Client: Google',
    period: 'Nov 2021 – Mar 2023',
    problem:
      "Google's QPlus platform needed enterprise web applications and companion Chrome Extensions with resilient REST API integration.",
    solution:
      'Built the applications and extensions in Angular and TypeScript, and designed reusable metadata-driven dynamic forms and shared component libraries — translating Figma designs into production UI — to speed up future feature delivery.',
    architecture:
      'Metadata-driven dynamic form architecture with shared, reusable component libraries for scalability and maintainability.',
    techStack: ['Angular 8+', 'TypeScript', 'REST APIs', 'Chrome Extensions'],
    impact: [
      'Improved application responsiveness by 40%',
      'Reduced API failures and production defects through optimized data transformation'
    ],
    challenges:
      'Designing a metadata-driven form system generic enough to serve multiple use cases while keeping API integration resilient under production load.',
    deliverables: ['Metadata-driven dynamic forms', 'Shared component library', 'Chrome Extension suite'],
    repoAvailable: false,
    demoAvailable: false
  },
  {
    id: 'edtc-wolters-kluwer',
    name: 'Employee Daily Time Collection (EDTC)',
    organization: 'Mindtree · Client: Wolters Kluwer',
    period: 'Dec 2020 – Nov 2021',
    problem:
      'Wolters Kluwer needed a workforce management platform for 20K+ enterprise users with secure, single sign-on access.',
    solution:
      'Led a 6-member Agile team delivering the platform end-to-end in React, implementing Azure AD OAuth2 Single Sign-On and Redux-driven state management.',
    architecture:
      'React front end with Redux state management, HTTP interceptors, and caching, secured via Azure AD OAuth2 SSO.',
    techStack: ['React', 'Redux', 'Azure AD', 'OAuth2 SSO'],
    impact: [
      'Improved frontend performance by 25%',
      'Improved API response time by 20%',
      'Delivered accessible, internationalized UI following WCAG standards'
    ],
    challenges:
      'Coordinating a 6-member Agile team across architecture and delivery while meeting enterprise security and accessibility requirements simultaneously.',
    deliverables: ['Azure AD OAuth2 SSO', 'Redux state management layer', 'WCAG-compliant, internationalized UI'],
    repoAvailable: false,
    demoAvailable: false
  },
  {
    id: 'bt-system-assurance',
    name: 'System Assurance UI, BT Speed Test & Broadband Checker',
    organization: 'Infosys · Client: British Telecom',
    period: 'Jan 2017 – Dec 2020',
    problem:
      'British Telecom required responsive, WCAG-compliant customer applications capable of supporting 20M+ users.',
    solution:
      'Built System Assurance UI, BT Speed Test, and the Broadband Availability Checker using Angular, TypeScript, and MVVM architecture, integrating with Java-based backend APIs and SQL/NoSQL data stores.',
    architecture: 'MVVM architecture with reusable component development across the three applications.',
    techStack: ['Angular', 'TypeScript', 'MVVM', 'Java (API Integration)', 'SQL', 'NoSQL'],
    impact: [
      'Supported 20M+ users',
      'Improved software quality through reusable component development and performance optimization',
      'Completed 6 months of formal Java and Microservices training during Infosys onboarding'
    ],
    challenges:
      'Delivering three distinct, high-traffic customer-facing applications while maintaining consistent quality and WCAG compliance across all of them.',
    deliverables: ['System Assurance UI', 'BT Speed Test', 'Broadband Availability Checker'],
    repoAvailable: false,
    demoAvailable: false
  }
];

export const SKILLS: readonly SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      'Angular (v2–v21)',
      'React',
      'Redux',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'SCSS/SASS',
      'RxJS',
      'NgRx',
      'Angular Material',
      'Bootstrap',
      'jQuery'
    ]
  },
  {
    category: 'Backend & Data Exposure',
    items: ['Java (API integration & production debugging)', 'Microservices (formal training, Infosys)', 'SQL', 'NoSQL', 'REST APIs', 'Node.js']
  },
  {
    category: 'Architecture',
    items: [
      'Micro Frontends',
      'Component-Based Architecture',
      'MVVM',
      'State Management',
      'Responsive Web Design',
      'Design Systems'
    ]
  },
  {
    category: 'AI / LLM Engineering',
    items: [
      'AI-Assisted Development',
      'LLM Integration',
      'Prompt Engineering',
      'AI Agents',
      'Responsible AI / Data-Sensitivity Validation',
      'GitHub Copilot',
      'Claude Code'
    ]
  },
  {
    category: 'Performance Engineering',
    items: [
      'Lazy Loading',
      'Change Detection Optimization',
      'Code Splitting',
      'Bundle Optimization',
      'Caching',
      'Rendering Optimization'
    ]
  },
  {
    category: 'Design & Collaboration',
    items: ['Figma (UI design collaboration)', 'Cross-functional API design with backend engineering']
  },
  {
    category: 'Testing',
    items: [
      'Jasmine',
      'Karma',
      'Unit Testing',
      'Integration Testing',
      'Test-Driven Development (TDD)',
      'Code Reviews',
      'Static Code Analysis'
    ]
  },
  {
    category: 'Security',
    items: ['Azure AD', 'OAuth 2.0', 'Single Sign-On (SSO)', 'Authentication', 'Authorization', 'REST Security']
  },
  {
    category: 'DevOps / Tools',
    items: ['Git/GitHub (6+ yrs)', 'Jenkins CI/CD (6+ yrs)', 'Jira', 'Chrome DevTools', 'VS Code', 'Linux CLI']
  },
  {
    category: 'Problem Solving',
    items: ['Data Structures & Algorithms (active LeetCode practice)']
  }
];

export const AWARDS: readonly Award[] = [
  {
    title: 'AHM Award',
    description: 'HCLTech — for outstanding contribution to the Google Nest Developer Console platform.'
  },
  {
    title: 'Spot-on Mastermind Award',
    description: 'For delivering quality products with Angular Jumpstart components under a tight deadline.'
  },
  {
    title: 'Spot-on Hats-Off Award',
    description: 'For delivering high-quality, complex frontend modules on time to the client.'
  },
  {
    title: 'Problem Solver Gracias Award',
    description: 'Recognizing hard work, commitment, and leadership skills.'
  },
  {
    title: 'Spot-on A-Team Award',
    description: 'For the AngularJS → Angular 11 scope rewrite with full WCAG accessibility compliance.'
  },
  {
    title: 'Infy Award',
    description: 'For designing and developing a responsive UI from scratch (British Telecom).'
  }
];

export const EDUCATION: EducationEntry = {
  degree: 'Bachelor of Engineering (B.E.) in Medical Electronics',
  institution: 'M. S. Ramaiah Institute of Technology (MSRIT), Bangalore',
  period: '2012 – 2016'
};

export const LANGUAGES: readonly LanguageEntry[] = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native' }
];
