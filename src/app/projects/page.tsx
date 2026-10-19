import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projectGalleryIntro } from "@/content/projectGallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Dreyz Interior projects — living rooms, dining rooms, bathrooms, bedrooms, shops, and offices.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white pb-20 pt-24 sm:pb-24 sm:pt-28 md:pb-32 md:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="mb-14 max-w-3xl md:mb-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
            {projectGalleryIntro.eyebrow}
          </p>
          <h1
            data-usal="fade-u split-letter text-shimmer duration-1800 split-delay-80"
            className="font-display text-5xl text-heading md:text-7xl"
          >
            {projectGalleryIntro.title}
          </h1>
          <p className="mt-6 max-w-2xl text-muted">
            {projectGalleryIntro.body}
          </p>
        </div>
        <ProjectGrid />
      </div>
    </div>
  );
}
