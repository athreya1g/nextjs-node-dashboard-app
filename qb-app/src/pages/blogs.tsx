
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Post } from "../types/post";
import dynamic from "next/dynamic";

const Blogs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    console.log("Fetching posts for user ID:", id);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}/posts`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        console.log("Fetched posts:", data);
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
        setPosts([]);
      })
      .finally(() => {
        console.log("Posts fetched:", posts);
        setLoading(false)});
  }, []);

  if (loading) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Blogs</h1>
      {posts.length === 0 ? (
        <p>No posts found for this user.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Blogs), { ssr: false });
