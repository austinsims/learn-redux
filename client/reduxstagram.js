import {render} from 'react-dom';
import css from './styles.css';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const router = (
  <BrowserRouter history={createBrowserHistory()}>
    <div>
      <h1><Link to="/">Reduxtagram</Link></h1>
      <Route exact path="/" component={PhotoGrid} />
      <Route path="/view/:photoId" component={Single} />
    </div>
  </BrowserRouter>
);

const rootEl = document.getElementById('root');
render(router, rootEl);
