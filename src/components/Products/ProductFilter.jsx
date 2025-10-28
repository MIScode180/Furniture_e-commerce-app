import React from "react";

const ProductFilter = ({ categories, selected, onChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6 ">
      <button
        onClick={() => onChange("All")}
        className={`px-4 py-2 rounded-lg cursor-pointer ${
          selected === "All" ? "bg-emerald-500 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            selected === cat ? "bg-emerald-500 text-white" : "bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;
