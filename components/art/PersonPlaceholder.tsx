type Props = { className?: string }

export function PersonPlaceholder({ className }: Props) {
  return (
    <svg
      viewBox="0 0 700 900"
      preserveAspectRatio="xMidYMax meet"
      className={className}
      role="img"
      aria-label="Placeholder portrait"
    >
      <defs>
        <linearGradient id="pp-jk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a3a3a" />
          <stop offset=".5" stopColor="#101010" />
          <stop offset="1" stopColor="#050505" />
        </linearGradient>
        <linearGradient id="pp-skin" x1="0" x2="1">
          <stop offset="0" stopColor="#4a4a4a" />
          <stop offset="1" stopColor="#121212" />
        </linearGradient>
        <linearGradient id="pp-rim" x1="0" x2="1">
          <stop offset="0" stopColor="#C7FF00" />
          <stop offset=".3" stopColor="#C7FF00" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M20 900C30 720 120 610 260 570L440 560C580 600 660 720 680 900Z"
        fill="url(#pp-jk)"
      />
      <path
        d="M255 575C300 520 330 470 330 430L430 430C440 480 470 540 520 575L440 590 330 590Z"
        fill="#0a0a0a"
      />
      <path
        d="M20 900C30 720 120 610 260 570"
        fill="none"
        stroke="url(#pp-rim)"
        strokeWidth="4"
      />
      <path d="M190 640l120 20M520 640l-110 30" stroke="#222" strokeWidth="3" />
      <path
        d="M150 900l20-190M560 900l-30-200"
        stroke="#1c1c1c"
        strokeWidth="14"
      />
      <path
        d="M290 420C250 380 235 300 250 230C270 150 340 120 420 140C490 160 520 240 510 330C500 400 450 450 420 480L340 480Z"
        fill="url(#pp-skin)"
      />
      <path
        d="M250 230C270 150 340 120 420 140C490 160 520 240 510 330"
        fill="none"
        stroke="url(#pp-rim)"
        strokeWidth="4"
      />
      <g fill="#050505">
        <circle cx="262" cy="170" r="30" />
        <circle cx="300" cy="140" r="34" />
        <circle cx="350" cy="120" r="34" />
        <circle cx="400" cy="125" r="34" />
        <circle cx="450" cy="150" r="32" />
        <circle cx="490" cy="190" r="28" />
        <circle cx="248" cy="210" r="22" />
      </g>
      <path
        d="M255 255l230 50-6 40c-30 12-60 4-92-4l-30-10c-35 8-70 0-92-20Z"
        fill="#000"
      />
      <path d="M330 400q40 26 90 0" stroke="#050505" strokeWidth="10" fill="none" />
      <ellipse cx="238" cy="330" rx="18" ry="30" fill="#1b1b1b" />
    </svg>
  )
}