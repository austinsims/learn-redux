import {connect} from 'react-redux';
import {history} from '../store';
import {Link, BrowserRouter, Route} from 'react-router-dom';
import PhotoGrid from './PhotoGrid';
import React from 'react';
import Single from './Single';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <h1><Link to="/">Reduxtagram</Link></h1>
          <Route exact path="/" component={PhotoGrid} />
          <Route path="/view/:photoId" component={Single} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;