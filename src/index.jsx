import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
