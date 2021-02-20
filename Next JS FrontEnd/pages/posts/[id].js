import React, { useState, useEffect } from "react";
import { server } from "../../config/index";
import Styles from "../../styles/SinglePost.module.scss";
import CategoriesContainer from "../../components/SinglePost/CategoriesContainer";
import ReadMore from "../../components/HomePage/ReadMore";
import RelatedPost from "../../components/SinglePost/RelatedBlogs";
import Tag from "../../components/SinglePost/Tag";
import { useRouter } from "next/router";
import { getLikes } from "../../components/SinglePost/LikeHandler";
import axios from "axios";
import SignIn from "../../components/SinglePost/SignIn";
import { AiTwotoneLike } from "react-icons/ai";

export default function SinlgePost({ allBlogs, blog, author, category, data }) {
  const router = useRouter();
  const [id, setID] = useState(-1);
  const [likes, setLikes] = useState(blog.likes);

  const [queryData, setQueryData] = useState({
    blog: blog,
    sameAuthor: author,
    allBlogs: allBlogs,
    sameCategory: category,
    comments: data,
  });
  //loading the blogs upon components mounting
  useEffect(() => {
    setQueryData({
      blog: blog,
      sameAuthor: author,
      allBlogs: allBlogs,
      sameCategory: category,
      comments: data,
    });
    setLikes(blog.likes);
  }, [blog]);
  //handling likes option
  useEffect(() => {
    id !== -1
      ? getLikes(blog.id).then((data) => {
          setLikes(data);
        })
      : "";
  }, [id]);

  const appendComment = (comment) => {
    // console.log("new comment", comment);
    const { comments } = queryData;
    comments.push(comment);
    setQueryData({ ...queryData, comments: comments });
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className={Styles.container}>
          <div className={Styles.left_flex}>
            <div className="image">
              <style jsx>{`
                .image {
                  background-image: url(${"/assets/" + "fisherman.jpg"});
                  height: 28rem;
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                }
              `}</style>
            </div>
            <h5 className={Styles.single_post_title}>{queryData.blog.title}</h5>

            <h6 className={Styles.single_post_caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              molestie, lorem eu eleifend bibendum, augue purus mollis sapien,
              non rhoncus eros leo in nunc. Donec a nulla vel turpis consectetur
              tempor ac vel justo. In hac habitasse platea dictumst. Cras nec
              sollicitudin eros. Nunc eu enim non turpis sagittis rhoncus
              consectetur id augue. Mauris dignissim neque felis. Phasellus
              mollis mi a pharetra cursus. Maecenas vulputate augue placerat
              lacus mattis, nec ornare risus sollicitudin. Mauris eu pulvinar
              tellus, eu luctus nisl. Pellentesque suscipit mi eu varius
              pulvinar. Aenean vulputate, massa eget elementum finibus, ipsum
              arcu commodo est, ut mattis eros orci ac risus. Suspendisse
              ornare, massa in feugiat facilisis, eros nisl auctor lacus,
              laoreet tempus elit dolor eu lorem. Nunc a arcu suscipit, suscipit
              quam quis, semper augue. Quisque arcu nulla, convallis nec orci
              vel, suscipit elementum odio. Curabitur volutpat velit non diam
              tincidunt sodales. Nullam sapien libero, bibendum nec viverra in,
              iaculis ut eros.
            </h6>
            <h5 className={Styles.single_post_title}>
              Here is what we've learned from this blog
            </h5>
            <h6 className={Styles.single_post_caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              molestie, lorem eu eleifend bibendum, augue purus mollis sapien,
              non rhoncus eros leo in nunc. Donec a nulla vel turpis consectetur
              tempor ac vel justo. In hac habitasse platea dictumst. Cras nec
              sollicitudin eros. Nunc eu enim non turpis sagittis rhoncus
              consectetur id augue. Mauris dignissim neque felis. Phasellus
              mollis mi a pharetra cursus. Maecenas vulputate augue placerat
              lacus mattis, nec ornare risus sollicitudin. Mauris eu pulvinar
              tellus, eu luctus nisl. Pellentesque suscipit mi eu varius
              pulvinar. Aenean vulputate, massa eget elementum finibus, ipsum
              arcu commodo est, ut mattis eros orci ac risus. Suspendisse
              ornare, massa in feugiat facilisis, eros nisl auctor lacus,
              laoreet tempus elit dolor eu lorem. Nunc a arcu suscipit, suscipit
              quam quis, semper augue. Quisque arcu nulla, convallis nec orci
              vel, suscipit elementum odio. Curabitur volutpat velit non diam
              tincidunt sodales. Nullam sapien libero, bibendum nec viverra in,
              iaculis ut eros.
            </h6>
            <div className={Styles.category}>
              <RelatedPost posts={queryData.sameAuthor} />
            </div>
            <div className={Styles.like_flex}>
              <span className={Styles.like_heading}>Give it a thumbs Up? </span>
              <span
                className={Styles.like_logo}
                onClick={() => setID(Math.random())}
              >
                <AiTwotoneLike />
              </span>
              <span className={Styles.like_amount}>{likes}</span>
            </div>

            <div>
              <SignIn blog_id={blog.id} appendComment={appendComment} />
            </div>
            <div style={{ marginTop: "4rem" }}>
              {queryData.comments &&
                queryData.comments
                  .slice(queryData.comments.length - 2, queryData.length)
                  .map((comment) => {
                    return (
                      <div className={Styles.comments}>
                        <div style={{ display: "flex" }}>
                          <div className={Styles.comment_maker_pic}>
                            {comment.publisher.charAt(0).toUpperCase()}
                          </div>
                          <div className={Styles.comment_maker_name}>
                            {comment.publisher}
                          </div>
                        </div>
                        <div className={Styles.comment_text}>
                          {comment.comment}
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>

          <div className={Styles.right_flex}>
            <div>
              <CategoriesContainer blogs={queryData.sameCategory.slice(0, 7)} />
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
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/posts/`);
  const allBlogs = await res.json();
  let blogData = await fetch(`${server}/posts/${context.params.id}`);
  let blog = await blogData.json();
  let author = allBlogs.filter((article) => article.author === blog.author);
  let sameCategory = await fetch(
    `${server}/posts/category/${blog.categories[0].name}`
  );
  let category = await sameCategory.json();
  const { data } = await axios.get(
    `${server}/comments/blogs/${context.params.id}`
  );

  return {
    revalidate: 5,
    props: {
      allBlogs,
      blog,
      author,
      category,
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/posts/`);
  const allBlogs = await res.json();
  const ids = allBlogs.map((blog) => blog.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
