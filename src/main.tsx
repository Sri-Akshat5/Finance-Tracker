import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store.ts';
import './index.css'
import App from './App.tsx'
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
