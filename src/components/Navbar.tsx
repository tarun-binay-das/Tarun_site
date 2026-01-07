import ButtonArrow from "./Button_Arrow";
import ButtonBrackets from "./Button_Brackets";

export default function Navbar() {
  return (
    <nav
      style={{ ["--nav-height" as any]: "72px" }}
      className="
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-4 sm:px-6 md:px-10 lg:px-20 py-4 md:py-6
        bg-transparent text-white
        transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
      "
    >
      {/* Left: Clean name block */}
      <div className="flex flex-col leading-[0.95] tracking-[0.05em] font-semibold uppercase text-white text-[0.75rem] sm:text-[0.85rem] md:text-[1rem] lg:text-[1.15rem]">
        <span>TARUN</span>
        <span>BINAY DAS</span>
      </div>

      {/* Center: Navigation links - hidden on mobile */}
      <div
        className="
          hidden md:flex
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          items-center gap-6 lg:gap-10 xl:gap-20
          text-[0.7rem] lg:text-[0.85rem] font-mono uppercase tracking-[0.15em]
        "
      >
        <ButtonBrackets text="Home" href="#home" />
        <ButtonBrackets text="About" href="#about" />
        <ButtonBrackets text="Works" href="#works" />
        <ButtonBrackets text="Services" href="#services" />
      </div>

      {/* Right: Contact Button */}
      <div className="flex items-center">
        <ButtonArrow text="Contact Me" href="#contact" />
      </div>
    </nav>
  );
}
