import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";

import CartItem from "./CartItem";
import CartContext from "../../Store/cart-context";
import { ToastContainer, toast } from "react-toastify";
import AuthContext from "../../Store/auth-context";
import { Link, useNavigate } from "react-router-dom";

const Cart = (props) => {
  const portalElement = document.getElementById("cart");
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const onOrderHandler = () => {
    cartCtx.removeAllItems();
    toast.success("Ordered Successfully", {
      position: "top-center",
      theme: "colored",
    });
  };

  const redirectToLoginHandler = () => {
    props.onCartClose();
    navigate("/login");
  };

  const onAddButton = (item) => {
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      amount: 1,
      price: item.price,
      image: item.image,
    });
  };

  const onRemoveButton = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles["cart-container-blur"]}>
          <div className={styles["cart-container"]}>
            <div className={styles["first-div"]}>
              <h2>Shopping Cart</h2>
              <button onClick={props.onCartClose}>Close</button>
            </div>
            <ul className={styles["second-div"]}>
              {cartCtx.items?.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onAdd={() => onAddButton(item)}
                  onRemove={() => onRemoveButton(item.id)}
                  onCartClose={props.onCartClose}
                />
              ))}
            </ul>
            {cartCtx.items?.length !== 0 && (
              <div className={styles["third-div"]}>
                <h2>SubTotal: ₹{cartCtx.totalAmount}</h2>
                <button onClick={onOrderHandler}>Place Order</button>
              </div>
            )}
            {!authCtx.isLoggedIn && (
              <button onClick={redirectToLoginHandler} className={styles.login}>
                Login
              </button>
            )}
            {cartCtx.items?.length === 0 && authCtx.isLoggedIn && (
              <h2 className={styles.empty}>Empty</h2>
            )}
          </div>
          <ToastContainer />
        </div>,
        portalElement
      )}
    </>
  );
};

export default Cart;
