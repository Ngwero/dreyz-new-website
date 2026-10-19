import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Button } from "@/components/ui/Button";
import { media } from "@/content/media";
import { studio } from "@/content/studio";

export const metadata: Metadata = {
  title: "About Us",
  description: studio.intro,
};

const highlights = [
  { value: "Kampala", label: "Based in Uganda" },
  { value: "2026", label: "Africa Golden Awards" },
  { value: "Full-service", label: "Concept to completion" },
  { value: "5★", label: "Client experience" },
];

export default function AboutPage() {
  const [founder, coFounder, ...team] = studio.team;

  return (
    <div className="bg-transparent">
      {/* Hero — brand + story + photography */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1440px] items-end gap-10 px-5 pb-16 pt-28 sm:pt-32 md:grid-cols-12 md:gap-12 md:px-10 md:pb-24 md:pt-40 lg:px-14">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-orange">
              About Dreyz Interior
            </p>
            <h1
              data-usal="fade-u duration-1000"
              className="font-display text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.1] text-heading"
            >
              Dreyz
              <span className="mt-0.5 block text-orange">Interior</span>
            </h1>
            <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-stone">
              {studio.tagline}
            </p>
            <p
              data-usal="fade-u delay-200 duration-1000"
              className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-[15px]"
            >
              {studio.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="sm">
                Start a consultation
              </Button>
              <Button href="/projects" variant="darkOutline" size="sm">
                View our work
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:col-span-6 md:gap-4 lg:col-span-7 lg:pl-6">
            <div
              data-usal="fade-u delay-100 duration-1000"
              className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem]"
            >
              <Image
                src="/images/about/founders-graduation.png"
                alt="Dreyz Interior founders at Design School Class of 2016"
                fill
                priority
                sizes="(max-width:768px) 50vw, 35vw"
                className="object-cover object-[center_20%]"
              />
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <div
                data-usal="fade-u delay-250 duration-1000"
                className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]"
              >
                <Image
                  src="/images/about/site-visit.png"
                  alt="Dreyz Interior on a site visit"
                  fill
                  sizes="(max-width:768px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div
                data-usal="fade-u delay-400 duration-1000"
                className="relative min-h-[140px] flex-1 overflow-hidden rounded-[1.75rem] md:min-h-0"
              >
                <Image
                  src="/images/about/living-room.png"
                  alt="Dreyz Interior living room with stone feature wall"
                  fill
                  sizes="(max-width:768px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-ink/10 bg-white/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px md:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="px-5 py-8 text-center md:px-8 md:py-10"
            >
              <p className="font-display text-lg text-heading md:text-xl">
                {item.value}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-ink/45">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach + photography */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(69,16,46,0.08),transparent_50%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-orange">
                Our approach
              </p>
              <h2
                data-usal="fade-u duration-900"
                className="font-display text-2xl leading-tight text-heading md:text-3xl"
              >
                Creativity meeting
                <span className="text-orange"> functionality</span>
              </h2>
            </div>
            <p
              data-usal="fade-u delay-150 duration-1000"
              className="max-w-md text-sm leading-relaxed text-muted md:text-right"
            >
              From first consultation to final install — design that works as
              beautifully as it looks.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            {/* Large feature photo */}
            <div
              data-usal="fade-u delay-100 duration-1000"
              className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] md:col-span-5 md:aspect-auto md:min-h-[520px]"
            >
              <Image
                src="/images/about/approach-exterior.png"
                alt="Dreyz Interior residential exterior"
                fill
                sizes="(max-width:768px) 100vw, 40vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 md:p-7">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                  Architecture
                </p>
                <p className="mt-1 font-display text-lg text-white md:text-xl">
                  Form that frames the living
                </p>
              </div>
            </div>

            {/* Text + secondary images */}
            <div className="flex flex-col gap-4 md:col-span-7 md:gap-5">
              <div
                data-usal="fade-u delay-200 duration-1000"
                className="rounded-[1.75rem] bg-white/55 p-6 backdrop-blur-md ring-1 ring-white/60 md:p-8"
              >
                <p className="text-sm leading-relaxed text-muted md:text-[15px]">
                  {studio.philosophy}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                  {studio.consultation.slice(0, 220).trim()}…
                </p>
                <p className="mt-5 border-l-2 border-orange/50 pl-4 font-display text-sm leading-snug text-heading md:text-base">
                  “{studio.quote}”
                </p>
                <div className="mt-6 flex flex-wrap gap-6 border-t border-ink/10 pt-5">
                  {["Consult", "Design", "Deliver"].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-orange">
                        0{i + 1}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-ink/55">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid flex-1 grid-cols-2 gap-4 md:gap-5">
                <div
                  data-usal="fade-u delay-300 duration-1000"
                  className="group relative min-h-[180px] overflow-hidden rounded-[1.5rem] md:min-h-[240px]"
                >
                  <Image
                    src="/images/about/approach-bedroom.png"
                    alt="Dreyz Interior bedroom design"
                    fill
                    sizes="30vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#141414]/45 to-transparent p-4 md:p-5">
                    <p className="text-chalk text-base md:text-lg">Residences</p>
                  </div>
                </div>
                <div
                  data-usal="fade-u delay-400 duration-1000"
                  className="group relative min-h-[180px] overflow-hidden rounded-[1.5rem] md:min-h-[240px]"
                >
                  <Image
                    src="/images/about/approach-office.png"
                    alt="Dreyz Interior commercial office design"
                    fill
                    sizes="30vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#141414]/45 to-transparent p-4 md:p-5">
                    <p className="text-chalk text-base md:text-lg">Workplaces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wide team moment */}
      <section className="mx-4 mb-4 md:mx-10 lg:mx-14">
        <div className="relative aspect-[16/9] min-h-[280px] overflow-hidden rounded-[1.75rem] md:aspect-[2.4/1] md:min-h-[360px]">
          <Image
            src={media.staff.allStaff}
            alt="The Dreyz Interior team"
            fill
            sizes="100vw"
            className="object-cover object-[center_28%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/70 via-[#141414]/25 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex max-w-lg flex-col justify-end p-6 md:justify-center md:p-10 lg:p-14">
            <p className="text-chalk mb-2 text-sm md:text-base">The studio</p>
            <p
              data-usal="fade-u duration-900"
              className="text-chalk text-lg leading-snug md:text-xl lg:text-2xl"
            >
              A team that designs, builds, and finishes together.
            </p>
            <Link
              href="/projects"
              className="mt-5 inline-flex w-fit text-[11px] uppercase tracking-[0.2em] text-white/70 transition hover:text-orange"
            >
              Explore the work →
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-0 px-5 md:grid-cols-2 md:px-10 lg:px-14">
          <div className="border-b border-ink/10 py-10 md:border-b-0 md:border-r md:py-4 md:pr-12 lg:pr-16">
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-orange">
              Mission
            </p>
            <h2 className="font-display text-xl text-heading md:text-2xl">
              Luxury with purpose
            </h2>
            <p
              data-usal="fade-u delay-100 duration-1000"
              className="mt-4 text-sm leading-relaxed text-muted"
            >
              {studio.mission}
            </p>
          </div>
          <div className="py-10 md:py-4 md:pl-12 lg:pl-16">
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-orange">
              Vision
            </p>
            <h2 className="font-display text-xl text-heading md:text-2xl">
              Spaces that elevate living
            </h2>
            <p
              data-usal="fade-u delay-200 duration-1000"
              className="mt-4 text-sm leading-relaxed text-muted"
            >
              {studio.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Why Dreyz — editorial list, no cards */}
      <section className="paper-section py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
              Why Dreyz
            </p>
            <h2
              data-usal="fade-u duration-900"
              className="font-display text-2xl text-heading md:text-3xl"
            >
              A studio built around your vision
            </h2>
          </div>
          <div className="grid gap-0 border-t border-ink/10 md:grid-cols-3">
            {studio.values.map((v, i) => (
              <div
                key={v.title}
                data-usal={
                  i === 0
                    ? "fade-u delay-0 duration-800"
                    : i === 1
                      ? "fade-u delay-150 duration-900"
                      : "fade-u delay-300 duration-1000"
                }
                className="border-b border-ink/10 py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:last:border-r-0 first:md:pl-0 last:md:pr-0"
              >
                <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-orange">
                  0{i + 1}
                </p>
                <h3 className="font-display text-lg text-heading md:text-xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
                Leadership
              </p>
              <h2
                data-usal="fade-u duration-900"
                className="font-display text-2xl text-heading md:text-3xl"
              >
                The people behind the work
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Founders and senior talent guiding every Dreyz Interior commission
              from first sketch to final install.
            </p>
          </div>

          {(founder || coFounder) && (
            <div className="mb-10 grid gap-6 sm:grid-cols-2 md:max-w-2xl md:gap-8">
              {[founder, coFounder].filter(Boolean).map((member, i) => (
                <article
                  key={member!.name}
                  data-usal={
                    i === 0
                      ? "fade-u delay-0 duration-900"
                      : "fade-u delay-200 duration-1000"
                  }
                  className="group"
                >
                  <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-2xl bg-paper-dim">
                    <Image
                      src={member!.image}
                      alt={member!.name}
                      fill
                      sizes="(max-width:768px) 50vw, 280px"
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="font-display text-lg text-heading md:text-xl">
                    {member!.name}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-orange">
                    {member!.role}
                  </p>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                    {member!.bio}
                  </p>
                </article>
              ))}
            </div>
          )}

          <div
            data-usal="fade-u duration-900"
            className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
          >
            {team.map((member) => (
              <article key={member.name} className="group">
                <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-2xl bg-paper-dim">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width:768px) 50vw, 220px"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-display text-base text-heading md:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-orange">
                  {member.role}
                </p>
                <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-ink/55 md:text-sm">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Design school */}
      <section className="paper-section py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-orange">
                Atelier
              </p>
              <h2
                data-usal="fade-u duration-900"
                className="font-display text-2xl text-heading md:text-3xl"
              >
                Design school life
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted md:col-span-5">
              Mentorship, craft, and critique — the culture that keeps our studio
              sharp and our projects grounded in real making.
            </p>
          </div>
          <div
            data-usal="fade-u duration-900"
            className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
          >
            {media.school.slice(0, 8).map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-[1.25rem]"
              >
                <Image
                  src={src}
                  alt={`Dreyz design school ${i + 1}`}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/process"
              className="text-[11px] uppercase tracking-[0.2em] text-ink/50 transition hover:text-orange"
            >
              See how we work →
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
