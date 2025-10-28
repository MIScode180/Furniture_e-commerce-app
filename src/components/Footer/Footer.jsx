import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <footer className="bg-base-200 text-base-content py-10 mt-16 relative">
       {/* Go to Top button (bottom-left corner)  */}
      <button
        onClick={scrollToTop}
        className="absolute left-4 bottom-4 p-3 rounded-full bg-gray-600 hover:bg-gray-500 text-white shadow-md"
      >
        <FaArrowUp />
      </button>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">FurniCraft</h2>
          <p className="text-gray-600">
            Bringing comfort and style to your home with timeless furniture
            designs that suit every lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/home" className="hover:underline">Home</Link></li>
            <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/contactus" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:underline">Shipping Policy</Link></li>
            <li><Link to="/returns" className="hover:underline">Return Policy</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-success text-white rounded-full hover:bg-success-focus"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-success text-white rounded-full hover:bg-success-focus"><FaInstagram /></a>
            <a href="#" className="p-2 bg-success text-white rounded-full hover:bg-success-focus"><FaTwitter /></a>
            <a href="#" className="p-2 bg-success text-white rounded-full hover:bg-success-focus"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FurniSpaces. All rights reserved.
      </div>
    </footer>
  );
}
