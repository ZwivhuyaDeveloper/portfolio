import Link from 'next/link'
import type { Project } from '@/data/projects'
import { ProjectImageSlot } from '@/components/projects/ProjectImageSlot'

const pad2 = (n: number) => String(n).padStart(2, '0')

type Props = { project: Project; prev: Project; next: Project; totalProjects: number }

export function CaseStudyDetails({ project, prev, next, totalProjects }: Props) {
  const name = project.title.join(' ')

  return (
    <>
      {/* 01 - The Challenge (Mirrors ProjectItems exactly) */}
      <section id="challenge" className="border-b border-line px-pad py-16 md:py-24">
        <article className="group grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-8">
          
          {/* 1. Title / Text */}
          <div className="md:col-span-3 md:col-start-1 pl-5 md:pl-10">
            <div className="font-display italic font-black text-[clamp(5rem,12vw,11rem)] leading-[0.8] text-transparent [-webkit-text-stroke:1px_var(--color-line)] transition-[-webkit-text-stroke-color] duration-300 group-hover:[-webkit-text-stroke-color:var(--color-accent)]">
              01
            </div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-accent">
              Context
            </div>
            <h3 className="my-3 mt-[0.6rem] mb-[0.8rem] font-display italic font-extrabold uppercase text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.88] w-full">
              The Challenge.
            </h3>
            <p className="text-[clamp(1rem,2.0vw,1.25rem)] mb-4 text-muted">
              {project.challenge}
            </p>
          </div>

          {/* 2. Image */}
          <div className="md:col-span-6 md:col-start-6">
            <ProjectImageSlot
              art="hall"
              src={project.gallery[0]?.src || project.cover}
              alt={`${name} challenge`}
              className={`aspect-video [&_img]:transition-transform [&_img]:duration-[600ms] [&_svg]:transition-transform [&_svg]:duration-[600ms] group-hover:[&_img]:scale-[1.04] group-hover:[&_svg]:scale-[1.04]`}
            />
          </div>

          {/* 3. Meta Far Right */}
          <dl className="mono grid gap-6 md:col-span-3 md:col-start-12 md:border-l md:border-line md:pl-6">
            <div>
              <dt className="sr-only">Keywords</dt>
              <dd className="leading-6 text-foreground">
                {project.keywords.map(k => <span key={k} className="block">{k}</span>)}
              </dd>
            </div>
          </dl>

        </article>
      </section>

      {/* 02 - The Solution (Mirrors ProjectItems exactly) */}
      <section className="border-b border-line px-pad py-16 md:py-24">
        <article className="group grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-8">
          
          {/* 1. Title / Text */}
          <div className="md:col-span-3 md:col-start-1 pl-5 md:pl-10">
            <div className="font-display italic font-black text-[clamp(5rem,12vw,11rem)] leading-[0.8] text-transparent [-webkit-text-stroke:1px_var(--color-line)] transition-[-webkit-text-stroke-color] duration-300 group-hover:[-webkit-text-stroke-color:var(--color-accent)]">
              02
            </div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-accent">
              Approach
            </div>
            <h3 className="my-3 mt-[0.6rem] mb-[0.8rem] font-display italic font-extrabold uppercase text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.88] w-full">
              The Solution.
            </h3>
            <p className="text-[clamp(1rem,2.0vw,1.25rem)] mb-4 text-muted">
              {project.solution}
            </p>
          </div>

          {/* 2. Image */}
          <div className="md:col-span-6 md:col-start-6">
            <ProjectImageSlot
              art="chart"
              src={project.gallery[1]?.src || project.cover}
              alt={`${name} solution`}
              className={`aspect-video [&_img]:transition-transform [&_img]:duration-[600ms] [&_svg]:transition-transform [&_svg]:duration-[600ms] group-hover:[&_img]:scale-[1.04] group-hover:[&_svg]:scale-[1.04]`}
            />
          </div>

          {/* 3. Meta Far Right */}
          <dl className="mono grid gap-6 md:col-span-3 md:col-start-12 md:border-l md:border-line md:pl-6">
            <div>
              <dt className="sr-only">Tech Stack</dt>
              <dd className="leading-6 text-foreground">
                {project.tech.map(t => <span key={t} className="block">{t}</span>)}
              </dd>
            </div>
          </dl>

        </article>
      </section>

      {/* 03 - Gallery (4 Uniform Images Grid) */}
      <section aria-labelledby="gallery" className="border-b border-line px-pad py-16 md:py-24">
        <div className="mb-12 flex items-end gap-6">
          <h2 id="gallery" className="d text-[clamp(2.6rem,5vw,4.6rem)] font-black">
            Gallery<span className="text-accent">_</span>
          </h2>
          <hr className="mb-4 flex-1 border-line" />
          <span className="mono mb-3 text-muted">{pad2(project.gallery.length)} images</span>
        </div>
        
        {/* Strict 4-column grid for perfectly uniform images */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 pl-5 md:pl-10">
          {project.gallery.map((g, n) => (
            <figure key={`${g.src}-${n}`} className="group flex flex-col">
              <ProjectImageSlot 
                art={g.art} 
                src={g.src} 
                alt={`${name}: ${g.caption}`} 
                className={`aspect-[4/3] w-full [&_img]:transition-transform [&_img]:duration-[600ms] [&_svg]:transition-transform [&_svg]:duration-[600ms] group-hover:[&_img]:scale-[1.04] group-hover:[&_svg]:scale-[1.04]`}
              >
                <span className="mono absolute left-3 top-3 z-10 bg-background/80 px-2 py-1 text-accent">
                  Fig. {pad2(n + 1)}
                </span>
              </ProjectImageSlot>
              
              <figcaption className="mono mt-3 flex justify-between border-t border-line pt-3 text-muted transition-colors group-hover:border-accent group-hover:text-foreground">
                <span className="truncate pr-4">{g.caption}</span>
                <span className="text-accent transition-transform group-hover:rotate-90">+</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 04 - Key features + pager */}
      <section className="grid items-center gap-10 border-b border-line px-pad py-16 md:grid-cols-12 md:py-20">
        <h2 className="d text-[clamp(2.8rem,5vw,4.6rem)] font-black leading-[.88] md:col-span-3">
          Key<br /><span className="grad pr-3">Features.</span>
        </h2>
        <ul className="grid divide-y divide-line border-y border-line md:col-span-5 md:border-x-0 md:pl-2">
          {project.features.map((f, i) => (
            <li key={f} className="flex items-baseline gap-5 py-3.5 text-[15px] text-foreground">
              <span className="mono text-accent">{pad2(i + 1)}</span>
              <span aria-hidden className="text-accent">/</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-6 md:col-span-4 md:justify-end md:gap-10">
          <span className="font-display text-5xl font-semibold leading-none">
            {project.number}
            <span className="ml-2 text-xl text-muted">/ {pad2(totalProjects)}</span>
          </span>
          <div className="flex gap-3">
            <Link href={`/projects/${prev.slug}`} aria-label={`Previous: ${prev.title.join(' ')}`} className="group grid h-14 w-14 place-items-center border border-accent text-accent transition-colors hover:bg-accent hover:text-background">
              <span className="transition-transform group-hover:-translate-x-1">←</span>
            </Link>
            <Link href={`/projects/${next.slug}`} aria-label={`Next: ${next.title.join(' ')}`} className="group grid h-14 w-14 place-items-center border border-accent text-accent transition-colors hover:bg-accent hover:text-background">
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}