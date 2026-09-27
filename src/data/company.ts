/**
 * Company content for the About and Quality & Safety pages.
 *
 * The vision and mission statements are reproduced exactly as stated in the
 * company profile. Quality and safety points follow the principles the company
 * works to — no certifications are claimed anywhere.
 */

export const companyOverview: string[] = [
  "Khushi Enterprises is a proprietor-led engineering services firm owned by Mr. Govind Singh, working out of Lohari Bujurg in Dhar district, Madhya Pradesh. The company executes solar installation and commissioning, solar operation and maintenance, electrical installation and maintenance, fabrication and structural work, civil works, pipeline work and industrial project services for commercial and industrial clients.",
  "Work is delivered by a field team of 20 manpower, including 4 technicians and 4 engineers, with over 5 years of experience in the solar sector. That combination of local site competency and technical manpower allows the company to take up execution scopes on operating plant sites and hand them over on schedule.",
  "Every scope — whether it is a rooftop solar plant, a ground-mounted array, a cable tray run or an earth pit chamber — is executed to agreed quality and safety standards, with the field team responsible for inspection and corrective action as the work progresses.",
];

export const approachPillars: { title: string; description: string }[] = [
  {
    title: "Local site competency",
    description:
      "Direct knowledge of project sites and industrial facilities across Indore, Dhar, Pithampur and Dewas, with mobilisation that does not depend on remote coordination.",
  },
  {
    title: "Standards-led execution",
    description:
      "Installation and O&M work carried out to the quality and workmanship standards expected on industrial projects, in line with the company's commitment to create standards with reality.",
  },
  {
    title: "Performance excellence",
    description:
      "Scopes planned around achievable schedules, with inspection and corrective action built into the day-to-day working method.",
  },
  {
    title: "Timely execution",
    description:
      "Sufficient manpower, technicians and engineers kept available to complete installation, O&M and cleaning activity within the agreed project window.",
  },
];

export const vision =
  "Achieve Performance Excellence and create standards with reality.";

export const mission =
  "Provide services in response to changing needs and to provide value addition in all our endeavors, while maintaining high standards of quality.";

/** Team and capability, based on the manpower stated in the company profile. */
export const teamCapability: { label: string; value: string; note: string }[] = [
  {
    label: "Manpower",
    value: "20",
    note: "Field manpower deployed across solar, electrical, fabrication and civil scopes.",
  },
  {
    label: "Technicians",
    value: "4",
    note: "Skilled technicians for installation, maintenance and cleaning activity.",
  },
  {
    label: "Engineers",
    value: "4",
    note: "Engineering supervision for execution, inspection and commissioning support.",
  },
  {
    label: "Solar sector experience",
    value: "Over 5 Years",
    note: "Working experience across rooftop and ground-mounted solar installations and O&M.",
  },
];


/* -------------------------------------------------------------------------- */
/* Quality & Safety                                                           */
/* -------------------------------------------------------------------------- */

export const qualityCommitment = {
  title: "Quality Commitment",
  description:
    "Khushi Enterprises is committed to delivering every scope at the quality standard agreed with the client. Quality awareness is treated as a shared responsibility — from the engineer supervising the work to the field staff executing it on site.",
  points: [
    "Quality awareness at every level of the field team",
    "Defined responsibility for the work each team executes",
    "Inspection as work progresses, not only at handover",
    "Corrective action tracked through to closure",
    "Focus on defect reduction and repeat-free execution",
  ],
};

export const qualityPillars: {
  index: string;
  title: string;
  description: string;
}[] = [
  {
    index: "01",
    title: "Quality Assurance",
    description:
      "Work scopes are reviewed before mobilisation so that material, manpower and method are clear to the executing team. Quality requirements are communicated to the personnel who will carry out the work.",
  },
  {
    index: "02",
    title: "Quality Control",
    description:
      "Executed work is checked on site against the agreed requirement. Findings are recorded and attended to by the responsible field staff before the scope moves ahead.",
  },
  {
    index: "03",
    title: "Inspection & Corrective Action",
    description:
      "Inspection continues through installation, commissioning and O&M activity. Where a non-conformity is observed, corrective action is taken and verified.",
  },
  {
    index: "04",
    title: "Defect Reduction",
    description:
      "Repeat observations are analysed so that the same defect is not carried into subsequent sites or shifts — keeping rework and downtime on the client's plant to a minimum.",
  },
];

export const safetyCommitment = {
  title: "Health & Safety",
  description:
    "Safety on site is a condition of work, not a formality. The company insists on safe practice from its own team, from subcontractor personnel and from everyone entering the work area — and works to remove hazards before they reach the people on site.",
  points: [
    "Safety of every worker engaged on the scope",
    "Subcontractor personnel held to the same safety expectations",
    "Safety of client staff and visitors to the work area",
    "Hazard identification and mitigation before work starts",
    "Work at height, rooftop and live electrical work carried out with due precautions",
  ],
};

export const safetyPillars: {
  index: string;
  title: string;
  description: string;
}[] = [
  {
    index: "01",
    title: "Worker Safety",
    description:
      "Field personnel are briefed on the hazards of the specific scope — rooftop access, work at height, electrical isolation and material movement — before work begins.",
  },
  {
    index: "02",
    title: "Subcontractor Safety",
    description:
      "Subcontractor teams working on site are expected to follow the same safety practice as our own manpower; unsafe working is stopped.",
  },
  {
    index: "03",
    title: "Client & Visitor Safety",
    description:
      "Work areas are kept identified and controlled so that client personnel and visitors are not exposed to ongoing site activity.",
  },
  {
    index: "04",
    title: "Hazard Mitigation",
    description:
      "Site conditions are reviewed before execution so that foreseeable hazards are mitigated rather than managed after the fact.",
  },
];

/* -------------------------------------------------------------------------- */
/* Execution approach                                                         */
/* -------------------------------------------------------------------------- */

/**
 * How the company's stated way of working reads as a sequence.
 *
 * This is a visual representation of the execution approach described in the
 * company profile — understanding the requirement before mobilising, preparing
 * manpower and site, executing to the agreed standard, inspecting and
 * correcting as the work progresses, and completing the scope. Each step
 * restates something the company has stated; nothing is added.
 *
 * It is NOT a certified, audited or formally documented methodology, and the
 * site must not present it as one. The section that renders this says so in
 * its own wording — see `ProcessSection`.
 */
export const executionApproach: {
  step: string;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    title: "Understand the Requirement",
    description:
      "The scope, site conditions and access are reviewed before mobilisation, so that material, manpower and method are clear to the team that will carry out the work.",
  },
  {
    step: "02",
    title: "Plan & Prepare",
    description:
      "Manpower, technicians and engineers are assigned against an achievable schedule, and the site is prepared ahead of the work starting.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "The field team carries out the scope — solar, electrical, fabrication, civil or pipeline — to the quality and workmanship standards agreed for the project.",
  },
  {
    step: "04",
    title: "Inspect & Correct",
    description:
      "Executed work is checked on site as it progresses. Where a non-conformity is observed, corrective action is taken and verified before the scope moves ahead.",
  },
  {
    step: "05",
    title: "Complete the Project",
    description:
      "The completed scope is handed over, with operation and maintenance and periodic inspection continuing where that forms part of the engagement.",
  },
];
