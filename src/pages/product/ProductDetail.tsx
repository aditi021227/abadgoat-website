import { useParams } from "react-router-dom";
export default function ProductDetail(){
  const { id } = useParams();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-black uppercase">Product {id}</h1>
      <p className="mt-2 text-neutral-600">Gallery, sizes, add to cart.</p>
    </div>
  );
}
