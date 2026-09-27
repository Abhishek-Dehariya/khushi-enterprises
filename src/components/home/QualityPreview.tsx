import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, HardHat, ShieldCheck } from "@/components/ui/Icons";
import { qualityCommitment, safetyCommitment } from "@/data/company";

const blocks = [
  {
    kicker: "Quality",
    Icon: ShieldCheck,
    accent: "text-solar-700",
    rule: "bg-solar-500",
    commitment: qualityCommitment,
  },
  {
    kicker: "Safety",
    Icon: HardHat,
    accent: "text-leaf-600",
    rule: "bg-leaf-500",
    commitment: safetyCommitment,
  },
] as const;

/**
 * Quality & Safety.
 *
 * Two large blocks rather than a row of small cards — the kicker is set at
 * display size so the two commitments carry the section on typography alone,
 * with a single technical icon each. The points are the company's own stated
 * principles; no certification is claimed anywhere.
 */
export function QualityPreview() {
  return (
    <Section tone="muted" id="quality-safety">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Quality & Safety"
          title="Execution you can inspect"
          description="Quality and safety are treated as working requirements on site — checked as the work progresses, not after handover."
        />
        <ArrowLink href="/quality-safety" className="shrink-0 lg:pb-2">
          Our approach to quality &amp; safety
        </ArrowLink>
      </div>

      <div className="mt-head grid gap-6 lg:grid-cols-2 lg:gap-7">
        {blocks.map(({ kicker, Icon, accent, rule, commitment }) => (
          <Reveal
            key={kicker}
            as="article"
            className="flex flex-col border border-ink-200 bg-white p-7 lg:p-9"
          >
            <div className="flex items-start justify-between gap-6">
              <h3 className="font-display text-h1 leading-none font-semibold tracking-[-0.02em] text-navy-900">
                {kicker}
              </h3>
              <Icon className={`h-10 w-10 shrink-0 ${accent}`} />
            </div>

            <span aria-hidden="true" className={`mt-7 block h-[3px] w-12 ${rule}`} />

            <p className="mt-6 text-detail text-ink-600">
              {commitment.description}
            </p>

            <ul className="mt-7 space-y-3 border-t border-ink-100 pt-6">
              {commitment.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-detail text-ink-700"
                >
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-leaf-500" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
