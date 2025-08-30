import { useParams } from "react-router-dom";
import { useCart } from "../../state/useCart";   // ✅ hook import
import products from "../../data/product";
import type { CartItem } from "../../state/cartTypes"; // ✅ type-only import

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-600">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-md grid gap-8 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl object-cover shadow-sm"
        />

        <div>
          <h1 className="mb-4 text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="mb-4 text-xl font-semibold text-gray-700">₹{product.price}</p>
          {product.description && (
            <p className="mb-6 text-gray-600">{product.description}</p>
          )}

          <button
            onClick={handleAddToCart}
            className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
