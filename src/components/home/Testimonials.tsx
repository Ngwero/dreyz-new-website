"use client";

import { testimonials } from "@/content/studio";
import { usalTiming } from "@/lib/usal";

export function Testimonials() {
  return (
    <section className="ink-section py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
            Testimonials
          </p>
          <h2
            data-usal="fade-u split-word split-delay-70"
            className="font-display max-w-3xl text-4xl text-heading md:text-5xl"
          >
            What Our Clients Say About Dreyz Interior
          </h2>
          <p className="mt-4 text-sm text-gold">
            ★★★★★ Rated 5 out of 5 — Average rating 5 / 5
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              data-usal={usalTiming(i)}
              className="glass flex h-full flex-col rounded-2xl p-6 md:p-8"
            >
              <p className="flex-1 text-sm leading-relaxed text-muted">
                “{t.quote}”
              </p>
              <footer className="mt-6 border-t border-white/40 pt-4 text-sm text-ink">
                {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
