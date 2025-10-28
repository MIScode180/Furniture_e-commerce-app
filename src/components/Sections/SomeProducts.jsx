import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Modern Fabric Sofa",
    price: 18999,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
  },
  {
    id: 2,
    name: "Classic Wooden Dining Set",
    price: 24500,
    image: "/Img/product2.jpeg",
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 7999,
    image: "/Img/product.jpg",
  },
  {
    id: 4,
    name: "Minimalist Coffee Table",
    price: 5499,
    image: "/Img/product01.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">
        Featured Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Link to={`/product/${product.id}`}>
              <figure>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 object-cover rounded-t-lg"
                />
              </figure>
            </Link>

            <div className="card-body">
              <Link to={`/product/${product.id}`}>
                <h3 className="card-title">{product.name}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/products" >
          <button className="btn btn-success ">See More Products</button>
        </Link>
      </div>
    </section>
  );
}
