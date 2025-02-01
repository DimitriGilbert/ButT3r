import Link from "next/link";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface GlowLinkProps {
  href: string;
  target?: string;
  color?: string;
  size?: string | number;
  duration?: number;
  className?: string;
  children: ReactNode;
  glowClassName?: string;
}

export function GlowLink({
  href,
  target = "_self",
  color = "rgba(168, 85, 247, 0.8)",
  size = "8px",
  duration = 0.3,
  className = "",
  glowClassName = "",
  children,
}: GlowLinkProps) {
  const sizeValue = typeof size === "number" ? `${size}px` : size;

  return (
    <motion.span
      whileHover={{
        textShadow: `0 0 ${sizeValue} ${color}, 0 0 ${parseFloat(sizeValue) * 2}px ${color}, 0 0 ${parseFloat(sizeValue) * 4}px ${color}`,
        transition: { duration },
      }}
      className={cn("inline-block", glowClassName)}
    >
      <Link href={href} target={target} className={cn("inline-block", className)}>
        {children}
      </Link>
    </motion.span>
  );
} 