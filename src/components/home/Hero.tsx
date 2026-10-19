"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { media } from "@/content/media";
import { featuredProjects } from "@/content/projects";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: media.hero[0],
    label: "Kitchen",
    title: "Kitchen & Dining",
    href: "/projects/kitchen-and-dining",
  },
  {
    image: media.hero[1],
    label: "Dining",
    title: "Open Dining Spaces",
    href: "/projects/signature-living-spaces",
  },
  {
    image: media.hero[2],
    label: "Living",
    title: "Signature Living Spaces",
    href: "/projects/signature-living-spaces",
  },
  {
    image: media.hero[3],
    label: "Lounge",
    title: "Warm Family Lounges",
    href: "/projects/signature-living-spaces",
  },
  {
    image: media.hero[4],
    label: "Bedroom",
    title: "Restful Bedrooms",
    href: "/projects/restful-bedrooms",
  },
  {
    image: media.hero[5],
    label: "Closet",
    title: "Dressing Suites",
    href: "/projects/restful-bedrooms",
  },
  {
    image: media.hero[6],
    label: "Bathroom",
    title: "Bathroom Retreats",
    href: "/projects/bathroom-retreats",
  },
  {
    image: media.hero[7],
    label: "Office",
    title: "Workspace Interiors",
    href: "/projects/workspace-interiors",
  },
  {
    image: media.hero[8],
    label: "Boardroom",
    title: "Corporate Interiors",
    href: "/projects/workspace-interiors",
  },
  {
    image: media.hero[9],
    label: "Retail",
    title: "Boutique Retail",
    href: "/projects/boutique-retail",
  },
  {
    image: media.hero[10],
    label: "School",
    title: "Design School Graduates",
    href: "/about",
  },
].filter((s) => Boolean(s.image));

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reducedMotion || slides.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion]);

  const slide = slides[active] ?? slides[0];

  return (
    <section
      className="hero-section hero-immersive relative z-[2] min-h-[100svh] overflow-hidden bg-slate text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={active === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="hero-glass-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-end px-5 pb-6 pt-36 sm:px-8 md:px-12 md:pb-8 md:pt-40 lg:px-16 lg:pt-44">
        <div className="grid w-full items-end gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3.3rem,7.6vw,7.5rem)] leading-[0.98] tracking-[-0.055em] text-white"
            >
              <span className="block">Spaces for</span>
              <span className="block font-normal italic text-white/85">better living.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-7 max-w-md text-sm leading-relaxed text-white/75 sm:text-base"
            >
              Thoughtfully designed. Beautifully built. From your first idea
              to the final detail, we bring your space to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link
                href="/projects"
                className="glass-button inline-flex min-h-14 w-full items-center justify-between gap-10 rounded-full px-7 text-[11px] uppercase tracking-[0.16em] text-white sm:w-auto"
              >
                <span>Explore our work</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
                  <path d="M4 12h16m-6-6 6 6-6 6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="glass-dark inline-flex min-h-14 w-full items-center justify-center rounded-full px-7 text-[11px] uppercase tracking-[0.16em] text-white transition hover:bg-white/20 sm:w-auto"
              >
                Begin Project
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-9 grid max-w-lg grid-cols-3 gap-4 border-t border-white/20 pt-5 md:mt-12"
            >
              {[
                { value: `${featuredProjects.length}+`, label: "Featured series" },
                { value: "5★", label: "Client rating" },
                { value: "2026", label: "Africa Golden Awards" },
              ].map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <p className="font-display text-xl text-white sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[8px] uppercase leading-relaxed tracking-[0.16em] text-white/65 sm:text-[9px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Featured card — desktop / tablet landscape */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hidden min-w-0 lg:col-span-4 lg:col-start-9 lg:block"
          >
            <div className="glass-dark rounded-[2rem] p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/80">
                  Now featuring
                </p>
                <p className="shrink-0 font-mono text-[11px] text-white/60">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </p>
              </div>

              <Link href={slide.href} className="group block">
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-3xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide.image}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        sizes="(max-width: 1024px) 50vw, 400px"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                  {slide.label}
                </p>
                <p className="font-display mt-2 text-2xl text-white">
                  {slide.title}
                </p>
                <p className="mt-5 border-t border-white/15 pt-4 text-[10px] uppercase tracking-[0.18em] text-white/70 transition group-hover:text-white">
                  Explore case study →
                </p>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Thumbnail filmstrip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="glass-dark mt-9 w-full rounded-2xl p-3 md:mt-12 md:p-4"
        >
          <div className="flex gap-2 overflow-x-auto p-1 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-3 [&::-webkit-scrollbar]:hidden">
            {slides.map((item, i) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${item.title}`}
                aria-pressed={i === active}
                className={cn(
                  "relative h-10 w-14 shrink-0 overflow-hidden rounded-lg transition duration-500 sm:h-12 sm:w-20 md:h-14 md:flex-1",
                  i === active
                    ? "ring-1 ring-white ring-offset-2 ring-offset-slate"
                    : "opacity-55 hover:opacity-100"
                )}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-ink/10">
          {!paused && !reducedMotion && (
            <motion.div
              key={active}
              className="h-full bg-orange"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5.2, ease: "linear" }}
              style={{ transformOrigin: "left" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
