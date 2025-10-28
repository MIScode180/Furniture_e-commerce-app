// src/components/Orders/OrderSummary.jsx
import React from "react";

const OrderSummary = ({ items = [], total = 0 }) => {
  // 🧮 Always compute subtotal from items (if available)
  const subtotal =
    items && items.length > 0
      ? items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      : total;

  // 🧾 Tax calculation (5% GST)
  const gst = subtotal * 0.05;
  const grandTotal = subtotal + gst; // Shipping = Free

  return (
    <div className="border border-base-300 rounded-2xl p-5 bg-base-200 shadow-md">
      {/* 🛒 Heading */}
      <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
        🛒 Order Summary
      </h3>

      {/* 🧾 Items List */}
      {items.length > 0 ? (
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-base-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* 🖼️ Product Image */}
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={item.image || "https://via.placeholder.com/80"}
                  alt={item.name || "Product"}
                  className="w-full h-full object-cover rounded-md border"
                />
              </div>

              {/* 🧺 Item Details */}
              <div className="flex-1 ml-3">
                <p className="font-medium text-base">{item.name}</p>
                <p className="text-sm opacity-70">
                  Qty: {item.quantity} × ₹{item.price.toFixed(2)}
                </p>
              </div>

              {/* 💰 Subtotal */}
              <div className="text-right font-semibold text-base">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-center opacity-70">
          Your cart is empty. Add items to continue checkout.
        </p>
      )}

      {/* Divider */}
      <div className="divider my-4"></div>

      {/* 💵 Totals Section */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Shipping:</span>
          <span className="text-success">Free</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Tax (GST 5%):</span>
          <span>₹{gst.toFixed(2)}</span>
        </div>

        <div className="divider my-2"></div>

        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>₹{grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
