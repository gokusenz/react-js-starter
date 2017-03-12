import React, { PropTypes } from 'react';

const Input = ({ children }) => (
  <div className="App">
    <p>
      username
      <input type="text" />
    </p>
    <p>
      password
      <input type="password" />
    </p>
    { children }
  </div>
);

Input.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Input;
