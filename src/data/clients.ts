/**
 * Clients & project associations.
 *
 * Only organisations named in the Khushi Enterprises company profile are listed.
 * Logos are shown only when an actual logo file is available — add the file under
 * /public/images/clients/ and set `logo` for that entry. Until then the grid
 * renders a typographic wordmark tile instead of a placeholder graphic.
 *
 * This is not a testimonial or endorsement list, so no quotes or ratings appear
 * anywhere on the site.
 */

export type Client = {
  name: string;
  /**
   * Set once the real logo file exists, e.g.
   * public/images/clients/<client-name>.png (written without the leading quote
   * so the placeholder generator does not treat this example as a real path).
   */
  logo: { src: string; alt: string } | null;
};

export const clients: Client[] = [
  { name: "Fourth Partner Energy", logo: null },
  { name: "Ajanta Pharma", logo: null },
  { name: "Solar Era", logo: null },
  { name: "Linamar", logo: null },
  { name: "AVTEC / CK Birla Group", logo: null },
  { name: "Bridgestone", logo: null },
  { name: "JAKSON / JAKSON ventures", logo: null },
  { name: "BECIS", logo: null },
];
