import React from "react";
import GoalCatalog from "./GoalCatalog";
import styles from "../../styles/About.module.scss";

export default function AboutPortal() {
  return (
    <>
      <div className={styles.about_grid}>
        <div className={styles.image_center}></div>

        <h5 className={styles.main_content}>
          Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud
          cupidatat dolor sunt sint sit nisi est eu exercitation incididunt
          adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor
          dolor irure velit commodo cillum sit nulla ullamco magna amet magna
          cupidatat qui labore cillum sit in tempor veniam consequat non laborum
          adipisicing aliqua ea nisi sint.
        </h5>
        <h6 className={styles.secondary_content}>
          Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud
          cupidatat dolor sunt sint sit nisi est eu exercitation incididunt
          adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor
          dolor irure velit commodo cillum sit nulla ullamco magna amet magna
          cupidatat qui labore cillum sit in tempor veniam consequat non laborum
          adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore
          culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate
          enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla
          nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
        </h6>
        <h6 className={styles.secondary_content}>
          Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud
          cupidatat dolor sunt sint sit nisi est eu exercitation incididunt
          adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor
          dolor irure velit commodo cillum sit nulla ullamco magna amet magna
          cupidatat qui labore cillum sit in tempor veniam consequat non laborum
          adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore
          culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate
          enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla
          nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
        </h6>
        <div className={styles.goal_section}>
          <GoalCatalog
            title={"Who are We"}
            content={
              "Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit."
            }
          />
          <GoalCatalog
            title={"Our Mission"}
            content={
              "Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit."
            }
          />
          <GoalCatalog
            title={"Our Values"}
            content={
              "Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit."
            }
          />
          <GoalCatalog
            title={"Our Vision"}
            content={
              "Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit."
            }
          />
        </div>
      </div>
    </>
  );
}
