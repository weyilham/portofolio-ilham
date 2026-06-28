import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <ValueProposition />
      <TechStack />
      <Projects />
      <ExperienceTimeline />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
