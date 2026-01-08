import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const refresh = () => ScrollTrigger.refresh();

      // horizontal scroll tween
      const horizTween = gsap.to(track, {
        x: () => -(track.scrollWidth - container.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => "+=" + (track.scrollWidth - container.clientWidth),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Per-panel animations mapped to the horizontal containerAnimation
      const panels = gsap.utils.toArray<HTMLElement>(".about-panel");
      panels.forEach((panel, i) => {
        const reveal = panel.querySelector<HTMLElement>(".reveal");
        if (reveal) {
          gsap.fromTo(
            reveal,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizTween,
                start: "left center",
                end: "+=200",
                scrub: true,
              },
            }
          );
        }

        // some playful elements per panel
        gsap.fromTo(
          panel.querySelectorAll(".float"),
          { y: 30, opacity: 0, rotate: 0 },
          {
            y: -10,
            opacity: 1,
            rotate: i % 2 === 0 ? 6 : -6,
            ease: "power1.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizTween,
              start: "left 70%",
              end: "right 30%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          panel.querySelectorAll(".scale"),
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizTween,
              start: "left 60%",
              end: "+=200",
              scrub: true,
            },
          }
        );

        // wobble stickers
        gsap.fromTo(
          panel.querySelectorAll(".sticker"),
          { rotate: i % 2 === 0 ? -6 : 6, y: 10, opacity: 0 },
          {
            rotate: i % 2 === 0 ? 6 : -6,
            y: 0,
            opacity: 1,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizTween,
              start: "left 70%",
              end: "right 30%",
              scrub: true,
            },
          }
        );
      });

      // refresh on resize to keep distances correct
      window.addEventListener("resize", refresh);

      return () => {
        window.removeEventListener("resize", refresh);
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#F2F2F2] text-[#111]">
      {/* Horizontal track with full-screen panels */}
      <div ref={trackRef} className="about-h-wrap flex h-screen will-change-transform">
        {/* Panel 1 - ABOUT ME layout */}
        <section className="about-panel relative w-[120vw] h-screen flex items-center justify-center px-0">
          <div className="relative grid grid-cols-12 gap-6 w-full h-full items-center px-8 md:px-20">
            <div className="col-span-12 md:col-span-6">
              <h2 className="reveal text-[5rem] md:text-[8rem] font-extrabold tracking-tight leading-none text-[#111]">
                ABOUT ME
              </h2>
              <div className="mt-8 max-w-2xl text-[#333] font-mono uppercase tracking-widest text-[1.1rem] md:text-[1.3rem] leading-relaxed">
                I’M <span className="font-bold">TARUN BINAY DAS</span>, A CSE UNDERGRAD WHO LOVES TO
                BUILD, DESIGN, AND EXPERIMENT.
              </div>
            </div>
            <div className="hidden md:block col-span-6">
              <div className="mx-auto sticker w-28 h-28 rounded-md bg-black/10 border border-black/20" />
            </div>

            {/* Decorative bottom-left shape */}
            <div className="absolute left-10 bottom-24 hidden md:block">
              <div className="float w-56 h-28 rounded-t-[140px] rounded-b-none bg-black/10 border border-black/20" />
              <div className="mt-2 w-56 h-28 rounded-b-[140px] rounded-t-none bg-black/10 border border-black/20" />
            </div>

            <div className="absolute left-10 bottom-8 text-xs tracking-widest text-gray-400 font-mono">
              SCROLL TO DISCOVER →
            </div>
          </div>
        </section>

        {/* Panel 2 - IT STARTED WITH...ART */}
        <section className="about-panel relative w-[120vw] h-screen flex items-center justify-center px-0">
          <div className="relative grid grid-cols-12 gap-6 w-full h-full items-center px-8 md:px-20">
            <div className="col-span-12">
              <h3 className="reveal text-[4rem] md:text-[7rem] font-extrabold tracking-tight text-center">
                <span className="text-[#111]">IT STARTED WITH...</span><br /><span className="text-[#111]">ART</span>
              </h3>
            </div>

            {/* Framed copy block */}
            <div className="col-span-12 md:col-span-5">
              <div className="relative reveal max-w-md p-5 border border-black/30 bg-black text-[#F2F2F2]">
                <div className="absolute -left-2 top-2 w-4 h-0.5 bg-[#F2F2F2]/70" />
                <div className="absolute -left-2 bottom-2 w-4 h-0.5 bg-[#F2F2F2]/70" />
                <div className="absolute -right-2 top-2 w-4 h-0.5 bg-[#F2F2F2]/70" />
                <div className="absolute -right-2 bottom-2 w-4 h-0.5 bg-[#F2F2F2]/70" />
                <p className="text-sm md:text-base leading-relaxed text-[#F2F2F2] font-mono">
                  WHETHER IT’S DEVELOPING APPS, CRAFTING INTUITIVE INTERFACES, CREATING DIGITAL ART, OR
                  DIVING INTO GAME DEVELOPMENT, I FIND JOY IN TURNING IDEAS INTO INTERACTIVE EXPERIENCES.
                </p>
              </div>
            </div>

            {/* Right imagery placeholders */}
            <div className="col-span-12 md:col-span-7 flex items-center justify-center gap-8">
              <div className="sticker w-28 h-28 rounded-md bg-black/10 border border-black/20" />
              <div className="scale w-44 h-56 rounded-md bg-black/10 border border-black/20" />
              <div className="float w-20 h-20 rounded-full bg-black/10 border border-black/20" />
            </div>

            {/* Krita logo placeholder */}
            <div className="absolute left-10 top-10 sticker">
              <div className="px-4 py-2 rounded-full bg-black/10 border border-black/30 font-bold tracking-wider">
                KRITA
              </div>
            </div>

            {/* Star shape */}
            <div className="absolute right-1/3 top-1/3 scale">
              <div className="w-10 h-10 rotate-45 bg-black/20" />
            </div>
          </div>
        </section>

        {/* Panel 3 - DIGITAL ART / 3D MODELING */}
        <section className="about-panel relative w-[120vw] h-screen flex items-center justify-center px-0">
          <div className="relative grid grid-cols-12 gap-6 w-full h-full items-center px-8 md:px-20">
            <div className="col-span-12 md:col-span-7">
              <div className="relative inline-block">
                <h3 className="reveal text-[4rem] md:text-[7rem] font-extrabold tracking-tight text-[#111]">
                  DIGITAL ART
                </h3>
                <div className="sticker absolute -right-10 -top-6 rotate-6 px-4 py-2 rounded text-lg md:text-2xl bg-black/10 border border-black/20 font-bold">
                  3D MODELING
                </div>
              </div>
              <p className="reveal mt-8 text-[#333] text-lg md:text-2xl max-w-3xl leading-relaxed">
                FROM SKETCHBOOKS TO SCREENS — I STARTED CREATING DIGITALLY. 3D TOOLS, LAYERS, LIGHTS,
                AND SHADOWS BECAME MY NEW PLAYGROUND.
              </p>

              <div className="mt-12 flex gap-8">
                <div className="scale w-64 h-48 rounded-md bg-black/10 border border-black/20" />
                <div className="float w-48 h-48 rounded-md bg-black/10 border border-black/20" />
              </div>
            </div>

            {/* Right: big abstract shape */}
            <div className="col-span-12 md:col-span-5 relative">
              <div className="absolute right-6 bottom-12 w-80 h-80 rounded-full bg-black/10 border border-black/20" />
              <div className="absolute right-0 bottom-0 w-96 h-56 rounded-t-[3rem] bg-black/10 border border-black/20" />
              <div className="absolute right-20 top-16 px-4 py-2 rounded-full border border-black/30 text-base md:text-lg tracking-widest sticker font-bold">
                ART
              </div>
              <div className="absolute right-6 top-4 px-6 py-3 rounded-full bg-black/10 border border-black/20 font-bold tracking-wider text-lg sticker">
                BLENDER
              </div>
            </div>
          </div>
        </section>

        {/* Panel 4 - Values */}
        <section className="about-panel w-[120vw] h-screen flex items-center justify-center px-0">
          <div className="max-w-5xl px-8 md:px-20">
            <h3 className="reveal text-6xl md:text-8xl font-bold mb-8">Values</h3>
            <p className="reveal text-gray-300 text-2xl md:text-4xl max-w-3xl leading-relaxed">
              Clarity. Empathy. Performance. Great experiences emerge where storytelling
              meets engineering—shaped with purpose and polish.
            </p>
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="scale h-32 rounded-md bg-white/5 border border-white/10"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Panel 5 - CTA */}
        <section className="about-panel w-[120vw] h-screen flex items-center justify-center px-0">
          <div className="max-w-5xl px-8 md:px-20">
            <h3 className="reveal text-6xl md:text-8xl font-bold mb-8">Let's Build</h3>
            <p className="reveal text-gray-300 text-2xl md:text-4xl max-w-3xl leading-relaxed">
              Have a project or idea in mind? I'd love to collaborate
              and turn it into something memorable.
            </p>
            <a
              href="#contact"
              className="reveal mt-16 inline-flex items-center gap-4 px-8 py-4 rounded-md bg-white/10 border border-white/20 hover:bg-white/15 transition-colors text-lg md:text-2xl"
            >
              Get in touch
              <span className="float w-3 h-3 rounded-full bg-white/80" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
