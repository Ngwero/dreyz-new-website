import { media } from "./media";

export type ProjectCategory =
  | "Living"
  | "Kitchen"
  | "Bedroom"
  | "Bathroom"
  | "Office"
  | "Retail"
  | "Exterior"
  | "Interior"
  | "Residential"
  | "Commercial"
  | "Hospitality"
  | "Airbnb";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  location: string;
  year: string;
  clientType: string;
  featured: boolean;
  cover: string;
  gallery: string[];
  overview: string;
  brief: string;
  response: string;
  spatialLanguage: string;
  materialStrategy: string;
  outcome: string;
  challenge: string;
  solution: string;
  stats: { label: string; value: string }[];
  materials: { name: string; tone: string }[];
  area: string;
}

const L = media.living;
const K = media.kitchen;
const B = media.bedroom;
const BA = media.bathroom;
const O = media.office;
const S = media.shop;
const E = media.exterior;

export const projects: Project[] = [
  {
    slug: "signature-living-spaces",
    title: "Signature Living Spaces",
    subtitle: "Warm, welcoming living rooms designed for gathering and calm",
    category: ["Living", "Interior", "Residential"],
    location: "Kampala, Uganda",
    year: "2024",
    clientType: "Private Residences",
    featured: true,
    cover: "/images/featured/living-stone-wall.png",
    gallery: L.slice(0, 8),
    overview:
      "Living rooms that balance comfort and style — layered lighting, thoughtful furnishing, and focal wall décor that make every gathering feel intentional.",
    brief:
      "Create living spaces that feel luxurious yet livable for everyday family life and entertaining.",
    response:
      "We shaped seating zones, lighting plans, and material palettes that photograph beautifully and live comfortably.",
    spatialLanguage:
      "Clear circulation, soft seating clusters, and strong visual anchors on key walls.",
    materialStrategy:
      "Warm textiles, timber accents, curated art, and finishes that age gracefully.",
    outcome:
      "Spaces clients love to host in — and guests never want to leave.",
    challenge: "Making compact rooms feel open without losing intimacy.",
    solution: "Smart space planning, mirror light, and a restrained tonal palette.",
    stats: [
      { label: "Rooms", value: `${Math.min(L.length, 12)}+` },
      { label: "Focus", value: "Living" },
      { label: "Style", value: "Modern" },
      { label: "Finish", value: "Full" },
    ],
    materials: [
      { name: "Timber", tone: "#8b5e3c" },
      { name: "Linen", tone: "#e8e2d8" },
      { name: "Accent", tone: "#d26048" },
      { name: "Neutral", tone: "#cfc8be" },
    ],
    area: "Multiple homes",
  },
  {
    slug: "kitchen-and-dining",
    title: "Kitchen & Dining",
    subtitle: "Functional kitchens and dining rooms that feel like the heart of the home",
    category: ["Kitchen", "Interior", "Residential"],
    location: "Kampala, Uganda",
    year: "2024",
    clientType: "Private Clients",
    featured: true,
    cover: "/images/featured/kitchen-island.png",
    gallery: K.slice(0, 8),
    overview:
      "Kitchens and dining areas designed for cooking, hosting, and connection — with cabinetry, lighting, and finishes that work hard every day.",
    brief: "Upgrade kitchens into beautiful, efficient hubs for family life.",
    response:
      "Workflow-led layouts, durable surfaces, and dining zones that invite longer conversations.",
    spatialLanguage: "Clear prep, cook, and serve triangles with soft dining adjacency.",
    materialStrategy: "Hard-wearing counters, warm cabinetry, and balanced task lighting.",
    outcome: "Kitchens that look premium and perform under real use.",
    challenge: "Limited footprints and storage needs.",
    solution: "Custom joinery, vertical storage, and layered lighting plans.",
    stats: [
      { label: "Spaces", value: `${Math.min(K.length, 12)}+` },
      { label: "Focus", value: "Kitchen" },
      { label: "Use", value: "Daily" },
      { label: "Detail", value: "High" },
    ],
    materials: [
      { name: "Cabinetry", tone: "#5c4a3a" },
      { name: "Stone", tone: "#9a9590" },
      { name: "Metal", tone: "#b8956c" },
      { name: "Tile", tone: "#6d7a74" },
    ],
    area: "Multiple homes",
  },
  {
    slug: "restful-bedrooms",
    title: "Restful Bedrooms",
    subtitle: "Quiet bedrooms designed for rest, softness, and personal retreat",
    category: ["Bedroom", "Interior", "Residential"],
    location: "Kampala, Uganda",
    year: "2023",
    clientType: "Private Residences",
    featured: true,
    cover: B[1] ?? B[0],
    gallery: B.slice(0, 8),
    overview:
      "Bedrooms styled for calm — soft palettes, considered lighting, and décor that supports deep rest.",
    brief: "Create bedroom sanctuaries that feel hotel-grade yet personal.",
    response: "Layered textiles, soft lighting, and storage that disappears visually.",
    spatialLanguage: "Bed as focal point, quiet side zones, minimal visual noise.",
    materialStrategy: "Soft fabrics, warm wood, muted walls, and low-glare lighting.",
    outcome: "Rooms that feel restorative the moment you enter.",
    challenge: "Small rooms needing storage without clutter.",
    solution: "Built-ins, mirrored planes, and edited furniture selections.",
    stats: [
      { label: "Spaces", value: `${B.length}+` },
      { label: "Mood", value: "Calm" },
      { label: "Palette", value: "Soft" },
      { label: "Detail", value: "Fine" },
    ],
    materials: [
      { name: "Textile", tone: "#d9d2c5" },
      { name: "Wood", tone: "#a8794a" },
      { name: "Paint", tone: "#ebe6dc" },
      { name: "Accent", tone: "#8d7a4e" },
    ],
    area: "Multiple homes",
  },
  {
    slug: "bathroom-retreats",
    title: "Bathroom Retreats",
    subtitle: "Spa-like bathrooms with polished finishes and thoughtful detailing",
    category: ["Bathroom", "Interior", "Residential"],
    location: "Kampala, Uganda",
    year: "2024",
    clientType: "Private Clients",
    featured: true,
    cover: BA[0],
    gallery: BA.slice(0, 8),
    overview:
      "Bathrooms elevated through tiling, lighting, vanity design, and finishes that feel luxurious and clean.",
    brief: "Transform bathrooms into personal wellness spaces.",
    response: "Durable wet-zone materials with hotel-inspired lighting and storage.",
    spatialLanguage: "Clear wet/dry zones and a strong vanity focal point.",
    materialStrategy: "Tile, stone, waterproof finishes, and warm metal accents.",
    outcome: "Bathrooms that feel like a daily retreat.",
    challenge: "Moisture, durability, and compact footprints.",
    solution: "Correct detailing, ventilation awareness, and quality fittings.",
    stats: [
      { label: "Spaces", value: `${BA.length}+` },
      { label: "Finish", value: "Premium" },
      { label: "Focus", value: "Wet zones" },
      { label: "Detail", value: "High" },
    ],
    materials: [
      { name: "Tile", tone: "#8a8f8c" },
      { name: "Stone", tone: "#b8b0a4" },
      { name: "Metal", tone: "#ca8646" },
      { name: "Glass", tone: "#c5d0d4" },
    ],
    area: "Multiple homes",
  },
  {
    slug: "workspace-interiors",
    title: "Workspace Interiors",
    subtitle: "Offices designed for focus, brand presence, and productivity",
    category: ["Office", "Commercial", "Interior"],
    location: "Kampala, Uganda",
    year: "2024",
    clientType: "Corporate & Studios",
    featured: true,
    cover: O[5] ?? O[0],
    gallery: O.slice(0, 8),
    overview:
      "Office interiors that balance professionalism and comfort — meeting rooms, workstations, and reception zones with clear identity.",
    brief: "Create workplaces that support focus and impress clients.",
    response: "Zoning for collaboration and quiet work with brand-forward materials.",
    spatialLanguage: "Reception impact, clear circulation, and flexible meeting pods.",
    materialStrategy: "Acoustic finishes, durable flooring, and confident color accents.",
    outcome: "Workspaces teams enjoy and clients remember.",
    challenge: "Noise, branding, and dense desk layouts.",
    solution: "Acoustic planning, modular furniture, and lighting hierarchy.",
    stats: [
      { label: "Spaces", value: `${Math.min(O.length, 12)}+` },
      { label: "Type", value: "Office" },
      { label: "Mode", value: "Hybrid" },
      { label: "Brand", value: "Strong" },
    ],
    materials: [
      { name: "Acoustic", tone: "#5a5550" },
      { name: "Timber", tone: "#cfc3b0" },
      { name: "Concrete", tone: "#8c8984" },
      { name: "Accent", tone: "#ff8200" },
    ],
    area: "Multiple offices",
  },
  {
    slug: "retail-and-shops",
    title: "Retail & Shops",
    subtitle: "Commercial shop interiors that attract, convert, and delight",
    category: ["Retail", "Commercial", "Interior"],
    location: "Kampala, Uganda",
    year: "2023",
    clientType: "Retail Brands",
    featured: false,
    cover: S[0],
    gallery: S,
    overview:
      "Shop interiors designed for display, customer flow, and memorable brand experience.",
    brief: "Make retail spaces visually strong and commercially effective.",
    response: "Display systems, lighting for product, and clear customer pathways.",
    spatialLanguage: "Entry impact, mid-floor discovery, and checkout clarity.",
    materialStrategy: "Durable floors, bold feature walls, and focused lighting.",
    outcome: "Spaces that sell the brand as much as the product.",
    challenge: "High traffic and visual competition.",
    solution: "Hard-wearing finishes and strong focal merchandising.",
    stats: [
      { label: "Spaces", value: `${S.length}` },
      { label: "Type", value: "Retail" },
      { label: "Focus", value: "Display" },
      { label: "Flow", value: "Clear" },
    ],
    materials: [
      { name: "Flooring", tone: "#6b6560" },
      { name: "Feature", tone: "#d26048" },
      { name: "Light", tone: "#ffb646" },
      { name: "Metal", tone: "#2c2c2c" },
    ],
    area: "Retail units",
  },
];

