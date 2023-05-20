import React from "react";

import styles from "./Item.module.css";
const Item = ({ title, image, price }) => {
  return (
    <div className={styles.Item}>
      <img src={image} alt={title} className={styles["Item-image"]} />
      <h3 className={styles["Item-title"]}>{title}</h3>
      <p className={styles["Item-price"]}>${price}</p>
      <button className={styles["add-to-cart-btn"]}>Add to Cart</button>
    </div>
  );
};

export default Item;
