import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';

class PhotoGrid extends React.Component {
  render() {
    return (<div className="photo-grid">
      Number of posts: {this.props.posts.length}
    </div>);
  }
}

export default connect(state => ({posts: state.posts}))(PhotoGrid);