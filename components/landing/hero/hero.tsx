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
    <header
      id="top"
      className="relative isolate h-svh min-h-[700px] overflow-hidden bg-background"
    >
      <HeroStage>
        <Navigation />
        <HeroTypography word="DEVELOPER" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 
          bg-[radial-gradient(34%_46%_at_0%_100%,rgba(160,230,0,0.6),rgba(70,110,0,0.28)_50%,transparent_78%)]"
        />
        <HeroPortrait />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[45] 
          bg-[radial-gradient(30%_42%_at_100%_100%,rgba(130,210,0,0.4),transparent_72%),linear-gradient(180deg,transparent_70%,#050505_130%)]"
        />
        <HeroDecor />
        <HeroCopy />
        <HeroStats />
        <HeroMetadata />
      </HeroStage>
    </header>
  );
}