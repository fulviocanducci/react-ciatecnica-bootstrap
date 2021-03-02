import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import UsersContextProvider from './contexts/UsersContext';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <UsersContextProvider>
    <App />
  </UsersContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
