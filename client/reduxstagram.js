import {Provider} from 'react-redux';
import {render} from 'react-dom';
import css from './styles.css';
import PhotoGrid from './components/PhotoGrid';
import React from 'react';
import Single from './components/Single';
import store from './store';
import App from './components/App';

const router = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootEl = document.getElementById('root');
render(router, rootEl);
