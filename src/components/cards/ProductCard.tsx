import React from "react"
import type { Product } from "../../data/product"

interface Props {
  p: Product
}

export default function ProductCard({ p }: Props) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {p.tag && (
          <div className="absolute inset-x-0 bottom-0 p-4">
            <span className="inline-flex items-center text-[10px] uppercase tracking-wider bg-white/80 backdrop-blur px-2 py-1 rounded-full">
              {p.tag}
            </span>
          </div>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm md:text-base font-medium leading-tight">{p.name}</h3>
          <p className="text-xs md:text-sm text-neutral-500">{p.brand}</p>
        </div>
        <span className="text-sm md:text-base">${p.price}</span>
      </div>
    </article>
  )
}
