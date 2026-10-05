import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { About } from "@/sections/About";
import { Capabilities } from "@/sections/Capabilities";
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
        {/* 3. WHAT I BUILD */}
        <Capabilities />
        {/* 4. WHAT I USE */}
        <Skills />
        {/* 5. WHAT I'VE BUILT */}
        <Projects />
        {/* 6. WHERE I WORK */}
        <Experience />
        {/* 7. LET'S CONNECT */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
