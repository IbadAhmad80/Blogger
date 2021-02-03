import React from "react";
import styles from "../../styles/Home.module.scss";
import FeaturedPostSlider from "./FeaturedPostSlider";

import FeaturedPostGrid from "./FeaturedPostGrid";

export default function FeaturedComponents({ blogs }) {
  return (
    <>
      <div className={styles.feature_blogs}>
        <div className={styles.feature_flex_1}>
          <FeaturedPostSlider blogs={blogs} />
        </div>
        <div className={styles.feature_flex_2}>
          <div className={styles.feature_grid_1}>
            <FeaturedPostGrid
              title={blogs[1].title}
              image={blogs[1].image}
              id={blogs[1].id}
            />
          </div>
          <div className={styles.feature_grid_2}>
            <FeaturedPostGrid
              title={blogs[2].title}
              image={blogs[2].image}
              id={blogs[2].id}
            />
          </div>
          <div className={styles.feature_grid_3}>
            <FeaturedPostGrid
              title={blogs[3].title}
              image={blogs[3].image}
              id={blogs[3].id}
            />
          </div>
          <div className={styles.feature_grid_4}>
            <FeaturedPostGrid
              title={blogs[4].title}
              image={blogs[4].image}
              id={blogs[4].id}
            />
          </div>
        </div>
      </div>
    </>
  );
}
