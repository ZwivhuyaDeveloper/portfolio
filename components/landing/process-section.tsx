import { processSteps } from '@/data/skills'
import { Eyebrow } from '../ui/eyebrow'


export function ProcessSection() {
  return (
    <section id="experience" className="section proc-grid">
      <div>
        <Eyebrow>My process</Eyebrow>
        <h2 className="display" style={{ fontSize: '3.6rem' }}>
          How I
          <br />
          work<span className="lime">_</span>
        </h2>
      </div>
      {processSteps.map((step) => (
        <div key={step.n} className="proc-step" data-n={step.n}>
          <b>{step.title}</b>
          <span>{step.body}</span>
        </div>
      ))}
    </section>
  )
}