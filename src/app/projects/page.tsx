import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Projects & Site Record | Khushi Enterprises",
  description:
    "Documented execution record across Solar O&M, Rooftop Solar I&C, Electrical Works, Fabrication, Civil and Industrial Scopes.",
  path: "/projects",
  keywords: [
    "solar O&M projects",
    "rooftop solar installation projects",
    "industrial fabrication projects Madhya Pradesh",
    "solar project record Pithampur",
    "solar O&M Indore",
  ],
});

export default function ProjectsPage() {
  return (
    <div className="flex flex-col bg-brand-black text-white">
      <PageHeader
        eyebrow="PORTFOLIO &amp; EXECUTION RECORD"
        title="SITE EXECUTION RECORD."
        description="Solar O&M, rooftop solar installation and commissioning, electrical engineering, fabrication and pipeline scopes executed for industrial and commercial clients."
        backgroundImage="/images/projects/moira-sariya-pithampur.png"
      />

      <section className="relative py-20 sm:py-28 bg-brand-surface border-y border-white/10">
        <Container className="max-w-[94rem]">
          <div className="mb-12 pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-2">
                FILTER RECORD
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                PROJECTS BY CAPABILITY
              </h2>
            </div>
            <p className="text-xs font-mono text-navy-400 uppercase">
              CONFIRMED CLIENT SITE RECORDS ONLY
            </p>
          </div>

          <ProjectsExplorer />

          <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-brand-black/60 backdrop-blur-md max-w-4xl">
            <p className="text-xs sm:text-sm text-navy-300 leading-relaxed font-mono">
              NOTE: Client and organization names reflect project associations — work delivered on site by Khushi Enterprises. Data accuracy strictly maintained with no invented MW figures or performance metrics.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-brand-black text-center border-t border-white/10">
        <Container className="max-w-4xl space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold">
            NEXT ENGAGEMENT
          </p>
          <h2 className="font-display text-[min(10vw,clamp(2.5rem,2rem+4vw,5rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
            HAVE A SIMILAR SCOPE IN CENTRAL INDIA?
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Send us the project parameters, location, and execution window. We will return with a confirmed manpower and delivery schedule.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              <span>Discuss Your Scope</span>
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
