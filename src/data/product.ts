// src/data/products.ts

export type Category = "Menswear" | "Womenswear" | "Accessories"
export type Subcategory =
  | "Shirts / T-Shirts"
  | "Hoodies"
  | "Trousers"
  | "Bracelet"
  | "Beanie"
  | "Cap"
  | "Socks"
  | "Sunglasses"
  | "Belt"
  | "Scarf"
  | "Wallet"

export type Product = {
  id: string
  name: string
  brand: string
  price: number
  image: string
  category: Category
  subcategory: Subcategory
  tag?: string
}

// --- Mock catalog split by your 3 categories ---
const products: Product[] = [
  // MENSWEAR
  {
    id: "m-tee-01",
    name: "Oversized Logo Tee",
    brand: "atelier N.13",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1400&auto=format&fit=crop",
    category: "Menswear",
    subcategory: "Shirts / T-Shirts",
    tag: "Menswear",
  },
  {
    id: "m-hood-01",
    name: "Heavyweight Fleece Hoodie",
    brand: "Silent / Form",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1400&auto=format&fit=crop",
    category: "Menswear",
    subcategory: "Hoodies",
    tag: "Menswear",
  },
  {
    id: "m-trou-01",
    name: "Pleated Tech Trousers",
    brand: "Studio Lintel",
    price: 360,
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca29?q=80&w=1400&auto=format&fit=crop",
    category: "Menswear",
    subcategory: "Trousers",
    tag: "Menswear",
  },

  // WOMENSWEAR
  {
    id: "w-tee-01",
    name: "Boxy Cotton T‑Shirt",
    brand: "Kuro Studio",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop",
    category: "Womenswear",
    subcategory: "Shirts / T-Shirts",
    tag: "Womenswear",
  },
  {
    id: "w-hood-01",
    name: "Crop Zip Hoodie",
    brand: "void / line",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1520975594082-2eec6191b24c?q=80&w=1400&auto=format&fit=crop",
    category: "Womenswear",
    subcategory: "Hoodies",
    tag: "Womenswear",
  },
  {
    id: "w-trou-01",
    name: "Wide‑Leg Wool Trousers",
    brand: "atelier N.13",
    price: 390,
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1400&auto=format&fit=crop",
    category: "Womenswear",
    subcategory: "Trousers",
    tag: "Womenswear",
  },

  // ACCESSORIES
  {
    id: "a-brace-01",
    name: "Chain Link Bracelet",
    brand: "Romance & Noise",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
    category: "Accessories",
    subcategory: "Bracelet",
    tag: "Accessory",
  },
  {
    id: "a-beanie-01",
    name: "Ribbed Beanie",
    brand: "Silent / Form",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop",
    category: "Accessories",
    subcategory: "Beanie",
    tag: "Accessory",
  },
  {
    id: "a-cap-01",
    name: "Structured Cap",
    brand: "void / line",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1400&auto=format&fit=crop",
    category: "Accessories",
    subcategory: "Cap",
    tag: "Accessory",
  },
  {
    id: "a-socks-01",
    name: "Combed Cotton Socks (2‑Pack)",
    brand: "Studio Lintel",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1400&auto=format&fit=crop",
    category: "Accessories",
    subcategory: "Socks",
    tag: "Accessory",
  },
  {
    id: "a-sung-01",
    name: "Acetate Sunglasses",
    brand: "Romance & Noise",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1400&auto=format&fit=crop",
    category: "Accessories",
    subcategory: "Sunglasses",
    tag: "Accessory",
  },
  {
    id: "a-belt-01",
    name: "Matte Leather Belt",
    brand: "atelier N.13",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1520975593575-39e05f2d17e0?q=80&w=1400&auto=format&fit=crop",
    category: "Accessories",
    subcategory: "Belt",
    tag: "Accessory",
  },
]

export default products
