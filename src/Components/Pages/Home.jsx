import React from "react";

import styles from "./Home.module.css";
import AvailableShows from "../MovieTickes/AvailableShows";
import HeroSection from "../Header/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.itemsContainer}>
        <AvailableShows title="Available Shows" />
      </div>
    </>
  );
};

export default Home;
