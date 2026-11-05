type Props = { className?: string }

export function GlobeWire({ className }: Props) {
  return (
    <svg viewBox="0 0 200 110" className={className} aria-hidden="true">
      <g fill="none" stroke="#F2F2F0" strokeWidth=".7">
        <ellipse cx="100" cy="55" rx="98" ry="52" />
        <ellipse cx="100" cy="55" rx="98" ry="26" />
        <ellipse cx="100" cy="55" rx="55" ry="52" />
        <ellipse cx="100" cy="55" rx="22" ry="52" />
        <path d="M2 55h196M100 3v104" />
      </g>
    </svg>
  )
}