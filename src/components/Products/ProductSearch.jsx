import React from "react";

const ProductSearch = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search products..."
      className="w-full border rounded-lg px-4 py-2 mb-6"
    />
  );
};

export default ProductSearch;
