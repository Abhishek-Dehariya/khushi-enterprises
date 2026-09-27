"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { assetLifecycle } from "@/data/om";

const stageImages = [
  "/images/om/plant-monitoring.png",
  "/images/om/asset-management.png",
  "/images/om/preventive-maintenance.png",
  "/images/om/om-field-inspection.png",
  "/images/om/site-operations.png",
  "/images/services/solar-operation-maintenance.png",
];

export function AssetManagementSticky() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="asset-management" className="relative py-28 sm:py-36 bg-brand-surface text-white border-y border-white/10 overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
      />

      <Container className="relative max-w-[94rem]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: Sticky Anchor Heading + Active Stage Image Display */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-4">
                04 • ASSET MANAGEMENT LIFECYCLE
              </p>
              <h2 className="font-display text-[min(10vw,clamp(2.5rem,2rem+4vw,5rem))] font-extrabold uppercase leading-[0.94] tracking-tight text-white">
                WE MANAGE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 via-solar-500 to-amber-300">
                  THE ASSET.
                </span>
              </h2>
              <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed">
                Beyond periodic maintenance schedules. We take responsibility for how the plant behaves, generates, and preserves capital value across its full lifecycle.
              </p>
            </div>

            {/* Dynamic visual preview matching hovered/active stage */}
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden border border-white/15 bg-brand-black shadow-2xl">
              <Image
                src={stageImages[activeStage] || stageImages[0]}
                alt={assetLifecycle[activeStage]?.title || "Asset Management"}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-mono">
                <span className="text-solar-400 font-semibold uppercase tracking-widest">
                  {`STAGE ${assetLifecycle[activeStage]?.step} // ${assetLifecycle[activeStage]?.title}`}
                </span>
                <span className="text-white/40">KHUSHI ASSET MGMT</span>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/solar-om" size="md">
                <span>Explore Asset Lifecycle</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Step Sequence */}
          <div className="lg:col-span-7 space-y-4">
            {assetLifecycle.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={stage.step}
                  onMouseEnter={() => setActiveStage(idx)}
                  onClick={() => setActiveStage(idx)}
                  className={`cursor-pointer transition-all duration-400 p-8 rounded-2xl border ${
                    isActive
                      ? "bg-white/[0.06] border-solar-500/60 shadow-[0_10px_35px_rgba(255,107,0,0.1)] translate-x-2"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <span className={`font-mono text-xs uppercase px-2.5 py-1 rounded-md font-semibold ${
                          isActive ? "bg-solar-500 text-brand-black" : "bg-white/10 text-navy-300"
                        }`}>
                          {stage.step}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                          {stage.title}
                        </h3>
                      </div>
                      <p className="text-navy-200 text-base leading-relaxed pl-1">
                        {stage.description}
                      </p>
                    </div>

                    <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isActive ? "border-solar-500 text-solar-400 bg-solar-500/10" : "border-white/10 text-white/20"
                    }`}>
                      <Check className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
