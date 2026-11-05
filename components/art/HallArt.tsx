type Props = { className?: string }

export function HallArt({ className }: Props) {
  return (
    <svg
      viewBox="0 0 640 360"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Abstract hall artwork"
    >
      <defs>
        <linearGradient id="hall-gl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C7FF00" />
          <stop offset="1" stopColor="#C7FF00" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="#0d0d0d" />
      <path
        d="M0 0L250 120V300L0 360ZM640 0L390 120V300L640 360Z"
        fill="#1d1d1d"
      />
      <path d="M250 120h140v180H250Z" fill="#000" />
      <path d="M200 0h240L390 120H250Z" fill="url(#hall-gl)" />
      <path
        d="M250 120L0 0M390 120L640 0M250 300L0 360M390 300L640 360"
        stroke="#666"
        strokeWidth="1"
      />
      <rect x="312" y="215" width="14" height="52" fill="#f2f2f0" />
      <circle cx="319" cy="206" r="7" fill="#f2f2f0" />
    </svg>
  )
}