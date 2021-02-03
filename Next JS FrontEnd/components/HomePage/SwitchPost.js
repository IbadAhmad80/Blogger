import React from "react";
import Styles from "../../styles/Home.module.scss";
import Link from "next/Link";
import styles from "../../styles/SinglePost.module.scss";
export default function SwitchPost({ title, image, id, type }) {
  return (
    <>
      <div
        className={
          type === "single_post"
            ? styles.switch_post_container
            : Styles.switch_post_container
        }
      >
        <span
          className={
            type === "single_post"
              ? styles.switch_post_image
              : Styles.switch_post_image
          }
        >
          <style jsx>
            {`
              span {
                background-image: url(${"/assets/" + image});
                background-size: 100% 100%;
                background-repeat: no-repeat;
              }
            `}
          </style>
        </span>
        <Link
          href={{
            pathname: `/posts/${id}`,
            query: { id: id },
          }}
        >
          <div
            className={
              type === "single_post"
                ? styles.switch_post_caption
                : Styles.switch_post_caption
            }
          >
            {title}
          </div>
        </Link>
      </div>
    </>
  );
}
