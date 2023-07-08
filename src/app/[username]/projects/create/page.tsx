'use client';

import { FC, useState } from 'react';
import { useUser } from '../../../../hooks/useUser';

const ProjectCreate: FC = () => {
  const user = useUser();

  const [projectName, setProjectName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォームのデータを送信する処理を実装する
    // 例: APIリクエストを行うなど
    if (projectName.trim() === '') {
      setErrorMessage('Project name is required.');
    } else {
      // プロジェクト作成処理
      console.log('Form submitted:', { projectName });
      // フォーム送信後にフォームをリセットする
      setProjectName('');
      setErrorMessage('');
    }
  };

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div>
      <h1>Project Create</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default ProjectCreate;
