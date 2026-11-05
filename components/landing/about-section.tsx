import Link from 'next/link'
import { site } from '@/data/site'
import { PersonPlaceholder } from '@/components/art/PersonPlaceholder'
import { Eyebrow } from '../ui/eyebrow'
import { ImageSlot } from '../ui/image-slot'

export function AboutSection() {
  const [l1, l2, l3] = site.about.heading
  return (
    <section id="about" className="section about-grid">
      <div>
        <Eyebrow>About me</Eyebrow>
        <h2 className="display about-h2">
          {l1}
          <br />
          {l2}
          <br />
          <span className="grad">{l3}</span>
        </h2>
      </div>
      <div>
        <p className="about-body">{site.about.body}</p>
        <Link href="#contact" className="about-cta">
          Let&apos;s build something →
        </Link>
      </div>
      <ImageSlot
        src={site.about.image}
        alt={site.about.alt}
        fallback={<PersonPlaceholder className="h-full w-full" />}
        className="about-slot"
        sizes="(max-width: 900px) 100vw, 35vw"
        grain
      />
    </section>
  )
}