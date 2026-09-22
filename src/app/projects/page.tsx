import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore interior design projects by Dreyz Interior — residences, hospitality, Airbnbs, and commercial spaces.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white pb-20 pt-24 sm:pb-24 sm:pt-28 md:pb-32 md:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
            Portfolio
          </p>
          <h1
            data-usal="fade-u split-letter text-shimmer duration-1800 split-delay-80"
            className="font-display text-5xl text-heading md:text-7xl"
          >
            Projects
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            A curated selection of Dreyz Interior works — each a study in light,
            material, comfort, and bliss.
          </p>
        </div>
        <ProjectGrid />
      </div>
    </div>
  );
}
