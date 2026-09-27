import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "link";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-3 font-semibold tracking-[-0.01em] " +
  "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden";

const variants: Record<Variant, string> = {
  /* High contrast solar primary */
  primary:
    "bg-solar-500 text-brand-black hover:bg-solar-400 hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] rounded-full",
  /* Elegant light / dark secondary */
  secondary:
    "bg-white text-brand-black hover:bg-ink-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] rounded-full",
  /* Clean glass outline */
  outline:
    "border border-white/20 text-white hover:border-white/60 hover:bg-white/5 rounded-full backdrop-blur-md",
  /* Minimal dark ghost */
  ghost:
    "border border-white/10 text-navy-200 hover:text-white hover:border-solar-500/40 hover:bg-white/5 rounded-full",
  /* Subtle inline */
  link: "text-solar-400 hover:text-solar-300 underline-offset-8 hover:underline px-0 rounded-none",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  plainAnchor?: boolean;
  type?: never;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  disabled?: never;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export type ButtonElementProps = LinkProps | ButtonProps;

export function Button(props: ButtonElementProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && typeof props.href === "string") {
    const { href, plainAnchor } = props;
    const isInternal = href.startsWith("/") && !plainAnchor;
    const onClick = props.onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined;

    if (isInternal) {
      return (
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      );
    }

    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonProps;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
