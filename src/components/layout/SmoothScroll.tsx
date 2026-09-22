"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();
    // Keep ScrollTrigger in sync with Lenis via RAF when available
    const onRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", onRefresh);
    const t = window.setTimeout(onRefresh, 400);
    return () => {
      window.removeEventListener("load", onRefresh);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
}

/** Helper: sync GSAP ScrollTrigger with Lenis when needed in scenes */
export function useGsapContext() {
  useEffect(() => {
    registerGsap();
    gsap.ticker.lagSmoothing(0);
  }, []);
}
