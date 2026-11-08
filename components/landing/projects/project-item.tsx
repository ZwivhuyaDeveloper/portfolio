import Link from "next/link";
import type { Project } from "@/data/projects";
import { ImageSlot } from "@/components/ui/image-slot";
import { TowerArt } from "@/components/art/TowerArt";
import { HallArt } from "@/components/art/HallArt";

export function ProjectItem({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  const Art = project.art === "tower" ? TowerArt : HallArt;

  return (
    <article className="group mb-16 grid grid-cols-12 items-center gap-5 max-[900px]:block">
      <div
        className={
          reverse
            ? "col-[9/13] row-start-1"
            : "col-[1/5]"
        }
      >
        <div className="font-display italic font-black text-[clamp(5rem,12vw,11rem)] leading-[0.8] text-transparent 
          [-webkit-text-stroke:1px_var(--color-line)] transition-[-webkit-text-stroke-color] 
          duration-300 group-hover:[-webkit-text-stroke-color:var(--color-accent)]"
        >
          {project.index}
        </div>
        <div className="text-[11px] uppercase tracking-[0.16em] text-accent">
          {project.category}
        </div>
        <h3 className="my-3 mt-[0.6rem] mb-[0.8rem] font-display italic font-extrabold uppercase text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.88]">
          {project.title}
        </h3>
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] mb-4 text-muted">{project.description}</p>
        <Link
          href={project.href}
          className="inline-block border-b border-foreground py-[0.7rem] font-display text-[11px] font-bold 
          uppercase tracking-[0.16em] transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          View case study →
        </Link>
      </div>

      <ImageSlot
        src={project.image}
        alt={project.alt}
        fallback={<Art className="h-full w-full" />}
        className={`aspect-video [&_img]:transition-transform [&_img]:duration-[600ms] [&_svg]:transition-transform 
          [&_svg]:duration-[600ms] group-hover:[&_img]:scale-[1.04] group-hover:[&_svg]:scale-[1.04] ${
          reverse ? "col-[1/9] row-start-1 max-[900px]:mt-4" : "col-[5/13] max-[900px]:mt-4"
        }`}
        sizes="(max-width: 900px) 100vw, 66vw"
        grain
      />
    </article>
  );
}