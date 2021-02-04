import React from "react";
import styles from "../../styles/About.module.scss";

export default function GoalCatalog({ title, content }) {
  return (
    <div>
      <h6 className={styles.goal_title}>{title}</h6>
      <p className={styles.goal_content}>{content}</p>
    </div>
  );
}
