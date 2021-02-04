import React from "react";
import Link from "next/link";

export default function Tag({ tag }) {
  return (
    <div>
      <Link
        href={{
          pathname: `/posts/category/${tag.toLowerCase()}`,
          query: { name: tag.toLowerCase() },
        }}
        as={`/posts/category/${tag.toLowerCase()}`}
      >
        <h6
          style={{
            padding: "0.7rem 1rem",
            border: "1px solid gray",
            letterSpacing: "0.02cm",
            color: "black",
            margin: "1rem",
            fontSize: "1.1rem",
            fontFamily: "'Handlee', cursive",
            cursor: "pointer",
          }}
        >
          {tag}
        </h6>
      </Link>
    </div>
  );
}
