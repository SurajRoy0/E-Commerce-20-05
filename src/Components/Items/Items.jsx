import React, { useState } from "react";
import Item from "./Item";
import styles from "./Items.module.css";

const Items = (props) => {
  return (
    <div className={styles.itemContainer}>
      <h1>{props.title}</h1>
      <div className={styles.itemsGrid}>
        {props.products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            details={item.cardDetails}
            image={item.outImage}
            gender={item.gender}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
