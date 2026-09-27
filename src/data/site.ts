/**
 * Company identity, contact details and navigation.
 *
 * Every field in this file comes from the Khushi Enterprises company profile.
 * Nothing here may be invented — no certifications, ratings, awards, branch
 * offices or statistics that the company has not supplied.
 */

/**
 * Production fallback used when `NEXT_PUBLIC_SITE_URL` is missing, blank or
 * malformed. It must stay an absolute URL: `metadataBase` in
 * `src/app/layout.tsx` passes the resolved value to `new URL(...)`.
 */
const productionSiteUrl = "https://khushi-enterprises.vercel.app";

/**
 * Resolves the public site URL from `NEXT_PUBLIC_SITE_URL`.
 *
 * Deployment platforms can define the variable with a blank value, so an empty
 * string must fall back as well — `??` only catches `null`/`undefined` and
 * would let `""` reach `new URL(siteConfig.url)` during the production build.
 * A bare domain is assumed to use `https`, and any trailing slash is removed
 * so paths can be appended safely (`${siteConfig.url}/sitemap.xml`). Anything
 * that still cannot be parsed as an absolute URL falls back to the production
 * domain.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (raw) {
    try {
      const url = new URL(
        /^[a-z][a-z0-9+.-]*:\/\//i.test(raw) ? raw : `https://${raw}`,
      );
      return url.href.replace(/\/+$/, "");
    } catch {
      // Malformed value — fall through to the production fallback.
    }
  }

  return productionSiteUrl;
}

export const siteConfig = {
  name: "Khushi Enterprises",
  proprietor: "Govind Singh",
  tagline:
    "Solar O&M & Asset Management | Solar Installation | Electrical | Fabrication | Civil",

  /** One-line description used in metadata and previews. */
  description:
    "Khushi Enterprises is a solar O&M and asset management company based in Dhar, Madhya Pradesh, keeping solar plants operational, reliable and performing — supported by in-house solar installation, electrical, fabrication, civil and industrial capability.",

  /**
   * Public site URL used for canonical URLs, sitemap and Open Graph tags.
   * Set NEXT_PUBLIC_SITE_URL in the deployment environment; when it is
   * missing or blank the production fallback applies, so the layout's
   * `new URL(siteConfig.url)` always receives a valid absolute URL.
   */
  url: resolveSiteUrl(),

  contact: {
    /** Displayed exactly as provided by the company. */
    phoneDisplay: "8319602626",
    /** Dialable form for tel: links (India country code). */
    phoneDial: "+918319602626",
    email: "khushienterprises942@gmail.com",
    addressLine1: "24, Lohari Bujurg",
    addressLine2: "Dist. Dhar, Indore (M.P.) 454001",
    addressFull: "24, Lohari Bujurg, Dist. Dhar, Indore (M.P.) 454001",
  },

  /** Areas served, derived from the locations named in the company profile. */
  serviceArea: "Indore, Dhar, Pithampur, Dewas and project sites across Madhya Pradesh",

  /**
   * Team strength as stated in the company profile.
   * These are the only numbers that may appear on the site.
   */
  facts: [
    { label: "Manpower", value: "20" },
    { label: "Technicians", value: "4" },
    { label: "Engineers", value: "4" },
    { label: "Solar sector experience", value: "Over 5 Years" },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/**
 * Primary navigation — order mirrors the site structure and the business
 * hierarchy: the Solar O&M & Asset Management page sits directly after About.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solar O&M", href: "/solar-om" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Quality & Safety", href: "/quality-safety" },
  { label: "Contact", href: "/contact" },
];

/**
 * Routes that are published but sit outside the primary navigation, so the
 * sitemap can list them without duplicating the navigation list.
 */
export const secondaryRoutes: string[] = ["/solar-services"];

/**
 * Service categories shown in the home page capability strip.
 * Solar O&M and asset management leads; the remaining lines follow.
 */
export const capabilityStrip: { label: string; href: string }[] = [
  { label: "Solar O&M & Asset Management", href: "/solar-om" },
  { label: "Solar Installation", href: "/solar-services" },
  { label: "Electrical", href: "/services#electrical-works" },
  { label: "Fabrication", href: "/services#fabrication-structural-works" },
  { label: "Civil & Industrial", href: "/services#civil-works" },
];

/** Nature of business, listed for the footer and structured data. */
export const businessLines: string[] = [
  "Solar O&M & Asset Management",
  "Solar Installation & Commissioning",
  "Solar Cleaning",
  "Electrical Installation & Maintenance",
  "Fabrication & Structural Work",
  "Civil Works",
  "Pipeline Work",
  "Industrial Project Services",
  "Manpower Supply",
];

