import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';
import Photo from './Photo';

function PhotoGrid({posts, comments}) {
  return (<div className="photo-grid">
    {
      Array.from(posts)
        .sort((left, right) => left.index - right.index)
        .map((post, i) => {
          const commentsOnPost = comments[post.postId] || [];
          const commentCount = commentsOnPost.length;
          return <Photo post={post} commentCount={commentCount} key={i} />
        })
    }
  </div>);
}

export default connect(state => ({
  posts: state.posts,
  comments: state.comments,
}))(PhotoGrid);