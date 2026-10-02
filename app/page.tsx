import { Navbar } from "@/components/Navbar";
import { AIEngineering } from "@/sections/AIEngineering";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { GitHubSection } from "@/sections/GitHubSection";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AIEngineering />
        <Skills />
        <Education />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
