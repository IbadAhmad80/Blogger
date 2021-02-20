import styles from "../../styles/Home.module.scss";
import Carousel from "react-elastic-carousel";
import Link from "next/Link";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 250, itemsToShow: 2 },
];

export default function CategoryPost({ blogs, category }) {
  const getImage = ({ image, images }) => {
    let img =
      image === "upload"
        ? "http://localhost:1337" + images
        : "/assets/" + image;
    return img;
  };
  let posts = [];
  blogs.map((blog) =>
    blog.categories[0].name === category ? posts.push(blog) : ""
  );
  return (
    <div>
      <h5 className={styles.category_heading}>{category.toUpperCase()}</h5>
      <div className={styles.category_container}>
        <Carousel breakPoints={breakPoints}>
          {posts.map((blog) => (
            <span
              style={{ marginRight: "3rem", marginLeft: "3rem" }}
              className={styles.linear_container}
              key={blog.id}
            >
              <div
                style={{
                  paddingTop: "2rem",
                }}
                className="container"
              >
                <Link
                  href={{
                    pathname: `/posts/${blog.id}`,
                    query: { id: blog.id },
                  }}
                  as={`/posts/${blog.id}`}
                >
                  <h6
                    className={styles.post}
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(15, 0, 0, 0.8),rgba(15, 0, 0, 0.8)",
                    }}
                  >
                    {blog.title}
                  </h6>
                </Link>
              </div>
              <style jsx>{`
                span {
                  background-image: url(${getImage(blog)});
                  background-size: 100% 100%;
                  background-repeat: no-repeat;
                  height: 10rem;
                  width: 20rem;
                }
              `}</style>
            </span>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
