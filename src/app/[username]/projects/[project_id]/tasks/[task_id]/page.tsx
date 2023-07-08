'use client';

import { FC } from 'react';
import { useUser } from '../../../../../../hooks/useUser';
// TODO: 現状、他人のタスクが見れる
import { useUserProjectTask } from '../../../../../../hooks/useUserProjectTask';
import { useUserProjectTaskTitle } from '../../../../../../hooks/useUserProjectTaskTitle';

const TaskShow: FC = () => {
  const user = useUser();
  const task = useUserProjectTask();
  const taskTitle = useUserProjectTaskTitle();

  if (!user) {
    return <div>User not found.</div>;
  }

  if (!task) {
    return <div>Task not found.</div>;
  }

  return (
    <div>
      <h1>{taskTitle}</h1>
      <p>Task ID: {task.id}</p>
      <p>Task Title: {task.title}</p>
      <p>Task Content: {task.content}</p>
    </div>
  );
};

export default TaskShow;