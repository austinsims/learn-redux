import React from 'react';

function Photo({post}) {
  return (<figure className = "grid-figure">
    Post ID: {post.postId}
  </figure>);
}

export default Photo;