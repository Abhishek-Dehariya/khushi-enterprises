import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { solarCapabilities, solarProcess } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Solar Installation & Commissioning | Khushi Enterprises",
  description:
    "Rooftop ON-GRID and OFF-GRID solar systems, ground mounted arrays and solar commissioning delivered with in-house fabrication and civil support.",
  path: "/solar-services",
  keywords: [
    "solar installation Madhya Pradesh",
    "solar O&M services",
    "solar cleaning services",
    "solar rooftop installation",
  ],
});

export default function SolarServicesPage() {
  return (
    <div className="flex flex-col bg-brand-black text-white">
      <PageHeader
        eyebrow="SOLAR EXECUTION"
        title="SOLAR INSTALLATION &amp; COMMISSIONING."
        description="From rooftop ON-GRID and OFF-GRID systems to ground-mounted arrays, Khushi Enterprises installs, commissions, operates and maintains solar plants for industrial and commercial clients."
        backgroundImage="/images/services/solar-installation-commissioning.png"
      />

      {/* Capabilities */}
      <section className="relative py-24 sm:py-32 bg-brand-surface border-y border-white/10">
        <Container className="max-w-[94rem]">
          <div className="mb-16 pb-8 border-b border-white/10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-2">
              SOLAR CAPABILITIES
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              WHAT WE EXECUTE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solarCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-8 rounded-3xl border border-white/10 bg-brand-black/60 backdrop-blur-xl space-y-4 hover:border-solar-500/40 transition-all"
              >
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                  {cap.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {cap.description}
                </p>
                {cap.points && (
                  <ul className="pt-2 space-y-2 border-t border-white/10">
                    {cap.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs font-mono text-navy-200">
                        <Check className="h-3.5 w-3.5 text-solar-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Sequence */}
      <section className="relative py-24 sm:py-32 bg-brand-black">
        <Container className="max-w-[94rem]">
          <div className="mb-16 pb-8 border-b border-white/10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-2">
              DELIVERY SEQUENCE
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              HOW WE DELIVER SOLAR SITES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {solarProcess.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-3">
                <span className="font-display text-3xl font-extrabold text-solar-500">
                  {step.step}
                </span>
                <h4 className="font-display text-lg font-bold uppercase text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-navy-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-brand-surface text-center border-t border-white/10">
        <Container className="max-w-4xl space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold">
            START YOUR SOLAR PROJECT
          </p>
          <h2 className="font-display text-[min(10vw,clamp(2.5rem,2rem+4vw,5rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
            READY TO INSTALL OR UPGRADE?
          </h2>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              <span>Discuss Solar Installation</span>
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
