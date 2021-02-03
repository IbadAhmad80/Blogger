import React from "react";
import Styles from "../../styles/Home.module.scss";
import Link from "next/Link";

export default function MoreBlogs({ title, image, id }) {
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
      caption[5]
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
            height: 10.25rem;
          }
        `}</style>
        <div
          style={{
            paddingTop: "6rem",
          }}
          className="container"
        >
          <Link
            href={{
              pathname: `/posts/${id}`,
              query: { id: id },
            }}
          >
            <h6
              className={Styles.post_more_grid}
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
