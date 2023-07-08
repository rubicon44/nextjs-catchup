'use client';

import { FC } from 'react';
import { useUser } from '../../../../../hooks/useUser';
import { useUserProject } from '../../../../../hooks/useUserProject';
import { useUserProjectName } from '../../../../../hooks/useUserProjectName';
import { useUserProjectTasks } from '../../../../../hooks/useUserProjectTasks';

const Tasks: FC = () => {
  const user = useUser();
  const project = useUserProject();
  const projectName = useUserProjectName();
  const tasks = useUserProjectTasks();

  if (!user) {
    return <div>User not found.</div>;
  }

  if (!project) {
    return <div>Project not found.</div>;
  }

  if (!tasks || tasks.length === 0) {
    return <div>Tasks not found.</div>;
  }

  return (
    <div>
      <h1>{projectName}</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>Task ID: {task.id}</p>
          <p>Title: {task.title}</p>
          <p>Content: {task.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;