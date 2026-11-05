"use client"

import { Navigation } from "../navigation";
import { HeroCopy } from "./hero-copy";
import { HeroDecor } from "./hero-decor";
import { HeroMetadata } from "./hero-metadata";
import { HeroPortrait } from "./hero-portrait";
import { HeroStage } from "./hero-stage";
import { HeroStats } from "./hero-stats";
import { HeroTypography } from "./hero-typography";


export function Hero() {
  return (
    <header className="hero" id="top">
      <HeroStage>
        <Navigation />
        <HeroTypography />
        <div className="hero-layer hero-fill hero-glow-l" aria-hidden="true" />
        <HeroPortrait />
        <div className="hero-layer hero-fill hero-glow-r" aria-hidden="true" />
        <HeroDecor />
        <HeroCopy />
        <HeroStats />
        <HeroMetadata />
      </HeroStage>
    </header>
  )
}