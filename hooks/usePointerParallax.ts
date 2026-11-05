'use client'

import { useEffect, useRef } from 'react'

/**
 * Tracks pointer position over `ref` and writes normalised values
 * (-0.5 → 0.5) to CSS variables `--px` and `--py` on that element.
 *
 * Descendants can consume them with `translate: calc(var(--px) * Npx) 0`.
 *
 * Disabled for touch-only devices and under prefers-reduced-motion.
 */
export function usePointerParallax<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const noHover = window.matchMedia('(hover: none)')
    if (reduced.matches || noHover.matches) return

    let raf = 0
    let targetX = 0
    let targetY = 0

    const commit = () => {
      raf = 0
      el.style.setProperty('--px', targetX.toFixed(4))
      el.style.setProperty('--py', targetY.toFixed(4))
    }

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(commit)
    }

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      targetX = (e.clientX - rect.left) / rect.width - 0.5
      targetY = (e.clientY - rect.top) / rect.height - 0.5
      schedule()
    }

    const onLeave = () => {
      targetX = 0
      targetY = 0
      schedule()
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)

    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return ref
}