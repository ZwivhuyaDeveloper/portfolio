import Link from 'next/link'
import type { Project } from '@/data/projects'

export function CaseStudyCopy({ project }: { project: Project }) {
  return (
    <div className="absolute left-[3.4%] bottom-[10%] z-[60] w-[56%] max-[900px]:bottom-[14%] max-[900px]:left-[6%] max-[900px]:right-[6%] max-[900px]:w-auto">
      
      {/* Back Link & Tag */}
      <div className="mb-[2.4cqw] flex flex-col gap-4">
        <Link 
          href="/projects" 
          className="group inline-flex w-fit items-center gap-2 border-b border-accent pb-1 font-display text-[clamp(0.8rem,1.02cqw,999px)]
          font-bold uppercase tracking-[0.1em] text-accent transition-colors hover:text-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back to projects
        </Link>
        <div className="w-fit font-display text-[clamp(0.9rem,1cqw,999px)] font-medium uppercase leading-[1.25] tracking-[0.14em] text-foreground/80">
          {project.category} <br /> {project.type}
        </div>
      </div>

      {/* Headline */}
      <h1 className="m-0 font-display text-[clamp(3.6rem,3.2cqw,999px)] font-extrabold italic uppercase leading-[0.8] tracking-[-0.02em] max-[900px]:text-[clamp(2.5rem,14vw,4.5rem)]">
        <span className="block w-fit origin-left scale-x-[1.24] bg-linear-to-b from-white to-[#9d9d99] bg-clip-text pt-[0.06em] text-transparent max-[900px]:scale-x-100">
          {project.title[0]}
        </span>
        <span className="block w-fit origin-left scale-x-[1.24] text-accent max-[900px]:scale-x-100">
          {project.title[1]}
        </span>
      </h1>

      {/* Paragraph */}
      <p className="my-[1.5cqw] mb-[1.8cqw] max-w-[31cqw] font-body text-[clamp(0.95rem,1cqw,999px)] leading-[1.35] text-foreground max-[900px]:my-[3vw] max-[900px]:max-w-xs max-[900px]:text-[0.85rem] max-[900px]:[text-shadow:0_0_14px_#000]">
        {project.description}
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-[2cqw] max-[900px]:gap-[5vw]">
        {project.href && (
          <Link
            href={project.href}
            className="group inline-flex items-center gap-[0.8cqw] bg-accent px-[1.7cqw] py-[0.80cqw] font-display text-[clamp(0.8rem,1.02cqw,999px)] font-bold uppercase leading-none tracking-[0.1em] text-background transition-colors duration-200 hover:bg-foreground max-[900px]:px-5 max-[900px]:py-3.5 max-[900px]:text-[0.85rem]"
          >
            View live project{" "}
            <b className="font-medium transition-transform duration-200 group-hover:translate-x-1">→</b>
          </Link>
        )}
        <a
          href="#challenge"
          className="border-b border-foreground py-[0.7cqw] font-display text-[clamp(0.8rem,1.02cqw,999px)] font-bold uppercase leading-none tracking-[0.1em] transition-colors duration-200 hover:border-accent hover:text-accent max-[900px]:py-1.5 max-[900px]:text-[0.85rem]"
        >
          Scroll ↓
        </a>
      </div>
    </div>
  )
}