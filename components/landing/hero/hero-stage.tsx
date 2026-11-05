"use client";

import type { ReactNode } from "react";
import { usePointerParallax } from "@/hooks/usePointerParallax";

export function HeroStage({ children }: { children: ReactNode }) {
  const ref = usePointerParallax<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="relative h-full w-full font-display [container-type:size]"
    >
      {children}
    </div>
  );
}