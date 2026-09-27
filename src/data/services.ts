/**
 * Service content for the Services and Solar Services pages.
 *
 * Scope items are taken directly from the Khushi Enterprises company profile.
 * Do not add capabilities, equipment lists or certifications that the company
 * has not supplied.
 *
 * The list is ordered by business priority — solar O&M and asset management
 * first (index 01), followed by the supporting execution scopes.
 */

export type ServiceIconKey =
  | "solar-install"
  | "solar-om"
  | "electrical"
  | "fabrication"
  | "civil"
  | "pipeline"
  | "manpower";

export type ServiceGroup = {
  /** Anchor id and image file name. */
  slug: string;
  /** Displayed index, e.g. "01". */
  index: string;
  title: string;
  category: string;
  summary: string;
  capabilities: string[];
  icon: ServiceIconKey;
  image: { src: string; alt: string };
  /** Optional short factual note (team strength etc.). */
  note?: string;
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "solar-om",
    index: "01",
    title: "Solar O&M & Asset Management",
    category: "Solar",
    summary:
      "Operation and maintenance for commissioned rooftop and ground-mounted plants — plant monitoring, preventive and corrective maintenance, breakdown management, performance tracking and asset reporting across the operating life of the plant.",
    capabilities: [
      "Solar O&M",
      "Asset management",
      "Plant monitoring",
      "Performance monitoring",
      "Preventive maintenance",
      "Corrective maintenance",
      "Breakdown management",
      "Site operations",
      "Technical reporting",
      "Spare parts coordination",
      "Vendor coordination",
      "Safety & compliance",
      "Rooftop & ground mount O&M",
      "Solar cleaning",
    ],
    icon: "solar-om",
    image: {
      src: "/images/services/solar-operation-maintenance.png",
      alt: "Solar O&M team carrying out inspection and maintenance at a commissioned solar plant",
    },
    note: "The company's primary business line, expanded in full on the Solar O&M & Asset Management page.",
  },
  {
    slug: "solar-installation-commissioning",
    index: "02",
    title: "Solar Installation & Commissioning",
    category: "Solar",
    summary:
      "Rooftop solar plants executed end to end — from site readiness and structure work to module installation and commissioning handover.",
    capabilities: [
      "Rooftop ON-GRID",
      "Rooftop OFF-GRID",
      "Solar installation",
      "Solar commissioning",
    ],
    icon: "solar-install",
    image: {
      src: "/images/services/solar-installation-commissioning.png",
      alt: "Rooftop solar installation and commissioning work executed by Khushi Enterprises",
    },
  },

  {
    slug: "electrical-works",
    index: "03",
    title: "Electrical Works",
    category: "Electrical",
    summary:
      "Electrical installation and maintenance for commercial, residential and industrial facilities, covering internal and external electrification.",
    capabilities: [
      "Electrical installation",
      "Electrical maintenance",
      "Internal electrification",
      "External electrification",
      "Commercial",
      "Residential",
      "Industrial",
    ],
    icon: "electrical",
    image: {
      src: "/images/services/electrical-works.png",
      alt: "Industrial electrical installation and maintenance work",
    },
  },
  {
    slug: "fabrication-structural-works",
    index: "04",
    title: "Fabrication & Structural Works",
    category: "Fabrication",
    summary:
      "Fabrication and structural execution carried out to site requirement — solar structures, shed structures, cable trays and SS railings.",
    capabilities: [
      "Fabrication",
      "Structural work",
      "Shed structures",
      "Cable tray work",
      "SS railing",
      "Solar structures",
    ],
    icon: "fabrication",
    image: {
      src: "/images/services/fabrication-structural-works.png",
      alt: "Fabrication and structural work including cable tray and structure execution",
    },
  },
  {
    slug: "civil-works",
    index: "05",
    title: "Civil Works",
    category: "Civil",
    summary:
      "Foundation and civil execution that supports solar structures and electrical earthing infrastructure at site.",
    capabilities: [
      "Pile foundation",
      "Solar structure foundation",
      "Earth pit foundation",
      "Earth pit chamber",
    ],
    icon: "civil",
    image: {
      src: "/images/services/civil-works.png",
      alt: "Civil works including pile foundation and structure foundation execution",
    },
  },
  {
    slug: "pipeline-industrial-services",
    index: "06",
    title: "Pipeline & Industrial Services",
    category: "Industrial",
    summary:
      "Piping work and industrial project support, covering water pipeline, gas line and fire line scopes.",
    capabilities: [
      "Water pipeline",
      "Gas line",
      "Fire line",
      "Pipeline installation",
      "Industrial manpower support",
    ],
    icon: "pipeline",
    image: {
      src: "/images/services/pipeline-industrial-services.png",
      alt: "Industrial pipeline installation work at a project site",
    },
  },
  {
    slug: "manpower-support",
    index: "07",
    title: "Manpower & Equipment Support",
    category: "Industrial",
    summary:
      "Field manpower deployed for solar, electrical, fabrication and civil scopes, supporting main contractors and plant teams on site.",
    capabilities: [
      "Industrial manpower support",
      "Manpower for solar O&M and solar cleaning activity",
      "Manpower for electrical, fabrication and civil scopes",
    ],
    icon: "manpower",
    note: "Team strength: 20 manpower, including 4 technicians and 4 engineers, with over 5 years of solar-sector experience.",
    image: {
      src: "/images/services/manpower-support.png",
      alt: "Khushi Enterprises field manpower deployed on an industrial project site",
    },
  },
];

