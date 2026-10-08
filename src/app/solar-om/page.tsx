import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check, Phone } from "@/components/ui/Icons";
import {
  assetFocusAreas,
  assetLifecycle,
  omExpert,
  omImages,
  omPage,
  omScopes,
} from "@/data/om";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { mailtoHref, telHref } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Solar O&M & Asset Management | Primary Discipline",
  description:
    "Comprehensive Solar O&M and Asset Management — plant monitoring, preventive & corrective maintenance, breakdown response and lifecycle asset preservation.",
  path: "/solar-om",
  keywords: [
    "solar O&M company Madhya Pradesh",
    "solar asset management",
    "solar plant maintenance",
    "solar O&M Indore",
    "solar plant monitoring",
    "preventive maintenance solar plant",
  ],
});

export default function SolarOmPage() {
  const { contact } = siteConfig;

  return (
    <div className="flex flex-col bg-brand-black text-white">
      {/* 01 — FULL-SCREEN CINEMATIC HERO */}
      <section className="relative isolate min-h-[85vh] lg:min-h-screen flex flex-col justify-end overflow-hidden pt-36 pb-16 lg:pb-24">
        <VideoBackground poster={omImages.fieldInspection.src} />

        <Container className="relative z-10 max-w-[94rem]">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-solar-400 font-mono text-xs uppercase tracking-[0.25em] mb-8">
            <span className="h-2 w-2 rounded-full bg-solar-500 animate-pulse shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
            <span>PRIMARY BUSINESS IDENTITY</span>
          </div>

          <h1 className="font-display text-[min(10vw,clamp(2.75rem,2rem+5.5vw,6.5rem))] font-extrabold uppercase tracking-tight text-white leading-[0.92] max-w-5xl">
            PERFORMANCE <br />
            DOESN&apos;T STOP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 via-solar-500 to-amber-200">
              AFTER COMMISSIONING.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-navy-200 font-normal leading-relaxed">
            {omPage.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button href="/contact" size="lg">
              <span>Discuss Your Solar Plant</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={telHref(contact.phoneDial)}
              variant="outline"
              size="lg"
              plainAnchor
            >
              <Phone className="h-4 w-4 text-solar-500" />
              <span>Call {contact.phoneDisplay}</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* 02 — STATEMENT OF PHILOSOPHY */}
      <section className="relative py-28 sm:py-36 bg-white text-ink-900 overflow-hidden">
        <div
          aria-hidden="true"
          className="blueprint-grid-light absolute inset-0 opacity-40 pointer-events-none"
        />

        <Container className="relative max-w-6xl">
          <div className="space-y-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-600 font-semibold">
              02 • THE REALITY OF SOLAR ASSETS
            </p>

            <h2 className="font-display text-[min(9.5vw,clamp(2.4rem,2rem+4vw,5.5rem))] font-extrabold uppercase leading-[0.98] tracking-tight text-ink-900">
              &ldquo;{omPage.intro.title}&rdquo;
            </h2>

            <div className="grid lg:grid-cols-12 gap-8 pt-8 border-t border-ink-200">
              <div className="lg:col-span-7">
                <p className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink-800 leading-snug">
                  {omPage.intro.paragraphs[0]}
                </p>
              </div>
              <div className="lg:col-span-5 lg:border-l lg:border-ink-200 lg:pl-8">
                <p className="text-base sm:text-lg text-ink-600 leading-relaxed">
                  {omPage.intro.paragraphs[1]}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 — SIX LIFECYCLE STAGES SEQUENCE */}
      <section id="asset-management" className="relative py-28 sm:py-36 bg-brand-surface text-white border-y border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
        />

        <Container className="relative max-w-[94rem]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 border-b border-white/10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-4">
                03 • ASSET MANAGEMENT
              </p>
              <h2 className="font-display text-[min(9vw,clamp(2.2rem,1.8rem+3.5vw,4.75rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
                SIX LIFECYCLE STAGES
              </h2>
            </div>
            <p className="text-navy-300 text-base sm:text-lg max-w-md leading-relaxed">
              How Khushi Enterprises guards plant health across the entire operational lifespan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {assetLifecycle.map((stage) => (
              <div
                key={stage.step}
                className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-brand-black/60 backdrop-blur-xl relative group hover:border-solar-500/40 transition-all"
              >
                <div className="flex items-baseline justify-between pb-6 border-b border-white/10">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-solar-500">
                    {stage.step}
                  </span>
                  <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                    STAGE
                  </span>
                </div>

                <div className="pt-6 space-y-3">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white group-hover:text-solar-400 transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-navy-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h4 className="font-mono text-xs uppercase tracking-widest text-solar-400 mb-4 font-semibold">
              FOCUS AREAS COVERED
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {assetFocusAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase text-navy-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 04 — TEN FULL O&M SCOPE AREAS */}
      <section className="relative py-28 sm:py-36 bg-brand-black text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
        />

        <Container className="relative max-w-[94rem]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 border-b border-white/10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-4">
                04 • SCOPE BREAKDOWN
              </p>
              <h2 className="font-display text-[min(9vw,clamp(2.2rem,1.8rem+3.5vw,4.75rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
                TEN SCOPE AREAS
              </h2>
            </div>
            <p className="text-navy-300 text-base sm:text-lg max-w-md leading-relaxed">
              Every scope taken up under comprehensive or customized Solar O&amp;M contracts.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {omScopes.map((scope) => (
              <div
                key={scope.slug}
                id={scope.slug}
                className="py-12 sm:py-16 grid lg:grid-cols-12 gap-8 lg:gap-14 items-start hover:bg-white/[0.01] transition-colors"
              >
                <div className="lg:col-span-2">
                  <span className="font-display text-5xl sm:text-6xl font-extrabold text-solar-500">
                    {scope.index}
                  </span>
                  <p className="font-mono text-xs text-navy-400 uppercase tracking-widest mt-2">
                    SCOPE AREA
                  </p>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                    {scope.title}
                  </h3>
                  <p className="text-base sm:text-lg text-navy-300 leading-relaxed">
                    {scope.summary}
                  </p>

                  {scope.image && (
                    <div className="pt-4">
                      <div className="relative aspect-16/9 rounded-2xl overflow-hidden border border-white/15 bg-brand-surface max-w-xl">
                        <Image
                          src={scope.image.src}
                          alt={scope.image.alt}
                          fill
                          sizes="(min-width: 1024px) 45vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-solar-400 font-semibold mb-4">
                    KEY DELIVERABLES
                  </h4>
                  <ul className="space-y-3">
                    {scope.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-200">
                        <Check className="h-4 w-4 text-solar-400 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 05 — EXPERTISE CONTACT CALLOUT */}
      <section className="relative py-28 sm:py-36 bg-brand-surface text-white border-t border-white/10">
        <Container className="max-w-4xl text-center space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold">
            KEY TECHNICAL CONTACT
          </p>
          <h2 className="font-display text-[min(10vw,clamp(2.5rem,2rem+4vw,5rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
            {omExpert.name}
          </h2>
          <p className="font-mono text-sm uppercase tracking-widest text-navy-300">
            {omExpert.experience} • {omExpert.focus}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={mailtoHref(omExpert.email)} size="lg">
              <span>Email {omExpert.email}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={telHref(omExpert.phoneDial)} variant="outline" size="lg" plainAnchor>
              <Phone className="h-4 w-4 text-solar-500" />
              <span>{omExpert.phoneDisplay}</span>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
