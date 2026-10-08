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
   * `width`/`height` are the file's natural pixel size (image properties) so
   * the grid can reserve the right aspect ratio before the logo loads.
   * `artwork` is the colour of the mark itself (default "dark") — the grid
   * only adds a backing plate where the tile colour would swallow it.
   */
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    artwork?: "dark" | "light";
  } | null;
};

export const clients: Client[] = [
  {
    name: "Fourth Partner Energy",
    logo: {
      src: "/images/clients/fourth-partner-energy.png",
      alt: "Fourth Partner Energy logo",
      width: 123,
      height: 106,
    },
  },
  {
    name: "Ajanta Pharma",
    logo: {
      src: "/images/clients/ajanta-pharma.png",
      alt: "Ajanta Pharma logo",
      width: 500,
      height: 61,
    },
  },
  {
    name: "Solar Era",
    logo: {
      src: "/images/clients/solar-era.png",
      alt: "Solar Era logo",
      width: 1050,
      height: 208,
    },
  },
  {
    name: "Linamar",
    logo: {
      // White header variant — shown straight on the dark tile, no plate.
      src: "/images/clients/logo-linamar-header.svg",
      alt: "Linamar logo",
      width: 234,
      height: 56,
      artwork: "light",
    },
  },
  {
    name: "AVTEC / CK Birla Group",
    logo: {
      src: "/images/clients/avtec.png",
      alt: "AVTEC logo",
      width: 1844,
      height: 984,
    },
  },
  {
    name: "Bridgestone",
    logo: {
      src: "/images/clients/bridgestone-solutions-for-your-journey.svg",
      alt: "Bridgestone logo",
      width: 119,
      height: 30,
    },
  },
  {
    name: "JAKSON / JAKSON ventures",
    logo: {
      src: "/images/clients/jakson.png",
      alt: "JAKSON logo",
      width: 1141,
      height: 266,
    },
  },
  {
    name: "BECIS",
    logo: {
      src: "/images/clients/BECIS-Logo-Big.svg",
      alt: "BECIS logo",
      width: 143,
      height: 38,
    },
  },
];
