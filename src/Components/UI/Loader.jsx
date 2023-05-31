import React from "react";
import PropTypes from "prop-types";
import loader from "../../Assets/Loader.gif";
import styles from "./Loader.module.css";

const Loader = ({ height, width }) => {
  const containerStyle = {
    height: height,
    width: width,
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <img className={styles.loader} src={loader} alt="Rolling Loader" />
    </div>
  );
};

Loader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Loader;
