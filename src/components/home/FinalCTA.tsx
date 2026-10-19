"use client";

import { Button } from "@/components/ui/Button";
import { studio } from "@/content/studio";

export function FinalCTA() {
  return (
    <section className="relative px-4 py-16 sm:px-8 md:py-24">
      <div className="consultation-shell relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] p-5 sm:rounded-[3rem] sm:p-10 md:p-16">
      <div className="glass-dark relative rounded-[1.5rem] px-5 py-14 text-center sm:rounded-[2rem] md:px-10 md:py-20">
        <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-white/65 sm:mb-6 sm:text-[11px] sm:tracking-[0.3em]">
          Your next chapter starts here
        </p>
        <h2
          data-usal="fade-u duration-1000"
          className="font-display mx-auto max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl"
        >
          Let’s make room for something extraordinary.
        </h2>
        <p
          data-usal="fade-u delay-200 duration-1000"
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base"
        >
          {studio.cta.body}
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <div data-usal="fade-u delay-400 duration-1000">
            <Button href="/contact" variant="primary">
              Start a conversation ↗
            </Button>
          </div>
          <div data-usal="zoomin delay-600 duration-1200">
            <Button href="/projects" variant="light">
              Explore projects
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
