import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import userData from '../../app/[username]/data.json';

export const useUserProjectTaskTitle = () => {
  const pathname = usePathname();
  const taskID = Number(pathname.split('/')[5]);

  const [taskTitle, setTaskTitle] = useState<string | null>(null);

  useEffect(() => {
    const foundTask = userData.tasks.find((task) => task.id === taskID);
    if (foundTask) {
      setTaskTitle(foundTask.title);
    }
  }, [taskID]);

  return taskTitle;
};
