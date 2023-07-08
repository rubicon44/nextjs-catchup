import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import userData from '../../app/[username]/data.json';

export const useUserProjectTask = () => {
  const pathname = usePathname();
  const taskID = Number(pathname.split('/')[5]);

  const [task, setTask] = useState<{ id: number; title: string; content: string } | null>(null);

  useEffect(() => {
    const foundTask = userData.tasks.find((task) => task.id === taskID);
    if (foundTask) {
      setTask(foundTask);
    }
  }, [taskID]);

  return task;
};
