import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  backgroundImage = "/images/hero/hero-solar-field.png",
  breadcrumbLabel,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  breadcrumbLabel?: string;
}) {
  return (
    <header className="relative isolate min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-end overflow-hidden bg-brand-black text-white pt-32 pb-16 lg:pb-24">
      {/* Cinematic Full Background Image */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-60 contrast-110 scale-[1.02] transition-transform duration-1000"
        />
        {/* Multilayer gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-brand-black/40" />
        <div className="absolute inset-0 blueprint-grid opacity-30" />
      </div>

      <Container className="relative z-10 max-w-[90rem]">
        {/* Minimal Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-mono text-navy-300 uppercase tracking-widest">
            <li>
              <Link href="/" className="hover:text-solar-400 transition-colors">
                Index
              </Link>
            </li>
            <li className="text-white/30">/</li>
            <li className="text-white" aria-current="page">
              {breadcrumbLabel ?? title}
            </li>
          </ol>
        </nav>

        {eyebrow && <Eyebrow className="mb-6">{eyebrow}</Eyebrow>}

        <h1 className="font-display text-[min(10vw,clamp(2.5rem,2rem+4.5vw,5.5rem))] font-extrabold uppercase tracking-tight text-white leading-[0.95] max-w-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-navy-200 leading-relaxed font-normal">
            {description}
          </p>
        )}

        {children && <div className="mt-10">{children}</div>}
      </Container>

      {/* Subtle bottom accent hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </header>
  );
}
