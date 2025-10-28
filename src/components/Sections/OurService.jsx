import React from "react";
import { Link } from "react-router-dom";

export default function OurService() {
  return (
   <div className="bg-base-200 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-500">Our Services</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Bringing comfort, style, and functionality to your home with our
          premium furniture and services.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <h2 className="card-title font-extrabold text-blue-500">Premium Furniture Collection</h2>
              <p>
                Discover stylish, durable, and affordable furniture from
                modern sofas to elegant dining sets crafted for comfort and
                long-lasting beauty.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <h2 className="card-title font-extrabold text-blue-500">Custom Design Solutions</h2>
              <p> 
                Tailor-made furniture designs to perfectly match your home’s
                theme, space, and functionality needs.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <h2 className="card-title font-extrabold text-blue-500">Fast & Reliable Delivery</h2>
              <p>
                Enjoy safe packaging and on-time delivery so you can start using
                your furniture right away.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <h2 className="card-title font-extrabold text-blue-500">Best-Selling Products</h2>
              <p>
                Our top-sellers include recliner chairs, modular sofas,
                ergonomic desks, and rustic dining tables.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <h2 className="card-title font-extrabold text-blue-500">Hassle-Free Returns</h2>
              <p>
                Easy return policies and product warranties to ensure complete
                peace of mind.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <h2 className="card-title font-extrabold text-blue-500">Expert Styling Guidance</h2>
              <p>
                Our interior experts help you pick perfect pieces to elevate
                your living space.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery">
          <button className="btn btn-success ">Explore More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
