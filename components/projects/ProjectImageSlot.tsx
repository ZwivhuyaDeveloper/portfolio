"use client"
import { ImageSlot } from "@/components/ui/image-slot"
import { TowerArt } from "@/components/art/TowerArt"
import { HallArt } from "@/components/art/HallArt"
import { RidgeArt } from "@/components/art/RidgeArt"

export function ProjectImageSlot({ art, src, alt, className = "", children }: { art: 'tower'|'hall'|'chart', src: string, alt: string, className?: string, children?: React.ReactNode }) {
  const Art = art === 'tower' ? TowerArt : art === 'hall' ? HallArt : RidgeArt
  return (
    <ImageSlot
      src={src}
      alt={alt}
      fallback={<Art className="h-full w-full opacity-50" />}
      className={`relative overflow-hidden w-full h-full bg-[#111] ${className}`}
      sizes="(max-width: 1920px) 100vw, 50vw"
      grain
    >
      {children}
    </ImageSlot>
  )
}