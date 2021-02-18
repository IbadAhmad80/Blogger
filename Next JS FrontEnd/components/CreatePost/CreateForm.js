import React, { useState } from "react";
import styles from "../../styles/CreatePost.module.scss";
import Image from "next/image";
import SectionCarousel from "./Crausel";
export default function CreateForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setData] = useState({
    title: "",
    category: "",
    author: "",
    image: null,
  });

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setData({ ...formData, image: selected });
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png ,jpeg , webp or jpg)");
    }
  };

  // e.preventDefault();
  // const data = new FormData();
  // data.append("files", file);
  // // console.log("data is", data.entries().next());
  // const res = await axios
  //   .post(`${server}/upload`, data)
  //   .then((response) => {
  //     // console.log("response :", response);
  //   })
  //   .catch((err) => {
  //     console.log("", err);
  //   });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <h6 className={styles.contact_heading}>Create and Publish Your Blog</h6>
      <div className={styles.mainGrid}>
        <div className={styles.contact_form}>
          <form onSubmit={handleSubmit}>
            <br />
            <input
              className={styles.input_field}
              type="text"
              pattern="[A-Za-z0-9_., ]{1,200}"
              value={formData.title}
              onChange={(e) => setData({ ...formData, title: e.target.value })}
              required
              placeholder="Post title"
            />
            <br />

            <input
              className={styles.input_field}
              type="text"
              pattern="[A-Za-z. ]{1,100}"
              value={formData.author}
              onChange={(e) => setData({ ...formData, author: e.target.value })}
              required
              placeholder="Post Author"
            />
            <br />
            <input
              className={styles.input_field}
              type="text"
              // pattern="[A-Za-z]{1,20}"
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
            {
              // <SectionCarousel />
              <Image
                src="/assets/wordpress.jpg"
                alt="Picture of the author"
                width={660}
                height={430}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
}
