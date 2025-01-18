import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
