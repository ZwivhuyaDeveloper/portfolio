import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectItems } from "./project-items";

export function ProjectDisplay() {
  return (
    <section
      id="work"
      className="relative border-t border-line px-[var(--pad)] py-20"
    >
      <SectionHeading
        eyebrow="Selected work"
        rule
        action={
          <Link
            href="/projects"
            className="text-[11px] uppercase tracking-[0.16em] text-accent hover:text-white hover:scale-[110%]"
          >
            View Recent →
          </Link>
        }
      >
        Projects<span className="lime">_</span>
      </SectionHeading>

      {projects.map((p, i) => (
        <ProjectItems key={p.id} project={p} reverse={i % 1 === 2} />
      ))}
    </section>
  );
}