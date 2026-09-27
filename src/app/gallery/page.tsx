import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { galleryItems } from "@/data/gallery";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Site Gallery | Documented Work",
  description:
    "Actual on-site photographs from Khushi Enterprises installations — solar arrays, cable tray works, structural fabrications, skylight mesh and pipeline services.",
  path: "/gallery",
  keywords: [
    "solar project photographs",
    "pipeline work gallery",
    "cable tray work photos",
    "industrial site execution gallery",
  ],
});

export default function GalleryPage() {
  return (
    <div className="flex flex-col bg-brand-black text-white">
      <PageHeader
        eyebrow="FIELD DOCUMENTATION"
        title="SITE IMAGERY &amp; EVIDENCE."
        description="Authentic project photographs from solar, pipeline, fabrication and structural scopes executed across Central India."
        backgroundImage="/images/gallery/shracom-site-pipeline-work.png"
      />

      <section className="relative py-24 sm:py-32 bg-brand-surface border-y border-white/10">
        <Container className="max-w-[94rem]">
          <div className="mb-14 pb-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-2">
                VERIFIED IMAGERY
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                FIELD WORK AS EXECUTED
              </h2>
            </div>
            <p className="text-xs font-mono text-navy-400 uppercase">
              SELECT ANY IMAGE TO ENLARGE
            </p>
          </div>

          <GalleryGrid items={galleryItems} />
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-brand-black text-center border-t border-white/10">
        <Container className="max-w-4xl space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold">
            SITE DEMONSTRATION
          </p>
          <h2 className="font-display text-[min(10vw,clamp(2.5rem,2rem+4vw,5rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
            WANT TO AUDIT OUR EXECUTION STANDARDS?
          </h2>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              <span>Request Site Consultation</span>
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
