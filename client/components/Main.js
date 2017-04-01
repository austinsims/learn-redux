import {Link, Route} from 'react-router-dom';
import PhotoGrid from './PhotoGrid';
import React from 'react';
import Single from './Single';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1><Link to="/">Reduxtagram</Link></h1>
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/view/:photoId" component={Single} />
      </div>
    );
  }
}

export default Main;