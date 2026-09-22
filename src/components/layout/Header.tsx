"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { media } from "@/content/media";
import { studio } from "@/content/studio";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/services", label: "SERVICES" },
  { href: "/projects", label: "AIRBNBS" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/process", label: "RESOURCES" },
];

function SocialIcons({ className }: { className?: string }) {
  const icons: Record<string, ReactNode> = {
    Facebook: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#fff" aria-hidden>
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.4 3h-2.7v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
    X: (
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="#fff" aria-hidden>
        <path d="M18.2 2h3.3l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.3 22H2l7.7-8.8L1 2h6.8l4.7 6.2L18.2 2zm-1.2 18h1.8L7.1 4H5.2l11.8 16z" />
      </svg>
    ),
    Instagram: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#fff" aria-hidden>
        <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm6.4-8.5a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0zM12 2c-2.7 0-3 .01-4.1.06-2.8.13-4.2 1.5-4.3 4.3C3.5 7.5 3.5 7.8 3.5 12s0 4.5.06 5.6c.13 2.8 1.5 4.2 4.3 4.3 1.1.05 1.4.06 4.1.06s3 0 4.1-.06c2.8-.13 4.2-1.5 4.3-4.3.05-1.1.06-1.4.06-5.6s0-4.5-.06-5.6c-.13-2.8-1.5-4.2-4.3-4.3C15 2.01 14.7 2 12 2zm0 1.8c2.7 0 3 .01 4 .06 2 .09 2.9 1 3 3 .05 1 .06 1.3.06 4.1s0 3.1-.06 4.1c-.1 2-1 2.9-3 3-1 .05-1.3.06-4 .06s-3 0-4-.06c-2-.1-2.9-1-3-3-.05-1-.06-1.3-.06-4.1s0-3.1.06-4.1c.1-2 1-2.9 3-3 1-.05 1.3-.06 4-.06z" />
      </svg>
    ),
  };

  const brandClass: Record<string, string> = {
    Facebook: "bg-[#1877F2] hover:bg-[#0f5fd0] hover:shadow-[0_4px_14px_rgba(24,119,242,0.45)]",
    X: "bg-black hover:bg-[#111] hover:shadow-[0_4px_14px_rgba(0,0,0,0.35)]",
    Instagram:
      "bg-[linear-gradient(135deg,#f58529,#dd2a7b,#8134af,#515bd4)] hover:brightness-110 hover:shadow-[0_4px_14px_rgba(221,42,123,0.4)]",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {studio.contact.socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95 sm:h-[1.85rem] sm:w-[1.85rem]",
            brandClass[s.label] ?? "bg-slate"
          )}
        >
          {icons[s.label]}
        </a>
      ))}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string, label: string) => {
    if (label === "AIRBNBS") return false;
    if (href === "/") return pathname === "/";
    if (label === "PROJECTS") return pathname.startsWith("/projects");
    return pathname.startsWith(href);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-2 pt-3 safe-top sm:px-4 sm:pt-4 md:px-6 md:pt-5">
      <motion.div
        layout
        className={cn(
          "pointer-events-auto relative mx-auto flex w-full max-w-[1140px] items-center justify-between gap-2 rounded-full px-2.5 py-1.5 transition-all duration-500 sm:gap-3 sm:px-3 sm:py-2 md:gap-4 md:px-4 md:py-2",
          scrolled ? "glass-nav-scrolled" : "glass-nav",
          open && "rounded-[1.5rem] lg:rounded-full"
        )}
      >
        <Link
          href="/"
          className="relative z-20 shrink-0 rounded-full pl-0.5 transition hover:opacity-80 sm:pl-1"
          onClick={() => setOpen(false)}
        >
          <Image
            src={media.logo}
            alt="Dreyz Interior"
            width={200}
            height={200}
            className="h-11 w-auto bg-transparent object-contain sm:h-12 md:h-14"
            priority
            unoptimized
          />
        </Link>

        <nav
          aria-label="Menu"
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 lg:flex"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href, link.label);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative rounded-full px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em] transition-all duration-300 xl:px-3 xl:text-[11px]",
                  active
                    ? "bg-olive/85 text-white shadow-[0_4px_14px_rgba(160,176,36,0.35)] backdrop-blur-md"
                    : "text-ink/55 hover:glass-chip hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-20 flex shrink-0 items-center gap-2 sm:gap-2.5 md:gap-3">
          <SocialIcons className="hidden md:flex" />

          <Link
            href="/contact"
            className="group relative hidden overflow-hidden rounded-full bg-olive px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_4px_16px_rgba(160,176,36,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(160,176,36,0.45)] sm:inline-flex md:px-5 md:py-2.5 md:text-[11px]"
          >
            <span className="relative z-10">Enroll Now</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-full" />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 lg:hidden",
              open ? "bg-olive text-white" : "glass-chip text-ink hover:bg-white/70"
            )}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="relative flex h-3.5 w-[17px] flex-col justify-between">
              <span
                className={cn(
                  "block h-[1.5px] w-full origin-center bg-current transition duration-300",
                  open && "translate-y-[6px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] w-full bg-current transition duration-200",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] w-full origin-center bg-current transition duration-300",
                  open && "-translate-y-[6px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 max-h-[min(72vh,540px)] overflow-y-auto overflow-x-hidden rounded-[1.35rem] glass-strong lg:hidden"
              aria-label="Mobile menu"
            >
              <ul className="space-y-1 p-3 sm:p-4">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href, link.label);
                  return (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-3.5 text-[13px] font-medium uppercase tracking-[0.08em] transition",
                          active
                            ? "bg-olive/90 text-white backdrop-blur-md"
                            : "text-ink/70 hover:bg-white/60 hover:text-ink hover:backdrop-blur-sm"
                        )}
                      >
                        {link.label}
                        <span className={cn("text-sm", active ? "opacity-80" : "opacity-30")}>
                          →
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="flex flex-col items-center gap-4 border-t border-ink/5 px-4 py-5 sm:px-5 md:hidden">
                <SocialIcons />
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-olive px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_6px_20px_rgba(160,176,36,0.35)]"
                >
                  Enroll Now
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
