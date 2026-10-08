"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="px-3 py-1.5 rounded-full border border-white/15 bg-brand-black/55 backdrop-blur-md shadow-[0_6px_24px_-8px_rgba(0,0,0,0.6)]">
      <ul className="flex items-center gap-0.5">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative block whitespace-nowrap rounded-full px-2 py-1.5 text-[12.5px] font-medium tracking-tight transition-all duration-300 min-[1366px]:px-2.5 min-[1440px]:px-3.5 min-[1440px]:text-[13px]",
                  isActive
                    ? "text-white bg-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]"
                    : "text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
