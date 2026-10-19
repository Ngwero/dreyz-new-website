"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export type ScrollScene = {
  id: string;
  image: string;
  /** Soft brand wash over the photo */
  tint: string;
};

type ScrollSceneBackgroundProps = {
  scenes: ScrollScene[];
  className?: string;
};

/**
 * Fixed full-bleed backgrounds that crossfade as scroll scenes enter view —
 * similar to the Coca-Cola Careers scroll atmosphere.
 */
export function ScrollSceneBackground({
  scenes,
  className,
}: ScrollSceneBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const root = rootRef.current;
    if (!root || scenes.length === 0) return;

    const layers = Array.from(
      root.querySelectorAll<HTMLElement>("[data-bg-layer]")
    );
    if (!layers.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setActive = (index: number) => {
      layers.forEach((layer, i) => {
        const on = i === index;
        gsap.to(layer, {
          opacity: on ? 1 : 0,
          duration: reduced ? 0 : 0.9,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      });
    };

    setActive(0);

    const triggers = scenes.map((scene, index) =>
      ScrollTrigger.create({
        trigger: `[data-scroll-scene="${scene.id}"]`,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
      })
    );

    // Keep first scene while still above the fold / before first trigger fires
    const topTrigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: () => {
        const first = document.querySelector(
          `[data-scroll-scene="${scenes[0]?.id}"]`
        );
        if (!first) return "+=0";
        const rect = first.getBoundingClientRect();
        return `+=${Math.max(0, rect.top + window.scrollY)}`;
      },
      onEnter: () => setActive(0),
      onEnterBack: () => setActive(0),
    });

    return () => {
      triggers.forEach((t) => t.kill());
      topTrigger.kill();
    };
  }, [scenes]);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden",
        className
      )}
    >
      {scenes.map((scene, i) => (
        <div
          key={scene.id}
          data-bg-layer
          className="absolute inset-0"
          style={{ opacity: i === 0 ? 1 : 0 }}
        >
          <Image
            src={scene.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover scale-105"
          />
          <div
            className="absolute inset-0"
            style={{ background: scene.tint }}
          />
          {/* Soft vignette so type stays readable */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(20,20,20,0.18)_100%)]" />
        </div>
      ))}
    </div>
  );
}
