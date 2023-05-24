import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styles from "./Products.module.css";
import Items from "../Items/Items";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get("https://server-2ezz.onrender.com/Male");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (products.length > 0) {
      filterProducts();
    }
  }, [selectedCategory, selectedPriceRange, selectedGender, products]);

  useEffect(() => {
    const availableCategories = products.map((item) => item.category);
    const uniqueCategories = [...new Set(availableCategories)];
    setCategories(uniqueCategories);
  }, [products]);

  const filterProducts = () => {
    console.log("run");
    let afterFilter = products;
    if (selectedCategory) {
      afterFilter = products.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedPriceRange) {
      const priceRangeInArray = selectedPriceRange.split("-");
      afterFilter = products.filter(
        (product) =>
          product.price >= +priceRangeInArray[0] &&
          product.price <= +priceRangeInArray[1]
      );
    }

    if (selectedGender) {
      afterFilter = products.filter(
        (product) => product.gender === selectedGender
      );
    }

    setFilteredProducts(afterFilter);
  };

  return (
    <div className={styles.products}>
      <div className={styles.filters}>
        <h3>Filters</h3>
        <div className={styles["filter-option"]}>
          <label>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className={styles["filter-option"]}>
          <label>Price Range:</label>
          <select
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="1-200">₹1 - ₹200</option>
            <option value="200-500">₹200 - ₹500</option>
            <option value="500-1000">₹500 - ₹1000</option>
            <option value="1000-5000">₹1000 - ₹5000</option>
            <option value="5000-10000">₹5000 - ₹10000</option>
            <option value="10000-30000">₹10000 - ₹30000</option>
          </select>
        </div>

        <div className={styles["filter-option"]}>
          <label>Gender:</label>
          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      <div className={styles.filteredProducts}>
        <Items title="Products" products={filteredProducts} />
      </div>
    </div>
  );
};

export default Products;
