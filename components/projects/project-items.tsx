import Link from "next/link";
import type { Project } from "@/data/projects";
import { ImageSlot } from "@/components/ui/image-slot";
import { TowerArt } from "@/components/art/TowerArt";
import { HallArt } from "@/components/art/HallArt";

export function ProjectItems({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  const Art = project.art === "tower" ? TowerArt : HallArt;

  return (
    <article className="group mb-20 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-8">
        
        {/* 1. Title / Text */}
        <div
            className={
                reverse
                ? "md:col-span-3 md:col-start-10 md:row-start-1"
                : "md:col-span-3 md:col-start-1"
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

            <h3 className="my-3 mt-[0.6rem] mb-[0.8rem] font-display italic font-extrabold uppercase text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.88] w-full">
                {project.title}
            </h3>

            <p className="text-[clamp(1rem,2.0vw,1.25rem)] mb-4 text-muted">{project.description}</p>

            <Link
                href={project.href}
                className="inline-block border-b border-foreground py-[0.7rem] font-display text-[11px] font-bold 
                uppercase tracking-[0.16em] transition-colors duration-200 hover:border-accent hover:text-accent hover:scale-[105%]"
            >
                View case study →
            </Link>
        </div>

        {/* 2. Image (Centered in the 12-col grid) */}
        <div
            className={
                reverse
                ? "md:col-span-6 md:col-start-6 md:row-start-1"
                : "md:col-span-6 md:col-start-6"
            }
        >
            <ImageSlot
                src={project.image}
                alt={project.alt}
                fallback={<Art className="h-full w-full" />}
                className={`aspect-video [&_img]:transition-transform [&_img]:duration-[600ms] [&_svg]:transition-transform 
                [&_svg]:duration-[600ms] group-hover:[&_img]:scale-[1.04] group-hover:[&_svg]:scale-[1.04]`}
                sizes="(max-width: 768px) 100vw, 50vw"
                grain
            />
        </div>

        {/* 3. Meta Far Right (or Far Left if reversed) */}
        <dl 
            className={`mono grid gap-6 md:col-span-3 
            ${
                reverse 
                ? "md:col-start-1 md:row-start-1 md:border-r md:border-line md:pr-6" 
                : "md:col-start-12 md:border-l md:border-line md:pl-6"
            }`}
        >
            <div>
                <dt className="sr-only">Category</dt>
                <dd className="text-muted">{project.category}</dd>
            </div>
            <div>
                <dt className="sr-only">Tech</dt>
                <dd className="leading-6 text-foreground">
                {project.tech.map(t => <span key={t} className="block">{t}</span>)}
                </dd>
            </div>
            <div>
                <dt className="sr-only">Year</dt>
                <dd className="text-muted">{project.year}</dd>
            </div>
        </dl>

    </article>
  );
}