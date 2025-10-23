import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-b from-zinc-700/20 to-zinc-900/0 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-t from-zinc-700/20 to-zinc-900/0 blur-3xl" />
      </div>
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.2em] text-sm text-zinc-400">Modern Architecture Studio</p>
          <h1 className="mt-4 text-4xl md:text-6xl leading-tight font-semibold">
            Crafting clean, timeless spaces with a distinctly modern edge
          </h1>
          <p className="mt-6 text-zinc-300 md:text-lg">
            From concept to completion, I design contemporary environments that balance light, materiality, and human experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-zinc-200 transition">
              View Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-white hover:bg-zinc-900 transition">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
