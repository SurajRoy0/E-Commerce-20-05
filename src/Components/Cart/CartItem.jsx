import React from "react";
import styles from "./CartItem.module.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, onAdd, onRemove, onCartClose }) => {
  const goToProductHandler = () => {
    onCartClose();
  };

  return (
    <li className={styles["cart-item"]}>
      <Link
        to={`/product/${item.id}`}
        onClick={goToProductHandler}
        className={styles.link}
      >
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
      </Link>
      <div className={styles["item-actions"]}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
