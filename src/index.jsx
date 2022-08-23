import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles';
import App from './templates/App';
import { theme } from './styles/theme';
import { Heading } from './components/Heading';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Heading>Oi</Heading>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
