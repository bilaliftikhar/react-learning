import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import { GlobalStyle } from './ui/GlobalStyle';
import { ProtectedRoutes, PublicRoutes } from './routes';
import { Auth } from './services/auth';
const app = document.getElementById('root');

render(
  <Provider store={store} >
    <GlobalStyle />
    <Router>
      <PublicRoutes />
      <ProtectedRoutes authented={Auth} />
    </Router>
  </Provider>
  , app);
