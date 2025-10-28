import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="bg-base-100 py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <img
            src="/Img/Aboutus.jpg"
            alt="About Our Company"
            className="w-full max-w-sm object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1 justify-center text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-500">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4 font-medium">
            Welcome to{" "}
            <span className="font-extrabold text-blue-500">FurniSpaces</span>{" "}
            where style meets comfort. We are passionate about creating
            beautiful and durable furniture that transforms houses into homes.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4 font-medium">
            With years of experience in the industry, our mission is to provide
            high-quality, affordable, and timeless designs that suit every taste
            and lifestyle. From cozy sofas to elegant dining sets, each piece is
            crafted with care and attention to detail.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Your home is a reflection of your personality — and we are here to
            help you make it truly yours.
          </p>
          <Link to="/fullaboutus" className="inline-block">
            <button className="btn btn-success mt-6">Know More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
