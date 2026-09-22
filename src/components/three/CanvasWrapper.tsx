"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, type ReactNode } from "react";
import { useIsMobile, useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export function CanvasWrapper({
  children,
  className,
  camera = { position: [0, 1.2, 6], fov: 42 },
  fallback,
}: {
  children: ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov?: number };
  fallback?: ReactNode;
}) {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={cn("relative bg-concrete", className)}>
        {fallback ?? <div className="absolute inset-0 bg-gradient-to-br from-concrete to-ink" />}
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <Canvas
        dpr={isMobile ? [1, 1.25] : [1, 1.75]}
        camera={camera}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
      {fallback}
    </div>
  );
}
