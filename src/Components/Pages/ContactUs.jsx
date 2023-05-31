import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const sendContactDataHandler = async (data) => {
    try {
      const response = await axios.post(
        "https://react-e-commerce-sharpener-default-rtdb.asia-southeast1.firebasedatabase.app/contact-info.json",
        data
      );
      const responseData = await response.data;
      toast.success("🦄 Query Sent Successfully", {
        position: "bottom-right",
        theme: "colored",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInfo = name.trim();
    const emailInfo = email.trim();
    const phoneInfo = phone.trim();
    const descriptionInfo = description.trim();
    const contactData = { nameInfo, emailInfo, phoneInfo, descriptionInfo };
    sendContactDataHandler(contactData);
    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
