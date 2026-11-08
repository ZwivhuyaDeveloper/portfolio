import Link from "next/link";
import { site } from "@/data/site";
import { PersonPlaceholder } from "@/components/art/PersonPlaceholder";
import { Eyebrow } from "../ui/eyebrow";
import { ImageSlot } from "../ui/image-slot";

export function AboutSection() {
  const [l1, l2, l3] = site.about.heading;

  return (
    <section
      id="about"
      className="relative grid grid-cols-[1fr_1.1fr_1.1fr] items-center gap-10 
      overflow-hidden border-t border-line px-[var(--pad)] py-20 max-[900px]:block"
    >
      <div>
        <Eyebrow>About me</Eyebrow>
        <h2 className="display text-[clamp(3.5rem,7vw,6.5rem)]">
          {l1}
          <br />
          {l2}
          <br />
          <span className="grad">{l3}</span>
        </h2>
      </div>

      <div>
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] mb-6 text-muted">{site.about.body}</p>
        <Link
          href="#contact"
          className="text-[11px] uppercase tracking-[0.16em] text-accent"
        >
          Let&apos;s build something →
        </Link>
      </div>

      <ImageSlot
        src={site.about.image}
        alt={site.about.alt}
        fallback={<PersonPlaceholder className="h-full w-full" />}
        className="aspect-[4/5] -my-20 mr-[calc(var(--pad)*-1)] max-[900px]:mx-[calc(var(--pad)*-1)] max-[900px]:mt-8 max-[900px]:mb-[-5rem]"
        sizes="(max-width: 900px) 100vw, 35vw"
        objectPosition="50% 10%"
        grain
      />
    </section>
  );
}