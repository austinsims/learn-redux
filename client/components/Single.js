import React from 'react';
import Photo from './Photo';
import {connect} from 'react-redux'

function Single({
    // Provided by parent Route component.
    match,
    // Provided by connect.
    posts}) {
  const postId = match.params.postId;
  const post = posts.find(post => post.postId === postId);
  return (<div className="single-photo">
    <Photo post={post} />
  </div>);
}

export default connect(
  state => ({posts: state.posts}),
)(Single);