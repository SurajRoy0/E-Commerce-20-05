import React from "react";

import styles from "./Header.module.css";
import Navbar from "./NavBar";
import HeroSection from "./HeroSection";
const Header = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;
