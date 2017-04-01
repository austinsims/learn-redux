import React from 'react';
import {Link} from 'react-router-dom';

function Photo({post, commentCount}) {
  return (<figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={'/view/' + post.postId}>
        <img src={post.display_src} alt={post.caption} />
      </Link>
    </div>
    <figcaption>
      <p>{post.caption}</p>
      <div className="control-buttons">
        <button className="likes">&hearts; {post.likes}</button>
        <Link className="button" to={'/view/' + post.postId}>
          <span className="comment-count">
            <span className="speech-bubble"></span>
            {commentCount}
          </span>
        </Link>
      </div>
    </figcaption>
  </figure>);
}

export default Photo;