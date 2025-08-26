import React from "react"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"

// Tailwind is already imported in main.tsx via "./styles/globals.css"

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}
