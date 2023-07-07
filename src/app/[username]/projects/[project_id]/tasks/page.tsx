'use client';

import { FC } from 'react';
import { useUser } from '../../../../hooks/useUser';
import { useUserProjectTasks } from '../../../../hooks/useUserProjectTasks';

const Tasks: FC = () => {
  const user = useUser();
  const tasks = useUserProjectTasks();

  if (!user) {
    return <div>User not found.</div>;
  }

  if (!tasks || tasks.length === 0) {
    return <div>Tasks not found.</div>;
  }

  return (
    <div>
      <h1>Project Tasks</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>Task ID: {task.id}</p>
          <p>Title: {task.title}</p>
          <p>Bio: {task.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;