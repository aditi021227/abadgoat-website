// src/state/cartContext.tsx
import { createContext } from "react";
import type { CartItem } from "./cartTypes";

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);
