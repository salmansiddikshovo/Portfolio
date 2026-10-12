export interface SocialLink {
  platform: "github" | "linkedin" | "facebook" | "instagram";
  name: string;
  url: string;
  ariaLabel: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
  details?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface ProfileData {
  name: string;
  initials: string;
  role: string;
  badge: string;
  tagline: string;
  bio: string[];
  university: string;
  location: string;
  languages: string[];
  email: string;
  resumeUrl: string;
  avatarUrl: string;
  githubUsername: string;
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
  socialLinks: SocialLink[];
  education: EducationItem[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  fork: boolean;
  language: string | null;
  topics?: string[];
  updated_at: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

export interface ContactApiResponse {
  ok: boolean;
  message?: string;
}
