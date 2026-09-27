/**
 * Solar O&M and Asset Management content.
 *
 * This is the company's primary business line, so the wording in this file
 * leads the site: the home page opens on it, the dedicated `/solar-om` page
 * expands it, and the navigation points at it.
 *
 * Only activities the company takes up are described. No performance
 * percentages, availability figures, response times or client results are
 * stated anywhere — none have been supplied. The only figures used are counts
 * of the sections listed in this file itself (10 scope areas, 6 lifecycle
 * stages), not plant performance.
 */

export const omPositioning = {
  eyebrow: "Solar O&M & Asset Management",
  headline: "Keeping Solar Assets Performing at Their Best.",
  supporting:
    "End-to-end Solar O&M and Asset Management focused on plant reliability, performance, preventive maintenance and long-term asset value.",
  /** Scope list rendered as a technical "in scope" panel on the home page. */
  highlights: [
    "Solar O&M",
    "Asset Management",
    "Plant Monitoring",
    "Preventive Maintenance",
    "Corrective Maintenance",
    "Breakdown Management",
    "Performance Monitoring",
    "Site Operations",
    "Technical Reporting",
    "Spare Parts Coordination",
    "Vendor Coordination",
    "Safety & Compliance",
  ],
} as const;

/**
 * Operational photography for the O&M sections. Paths are referenced from this
 * file so they can be swapped for company photographs without touching the
 * components.
 */
export const omImages = {
  fieldInspection: {
    src: "/images/om/om-field-inspection.png",
    alt: "Solar O&M technicians inspecting modules and plant equipment at a solar site",
  },
  assetManagement: {
    src: "/images/om/asset-management.png",
    alt: "Inverter and control room equipment checked under the solar asset management scope",
  },
} as const;

/**
 * Key technical professional associated with the company's Solar O&M and Asset
 * Management capability. Only the details supplied are published — no
 * designation, employer history, project count or certification is claimed.
 */
export const omExpert = {
  name: "Abhishek Dehariya",
  experience: "10+ Years",
  focus: "Solar O&M & Asset Management",
  email: "a.dehariya10@gmail.com",
  phoneDisplay: "+91 9806610010",
  phoneDial: "+919806610010",
  linkedin: "https://www.linkedin.com/in/abhishek-dehariya/",
} as const;

/* -------------------------------------------------------------------------- */
/* Asset management                                                           */
/* -------------------------------------------------------------------------- */

export type AssetLifecycleStage = {
  step: string;
  title: string;
  description: string;
};

/** MONITOR → ANALYZE → MAINTAIN → OPTIMIZE → REPORT → IMPROVE. */
export const assetLifecycle: AssetLifecycleStage[] = [
  {
    step: "01",
    title: "Monitor",
    description:
      "Plant generation, equipment status and site conditions are watched so that deviations become visible early.",
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "Readings and site observations are reviewed to understand what is affecting plant behaviour.",
  },
  {
    step: "03",
    title: "Maintain",
    description:
      "Preventive schedules and corrective attendance keep equipment in working condition through the operating year.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "Findings are acted on so the plant keeps operating closer to the performance expected of it.",
  },
  {
    step: "05",
    title: "Report",
    description:
      "Plant condition, maintenance activity and findings are documented and shared with the asset owner.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "Recurring issues and observations feed back into the maintenance plan for the next cycle.",
  },
];

/** Areas covered under asset management, beyond routine maintenance. */
export const assetFocusAreas: string[] = [
  "Plant Performance",
  "Availability",
  "Generation Monitoring",
  "PR / Performance Tracking",
  "Preventive Maintenance",
  "Corrective Maintenance",
  "Breakdown Response",
  "Spare Management",
  "Manpower Management",
  "Vendor Coordination",
  "Reporting",
  "Safety",
  "Compliance",
  "Continuous Improvement",
];

/* -------------------------------------------------------------------------- */
/* O&M scope areas — the ten sections of the /solar-om page                   */
/* -------------------------------------------------------------------------- */

export type OmScope = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  /** Activities covered under the scope. */
  points: string[];
  /** Optional operational photograph shown with the scope. */
  image?: { src: string; alt: string };
};

