import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WeaterProvider from './context/WeaterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeaterProvider>
      <App />
    </WeaterProvider>
  </React.StrictMode>
);