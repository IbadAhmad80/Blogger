import React from "react";
import SwitchPost from "../HomePage/SwitchPost";
import Styles from "../../styles/SinglePost.module.scss";
import { useRouter } from "next/router";

export default function CategoriesContainer({ blogs }) {
  const router = useRouter();
  return (
    <div>
      <h5 className={Styles.category_portion_heading}>In this Category</h5>
      {blogs &&
        router.query.id &&
        blogs.map((blog) => {
          return blog.id !== router.query.id ? (
            <SwitchPost
              title={blog.title}
              image={blog.image}
              id={blog.id}
              type="single_post"
              key={blog.id}
            />
          ) : (
            console.log("")
          );
        })}
      {blogs &&
        router.query.name &&
        blogs.map((blog, index) => {
          return index > 0 ? (
            <SwitchPost
              title={blog.title}
              image={blog.image}
              id={blog.id}
              type="single_post"
              key={blog.id}
            />
          ) : (
            console.log("")
          );
        })}
    </div>
  );
}
