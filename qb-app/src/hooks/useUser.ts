
import { useEffect, useState } from 'react';

export default function useUser() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const id = Math.floor(Math.random() * 3) + 1;
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return { user };
}
