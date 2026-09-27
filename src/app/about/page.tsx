import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  approachPillars,
  companyOverview,
  teamCapability,
  vision,
} from "@/data/company";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Us | Engineered for the Field",
  description:
    "Khushi Enterprises is an engineering services firm focused on Solar O&M & Asset Management, owned and led by Mr. Govind Singh, based in Dhar / Indore, Madhya Pradesh.",
  path: "/about",
  keywords: [
    "solar O&M company Madhya Pradesh",
    "solar asset management company",
    "solar company Dhar Indore",
    "electrical and fabrication contractor",
  ],
});

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-brand-black text-white">
      <PageHeader
        eyebrow="ORGANISATION &amp; ETHOS"
        title="ENGINEERED FOR THE FIELD."
        description="A proprietor-led engineering firm based in Dhar, Madhya Pradesh, delivering disciplined Solar O&M and Asset Management alongside installation, electrical, fabrication, and civil capabilities."
        backgroundImage="/images/services/manpower-support.png"
      />

      {/* 01 — Overview Statement */}
      <section className="relative py-28 sm:py-36 bg-white text-ink-900 overflow-hidden">
        <div
          aria-hidden="true"
          className="blueprint-grid-light absolute inset-0 opacity-40 pointer-events-none"
        />

        <Container className="relative max-w-6xl">
          <div className="space-y-12">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-600 font-semibold">
              01 • PHILOSOPHY
            </p>

            <h2 className="font-display text-[min(9.5vw,clamp(2.4rem,2rem+4vw,5rem))] font-extrabold uppercase leading-[0.98] tracking-tight text-ink-900">
              &ldquo;{vision}&rdquo;
            </h2>

            <div className="grid lg:grid-cols-12 gap-10 pt-8 border-t border-ink-200">
              <div className="lg:col-span-8 space-y-6">
                <p className="text-xl sm:text-2xl font-display font-bold uppercase text-ink-800 leading-snug">
                  {companyOverview[0]}
                </p>
                <p className="text-base sm:text-lg text-ink-600 leading-relaxed">
                  {companyOverview[1]}
                </p>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-ink-200 lg:pl-8 space-y-6">
                <div>
                  <p className="font-mono text-xs text-ink-400 uppercase tracking-widest">
                    PROPRIETOR
                  </p>
                  <p className="font-display text-2xl font-bold uppercase text-ink-900 mt-1">
                    {siteConfig.proprietor}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs text-ink-400 uppercase tracking-widest">
                    HEADQUARTERS
                  </p>
                  <p className="text-sm font-semibold text-ink-800 mt-1">
                    {siteConfig.contact.addressFull}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — 20 Manpower Team Strengths Grid */}
      <section className="relative py-28 sm:py-36 bg-brand-surface text-white border-y border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
        />

        <Container className="relative max-w-[94rem]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 border-b border-white/10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-4">
                02 • TEAM STRENGTH
              </p>
              <h2 className="font-display text-[min(9vw,clamp(2.2rem,1.8rem+3.5vw,4.75rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
                TECHNICAL CAPABILITY
              </h2>
            </div>
            <p className="text-navy-300 text-base sm:text-lg max-w-md leading-relaxed">
              Work delivered on site with our own field crew, supervised directly by engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {teamCapability.map((item) => (
              <div
                key={item.label}
                className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-brand-black/60 backdrop-blur-xl relative group hover:border-solar-500/40 transition-all"
              >
                <p className="font-display text-5xl sm:text-6xl font-extrabold text-solar-500">
                  {item.value}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-4">
                  {item.label}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed mt-2">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Execution Pillars */}
          <div className="mt-20 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {approachPillars.map((p, idx) => (
              <div key={p.title} className="space-y-3">
                <span className="font-mono text-xs text-solar-400 font-semibold">
                  {`0${idx + 1} // PILLAR`}
                </span>
                <h4 className="font-display text-xl font-bold uppercase text-white tracking-tight">
                  {p.title}
                </h4>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 03 — Bottom Conversion */}
      <section className="relative py-28 bg-brand-black text-center border-t border-white/10">
        <Container className="max-w-4xl space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold">
            COLLABORATION
          </p>
          <h2 className="font-display text-[min(10vw,clamp(2.5rem,2rem+4vw,5rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
            WANT TO WORK TOGETHER?
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Reach out to our engineering team to discuss solar plant O&amp;M, installation or industrial scopes.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              <span>Contact Us Directly</span>
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
