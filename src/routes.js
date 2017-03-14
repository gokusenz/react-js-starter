import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import Form from './components/Form';
import Api from './containers/ShowApi';

const routes = (
  <Route path="/">
    <IndexRedirect to="/app" />
    <Route path="app" component={() => <App>Test</App>} />
    <Route path="test" component={App} />
    <Route path="form" component={Form} />
    <Route path="api" component={Api} />
  </Route>
);

export default routes;
