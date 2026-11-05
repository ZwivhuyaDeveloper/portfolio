import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function Button({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-display text-xs font-bold uppercase leading-none tracking-[0.16em] text-background transition-colors duration-200 hover:bg-foreground ${className}`}
    >
      {children}
    </Link>
  );
}