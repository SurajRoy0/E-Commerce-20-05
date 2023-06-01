import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import stylesGrid from "./ItemForGrid.module.css";
import stylesList from "./ItemForList.module.css";
import CartContext from "../../Store/cart-context";
import AuthContext from "../../Store/auth-context";
const Item = ({ id, details, image, price, isGrid, gender }) => {
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

  const layout = isGrid ? stylesList : stylesGrid;

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
    <div className={layout["item-container"]}>
      <Link to={`/product/${id}`} className={layout["image-div"]}>
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
