import { ContactSection } from "@/components/ContactSection";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Inventory } from "@/components/Inventory";
import { Stats } from "@/components/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Inventory />
      <Experience />
      <Gallery />
      <ContactSection />
    </>
  );
}
