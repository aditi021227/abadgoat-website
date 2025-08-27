import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 text-center">
      <h1 className="text-6xl font-black uppercase">404</h1>
      <p className="mt-3 text-neutral-600">Page not found.</p>
      <Link to="/" className="inline-block mt-6 border-b border-black pb-1 uppercase text-sm tracking-widest">Back Home</Link>
    </div>
  );
}
