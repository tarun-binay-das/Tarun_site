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
        "relative inline-flex items-center gap-2 overflow-hidden uppercase tracking-wider text-white font-mono text-sm md:text-base group leading-none",
        className
      )}
    >
      {/* Left bracket */}
      <span className="text-white select-none">[</span>

      {/* Text animation container */}
      <span className="relative inline-block overflow-hidden h-[1em] leading-none px-1 align-middle">
        {/* Default text */}
        <span
          className="block translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-[105%]"
        >
          {text}
        </span>
        {/* Hover text */}
        <span
          className="absolute left-0 translate-y-[105%] block transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0"
        >
          {text}
        </span>
      </span>

      {/* Right bracket */}
      <span className="text-white select-none">]</span>

      {/* Underline */}
      <span
        className="absolute bottom-[-3px] left-[8px] right-[8px] h-[1px] bg-white/40 scale-x-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100"
      />
    </a>
  );
}
