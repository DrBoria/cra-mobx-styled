import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DemoPage from 'pages/DemoPage';

export default () => (
  <Route path="/">
    <Switch>
      <Route exact path="/">
        <DemoPage />
      </Route>
    </Switch>
  </Route>
);
