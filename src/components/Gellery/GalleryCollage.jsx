// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function GalleryCollage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/API/products.json")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.slice(0, 15))) // take 15 items for collage
//       .catch((err) => console.error("Error loading products:", err));
//   }, []);

//   return (
//     <section className="py-20 bg-base-100">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-14">
//           Discover Our Furniture World
//         </h2>

//         <div className="grid grid-cols-6 auto-rows-[250px] gap-6">
//           {products.map((product, i) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.05, duration: 0.6 }}
//               whileHover={{ scale: 1.05 }}
//               className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer
//                 ${i % 7 === 0 ? "col-span-3 row-span-2" : "col-span-2 row-span-1"}`}
//             >
//               <Link to={`/products/${product.id}`} className="block h-full w-full">
//                 {/* Image */}
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 {/* Overlay Info */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4">
//                   <h3 className="text-lg font-semibold text-white">{product.name}</h3>
//                   <p className="text-sm text-gray-200 line-clamp-2">
//                     {product.description}
//                   </p>
//                   <span className="text-blue-400 font-bold mt-1">{product.price}</span>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GalleryCollage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/API/products.json")
      .then((res) => res.json())
      .then((data) => {
        // Shuffle array
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        // Pick 18 random products (variety each reload)
        setProducts(shuffled.slice(0, 18));
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-14">
          Discover Our Furniture World
        </h2>

        <div className="grid grid-cols-6 auto-rows-[250px] gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer
                ${i % 7 === 0 ? "col-span-3 row-span-2" : "col-span-2 row-span-1"}`}
            >
              <Link to={`/products/${product.id}`} className="block h-full w-full">
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {product.description}
                  </p>
                  <span className="text-blue-400 font-bold mt-1">
                    ₹{product.price}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
                                                                      