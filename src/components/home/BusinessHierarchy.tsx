import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Business hierarchy.
 *
 * The home page states the order of the business visually: solar O&M and asset
 * management is presented as a full-width primary panel (01) with photography,
 * a summary and its own CTAs, while installation, electrical, fabrication and
 * civil/industrial scopes follow as four supporting entries (02–05). Nothing is
 * hidden — the supporting lines are simply given less weight.
 */
const supportingLines = [
  {
    index: "02",
    title: "Solar Installation & Commissioning",
    summary:
      "Rooftop ON-GRID and OFF-GRID plants and ground-mounted arrays — structure work, module installation, testing and commissioning handover.",
    href: "/solar-services",
  },
  {
    index: "03",
    title: "Electrical Engineering",
    summary:
      "Electrical installation and maintenance for industrial, commercial and residential facilities, including internal and external electrification.",
    href: "/services#electrical-works",
  },
  {
    index: "04",
    title: "Fabrication & Structural Works",
    summary:
      "Solar structures, shed structures, cable trays and SS railings fabricated and erected to the site requirement.",
    href: "/services#fabrication-structural-works",
  },
  {
    index: "05",
    title: "Civil & Industrial Services",
    summary:
      "Pile and structure foundations, earth pit works, pipeline scopes and industrial manpower support on operating plant sites.",
    href: "/services#civil-works",
  },
] as const;

const omPoints = [
  "Dedicated solar O&M and asset management focus",
  "Plant performance, availability and generation oversight",
  "Preventive, corrective and breakdown maintenance",
  "Technical reporting through the operating life of the asset",
] as const;

export function BusinessHierarchy() {
  return (
    <Section tone="light" id="capabilities">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Business Focus"
          title="Solar O&M & Asset Management first"
          description="O&M and asset management is the company's primary business. Solar installation, electrical, fabrication, civil and industrial scopes are executed by the same in-house team in support of it."
        />
        <Button
          href="/services"
          variant="outline"
          className="shrink-0 self-start lg:self-auto"
        >
          All Services
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* ---- 01 · Primary business line ---- */}
      <Reveal className="mt-head">
        <article className="grid overflow-hidden border border-ink-200 bg-white lg:grid-cols-12">
          <div className="relative min-h-[260px] lg:col-span-5 lg:min-h-full">
            <Image
              src="/images/services/solar-operation-maintenance.png"
              alt="Khushi Enterprises O&M team carrying out maintenance at a commissioned solar plant"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-navy-950/90 px-3 py-1.5 text-label text-white uppercase">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 bg-solar-500"
              />
              Primary business
            </span>
          </div>

          <div className="p-7 lg:col-span-7 lg:p-9">
            <p className="font-display text-detail font-semibold tracking-[0.16em] text-solar-700">
              01
            </p>
            <h3 className="mt-3 text-h2">Solar O&amp;M &amp; Asset Management</h3>
            <p className="mt-5 max-w-2xl text-lede text-ink-600">
              Keeping solar plants operational, reliable and performing —
              monitoring, maintenance, breakdown response, performance tracking
              and reporting across the operating life of the asset.
            </p>

            <ul className="mt-7 grid gap-x-8 border-t border-ink-100">
              {omPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 border-b border-ink-100 py-3 text-detail text-ink-700"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-leaf-500" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/solar-om">
                Explore O&amp;M Services
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline">
                Talk to Our Solar O&amp;M Team
              </Button>
            </div>
          </div>
        </article>
      </Reveal>

      {/* ---- 02–05 · Supporting scopes ---- */}
      <ul className="mt-6 grid gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2">
        {supportingLines.map((line) => (
          <Reveal as="li" key={line.href} className="bg-white">
            <article className="group/card relative flex h-full flex-col p-6 transition-colors duration-300 hover:bg-ink-50 lg:p-7">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-detail font-semibold tracking-[0.16em] text-ink-500">
                  {line.index}
                </span>
                <h3 className="text-h4">{line.title}</h3>
              </div>
              <p className="mt-3 text-detail text-ink-600">{line.summary}</p>
              <ArrowLink
                href={line.href}
                parentHover
                stretch
                className="mt-auto pt-6"
              >
                View scope
              </ArrowLink>
            </article>
          </Reveal>
        ))}
      </ul>

      <p className="mt-5 text-micro text-ink-500">
        Pipeline work, manpower support and solar cleaning are taken up within
        these scopes.{" "}
        <Link
          href="/services"
          className="font-medium text-navy-900 underline underline-offset-4 transition-colors hover:text-solar-700"
        >
          See the full service list
        </Link>
        .
      </p>

    </Section>
  );
}
