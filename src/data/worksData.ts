import work1 from '../assets/works/work1.jpeg';
import visiting1 from '../assets/works/visiting1.jpeg';
import visiting2 from '../assets/works/visiting2.jpeg';
import visiting3 from '../assets/works/visiting3.jpeg';
import visiting4 from '../assets/works/visiting4.jpeg';
import brochure1 from '../assets/works/brochure1.jpeg';
import brochure2 from '../assets/works/brochure2.jpeg';
import brochure3 from '../assets/works/brochure3.jpeg';
import brochure4 from '../assets/works/brochure4.jpeg';
import menu1 from '../assets/works/menu1.jpeg';
import menu2 from '../assets/works/menu2.jpeg';
import menu3 from '../assets/works/menu3.jpeg';
import menu4 from '../assets/works/menu4.jpeg';
import menu5 from '../assets/works/menu5.jpeg';
import catalogue1 from '../assets/works/catalogue1.jpeg';
import catalogue2 from '../assets/works/catalogue2.jpeg';
import catalogue3 from '../assets/works/catalogue3.jpeg';
import catalogue4 from '../assets/works/catalogue4.jpeg';
import label1 from '../assets/works/label1.jpeg';
import label2 from '../assets/works/label2.jpeg';
import label3 from '../assets/works/label3.jpeg';
import brochure5 from '../assets/works/brochure5.jpeg';
import brochure6 from '../assets/works/brochure6.jpeg';
import brochure7 from '../assets/works/brochure7.jpeg';
import brochure8 from '../assets/works/brochure8.jpeg';
import brochure9 from '../assets/works/brochure9.jpeg';
import brochure10 from '../assets/works/brochure10.jpeg';
import brochure11 from '../assets/works/brochure11.jpeg';
import brochure12 from '../assets/works/brochure12.jpeg';
import brochure13 from '../assets/works/brochure13.jpeg';
import brochure14 from '../assets/works/brochure14.jpeg';
import brochure15 from '../assets/works/brochure15.jpeg';
import letterhead1 from '../assets/works/letterhead1.jpeg';
import letterhead2 from '../assets/works/letterhead2.jpeg';
import letterhead3 from '../assets/works/letterhead3.jpeg';
import package1 from '../assets/works/package1.jpeg';
import package2 from '../assets/works/package2.jpeg';
import package3 from '../assets/works/package3.jpeg';
import package4 from '../assets/works/package4.jpeg';
import package5 from '../assets/works/package5.jpeg';
import package6 from '../assets/works/package6.jpeg';
import package7 from '../assets/works/package7.jpeg';
import package8 from '../assets/works/package8.jpeg';
import poster1 from '../assets/works/poster1.jpeg';
import poster2 from '../assets/works/poster2.jpeg';
import poster3 from '../assets/works/poster3.jpeg';
import poster4 from '../assets/works/poster4.jpeg';
import poster5 from '../assets/works/poster5.jpeg';
import poster6 from '../assets/works/poster6.jpeg';
import poster7 from '../assets/works/poster7.jpeg';
import poster8 from '../assets/works/poster8.jpeg';
import poster9 from '../assets/works/poster9.jpeg';
import poster10 from '../assets/works/poster10.jpeg';
import poster11 from '../assets/works/poster11.jpeg';
import poster12 from '../assets/works/poster12.jpeg';
import poster13 from '../assets/works/poster13.jpeg';
import poster14 from '../assets/works/poster14.jpeg';
import poster15 from '../assets/works/poster15.jpeg';
import poster16 from '../assets/works/poster16.jpeg';
import poster17 from '../assets/works/poster17.jpeg';
import poster18 from '../assets/works/poster18.jpeg';
import poster19 from '../assets/works/poster19.jpeg';
import poster20 from '../assets/works/poster20.jpeg';
import poster21 from '../assets/works/poster21.jpeg';
import poster22 from '../assets/works/poster22.jpeg';
import poster23 from '../assets/works/poster23.jpeg';
import poster24 from '../assets/works/poster24.jpeg';

export interface Work {
  id: number;
  title: string;
  category: string;
  tag: string;
  year: string;
  colors: string[];
  image: string;       // thumbnail — used in the Works grid
  gallery?: string[];  // optional extra images — used only on the detail page
  description?: string;
}

