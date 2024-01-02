import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { theme, GlobalStyle } from 'components/GlobalStyled';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
