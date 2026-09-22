"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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

const rotatingWords = ["DESIGN.", "COMFORT.", "BLISS."];

export function Hero() {
  const [active, setActive] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[active] ?? slides[0];

  return (
    <section
      className="hero-section relative min-h-[100svh] overflow-hidden bg-navy"
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

        <div className="absolute inset-0 bg-gradient-to-r from-[#E0DDCF]/95 via-[#E0DDCF]/70 to-[#E0DDCF]/25 md:via-[#E0DDCF]/55 md:to-[#E0DDCF]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#E0DDCF]/95 via-[#E0DDCF]/40 to-[#E0DDCF]/30 md:from-[#E0DDCF]/90 md:via-transparent md:to-[#E0DDCF]/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-end px-4 pb-8 pt-28 sm:px-5 sm:pb-10 sm:pt-36 md:justify-center md:px-10 md:pb-16 md:pt-40 lg:px-14 lg:pt-44">
        <div className="grid w-full items-end gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mb-3 text-[10px] uppercase tracking-[0.28em] text-orange sm:mb-4 sm:text-[11px] sm:tracking-[0.32em]"
            >
              Transform Your Space
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(1.65rem,5vw,3.5rem)] leading-[1.12] text-ink"
            >
              <span className="block">Designing spaces</span>
              <span className="block">that feel like</span>
              <span className="relative mt-1 block min-h-[1.1em] text-orange sm:mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -28, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-5 max-w-lg text-sm leading-relaxed text-ink/65 sm:mt-6 sm:text-base md:text-lg"
            >
              From Airbnb homestays to residences and workplaces — Dreyz Interior
              crafts welcoming, stylish interiors that earn 5-star living.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link
                href="/projects"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-orange px-8 text-[11px] uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(208,96,64,0.3)] transition hover:-translate-y-0.5 hover:bg-ink hover:shadow-lg sm:w-auto"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full glass-chip px-8 text-[11px] uppercase tracking-[0.18em] text-ink transition hover:-translate-y-0.5 hover:border-orange hover:text-orange sm:w-auto"
              >
                Begin Project
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-6 border-t border-ink/15 pt-6 sm:mt-12 sm:gap-8 sm:pt-8 md:gap-12"
            >
              {[
                { value: `${featuredProjects.length}+`, label: "Featured series" },
                { value: "5★", label: "Client rating" },
                { value: "2026", label: "Africa Golden Awards" },
              ].map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <p className="font-display text-xl text-ink sm:text-2xl md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-ink/45 sm:text-[10px] sm:tracking-[0.2em]">
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
            className="hidden min-w-0 md:block lg:col-span-4 lg:col-start-9"
          >
            <div className="glass-strong border border-white/70 p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-[10px] uppercase tracking-[0.24em] text-orange">
                  Now featuring
                </p>
                <p className="shrink-0 font-mono text-[11px] text-ink/45">
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
                <p className="text-[10px] uppercase tracking-[0.2em] text-orange">
                  {slide.label}
                </p>
                <p className="font-display mt-2 text-2xl text-ink transition group-hover:text-orange">
                  {slide.title}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-ink/45 transition group-hover:text-ink">
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
          className="mt-8 w-full md:mt-14"
        >
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:px-0 md:gap-3 [&::-webkit-scrollbar]:hidden">
            {slides.map((item, i) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${item.title}`}
                className={cn(
                  "relative h-12 w-[4.5rem] shrink-0 overflow-hidden rounded-xl transition duration-500 sm:h-14 sm:w-20 md:h-16 md:w-24",
                  i === active
                    ? "ring-2 ring-orange ring-offset-2 ring-offset-[#E0DDCF]"
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
          {!paused && (
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
