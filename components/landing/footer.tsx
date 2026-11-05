import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-[var(--pad)] py-[1.6rem] text-[11px] uppercase tracking-[0.16em] text-muted">
      <span className="font-display text-[1.5rem] tracking-[0.01em] text-foreground">
        {site.shortName}
        <i className="not-italic text-accent">.</i>
      </span>
      <span>© 2026 Building digital products</span>
      <Link href="#top">Back to top ↑</Link>
    </footer>
  );
}