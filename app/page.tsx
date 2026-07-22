import Navbar from "@/components/Navbar";
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
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
