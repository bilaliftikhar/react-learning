import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import { Routes } from './routes';
import { GlobalStyle } from './ui/global-style';

const app = document.getElementById('root');
render(
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </Provider>, app);
