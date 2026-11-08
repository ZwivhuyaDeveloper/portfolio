import { HeroCopy } from '@/components/landing/hero/hero-copy'
import { HeroDecor } from '@/components/landing/hero/hero-decor'
import { HeroMetadata } from '@/components/landing/hero/hero-metadata'
import { HeroPortrait } from '@/components/landing/hero/hero-portrait'
import { HeroStage } from '@/components/landing/hero/hero-stage'
import { HeroStats } from '@/components/landing/hero/hero-stats'
import { HeroTypography } from '@/components/landing/hero/hero-typography'
import { Navigation } from '@/components/landing/navigation'
import React from 'react'
import ProjectCopy from './project-copy'
import { ProjectImage } from './Project-Image'

export default function Hero() {
  return (
    <header
      id="top"
      className="relative isolate h-svh min-h-[700px] overflow-hidden bg-background"
    >
      <HeroStage>
        <HeroTypography word='PROJECTS' />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 
          bg-[radial-gradient(34%_46%_at_0%_100%,rgba(160,230,0,0.6),rgba(70,110,0,0.28)_50%,transparent_78%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[45] 
          bg-[radial-gradient(30%_42%_at_100%_100%,rgba(130,210,0,0.4),transparent_72%),linear-gradient(180deg,transparent_70%,#050505_130%)]"
        />
        <HeroDecor />
        <ProjectCopy />
        <HeroMetadata />
      </HeroStage>
    </header>
  )
}
    