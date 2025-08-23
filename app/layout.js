import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import Navbar from "@/app/Components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
