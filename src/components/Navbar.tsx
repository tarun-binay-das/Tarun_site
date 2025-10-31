import Button from "./Button";
import Button2 from "./Button2";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-6 bg-transparent text-white z-50">
      <div className="font-bold tracking-tight text-xs">
        TARUN <br /> BINAY DAS
      </div>

      <div className="flex gap-10 items-center text-xs md:text-sm">
        <Button2 text="Home" href="#home" />
        <Button2 text="About" href="#about" />
        <Button2 text="Works" href="#works" />
        <Button2 text="Services" href="#services" />
      </div>

      <div>
        <Button text="Contact →" href="#contact" />
      </div>
    </nav>
  );
}
