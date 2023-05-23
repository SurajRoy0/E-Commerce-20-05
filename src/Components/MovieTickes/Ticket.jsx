import React, { useContext } from "react";

import stylesGrid from "./TicketForGrid.module.css";
import stylesList from "./TicketForList.module.css";
import CartContext from "../../Store/cart-context";
const Item = ({ id, date, image, location, venue, isGrid }) => {
  const cartCtx = useContext(CartContext);
  const layout = isGrid ? stylesList : stylesGrid;

  // const onClickAddToCartHandler = () => {
  //   cartCtx.addItem({
  //     id: id,
  //     title: title,
  //     amount: 1,
  //     price: price,
  //     image: image,
  //   });
  // };

  return (
    <div className={layout["item-container"]}>
      <div className={layout["image-div"]}>
        <img src={image} alt="shows" className={layout.image} />
      </div>
      <span className={layout["item-date"]}>{date}</span>
      <span className={layout["item-location"]}>${location}</span>
      <span className={layout["item-venue"]}>${venue}</span>
      <button
        // onClick={onClickAddToCartHandler}
        className={layout["add-to-cart-btn"]}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
