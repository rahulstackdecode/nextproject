"use client"; // Only if using Next.js 13+ app directory

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
   <div className="pt-20">
     <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-15 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-sm overflow-hidden shadow-md border border-[#ccc] hover:shadow-lg transition duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {product.description}
              </p>
              <p className="text-lg font-bold text-green-600">${product.price}</p>
              <div className="flex justify-between gap-2 mt-1">
                <span className="text-base text-gray-600">Rating:{product.rating}</span>
                <span className="text-base text-gray-600">Stock:{product.stock}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}
