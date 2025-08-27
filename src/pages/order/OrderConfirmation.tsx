import { useParams } from "react-router-dom";
export default function OrderConfirmation(){
  const { orderId } = useParams();
  return <div className="mx-auto max-w-7xl px-4 py-16"><h1 className="text-3xl font-black uppercase">Order #{orderId}</h1></div>;
}