if (E[0]) {
  projects.push({
    slug: "exterior-and-landscape",
    title: "Exterior & Landscape",
    subtitle: "Outdoor presence that extends the interior story",
    category: ["Exterior", "Residential"],
    location: "Kampala, Uganda",
    year: "2024",
    clientType: "Private Clients",
    featured: false,
    cover: E[0],
    gallery: E,
    overview:
      "Exterior and landscaping moments that complete the property’s first impression.",
    brief: "Strengthen curb appeal and outdoor living quality.",
    response: "Material continuity from inside to outside with planted softness.",
    spatialLanguage: "Approach, threshold, and garden pause points.",
    materialStrategy: "Durable outdoor finishes with green layering.",
    outcome: "Homes that feel finished from the street to the garden.",
    challenge: "Climate and maintenance realities.",
    solution: "Hardy materials and practical planting strategies.",
    stats: [
      { label: "Focus", value: "Exterior" },
      { label: "Link", value: "Indoor-out" },
      { label: "Mood", value: "Welcoming" },
      { label: "Care", value: "Practical" },
    ],
    materials: [
      { name: "Stone", tone: "#9e968a" },
      { name: "Plant", tone: "#a8b825" },
      { name: "Timber", tone: "#8b5e3c" },
      { name: "Path", tone: "#8a8578" },
    ],
    area: "Garden & façade",
  });
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

export const featuredProjects = (() => {
  const featured = projects.filter((p) => p.featured);
  const living = featured.find((p) => p.slug === "signature-living-spaces");
  if (!living) return featured;
  return [living, ...featured.filter((p) => p.slug !== "signature-living-spaces")];
})();
