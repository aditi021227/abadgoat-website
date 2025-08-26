export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-sm">
        <p className="text-neutral-500">© {new Date().getFullYear()} A BAD GOAT. All rights reserved.</p>
      </div>
    </footer>
  )
}
