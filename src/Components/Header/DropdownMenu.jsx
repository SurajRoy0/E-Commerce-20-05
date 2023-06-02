import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";
import AuthContext from "../../Store/auth-context";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authCtx = useContext(AuthContext);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const logoutHandler = () => {
    closeDropdown();
    authCtx.logout();
  };

  return (
    <div className={styles.dropdown}>
      {!authCtx.isLoggedIn ? (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.dropdownToggle
          }
          onClick={closeDropdown}
        >
          <FiUser className={styles.dropdownIcon} />
          Login
        </NavLink>
      ) : (
        <>
          <p className={styles.dropdownToggle} onClick={toggleDropdown}>
            Account <FiChevronDown />
          </p>
          {isOpen && (
            <div
              className={styles.dropdownContent}
              onMouseLeave={closeDropdown}
            >
              <NavLink
                to="/orders"
                className={styles.dropdownItem}
                onClick={closeDropdown}
              >
                <FiShoppingBag className={styles.dropdownIcon} />
                Orders
              </NavLink>
              <NavLink
                to="/wishlists"
                className={styles.dropdownItem}
                onClick={closeDropdown}
              >
                <FiHeart className={styles.dropdownIcon} />
                Wishlists
              </NavLink>
              <NavLink
                to="/login"
                className={styles.dropdownItem}
                onClick={logoutHandler}
              >
                <FiLogOut className={styles.dropdownIcon} />
                Logout
              </NavLink>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DropdownMenu;
