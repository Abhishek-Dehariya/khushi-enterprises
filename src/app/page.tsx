import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StatementSection } from "@/components/home/StatementSection";
import { OmVisualStory } from "@/components/home/OmVisualStory";
import { AssetManagementSticky } from "@/components/home/AssetManagementSticky";
import { OmServicesEditorial } from "@/components/home/OmServicesEditorial";
import { PerformanceDashboard } from "@/components/home/PerformanceDashboard";
import { AbhishekExpertise } from "@/components/home/AbhishekExpertise";
import { AboutEditorial } from "@/components/home/AboutEditorial";
import { OtherServicesSecondary } from "@/components/home/OtherServicesSecondary";
import { ProjectsPortfolio } from "@/components/home/ProjectsPortfolio";
import { ClientsPreview } from "@/components/home/ClientsPreview";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Khushi Enterprises | Solar O&M & Asset Management",
  description:
    "Solar O&M and asset management for utility, industrial and commercial plants — plant monitoring, preventive & corrective maintenance, breakdown response and performance reporting. Backed by 10+ years expertise.",
  path: "/",
  keywords: [
    "solar O&M company Madhya Pradesh",
    "solar asset management",
    "solar plant maintenance",
    "solar O&M Indore",
    "solar plant monitoring",
    "preventive maintenance solar plant",
    "solar installation Madhya Pradesh",
    "industrial electrical and fabrication contractor",
  ],
});

export default function HomePage() {
  return (
    <div className="flex flex-col bg-brand-black text-white">
      {/* 01 — Cinematic Hero */}
      <Hero />

      {/* 02 — Statement Section (Huge Typography Minimalist Contrast) */}
      <StatementSection />

      {/* 03 — O&M Visual Story (Full-width edge-to-edge imagery) */}
      <OmVisualStory />

      {/* 04 — Asset Management Sticky Interactive Section */}
      <AssetManagementSticky />

      {/* 05 — O&M Services Editorial (No cards, hover-triggered visual reveal) */}
      <OmServicesEditorial />

      {/* 06 — Dark Technical Performance Architecture */}
      <PerformanceDashboard />

      {/* 07 — Abhishek Dehariya Editorial Expertise Profile */}
      <AbhishekExpertise />

      {/* 08 — Engineered for the Field (Editorial About) */}
      <AboutEditorial />

      {/* 09 — Secondary Services Interactive Row Presentation */}
      <OtherServicesSecondary />

      {/* 10 — Projects Architecture Portfolio */}
      <ProjectsPortfolio />

      {/* 11 — Clients & Association Grid */}
      <ClientsPreview />
    </div>
  );
}
