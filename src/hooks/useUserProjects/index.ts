import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import userData from '../../app/[username]/data.json';

export const useUserProjects = () => {
  const pathname = usePathname();
  const username = pathname.split('/')[1];

  // TODO: any
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const foundUser = userData.users.find((user) => user.username === username);
    if (foundUser) {
      const userProjects = userData.projects.filter((project) => project.user_id === foundUser.id);
      setProjects(userProjects);
    } else {
      setProjects([]);
    }
  }, [username]);

  return projects;
};
