import Link from 'next/link'
import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/ui/section-heading'
import { ProjectItem } from './project-item'

export function ProjectShowcase() {
  return (
    <section id="work" className="section">
      <SectionHeading
        eyebrow="Selected work"
        rule
        action={
          <Link href="#work" className="u lime">
            View all →
          </Link>
        }
      >
        Projects<span className="lime">_</span>
      </SectionHeading>

      {projects.map((p, i) => (
        <ProjectItem key={p.id} project={p} reverse={i % 2 === 1} />
      ))}
    </section>
  )
}