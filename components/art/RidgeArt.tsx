type Props = { className?: string }

export function RidgeArt({ className }: Props) {
  return (
    <svg
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label="Placeholder mountain art"
    >
      <path
        d="M0 300V190L110 120 190 175 330 40 430 140 560 70 690 170 820 90 960 190 1080 110 1200 180V300Z"
        fill="#0b0b0b"
        stroke="#C7FF00"
        strokeOpacity=".7"
        strokeWidth="2"
      />
      <path
        d="M0 300V240L140 190 260 235 400 150 520 230 700 170 860 240 1000 200 1200 250V300Z"
        fill="#151515"
      />
    </svg>
  )
}