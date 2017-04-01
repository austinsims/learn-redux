import {Link, BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import css from './styles.css';
import PhotoGrid from './components/PhotoGrid';
import React from 'react';
import Single from './components/Single';
import store, {history} from './store';

const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div>
        <h1><Link to="/">Reduxtagram</Link></h1>
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/view/:photoId" component={Single} />
      </div>
    </BrowserRouter>
  </Provider>
);

const rootEl = document.getElementById('root');
render(router, rootEl);
