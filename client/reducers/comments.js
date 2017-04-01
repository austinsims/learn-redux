/**
 * @param {!Object<!Array<Object>>} state Object where keys are postId,
 *     and values are an array of comment objects (strings user and comment)
 * @param {*} action 
 */
export default function comments(state = {}, action) {
  if (action.type !== 'ADD_COMMENT') {
    return state;
  }
  const {postId, user, text} = action;
  let commentsOnPost = state[postId] || [];
  commentsOnPost = [...commentsOnPost, {user, text}];
  console.log('new state: ', {...state, [postId]: commentsOnPost});
  return {...state, postId: commentsOnPost};
}