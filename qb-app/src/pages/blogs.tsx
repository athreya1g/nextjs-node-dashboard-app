
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const id = Math.floor(Math.random() * 3) + 1;
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}/posts`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <Layout>
      <h1>Blogs</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
