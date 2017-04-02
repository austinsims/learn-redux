/**
 * @param {?Object<!Array<Object>>} state Object where keys are postId,
 *     and values are an array of comment objects (strings user and comment)
 * @param {*} action 
 */
export default function comments(state = {}, action) {
  if (action.type !== 'ADD_COMMENT') {
    return state;
  }

  const {postId, user, text} = action;
  let commentsOnPost = Array.from(state[postId] || []);
  commentsOnPost = [...commentsOnPost, {postId, user, text}];
  const newState = {...state, [postId]: commentsOnPost};
  return newState;
}