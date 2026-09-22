"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Reveal, ParallaxImage } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Container";
import type { Project } from "@/content/projects";

const MiniModel = dynamic(
  () => import("@/components/three/MiniModel").then((m) => m.MiniModel),
  { ssr: false }
);

export function ProjectDetail({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project | null;
  next: Project | null;
}) {
  return (
    <article className="bg-white text-ink">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] md:h-[85vh]">
        <ParallaxImage className="absolute inset-0" speed={15}>
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </ParallaxImage>
        <div className="absolute inset-0 bg-gradient-to-t from-[#E0DDCF]/95 via-[#E0DDCF]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-5 pb-12 md:px-10 md:pb-16 lg:px-14">
          <div className="flex flex-wrap gap-2">
            {project.category.map((c) => (
              <Tag key={c} className="text-ink/70">
                {c}
              </Tag>
            ))}
          </div>
          <h1
            data-usal="fade-u split-word split-delay-60"
            className="font-display mt-4 text-5xl text-ink md:text-7xl lg:text-8xl"
          >
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/70">{project.subtitle}</p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-orange">
            {project.location} · {project.year} · {project.clientType}
          </p>
        </div>
      </section>

      {/* Overview + Stats */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28 lg:px-14">
        <Reveal className="md:col-span-7">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-orange">
            Overview
          </p>
          <p className="font-display text-2xl leading-snug text-heading md:text-3xl">
            {project.overview}
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-6 md:col-span-4 md:col-start-9" delay={0.1}>
          {project.stats.map((s) => (
            <div key={s.label} className="border-t border-line pt-4">
              <p className="font-display text-3xl text-orange">{s.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-stone">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Case study sections */}
      <section className="paper-section py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-2 lg:px-14">
          {[
            { title: "The Brief", body: project.brief },
            { title: "Design Response", body: project.response },
            { title: "Spatial Language", body: project.spatialLanguage },
            { title: "Material Strategy", body: project.materialStrategy },
          ].map((block, i) => (
            <Reveal key={block.title} delay={i * 0.05}>
              <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-stone">
                0{i + 1}
              </p>
              <h2 className="font-display text-3xl text-heading md:text-4xl">
                {block.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/65">
                {block.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <h2 className="font-display text-3xl text-heading">Design Challenge</h2>
          <p className="mt-4 text-muted">{project.challenge}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl text-heading">Design Solution</h2>
          <p className="mt-4 text-muted">{project.solution}</p>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="space-y-4 px-0 md:px-10 lg:px-14">
        <div className="mx-auto mb-8 max-w-[1440px] px-5 md:px-0">
          <h2 className="font-display text-3xl text-heading md:text-4xl">Gallery</h2>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-2">
          {project.gallery.map((src, i) => (
            <Reveal key={src} className={i === 0 ? "md:col-span-2" : ""}>
              <div
                className={`relative overflow-hidden rounded-3xl ${
                  i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title} gallery ${i + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Materials + 3D */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <h2 className="font-display text-3xl text-heading md:text-4xl">
            Material Palette
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {project.materials.map((m) => (
              <div key={m.name} className="border border-line p-4 rounded-2xl">
                <div
                  className="mb-4 aspect-square w-full rounded-2xl"
                  style={{ background: m.tone }}
                />
                <p className="text-sm text-ink">{m.name}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl text-heading md:text-4xl">
            Spatial Model
          </h2>
          <p className="mt-3 text-sm text-muted">
            Abstract massing study inspired by the project volumes.
          </p>
          <div className="mt-6 aspect-square overflow-hidden rounded-3xl bg-concrete md:aspect-[4/3]">
            <MiniModel />
          </div>
        </Reveal>
      </section>

      {/* Outcome */}
      <section className="paper-section py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-stone">
              Outcome
            </p>
            <h2 className="font-display max-w-3xl text-4xl text-heading md:text-5xl">
              {project.outcome}
            </h2>
            <div className="mt-10">
              <Button href="/contact" variant="dark">
                Discuss a Similar Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next / Prev */}
      <nav className="mx-auto grid max-w-[1440px] gap-6 px-5 py-16 md:grid-cols-2 md:px-10 lg:px-14">
        {prev && (
          <Link
            href={`/projects/${prev.slug}`}
            className="group border border-line p-8 rounded-3xl transition hover:bg-ink hover:text-white"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone group-hover:text-ink/50">
              Previous
            </p>
            <p className="font-display mt-3 text-2xl md:text-3xl">{prev.title}</p>
          </Link>
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group border border-line p-8 rounded-3xl text-right transition hover:bg-ink hover:text-white"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone group-hover:text-ink/50">
              Next
            </p>
            <p className="font-display mt-3 text-2xl md:text-3xl">{next.title}</p>
          </Link>
        )}
      </nav>
    </article>
  );
}
