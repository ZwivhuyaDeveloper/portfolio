import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SiteFooter } from '@/components/SiteFooter'
import { Navigation } from '@/components/landing/navigation'
import { getProject, projects } from '@/data/projects'
import CaseStudyHero from '@/components/projects/hero/caseStudy-hero'
import { CaseStudyDetails } from '@/components/projects/hero/caseStudy-details'
import { CaseStudyBanner } from '@/components/projects/hero/casestudy-banner'

// 1. Update the type to reflect that params is a Promise
type Props = { params: Promise<{ slug: string }> }

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }))

// 2. Make the function async and await params
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  return { 
    title: p ? `${p.title.join(' ')} Case Study` : 'Project', 
    description: p?.description 
  }
}

// 3. Make the component async and await params
export default async function CaseStudy({ params }: Props) {
  const { slug } = await params
  const p = getProject(slug)
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