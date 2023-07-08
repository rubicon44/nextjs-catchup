'use client';

import { FC, useState } from 'react';
import { useUser } from '../../../../../../hooks/useUser';
import { useUserProject } from '../../../../../../hooks/useUserProject';

const TaskCreate: FC = () => {
  const user = useUser();
  const project = useUserProject();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォームのデータを送信する処理を実装する
    // 例: APIリクエストを行うなど
    if (title.trim() === '' || content.trim() === '') {
      setErrorMessage('Title and Content are required.');
    } else {
      // タスク作成処理
      console.log('Form submitted:', { title, content });
      // フォーム送信後にフォームをリセットする
      setTitle('');
      setContent('');
      setErrorMessage('');
    }
  };

  if (!user) {
    return <div>User not found.</div>;
  }

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div>
      <h1>Task Create</h1>
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
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskCreate;
