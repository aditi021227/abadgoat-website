import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"

import Menswear from "./pages/Menswear"
import Womenswear from "./pages/Womenswear"
import Accessories from "./pages/Accessories"
import Designers from "./pages/Designers"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menswear" element={<Menswear />} />
            <Route path="/womenswear" element={<Womenswear />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/designers" element={<Designers />} />
            {/* keep your other routes here, e.g. <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
