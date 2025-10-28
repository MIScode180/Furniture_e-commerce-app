import React from "react";
import { Link } from "react-router-dom";

export default function GelleryCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
        <p className="text-gray-700 ">{product.description}</p>
      </div>
    </Link>
  );
}
