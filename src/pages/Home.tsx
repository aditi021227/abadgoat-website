import React, { useState } from "react"
import products from "../data/product"
import ProductCard from "../components/cards/ProductCard"

/* ---------- image helpers (used in <img> tags) ---------- */
const FALLBACK_IMG = "https://placehold.co/1600x1000?text=ABADGOAT"

const withParams = (url: string, w = 1600) =>
  url.includes("?")
    ? `${url}&auto=format&fit=crop&w=${w}&q=80`
    : `${url}?auto=format&fit=crop&w=${w}&q=80`

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget
  if (img.src !== FALLBACK_IMG) img.src = FALLBACK_IMG
}
/* -------------------------------------------------------- */

export default function Home() {
  const [email, setEmail] = useState("")

  const categories = [
    {
      id: "m",
      name: "Menswear",
      sub: ["Shirts / T-Shirts", "Hoodies", "Trousers"],
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      id: "w",
      name: "Womenswear",
      sub: ["Shirts / T-Shirts", "Hoodies", "Trousers"],
      image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    },
    {
      id: "a",
      name: "Accessories",
      sub: [
        "Bracelet",
        "Beanie",
        "Cap",
        "Socks",
        "Sunglasses",
        "Belts",
        "Scarves",
        "Wallets",
        "Rings",
        "Necklaces",
        "Tote Bags",
      ],
      image: "https://images.unsplash.com/photo-1520975594082-2eec6191b24c",
    },
  ]

  return (
    <>
      {/* New Arrivals */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-[-0.02em] uppercase leading-[0.95]">
          New Arrivals
        </h1>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* LUXE — Shop by Category (asymmetric editorial layout) */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(800px_400px_at_50%_0%,_rgba(0,0,0,0.08),_transparent_60%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-500">Categories</div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em]">
                Shop by Category
              </h2>
            </div>
            <a href="#" className="hidden sm:inline-block text-sm uppercase hover:opacity-70">
              View All
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {categories.map((c) => {
              const isMens = c.name.toLowerCase() === "menswear"
              const isWomens = c.name.toLowerCase() === "womenswear"
              const isAcc = c.name.toLowerCase() === "accessories"

              const wrapperClass = isMens
                ? "md:col-span-7"
                : isWomens
                ? "md:col-span-5"
                : "md:col-span-12"

              const heightClass = isAcc ? "h-64 sm:h-72" : "h-[480px] lg:h-[560px]"

              return (
                <a
                  key={c.id}
                  href="#"
                  className={[
                    "group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-shadow",
                    "hover:shadow-2xl hover:shadow-black/10",
                    wrapperClass,
                  ].join(" ")}
                >
                  {/* image */}
                  <img
                    src={withParams(c.image, 1600)}
                    alt={c.name}
                    referrerPolicy="no-referrer"
                    decoding="async"
                    loading="lazy"
                    onError={onImgError}
                    className={[
                      "block w-full object-cover transition-transform duration-700",
                      heightClass,
                      "group-hover:scale-[1.04]",
                    ].join(" ")}
                  />

                  {/* gradient veil */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-95" />

                  {/* top eyebrow + hairline */}
                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-white/70">Abadgoat</span>
                    <span className="hidden md:block h-px w-24 bg-white/30" />
                  </div>

                  {/* content */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                    <h3 className="text-white text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
                      {c.name}
                    </h3>

                    {/* subcats: luxe tags; accessories can scroll */}
                    <div className={["mt-4 flex gap-3 flex-wrap", isAcc ? "overflow-x-auto pb-1" : ""].join(" ")}>
                      {c.sub.map((s, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 border border-white/40 text-white/90 text-[11px] uppercase tracking-[0.15em] bg-transparent transition-colors hover:border-white hover:text-white"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* CTA — underlined, editorial */}
                    <div className="mt-8">
                      <a
                        href="#"
                        className="group inline-flex items-center gap-3 border-b border-white/50 text-white text-sm uppercase tracking-[0.2em] pb-1 transition-colors hover:border-white"
                      >
                        Shop {c.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="h-4 w-4 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                        >
                          <path d="M7 4l6 6-6 6" fill="currentColor" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Designer Spotlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src={withParams("https://images.unsplash.com/photo-1542060748-10c28b62716a", 1600)}
                alt="Designer portrait"
                referrerPolicy="no-referrer"
                decoding="async"
                loading="lazy"
                onError={onImgError}
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95]">
              Designer Spotlight
            </h2>
            <p className="mt-6 text-neutral-700 max-w-prose">
              Abadgoat features cutting-edge independent designers redefining minimal luxury.
              Each collection is curated to bring authenticity, craftsmanship, and bold attitude.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm uppercase hover:opacity-90"
              >
                Explore Designers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-black/10 p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase">Join the Abadgoat List</h3>
          <p className="mt-3 text-sm text-neutral-600">Be the first to know about new arrivals and limited drops.</p>
          <form
            className="mt-6 flex flex-col sm:flex-row justify-center gap-3"
            onSubmit={(e) => {
              e.preventDefault()
              setEmail("")
              alert("Subscribed! (mock)")
            }}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-black/20 px-4 py-3 outline-none focus:border-black sm:max-w-xs"
            />
            <button
              type="submit"
              className="rounded-full bg-black text-white px-6 py-3 text-sm uppercase hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
