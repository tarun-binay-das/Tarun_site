// src/components/HeroWrapper.tsx (or integrate into your page)
import DesignCanvas from "../DesignCanvas";
import HeroContent from "./Hero"; // this is your exact current hero markup (unchanged)

export default function HeroWrapped() {
  return (
    
    <DesignCanvas width={1920} height={1080}>
      <HeroContent /> {/* <-- drop your existing hero markup here without touching */}
    </DesignCanvas>
  );
}
