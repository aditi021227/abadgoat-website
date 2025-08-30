// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import ScrollToTop from "./components/ScrollToTop"

// State Providers
import { CartProvider } from "./state/CartProvider" // ✅ import provider

// Pages
import Home from "./pages/Home"
import Menswear from "./pages/Menswear"
import Womenswear from "./pages/Womenswear"
import Accessories from "./pages/Accessories"
import Designers from "./pages/Designers"
import Editorial from "./pages/editorial/editorial"


// Catalog
import Category from "./pages/catalog/Category"
import Subcategory from "./pages/catalog/Subcategory"

// Product
import ProductDetail from "./pages/product/ProductDetail"

// Cart / Checkout / Order
import Cart from "./pages/cart/Cart"
import Checkout from "./pages/checkout/Checkout"
import OrderConfirmation from "./pages/order/OrderConfirmation"

// Auth
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

// Account & Wishlist
import AccountDashboard from "./pages/account/AccountDashboard"
import Wishlist from "./pages/wishlist/Wishlist"

// Static
import About from "./pages/static/About"
import Contact from "./pages/static/Contact"
import FAQ from "./pages/static/FAQ"
import ShippingReturns from "./pages/static/ShippingReturns"
import Privacy from "./pages/static/Privacy"
import Terms from "./pages/static/Terms"

// Errors
import NotFound from "./pages/errors/NotFound"

export default function App() {
  return (
    <CartProvider> {/* ✅ Wrap whole app inside CartProvider */}
      <BrowserRouter>
        {/* 👇 ensure scroll resets on every route change */}
        <ScrollToTop />

        <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
          <Navbar />

          <main>
            <Routes>
              {/* Home & Editorial */}
              <Route path="/" element={<Home />} />
              <Route path="/menswear" element={<Menswear />} />
              <Route path="/womenswear" element={<Womenswear />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/designers" element={<Designers />} />
              <Route path="/editorial" element={<Editorial />} />

              {/* Catalog */}
              <Route path="/category/:category" element={<Category />} />
              <Route path="/category/:category/:subcategory" element={<Subcategory />} />

              {/* Product */}
              <Route path="/product/:id" element={<ProductDetail />} />

              {/* Cart / Checkout / Order */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order/:orderId" element={<OrderConfirmation />} />

              {/* Auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Account & Wishlist */}
              <Route path="/account" element={<AccountDashboard />} />
              <Route path="/wishlist" element={<Wishlist />} />

              {/* Static */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/shipping-returns" element={<ShippingReturns />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}
