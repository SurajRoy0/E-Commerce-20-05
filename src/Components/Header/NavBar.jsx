import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart, FaBars, FaHome } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import styles from "./NavBar.module.css";
import CartContext from "../../Store/cart-context";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import AuthContext from "../../Store/auth-context";

const Navbar = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalCartAmount = cartCtx.items.reduce(
    (currentAmount, item) => currentAmount + item.amount,
    0
  );
  const navClass = !isMenuOpen ? `${styles.navClose}` : ``;
  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink to="/" className={styles.navLink}>
          <h2 className={styles.logoText}>E-Shop</h2>
        </NavLink>
      </div>
      <ul className={`${styles.navbarNav} ${navClass}`}>
        <li className={styles.navItem} onClick={handleMenuToggle}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
            end
          >
            <FaHome className={styles.menuIcons} />
            Home
          </NavLink>
        </li>
        <li className={styles.navItem} onClick={handleMenuToggle}>
          <NavLink
            to={authCtx.isLoggedIn ? "/products" : "/login"}
            className={({ isActive }) =>
              authCtx.isLoggedIn && isActive
                ? styles.activeNavLink
                : styles.navLink
            }
          >
            <MdShoppingCart className={styles.menuIcons} />
            Products
          </NavLink>
        </li>
        <li className={styles.navItem} onClick={handleMenuToggle}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <AiOutlineInfoCircle className={styles.menuIcons} />
            About
          </NavLink>
        </li>
        <li onClick={handleMenuToggle}>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <FiMail className={styles.menuIcons} />
            Contact Us
          </NavLink>
        </li>
        <li
          onClick={props.onCartOpen}
          className={`${styles.navItem} ${styles.cartNav}`}
        >
          <div className={`${styles.navLink} ${styles.navLinkCart}`}>
            Cart
            <span className={styles.cart}>
              <FaShoppingCart className={styles.cartIcon} />
              <span className={styles.cartNumber}>{totalCartAmount}</span>
            </span>
          </div>
        </li>
        <li className={`${styles.navItem} ${styles["drop-down-menu"]}`}>
          <DropdownMenu handleMenuToggle={handleMenuToggle} />
        </li>
      </ul>

      <div className={styles.mobileMenu}>
        <span onClick={props.onCartOpen} className={styles.navItem}>
          <div className={`${styles.navLink} ${styles.navLinkCart}`}>
            Cart
            <span className={styles.cart}>
              <FaShoppingCart className={styles.cartIcon} />
              <span className={styles.cartNumber}>{totalCartAmount}</span>
            </span>
          </div>
        </span>
        {isMenuOpen ? (
          <span onClick={handleMenuToggle} className={styles.clsoeMenu}>
            Close
          </span>
        ) : (
          <div className={styles.menuIcon} onClick={handleMenuToggle}>
            <FaBars />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
