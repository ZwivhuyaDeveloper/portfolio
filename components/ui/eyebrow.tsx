import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-[0.6rem] text-[11px] uppercase tracking-[0.16em] text-accent">
      {children}
    </div>
  );
}