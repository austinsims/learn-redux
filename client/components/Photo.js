import {connect} from 'react-redux';
import {incrementLikes} from '../actions/actionCreators';
import {Link} from 'react-router-dom';
import React from 'react';

function Photo({post, commentCount, incrementLikes}) {
  return (<figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={'/view/' + post.postId}>
        <img src={post.display_src} alt={post.caption} />
      </Link>
    </div>
    <figcaption>
      <p>{post.caption}</p>
      <div className="control-buttons">
        <button className="likes"
                onClick={() => incrementLikes(post.postId)}>
          &hearts; {post.likes}
        </button>
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

export default connect(
  undefined /* mapStateToProps */,
  dispatch => ({
    incrementLikes: photoId => dispatch(incrementLikes(photoId)),
  })
)(Photo);