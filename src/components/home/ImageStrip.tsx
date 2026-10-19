"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { media } from "@/content/media";
import { gsap, registerGsap } from "@/lib/gsap";

const strip = Array.from(
  new Set([...media.featured, ...media.gallery, ...media.hero])
);

export function ImageStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;
    const track = el.querySelector("[data-track]") as HTMLElement | null;
    if (!track) return;

    let tween: gsap.core.Tween | null = null;
    let scrollTimer: number | undefined;
    let disposed = false;

    const startLoop = () => {
      if (disposed) return;
      tween?.kill();
      // Half the track = one full set (content is duplicated)
      const half = track.scrollWidth / 2;
      if (half < 10) return;

      // Continuous loop drifting to the right; pauses while page scrolls
      tween = gsap.fromTo(
        track,
        { x: -half },
        {
          x: 0,
          duration: Math.max(32, half / 45),
          ease: "none",
          repeat: -1,
        }
      );
    };

    const onScroll = () => {
      tween?.pause();
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        tween?.play();
      }, 200);
    };

    // Wait for images/layout so width is accurate
    const id = window.requestAnimationFrame(() => {
      startLoop();
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", startLoop);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", startLoop);
      window.clearTimeout(scrollTimer);
      tween?.kill();
    };
  }, []);

  const loopItems = [...strip, ...strip];

  return (
    <section ref={ref} className="overflow-hidden py-10 md:py-16">
      <div className="mx-auto mb-8 max-w-[1440px] px-5 md:px-10 lg:px-14">
        <p className="text-[11px] uppercase tracking-[0.3em] text-orange">
          Visual World
        </p>
        <h2
          data-usal="fade-u split-word split-delay-100"
          className="font-display mt-3 text-3xl text-heading md:text-5xl"
        >
          Spaces we craft
        </h2>
      </div>

      <div
        data-track
        className="flex w-max items-center gap-3 px-5 will-change-transform md:gap-4 md:px-10"
      >
        {loopItems.map((src, i) => (
          <article
            key={`${src}-${i}`}
            className="group relative h-[200px] w-[240px] shrink-0 overflow-hidden rounded-3xl bg-white/40 shadow-[0_20px_50px_-28px_rgba(64,64,80,0.45)] ring-1 ring-white/50 backdrop-blur-sm sm:h-[260px] sm:w-[300px] md:h-[320px] md:w-[380px]"
          >
            <Image
              src={src}
              alt={`Dreyz interior ${(i % strip.length) + 1}`}
              fill
              sizes="40vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F0F0F0]/55 via-transparent to-transparent opacity-80" />
          </article>
        ))}
      </div>
    </section>
  );
}
