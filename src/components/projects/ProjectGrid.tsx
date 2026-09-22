"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Tag } from "@/components/ui/Container";
import {
  projects,
  type ProjectCategory,
} from "@/content/projects";
import { usalTiming } from "@/lib/usal";
import { cn } from "@/lib/utils";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "Living",
  "Kitchen",
  "Bedroom",
  "Bathroom",
  "Office",
  "Retail",
  "Exterior",
  "Residential",
  "Commercial",
];

export function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category.includes(filter));
  }, [filter]);

  return (
    <div>
      <div className="mb-12 flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition",
                filter === f
                  ? "bg-olive text-white shadow-sm"
                  : "border border-ink/15 text-ink/55 hover:border-orange hover:text-ink"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {(["grid", "list"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              className={cn(
                "px-3 py-2 text-[10px] uppercase tracking-[0.2em]",
                view === v ? "text-ink" : "text-ink/40"
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div
        className={cn(
          view === "grid"
            ? "grid gap-6 md:grid-cols-2"
            : "flex flex-col gap-8"
        )}
      >
        {filtered.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            data-usal={usalTiming(i)}
            className={cn(
              "group block overflow-hidden",
              view === "list" && "grid gap-6 md:grid-cols-2"
            )}
          >
            <div
              className={cn(
                "relative overflow-hidden rounded-3xl bg-paper-dim",
                view === "grid" ? "aspect-[4/3]" : "aspect-[16/10]"
              )}
            >
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/25" />
            </div>
            <div className={cn(view === "grid" ? "pt-5" : "flex flex-col justify-center")}>
              <div className="flex flex-wrap gap-2">
                {project.category.slice(0, 2).map((c) => (
                  <Tag key={c} className="text-stone">
                    {c}
                  </Tag>
                ))}
              </div>
              <h2 className="font-display mt-3 text-3xl text-heading transition group-hover:text-sand md:text-4xl">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-stone">
                {project.location} · {project.year} · {project.area}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
