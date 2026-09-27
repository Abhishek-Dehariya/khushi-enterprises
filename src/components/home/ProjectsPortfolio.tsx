import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { featuredProjects } from "@/data/projects";

export function ProjectsPortfolio() {
  const [p1, p2, p3] = featuredProjects.slice(0, 3);

  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-brand-surface text-white border-t border-white/10 overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
      />

      <Container className="relative max-w-[94rem]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 border-b border-white/10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-4">
              10 • ARCHITECTURAL PORTFOLIO
            </p>
            <h2 className="font-display text-[min(9vw,clamp(2.2rem,1.8rem+3.5vw,4.75rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
              PROJECT EXECUTION
            </h2>
          </div>
          <Button href="/projects" variant="outline" size="md">
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Alternating Architectural Layout: Left Image / Right Text */}
        {p1 && (
          <div className="py-12 border-b border-white/10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-16/10 rounded-3xl overflow-hidden border border-white/15 bg-brand-black shadow-2xl group">
                  <Image
                    src={p1.image.src}
                    alt={p1.image.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand-black/70 border border-white/20 backdrop-blur-md">
                    {p1.categories[0] || "SOLAR O&M"}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold">
                  PROJECT 01
                </span>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
                  {p1.client}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase text-navy-300">
                  {p1.capacity && <span>CAPACITY: {p1.capacity}</span>}
                  {p1.location && <span>• LOCATION: {p1.location}</span>}
                </div>
                <p className="text-base sm:text-lg text-navy-200 leading-relaxed font-normal">
                  Scope executed on site: {p1.scope.join(" • ")}. Continuous adherence to quality and scheduled operational deliverables.
                </p>
                <div className="pt-2">
                  <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-solar-400 hover:text-solar-300 underline underline-offset-8">
                    <span>Inspect scope record</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Alternating Architectural Layout: Left Text / Right Image */}
        {p2 && (
          <div className="py-16 border-b border-white/10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-5 lg:order-1 space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold">
                  PROJECT 02
                </span>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
                  {p2.client}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase text-navy-300">
                  {p2.capacity && <span>CAPACITY: {p2.capacity}</span>}
                  {p2.location && <span>• LOCATION: {p2.location}</span>}
                </div>
                <p className="text-base sm:text-lg text-navy-200 leading-relaxed font-normal">
                  Scope executed on site: {p2.scope.join(" • ")}. End-to-end electrical, structural, and commissioning compliance.
                </p>
                <div className="pt-2">
                  <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-solar-400 hover:text-solar-300 underline underline-offset-8">
                    <span>Inspect scope record</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 lg:order-2">
                <div className="relative aspect-16/10 rounded-3xl overflow-hidden border border-white/15 bg-brand-black shadow-2xl group">
                  <Image
                    src={p2.image.src}
                    alt={p2.image.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand-black/70 border border-white/20 backdrop-blur-md">
                    {p2.categories[0] || "SOLAR I&C"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Width Cinematic Project Moment */}
        {p3 && (
          <div className="pt-16">
            <div className="relative min-h-[480px] sm:min-h-[560px] rounded-3xl overflow-hidden border border-white/15 bg-brand-black shadow-2xl group p-8 sm:p-12 flex flex-col justify-between">
              <Image
                src={p3.image.src}
                alt={p3.image.alt}
                fill
                sizes="100vw"
                className="object-cover contrast-110 group-hover:scale-103 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/30" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold px-3 py-1.5 rounded-full bg-brand-black/80 border border-white/20 backdrop-blur-md">
                  PROJECT 03 // FEATURED
                </span>
                <span className="font-mono text-xs text-white/50 uppercase">
                  {p3.location || "CENTRAL INDIA"}
                </span>
              </div>

              <div className="relative z-10 max-w-3xl space-y-4">
                <h3 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
                  {p3.client}
                </h3>
                <p className="text-base sm:text-lg text-navy-200">
                  {p3.type || p3.scope.join(" • ")}
                </p>
                <div className="pt-2">
                  <Button href="/projects" size="md">
                    <span>Explore All 12 Project Records</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
