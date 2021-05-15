import React from "react";
import Link from "next/link";
import Styles from "../../styles/Home.module.scss";

export default function FeaturedPostGrid({ title, image, images, id }) {
  let img =
    image === "upload" ? "http://localhost:1337" + images : "/assets/" + image;
  // console.log(title, image);
  return (
    <div>
      <div className={Styles.linear_container}>
        <div
          className="post-pic"
          onClick={() =>
            console.log("my title is", title, " and image is ", image)
          }
        >
          <style jsx>{`
            .post-pic {
              background-image: url(${img});
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
              as={`/posts/${id}`}
            >
              <h6
                className={Styles.post_title_grid}
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.85),rgba(0, 0, 0, 0.85))",
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
