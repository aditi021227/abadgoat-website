// src/state/useCart.ts
import { useContext } from "react";
import { CartContext } from "./cartContext";
import type { CartContextType } from "./cartContext";

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
