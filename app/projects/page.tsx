import Link from 'next/link'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { SiteFooter } from '@/components/SiteFooter'
import { Navigation } from '@/components/landing/navigation'
import Hero from '@/components/projects/hero/hero'
import { ProjectImageSlot } from '@/components/projects/ProjectImageSlot'
import { ProjectDisplay } from '@/components/projects/project-display'

export const metadata: Metadata = { title: 'Selected work' }

export default function ProjectsPage() {
  const total = String(projects.length).padStart(2, '0')
  
  return (
    <>
      <Navigation/>
      <main>
        <Hero />
        <ProjectDisplay />

        {/* CTA */}
        <section className="relative flex flex-wrap items-center justify-between gap-8 px-pad py-16">
          <h2 className="d text-[clamp(2.2rem,6vw,5rem)]">
            <span className="block text-[.5em] text-foreground">Have a project?</span>
            <span className="grad block pr-4">Let’s talk.</span>
          </h2>
          <Link href="/#contact" className="btn-o">Contact me →</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}