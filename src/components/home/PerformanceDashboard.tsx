import { Container } from "@/components/ui/Container";

export function PerformanceDashboard() {
  const telemetryModules = [
    {
      title: "PLANT MONITORING",
      metric: "ACTIVE LOGS",
      status: "CONTINUOUS",
      details: "String combiners, DC disconnects, invertor alarms, and telemetry check cycles.",
    },
    {
      title: "PLANT AVAILABILITY",
      metric: "SYSTEM UPTIME",
      status: "OPERATIONAL",
      details: "Preventive maintenance protocols engineered to minimise scheduled and unscheduled outages.",
    },
    {
      title: "GENERATION TRACKING",
      metric: "YIELD METRICS",
      status: "TRACKED",
      details: "Tracking daily degradation variance against solar irradiance benchmarks.",
    },
    {
      title: "MAINTENANCE CADENCE",
      metric: "FIELD CHECKS",
      status: "DISCIPLINED",
      details: "Periodic physical electrical inspections, thermal thermography, and module cleanliness.",
    },
    {
      title: "TECHNICAL REPORTING",
      metric: "CLIENT LOGS",
      status: "MONTHLY",
      details: "Transparent logs outlining fault rectifications, spares replaced, and operational findings.",
    },
    {
      title: "SAFETY & ISOLATION",
      metric: "LOTO PROTOCOLS",
      status: "ENFORCED",
      details: "Full compliance with permit-to-work systems, earth pit tests, and PPE discipline.",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-brand-surface text-white border-y border-white/10 overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"
      />

      <Container className="relative max-w-[94rem]">
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-solar-400 font-semibold mb-4">
            06 • TECHNICAL ARCHITECTURE
          </p>
          <h2 className="font-display text-[min(9.5vw,clamp(2.4rem,2rem+4vw,5.5rem))] font-extrabold uppercase leading-[0.96] tracking-tight text-white">
            OPERATIONS <br />
            BUILT AROUND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 via-solar-500 to-amber-300">
              PERFORMANCE.
            </span>
          </h2>
          <p className="mt-6 text-navy-200 text-lg sm:text-xl leading-relaxed max-w-2xl">
            We structure O&amp;M around rigorous operational parameters. Real field protocols instead of superficial check-boxes.
          </p>
        </div>

        {/* Dashboard Grid - Technical Architecture Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {telemetryModules.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl border border-white/10 bg-brand-black/60 backdrop-blur-xl relative group transition-all duration-300 hover:border-solar-500/40 hover:bg-brand-black"
            >
              {/* Corner technical crosshairs */}
              <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20" />
              <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20" />
              <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20" />
              <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20" />

              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-mono text-xs text-white/40 tracking-wider">
                  MOD // 0{idx + 1}
                </span>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-solar-400 tracking-wider uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-solar-500 shadow-[0_0_6px_rgba(255,107,0,0.8)]" />
                  {item.status}
                </span>
              </div>

              <div className="pt-6 space-y-3">
                <p className="font-mono text-xs text-solar-400 uppercase tracking-widest">
                  {item.metric}
                </p>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white group-hover:text-solar-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed pt-2">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Data Integrity rule */}
        <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-navy-400 uppercase tracking-wider">
            SYSTEM NOTE: PARAMETERS ARE SITE-SPECIFIC TO EACH SOLAR CAPACITY, ROOFTOP PROFILE AND GRID INTERCONNECTION.
          </p>
          <span className="font-mono text-xs text-solar-400 font-semibold uppercase shrink-0">
            CONFIRMED OPERATIONAL DISCIPLINE
          </span>
        </div>
      </Container>
    </section>
  );
}
