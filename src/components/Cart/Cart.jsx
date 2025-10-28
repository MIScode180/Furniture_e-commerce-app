import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);

  // 1️⃣ Not logged in
  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="text-center bg-white shadow-lg p-10 rounded-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
            alt="login"
            className="w-28 mx-auto mb-6"
          />
          <h2 className="text-xl font-semibold mb-2">Missing Cart Items?</h2>
          <p className="text-gray-500 mb-6">Login to see items in your cart</p>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  // 2️⃣ Empty Cart
  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="text-center bg-white shadow-lg p-10 rounded-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="empty cart"
            className="w-32 mx-auto mb-6"
          />
          <h2 className="text-xl font-semibold mb-2">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-6">Add items to it now</p>
          <Link
            to="/products"
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* LEFT - CART ITEMS */}
      <div className="md:col-span-2 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-6">My Cart ({items.length})</h2>

        <div className="space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* RIGHT - SUMMARY */}
      <div className="bg-white shadow-md rounded-lg p-4 h-fit">
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
