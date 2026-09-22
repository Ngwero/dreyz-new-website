/** USAL Cards & Timing presets — https://usal.dev/#timing */
export const USAL_TIMING = [
  "fade-u delay-0 duration-800",
  "zoomin delay-200 duration-1000",
  "fade-r delay-400 duration-1200",
  "fade-ur delay-600 duration-1500 blur",
] as const;

export function usalTiming(index: number) {
  return USAL_TIMING[index % USAL_TIMING.length];
}

/** Parent-driven stagger for card grids */
export const USAL_SPLIT_ITEMS = "split-item split-fade-u split-delay-100";
