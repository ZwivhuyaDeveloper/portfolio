import Link from "next/link"
import { site } from "@/data/site"

export function SiteNav({ active }: { active?: string }) {
  return (
    <nav className="absolute inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-[var(--pad)] font-display">
      <Link href="/" className="text-2xl font-black tracking-tight">{site.shortName}.</Link>
      <ul className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.14em] md:flex">
        {site.nav.map(item => (
          <li key={item.label}>
            <Link href={`/${item.href === '#work' ? 'projects' : item.href}`} className={`relative py-2 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 ${active === item.label.toLowerCase() ? 'after:w-full' : ''}`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]">
        <span className="h-2 w-2 rounded-full bg-accent animate-[hero-pulse_2s_infinite]" />
        {site.availability}
      </span>
    </nav>
  )
}