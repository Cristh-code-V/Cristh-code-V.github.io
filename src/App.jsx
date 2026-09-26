import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fondo: retícula técnica sutil */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-grid[mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <Navbar />
      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
