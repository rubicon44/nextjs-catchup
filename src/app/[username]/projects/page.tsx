'use client';

import { FC } from 'react';
import { useUser } from '../../../hooks/useUser';
import { useUserProjects } from '../../../hooks/useUserProjects';

const Projects: FC = () => {
  const user = useUser();
  const projects = useUserProjects();

  if (!user) {
    return <div>User not found.</div>;
  }

  if (!projects || projects.length === 0) {
    return <div>Projects not found.</div>;
  }

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <p>Project ID: {project.id}</p>
          <p>Project Name: {project.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
