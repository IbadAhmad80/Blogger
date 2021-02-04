import React from "react";
import { server } from "../../config/index";

export default function About({ blogs }) {
  return (
    <>
      <div className={Styles.container}>
        {blogs.map((blog) => {
          return (
            <h5>
              Title is {blog.title} and its author is {blog.author}
            </h5>
          );
        })}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/posts/`);
  const blogs = await res.json();

  return {
    revalidate: 5,
    props: {
      blogs,
    },
  };
};
