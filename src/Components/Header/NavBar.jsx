import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./NavBar.module.css";
import CartContext from "../../Store/cart-context";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import AuthContext from "../../Store/auth-context";
const Navbar = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
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
              isActive ? styles.dropdownToggle : styles.navLink
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to={authCtx.isLoggedIn ? "/products" : "/login"}
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            Products
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
          <DropdownMenu />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
