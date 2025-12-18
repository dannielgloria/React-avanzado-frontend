import { useEffect, useState } from "react";
import client from "../service/client";
import PostCard from "./PostCard";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await client.get("/post");
    setPosts(res.data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} onUpdated={fetchPosts} />
      ))}
    </>
  );
}