export const omScopes: OmScope[] = [
  {
    slug: "plant-monitoring",
    index: "01",
    title: "Plant Monitoring",
    summary:
      "A continuous watch on plant generation, inverter status and site conditions, so that deviations are noticed and followed up instead of surfacing at the end of the month.",
    points: [
      "Generation and equipment status review",
      "Inverter and string-level observations",
      "Site conditions and access check",
      "Deviation follow-up with the site team",
    ],
    image: {
      src: "/images/om/plant-monitoring.png",
      alt: "Plant monitoring screens showing solar plant generation and equipment status",
    },
  },
  {
    slug: "preventive-maintenance",
    index: "02",
    title: "Preventive Maintenance",
    summary:
      "Scheduled maintenance planned ahead of the season and carried out before a finding turns into a breakdown — inspection, cleaning and electrical checks under one O&M scope.",
    points: [
      "Scheduled inspection visits",
      "Module, array and structure inspection",
      "Module cleaning as part of the O&M scope",
      "Electrical checks and tightening",
      "Observations recorded for the asset owner",
    ],
    image: {
      src: "/images/om/preventive-maintenance.png",
      alt: "Preventive maintenance activity carried out on solar modules and plant equipment",
    },
  },
  {
    slug: "corrective-maintenance",
    index: "03",
    title: "Corrective Maintenance",
    summary:
      "Attending to faults and non-conformities raised during operation, inspection or performance review, and confirming the plant is back in service after the correction.",
    points: [
      "Fault attendance and fault isolation",
      "Repair and replacement support",
      "Re-testing after correction",
      "Closure recorded with the rectification",
    ],
  },
  {
    slug: "breakdown-management",
    index: "04",
    title: "Breakdown Management",
    summary:
      "Responding to plant stoppages and equipment failures with the intent to restore generation safely and keep the asset owner informed of what happened and what was done.",
    points: [
      "Breakdown attendance on site",
      "Coordination with equipment and service vendors",
      "Restoration support and re-commissioning checks",
      "Root-cause discussion with the asset owner",
    ],
  },
  {
    slug: "performance-monitoring",
    index: "05",
    title: "Performance Monitoring",
    summary:
      "Tracking how the plant is performing against its expected generation, so that underperformance is identified and addressed rather than carried through the year.",
    points: [
      "Generation monitoring",
      "PR and performance tracking",
      "Availability review",
      "Comparison against expected values",
      "Underperformance follow-up and correction",
    ],
  },
  {
    slug: "asset-management",
    index: "06",
    title: "Asset Management",
    summary:
      "Managing the solar plant as an asset across its operating life — not only as a maintenance schedule. Performance, maintenance, manpower, spares, vendors and reporting are treated as one responsibility.",
    points: [
      "Plant performance and availability oversight",
      "Preventive and corrective maintenance planning",
      "Breakdown response and rectification follow-up",
      "Spare, manpower and vendor management",
      "Reporting, safety and compliance",
      "Continuous improvement across cycles",
    ],
    image: {
      src: "/images/om/asset-management.png",
      alt: "Inverter and control room equipment checked under the solar asset management scope",
    },
  },
  {
    slug: "reporting-analytics",
    index: "07",
    title: "Reporting & Analytics",
    summary:
      "Technical and asset reporting that gives the owner a clear picture of plant condition, maintenance activity and performance — what was found, what was done and what is recommended next.",
    points: [
      "Maintenance and inspection reports",
      "Performance reporting",
      "Breakdown and rectification records",
      "Recommendations for the next cycle",
    ],
  },
  {
    slug: "site-operations",
    index: "08",
    title: "Site Operations",
    summary:
      "Site-level operations run with our own field team — manpower deployment, supervision and coordination on site so that O&M activity is planned, attended and documented.",
    points: [
      "O&M manpower deployment",
      "Site supervision and work planning",
      "Coordination with the client's plant team",
      "Access, housekeeping and area discipline",
    ],
    image: {
      src: "/images/om/site-operations.png",
      alt: "Khushi Enterprises O&M field team carrying out site operations at a solar plant",
    },
  },
  {
    slug: "spare-parts-coordination",
    index: "09",
    title: "Spare Parts Coordination",
    summary:
      "Keeping track of the spares and consumables the plant needs for maintenance, and coordinating their availability so that rectification is not held up.",
    points: [
      "Spare requirement identification",
      "Spare and consumable tracking",
      "Procurement follow-up",
      "Replacement record keeping",
    ],
  },
  {
    slug: "safety-compliance",
    index: "10",
    title: "Safety & Compliance",
    summary:
      "O&M activity carried out with the safety practice expected on an operating plant site, following the client's site rules and permit system.",
    points: [
      "Work permitting and isolation practice",
      "Work-at-height and electrical safety precautions",
      "PPE, tools and material discipline",
      "Safety briefing before site activity",
      "Compliance with client site requirements",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* /solar-om page copy                                                        */
/* -------------------------------------------------------------------------- */

export const omPage = {
  eyebrow: "Solar O&M & Asset Management",
  title: "Performance doesn’t stop after commissioning.",
  description:
    "Khushi Enterprises supports solar assets throughout their operating lifecycle — plant monitoring, preventive and corrective maintenance, breakdown management, performance tracking, reporting and site operations.",
  intro: {
    title: "The plant keeps working. So do we.",
    paragraphs: [
      "A commissioned solar plant is not a finished project. It is an asset that has to be watched, maintained, measured and reported on through its working life.",
      "Khushi Enterprises takes up that responsibility as the company's primary business line — with a field team that also carries out installation, so the people who understand how the plant was built are the ones maintaining it.",
    ],
  },
  scopesIntro: {
    eyebrow: "O&M Scope",
    title: "Ten scope areas we manage on a solar asset",
    description:
      "Each scope below is taken up as part of an O&M and asset management engagement, and expanded or combined to suit the plant, the client's team and the site conditions.",
  },
  secondary: {
    eyebrow: "Working Alongside O&M",
    title: "Installation, electrical, fabrication and civil support",
    description:
      "Solar installation and commissioning, electrical work, fabrication, civil foundations and industrial scopes remain available — delivered by the same field team, in support of the O&M and asset management business.",
  },
} as const;



