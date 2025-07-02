
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { notification } from "antd";
import { Post } from "../../types/post";
import dynamic from "next/dynamic";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/post/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched post:", data);
          setPost(data);
          setForm({ title: data.title, body: data.body });
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleSave = () => {
    if (!post) return;
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${post.userId}/post/${id}`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        notification.success({
          message: "Post updated successfully",
          description: undefined
        });
        setPost(data.post);
        setEditing(false);
      });
  };

  if (loading) return <Layout><p>Loading...</p></Layout>;

  return (
    <Layout>
      <h1>{editing ? "Edit Post" : post?.title}</h1>
      {editing ? (
        <>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{post?.body}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(PostDetail), { ssr: false });
