export interface NavItem {
  label: string;
  href: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface SiteContent {
  name: string;
  tagline: string;
  cta: string;
  heroImage: string;
  heroImageAlt: string;
  nav: NavItem[];
  contact: {
    whatsapp: string;
    email: string;
    location: string;
    intro: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    highlights: Highlight[];
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    canonical?: string;
  };
}

export interface Lesson {
  icon: string;
  title: string;
  description: string;
  levels: string;
}

export interface Testimonial {
  text: string;
  author: string;
  origin: string;
}
