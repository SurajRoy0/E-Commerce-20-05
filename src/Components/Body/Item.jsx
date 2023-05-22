import React, { useContext } from "react";

import styles from "./Item.module.css";
import CartContext from "../../Store/cart-context";
const Item = ({ id, title, image, price }) => {
  const cartCtx = useContext(CartContext);

  const onClickAddToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      title: title,
      amount: 1,
      price: price,
      image: image,
    });
  };

  return (
    <div className={styles.Item}>
      <img src={image} alt={title} className={styles["Item-image"]} />
      <h3 className={styles["Item-title"]}>{title}</h3>
      <p className={styles["Item-price"]}>${price}</p>
      <button
        onClick={onClickAddToCartHandler}
        className={styles["add-to-cart-btn"]}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
