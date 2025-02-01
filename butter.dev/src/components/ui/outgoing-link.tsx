import Link from "next/link";
import { cn } from "~/lib/utils";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Button } from "./button";
import { useState } from "react";

interface OutgoingLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  className?: string;
  children: React.ReactNode;
}

export function OutgoingLink({
  className,
  children,
  ...props
}: OutgoingLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link {...props} target="_blank" rel="noopener noreferrer">
      <Button
        className={cn(
          "group inline-flex items-center gap-2 font-medium",
          "rounded-lg px-8 py-8 transition-all duration-300",
          "bg-transparent hover:bg-background/10",
          "text-foreground hover:text-primary",
          "border border-border hover:border-primary/50",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        <motion.span
          className="opacity-70 group-hover:opacity-100"
          initial={{ x: 0, scale: 1 }}
          animate={isHovered ? { x: 2, y: -2, scale: 1.2 } : { x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </motion.span>
      </Button>
    </Link>
  );
}
