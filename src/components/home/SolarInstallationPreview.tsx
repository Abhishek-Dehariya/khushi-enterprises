import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solarCapabilities } from "@/data/services";

/* Solar scopes shown on the home page after the O&M sections. O&M and asset
   management are deliberately absent — they lead the page above this section. */
const featuredTitles = [
  "Solar Installation & Commissioning",
  "Rooftop Solar",
  "Ground Mount Solar",
  "Solar Structure Related Works",
] as const;

const featured = featuredTitles.map((title) => {
  const capability = solarCapabilities.find((item) => item.title === title);
  if (!capability) throw new Error(`Unknown solar capability: ${title}`);
  return capability;
});

/**
 * Solar installation and commissioning — the secondary solar capability.
 *
 * Kept as one photograph against a hairline list rather than a card grid, and
 * placed after the O&M sections, so it stays visible without competing with the
 * primary business.
 */
export function SolarInstallationPreview() {
  return (
    <Section
      tone="navy"
      id="solar-installation"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 -z-10 opacity-60"
      />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          tone="dark"
          eyebrow="Solar Installation & Commissioning"
          title="Plants built to be operated"
          description="Rooftop ON-GRID and OFF-GRID systems and ground-mounted arrays installed, tested and handed over by the team that maintains plants afterwards — with fabrication and civil support from the same company."
        />
        <Button
          href="/solar-services"
          variant="ghost"
          className="shrink-0 self-start lg:self-auto"
        >
          Solar Capabilities
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-head grid gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <figure className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-[4px] border border-white/15 bg-navy-800 shadow-[var(--shadow-plate)] lg:aspect-16/10">
              <Image
                src="/images/services/solar-installation-commissioning.png"
                alt="Rooftop solar installation and commissioning work executed by Khushi Enterprises"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950/85 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-x-3 gap-y-1 p-4 sm:p-5">
                <span className="flex items-center gap-2 text-label text-white uppercase">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 bg-solar-500"
                  />
                  Rooftop &amp; ground mount
                </span>
                <span className="text-detail text-navy-100">
                  Installation · Testing · Commissioning
                </span>
              </figcaption>
            </div>
          </figure>
        </Reveal>

        <Reveal className="lg:col-span-5">
          <ul className="h-full border-t border-white/12">
            {featured.map((capability) => (
              <li
                key={capability.title}
                className="group/row border-b border-white/12 transition-colors duration-300 hover:bg-white/5"
              >
                <div className="flex gap-4 py-5 pr-2 pl-0 transition-[padding] duration-300 ease-[var(--ease-out-expo)] group-hover/row:pl-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-solar-500 transition-transform duration-300 group-hover/row:scale-150"
                  />
                  <div>
                    <h3 className="text-h4 text-white">{capability.title}</h3>
                    <p className="mt-2 text-micro leading-6 text-navy-200">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <p className="mt-8 text-micro text-navy-300">
        Looking for plant monitoring, maintenance and reporting instead?{" "}
        <Link
          href="/solar-om"
          className="font-medium text-white underline underline-offset-4 transition-colors hover:text-solar-400"
        >
          See Solar O&amp;M &amp; Asset Management
        </Link>
        .
      </p>
    </Section>
  );
}
