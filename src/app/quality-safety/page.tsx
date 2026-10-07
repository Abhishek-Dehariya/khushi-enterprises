import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check, ShieldCheck } from "@/components/ui/Icons";
import {
  qualityCommitment,
  safetyCommitment,
  vision,
} from "@/data/company";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Quality & Safety | Built Into Every Site",
  description:
    "Quality assurance, continuous inspection, electrical safety standards and health protocols executed by Khushi Enterprises across solar and industrial installations.",
  path: "/quality-safety",
  keywords: [
    "site quality control contractor",
    "construction health and safety India",
    "solar site safety practice",
    "industrial contractor quality assurance",
  ],
});

const executionWorkflow = [
  {
    step: "01",
    title: "PLAN",
    desc: "Rigorous site assessment, access constraints analysis, and comprehensive scope breakdown before any team mobilises.",
  },
  {
    step: "02",
    title: "PREPARE",
    desc: "Assigning qualified engineers, briefing certified technicians, staging calibrated tooling and personal protective gear.",
  },
  {
    step: "03",
    title: "EXECUTE",
    desc: "Adhering strictly to plant design specifications, electrical schematics, and client installation standards on site.",
  },
  {
    step: "04",
    title: "INSPECT",
    desc: "Stage-gate quality checkpoints during active works — verifying torque, continuity, insulation resistance and structural alignments.",
  },
  {
    step: "05",
    title: "VERIFY",
    desc: "Pre-commissioning validation, electrical testing, non-conformity tracking, and immediate closure before handover.",
  },
  {
    step: "06",
    title: "IMPROVE",
    desc: "Continuous technical logging, preventative insights, and feedback loops into future O&M and maintenance cycles.",
  },
];

const safetyPillarsEditorial = [
  {
    title: "SITE DISCIPLINE",
    desc: "Controlled site perimeters, organized tool staging, and strict demarcation between active working areas and live facilities.",
  },
  {
    title: "PPE COMPLIANCE",
    desc: "Mandatory industrial helmets, eye protection, high-visibility apparel, steel-toe boots, and calibrated electrical gloves.",
  },
  {
    title: "WORK PERMITS & LOTO",
    desc: "Lock-Out / Tag-Out isolation procedures and authorized daily permit-to-work routines before entering any electrical panels or rooftops.",
  },
  {
    title: "ELECTRICAL SAFETY",
    desc: "Strict protocol for working around live inverters, transformer yards, and high-voltage string arrays.",
  },
  {
    title: "QUALITY INSPECTION",
    desc: "Continuous on-ground supervision by 4 dedicated engineers to catch workmanship deviations in real-time.",
  },
  {
    title: "EXECUTION STANDARDS",
    desc: "Living by the core operating ethos: 'Achieve Performance Excellence and create standards with reality.'",
  },
];

