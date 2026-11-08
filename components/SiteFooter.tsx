import Link from "next/link"
import { site } from "@/data/site"

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-line px-[var(--pad)] py-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted md:flex-row">
      <span className="font-display text-2xl text-foreground">{site.shortName}.</span>
      <span>© 2026 • Building digital products</span>
      <div className="flex gap-6">
        {site.nav.map(item => (
          <Link key={item.label} href={`/${item.href === '#work' ? 'projects' : item.href}`} className="hover:text-accent">{item.label}</Link>
        ))}
      </div>
      <Link href="#" className="grid h-10 w-10 place-items-center rounded-full border border-muted hover:text-accent hover:border-accent">↑</Link>
    </footer>
  )
}