'use client';

import { FC, useState, useEffect } from 'react';
import { useUser } from '../../../../../hooks/useUser';
import { useUserProject } from '../../../../../hooks/useUserProject';

const ProjectEdit: FC = () => {
  const user = useUser();
  const project = useUserProject();

  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (project) {
      setName(project.name);
    }
  }, [project]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') {
      setErrorMessage('Project name is required.');
    } else {
      // プロジェクト編集処理
      console.log('Form submitted:', { name });
      setName('');
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
      <h1>Project Edit</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Project Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
};

export default ProjectEdit;
