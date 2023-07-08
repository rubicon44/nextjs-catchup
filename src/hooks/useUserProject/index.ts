import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import userData from '../../app/[username]/data.json';

export const useUserProject = () => {
  const pathname = usePathname();
  const username = pathname.split('/')[1];
  const projectID = Number(pathname.split('/')[3]);

  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const foundUser = userData.users.find((user) => user.username === username);
    if (foundUser) {
      const foundProject = userData.projects.find((project) => project.id === projectID && project.user_id === foundUser.id);
      if (foundProject) {
        setProject(foundProject);
      } else {
        setProject(null);
      }
    } else {
      setProject(null);
    }
  }, [username, projectID]);

  return project;
};
