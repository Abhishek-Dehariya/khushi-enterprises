import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";
import { vision } from "@/data/company";

export function AboutEditorial() {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-brand-surface text-white border-y border-white/10 overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
      />

      <Container className="relative max-w-[94rem]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Monumental Statement & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold">
              08 • ORGANISATION
            </p>

            <h2 className="font-display text-[min(10vw,clamp(2.75rem,2rem+4.5vw,5.5rem))] font-extrabold uppercase leading-[0.94] tracking-tight text-white">
              ENGINEERED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 via-solar-500 to-amber-300">
                FOR THE FIELD.
              </span>
            </h2>

            <div className="border-l-2 border-solar-500 pl-6 py-2">
              <p className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white/90">
                &ldquo;{vision}&rdquo;
              </p>
            </div>

            <p className="text-base sm:text-lg text-navy-200 leading-relaxed max-w-2xl">
              Khushi Enterprises was founded in Lohari Bujurg (Dhar / Indore, MP) with a clear focus: technical competence on live plant sites. Owned and led by {siteConfig.proprietor}, we mobilize 20 dedicated field manpower including 4 engineers and 4 technicians across Central India.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <p className="font-mono text-xs text-white/40 uppercase tracking-widest">FIELD TEAM</p>
                <p className="font-display text-2xl font-bold text-white mt-1">20 Manpower</p>
              </div>
              <div>
                <p className="font-mono text-xs text-white/40 uppercase tracking-widest">SUPERVISION</p>
                <p className="font-display text-2xl font-bold text-white mt-1">4 Engineers</p>
              </div>
              <div>
                <p className="font-mono text-xs text-white/40 uppercase tracking-widest">SECTOR FOCUS</p>
                <p className="font-display text-2xl font-bold text-white mt-1">5+ Yrs Solar</p>
              </div>
            </div>

            <div className="pt-4">
              <Button href="/about" size="lg">
                <span>Company Story &amp; Pillars</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: Full Bleed Framed Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden border border-white/15 bg-brand-black shadow-2xl">
              <Image
                src="/images/services/manpower-support.png"
                alt="Khushi Enterprises engineering manpower on industrial site"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs uppercase text-solar-400 tracking-widest block mb-1">
                  FIELD DISCIPLINE
                </span>
                <p className="font-display text-lg font-bold uppercase text-white tracking-tight">
                  Direct Mobilisation Across Indore, Pithampur &amp; Dewas
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
