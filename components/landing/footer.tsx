import Link from 'next/link'
import { site } from '@/data/site'

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer-logo">
        {site.shortName}
        <i>.</i>
      </span>
      <span>© 2026 Building digital products</span>
      <Link href="#top">Back to top ↑</Link>
    </footer>
  )
}