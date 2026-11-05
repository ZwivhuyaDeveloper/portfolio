import Link from "next/link";
import { site } from "@/data/site";

export function HeroCopy() {
  return (
    <div className="absolute left-[3.4%] top-[36%] z-[60] w-[56%] max-[900px]:bottom-[12%] max-[900px]:left-[6%] max-[900px]:right-[6%] max-[900px]:top-auto max-[900px]:w-auto">
      {/* tag */}
      <div className="font-display text-[clamp(0.9rem,1.28cqw,999px)] font-medium uppercase leading-[1.25] tracking-[0.14em] text-foreground/80 after:mt-[2.3cqw] after:block after:h-px after:w-[6.9cqw] after:bg-foreground/70 after:content-[''] max-[900px]:text-[0.8rem] max-[900px]:after:mt-[3vw]">
        {site.taglineLines.map((line, i) => (
          <span key={line}>
            {line}
            {i < site.taglineLines.length - 1 ? <br /> : null}
          </span>
        ))}
      </div>

      {/* headline */}
      <h1 className="m-0 mt-[2.4cqw] max-w-full font-display text-[clamp(3.6rem,6.55cqw,999px)] font-extrabold italic uppercase leading-[0.8] tracking-[0.005em] max-[900px]:mt-[4vw] max-[900px]:text-[clamp(2.5rem,14vw,4.5rem)]">
        <span className="block w-fit max-w-full origin-left scale-x-[1.24] bg-linear-to-b from-white to-[#9d9d99] bg-clip-text pt-[0.06em] text-transparent max-[900px]:scale-x-100">
          {site.heroHeading[0]}
        </span>
        <span className="block w-fit max-w-full origin-left scale-x-[1.24] bg-linear-to-b from-[#f3ff7c] via-accent to-[#9ad800] bg-clip-text pt-[0.06em] text-transparent max-[900px]:scale-x-100">
          {site.heroHeading[1]}
        </span>
      </h1>

      {/* paragraph */}
      <p className="my-[1.5cqw] mb-[1.8cqw] max-w-[31cqw] font-body text-[clamp(0.95rem,1.2cqw,999px)] leading-[1.35] text-foreground max-[900px]:my-[3vw] max-[900px]:max-w-xs max-[900px]:text-[0.85rem] max-[900px]:[text-shadow:0_0_14px_#000]">
        {site.heroCopy}
      </p>

      {/* buttons */}
      <div className="flex items-center gap-[2cqw] max-[900px]:gap-[5vw]">
        <Link
          href="#work"
          className="group inline-flex items-center gap-[0.8cqw] bg-accent px-[1.7cqw] py-[0.95cqw] font-display text-[clamp(0.8rem,1.02cqw,999px)] font-bold uppercase leading-none tracking-[0.1em] text-background transition-colors duration-200 hover:bg-foreground max-[900px]:px-5 max-[900px]:py-3.5 max-[900px]:text-[0.85rem]"
        >
          View projects{" "}
          <b className="font-medium transition-transform duration-200 group-hover:translate-x-1">
            →
          </b>
        </Link>
        <Link
          href="#contact"
          className="border-b border-foreground py-[0.7cqw] font-display text-[clamp(0.8rem,1.02cqw,999px)] font-bold uppercase leading-none tracking-[0.1em] transition-colors duration-200 hover:border-accent hover:text-accent max-[900px]:py-1.5 max-[900px]:text-[0.85rem]"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
}