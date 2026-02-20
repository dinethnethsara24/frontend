import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link
import axios from "axios";

export function ProductCards() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoading === true) {
      axios
        .get("http://localhost:3000/api/product")
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message || "Failed to load products");
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <div className="w-[50px] h-[50px] border-t-[2px] rounded-full animate-spin" />
        <h2 className="font-bold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-8 min-h-screen text-red-500">
        <div className="text-center">
          <h2 className="font-bold text-lg">Error loading products</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {products.length === 0 ? (
        <div className="col-span-full text-center p-8">
          No products available
        </div>
      ) : (
        products.map((product) => (
          <Link to={"/overview/"+product.productId}
            key={product.productId}
            
            className="block border rounded-md shadow-sm hover:shadow-md transition p-2"
          >
            {product.imgUrls && product.imgUrls.length > 0 && (
              <div className="h-[200px] w-full bg-gray-100 flex items-center justify-center">
                <img
                  src={product.imgUrls[0]}
                  alt={product.productName}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="mt-2 text-center">
              <h3 className="font-semibold text-sm truncate">
                {product.productName}
              </h3>

              <p className="text-xs text-gray-400 line-through">
                Rs.{product.labeledPrice}
              </p>

              <p className="font-bold text-sm text-blue-600">
                Rs.{product.sellingPrice}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`text-sm font-medium ${
                    product.isAvailable && product.stock > 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {product.isAvailable && product.stock > 0
                    ? "In Stock"
                    : "Out of Stock"}
                </span>

                <button
                  disabled={!product.isAvailable || product.stock <= 0}
                  onClick={(e) => e.preventDefault()} // Prevent Link navigation when clicking button
                  className="px-3 py-1 text-sm rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 transition"
                >
                  {product.isAvailable && product.stock > 0
                    ? "Buy Now"
                    : "Unavailable"}
                </button>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}