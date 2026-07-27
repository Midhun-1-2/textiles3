export type Product = {
  id: string;
  name: string;
  category: string;
  fabric: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: 'New' | 'Bestseller' | 'Limited' | 'Bridal';
  colors: string[];
};

const img = (id: number, w = 800, h = 1100) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const categories = [
  {
    id: 'silk',
    name: 'Silk Sarees',
    tagline: 'Lustrous heritage weaves',
    image: img(1297483, 600, 800),
  },
  {
    id: 'bridal',
    name: 'Bridal Collection',
    tagline: 'For your once-in-a-lifetime',
    image: img(1345352, 600, 800),
  },
  {
    id: 'banarasi',
    name: 'Banarasi',
    tagline: 'Banaras loomed in gold',
    image: img(1999895, 600, 800),
  },
  {
    id: 'kanjivaram',
    name: 'Kanjivaram',
    tagline: 'South Indian artistry',
    image: img(2723623, 600, 800),
  },
  {
    id: 'chiffon',
    name: 'Chiffon & Georgette',
    tagline: 'Light, fluid, effortless',
    image: img(2531734, 600, 800),
  },
  {
    id: 'cotton',
    name: 'Cotton & Handloom',
    tagline: 'Everyday grace',
    image: img(19664432, 600, 800),
  },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Meenakshi Kanjivaram Silk',
    category: 'Kanjivaram',
    fabric: 'Pure Mulberry Silk',
    price: 18900,
    originalPrice: 24000,
    rating: 4.9,
    reviews: 214,
    image: img(1297483),
    badge: 'Bestseller',
    colors: ['#9e3242', '#cf9920', '#1f3a2e'],
  },
  {
    id: 'p2',
    name: 'Roshni Banarasi Brocade',
    category: 'Banarasi',
    fabric: 'Katan Silk with Zari',
    price: 24500,
    originalPrice: 29500,
    rating: 4.8,
    reviews: 156,
    image: img(1999895),
    badge: 'New',
    colors: ['#b94855', '#e4b33b', '#5e1e28'],
  },
  {
    id: 'p3',
    name: 'Ananya Bridal Red',
    category: 'Bridal',
    fabric: 'Tussar Silk with Zardozi',
    price: 52000,
    originalPrice: 64000,
    rating: 5.0,
    reviews: 98,
    image: img(1345352),
    badge: 'Bridal',
    colors: ['#822834', '#cf9920', '#3c151b'],
  },
  {
    id: 'p4',
    name: 'Saanjh Chiffon Drape',
    category: 'Chiffon & Georgette',
    fabric: 'Pure Chiffon',
    price: 6400,
    originalPrice: 8200,
    rating: 4.7,
    reviews: 342,
    image: img(2531734),
    badge: 'Bestseller',
    colors: ['#cf6b75', '#ddc9a6', '#9c3d2a'],
  },
  {
    id: 'p5',
    name: 'Nilambari Cotton Handloom',
    category: 'Cotton & Handloom',
    fabric: 'Handloom Cotton',
    price: 4200,
    rating: 4.6,
    reviews: 187,
    image: img(19664432),
    badge: 'New',
    colors: ['#1f3a2e', '#e4b33b', '#efe3cd'],
  },
  {
    id: 'p6',
    name: 'Gauri Tussar Gold',
    category: 'Silk Sarees',
    fabric: 'Tussar Silk',
    price: 12800,
    originalPrice: 16000,
    rating: 4.8,
    reviews: 121,
    image: img(2723623),
    badge: 'Limited',
    colors: ['#7e5612', '#b94855', '#3c151b'],
  },
  {
    id: 'p7',
    name: 'Ishita Organza Bloom',
    category: 'Chiffon & Georgette',
    fabric: 'Pure Organza',
    price: 9800,
    originalPrice: 12000,
    rating: 4.9,
    reviews: 167,
    image: img(2559152),
    badge: 'New',
    colors: ['#cf6b75', '#eeb29a', '#f6d3c3'],
  },
  {
    id: 'p8',
    name: 'Vasundhara Patola',
    category: 'Silk Sarees',
    fabric: 'Double Ikat Patola',
    price: 38500,
    originalPrice: 46000,
    rating: 5.0,
    reviews: 73,
    image: img(2431224),
    badge: 'Limited',
    colors: ['#9e3242', '#7e5612', '#1f3a2e'],
  },
];

export const newArrivals: Product[] = [
  {
    id: 'n1',
    name: 'Kavya Mysore Silk',
    category: 'Silk Sarees',
    fabric: 'Mysore Silk',
    price: 15600,
    rating: 4.8,
    reviews: 41,
    image: img(1446161),
    badge: 'New',
    colors: ['#822834', '#cf9920'],
  },
  {
    id: 'n2',
    name: 'Lavanya Linen Saree',
    category: 'Cotton & Handloom',
    fabric: 'Pure Linen',
    price: 5400,
    rating: 4.7,
    reviews: 28,
    image: img(2450195),
    badge: 'New',
    colors: ['#ddc9a6', '#1f3a2e'],
  },
  {
    id: 'n3',
    name: 'Riddhi Georgette Ombre',
    category: 'Chiffon & Georgette',
    fabric: 'Georgette',
    price: 7200,
    rating: 4.9,
    reviews: 52,
    image: img(2395961),
    badge: 'New',
    colors: ['#cf6b75', '#eeb29a'],
  },
  {
    id: 'n4',
    name: 'Saumya Chanderi',
    category: 'Cotton & Handloom',
    fabric: 'Chanderi Cotton-Silk',
    price: 4800,
    rating: 4.6,
    reviews: 19,
    image: img(2517861),
    badge: 'New',
    colors: ['#1f3a2e', '#e4b33b'],
  },
];

export const formatINR = (n: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
