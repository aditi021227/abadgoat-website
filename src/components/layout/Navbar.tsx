import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-black tracking-tight text-xl md:text-2xl">
          A BAD GOAT
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase">
          <Link to="/shop" className="hover:opacity-70">Shop</Link>
          <Link to="/editorial" className="hover:opacity-70">Editorial</Link>
          <Link to="/about" className="hover:opacity-70">About</Link>

          {/* 👇 New Login button */}
          <Link
            to="/login"
            className="ml-6 rounded-lg border px-3 py-1.5 text-xs font-semibold uppercase hover:bg-black hover:text-white transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
