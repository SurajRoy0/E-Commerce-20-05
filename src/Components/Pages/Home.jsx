import React from "react";

import styles from "./Home.module.css";
import Items from "../Items/Items";
import HeroSection from "../Header/HeroSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.itemsContainer}>
        <h1>New Products</h1>
        <Items />
      </div>
    </>
  );
};

export default Home;
