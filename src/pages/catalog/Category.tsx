import { Link } from "react-router-dom";
import products from "../../data/product";

export default function Category() {
  // Example: show all products (later filter by category)
  const categoryProducts = products;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Category</h1>

        {categoryProducts.length === 0 ? (
          <p className="text-gray-600">No products available in this category.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categoryProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mb-3 h-40 w-full rounded-md object-cover"
                />
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600">₹{product.price}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
