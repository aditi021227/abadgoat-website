import { useParams } from "react-router-dom";
export default function Subcategory(){
  const { category, subcategory } = useParams();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-black uppercase">{category} / {subcategory}</h1>
      <p className="mt-2 text-neutral-600">Subcategory listing with filters.</p>
    </div>
  );
}
