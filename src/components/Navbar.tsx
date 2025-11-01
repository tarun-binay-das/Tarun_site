import Button from "./Button";
import Button2 from "./Button2";

export default function Navbar() {
  return (
    <nav
      style={{ ["--nav-height" as any]: "72px" }}
      className="
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-10 lg:px-20 py-6
        bg-transparent text-white
        transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
      "
    >
      {/* Left: Clean name block */}
      <div className="flex flex-col leading-[0.95] tracking-[0.05em] font-semibold uppercase text-white text-[1rem] md:text-[1.15rem]">
        <span>TARUN</span>
        <span>BINAY DAS</span>
      </div>

      {/* Center: Navigation links */}
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          flex items-center gap-10 md:gap-20
          text-[0.85rem] font-mono uppercase tracking-[0.15em]
        "
      >
        <Button2 text="Home" href="#home" />
        <Button2 text="About" href="#about" />
        <Button2 text="Works" href="#works" />
        <Button2 text="Services" href="#services" />
      </div>

      {/* Right: Contact Button */}
      <div className="flex items-center">
        <Button text="Contact Me" href="#contact" />
      </div>
    </nav>
  );
}
