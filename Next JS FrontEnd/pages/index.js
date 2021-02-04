import Link from "next/Link";
import FeaturedComponents from "../components/HomePage/FeaturedPosts";
import styles from "../styles/Home.module.scss";
import { server } from "../config/index";
import TabPanel from "../components/HomePage/PostsTab";
import ReadMore from "../components/HomePage/ReadMore";
import CategoryPost from "../components/HomePage/CategoryPost";
import MoreBlogs from "../components/HomePage/MoreBlogs";

export default function Home({ blogs }) {
  // console.log("blogs:", blogs.splice(5));
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <Link href="/">Blogger!</Link>
          </h1>

          <button className={styles.post_button}>Explore Now</button>
        </main>
      </div>
      <FeaturedComponents blogs={blogs} />
      <div className={styles.tabs_section}>
        <div className={styles.postsTab}>
          <TabPanel blogs={blogs} />
        </div>
        <div className={styles.read_more}>
          <ReadMore blogs={blogs} />
        </div>
      </div>
      <div className={styles.lower_image}></div>
      <div className={styles.category}>
        {/* <div> */}
        <CategoryPost blogs={blogs} category="entertainment" />
        <CategoryPost blogs={blogs} category="sports" />
        <CategoryPost blogs={blogs} category="health" />
        <CategoryPost blogs={blogs} category="technology" />
      </div>
      <div className={styles.more_blogs}>
        {blogs.map((blog, index) => {
          return index > 7 ? (
            <MoreBlogs
              title={blog.title}
              image={blog.image}
              key={blog.id}
              id={blog.id}
            />
          ) : (
            console.log("")
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
    revalidate: 10,
    props: {
      blogs,
    },
  };
};
