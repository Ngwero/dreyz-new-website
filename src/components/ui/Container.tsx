import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14", className)}>
      {children}
    </Tag>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-xs uppercase tracking-[0.28em]",
            light ? "text-stone-light" : "text-stone"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        data-usal="fade-u split-word split-delay-80"
        className={cn(
          "font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl",
          light ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-xl text-base leading-relaxed md:text-lg",
            light ? "text-muted" : "text-ink/65"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-current/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em]",
        className
      )}
    >
      {children}
    </span>
  );
}
