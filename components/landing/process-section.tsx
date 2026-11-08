import { processSteps } from "@/data/skills";
import { Eyebrow } from "../ui/eyebrow";

export function ProcessSection() {
  return (
    <section
      id="experience"
      className="relative grid grid-cols-[14rem_repeat(4,1fr)] gap-6 border-t border-line px-[var(--pad)] py-20 max-[900px]:block"
    >
      <div>
        <Eyebrow>My process</Eyebrow>
        <h2 className="display text-[3.6rem]">
          How I
          <br />
          work<span className="lime">_</span>
        </h2>
      </div>

      {processSteps.map((step, i) => (
        <div
          key={step.n}
          className="relative pt-[2.8rem] max-[900px]:mt-6"
        >
          <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-accent text-[11px] text-accent">
            {step.n}
          </span>

          {i < processSteps.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute left-10 right-[-1rem] top-4 h-px bg-line max-[900px]:hidden"
            />
          ) : null}

          <b className="block font-display text-[1.4rem] font-extrabold uppercase tracking-[0.06em]">
            {step.title}
          </b>
          <span className="text-muted text-[clamp(1rem,1.2vw,1.25rem)]]">{step.body}</span>
        </div>
      ))}
    </section>
  );
}