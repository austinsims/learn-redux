import {connect} from 'react-redux'
import Comments from './Comments';
import Photo from './Photo';
import React from 'react';

function Single({
    // Provided by parent Route component.
    match,
    // Provided by connect.
    posts,
    comments}) {
  const postId = match.params.postId;
  const post = posts.find(post => post.postId === postId);
  const commentsOnPost = comments[postId] || [];
  return (<div className="single-photo">
    <Photo post={post} />
    <Comments comments={commentsOnPost} />
  </div>);
}

export default connect(
  state => ({
    posts: state.posts,
    comments: state.comments,
  }),
)(Single);