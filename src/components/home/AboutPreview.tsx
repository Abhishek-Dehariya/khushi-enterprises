import Image from "next/image";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyOverview, mission, vision } from "@/data/company";
import { imageSizes } from "@/lib/utils";

/* Vision and mission are reproduced exactly as stated in the company profile. */
const statements = [
  { label: "Vision", body: vision, rule: "bg-solar-500" },
  { label: "Mission", body: mission, rule: "bg-leaf-500" },
] as const;

/**
 * Editorial About block: one large site photograph against the company's own
 * words. Deliberately a single image rather than a set of small tiles — the
 * team-strength figures already lead the hero, so repeating them here would
 * dilute both.
 */
export function AboutPreview() {
  return (
    <Section tone="muted" id="about">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-5">
          <figure className="relative">
            <span
              aria-hidden="true"
              className="absolute inset-0 hidden -translate-x-3 translate-y-3 rounded-[4px] border border-navy-900/15 sm:block"
            />
            <div className="relative aspect-4/3 overflow-hidden rounded-[4px] border border-ink-200 bg-navy-100 shadow-[var(--shadow-panel)] lg:aspect-4/5">
              <Image
                src="/images/services/manpower-support.png"
                alt="Khushi Enterprises field team on site with the company's technicians and engineers"
                fill
                sizes={imageSizes.half}
                className="object-cover"
              />
            </div>
          </figure>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About Khushi Enterprises"
            title="A proprietor-led engineering services firm from Dhar, Madhya Pradesh"
            description={companyOverview[0]}
          />

          <Reveal className="mt-10 grid gap-px bg-ink-200 sm:grid-cols-2">
            {statements.map((statement) => (
              <div key={statement.label} className="bg-ink-50 p-6">
                <span
                  aria-hidden="true"
                  className={`block h-[3px] w-9 ${statement.rule}`}
                />
                <h3 className="mt-5 text-label text-ink-500 uppercase">
                  {statement.label}
                </h3>
                <p className="mt-3 text-detail text-ink-700">{statement.body}</p>
              </div>
            ))}
          </Reveal>

          <ArrowLink href="/about" className="mt-9">
            Explore our capabilities
          </ArrowLink>
        </div>
      </div>
    </Section>
  );
}
