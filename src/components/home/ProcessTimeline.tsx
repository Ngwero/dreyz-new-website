"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/content/studio";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    registerGsap();
    const section = ref.current;
    if (!section) return;

    const line = section.querySelector("[data-progress-line]") as HTMLElement | null;
    const items = Array.from(
      section.querySelectorAll<HTMLElement>("[data-step]")
    );

    const ctx = gsap.context(() => {
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 55%",
              end: "bottom 65%",
              scrub: true,
            },
          }
        );
      }

      items.forEach((item, i) => {
        // Crisp entrance — no blur, settles to full opacity
        gsap.fromTo(
          item,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        ScrollTrigger.create({
          trigger: item,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="ink-section py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
            How It Works
          </p>
          <h2
            data-usal="fade-u split-word split-delay-80"
            className="font-display text-4xl text-heading md:text-6xl"
          >
            Process
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            As an interior designer, coming up with a complete project involves a
            structured approach to ensure the final design meets the client&apos;s
            needs and preferences.
          </p>
        </div>

        <div className="relative grid gap-0 md:grid-cols-[80px_1fr]">
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-navy/10" />
            <div
              data-progress-line
              className="absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2 bg-orange"
            />
          </div>

          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step, i) => {
              const isActive = active === i;
              const isPast = active > i;

              return (
                <div
                  key={step.number}
                  data-step
                  className={cn(
                    "relative grid gap-3 border-t pt-8 transition-all duration-500 md:grid-cols-[120px_1fr_1.35fr] md:gap-6",
                    isActive ? "border-orange/50" : "border-line"
                  )}
                >
                  {/* Active marker on timeline */}
                  <span
                    className={cn(
                      "absolute -left-[52px] top-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 transition-all duration-500 md:block",
                      isActive
                        ? "scale-125 border-orange bg-orange"
                        : isPast
                          ? "border-orange bg-orange/40"
                          : "border-navy/20 bg-white"
                    )}
                    aria-hidden
                  />

                  <p
                    className={cn(
                      "font-display text-3xl transition-colors duration-500",
                      isActive ? "text-orange" : isPast ? "text-orange/70" : "text-ink/30"
                    )}
                  >
                    {step.number}
                  </p>

                  <h3
                    className={cn(
                      "font-display text-2xl transition-colors duration-500 md:text-3xl",
                      isActive ? "text-heading" : isPast ? "text-heading/80" : "text-ink/45"
                    )}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={cn(
                      "text-sm leading-relaxed transition-all duration-500 md:text-base",
                      isActive
                        ? "text-ink/80 opacity-100"
                        : isPast
                          ? "text-muted opacity-90"
                          : "text-ink/40 opacity-70"
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
