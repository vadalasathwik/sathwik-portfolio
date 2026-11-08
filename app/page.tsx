import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        {/* 1. WHO I AM */}
        <Hero />
        {/* 2. WHAT I FOCUS ON */}
        <About />
        {/* 3. WHAT I USE */}
        <Skills />
        {/* 4. WHAT I'VE BUILT */}
        <Projects />
        {/* 5. WHERE I WORK */}
        <Experience />
        {/* 6. LET'S CONNECT */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
