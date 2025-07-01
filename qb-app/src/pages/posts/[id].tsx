
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ title: '', body: '' });

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/${id}`)
        .then(res => res.json())
        .then(data => {
          setPost(data);
          setForm({ title: data.title, body: data.body });
        });
    }
  }, [id]);

  const handleSave = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(form),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then(res => res.json())
      .then(data => {
        alert('Post updated!');
        setPost(data);
        setEditing(false);
      });
  };

  if (!post) return <Layout><p>Loading...</p></Layout>;

  return (
    <Layout>
      <h1>{editing ? 'Edit Post' : post.title}</h1>
      {editing ? (
        <>
          <input
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            value={form.body}
            onChange={e => setForm({ ...form, body: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{post.body}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </Layout>
  );
}
