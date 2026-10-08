import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, Phone } from "@/components/ui/Icons";
import { omExpert } from "@/data/om";
import { mailtoHref, telHref } from "@/lib/utils";

export function AbhishekExpertise() {
  return (
    <section id="expertise" className="relative py-28 sm:py-36 lg:py-44 bg-white text-ink-900 overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint-grid-light absolute inset-0 opacity-40 pointer-events-none"
      />

      <Container className="relative max-w-[94rem]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Monogram / Visual Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden border border-ink-200 bg-brand-surface text-white p-10 flex flex-col justify-between shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-solar-400">
                  TECHNICAL EXPERT
                </span>
                <span className="font-mono text-xs text-white/40">EST. 2016</span>
              </div>

              {/* Large Stylised Monogram */}
              <div className="my-auto py-12">
                <div className="font-display text-[clamp(5rem,4rem+8vw,11rem)] font-extrabold tracking-tighter text-white/90 leading-none">
                  AD
                </div>
                <div className="h-1.5 w-24 bg-solar-500 mt-4 rounded-full" />
              </div>

              <div>
                <p className="font-mono text-xs text-navy-300 uppercase tracking-widest">
                  INDORE • MADHYA PRADESH
                </p>
                <p className="font-display text-xl font-bold uppercase tracking-tight text-white mt-1">
                  Khushi Enterprises
                </p>
              </div>
            </div>
          </div>

          {/* Large Typographic Profile */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-600 font-semibold mb-4">
                07 • TECHNICAL LEADERSHIP
              </p>

              <h2 className="font-display text-[min(10vw,clamp(2.75rem,2rem+5vw,6rem))] font-extrabold uppercase leading-[0.92] tracking-tight text-ink-900">
                ABHISHEK <br />
                DEHARIYA
              </h2>

              <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-ink-200">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-solar-600">
                  {omExpert.experience}
                </span>
                <span className="h-8 w-px bg-ink-200" />
                <span className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink-800">
                  SOLAR O&amp;M &amp; ASSET MANAGEMENT
                </span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-ink-600 leading-relaxed max-w-2xl">
              Direct technical direction for Khushi Enterprises&apos; Solar O&amp;M and Asset Management capability, coordinating site execution, performance troubleshooting, and lifecycle management.
            </p>

            {/* Direct Connect Grid */}
            <div className="pt-4 grid gap-4 max-w-xl">
              <a
                href={mailtoHref(omExpert.email)}
                className="group flex items-center justify-between p-4 rounded-2xl border border-ink-200 bg-ink-50/60 hover:border-solar-500 hover:bg-white transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-black text-white flex items-center justify-center">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500 uppercase font-mono">Email</p>
                    <p className="text-sm font-semibold text-ink-900 group-hover:text-solar-600">{omExpert.email}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-ink-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="pt-2">
              <Button href={telHref(omExpert.phoneDial)} variant="outline" size="lg" plainAnchor className="border-ink-300 text-ink-900 hover:border-ink-900">
                <Phone className="h-4 w-4 text-solar-600" />
                <span>Call {omExpert.phoneDisplay}</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
