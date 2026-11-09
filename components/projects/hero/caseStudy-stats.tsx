import type { Project } from '@/data/projects'

export function CaseStudyStats({ project }: { project: Project }) {
  const stats = [
    { value: project.year, label: 'Year' },
    { value: project.tech.join(' / '), label: 'Tech stack' },
    { value: project.number, label: 'Project index' },
  ]

  return (
    <div className="absolute left-[82.7%] top-[57.3%] z-[60] flex h-[23.1%] flex-col justify-between border-l border-accent pl-[2.5%] max-[900px]:hidden">
      {stats.map((s, i) => (
        <div key={s.label}>
          <b className="block font-display text-[clamp(1rem,1.4cqw,999px)] font-semibold leading-tight text-[#e9e9e5] max-w-[12ch]">
            {s.value}
          </b>
          <span className="mt-1 block font-display text-[clamp(0.7rem,0.95cqw,999px)] font-medium uppercase leading-[1.2] tracking-[0.14em] text-foreground/80">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  )
}