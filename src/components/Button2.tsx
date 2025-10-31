import { cn } from "../lib/utils";

interface Button2Props {
  text: string;
  href?: string;
  className?: string;
}

export default function Button2({ text, href = "#", className }: Button2Props) {
  return (
    <a
      href={href}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 text-white font-mono uppercase tracking-[0.15em]",
        "text-[0.95rem] md:text-[1rem] select-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
        "group leading-none",
        className
      )}
    >
      {/* Left bracket */}
      <span
        className={cn(
          "text-white text-[1.05em] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
          "group-hover:-translate-x-[4px]"
        )}
      >
        [
      </span>

      {/* Animated text */}
      <span className="relative inline-flex flex-col justify-center items-center overflow-hidden h-[1.4em] leading-[1] px-2">
        {/* Default text */}
        <span
          className={cn(
            "block transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
            "group-hover:-translate-y-full group-hover:opacity-0"
          )}
        >
          {text}
        </span>

        {/* Hover text */}
        <span
          className={cn(
            "block absolute transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
            "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          )}
        >
          {text}
        </span>
      </span>

      {/* Right bracket */}
      <span
        className={cn(
          "text-white text-[1.05em] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
          "group-hover:translate-x-[4px]"
        )}
      >
        ]
      </span>
    </a>
  );
}
