import React from "react";
import Link from "next/Link";
import Styles from "../../styles/Home.module.scss";

export default function FeaturedPostGrid({ title, image, blogs, id }) {
  return (
    <div>
      <div className={Styles.linear_container}>
        <div className="post-pic">
          <style jsx>{`
            .post-pic {
              background-image: url(${"/assets/" + image});
              background-size: 100% 100%;
              background-repeat: no-repeat;
              height: 10.25rem;
              margin: 0;
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
                className={Styles.post_title_grid}
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(5, 0, 0, 0.8),rgba(5, 0, 0, 0.8))",
                  cursor: "pointer",
                }}
              >
                {title}
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
