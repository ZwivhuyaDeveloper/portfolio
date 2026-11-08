import Link from 'next/link'
import type { Project } from '@/data/projects'
import { ProjectImageSlot } from '@/components/projects/ProjectImageSlot'
 
/* ---------- local helpers ---------- */
const Eyebrow = ({ n, label }: { n: string; label: string }) => (
  <p className="mono mb-6 flex items-center gap-3 text-accent">
    <span>{n}</span><i aria-hidden className="h-px w-10 bg-accent" /><span className="text-muted">{label}</span>
  </p>
)
 
const Title = ({ a, b }: { a: string; b: string }) => (
  <h2 className="d text-[clamp(3rem,6.2vw,6.2rem)] font-black leading-[.88] tracking-[-.005em]">
    <span className="block">{a}</span>
    <span className="grad block pr-3">{b}</span>
  </h2>
)
 
const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-7 max-w-[26rem] text-[15px] leading-[1.75] text-muted">{children}</p>
)
 
const Ghost = ({ n }: { n: string }) => (
  <span aria-hidden className="d pointer-events-none absolute right-pad top-6 text-[clamp(6rem,14vw,14rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(242,242,240,.09)]">
    {n}
  </span>
)
 
const brackets = [
  'left-[-6px] top-[-6px] border-l-2 border-t-2',
  'right-[-6px] top-[-6px] border-r-2 border-t-2',
  'bottom-[-6px] left-[-6px] border-b-2 border-l-2',
  'bottom-[-6px] right-[-6px] border-b-2 border-r-2',
]
const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    {brackets.map((c) => (
      <i key={c} aria-hidden className={`pointer-events-none absolute z-20 h-4 w-4 border-accent ${c}`} />
    ))}
    {children}
  </div>
)
 
const Fig = ({ n }: { n: string }) => (
  <span className="mono absolute left-3 top-3 z-10 bg-background/80 px-2 py-1 text-accent">Fig. {n}</span>
)
 
const spans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-4', 'md:col-span-4', 'md:col-span-4']
const pad2 = (n: number) => String(n).padStart(2, '0')
const arrow =
  'group grid h-14 w-14 place-items-center border border-accent text-accent transition-colors hover:bg-accent hover:text-background'
 
type Props = { project: Project; prev: Project; next: Project; totalProjects: number }
 
export function CaseStudyDetails({ project, prev, next, totalProjects }: Props) {
  const name = project.title.join(' ')
 
  return (
    <>
      {/* Challenge */}
      <section id="challenge" className="relative grid items-center gap-10 overflow-hidden border-b border-line px-pad py-16 md:grid-cols-12 md:py-24">
        <Ghost n="01" />
        <div className="relative md:col-span-4">
          <Eyebrow n="01" label="Context" />
          <Title a="The" b="Challenge." />
          <Body>{project.challenge}</Body>
        </div>
        <div className="relative md:col-span-8">
          <Frame>
            <ProjectImageSlot art="hall" src={project.gallery[0]?.src || project.cover} alt={`${name} challenge`} className="aspect-[16/8] w-full" />
            {/* vertical keyword rail */}
            <ul className="mono absolute inset-y-0 right-0 z-10 hidden w-32 flex-col justify-center gap-3 border-l border-line bg-background/75 pl-5 text-muted md:flex">
              {project.keywords.map((k, i) => (
                <li key={k} className={i === 0 ? 'text-foreground' : ''}>{k}</li>
              ))}
            </ul>
            {/* crosshair target */}
            <svg aria-hidden viewBox="0 0 120 120" className="pointer-events-none absolute bottom-6 right-40 z-10 hidden h-24 w-24 text-accent md:block" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="60" cy="60" r="56" opacity=".5" /><circle cx="60" cy="60" r="34" /><path d="M60 20v80M20 60h80" />
            </svg>
          </Frame>
        </div>
      </section>
 
      {/* Solution */}
      <section className="relative grid items-center gap-10 overflow-hidden border-b border-line px-pad py-16 md:grid-cols-12 md:py-24">
        <Ghost n="02" />
        <div className="relative md:col-span-4">
          <Eyebrow n="02" label="Approach" />
          <Title a="The" b="Solution." />
          <Body>{project.solution}</Body>
          <p className="mono mt-8 text-muted">Built with</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="mono border border-line px-3 py-2 text-foreground transition-colors hover:border-accent hover:text-accent">{t}</li>
            ))}
          </ul>
        </div>
        <div className="relative md:col-span-8">
          <Frame>
            <ProjectImageSlot art="chart" src={project.gallery[1]?.src || project.cover} alt={`${name} solution`} className="aspect-[16/9] w-full" />
          </Frame>
        </div>
      </section>
 
      {/* Gallery */}
      <section aria-labelledby="gallery" className="border-b border-line px-pad py-16 md:py-24">
        <div className="mb-12 flex items-end gap-6">
          <div>
            <Eyebrow n="03" label="Visual archive" />
            <h2 id="gallery" className="d text-[clamp(2.6rem,5vw,4.6rem)] font-black">Gallery<span className="text-accent">_</span></h2>
          </div>
          <hr className="mb-4 flex-1 border-line" />
          <span className="mono mb-3 text-muted">{pad2(project.gallery.length)} images</span>
        </div>
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-12">
          {project.gallery.map((g, n) => (
            <figure key={`${g.src}-${n}`} className={`group ${spans[n % spans.length]}`}>
              <ProjectImageSlot art={g.art} src={g.src} alt={`${name}: ${g.caption}`} className={`w-full ${n % 5 < 2 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                <Fig n={pad2(n + 1)} />
              </ProjectImageSlot>
              <figcaption className="mono mt-3 flex justify-between border-t border-line pt-3 text-muted transition-colors group-hover:border-accent group-hover:text-foreground">
                <span>{g.caption}</span>
                <span className="text-accent transition-transform group-hover:rotate-90">+</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
 
      {/* Key features + pager */}
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
            <Link href={`/projects/${prev.slug}`} aria-label={`Previous: ${prev.title.join(' ')}`} className={arrow}>
              <span className="transition-transform group-hover:-translate-x-1">←</span>
            </Link>
            <Link href={`/projects/${next.slug}`} aria-label={`Next: ${next.title.join(' ')}`} className={arrow}>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
