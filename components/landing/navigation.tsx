import Link from "next/link";
import { site } from "@/data/site";

export function Navigation() {
  return (
    <nav
      aria-label="Primary"
      className="absolute inset-x-0 top-0 z-[70] flex h-[7%] min-h-14 items-center justify-between px-[3.4%] font-display animate-[hero-fade_1.2s_0.4s_both]"
    >
      <Link
        href="#top"
        aria-label="Home"
        className="font-display text-[clamp(1.7rem,2.3cqw,999px)] font-extrabold leading-none tracking-[0.01em]"
      >
        DEV.
      </Link>

      <ul className="absolute left-1/2 m-0 flex -translate-x-1/2 list-none gap-[3.1cqw] p-0 font-display text-[clamp(0.8rem,0.98cqw,999px)] font-semibold uppercase leading-none tracking-[0.14em] max-[900px]:hidden">
        {site.nav.map((item, i) => (
          <li key={item.href}>
            <Link
              href={item.href}
              data-active={i === 0 ? "true" : undefined}
              className="relative block py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full data-[active=true]:after:w-full"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <span className="flex items-center gap-[0.7cqw] font-display text-[clamp(0.75rem,0.92cqw,999px)] font-semibold uppercase leading-none tracking-[0.12em] max-[900px]:hidden">
        <span className="h-[0.75cqw] min-h-2 w-[0.75cqw] min-w-2 rounded-full bg-accent animate-[hero-pulse_2s_infinite]" />
        {site.availability}
      </span>
    </nav>
  );
}