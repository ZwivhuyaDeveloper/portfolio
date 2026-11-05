import { site } from "@/data/site";

export function HeroMetadata() {
  return (
    <>
      <div className="absolute bottom-[3.2%] left-[3.4%] z-[60] flex w-[26%] items-center gap-[0.9cqw] border-t border-foreground/20 pt-[0.9cqw] font-display text-[clamp(0.65rem,0.82cqw,999px)] font-medium uppercase leading-none tracking-[0.14em] text-foreground/80 max-[900px]:hidden">
        <i className="h-[0.6cqw] min-h-2 w-[0.6cqw] min-w-2 bg-accent" />
        <span>{site.stack}</span>
      </div>

      <div className="absolute bottom-[3.4%] right-[3.4%] z-[60] flex items-center gap-[1.3cqw] font-display text-[clamp(0.7rem,0.88cqw,999px)] font-medium uppercase leading-none tracking-[0.14em] text-foreground/85 max-[900px]:bottom-[3%] max-[900px]:left-[6%] max-[900px]:right-auto">
        <span>Scroll to explore</span>
        <span className="grid h-[2.4cqw] w-[2.4cqw] min-h-[34px] min-w-[34px] place-items-center rounded-full border border-foreground/80 animate-[hero-bob_2.4s_ease-in-out_infinite]">
          ↓
        </span>
      </div>
    </>
  );
}