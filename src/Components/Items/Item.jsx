import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Item.module.css";
import CartContext from "../../Store/cart-context";
import AuthContext from "../../Store/auth-context";
const Item = ({ id, details, image, price, gender }) => {
  const cartCtx = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  let itemDetails = details;
  const maxLength = 22;
  let truncatedLine = "";

  if (itemDetails && itemDetails.length > maxLength) {
    truncatedLine = itemDetails.substring(0, maxLength) + "...";
  } else {
    truncatedLine = itemDetails;
  }

  const onClickAddToCartHandler = () => {
    if (isLoggedIn) {
      cartCtx.addItem({
        id: id.toString(),
        title: details,
        amount: 1,
        price: price,
        image: image,
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={styles["item-container"]}>
      <Link to={`/product/${id}`} className={styles["image-div"]}>
        <img src={image} alt={details} className={styles.image} />
      </Link>
      <span className={styles["item-details"]}>{truncatedLine}</span>
      <span className={styles["item-gender"]}>{gender}</span>
      <span className={styles["item-price"]}>₹{price}</span>
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
