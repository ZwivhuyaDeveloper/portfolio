import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'

type Props = {
  eyebrow: string
  children: ReactNode
  size?: string
  rule?: boolean
  action?: ReactNode
}

export function SectionHeading({
  eyebrow,
  children,
  size = 'clamp(3rem, 7vw, 6.5rem)',
  rule = false,
  action,
}: Props) {
  return (
    <div className={rule ? 'section-hd' : ''}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="display" style={{ fontSize: size }}>
          {children}
        </h2>
      </div>
      {rule ? <hr /> : null}
      {action}
    </div>
  )
}