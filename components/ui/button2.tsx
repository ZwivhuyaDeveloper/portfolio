import Link from 'next/link'
import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  className?: string
}

export function Button({ href, children, className = '' }: Props) {
  return (
    <Link href={href} className={`contact-btn ${className}`}>
      {children}
    </Link>
  )
}