export default function QualitySafetyPage() {
  return (
    <div className="flex flex-col bg-brand-black text-white">
      {/* 01 — FULL SCREEN CINEMATIC HERO */}
      <section className="relative isolate min-h-[85vh] lg:min-h-screen flex flex-col justify-end overflow-hidden pt-32 pb-16 lg:pb-24">
        <VideoBackground poster="/images/services/manpower-support.png" />

        <Container className="relative z-10 max-w-[94rem]">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-solar-400 font-mono text-xs uppercase tracking-[0.25em] mb-8">
            <span className="h-2 w-2 rounded-full bg-solar-500 animate-pulse shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
            <span>QUALITY • SAFETY • EXECUTION</span>
          </div>

          <h1 className="font-display text-[min(10vw,clamp(2.75rem,2rem+5.5vw,6.5rem))] font-extrabold uppercase tracking-tight text-white leading-[0.92] max-w-5xl">
            QUALITY IS <br />
            BUILT INTO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 via-solar-500 to-amber-200">
              THE WORK.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-navy-200 font-normal leading-relaxed">
            How work is checked and how people are protected on site — the two standards that decide whether an engineering execution scope is worth repeating.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg">
              <span>Discuss Site Standards</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-navy-300 uppercase">
              Zero Tolerance for Shortcuts
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — STATEMENT: THE STANDARD WE WORK TO */}
      <section className="relative py-28 sm:py-36 bg-white text-ink-900 overflow-hidden">
        <div
          aria-hidden="true"
          className="blueprint-grid-light absolute inset-0 opacity-40 pointer-events-none"
        />

        <Container className="relative max-w-6xl">
          <div className="space-y-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-600 font-semibold">
              02 • THE VISION
            </p>

            <h2 className="font-display text-[min(9vw,clamp(2.2rem,1.8rem+4vw,5rem))] font-extrabold uppercase leading-[0.98] tracking-tight text-ink-900">
              &ldquo;{vision}&rdquo;
            </h2>

            <div className="grid lg:grid-cols-12 gap-8 pt-8 border-t border-ink-200">
              <div className="lg:col-span-8">
                <p className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink-800 leading-snug">
                  On site this means the working method is agreed before mobilisation, the work is inspected as it progresses, and any shortfall is closed with immediate corrective action.
                </p>
              </div>
              <div className="lg:col-span-4 lg:border-l lg:border-ink-200 lg:pl-8 space-y-4">
                <p className="text-base text-ink-600 leading-relaxed">
                  People working on or visiting the site are covered by the same rigorous set of precautions.
                </p>
                <div className="flex items-center gap-3 text-sm font-semibold text-solar-600">
                  <ShieldCheck className="h-5 w-5" />
                  <span>Proprietor-Led Oversight</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 — HOW WE WORK: 6-STEP IMMERSIVE NUMBERED SEQUENCE */}
      <section className="relative py-28 sm:py-36 bg-brand-surface text-white border-y border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
        />

        <Container className="relative max-w-[94rem]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 border-b border-white/10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-4">
                03 • METHODOLOGY
              </p>
              <h2 className="font-display text-[min(9vw,clamp(2.2rem,1.8rem+3.5vw,4.75rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
                HOW WE WORK
              </h2>
            </div>
            <p className="text-navy-300 text-base sm:text-lg max-w-md leading-relaxed">
              A disciplined six-stage execution sequence applied across all solar O&amp;M, rooftop installations and structural works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {executionWorkflow.map((item) => (
              <div
                key={item.step}
                className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-brand-black/60 backdrop-blur-xl relative group transition-all duration-300 hover:border-solar-500/40 hover:bg-brand-black"
              >
                <div className="flex items-baseline justify-between pb-6 border-b border-white/10">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-solar-500">
                    {item.step}
                  </span>
                  <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                    STAGE
                  </span>
                </div>

                <div className="pt-6 space-y-3">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white group-hover:text-solar-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-navy-300 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 04 — LARGE IMAGE STORY MOMENT: SAFETY ON EVERY SITE */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-brand-black text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/services/pipeline-industrial-services.png"
            alt="Industrial safety and pipeline execution"
            fill
            sizes="100vw"
            className="object-cover object-center contrast-110 brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/80" />
          <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        </div>

        <Container className="relative py-24 sm:py-32 max-w-[92rem]">
          <div className="max-w-4xl space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold block">
              04 • OCCUPATIONAL HEALTH &amp; SAFETY
            </span>

            <h2 className="font-display text-[min(10vw,clamp(2.75rem,2rem+5vw,6rem))] font-extrabold uppercase leading-[0.94] tracking-tight text-white">
              SAFETY <br />
              ON EVERY SITE.
            </h2>

            <p className="font-display text-2xl sm:text-3xl font-bold text-navy-100 uppercase tracking-tight">
              &ldquo;Zero harm to workers, client staff, and facility assets.&rdquo;
            </p>

            <p className="text-lg text-navy-200 leading-relaxed max-w-2xl">
              Every job begins with a safety toolbox talk. Working at heights, live high-voltage DC arrays, and crane lifting operations demand continuous vigilance and seasoned engineering supervision.
            </p>
          </div>
        </Container>
      </section>

      {/* 05 — EDITORIAL SAFETY & EXECUTION PILLARS (NO CARDS) */}
      <section className="relative py-28 sm:py-36 bg-brand-surface text-white border-t border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
        />

        <Container className="relative max-w-[94rem]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 border-b border-white/10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-4">
                05 • FIELD PROTOCOLS
              </p>
              <h2 className="font-display text-[min(9vw,clamp(2.2rem,1.8rem+3.5vw,4.75rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
                SAFETY &amp; INSPECTION PILLARS
              </h2>
            </div>
            <p className="text-navy-300 text-base sm:text-lg max-w-md leading-relaxed">
              Standard operating procedures maintained across rooftop installations, ground mounts, and plant O&amp;M.
            </p>
          </div>

          {/* Editorial alternating rows */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {safetyPillarsEditorial.map((item, idx) => (
              <div
                key={item.title}
                className="py-10 sm:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-baseline gap-6 sm:gap-10 lg:w-1/2">
                  <span className="font-mono text-xs sm:text-sm text-solar-400 font-semibold">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="lg:w-1/2">
                  <p className="text-base text-navy-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Commitment Bullets */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-white/10 bg-brand-black/60 backdrop-blur-xl">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-6">
              Core Commitments to the Client
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {qualityCommitment.points.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-navy-200">
                  <Check className="h-4 w-4 text-solar-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
              {safetyCommitment.points.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-navy-200">
                  <Check className="h-4 w-4 text-solar-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 06 — CLOSING HERO CTA */}
      <section className="relative py-28 sm:py-36 bg-brand-black text-white border-t border-white/10 text-center">
        <Container className="max-w-4xl space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold">
            START YOUR AUDIT
          </p>
          <h2 className="font-display text-[min(10vw,clamp(2.5rem,2rem+4vw,5rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
            WANT TO REVIEW OUR SITE EXECUTION METHOD?
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Share the scope and facility requirements. We will prepare an exact execution plan, inspection matrices, and safety protocols for your site.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              <span>Request Execution Plan</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/solar-om" variant="outline" size="lg">
              <span>Explore Solar O&amp;M</span>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
