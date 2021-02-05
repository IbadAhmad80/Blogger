import React, { useState } from "react";
import styles from "../../styles/Contact.module.scss";

export default function Form() {
  const [formData, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
    contact: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.contact_form}>
      <h6 className={styles.contact_heading}>Send Your Query Through</h6>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input_field}
          type="text"
          value={formData.firstName}
          onChange={(e) => setData({ ...formData, firstName: e.target.value })}
          pattern="[A-Za-z]{1,12}"
          required
          placeholder="First Name (1-12 char)"
        />

        <input
          className={styles.input_field}
          type="text"
          value={formData.lastName}
          onChange={(e) => setData({ ...formData, lastName: e.target.value })}
          pattern="[A-Za-z]{1,12}"
          required
          placeholder="Last Name (1-12 char)"
        />
        <br />
        <input
          className={styles.input_field}
          type="email"
          value={formData.email}
          onChange={(e) => setData({ ...formData, email: e.target.value })}
          required
          placeholder="Your Email"
        />
        <input
          className={styles.input_field}
          type="tel"
          pattern="^\d{3}-\d{3}-\d{4}$"
          value={formData.contact}
          onChange={(e) => setData({ ...formData, contact: e.target.value })}
          required
          placeholder="Phone No (xxx-xxx-xxxx) "
        />
        <br />
        <textarea
          className={styles.message}
          type="text"
          value={formData.message}
          onChange={(e) => setData({ ...formData, message: e.target.value })}
          pattern="[A-Za-z]{1,300}"
          required
          placeholder="Your Message (>1)"
        />
        <input type="submit" value="Submit" className={styles.submit_btn} />
      </form>
    </div>
  );
}
