import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { DesktopNav } from "./DesktopNav";
import { HeaderShell } from "./HeaderShell";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";

export function Header() {
  return (
    <HeaderShell>
      <Container className="flex items-center justify-between gap-4 max-w-[90rem] xl:gap-6">
        <Logo tone="dark" className="shrink-0" />

        {/* The nine-item pill nav needs ~1280px of room beside the logo and the
            CTA, so below `xl` the drawer in <MobileNav /> carries the navigation
            instead of compressing it. */}
        <div className="hidden xl:flex items-center">
          <DesktopNav />
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <div className="hidden sm:block">
            <Button href="/contact" size="md" className="whitespace-nowrap">
              <span>Discuss Your Solar Asset</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </div>
          <MobileNav />
        </div>
      </Container>
    </HeaderShell>
  );
}
