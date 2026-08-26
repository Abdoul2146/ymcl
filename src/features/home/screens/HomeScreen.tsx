import { Hero } from "./Hero";
import { TrustStrip } from "../components/TrustStrip";
import { AboutTeaser } from "../components/AboutTeaser";
import { DivisionGrid } from "../components/DivisionGrid";

export function HomeScreen() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutTeaser />
      <DivisionGrid />
    </>
  );
}
