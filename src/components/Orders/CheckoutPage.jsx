import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrdersLoading, setOrders, setOrdersError } from "../../store/ordersSlice";
import dataConfig from "../../Appwrite/dataConfig"
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import OrderSummary from "../Orders/OrderSummary";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, total } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const [address, setAddress] = useState("");

  const handlePayment = async () => {
    if (!address.trim()) {
      return alert("Please enter your shipping address");
    }

    dispatch(setOrdersLoading(true));
    const fakePaymentId = "PAY-" + Date.now();

    const orderData = {
      orderId: ID.unique(),
      userId: user?.$id,
      items,
      totalAmount: total,
      address,
      status: "Processing",
      paymentId: fakePaymentId,
      createdAt: new Date().toISOString(),
    };

    try {
      await dataConfig.createOrder(orderData.orderId, orderData);
      dispatch(setOrders([orderData]));
      navigate(`/order-success/${orderData.orderId}`);
    } catch (err) {
      dispatch(setOrdersError(err.message));
    } finally {
      dispatch(setOrdersLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-lg shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-primary mb-2">
            Checkout
          </h2>
          <p className="text-sm opacity-70 mb-4">
            Review your items and provide your shipping details.
          </p>

          {/* 🧩 Order Summary Component */}
          <OrderSummary items={items} total={total} />

          {/* 📦 Shipping Address */}
          <label className="form-control w-full mt-4">
            <div className="label">
              <span className="label-text font-medium ">Shipping Address</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Enter your complete address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </label>

          {/* 💳 Payment Button */}
          <div className="card-actions justify-end mt-4">
            <button
              onClick={handlePayment}
              className="btn btn-primary w-full"
            >
              Pay ₹{total} & Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
