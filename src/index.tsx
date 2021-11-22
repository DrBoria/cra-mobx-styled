import makeInspectable from 'mobx-devtools-mst';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Alerts from 'sections/AlertsSection';

import ThemeProviderWrapper from 'styles/ThemeProviderWrapper';

import './index.css';
import { StoreProvider, rootStore } from './rootStore';

makeInspectable(rootStore);

const render = () => {
  // Fix for hot module replacement working properly
  /* eslint @typescript-eslint/no-var-requires: "off" */
  /* eslint @typescript-eslint/naming-convention: "off" */
  /* eslint unicorn/prefer-module: "off" */
  const AppRoutes = require('routes').default;

  ReactDOM.render(
    <ThemeProviderWrapper>
      <StoreProvider value={rootStore}>
        <Router>
          <AppRoutes />
        </Router>
        <Alerts />
      </StoreProvider>
    </ThemeProviderWrapper>,
    document.querySelector('#root')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('routes', render);
}
