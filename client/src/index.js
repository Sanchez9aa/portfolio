import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkProvider } from './context';


ReactDOM.render(
  <React.StrictMode>
    <DarkProvider>
      <App />
    </DarkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

