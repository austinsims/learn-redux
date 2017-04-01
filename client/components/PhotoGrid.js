import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';
import Photo from './Photo';

function PhotoGrid({posts}) {
  return (<div className="photo-grid">
    {posts.map((post, i) => <Photo post={post} key={i} />)}
  </div>);
}

export default connect(state => ({posts: state.posts}))(PhotoGrid);