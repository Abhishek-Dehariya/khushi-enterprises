import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { ClientLogoGrid } from "@/components/clients/ClientLogoGrid";
import { clients } from "@/data/clients";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Clients & Associations | Project Record",
  description:
    "Organisations and project associations of Khushi Enterprises — Fourth Partner Energy, Ajanta Pharma, AVTEC, Bridgestone, VE Commercial, Moira Sariya and more.",
  path: "/clients",
  keywords: [
    "solar contractor for industries",
    "industrial electrical contractor clients",
    "solar O&M clients Madhya Pradesh",
  ],
});

function projectsForClient(clientName: string) {
  const key = clientName.split("/")[0].trim().toLowerCase();
  return projects.filter((project) => {
    const projectClient = project.client.toLowerCase();
    return projectClient.includes(key) || key.includes(projectClient);
  });
}

export default function ClientsPage() {
  return (
    <div className="flex flex-col bg-brand-black text-white">
      <PageHeader
        eyebrow="CLIENT ASSOCIATIONS"
        title="TRUSTED ON FIELD SITES."
        description="Organisations across renewable energy, pharmaceuticals, automotive and heavy engineering for whom Khushi Enterprises has executed work."
        backgroundImage="/images/projects/fourth-partner-energy.png"
      />

      <section className="relative py-24 sm:py-32 bg-brand-surface border-y border-white/10">
        <Container className="max-w-[94rem]">
          <div className="mb-14 pb-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-2">
                ORGANISATIONS
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                PROJECT ASSOCIATIONS
              </h2>
            </div>
            <p className="text-xs font-mono text-navy-400 uppercase">
              CONFIRMED EXECUTION SITES
            </p>
          </div>

          <ClientLogoGrid tone="dark" />

          {/* Detailed Associated Projects Register */}
          <div className="mt-24 space-y-6">
            <h3 className="font-display text-2xl font-bold uppercase text-white">
              DETAILED SCOPE RECORD BY ORGANISATION
            </h3>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {clients.map((client) => {
                const related = projectsForClient(client.name);
                return (
                  <div key={client.name} className="py-8 grid lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-4">
                      <h4 className="font-display text-xl font-bold uppercase text-white">
                        {client.name}
                      </h4>
                      <p className="text-xs font-mono text-solar-400 uppercase mt-1">
                        CONFIRMED SITE WORK
                      </p>
                    </div>

                    <div className="lg:col-span-8 space-y-3">
                      {related.length > 0 ? (
                        related.map((p) => (
                          <div key={p.slug} className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                            <p className="font-display text-base font-semibold text-white">
                              {p.type || p.scope.join(" • ")}
                            </p>
                            <p className="text-xs font-mono text-navy-300 mt-1 uppercase">
                              {[p.capacity, p.location].filter(Boolean).join(" • ")}
                            </p>
                            <p className="text-xs text-navy-400 mt-2">
                              SCOPE: {p.scope.join(" • ")}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-navy-300 italic">
                          Listed as an active industrial project association in company records.
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-brand-black text-center border-t border-white/10">
        <Container className="max-w-4xl space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold">
            ADD YOUR SITE
          </p>
          <h2 className="font-display text-[min(10vw,clamp(2.5rem,2rem+4vw,5rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
            READY TO ENGAGE A RELIABLE SITE CONTRACTOR?
          </h2>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              <span>Discuss Your Facility</span>
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
