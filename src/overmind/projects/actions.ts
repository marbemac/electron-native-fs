import { Action, AsyncAction } from 'overmind';
import { NFSEntry, walkTree } from '../../utils/fs';
import { Project } from './state';

export const openProjectFolder: AsyncAction = async ({ actions, state }) => {
  // @ts-ignore chooseFileSystemEntries is not part of official window api yet
  const projectDirectory = await window.chooseFileSystemEntries({ type: 'openDirectory' });

  const project = actions.projects.createProject({
    nfsHandle: projectDirectory,
  });

  await actions.projects.walkProjectTree({ id: project.id });
};

export const createProject: Action<{ nfsHandle?: NFSEntry }, Project> = ({ effects, state }, { nfsHandle }) => {
  const id = effects.projects.ids.create();

  const project: Project = {
    id,
    name: nfsHandle ? nfsHandle.name : 'untitled',
    entries: [],
    nfsHandle,
  };

  state.projects.projects[id] = project;

  return project;
};

export const walkProjectTree: AsyncAction<{ id: string }> = async ({ state }, { id }) => {
  const project = state.projects.projects[id];
  if (project && project.nfsHandle) {
    project.entries = await walkTree(project.nfsHandle);
  }
};
