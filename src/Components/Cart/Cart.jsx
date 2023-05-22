import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";

import CartItem from "./CartItem";
import CartContext from "../../Store/cart-context";
const cartElements = [
  {
    id: "i1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: "i2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id: "i3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];
const Cart = (props) => {
  const [cartItems, setCartItems] = useState(cartElements);
  const portalElement = document.getElementById("cart");
  const cartCtx = useContext(CartContext);

  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles["cart-container-blur"]}>
          <div className={styles["cart-container"]}>
            <div className={styles["first-div"]}>
              <h1>Shopping Cart</h1>
              <button onClick={props.onCartClose}>Close</button>
            </div>
            <ul className={styles["second-div"]}>
              {cartCtx.items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onAdd={() => alert("done")}
                  onRemove={() => alert("done")}
                />
              ))}
            </ul>
            <div className={styles["third-div"]}>
              <h2>SubTotal: ₹{cartCtx.totalAmount}</h2>
              <button>Place Order</button>
            </div>
          </div>
        </div>,
        portalElement
      )}
    </>
  );
};

export default Cart;
