import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Generic horizontal scroll wrapper that auto-sizes to its content width
// Drop any wide children inside; their combined scrollWidth drives the animation.
gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollerProps {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  backgroundClassName?: string;
}

export default function HorizontalScroller({
  children,
  className = "",
  trackClassName = "",
  backgroundClassName = "bg-[#F2F2F2] text-[#111]",
}: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const refresh = () => ScrollTrigger.refresh();

      // Horizontal scroll driven by the track's actual width
      const horizTween = gsap.to(track, {
        x: () => -(track.scrollWidth - container.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => "+=" + Math.max(0, track.scrollWidth - container.clientWidth),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      window.addEventListener("resize", refresh);

      return () => {
        window.removeEventListener("resize", refresh);
        horizTween.scrollTrigger?.kill();
        horizTween.kill();
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden ${backgroundClassName} ${className}`.trim()}
    >
      <div
        ref={trackRef}
        className={`flex h-full will-change-transform ${trackClassName}`.trim()}
      >
        {children}
      </div>
    </div>
  );
}
