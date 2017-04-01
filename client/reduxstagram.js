import {Provider} from 'react-redux';
import {render} from 'react-dom';
import css from './styles.css';
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import React from 'react';
import Single from './components/Single';
import store from './store';

const router = (
  <Provider store={store}>
    <Main />
  </Provider>
);

const rootEl = document.getElementById('root');
render(router, rootEl);
