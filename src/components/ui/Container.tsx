import { cn } from "@/lib/utils";

const widths = {
  default: "max-w-[84rem]",
  wide: "max-w-[94rem]",
  narrow: "max-w-4xl",
  full: "max-w-full px-0",
} as const;

export function Container({
  children,
  className,
  width = "default",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  width?: keyof typeof widths;
  as?: "div" | "section" | "header" | "footer" | "nav" | "article";
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full",
        width !== "full" && "px-6 sm:px-8 lg:px-12",
        widths[width],
        className
      )}
    >
      {children}
    </Tag>
  );
}

const tones = {
  black: "bg-brand-black text-white",
  dark: "bg-brand-surface text-navy-100",
  light: "bg-white text-ink-900",
  muted: "bg-ink-50 text-ink-900",
  navy: "bg-brand-surface text-white",
  "navy-deep": "bg-brand-black text-white",
} as const;

export function Section({
  children,
  className,
  tone = "black",
  id,
  as: Tag = "section",
  bleed = false,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof tones;
  id?: string;
  as?: "section" | "div";
  bleed?: boolean;
}) {
  return (
    <Tag id={id} className={cn("py-section relative", tones[tone], className)}>
      {bleed ? children : <Container>{children}</Container>}
    </Tag>
  );
}
