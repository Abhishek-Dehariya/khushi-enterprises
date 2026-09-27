import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";

export function OmVisualStory() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-brand-black text-white">
      {/* Edge-to-Edge Cinematic Solar Plant Imagery */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/om/om-field-inspection.png"
          alt="Solar technicians inspecting modules and plant equipment"
          fill
          sizes="100vw"
          className="object-cover object-center contrast-115 brightness-75 scale-[1.01]"
        />
        {/* Layered vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/80" />
        <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      </div>

      <Container className="relative py-24 sm:py-32 max-w-[92rem]">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-6 block">
            03 • FIELD EXECUTION
          </span>

          <h2 className="font-display text-[min(10vw,clamp(2.5rem,2rem+5vw,6rem))] font-extrabold uppercase leading-[0.94] tracking-tight text-white">
            SOLAR O&amp;M
          </h2>

          <p className="mt-6 font-display text-[clamp(1.5rem,1.2rem+2.5vw,3rem)] font-bold text-navy-100 uppercase tracking-tight leading-[1.05]">
            &ldquo;From daily operations <br className="hidden sm:inline" />
            to long-term performance.&rdquo;
          </p>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-navy-200 leading-relaxed">
            Our engineers and field technicians inspect string combiners, inverters, cabling, and module arrays on an exact schedule — preventing minor thermal faults before they cause system downtime.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button href="/solar-om" size="lg">
              <span>View Full O&amp;M Scope</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-6 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-navy-300 uppercase">
              <span>Rooftop &amp; Ground Mount</span>
              <span className="h-1 w-1 rounded-full bg-solar-500" />
              <span>Indore &amp; Central India</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
