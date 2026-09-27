/**
 * Inline UI icons. Kept as one small module rather than an icon package.
 */

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

function Svg({
  children,
  className,
  strokeWidth = 1.6,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className ?? "h-4 w-4"}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 3.5h3.2l1.6 4-2 1.4a12.5 12.5 0 0 0 5.3 5.3l1.4-2 4 1.6V17a3.5 3.5 0 0 1-3.8 3.5A15.5 15.5 0 0 1 3.5 7.3A3.5 3.5 0 0 1 5 3.5Z" />
    </Svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </Svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  );
}

export function Check(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <Svg {...props} strokeWidth={props.strokeWidth ?? 1.8}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function Close(props: IconProps) {
  return (
    <Svg {...props} strokeWidth={props.strokeWidth ?? 1.8}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <Svg {...props} strokeWidth={props.strokeWidth ?? 1.8}>
      <path d="m14.5 6-6 6 6 6" />
    </Svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <Svg {...props} strokeWidth={props.strokeWidth ?? 1.8}>
      <path d="m9.5 6 6 6-6 6" />
    </Svg>
  );
}

/** Quality — a checked shield, used for the quality commitment block. */
export function ShieldCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.7l7.2 2.7v6c0 4.4-3 8.2-7.2 9.9-4.2-1.7-7.2-5.5-7.2-9.9v-6L12 2.7Z" />
      <path d="m8.8 11.8 2.3 2.3 4.1-4.5" />
    </Svg>
  );
}

/** Safety — a site helmet, used for the health and safety block. */
export function HardHat(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.2 16.4v-1.1a8.8 8.8 0 0 1 17.6 0v1.1" />
      <path d="M9.6 6.2V4.6a1.3 1.3 0 0 1 1.3-1.3h2.2a1.3 1.3 0 0 1 1.3 1.3v1.6" />
      <path d="M9.6 6.9a6.6 6.6 0 0 0-2.1 8.2M14.4 6.9a6.6 6.6 0 0 1 2.1 8.2" />
      <path d="M2.2 16.4h19.6a1 1 0 0 1 1 1v1.4a1 1 0 0 1-1 1H2.2a1 1 0 0 1-1-1v-1.4a1 1 0 0 1 1-1Z" />
    </Svg>
  );
}

/**
 * LinkedIn — brand glyph, drawn filled rather than stroked, so it is written
 * separately instead of going through the shared stroke helper.
 */
export function LinkedIn({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className ?? "h-4 w-4"}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.06c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.55 4.8 5.86v5.59h-4v-4.96c0-1.18-.02-2.7-1.7-2.7-1.7 0-1.96 1.29-1.96 2.62v5.04h-3.82v-11Z" />
    </svg>
  );
}


export function ChevronDown(props: IconProps) {
  return (
    <Svg {...props} strokeWidth={props.strokeWidth ?? 1.8}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
}
