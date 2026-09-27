import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/data/site";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 -z-10 opacity-60"
      />
      <Container className="py-20 lg:py-28">
        <p className="flex items-center gap-3 text-eyebrow text-solar-400 uppercase">
          <span aria-hidden="true" className="h-px w-8 bg-solar-400/70" />
          Error 404
        </p>

        <h1 className="mt-5 max-w-2xl text-h1 text-white">
          This page could not be found
        </h1>

        <p className="mt-5 max-w-2xl text-lede text-navy-200">
          The page you are looking for may have been moved or renamed. Use the
          links below to continue, or contact our team directly if you were
          looking for a specific scope.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
        </div>

        <nav aria-label="Site pages" className="mt-12 border-t border-white/12 pt-8">
          <h2 className="text-eyebrow text-navy-300 uppercase">
            All Pages
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-detail">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-navy-100 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
