import { skills } from '@/data/skills'
import { Eyebrow } from '../ui/eyebrow'


export function SkillsSection() {
  const rowA = skills.slice(0, 5)
  const rowB = skills.slice(5, 10)
  return (
    <section id="skills" className="section skills-grid">
      <div>
        <Eyebrow>Technology</Eyebrow>
        <h2 className="display" style={{ fontSize: '3.6rem' }}>
          Skills<span className="lime">_</span>
        </h2>
      </div>
      {rowA.map((s) => (
        <div key={s} className="skill-cell">
          {s}
        </div>
      ))}
      <div />
      {rowB.map((s) => (
        <div key={s} className="skill-cell">
          {s}
        </div>
      ))}
    </section>
  )
}