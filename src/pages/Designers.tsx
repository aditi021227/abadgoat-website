const withParams = (url: string, w = 1600) =>
  url.includes("?") ? `${url}&auto=format&fit=crop&w=${w}&q=80` : `${url}?auto=format&fit=crop&w=${w}&q=80`

export default function Designers() {
  const designers = [
    { id: "d1", name: "atelier N.13", image: "https://images.unsplash.com/photo-1542060748-10c28b62716a" },
    { id: "d2", name: "void / line", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae" },
    { id: "d3", name: "Kuro Studio", image: "https://images.unsplash.com/photo-1519741497674-611481863552" },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="flex items-end justify-between">
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-500">Editorial</div>
          <h1 className="mt-2 text-3xl sm:text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em]">
            Designers
          </h1>
        </div>
      </header>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {designers.map((d) => (
          <article key={d.id} className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white">
            <img
              src={withParams(d.image, 1200)}
              alt={d.name}
              className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-0 p-6 flex items-end">
              <h3 className="text-white text-2xl font-extrabold uppercase tracking-tight">{d.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
