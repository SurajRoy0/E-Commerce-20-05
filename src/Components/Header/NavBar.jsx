import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./NavBar.module.css";
import CartContext from "../../Store/cart-context";

const Navbar = (props) => {
  const cartCtx = useContext(CartContext);
  const totalCartAmout = cartCtx.items.reduce((currentAmount, item) => {
    return currentAmount + item.amount;
  }, 0);

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logoText}>E-Shop</h2>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Shop
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            About
          </a>
        </li>
        <li onClick={props.onCartOpen} className={styles.navItem}>
          <div className={styles.navLink}>
            Cart
            <span className={styles.cart}>
              <FaShoppingCart className={styles.cartIcon} />
              <span className={styles.cartNumber}>{totalCartAmout}</span>
            </span>
          </div>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Account
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
