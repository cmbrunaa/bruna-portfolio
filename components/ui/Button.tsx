import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
  download?: boolean;
  target?: "_blank" | "_self";
};

export function Button({
  children,
  variant = "primary",
  className,
  href,
  download = false,
  target,
}: ButtonProps) {
  const styles = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 border-2 px-6 py-3 font-semibold transition-all duration-200",
    "hover:-translate-y-1 active:translate-y-0",

    variant === "primary"
      ? "border-[#7C3AED] bg-[#7C3AED] text-white shadow-[4px_4px_0_#6EEB83] hover:shadow-[6px_6px_0_#6EEB83]"
      : "border-[#111111] bg-white text-[#111111] shadow-[4px_4px_0_#7C3AED] hover:border-[#7C3AED] hover:bg-[#ECFFF0]",

    className
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={styles}
      >
        {children}
      </a>
    );
  }

  return <button className={styles}>{children}</button>;
}