export const works: Work[] = [
      {
  id: 1,
  title: "Restaurant Menu",
  category: "Menu",
  tag: "Food",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: menu2, // Thumbnail shown in the Works grid
  gallery: [menu1, menu2, menu3, menu4, menu5], // All menu pages
  description: "A premium multi-page restaurant menu designed with a clean layout, refined typography, and elegant visual hierarchy to enhance the dining experience.",
},

 
  {
    id: 2,
    title: "Aurum Finance",
    category: "Brochure",
    tag: "Corporate",
    year: "2023",
    colors: ["#111111", "#c9a96e", "#f5f0eb"],
    image: brochure1, // thumbnail shown in the Works grid
    gallery: [brochure1, brochure2, brochure3, brochure4], // full set shown on the detail page
    description: "A corporate brochure system balancing trust and prestige for a boutique financial advisory firm.",
  },

  {
    id: 3,
    title: "BeeYen",
    category: "Visiting Card",
    tag: "Food",
    year: "2026",
    colors: ["#0d0d0d", "#c0392b", "#f5f0eb"],
    image: visiting1, // thumbnail shown in the Works grid — pick whichever looks best as a cover
    gallery: [visiting1, visiting2, visiting3, visiting4], // full set shown on the detail page
    description: "Minimal visiting card design for a creative agency, using texture and negative space to communicate confidence.",
  },

{
  id: 4,
  title: "Product Catalogue",
  category: "Catalogue",
  tag: "Corporate",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: catalogue1,
  gallery: [catalogue1, catalogue2, catalogue3, catalogue4],
  description: "A modern multi-page product catalogue designed to showcase products with a premium layout, strong visual hierarchy, and consistent branding.",
},
{
  id: 5,
  title: "Product Label",
  category: "Label",
  tag: "Packaging",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: label1, // Thumbnail shown in the Works grid
  gallery: [label1, label2, label3], // Full label collection
  description: "A premium product label design collection crafted to enhance shelf appeal through clean typography, balanced composition, and strong brand identity.",
},
{
  id: 6,
  title: "Corporate Brochure",
  category: "Brochure",
  tag: "Corporate",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: brochure5, // Thumbnail
  gallery: [
    brochure5,
    brochure6,
    brochure7,
    brochure8,
    brochure9,
    brochure10,
    brochure11,
  ],
  description:
    "A premium multi-page corporate brochure featuring clean layouts, refined typography, and a modern editorial design.",
},
{
  id: 7,
  title: "Corporate Brochure",
  category: "Brochure",
  tag: "Corporate",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: brochure12, // Thumbnail
  gallery: [
    brochure12,
    brochure13,
    brochure14,
    brochure15,
  ],
  description:
    "A premium multi-page corporate brochure designed with modern layouts, elegant typography, and a strong visual hierarchy.",
},
  { id: 8, title: "Noir Coffee Co.",  category: "Flyer",         tag: "Brand Identity",   year: "2024", colors: ["#1a1a1a", "#c9a96e", "#f5f0eb"], image: work1, description: "A minimalist brand identity for a specialty coffee roaster, blending dark elegance with warm gold accents." },
  {
  id: 9,
  title: "Corporate Letterhead",
  category: "Letter Head",
  tag: "Corporate",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: letterhead1, // Thumbnail shown in the Works grid
  gallery: [
    letterhead1,
    letterhead2,
    letterhead3,
  ], // Full set shown on the detail page
  description:
    "A premium corporate letterhead collection designed with clean layouts, refined typography, and a professional brand identity.",
},
{
  id: 10,
  title: "Package Design",
  category: "Packaging",
  tag: "Brand Identity",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: package1, // Thumbnail shown in the Works grid
  gallery: [
    package1,
    package2,
  ], // Full set shown on the detail page
  description:
    "A premium packaging design collection crafted to elevate product presentation through modern layouts, distinctive branding, and visually impactful packaging solutions.",
},
{
  id: 11,
  title: "Package Design",
  category: "Packaging",
  tag: "Brand Identity",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: package3, // Thumbnail shown in the Works grid
  gallery: [
    package3,
  ], // Single packaging design
  description:
    "A premium packaging design created with a clean visual identity, modern aesthetics, and strong shelf appeal.",
},
{
  id: 12,
  title: "Package Design",
  category: "Packaging",
  tag: "Brand Identity",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: package5, // Thumbnail shown in the Works grid
  gallery: [
    package4,
    package5,
    package6,
    package7,
    package8,
  ], // Full packaging collection
  description:
    "A premium packaging design collection featuring modern branding, clean layouts, and visually engaging packaging concepts tailored to enhance product presentation and shelf appeal.",
},
{
  id: 13,
  title: "Poster Design",
  category: "Poster",
  tag: "Print Design",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: poster1, // Thumbnail shown in the Works grid
  gallery: [
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
    poster6,
    poster7,
    poster8,
    poster9,
  ], // Full poster collection
  description:
    "A premium poster design collection featuring bold layouts, impactful typography, and visually engaging compositions created for print and promotional campaigns.",
},
{
  id: 14,
  title: "Poster Design",
  category: "Poster",
  tag: "Print Design",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: poster14, // Thumbnail shown in the Works grid
  gallery: [
    poster10,
    poster11,
    poster12,
    poster13,
    poster14,
    poster15,
    poster16,
    poster17,
  ], // Full poster collection
  description:
    "A premium poster design collection showcasing creative layouts, striking visuals, and modern typography for promotional and branding campaigns.",
},
{
  id: 15,
  title: "Poster Design",
  category: "Poster",
  tag: "Print Design",
  year: "2026",
  colors: ["#111111", "#c9a96e", "#f5f0eb"],
  image: poster18, // Thumbnail shown in the Works grid
  gallery: [
    poster18,
    poster19,
    poster20,
    poster21,
    poster22,
    poster23,
    poster24,
  ], // Full poster collection
  description:
    "A premium poster design collection featuring impactful visuals, bold typography, and modern layouts crafted for branding, events, and promotional campaigns.",
},
];