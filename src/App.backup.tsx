import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"

// Catalog
import Category from "./pages/catalog/Category"
import Subcategory from "./pages/catalog/Subcategory"

// Product
import ProductDetail from "./pages/product/ProductDetail"

// Cart / Checkout / Order
import Cart from "./pages/cart/Cart"
import Checkout from "./pages/checkout/Checkout"
import OrderConfirmation from "./pages/order/OrderConfirmation"

// Auth / Account / Wishlist
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
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
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Core shopping */}
            <Route path="/category/:category" element={<Category />} />
            <Route path="/category/:category/:subcategory" element={<Subcategory />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Shopping flow */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order/:orderId" element={<OrderConfirmation />} />

            {/* User */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<AccountDashboard />} />
            <Route path="/wishlist" element={<Wishlist />} />

            {/* Info/utility */}
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
  )
}
