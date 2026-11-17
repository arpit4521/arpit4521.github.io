import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Expertise } from "@/components/expertise";
import { ProblemSolving } from "@/components/problem-solving";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { getAssets } from "@/lib/assets";

export default function Home() {
  const assets = getAssets();
  return <div id="top">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main-content">
      <Hero photoAvailable={assets.photo} />
      <About photoAvailable={assets.photo} />
      <Experience />
      <Projects />
      <Expertise />
      <ProblemSolving />
      <Contact />
    </main>
    <Footer />
  </div>;
}
