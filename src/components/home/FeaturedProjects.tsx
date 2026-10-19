"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Container";
import { featuredProjects } from "@/content/projects";
import { USAL_SPLIT_ITEMS, usalTiming } from "@/lib/usal";

export function FeaturedProjects() {
  const [hero, ...rest] = featuredProjects;

  return (
    <section className="glass-soft py-24 backdrop-blur-[2px] md:py-32 !rounded-none">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
              Selected Work
            </p>
            <h2
              data-usal="fade-u split-word split-delay-100"
              className="font-display text-4xl text-heading md:text-6xl"
            >
              Featured Projects
            </h2>
          </div>
          <Button href="/projects" variant="darkOutline" size="sm">
            All Projects
          </Button>
        </div>

        {hero && (
          <Link
            href={`/projects/${hero.slug}`}
            data-usal={usalTiming(0)}
            className="group mb-6 grid gap-4 md:mb-8 md:grid-cols-12 md:gap-6"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl md:col-span-8 md:aspect-auto md:min-h-[480px]">
              <ParallaxImage className="h-full w-full" speed={10}>
                <Image
                  src={hero.cover}
                  alt={hero.title}
                  fill
                  sizes="70vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </ParallaxImage>
            </div>
            <div className="flex flex-col justify-between gap-6 md:col-span-4">
              <div
                data-usal={usalTiming(1)}
                className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl md:block"
              >
                <Image
                  src={hero.gallery[1] ?? hero.cover}
                  alt=""
                  fill
                  sizes="30vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div data-usal={usalTiming(2)}>
                <div className="flex flex-wrap gap-2">
                  {hero.category.slice(0, 2).map((c) => (
                    <Tag key={c} className="text-stone">
                      {c}
                    </Tag>
                  ))}
                </div>
                <h3 className="font-display mt-4 text-3xl text-heading transition group-hover:text-orange md:text-4xl">
                  {hero.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{hero.subtitle}</p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-stone">
                  {hero.location} · {hero.year}
                </p>
              </div>
            </div>
          </Link>
        )}

        <div data-usal={USAL_SPLIT_ITEMS} className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {rest.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F0F0F0]/95 via-[#F0F0F0]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-ink md:p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-orange">
                    {project.category[0]} · {project.year}
                  </p>
                  <h3 className="font-display mt-2 text-2xl text-ink md:text-3xl">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
