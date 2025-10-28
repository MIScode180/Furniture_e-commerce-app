


// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { addToCart } from "../../store/cartSlice";
// // import toast from "react-hot-toast"; // ✅ use hot-toast

// // const ProductCard = ({ product }) => {
// //   const dispatch = useDispatch();
// //   const { isAuthenticated } = useSelector((state) => state.auth);

// //   const handleAddToCart = () => {
// //     if (!isAuthenticated) {
// //       toast("Please login to add items to cart"); // info style optional
// //       return;
// //     }

// //     dispatch(addToCart(product));
// //     toast.success(`${product.name} added to cart`);
// //   };

// //   return (
// //     <div className="border rounded-xl shadow hover:shadow-lg p-3 flex flex-col">
// //       <img
// //         src={product.image}
// //         alt={product.name}
// //         className="h-48 w-full object-cover rounded-lg"
// //       />

// //       <div className="mt-3 flex-1">
// //         <h3 className="font-semibold text-lg">{product.name}</h3>
// //         <p className="text-gray-600 text-sm">{product.category}</p>
// //         <p className="text-emerald-600 font-bold mt-1">₹{product.price}</p>
// //       </div>

// //       <div className="mt-3 flex flex-col gap-2">
// //         {/* View Details */}
// //         <Link
// //           to={`/products/${product.id}`}
// //           className="text-center bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
// //         >
// //           View Details
// //         </Link>

// //         {/* Add to Cart */}
// //         <button
// //           onClick={handleAddToCart}
// //           className="text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
// //         >
// //           Add to Cart
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;



// import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../store/cartSlice";
// import toast, { Toaster } from "react-hot-toast"; // ✅ hot-toast

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((state) => state.auth);

//   const handleAddToCart = () => {
//     if (!isAuthenticated) {
//       toast("Please login to add items to cart"); // normal toast
//       return;
//     }

//     // Dispatch cart item
//     dispatch(
//       addToCart({
//         ...product,
//         quantity: 1, // always include quantity
//       })
//     );

//     // ✅ Show success toast
//     toast.success(`${product.name} added to cart!`);
//   };

//   return (
//     <div className="border rounded-xl shadow hover:shadow-lg p-3 flex flex-col">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="h-48 w-full object-cover rounded-lg"
//       />

//       <div className="mt-3 flex-1">
//         <h3 className="font-semibold text-lg">{product.name}</h3>
//         <p className="text-gray-600 text-sm">{product.category}</p>
//         <p className="text-emerald-600 font-bold mt-1">₹{product.price}</p>
//       </div>

//       <div className="mt-3 flex flex-col gap-2">
//         <Link
//           to={`/products/${product.id}`}
//           className="text-center bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
//         >
//           View Details
//         </Link>

//         <button
//           onClick={handleAddToCart}
//           className="text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import toast from "react-hot-toast"; // ✅ hot-toast

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast("Please login to add items to cart");
      return;
    }

    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );

    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="border rounded-xl shadow hover:shadow-lg p-3 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-lg"
      />

      <div className="mt-3 flex-1">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.category}</p>
        <p className="text-emerald-600 font-bold mt-1">₹{product.price}</p>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <Link
          to={`/products/${product.id}`}
          className="text-center bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
        >
          View Details
        </Link>

        <button
          onClick={handleAddToCart}
          className="text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
