import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";
import styles from "./DropdownMenu.module.css";
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <p className={styles.dropdownToggle} onClick={toggleDropdown}>
        Account <FiChevronDown />
      </p>
      {isOpen && (
        <div className={styles.dropdownContent} onMouseLeave={closeDropdown}>
          <NavLink
            to="/login"
            className={styles.dropdownItem}
            activeClassName={styles.activeDropdownItem}
            onClick={closeDropdown}
          >
            <FiUser className={styles.dropdownIcon} />
            Login
          </NavLink>
          <NavLink
            to="/orders"
            className={styles.dropdownItem}
            activeClassName={styles.activeDropdownItem}
            onClick={closeDropdown}
          >
            <FiShoppingBag className={styles.dropdownIcon} />
            Orders
          </NavLink>
          <NavLink
            to="/wishlists"
            className={styles.dropdownItem}
            activeClassName={styles.activeDropdownItem}
            onClick={closeDropdown}
          >
            <FiHeart className={styles.dropdownIcon} />
            Wishlists
          </NavLink>
          <NavLink
            to="/logout"
            className={styles.dropdownItem}
            activeClassName={styles.activeDropdownItem}
            onClick={closeDropdown}
          >
            <FiLogOut className={styles.dropdownIcon} />
            Logout
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
