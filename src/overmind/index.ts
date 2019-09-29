import { IConfig } from 'overmind';
import { createHook } from 'overmind-react';
import { merge, namespaced } from 'overmind/config';
import { onInitialize } from './onInitialize';
import * as projects from './projects';

export const config = merge(
  {
    onInitialize,
  },
  namespaced({
    projects,
  }),
);

export const useOvermind = createHook<typeof config>();

// For explicit typing check the Typescript guide
declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}
