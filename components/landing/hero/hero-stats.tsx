import { site } from "@/data/site";

export function HeroStats() {
  return (
    <div className="absolute left-[82.7%] top-[57.3%] z-[60] flex h-[23.1%] flex-col justify-between border-l border-accent pl-[2.5%] max-[900px]:hidden">
      {site.stats.map((s) => (
        <div key={s.label}>
          <b className="block font-display text-[clamp(1.4rem,1.9cqw,999px)] font-semibold leading-none text-[#e9e9e5]">
            {s.value}
          </b>
          <span className="font-display text-[clamp(0.7rem,0.95cqw,999px)] font-medium uppercase leading-[1.2] tracking-[0.14em] text-foreground/80">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}