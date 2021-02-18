import React from "react";
import Styles from "../../styles/Home.module.scss";
import Link from "next/Link";
import styles from "../../styles/About.module.scss";

export default function MoreBlogs({ title, image, id, type }) {
  const computeTitle = (title) => {
    const caption = title.split(" ").slice(0, 6);
    return (
      caption[0] +
      " " +
      caption[1] +
      " " +
      caption[2] +
      " " +
      caption[3] +
      " " +
      caption[4] +
      " " +
      caption[5] +
      " " +
      caption[6]
    );
  };

  return (
    <div className={Styles.more_container}>
      <div className="post-pic">
        <style jsx>{`
          .post-pic {
            background-image: url(${"/assets/" + image});
            background-size: 100% 100%;
            background-repeat: no-repeat;
            height: 15.25rem;
          }
        `}</style>
        <div
          style={{
            paddingTop: "11rem",
          }}
          className="container"
        >
          <Link
            href={{
              pathname: `/posts/${id}`,
              query: { id: id },
            }}
            as={`/posts/${id}`}
          >
            <h6
              className={
                type === "about" ? styles.post_more_grid : Styles.post_more_grid
              }
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)",
              }}
            >
              {title}
            </h6>
          </Link>
        </div>
      </div>
    </div>
  );
}
