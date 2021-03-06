// increment
export function incrementLikes(postId) {
  return {
    type: 'INCREMENT_LIKES',
    postId,
  };
}

// add comment
export function addComment(postId, user, text) {
  return {
    type: 'ADD_COMMENT',
    postId,
    user,
    text,
  };
}

// remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId,
  }
}