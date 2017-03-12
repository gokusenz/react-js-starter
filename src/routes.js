import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import Form from './components/Form';

const routes = (
  <Route path="/">
    <IndexRedirect to="/app" />
    <Route path="app" component={() => <App>Test</App>} />
    <Route path="test" component={App} />
    <Route path="form" component={Form} />
  </Route>
);

export default routes;
