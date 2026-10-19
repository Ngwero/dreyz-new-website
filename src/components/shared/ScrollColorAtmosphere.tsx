"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";

export type ScrollColorStop = {
  color: string;
};

type ScrollColorAtmosphereProps = {
  /** Ordered wash colors across the page after the hero */
  colors: string[];
};

/**
 * Continuous, scrubbed background color atmosphere (Coca-Cola Careers style).
 * Dual-layer crossfades avoid muddy mid-blend colors. Off while hero is visible.
 */
export function ScrollColorAtmosphere({ colors }: ScrollColorAtmosphereProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const layerARef = useRef<HTMLDivElement>(null);
  const layerBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const wrap = rootRef.current;
    const layerA = layerARef.current;
    const layerB = layerBRef.current;
    const track = document.querySelector<HTMLElement>("[data-scroll-color-root]");
    if (!wrap || !layerA || !layerB || !track || colors.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const heroEl = document.querySelector(".hero-section");
    const first = colors[0];

    gsap.set(wrap, { opacity: 0 });
    gsap.set(layerA, { backgroundColor: first, opacity: 1 });
    gsap.set(layerB, { backgroundColor: first, opacity: 0 });
    document.documentElement.classList.remove("scroll-color-active");

    const show = () => {
      document.documentElement.classList.add("scroll-color-active");
      gsap.to(wrap, {
        opacity: 1,
        duration: reduced ? 0 : 1.35,
        ease: "power1.inOut",
        overwrite: "auto",
      });
    };

    const hide = () => {
      gsap.to(wrap, {
        opacity: 0,
        duration: reduced ? 0 : 1.1,
        ease: "power1.inOut",
        overwrite: "auto",
        onComplete: () => {
          document.documentElement.classList.remove("scroll-color-active");
        },
      });
    };

    const ctx = gsap.context(() => {
      if (heroEl) {
        ScrollTrigger.create({
          trigger: heroEl,
          start: "top top",
          end: "bottom top",
          onLeave: show,
          onEnterBack: hide,
        });
      } else {
        show();
      }

      if (reduced) {
        const sections = Array.from(
          document.querySelectorAll<HTMLElement>("[data-home-section]")
        );
        sections.forEach((el, i) => {
          const color = colors[Math.min(i, colors.length - 1)];
          ScrollTrigger.create({
            trigger: el,
            start: "top center",
            onEnter: () => {
              document.documentElement.classList.add("scroll-color-active");
              gsap.set(wrap, { opacity: 1 });
              gsap.set(layerA, { backgroundColor: color, opacity: 1 });
              gsap.set(layerB, { opacity: 0 });
            },
            onEnterBack: () => {
              document.documentElement.classList.add("scroll-color-active");
              gsap.set(wrap, { opacity: 1 });
              gsap.set(layerA, { backgroundColor: color, opacity: 1 });
              gsap.set(layerB, { opacity: 0 });
            },
          });
        });
        return;
      }

      // One timeline scrubbed across the full post-hero track —
      // alternating layers for clean opacity crossfades (no muddy RGB mix).
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: track,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 1.8,
          invalidateOnRefresh: true,
        },
      });

      let frontIsA = true;
      colors.forEach((color, i) => {
        if (i === 0) {
          tl.set(layerA, { backgroundColor: color, opacity: 1 }, 0);
          tl.set(layerB, { backgroundColor: color, opacity: 0 }, 0);
          return;
        }

        const incoming = frontIsA ? layerB : layerA;
        const outgoing = frontIsA ? layerA : layerB;

        tl.set(incoming, { backgroundColor: color, opacity: 0 });
        tl.to(incoming, { opacity: 1, duration: 1 }, ">");
        tl.to(outgoing, { opacity: 0, duration: 1 }, "<");
        // Hold a beat on the settled color before the next blend
        tl.to({}, { duration: 0.35 });

        frontIsA = !frontIsA;
      });
    }, wrap);

    const refresh = () => ScrollTrigger.refresh();
    const raf = requestAnimationFrame(refresh);
    const t = window.setTimeout(refresh, 400);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
      ctx.revert();
      document.documentElement.classList.remove("scroll-color-active");
    };
  }, [colors]);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-0"
      style={{ willChange: "opacity" }}
    >
      <div
        ref={layerARef}
        className="absolute inset-0"
        style={{ willChange: "opacity, background-color" }}
      />
      <div
        ref={layerBRef}
        className="absolute inset-0"
        style={{ willChange: "opacity, background-color" }}
      />
    </div>
  );
}
