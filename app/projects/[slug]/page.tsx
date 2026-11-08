import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SiteFooter } from '@/components/SiteFooter'
import { Navigation } from '@/components/landing/navigation'
import { getProject, projects } from '@/data/projects'
import { CaseStudyHero } from '@/components/projects/hero/caseStudy-hero'
import { CaseStudyDetails } from '@/components/projects/hero/caseStudy-details'
import { CaseStudyBanner } from '@/components/projects/hero/casestudy-banner'

// Import our new split components


type Props = { params: { slug: string } }

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }))

export function generateMetadata({ params }: Props): Metadata {
  const p = getProject(params.slug)
  return { 
    title: p ? `${p.title.join(' ')} Case Study` : 'Project', 
    description: p?.description 
  }
}

export default function CaseStudy({ params }: Props) {
  const p = getProject(params.slug)
  if (!p) notFound()

  const i = projects.findIndex((x) => x.slug === p.slug)
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]

  return (
    <>
      <Navigation />
      <main>
        <CaseStudyHero project={p} />
        <CaseStudyDetails 
          project={p} 
          prev={prev} 
          next={next} 
          totalProjects={projects.length} 
        />
        <CaseStudyBanner next={next} />
      </main>
      <SiteFooter />
    </>
  )
}