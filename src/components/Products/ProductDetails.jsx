import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import toast from "react-hot-toast"; 


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth); // ✅ check login
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/API/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id.toString() === id);
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  // --- Add to Cart Handler ---
  const handleAddToCart = () => {
    // ✅ If not logged in, show message and stop
    if (!isAuthenticated) {
      toast.error("Please login to add items to cart");
      return;
    }

    // ✅ Add to cart and show success toast
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );

    toast.success(`${product.name} added to cart!`);
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-500 mt-2 text-sm uppercase tracking-wide">
            {product.category}
          </p>
          <p className="text-emerald-600 text-2xl font-semibold mt-4">
            ₹{product.price}
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <motion.button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 shadow cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
            <motion.button
              onClick={() => navigate("/checkoutpage")}
              className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
