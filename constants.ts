import { Artist, Product, SocialPost, TimelineEvent } from './types';

export const ARTISTS: Artist[] = [
  { id: 1, name: "Zefanio", piece: "Eerste Massive Grillz", type: "Grillz" },
  { id: 2, name: "Dopebwoy", piece: "Lucky 7 Hanger", type: "Pendant" },
  { id: 3, name: "Ronnie Flex", piece: "VVS Custom Chain", type: "Chain" },
  { id: 4, name: "Sevn Alias", piece: "Oakwood Label Piece", type: "Pendant" },
  { id: 5, name: "VIBEZ KARTEL", piece: "Custom Collection", type: "Chain" },
  { id: 6, name: "Josylvio", piece: "Hella Cash Ring", type: "Ring" },
  { id: 7, name: "Broederliefde", piece: "Team Grillz Set", type: "Grillz" },
  { id: 8, name: "Hef", piece: "Bundy Goat Pendant", type: "Pendant" },
  { id: 9, name: "Esko", piece: "Van Klasse Logo", type: "Pendant" },
];

export const PRODUCTS: Product[] = [
  { id: 'chain-cuban', title: "18k Cuban Link (5mm)", price: 1250, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=400", tag: "Bestseller" },
  { id: 'ring-signet', title: "Parbo Zegelring Classic", price: 450, image: "https://images.unsplash.com/photo-1622398925373-3f9162db8d87?auto=format&fit=crop&q=80&w=400" },
  { id: 'pendant-angel', title: "Micro Angel Hanger", price: 350, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400" },
  { id: 'grillz-single', title: "Single Gold Tooth (18k)", price: 150, image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=400", tag: "Classic" },
  { id: 'bracelet-tennis', title: "VVS Tennis Armband", price: 2800, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400", tag: "Exclusive" },
  { id: 'earrings-studs', title: "Diamond Studs (0.5ct)", price: 800, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400" },
  { id: 'chain-rope', title: "Solid Rope Chain (3mm)", price: 650, image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=400" },
  { id: 'kids-bangle', title: "Surinaamse Baby Bangle", price: 220, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80&w=400", tag: "Kids" },
];

export const TIMELINE: TimelineEvent[] = [
  { year: "Jaren '80", title: "Roots in Paramaribo", desc: "De basis van het goudsmeden. Mijn opa's legden de fundering in Suriname. Die kennis zit in ons bloed." },
  { year: "1993", title: "Grote Visserijstraat 39", desc: "Mijn vader opent Parbo Goud in Rotterdam-Delfshaven. Al 30+ jaar de spot voor de community." },
  { year: "2010", title: "Next Gen Vision", desc: "Opgegroeid in de zaak, maar geïnspireerd door US Hip-Hop. Ik wilde die 'Iced Out' cultuur naar NL brengen." },
  { year: "2015", title: "Het X-Recept", desc: "Samen met een pro tandtechnicus ontwikkelde ik de eerste échte massive grillz van NL. Geen dunne plaatjes, puur goud." },
  { year: "2017", title: "De Doorbraak", desc: "Zefanio & Dopebwoy rockten de eerste sets. De hele scene volgde. 'Lucky The Jeweler' was born." },
];

export const SOCIAL_POSTS: SocialPost[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=300", caption: "Nieuwe set voor de broer @dopebwoy. Forever grateful voor de support. 🦅✨ #luckythejeweler", likes: "12.4K" },
  { id: 2, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=300", caption: "VVS test... je weet toch. Geen cap, alleen shine. 💎🥶 #ice #rotterdam", likes: "8.2K" },
  { id: 3, image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=300", caption: "Zondag vibe in de shop. Delfshaven we zijn er. Kom langs voor je fix. 📍🔐", likes: "5.1K" },
];