import styles from "../../styles/SinglePost.module.scss";
import Carousel from "react-elastic-carousel";
import Link from "next/Link";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 350, itemsToShow: 2 },
];

// const computeTitle = (title) => {
//   const caption = title.split(" ").slice(0, 5);
//   return (
//     caption[0] +
//     " " +
//     caption[1] +
//     " " +
//     caption[2] +
//     " " +
//     caption[3] +
//     " " +
//     caption[4]
//   );
// };

export default function RelatedPost({ posts }) {
  return (
    <div>
      <h5 className={styles.category_heading}>Related Articles</h5>
      <div className={styles.category_container}>
        <Carousel breakPoints={breakPoints}>
          {posts.map((blog) => (
            <span style={{}} className={styles.linear_container} key={blog.id}>
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
                  background-image: url(${"/assets/" + blog.image});
                  background-size: 100% 100%;
                  background-repeat: no-repeat;
                  height: 10rem;
                  width: 18rem;
                }
              `}</style>
            </span>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
