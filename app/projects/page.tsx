import Link from 'next/link'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { SiteFooter } from '@/components/SiteFooter'
import { Navigation } from '@/components/landing/navigation'
import Hero from '@/components/projects/hero/hero'
import { ProjectImageSlot } from '@/components/projects/ProjectImageSlot'
import { ProjectDisplay } from '@/components/projects/project-display'
import { ProjectContact } from '@/components/projects/project-contact'
import { Footer } from '@/components/landing/footer'

export const metadata: Metadata = { title: 'Selected work' }

export default function ProjectsPage() {
  const total = String(projects.length).padStart(2, '0')
  
  return (
    <>
      <Navigation/>
      <main>
        <Hero />
        <ProjectDisplay />
        <ProjectContact />
      </main>
      <Footer />
    </>
  )
}