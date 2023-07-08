'use client';

import { FC, useState, useEffect } from 'react';
import { useUser } from '../../../../../../../hooks/useUser';
import { useUserProjectTask } from '../../../../../../../hooks/useUserProjectTask';

const TaskEdit: FC = () => {
  const user = useUser();
  const task = useUserProjectTask();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setContent(task.content);
    }
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォームのデータを送信する処理を実装する
    // 例: APIリクエストを行うなど
    if (title.trim() === '' || content.trim() === '') {
      setErrorMessage('All fields are required.');
    } else {
      // タスク編集処理
      console.log('Form submitted:', { title, content });
      // フォーム送信後にフォームをリセットする
      setErrorMessage('');
    }
  };

  if (!user) {
    return <div>User not found.</div>;
  }

  if (!task) {
    return <div>Task not found.</div>;
  }

  return (
    <div>
      <h1>Task Edit</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default TaskEdit;
