'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getUser } from '../../infra/api';

export const useUser = () => {
  const [user, setUser] = useState<{ firebase_id: string; bio: string; nickname: string; username: string; email: string; } | null>(null);
  // const [error, setError] = useState(null);

  const pathname = usePathname();
  const username = pathname.split('/')[1];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(username);
        setUser(userData);
      } catch (error) {
        // console.error(error);
        // setError(error.message);
      }
    };

    fetchUser();
  }, [username]);

  // return { user, error };
  return { user };
};
