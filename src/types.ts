export interface Site {
  id: number;
  website: string;
  niche: string;
  da: number;
  dr: number;
  traffic: string;
  linkType: string;
  price: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
