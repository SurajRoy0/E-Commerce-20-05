import React, { useContext } from "react";

import stylesGrid from "./ItemForGrid.module.css";
import stylesList from "./ItemForList.module.css";
import CartContext from "../../Store/cart-context";
const Item = ({ id, title, image, price, isGrid }) => {
  const cartCtx = useContext(CartContext);
  const layout = isGrid ? stylesList : stylesGrid;

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
    <div className={layout["item-container"]}>
      <div className={layout["image-div"]}>
        <img src={image} alt={title} className={layout.image} />
      </div>
      <span className={layout["item-title"]}>{title}</span>
      <span className={layout["item-price"]}>${price}</span>
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
