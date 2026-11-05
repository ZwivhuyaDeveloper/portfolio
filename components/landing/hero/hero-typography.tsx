export function HeroTypography() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1672 941"
      className="hero-word-mask hero-word-parallax absolute left-0 top-0 z-20 block h-auto w-full animate-[hero-slide_50s_ease-in-out_infinite_alternate] max-[900px]:left-[-37%] max-[900px]:top-[5%] max-[900px]:w-[175%]"
    >
      <defs>
        <filter id="hero-grunge" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".02" numOctaves="3" result="w" />
          <feDisplacementMap in="SourceGraphic" in2="w" scale="9" result="d" />
          <feTurbulence type="fractalNoise" baseFrequency=".75" numOctaves="2" result="n" />
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
        y="465"
        textLength="1615"
        lengthAdjust="spacingAndGlyphs"
        fontWeight="900"
        fontSize="545"
        fill="#d9d7d1"
        filter="url(#hero-grunge)"
        style={{ fontFamily: 'var(--font-barlow), "Barlow Condensed", Impact, sans-serif' }}
      >
        DEVELOPER
      </text>
    </svg>
  );
}