"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";

const secondaryServices = [
  {
    num: "01",
    title: "SOLAR INSTALLATION",
    subtitle: "Rooftop ON-GRID, OFF-GRID & Ground Array Commissioning",
    desc: "Complete structure mounting, module interconnection, inverter cabling, and testing.",
    image: "/images/services/solar-installation-commissioning.png",
    href: "/solar-services",
  },
  {
    num: "02",
    title: "ELECTRICAL ENGINEERING",
    subtitle: "Internal & External Electrification for Industrial Plants",
    desc: "HT/LT cabling, panel termination, earth pit resistance testing, and maintenance.",
    image: "/images/services/electrical-works.png",
    href: "/services#electrical-works",
  },
  {
    num: "03",
    title: "FABRICATION & STRUCTURAL",
    subtitle: "Heavy Steel Shed Structures, Cable Trays & SS Railing",
    desc: "Precision industrial welding, shed trusses, rooftop solar frames, and plant structural work.",
    image: "/images/services/fabrication-structural-works.png",
    href: "/services#fabrication-structural-works",
  },
  {
    num: "04",
    title: "CIVIL INFRASTRUCTURE",
    subtitle: "Piling, Structure Foundations & Earth Pit Chambers",
    desc: "Civil execution tailored specifically for solar installations and industrial machinery bases.",
    image: "/images/services/civil-works.png",
    href: "/services#civil-works",
  },
  {
    num: "05",
    title: "INDUSTRIAL & PIPELINE",
    subtitle: "Process Pipeline, Fire Line & Manpower Deployments",
    desc: "Site-grade pipeline installation, utility lines, and certified technical support.",
    image: "/images/services/pipeline-industrial-services.png",
    href: "/services#pipeline-industrial-services",
  },
];

export function OtherServicesSecondary() {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  return (
    <section className="relative py-28 sm:py-36 bg-brand-black text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
      />

      <Container className="relative max-w-[94rem]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20 pb-8 border-b border-white/10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-4">
              09 • SUPPORTING CAPABILITIES
            </p>
            <h2 className="font-display text-[min(9vw,clamp(2.2rem,1.8rem+3.5vw,4.75rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
              ENGINEERING EXECUTION
            </h2>
          </div>
          <p className="text-navy-300 text-base sm:text-lg max-w-md leading-relaxed">
            While Solar O&amp;M leads our business, our in-house civil, fabrication, and electrical capabilities give us unmatched execution agility.
          </p>
        </div>

        {/* Split Screen Interactive Presentation */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Service Links List */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {secondaryServices.map((svc, idx) => {
              const isActive = hoveredIdx === idx;
              return (
                <Link
                  key={svc.num}
                  href={svc.href}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`group block py-8 transition-all duration-300 ${
                    isActive ? "pl-4 bg-white/[0.03]" : "hover:bg-white/[0.01]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-solar-400 font-semibold tracking-widest">
                          {svc.num}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-solar-400 transition-colors">
                          {svc.title}
                        </h3>
                      </div>
                      <p className="text-xs font-mono uppercase tracking-wider text-navy-300">
                        {svc.subtitle}
                      </p>
                      <p className="text-sm text-navy-400 max-w-lg pt-1">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center shrink-0 group-hover:border-solar-500 group-hover:bg-solar-500 group-hover:text-brand-black transition-all">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Sticky Visual Preview for the selected service */}
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-white/15 bg-brand-surface shadow-2xl">
              <Image
                src={secondaryServices[hoveredIdx]?.image || secondaryServices[0].image}
                alt={secondaryServices[hoveredIdx]?.title || "Engineering Services"}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs uppercase tracking-widest text-solar-400">
                  EXECUTION SCOPE // {secondaryServices[hoveredIdx]?.num}
                </span>
                <p className="font-display text-xl font-bold uppercase tracking-tight text-white mt-1">
                  {secondaryServices[hoveredIdx]?.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
