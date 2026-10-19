import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import Stats from "@/sections/Stats";
import Technology from "@/sections/Technology";
import Clients from "@/sections/Clients";
import Process from "@/sections/Process";
import Manifesto from "@/sections/Manifesto";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Stats />
      <Technology />
      <Clients />
      <Process />
      <Manifesto />
      <CTA />
    </main>
  );
}
