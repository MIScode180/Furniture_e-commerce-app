import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import dataConfig from "../../Appwrite/dataConfig"

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dataConfig.createContact(formData); // save to Appwrite
      toast.success(" Your Message has been submitted!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-base-100 py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-500">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
            <FaPhoneAlt className="text-success text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+91 0000000444</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
            <FaEnvelope className="text-success text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">support@furniSpaces.com</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
            <FaMapMarkerAlt className="text-success text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Furniture Street, Pune</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto mt-12 bg-white shadow-lg rounded-lg p-8">
          {/* Title */}
          <h3 className="text-lg font-semibold text-center mb-6 text-blue-500">
            Share Your Details and Contact Us
          </h3>

          {/* Form */}
          <form className="space-y-4 font-bold" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full h-32 rounded-lg"
              required
            ></textarea>

            {/* Centered button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-success btn-md rounded-lg px-6 font-medium"
              >
                {loading ? "Submitting..." : "Submit Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