/* -------------------------------------------------------------------------- */
/* Home page service categories                                               */
/* -------------------------------------------------------------------------- */

export type HomeServiceCategory = {
  title: string;
  summary: string;
  capabilities: string[];
  href: string;
  icon: ServiceIconKey;
};

export const homeServiceCategories: HomeServiceCategory[] = [
  {
    title: "Solar",
    summary:
      "Rooftop and ground-mounted solar plants taken from installation through commissioning, O&M and cleaning.",
    capabilities: [
      "Rooftop ON-GRID & OFF-GRID",
      "Ground mount solar",
      "Solar O&M",
      "Solar cleaning",
    ],
    href: "/solar-services",
    icon: "solar-install",
  },
  {
    title: "Electrical",
    summary:
      "Installation and maintenance of internal and external electrification for industrial, commercial and residential sites.",
    capabilities: [
      "Electrical installation",
      "Electrical maintenance",
      "Internal electrification",
      "External electrification",
    ],
    href: "/services#electrical-works",
    icon: "electrical",
  },
  {
    title: "Fabrication",
    summary:
      "Fabrication and structural execution to site requirement — solar structures, sheds, cable trays and railings.",
    capabilities: [
      "Fabrication",
      "Structural work",
      "Shed structures",
      "Cable tray & SS railing",
    ],
    href: "/services#fabrication-structural-works",
    icon: "fabrication",
  },
  {
    title: "Civil & Structural",
    summary:
      "Foundation and civil work that carries solar structures and earthing infrastructure at site.",
    capabilities: [
      "Pile foundation",
      "Solar structure foundation",
      "Earth pit foundation",
      "Earth pit chamber",
    ],
    href: "/services#civil-works",
    icon: "civil",
  },
  {
    title: "Industrial Services",
    summary:
      "Pipeline work, industrial project support and manpower deployment on operating plant sites.",
    capabilities: [
      "Water pipeline",
      "Gas line",
      "Fire line",
      "Industrial manpower support",
    ],
    href: "/services#pipeline-industrial-services",
    icon: "pipeline",
  },
];

/* -------------------------------------------------------------------------- */
/* Solar Services page                                                        */
/* -------------------------------------------------------------------------- */


export type SolarCapability = {
  title: string;
  description: string;
  points?: string[];
  /** Set when a dedicated page covers the scope in more detail. */
  href?: string;
};

export const solarCapabilities: SolarCapability[] = [
  {
    title: "Solar O&M & Asset Management",
    description:
      "Operation and maintenance for rooftop and ground-mounted plants across the operating life of the asset — plant monitoring, preventive and corrective maintenance, breakdown response and technical reporting.",
    points: [
      "Solar O&M",
      "Asset management",
      "Preventive & corrective maintenance",
      "Breakdown management",
      "Performance monitoring",
      "Technical reporting",
    ],
    href: "/solar-om",
  },
  {
    title: "Solar Installation & Commissioning",
    description:
      "Rooftop solar plants executed end to end — structure erection, module mounting, electrical interconnection, checks and commissioning support.",
    points: ["Rooftop ON-GRID", "Rooftop OFF-GRID", "Installation", "Commissioning"],
  },
  {
    title: "Rooftop Solar",
    description:
      "ON-GRID and OFF-GRID rooftop systems for industrial and commercial roofs, executed with due attention to roof condition, access and safety.",
  },
  {
    title: "Ground Mount Solar",
    description:
      "Ground-mounted solar arrays supported by civil foundation work — pile foundations, structure foundations and earth pit works.",
  },
  {
    title: "Solar Cleaning",
    description:
      "Module cleaning activity carried out as part of the O&M scope, keeping module surfaces clear through the operating year.",
  },
  {
    title: "Solar Structure Related Works",
    description:
      "Solar structures, shed structures and cable tray work executed by our fabrication team in support of solar installations.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const solarProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Site Assessment",
    description:
      "Site visit to review roof or ground conditions, access, structure readiness and the electrical interface before mobilisation.",
  },
  {
    step: "02",
    title: "Engineering & Preparation",
    description:
      "Planning of the execution scope, material requirement and site preparation ahead of installation work.",
  },
  {
    step: "03",
    title: "Installation",
    description:
      "Structure work, module installation and electrical interconnection carried out by the field team.",
  },
  {
    step: "04",
    title: "Testing & Commissioning",
    description:
      "Checks and commissioning support until the system is ready for handover.",
  },
  {
    step: "05",
    title: "O&M & Asset Management",
    description:
      "Post-commissioning operation and maintenance — periodic inspection, cleaning, performance tracking and reporting through the operating life of the plant.",
  },
];


