import React from 'react';
import {Link} from 'react-router-dom';

class PhotoGrid extends React.Component {
  render() {
    return (<div className="photo-grid">
      <p>I'm the photo grid</p>
      <p><Link to="/view/asdf">view asdf photo</Link></p>
    </div>);
  }
}

export default PhotoGrid;