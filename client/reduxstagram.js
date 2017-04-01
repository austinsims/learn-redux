import {Link, BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import css from './styles.css';
import PhotoGrid from './components/PhotoGrid';
import React from 'react';
import Single from './components/Single';
import store, {history} from './store';
import App from './components/App';

const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
);

const rootEl = document.getElementById('root');
render(router, rootEl);
