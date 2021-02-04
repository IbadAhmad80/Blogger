import React from "react";
import AboutPortal from "../components/AboutPage/Index";
import styles from "../styles/About.module.scss";
import Tag from "../components/SinglePost/Tag";

export default function About({}) {
  return (
    <>
      <div className={styles.about_section}>
        <h5 className={styles.about_heading}>Know more About Us</h5>
        <AboutPortal />
        <h6 className={styles.tag_heading}>Read about</h6>
        <div className={styles.tag_section}>
          <Tag tag={"Entertainment"} />
          <Tag tag={"Technology"} />
          <Tag tag={"Health"} />
          <Tag tag={"Sports"} />
        </div>
      </div>
    </>
  );
}
