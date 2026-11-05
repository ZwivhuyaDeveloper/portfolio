export function HeroTypography() {
  return (
    <svg
      className="hero-layer hero-bg"
      viewBox="0 0 1672 941"
      aria-hidden="true"
    >
      <defs>
        <filter id="hero-grunge" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".02"
            numOctaves="3"
            result="w"
          />
          <feDisplacementMap in="SourceGraphic" in2="w" scale="9" result="d" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".75"
            numOctaves="2"
            result="n"
          />
          <feColorMatrix
            in="n"
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 4 0 0 0 -.7"
            result="m"
          />
          <feComposite in="d" in2="m" operator="in" />
        </filter>
      </defs>
      <text
        x="30"
        y="478"
        textLength="1615"
        lengthAdjust="spacingAndGlyphs"
        fontWeight="900"
        fontSize="545"
        fill="#d9d7d1"
        filter="url(#hero-grunge)"
        style={{
          fontFamily:
            'var(--font-barlow), "Barlow Condensed", Impact, sans-serif',
        }}
      >
        DEVELOPER
      </text>
    </svg>
  )
}