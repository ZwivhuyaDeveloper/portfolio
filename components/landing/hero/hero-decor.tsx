import { GlobeWire } from '@/components/art/GlobeWire'

export function HeroDecor() {
  return (
    <div className="hero-layer hero-fill hero-deco" aria-hidden="true">
      <i style={{ left: 0, right: 0, top: '10.1%', height: 1 }} />
      <i style={{ left: '79%', right: 0, top: '7.4%', height: 1 }} />
      <i style={{ left: 0, width: '26%', bottom: '8%', height: 1 }} />
      <i
        style={{
          left: '65%',
          top: 0,
          width: 1,
          height: '10%',
          transform: 'rotate(20deg)',
          transformOrigin: 'top',
        }}
      />
      <i className="hero-plus" style={{ left: '81%', top: '3.2%' }} />
      <i className="hero-plus" style={{ left: '19%', top: '7%' }} />
      <i className="hero-plus" style={{ left: '86.5%', top: '19.5%' }} />
      <i className="hero-plus" style={{ left: '77%', top: '43%' }} />
      <i className="hero-plus" style={{ left: '97%', top: '65%' }} />
      <GlobeWire className="hero-globe" />
    </div>
  )
}