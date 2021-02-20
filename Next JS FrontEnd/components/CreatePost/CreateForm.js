import React, { useState } from "react";
import styles from "../../styles/CreatePost.module.scss";
import Image from "next/image";
import Cookie from "js-cookie";
import axios from "axios";
import { server } from "../../config";

export default function CreateForm() {
  const [formData, setData] = useState({
    title: "",
    category: "",
    author: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    e.preventDefault();
    const data = new FormData();
    data.append("files", formData.image);
    try {
      const res = await axios.post(`${server}/upload`, data);
      const token = Cookie.get("token");
      // console.log("response after uplaoding the image is:", res.data);
      const post_res = await axios.post(
        `${server}/posts`,
        {
          title: formData.title,
          author: formData.author,
          image: "upload",
          images: res.data[0].url,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const category_res = await axios.get(
        `${server}/categories`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const ids = getAllPosts(category_res.data);
      await axios.put(
        `${server}/categories/${ids.category_id}`,
        {
          name: formData.category,
          posts: [...ids.blog_ids, post_res.data.id],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("post is been uploaded successfully");
      setData({ title: "", author: "", category: "", image: null });
    } catch (error) {
      console.log("", error);
    }
  };

  const getAllPosts = (data) => {
    let ids = [];
    let id;
    data.map((post) => {
      post.name === formData.category
        ? post.posts.map((blog) => {
            id = post.id;
            ids.push(blog.id);
          })
        : "";
    });
    return { blog_ids: ids, category_id: id };
  };
  return (
    <>
      <div className={styles.mainGrid}>
        <div className={styles.contact_form}>
          <h6 className={styles.contact_heading}>
            Create and Publish Your Blog
          </h6>
          <form onSubmit={handleSubmit}>
            <br />
            <input
              className={styles.input_field}
              type="text"
              pattern="[A-Za-z0-9_.,? ]{10,200}"
              value={formData.title}
              onChange={(e) => setData({ ...formData, title: e.target.value })}
              required
              placeholder="Post title ( 10-200 char )"
            />
            <br />

            <input
              className={styles.input_field}
              type="text"
              pattern="[A-Za-z. ]{5,100}"
              value={formData.author}
              onChange={(e) => setData({ ...formData, author: e.target.value })}
              required
              placeholder="Post Author ( 5-100 char )"
            />
            <br />
            <input
              className={styles.input_field}
              type="text"
              pattern="[A-Za-z]{5,20}"
              value={formData.category}
              onChange={(e) =>
                setData({ ...formData, category: e.target.value })
              }
              required
              placeholder="Post Category"
            />
            <br />
            <input
              className={styles.input_field}
              type="file"
              // value={formData.image}
              required
              onChange={(e) =>
                setData({ ...formData, image: e.target.files[0] })
              }
            />
            <br />
            <label>
              <input
                type="submit"
                value="Create"
                className={styles.submit_btn}
              />
            </label>
            <br />
          </form>
        </div>
        <div>
          <div className={styles.image_flex}>
            <Image
              src="/assets/wordpress.jpg"
              alt="Picture of the author"
              width={660}
              height={430}
            />
          </div>
        </div>
      </div>
    </>
  );
}
