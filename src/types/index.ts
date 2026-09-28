export type Language = 'uz' | 'uz_cyr' | 'ru' | 'en';

export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  category: 'robotics' | 'python' | 'web' | 'android' | 'ai' | 'education';
  technologies: string[];
  image: string;
  imageAlt: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'programming' | 'robotics' | 'appdev' | 'ai' | 'digital';
  proficiencyKey: string;
  descriptionKey: string;
  iconName: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  labelKey: string;
  sublabelKey: string;
}
