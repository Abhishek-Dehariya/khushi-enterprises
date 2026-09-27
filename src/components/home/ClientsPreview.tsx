import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { ClientLogoGrid } from "@/components/clients/ClientLogoGrid";

export function ClientsPreview() {
  return (
    <section id="clients" className="relative py-28 sm:py-36 bg-brand-surface text-white border-t border-white/10 overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
      />

      <Container className="relative max-w-[94rem]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-4">
              11 • CLIENT ASSOCIATIONS
            </p>
            <h2 className="font-display text-[min(9vw,clamp(2.2rem,1.8rem+3.5vw,4.5rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
              TRUSTED ON SITE
            </h2>
          </div>
          <Button href="/clients" variant="outline" size="md">
            <span>Client Associations &amp; Scopes</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <ClientLogoGrid tone="dark" />

        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-navy-400 uppercase tracking-widest">
            PROJECT ASSOCIATIONS ACROSS RENEWABLE ENERGY, PHARMA, AUTOMOTIVE &amp; INDUSTRIAL SITES
          </p>
        </div>
      </Container>
    </section>
  );
}
