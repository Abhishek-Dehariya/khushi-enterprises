import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { assetFocusAreas, assetLifecycle, omImages } from "@/data/om";
import { imageSizes } from "@/lib/utils";

/**
 * Asset management — the subsection that explains why the engagement is wider
 * than a maintenance contract.
 *
 * The lifecycle is the argument, so it is given the full column and set as a
 * numbered sequence: MONITOR → ANALYZE → MAINTAIN → OPTIMIZE → REPORT →
 * IMPROVE. The areas it covers follow as hairline chips.
 */
export function AssetManagement() {
  return (
    <Section tone="muted" id="asset-management">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
        {/* ---- Statement ---- */}
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Asset Management"
            title="Beyond Maintenance. We Manage the Asset."
            description="Asset management is broader than a maintenance schedule. It covers how a plant is watched, measured, maintained, optimised, reported on and improved across its operating life."
          />

          <Reveal className="mt-10">
            <figure className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-[4px] border border-ink-200 bg-navy-100 shadow-[var(--shadow-panel)]">
                <Image
                  src={omImages.assetManagement.src}
                  alt={omImages.assetManagement.alt}
                  fill
                  sizes={imageSizes.half}
                  className="object-cover"
                />
              </div>
            </figure>
          </Reveal>
        </div>

        {/* ---- Lifecycle and coverage ---- */}
        <div className="lg:col-span-7">
          <h3 className="text-label text-ink-500 uppercase">
            Operating lifecycle
          </h3>

          <ol className="mt-5 border-t border-ink-200">
            {assetLifecycle.map((stage, index) => (
              <li
                key={stage.step}
                className="group/step relative border-b border-ink-200"
              >
                {/* Downward connector — makes the lifecycle read as a flow. */}
                {index < assetLifecycle.length - 1 ? (
                  <ArrowRight className="absolute -bottom-[7px] left-[11px] z-10 h-3.5 w-3.5 rotate-90 bg-ink-50 text-ink-400" />
                ) : null}

                <div className="flex gap-5 py-5 transition-[padding] duration-300 ease-[var(--ease-out-expo)] group-hover/step:pl-2">
                  <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center border border-solar-500/60 bg-white text-micro font-semibold text-solar-700">
                    {stage.step}
                  </span>
                  <div>
                    <h4 className="font-display text-h4 font-semibold tracking-[0.08em] text-navy-900 uppercase">
                      {stage.title}
                    </h4>
                    <p className="mt-2 max-w-xl text-detail text-ink-600">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <h3 className="text-label text-ink-500 uppercase">
              What asset management covers
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {assetFocusAreas.map((area) => (
                <li
                  key={area}
                  className="border border-ink-200 bg-white px-3.5 py-2 text-detail text-ink-700"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/solar-om" variant="secondary">
              Explore Solar O&M &amp; Asset Management
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline">
              Discuss Your Solar Asset
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
