import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { executionApproach } from "@/data/company";

/**
 * Execution approach.
 *
 * Presented as how the company works, not as a certified process — the
 * description says so explicitly, and the steps only restate what the company
 * profile already states (see `executionApproach` in `data/company.ts`).
 *
 * Laid out as a numbered track: a single rule runs through the row on desktop
 * and down the column on mobile, so the five steps read as one sequence rather
 * than as five separate cards.
 */
export function ProcessSection() {
  return (
    <Section tone="muted" id="approach">
      <SectionHeading
        eyebrow="How We Work"
        title="Our Execution Approach"
        description="A visual representation of the way scopes are taken from enquiry to handover. It reflects how the company works on site — not a certified or externally audited methodology."
      />

      <ol className="mt-head grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
        {executionApproach.map((item, index) => (
          <Reveal as="li" key={item.step} className="relative lg:pr-2">
            {/* Connector — across the row on desktop, hidden on the last step. */}
            {index < executionApproach.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute top-[13px] left-0 hidden h-px w-full bg-ink-300 lg:block"
              />
            ) : null}

            <span
              aria-hidden="true"
              className="relative z-10 flex h-[26px] w-[26px] items-center justify-center border border-solar-500 bg-ink-50 text-[10px] font-semibold tracking-[0.06em] text-solar-700"
            >
              {item.step}
            </span>

            <h3 className="mt-5 text-h4 text-navy-900">{item.title}</h3>
            <p className="mt-2.5 text-micro leading-6 text-ink-600">
              {item.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
