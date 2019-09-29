import * as React from 'react';
import { useOvermind } from '../overmind';
import { Project as TProject } from '../overmind/projects/state';
import { Entry as TEntry } from '../utils/fs';

type Props = {
  project: TProject;
};

export const Project = ({ project }: Props) => {
  useOvermind();

  return (
    <div>
      <h3>
        {project.name} - {project.id}
      </h3>

      <ProjectEntries entries={project.entries} depth={0} />
    </div>
  );
};

type ProjectEntriesProps = {
  depth: number;
  entries: TEntry[];
};

export const ProjectEntries = ({ entries, depth }: ProjectEntriesProps) => {
  useOvermind();

  return (
    <div>
      {entries.map(entry => (
        <>
          <ProjectEntry key={entry.name} entry={entry} depth={depth} />
          <ProjectEntryChildren entry={entry} depth={depth} />
        </>
      ))}
    </div>
  );
};

export const ProjectEntryChildren = ({ entry, depth }: { entry: TEntry; depth: number }) => {
  useOvermind();

  if (entry.type !== 'directory' || entry.children.length === 0) return null;

  return <ProjectEntries entries={entry.children} depth={depth + 1} />;
};

export const ProjectEntry = ({ entry, depth }: { entry: TEntry; depth: number }) => {
  return <div style={{ paddingLeft: depth * 15 }}>{entry.name}</div>;
};
