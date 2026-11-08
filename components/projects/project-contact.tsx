"use client";

import { site } from "@/data/site";
import { RidgeArt } from "@/components/art/RidgeArt";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button2";
import Image from "next/image";
import { useState } from "react";

export function ProjectContact() {
  const [l1, l2, l3] = site.projectContact.heading;
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const offsetY = (event.clientY - (rect.top + rect.height / 2)) / rect.height;

    setParallax({
      x: offsetX * 18,
      y: offsetY * 16,
    });
  };

  return (
    <section
      id="contact"
      onMouseMove={handlePointerMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setParallax({ x: 0, y: 0 });
        setIsHovered(false);
      }}
      className="relative grid min-h-[30rem] grid-cols-[1.2fr_1fr] items-center gap-12 overflow-hidden border-t border-line px-[var(--pad)] py-20 max-[900px]:block"
    >
      <Image 
        src="/assets/range.png"
        alt="Contact illustration"
        width={1200}
        height={300}
        quality={100}
        priority
        className="absolute inset-x-0 bottom-0 z-0 h-[100%] w-full object-cover"
      />

      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0) scale(1.02)`,
          transition: "transform 180ms ease-out",
          WebkitTextStroke: isHovered ? "3px var(--color-accent)" : "3px rgba(242,242,240,0.22)",
        }}
        className="pointer-events-none absolute -right-4 top-4 z-0 font-display font-black text-[clamp(6rem,19vw,19rem)] uppercase leading-[0.8] text-transparent duration-300 max-[900px]:bottom-24 max-[900px]:top-auto"
      >
        Project
      </div>

      <Image 
        src="/assets/range-foreground.png"
        alt="Contact illustration"
        width={1200}
        height={300}
        quality={100}
        priority
        className="absolute inset-x-0 bottom-0 z-0 h-[100%] w-full object-cover"
      />

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
        <p className="text-[clamp(1rem,2.2vw,1.25rem)] mb-6 hidden">{site.projectContact.body}</p>
        <Button href={`mailto:${site.email}`}>{site.projectContact.cta} →</Button>
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