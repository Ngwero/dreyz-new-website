"use client";

import { serviceMarquee } from "@/content/services";

export function MarqueeStrip() {
  const items = [...serviceMarquee, ...serviceMarquee];
  return (
    <section className="overflow-hidden border-y border-line bg-olive py-3 sm:py-5">
      <div className="animate-marquee flex w-max gap-6 whitespace-nowrap sm:gap-10">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-[11px] uppercase tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.22em]"
          >
            <span className="mr-6 text-white/70 sm:mr-10">·</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
