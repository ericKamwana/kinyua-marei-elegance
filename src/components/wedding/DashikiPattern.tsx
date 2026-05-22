/**
 * Decorative Dashiki-inspired ornament — a stylized neckline medallion
 * with radial geometric rays, used as a section divider accent.
 */
export function DashikiOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dgold" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* side rules */}
      <line x1="0" y1="30" x2="60" y2="30" stroke="url(#dgold)" strokeWidth="1" />
      <line x1="140" y1="30" x2="200" y2="30" stroke="url(#dgold)" strokeWidth="1" />

      {/* central medallion */}
      <g transform="translate(100 30)" stroke="currentColor" strokeWidth="0.9">
        <circle r="14" fill="none" />
        <circle r="9" fill="none" opacity="0.7" />
        <circle r="3" fill="currentColor" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6;
          const x1 = Math.cos(a) * 9;
          const y1 = Math.sin(a) * 9;
          const x2 = Math.cos(a) * 14;
          const y2 = Math.sin(a) * 14;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {/* diamonds */}
        {Array.from({ length: 4 }).map((_, i) => {
          const a = (i * Math.PI) / 2 + Math.PI / 4;
          const x = Math.cos(a) * 20;
          const y = Math.sin(a) * 20;
          return (
            <g key={i} transform={`translate(${x} ${y}) rotate(45)`}>
              <rect x="-2.2" y="-2.2" width="4.4" height="4.4" fill="none" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/**
 * Repeating dashiki-inspired chevron band — used as a horizontal accent.
 */
export function DashikiBand({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 12"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <pattern id="dband" width="24" height="12" patternUnits="userSpaceOnUse">
          <path
            d="M0 6 L6 0 L12 6 L18 0 L24 6 L18 12 L12 6 L6 12 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
        </pattern>
        <linearGradient id="dbandfade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="dbandmask">
          <rect width="240" height="12" fill="url(#dbandfade)" />
        </mask>
      </defs>
      <rect width="240" height="12" fill="url(#dband)" mask="url(#dbandmask)" />
    </svg>
  );
}
