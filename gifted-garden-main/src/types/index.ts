export type ScreenId =
  | 'home'
  | 'services'
  | 'work'
  | 'gallery'
  | 'faq'
  | 'areas'
  | 'about'
  | 'contact';

export interface ScreenMeta {
  id: ScreenId;
  order: number;
  title: string;
  shortTitle: string;
  description: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  image: string;
  badgeText?: string;
  hasDetailPage?: boolean;
  idealFor?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  timeAgo: string;
  serviceTag: string;
  title: string;
  content: string;
  source: 'Google Review' | 'Checkatrade' | 'Facebook Rec' | 'Direct Client';
  verified: boolean;
  lawnImage?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  funFact: string;
  image: string;
  badge: string;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category: 'all' | 'booking' | 'treatments' | 'aftercare' | 'weather';
  tags?: string[];
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  location: string;
  beforeLabel?: string;
  afterLabel?: string;
  timeframe: string;
  treatments: string;
  resultMetric: string;
  beforeImage: string;
  afterImage: string;
  beforeDescription?: string;
  afterDescription?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'lawns' | 'hedges-trees' | 'ground-work';
  categoryLabel: string;
  image: string;
  location: string;
  description?: string;
}

export interface PostcodeArea {
  code: string;
  town: string;
  typicalDispatchDay: string;
  inRadius: boolean;
  image?: string;
}