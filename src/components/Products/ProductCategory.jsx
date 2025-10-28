import React from "react";

const categories = [
  "All",
  "Sofas",
  "Chairs",
  "Tables",
  "Beds",
  "Cabinets",
  "Wardrobes",
  "Lighting",
  "Outdoor Furniture",
];

const ProductCategory = ({ setCategory }) => {
  return (
    <select
      onChange={(e) => setCategory(e.target.value)}
      className="border px-3 py-2 rounded "
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default ProductCategory;
