import type { ReactNode } from "react";
import type { ServiceIconKey } from "@/data/services";

/**
 * Line-art icons for the service groups. Drawn as simple technical shapes so
 * the site does not depend on an icon library.
 */
const icons: Record<ServiceIconKey, ReactNode> = {
  "solar-install": (
    <>
      <path d="M3 12.5 4.7 5.2h14.6L21 12.5H3Z" />
      <path d="M8.3 5.2 6.5 12.5M14.2 5.2l1.8 7.3" />
      <path d="M12 12.5V19M7 19h10" />
    </>
  ),
  "solar-om": (
    <>
      <path d="M2.5 11.2 4 4.5h13l1.3 6.7H2.5Z" />
      <path d="M7.4 4.5 5.8 11.2M13.4 4.5l1.5 6.7" />
      <path d="M8.6 11.2V17" />
      <path d="M17.4 13.6a4.6 4.6 0 1 0 3.1 5.9" />
      <path d="M20.6 12.6v3.6H17" />
    </>
  ),
  electrical: (
    <path d="M13.4 2.5 4.8 13.6h5.5L10.2 21.5l8.9-11.4h-5.9l0.2-7.6Z" />
  ),
  fabrication: (
    <>
      <path d="M4.5 4h15M4.5 20h15" />
      <path d="M12 4v16" />
      <path d="M6.8 7.5h10.4M6.8 16.5h10.4" />
    </>
  ),
  civil: (
    <>
      <path d="M2.5 9.5h19" />
      <path d="M6.4 9.5V20M12 9.5V20M17.6 9.5V20" />
      <path d="M3 20h18" />
    </>
  ),
  pipeline: (
    <>
      <path d="M3 8.6h18v6.8H3z" />
      <path d="M8 5.6v12.8M16 5.6v12.8" />
    </>
  ),
  manpower: (
    <>
      <circle cx="9.2" cy="7.8" r="3.1" />
      <path d="M3.4 20a5.8 5.8 0 0 1 11.6 0" />
      <path d="M16.4 5.4a3.1 3.1 0 0 1 0 5.6" />
      <path d="M17.2 20a5.7 5.7 0 0 0-2.1-4.4" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconKey;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {icons[name]}
    </svg>
  );
}
