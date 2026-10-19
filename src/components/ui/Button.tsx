import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm tracking-[0.14em] uppercase transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "glass-button text-white px-7 py-4",
        secondary:
          "glass-chip rounded-full text-ink hover:border-orange hover:text-orange px-7 py-4",
        ghost:
          "text-ink/70 hover:text-orange px-2 py-2 underline-offset-8 hover:underline",
        dark: "bg-ink text-white hover:bg-orange px-7 py-4",
        darkOutline:
          "border border-ink/20 text-ink hover:border-orange hover:bg-orange hover:text-white px-7 py-4",
        light:
          "border border-white/40 text-white hover:bg-white hover:text-ink px-7 py-4",
      },
      size: {
        default: "min-h-12",
        sm: "min-h-10 px-5 text-xs",
        lg: "min-h-14 px-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);
    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
