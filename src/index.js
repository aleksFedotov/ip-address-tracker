import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TrackerContextProvider from './store/TrackerContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <TrackerContextProvider>
      <App />
    </TrackerContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
