import React, { PropTypes } from 'react';
import '../styles/App.css';

const App = ({ children }) => (
  <div className="App">
    <div className="App-header">
      <h2>Welcome to ReactJSs</h2>
      <img src="/public/images/logo.svg" className="App-logo" alt="logo" />
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>{ children }</p>
  </div>
);

App.propTypes = {
  children: PropTypes.string.isRequired,
};

export default App;
