import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectItem } from "./project-item";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectShowcase() {
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
            href="#work"
            className="text-[11px] uppercase tracking-[0.16em] text-accent"
          >
            View all →
          </Link>
        }
      >
        Projects<span className="lime">_</span>
      </SectionHeading>

      {projects.map((p, i) => (
        <ProjectItem key={p.id} project={p} reverse={i % 2 === 1} />
      ))}
    </section>
  );
}