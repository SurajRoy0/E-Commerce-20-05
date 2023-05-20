import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./NavBar.module.css";

const Navbar = () => {
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
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            <span className={styles.cartIcon}>
              <FaShoppingCart />
            </span>
            Cart
          </a>
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
