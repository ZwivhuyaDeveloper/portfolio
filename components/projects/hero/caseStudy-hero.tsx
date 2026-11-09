import { HeroDecor } from '@/components/landing/hero/hero-decor'
import { HeroStage } from '@/components/landing/hero/hero-stage'
import { ProjectImageSlot } from '@/components/projects/ProjectImageSlot'
import type { Project } from '@/data/projects'
import React from 'react'
import { CaseStudyCopy } from './caseStudy-copy'
import { CaseStudyStats } from './caseStudy-stats'

export default function CaseStudyHero({ project }: { project: Project }) {
  return (
    <header
      id="top"
      className="relative isolate h-svh min-h-[700px] overflow-hidden bg-background"
    >
      <HeroStage>
        
        {/* Background Technical Grid */}
        <div className="pointer-events-none absolute inset-0 z-10 [mask-image:linear-gradient(to_bottom,#000_20%,transparent_90%)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Main Grid Lines */}
              <pattern
                id="hero-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="rgba(242, 242, 240, 0.15)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              </pattern>
              
              {/* Subtle Crosshairs at Intersections */}
              <pattern
                id="hero-crosshairs"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="0" cy="0" r="1.5" fill="rgba(242, 242, 240, 0.4)" />
              </pattern>
            </defs>
            
            {/* Render grid layers */}
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
            <rect width="100%" height="100%" fill="url(#hero-crosshairs)" />
          </svg>
        </div>

        {/* Left Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 
          bg-[radial-gradient(34%_46%_at_0%_100%,rgba(160,230,0,0.6),rgba(70,110,0,0.28)_50%,transparent_78%)]"
        />

        {/* Project Image */}
        <div className="absolute bottom-[5%] right-[5%] z-40 w-[60%] top-[15%] max-[900px]:bottom-[20%] max-[900px]:right-[5%] max-[900px]:w-[90%]">
          <ProjectImageSlot
            art={project.art}
            src={project.cover}
            alt={project.alt}
            className="h-full w-full object-contain object-bottom shadow-[0_30px_80px_rgba(0,0,0,.7)]"
          />
        </div>

        {/* Right Glow / Vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[45] 
          bg-[radial-gradient(30%_42%_at_100%_100%,rgba(130,210,0,0.4),transparent_72%),linear-gradient(180deg,transparent_70%,#050505_130%)]"
        />
        
        <HeroDecor />
        
        {/* Text Content (Left Bottom) */}
        <CaseStudyCopy project={project} />
        
        {/* Metadata (Right Side) */}
        <CaseStudyStats project={project} />
        
      </HeroStage>
    </header>
  )
}