export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Stat {
  value: string
  label: string
  source?: string
}

export interface PricingTier {
  name: string
  price: string
  priceRange?: string
  description: string
  hosting: string
  features: string[]
  featured?: boolean
  cta?: string
}

export interface BranchenData {
  slug: string
  title: string
  headline: string
  tagline: string
  icon: string
  stat: string
  statLabel: string
  challenges: { title: string; description: string }[]
  stats: Stat[]
  captures: string[]
  packageName: string
  packagePrice: string
  packageFeatures: string[]
  faqs: { question: string; answer: string }[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface ComparisonRow {
  feature: string
  signatour: string
  matterport: string
  ogulo: string
  signatourWins?: boolean
}

export interface AddOn {
  name: string
  price: string
  nutzen: string
  hinweis?: string
}

export interface BranchenPackage {
  name: string
  price: string
  description: string
}
