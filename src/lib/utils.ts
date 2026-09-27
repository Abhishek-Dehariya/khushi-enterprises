/**
 * Small shared helpers. No external dependencies — anything that grows beyond
 * a couple of lines belongs in its own module.
 */

/** Joins conditional class names. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Builds a dialable `tel:` href from a human-readable phone number. */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

/** Builds a `mailto:` href with an optional subject and body. */
export function mailtoHref(email: string, subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ""}`;
}

/** Google Maps link for a plain-text address or place description. */
export function directionsHref(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Keyless Google Maps embed URL for a plain-text address or place description. */
export function mapEmbedHref(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

/** Responsive `sizes` presets for next/image, kept in one place for consistency. */
export const imageSizes = {
  /** Full-bleed hero imagery. */
  hero: "100vw",
  /** Two-column split sections. */
  half: "(min-width: 1024px) 50vw, 100vw",
  /** Three-column card grids. */
  third: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  /** Two-column card grids. */
  twoUp: "(min-width: 1024px) 50vw, 100vw",
  /** Four-column logo / stat grids. */
  quarter: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
} as const;
