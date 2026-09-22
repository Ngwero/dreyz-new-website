"use client";

import { Button } from "@/components/ui/Button";
import { studio } from "@/content/studio";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy/70 py-20 backdrop-blur-xl sm:py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(208,96,64,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1440px] px-4 text-center sm:px-5 md:px-10 lg:px-14">
        <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-orange sm:mb-6 sm:text-[11px] sm:tracking-[0.3em]">
          Begin
        </p>
        <h2
          data-usal="fade-u duration-1000"
          className="font-display mx-auto max-w-4xl text-3xl leading-[1.1] text-heading sm:text-4xl md:text-6xl"
        >
          {studio.cta.title}
        </h2>
        <p
          data-usal="fade-u delay-200 duration-1000"
          className="mx-auto mt-5 max-w-xl text-sm text-ink/60 sm:mt-6 sm:text-base"
        >
          {studio.cta.body}
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <div data-usal="fade-u delay-400 duration-1000">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
          <div data-usal="zoomin delay-600 duration-1200">
            <Button href="/projects" variant="secondary">
              Begin Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
