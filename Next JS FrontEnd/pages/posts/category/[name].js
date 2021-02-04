import React, { useState, useEffect } from "react";
import { server } from "../../../config/index";
import Styles from "../../../styles/SinglePost.module.scss";
import CategoriesContainer from "../../../components/SinglePost/CategoriesContainer";
import ReadMore from "../../../components/HomePage/ReadMore";
import RelatedPost from "../../../components/SinglePost/RelatedBlogs";
import Tag from "../../../components/SinglePost/Tag";

export default function SinlgePost({ allBlogs, blog, author, category }) {
  const [queryData, setQueryData] = useState({
    blog: blog,
    sameAuthor: author,
    allBlogs: allBlogs,
    sameCategory: category,
  });
  useEffect(() => {
    setQueryData({
      blog: blog,
      sameAuthor: author,
      allBlogs: allBlogs,
      sameCategory: category,
    });
  }, [blog]);
  // console.log(queryData);
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.left_flex}>
          <div className="image">
            <style jsx>{`
              .image {
                background-image: url(${"/assets/" + "news-5.jpg"});
                height: 28rem;
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }
            `}</style>
          </div>
          <h5 className={Styles.single_post_title}>{queryData.blog.title}</h5>

          <h6 className={Styles.single_post_caption}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            molestie, lorem eu eleifend bibendum, augue purus mollis sapien, non
            rhoncus eros leo in nunc. Donec a nulla vel turpis consectetur
            tempor ac vel justo. In hac habitasse platea dictumst. Cras nec
            sollicitudin eros. Nunc eu enim non turpis sagittis rhoncus
            consectetur id augue. Mauris dignissim neque felis. Phasellus mollis
            mi a pharetra cursus. Maecenas vulputate augue placerat lacus
            mattis, nec ornare risus sollicitudin. Mauris eu pulvinar tellus, eu
            luctus nisl. Pellentesque suscipit mi eu varius pulvinar. Aenean
            vulputate, massa eget elementum finibus, ipsum arcu commodo est, ut
            mattis eros orci ac risus. Suspendisse ornare, massa in feugiat
            facilisis, eros nisl auctor lacus, laoreet tempus elit dolor eu
            lorem. Nunc a arcu suscipit, suscipit quam quis, semper augue.
            Quisque arcu nulla, convallis nec orci vel, suscipit elementum odio.
            Curabitur volutpat velit non diam tincidunt sodales. Nullam sapien
            libero, bibendum nec viverra in, iaculis ut eros.
          </h6>
          <h5 className={Styles.single_post_title}>
            Here is what we've learned from this blog
          </h5>
          <h6 className={Styles.single_post_caption}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            molestie, lorem eu eleifend bibendum, augue purus mollis sapien, non
            rhoncus eros leo in nunc. Donec a nulla vel turpis consectetur
            tempor ac vel justo. In hac habitasse platea dictumst. Cras nec
            sollicitudin eros. Nunc eu enim non turpis sagittis rhoncus
            consectetur id augue. Mauris dignissim neque felis. Phasellus mollis
            mi a pharetra cursus. Maecenas vulputate augue placerat lacus
            mattis, nec ornare risus sollicitudin. Mauris eu pulvinar tellus, eu
            luctus nisl. Pellentesque suscipit mi eu varius pulvinar. Aenean
            vulputate, massa eget elementum finibus, ipsum arcu commodo est, ut
            mattis eros orci ac risus. Suspendisse ornare, massa in feugiat
            facilisis, eros nisl auctor lacus, laoreet tempus elit dolor eu
            lorem. Nunc a arcu suscipit, suscipit quam quis, semper augue.
            Quisque arcu nulla, convallis nec orci vel, suscipit elementum odio.
            Curabitur volutpat velit non diam tincidunt sodales. Nullam sapien
            libero, bibendum nec viverra in, iaculis ut eros.
          </h6>
          <div className={Styles.category}>
            <RelatedPost posts={queryData.sameAuthor} />
          </div>
        </div>

        <div className={Styles.right_flex}>
          <div>
            <CategoriesContainer blogs={queryData.sameCategory} />
          </div>
          <div className={Styles.read_more}>
            <ReadMore blogs={queryData.allBlogs} type="single_post" />
          </div>
          <div className={Styles.tag_section}>
            <h6 className={Styles.tag_heading}>Tags Cloud</h6>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: ".7rem",
              }}
            >
              <Tag tag={"Entertainment"} />
              <Tag tag={"Technology"} />
              <Tag tag={"Health"} />
              <Tag tag={"Sports"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/posts/`);
  const allBlogs = await res.json();

  let sameCategory = await fetch(
    `${server}/posts/category/${context.params.name}`
  );
  let category = await sameCategory.json();
  let blog = category[0];
  let author = allBlogs.filter((article) => article.author === blog.author);

  return {
    revalidate: 5,
    props: {
      allBlogs,
      blog,
      author,
      category,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { name: "sports" } },
      { params: { name: "technology" } },
      { params: { name: "health" } },
      { params: { name: "entertainment" } },
    ],
    fallback: false,
  };
};
