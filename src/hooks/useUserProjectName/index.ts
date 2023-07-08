import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import userData from '../../app/[username]/data.json';

export const useUserProjectName = () => {
  const pathname = usePathname();
  const projectID = Number(pathname.split('/')[3]);

  const [projectName, setProjectName] = useState<string | null>(null);

  useEffect(() => {
    const foundProject = userData.projects.find((project) => project.id === projectID);
    if (foundProject) {
      setProjectName(foundProject.name);
    }
  }, [projectID]);

  return projectName;
};
