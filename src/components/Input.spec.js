import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';

it('Input : renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input>Please Submit</Input>, div);
});
