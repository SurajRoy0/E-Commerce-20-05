import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import styles from "./Home.module.css";
import HeroSection from "../Header/HeroSection";
import Items from "../Items/Items";
import { Link } from "react-router-dom";
import Loader from "../UI/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const productsFetchHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://server-2ezz.onrender.com/Male?_page=1&_limit=8"
      );
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      // Handle the error
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    productsFetchHandler();
  }, [productsFetchHandler]);
  return (
    <>
      <HeroSection />
      <div className={styles.itemsContainer}>
        {isLoading ? (
          <Loader height="400px" width="100%" />
        ) : (
          <>
            <Items title="New Products" products={products} />
            <Link to="products">
              <button className={styles.action}>See More</button>
            </Link>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
