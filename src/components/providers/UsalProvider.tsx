"use client";

import { USALProvider } from "@usal/react";
import type { ReactNode } from "react";

export function UsalProvider({ children }: { children: ReactNode }) {
  return (
    <USALProvider
      config={{
        once: true,
        defaults: {
          duration: 1000,
          easing: "ease-out",
          threshold: 15,
          splitDelay: 60,
        },
      }}
    >
      {children}
    </USALProvider>
  );
}
