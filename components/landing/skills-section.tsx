import { skills } from "@/data/skills";
import { Eyebrow } from "../ui/eyebrow";

export function SkillsSection() {
  const rowA = skills.slice(0, 5);
  const rowB = skills.slice(5, 10);

  return (
    <section
      id="skills"
      className="relative grid grid-cols-[12rem_repeat(5,1fr)] items-center border-t border-line px-[var(--pad)] py-20 max-[900px]:block"
    >
      <div>
        <Eyebrow>Technology</Eyebrow>
        <h2 className="display text-[3.6rem]">
          Skills<span className="lime">_</span>
        </h2>
      </div>

      {rowA.map((s) => (
        <div
          key={s}
          className="border-l border-line px-[1.2rem] py-[0.7rem] max-[900px]:border-l-0 max-[900px]:border-t"
        >
          {s}
        </div>
      ))}

      <div />

      {rowB.map((s) => (
        <div
          key={s}
          className="border-l border-t border-line px-[1.2rem] py-[0.7rem] max-[900px]:border-l-0 max-[900px]:border-t"
        >
          {s}
        </div>
      ))}
    </section>
  );
}