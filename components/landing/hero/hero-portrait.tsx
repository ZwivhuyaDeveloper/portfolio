import { site } from '@/data/site'
import { ImageSlot } from '@/components/ui/image-slot'
import { PersonPlaceholder } from '@/components/art/PersonPlaceholder'

export function HeroPortrait() {
  return (
    <div className="hero-layer hero-portrait">
      <div className="hero-portrait-inner">
        <ImageSlot
          src={site.portraits.main}
          alt={`${site.name} portrait`}
          fallback={<PersonPlaceholder className="h-full w-full" />}
          className="hero-portrait-slot h-full w-full"
          sizes="(max-width: 900px) 130vw, 60vw"
          priority
          objectFit="contain"
          background="none"
        />
      </div>
    </div>
  )
}