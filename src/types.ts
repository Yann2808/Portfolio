export interface Project {
  title: string;
  image: string;
  description: string;
  responsibilities: string;
  technologies: string[];
  challenges: string;
  links: {
    github?: string;
    live?: string;
  };
  results: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  text: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

export interface Skill {
  category: string;
  items: string[];
}