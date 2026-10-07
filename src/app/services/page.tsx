"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { serviceGroups } from "@/data/services";

export default function ServicesPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  return (
    <div className="flex flex-col bg-brand-black text-white">
      {/* 01 — Full Bleed Cinematic Header */}
      <section className="relative isolate min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-end overflow-hidden pt-36 pb-16 lg:pb-24">
        <VideoBackground poster="/images/services/solar-operation-maintenance.png" />

        <Container className="relative z-10 max-w-[94rem]">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-6">
            ENGINEERING CAPABILITIES
          </p>

          <h1 className="font-display text-[min(10vw,clamp(2.5rem,2rem+5vw,6rem))] font-extrabold uppercase tracking-tight text-white leading-[0.94] max-w-5xl">
            SOLAR O&amp;M, <br />
            ASSET MANAGEMENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 via-solar-500 to-amber-200">
              &amp; INDUSTRIAL EXECUTION.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-navy-200 font-normal leading-relaxed">
            Seven unified engineering disciplines delivered across industrial and commercial facilities throughout Central India.
          </p>
        </Container>
      </section>

      {/* 02 — Interactive Massive Editorial Service Rows */}
      <section className="relative py-28 sm:py-36 bg-brand-surface text-white border-y border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
        />

        <Container className="relative max-w-[94rem]">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Interactive Editorial Rows */}
            <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
              {serviceGroups.map((svc, idx) => {
                const isActive = hoveredIdx === idx;
                return (
                  <div
                    key={svc.slug}
                    id={svc.slug}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    className={`py-8 sm:py-10 transition-all duration-300 ${
                      isActive ? "pl-4 bg-white/[0.04]" : "hover:bg-white/[0.01]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs text-solar-400 font-semibold tracking-widest">
                            {svc.index}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-navy-400">
                            {svc.category}
                          </span>
                        </div>

                        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">
                          {svc.title}
                        </h2>

                        <p className="text-base text-navy-300 leading-relaxed max-w-xl">
                          {svc.summary}
                        </p>

                        {/* Capabilities chips */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {svc.capabilities.slice(0, 5).map((cap) => (
                            <span
                              key={cap}
                              className="text-xs font-mono uppercase px-3 py-1 rounded-full border border-white/10 bg-white/5 text-navy-200"
                            >
                              {cap}
                            </span>
                          ))}
                          {svc.capabilities.length > 5 && (
                            <span className="text-xs font-mono text-solar-400 px-2 py-1">
                              +{svc.capabilities.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center shrink-0">
                        <ArrowRight className="h-4 w-4 text-solar-400" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Sticky Image & Details View */}
            <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-6">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-white/15 bg-brand-black shadow-2xl">
                <Image
                  src={serviceGroups[hoveredIdx]?.image.src || serviceGroups[0].image.src}
                  alt={serviceGroups[hoveredIdx]?.image.alt || "Service"}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-solar-400">
                    DISCIPLINE // {serviceGroups[hoveredIdx]?.index}
                  </span>
                  <p className="font-display text-2xl font-bold uppercase text-white tracking-tight mt-1">
                    {serviceGroups[hoveredIdx]?.title}
                  </p>
                </div>
              </div>

              {/* Service Full Scope List */}
              <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
                <h3 className="font-mono text-xs uppercase tracking-widest text-solar-400 mb-4 font-semibold">
                  DELIVERABLES INCLUDED
                </h3>
                <ul className="space-y-2.5">
                  {serviceGroups[hoveredIdx]?.capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-200">
                      <Check className="h-4 w-4 text-solar-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <Button href="/contact" size="md">
                    <span>Enquire This Scope</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                  {serviceGroups[hoveredIdx]?.slug === "solar-om" && (
                    <Link href="/solar-om" className="inline-flex min-h-11 items-center text-xs font-mono uppercase text-solar-400 underline underline-offset-4">
                      Dedicated O&amp;M Page →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 — Closing CTA */}
      <section className="relative py-28 bg-brand-black text-center border-t border-white/10">
        <Container className="max-w-4xl space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold">
            EXECUTION AGILITY
          </p>
          <h2 className="font-display text-[min(10vw,clamp(2.5rem,2rem+4vw,5rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
            NEED A SCOPE EXECUTED ON YOUR FACILITY?
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Send us the site location, scope requirements, and schedule. Our team will verify technical requirements and confirm our manpower deployment plan.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              <span>Send Project Scope</span>
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
