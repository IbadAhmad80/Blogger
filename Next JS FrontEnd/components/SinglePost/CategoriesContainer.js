import React from "react";
import Categories from "../SinglePost/Categories";
import Styles from "../../styles/SinglePost.module.scss";
import { useRouter } from "next/Router";

export default function CategoriesContainer({ blogs }) {
  const router = useRouter();
  return (
    <div>
      <h5 className={Styles.category_portion_heading}>In this Category</h5>
      {blogs &&
        blogs.map((blog) => {
          return (
            <Categories title={blog.title} image={blog.image} id={blog.id} />
          );
        })}
    </div>
  );
}
