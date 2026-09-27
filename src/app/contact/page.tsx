import type { Metadata } from "next";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/data/site";
import { omExpert } from "@/data/om";
import { createMetadata } from "@/lib/metadata";
import { directionsHref, mailtoHref, mapEmbedHref, telHref } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Contact | Khushi Enterprises",
  description:
    "Direct contact for Solar O&M, asset management, solar installation and engineering scopes with Khushi Enterprises in Dhar and Indore, Madhya Pradesh.",
  path: "/contact",
  keywords: [
    "solar contractor contact Indore",
    "electrical fabrication contractor Indore",
    "solar O&M contact Madhya Pradesh",
  ],
});

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <div className="flex flex-col bg-brand-black text-white">
      <PageHeader
        eyebrow="COMMUNICATION"
        title="DIRECT TECHNICAL CONTACT."
        description="Discuss your solar plant O&M, rooftop installation, or engineering scope directly with our team."
        backgroundImage="/images/hero/hero-solar-field.png"
      />

      <section className="relative py-24 sm:py-32 bg-brand-surface border-y border-white/10">
        <Container className="max-w-[94rem]">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Section */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl border border-white/10 bg-brand-black/60 backdrop-blur-xl">
              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-2">
                  PROJECT ENQUIRY
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                  SEND REQUIREMENT
                </h2>
              </div>
              <InquiryForm />
            </div>

            {/* Direct Details Side */}
            <div className="lg:col-span-5 space-y-8">
              {/* Primary Leadership Details */}
              <div className="p-8 rounded-3xl border border-white/10 bg-brand-black/60 backdrop-blur-xl space-y-6">
                <div>
                  <p className="font-mono text-xs text-solar-400 uppercase tracking-widest">
                    SOLAR O&amp;M &amp; ASSET MANAGEMENT LEAD
                  </p>
                  <p className="font-display text-2xl font-bold uppercase text-white mt-1">
                    {omExpert.name}
                  </p>
                  <p className="text-xs text-navy-300 font-mono mt-0.5">
                    {omExpert.experience} • {omExpert.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <a
                    href={telHref(omExpert.phoneDial)}
                    className="flex min-h-11 items-center gap-3 text-sm font-semibold text-white hover:text-solar-400 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-solar-500" />
                    <span>{omExpert.phoneDisplay}</span>
                  </a>
                  <a
                    href={mailtoHref(omExpert.email)}
                    className="flex min-h-11 items-center gap-3 text-sm text-navy-200 hover:text-solar-400 transition-colors break-all"
                  >
                    <Mail className="h-4 w-4 text-solar-500" />
                    <span>{omExpert.email}</span>
                  </a>
                </div>
              </div>

              {/* Office & Proprietor */}
              <div className="p-8 rounded-3xl border border-white/10 bg-brand-black/60 backdrop-blur-xl space-y-6">
                <div>
                  <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
                    REGISTERED PROPRIETOR
                  </p>
                  <p className="font-display text-xl font-bold uppercase text-white mt-1">
                    {siteConfig.proprietor}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-navy-200">
                    <MapPin className="h-4 w-4 text-solar-500 shrink-0 mt-1" />
                    <span>
                      {contact.addressLine1}, <br />
                      {contact.addressLine2}
                    </span>
                  </div>
                  <a
                    href={telHref(contact.phoneDial)}
                    className="flex min-h-11 items-center gap-3 text-sm text-white hover:text-solar-400 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-solar-500" />
                    <span>Office: {contact.phoneDisplay}</span>
                  </a>
                </div>

                <div className="pt-2">
                  <Button
                    href={directionsHref(contact.addressFull)}
                    variant="outline"
                    size="md"
                    className="w-full"
                  >
                    <span>Get Directions on Google Maps</span>
                  </Button>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-brand-black">
                <iframe
                  title="Office Location Map"
                  src={mapEmbedHref(contact.addressFull)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-60 w-full border-0"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
