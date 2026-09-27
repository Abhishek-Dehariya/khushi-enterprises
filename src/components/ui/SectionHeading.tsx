import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "dark",
  align = "left",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <p
      className={cn(
        "flex items-center gap-3 text-eyebrow uppercase font-mono tracking-[0.25em]",
        align === "center" && "justify-center",
        isDark ? "text-solar-400" : "text-solar-600",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          isDark ? "bg-solar-500 shadow-[0_0_8px_rgba(255,107,0,0.8)]" : "bg-solar-600"
        )}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  size = "md",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  size?: "md" | "lg" | "hero";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone} align={align} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}

      <Tag
        className={cn(
          "font-display font-bold tracking-tight uppercase leading-[0.98]",
          size === "hero" && "text-hero",
          size === "lg" && "text-display",
          size === "md" && "text-h1",
          isDark ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </Tag>

      {description && (
        <div
          className={cn(
            "mt-6 text-lede leading-relaxed font-normal",
            isDark ? "text-navy-300" : "text-ink-700"
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
}
