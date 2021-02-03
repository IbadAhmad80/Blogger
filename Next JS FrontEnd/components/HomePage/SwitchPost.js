import React from "react";
import Styles from "../../styles/Home.module.scss";
import Link from "next/Link";

export default function SwitchPost({ title, image, id }) {
  return (
    <>
      <div className={Styles.switch_post_container}>
        <span className={Styles.switch_post_image}>
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
          <div className={Styles.switch_post_caption}>{title}</div>
        </Link>
      </div>
    </>
  );
}
