import BackgroundRipple from "../BackgroundRipple";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-center overflow-hidden  text-white px-12 md:px-24"
    >
      {/* Ripple background */}
      

      {/* Content container */}
      <div className="relative z-10 flex flex-col gap-10">

        {/* Tagline */}
        <p className="text-3xl md:text-4xl italic text-gray-200 font-serif absolute right-32 top-32">
          Designs that speak
        </p>

        {/* Main title */}
        <h1 className="font-tiltwrap text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-wide">
          TARUN BINAY DAS
        </h1>

        {/* Role section */}
        <div className="flex flex-col gap-3 text-lg md:text-xl font-sofia tracking-widest">
          <p>/ WEB DEVELOPER</p>
          <p>/ GRAPHIC DESIGNER</p>
          <p>/ WEB DESIGNER ( UI/UX )</p>
        </div>

        {/* Contact section */}
        <div className="mt-10 text-sm md:text-base font-mono">
          <p className="text-gray-300 uppercase tracking-wider">
            AVAILABLE FOR COLLABORATION ↓
          </p>
          <p className="mt-1 text-lg font-semibold">
            <a href="mailto:tarunbinaydas@gmail.com" className="hover:underline">
              tarunbinaydas@gmail.com
            </a>
          </p>
        </div>

        {/* Right-side content */}
        <div className="absolute right-12 bottom-12 text-right text-gray-300 font-mono text-sm md:text-base">
          <p className="uppercase tracking-wider mb-1">Recent Works ↓</p>
          <p className="font-bold text-white">TRUETXT - Messaging</p>
        </div>

        {/* Side vertical date */}
        <p className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 font-mono tracking-widest text-sm">
          16012006
        </p>
      </div>
    </section>
  );
}
