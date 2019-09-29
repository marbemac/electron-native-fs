import * as React from 'react';
import { useOvermind } from '../overmind';
import { Project } from './Project';

export const Projects = () => {
  const { state } = useOvermind();

  return (
    <div>
      {state.projects.projectsList.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};
