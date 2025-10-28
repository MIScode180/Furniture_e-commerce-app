import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmptyOrderCard() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-md w-full max-w-sm sm:max-w-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-14">My Orders</h2>

        {/* Illustration */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076503.png"
            alt="Empty Box"
            className="w-full h-full object-contain"
          />
        </div>

        <p className="text-gray-700 font-medium text-center">
          No order placed yet.
        </p>
        <p className="text-gray-500 text-center text-sm mb-6">
          You have not placed an order yet. Please add items to your cart and
          checkout when you are ready.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="bg-success hover:bg-green-300 text-white font-semibold px-6 py-2 rounded-full shadow-md transition w-full sm:w-auto cursor-pointer"
        >
          Explore Products
        </button>
      </div>
    </div>
  );
}
