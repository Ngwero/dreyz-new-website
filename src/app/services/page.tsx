import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture design, interiors, 3D visualization, space planning, renovation, and project advisory by Dreyz Interior.",
};

export default function ServicesPage() {
  return (
    <div className="bg-transparent">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_0%,rgba(208,96,64,0.1),transparent_45%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-28 sm:pt-32 md:px-10 md:pb-16 md:pt-40 lg:px-14">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
            Our services
          </p>
          <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-12">
            <div className="md:col-span-7">
              <h1
                data-usal="fade-u duration-1000"
                className="font-display text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.1] text-heading"
              >
                From concept to
                <span className="text-orange"> completion</span>
              </h1>
            </div>
            <div className="md:col-span-5">
              <p
                data-usal="fade-u delay-150 duration-1000"
                className="max-w-md text-sm leading-relaxed text-muted md:text-[15px]"
              >
                Floor planning, lighting, furnishing, rendering, and delivery —
                a full interior design studio for homes, workplaces, and
                hospitality.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary" size="sm">
                  Start a consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Jump index */}
          <nav
            aria-label="Services index"
            className="mt-12 flex gap-2 overflow-x-auto pb-1 md:mt-14 md:flex-wrap md:overflow-visible"
          >
            {services.map((service, i) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="shrink-0 rounded-full border border-ink/10 bg-white/50 px-3.5 py-2 text-[10px] uppercase tracking-[0.14em] text-ink/55 backdrop-blur-sm transition hover:border-orange/40 hover:text-orange"
              >
                <span className="mr-1.5 font-mono text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {service.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Service list */}
      <section className="pb-8 md:pb-12">
        <div className="mx-auto max-w-[1440px] space-y-4 px-5 md:space-y-5 md:px-10 lg:px-14">
          {services.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={service.slug}
                id={service.slug}
                data-usal="fade-u duration-900"
                className="scroll-mt-28 overflow-hidden rounded-[1.75rem] bg-white/45 ring-1 ring-white/60 backdrop-blur-md"
              >
                <div className="grid items-stretch md:grid-cols-12">
                  <div
                    className={`relative min-h-[240px] md:col-span-5 md:min-h-[340px] ${
                      flip ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width:768px) 100vw, 42vw"
                      className="object-cover transition duration-700 hover:scale-[1.03]"
                    />
                  </div>

                  <div
                    className={`flex flex-col justify-center p-6 sm:p-8 md:col-span-7 md:p-10 lg:p-12 ${
                      flip ? "md:order-1" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-orange">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-ink/10" />
                    </div>

                    <h2 className="font-display mt-4 text-2xl text-heading md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm text-stone md:text-[15px]">
                      {service.short}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-[11px] text-ink/65"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink/50 transition hover:text-orange"
                      >
                        Inquire about {service.title}
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
