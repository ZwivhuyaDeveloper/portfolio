'use client'

import Image from 'next/image'
import { useState, type ReactNode } from 'react'

type Props = {
  src: string
  alt: string
  fallback: ReactNode
  className?: string
  sizes?: string
  priority?: boolean
  objectFit?: 'cover' | 'contain'
  background?: 'dark' | 'none'
  grain?: boolean
}

/**
 * Renders a next/image with a graceful SVG placeholder fallback.
 * The fallback is rendered only if the image fails to load, so
 * transparent cut-out PNG/WebP images are never occluded.
 */
export function ImageSlot({
  src,
  alt,
  fallback,
  className = '',
  sizes = '100vw',
  priority = false,
  objectFit = 'cover',
  background = 'dark',
  grain = false,
}: Props) {
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')

  return (
    <div
      className={`relative overflow-hidden ${
        background === 'dark' ? 'bg-[#0b0b0b]' : ''
      } ${grain ? 'grain' : ''} ${className}`}
    >
      {status === 'error' ? (
        <div className="absolute inset-0">{fallback}</div>
      ) : null}
      {status !== 'error' ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="z-[2]"
          style={{ objectFit }}
          onLoad={() => setStatus('ok')}
          onError={() => setStatus('error')}
        />
      ) : null}
    </div>
  )
}