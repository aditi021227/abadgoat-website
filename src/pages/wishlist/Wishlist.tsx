import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../state/useCart";  // ✅ hook import

// Local WishlistItem type (or move to wishlistTypes.ts if you prefer consistency)
type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const initialWishlist: WishlistItem[] = [
  {
    id: "1",
    name: "Black Leather Jacket",
    price: 3499,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "2",
    name: "Red Sneakers",
    price: 1999,
    image: "https://via.placeholder.com/100",
  },
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(initialWishlist);
  const { addToCart } = useCart();

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const moveToCart = (item: WishlistItem) => {
    addToCart({ ...item, quantity: 1 }); // ✅ compatible with CartItem
    removeFromWishlist(item.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">My Wishlist ❤️</h1>

        {wishlist.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-gray-600">Your wishlist is empty.</p>
            <Link
              to="/"
              className="mt-4 inline-block rounded-lg bg-black px-6 py-2 text-white hover:bg-gray-800"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg border p-4 shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => moveToCart(item)}
                    className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
