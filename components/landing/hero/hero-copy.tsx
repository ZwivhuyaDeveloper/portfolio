import Link from 'next/link'
import { site } from '@/data/site'

export function HeroCopy() {
  return (
    <div className="hero-layer hero-copy">
      <div className="hero-tag">
        {site.taglineLines.map((line, i) => (
          <span key={line}>
            {line}
            {i < site.taglineLines.length - 1 ? <br /> : null}
          </span>
        ))}
      </div>
      <h1 className="hero-h1">
        <span className="hero-h1-line white-grad">{site.heroHeading[0]}</span>
        <span className="hero-h1-line grad">{site.heroHeading[1]}</span>
      </h1>
      <p className="hero-p">{site.heroCopy}</p>
      <div className="hero-btns">
        <Link href="#work" className="hero-btn">
          View projects <b>→</b>
        </Link>
        <Link href="#contact" className="hero-lnk">
          Contact me
        </Link>
      </div>
    </div>
  )
}