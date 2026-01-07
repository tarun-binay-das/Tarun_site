import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";

interface ButtonArrowProps {
  text: string;
  href?: string;
  className?: string;
  initialRotation?: number; // starting arrow rotation
  hoverRotation?: number;   // how much it rotates on hover
}

export default function ButtonArrow({
  text,
  href = "#",
  className,
  initialRotation = 0,
  hoverRotation = 45,
}: ButtonArrowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-flex items-center gap-2 font-mono uppercase tracking-wider text-white text-sm md:text-base",
        "before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-white before:transition-all before:duration-500",
        "hover:before:w-full hover:text-gray-200",
        "transition-colors duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]",
        className
      )}
      whileHover={{ opacity: 0.9, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
    >
      <span>{text}</span>

      {/* Arrow Icon */}
      <motion.span
        animate={{ rotate: hovered ? hoverRotation : initialRotation }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="inline-block"
      >
        <ArrowUpRight className="w-6 h-6 text-white" />
      </motion.span>
    </motion.a>
  );
}
