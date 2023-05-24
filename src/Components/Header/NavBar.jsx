import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./NavBar.module.css";
import CartContext from "../../Store/cart-context";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const cartCtx = useContext(CartContext);
  const totalCartAmout = cartCtx.items.reduce((currentAmount, item) => {
    return currentAmount + item.amount;
  }, 0);

  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink to="/" className={styles.navLink}>
          <h2 className={styles.logoText}>E-Shop</h2>
        </NavLink>
      </div>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            Shop
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            Contact Us
          </NavLink>
        </li>
        <li onClick={props.onCartOpen} className={styles.navItem}>
          <div className={`${styles.navLink} ${styles.navLinkCart}`}>
            Cart
            <span className={styles.cart}>
              <FaShoppingCart className={styles.cartIcon} />
              <span className={styles.cartNumber}>{totalCartAmout}</span>
            </span>
          </div>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="account"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
