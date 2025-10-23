export default function Projects() {
  const items = [
    {
      title: 'Courtyard Residence',
      subtitle: 'Residential — 2024',
    },
    {
      title: 'Gallery Annex',
      subtitle: 'Cultural — 2023',
    },
    {
      title: 'Seaside Pavilion',
      subtitle: 'Public — 2023',
    },
    {
      title: 'Atrium Workspace',
      subtitle: 'Commercial — 2022',
    },
    {
      title: 'Concrete House',
      subtitle: 'Residential — 2022',
    },
    {
      title: 'Terrace Loft',
      subtitle: 'Residential — 2021',
    },
  ];

  return (
    <section id="projects" className="bg-neutral-950 text-zinc-200">
      <div className="container mx-auto px-6 md:px-10 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected Work</h2>
          <a href="#contact" className="hidden md:inline-block text-sm text-zinc-400 hover:text-white">Request Portfolio</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-xl border border-zinc-800 bg-neutral-950 shadow-xl transition hover:border-zinc-700"
            >
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-zinc-800 to-zinc-900" />
              <div className="p-5">
                <h3 className="text-lg font-medium text-white group-hover:opacity-90">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{p.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
