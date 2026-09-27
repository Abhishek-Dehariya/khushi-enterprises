import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ChevronDown } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-brand-black text-white pt-32 pb-12 sm:pb-16 lg:pt-36">
      {/* 01 — Full Viewport Cinematic Background with Subtle Zoom */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/images/hero/hero-solar-field.png"
          alt="Khushi Enterprises Solar Plant Operations and Asset Management"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.03] transition-transform duration-1000 ease-out"
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/40 to-transparent" />
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      </div>

      {/* Main Hero Narrative */}
      <Container className="relative z-10 flex-1 flex flex-col justify-center max-w-[92rem] py-12">
        <div className="max-w-4xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-solar-400 font-mono text-xs uppercase tracking-[0.25em] mb-8">
            <span className="h-2 w-2 rounded-full bg-solar-500 animate-pulse shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
            <span>SOLAR O&amp;M • ASSET MANAGEMENT</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="font-display text-[min(10vw,clamp(2.75rem,2rem+5.5vw,6.5rem))] font-extrabold uppercase tracking-tight text-white leading-[0.92]">
            KEEPING <br />
            SOLAR ASSETS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-navy-100 to-solar-400">
              PERFORMING.
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="mt-8 max-w-2xl text-lg sm:text-xl lg:text-2xl text-navy-200 font-normal leading-relaxed">
            Solar O&amp;M and Asset Management focused on reliable operations, performance monitoring and long-term asset value.
          </p>

          {/* Action Triggers */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button href="/contact" size="lg">
              <span>Discuss Your Solar Asset</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
            <Button href="/solar-om" variant="outline" size="lg">
              <span>Explore O&amp;M</span>
            </Button>
          </div>
        </div>
      </Container>

      {/* Subtle Scroll Indicator & Live Stats Line */}
      <Container className="relative z-10 max-w-[92rem] border-t border-white/10 pt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-8 sm:gap-12">
            <div>
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest">POSITIONING</p>
              <p className="font-display text-sm font-semibold text-white tracking-wide mt-1">Solar O&amp;M &amp; Asset Management</p>
            </div>
            <div>
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest">FIELD MANPOWER</p>
              <p className="font-display text-sm font-semibold text-white tracking-wide mt-1">20 Personnel • 4 Engineers • 4 Techs</p>
            </div>
            <div>
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest">LOCATION</p>
              <p className="font-display text-sm font-semibold text-white tracking-wide mt-1">Indore • Dhar • Pithampur • MP</p>
            </div>
          </div>

          <a
            href="#statement"
            aria-label="Scroll down to statement"
            className="flex min-h-11 items-center gap-2 text-xs font-mono uppercase tracking-widest text-navy-300 hover:text-solar-400 transition-colors"
          >
            <span>Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce text-solar-500" />
          </a>
        </div>
      </Container>
    </section>
  );
}
