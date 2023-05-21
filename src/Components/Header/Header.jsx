import React from "react";

import styles from "./Header.module.css";
import Navbar from "./NavBar";
import HeroSection from "./HeroSection";
const Header = (props) => {
  return (
    <div>
      <Navbar onCartOpen={props.onCartOpen} />
      <HeroSection />
    </div>
  );
};

export default Header;
