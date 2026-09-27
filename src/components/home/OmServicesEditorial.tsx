"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";

const omServiceList = [
  {
    num: "01",
    title: "PLANT MONITORING",
    desc: "SCADA & inverter string parameter oversight to identify generation drops promptly.",
    image: "/images/om/plant-monitoring.png",
  },
  {
    num: "02",
    title: "PREVENTIVE MAINTENANCE",
    desc: "Scheduled electrical, mechanical, and structural checks to prevent unexpected outages.",
    image: "/images/om/preventive-maintenance.png",
  },
  {
    num: "03",
    title: "CORRECTIVE MAINTENANCE",
    desc: "Rapid response to equipment anomalies, faulty isolators, and cabling issues on site.",
    image: "/images/om/om-field-inspection.png",
  },
  {
    num: "04",
    title: "BREAKDOWN MANAGEMENT",
    desc: "Field-level troubleshooting protocols to safely restore generation without prolonged stoppage.",
    image: "/images/om/site-operations.png",
  },
  {
    num: "05",
    title: "PERFORMANCE MONITORING",
    desc: "Evaluating PR, availability, irradiation correlation, and module degradation indicators.",
    image: "/images/om/asset-management.png",
  },
  {
    num: "06",
    title: "SITE OPERATIONS",
    desc: "Full on-ground manpower supervision, area safety, vegetation management, and housekeeping.",
    image: "/images/services/solar-operation-maintenance.png",
  },
  {
    num: "07",
    title: "TECHNICAL REPORTING",
    desc: "Clear periodic logs covering uptime, generation, corrective work, and predictive advice.",
    image: "/images/om/site-operations.png",
  },
  {
    num: "08",
    title: "ASSET MANAGEMENT",
    desc: "Long-term equipment health records, warranty follow-up, and vendor coordination.",
    image: "/images/om/asset-management.png",
  },
];

export function OmServicesEditorial() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative py-28 sm:py-36 bg-brand-black text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
      />

      <Container className="relative max-w-[94rem]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24 pb-8 border-b border-white/10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-4">
              05 • CAPABILITIES
            </p>
            <h2 className="font-display text-[min(9vw,clamp(2.2rem,1.8rem+3.5vw,4.75rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
              O&amp;M SCOPE &amp; SERVICES
            </h2>
          </div>
          <p className="text-navy-300 text-base sm:text-lg max-w-md leading-relaxed">
            Every scope delivered with our 20-man technical field force across industrial and commercial solar installations.
          </p>
        </div>

        {/* Editorial Rows with Hover Image Reveal */}
        <div className="relative">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {omServiceList.map((svc, idx) => {
              return (
                <div
                  key={svc.num}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group relative py-8 sm:py-10 transition-all duration-300 ease-out cursor-pointer hover:bg-white/[0.02] hover:px-4"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Index + Title */}
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="font-mono text-xs sm:text-sm text-solar-400 tracking-widest font-semibold">
                        {svc.num}
                      </span>
                      <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-solar-400">
                        {svc.title}
                      </h3>
                    </div>

                    {/* Summary & Arrow */}
                    <div className="flex items-center justify-between lg:justify-end gap-8 lg:max-w-xl">
                      <p className="text-sm sm:text-base text-navy-300 leading-relaxed font-normal">
                        {svc.desc}
                      </p>
                      <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-solar-500 group-hover:bg-solar-500 group-hover:text-brand-black">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Hover Visual Preview (desktop editorial treatment) */}
          {hoveredIdx !== null && (
            <div
              className="hidden lg:block fixed pointer-events-none z-40 right-24 bottom-24 w-[380px] h-[240px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-white/20 transition-all duration-500 ease-out"
            >
              <Image
                src={omServiceList[hoveredIdx].image}
                alt={omServiceList[hoveredIdx].title}
                fill
                sizes="380px"
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-white/80">
                {`${omServiceList[hoveredIdx].title} // LIVE EXECUTION`}
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
          <p className="text-xs font-mono text-navy-400 uppercase tracking-widest">
            ALL SCOPES EXECUTED IN-HOUSE WITH STRICT ELECTRICAL SAFETY &amp; WORK PERMITS
          </p>
          <Link
            href="/solar-om"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-solar-400 hover:text-solar-300 underline underline-offset-8"
          >
            <span>Read full ten-area scope document</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
