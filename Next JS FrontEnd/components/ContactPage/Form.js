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
          required
          placeholder="First Name"
        />

        <input
          className={styles.input_field}
          type="text"
          value={formData.lastName}
          onChange={(e) => setData({ ...formData, lastName: e.target.value })}
          required
          placeholder="Last Name"
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
          type="number"
          value={formData.contact}
          onChange={(e) => setData({ ...formData, contact: e.target.value })}
          required
          placeholder="Phone No"
        />
        <br />
        <textarea
          className={styles.message}
          type="text"
          value={formData.message}
          onChange={(e) => setData({ ...formData, message: e.target.value })}
          required
          placeholder="Your Message"
        />
        <input type="submit" value="Submit" className={styles.submit_btn} />
      </form>
    </div>
  );
}
