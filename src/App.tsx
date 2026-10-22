import { AppProvider } from "@/context/AppContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import CircuitBackground from "@/components/CircuitBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Certifications from "@/sections/Certifications";
import FeaturedProject from "@/sections/FeaturedProject";
import OtherProjects from "@/sections/OtherProjects";
import Timeline from "@/sections/Timeline";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

function Portfolio() {
  useScrollReveal();

  return (
    <>
      <CircuitBackground />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <FeaturedProject />
        <OtherProjects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Portfolio />
    </AppProvider>
  );
}
