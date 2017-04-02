import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';
import Photo from './Photo';

function PhotoGrid({posts}) {
  return (<div className="photo-grid">
    {
      Array.from(posts)
        .sort((left, right) => left.index - right.index)
        .map((post, i) => {
          return <Photo post={post} key={i} />
        })
    }
  </div>);
}

export default connect(state => ({
  posts: state.posts,
}))(PhotoGrid);