import React from 'react';
import { createRoot } from 'react-dom/client'; // Importação correta para React 18
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext'; // Verifica se o caminho está correto
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);