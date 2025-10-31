import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
}

export default function Button({ text, href = "#", className }: ButtonProps) {
  return (
    <motion.a
      href={href}
      className={cn(
        "relative inline-block font-mono uppercase tracking-wider text-white text-sm md:text-base",
        "before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-white before:transition-all before:duration-500",
        "hover:before:w-full hover:text-gray-200",
        className
      )}
      whileHover={{ opacity: 0.8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
    >
      [ {text} ]
    </motion.a>
  );
}
