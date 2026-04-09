export type ContentAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type HighlightItem = {
  label: string;
  value: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  actions: ContentAction[];
  highlights: HighlightItem[];
};

export type FeatureItem = {
  tag: string;
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  description: string;
  featured: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};
