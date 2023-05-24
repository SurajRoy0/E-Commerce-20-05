import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styles from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const { inImage, outImage, cardDetails, price, gender, category, quantity } =
    product;

  const singleProductFetchHandler = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://server-2ezz.onrender.com/Male/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    singleProductFetchHandler();
  }, [singleProductFetchHandler]);

  return (
    <div className={styles.productPage}>
      <div className={styles.productImages}>
        <img src={inImage} alt="Inner View" className={styles.inImage} />
        <img src={outImage} alt="Outer View" className={styles.outImage} />
      </div>
      <div className={styles.productDetails}>
        <h2 className={styles.cardDetails}>{cardDetails}</h2>
        <div className={styles.price}>{`$${price}`}</div>
        <div className={styles.productInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Gender:</span>
            <span className={styles.infoValue}>{gender}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Category:</span>
            <span className={styles.infoValue}>{category}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Quantity:</span>
            <span className={styles.infoValue}>{quantity}</span>
          </div>
        </div>
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
