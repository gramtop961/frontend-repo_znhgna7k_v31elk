import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <nav className="container mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <a href="#home" className="font-semibold tracking-wide">Studio</a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <li><a href="#projects" className="hover:text-white">Work</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
          <a href="#contact" className="hidden md:inline-block rounded-full bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition">Start a Project</a>
        </nav>
      </header>

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-zinc-900 bg-neutral-950">
        <div className="container mx-auto px-6 md:px-10 py-8 text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Studio — Modern Architecture</p>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
