import { Derive } from 'overmind';
import { Entry, NFSEntry } from '../../utils/fs';

export type Project = {
  id: string;
  name: string;
  entries: Entry[];
  nfsHandle?: NFSEntry;
};

export type State = {
  projects: { [id: string]: Project };
  projectsList: Derive<State, Project[]>;
};

export const state: State = {
  projects: {},
  projectsList: ({ projects }) => Object.values(projects),
};
