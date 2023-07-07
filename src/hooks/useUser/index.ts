'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import userData from '../../app/[username]/data.json';

export const useUser = () => {
  const pathname = usePathname();
  const username = pathname.split('/')[1];

  const [user, setUser] = useState<{ username: string; nickname: string; email: string } | null>(null);

  useEffect(() => {
    const foundUser = userData.users.find((user) => user.username === username);
    setUser(foundUser || null);
  }, [username]);

  return user;
};