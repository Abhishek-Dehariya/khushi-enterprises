/**
 * Project portfolio.
 *
 * Client names, locations, capacities, project types and activities are exactly
 * as supplied in the Khushi Enterprises company profile. Where the profile does
 * not state a detail (location, capacity, activity), the field is left out on
 * purpose — never guessed.
 *
 * `Industrial` groups work carried out at operating industrial plants, which is
 * how those sites are described in the company profile.
 */

export type ProjectCategory =
  | "Solar O&M"
  | "Solar I&C"
  | "Electrical"
  | "Fabrication"
  | "Civil"
  | "Pipeline"
  | "Industrial";

export const projectCategories: ProjectCategory[] = [
  "Solar O&M",
  "Solar I&C",
  "Electrical",
  "Fabrication",
  "Civil",
  "Pipeline",
  "Industrial",
];

export type Project = {
  slug: string;
  /** Client or project association as named in the company profile. */
  client: string;
  location?: string;
  capacity?: string;
  /** Short classification taken from the company profile. */
  type?: string;
  /** Scope of work carried out, as described in the company profile. */
  scope: string[];
  categories: ProjectCategory[];
  image: { src: string; alt: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "moira-sariya-pithampur",
    client: "Moira Sariya",
    location: "Pithampur",
    capacity: "3.5 MW",
    type: "Solar O&M",
    scope: ["Solar O&M"],
    categories: ["Solar O&M"],
    featured: true,
    image: {
      src: "/images/projects/moira-sariya-pithampur.png",
      alt: "Solar O&M work for the 3.5 MW plant at Moira Sariya, Pithampur",
    },
  },
  {
    slug: "artha-energy-simplex-metal",
    client: "Artha Energy / Simplex Metal",
    location: "Pithampur",
    capacity: "500 kWp",
    type: "Rooftop I&C",
    scope: ["Rooftop installation & commissioning"],
    categories: ["Solar I&C"],
    featured: true,
    image: {
      src: "/images/projects/artha-energy-simplex-metal.png",
      alt: "500 kWp rooftop solar installation and commissioning at Simplex Metal, Pithampur",
    },
  },
  {
    slug: "artha-energy-maysure-deep",
    client: "Artha Energy / Maysure Deep",
    location: "Dewas",
    capacity: "300 kWp",
    type: "Rooftop I&C",
    scope: ["Rooftop installation & commissioning"],
    categories: ["Solar I&C"],
    image: {
      src: "/images/projects/artha-energy-maysure-deep.png",
      alt: "300 kWp rooftop solar installation and commissioning at Maysure Deep, Dewas",
    },
  },
  {
    slug: "ajanta-pharma",
    client: "Ajanta Pharma",
    location: "Pithampur / Dhar",
    capacity: "1 MW",
    type: "Solar O&M / Electrical / Fabrication",
    scope: ["Solar O&M", "Electrical work", "Fabrication work"],
    categories: ["Solar O&M", "Electrical", "Fabrication"],
    featured: true,
    image: {
      src: "/images/projects/ajanta-pharma.png",
      alt: "1 MW solar O&M with electrical and fabrication work at Ajanta Pharma, Pithampur and Dhar",
    },
  },
  {
    slug: "jakson-ventures",
    client: "JAKSON ventures",
    type: "Solar O&M",
    scope: ["Solar O&M"],
    categories: ["Solar O&M"],
    image: {
      src: "/images/projects/jakson-ventures.png",
      alt: "Solar O&M work executed for JAKSON ventures",
    },
  },
  {
    // The company profile lists this association without a site or activity
    // description, so only the association itself is shown.
    slug: "fourth-partner-energy",
    client: "Fourth Partner Energy",
    scope: ["Multiple projects"],
    categories: [],
    image: {
      src: "/images/projects/fourth-partner-energy.png",
      alt: "Project association with Fourth Partner Energy",
    },
  },
  {
    slug: "avtec",
    client: "AVTEC",
    type: "Electrical / Fabrication / Solar-related work",
    scope: ["Electrical work", "Fabrication work", "Solar-related work"],
    categories: ["Electrical", "Fabrication", "Industrial"],
    featured: true,
    image: {
      src: "/images/projects/avtec.png",
      alt: "Electrical, fabrication and solar-related work executed at AVTEC",
    },
  },
  {
    slug: "bridgestone-india",
    client: "Bridgestone India",
    type: "Electrical / Civil / Fabrication",
    scope: ["Electrical work", "Civil work", "Fabrication work"],
    categories: ["Electrical", "Civil", "Fabrication", "Industrial"],
    image: {
      src: "/images/projects/bridgestone-india.png",
      alt: "Electrical, civil and fabrication work executed for Bridgestone India",
    },
  },
  {
    slug: "ve-commercial",
    client: "VE Commercial",
    type: "Fabrication / Electrical",
    scope: ["Fabrication work", "Electrical work"],
    categories: ["Fabrication", "Electrical", "Industrial"],
    image: {
      src: "/images/projects/ve-commercial.png",
      alt: "Fabrication and electrical work executed for VE Commercial",
    },
  },
  {
    slug: "shracom",
    client: "Shracom",
    type: "Structure / Pipeline / Cable tray",
    scope: ["Structure work", "Pipeline work", "Cable tray work"],
    categories: ["Fabrication", "Pipeline", "Industrial"],
    featured: true,
    image: {
      src: "/images/projects/shracom.png",
      alt: "Structure, pipeline and cable tray work executed for Shracom",
    },
  },
  {
    slug: "solar-era",
    client: "Solar Era",
    type: "Solar O&M",
    scope: ["Solar O&M"],
    categories: ["Solar O&M"],
    image: {
      src: "/images/projects/solar-era.png",
      alt: "Solar O&M work executed for Solar Era",
    },
  },
  {
    slug: "cancer-hospital-gwalior",
    client: "Cancer Hospital Gwalior",
    location: "Gwalior",
    capacity: "40 kWp",
    type: "Solar I&C",
    scope: ["Solar installation & commissioning"],
    categories: ["Solar I&C"],
    featured: true,
    image: {
      src: "/images/projects/cancer-hospital-gwalior.png",
      alt: "40 kWp solar installation and commissioning at Cancer Hospital, Gwalior",
    },
  },
];

/** Projects highlighted on the home page. */
export const featuredProjects: Project[] = projects.filter(
  (project) => project.featured,
);

