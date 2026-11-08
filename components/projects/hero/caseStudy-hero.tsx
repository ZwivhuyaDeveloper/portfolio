import Link from 'next/link'
import type { Project } from '@/data/projects'
import { ProjectImageSlot } from '@/components/projects/ProjectImageSlot'
 
const grid =
  '[background-image:linear-gradient(to_right,rgba(242,242,240,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,242,240,.05)_1px,transparent_1px)] [background-size:6rem_6rem] [mask-image:linear-gradient(180deg,#000_30%,transparent)]'
 
const corners = [
  'left-[-6px] top-[-6px] border-l-2 border-t-2',
  'right-[-6px] top-[-6px] border-r-2 border-t-2',
  'bottom-[-6px] left-[-6px] border-b-2 border-l-2',
  'bottom-[-6px] right-[-6px] border-b-2 border-r-2',
]
 
export function CaseStudyHero({ project }: { project: Project }) {
  const name = project.title.join(' ')
 
  return (
    <section className="relative isolate overflow-hidden border-b border-line pb-16 pt-32 md:pb-24 md:pt-40">
      {/* technical grid + crosshairs */}
      <div aria-hidden className={`absolute inset-0 -z-20 ${grid}`} />
      {['left-[8%] top-[22%]', 'right-[8%] top-[38%]', 'left-[46%] bottom-[10%]'].map((p) => (
        <span key={p} aria-hidden className={`absolute -z-10 hidden h-3 w-3 md:block ${p} before:absolute before:left-1/2 before:h-full before:w-px before:bg-foreground/70 after:absolute after:top-1/2 after:h-px after:w-full after:bg-foreground/70`} />
      ))}
 
      {/* lime slab */}
      <div aria-hidden className="absolute inset-y-0 right-[22%] -z-10 hidden w-[11%] bg-gradient-to-b from-accent to-[#7fb800] md:block">
        <span className="absolute inset-0 [background-image:linear-gradient(115deg,transparent_55%,rgba(5,5,5,.4))]" />
        <span className="mono absolute bottom-8 left-1/2 -translate-x-1/2 text-background [writing-mode:vertical-rl]">
          Case study / {project.number}
        </span>
      </div>
 
      <div className="relative z-10 grid gap-12 px-pad md:grid-cols-12 md:gap-6">
        {/* Copy */}
        <div className="relative z-20 flex flex-col justify-center md:col-span-5">
          <Link href="/projects" className="mono group inline-flex w-fit items-center gap-3 border-b border-accent pb-1 text-accent">
            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to projects
          </Link>
 
          <h1 className="d up mt-10 text-[clamp(3.4rem,7.8vw,8.2rem)] font-black leading-[.84] tracking-[-.01em] [text-shadow:0_0_60px_rgba(5,5,5,.9)]">
            <span className="block">{project.title[0]}</span>
            <span className="block">{project.title[1]}</span>
          </h1>
 
          <p className="mono mt-8 flex items-center gap-4 text-foreground">
            {project.type}
            <i aria-hidden className="h-px flex-1 bg-line" />
          </p>
          <p className="mt-6 max-w-[26rem] text-[15px] leading-[1.75] text-muted">{project.description}</p>
 
          <div className="mt-10 flex flex-wrap items-center gap-8">
            {project.href && (
              <Link href={project.href} className="btn">View live project <span aria-hidden>→</span></Link>
            )}
            <a href="#challenge" className="mono group border-b border-foreground pb-1 transition-colors hover:border-accent hover:text-accent">
              Scroll <span aria-hidden className="inline-block transition-transform group-hover:translate-y-1">↓</span>
            </a>
          </div>
        </div>
 
        {/* Hero image */}
        <div className="relative z-0 md:col-span-5 md:-ml-28 md:self-center">
          <div className="relative">
            {corners.map((c) => (
              <i key={c} aria-hidden className={`pointer-events-none absolute z-20 h-4 w-4 border-accent ${c}`} />
            ))}
            <ProjectImageSlot
              art={project.art}
              src={project.cover}
              alt={`${name} main screen`}
              className="aspect-[16/10] w-full shadow-[0_30px_80px_rgba(0,0,0,.7)]"
            />
          </div>
          <p className="mono mt-3 flex justify-between text-muted"><span>Fig. 00</span><span>Main screen</span></p>
        </div>
 
        {/* Project info */}
        <aside className="md:col-span-2 md:border-l md:border-line md:pl-6 md:pt-4">
          <h2 className="mono mb-6 border-b border-line pb-3 text-accent">Project info</h2>
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-1 md:gap-7">
            {[
              ['Category', project.category],
              ['Tech stack', project.tech.join(', ')],
              ['Year', project.year],
              ['Index', `Project / ${project.number}`],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="mono text-[10px] text-muted">{k}</dt>
                <dd className="mt-2 text-[15px] leading-snug text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
