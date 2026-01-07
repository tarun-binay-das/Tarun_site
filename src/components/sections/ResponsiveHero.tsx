import DesignCanvas from "../DesignCanvas";
import Hero from "./Hero";

export default function HeroWrapped() {
  return (
    <section className="w-full overflow-visible pointer-events-none">
      <DesignCanvas width={1920} height={1080}>
        <Hero />
      </DesignCanvas>
    </section>
  );
}
