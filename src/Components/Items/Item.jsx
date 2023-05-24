import React, { useContext } from "react";
import { Link } from "react-router-dom";

import stylesGrid from "./ItemForGrid.module.css";
import stylesList from "./ItemForList.module.css";
import CartContext from "../../Store/cart-context";
const Item = ({ id, details, image, price, isGrid, gender }) => {
  const cartCtx = useContext(CartContext);

  let itemDetails = details;
  const maxLength = 22;
  let truncatedLine = "";

  if (itemDetails && itemDetails.length > maxLength) {
    truncatedLine = itemDetails.substring(0, maxLength) + "...";
  } else {
    truncatedLine = itemDetails;
  }

  const layout = isGrid ? stylesList : stylesGrid;

  const onClickAddToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      title: details,
      amount: 1,
      price: price,
      image: image,
    });
  };

  return (
    <div className={layout["item-container"]}>
      <Link to={`product/${id}`} className={layout["image-div"]}>
        <img src={image} alt={details} className={layout.image} />
      </Link>
      <span className={layout["item-details"]}>{truncatedLine}</span>
      <span className={layout["item-gender"]}>{gender}</span>
      <span className={layout["item-price"]}>₹{price}</span>
      <button
        onClick={onClickAddToCartHandler}
        className={layout["add-to-cart-btn"]}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
