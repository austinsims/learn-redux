import React from 'react';
import {Link} from 'react-router-dom';

function Photo({post}) {
  return (<figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={'/view/' + post.postId}>
        <img src={post.display_src} alt={post.caption} />
      </Link>
    </div>
    <figcaption>
      <p>{post.caption}</p>
    </figcaption>
  </figure>);
}

export default Photo;