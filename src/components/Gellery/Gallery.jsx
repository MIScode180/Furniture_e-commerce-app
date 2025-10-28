import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import GelleryCard from "../Gellery/GelleryCard";

export default function Gallery() {
  const [products, setProducts] = useState([]);

  // Load products.json from public/API folder
  useEffect(() => {
    fetch("/API/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
          Explore Our Collection
        </h2>

        {products.length > 0 ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={products.length > 3} // ✅ Enable loop only if enough slides
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <GelleryCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">Loading products...</p>
        )}
      </div>
    </section>
  );
}
