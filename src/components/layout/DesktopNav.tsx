"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
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
                    ? "text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                    : "text-navy-300 hover:text-white hover:bg-white/5"
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
