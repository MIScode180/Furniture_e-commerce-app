import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartSummary = () => {
  const { totalItems, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Free delivery if quantity > 2, else random ₹5–₹10; 0 if cart empty
  const shipping =
    totalPrice === 0
      ? 0
      : totalItems > 2
      ? 0
      : Math.floor(Math.random() * (200 - 5 + 10)) / 5 + 10; 

  const subtotal = totalPrice;
  const grandTotal = subtotal + shipping;

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.info("Cart has been cleared");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between mb-2">
        <p>Subtotal</p>
        <p>₹{subtotal}</p>
      </div>

      <div className="flex justify-between mb-2">
        <p>Shipping</p>
        {/* <p>₹{shipping}</p> */}
       <p>{shipping === 0 ? "Free delivery" : `₹${shipping}`}</p>
      </div>
       <p>More Quantitiy get Free Delivery</p>

      <div className="flex justify-between font-bold text-lg border-t pt-2">
        <p>Total</p>
        <p>₹{grandTotal}</p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <button
          onClick={handleClearCart}
          className="w-full py-2 bg-red-500 text-white rounded-4xl cursor-pointer"
        >
          Clear Cart
        </button>
        <button 
        onClick={() => navigate("/checkoutpage")}
        className="w-full py-2 bg-success text-white rounded-2xl cursor-pointer"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
