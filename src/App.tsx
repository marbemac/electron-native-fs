import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import * as React from 'react';
import { render } from 'react-dom';
import { Layout } from './components/Layout';
import { config } from './overmind';

const overmind = createOvermind(config, { devtools: true });

export function mount(RootApp: React.FunctionComponent) {
  render(
    <Provider value={overmind}>
      <RootApp />
    </Provider>,
    document.getElementById('root'),
  );
}

mount(Layout);
