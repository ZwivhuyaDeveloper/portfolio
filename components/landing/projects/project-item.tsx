import Link from 'next/link'
import type { Project } from '@/data/projects'
import { TowerArt } from '@/components/art/TowerArt'
import { HallArt } from '@/components/art/HallArt'
import { ImageSlot } from '@/components/ui/image-slot'

export function ProjectItem({
  project,
  reverse,
}: {
  project: Project
  reverse: boolean
}) {
  const Art = project.art === 'tower' ? TowerArt : HallArt
  return (
    <article className={`proj ${reverse ? 'proj-reverse' : ''}`}>
      <div className="proj-text">
        <div className="proj-num">{project.index}</div>
        <div className="proj-cat">{project.category}</div>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>
        <Link href={project.href} className="proj-link">
          View case study →
        </Link>
      </div>
      <ImageSlot
        src={project.image}
        alt={project.alt}
        fallback={<Art className="h-full w-full" />}
        className="proj-slot"
        sizes="(max-width: 900px) 100vw, 66vw"
        grain
      />
    </article>
  )
}