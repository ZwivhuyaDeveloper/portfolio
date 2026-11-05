type Props = { className?: string }

export function TowerArt({ className }: Props) {
  return (
    <svg
      viewBox="0 0 640 360"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Abstract tower artwork"
    >
      <defs>
        <linearGradient id="tower-jk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a3a3a" />
          <stop offset=".5" stopColor="#101010" />
          <stop offset="1" stopColor="#050505" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="#1a1a1a" />
      <path d="M0 0h640v360H0z" fill="url(#tower-jk)" />
      <g stroke="#bbb" strokeOpacity=".5" strokeWidth="1" fill="none">
        <path d="M160 360L260 20 520 0 560 360Z" fill="#0c0c0c" />
        <path d="M260 20L330 360M300 10L410 360M345 5L480 360M395 2L540 360M440 0L560 300" />
        <path d="M215 200L545 160M200 260L555 220M180 320L560 280M235 120L530 95M250 70L525 50" />
      </g>
      <path d="M160 360L260 20" stroke="#C7FF00" strokeWidth="2" />
    </svg>
  )
}