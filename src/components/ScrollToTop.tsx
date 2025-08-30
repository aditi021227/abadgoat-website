// src/components/ScrollToTop.tsx
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Scrolls the window to the top whenever the route changes.
 * Instant jump (no smooth animation).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0) // 👈 instant jump
  }, [pathname])

  return null
}
