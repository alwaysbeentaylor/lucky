export interface Artist {
  id: number;
  name: string;
  piece: string;
  type: 'Grillz' | 'Chain' | 'Pendant' | 'Ring';
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  tag?: string;
}

export interface SocialPost {
  id: number;
  image: string;
  caption: string;
  likes: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}