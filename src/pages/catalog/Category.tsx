import { useParams } from "react-router-dom";
export default function Category(){
  const { category } = useParams();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-black uppercase">{(category||"").replace("-", " ")}</h1>
      <p className="mt-2 text-neutral-600">Category listing grid goes here.</p>
    </div>
  );
}
