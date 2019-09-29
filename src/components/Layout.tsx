import * as React from 'react';
import { useOvermind } from '../overmind';
import { Projects } from './Projects';

export const Layout = () => {
  const { actions } = useOvermind();

  // const [tree, updateTree] = React.useState([]);
  // const [contents, updateContents] = React.useState('file contents will show here after reading...');

  // const readFile = React.useCallback(
  //   async () => {
  //     // @ts-ignore
  //     const projectDirectory = await window.chooseFileSystemEntries({ type: 'openDirectory' });
  //     const tree = await walkTree(projectDirectory);
  //   },
  //   [updateEntries],
  // );

  return (
    <div>
      <h1>Hello There!</h1>
      <button onClick={actions.projects.openProjectFolder}>Open Project Folder</button>

      <Projects />
    </div>
  );
};
