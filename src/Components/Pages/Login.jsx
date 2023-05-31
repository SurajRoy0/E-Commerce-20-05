import React, { useState } from "react";
import styles from "./Login.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform login logic here
    console.log("Login with email:", email, "and password:", password);
    let url = "";
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBeSi2w1NNvI50LiGfg6jvfn6h6LaRfvIg";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBeSi2w1NNvI50LiGfg6jvfn6h6LaRfvIg";
    }

    try {
      const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      });
      console.log("Response:", response.data);
      if (isLogin) {
        navigate("/products");
      } else {
        setIsLogin(true);
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const createNewAccountHandler = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {isLogin ? "Login" : "Create New Account"}
      </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <div className={styles["password-container"]}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={styles.input}
              required
            />
            <span
              className={styles.passwordToggleButton}
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <FiEyeOff className={styles.icon} />
              ) : (
                <FiEye className={styles.icon} />
              )}
            </span>
          </div>
        </div>
        <div className={styles["button-div"]}>
          <button type="submit" className={styles.button}>
            {isLogin ? "Login" : "Create Account"}
          </button>
        </div>
      </form>
      <div className={styles.create}>
        {isLogin ? (
          <p onClick={createNewAccountHandler}>Create a new accoun?</p>
        ) : (
          <p onClick={createNewAccountHandler}>Already have an account?</p>
        )}
      </div>
    </div>
  );
};

export default Login;
