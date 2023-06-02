import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
import AuthContext from "../../Store/auth-context";

const HeroSection = () => {
  const authCtx = useContext(AuthContext);
  const path = authCtx.isLoggedIn ? "/products" : "/login";

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Our Online Store</h1>
        <p className={styles.heroSubtitle}>
          Discover the Best Deals on Your Favorite Products
        </p>
        <Link to={path} className={styles.heroButton}>
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
