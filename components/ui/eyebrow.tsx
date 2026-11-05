import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="u lime" style={{ marginBottom: '.6rem' }}>
      {children}
    </div>
  )
}