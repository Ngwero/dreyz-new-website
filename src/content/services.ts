import { media } from "./media";

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  image: string;
}

const img = media.projects;

/** Services from dreyzinterior.com */
export const services: Service[] = [
  {
    slug: "floor-and-space-planning",
    title: "Floor and Space Planning",
    short:
      "Layouts that make every room work — movement, furniture, and function in balance.",
    description:
      "Floor and space planning are highly important in interior design. A careful analysis of how space is utilized and how it accommodates everything with ease of movement is done in space planning. At Dreyz Interior, our floor plans focus on the layout of the space with regards to the position of the rooms and furniture for ease of movement and effective use of space.",
    deliverables: [
      "Site & existing layout analysis",
      "Optimized floor plans",
      "Furniture placement studies",
      "Circulation & zoning diagrams",
      "Client presentation boards",
    ],
    image: "/images/projects/office/001f6cdd-334a-48d0-bb11-3495752f05c2-1-105-c-01.jpg",
  },
  {
    slug: "color-schemes-and-lighting",
    title: "Color Schemes and Lighting Plans",
    short:
      "Palettes and light that shape mood, comfort, and the atmosphere of every room.",
    description:
      "The color palette should blend well with the lighting, otherwise it may spoil the look and ambiance of the space. The right combination of color scheme and light plan features a great aesthetic value in the room. Our staff will guide the selection of the right colors for your interior design project.",
    deliverables: [
      "Color palette development",
      "Lighting layout plans",
      "Fixture recommendations",
      "Mood & ambiance studies",
      "Sample board reviews",
    ],
    image: "/images/projects/living/225d004a-cf3e-420a-96f0-b89cb3f838a8-1-102-o-04.jpg",
  },
  {
    slug: "client-consultation",
    title: "Client Consultation",
    short:
      "Budget, timeline, and vision aligned from day one with Uganda’s trusted design studio.",
    description:
      "Consulting with the best interior designer in Uganda is your first step in building the space you’ve always wanted. When you book Dreyz Interior for a consultation, we address budget and project management, which will allow you to build and design your space according to your budget and personal timeline. Dreyz Interior will also help you coordinate plans and delegate tasks to various contractors.",
    deliverables: [
      "Initial discovery meeting",
      "Budget framing",
      "Project timeline planning",
      "Contractor coordination guidance",
      "Scope definition",
    ],
    image: "/images/projects/living/12-1-02.jpg",
  },
  {
    slug: "wall-decor",
    title: "Wall Décor",
    short:
      "Focal points and art that complete your walls and define each room’s character.",
    description:
      "One of the most basic principles of interior design is that every room needs a focal point or a single design element that will instantly draw the eye into the space and give the viewer a sense of what to expect. At Dreyz Interior, we help identify what art works best for your space to make your spaces and walls complete.",
    deliverables: [
      "Focal point strategy",
      "Artwork curation",
      "Wall treatment concepts",
      "Installation guidance",
      "Styling recommendations",
    ],
    image: "/images/projects/bedroom/02e-01.png",
  },
  {
    slug: "painting-and-polishing",
    title: "Painting & Polishing",
    short:
      "Color and finish selections that blend with your taste and emotions.",
    description:
      "Choosing paint colors is an important early task in the process as it can be one of the toughest steps to get through. Dreyz Interior is here to help you choose the right color palette to your taste that will blend with your emotions. We have had several experiences in painting from small living rooms to offices, apartments, schools, and commercial spaces.",
    deliverables: [
      "Paint color consultation",
      "Finish & sheen selection",
      "Surface preparation guidance",
      "Polishing specifications",
      "On-site quality review",
    ],
    image: "/images/projects/kitchen/15-1-02.jpg",
  },
  {
    slug: "furnishing",
    title: "Furnishing",
    short:
      "Furniture that is personal, intimate, and essential to how you live in a space.",
    description:
      "To the layman, furniture is the most important aspect of interior design. It is a significant component of design to the professional as well, since it is the most personal and intimate product relating man to a building. It is also personal because it can be moved from one home to the next and handed down for generations.",
    deliverables: [
      "Furniture concept & selection",
      "Custom joinery briefs",
      "Procurement support",
      "Placement & styling",
      "Supplier coordination",
    ],
    image: "/images/projects/living/2580796c-b381-4c82-9e6b-a8b045afcc34-1-102-o-05.jpg",
  },
  {
    slug: "2d-3d-rendering",
    title: "2D/3D Rendering",
    short:
      "See your space before construction — materials, décor, and light made visible.",
    description:
      "Interior 2D/3D renderings provide a visual representation of what your interior will look like after the renovation has completed. 3D renderings show clients what the décor, materials, and colors will look like in the project so decisions are clear and confident.",
    deliverables: [
      "Concept mood renders",
      "Photoreal interior views",
      "Material & color studies",
      "Presentation boards",
      "Revision rounds",
    ],
    image: "/images/projects/office/5338cb8d-2558-42f2-9044-0ac426e262ee-1-105-c-05.jpg",
  },
  {
    slug: "ceilings-and-gypsum",
    title: "Ceilings and Gypsum",
    short:
      "Conventional, suspended, and tray ceilings in cement, wood, or gypsum.",
    description:
      "Whether you need a conventional cement ceiling, suspended ceiling, or tray ceilings in cement, wood, or gypsum — Dreyz Interior designs and coordinates ceiling solutions that elevate the architecture of your rooms.",
    deliverables: [
      "Ceiling design concepts",
      "Gypsum detailing",
      "Lighting integration",
      "Material specifications",
      "Installation coordination",
    ],
    image: "/images/projects/office/1dcdd2b5-3e87-45cc-adff-5ac6829f5563-1-102-o-02.jpg",
  },
  {
    slug: "material-selection",
    title: "Material Selection & Sourcing",
    short:
      "Competitive sourcing of finishes and materials that protect quality and budget.",
    description:
      "Material sourcing is the process of identifying key suppliers and procuring materials from them — negotiating terms and prices through the procurement process and arranging for material delivery. At Dreyz Interior we ensure that materials are purchased at competitive rates that are beneficial to the client without compromising quality.",
    deliverables: [
      "Material schedules",
      "Supplier identification",
      "Cost negotiation support",
      "Sample procurement",
      "Delivery coordination",
    ],
    image: "/images/projects/bathroom/img-0154-3-04.jpg",
  },
];

export const serviceMarquee = [
  "Design Homestays",
  "2D/3D Rendering",
  "Outdoor Landscaping",
  "Structural Innovations",
  "Furnishing",
  "Designing Airbnb",
  "Residential Space",
  "Renovation",
  "Painting & Polishing",
  "Structural Improvements",
];
