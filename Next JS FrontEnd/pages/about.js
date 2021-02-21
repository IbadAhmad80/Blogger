import React, { useState } from "react";
import AboutPortal from "../components/AboutPage/Index";
import styles from "../styles/About.module.scss";
import Tag from "../components/SinglePost/Tag";
import ReadMore from "../components/HomePage/MoreBlogs";
import { server } from "../config/index";
import axios from "axios";

export default function About({ blogs }) {
  return (
    <>
      {/* <form onSubmit={submitHandler}>
        <br />
        <input type="file" onChange={handleChange} required />
        <br />
        <button type="submit">Upload media</button>
      </form> */}
      <div className={styles.about_section}>
        <h5 className={styles.about_heading}>Know more About Us</h5>
        <AboutPortal />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          <h6 className={styles.popular_blogs_heading}>Popular logs</h6>
          <h6 className={styles.tag_heading}>Read More About</h6>
        </div>

        <div style={{ display: "flex" }}>
          <div className={styles.read_more_blogs}>
            {blogs
              .sort((a, b) => (a.likes > b.likes ? 1 : -1))
              .slice(-4)
              .map((blog) => {
                return (
                  <ReadMore
                    title={blog.title}
                    image={blog.image}
                    key={blog.id}
                    id={blog.id}
                    type={"about"}
                  />
                );
              })}
          </div>

          <div className={styles.tag_section}>
            <Tag tag={"Entertainment"} />
            <Tag tag={"Technology"} />
            <Tag tag={"Health"} />
            <Tag tag={"Sports"} />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/posts/`);

  const blogs = await res.json();

  return {
    revalidate: 10,
    props: {
      blogs,
    },
  };
};
