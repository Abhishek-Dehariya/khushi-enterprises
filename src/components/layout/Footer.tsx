import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, MapPin, Phone } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";
import { mailtoHref, telHref } from "@/lib/utils";
import { Logo } from "./Logo";

export function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="relative bg-brand-black text-navy-200 border-t border-white/10 overflow-hidden">
      {/* Massive Editorial CTA Header */}
      <div className="relative border-b border-white/10 py-20 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full w-[600px] h-[300px] bg-solar-500/10 blur-[140px] pointer-events-none rounded-full"
        />

        <Container className="relative text-center max-w-5xl">
          <p className="text-eyebrow text-solar-500 uppercase tracking-widest">
            SOLAR O&M • ASSET MANAGEMENT
          </p>

          <h2 className="mt-8 font-display text-[min(10vw,clamp(2.5rem,2rem+5vw,6rem))] leading-[0.95] font-extrabold tracking-tight text-white uppercase">
            LET&apos;S KEEP <br />
            YOUR SOLAR ASSET <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 via-solar-500 to-amber-200">
              PERFORMING.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
            From daily technical operations to multi-year lifecycle asset management. We keep solar infrastructure generating reliably.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              <span>Discuss Your Solar Asset</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={telHref(contact.phoneDial)}
              variant="outline"
              size="lg"
              plainAnchor
              className="w-full sm:w-auto"
            >
              <Phone className="h-4 w-4 text-solar-500" />
              <span>{contact.phoneDisplay}</span>
            </Button>
          </div>
        </Container>
      </div>

      {/* Structured Minimal Links Grid */}
      <Container className="py-16 lg:py-24 max-w-[90rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-6">
            <Logo tone="dark" />
            <p className="text-sm text-navy-300 max-w-md leading-relaxed">
              Khushi Enterprises is an engineering firm focused on Solar O&M & Asset Management, supported by installation, electrical, fabrication and civil capabilities across Central India.
            </p>
            <div className="pt-2 text-xs text-navy-400 space-y-1">
              <p>Proprietor: <span className="text-white font-medium">{siteConfig.proprietor}</span></p>
              <p>Key Contact: <span className="text-white font-medium">Abhishek Dehariya (10+ Yrs Solar O&M & Asset Mgmt)</span></p>
            </div>
          </div>

          {/* Core Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-eyebrow text-white/50 uppercase">Capabilities</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/solar-om" className="hover:text-solar-400 transition-colors">Solar O&M</Link></li>
              <li><Link href="/solar-om#asset-management" className="hover:text-solar-400 transition-colors">Asset Management</Link></li>
              <li><Link href="/solar-services" className="hover:text-solar-400 transition-colors">Solar Installation</Link></li>
              <li><Link href="/services#electrical-works" className="hover:text-solar-400 transition-colors">Electrical</Link></li>
              <li><Link href="/services#fabrication-structural-works" className="hover:text-solar-400 transition-colors">Fabrication</Link></li>
              <li><Link href="/services#civil-works" className="hover:text-solar-400 transition-colors">Civil & Industrial</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-eyebrow text-white/50 uppercase">Company</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-solar-400 transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-solar-400 transition-colors">Projects Portfolio</Link></li>
              <li><Link href="/quality-safety" className="hover:text-solar-400 transition-colors">Quality & Safety</Link></li>
              <li><Link href="/clients" className="hover:text-solar-400 transition-colors">Clients & Partners</Link></li>
              <li><Link href="/gallery" className="hover:text-solar-400 transition-colors">Site Imagery</Link></li>
              <li><Link href="/contact" className="hover:text-solar-400 transition-colors">Direct Contact</Link></li>
            </ul>
          </div>

          {/* Direct Address */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-eyebrow text-white/50 uppercase">Headquarters</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-solar-500 mt-1" />
                <span className="leading-relaxed text-navy-300">
                  {contact.addressLine1}, <br />
                  {contact.addressLine2}
                </span>
              </li>
              <li>
                <a href={telHref(contact.phoneDial)} className="flex items-center gap-3 text-navy-300 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 shrink-0 text-solar-500" />
                  <span>{contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={mailtoHref(contact.email)} className="flex items-center gap-3 text-navy-300 hover:text-white transition-colors break-all">
                  <Mail className="h-4 w-4 shrink-0 text-solar-500" />
                  <span>{contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom edge */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-400">
          <p>© {new Date().getFullYear()} Khushi Enterprises. All rights reserved.</p>
          <p>Indore • Dhar • Pithampur • Dewas • Madhya Pradesh</p>
        </div>
      </Container>
    </footer>
  );
}
