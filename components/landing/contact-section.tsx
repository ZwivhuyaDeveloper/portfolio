import { site } from "@/data/site";
import { RidgeArt } from "@/components/art/RidgeArt";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button2";

export function ContactSection() {
  const [l1, l2, l3] = site.contact.heading;

  return (
    <section
      id="contact"
      className="relative grid min-h-[30rem] grid-cols-[1.2fr_1fr] items-center gap-12 overflow-hidden border-t border-line px-[var(--pad)] py-20 max-[900px]:block"
    >
      <RidgeArt className="absolute inset-x-0 bottom-0 z-0 h-[45%] w-full" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-4 z-0 font-display font-black text-[clamp(6rem,19vw,19rem)] uppercase leading-[0.8] text-transparent [-webkit-text-stroke:1px_rgba(242,242,240,0.22)] max-[900px]:bottom-24 max-[900px]:top-auto"
      >
        Contact
      </div>

      <div className="relative z-10">
        <Eyebrow>Get in touch</Eyebrow>
        <h2 className="display text-[clamp(3.5rem,8vw,7.5rem)]">
          {l1}
          <br />
          {l2}
          <br />
          <span className="grad">{l3}</span>
        </h2>
      </div>

      <div className="relative z-10">
        <p className="mb-6">{site.contact.body}</p>
        <Button href={`mailto:${site.email}`}>{site.contact.cta} →</Button>
        <div className="mt-8 flex flex-wrap gap-8 text-[11px] uppercase tracking-[0.16em] text-muted">
          {site.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="transition-colors duration-200 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}