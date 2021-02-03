import React from "react";
import SwitchPost from "../HomePage/SwitchPost";
import Styles from "../../styles/SinglePost.module.scss";

export default function CategoriesContainer({ blogs }) {
  return (
    <div>
      <h5 className={Styles.category_portion_heading}>In this Category</h5>
      {blogs &&
        blogs.map((blog) => {
          return (
            <SwitchPost
              title={blog.title}
              image={blog.image}
              id={blog.id}
              type="single_post"
            />
          );
        })}
    </div>
  );
}
