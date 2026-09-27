"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/data/site";
import { cn, mailtoHref, telHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Close, Mail, Menu, Phone } from "@/components/ui/Icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label="Open menu"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10 xl:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-brand-black/98 backdrop-blur-3xl text-white animate-rise">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <div>
              <span className="font-display text-lg font-bold tracking-tight uppercase">
                {siteConfig.name}
              </span>
              <p className="text-[10px] uppercase tracking-widest text-solar-400">
                Solar O&M • Asset Management
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav>
              <ul className="space-y-4">
                {navItems.map((item, idx) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex items-center justify-between py-2 text-2xl font-display font-semibold tracking-tight transition-all",
                          isActive ? "text-solar-400 pl-2" : "text-navy-300 hover:text-white"
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-xs text-white/30 font-mono">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          {item.label}
                        </span>
                        <ArrowRight className="h-5 w-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Footer info in drawer */}
          <div className="p-6 border-t border-white/10 space-y-4 bg-white/[0.02]">
            <Button
              href="/contact"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Discuss Your Solar Asset
              <ArrowRight className="h-4 w-4" />
            </Button>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs text-navy-300">
              <a
                href={telHref(siteConfig.contact.phoneDial)}
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-solar-500" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={mailtoHref(siteConfig.contact.email)}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-solar-500" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
