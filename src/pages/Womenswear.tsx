// src/pages/Womenswear.tsx
import React from "react"
import products from "../data/product"
import type { Product } from "../data/product"
import ProductCard from "../components/cards/ProductCard"

type ProductWithCategory = Product & { category?: string }

function byCategory(list: ProductWithCategory[], cat: string): ProductWithCategory[] {
  return list.filter((p) => p.category?.toLowerCase() === cat)
}

export default function Womenswear() {
  const womens = byCategory(products as ProductWithCategory[], "womenswear")
  // Fallback: if nothing is tagged yet, show all products so the page isn’t blank
  const items: ProductWithCategory[] = womens.length ? womens : (products as ProductWithCategory[])

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="flex items-end justify-between">
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-500">Category</div>
          <h1 className="mt-2 text-3xl sm:text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em]">
            Womenswear
          </h1>
        </div>
      </header>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {items.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  )
}
