// src/lib/products.ts
import products, { type Product, type Subcategory } from "../data/product"

// Normalize a string (lowercase, replace dashes/spaces) for case-insensitive matching
function normalize(s?: string) {
  return String(s ?? "")
    .trim()
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
}

/** Find a product by its id (e.g. "m-tee-01"). */
export function getProductById(id?: string): Product | null {
  if (!id) return null
  return (products as Product[]).find(p => String(p.id) === String(id)) ?? null
}

/** Get all products in a category (e.g. "menswear" or "Menswear"). */
export function getProductsByCategory(categoryParam?: string): Product[] {
  if (!categoryParam) return []
  const want = normalize(categoryParam)
  return (products as Product[]).filter(p => normalize(p.category) === want)
}

/** Get all products in a category + subcategory (case-insensitive). */
export function getProductsBySubcategory(categoryParam?: string, subcategoryParam?: string): Product[] {
  if (!categoryParam || !subcategoryParam) return []
  const wantCat = normalize(categoryParam)
  const wantSub = normalize(subcategoryParam)
  return (products as Product[]).filter(
    p => normalize(p.category) === wantCat && normalize(p.subcategory) === wantSub
  )
}

/** List all distinct subcategories in a category. */
export function listSubcategoriesFor(categoryParam?: string): Subcategory[] {
  const set = new Set<Subcategory>()
  for (const p of getProductsByCategory(categoryParam)) set.add(p.subcategory)
  return Array.from(set)
}

/** Format a price nicely (USD for now, can change to INR or other currency). */
export function formatPrice(n: number) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n)
}
