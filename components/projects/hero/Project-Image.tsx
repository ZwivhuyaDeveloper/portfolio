import { site } from "@/data/site";
import { ImageSlot } from "@/components/ui/image-slot";
import { PersonPlaceholder } from "@/components/art/PersonPlaceholder";

export function ProjectImage() {
  return (
    <div className="absolute bottom-[-3%] left-[33%] top-[8%] z-40 w-[62%] 
      animate-[hero-rise_1.5s_cubic-bezier(0.2,0.7,0.1,1)_both] 
      max-[900px]:bottom-[-2%] max-[900px]:left-[-14%] 
      max-[900px]:top-[20%] max-[900px]:w-[128%]"
    >

      <div className="hero-portrait-parallax absolute inset-0">
        <ImageSlot
          src={site.portraits.project}
          alt={`${site.name} portrait`}
          fallback={<PersonPlaceholder className="h-full w-full" />}
          className="h-full w-full"
          sizes="(max-width: 900px) 130vw, 60vw"
          priority
          objectFit="contain"
          objectPosition="50% 100%"
          background="none"
        />
      </div>
    </div>
  );
}