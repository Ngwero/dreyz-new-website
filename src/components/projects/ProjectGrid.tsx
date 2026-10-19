"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  getProjectGalleryItems,
  projectGalleryFilters,
  type ProjectGalleryFilter,
} from "@/content/projectGallery";
import { usalTiming } from "@/lib/usal";
import { cn } from "@/lib/utils";

export function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectGalleryFilter>("all");
  const items = useMemo(() => getProjectGalleryItems(filter), [filter]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2 border-b border-line pb-8 md:mb-14">
        {projectGalleryFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.18em] transition",
              filter === f.id
                ? "bg-olive text-white shadow-sm"
                : "border border-ink/15 text-ink/55 hover:border-orange hover:text-ink"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <figure
            key={item.id}
            data-usal={usalTiming(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-dim"
          >
            <Image
              src={item.src}
              alt={item.name}
              fill
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 via-ink/35 to-transparent px-4 pb-4 pt-16">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">
                {item.name}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
