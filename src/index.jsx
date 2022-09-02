import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { Heading } from './components/Heading';
import Home from './templates/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Heading>Oi</Heading>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
