import { site } from '@/data/site'

import { RidgeArt } from '@/components/art/RidgeArt'
import { Eyebrow } from '../ui/eyebrow'
import { Button } from '../ui/button2'


export function ContactSection() {
  const [l1, l2, l3] = site.contact.heading
  return (
    <section id="contact" className="section contact-grid">
      <RidgeArt className="contact-ridge" />
      <div className="contact-ghost" aria-hidden="true">
        Contact
      </div>
      <div className="contact-col">
        <Eyebrow>Get in touch</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}>
          {l1}
          <br />
          {l2}
          <br />
          <span className="grad">{l3}</span>
        </h2>
      </div>
      <div className="contact-col">
        <p>{site.contact.body}</p>
        <Button href={`mailto:${site.email}`}>{site.contact.cta} →</Button>
        <div className="contact-links">
          {site.links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}