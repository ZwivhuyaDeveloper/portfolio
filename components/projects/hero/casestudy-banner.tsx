import Link from 'next/link'
import type { Project } from '@/data/projects'
 
export function CaseStudyBanner({ next }: { next: Project }) {
  return (
    <Link
      href={`/projects/${next.slug}`}
      className="group relative isolate flex flex-wrap items-center justify-between gap-6 overflow-hidden bg-accent px-pad py-10 text-background md:min-h-[10rem]"
    >
      <div className="flex items-center gap-6">
        <span aria-hidden className="text-5xl font-light leading-none">+</span>
        <p className="d up text-[clamp(1.5rem,2.8vw,2.6rem)] font-black leading-[.95] [text-wrap:balance]">
          A modern experience<br />built for performance.
        </p>
      </div>
 
      {/* dark diagonal panel (desktop) */}
      <span
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-background [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)] [background-image:repeating-linear-gradient(115deg,transparent_0_14px,rgba(199,255,0,.07)_14px_15px)] md:block"
      />
 
      <span className="mono relative z-10 border border-background px-6 py-4 transition-colors group-hover:bg-background group-hover:text-accent md:border-accent md:text-accent md:group-hover:bg-accent md:group-hover:text-background">
        Next project: {next.title.join(' ')} <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  )
}
