export function QtechxLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Qtechx">
      <defs>
        <linearGradient id="qx" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C2DB" />
          <stop offset="50%" stopColor="#00A8C0" />
          <stop offset="100%" stopColor="#008FA5" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* animated pixel cluster */}
      <g fill="url(#qx)" filter="url(#glow)">
        <rect x="4" y="4" width="5" height="5" rx="1" />
        <rect x="12" y="2" width="4" height="4" rx="1" opacity="0.7" />
        <rect x="2" y="14" width="4" height="4" rx="1" opacity="0.5" />
        <circle cx="16" cy="12" r="1.5" fill="#00C2DB" opacity="0.9" />
      </g>
      {/* Q ring with gap */}
      <circle cx="30" cy="28" r="18" stroke="url(#qx)" strokeWidth="4" fill="none" strokeDasharray="90 100" filter="url(#glow)" />
      <path d="M40 38 L50 48" stroke="url(#qx)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)" />
      <circle cx="30" cy="10" r="2" fill="#00C2DB" />
      {/* wordmark */}
      <text x="68" y="36" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="26" fill="currentColor" letterSpacing="2">
        QTECH<tspan fill="url(#qx)">X</tspan>
      </text>
    </svg>
  );
}
