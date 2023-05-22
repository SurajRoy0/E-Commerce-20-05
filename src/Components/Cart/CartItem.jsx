import React from "react";

import styles from "./CartItem.module.css";
const CartItem = ({ item, onAdd, onRemove }) => {
  return (
    <li className={styles["cart-item"]}>
      <div className={styles.item}>
        <img src={item.image} alt={item.name} />
        <div className={styles["item-details"]}>
          <span className={styles["item-name"]}>{item.title}</span>
          <div>
            <span className={styles["item-price"]}>₹{item.price} </span>
            <span className={styles["item-amount"]}>x {item.amount}</span>
          </div>
        </div>
      </div>
      <div className={styles["item-actions"]}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
