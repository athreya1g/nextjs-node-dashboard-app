
import { User } from '@/types/user';
import { useEffect, useState } from 'react';

export default function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const id = sessionStorage.getItem("userId") || Math.floor(Math.random() * 6) + 1;
    sessionStorage.setItem("userId", id.toString());
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return { user };
}
