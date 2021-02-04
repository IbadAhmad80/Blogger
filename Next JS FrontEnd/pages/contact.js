import React from "react";
import Accordion from "../components/ContactPage/Accordion";
import Form from "../components/ContactPage/Form";
import styles from "../styles/Contact.module.scss";
import GoogleMap from "../components/ContactPage/Map";

// import ReadMore from "../components/HomePage/ReadMore";
export default function Contact({ blogs }) {
  return (
    <div>
      <div style={{ margin: "4rem 4rem" }}>
        <div>
          <Form />
        </div>
        <div className={styles.accordion}>
          <h6 className={styles.accordion_heading}>
            Your most asked Questions are here
          </h6>
          <Accordion />
        </div>
      </div>
      <div
        style={{
          margin: "6rem 6rem 0rem 8.5rem",
          height: "45rem",
          width: "30rem",
        }}
      >
        <GoogleMap />
      </div>
    </div>
  );
}
