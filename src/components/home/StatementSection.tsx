import { Container } from "@/components/ui/Container";

export function StatementSection() {
  return (
    <section id="statement" className="relative py-28 sm:py-36 lg:py-48 bg-white text-ink-900 overflow-hidden">
      {/* Light Blueprint Grid */}
      <div
        aria-hidden="true"
        className="blueprint-grid-light absolute inset-0 opacity-40 pointer-events-none"
      />

      <Container className="relative max-w-6xl">
        <div className="space-y-12 lg:space-y-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-600 font-semibold">
            02 • PHILOSOPHY
          </p>

          <h2 className="font-display text-[min(9.5vw,clamp(2.4rem,2rem+4vw,5.5rem))] font-extrabold uppercase leading-[0.98] tracking-tight text-ink-900">
            &ldquo;Solar doesn&apos;t stop <br className="hidden sm:inline" />
            at commissioning.&rdquo;
          </h2>

          <div className="pt-6 sm:pt-8 border-t border-ink-200 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <p className="font-display text-[clamp(1.5rem,1.2rem+2vw,2.75rem)] font-bold text-ink-700 leading-[1.1] tracking-tight uppercase">
                It needs disciplined operations, continuous monitoring and field-level execution.
              </p>
            </div>
            <div className="lg:col-span-4 lg:border-l lg:border-ink-200 lg:pl-8">
              <p className="text-base sm:text-lg text-ink-500 leading-relaxed">
                Khushi Enterprises provides the technical oversight, preventive inspection cycles, and immediate on-site response that turn solar installations into high-yield, durable operating assets.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
