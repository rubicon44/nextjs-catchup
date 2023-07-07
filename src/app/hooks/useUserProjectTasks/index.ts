'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import userData from '../../[username]/data.json';

export const useUserProjectTasks = () => {
  const pathname = usePathname();
  const username = pathname.split('/')[1];
  const projectID = Number(pathname.split('/')[3]);

  const [tasks, setTasks] = useState<{ id: number; title: string; bio: string }[]>([]);

  useEffect(() => {
    const foundUser = userData.users.find((user) => user.username === username);
    if (foundUser) {
      const userTasks = userData.tasks.filter((task) => task.user_id === foundUser.id && task.project_id === projectID);
      setTasks(userTasks);
    }
  }, [username, projectID]);

  return tasks;
};
