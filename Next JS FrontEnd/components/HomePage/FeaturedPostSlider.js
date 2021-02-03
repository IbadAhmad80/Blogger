import React from "react";
import Styles from "../../styles/Home.module.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import Link from "next/Link";

export default function FeaturedPostSlider({ blogs }) {
  const path = "../../assets/";

  return (
    <div>
      <div className="container">
        {" "}
        <div className="post-pic">
          <AwesomeSlider animation="cubeAnimation">
            <div data-src={path + blogs[0].image} />
            <div data-src={path + blogs[1].image} />
            <div data-src={path + blogs[2].image} />
            <div data-src={path + blogs[3].image} />
            <div data-src={path + blogs[4].image} />
          </AwesomeSlider>
          <style jsx>
            {`
              .container {
                background-image: linear-gradient(
                  rgba(0, 0, 0, 0.5),
                  rgba(0, 0, 0, 0.5)
                );
              }
            `}
          </style>
          <Link
            href={{
              pathname: `/posts/${blogs[0].id}`,
              query: { id: blogs[0].id },
            }}
          >
            <h6 className={Styles.post_title}>{blogs[0].title}</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

// "semantic-ui-css": "^2.4.1",
// "semantic-ui-react": "^2.0.3",
