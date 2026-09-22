import type { Metadata } from "next";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Our design process — discovery, concept, development, visualization, detailing, and delivery.",
};

export default function ProcessPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-[1440px] px-5 pb-8 pt-24 sm:pt-28 md:px-10 md:pt-36 lg:px-14">
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
            How It Works
          </p>
          <h1
            data-usal="fade-u split-word split-delay-80"
            className="font-display max-w-3xl text-5xl text-heading md:text-7xl"
          >
            A structured approach from consultation to completion
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            As an interior designer, coming up with a complete project involves
            a structured approach to ensure the final design meets the
            client&apos;s needs and preferences.
          </p>
        </div>
      </section>
      <ProcessTimeline />
      <FinalCTA />
    </div>
  );
}
