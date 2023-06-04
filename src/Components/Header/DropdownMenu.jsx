import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import {
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";
import AuthContext from "../../Store/auth-context";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = ({ handleMenuToggle }) => {
  const authCtx = useContext(AuthContext);

  const closeDropdown = () => {
    handleMenuToggle();
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
        <NavLink
          to="/login"
          className={styles.dropdownItem}
          onClick={logoutHandler}
        >
          <FiLogOut className={styles.dropdownIcon} />
          Logout
        </NavLink>
      )}
    </div>
  );
};

export default DropdownMenu;
