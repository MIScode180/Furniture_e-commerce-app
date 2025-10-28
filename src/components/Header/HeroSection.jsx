import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="hero bg-base-200 py-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/Img/Hero.jpg" // image from public folder
          alt="Furniture"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-blue-500">
            Where Comfort Meets Timeless Design!
          </h1>
          <p className="py-6">
            "Transform your living space with furniture that blends style,
            comfort, and durability. From modern minimalism to classic elegance,
            our curated collection is crafted to make every room feel like home
            — without compromising on quality or price."
          </p>

 <Link to="/products">
  <button className="btn btn-success flex items-center justify-center gap-2 px-4 py-2 text-base rounded-md">
    <span className="font-medium">Shop the Collection</span>
    <MdKeyboardDoubleArrowRight className="text-lg" />
  </button>
</Link>
        </div>
      </div>
    </div>
  );
}
