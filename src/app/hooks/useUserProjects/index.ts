'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import userData from '../../[username]/data.json';

export const useUserProjects = () => {
  const pathname = usePathname();
  const username = pathname.split('/')[1];

  const [userProjects, setUserProjects] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const foundUser = userData.users.find((user) => user.username === username);
    if (foundUser) {
      const userProjects = userData.projects.filter((project) => project.user_id === foundUser.id);
      setUserProjects(userProjects);
    }
  }, [username]);

  return userProjects;
};
