import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-[var(--pad)] py-[1.6rem] text-[11px] uppercase tracking-[0.16em] text-white">
      <Link
        href="/"
        aria-label="Home"
        className="font-display text-[clamp(1.7rem,1.9cqw,999px)] italic font-extrabold leading-none tracking-[0.01em]"
      >
        ZW<i className="not-italic text-accent">.</i>
      </Link>
      <span>© 2026 Building digital products</span>
      <Link href="#top">Back to top ↑</Link>
    </footer>
  );
}