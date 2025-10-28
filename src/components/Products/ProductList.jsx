import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import ProductSearch from "./ProductSearch";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    fetch("/API/products.json") // put products.json in /public
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filtered = products
    .filter((p) =>
      category === "All" ? true : p.category === category
    )
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <ProductSearch value={search} onChange={setSearch} />

      <div className="flex items-center justify-between mb-6 cursor-pointer">
        <ProductFilter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />

        {/* Sorting */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="default">Sort by</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
