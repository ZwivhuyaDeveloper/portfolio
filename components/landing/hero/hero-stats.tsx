import { site } from '@/data/site'

export function HeroStats() {
  return (
    <div className="hero-layer hero-stats">
      {site.stats.map((s) => (
        <div key={s.label}>
          <b>{s.value}</b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  )
}