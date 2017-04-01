import React from 'react';
import {Link} from 'react-router-dom';

function Photo({post}) {
  return (<figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={'/view/' + post.postId}>
        {post.caption}
      </Link>
    </div>
  </figure>);
}

export default Photo;