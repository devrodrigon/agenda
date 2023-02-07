import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/theme/light';
import Providers from './providers';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <Providers>
          <GlobalStyle />
          <App />
          <Toaster position="top-center" />
        </Providers>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
