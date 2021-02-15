import axios from "axios";
import { server } from "../../config/index";
export const getLikes = async (id) => {
  const blog = await fetch(`${server}/posts/${id}`);
  const post = await blog.json();
  await axios.put(`${server}/posts/${id}`, {
    likes: post.likes + 1,
  });
  return post.likes + 1;
};
