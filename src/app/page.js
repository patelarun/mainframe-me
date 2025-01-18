import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
