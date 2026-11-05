import Link from 'next/link'
import { site } from '@/data/site'

export function Navigation() {
  return (
    <nav aria-label="Primary" className="hero-nav">
      <Link href="#top" className="hero-logo" aria-label="Home">
        DEV.
      </Link>
      <ul className="hero-links">
        {site.nav.map((item, i) => (
          <li key={item.href}>
            <Link href={item.href} data-active={i === 0 ? 'true' : undefined}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <span className="hero-avail">
        <span className="hero-dot" />
        {site.availability}
      </span>
    </nav>
  )
}