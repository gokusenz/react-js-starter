import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';

const routes = (
  <Route path="/">
    <IndexRedirect to="/app" />
    <Route path="app" component={() => <App>Test</App>} />
    <Route path="test" component={App} />
  </Route>
);

export default routes;
