import React from 'react';
import ReactDOM from 'react-dom/client';
// Подключаем наши стили. Порядок важен: сначала reset, потом авторский.
import './styles/reset.css';
import './styles/style.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);