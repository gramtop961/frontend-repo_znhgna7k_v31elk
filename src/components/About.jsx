export default function About() {
  return (
    <section id="about" className="bg-neutral-950 text-zinc-200">
      <div className="container mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl ring-1 ring-zinc-800" />
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">About Me</h2>
            <p className="mt-6 leading-relaxed text-zinc-300">
              I’m an architect focused on modern, minimal spaces that prioritize light, proportion, and honest materials. My practice spans residential, boutique commercial, and cultural projects—each led by careful research and a deep respect for context.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-300">
              With a process that blends conceptual clarity and technical rigor, I collaborate closely with clients to deliver refined, enduring architecture. I value simplicity, precision, and the quiet drama of well-crafted details.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="rounded-lg border border-zinc-800 bg-neutral-950 p-5">
                <p className="text-3xl font-semibold text-white">10+</p>
                <p className="text-sm text-zinc-400">Years Experience</p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-neutral-950 p-5">
                <p className="text-3xl font-semibold text-white">80+</p>
                <p className="text-sm text-zinc-400">Projects</p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-neutral-950 p-5">
                <p className="text-3xl font-semibold text-white">12</p>
                <p className="text-sm text-zinc-400">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
