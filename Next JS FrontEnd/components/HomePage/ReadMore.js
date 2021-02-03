import React from "react";
import styles from "../../styles/Home.module.scss";
import { ImBullhorn } from "react-icons/im";
import Link from "next/Link";

export default function ReadMore({ blogs, type }) {
  return (
    <div>
      <div className={styles.read_more_heading}>Read More</div>

      <div className={styles.read_more_container}>
        <span className={styles.read_more_logo}>
          <ImBullhorn />
          <Link
            href={{
              pathname: `/posts/${blogs[6].id}`,
              query: { id: blogs[6].id },
            }}
          >
            <span className={styles.read_more_title}>{blogs[6].title}</span>
          </Link>
        </span>
      </div>
      <div className={styles.read_more_container}>
        <span className={styles.read_more_logo}>
          <ImBullhorn />
          <Link
            href={{
              pathname: `/posts/${blogs[7].id}`,
              query: { id: blogs[7].id },
            }}
          >
            <span className={styles.read_more_title}>{blogs[7].title}</span>
          </Link>
        </span>
      </div>
      <div className={styles.read_more_container}>
        <span className={styles.read_more_logo}>
          <ImBullhorn />
          <Link
            href={{
              pathname: `/posts/${blogs[8].id}`,
              query: { id: blogs[8].id },
            }}
          >
            <span className={styles.read_more_title}>{blogs[8].title}</span>
          </Link>
        </span>
      </div>
      <div className={styles.read_more_container}>
        <span className={styles.read_more_logo}>
          <ImBullhorn />
          <Link
            href={{
              pathname: `/posts/${blogs[9].id}`,
              query: { id: blogs[9].id },
            }}
          >
            <span className={styles.read_more_title}>{blogs[9].title}</span>
          </Link>
        </span>
      </div>
      <div className={styles.read_more_container}>
        <span className={styles.read_more_logo}>
          <ImBullhorn />
          <Link
            href={{
              pathname: `/posts/${blogs[2].id}`,
              query: { id: blogs[2].id },
            }}
          >
            <span className={styles.read_more_title}>{blogs[2].title}</span>
          </Link>
        </span>
      </div>
    </div>
  );
}
