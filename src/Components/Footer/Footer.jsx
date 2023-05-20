import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <ul className={styles.footerLinks}>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}>
            <FaFacebookF />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaTwitter />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaInstagram />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
