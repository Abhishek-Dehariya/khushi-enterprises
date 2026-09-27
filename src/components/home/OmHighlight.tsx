import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { omImages, omPositioning } from "@/data/om";

/**
 * Solar O&M & Asset Management — the primary business section.
 *
 * Sits immediately after the hero and is built to be read as the strongest
 * statement on the page: one large operational photograph with technical corner
 * marks, a monitoring caption, and the twelve scope areas set as a data-style
 * "in scope" register rather than as icon cards.
 *
 * No performance figures appear anywhere — monitoring, maintenance and
 * reporting are shown as activities the company carries out, not as results it
 * claims.
 */
export function OmHighlight() {
  return (
    <section
      id="solar-om"
      className="relative isolate overflow-hidden bg-navy-950 text-navy-100"
    >
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 -z-10 opacity-60"
      />
      {/* Hairline of solar across the top edge seats the band on the page. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-solar-500/60 to-transparent"
      />

      <Container className="py-section">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ---- Argument ---- */}
          <div className="lg:col-span-6">
            <Eyebrow tone="dark">{omPositioning.eyebrow}</Eyebrow>

            <h2 className="mt-6 max-w-xl text-h1 text-white">
              {omPositioning.headline}
            </h2>

            <p className="measure mt-6 text-lede text-navy-200">
              {omPositioning.supporting}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg">
                Talk to Our Solar O&M Team
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/solar-om" variant="ghost" size="lg">
                Improve Plant Operations
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* ---- Operational photograph ---- */}
          <Reveal className="lg:col-span-6">
            <figure className="relative">
              <span
                aria-hidden="true"
                className="absolute inset-0 hidden translate-x-3 translate-y-3 rounded-[4px] border border-solar-500/35 sm:block"
              />

              <div className="relative aspect-4/3 overflow-hidden rounded-[4px] border border-white/15 bg-navy-800 shadow-[var(--shadow-plate)]">
                <Image
                  src={omImages.fieldInspection.src}
                  alt={omImages.fieldInspection.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />

                {/* Technical corner marks — drafting register, not decoration. */}
                <span
                  aria-hidden="true"
                  className="absolute top-3 left-3 h-4 w-4 border-t border-l border-white/45"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-3 h-4 w-4 border-t border-r border-white/45"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-white/45"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/45"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950/88 to-transparent"
                />

                <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-x-3 gap-y-1 p-4 sm:p-5">
                  <span className="flex items-center gap-2 text-label text-white uppercase">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 animate-pulse bg-solar-500"
                    />
                    Plant operations
                  </span>
                  <span className="text-detail text-navy-100">
                    Inspection · Maintenance · Breakdown response
                  </span>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>

        {/* ---- Scope register ----
            The twelve capability areas are presented as a data-style table
            with hairline rules and an "in scope" marker, so the section reads
            as an operating register rather than as a feature grid. */}
        <Reveal className="mt-14 lg:mt-16">
          <div className="border border-white/15 bg-navy-900/50">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 px-5 py-4">
              <h3 className="text-label text-solar-400 uppercase">
                O&amp;M &amp; Asset Management — Scope
              </h3>
              <p className="text-micro text-navy-300">
                Covered under the company&rsquo;s primary capability
              </p>
            </div>

            <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {omPositioning.highlights.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-3 bg-navy-950 px-5 py-4 transition-colors duration-200 hover:bg-navy-900"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-[10px] font-semibold tracking-[0.12em] text-solar-500"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-detail text-navy-100">{item}</span>
                  <span
                    aria-hidden="true"
                    className="mx-1 h-px flex-1 bg-white/20"
                  />
                  <span className="text-label text-navy-300 uppercase">
                    In scope
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
