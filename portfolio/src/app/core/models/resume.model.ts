export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: 'linkedin' | 'github' | 'email' | 'phone' | 'location';
}

export interface Profile {
  readonly name: string;
  readonly initials: string;
  readonly title: string;
  readonly tagline: string;
  readonly summary: string;
  readonly location: string;
  readonly email: string;
  readonly currentRole: string;
  readonly currentCompany: string;
  readonly yearsOfExperience: string;
}

export interface HeroMetric {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
}

export interface ExperienceEntry {
  readonly id: string;
  readonly company: string;
  readonly companyContext: string;
  readonly role: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly isCurrent: boolean;
  readonly projectTag: string;
  readonly technologies: readonly string[];
  readonly highlights: readonly string[];
}

export interface ProjectEntry {
  readonly id: string;
  readonly name: string;
  readonly organization: string;
  readonly period: string;
  readonly problem: string;
  readonly solution: string;
  readonly architecture: string;
  readonly techStack: readonly string[];
  readonly impact: readonly string[];
  readonly challenges: string;
  readonly deliverables: readonly string[];
  readonly repoAvailable: boolean;
  readonly demoAvailable: boolean;
}

export interface SkillCategory {
  readonly category: string;
  readonly items: readonly string[];
}

export interface Award {
  readonly title: string;
  readonly description: string;
}

export interface EducationEntry {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
}

export interface LanguageEntry {
  readonly name: string;
  readonly level: string;
}

export interface TestimonialEntry {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly relationship: string;
  readonly date: string;
  readonly quote: string;
}
