import Navbar from "./components/Navbar";
import BackgroundRipple from "./components/BackgroundRipple";
import ResponsiveHero from "./components/sections/ResponsiveHero";
import About from "./components/sections/About";
import Quote from "./components/sections/Quote";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <main className="relative bg-[#050505] text-white overflow-x-visible">
      {/* === Ripple background visible behind Navbar and full Hero === */}
      <div
        className="absolute top-0 left-0 w-full z-0 pointer-events-auto"
        style={{
          /* cover navbar + full viewport height */
          height: "100vh",
        }}
      >
        {/* BackgroundRipple handles clicks inside this area */}
        <BackgroundRipple />

        {/* Fade overlay — ensures grid disappears smoothly at the bottom of this wrapper */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               background:
                 "linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(5,5,5,0.5) 60%, rgba(5,5,5,1) 100%)",
             }}
        />
      </div>

      {/* Navbar (fixed) */}
      <Navbar />

      {/* Hero starts normally below navbar */}
      <section id="hero" className="relative z-10 pt-24 pointer-events-none">
        <ResponsiveHero />
      </section>

      {/* === Rest of the site === */}
      <section id="about" className="relative z-10">
        <About />
      </section>

      <section id="quote" className="relative z-10 bg-[#050505]">
        <Quote />
      </section>

      <section id="skills" className="relative z-10 bg-[#050505]">
        <Skills />
      </section>

      <section id="projects" className="relative z-10 bg-[#050505]">
        <Projects />
      </section>

      <section id="experience" className="relative z-10 bg-[#050505]">
        <Experience />
      </section>

      <section id="services" className="relative z-10 bg-[#050505]">
        <Services />
      </section>

      <section id="contact" className="relative z-10 bg-[#050505]">
        <Contact />
      </section>
    </main>
  );
}
