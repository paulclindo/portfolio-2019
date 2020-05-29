import React from 'react';
import { render } from 'react-dom';
import App from './App';

const root = document.getElementById('app');

if (!root) {
  throw new Error('Missing root element');
}
render(<App />, root);
