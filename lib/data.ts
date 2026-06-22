export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export const categories = ["Abstract", "Cyberpunk", "Surrealism", "Landscape"];

export const products: Product[] = [
  {
    id: "1",
    title: "Neon Genesis",
    description: "A vibrant cyberpunk digital landscape glowing with neon hues.",
    price: 49.99,
    imageUrl: "https://picsum.photos/seed/neo/800/800",
    category: "Cyberpunk",
  },
  {
    id: "2",
    title: "Ethereal Echoes",
    description: "Abstract representation of sound waves in a serene color palette.",
    price: 35.00,
    imageUrl: "https://picsum.photos/seed/echoes/800/800",
    category: "Abstract",
  },
  {
    id: "3",
    title: "Dreamscape Horizon",
    description: "Surrealist sunset over an impossible geometric ocean.",
    price: 55.00,
    imageUrl: "https://picsum.photos/seed/dream/800/800",
    category: "Surrealism",
  },
  {
    id: "4",
    title: "Digital Alps",
    description: "Low-poly style landscape of majestic mountains.",
    price: 29.99,
    imageUrl: "https://picsum.photos/seed/alps/800/800",
    category: "Landscape",
  },
  {
    id: "5",
    title: "Quantum Flux",
    description: "Dynamic abstract art piece visualizing quantum mechanics.",
    price: 65.00,
    imageUrl: "https://picsum.photos/seed/flux/800/800",
    category: "Abstract",
  },
  {
    id: "6",
    title: "Synthwave City",
    description: "Retro-futuristic cityscape at night.",
    price: 45.00,
    imageUrl: "https://picsum.photos/seed/synth/800/800",
    category: "Cyberpunk",
  }
];
