export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a className="font-black tracking-tight text-xl md:text-2xl" href="/">A BAD GOAT</a>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase">
          <a href="#shop" className="hover:opacity-70">Shop</a>
          <a href="#editorial" className="hover:opacity-70">Editorial</a>
          <a href="#about" className="hover:opacity-70">About</a>
        </nav>
      </div>
    </header>
  )
}
