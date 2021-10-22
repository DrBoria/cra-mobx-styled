import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import makeInspectable from 'mobx-devtools-mst';

import ThemeProviderWrapper from 'styles/ThemeProviderWrapper';

import { StoreProvider, rootStore } from './rootStore';

import './index.css';

makeInspectable(rootStore);

const render = () => {
  // eslint-disable-next-line global-require
  const AppRoutes = require('routes').default;

  ReactDOM.render(
    <ThemeProviderWrapper>
      <StoreProvider value={rootStore}>
        <Router>
          <AppRoutes />
        </Router>
      </StoreProvider>
    </ThemeProviderWrapper>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('routes', render);
}
