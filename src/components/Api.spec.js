import React from 'react';
import ReactDOM from 'react-dom';
import Api from './Api';

it('Api : renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Api result="test" />, div);
});
