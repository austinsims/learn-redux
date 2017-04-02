/**
 * @param {?Object<!Array<Object>>} state Object where keys are postId,
 *     and values are an array of comment objects (strings user and comment)
 * @param {*} action 
 */
export default function comments(state = {}, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return addComment(state, action.postId, action.user, action.text);
    case 'REMOVE_COMMENT':
      return removeComment(state, action.postId, action.index);
    default:
      return state;
  }
}

function addComment(state = {}, postId, user, text) {
  let commentsOnPost = Array.from(state[postId] || []);
  commentsOnPost = [...commentsOnPost, {postId, user, text}];
  const newState = {...state, [postId]: commentsOnPost};
  return newState;
}

function removeComment(state = {}, postId, indexToRemove) {
  console.log('remove comment');
  let commentsOnPost = Array.from(state[postId] || []);
  commentsOnPost =
      commentsOnPost.filter((comment, index) => index !== indexToRemove);
  const newState = {...state, [postId]: commentsOnPost};
  return newState;
}