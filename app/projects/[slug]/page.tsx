import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'

import { getProject, projects } from '@/data/projects'
import { ProjectImageSlot } from '@/components/projects/ProjectImageSlot'

type Props = { params: { slug: string } }

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }))

export function generateMetadata({ params }: Props): Metadata {
  const p = getProject(params.slug)
  return { title: p ? `${p.title.join(' ')} Case Study` : 'Project', description: p?.description }
}

const Title = ({ a, b }: { a: string; b: string }) => (
  <h2 className="d text-[clamp(2.6rem,5.5vw,5rem)] leading-none">
    <span className="block text-foreground">{a}</span>
    <span className="grad block pr-3">{b}</span>
  </h2>
)

const Fig = ({ n }: { n: string }) => (
  <span className="mono absolute left-3 top-3 z-10 bg-background/80 px-2 py-1 text-accent">Fig. {n}</span>
)

export default function CaseStudy({ params }: Props) {
  const p = getProject(params.slug)
  if (!p) notFound()

  const i = projects.findIndex((x) => x.slug === p.slug)
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]
  const name = p.title.join(' ')

  return (
    <>
      <SiteNav active="work" />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-line pb-14 pt-32">
          <div aria-hidden className="absolute inset-y-0 right-[22%] -z-0 hidden w-[11%] bg-gradient-to-b from-accent to-[#7fb800] md:block" />
          <div className="relative z-10 grid gap-10 px-pad md:grid-cols-12">
            <div className="md:col-span-5 flex flex-col justify-center">
              <Link href="/projects" className="mono inline-block w-fit border-b border-accent pb-1 text-accent">← Back to projects</Link>
              <h1 className="d up mt-8 text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.9]">
                {p.title[0]}<br />{p.title[1]}
              </h1>
              <p className="mono mt-6 border-b border-line pb-3 text-muted">{p.type}</p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">{p.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                {p.href && <Link href={p.href} className="btn">View live project →</Link>}
                <a href="#challenge" className="mono border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">Scroll ↓</a>
              </div>
            </div>
            
            <div className="md:col-span-5 md:-ml-24 md:self-center">
              <ProjectImageSlot 
                art={p.art} 
                src={p.cover} 
                alt={`${name} main screen`} 
                className="aspect-[16/10] w-full shadow-[0_30px_80px_rgba(0,0,0,.7)]" 
              />
            </div>
            
            <aside className="mono md:col-span-2 md:border-l md:border-line md:pl-6">
              <h2 className="mb-6 border-b border-line pb-2 text-accent">Project info</h2>
              <dl className="grid gap-6 normal-case tracking-normal">
                <div><dt className="mono text-muted">Category</dt><dd className="mt-1 text-sm text-foreground">{p.category}</dd></div>
                <div><dt className="mono text-muted">Tech stack</dt><dd className="mt-1 text-sm text-foreground">{p.tech.join(', ')}</dd></div>
                <div><dt className="mono text-muted">Year</dt><dd className="mt-1 text-sm text-foreground">{p.year}</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        {/* Challenge */}
        <section id="challenge" className="grid items-center gap-8 border-b border-line px-pad py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Title a="The" b="Challenge." />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">{p.challenge}</p>
          </div>
          <div className="relative md:col-span-8">
            <ProjectImageSlot 
              art="hall" 
              src={p.gallery[0]?.src || p.cover} 
              alt={`${name} challenge`} 
              className="aspect-[16/7] w-full" 
            />
            <ul className="mono absolute right-3 top-3 hidden gap-2 border-l border-line bg-background/80 pl-4 text-muted md:grid">
              {p.keywords.map(k => <li key={k}>{k}</li>)}
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section className="grid items-center gap-8 border-b border-line px-pad py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Title a="The" b="Solution." />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">{p.solution}</p>
          </div>
          <div className="md:col-span-8">
            <ProjectImageSlot 
              art="chart" 
              src={p.gallery[1]?.src || p.cover} 
              alt={`${name} solution`} 
              className="aspect-[16/8] w-full" 
            />
          </div>
        </section>

        {/* Gallery */}
        <section aria-labelledby="gallery" className="border-b border-line px-pad py-16">
          <div className="mb-10 flex items-end gap-6">
            <h2 id="gallery" className="d text-[clamp(2.2rem,4vw,3.6rem)]">Gallery<span className="text-accent">_</span></h2>
            <hr className="mb-3 flex-1 border-line" />
            <span className="mono text-muted">{String(p.gallery.length).padStart(2, '0')} images</span>
          </div>
          <div className="grid gap-6 md:grid-cols-12">
            {p.gallery.map((g, n) => (
              <figure key={n} className={`group ${n === 0 ? 'md:col-span-7' : 'md:col-span-5'}`}>
                <ProjectImageSlot 
                  art={g.art} 
                  src={g.src} 
                  alt={`${name}: ${g.caption}`} 
                  className="w-full aspect-[16/10]"
                >
                  <Fig n={String(n + 1).padStart(2, '0')} />
                </ProjectImageSlot>
                <figcaption className="mono mt-3 flex justify-between border-t border-line pt-3 text-muted">
                  <span>{g.caption}</span>
                  <span className="text-accent">+</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Key features + pager */}
        <section className="grid items-center gap-10 px-pad py-16 md:grid-cols-12">
          <h2 className="d text-[clamp(2.4rem,4.5vw,4rem)] md:col-span-3 leading-none">
            Key<br /><span className="grad pr-3">Features.</span>
          </h2>
          <ul className="mono grid gap-3 border-line normal-case tracking-normal md:col-span-5 md:border-l md:pl-8">
            {p.features.map((f) => (
              <li key={f} className="text-sm">
                <span className="mr-3 text-accent">/</span>{f}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between gap-6 md:col-span-4 md:justify-end">
            <span className="font-display text-4xl">
              {p.number} <span className="text-base text-muted">/ {String(projects.length).padStart(2, '0')}</span>
            </span>
            <div className="flex gap-3">
              <Link href={`/projects/${prev.slug}`} aria-label={`Previous: ${prev.title.join(' ')}`} className="grid h-12 w-12 place-items-center border border-accent text-accent hover:bg-accent hover:text-background transition-colors">←</Link>
              <Link href={`/projects/${next.slug}`} aria-label={`Next: ${next.title.join(' ')}`} className="grid h-12 w-12 place-items-center border border-accent text-accent hover:bg-accent hover:text-background transition-colors">→</Link>
            </div>
          </div>
        </section>

        {/* Banner */}
        <Link href={`/projects/${next.slug}`} className="group relative flex flex-wrap items-center justify-between gap-4 overflow-hidden bg-accent px-pad py-10 text-background">
          <p className="d text-[clamp(1.4rem,2.6vw,2.2rem)] [text-wrap:balance] up">
            A modern experience<br />built for performance.
          </p>
          <span className="mono relative border border-background px-6 py-4 transition-colors group-hover:bg-background group-hover:text-accent">
            Next project: {next.title.join(' ')} →
          </span>
        </Link>
      </main>
      <SiteFooter />
    </>
  )
}