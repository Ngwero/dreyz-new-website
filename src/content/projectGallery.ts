export interface ProjectCategoryGallery {
  id: string;
  name: string;
  /** Shown in filter bar (false = only appears under ALL) */
  filterable: boolean;
  images: string[];
}

export const projectGalleryIntro = {
  eyebrow: "Our Projects",
  title: "Check Our Latest Projects",
  body:
    "Discover how Dreyz Interior transforms spaces with creativity and precision. Explore our recent work and get inspired!",
};

export const projectCategories: ProjectCategoryGallery[] = [
  {
    id: "living-room",
    name: "LIVING ROOM",
    filterable: true,
    images: [
      "/images/project-gallery/living-room/01.jpg",
      "/images/project-gallery/living-room/02.jpg",
      "/images/project-gallery/living-room/03.jpg",
      "/images/project-gallery/living-room/04.jpg",
      "/images/project-gallery/living-room/05.jpg",
      "/images/project-gallery/living-room/06.jpg",
    ],
  },
  {
    id: "dining-rooms",
    name: "DINING ROOMS",
    filterable: true,
    images: [
      "/images/project-gallery/dining-rooms/01.jpg",
      "/images/project-gallery/dining-rooms/02.jpg",
      "/images/project-gallery/dining-rooms/03.jpg",
      "/images/project-gallery/dining-rooms/04.jpg",
      "/images/project-gallery/dining-rooms/05.jpg",
      "/images/project-gallery/dining-rooms/06.jpg",
    ],
  },
  {
    id: "bathroom",
    name: "BATHROOM",
    filterable: true,
    images: [
      "/images/project-gallery/bathroom/01.jpg",
      "/images/project-gallery/bathroom/02.jpg",
      "/images/project-gallery/bathroom/03.jpg",
      "/images/project-gallery/bathroom/04.jpg",
    ],
  },
  {
    id: "kitchen",
    name: "KITCHEN",
    // Present on the live site under ALL, not in the filter bar
    filterable: false,
    images: [
      "/images/project-gallery/kitchen/01.jpg",
      "/images/project-gallery/kitchen/02.jpg",
      "/images/project-gallery/kitchen/03.jpg",
      "/images/project-gallery/kitchen/04.jpg",
    ],
  },
  {
    id: "bedroom",
    name: "BEDROOM",
    filterable: true,
    images: [
      "/images/project-gallery/bedroom/01.jpg",
      "/images/project-gallery/bedroom/02.jpg",
      "/images/project-gallery/bedroom/03.jpg",
      "/images/project-gallery/bedroom/04.jpg",
      "/images/project-gallery/bedroom/05.jpg",
    ],
  },
  {
    id: "shops",
    name: "SHOPS",
    filterable: true,
    images: [
      "/images/project-gallery/shops/01.jpg",
      "/images/project-gallery/shops/02.jpg",
      "/images/project-gallery/shops/03.jpg",
      "/images/project-gallery/shops/04.jpg",
    ],
  },
  {
    id: "offices",
    name: "OFFICES",
    filterable: true,
    images: [
      "/images/project-gallery/offices/01.jpg",
      "/images/project-gallery/offices/02.jpg",
      "/images/project-gallery/offices/03.jpg",
      "/images/project-gallery/offices/04.jpg",
      "/images/project-gallery/offices/05.jpg",
      "/images/project-gallery/offices/06.jpg",
      "/images/project-gallery/offices/07.jpg",
    ],
  },
];

export type ProjectGalleryFilter = "all" | ProjectCategoryGallery["id"];

export const projectGalleryFilters: { id: ProjectGalleryFilter; label: string }[] =
  [
    { id: "all", label: "ALL" },
    ...projectCategories
      .filter((c) => c.filterable)
      .map((c) => ({ id: c.id as ProjectGalleryFilter, label: c.name })),
  ];

export function getProjectGalleryItems(filter: ProjectGalleryFilter = "all") {
  const cats =
    filter === "all"
      ? projectCategories
      : projectCategories.filter((c) => c.id === filter);

  return cats.flatMap((cat) =>
    cat.images.map((src, index) => ({
      id: `${cat.id}-${index}`,
      src,
      name: cat.name,
      categoryId: cat.id,
    }))
  );
}
