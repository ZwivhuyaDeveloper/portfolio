import { site } from '@/data/site'

export function HeroMetadata() {
  return (
    <>
      <div className="hero-layer hero-strip">
        <i />
        <span>{site.stack}</span>
      </div>
      <div className="hero-layer hero-scroll">
        <span>Scroll to explore</span>
        <span className="hero-circ">↓</span>
      </div>
    </>
  )
}