import './App.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useScrollSpy } from './hooks/useScrollSpy';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const { activeSection, scrolled, scrollProgress } = useScrollSpy();
  useScrollReveal();

  const currentYear = new Date().getFullYear();

  return (
    <>
      <ScrollProgress progress={scrollProgress} />
      <Navbar activeSection={activeSection} scrolled={scrolled} />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer currentYear={currentYear} />
      <BackToTop />
    </>
  );
}
